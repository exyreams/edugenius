"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function LimitProperties() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Limit Properties",
      href: "/mathematics/formulas/calculus/limit-properties",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Differential Properties of Limits
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Limit Laws */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Limit Laws
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Sum Law
                </h3>
                <BlockMath math="\lim_{x \to a} [f(x) + g(x)] = L + M" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Product Law
                </h3>
                <BlockMath math="\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Quotient Law
                </h3>
                <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (M \neq 0)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Power Law
                </h3>
                <BlockMath math="\lim_{x \to a} [f(x)]^n = L^n" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Limits */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Special Limits
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
                <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e" />
                <BlockMath math="\lim_{x \to 0} \frac{e^x - 1}{x} = 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Continuity */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Continuity & Limits
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
                <circle cx="100" cy="100" r="3" fill="currentColor" />
                <text x="90" y="120" fontSize="12">
                  f(a)
                </text>
                <text x="50" y="50" fontSize="12">
                  lim
                  <tspan baseline-shift="sub" font-size="8">
                    x → a
                  </tspan>
                  f(x) = f(a)
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="f \text{ is continuous at } a \iff \lim_{x \to a} f(x) = f(a)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\text{If } f \text{ and } g \text{ are continuous, then } f \circ g \text{ is continuous}" />
              </div>
            </div>
          </div>
        </div>

        {/* L'Hôpital's Rule */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            L&#39;Hôpital&#39;s Rule
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\text{For } \frac{0}{0} \text{ or } \frac{\infty}{\infty} \text{ forms}" />
                <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\text{Example: } \lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1" />
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
                problem: "\\lim_{x \\to 3} (2x + 5)",
                solution: "2(3) + 5 = 11",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\sin 3x}{x}",
                solution: "3",
              },
              {
                problem:
                  "\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)^x",
                solution: "e^2",
              },
              {
                problem: "\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}",
                solution: "8",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}",
                solution: "\\frac{1}{2}",
              },
              {
                problem: "\\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1}",
                solution: "3",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}",
                solution: "\\frac{1}{3}",
              },
              {
                problem:
                  "\\lim_{x \\to \\infty} \\frac{3x^2 - 2x + 1}{5x^2 + 4}",
                solution: "\\frac{3}{5}",
              },
              { problem: "\\lim_{x \\to 0^+} x \\ln x", solution: "0" },
              {
                problem: "\\lim_{x \\to \\pi/2} \\frac{\\cos x}{x - \\pi/2}",
                solution: "-1",
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
