import { NextResponse } from "next/server";
import {
  GenerateContentRequest,
  GoogleGenerativeAI,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const requestData = await req.json();
    const { prompt, numQuestions, topic, difficulty } = requestData; // Include 'difficulty'

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 },
      );
    }

    const systemInstruction = `You are an expert at generating mathematical challenge problems. 
    You need to generate math quiz questions, options, and the correct answers for them, and strictly adhere to the specified number of questions as requested by the user. 
    Your response should be exclusively in JSON format. 
    Follow the JSON format rigorously and avoid including any extraneous information or conversational elements outside of the structured JSON. 
    Respond only with the JSON, without any introductory or concluding remarks.
    The user is asking for quiz questions on the topic of ${topic} at ${difficulty} difficulty level. 
    Ensure that the questions, options are appropriate for this difficulty level.
    When including mathematical formulas or equations, use LaTeX format for clarity and precision. 
    For example, a quadratic equation should be represented as $$ax^2 + bx + c = 0$$, and fractions should be represented using \\frac{numerator}{denominator}.
    
    **Important Rules:**
    1. **Follow the structured JSON format strictly.**
    2. **Do not include $$ delimiters in the equation field.**
          
    JSON structure must look like;
          
    {
      "questions": [
          {
              "id": 1,
              "questionText": "Solve for x: 2x + 3 = 7",  // Example problem statement
              "options": ["2", "3", "4", "5"],           // Numerical or formula options depending on the problem
              "answer": "2"                             // Correct answer in plain text, must match one of the options
          },
          // ... other questions following similar structures
      ]
    }`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction,
    });

    // Constructing the request
    const generateContentRequest: GenerateContentRequest = {
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    };

    const result = await model.generateContent(generateContentRequest);
    const generatedContent = result.response.text();

    // Function to remove markdown code block syntax from the generated content
    const removeMarkdownCodeBlocks = (content: string): string => {
      // Remove all occurrences of triple backticks with optional json keyword
      return content.replace(/```(json)?/g, "").trim();
    };

    const cleanContent = removeMarkdownCodeBlocks(generatedContent);
    const parsedContent = JSON.parse(cleanContent);

    return NextResponse.json({ generatedContent: parsedContent });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process request",
        message: error,
      },
      { status: 500 },
    );
  }
}
