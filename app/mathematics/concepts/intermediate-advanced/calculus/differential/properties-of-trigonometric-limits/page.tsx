"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function TrigonometricLimits() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Trigonometric Limits",
      href: "/mathematics/formulas/calculus/trigonometric-limits",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Trigonometric Limits
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Limits */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Limits
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Foundation for trigonometric derivatives
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Cosine limit relationship
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\lim_{x \to 0} \frac{\tan x}{x} = 1" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Tangent-sine relationship
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\lim_{x \to 0} \frac{\sin(ax)}{bx} = \frac{a}{b}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Scaled argument variation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Squeeze Theorem */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Squeeze Theorem Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="-\frac{1}{x} \leq \frac{\sin x}{x} \leq \frac{1}{x}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Classic squeeze theorem inequality
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\cos x \leq \frac{\sin x}{x} \leq 1" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Alternative bounding approach
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Interpretation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Graphical Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <path
                  d="M20 100 Q100 20 180 100"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="100"
                  x2="180"
                  y2="100"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <text x="50" y="50" fontSize="12">
                  y = sin(x)
                </text>
                <text x="50" y="120" fontSize="12">
                  y = x
                </text>
                <line
                  x1="20"
                  y1="180"
                  x2="180"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="180"
                  y1="180"
                  x2="180"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                As <InlineMath math="x \to 0" />, <InlineMath math="\sin x" />{" "}
                becomes indistinguishable from <InlineMath math="x" />,
                explaining:
              </p>
              <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
            </div>
          </div>
        </div>

        {/* Derivative Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Calculus Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Sine Derivative
                </h3>
                <BlockMath math="\frac{d}{dx}\sin x = \cos x" />
                <BlockMath math="= \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Cosine Derivative
                </h3>
                <BlockMath math="\frac{d}{dx}\cos x = -\sin x" />
                <BlockMath math="= \lim_{h \to 0} \frac{\cos(x+h) - \cos x}{h}" />
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
                problem: "\\lim_{x \\to 0} \\frac{\\sin 3x}{x}",
                solution: "3",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\tan 5x}{\\sin 2x}",
                solution: "\\frac{5}{2}",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x^2}",
                solution: "8",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\sin x \\cos x}{x}",
                solution: "1",
              },
              {
                problem: "\\lim_{x \\to \\pi/2} \\frac{\\cos x}{x - \\pi/2}",
                solution: "-1",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\sin^2 x}{x^2}",
                solution: "1",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\sin(bx)}",
                solution: "\\frac{a}{b}",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}",
                solution: "\\frac{1}{6}",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{\\arcsin x}{x}",
                solution: "1",
              },
              {
                problem: "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x \\sin x}",
                solution: "0",
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
