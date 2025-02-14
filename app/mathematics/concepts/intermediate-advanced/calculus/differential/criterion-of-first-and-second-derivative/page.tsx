"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function CriterionOfFirstAndSecondDerivative() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Differential",
      href: "/mathematics/formulas/calculus/differential",
    },
    {
      label: "Criterion of First & Second derivative",
      href: "/mathematics/formulas/calculus/derivative-criteria",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Criterion of First & Second derivative
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Criteria */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Criteria
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  First Derivative Test
                </h3>
                <BlockMath math="\text{If } f'(x) \text{ changes from } + \text{ to } - \text{ at } c \Rightarrow \text{Local Max}" />
                <BlockMath math="\text{If } f'(x) \text{ changes from } - \text{ to } + \text{ at } c \Rightarrow \text{Local Min}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Second Derivative Test
                </h3>
                <BlockMath math="f''(c) > 0 \Rightarrow \text{Local Min}" />
                <BlockMath math="f''(c) < 0 \Rightarrow \text{Local Max}" />
                <BlockMath math="f''(c) = 0 \Rightarrow \text{Inconclusive}" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Interpretation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Graphical Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <path
                  d="M20 180 Q 100 20 180 180"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="20"
                  x2="100"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
                <circle cx="100" cy="20" r="3" fill="#ef4444" />
                <text x="110" y="25" fontSize="12">
                  Local Max
                </text>
                <path
                  d="M20 20 Q 140 100 180 100"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="2"
                />
                <circle cx="140" cy="100" r="3" fill="#10b981" />
                <text x="150" y="105" fontSize="12">
                  Inflection Point
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Concavity Rules
                </h3>
                <BlockMath math="f''(x) > 0 \Rightarrow \text{Concave Up}" />
                <BlockMath math="f''(x) < 0 \Rightarrow \text{Concave Down}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Inflection Points
                </h3>
                <BlockMath math="f''(c) = 0 \text{ AND sign change}" />
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  First Derivative Application
                </h3>
                <BlockMath math="f(x) = x^3 - 3x^2" />
                <BlockMath math="f'(x) = 3x^2 - 6x = 3x(x - 2)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Critical points at x=0 (max) and x=2 (min)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Second Derivative Analysis
                </h3>
                <BlockMath math="f(x) = x^4 - 4x^3" />
                <BlockMath math="f''(x) = 12x^2 - 24x" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Inflection points at x=0 and x=2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem:
                  "\\text{Find critical points of } f(x) = x^3 - 6x^2 + 9x",
                solution: "x=1 \\text{ (max)}, x=3 \\text{ (min)}",
              },
              {
                problem: "\\text{Determine concavity of } f(x) = -x^2 + 4x",
                solution: "\\text{Always concave down}",
              },
              {
                problem:
                  "\\text{Use second derivative test for } f(x) = x^4 - 8x^2",
                solution: "x=0 \\text{ (fail)}, x=±2 \\text{ (min)}",
              },
              {
                problem: "\\text{Find inflection points of } f(x) = x^3 - 3x",
                solution: "x=0",
              },
              {
                problem:
                  "\\text{Analyze } f(x) = \\frac{1}{x^2 + 1} \\text{ using both tests}",
                solution: "\\text{Max at } x=0, \\text{ no inflection}",
              },
              {
                problem: "\\text{Classify critical points of } f(x) = e^{-x^2}",
                solution: "\\text{Max at } x=0",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 transition-all hover:border-indigo-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-indigo-900/50 dark:hover:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Problem {index + 1}
                  </span>
                </div>
                <div className="mt-2 flex justify-start overflow-x-auto">
                  <BlockMath math={item.problem} />
                </div>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer items-center text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                    <span>Show Solution</span>
                    <svg
                      className="ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180"
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
                  <div className="mt-2 flex justify-start overflow-x-auto rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
