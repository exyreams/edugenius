"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Binary,
  Calculator,
  Check,
  ChevronDown,
  ChevronRight,
  Divide,
  FunctionSquare,
  Grid,
  LayoutDashboard,
  Percent,
  Pi,
  Ruler,
  Scale,
  Shapes,
  SquareSigma,
  Triangle,
  Variable,
  Waves,
  XCircle,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import Results from "@/components/Results";
import Loader from "@/components/Loader";
import { MdStraight } from "react-icons/md";
import { TbMath, TbMathIntegrals, TbMathIntegralX } from "react-icons/tb";
import { useSession } from "next-auth/react"; // Import useSession

/**
 * Interface for a single question in the quiz.
 * @property {number} id - Unique identifier for the question.
 * @property {string} questionText - The text of the question.
 * @property {string} formula - The mathematical formula associated with the question (if any).
 * @property {string[]} options - An array of possible answer choices.
 * @property {string} answer - The correct answer among the options.
 */
interface Question {
  id: number;
  questionText: string;
  formula: string;
  options: string[];
  answer: string;
}

/**
 * Represents a topic with its properties.
 * @interface
 * @property {string} id - The unique identifier for the topic.
 * @property {string} name - The display name of the topic.
 * @property {React.ComponentType} icon - The icon component associated with the topic.
 * @property {string} color - The text color for the topic.
 * @property {string} gradient - The background gradient for the topic.
 * @property {string} text - The text color for descriptions and other elements.
 * @property {string} description - A brief description of the topic.
 */
interface Topic {
  id: string;
  name: string;
  icon: React.ComponentType;
  color: string;
  gradient: string;
  text: string;
  description: string;
}

/**
 * Foundational mathematics topics.
 * @type {Topic[]}
 */
const foundationalTopics: Topic[] = [
  {
    id: "number-systems",
    name: "Number Systems",
    icon: LayoutDashboard,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-blue-100 to-sky-200 dark:from-blue-700 dark:to-sky-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Understanding different types of numbers.",
  },
  {
    id: "integers",
    name: "Integers",
    icon: Calculator,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-blue-100 to-sky-200 dark:from-blue-700 dark:to-sky-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Working with positive and negative numbers.",
  },
  {
    id: "fractions",
    name: "Fractions",
    icon: Divide,
    color: "text-green-500 dark:text-green-200",
    gradient: "from-green-100 to-lime-200 dark:from-green-700 dark:to-lime-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Understanding parts of a whole.",
  },
  {
    id: "decimals",
    name: "Decimals",
    icon: Pi,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient:
      "from-yellow-100 to-amber-200 dark:from-yellow-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Numbers with decimal points.",
  },
  {
    id: "percentages",
    name: "Percentages",
    icon: Percent,
    color: "text-pink-500 dark:text-pink-200",
    gradient: "from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Representing parts out of 100.",
  },
  {
    id: "ratios-proportions",
    name: "Ratios & Proportions",
    icon: Scale,
    color: "text-purple-500 dark:text-purple-200",
    gradient:
      "from-purple-100 to-indigo-200 dark:from-purple-700 dark:to-indigo-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Comparing quantities and solving for unknowns.",
  },
  {
    id: "measurement-units",
    name: "Measurement & Units",
    icon: MdStraight,
    color: "text-cyan-500 dark:text-cyan-200",
    gradient: "from-cyan-100 to-teal-200 dark:from-cyan-700 dark:to-teal-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Understanding units and how to convert them.",
  },
  {
    id: "exponents-roots",
    name: "Exponents & Roots",
    icon: SquareSigma,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-orange-200 dark:from-red-700 dark:to-orange-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Powers and square roots.",
  },
  {
    id: "variables-expressions",
    name: "Variables & Expressions",
    icon: Variable,
    color: "text-teal-500 dark:text-teal-200",
    gradient: "from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Using letters to represent numbers.",
  },
  {
    id: "equations-inequalities",
    name: "Equations & Inequalities",
    icon: TbMath,
    color: "text-orange-500 dark:text-orange-200",
    gradient:
      "from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Solving for unknown values.",
  },
  {
    id: "order-of-operations",
    name: "Order of Operations",
    icon: FunctionSquare,
    color: "text-indigo-500 dark:text-indigo-200",
    gradient:
      "from-indigo-100 to-violet-200 dark:from-indigo-700 dark:to-violet-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "PEMDAS/BODMAS - The order to calculate.",
  },
  {
    id: "area-perimeter",
    name: "Area & Perimeter",
    icon: Ruler,
    color: "text-cyan-500 dark:text-cyan-200",
    gradient: "from-cyan-100 to-sky-200 dark:from-cyan-700 dark:to-sky-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Measuring shapes.",
  },
  {
    id: "data-handling-statistics",
    name: "Data & Statistics",
    icon: BarChart,
    color: "text-pink-500 dark:text-pink-200",
    gradient:
      "from-pink-100 to-fuchsia-200 dark:from-pink-700 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Collecting and interpreting data.",
  },
];

/**
 * Intermediate and advanced mathematics topics.
 * @type {Topic[]}
 */
const intermediateAdvancedTopics: Topic[] = [
  {
    id: "algebra",
    name: "Algebra",
    icon: FunctionSquare,
    color: "text-orange-500 dark:text-orange-200",
    gradient: "from-orange-100 to-red-200 dark:from-orange-700 dark:to-red-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Symbol manipulation study",
  },
  {
    id: "calculus",
    name: "Calculus",
    icon: TbMathIntegrals,
    color: "text-green-500 dark:text-green-200",
    gradient: "from-lime-100 to-green-200 dark:from-lime-700 dark:to-green-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Study of continuous change",
  },
  {
    id: "differential-equations",
    name: "Differential Equations",
    icon: Divide,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-sky-100 to-blue-200 dark:from-sky-700 dark:to-blue-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Study of differential equations",
  },
  {
    id: "discrete-math",
    name: "Discrete Mathematics",
    icon: Binary,
    color: "text-pink-500 dark:text-pink-200",
    gradient: "from-pink-100 to-red-200 dark:from-pink-700 dark:to-red-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Discrete mathematics study",
  },
  {
    id: "fourier",
    name: "Fourier Series",
    icon: Waves,
    color: "text-cyan-500 dark:text-cyan-200",
    gradient: "from-sky-100 to-cyan-200 dark:from-sky-700 dark:to-cyan-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Fourier series representation",
  },
  {
    id: "geometry",
    name: "Geometry",
    icon: Shapes,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient:
      "from-yellow-100 to-orange-200 dark:from-yellow-700 dark:to-orange-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Geometric elements",
  },
  {
    id: "laplace",
    name: "Laplace",
    icon: TbMathIntegralX,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-orange-100 to-red-200 dark:from-orange-700 dark:to-red-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Laplace transform techniques",
  },
  {
    id: "linear-algebra",
    name: "Linear Algebra",
    icon: Grid,
    color: "text-purple-500 dark:text-purple-200",
    gradient:
      "from-indigo-100 to-purple-200 dark:from-indigo-700 dark:to-purple-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Linear algebra elements",
  },
  {
    id: "probability-statistics",
    name: "Probability & Statistics",
    icon: Percent,
    color: "text-indigo-500 dark:text-indigo-200",
    gradient:
      "from-violet-100 to-fuchsia-200 dark:from-violet-700 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Probability and statistics",
  },
  {
    id: "trigonometry",
    name: "Trigonometry",
    icon: Triangle,
    color: "text-lime-500 dark:text-lime-200",
    gradient: "from-lime-100 to-green-200 dark:from-lime-700 dark:to-green-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Triangle side-angle relationships",
  },
  {
    id: "z-transform",
    name: "Z-Transform",
    icon: Zap,
    color: "text-teal-500 dark:text-teal-200",
    gradient:
      "from-teal-100 to-emerald-200 dark:from-teal-700 dark:to-emerald-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Z-transform conversion",
  },
];

/**
 * A component that renders a challenging math quiz.
 * The quiz fetches questions from an API, allows the user to select a topic, difficulty, and number of questions,
 * and displays the results at the end. It features timed questions and local storage persistence.
 * Requires users to be logged in.
 * @returns {JSX.Element} The ChallengesQuiz component
 */
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

  const { data: session } = useSession(); // Get user session

  /**
   * Fetches quiz questions from the API when the quiz starts or when parameters change.
   * Stores the fetched questions in local storage.  Only runs if the user is logged in.
   * @memberof ChallengesQuiz
   */
  useEffect(() => {
    if (quizStarted && quizQuestions.length === 0 && session) {
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
              "formulaQuizData", // Changed key for consistency
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
    selectedTopic,
    selectedDifficulty,
    quizQuestions.length,
    session,
  ]); // Added missing dependencies and session

  /**
   * Tracks the time taken for the quiz.
   * @memberof ChallengesQuiz
   */
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

  /**
   * Sets a timeout for each question based on the selected difficulty.
   * Automatically moves to the next question when the time runs out.
   * @memberof ChallengesQuiz
   */
  useEffect(() => {
    if (!quizStarted || quizQuestions.length === 0) return;

    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;
    const timeLimit =
      selectedDifficulty === "advanced"
        ? 120000
        : selectedDifficulty === "intermediate"
          ? 90000
          : 60000;

    setTimeLeft(timeLimit / 1000);

    // Set Quiz Duration.
    setQuizDuration(timeLimit / 1000);

    timeout = setTimeout(() => {
      if (!isAnswered) {
        toast.error("Time's up! Moving to the next question.");
        handleNextQuestion(); // Call handleNextQuestion directly
      }
    }, timeLimit);

    return () => clearTimeout(timeout);
  }, [
    currentQuestionIndex,
    isAnswered,
    quizQuestions,
    quizStarted,
    selectedDifficulty,
  ]);

  /**
   * Tracks the time left for the current question.
   * @memberof ChallengesQuiz
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
   * Starts the quiz.  Checks for existing quiz data in local storage.
   * If data exists, prompts the user to either continue the existing quiz or start a new one.
   * If no data exists, or the user chooses to start a new quiz, fetches new questions.
   * Only allows starting the quiz if the user is logged in.
   * @memberof ChallengesQuiz
   */
  const handleStartQuiz = () => {
    if (!session) {
      toast.error("Please sign in to generate a quiz.");
      return;
    }

    const quizData = localStorage.getItem("formulaQuizData"); // Consistent key

    if (quizData) {
      const parsedData = JSON.parse(quizData);
      if (parsedData.questions && parsedData.questions.length > 0) {
        if (
          window.confirm(
            "Starting a new quiz will clear any existing quiz data. Continue?",
          )
        ) {
          localStorage.removeItem("formulaQuizData"); // Consistent key
          setQuizQuestions([]);
          setQuizStarted(true);
          setIsLoading(true);
          toast.info("Generating quiz...", { duration: 3000 });
        } else {
          // If the user cancels, *don't* restart the quiz. Load existing data.
          setQuizQuestions(parsedData.questions);
          setQuizStarted(true);
          setIsLoading(false); // We're not loading anymore
          setStartTime(Date.now());
          setTimeTaken(0);
        }
      }
    } else {
      // If there's no data in localStorage, start a new quiz
      setQuizQuestions([]); // Ensure quizQuestions is reset
      setQuizStarted(true);
      setIsLoading(true);
      toast.info("Generating quiz...", { duration: 3000 });
    }
  };

  /**
   * Handles the selection of an answer option.
   * Marks the question as answered, updates the score, and displays a toast message.
   * @param {string} option - The selected answer option.
   * @memberof ChallengesQuiz
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
   * Moves to the next question in the quiz.
   * If the current question is the last one, shows the results.
   * @memberof ChallengesQuiz
   */
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(
        selectedDifficulty === "advanced"
          ? 120
          : selectedDifficulty === "intermediate"
            ? 90
            : 60,
      );
    } else {
      // Quiz is finished
      setShowResult(true);
      setQuizStarted(false);
    }
  };

  /**
   * Array of available difficulty levels.
   * @type {string[]}
   * @memberof ChallengesQuiz
   */
  const difficulties = ["Basic", "Intermediate", "Advanced"];

  /**
   * Resets the quiz state to start a new quiz.
   * Clears any existing quiz data from local storage.
   * @memberof ChallengesQuiz
   */
  const handleStartAgain = () => {
    // Reset all states.
    setCurrentQuestionIndex(0);
    setQuizQuestions([]);
    setSelectedOption(null);
    setScore(0);
    setTimeTaken(0);
    setQuizStarted(false);
    setShowResult(false);
    setIsLoading(false);
    setQuizDuration(0);
    setTimeLeft(0);
    localStorage.removeItem("formulaQuizData"); // Clear quiz data
  };

  // Initial screen to configure the quiz
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
            {/* Topic Dropdown (Disabled) */}
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
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white/40 p-3 font-medium text-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-gray-500"
                  value="" // Empty value when disabled
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

            {/* Difficulty Dropdown (Disabled) */}
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
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white/40 p-3 font-medium text-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-gray-500"
                  value="" // Empty value when disabled
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

            {/* Number of Questions Input (Disabled) */}
            <div className="mb-6">
              <label
                htmlFor="numQuestions"
                className="mb-2 block bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-lg font-bold text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300"
              >
                Number of Questions:
              </label>
              <input
                type="number"
                id="numQuestions"
                min="3"
                max="20"
                value=""
                placeholder="e.g. 5"
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
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white/40 p-3 font-medium text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-white"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                >
                  <optgroup
                    label="Foundational"
                    className="bg-gray-200 dark:bg-gray-600"
                  >
                    {foundationalTopics.map((topic) => (
                      <option
                        key={topic.id}
                        value={topic.id}
                        className="bg-dropdown-light font-medium text-black dark:bg-dropdown-dark dark:text-white"
                      >
                        {topic.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup
                    label="Intermediate/Advanced"
                    className="bg-gray-200 dark:bg-gray-600"
                  >
                    {intermediateAdvancedTopics.map((topic) => (
                      <option
                        key={topic.id}
                        value={topic.id}
                        className="bg-dropdown-light font-medium text-black dark:bg-dropdown-dark dark:text-white"
                      >
                        {topic.name}
                      </option>
                    ))}
                  </optgroup>
                </select>
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
                  className="w-full appearance-none rounded-lg border border-gray-300  bg-white/40 p-3 font-medium text-black transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-dropdown-dark dark:text-white"
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
                    Math.max(3, Math.min(20, parseInt(e.target.value))), // Ensure min is 3
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

  // Display results component when quiz is finished
  if (showResult) {
    return (
      <Results
        score={score}
        totalQuestions={quizQuestions.length} // Use quizQuestions.length
        timeTaken={timeTaken}
        quizDuration={quizDuration}
        topic={selectedTopic}
        difficulty={selectedDifficulty}
        onStartAgain={handleStartAgain}
      />
    );
  }

  // Quiz in progress view
  return (
    <div className="container mx-auto max-w-3xl p-4">
      {isLoading && quizQuestions.length === 0 && (
        <Loader
          mainText={"Generating Challenges..."}
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
            disabled={!isAnswered && timeLeft > 0} // Disable if not answered OR time is still left
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
