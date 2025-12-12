import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { processGeminiResponse } from "@/lib/gemini-utils";
import type { ApiErrorResponse } from "@/types/chemistry";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request): Promise<NextResponse<any | ApiErrorResponse>> {
  try {
    // Validate API key exists
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not configured");
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const difficulty = formData.get("difficulty") as string || "intermediate";
    const questionCount = parseInt(formData.get("questionCount") as string) || 10;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ["text/plain", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Unsupported file type. Only PDF and TXT files are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    let content = "";
    
    if (file.type === "text/plain") {
      content = await file.text();
    } else if (file.type === "application/pdf") {
      // For PDF files, we'll need to implement PDF parsing
      // For now, return an error asking for text files
      return NextResponse.json(
        { error: "PDF parsing not yet implemented. Please use text files." },
        { status: 400 }
      );
    }

    const systemInstruction = `You are an expert chemistry educator. Generate chemistry quiz questions based on the provided content.
    Create questions that test understanding of the chemistry concepts presented in the text.
    
    Format the response as JSON with this structure:
    {
      "quiz": {
        "title": "Chemistry Quiz from Document",
        "description": "Questions based on the provided chemistry content",
        "questions": [
          {
            "id": 1,
            "question": "Question text here",
            "type": "multiple-choice",
            "options": ["option1", "option2", "option3", "option4"],
            "correctAnswer": 0,
            "explanation": "Explanation of the correct answer"
          }
        ]
      }
    }`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction,
    });

    const prompt = `Based on the following chemistry content, generate ${questionCount} quiz questions at ${difficulty} level:

    ${content}

    Create questions that cover the main chemistry concepts, formulas, and principles discussed in the text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedContent = response.text();

    const parsedContent = processGeminiResponse(generatedContent);

    return NextResponse.json({ generatedContent: parsedContent });
  } catch (error: any) {
    console.error("Chemistry from-files API error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate quiz from file",
        details: process.env.NODE_ENV === "development" ? {
          message: error.message,
          stack: error.stack,
        } : null,
      },
      { status: 500 }
    );
  }
}