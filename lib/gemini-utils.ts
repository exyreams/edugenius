/**
 * Shared utilities for Gemini API responses
 */

export const removeMarkdownCodeBlocks = (content: string): string => {
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

export const sanitizeJSON = (content: string): string => {
  return content
    .replace(/\\/g, "\\\\")
    .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    .replace(/\/\*.*?\*\//g, "")
    .replace(/'/g, '"');
};

export const extractValidJSON = (text: string) => {
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

export const processGeminiResponse = (generatedContent: string) => {
  const cleanContent = removeMarkdownCodeBlocks(generatedContent);
  const sanitizedContent = sanitizeJSON(cleanContent);
  
  if (process.env.NODE_ENV === "development") {
    console.log("Processing steps:");
    console.log("Raw response:", generatedContent);
    console.log("Cleaned content:", cleanContent);
    console.log("Sanitized content:", sanitizedContent);
  }
  
  return extractValidJSON(sanitizedContent);
};

/**
 * File validation utilities
 */
export const ALLOWED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/heic",
  "image/heif",
] as const;

export const validateImageFiles = (files: FormDataEntryValue[]): File[] => {
  if (!files || files.length === 0) {
    throw new Error("No files provided");
  }

  if (files.length > 10) {
    throw new Error("Too many files. Maximum 10 files allowed");
  }

  const validFiles: File[] = [];
  const maxFileSize = 10 * 1024 * 1024; // 10MB
  
  for (const file of files) {
    if (typeof file === "string") {
      throw new Error("Invalid file format");
    }
    
    if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
      throw new Error(`Unsupported file type: ${file.type}`);
    }

    if (file.size > maxFileSize) {
      throw new Error(`File too large: ${file.name}. Maximum size is 10MB`);
    }
    
    validFiles.push(file);
  }
  
  return validFiles;
};

export const processImageFiles = async (files: File[]) => {
  const imagePromises = files.map(async (file) => {
    const bytes = await file.arrayBuffer();
    const imageBuffer = Buffer.from(bytes);
    return {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: file.type,
      },
    };
  });

  return Promise.all(imagePromises);
};