"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function TrigonometricFunctions() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Trigonometric Functions",
      href: "/mathematics/formulas/algebra/trigonometric-functions",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Trigonometric Functions
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Functions */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Trigonometric Functions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                Sine Function
              </h3>
              <BlockMath math="\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Period: <InlineMath math="2\pi" />, Range: [-1, 1]
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Cosine Function
              </h3>
              <BlockMath math="\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Period: <InlineMath math="2\pi" />, Even Function
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                Tangent Function
              </h3>
              <BlockMath math="\tan\theta = \frac{\sin\theta}{\cos\theta}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Period: <InlineMath math="\pi" />, Vertical Asymptotes
              </p>
            </div>
          </div>
        </div>

        {/* Key Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Core Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Pythagorean Identity
                </h3>
                <BlockMath math="\sin^2\theta + \cos^2\theta = 1" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Angle Sum Formula
                </h3>
                <BlockMath math="\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Double Angle Formula
                </h3>
                <BlockMath math="\cos 2\theta = \cos^2\theta - \sin^2\theta" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Reciprocal Identity
                </h3>
                <BlockMath math="\cot\theta = \frac{1}{\tan\theta} = \frac{\cos\theta}{\sin\theta}" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Behavior */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Graphical Characteristics
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Sine Wave
                </h3>
                <BlockMath math="y = A\sin(Bx + C) + D" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Amplitude: <InlineMath math="|A|" />, Period:{" "}
                  <InlineMath math="\frac{2\pi}{B}" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Tangent Curve
                </h3>
                <BlockMath math="y = \tan(x)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Vertical asymptotes at{" "}
                  <InlineMath math="x = \frac{\pi}{2} + n\pi" />
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Phase Shift
                </h3>
                <BlockMath math="y = \cos(x - C)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Horizontal shift: <InlineMath math="\frac{C}{B}" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Amplitude Modulation
                </h3>
                <BlockMath math="y = 2\sin x + 3\cos x" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Can be expressed as single sine wave
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
                problem: "\\text{Simplify } \\sin^2x + \\cos^2x",
                solution: "1",
              },
              {
                problem: "\\text{Find period of } y = \\cos(3x)",
                solution: "\\frac{2\\pi}{3}",
              },
              {
                problem:
                  "\\text{Prove } \\sin(x + y) + \\sin(x - y) = 2\\sin x\\cos y",
                solution: "Use sum formula",
              },
              {
                problem:
                  "\\text{Solve } 2\\cos x - 1 = 0 \\text{ for } 0 \\leq x < 2\\pi",
                solution: "x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}",
              },
              {
                problem:
                  "\\text{Express } \\cos^2x \\text{ using double angle formula}",
                solution: "\\frac{1 + \\cos2x}{2}",
              },
              {
                problem: "\\text{Find amplitude of } y = -3\\sin x",
                solution: "3",
              },
              {
                problem: "\\text{Convert } 150^\\circ \\text{ to radians}",
                solution: "\\frac{5\\pi}{6}",
              },
              {
                problem: "\\text{Evaluate } \\tan^{-1}(1)",
                solution: "\\frac{\\pi}{4}",
              },
              {
                problem: "\\text{Graph } y = 2\\sin(x - \\pi/2)",
                solution: "Amplitude 2, right shift \\pi/2",
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
