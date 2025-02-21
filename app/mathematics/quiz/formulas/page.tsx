"use client";

import React, { useEffect, useState } from "react";
import { Check, ChevronDown, ChevronRight, XCircle } from "lucide-react";
import { toast } from "sonner";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useSession } from "next-auth/react";

import Results from "@/components/Results";
import Loader from "@/components/Loader";

/**
 * Represents a single question in the quiz.
 * @interface Question
 * @property {number} id - The unique identifier of the question.
 * @property {string} questionText - The text of the question.
 * @property {string} formula - The correct formula in LaTeX format.
 * @property {string[]} options - An array of answer options in LaTeX format.
 * @property {string} answer - The correct answer in plain text.
 */
interface Question {
  id: number;
  questionText: string;
  formula: string;
  options: string[];
  answer: string;
}

/**
 * A component for a formula quiz.
 * Allows users to select a topic, difficulty, and number of questions,
 * then takes a quiz generated using the Gemini API.
 * Requires users to be logged in to prevent API overuse.
 * @returns {JSX.Element} The FormulaQuiz component.
 */
const FormulaQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState<number>(5);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("algebra");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("basic");
  const [startTime, setStartTime] = useState<number>(0);
  const [timeTaken, setTimeTaken] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);
  const [quizDuration, setQuizDuration] = useState<number>(0); // Total time for the quiz
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const { data: session } = useSession(); // Get user session

  /**
   * Fetches quiz questions from the API when the quiz starts.
   * @memberof FormulaQuiz
   */
  useEffect(() => {
    if (quizStarted && quizQuestions.length === 0 && session) {
      // Check for user session
      (async () => {
        setIsLoading(true);
        const prompt = `Generate a formula quiz with ${numQuestions} questions on the topic of ${selectedTopic} at ${selectedDifficulty} difficulty. Each question should include the ID, question text, the correct formula in LaTeX format, 4 options (including the correct answer in LaTeX format), and the correct answer (in plain text).`;

        try {
          const response = await fetch("/api/gemini/mathematics/formulas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt,
              numQuestions,
              topic: selectedTopic,
              difficulty: selectedDifficulty,
            }),
          });

          if (!response.ok) {
            console.error(
              "Failed to fetch quiz questions: ",
              response.statusText,
            );
            toast.error("Failed to fetch quiz questions. Please try again.");
            return;
          }

          const data = await response.json();

          if (data.generatedContent && data.generatedContent.questions) {
            setQuizQuestions(data.generatedContent.questions);
            localStorage.setItem(
              "formulaQuizData",
              JSON.stringify(data.generatedContent),
            );
            setStartTime(Date.now());
          } else {
            console.error(
              "Unexpected response structure or no questions found.",
            );
            toast.error("Failed to load quiz questions. Please try again.");
          }
        } catch (error) {
          console.error("Error fetching quiz questions: ", error);
          toast.error(
            "Error fetching quiz questions: " + (error as Error).message,
          );
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [
    quizStarted,
    numQuestions,
    quizQuestions,
    selectedTopic,
    selectedDifficulty,
    session,
  ]);

  /**
   * Tracks the time taken for the quiz.
   * @memberof FormulaQuiz
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
   * @memberof FormulaQuiz
   */
  useEffect(() => {
    if (!quizStarted || quizQuestions.length === 0) return;

    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;
    if (!isAnswered) {
      const timeLimit =
        selectedDifficulty === "advanced"
          ? 60000
          : selectedDifficulty === "intermediate"
            ? 45000
            : 30000;

      setTimeLeft(timeLimit / 1000);

      timeout = setTimeout(() => {
        if (!isAnswered) {
          toast.error("Time's up! Moving to the next question.");
          handleNextQuestion();
        }
      }, timeLimit);
    }

    return () => clearTimeout(timeout);
  }, [
    currentQuestionIndex,
    isAnswered,
    quizQuestions,
    quizStarted,
    selectedDifficulty,
  ]);

  /**
   * Updates the remaining time every second.
   * @memberof FormulaQuiz
   */
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timeLeftInterval: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !isAnswered) {
      timeLeftInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(timeLeftInterval);
  }, [quizStarted, isAnswered, timeLeft]);

  /**
   * Starts the quiz, loading questions from local storage if available,
   * otherwise generating new questions.  Only allows starting if the user is logged in.
   * @memberof FormulaQuiz
   */
  const handleStartQuiz = () => {
    if (!session) {
      toast.error("Please sign in to generate a quiz.");
      return;
    }

    const quizData = localStorage.getItem("formulaQuizData");

    if (quizData) {
      const parsedData = JSON.parse(quizData);
      if (parsedData.questions && parsedData.questions.length > 0) {
        if (
          window.confirm(
            "Starting a new quiz will clear any existing quiz data. Continue?",
          )
        ) {
          localStorage.removeItem("formulaQuizData");
          setQuizQuestions([]);
          setQuizStarted(true);
          setIsLoading(true);
          toast.info("Generating quiz...", { duration: 3000 });
        } else {
          setQuizQuestions(parsedData.questions);
          setQuizStarted(true);
          setIsLoading(false);
          setStartTime(Date.now());
          setTimeTaken(0);
        }
      }
    } else {
      setQuizQuestions([]);
      setQuizStarted(true);
      setIsLoading(true);
      toast.info("Generating quiz...", { duration: 3000 });
    }
  };

  /**
   * Handles the selection of an answer option.
   * @param {string} option - The selected answer option.
   * @memberof FormulaQuiz
   */
  const handleOptionSelect = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);

      if (option === quizQuestions[currentQuestionIndex].answer) {
        setScore(score + 1);
        toast.success("Correct answer!");
      } else {
        toast.error("Incorrect answer!");
      }
    }
  };

  /**
   * Moves to the next question or finishes the quiz.
   * @memberof FormulaQuiz
   */
  const handleNextQuestion = () => {
    if (isAnswered || timeLeft === 0) {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setTimeLeft(
          selectedDifficulty === "advanced"
            ? 60
            : selectedDifficulty === "intermediate"
              ? 45
              : 30,
        );
      } else {
        const endTime = Date.now();
        const duration = Math.round((endTime - startTime) / 1000); // Total Quiz Duration
        setQuizDuration(duration);

        setShowResult(true);
        setQuizStarted(false);
      }
    }
  };

  /**
   * Array of available quiz topics.
   * @type {string[]}
   */
  const topics = [
    "Algebra",
    "Calculus",
    "Discrete Mathematics",
    "Geometry",
    "Linear Algebra",
    "Probability",
    "Statistics",
    "Trigonometry",
    "Differential Equations",
  ];

  /**
   * Array of available difficulty levels.
   * @type {string[]}
   */
  const difficulties = ["Basic", "Intermediate", "Advanced"];

  /**
   * Resets the quiz state to start again.
   * @memberof FormulaQuiz
   */
  const handleStartAgain = () => {
    setQuizQuestions([]);
    setScore(0);
    setTimeTaken(0);
    setQuizStarted(false);
    setShowResult(false);
    setIsLoading(false);
    setCurrentQuestionIndex(0);
    localStorage.removeItem("formulaQuizData");
  };

  if (!quizStarted && !showResult) {
    return (
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="heading mb-6 text-center">Formula Quiz</h1>
        <div className="mb-6">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Test your knowledge with our comprehensive formula quiz! Choose from
            a wide range of topics, including Algebra, Calculus, and
            Differential Equations. Select your preferred difficulty
            level—Basic, Intermediate, or Advanced—and challenge yourself with
            timed questions to improve your speed.
          </p>
        </div>

        {!session && (
          <>
            <div className="mb-4 rounded-md bg-yellow-100 p-4 text-center text-sm text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100">
              <h3 className="mb-2 text-lg font-semibold">
                Sign in to Generate Quiz
              </h3>
              <p>
                Users are required to log in to limit API usage and prevent
                spam.
              </p>
            </div>
            {/* Placeholder for Topic */}
            <div className="mb-6">
              <label
                htmlFor="topic"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Topic:
              </label>
              <div className="relative">
                <select
                  id="topic"
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-dropdown-light p-3 font-figtree font-medium text-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-gray-500"
                  value="" // Empty value since it's disabled
                  disabled
                >
                  <option
                    value=""
                    className="bg-dropdown-light font-medium text-gray-500 dark:bg-dropdown-dark dark:text-gray-500"
                  >
                    Select a Topic
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Placeholder for Difficulty */}
            <div className="mb-6">
              <label
                htmlFor="difficulty"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Difficulty:
              </label>
              <div className="relative">
                <select
                  id="difficulty"
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-dropdown-light p-3 font-figtree font-medium text-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-gray-500"
                  value="" // Empty value since it's disabled
                  disabled
                >
                  <option
                    value=""
                    className="bg-dropdown-light font-medium text-gray-500 dark:bg-dropdown-dark dark:text-gray-500"
                  >
                    Select Difficulty
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Placeholder for Number of Questions */}
            <div className="mb-6">
              <label
                htmlFor="numQuestions"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent
    dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Number of Questions:
              </label>
              <input
                type="number"
                id="numQuestions"
                min="3"
                max="20"
                value="" // Empty value since its disabled.
                placeholder="e.g., 10"
                className="w-full rounded-lg border border-gray-300 bg-white/40 p-3 text-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-white/20 dark:text-gray-500"
                disabled
              />
            </div>
          </>
        )}

        {session && (
          <>
            {/* Topic Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="topic"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent
      dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Topic:
              </label>
              <div className="relative">
                <select
                  id="topic"
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-dropdown-light  p-3 font-figtree font-medium text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-white" // Add appearance-none to hide default arrow
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  {topics.map((topic) => (
                    <option
                      key={topic}
                      value={topic.toLowerCase()}
                      className="bg-dropdown-light font-medium text-black dark:bg-dropdown-dark dark:text-white"
                    >
                      {topic}
                    </option>
                  ))}
                </select>
                {/* Add ChevronDown icon */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <ChevronDown className="h-5 w-5 text-black dark:text-white" />
                </div>
              </div>
            </div>

            {/* Difficulty Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="difficulty"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent
      dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Difficulty:
              </label>
              <div className="relative">
                <select
                  id="difficulty"
                  className="w-full appearance-none rounded-lg border border-gray-300  bg-dropdown-light p-3 font-medium text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-white"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map((difficulty) => (
                    <option
                      key={difficulty}
                      value={difficulty.toLowerCase()}
                      className="bg-dropdown-light font-medium text-black dark:bg-dropdown-dark dark:text-white"
                    >
                      {difficulty}
                    </option>
                  ))}
                </select>
                {/* Add ChevronDown icon */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <ChevronDown className="h-5 w-5 text-black dark:text-white" />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="numQuestions"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent
      dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Number of Questions:
              </label>
              <input
                type="number"
                id="numQuestions"
                min="3"
                max="20"
                value={numQuestions}
                onChange={(e) =>
                  setNumQuestions(
                    Math.max(1, Math.min(20, parseInt(e.target.value))),
                  )
                }
                className="w-full rounded-lg border border-gray-300 bg-white/40 p-3 text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-white/20 dark:text-white"
              />
            </div>
          </>
        )}

        {/* Start Quiz Button */}
        <button
          onClick={handleStartQuiz}
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
          disabled={isLoading || !session} // Disable if loading or not logged in
        >
          {isLoading ? (
            <span className="animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </span>
          ) : (
            <span>Generate Quiz</span>
          )}
        </button>
        {!session && (
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            You must be signed in to generate a quiz.
          </p>
        )}
      </div>
    );
  }

  if (showResult) {
    return (
      // Using the updated Results Component and passing necessary Props
      <Results
        score={score}
        totalQuestions={quizQuestions.length}
        timeTaken={timeTaken}
        quizDuration={quizDuration}
        topic={selectedTopic}
        difficulty={selectedDifficulty}
        onStartAgain={handleStartAgain}
      />
    );
  }

  return (
    <div className="container mx-auto max-w-3xl p-4">
      {isLoading && quizQuestions.length === 0 && (
        <Loader
          mainText={"Generating Formulas..."}
          subText={
            "Please wait while we generate your customized formula quiz based on your preferences. This may take a moment. Thank you for your patience!"
          }
        />
      )}

      {!isLoading && quizQuestions.length > 0 && (
        <>
          <div className="glass mb-6 rounded-lg p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                <span>
                  Question {quizQuestions[currentQuestionIndex].id} of{" "}
                  {quizQuestions.length}
                </span>
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
                            <XCircle className="mr-2 h-5 w-5 text-red-500" />
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
            className="glass w-fit rounded-full  border p-3 text-black dark:text-white"
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

export default FormulaQuiz;
