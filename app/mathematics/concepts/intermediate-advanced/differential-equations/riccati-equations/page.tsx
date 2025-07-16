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
];

/**
 * @component RiccatiEquations
 * @description A client component that renders a page explaining Riccati differential equations.
 * @returns {JSX.Element} The rendered RiccatiEquations page.
 */
export default function RiccatiEquations() {
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
      label: "Riccati Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/riccati-equations",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-400 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-600"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-red-700 to-rose-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-rose-400 md:text-5xl lg:text-6xl`}
        >
          Riccati Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the special class of nonlinear first-order equations and their solution techniques.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Definition */}
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
            Definition of Riccati Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A Riccati differential equation is a first-order nonlinear equation of the form:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{dy}{dx} = q_0(x) + q_1(x)y + q_2(x)y^2" />
              <p className="mt-2">where:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><InlineMath math="q_0(x), q_1(x), q_2(x)" /> are functions of x only</li>
                <li><InlineMath math="q_2(x) \neq 0" /> (otherwise it would be linear)</li>
                <li>Named after Jacopo Riccati (1676-1754)</li>
                <li>Appears in many applications including optimal control theory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Cases */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-red-200 to-rose-200 dark:from-red-600 dark:to-rose-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-rose-300`}
          >
            Special Cases and Solution Methods
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
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
                      ? "text-red-600 dark:text-red-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Case 1: Known Particular Solution
                </h3>
                <p className="mt-2">
                  If <InlineMath math="y_1(x)" /> is a known particular solution, use the substitution:
                </p>
                <BlockMath math="y = y_1 + \frac{1}{v}" />
                <p className="mt-2">This transforms the Riccati equation into a linear equation in v.</p>
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
                      ? "text-red-600 dark:text-red-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Case 2: Constant Coefficients
                </h3>
                <p className="mt-2">For the equation:</p>
                <BlockMath math="\frac{dy}{dx} = a + by + cy^2" />
                <p className="mt-2">where a, b, c are constants, solutions can often be found using trigonometric or hyperbolic functions.</p>
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
                      ? "text-red-600 dark:text-red-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Case 3: Special Forms
                </h3>
                <p className="mt-2">Some Riccati equations can be reduced to Bernoulli equations or solved by other substitutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Method */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-violet-300`}
          >
            Transformation to Linear Equation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The most powerful method for solving Riccati equations is to transform them into second-order linear equations.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Transformation:</strong></p>
              <p>For the Riccati equation:</p>
              <BlockMath math="\frac{dy}{dx} = q_0(x) + q_1(x)y + q_2(x)y^2" />
              <p className="mt-2">Use the substitution:</p>
              <BlockMath math="y = -\frac{1}{q_2(x)} \cdot \frac{u'}{u}" />
              <p className="mt-2">This gives the second-order linear equation:</p>
              <BlockMath math="u'' - \left[q_1(x) + \frac{q_2'(x)}{q_2(x)}\right]u' + q_0(x)q_2(x)u = 0" />
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-emerald-300 dark:to-teal-300`}
          >
            Worked Example
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mt-2"><strong>Problem:</strong></p>
              <BlockMath math="\frac{dy}{dx} = 1 + y^2" />
              <p className="mt-2"><strong>Solution:</strong></p>
              <p>This is a Riccati equation with <InlineMath math="q_0(x) = 1" />, <InlineMath math="q_1(x) = 0" />, and <InlineMath math="q_2(x) = 1" />.</p>
              
              <p className="mt-2">Method 1: Direct integration (separable form)</p>
              <BlockMath math="\frac{dy}{1 + y^2} = dx" />
              <p className="mt-2">Integrating both sides:</p>
              <BlockMath math="\arctan(y) = x + C" />
              <p className="mt-2">Therefore:</p>
              <BlockMath math="y = \tan(x + C)" />
              
              <p className="mt-4">Method 2: Using the transformation <InlineMath math="y = -\frac{u'}{u}" /></p>
              <p className="mt-2">The second-order equation becomes:</p>
              <BlockMath math="u'' + u = 0" />
              <p className="mt-2">General solution:</p>
              <BlockMath math="u = A\cos x + B\sin x" />
              <p className="mt-2">Therefore:</p>
              <BlockMath math="y = -\frac{u'}{u} = \frac{A\sin x - B\cos x}{A\cos x + B\sin x} = \tan\left(x + \arctan\frac{A}{B}\right)" />
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-orange-300`}
          >
            Applications
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
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Control Theory
                </h3>
                <p className="mt-2 text-sm">
                  Algebraic Riccati equations appear in optimal control problems and Kalman filtering.
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
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Physics
                </h3>
                <p className="mt-2 text-sm">
                  Quantum mechanics, nonlinear optics, and plasma physics problems.
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
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Finance
                </h3>
                <p className="mt-2 text-sm">
                  Option pricing models and portfolio optimization in mathematical finance.
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
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Biology
                </h3>
                <p className="mt-2 text-sm">
                  Population dynamics with competition and predator-prey models.
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
                problem: "\\text{Solve: } \\frac{dy}{dx} = -1 - y^2",
                solution: "y = -\\cot(x + C)",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = x^2 + y^2",
                solution: "\\text{Use transformation to get Airy equation}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = 2y + y^2, \\text{ given } y_1 = -2",
                solution: "y = \\frac{-2(1 + Ce^{2x})}{1 + Ce^{2x}}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = 1 - 2y + y^2",
                solution: "y = 1 + \\tan(x + C)",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = y^2 - 1",
                solution: "y = \\frac{1 + Ce^{2x}}{1 - Ce^{2x}}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{1}{x^2} + \\frac{y^2}{x^2}",
                solution: "y = x\\tan\\left(\\frac{C - 1}{x}\\right)",
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
          Quadratic Nonlinearity
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}