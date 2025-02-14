"use client";

import "katex/dist/katex.min.css";
import React, { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Array of gradient color strings for practice problems.
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
 * @component VariablesAndExpressions
 * @description A client component that renders a page explaining variables and expressions.
 * @returns {JSX.Element} The rendered VariablesAndExpressions page.
 */
export default function VariablesAndExpressions() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Variables & Expressions",
      href: "/mathematics/concepts/foundational/variables-expressions",
    },
  ];

  /**
   * @state isColorful
   * @description State to toggle between colorful and grayscale themes.
   * @type {boolean}
   * @default true
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles based on `isColorful`.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  /**
   * @description Text color class, determined by the `isColorful` state.
   * @type {string}
   */
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Variables & Expressions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamentals of variables and algebraic expressions,
          including writing, evaluating, and simplifying them.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction to Variables */}
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
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Introduction to Variables
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A variable is a symbol (usually a letter) that represents an
              unknown number or value. Variables are used to write algebraic
              expressions and equations.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Examples:</strong> In the expression{" "}
                <InlineMath math={"2x + 3"} />, 'x' is a variable. Other common
                variables are y, z, a, b, etc.
              </p>
              <p className={`${textColor}`}>
                <strong>Another Example:</strong> In the equation{" "}
                <InlineMath math={"y = mx + c"} />, 'y', 'm', 'x' and 'c' are
                all variables.
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Why Use Variables?:</strong> Variables allow us to write
                general formulas and relationships that hold true for many
                different values.
              </p>
            </div>
          </div>
        </div>

        {/* Writing Algebraic Expressions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
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
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Writing Algebraic Expressions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Algebraic expressions combine variables, numbers, and at least one
              arithmetic operation.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Examples:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  The sum of a number and 5: <InlineMath math={"x + 5"} />
                </li>
                <li>
                  Twice a number: <InlineMath math={"2y"} />
                </li>
                <li>
                  Three less than a number: <InlineMath math={"z - 3"} />
                </li>
                <li>
                  A number divided by 4: <InlineMath math={"\\frac{a}{4}"} />
                </li>
                <li>
                  The product of a number and 7, increased by 2:{" "}
                  <InlineMath math={"7b + 2"} />
                </li>
                <li>
                  The square of a number, decreased by 1:{" "}
                  <InlineMath math={"x^2 - 1"} />
                </li>
              </ul>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Translating Words to Expressions:</strong> "Five more
                than twice a number" translates to{" "}
                <InlineMath math={"2x + 5"} />. "The quotient of a number and 3,
                decreased by 4" translates to{" "}
                <InlineMath math={"\\frac{x}{3} - 4"} />
              </p>
            </div>
          </div>
        </div>

        {/* Evaluating Algebraic Expressions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500 dark:to-pink-500"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Evaluating Algebraic Expressions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Evaluating an algebraic expression means finding its value when
              the variables are replaced with specific numbers.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Evaluate{" "}
                <InlineMath math={"3x + 2"} /> when{" "}
                <InlineMath math={"x = 4"} />.
              </p>
              <p className={`${textColor}`}>
                Substitute 4 for x:{" "}
                <InlineMath math={"3(4) + 2 = 12 + 2 = 14"} />.
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Another Example:</strong> Evaluate{" "}
                <InlineMath math={"a^2 - 2b"} /> when{" "}
                <InlineMath math={"a = 3"} /> and <InlineMath math={"b = 1"} />.
              </p>
              <p className={`${textColor}`}>
                Substitute 3 for a and 1 for b:
                <InlineMath math={"3^2 - 2(1) = 9 - 2 = 7"} />
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Order of Operations:</strong> Remember to follow the
                order of operations (PEMDAS/BODMAS) when evaluating expressions.
              </p>
            </div>
          </div>
        </div>

        {/* Simplifying Algebraic Expressions (Combining Like Terms) */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-orange-300`}
          >
            Simplifying Algebraic Expressions (Combining Like Terms)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Simplifying an expression involves combining like terms. Like
              terms have the same variable raised to the same power.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math={"3x + 2x - y + 5y"} />.
              </p>
              <p className={`${textColor}`}>
                Combine the x terms: <InlineMath math={"3x + 2x = 5x"} />.
              </p>
              <p className={`${textColor}`}>
                Combine the y terms: <InlineMath math={"-y + 5y = 4y"} />.
              </p>
              <p className={`${textColor}`}>
                Simplified expression: <InlineMath math={"5x + 4y"} />.
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Another Example:</strong> Simplify{" "}
                <InlineMath math={"2a^2 + 3a - a^2 + 5a - 2"} />.
              </p>
              <p className={`${textColor}`}>
                Combine the <InlineMath math={"a^2"} /> terms:
                <InlineMath math={"2a^2 - a^2 = a^2"} />
              </p>
              <p className={`${textColor}`}>
                Combine the <InlineMath math={"a"} /> terms:{" "}
                <InlineMath math={"3a + 5a = 8a"} />
              </p>
              <p className={`${textColor}`}>
                Simplified expression: <InlineMath math={"a^2 + 8a - 2"} />.
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Important Note:</strong> You can only combine like
                terms. <InlineMath math={"2x"} /> and{" "}
                <InlineMath math={"3x^2"} /> are *not* like terms.
              </p>
            </div>
          </div>
        </div>

        {/* The Distributive Property */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-100 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            The Distributive Property
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The distributive property allows you to multiply a sum by
              multiplying each addend separately and then adding the products.
              It's written as <InlineMath math={"a(b + c) = ab + ac"} />.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math={"3(x + 2)"} />.
              </p>
              <p className={`${textColor}`}>
                Distribute the 3: <InlineMath math={"3 * x + 3 * 2"} />.
              </p>
              <p className={`${textColor}`}>
                Simplified Expression: <InlineMath math={"3x + 6"} />.
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Another Example:</strong> Simplify{" "}
                <InlineMath math={"2(x - 4) + 5x"} />.
              </p>
              <p className={`${textColor}`}>
                Distribute the 2: <InlineMath math={"2 * x - 2 * 4 + 5x"} />.
              </p>
              <p className={`${textColor}`}>
                Simplify: <InlineMath math={"2x - 8 + 5x"} />.
              </p>
              <p className={`${textColor}`}>
                Combine like terms: <InlineMath math={"7x - 8"} />.
              </p>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Distributing with Negatives:</strong> Be careful with
                signs! <InlineMath math={"-2(x - 3) = -2x + 6"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass dark:bg-gray-800"
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
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem:
                  "\\text{Write an expression for: Five more than a number } x.",
                solution: "x + 5",
              },
              {
                problem: "\\text{Evaluate } 2a + 7 \\text{ when } a = 3.",
                solution: "13",
              },
              {
                problem: "\\text{Simplify: } 4y - y + 6z - 2z",
                solution: "3y + 4z",
              },
              {
                problem:
                  "\\text{Write an expression for: The product of 8 and a number } b.",
                solution: "8b",
              },
              {
                problem:
                  "\\text{Evaluate } \\frac{c}{2} + 5 \\text{ when } c = 10.",
                solution: "10",
              },
              {
                problem: "\\text{Simplify: } 5x + 3 - 2x + 1",
                solution: "3x + 4",
              },
              {
                problem:
                  "\\text{Write an expression for: Three times a number } m \\text{ decreased by 2. }",
                solution: "3m - 2",
              },
              {
                problem: "\\text{Evaluate } 4(n - 1) \\text{ when } n = 6.",
                solution: "20",
              },
              {
                problem: "\\text{Simplify: } 7p + 2q - p + 4q",
                solution: "6p + 6q",
              },
              {
                problem:
                  "\\text{Write an expression for: The quotient of a number } k \\text{ and 9.}",
                solution: "\\frac{k}{9}",
              },
              {
                problem: "\\text{Simplify: } 2(x + 3) - 5",
                solution: "2x + 1",
              },
              {
                problem:
                  "\\text{Evaluate: }  3(a - 2) + 4a \\text{ when } a = 5",
                solution: "29", // 3(5-2) + 4(5) = 3(3) + 20 = 9 + 20
              },
              {
                problem: "\\text{Simplify: } -4(y - 1) + 2y",
                solution: "-2y + 4",
              },
              {
                problem:
                  "\\text{Write an expression for:  Twice the sum of a number } z \\text{ and 8.}",
                solution: "2(z + 8)",
              },
              {
                problem:
                  "\\text{Evaluate: } \\frac{x^2 + 4}{3} \\text{ when } x = 2 ",
                solution: "\\frac{8}{3}",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                } hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                >
                  <BlockMath math={item.problem} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
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
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-600"
                    } ${scrollbarStyle}`}
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
          Building Blocks of Algebra
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
