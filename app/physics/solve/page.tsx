// noinspection ExceptionCaughtLocallyJS,JSUnresolvedLibraryURL

"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";
import "katex/dist/katex.min.css";
import {
  BlockMath as KatexBlockMath,
  InlineMath as KatexInlineMath,
} from "react-katex";

import { Download, FileText, Images, Upload as UploadIcon } from "lucide-react";
import { toast } from "sonner";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Loader from "@/components/quiz/Loader";
import ColorToggle from "@/components/ColorToggle";
import {
  equationsBgColors,
  problemBgColors,
  stepsBgColors,
} from "./utils/colors";
import { jsPDF } from "jspdf";

interface Step {
  id: number;
  description: string;
  descriptionEquation: string;
  equation?: string;
}

interface ProblemSolution {
  problem: string;
  steps: Step[];
}

interface KatexEquationProps {
  equation: string;
  problem: string;
  className?: string;
}

const InlineMath = ({
  math,
  style,
}: {
  math: string;
  style?: React.CSSProperties;
}) => {
  return (
    <span style={style}>
      <KatexInlineMath math={math} />
    </span>
  );
};

const BlockMath = ({
  math,
  style,
}: {
  math: string;
  style?: React.CSSProperties;
}) => {
  return (
    <span style={style}>
      <KatexBlockMath math={math} />
    </span>
  );
};

const responseSchema = z.object({
  generatedContent: z.object({
    solutions: z.array(
      z.object({
        problem: z.string(),
        steps: z.array(
          z.object({
            id: z.number(),
            description: z.string(),
            descriptionEquation: z.string(),
            equation: z.string().optional(),
          }),
        ),
      }),
    ),
  }),
});

const renderTextWithLatex = (text: string) => {
  const segments = text.split(/`(.*?)`/g);
  return segments.map((segment, index) => {
    if (index % 2 === 1) {
      // Render as inline math
      return <InlineMath key={index} math={`\\(${segment}\\)`} />;
    }
    return <span key={index}>{segment}</span>;
  });
};

const KatexProblem = ({ problem, className = "" }: KatexEquationProps) => {
  // Function to render a problem using Katex
  return (
    <span className={className}>
      <InlineMath math={problem} />
    </span>
  );
};

const KatexEquation = ({ equation }: KatexEquationProps) => {
  try {
    let mathElement;
    if (equation.startsWith("$$") && equation.endsWith("$$")) {
      mathElement = <BlockMath math={equation.slice(2, -2)} />;
    } else if (equation.startsWith("$") && equation.endsWith("$")) {
      mathElement = <InlineMath math={equation.slice(1, -1)} />;
    } else {
      mathElement = <InlineMath math={equation} />;
    }
    return mathElement;
  } catch {
    return <span className="text-red-500">Invalid equation: {equation}</span>;
  }
};

const Solve = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [solutions, setSolutions] = useState<ProblemSolution[]>([]);
  const [openSteps, setOpenSteps] = useState<number[]>([]);
  const [showSteps, setShowSteps] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<{
    message: string;
    retry?: () => void;
  } | null>(null);
  const [exportLoading, setExportLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isColorful, setIsColorful] = useState(true);

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024,
    );

    const invalidFiles = files.filter(
      (file) => !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024,
    );

    if (invalidFiles.length > 0) {
      toast.error(
        `Couldn't upload ${invalidFiles.length} file(s). Only images under 5MB are accepted.`,
      );
    }

    const existingNames = new Set(uploadedFiles.map((f) => f.name));
    const newFiles = validFiles.filter((f) => !existingNames.has(f.name));

    if (newFiles.length < validFiles.length) {
      toast.error("Some duplicate files were skipped");
    }

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSolveProblem = async () => {
    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one file.");
      return;
    }

    setIsLoading(true);
    setSolutions([]);
    setError(null);

    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/gemini/physics/solve", {
        // Changed the API endpoint
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to solve the problems");
      }

      const data = await response.json();
      const validationResult = responseSchema.safeParse(data);

      if (!validationResult.success) {
        console.error("Validation error:", validationResult.error);
        throw new Error("Invalid response structure from server");
      }

      setSolutions(validationResult.data.generatedContent.solutions);
    } catch (error) {
      console.error("Error solving problems:", error);
      setError({
        message:
          error instanceof Error
            ? error.message
            : "An error occurred while solving the problems.",
        retry: handleSolveProblem,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = async (type: "pdf" | "image") => {
    setExportLoading(true);
    const originalOpenSteps = [...openSteps];
    let pdf: jsPDF | null = null; // Changed type here

    try {
      const allStepIds = solutions.flatMap((solution) =>
        solution.steps.map((step) => step.id),
      );
      setOpenSteps(allStepIds);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const html2canvas = (await import("html2canvas")).default;

      if (type === "pdf") {
        const { jsPDF } = await import("jspdf");
        // eslint-disable-next-line new-cap
        pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });
      }

      const zip =
        type === "image" ? new (await import("jszip")).default() : null;

      for (let i = 0; i < solutions.length; i++) {
        const element = document.getElementById(`solution-${i}`);
        if (element) {
          const canvas = await html2canvas(element, {
            scale: window.devicePixelRatio * 2,
            useCORS: true,
            logging: false,
            backgroundColor: null,
            onclone: (cloneDoc) => {
              const clonedElement = cloneDoc.getElementById(`solution-${i}`);
              if (clonedElement) {
                clonedElement.style.backgroundColor = "white";
                const katexDisplays =
                  clonedElement.querySelectorAll<HTMLElement>(".katex-display");
                katexDisplays.forEach((display) => {
                  display.style.color = "black";
                  const spans = display.querySelectorAll<HTMLElement>("span");
                  spans.forEach((span) => (span.style.color = "black"));
                });
              }
            },
          });

          const imgData = canvas.toDataURL("image/png");

          if (type === "pdf" && pdf) {
            if (i > 0) pdf.addPage();
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pageWidth - 40;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const y = 20;

            if (imgHeight > pageHeight - 40) {
              let offsetY = 0;
              while (offsetY < canvas.height) {
                if (offsetY > 0) pdf.addPage();
                const canvasPart = document.createElement("canvas");
                canvasPart.width = canvas.width;
                canvasPart.height = Math.min(
                  (pageHeight * canvas.width) / pageWidth,
                  canvas.height - offsetY,
                );
                const ctx = canvasPart.getContext("2d");
                ctx?.drawImage(
                  canvas,
                  0,
                  offsetY,
                  canvas.width,
                  canvasPart.height,
                  0,
                  0,
                  canvas.width,
                  canvasPart.height,
                );
                const imgDataPart = canvasPart.toDataURL("image/png");
                pdf.addImage(
                  imgDataPart,
                  "PNG",
                  20,
                  20,
                  imgWidth,
                  pageHeight - 40,
                  `img-${i}-${offsetY}`,
                  "FAST",
                );
                offsetY += canvasPart.height;
              }
            } else {
              pdf.addImage(imgData, "PNG", 20, y, imgWidth, imgHeight);
            }
          } else if (type === "image" && zip) {
            zip.file(`solution-${i + 1}.png`, imgData.split(",")[1], {
              base64: true,
            });
          }
        }
      }

      if (type === "pdf" && pdf) {
        pdf.save("physics-solutions.pdf");
        toast.success("PDF exported successfully");
      } else if (type === "image" && zip) {
        const content = await zip.generateAsync({ type: "blob" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "physics-solutions.zip";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Images exported as ZIP");
      }
    } catch (error) {
      console.error("Export Error:", error);
      toast.error("Export failed. Please try again.");
    } finally {
      setExportLoading(false);
      setOpenSteps(originalOpenSteps);
    }
  };

  const toggleStep = (stepId: number) => {
    setOpenSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId],
    );
  };

  return (
    <div
      className={`mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ${
        isColorful ? "" : "text-gray-800 dark:text-white"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`mb-12 space-y-6 text-center ${
          solutions.length > 0 || isLoading ? "hidden" : ""
        }`}
      >
        <h1
          className={`bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-pink-600 sm:text-5xl md:text-6xl ${
            isColorful ? "" : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Solve Physics Problems
        </h1>
        <p
          className={`mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl ${
            isColorful ? "" : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Upload images containing physics problems and get detailed,
          step-by-step solutions.
        </p>
      </div>

      <div className={`mb-8 flex items-center justify-center`}>
        {/* Color Toggle */}
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      <div className={`container mx-auto max-w-3xl p-8`}>
        {uploadedFiles.length === 0 && !isLoading && solutions.length === 0 && (
          <div
            className={`mb-4 cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors hover:border-gray-400 dark:hover:border-gray-500
            ${
              isDragging
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : isColorful
                  ? "border-gray-300 dark:border-gray-600"
                  : "glass border-gray-300 bg-gray-200 dark:border-gray-600 dark:bg-gray-700"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const files = Array.from(e.dataTransfer.files);
              handleFiles(files);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadIcon
              className={`mx-auto mb-2 h-8 w-8 ${
                isColorful
                  ? "text-gray-600 dark:text-gray-300"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            />
            <p
              className={`text-gray-600 dark:text-gray-300 ${
                isColorful ? "" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              Drag and drop images here, or click to select files
            </p>
            <p
              className={`mt-2 text-sm text-gray-500 dark:text-gray-400 ${
                isColorful ? "" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              Supported formats: JPEG, PNG, WEBP (Max 5MB each)
            </p>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => handleFiles(Array.from(e.target.files || []))}
              accept="image/jpeg, image/png, image/webp"
              multiple
            />
          </div>
        )}

        {error && (
          <div
            className={`mb-4 rounded-lg border border-red-400 bg-red-100 p-4 dark:border-red-700 dark:bg-red-900/20 ${
              isColorful ? "" : "glass"
            }`}
          >
            <div className="flex items-center justify-between">
              <p
                className={`text-red-700 dark:text-red-300 ${
                  isColorful ? "" : "text-red-800 dark:text-red-200"
                }`}
              >
                {error.message}
              </p>
              <div className="flex gap-2">
                {error.retry && (
                  <button
                    className={`rounded-md px-3 py-1 text-white hover:bg-red-700 ${
                      isColorful
                        ? "bg-red-600"
                        : "bg-red-800 dark:bg-red-600 dark:hover:bg-red-500"
                    }`}
                    onClick={error.retry}
                  >
                    Retry
                  </button>
                )}
                <button
                  className={`rounded-md px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 ${
                    isColorful
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200"
                  }`}
                  onClick={() => setError(null)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex h-[200px] items-center justify-center">
            <Loader
              subText={
                "Please wait while we analyze your problems and generate step-by-step solutions. This may take a moment. Thank you for your patience!"
              }
              mainText={"Generating Solution..."}
            />
          </div>
        )}

        {!isLoading && uploadedFiles.length > 0 && solutions.length === 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(file)}
                    width={150}
                    height={150}
                    alt={`Uploaded Image ${index + 1}`}
                    className="max-h-40 max-w-40 rounded-lg"
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <p
                      className={` text-base text-sm font-semibold text-gray-600 dark:text-gray-300 ${
                        isColorful ? "" : "text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {file.name}
                    </p>
                    <button
                      className={` rounded-md px-3 py-1 text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 ${
                        isColorful
                          ? " dark:bg-gray-700"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-200 "
                      }`}
                      onClick={() => handleRemoveFile(index)}
                      aria-label={`Remove file ${file.name}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!isLoading && uploadedFiles.length > 0 && solutions.length === 0 && (
          <button
            className={`flex w-full items-center justify-center rounded-lg px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70 ${
              isColorful
                ? "bg-blue-600"
                : "bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
            }`}
            onClick={handleSolveProblem}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader
                  mainText={"Generating Solution..."}
                  subText={
                    "Please wait while we analyze your problems and generate step-by-step solutions. This may take a moment. Thank you for your patience!"
                  }
                />
              </div>
            ) : (
              "Solve Problems"
            )}
          </button>
        )}

        {!isLoading && solutions.length > 0 && (
          <div className="mt-8">
            <div className="space-y-4">
              <div className={`text-center`}>
                <span
                  className={`text-2xl font-semibold  ${
                    isColorful
                      ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Solutions
                </span>
              </div>
              <div className="mb-4 mt-2 flex items-center justify-center">
                <button
                  className={`rounded-md px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 ${
                    isColorful
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200"
                  }`}
                  onClick={() => setShowSteps((prev) => !prev)}
                >
                  {showSteps
                    ? "Show Direct Solution"
                    : "Show Step-by-Step Solution"}
                </button>
              </div>
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  id={`solution-${index}`}
                  className={`solution-export-element rounded-lg p-6 shadow-sm ${
                    isColorful
                      ? `${problemBgColors[index % problemBgColors.length]}`
                      : "glass"
                  }`}
                >
                  <h3
                    className={`mb-4 text-2xl font-semibold ${
                      isColorful
                        ? "text-gray-800 dark:text-gray-300"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    Problem {index + 1}:{" "}
                    <KatexProblem
                      problem={solution.problem}
                      className={`${
                        isColorful
                          ? "text-gray-800 dark:text-gray-200"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                      equation={""}
                    />
                  </h3>
                  {showSteps ? (
                    <div className="space-y-4">
                      {solution.steps.map((step) => (
                        <motion.div
                          key={step.id}
                          className={`overflow-hidden rounded-lg shadow-sm ${
                            isColorful
                              ? `${problemBgColors[index % problemBgColors.length]}`
                              : "border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <button
                            className={`flex w-full items-center justify-between p-4 text-left transition-colors ${
                              isColorful
                                ? `${stepsBgColors[index % stepsBgColors.length]}`
                                : "bg-dropdown-light outline-none hover:bg-dropdown-light/50 dark:bg-dropdown-dark dark:hover:bg-dropdown-dark/50"
                            }`}
                            onClick={() => toggleStep(step.id)}
                          >
                            <span
                              className={`font-medium ${
                                isColorful
                                  ? "text-gray-800 dark:text-gray-200"
                                  : "text-gray-800 dark:text-gray-200"
                              }`}
                            >
                              Step {step.id}:{" "}
                              {renderTextWithLatex(step.description)}
                            </span>
                            {openSteps.includes(step.id) ? (
                              <FaChevronUp
                                className={`${
                                  isColorful
                                    ? "text-gray-800 dark:text-gray-300"
                                    : "text-gray-800 dark:text-gray-200"
                                }`}
                              />
                            ) : (
                              <FaChevronDown
                                className={`${
                                  isColorful
                                    ? "text-gray-800 dark:text-gray-300"
                                    : "text-gray-800 dark:text-gray-200"
                                }`}
                              />
                            )}
                          </button>

                          <AnimatePresence>
                            {openSteps.includes(step.id) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                              >
                                <div
                                  className={`p-4 ${
                                    isColorful
                                      ? `${stepsBgColors[index % stepsBgColors.length]}`
                                      : "bg-dropdown-light dark:bg-dropdown-dark"
                                  }`}
                                >
                                  <span
                                    className={`text-lg font-bold ${
                                      isColorful
                                        ? "text-gray-800 dark:text-gray-300"
                                        : "text-gray-800 dark:text-gray-200"
                                    }`}
                                  >
                                    <KatexEquation
                                      equation={step.descriptionEquation}
                                      problem={""}
                                    />
                                  </span>
                                  {step.equation && (
                                    <div
                                      className={`mt-4 overflow-x-auto rounded-md text-lg ${
                                        isColorful
                                          ? `text-gray-800 dark:text-gray-300 ${equationsBgColors[index % equationsBgColors.length]}`
                                          : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                                      }`}
                                    >
                                      <BlockMath math={step.equation} />
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className={`space-y-3 rounded-xl border p-4 shadow-sm ${
                        isColorful
                          ? `border-gray-800/50 dark:border-white/20 ${
                              problemBgColors[index % problemBgColors.length]
                            }`
                          : "border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {solution.steps.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className={`text-lg ${
                            isColorful
                              ? "text-gray-800 dark:text-gray-200"
                              : "text-gray-800 dark:text-gray-200"
                          }`}
                        >
                          {step.equation && <BlockMath math={step.equation} />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!isLoading && solutions.length > 0 && (
          <div className="mt-8 flex gap-2">
            <div className="group relative">
              <button
                className={`relative flex items-center gap-2 rounded-lg px-5 py-3 font-semibold text-white transition-colors duration-300 ${
                  isColorful
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-800 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-500"
                }`}
                disabled={exportLoading}
              >
                <Download className="h-5 w-5" />
                {exportLoading ? "Exporting..." : "Export"}
              </button>

              <div
                className={`absolute bottom-0 left-0 z-10 mb-12 hidden min-w-[180px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg group-hover:block dark:border-gray-700 dark:bg-gray-800 ${
                  isColorful ? "" : "bg-gray-800 dark:bg-gray-700"
                }`}
              >
                <button
                  onClick={() => handleExport("pdf")}
                  className={`flex w-full items-center gap-2 rounded-md px-4 py-2 text-left font-semibold transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isColorful ? "" : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  PDF
                </button>
                <button
                  onClick={() => handleExport("image")}
                  className={`flex w-full items-center gap-2 rounded-md px-4 py-2 text-left font-semibold transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    isColorful ? "" : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <Images className="h-5 w-5" />
                  Images
                </button>
              </div>
            </div>

            <button
              className={`flex w-full items-center justify-center rounded-lg px-5 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-gray-700 ${
                isColorful
                  ? "bg-gray-600"
                  : "bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
              onClick={() => {
                setSolutions([]);
                setUploadedFiles([]);
              }}
            >
              Solve Another Problem
            </button>
          </div>
        )}
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div
          className={`h-px flex-1 ${
            isColorful
              ? "bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400"
              : "bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-200"
          }`}
        />
        <span
          className={`text-sm italic ${
            isColorful ? "text-gray-500 dark:text-gray-200" : "text-gray-200"
          }`}
        >
          Unveiling the Universe's Secrets
        </span>
        <div
          className={`h-px flex-1 ${
            isColorful
              ? "bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400"
              : "bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-200"
          }`}
        />
      </div>
    </div>
  );
};

export default Solve;
