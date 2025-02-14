import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const requestData = await req.json();
    const { fileContent, numQuestions } = requestData;

    if (!fileContent) {
      return NextResponse.json(
        { error: "No file content provided" },
        { status: 400 },
      );
    }

    const systemInstruction = `You are an expert at generating mathematics quizzes from given data. 
    You need to generate ${numQuestions} quiz questions based on user-given text from an uploaded file, options, and the correct answers for them. 
    The response must strictly adhere to a structured JSON format, as detailed below. 
    Ensure the 'options' array contains no duplicate answers and each question has a unique ID. 
    When including mathematical formulas or equations, use LaTeX format for clarity and precision. 
    For example, a quadratic equation should be represented as $$ax^2 + bx + c = 0$$, and fractions should be represented using \\frac{numerator}{denominator}.
    
    **Important Rules:**
    1. **Follow the structured JSON format strictly.**
    2. **Do not include $$ delimiters in the equation field.**
    
    JSON structure must look like:
    
    {
      "questions": [
        {
          "id": 1,
          "questionText": "",
          "options": [], // Use LaTeX for mathematical expressions
          "answer": "" // Correct answer in plain text, matching one of the options
        },
        // ... other questions following similar structures
      ]
    }
    
    Follow the specified JSON format rigorously and avoid including any extraneous information or conversational elements outside of the structured JSON. 
    Respond only with the JSON, without any introductory or concluding remarks.`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction,
    });

    const result = await model.generateContent(fileContent);
    const generatedContent = result.response.text();

    const removeMarkdownCodeBlocks = (content: string): string => {
      return content.replace(/```(json)?/g, "").trim();
    };

    const cleanContent = removeMarkdownCodeBlocks(generatedContent);
    const parsedContent = JSON.parse(cleanContent);

    return NextResponse.json({ generatedContent: parsedContent });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
