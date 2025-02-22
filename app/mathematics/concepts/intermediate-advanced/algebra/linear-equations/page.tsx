"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component LinearEquations
 * @description A React component that explains linear equations, their forms, solving methods,
 * graphical interpretation, systems of equations, and practice exercises.
 * @returns {JSX.Element} The Linear Equations page.
 */
export default function LinearEquations() {
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
      label: "Linear Equations",
      href: "/mathematics/concepts/intermediate-advanced/algebra/linear-equations",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or glassmorphism.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Array of gradient color strings for practice problems. Used for styling problem containers.
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

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Linear Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Dive into the world of linear equations, mastering techniques to solve
          for unknowns and understand the relationships between variables.
        </p>
      </div>

      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Forms Section */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-amber-100 to-yellow-200 dark:from-amber-800 dark:to-yellow-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Fundamental Forms
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Slope-Intercept Form
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300  dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="y = mx + b" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Where <InlineMath math="m" /> represents the slope of the line
                  and <InlineMath math="b" /> represents the y-intercept (the
                  point where the line crosses the y-axis).
                </p>
              </div>
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Point-Slope Form
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300  dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="y - y_1 = m(x - x_1)" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Useful when you know the slope (<InlineMath math="m" />) and a
                  point on the line (<InlineMath math="(x_1, y_1)" />
                  ).
                </p>
              </div>
            </div>
            <div className="space-y-4">
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
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Standard Form
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300  dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="Ax + By = C" />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Where <InlineMath math="A" />, <InlineMath math="B" />, and{" "}
                  <InlineMath math="C" /> are constants, and{" "}
                  <InlineMath math="A" /> and <InlineMath math="B" /> are not
                  both zero. Often, A, B, and C are integers.
                </p>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  General Form
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300  dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="Ax + By + C = 0" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Similar to standard form, but with the constant term on the
                  left side of the equation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solving Methods */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Solving Techniques
          </h2>
          <div className="mt-4 space-y-6">
            {/* Isolate Variable */}
            <div
              className={`flex flex-col gap-2 ${
                isColorful
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <h3 className="text-lg font-semibold">
                Step 1: Isolate Variable
              </h3>
              <p
                className={` ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                The most common method involves isolating the variable (
                <InlineMath math="x" /> or <InlineMath math="y" />) on one side
                of the equation by performing inverse operations.
              </p>
              <div
                className={`mt-2 overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-black/20 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-700 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                } `}
              >
                <BlockMath math="2x + 5 = 15 \Rightarrow 2x = 10 \Rightarrow x = 5" />
              </div>
            </div>

            {/* Fraction Handling */}
            <div
              className={`flex flex-col gap-2 ${
                isColorful
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <h3 className="text-lg font-semibold">
                Step 2: Fraction Handling
              </h3>
              <p
                className={` ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                If the equation contains fractions, multiply both sides by the
                least common multiple (LCM) of the denominators to eliminate the
                fractions.
              </p>
              <div
                className={`mt-2 overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-black/20 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-700 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                } `}
              >
                <BlockMath math="\frac{3}{4}x = 9 \Rightarrow x = 9 \times \frac{4}{3} = 12" />
              </div>
            </div>

            {/* Variable on Both Sides */}
            <div
              className={`flex flex-col gap-2 ${
                isColorful
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <h3 className="text-lg font-semibold">
                Step 3: Variable on Both Sides
              </h3>
              <p
                className={` ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                If the variable appears on both sides, use addition or
                subtraction to get all variable terms on one side and constant
                terms on the other.
              </p>
              <div
                className={`mt-2 overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-black/20 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-700 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                } `}
              >
                <BlockMath math="5x - 3 = 2x + 9 \Rightarrow 3x = 12 \Rightarrow x = 4" />
              </div>
            </div>

            {/* Verification */}
            <div
              className={`flex flex-col gap-2 ${
                isColorful
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <h3 className="text-lg font-semibold">Step 4: Verification</h3>
              <p
                className={` ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Always check your solution by substituting it back into the
                original equation to ensure it makes the equation true.
              </p>
              <div
                className={`mt-2 overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-black/20 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-700 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                } `}
              >
                <BlockMath math="\text{Check } x=5 \text{ in } 2(5) + 5 = 15" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Interpretation */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Graphical Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className={`h-64 w-full max-w-xs ${
                  isColorful
                    ? "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                    : "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                }`}
              >
                {/* Axes */}
                <line
                  x1="20"
                  y1="180"
                  x2="180"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="20"
                  y1="180"
                  x2="20"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <text x="185" y="175" fontSize="12">
                  x
                </text>
                <text x="25" y="20" fontSize="12">
                  y
                </text>

                {/* Line: y = -x + 180 */}
                <line
                  x1="20"
                  y1="160"
                  x2="160"
                  y2="20"
                  stroke={isColorful ? "#f97316" : "gray"}
                  strokeWidth="2"
                />
                <text
                  x="80"
                  y="80"
                  fontSize="14"
                  fill={isColorful ? "#f97316" : "gray"}
                >
                  y = -x + 180
                </text>

                {/* x-intercept point */}
                <circle
                  cx="160"
                  cy="180"
                  r="3"
                  fill={isColorful ? "#f97316" : "gray"}
                />
                <text x="145" y="195" fontSize="12">
                  x-intercept
                </text>

                {/* y-intercept point */}
                <circle
                  cx="20"
                  cy="160"
                  r="3"
                  fill={isColorful ? "#f97316" : "gray"}
                />
                <text x="25" y="150" fontSize="12">
                  y-intercept
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Slope Calculation
                </h3>
                <BlockMath math="m = \frac{y_2 - y_1}{x_2 - x_1}" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The slope (<InlineMath math="m" />) represents the rate of
                  change of <InlineMath math="y" /> with respect to{" "}
                  <InlineMath math="x" />. It&#39;s calculated as the change in{" "}
                  <InlineMath math="y" /> divided by the change in{" "}
                  <InlineMath math="x" /> between two points{" "}
                  <InlineMath math="(x_1, y_1)" /> and{" "}
                  <InlineMath math="(x_2, y_2)" />.
                </p>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Intercepts
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300  dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="x\text{-int} = -\frac{b}{m}, \quad y\text{-int} = b" />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The x-intercept is the point where the line crosses the x-axis
                  (where <InlineMath math="y = 0" />
                  ). The y-intercept is where the line crosses the y-axis (where{" "}
                  <InlineMath math="x=0" />
                  ).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Systems of Equations */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Systems of Linear Equations
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div
                className={` rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Substitution Method
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\begin{cases} y = 2x + 1 \\ 3x + 2y = 16 \end{cases}" />
                </div>

                <p
                  className={` mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Solve one equation for one variable, then substitute that
                  expression into the other equation.
                </p>
                <p
                  className={` ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <strong>Example:</strong> Substitute `y = 2x + 1` into the
                  second equation.
                </p>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Elimination Method (Combination)
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\begin{cases} 2x + 3y = 7 \\ 4x - 3y = 5 \end{cases}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Multiply one or both equations by constants so that adding or
                  subtracting the equations eliminates one variable.
                </p>
                <p
                  className={` ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <strong>Example:</strong> Add the equations directly, to
                  cancel the y terms.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Graphical Solution
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\text{Intersection point } (x, y)" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Graph both equations. The solution is the point (x, y) where
                  the lines intersect. If the lines are parallel, there is no
                  solution. If the lines are the same, there are infinitely many
                  solutions.
                </p>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Matrix Method (Advanced)
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\begin{bmatrix} 2 & 3 \\ 4 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ 5 \end{bmatrix}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  For systems of equations, especially larger systems, matrix
                  methods (like using the inverse of a matrix or Gaussian
                  elimination) can be used to solve for the variables. This is
                  generally covered in linear algebra.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-700 dark:to-emerald-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[0]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 1
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } 3x + 5 = 20"} />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="x = 5" />
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[1]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 2
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Find slope of } 4x - 2y = 8"} />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="m = 2" />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[2]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 3
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Convert } y = \\frac{2}{3}x - 4 \\text{ to standard form}"
                  }
                />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="2x - 3y = 12" />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[3]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 4
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Solve system } \\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}"
                  }
                />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="(2, 3)" />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[4]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 5
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Find x-intercept of } y = -\\frac{1}{2}x + 6"}
                />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="x = 12" />
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[5]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 6
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Graph } y = -3x + 4"} />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\text{Slope: -3, y-int: (0,4)}" />
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[6]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 7
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } 5(x - 2) = 3x + 4"} />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="x = 7" />
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[7]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 8
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Write equation through } (2, -1) \\text{ with slope 3}"
                  }
                />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="y = 3x - 7" />
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[8]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 9
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } \\frac{2x}{5} = 8"} />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="x = 20" />
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[9]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 10
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Find intersection of } y = 2x + 1 \\text{ and } y = -x + 4"
                  }
                />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="(1, 3)" />
                </div>
              </details>
            </div>

            {/* Problem 11 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[0]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 11
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Convert } y + 4 = -2(x - 3) \\text{ to slope-intercept}"
                  }
                />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="y = -2x + 2" />
                </div>
              </details>
            </div>

            {/* Problem 12 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[1]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 12
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } 0.5x + 1.2 = 3.4"} />
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
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="x = 4.4" />
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
          Linear Equations and Systems
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
