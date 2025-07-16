"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
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
];

/**
 * @component FirstOrderLinearDifferentialEquation
 * @description A client component that renders a page explaining first-order linear differential equations.
 * @returns {JSX.Element} The rendered FirstOrderLinearDifferentialEquation page.
 */
export default function FirstOrderLinearDifferentialEquation() {
  /**
   * @description Breadcrumb items for navigation.
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
    {
      label: "First-Order Linear Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/first-order-linear-differential-equation",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-purple-200 sm:scrollbar-track-purple-200 scrollbar-thumb-purple-300 sm:scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:sm:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500 dark:sm:scrollbar-thumb-purple-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-purple-200 sm:scrollbar-track-purple-300 scrollbar-thumb-purple-300 sm:scrollbar-thumb-purple-400 dark:scrollbar-track-purple-600 dark:sm:scrollbar-track-purple-700 dark:scrollbar-thumb-purple-500 dark:sm:scrollbar-thumb-purple-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-purple-700 to-violet-800 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-300 dark:to-violet-400 md:text-5xl lg:text-6xl`}
        >
          First-Order Linear Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the integrating factor method for solving first-order linear differential equations.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Standard Form */}
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
            Standard Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A first-order linear differential equation has the standard form:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{dy}{dx} + P(x)y = Q(x)" />
              <p className="mt-2">where:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><InlineMath math="P(x)" /> and <InlineMath math="Q(x)" /> are functions of x only</li>
                <li>The equation is linear in y and its derivative</li>
                <li>If <InlineMath math="Q(x) = 0" />, the equation is homogeneous</li>
                <li>If <InlineMath math="Q(x) \neq 0" />, the equation is non-homogeneous</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integrating Factor Method */}
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
            Integrating Factor Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The integrating factor method is the standard technique for solving first-order linear equations.
            </p>
            <div className="mt-4 space-y-4">
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
                  Step 1: Find the Integrating Factor
                </h3>
                <p className="mt-2">
                  The integrating factor is:
                </p>
                <BlockMath math="\mu(x) = e^{\int P(x) \, dx}" />
                <p className="mt-2 text-sm">
                  Note: We don't need to include a constant of integration when finding μ(x).
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 2: Multiply the Equation by μ(x)
                </h3>
                <BlockMath math="\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)" />
                <p className="mt-2">
                  The left side becomes the derivative of <InlineMath math="\mu(x)y" />:
                </p>
                <BlockMath math="\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)" />
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 3: Integrate Both Sides
                </h3>
                <BlockMath math="\mu(x)y = \int \mu(x)Q(x) \, dx + C" />
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 4: Solve for y
                </h3>
                <BlockMath math="y = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x) \, dx + C\right]" />
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
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
            Worked Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-6">
              {/* Example 1 */}
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
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Example 1: Simple Linear Equation
                </h3>
                <p className="mt-2"><strong>Problem:</strong></p>
                <BlockMath math="\frac{dy}{dx} + 2y = e^x" />
                <p className="mt-2"><strong>Solution:</strong></p>
                <p>Here <InlineMath math="P(x) = 2" /> and <InlineMath math="Q(x) = e^x" /></p>
                <p className="mt-2">Step 1: Find integrating factor</p>
                <BlockMath math="\mu(x) = e^{\int 2 \, dx} = e^{2x}" />
                <p className="mt-2">Step 2: Multiply equation by <InlineMath math="e^{2x}" /></p>
                <BlockMath math="e^{2x}\frac{dy}{dx} + 2e^{2x}y = e^{3x}" />
                <p className="mt-2">Step 3: Recognize left side as derivative</p>
                <BlockMath math="\frac{d}{dx}[ye^{2x}] = e^{3x}" />
                <p className="mt-2">Step 4: Integrate</p>
                <BlockMath math="ye^{2x} = \int e^{3x} \, dx = \frac{e^{3x}}{3} + C" />
                <p className="mt-2">Step 5: Solve for y</p>
                <BlockMath math="y = \frac{e^x}{3} + Ce^{-2x}" />
              </div>

              {/* Example 2 */}
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
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Example 2: Variable Coefficient
                </h3>
                <p className="mt-2"><strong>Problem:</strong></p>
                <BlockMath math="x\frac{dy}{dx} + y = x^2" />
                <p className="mt-2"><strong>Solution:</strong></p>
                <p>First, write in standard form by dividing by x:</p>
                <BlockMath math="\frac{dy}{dx} + \frac{1}{x}y = x" />
                <p className="mt-2">Here <InlineMath math="P(x) = \frac{1}{x}" /> and <InlineMath math="Q(x) = x" /></p>
                <p className="mt-2">Step 1: Find integrating factor</p>
                <BlockMath math="\mu(x) = e^{\int \frac{1}{x} \, dx} = e^{\ln|x|} = |x| = x \text{ (for } x > 0\text{)}" />
                <p className="mt-2">Step 2: Multiply equation by x</p>
                <BlockMath math="x\frac{dy}{dx} + y = x^2" />
                <p className="mt-2">Step 3: Recognize left side as derivative</p>
                <BlockMath math="\frac{d}{dx}[xy] = x^2" />
                <p className="mt-2">Step 4: Integrate</p>
                <BlockMath math="xy = \int x^2 \, dx = \frac{x^3}{3} + C" />
                <p className="mt-2">Step 5: Solve for y</p>
                <BlockMath math="y = \frac{x^2}{3} + \frac{C}{x}" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Homogeneous Case
                </h3>
                <BlockMath math="\frac{dy}{dx} + P(x)y = 0" />
                <p className="mt-2 text-sm">
                  This is separable: <InlineMath math="\frac{dy}{y} = -P(x)dx" />
                </p>
                <p className="mt-1 text-sm">
                  Solution: <InlineMath math="y = Ce^{-\int P(x)dx}" />
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Constant Coefficients
                </h3>
                <BlockMath math="\frac{dy}{dx} + ay = b" />
                <p className="mt-2 text-sm">
                  Integrating factor: <InlineMath math="\mu = e^{ax}" />
                </p>
                <p className="mt-1 text-sm">
                  Solution: <InlineMath math="y = \frac{b}{a} + Ce^{-ax}" />
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
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + 3y = 6",
                solution: "y = 2 + Ce^{-3x}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} - y = e^{2x}",
                solution: "y = e^{2x} + Ce^x",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + \\frac{y}{x} = \\frac{1}{x^2}",
                solution: "y = \\frac{C - \\ln|x|}{x}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + y\\tan x = \\sec x",
                solution: "y = \\sin x + C\\cos x",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + 2xy = x",
                solution: "y = \\frac{1}{2} + Ce^{-x^2}",
              },
              {
                problem: "\\text{Solve: } x\\frac{dy}{dx} + 2y = x^3",
                solution: "y = \\frac{x^2}{4} + \\frac{C}{x^2}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + y\\cot x = \\csc x",
                solution: "y = 1 + C\\csc x",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} - \\frac{2y}{x} = x^2",
                solution: "y = \\frac{x^3}{5} + Cx^2",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
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
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
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
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20  ${solutionScrollbarStyle}`}
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
          The Power of Integration Factors
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}