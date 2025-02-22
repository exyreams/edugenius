"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";
import IntegerNumberLineVisualizer from "./components/IntegerNumberLineVisualizer";

/**
 * Array of color gradient classes for practice problems.
 * Each string represents a Tailwind CSS gradient class for a different color scheme.
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
 * Integers component that provides an interactive guide to understanding integers.
 * It includes explanations, visualizations, and practice problems for integer operations.
 *
 * @returns {JSX.Element} The Integers component.
 */
export default function Integers() {
  /**
   * Breadcrumb items for navigation.
   * @type {Array<{label: string, href: string}>}
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    { label: "Integers", href: "/mathematics/concepts/foundational/integers" },
  ];

  /**
   * State to manage the colorful mode of the component.
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Integers
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the world of integers, including positive and negative whole
          numbers, and master the fundamental operations of addition,
          subtraction, multiplication, and division.
        </p>
      </div>

      {/* Toggle for colorful/grayscale mode */}
      <ColorToggle onChange={setIsColorful} initialState={true} />
      {/* Breadcrumb navigation */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction to Integers */}
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
            Introduction to Integers
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Integers are whole numbers, including both positive and negative
              numbers, and zero. They are represented on the number line and
              form the basis for many mathematical operations.
            </p>
            {/* Integrated NumberLineVisualizer */}
            <div className="mt-6 p-2">
              <IntegerNumberLineVisualizer />
            </div>
          </div>
        </div>

        {/* Adding and Subtracting Integers */}
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
            Adding and Subtracting Integers
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Learn the rules for adding and subtracting integers, including
              handling positive and negative numbers with examples.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Rule 1: Adding integers with the same sign */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 1: Same Sign
                </h3>
                <BlockMath math="a + b = |a + b|" />
                <BlockMath math="(-a) + (-b) = -|a + b|" />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  Add the absolute values and keep the common sign.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong> <InlineMath math="5 + 3 = 8" />,{" "}
                  <InlineMath math="(-5) + (-3) = -8" />
                </p>
              </div>

              {/* Rule 2: Adding integers with different signs */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 2: Different Signs
                </h3>
                <p
                  className={`mt-2  ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  Subtract smaller absolute value from larger and keep the sign
                  of the larger absolute value.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong> <InlineMath math="5 + (-3) = 2" />,{" "}
                  <InlineMath math="(-5) + 3 = -2" />
                </p>
              </div>

              {/* Rule 3: Subtracting a negative number */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 3: Subtracting a Negative
                </h3>
                <BlockMath math="a - (-b) = a + b" />
                <p
                  className={`mt-2  ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  Subtracting a negative number is the same as adding the
                  corresponding positive number.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math="5 - (-3) = 5 + 3 = 8" />
                </p>
              </div>

              {/* Rule 4: Subtracting a larger number from a smaller */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 4: Larger from Smaller
                </h3>
                <div className="w-full sm:w-auto">
                  <BlockMath math="a - b = -(b - a)" />
                  <BlockMath math={"\text{, where } |a| < |b|"} />
                </div>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math="3 - 5 = -(5 - 3) = -2" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Multiplying and Dividing Integers */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600"
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
            Multiplying and Dividing Integers
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>Rules for multiplying and dividing integers, with examples.</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Rule 1: Multiplying integers with the same sign */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-purple-600 dark:text-purple-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 1: Same Sign (Multiplication)
                </h3>
                <BlockMath math={"(+a) \\times (+b) = +(ab)"} />
                <BlockMath math={"(-a) \\times (-b) = +(ab)"} />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  The product of two integers with the same sign is positive.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math={"5 \\times 3 = 15"} />,{" "}
                  <InlineMath math={"(-5) \\times (-3) = 15"} />
                </p>
              </div>

              {/* Rule 2: Multiplying integers with different signs */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-purple-600 dark:text-purple-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 2: Different Signs (Multiplication)
                </h3>
                <BlockMath math={"(+a) \\times (-b) = -(ab)"} />
                <BlockMath math={"(-a) \\times (+b) = -(ab)"} />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  The product of two integers with different signs is negative.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math={"5 \\times (-3) = -15"} />,{" "}
                  <InlineMath math={"(-5) \\times 3 = -15"} />
                </p>
              </div>

              {/* Rule 3: Dividing integers with the same sign */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-purple-600 dark:text-purple-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 3: Same Sign (Division)
                </h3>
                <BlockMath math={"\\frac{+a}{+b} = +\\frac{a}{b}"} />
                <BlockMath math={"\\frac{-a}{-b} = +\\frac{a}{b}"} />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  The quotient of two integers with the same sign is positive.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math={"\\frac{10}{2} = 5"} />,{" "}
                  <InlineMath math={"\\frac{-10}{-2} = 5"} />
                </p>
              </div>

              {/* Rule 4: Dividing integers with different signs */}
              <div
                className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-purple-600 dark:text-purple-300" : "text-gray-800 dark:text-gray-200"}`}
                >
                  Rule 4: Different Signs (Division)
                </h3>
                <BlockMath math={"\\frac{+a}{-b} = -\\frac{a}{b}"} />
                <BlockMath math={"\\frac{-a}{+b} = -\\frac{a}{b}"} />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-400"}`}
                >
                  The quotient of two integers with different signs is negative.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong>{" "}
                  <InlineMath math={"\\frac{10}{-2} = -5"} />,{" "}
                  <InlineMath math={"\\frac{-10}{2} = -5"} />
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Order of Operations with Integers */}
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
                ? "bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-orange-300`}
          >
            Order of Operations with Integers
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Apply the order of operations (PEMDAS/BODMAS) to expressions
              involving integers.
            </p>
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <h3 className="text-lg font-semibold">PEMDAS/BODMAS</h3>
              <ul className="ml-6 list-disc">
                <li>
                  <strong>P</strong>arentheses / <strong>B</strong>rackets
                </li>
                <li>
                  <strong>E</strong>xponents / <strong>O</strong>rders
                </li>
                <li>
                  <strong>M</strong>ultiplication and <strong>D</strong>ivision
                </li>
                <li>
                  <strong>A</strong>ddition and <strong>S</strong>ubtraction
                </li>
              </ul>
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
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem: "-5 + 3",
                solution: "-2",
              },
              {
                problem: "(-2) \\times (-4)",
                solution: "8",
              },
              {
                problem: "-12 \\div 3",
                solution: "-4",
              },
              {
                problem: "15 - (-6)",
                solution: "21",
              },
              {
                problem: "-7 + (-8)",
                solution: "-15",
              },
              {
                problem: "9 \\times (-3)",
                solution: "-27",
              },
              {
                problem: "2 \\times (-3 + 5) - 8 \\div 2",
                solution: "2 \\times 2 - 4 = 0",
              },
              {
                problem: "(-18) \\div (-2)",
                solution: "9",
              },
              {
                problem: "-6 - 4",
                solution: "-10",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`w-full rounded-lg p-4 transition-all sm:w-auto ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
                } hover:shadow-lg`}
              >
                {/* Problem number */}
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                {/* Problem statement */}
                <div className="mt-2 flex justify-start overflow-x-auto">
                  <BlockMath math={item.problem} />
                </div>
                {/* Details for showing the solution */}
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    {/* SVG for the dropdown arrow */}
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
                  {/* Solution display */}
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3  ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-300 dark:bg-gray-600"
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
          Plus, Minus, Multiply, Divide with whole numbers
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
