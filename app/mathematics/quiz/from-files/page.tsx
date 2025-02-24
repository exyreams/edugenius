"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronRight, Upload as UploadIcon, X } from "lucide-react";
import { toast } from "sonner";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useSession } from "next-auth/react";

import Loader from "@/components/Loader";
import Results from "@/components/Results";

/**
 * Represents a single question in the quiz.
 * @interface Question
 * @property {number} id - The unique identifier of the question.
 * @property {string} questionText - The text of the question.
 * @property {string[]} options - An array of answer options (rendered as LaTeX).
 * @property {string} answer - The correct answer (plain text).
 */
interface Question {
  id: number;
  questionText: string;
  options: string[];
  answer: string;
}

/**
 * A component that allows users to upload a PDF or TXT file and generate a quiz from its content.
 * Requires users to be logged in.
 * @returns {JSX.Element} The FromFiles component.
 */
const FromFiles = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const MAX_QUESTIONS = 20;
  const MIN_QUESTIONS = 3;
  const [quizDuration, setQuizDuration] = useState(0);

  const { data: session } = useSession(); // Get user session

  /**
   * Loads quiz data from local storage if available when the quiz starts.
   * @memberof FromFiles
   */
  useEffect(() => {
    if (quizStarted && quizQuestions.length === 0) {
      const quizDataString = localStorage.getItem("uploadQuizData");
      if (quizDataString) {
        const quizData = JSON.parse(quizDataString);
        if (quizData && quizData.questions) {
          setQuizQuestions(quizData.questions);
        } else {
          toast.error("Error: 'questions' property not found in quiz data.");
          setQuizStarted(false);
        }
      } else {
        setQuizStarted(false); // Important: Don't stay in quizStarted state if no data
      }
    }
  }, [quizStarted, quizQuestions.length]);

  /**
   * Tracks the time taken during the quiz.
   * @memberof FromFiles
   */
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (quizStarted && !isLoading && quizQuestions.length > 0) {
      intervalId = setInterval(() => {
        setTimeTaken((prevTimeTaken) => prevTimeTaken + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [quizStarted, isLoading, quizQuestions]);

  /**
   * Sets a timer for each question based on the selected difficulty.
   * @memberof FromFiles
   */
  useEffect(() => {
    if (!quizStarted || quizQuestions.length === 0) return;

    let timeout: NodeJS.Timeout;
    if (!isAnswered) {
      const timeLimit = 30000;

      setTimeLeft(timeLimit / 1000);

      timeout = setTimeout(() => {
        if (!isAnswered) {
          toast.error("Time's up! Moving to the next question.");
          handleNextQuestion();
        }
      }, timeLimit);
    }

    return () => clearTimeout(timeout);
  }, [currentQuestionIndex, isAnswered, quizQuestions, quizStarted]);

  /**
   * Updates the time left every second.
   * @memberof FromFiles
   */
  useEffect(() => {
    let timeLeftInterval: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !isAnswered) {
      timeLeftInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(timeLeftInterval);
  }, [quizStarted, isAnswered, timeLeft]);

  /**
   * Handles the file change event when a user uploads a file.
   * @param {File} [file] - The uploaded file.
   * @memberof FromFiles
   */
  const handleFileChange = (file?: File) => {
    if (!file) {
      // This handles the case where the user clicks the upload area,
      // but doesn't select a file (clicks "Cancel" in the file dialog).
      if (
        !fileInputRef.current?.files ||
        fileInputRef.current.files.length === 0
      ) {
        return;
      }
      // If files are present, use the first one.
      file = fileInputRef.current.files[0];
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result;
      if (
        (file.type === "application/pdf" || file.type === "text/plain") &&
        typeof content === "string"
      ) {
        // Store PDF content as base64, text content as is.
        setFileContent(
          file.type === "application/pdf" ? btoa(content) : content,
        );
        setUploadedFileName(file.name);
        toast.success("File uploaded successfully!");
      } else {
        toast.error("Invalid file type. Please upload a PDF or TXT file.");
      }
    };

    if (file.type === "application/pdf") {
      reader.readAsBinaryString(file); // Read PDFs as binary strings for base64 encoding
    } else {
      reader.readAsText(file); // Read text files directly as text
    }
  };

  /**
   * Generates the quiz by sending the file content to the API.
   * Only runs if the user is logged in.
   * @memberof FromFiles
   */
  const handleGenerateQuiz = async () => {
    if (!session) {
      toast.error("Please sign in to generate a quiz.");
      return;
    }

    if (!fileContent) {
      toast.error("Please upload a file first.");
      return;
    }

    setIsLoading(true); // Show loader
    setQuizQuestions([]); // Clear previous questions (important for retries)

    try {
      const response = await fetch("/api/gemini/mathematics/from-files", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileContent,
          numQuestions,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Attempt to get more specific error
        throw new Error(errorData.error || "Failed to generate quiz");
      }

      const data = await response.json();

      if (data.generatedContent && data.generatedContent.questions) {
        setQuizQuestions(data.generatedContent.questions);
        localStorage.setItem(
          "uploadQuizData",
          JSON.stringify(data.generatedContent),
        );
        setQuizStarted(true);
        setStartTime(Date.now());
        toast.success("Quiz generated successfully!");
      } else {
        throw new Error("Unexpected response structure or no questions found.");
      }
    } catch (error: any) {
      console.error("Error generating quiz:", error);
      toast.error(
        error.message || "An error occurred while generating the quiz.",
      );
      setQuizQuestions([]); // Clear questions on error
      setQuizStarted(false); // Ensure quiz is not started on error
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  /**
   * Handles the selection of an answer option.
   * @param {string} option - The selected answer option.
   * @memberof FromFiles
   */
  const handleOptionSelect = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
      if (option === quizQuestions[currentQuestionIndex].answer) {
        setScore(score + 1);
        toast.success("Correct answer!");
      } else {
        toast.error(
          `Incorrect. The correct answer was ${quizQuestions[currentQuestionIndex].answer}`,
        );
      }
    }
  };

  /**
   * Moves to the next question or finishes the quiz and displays the results.
   * @memberof FromFiles
   */
  const handleNextQuestion = () => {
    if (isAnswered || timeLeft === 0) {
      // Proceed if answered OR time's up
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setTimeLeft(30); // Reset time left for next question
      } else {
        // Quiz finished
        const endTime = Date.now();
        const duration = Math.round((endTime - startTime) / 1000);
        setQuizDuration(duration);
        setTimeTaken(duration); // Set final time taken
        setShowResult(true);
        setQuizStarted(false);
      }
    }
  };

  /**
   * Resets the quiz state to allow the user to start again.
   * @memberof FromFiles
   */
  const handleStartAgain = () => {
    setQuizQuestions([]);
    setScore(0);
    setTimeTaken(0);
    setQuizStarted(false);
    setShowResult(false);
    setFileContent(null); // Clear file content
    setUploadedFileName(""); // Clear file name
    setCurrentQuestionIndex(0);
    localStorage.removeItem("uploadQuizData"); // Clear stored data
  };

  if (showResult) {
    return (
      // Using the updated Results Component and passing necessary Props
      <Results
        score={score}
        totalQuestions={quizQuestions.length}
        timeTaken={timeTaken}
        quizDuration={quizDuration}
        topic={"From Files"}
        difficulty={"mixed"} // Or determine based on content
        onStartAgain={handleStartAgain}
      />
    );
  }

  return (
    <div className="container mx-auto max-w-3xl p-4">
      {isLoading && (
        <Loader
          mainText={"Generating Quiz..."}
          subText={
            "Please wait while we generate your quiz based on the document you provided. This may take a moment. Thank you for your patience!"
          }
        />
      )}

      {!isLoading && !quizStarted && (
        <div className="container mx-auto max-w-3xl p-8">
          <h1 className="heading mb-6 text-center">Upload Quiz</h1>
          <div className="mb-6">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Upload a <strong>PDF</strong> or <strong>TXT</strong> file
              containing educational content, notes, or problems, and let our
              system generate a personalized quiz for you. The quiz will assess
              your understanding of the material, helping you reinforce key
              concepts and identify areas for improvement.
            </p>
          </div>
          {!session && (
            <div className="mb-4 rounded-md bg-yellow-100 p-4 text-center text-sm text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100">
              <h3 className="mb-2 text-lg font-semibold">
                Sign in to Generate Quiz
              </h3>
              <p>
                Users are required to log in to limit API usage and prevent
                spam.
              </p>
            </div>
          )}

          <div
            className={`mb-4 cursor-pointer rounded-lg border-4 p-12 text-center transition-colors ${
              session
                ? "border-dashed border-gray-800 dark:border-gray-400"
                : "border-gray-300 dark:border-gray-700"
            }`}
            onClick={() => {
              if (session) {
                fileInputRef.current?.click();
              } else {
                toast.error("Please sign in to upload a file.");
              }
            }}
          >
            <UploadIcon
              className={`mx-auto mb-2 h-8 w-8 ${
                session ? "text-gray-600" : "text-gray-400"
              }`}
            />
            <p className={session ? "text-gray-600" : "text-gray-400"}>
              Click to select a file
            </p>
            <p
              className={`mt-2 text-sm ${
                session ? "text-gray-600" : "text-gray-400"
              }`}
            >
              PDF or TXT file only
            </p>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => handleFileChange(e.target.files?.[0])} // Directly pass the file
              accept=".pdf,.txt"
              disabled={!session}
            />
          </div>

          {uploadedFileName && (
            <div className="text-md mb-4 text-center text-gray-600">
              Uploaded file:{" "}
              <span className="font-semibold">{uploadedFileName}</span>
            </div>
          )}

          {session && (
            <div className="mb-6 mt-10">
              <label
                htmlFor="numQuestions"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Number of Questions (3-20):
              </label>
              <input
                type="number"
                id="numQuestions"
                className="w-full rounded-lg border border-gray-300 bg-dropdown-light p-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-white"
                value={numQuestions}
                onChange={(e) => {
                  const value = Math.max(
                    MIN_QUESTIONS,
                    Math.min(MAX_QUESTIONS, Number(e.target.value)),
                  );
                  setNumQuestions(value);
                }}
                min={MIN_QUESTIONS}
                max={MAX_QUESTIONS}
              />
            </div>
          )}
          {!session && (
            <div className="mb-6 mt-10">
              <label
                htmlFor="numQuestions"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Number of Questions (3-20):
              </label>
              <input
                type="number"
                id="numQuestions"
                className="w-full rounded-lg border border-gray-300 bg-dropdown-light p-3 text-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-gray-500"
                value="" // Empty Value
                placeholder="e.g. 5"
                disabled
              />
            </div>
          )}

          <button
            className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
            onClick={handleGenerateQuiz}
            disabled={isLoading || !session || !fileContent} // Disable if loading, not logged in, or no file content
          >
            Generate Quiz
          </button>
          {!session && (
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              You must be signed in to generate a quiz.
            </p>
          )}
        </div>
      )}

      {!isLoading && quizStarted && quizQuestions.length > 0 && (
        <>
          <div className="glass mb-6 rounded-lg p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Question {quizQuestions[currentQuestionIndex].id} of{" "}
                {quizQuestions.length}
              </h2>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <p>
                Time Elapsed:{" "}
                <span className="font-semibold">{timeTaken}s</span>
              </p>
              <p>
                Time Left: <span className="font-semibold">{timeLeft}s</span>
              </p>
            </div>
            <p className="mb-4 text-lg font-bold text-black dark:text-white">
              {quizQuestions[currentQuestionIndex].questionText}
            </p>

            <ul className="space-y-2">
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => (
                  <li
                    key={index}
                    className={`rounded-md border p-3 transition-colors ${
                      isAnswered
                        ? option === quizQuestions[currentQuestionIndex].answer
                          ? "border-green-400 bg-green-200 text-green-700"
                          : selectedOption === option
                            ? "border-red-400 bg-red-200 text-red-700"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      if (!isAnswered) {
                        handleOptionSelect(option);
                      }
                    }}
                  >
                    <span className="flex items-center space-x-2">
                      {isAnswered && (
                        <span className="inline-flex items-center">
                          {option ===
                          quizQuestions[currentQuestionIndex].answer ? (
                            <Check className="mr-2 h-5 w-5 text-green-500" />
                          ) : selectedOption === option ? (
                            <X className="mr-2 h-5 w-5 text-red-500" />
                          ) : null}
                        </span>
                      )}
                      <InlineMath math={option} />
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <button
            onClick={handleNextQuestion}
            className="glass w-fit rounded-full border p-3 text-black dark:text-white"
            disabled={!isAnswered}
          >
            {currentQuestionIndex < quizQuestions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
            <ChevronRight className="inline-block" />
          </button>
        </>
      )}
    </div>
  );
};

export default FromFiles;
