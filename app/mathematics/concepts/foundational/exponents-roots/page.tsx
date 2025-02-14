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
 * @component ExponentsAndRoots
 * @description A client component explaining exponents and roots.
 * @returns {JSX.Element} The rendered ExponentsAndRoots page.
 */
export default function ExponentsAndRoots() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Exponents & Roots",
      href: "/mathematics/concepts/foundational/exponents-roots",
    },
  ];

  /**
   * @state isColorful
   * @description State for toggling colorful/grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  /**
   * @description Text color class, determined by the `isColorful` state.
   */
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Exponents & Roots
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the concepts of exponents and roots, including their properties
          and how to calculate them.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding Exponents */}
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
            Understanding Exponents
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              An exponent indicates how many times a base number is multiplied
              by itself.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath
                math={
                  "b^n = \\underbrace{b \\times b \\times \\cdots \\times b}_{n \\text{ times}}"
                }
              />
              <p className={`mt-2 ${textColor}`}>
                <strong>Examples:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  <InlineMath math={"2^3 = 2 \\times 2 \\times 2 = 8"} />
                </li>
                <li>
                  <InlineMath math={"5^2 = 5 \\times 5 = 25"} />
                </li>
                <li>
                  <InlineMath
                    math={"10^4 = 10 \\times 10 \\times 10 \\times 10 = 10000"}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Properties of Exponents */}
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
            Properties of Exponents
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Exponents have several properties that simplify calculations:</p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  Product of powers:{" "}
                  <InlineMath math={"a^m \\times a^n = a^{m+n}"} />
                </li>
                <li>
                  Quotient of powers:{" "}
                  <InlineMath math={"\\frac{a^m}{a^n} = a^{m-n}"} />
                </li>
                <li>
                  Power of a power:{" "}
                  <InlineMath math={"(a^m)^n = a^{m \\times n}"} />
                </li>
                <li>
                  Power of a product: <InlineMath math={"(ab)^n = a^n b^n"} />
                </li>
                <li>
                  Power of a quotient:{" "}
                  <InlineMath math={"(\\frac{a}{b})^n = \\frac{a^n}{b^n}"} />
                </li>
                <li>
                  Zero exponent: <InlineMath math={"a^0 = 1"} /> (for any
                  non-zero a)
                </li>
                <li>
                  Negative exponent:{" "}
                  <InlineMath math={"a^{-n} = \\frac{1}{a^n}"} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Understanding Roots */}
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
            Understanding Roots
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A root is the inverse operation of an exponent. The nth root of a
              number b is a value that, when raised to the power of n, equals b.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math={"\\sqrt[n]{b} = a \\text{ if } a^n = b"} />
              <p className={`mt-2 ${textColor}`}>
                <strong>Examples:</strong>
              </p>

              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  Square root: <InlineMath math={"\\sqrt{9} = 3"} /> because{" "}
                  <InlineMath math={"3^2 = 9"} />.
                </li>
                <li>
                  Cube root: <InlineMath math={"\\sqrt[3]{8} = 2"} /> because{" "}
                  <InlineMath math={"2^3 = 8"} />.
                </li>
                <li>
                  Fourth root: <InlineMath math={"\\sqrt[4]{16} = 2"} /> because{" "}
                  <InlineMath math={"2^4 = 16"} />.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Simplifying Radical Expressions */}
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
            Simplifying Radical Expressions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Radical expressions can often be simplified by factoring out
              perfect squares, cubes, etc.
            </p>

            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math={"\\sqrt{18}"} />.
              </p>
              <p className={`${textColor}`}>
                Factor 18 into <InlineMath math={"9 \\times 2"} />, where 9 is a
                perfect square.
              </p>
              <p className={`${textColor}`}>
                <InlineMath
                  math={
                    "\\sqrt{18} = \\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}"
                  }
                />
                .
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
              { problem: "2^4", solution: "16" },
              { problem: "\\sqrt{25}", solution: "5" },
              { problem: "3^2 \\times 3^3", solution: "243" },
              { problem: "\\frac{4^5}{4^3}", solution: "16" },
              { problem: "(2^2)^3", solution: "64" },
              { problem: "\\sqrt[3]{27}", solution: "3" },
              { problem: "5^0", solution: "1" },
              { problem: "2^{-3}", solution: "\\frac{1}{8}" },
              { problem: "\\sqrt{50}", solution: "5\\sqrt{2}" },
              { problem: "4^{1/2}", solution: "2" },
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
          Powers and Radicals
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
