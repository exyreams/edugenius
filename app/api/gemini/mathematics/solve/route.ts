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

    const systemInstruction = `You are an expert at solving mathematics problems. 
    When given one or more images containing mathematics problems, analyze each image and provide a detailed, step-by-step solution for each problem. 
    Each step should be clearly explained, and **all mathematical formulas or equations must be written in LaTeX format**. 
    Equations should be written without the surrounding $$ delimiters as they will be wrapped in \\[...\\] by the frontend.

    **Important Rules:**
    1. **Only use LaTeX for mathematical expressions.** For example:
       - Correct: x = \\frac{-b}{2a}
       - Incorrect: x = (-b)/(2a)
    2. **Do not include any plain text mathematical expressions.** All math must be in LaTeX.
    3. **Follow the structured JSON format strictly.**
    4. **Do not include $$ delimiters in the equation field.**
    5. **Provide questions sequentially without using bullet points or numbering even if they are in the image provided. Simply list them as standalone text, even if there are multiple problems.** For example:
       - Correct: 
          x = \\frac{-b}{2a}
          // Steps & Solutions for the problem
          \\beta = \\frac{1}{2}
          // Steps & Solutions for the problem
       - Incorrect: 
          1. x = (-b)/(2a)
          // Steps & Solutions for the problem
          2. \\beta = \\frac{1}{2}
          // Steps & Solutions for the problem
    6. **In the **description**, all text should be presented without LaTeX equations. LaTeX equations should be placed separately in the **descriptionEquation** field.**. Examples are provided below,
      - Correct response methods or examples: 
        a. example 1:
          "description": "We start with ",
          "descriptionEquation": "\\beta = \\frac{1}{2} and multiply it by \\pi",
        b. example 2:
          "description": "First, calculate the area of the circle",
          "descriptionEquation": "A = \\pi r^2 where r = 5"
        c. example 3:
          "description": "Next, find the derivative of the function",
          "descriptionEquation": "f'(x) = 2x + 3 \\\\text{ for } f(x) = x^2 + 3x + 7"
      - Incorrect response methods or examples:
        a. example 1:
          "description": "We start with \\beta = \\frac{1}{2} and multiply it by \\pi",
          "descriptionEquation": "\\beta = \\frac{1}{2} and multiply it by \\pi",
        b. example 2:
          "description": "First, calculate the area of the circle A = \\pi r^2 where r = 5",
          "descriptionEquation": "A = \\pi r^2 where r = 5"
        c. example 3:
          "description": "Next, find the derivative of the function f'(x) = 2x + 3 \\\\text{ for } f(x) = x^2 + 3x + 7",
          "descriptionEquation": "f'(x) = 2x + 3 \\\\text{ for } f(x) = x^2 + 3x + 7"
    7. **In the final step write answer is ....**      

    The response must adhere to the following JSON format:

        {
          "solutions": [
            {
              "problem": "Find the value of \\alpha when \\beta = \\frac{1}{2}",
              "steps": [
                {
                  "id": 1,
                  "description": "We start with ",
                  "descriptionEquation": "\\beta = \\frac{1}{2} and multiply it by \\pi",
                  "equation": "\\alpha = \\beta \\cdot \\pi = \\frac{1}{2} \\cdot \\pi"
                },
                {
                  "id": 2,
                  "description": "Therefore, ",
                  "descriptionEquation": "\\alpha = \\frac{\\pi}{2}",
                  "equation": "\\alpha = \\frac{\\pi}{2}"
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
