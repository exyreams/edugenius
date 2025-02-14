"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function HyperbolicFunctions() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Differential",
      href: "/mathematics/formulas/calculus/differential",
    },
    {
      label: "Hyperbolic Functions",
      href: "/mathematics/formulas/calculus/hyperbolic-functions",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Hyperbolic Functions
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Definitions */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Definitions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Hyperbolic Sine
                </h3>
                <BlockMath math="\sinh x = \frac{e^x - e^{-x}}{2}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Hyperbolic Cosine
                </h3>
                <BlockMath math="\cosh x = \frac{e^x + e^{-x}}{2}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Hyperbolic Tangent
                </h3>
                <BlockMath math="\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Reciprocal Functions
                </h3>
                <BlockMath math="\sech x = \frac{1}{\cosh x}, \quad \csch x = \frac{1}{\sinh x}, \quad \coth x = \frac{1}{\tanh x}" />
              </div>
            </div>
          </div>
        </div>

        {/* Derivatives and Integrals */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Calculus Operations
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Derivatives
              </h3>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \sinh x = \cosh x" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \cosh x = \sinh x" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \tanh x = \sech^2 x" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Integrals
              </h3>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \sinh x \, dx = \cosh x + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \cosh x \, dx = \sinh x + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \sech^2 x \, dx = \tanh x + C" />
              </div>
            </div>
          </div>
        </div>

        {/* Inverse Hyperbolic Functions */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Inverse Hyperbolic Functions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\sinh^{-1} x = \ln\left(x + \sqrt{x^2 + 1}\right)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\cosh^{-1} x = \ln\left(x + \sqrt{x^2 - 1}\right), \quad x \geq 1" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\tanh^{-1} x = \frac{1}{2} \ln\left(\frac{1 + x}{1 - x}\right), \quad |x| < 1" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\sech^{-1} x = \ln\left(\frac{1 + \sqrt{1 - x^2}}{x}\right), \quad 0 < x \leq 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Graphical Behavior
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                {/* sinh(x) curve */}
                <path
                  d="M20 100 Q 100 20 180 100"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="2"
                />
                {/* cosh(x) curve */}
                <path
                  d="M20 180 Q 100 20 180 180"
                  stroke="#10b981"
                  fill="none"
                  strokeWidth="2"
                />
                {/* tanh(x) curve */}
                <path
                  d="M20 100 L 100 100 Q 140 140 180 180"
                  stroke="#ef4444"
                  fill="none"
                  strokeWidth="2"
                />
                <text x="30" y="50" fontSize="12">
                  sinh(x)
                </text>
                <text x="30" y="170" fontSize="12">
                  cosh(x)
                </text>
                <text x="150" y="150" fontSize="12">
                  tanh(x)
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Features
                </h3>
                <ul className="ml-4 list-disc text-gray-600 dark:text-gray-300">
                  <li>cosh(x) is always ≥ 1</li>
                  <li>sinh(x) passes through origin</li>
                  <li>tanh(x) approaches ±1 asymptotically</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Hyperbolic Identities
                </h3>
                <BlockMath math="\cosh^2 x - \sinh^2 x = 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-red-300">
            Real-World Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Catenary Curves
                </h3>
                <BlockMath math="y = a \cosh\left(\frac{x}{a}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Shape of hanging chains/power lines
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Special Relativity
                </h3>
                <BlockMath math="\tanh \phi = \frac{v}{c}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Rapidities in Lorentz transformations
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
                problem: "\\text{Simplify } \\cosh^2 x - \\sinh^2 x",
                solution: "1",
              },
              {
                problem: "\\text{Find } \\frac{d}{dx} \\tanh(3x)",
                solution: "3\\sech^2(3x)",
              },
              { problem: "\\text{Solve } \\sinh x = 0", solution: "x = 0" },
              {
                problem: "\\text{Evaluate } \\int \\sech x \\tanh x \\, dx",
                solution: "-\\sech x + C",
              },
              {
                problem: "\\text{Prove } \\cosh(2x) = 2\\cosh^2 x - 1",
                solution: "Use exponential definition",
              },
              {
                problem: "\\text{Find inverse } \\sinh^{-1}(1)",
                solution: "\\ln(1 + \\sqrt{2})",
              },
              {
                problem: "\\text{Solve } 2\\cosh x + 3\\sinh x = 5",
                solution: "x = \\ln 2",
              },
              {
                problem: "\\text{Integrate } \\int x \\sinh x \\, dx",
                solution: "x\\cosh x - \\sinh x + C",
              },
              {
                problem: "\\text{Find } \\lim_{x \\to \\infty} \\tanh x",
                solution: "1",
              },
              {
                problem:
                  "\\text{Express } \\cosh x \\text{ in terms of exponentials}",
                solution: "\\frac{e^x + e^{-x}}{2}",
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
