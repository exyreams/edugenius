import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Enhanced JSON cleaning utilities
const removeMarkdownCodeBlocks = (content: string): string => {
  return content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\n/g, " ")
    .replace(/\\\\/g, "\\")
    .replace(/\s+/g, " ")
    .trim();
};

const sanitizeJSON = (content: string): string => {
  return content
    .replace(/\\/g, "\\\\")
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    .replace(/\/\*.*?\*\//g, "")
    .replace(/'/g, '"');
};

const extractValidJSON = (text: string) => {
  try {
    return JSON.parse(text);
  } catch (initialError) {
    const jsonMatch = text.match(/{[\s\S]*}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch (extractError) {
        const repaired = jsonMatch[0]
          .replace(/(\w+):/g, '"$1":')
          .replace(/,\s*}/g, "}");
        return JSON.parse(repaired);
      }
    }
    throw new Error("No valid JSON structure found");
  }
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const allowedMimeTypes = [
      "image/png",
      "image/jpeg",
      "image/webp",
      "image/heic",
      "image/heif",
    ];

    // Validate file types
    for (const file of files) {
      if (typeof file === "string" || !allowedMimeTypes.includes(file.type)) {
        return NextResponse.json(
          { error: "Unsupported file type" },
          { status: 400 },
        );
      }
    }

    const systemInstruction = `You are an expert at solving physics problems. 
    When given one or more images containing physics problems, analyze each image and provide a detailed, step-by-step solution for each problem. 
    Each step should be clearly explained, and **all mathematical formulas, equations, and physical quantities must be written in LaTeX format**. 
    Equations should be written without the surrounding $$ delimiters as they will be wrapped in \\[...\\] by the frontend.

    **Important Rules:**
    1. **Only use LaTeX for mathematical expressions and physics equations.** For example:
       - Correct:  F = ma,  v = \\frac{d}{t},  E = mc^2, \\Delta x = v_0t + \\frac{1}{2}at^2
       - Incorrect: F=ma, v = d/t, E = mc^2, Delta x = v0t + 1/2at^2
    2. **Do not include any plain text mathematical or physics expressions.** All math and physics symbols must be in LaTeX.
    3. **Follow the structured JSON format strictly.**
    4. **Do not include $$ delimiters in the equation field.**
    5. **Provide questions sequentially without using bullet points or numbering even if they are in the image provided. Simply list them as standalone text, even if there are multiple problems.** For example:
       - Correct: 
          F = ma
          // Steps & Solutions for the problem
          v = \\frac{d}{t}
          // Steps & Solutions for the problem
       - Incorrect: 
          1. F = ma
          // Steps & Solutions for the problem
          2. v = d/t
          // Steps & Solutions for the problem
    6. **In the **description**, all text should be presented without LaTeX equations or physics quantities. LaTeX equations should be placed separately in the **descriptionEquation** field.**. Examples are provided below,
      - Correct response methods or examples: 
        a. example 1:
          "description": "We start with Newton's second law ",
          "descriptionEquation": "F = ma and we are given m = 2 and a = 10",
        b. example 2:
          "description": "First, calculate the velocity using",
          "descriptionEquation": "v = \\frac{d}{t} where d= 10m and t = 2s"
        c. example 3:
          "description": "Next, find the change in displacement by using",
          "descriptionEquation": "\\Delta x = v_0t + \\frac{1}{2}at^2, where initial velocity v_0 = 0,  acceleration a = 9.8 and time t = 5"
      - Incorrect response methods or examples:
        a. example 1:
          "description": "We start with Newton's second law F = ma and we are given m = 2 and a = 10",
          "descriptionEquation": "F = ma and we are given m = 2 and a = 10",
        b. example 2:
          "description": "First, calculate the velocity using v = \\frac{d}{t} where d= 10m and t = 2s",
          "descriptionEquation": "v = \\frac{d}{t} where d= 10m and t = 2s"
        c. example 3:
          "description": "Next, find the change in displacement by using \\Delta x = v_0t + \\frac{1}{2}at^2, where initial velocity v_0 = 0,  acceleration a = 9.8 and time t = 5",
          "descriptionEquation": "\\Delta x = v_0t + \\frac{1}{2}at^2, where initial velocity v_0 = 0,  acceleration a = 9.8 and time t = 5"

     7.  **In the final step write answer is ....**

    The response must adhere to the following JSON format:

        {
          "solutions": [
            {
              "problem": "A 2 kg object is under the acceleration of 10 m/s^2, find the force acting on the object",
              "steps": [
                {
                  "id": 1,
                  "description": "We start with Newton's second law ",
                  "descriptionEquation": "F = ma and we are given m = 2 and a = 10",
                  "equation": "F = 2 \\times 10"
                },
                {
                  "id": 2,
                  "description": "Therefore, ",
                  "descriptionEquation": "F = 20 N ",
                  "equation": "F = 20"
                }
                 {
                  "id": 3,
                    "description": "The final answer is ",
                  "descriptionEquation": "The final answer is 20 N.",
                   "equation": "answer is 20 N"
                }
              ]
            }
          ]
        }

    **Respond only with the JSON, without any introductory or concluding remarks.**`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction,
    });

    // Process files
    const imagePromises = files.map(async (file) => {
      if (typeof file === "string") {
        throw new Error("Invalid file type");
      }

      const bytes = await file.arrayBuffer();
      const imageBuffer = Buffer.from(bytes);
      return {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: file.type,
        },
      };
    });

    const images = await Promise.all(imagePromises);

    const result = await model.generateContent([
      "Solve all the mathematics problems in the provided images step by step.",
      ...images,
    ]);

    const response = await result.response;
    const generatedContent = response.text();

    // Enhanced parsing pipeline
    const cleanContent = removeMarkdownCodeBlocks(generatedContent);
    const sanitizedContent = sanitizeJSON(cleanContent);

    console.log("Processing steps:");
    console.log("Raw response:", generatedContent);
    console.log("Cleaned content:", cleanContent);
    console.log("Sanitized content:", sanitizedContent);

    const parsedContent = extractValidJSON(sanitizedContent);

    return NextResponse.json({ generatedContent: parsedContent });
  } catch (error: any) {
    console.error("API Error Stack:", error.stack);
    return NextResponse.json(
      {
        error: error.message || "Failed to process request",
        details:
          process.env.NODE_ENV === "development"
            ? {
                message: error.message,
                stack: error.stack,
                rawResponse: error.rawResponse,
              }
            : null,
      },
      { status: 500 },
    );
  }
}
