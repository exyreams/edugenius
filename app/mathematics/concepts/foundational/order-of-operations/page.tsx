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
 * @component OrderOfOperations
 * @description A client component for explaining the order of operations (PEMDAS/BODMAS).
 * @returns {JSX.Element} The rendered OrderOfOperations page.
 */
export default function OrderOfOperations() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Order of Operations",
      href: "/mathematics/concepts/foundational/order-of-operations",
    },
  ];

  /**
   * @state isColorful
   * @description State for toggling between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles based on the isColorful state.
   * @type {string}
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
          Order of Operations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn and apply the order of operations (PEMDAS/BODMAS) to simplify
          mathematical expressions correctly.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding PEMDAS/BODMAS */}
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
            Understanding PEMDAS/BODMAS
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              PEMDAS/BODMAS is an acronym to help remember the order of
              operations:
            </p>
            <ul className={`ml-6 list-disc ${textColor}`}>
              <li>
                <strong>P</strong>arentheses / <strong>B</strong>rackets
              </li>
              <li>
                <strong>E</strong>xponents / <strong>O</strong>rders (ie Powers
                and Square Roots, etc.)
              </li>
              <li>
                <strong>M</strong>ultiplication and <strong>D</strong>ivision
                (from left to right)
              </li>
              <li>
                <strong>A</strong>ddition and <strong>S</strong>ubtraction (from
                left to right)
              </li>
            </ul>
          </div>
        </div>

        {/* Parentheses/Brackets */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-amber-300`}
          >
            1. Parentheses/Brackets
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Operations inside parentheses or brackets are performed first.
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
                <InlineMath math={"(5 + 3) \\times 2"} />.
              </p>
              <p className={`${textColor}`}>
                Inside parentheses: <InlineMath math={"5 + 3 = 8"} />.
              </p>
              <p className={`${textColor}`}>
                Then multiplication: <InlineMath math={"8 \\times 2 = 16"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Exponents/Orders */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-600 dark:to-rose-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-rose-300`}
          >
            2. Exponents/Orders
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Exponents (powers, square roots, etc.) are performed next.</p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math={"2^3 + 4"} />.
              </p>
              <p className={`${textColor}`}>
                Exponent: <InlineMath math={"2^3 = 8"} />.
              </p>
              <p className={`${textColor}`}>
                Then addition: <InlineMath math={"8 + 4 = 12"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Multiplication and Division */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            3. Multiplication and Division
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Multiplication and division are performed from left to right.</p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math={"6 \\div 2 \\times 3"} />.
              </p>
              <p className={`${textColor}`}>
                Division (left to right): <InlineMath math={"6 \\div 2 = 3"} />.
              </p>
              <p className={`${textColor}`}>
                Then multiplication: <InlineMath math={"3 \\times 3 = 9"} />.
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
                <InlineMath math={"4 \\times 5 \\div 2"} />.
              </p>
              <p className={`${textColor}`}>
                Multiplication (left to right):{" "}
                <InlineMath math={"4 \\times 5 = 20"} />
              </p>
              <p className={`${textColor}`}>
                Then division:
                <InlineMath math={"20 \\div 2 = 10"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Addition and Subtraction */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
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
            4. Addition and Subtraction
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Addition and subtraction are performed from left to right.</p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math={"10 - 4 + 2"} />.
              </p>
              <p className={`${textColor}`}>
                Subtraction (left to right): <InlineMath math={"10 - 4 = 6"} />.
              </p>
              <p className={`${textColor}`}>
                Then addition: <InlineMath math={"6 + 2 = 8"} />.
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
                <InlineMath math={"3 + 7 - 5 + 2"} />.
              </p>
              <p className={`${textColor}`}>
                Addition (left to right): <InlineMath math={"3+7=10"} />
              </p>
              <p className={`${textColor}`}>
                Subtraction(left to right): <InlineMath math={"10 - 5 = 5"} />.
              </p>

              <p className={`${textColor}`}>
                Then addition: <InlineMath math={"5 + 2 = 7"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Applying Order of Operations (Complex Expressions) */}
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
            Applying Order of Operations (Complex Expressions)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Apply PEMDAS/BODMAS to more complex expressions involving multiple
              operations, parentheses, and exponents.
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
                <InlineMath math={"(5 + 3) \\times 2^2 - 10 \\div 5"} />.
              </p>
              <p className={`${textColor}`}>
                Parentheses: <InlineMath math={"5 + 3 = 8"} />.
              </p>
              <p className={`${textColor}`}>
                Exponent: <InlineMath math={"2^2 = 4"} />.
              </p>
              <p className={`${textColor}`}>
                Multiplication: <InlineMath math={"8 \\times 4 = 32"} />.
              </p>
              <p className={`${textColor}`}>
                Division: <InlineMath math={"10 \\div 5 = 2"} />.
              </p>
              <p className={`${textColor}`}>
                Subtraction: <InlineMath math={"32 - 2 = 30"} />.
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
                <InlineMath math={"100 \\div (5 \\times (2+3)) + 7 - 2^2"} />
              </p>
              <p className={`${textColor}`}>
                Inner Parentheses: <InlineMath math={"2 + 3 = 5"} />
              </p>
              <p className={`${textColor}`}>
                Outer Parentheses:
                <InlineMath math={"5 \\times 5 = 25"} />.
              </p>
              <p className={`${textColor}`}>
                Exponent: <InlineMath math={"2^2 = 4"} />.
              </p>
              <p className={`${textColor}`}>
                Division: <InlineMath math={"100 \\div 25 = 4"} />
              </p>
              <p className={`${textColor}`}>
                Addition and Subtraction (left to right):{" "}
                <InlineMath math={"4 + 7 - 4 = 7"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Common Mistakes and Pitfalls */}
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
            Common Mistakes and Pitfalls
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Be aware of common mistakes, such as performing operations out of
              order or misinterpreting nested parentheses.
            </p>
            <ul className={`ml-6 list-disc ${textColor}`}>
              <li>
                <strong>Not following left-to-right rule:</strong> Remember that
                multiplication/division and addition/subtraction are performed
                from left to right.
              </li>
              <li>
                <strong>Incorrectly handling nested parentheses:</strong> Work
                from the innermost set of parentheses outwards.
              </li>
              <li>
                <strong>Forgetting exponents:</strong> Ensure exponents are
                calculated before multiplication, division, addition, and
                subtraction.
              </li>
            </ul>
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
                problem: "2 + 3 \\times 4",
                solution: "14",
              },
              {
                problem: "10 - 6 \\div 2",
                solution: "7",
              },
              {
                problem: "(4 + 5) \\times 3",
                solution: "27",
              },
              {
                problem: "2^3 + 5 \\times 2",
                solution: "18",
              },
              {
                problem: "15 \\div (3 + 2) - 1",
                solution: "2",
              },
              {
                problem: "(9 - 4) \\times 2^2",
                solution: "20",
              },
              {
                problem: "6 + 8 \\div 2 - 3",
                solution: "7",
              },
              {
                problem: "4 \\times (7 - 2) + 1",
                solution: "21",
              },
              {
                problem: "3^2 + (8 - 5) \\times 4",
                solution: "21",
              },
              {
                problem: "20 \\div 4 + 3 \\times (6 - 2)",
                solution: "17",
              },
              {
                problem: "12 \\div 3 \\times 2 + 5 - 2^2",
                solution: "9",
              },
              {
                problem: "(1 + 2 \\times 3)^2 - 10",
                solution: "39", // (1 + 6)^2 - 10  -> 7^2 -10 -> 49-10
              },
              {
                problem: "5 \\times (4 - 2) + 3^3 \\div 9",
                solution: "13", // 5 * 2 + 27 / 9 --> 10 + 3
              },
              {
                problem: "25 - (2 + 3 \\times 4)^2 \\div 7",
                solution: "-3", //  25 - (2 + 12)^2 / 7 -->  25 - (14)^2/7 --> 25 - 196/7 --> 25 - 28
              },
              {
                problem: "\\frac{16 \\div 2 + 6}{4-1} + 2^3",
                solution: "12", //  (16 / 2 + 6) / (4-1)  + 8 = (8 + 6)/3 + 8 = 14/3 + 8
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
          Following the Rules of Calculation
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
