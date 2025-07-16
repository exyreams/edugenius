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
 * @component BernoulliEquations
 * @description A client component that renders a page explaining Bernoulli differential equations.
 * @returns {JSX.Element} The rendered BernoulliEquations page.
 */
export default function BernoulliEquations() {
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
      label: "Bernoulli Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/bernoulli-equations",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-violet-200 scrollbar-thumb-violet-300 dark:scrollbar-track-violet-600 dark:scrollbar-thumb-violet-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-violet-200 scrollbar-thumb-violet-400 dark:scrollbar-track-violet-600 dark:scrollbar-thumb-violet-600"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-violet-300 dark:to-purple-400 md:text-5xl lg:text-6xl`}
        >
          Bernoulli Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to solve nonlinear first-order equations using the Bernoulli substitution method.
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
            Definition of Bernoulli Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A Bernoulli differential equation is a first-order nonlinear equation of the form:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{dy}{dx} + P(x)y = Q(x)y^n" />
              <p className="mt-2">where:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li><InlineMath math="P(x)" /> and <InlineMath math="Q(x)" /> are functions of x only</li>
                <li><InlineMath math="n" /> is a real number (n ≠ 0, 1)</li>
                <li>When n = 0, it becomes a linear equation</li>
                <li>When n = 1, it becomes a separable equation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Method */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-violet-300 dark:to-purple-300`}
          >
            Bernoulli Substitution Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The key to solving Bernoulli equations is to transform them into linear equations using substitution.
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
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 1: Divide by y^n
                </h3>
                <p className="mt-2">
                  Divide the entire equation by <InlineMath math="y^n" />:
                </p>
                <BlockMath math="y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x)" />
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
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 2: Make Substitution
                </h3>
                <p className="mt-2">Let <InlineMath math="v = y^{1-n}" />, then:</p>
                <BlockMath math="\frac{dv}{dx} = (1-n)y^{-n}\frac{dy}{dx}" />
                <p className="mt-2">So: <InlineMath math="y^{-n}\frac{dy}{dx} = \frac{1}{1-n}\frac{dv}{dx}" /></p>
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
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 3: Transform to Linear Equation
                </h3>
                <p className="mt-2">The equation becomes:</p>
                <BlockMath math="\frac{1}{1-n}\frac{dv}{dx} + P(x)v = Q(x)" />
                <p className="mt-2">Multiplying by (1-n):</p>
                <BlockMath math="\frac{dv}{dx} + (1-n)P(x)v = (1-n)Q(x)" />
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
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 4: Solve and Substitute Back
                </h3>
                <p className="mt-2">
                  Solve the linear equation for v, then substitute back <InlineMath math="v = y^{1-n}" /> to find y.
                </p>
              </div>
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
              <BlockMath math="\frac{dy}{dx} + \frac{y}{x} = xy^2" />
              <p className="mt-2"><strong>Solution:</strong></p>
              <p>This is a Bernoulli equation with <InlineMath math="P(x) = \frac{1}{x}" />, <InlineMath math="Q(x) = x" />, and <InlineMath math="n = 2" />.</p>
              
              <p className="mt-2">Step 1: Divide by <InlineMath math="y^2" />:</p>
              <BlockMath math="y^{-2}\frac{dy}{dx} + \frac{1}{x}y^{-1} = x" />
              
              <p className="mt-2">Step 2: Let <InlineMath math="v = y^{1-2} = y^{-1}" />, so <InlineMath math="\frac{dv}{dx} = -y^{-2}\frac{dy}{dx}" /></p>
              <p className="mt-1">Therefore: <InlineMath math="y^{-2}\frac{dy}{dx} = -\frac{dv}{dx}" /></p>
              
              <p className="mt-2">Step 3: Substitute:</p>
              <BlockMath math="-\frac{dv}{dx} + \frac{1}{x}v = x" />
              <p className="mt-1">Rearranging:</p>
              <BlockMath math="\frac{dv}{dx} - \frac{1}{x}v = -x" />
              
              <p className="mt-2">Step 4: This is now a linear equation. Using integrating factor <InlineMath math="\mu = e^{-\int \frac{1}{x}dx} = \frac{1}{x}" />:</p>
              <BlockMath math="\frac{1}{x}\frac{dv}{dx} - \frac{1}{x^2}v = -1" />
              <BlockMath math="\frac{d}{dx}\left(\frac{v}{x}\right) = -1" />
              
              <p className="mt-2">Step 5: Integrate:</p>
              <BlockMath math="\frac{v}{x} = -x + C" />
              <BlockMath math="v = -x^2 + Cx" />
              
              <p className="mt-2">Step 6: Substitute back <InlineMath math="v = \frac{1}{y}" />:</p>
              <BlockMath math="\frac{1}{y} = -x^2 + Cx" />
              <BlockMath math="y = \frac{1}{Cx - x^2}" />
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
                  Population Dynamics
                </h3>
                <p className="mt-2 text-sm">
                  Modeling population growth with limited resources and competition effects.
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
                  Chemical Reactions
                </h3>
                <p className="mt-2 text-sm">
                  Describing reaction rates that depend on concentration in nonlinear ways.
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
                  Economics
                </h3>
                <p className="mt-2 text-sm">
                  Modeling economic growth with diminishing returns or increasing complexity.
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
                  Fluid Mechanics
                </h3>
                <p className="mt-2 text-sm">
                  Describing flow patterns where velocity depends nonlinearly on pressure gradients.
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
                problem: "\\text{Solve: } \\frac{dy}{dx} + y = xy^3",
                solution: "y = \\frac{1}{\\sqrt{Ce^{-2x} + x + \\frac{1}{2}}}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} - \\frac{2y}{x} = \\frac{y^2}{x^2}",
                solution: "y = \\frac{x^2}{C + \\ln|x|}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + \\frac{y}{x} = y^{-2}",
                solution: "y = \\sqrt[3]{\\frac{3x^2}{4} + Cx^{-1}}",
              },
              {
                problem: "\\text{Solve: } x\\frac{dy}{dx} + y = x^2y^{1/2}",
                solution: "y = \\left(\\frac{x}{2} + \\frac{C}{x}\\right)^2",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} + 2xy = xy^3",
                solution: "y = \\frac{1}{\\sqrt{Ce^{2x^2} - 1}}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} - \\frac{y}{x} = x\\sqrt{y}",
                solution: "y = \\left(\\frac{x^2}{4} + Cx^{-1}\\right)^2",
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
          Nonlinear to Linear Transformation
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}