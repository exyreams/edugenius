"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  TbMathFunction,
  TbMathIntegrals,
  TbMathXDivideY2,
  TbMathXDivideY,
  TbMathSymbols,
  TbMathMax,
  TbMathMin,
  TbMathXPlusY,
  TbMathXMinusY,
  TbMathIntegralX,
} from "react-icons/tb";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @typedef {Object} DifferentialEquationTopic
 * @property {string} id - Unique identifier for the topic.
 * @property {string} name - Name of the topic.
 * @property {JSX.Element} icon - Icon representing the topic.
 * @property {string} description - Brief description of the topic.
 * @property {string} gradient - CSS gradient class for the topic card background.
 * @property {string} text - CSS class for text color.
 */

/**
 * @type {DifferentialEquationTopic[]}
 * @description Array of differential equation topics, each representing a key concept.
 */
const differentialEquationTopics = [
  {
    id: "basic-concepts",
    name: "Basic Concepts",
    icon: (
      <TbMathFunction className="h-6 w-6 text-blue-400 dark:text-blue-300" />
    ),
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Introduction to differential equations and terminology",
  },
  {
    id: "first-order-equations",
    name: "First-Order Equations",
    icon: (
      <TbMathXDivideY className="h-6 w-6 text-green-400 dark:text-green-300" />
    ),
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Solving equations with first derivatives",
  },
  {
    id: "first-order-linear-differential-equation",
    name: "First-Order Linear Equations",
    icon: (
      <TbMathXPlusY className="h-6 w-6 text-purple-400 dark:text-purple-300" />
    ),
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Linear first-order differential equations and integrating factors",
  },
  {
    id: "separable-differential-equation",
    name: "Separable Equations",
    icon: (
      <TbMathXMinusY className="h-6 w-6 text-orange-400 dark:text-orange-300" />
    ),
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Equations that can be separated into variables",
  },
  {
    id: "exact-differential-equations",
    name: "Exact Equations",
    icon: (
      <TbMathSymbols className="h-6 w-6 text-teal-400 dark:text-teal-300" />
    ),
    gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Equations with exact differentials and integrating factors",
  },
  {
    id: "homogeneous-differential-equation",
    name: "Homogeneous Equations",
    icon: (
      <TbMathMax className="h-6 w-6 text-rose-400 dark:text-rose-300" />
    ),
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Homogeneous differential equations and substitution methods",
  },
  {
    id: "higher-order-linear-differential-equations",
    name: "Higher-Order Linear Equations",
    icon: (
      <TbMathXDivideY2 className="h-6 w-6 text-indigo-400 dark:text-indigo-300" />
    ),
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Second and higher-order linear differential equations",
  },
  {
    id: "differential-equations-with-constant-coefficients",
    name: "Constant Coefficients",
    icon: (
      <TbMathMin className="h-6 w-6 text-lime-400 dark:text-lime-300" />
    ),
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Linear equations with constant coefficients",
  },
  {
    id: "differential-equations-with-coefficients-of-parallel-lines",
    name: "Parallel Line Coefficients",
    icon: (
      <TbMathIntegrals className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
    ),
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Equations with coefficients forming parallel lines",
  },
  {
    id: "differential-equations-with-coefficients-of-non-parallel-lines",
    name: "Non-Parallel Line Coefficients",
    icon: (
      <TbMathIntegralX className="h-6 w-6 text-sky-400 dark:text-sky-300" />
    ),
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Equations with coefficients forming non-parallel lines",
  },
  {
    id: "properties-of-the-constant-of-integration",
    name: "Integration Constants",
    icon: (
      <TbMathSymbols className="h-6 w-6 text-emerald-400 dark:text-emerald-300" />
    ),
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Properties and significance of integration constants",
  },
  {
    id: "bernoulli-equations",
    name: "Bernoulli Equations",
    icon: (
      <TbMathFunction className="h-6 w-6 text-violet-400 dark:text-violet-300" />
    ),
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Nonlinear equations solved by substitution methods",
  },
  {
    id: "riccati-equations",
    name: "Riccati Equations",
    icon: (
      <TbMathXDivideY className="h-6 w-6 text-red-400 dark:text-red-300" />
    ),
    gradient:
      "from-red-200 to-rose-200 dark:from-red-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Special nonlinear equations with quadratic terms",
  },
  {
    id: "systems-of-differential-equations",
    name: "Systems of Equations",
    icon: (
      <TbMathIntegralX className="h-6 w-6 text-cyan-400 dark:text-cyan-300" />
    ),
    gradient:
      "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Coupled equations solved using matrix methods",
  },
];

/**
 * @component DifferentialEquations
 * @description Renders the main page for Differential Equations concepts.
 * @returns {JSX.Element} The Differential Equations page.
 */
export default function DifferentialEquations() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb navigation items for the page.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Differential Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations",
    },
  ];

  /**
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} isColorful
   * @description State to manage to apply colorful style, or glass style to the page.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the mathematics of dynamic systems through equations involving derivatives and their solutions
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Introduction Section */}
      <div className={`mt-8 rounded-lg p-6 shadow-md ${isColorful
          ? "bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900"
          : "glass dark:bg-gray-800"
        }`}>
        <h2 className={`text-xl font-semibold mb-4 ${isColorful
            ? "text-indigo-800 dark:text-indigo-200"
            : "text-gray-800 dark:text-gray-200"
          }`}>
          About Differential Equations
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Differential equations are mathematical equations that relate functions with their derivatives.
          They are fundamental tools for modeling dynamic systems in physics, engineering, biology, economics,
          and many other fields. From population growth to heat transfer, from oscillating springs to
          electrical circuits, differential equations help us understand how quantities change over time or space.
        </p>
      </div>

      {/* Learning Path */}
      <div className={`mt-8 rounded-lg p-6 shadow-md ${isColorful
          ? "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900"
          : "glass dark:bg-gray-800"
        }`}>
        <h2 className={`text-xl font-semibold mb-4 ${isColorful
            ? "text-green-800 dark:text-green-200"
            : "text-gray-800 dark:text-gray-200"
          }`}>
          Recommended Learning Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${isColorful
              ? "bg-white/50 dark:bg-black/20"
              : "bg-gray-100 dark:bg-gray-700"
            }`}>
            <h3 className="font-semibold text-green-700 dark:text-green-300">Beginner</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Start with Basic Concepts, then move to First-Order Equations and Separable Equations
            </p>
          </div>
          <div className={`p-4 rounded-lg ${isColorful
              ? "bg-white/50 dark:bg-black/20"
              : "bg-gray-100 dark:bg-gray-700"
            }`}>
            <h3 className="font-semibold text-green-700 dark:text-green-300">Intermediate</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Study Linear Equations, Exact Equations, and Homogeneous Equations
            </p>
          </div>
          <div className={`p-4 rounded-lg ${isColorful
              ? "bg-white/50 dark:bg-black/20"
              : "bg-gray-100 dark:bg-gray-700"
            }`}>
            <h3 className="font-semibold text-green-700 dark:text-green-300">Advanced</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Tackle Higher-Order Equations and specialized coefficient cases
            </p>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {differentialEquationTopics.map((topic) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/differential-equations/${topic.id}`}
            key={topic.id}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${isColorful
                ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                : "glass text-gray-800 dark:text-white"
              }`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Topic Icon */}
                <div
                  className={`rounded-lg p-3 ${isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                    }`}
                >
                  {topic.icon}
                </div>
                {/* Topic Name */}
                <h3
                  className={`text-lg font-semibold ${isColorful
                      ? "currentcolor"
                      : "text-gray-800 dark:text-white"
                    }`}
                >
                  {topic.name}
                </h3>
              </div>
              {/* Topic Description */}
              <p
                className={`text-sm leading-6 ${isColorful
                    ? "text-gray-600 dark:text-gray-200"
                    : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                {topic.description}
              </p>
              {/* "Explore Concepts" Link */}
              <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span
                  className={`text-sm font-medium ${isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-800 dark:text-white"
                    }`}
                >
                  Explore Concepts
                </span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-800 dark:text-white"
                    }`}
                />
              </div>
            </div>

            {/* Animated background element */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${isColorful
                  ? "bg-black/5 dark:bg-white/10"
                  : "bg-gray-200/50 dark:bg-gray-700/50"
                }`}
            />
          </Link>
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Equations of Change and Growth
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}