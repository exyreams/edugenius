"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useRef, useState } from "react";
import ColorToggle from "@/components/ColorToggle";

interface NumberSystem {
  name: string;
  description: string;
  example?: string;
  symbol?: string;
}

/**
 * @description An array of number systems.
 */
const numberSystems: NumberSystem[] = [
  {
    name: "Natural Numbers",
    description:
      "The set of positive whole numbers (starting from 1), denoted by ℕ. Used for counting and ordering.",
    example: "1, 2, 3, 4, ...",
    symbol: "ℕ",
  },
  {
    name: "Whole Numbers",
    description:
      "The set of natural numbers including zero (0, 1, 2, 3, ...), denoted by W.",
    example: "0, 1, 2, 3, 4, ...",
    symbol: "W",
  },
  {
    name: "Integers",
    description:
      "The set of whole numbers and their negatives (..., -3, -2, -1, 0, 1, 2, 3, ...), denoted by ℤ.",
    example: "..., -3, -2, -1, 0, 1, 2, 3, ...",
    symbol: "ℤ",
  },
  {
    name: "Rational Numbers",
    description:
      "Numbers that can be expressed as a fraction p/q, where p and q are integers and q ≠ 0, denoted by ℚ.",
    example: "1/2, -3/4, 7, 0.25, 0.333...",
    symbol: "ℚ",
  },
  {
    name: "Irrational Numbers",
    description:
      "Numbers that cannot be expressed as a fraction of two integers. They have non-repeating, non-terminating decimal expansions.",
    example: "√2, π, e",
    symbol: "I",
  },
  {
    name: "Real Numbers",
    description:
      "The set of all rational and irrational numbers, denoted by ℝ. They represent all points on the number line.",
    example: "-5, 0, 1/3, √2, π, 4.7",
    symbol: "ℝ",
  },
];

/**
 * @component NumberSystems
 * @description Renders an educational page about number systems.
 */
export default function NumberSystems() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Number Systems",
      href: "/mathematics/concepts/foundational/number-systems",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";
  const [highlightedNumber, setHighlightedNumber] = useState<number | null>(
    null,
  );
  const numberLineRef = useRef<SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const svgRect = numberLineRef.current?.getBoundingClientRect();
    if (svgRect) {
      const clickX = event.clientX - svgRect.left;
      const scale = (clickX / svgRect.width) * 20 - 10;
      const newHighlightedNumber = Math.round(scale);

      if (newHighlightedNumber >= -10 && newHighlightedNumber <= 10) {
        if (newHighlightedNumber !== highlightedNumber) {
          setHighlightedNumber(newHighlightedNumber);
        } else {
          setHighlightedNumber(null);
        }
      }
    }
  };

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
    "from-violet-100 to-gray-200 dark:from-violet-800 dark:to-gray-700",
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Number Systems
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Fundamental number systems and concepts in mathematics.
        </p>
      </div>

      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-12 space-y-8">
        {/* Number Systems Section */}
        <div
          className={`rounded-2xl p-6 ${
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
            Number Systems
          </h2>
          <div className="mt-4 space-y-4">
            {numberSystems.map((system, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {system.name} {system.symbol ? `(${system.symbol})` : ""}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {system.description}
                  {system.example && (
                    <>
                      <br />
                      <strong className={`${textColor}`}>Example: </strong>
                      <span>{system.example}</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Number Lines and Ordering */}
        <div
          className={`rounded-2xl p-6 ${
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
            Number Lines and Ordering
          </h2>
          <div className="mt-4">
            <p className={`text-gray-700 dark:text-gray-300`}>
              A number line visually represents numbers ordered linearly, aiding
              in understanding their relative positions and magnitudes.
            </p>
            <div
              className={`mt-4 flex h-auto w-full items-center justify-center rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <svg
                ref={numberLineRef}
                viewBox="-110 0 220 40"
                className="h-16 w-full overflow-visible"
                onClick={handleClick}
              >
                <g className="text-gray-400 dark:text-gray-500">
                  {Array.from({ length: 21 }, (_, i) => i - 10).map((num) => (
                    <line
                      key={`grid-${num}`}
                      x1={num * 10}
                      y1="-5"
                      x2={num * 10}
                      y2="25"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  ))}
                </g>
                <line
                  x1="-100"
                  y1="10"
                  x2="100"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800 dark:text-gray-200"
                />
                <path
                  d="M 100,10 L 95,7 L 95,13 Z"
                  fill="currentColor"
                  className="text-gray-800 dark:text-gray-200"
                />
                <path
                  d="M -100,10 L -95,7 L -95,13 Z"
                  fill="currentColor"
                  className="text-gray-800 dark:text-gray-200"
                />
                {Array.from({ length: 21 }, (_, i) => i - 10).map((num) => (
                  <g key={num} className="text-gray-800 dark:text-gray-200">
                    <line
                      x1={num * 10}
                      y1="7"
                      x2={num * 10}
                      y2="13"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <text
                      x={num * 10}
                      y="25"
                      textAnchor="middle"
                      fontSize="8"
                      fill="currentColor"
                      className={`${
                        highlightedNumber === num ? "font-bold" : ""
                      } select-none`}
                    >
                      {num}
                    </text>
                  </g>
                ))}
                {highlightedNumber !== null && (
                  <g>
                    <circle
                      cx={highlightedNumber * 10}
                      cy="10"
                      r="4"
                      className={`${
                        isColorful
                          ? "fill-teal-500 dark:fill-teal-300"
                          : "fill-blue-500 dark:fill-blue-300"
                      } transition-all duration-200`}
                    />
                    <text
                      x={highlightedNumber * 10}
                      y="-2"
                      textAnchor="middle"
                      fontSize="10"
                      fill="currentColor"
                      className="font-bold text-gray-800 dark:text-gray-200"
                    >
                      {highlightedNumber}
                    </text>
                  </g>
                )}
              </svg>
            </div>
            {highlightedNumber !== null && (
              <p
                className={`mt-2 text-center text-gray-700 dark:text-gray-300`}
              >
                Highlighted Number: {highlightedNumber}
              </p>
            )}
            {!highlightedNumber && (
              <p className="mt-2 text-center text-gray-700 dark:text-gray-300">
                Click on the number line to highlight a number.
              </p>
            )}
          </div>
        </div>

        {/* Absolute Value Section */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-yellow-300`}
          >
            Absolute Value
          </h2>
          <div className="mt-4 space-y-4">
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <h3 className={`text-lg font-semibold ${textColor}`}>
                Definition
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The absolute value of a number is its distance from zero, always
                non-negative.
              </p>
              <InlineMath
                math={
                  "|x| = \\begin{cases} x, & \\text{if } x \\geq 0 \\\\ -x, & \\text{if } x < 0 \\end{cases}"
                }
              />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Examples:
                <InlineMath math="|5| = 5" />, <InlineMath math="|-3| = 3" />,{" "}
                <InlineMath math="|0| = 0" />
              </p>
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
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[0]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 1
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={
                    "\\text{Identify the number system to which } \\frac{5}{2} \\text{ belongs.}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? "text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-red-200 scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:bg-red-600 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\text{Rational Numbers (ℚ)}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    Since 5/2 can be expressed as a fraction, it is rational.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[1]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 2
              </span>
              <div
                className={`mt-2 h-auto overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={"\\text{What is the absolute value of } -3.14?"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-orange-200 scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:bg-orange-600 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math="3.14" />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    Absolute value is the distance from zero.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[2]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 3
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={
                    "\\text{Classify 0: natural, whole, integer, rational, or irrational?}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-yellow-200 scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:bg-yellow-600 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\text{Whole, Integer, Rational}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    0 is whole, integer, and rational (0/1).
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[3]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 4
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={
                    "\\text{Is } \\sqrt{2} \\text{ rational or irrational?}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-green-200 scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:bg-green-600 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\text{Irrational}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    <InlineMath math={"\\sqrt{2}"} /> is non-repeating,
                    non-terminating.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[4]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 5
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={
                    "\\text{To which number system(s) does } -10 \\text{ belong?}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-teal-200 scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-teal-600 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\text{Integer, Rational, Real}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    <InlineMath math={"-10"} /> is an integer, rational{" "}
                    <InlineMath math={"(-10/1)"} />, and real.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[5]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 6
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-cyan-200 scrollbar-thumb-cyan-300 dark:scrollbar-track-cyan-600 dark:scrollbar-thumb-cyan-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath math={"\\text{What is } |-\\frac{7}{3}|?"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-cyan-200 scrollbar-thin scrollbar-track-cyan-200 scrollbar-thumb-cyan-300 dark:bg-cyan-600 dark:scrollbar-track-cyan-600 dark:scrollbar-thumb-cyan-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\frac{7}{3}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    The absolute value is the magnitude.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[6]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 7
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={
                    "\\text{Identify the smallest number system that includes the number 1.}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-indigo-200 scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:bg-indigo-600 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath
                    math={"\\text{Natural Number (}\\mathbb{N}\\text{)}"}
                  />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    Natural numbers start at 1.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[7]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 8
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-blue-200 scrollbar-thumb-blue-300 dark:scrollbar-track-blue-600 dark:scrollbar-thumb-blue-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={"\\text{Classify the number } \\pi \\text{ (pi).}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-purple-200 scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:bg-purple-600 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\text{Irrational Number}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    <InlineMath math={"\\pi"} /> is non-repeating,
                    non-terminating.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`w-full rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[8]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 9
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={
                    "\\text{Is } 0.333... \\text{ (repeating) rational or irrational?}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-pink-200 scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:bg-pink-600 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math={"\\text{Rational}"} />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    Repeating decimals are rational{" "}
                    <InlineMath math={"\\frac{1}{3}"} />.
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`w-full rounded-lg p-4 transition-all  ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[9]} dark:text-white`
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <span
                className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
              >
                Problem 10
              </span>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-violet-200 scrollbar-thumb-violet-300 dark:scrollbar-track-violet-600 dark:scrollbar-thumb-violet-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <InlineMath
                  math={"\\text{What is the absolute value of } 0?"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium  ${
                    isColorful
                      ? " text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-300"
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
                  className={`mt-2 overflow-x-auto rounded-md p-4 ${
                    isColorful
                      ? "bg-violet-200 scrollbar-thin scrollbar-track-violet-200 scrollbar-thumb-violet-300 dark:bg-violet-600 dark:scrollbar-track-violet-600 dark:scrollbar-thumb-violet-500"
                      : "bg-gray-300 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <InlineMath math="0" />
                  <p className={`mt-2 text-sm ${textColor}`}>
                    The absolute value of 0 is 0.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Foundations of Numbers
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
