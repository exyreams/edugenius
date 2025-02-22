"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";
import PascalTriangle from "./components/PascalsTraingle";

/**
 * Array of color gradient classes for styling the practice problems.
 * Each string is a Tailwind CSS class for a gradient background.
 * @type {string[]}
 */
const problemColors = [
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
  "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700",
  "from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700",
  "from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700",
  "from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700",
];

/**
 * BinomialTheorem Component
 * @returns {JSX.Element} The Binomial Theorem page.
 * @description A React component that explains and demonstrates the Binomial Theorem,
 * including its formula, properties, Pascal's Triangle visualization,
 * real-world applications, and practice exercises.
 */
export default function BinomialTheorem() {
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
      label: "Algebra",
      href: "/mathematics/concepts/intermediate-advanced/algebra",
    },
    {
      label: "Binomial Theorem",
      href: "/mathematics/concepts/intermediate-advanced/algebra/binomial-theorem",
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
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Binomial Theorem
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the expansion of binomial expressions raised to any power,
          revealing the underlying patterns and coefficients.
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Theorem Section */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300 `}
          >
            Fundamental Expansion
          </h2>
          {/* Fundamental Expansion Formula */}
          <div className="mt-4 flex justify-start overflow-x-auto  p-4">
            <BlockMath math="(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k}" />
          </div>
        </div>

        {/* Extended Form Section */}
        <div
          className={` rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300 `}
          >
            Extended Form
          </h2>
          {/* Extended Form Formula */}
          <div className="mt-4 flex justify-start overflow-x-auto  p-4">
            <BlockMath math="(a + b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n-1}ab^{n-1} + \binom{n}{n}b^n" />
          </div>
          {/* Explanation of Extended Form */}
          <div className="mt-4 text-gray-600 dark:text-gray-300">
            <p className="flex items-baseline gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">●</span>
              Explicit expansion showing all binomial coefficients
            </p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">●</span>
              Total of <InlineMath math="n + 1" /> terms in the expansion
            </p>
          </div>
        </div>

        {/* Key Components Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Coefficients Card */}
          <div
            className={` rounded-lg p-6 shadow-md ${
              isColorful
                ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
                : "glass"
            }`}
          >
            <h3
              className={`text-xl font-semibold  ${
                isColorful ? "" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              Binomial Coefficients
            </h3>
            {/* Binomial Coefficients Formula and Explanation */}
            <div className="mt-4 space-y-3">
              <BlockMath math="\binom{n}{k} = \frac{n!}{k!(n-k)!}" />
              <p className={`text-gray-600 dark:text-gray-300 `}>
                Combination formula representing:
              </p>
              <ul
                className={`ml-4 list-disc space-y-2  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <li>Number of ways to choose k elements from n</li>
                <li>
                  Coefficient of <InlineMath math="a^{n-k}b^k" />
                </li>
              </ul>
            </div>
          </div>

          {/* Properties Card */}
          <div
            className={` rounded-lg p-6 shadow-md ${
              isColorful
                ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
                : "glass"
            }`}
          >
            <h3
              className={`text-xl font-semibold  ${
                isColorful ? "" : "text-gray-800 dark:text-gray-200"
              }`}
            >
              Key Properties
            </h3>
            {/* Key Properties Formulas */}
            <div className="mt-4 space-y-3">
              <div
                className={`rounded-lg  p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\sum_{k=0}^n \binom{n}{k} = 2^n" />
              </div>
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\binom{n}{k} = \binom{n}{n-k}" />
              </div>
              <div
                className={`rounded-lg  p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}" />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Demonstration */}
        <div
          className={` rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-600 dark:to-indigo-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-indigo-300`}
          >
            Pascal's Triangle Visualization
          </h2>
          {/* Pascal's Triangle and Explanation */}
          <div className="mt-4 flex flex-col items-center gap-6 md:flex-row">
            <div
              className={`flex-1 rounded-lg p-4 ${
                isColorful ? "backdrop-blur-sm" : ""
              }`}
            >
              <PascalTriangle isColorful={true} />
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                Each entry is the sum of the two entries directly above it:
              </p>
              <BlockMath math="\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}" />
            </div>
          </div>
        </div>

        {/* Practical Applications */}
        <div
          className={` rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-lime-200 dark:from-yellow-600 dark:to-lime-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-green-300 `}
          >
            Real-World Applications
          </h2>
          {/* Real-World Applications Grid */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {/* Probability Theory */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-lime-600 dark:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Probability Theory
                </h3>
                <BlockMath math="P(k) = \binom{n}{k} p^k (1-p)^{n-k}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Binomial distribution formula for exactly k successes in n
                  trials
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {/* Financial Mathematics */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-green-600 dark:text-green-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Financial Mathematics
                </h3>
                <BlockMath math="(1 + r)^n = \sum_{k=0}^n \binom{n}{k} r^k" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Compound interest expansion and financial modeling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={` rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-lime-300 dark:to-green-300 `}
          >
            Practice Exercises
          </h2>
          {/* Practice Problems Grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem: "\\text{Expand } (x + 2)^4",
                solution: "x^4 + 8x^3 + 24x^2 + 32x + 16",
              },
              {
                problem: "\\text{Find the 5th term in } (a - b)^7",
                solution: "-35a^3b^4",
              },
              {
                problem: "\\text{Calculate } \\sum_{k=0}^4 \\binom{4}{k}",
                solution: "2^4 = 16",
              },
              {
                problem: "\\text{Prove } \\binom{9}{2} = \\binom{9}{7}",
                solution:
                  "\\binom{9}{2} = \\frac{9!}{2!7!} = 36 = \\binom{9}{7}",
              },
              {
                problem:
                  "\\text{Find coefficient of } x^2 \\text{ in } (3x + 1)^5",
                solution: "\\binom{5}{2}(3)^2(1)^3 = 10 \\times 9 = 90",
              },
              {
                problem: "\\text{Verify } (1.01)^3 \\text{ using theorem}",
                solution: "1 + 3(0.01) + 3(0.0001) + 0.000001 = 1.030301",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg  p-4 transition-all   ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white "
                } hover:shadow-lg `}
              >
                {/* Problem Number */}
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                {/* Problem Statement */}
                <div className="mt-2 flex justify-start overflow-x-auto">
                  <BlockMath math={item.problem} />
                </div>
                {/* Solution Dropdown */}
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    {/* Dropdown Arrow Icon */}
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  {/* Solution Display */}
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3  ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          The Power of Combinatorics
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
