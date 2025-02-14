"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function InverseHyperbolic() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Inverse Hyperbolic",
      href: "/mathematics/formulas/calculus/inverse-hyperbolic",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Inverse Hyperbolic Functions
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
                  Inverse Hyperbolic Sine
                </h3>
                <BlockMath math="\sinh^{-1} x = \ln\left(x + \sqrt{x^2 + 1}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="(-\infty, \infty)" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Inverse Hyperbolic Cosine
                </h3>
                <BlockMath math="\cosh^{-1} x = \ln\left(x + \sqrt{x^2 - 1}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="[1, \infty)" />
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Inverse Hyperbolic Tangent
                </h3>
                <BlockMath math="\tanh^{-1} x = \frac{1}{2} \ln\left(\frac{1 + x}{1 - x}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="(-1, 1)" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Inverse Hyperbolic Secant
                </h3>
                <BlockMath math="\sech^{-1} x = \ln\left(\frac{1 + \sqrt{1 - x^2}}{x}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="(0, 1]" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculus Operations */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Derivatives and Integrals
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Differentiation
              </h3>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \sinh^{-1} x = \frac{1}{\sqrt{x^2 + 1}}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \cosh^{-1} x = \frac{1}{\sqrt{x^2 - 1}}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \tanh^{-1} x = \frac{1}{1 - x^2}" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Integration
              </h3>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{\sqrt{x^2 + 1}} dx = \sinh^{-1} x + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{1 - x^2} dx = \tanh^{-1} x + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{\sqrt{x^2 - a^2}} dx = \cosh^{-1}\left(\frac{x}{a}\right) + C" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Function Graphs
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                {/* arcsinh(x) */}
                <path
                  d="M20 100 Q 100 20 180 180"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="2"
                />
                {/* arccosh(x) */}
                <path
                  d="M100 20 L 180 100 Q 180 180 100 180"
                  stroke="#10b981"
                  fill="none"
                  strokeWidth="2"
                />
                {/* arctanh(x) */}
                <path
                  d="M20 100 L 100 100 Q 140 60 180 20"
                  stroke="#ef4444"
                  fill="none"
                  strokeWidth="2"
                />
                <text x="30" y="50" fontSize="12">
                  sinh⁻¹(x)
                </text>
                <text x="140" y="170" fontSize="12">
                  cosh⁻¹(x)
                </text>
                <text x="140" y="30" fontSize="12">
                  tanh⁻¹(x)
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Features
                </h3>
                <ul className="ml-4 list-disc text-gray-600 dark:text-gray-300">
                  <li>arcsinh(x) is odd function</li>
                  <li>arccosh(x) defined for x ≥ 1</li>
                  <li>arctanh(x) vertical asymptotes at ±1</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Important Identity
                </h3>
                <BlockMath math="\tanh^{-1} x = \frac{1}{2} \ln\left(\frac{1+x}{1-x}\right)" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Practical Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Electrical Engineering
                </h3>
                <BlockMath math="V(t) = V_0 \tanh^{-1}\left(\frac{I(t)}{I_0}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Modeling nonlinear circuit behavior
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Relativistic Physics
                </h3>
                <BlockMath math="\eta = \tanh^{-1}\left(\frac{v}{c}\right)" />
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
              { problem: "\\text{Evaluate } \\sinh^{-1}(0)", solution: "0" },
              {
                problem: "\\text{Find } \\frac{d}{dx} \\cosh^{-1}(3x)",
                solution: "\\frac{3}{\\sqrt{(3x)^2 - 1}}",
              },
              {
                problem: "\\text{Solve } \\tanh^{-1} x = 1",
                solution: "x = \\tanh 1 \\approx 0.7616",
              },
              {
                problem: "\\text{Integrate } \\int \\frac{dx}{\\sqrt{x^2 + 4}}",
                solution: "\\sinh^{-1}\\left(\\frac{x}{2}\\right) + C",
              },
              {
                problem:
                  "\\text{Prove } \\frac{d}{dx} \\sech^{-1} x = -\\frac{1}{x\\sqrt{1 - x^2}}",
                solution: "Use derivative definition",
              },
              {
                problem: "\\text{Calculate } \\cosh^{-1}(2)",
                solution: "\\ln(2 + \\sqrt{3})",
              },
              {
                problem: "\\text{Simplify } \\sinh(\\sinh^{-1} x)",
                solution: "x",
              },
              {
                problem: "\\text{Find domain of } \\coth^{-1} x",
                solution: "(-\\infty, -1) \\cup (1, \\infty)",
              },
              {
                problem: "\\text{Evaluate } \\lim_{x \\to 1^-} \\tanh^{-1} x",
                solution: "\\infty",
              },
              {
                problem:
                  "\\text{Express } \\cosh^{-1} x \\text{ using natural log}",
                solution: "\\ln(x + \\sqrt{x^2 - 1})",
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
