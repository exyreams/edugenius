"use client";

import React, { useEffect, useState } from "react";
import { Check, ChevronDown, ChevronRight, XCircle } from "lucide-react";
import { toast } from "sonner";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import Results from "@/components/quiz/Results";
import Loader from "@/components/quiz/Loader";

interface Question {
  id: number;
  questionText: string;
  formula: string;
  options: string[];
  answer: string;
}

const ChallengesQuiz = () => {
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
  const [quizDuration, setQuizDuration] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (quizStarted && quizQuestions.length === 0) {
      (async () => {
        setIsLoading(true);
        const prompt = `Generate a challenge quiz with ${numQuestions} mathematical problems on the topic of ${selectedTopic} at ${selectedDifficulty} difficulty. Each question should include the ID, problem statement, 4 options (including the correct answer), and the correct answer (in plain text).`;
        try {
          const response = await fetch("/api/gemini/mathematics/challenges", {
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
  }, [quizStarted, numQuestions, quizQuestions]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let intervalId: NodeJS.Timeout;
    if (quizStarted && !isLoading && quizQuestions.length > 0) {
      intervalId = setInterval(() => {
        setTimeTaken((prevTimeTaken) => prevTimeTaken + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [quizStarted, isLoading, quizQuestions]);

  useEffect(() => {
    if (!quizStarted || quizQuestions.length === 0) return;

    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;
    if (!isAnswered) {
      const timeLimit =
        selectedDifficulty === "advanced"
          ? 120000
          : selectedDifficulty === "intermediate"
            ? 90000
            : 60000;

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

  const handleStartQuiz = () => {
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
        const duration = Math.round((endTime - startTime) / 1000);
        setQuizDuration(duration);
        const totalMinutes = Math.floor(timeTaken / 60);
        const remainingSeconds = timeTaken % 60;

        setShowResult(true);
        setQuizStarted(false);

        setQuizDuration(totalMinutes);
        setTimeTaken(remainingSeconds);
      }
    }
  };

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

  const difficulties = ["Basic", "Intermediate", "Advanced"];

  const handleStartAgain = () => {
    setQuizQuestions([]);
    setScore(0);
    setTimeTaken(0);
    setQuizStarted(false);
    setShowResult(false);
    setIsLoading(false);
    localStorage.removeItem("formulaQuizData");
  };

  if (!quizStarted && !showResult) {
    return (
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="heading mb-6 text-center">Math Challenges Quiz</h1>
        <div className="mb-6">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Put your mathematical skills to the test with our challenging
            problem-solving quiz! Choose from a wide range of topics, including
            Algebra, Calculus, and Differential Equations. Select your preferred
            difficulty level—Basic, Intermediate, or Advanced—and tackle timed
            questions designed to push your understanding and problem-solving
            speed.
          </p>
        </div>

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
              className="bg-dropdown-light dark:bg-dropdown-dark w-full appearance-none rounded-lg  border border-gray-300 p-3 font-medium text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:text-white" // Add appearance-none to hide default arrow
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              {topics.map((topic) => (
                <option
                  key={topic}
                  value={topic.toLowerCase()}
                  className="bg-dropdown-light dark:bg-dropdown-dark font-medium text-black dark:text-white"
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
              className="bg-dropdown-light dark:bg-dropdown-dark w-full appearance-none rounded-lg  border border-gray-300 p-3 font-medium text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:text-white"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              {difficulties.map((difficulty) => (
                <option
                  key={difficulty}
                  value={difficulty.toLowerCase()}
                  className="bg-dropdown-light dark:bg-dropdown-dark font-medium text-black dark:text-white"
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

        {/* Number of Questions Input */}
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

        {/* Start Quiz Button */}
        <button
          onClick={handleStartQuiz}
          className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
          disabled={isLoading}
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
      </div>
    );
  }

  if (showResult) {
    return (
      <Results
        score={score}
        timeTaken={timeTaken}
        totalMinutes={quizDuration}
        quizQuestions={quizQuestions}
        onRetry={handleStartAgain}
        category={"formulas"}
      />
    );
  }

  return (
    <div className="container mx-auto max-w-3xl p-4">
      {isLoading && quizQuestions.length === 0 && (
        <Loader
          description={
            "Please wait while we generate your customized formula quiz based on your preferences. This may take a moment. Thank you for your patience!"
          }
          title={"Quiz..."}
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

export default ChallengesQuiz;
