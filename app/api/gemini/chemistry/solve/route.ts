import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { 
  validateImageFiles, 
  processImageFiles, 
  processGeminiResponse 
} from "@/lib/gemini-utils";
import { CHEMISTRY_SOLVER_SYSTEM_INSTRUCTION } from "@/lib/chemistry/prompts";
import type { ChemistrySolverResponse, ApiErrorResponse } from "@/types/chemistry";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request): Promise<NextResponse<ChemistrySolverResponse | ApiErrorResponse>> {
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
    const files = formData.getAll("files");

    // Validate and process files
    const validatedFiles = validateImageFiles(files);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: CHEMISTRY_SOLVER_SYSTEM_INSTRUCTION,
    });

    // Process image files
    const images = await processImageFiles(validatedFiles);

    const result = await model.generateContent([
      "Solve all the chemistry problems in the provided images step by step.",
      ...images,
    ]);

    const response = await result.response;
    const generatedContent = response.text();

    // Process and parse the response
    const parsedContent = processGeminiResponse(generatedContent);

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