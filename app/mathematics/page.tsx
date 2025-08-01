"use client";

import Link from "next/link";
import {
  BarChart,
  Binary,
  BookOpen,
  Calculator,
  ChevronRight,
  Divide,
  FunctionSquare,
  Grid,
  LayoutDashboard,
  Lightbulb,
  Percent,
  Pi,
  Ruler,
  Scale,
  Shapes,
  SquareSigma,
  Triangle,
  Variable,
  Waves,
  Zap,
} from "lucide-react";
import { MdStraight } from "react-icons/md";
import { FaChevronRight, FaFileUpload } from "react-icons/fa";
import { SiLibreofficemath } from "react-icons/si";
import { TbMath, TbMathIntegrals, TbMathIntegralX } from "react-icons/tb";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @typedef {Object} Topic
 * @property {string} id - Unique identifier for the topic.
 * @property {string} name - Name of the topic.
 * @property {Function} icon - React component for the topic icon.
 * @property {string} color - Tailwind CSS class for the icon color.
 * @property {string} gradient - Tailwind CSS classes for the background gradient.
 * @property {string} text - Tailwind CSS class for text color.
 * @property {string} description - Short description of the topic.
 */

/**
 * @type {Topic[]}
 * @description Array of foundational mathematics topics.
 */
const foundationalTopics = [
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
    id: "basic-shapes",
    name: "Basic Shapes",
    icon: Shapes,
    color: "text-lime-500 dark:text-lime-200",
    gradient:
      "from-lime-100 to-emerald-200 dark:from-lime-700 dark:to-emerald-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Triangles, squares, circles, and more.",
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
 * @type {Topic[]}
 * @description Array of intermediate and advanced mathematics topics.
 */
const intermediateAdvancedTopics = [
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

const interactiveTools = [
  {
    id: "challenges",
    title: "Challenges",
    description: "Solve mathematical problems to test your skills.",
    href: "/mathematics/quiz/challenges",
    icon: SiLibreofficemath,
    cta: "Take Challenge",
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    comingSoon: false,
    span: "lg:col-span-1",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Upload images for step-by-step solutions.",
    href: "/mathematics/solve",
    icon: Lightbulb,
    cta: "Start Solving",
    gradient: "from-purple-200 to-blue-200 dark:from-purple-600 dark:to-blue-600",
    comingSoon: false,
    span: "lg:col-span-2",
  },
  {
    id: "formula-quiz",
    title: "Formula Quiz",
    description: "Test your knowledge of mathematical formulas.",
    href: "/mathematics/quiz/formulas",
    icon: SquareSigma,
    cta: "Take Quiz",
    gradient:
      "from-purple-200 to-indigo-200 dark:from-purple-600 dark:to-indigo-600",
    comingSoon: false,
    span: "lg:col-span-1",
  },
  {
    id: "quiz-from-file",
    title: "Quiz from File",
    description: "Upload a file to generate a custom quiz.",
    href: "/mathematics/quiz/from-files",
    icon: FaFileUpload,
    cta: "Start Quiz",
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    comingSoon: false,
    span: "lg:col-span-1",
  },
  {
    id: "concept-explainer",
    title: "Concept Explainer",
    description: "Comprehensive guides for math concepts.",
    href: "#",
    icon: BookOpen,
    cta: "Learn More",
    gradient: "from-green-200 to-teal-200 dark:from-green-600 dark:to-teal-600",
    comingSoon: true,
    span: "lg:col-span-1",
  },
];

/**
 * @returns {JSX.Element} - "Coming Soon" tag component.
 * @description - Renders a "Coming Soon" tag.
 */
const ComingSoonTag = () => (
  <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-xs font-semibold text-black">
    Coming Soon
  </span>
);

/**
 * @function Mathematics
 * @description Main component for the Mathematics page.
 * @returns {JSX.Element} The Mathematics component.
 */
export default function Mathematics() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Mathematics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the world of mathematics, from basic concepts to advanced
          topics.
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Interactive Tools Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent dark:from-amber-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Interactive Tools
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interactiveTools.map((tool) => {
            const cardContent = (
              <>
                {tool.comingSoon && <ComingSoonTag />}
                <div className="flex h-full flex-col justify-between p-8">
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={`rounded-lg p-3 ${
                          isColorful
                            ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                            : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      >
                        <tool.icon
                          className={`h-8 w-8 ${
                            isColorful
                              ? "text-black dark:text-white"
                              : "text-gray-800 dark:text-white"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-semibold ${
                          isColorful
                            ? "text-black dark:text-white"
                            : "text-gray-800 dark:text-white"
                        }`}
                      >
                        {tool.title}
                      </h3>
                    </div>
                    <p
                      className={`mb-6 text-base leading-relaxed ${
                        isColorful
                          ? "text-gray-600 dark:text-gray-200"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className={`text-md font-medium ${
                        isColorful
                          ? "text-gray-700 dark:text-white/80"
                          : "text-gray-700 dark:text-white/80"
                      }`}
                    >
                      {tool.cta}
                    </span>
                    <ChevronRight
                      className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${
                        isColorful
                          ? "text-gray-700 dark:text-white/80"
                          : "text-gray-700 dark:text-white/80"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full transition-all duration-500 group-hover:-right-8 group-hover:-top-8 ${
                    isColorful
                      ? "bg-black/5 dark:bg-white/10"
                      : "bg-gray-300/50 dark:bg-gray-700/50"
                  }`}
                />
              </>
            );

            const cardClasses = `group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:hover:shadow-black/40 flex flex-col ${
              isColorful ? `bg-gradient-to-br ${tool.gradient}` : "glass"
            } ${
              tool.comingSoon ? "cursor-not-allowed opacity-70" : ""
            } ${tool.span}`;

            if (tool.comingSoon) {
              return (
                <div key={tool.id} className={cardClasses}>
                  {cardContent}
                </div>
              );
            }

            return (
              <Link href={tool.href} key={tool.id} className={cardClasses}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Foundational Mathematics (Ages 13-17) */}
      <div className="mt-12">
        <h2
          className={`mb-6 mt-8 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Foundational Mathematics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foundationalTopics.map((topic) => (
            // All Foundational topics should be clickable
            <Link
              href={`/mathematics/concepts/foundational/${topic.id}`}
              key={topic.id}
              className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-lg p-2 ${
                      isColorful
                        ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/25`
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <topic.icon
                      className={`h-5 w-5 ${
                        isColorful
                          ? "text-current"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    />
                  </div>
                  <h4 className={`font-medium ${topic.text}`}>{topic.name}</h4>
                </div>
                <div className="flex justify-between">
                  <p
                    className={`text-sm leading-6 ${
                      isColorful
                        ? "text-gray-600 dark:text-gray-200"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {topic.description}
                  </p>
                  <FaChevronRight
                    className={`${
                      isColorful
                        ? topic.color
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  />
                </div>
              </div>
              {/* Animated background element */}
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                  isColorful
                    ? "bg-black/5 dark:bg-white/10"
                    : "bg-gray-300/50 dark:bg-gray-700/50"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Essential Concepts & Formulas (Intermediate/Advanced) */}
      <div className="mt-12">
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Intermediate & Advanced Mathematics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {intermediateAdvancedTopics.map((topic) => {
            const Icon = topic.icon;
            const isComingSoon = !["algebra", "calculus"].includes(topic.id);
            return (
              // Wrapper div for hover effects
              <div
                key={topic.id}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                  isColorful
                    ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                    : "glass text-gray-800 dark:text-white"
                }`}
              >
                  <Link
                    href={`/mathematics/concepts/intermediate-advanced/${topic.id}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-lg p-2 ${
                            isColorful
                              ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/25`
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              isColorful
                                ? "text-current"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          />
                        </div>
                        <h4 className={`font-medium ${topic.text}`}>
                          {topic.name}
                        </h4>
                      </div>
                      <div className="flex justify-between">
                        <p
                          className={`text-sm leading-6 ${
                            isColorful
                              ? "text-gray-600 dark:text-gray-200"
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {topic.description}
                        </p>
                        <FaChevronRight
                          className={`${
                            isColorful
                              ? topic.color
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        />
                      </div>
                    </div>
                    {/* Animated background element */}
                    <div
                      className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                        isColorful
                          ? "bg-black/5 dark:bg-white/10"
                          : "bg-gray-300/50 dark:bg-gray-700/50"
                      }`}
                    />
                  </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Universe&#39;s Hidden Harmony
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}
