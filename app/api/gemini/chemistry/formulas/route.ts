import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHEMISTRY_FORMULA_SYSTEM_INSTRUCTION } from "@/lib/chemistry/prompts";
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

    const { topic, difficulty, count = 10 } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: CHEMISTRY_FORMULA_SYSTEM_INSTRUCTION,
    });

    const prompt = `Generate ${count} formula-based chemistry quiz questions about ${topic} at ${difficulty || 'intermediate'} level.
    Include questions about chemical formulas, equations, calculations, and nomenclature.
    
    Format the response as JSON with this structure:
    {
      "quiz": {
        "title": "Chemistry Formulas: ${topic}",
        "description": "Test your knowledge of chemical formulas and equations",
        "questions": [
          {
            "id": 1,
            "question": "What is the molecular formula for glucose?",
            "type": "multiple-choice",
            "options": ["C6H12O6", "C12H22O11", "C2H6O", "CH4"],
            "correctAnswer": 0,
            "explanation": "Glucose has the molecular formula C6H12O6"
          }
        ]
      }
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedContent = response.text();

    const parsedContent = processGeminiResponse(generatedContent);

    return NextResponse.json({ generatedContent: parsedContent });
  } catch (error: any) {
    console.error("Chemistry formulas API error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate chemistry formula quiz",
        details: process.env.NODE_ENV === "development" ? {
          message: error.message,
          stack: error.stack,
        } : null,
      },
      { status: 500 }
    );
  }
}