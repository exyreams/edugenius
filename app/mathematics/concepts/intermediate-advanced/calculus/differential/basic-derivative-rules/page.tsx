"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function DerivativeRules() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Differential",
      href: "/mathematics/formulas/calculus/differential",
    },
    {
      label: "Basic Derivative Rules",
      href: "/mathematics/formulas/calculus/differential/derivative-rules",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Basic Derivative Rules
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Rules Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Rules
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Power Rule
                </h3>
                <BlockMath math="\frac{d}{dx} x^n = nx^{n-1}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Sum/Difference Rule
                </h3>
                <BlockMath math="\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Product Rule
                </h3>
                <BlockMath math="\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Quotient Rule
                </h3>
                <BlockMath math="\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}" />
              </div>
            </div>
          </div>
        </div>

        {/* Common Derivatives */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Common Derivatives
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} e^x = e^x" />
                <BlockMath math="\frac{d}{dx} \ln(x) = \frac{1}{x}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \sin(x) = \cos(x)" />
                <BlockMath math="\frac{d}{dx} \cos(x) = -\sin(x)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \tan(x) = \sec^2(x)" />
                <BlockMath math="\frac{d}{dx} \sec(x) = \sec(x)\tan(x)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} a^x = a^x \ln(a)" />
                <BlockMath math="\frac{d}{dx} \log_a(x) = \frac{1}{x \ln(a)}" />
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
                  Basic Differentiation
                </h3>
                <BlockMath math="\frac{d}{dx}(3x^4 + 2x^2 - 5) = 12x^3 + 4x" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Product Rule Application
                </h3>
                <BlockMath math="\frac{d}{dx}[x^2 \sin(x)] = 2x\sin(x) + x^2\cos(x)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Quotient Rule Example
                </h3>
                <BlockMath math="\frac{d}{dx}\left[\frac{x}{e^x}\right] = \frac{e^x - xe^x}{e^{2x}} = \frac{1 - x}{e^x}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Chain Rule
                </h3>
                <BlockMath math="\frac{d}{dx} \sin(3x^2) = 6x\cos(3x^2)" />
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
                problem: "\\frac{d}{dx}(4x^5 - 3x^3 + 2x)",
                solution: "20x^4 - 9x^2 + 2",
              },
              {
                problem: "\\frac{d}{dx}[e^x \\cos(x)]",
                solution: "e^x\\cos(x) - e^x\\sin(x)",
              },
              {
                problem: "\\frac{d}{dx}\\left(\\frac{2x+1}{x^2}\\right)",
                solution: "\\frac{-2x - 2}{x^3}",
              },
              { problem: "\\frac{d}{dx}\\ln(3x^2)", solution: "\\frac{2}{x}" },
              {
                problem: "\\frac{d}{dx}\\sqrt{x^3 + 1}",
                solution: "\\frac{3x^2}{2\\sqrt{x^3 + 1}}",
              },
              {
                problem: "\\frac{d}{dx}\\tan^{-1}(x)",
                solution: "\\frac{1}{1 + x^2}",
              },
              {
                problem: "\\frac{d}{dx}(5^{2x})",
                solution: "2\\ln(5) \\cdot 5^{2x}",
              },
              {
                problem: "\\frac{d}{dx}[\\sin(x)\\cos(x)]",
                solution: "\\cos^2(x) - \\sin^2(x)",
              },
              {
                problem: "\\frac{d}{dx}\\left(\\frac{x}{x+1}\\right)",
                solution: "\\frac{1}{(x+1)^2}",
              },
              {
                problem: "\\frac{d}{dx}\\sec(x^2)",
                solution: "2x\\sec(x^2)\\tan(x^2)",
              },
              { problem: "\\frac{d}{dx}\\ln(\\sin(x))", solution: "\\cot(x)" },
              {
                problem: "\\frac{d}{dx}(x^2 e^{3x})",
                solution: "2xe^{3x} + 3x^2e^{3x}",
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
