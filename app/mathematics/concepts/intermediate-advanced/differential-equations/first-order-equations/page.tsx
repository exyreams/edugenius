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
 * @component FirstOrderEquations
 * @description A client component that renders a page explaining first-order differential equations.
 * @returns {JSX.Element} The rendered FirstOrderEquations page.
 */
export default function FirstOrderEquations() {
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
      label: "First-Order Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/first-order-equations",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-green-200 sm:scrollbar-track-green-200 scrollbar-thumb-green-300 sm:scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:sm:scrollbar-track-green-600 dark:scrollbar-thumb-green-500 dark:sm:scrollbar-thumb-green-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-green-200 sm:scrollbar-track-green-300 scrollbar-thumb-green-300 sm:scrollbar-thumb-green-400 dark:scrollbar-track-green-600 dark:sm:scrollbar-track-green-700 dark:scrollbar-thumb-green-500 dark:sm:scrollbar-thumb-green-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-green-300 dark:to-emerald-400 md:text-5xl lg:text-6xl`}
        >
          First-Order Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the fundamental techniques for solving first-order differential equations.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* General Form */}
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
            General Form of First-Order Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A first-order differential equation involves only the first derivative of the unknown function.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Standard Form:</strong></p>
              <BlockMath math="\frac{dy}{dx} = f(x, y)" />
              <p className="mt-2">or in differential form:</p>
              <BlockMath math="M(x, y)dx + N(x, y)dy = 0" />
            </div>
          </div>
        </div>

        {/* Variable Separable */}
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
            Variable Separable Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              These equations can be written in the form where variables can be separated on different sides.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Form:</strong></p>
              <BlockMath math="\frac{dy}{dx} = g(x)h(y)" />
              <p className="mt-2"><strong>Solution Method:</strong></p>
              <BlockMath math="\frac{dy}{h(y)} = g(x)dx" />
              <p className="mt-2">Integrate both sides:</p>
              <BlockMath math="\int \frac{dy}{h(y)} = \int g(x)dx + C" />
            </div>
            
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Example:</strong></p>
              <BlockMath math="\frac{dy}{dx} = xy" />
              <p className="mt-2">Separating variables:</p>
              <BlockMath math="\frac{dy}{y} = x dx" />
              <p className="mt-2">Integrating:</p>
              <BlockMath math="\ln|y| = \frac{x^2}{2} + C" />
              <p className="mt-2">Solution:</p>
              <BlockMath math="y = Ae^{x^2/2}" />
            </div>
          </div>
        </div>

        {/* Homogeneous Equations */}
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
            Homogeneous Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A first-order equation is homogeneous if it can be written as:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{dy}{dx} = f\left(\frac{y}{x}\right)" />
              <p className="mt-2"><strong>Solution Method:</strong></p>
              <p>Substitute <InlineMath math="v = \frac{y}{x}" />, so <InlineMath math="y = vx" /></p>
              <BlockMath math="\frac{dy}{dx} = v + x\frac{dv}{dx}" />
              <p className="mt-2">The equation becomes:</p>
              <BlockMath math="v + x\frac{dv}{dx} = f(v)" />
              <BlockMath math="x\frac{dv}{dx} = f(v) - v" />
            </div>
          </div>
        </div>

        {/* Linear First-Order */}
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
            Linear First-Order Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Standard Form:</strong></p>
              <BlockMath math="\frac{dy}{dx} + P(x)y = Q(x)" />
              <p className="mt-2"><strong>Integrating Factor:</strong></p>
              <BlockMath math="\mu(x) = e^{\int P(x)dx}" />
              <p className="mt-2"><strong>Solution:</strong></p>
              <BlockMath math="y = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x)dx + C\right]" />
            </div>
            
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Example:</strong></p>
              <BlockMath math="\frac{dy}{dx} + 2y = e^x" />
              <p className="mt-2">Here <InlineMath math="P(x) = 2" />, so:</p>
              <BlockMath math="\mu(x) = e^{2x}" />
              <p className="mt-2">Multiplying the equation by <InlineMath math="e^{2x}" />:</p>
              <BlockMath math="e^{2x}\frac{dy}{dx} + 2e^{2x}y = e^{3x}" />
              <p className="mt-2">This gives us:</p>
              <BlockMath math="\frac{d}{dx}(ye^{2x}) = e^{3x}" />
              <p className="mt-2">Solution:</p>
              <BlockMath math="y = \frac{e^x}{3} + Ce^{-2x}" />
            </div>
          </div>
        </div>

        {/* Exact Equations */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-red-200 dark:from-rose-600 dark:to-red-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-red-300`}
          >
            Exact Differential Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              An equation <InlineMath math="M(x,y)dx + N(x,y)dy = 0" /> is exact if:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Exactness Condition:</strong></p>
              <BlockMath math="\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}" />
              <p className="mt-2"><strong>Solution Method:</strong></p>
              <p>Find function <InlineMath math="F(x,y)" /> such that:</p>
              <BlockMath math="\frac{\partial F}{\partial x} = M(x,y) \text{ and } \frac{\partial F}{\partial y} = N(x,y)" />
              <p className="mt-2">The solution is:</p>
              <BlockMath math="F(x,y) = C" />
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
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{y}{x}",
                solution: "y = Cx \\text{ (separable)}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + y = x",
                solution: "y = x - 1 + Ce^{-x} \\text{ (linear)}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{x + y}{x}",
                solution: "y = x(\\ln|x| + C) \\text{ (homogeneous)}",
              },
              {
                problem: "\\text{Check if exact: } (2x + y)dx + (x + 2y)dy = 0",
                solution: "\\frac{\\partial M}{\\partial y} = 1, \\frac{\\partial N}{\\partial x} = 1 \\text{ (exact)}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = e^{x-y}",
                solution: "e^y = e^x + C \\text{ (separable)}",
              },
              {
                problem: "\\text{Solve: } x\\frac{dy}{dx} - y = x^2",
                solution: "y = \\frac{x^2}{2} + Cx \\text{ (linear)}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{x^2 + y^2}{2xy}",
                solution: "x^2 - y^2 = Cx \\text{ (homogeneous)}",
              },
              {
                problem: "\\text{Solve: } (3x^2 + 2y)dx + (2x + 4y)dy = 0",
                solution: "x^3 + 2xy + 2y^2 = C \\text{ (exact)}",
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
          First Steps in Dynamic Analysis
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}