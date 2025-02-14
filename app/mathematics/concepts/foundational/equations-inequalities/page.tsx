"use client";

import "katex/dist/katex.min.css";
import React, { useRef, useState } from "react";
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
 * @component EquationsAndInequalities
 * @description A client component that renders a page explaining equations and inequalities.
 * @returns {JSX.Element} The rendered EquationsAndInequalities page.
 */
export default function EquationsAndInequalities() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Equations & Inequalities",
      href: "/mathematics/concepts/foundational/equations-inequalities",
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

  /**
   * @state highlightedNumber
   * @type {number | null}
   * @default null
   * @description number to highlight on the number line.
   */
  const [highlightedNumber, setHighlightedNumber] = useState<number | null>(
    null,
  );
  /**
   * @state inequalitySymbol
   * @type {string}
   * @default ''
   * @description Symbol to highlight greater than or less than.
   */
  const [inequalitySymbol, setInequalitySymbol] = useState<
    ">" | "<" | ">=" | "<=" | ""
  >("");
  /**
   * @state showLine
   * @type {boolean}
   * @default false
   * @description Whether to show the line on number line graph.
   */
  const [showLine, setShowLine] = useState<boolean>(false);

  /**
   * @description Ref for the SVG element of the number line.
   */
  const numberLineRef = useRef<SVGSVGElement>(null);

  /**
   * @function handleClick
   * @description Handles clicks on the number line to highlight a number.
   * @param {React.MouseEvent<SVGSVGElement>} event - The click event.
   */
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

  /**
   * @function handleHighlight
   * @description Function to set the highlighted number, inequality, and showLine state.
   * @param {number} number - The number to highlight.
   * @param {'>' | '<' | '>=' | '<='} symbol - The inequality symbol.
   * @param {boolean} line - Whether to show the line.
   */
  const handleHighlight = (
    number: number,
    symbol: ">" | "<" | ">=" | "<=",
    line: boolean,
  ) => {
    setHighlightedNumber(number);
    setInequalitySymbol(symbol);
    setShowLine(line);
  };

  /**
   * @function resetHighlight
   * @description Resets the number line.
   */
  const resetHighlight = () => {
    setHighlightedNumber(null);
    setInequalitySymbol("");
    setShowLine(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Equations & Inequalities
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the concepts of equations and inequalities, including solving
          and graphing them.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding Equations */}
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
            Understanding Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              An equation is a mathematical statement that asserts the equality
              of two expressions. It always contains an equals sign (=).
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
                  <InlineMath math={"x + 3 = 7"} />
                </li>
                <li>
                  <InlineMath math={"2y - 5 = 9"} />
                </li>
                <li>
                  <InlineMath math={"\\frac{z}{4} = 2"} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solving One-Step Equations */}
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
            Solving One-Step Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              One-step equations require performing a single operation
              (addition, subtraction, multiplication, or division) to isolate
              the variable.
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
                  Solve <InlineMath math={"x + 5 = 10"} />: Subtract 5 from both
                  sides: <InlineMath math={"x = 5"} />.
                </li>
                <li>
                  Solve <InlineMath math={"y - 3 = 4"} />: Add 3 to both sides:{" "}
                  <InlineMath math={"y = 7"} />.
                </li>
                <li>
                  Solve <InlineMath math={"3z = 12"} />: Divide both sides by 3:{" "}
                  <InlineMath math={"z = 4"} />.
                </li>
                <li>
                  Solve <InlineMath math={"\\frac{a}{2} = 6"} />: Multiply both
                  sides by 2: <InlineMath math={"a = 12"} />.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solving Two-Step Equations */}
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
            Solving Two-Step Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Two-step equations require performing two operations to isolate
              the variable.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Example:</strong> Solve{" "}
                <InlineMath math={"2x + 3 = 11"} />.
              </p>
              <p className={`${textColor}`}>
                Subtract 3 from both sides: <InlineMath math={"2x = 8"} />.
              </p>
              <p className={`${textColor}`}>
                Divide both sides by 2: <InlineMath math={"x = 4"} />.
              </p>
            </div>
          </div>
        </div>

        {/* Understanding Inequalities */}
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
            Understanding Inequalities
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              An inequality is a mathematical statement that compares two
              expressions using inequality symbols:{" "}
              <InlineMath math={"<, >, \\leq, \\geq"} />
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
                  <InlineMath math={"x < 5"} /> (x is less than 5)
                </li>
                <li>
                  <InlineMath math={"y > 2"} /> (y is greater than 2)
                </li>
                <li>
                  <InlineMath math={"z \\leq 10"} /> (z is less than or equal to
                  10)
                </li>
                <li>
                  <InlineMath math={"a \\geq 0"} /> (a is greater than or equal
                  to 0)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solving One-Step Inequalities */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
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
            Solving One-Step Inequalities
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Solving one-step inequalities is similar to solving one-step
              equations, but with one crucial difference: when multiplying or
              dividing by a negative number, you must reverse the inequality
              sign.
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
                  Solve <InlineMath math={"x + 3 > 7"} />: Subtract 3:{" "}
                  <InlineMath math={"x > 4"} />.
                </li>
                <li>
                  Solve <InlineMath math={"y - 2 < 5"} />: Add 2:{" "}
                  <InlineMath math={"y < 7"} />.
                </li>
                <li>
                  Solve <InlineMath math={"2z \\leq 8"} />: Divide by 2:{" "}
                  <InlineMath math={"z \\leq 4"} />.
                </li>
                <li>
                  Solve <InlineMath math={"-3a \\geq 9"} />: Divide by -3 (and
                  reverse the sign): <InlineMath math={"a \\leq -3"} />.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Graphing Inequalities on a Number Line */}
        <div
          className={`rounded-lg p-6 shadow-md ${
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
            Graphing Inequalities on a Number Line
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Inequalities can be visualized on a number line. Use an open
              circle for <InlineMath math={"<"} /> or <InlineMath math={">"} />{" "}
              and a closed circle for ≤ or ≥. Shade the line in the direction
              that satisfies the inequality.
            </p>
            <div
              className={`mt-4 flex h-auto w-full items-center justify-center rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {/* Number Line SVG */}
              <svg
                ref={numberLineRef}
                viewBox="-110 0 220 40"
                className="h-16 w-full overflow-visible"
                onClick={handleClick}
              >
                {/* Grid Lines */}
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
                {/* Main Number Line */}
                <line
                  x1="-100"
                  y1="10"
                  x2="100"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800 dark:text-gray-200"
                />
                {/* Arrowheads */}
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
                {/* Number Markers and Labels */}
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
                {/* Highlighted Number and Inequality Shading */}
                {highlightedNumber !== null && (
                  <g>
                    {/* Circle for the highlighted number */}
                    <circle
                      cx={highlightedNumber * 10}
                      cy="10"
                      r={
                        inequalitySymbol === ""
                          ? "4"
                          : inequalitySymbol === "<" || inequalitySymbol === ">"
                            ? "4"
                            : "4"
                      }
                      className={
                        inequalitySymbol === ""
                          ? `${isColorful ? "fill-teal-500 dark:fill-teal-300" : "fill-blue-500 dark:fill-blue-300"}`
                          : inequalitySymbol === "<" || inequalitySymbol === ">"
                            ? `${isColorful ? "fill-white stroke-teal-500 dark:fill-gray-800 dark:stroke-teal-300" : "fill-white stroke-blue-500 dark:fill-gray-800 dark:stroke-blue-300"} stroke-2`
                            : `${isColorful ? "fill-teal-500 dark:fill-teal-300" : "fill-blue-500 dark:fill-blue-300"}`
                      }
                    />
                    {/* Shading for the inequality */}
                    {showLine && inequalitySymbol === ">" && (
                      <line
                        x1={highlightedNumber * 10}
                        y1="10"
                        x2="100"
                        y2="10"
                        stroke={`${isColorful ? "#134e4a" : "#1d4ed8"}`}
                        strokeWidth="8"
                        className="opacity-30"
                      />
                    )}
                    {showLine && inequalitySymbol === "<" && (
                      <line
                        x1={highlightedNumber * 10}
                        y1="10"
                        x2="-100"
                        y2="10"
                        stroke={`${isColorful ? "#134e4a" : "#1d4ed8"}`}
                        strokeWidth="8"
                        className="opacity-30"
                      />
                    )}
                  </g>
                )}
              </svg>
            </div>
            {/* Example buttons and controls */}
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => handleHighlight(3, ">", true)}
                className={`rounded-md px-3 py-1 text-sm ${
                  isColorful
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              >
                <InlineMath math={"x > 3"} />
              </button>
              <button
                onClick={() => handleHighlight(-2, "<", true)}
                className={`rounded-md px-3 py-1 text-sm ${
                  isColorful
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              >
                <InlineMath math={"x < -2"} />
              </button>
              <button
                onClick={() => handleHighlight(5, ">=", true)}
                className={`rounded-md px-3 py-1 text-sm ${
                  isColorful
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              >
                x ≥ 5
              </button>

              <button
                onClick={() => handleHighlight(-4, "<=", true)}
                className={`rounded-md px-3 py-1 text-sm ${
                  isColorful
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              >
                x ≤ -4
              </button>

              <button
                onClick={resetHighlight}
                className={`rounded-md px-3 py-1 text-sm ${
                  isColorful
                    ? "bg-gray-300 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                } focus:outline-none focus:ring-2 focus:ring-gray-300`}
              >
                Reset
              </button>
            </div>
            <div className="mt-2 text-center text-gray-700 dark:text-gray-300">
              {highlightedNumber !== null && inequalitySymbol !== "" && (
                <p>
                  Highlighted Inequality:{" "}
                  <InlineMath
                    math={`x ${inequalitySymbol} ${highlightedNumber}`}
                  />
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300 `}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { problem: "\\text{Solve } x + 7 = 12", solution: "x = 5" },
              { problem: "\\text{Solve } 3y - 2 = 10", solution: "y = 4" },
              {
                problem: "\\text{Solve } \\frac{z}{5} = 4",
                solution: "z = 20",
              },
              { problem: "\\text{Solve } a - 4 = -1", solution: "a = 3" },
              {
                problem: "\\text{Solve } 4b + 1 = 9",
                solution: "b = 2",
              },
              {
                problem: "\\text{Solve } \\frac{c}{2} - 3 = 1",
                solution: "c = 8",
              },
              { problem: "\\text{Solve } x + 6 > 9", solution: "x > 3" },
              {
                problem: "\\text{Solve } 2y - 3 \\leq 7",
                solution: "y \\leq 5",
              },
              {
                problem: "\\text{Solve } -4z \\geq 12",
                solution: "z \\leq -3",
              },
              {
                problem: "\\text{Solve } \\frac{w}{3} < 2",
                solution: "w < 6",
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
                        ? "text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-300"
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
          Balancing and Comparing Expressions
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
