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
 * @component SeparableDifferentialEquation
 * @description A client component that renders a page explaining separable differential equations.
 * @returns {JSX.Element} The rendered SeparableDifferentialEquation page.
 */
export default function SeparableDifferentialEquation() {
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
      label: "Separable Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/separable-differential-equation",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-orange-200 sm:scrollbar-track-orange-200 scrollbar-thumb-orange-300 sm:scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:sm:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500 dark:sm:scrollbar-thumb-orange-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-orange-200 sm:scrollbar-track-orange-300 scrollbar-thumb-orange-300 sm:scrollbar-thumb-orange-400 dark:scrollbar-track-orange-600 dark:sm:scrollbar-track-orange-700 dark:scrollbar-thumb-orange-500 dark:sm:scrollbar-thumb-orange-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-orange-700 to-amber-800 bg-clip-text text-4xl font-bold text-transparent dark:from-orange-300 dark:to-amber-400 md:text-5xl lg:text-6xl`}
        >
          Separable Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to solve differential equations by separating variables and integrating both sides.
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
            Definition of Separable Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A differential equation is called separable if it can be written in the form where the variables can be separated on different sides of the equation.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>General Form:</strong></p>
              <BlockMath math="\frac{dy}{dx} = g(x) \cdot h(y)" />
              <p className="mt-2">or equivalently:</p>
              <BlockMath math="\frac{dy}{dx} = \frac{f(x)}{g(y)}" />
              <p className="mt-2">This can be rewritten as:</p>
              <BlockMath math="g(y) \, dy = f(x) \, dx" />
            </div>
          </div>
        </div>

        {/* Solution Method */}
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
            Solution Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The solution process involves four main steps:
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
                  Step 1: Separate Variables
                </h3>
                <p className="mt-2">
                  Rearrange the equation so that all terms involving y are on one side and all terms involving x are on the other side.
                </p>
                <BlockMath math="\frac{dy}{h(y)} = g(x) \, dx" />
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
                  Step 2: Integrate Both Sides
                </h3>
                <BlockMath math="\int \frac{dy}{h(y)} = \int g(x) \, dx" />
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
                  Step 3: Add Constant of Integration
                </h3>
                <BlockMath math="H(y) = G(x) + C" />
                <p className="mt-2">where H and G are antiderivatives.</p>
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
                  Step 4: Solve for y (if possible)
                </h3>
                <p className="mt-2">
                  Express y explicitly in terms of x, or leave in implicit form if explicit solution is not feasible.
                </p>
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
                  Example 1: Simple Exponential Growth
                </h3>
                <p className="mt-2"><strong>Problem:</strong></p>
                <BlockMath math="\frac{dy}{dx} = ky" />
                <p className="mt-2"><strong>Solution:</strong></p>
                <p>Step 1: Separate variables</p>
                <BlockMath math="\frac{dy}{y} = k \, dx" />
                <p className="mt-2">Step 2: Integrate both sides</p>
                <BlockMath math="\int \frac{dy}{y} = \int k \, dx" />
                <BlockMath math="\ln|y| = kx + C_1" />
                <p className="mt-2">Step 3: Solve for y</p>
                <BlockMath math="|y| = e^{kx + C_1} = e^{C_1} \cdot e^{kx}" />
                <BlockMath math="y = \pm e^{C_1} \cdot e^{kx} = Ce^{kx}" />
                <p className="mt-2">where <InlineMath math="C = \pm e^{C_1}" /> is an arbitrary constant.</p>
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
                  Example 2: Logistic Growth
                </h3>
                <p className="mt-2"><strong>Problem:</strong></p>
                <BlockMath math="\frac{dy}{dx} = y(1 - y)" />
                <p className="mt-2"><strong>Solution:</strong></p>
                <p>Step 1: Separate variables</p>
                <BlockMath math="\frac{dy}{y(1-y)} = dx" />
                <p className="mt-2">Step 2: Use partial fractions</p>
                <BlockMath math="\frac{1}{y(1-y)} = \frac{A}{y} + \frac{B}{1-y}" />
                <p className="mt-1">Solving: <InlineMath math="A = 1, B = 1" /></p>
                <BlockMath math="\left(\frac{1}{y} + \frac{1}{1-y}\right)dy = dx" />
                <p className="mt-2">Step 3: Integrate</p>
                <BlockMath math="\ln|y| - \ln|1-y| = x + C" />
                <BlockMath math="\ln\left|\frac{y}{1-y}\right| = x + C" />
                <p className="mt-2">Step 4: Solve for y</p>
                <BlockMath math="\frac{y}{1-y} = Ae^x" />
                <BlockMath math="y = \frac{Ae^x}{1 + Ae^x}" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Real-World Applications
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
                  Population Dynamics
                </h3>
                <BlockMath math="\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)" />
                <p className="mt-2 text-sm">
                  Logistic growth model where P is population, r is growth rate, and K is carrying capacity.
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
                  Radioactive Decay
                </h3>
                <BlockMath math="\frac{dN}{dt} = -\lambda N" />
                <p className="mt-2 text-sm">
                  Where N is the number of radioactive nuclei and λ is the decay constant.
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
                  Newton's Law of Cooling
                </h3>
                <BlockMath math="\frac{dT}{dt} = -k(T - T_a)" />
                <p className="mt-2 text-sm">
                  Where T is temperature, <InlineMath math="T_a" /> is ambient temperature, and k is cooling constant.
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
                  Chemical Reactions
                </h3>
                <BlockMath math="\frac{dc}{dt} = -kc^n" />
                <p className="mt-2 text-sm">
                  nth-order reaction where c is concentration and k is rate constant.
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
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{x}{y}",
                solution: "y^2 = x^2 + C \\text{ or } y = \\pm\\sqrt{x^2 + C}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = e^{x+y}",
                solution: "e^{-y} = -e^x + C \\text{ or } y = -\\ln(C - e^x)",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{\\sin x}{\\cos y}",
                solution: "\\sin y = -\\cos x + C",
              },
              {
                problem: "\\text{Solve: } x\\frac{dy}{dx} = y\\ln y, \\, y > 0",
                solution: "\\ln(\\ln y) = \\ln|x| + C \\text{ or } \\ln y = Cx",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{1 + y^2}{1 + x^2}",
                solution: "\\arctan y = \\arctan x + C",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{y^2}{x^2}, \\, x \\neq 0, y \\neq 0",
                solution: "-\\frac{1}{y} = -\\frac{1}{x} + C \\text{ or } y = \\frac{x}{Cx - 1}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\sqrt{xy}",
                solution: "2\\sqrt{y} = \\frac{2x^{3/2}}{3} + C",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{y}{x} + \\frac{y^2}{x^2}",
                solution: "-\\frac{1}{y} = \\frac{\\ln|x|}{x} + \\frac{C}{x}",
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
          Divide and Conquer Approach
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}