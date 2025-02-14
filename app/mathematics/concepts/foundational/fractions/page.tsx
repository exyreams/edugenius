"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Array of gradient color strings for practice problems.  These are used to style the problem containers.
 * The `dark:` prefix applies the style in dark mode.
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
 * @component Fractions
 * @description A client component that renders a page explaining and demonstrating fractions.
 * @returns {JSX.Element} The rendered Fractions page.
 */
export default function Fractions() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Fractions",
      href: "/mathematics/concepts/foundational/fractions",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   * @type {boolean}
   * @default true
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles based on the `isColorful` state.
   * Includes responsive variations for small screens using Tailwind's `sm:` prefix.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-red-200 sm:scrollbar-track-red-200 scrollbar-thumb-red-300 sm:scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:sm:scrollbar-track-red-600 dark:scrollbar-thumb-red-500 dark:sm:scrollbar-thumb-red-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-red-200 sm:scrollbar-track-red-300 scrollbar-thumb-red-300 sm:scrollbar-thumb-red-400 dark:scrollbar-track-red-600 dark:sm:scrollbar-track-red-700 dark:scrollbar-thumb-red-500 dark:sm:scrollbar-thumb-red-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Fractions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the world of fractions, learn about different types,
          operations, and conversions.
        </p>
      </div>

      {/* Color Toggle - Corrected Position */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction to Fractions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Understanding Fractions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A fraction represents a part of a whole or, more generally, any
              number of equal parts. It consists of a numerator (top number) and
              a denominator (bottom number).
            </p>
            {/* Fraction Definition (Block Math) */}
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\text{Fraction} = \frac{\text{Numerator}}{\text{Denominator}}" />
            </div>
            <p className="mt-2">
              The denominator indicates into how many equal parts the whole is
              divided, and the numerator indicates how many of those parts are
              being considered.
            </p>
          </div>
        </div>

        {/* Types of Fractions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Types of Fractions
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Fractions can be classified into several types based on the
              relationship between the numerator and the denominator.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Proper Fractions */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Proper Fractions
                </h3>
                {/* Block Math for Proper Fraction Definition */}
                <BlockMath math="\frac{\text{Numerator}}{\text{Denominator}}" />
                <BlockMath math="\text{where Numerator < Denominator}" />
                <p className="mt-2">
                  The numerator is less than the denominator. Example:{" "}
                  {/* Inline Math for Example */}
                  <InlineMath math="\frac{2}{3}" />
                </p>
              </div>

              {/* Improper Fractions */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Improper Fractions
                </h3>
                {/* Block Math for Improper Fraction Definition */}
                <BlockMath math="\frac{\text{Numerator}}{\text{Denominator}}" />
                <BlockMath math="\text{where Numerator} \geq \text{Denominator}" />
                <p className="mt-2">
                  The numerator is greater than or equal to the denominator.
                  Example: <InlineMath math="\frac{5}{3}" />
                </p>
              </div>

              {/* Mixed Numbers */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Mixed Numbers
                </h3>
                {/* Block Math for Mixed Number Definition */}
                <BlockMath math="\text{Whole Number} + \text{Proper Fraction}" />
                <p className="mt-2">
                  A combination of a whole number and a proper fraction.
                  Example: <InlineMath math="1\frac{2}{3}" />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Equivalent Fractions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Equivalent Fractions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Equivalent fractions are different fractions that represent the
              same value. They are obtained by multiplying or dividing both the
              numerator and the denominator by the same non-zero number.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\frac{a}{b} = \frac{a \times k}{b \times k} = \frac{a \div k}{b \div k} \text{, where } k \neq 0" />
              </div>

              <p className="mt-2">
                Example:{" "}
                <InlineMath math="\frac{1}{2} = \frac{2}{4} = \frac{3}{6}" />
              </p>
            </div>
          </div>
        </div>

        {/* Simplifying Fractions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-yellow-300`}
          >
            Simplifying Fractions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Simplifying a fraction means reducing it to its lowest terms,
              where the numerator and denominator have no common factors other
              than 1.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p>
                To simplify, divide both numerator and denominator by their
                Greatest Common Divisor (GCD).
              </p>
              <p className="mt-1">
                <strong>Example:</strong> Simplify{" "}
                <InlineMath math="\frac{12}{18}" />
              </p>
              {/* Block Math for GCD and Simplification Example */}
              <BlockMath math="\text{GCD}(12, 18) = 6" />
              <BlockMath math="\frac{12 \div 6}{18 \div 6} = \frac{2}{3}" />
            </div>
          </div>
        </div>

        {/* Adding and Subtracting Fractions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Adding and Subtracting Fractions
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              To add or subtract fractions, they must have a common denominator.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Rule 1: Adding integers with the same sign */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Same Denominator
                </h3>
                {/* Block Math for Adding Fractions with Same Denominator */}
                <BlockMath math="\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c}" />
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath
                    math={"\\frac{1}{4} + \\frac{2}{4}  = \\frac{3}{4}"}
                  />
                </p>
              </div>

              {/* Rule 2: Adding integers with different signs */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Different Denominators
                </h3>
                <p className="mt-1">
                  Find the Least Common Denominator (LCD), convert fractions to
                  equivalent fractions with the LCD, then add/subtract.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math="\frac{1}{3} + \frac{1}{2} = \frac{2}{6} + \frac{3}{6} = \frac{5}{6}" />
                </p>
              </div>
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
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              // Array of practice problems with their solutions.
              {
                problem: "\\frac{1}{4} + \\frac{2}{4}",
                solution: "\\frac{3}{4}",
              },
              {
                problem: "\\frac{5}{6} - \\frac{1}{6}",
                solution: "\\frac{4}{6} = \\frac{2}{3}",
              },
              {
                problem: "\\frac{2}{5} + \\frac{1}{3}",
                solution: "\\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}",
              },
              {
                problem: "\\frac{3}{4} - \\frac{1}{8}",
                solution: "\\frac{6}{8} - \\frac{1}{8} = \\frac{5}{8}",
              },
              {
                problem: "\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}",
                solution:
                  "\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1",
              },
              {
                problem: "2\\frac{1}{2} + 1\\frac{1}{4}",
                solution:
                  "\\frac{5}{2} + \\frac{5}{4} = \\frac{10}{4} + \\frac{5}{4} = \\frac{15}{4} = 3\\frac{3}{4}",
              },
              {
                problem: "3\\frac{1}{3} - 1\\frac{1}{6}",
                solution:
                  "\\frac{10}{3} - \\frac{7}{6} = \\frac{20}{6} - \\frac{7}{6} = \\frac{13}{6} = 2\\frac{1}{6}",
              },
              {
                problem: "\\text{Simplify } \\frac{24}{36}",
                solution: "\\frac{2}{3}",
              },
              {
                problem:
                  "\\text{Find an equivalent fraction to } \\frac{3}{5} \\text{ with a denominator of 20.}",
                solution: "\\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20}",
              },
              {
                problem:
                  "\\text{Is } \\frac{2}{7} \\text{ equivalent to } \\frac{6}{21}?",
                solution: "\\text{Yes}",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`mt-6 grid grid-cols-1 rounded-lg p-4 transition-all md:grid-cols-1 ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white "
                } hover:shadow-lg `}
              >
                <div>
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>

                  <div
                    className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                  >
                    {/* Block Math for Problem Statement */}
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3 md:col-span-2 lg:col-span-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    {/* SVG for Expand/Collapse Icon */}
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
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20  ${solutionScrollbarStyle}`}
                  >
                    {/* Block Math for Solution */}
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
          Fractions: Parts of a Whole
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
