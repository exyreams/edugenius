import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHEMISTRY_CHALLENGE_SYSTEM_INSTRUCTION } from "@/lib/chemistry/prompts";
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

    const { topic, difficulty, count = 5 } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: CHEMISTRY_CHALLENGE_SYSTEM_INSTRUCTION,
    });

    const prompt = `Generate ${count} challenging chemistry problems about ${topic} at ${difficulty || 'intermediate'} level. 
    Include problems that test conceptual understanding, problem-solving skills, and real-world applications.
    
    Format the response as JSON with this structure:
    {
      "challenges": [
        {
          "id": 1,
          "problem": "Problem statement here",
          "difficulty": "intermediate",
          "topic": "${topic}",
          "hints": ["hint1", "hint2"],
          "solution": "Step-by-step solution"
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedContent = response.text();

    const parsedContent = processGeminiResponse(generatedContent);

    return NextResponse.json({ generatedContent: parsedContent });
  } catch (error: any) {
    console.error("Chemistry challenges API error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate chemistry challenges",
        details: process.env.NODE_ENV === "development" ? {
          message: error.message,
          stack: error.stack,
        } : null,
      },
      { status: 500 }
    );
  }
}