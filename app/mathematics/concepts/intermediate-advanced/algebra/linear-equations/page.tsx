"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function LinearEquations() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Linear Equations",
      href: "/mathematics/formulas/algebra/linear-equations",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Linear Equations
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Forms Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Forms
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Slope-Intercept Form
                </h3>
                <BlockMath math="y = mx + b" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <InlineMath math="m" /> = slope, <InlineMath math="b" /> =
                  y-intercept
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Point-Slope Form
                </h3>
                <BlockMath math="y - y_1 = m(x - x_1)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Useful when knowing a point and slope
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Standard Form
                </h3>
                <BlockMath math="Ax + By = C" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <InlineMath math="A" />, <InlineMath math="B" />,{" "}
                  <InlineMath math="C" /> are integers
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  General Form
                </h3>
                <BlockMath math="Ax + By + C = 0" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Alternative standard representation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solving Methods */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Solving Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Isolate Variable</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="2x + 5 = 15 \Rightarrow 2x = 10 \Rightarrow x = 5" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Fraction Handling</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="\frac{3}{4}x = 9 \Rightarrow x = 9 \times \frac{4}{3} = 12" />
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-semibold">
                    Variable on Both Sides
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="5x - 3 = 2x + 9 \Rightarrow 3x = 12 \Rightarrow x = 4" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Verification</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="\text{Check } x=5 \text{ in } 2(5) + 5 = 15" />
                  </p>
                </div>
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
                <line
                  x1="20"
                  y1="180"
                  x2="180"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
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
                <text x="160" y="160" fontSize="12">
                  x-intercept
                </text>
                <text x="30" y="30" fontSize="12">
                  y-intercept
                </text>
                <text
                  x="100"
                  y="100"
                  fontSize="14"
                  className="[fill:currentColor]"
                >
                  y = -x + 180
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Slope Calculation
                </h3>
                <BlockMath math="m = \frac{y_2 - y_1}{x_2 - x_1}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Intercepts
                </h3>
                <BlockMath math="x\text{-int} = -\frac{b}{m}, \quad y\text{-int} = b" />
              </div>
            </div>
          </div>
        </div>

        {/* Systems of Equations */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Systems of Equations
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Substitution Method
                </h3>
                <BlockMath math="\begin{cases} y = 2x + 1 \\ 3x + 2y = 16 \end{cases}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Elimination Method
                </h3>
                <BlockMath math="\begin{cases} 2x + 3y = 7 \\ 4x - 3y = 5 \end{cases}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Graphical Solution
                </h3>
                <BlockMath math="\text{Intersection point } (x, y)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Matrix Method
                </h3>
                <BlockMath math="\begin{bmatrix} 2 & 3 \\ 4 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 7 \\ 5 \end{bmatrix}" />
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
              { problem: "\\text{Solve } 3x + 5 = 20", solution: "x = 5" },
              {
                problem: "\\text{Find slope of } 4x - 2y = 8",
                solution: "m = 2",
              },
              {
                problem:
                  "\\text{Convert } y = \\frac{2}{3}x - 4 \\text{ to standard form}",
                solution: "2x - 3y = 12",
              },
              {
                problem:
                  "\\text{Solve system } \\begin{cases} x + y = 5 \\\\ 2x - y = 1 \\end{cases}",
                solution: "(2, 3)",
              },
              {
                problem: "\\text{Find x-intercept of } y = -\\frac{1}{2}x + 6",
                solution: "x = 12",
              },
              {
                problem: "\\text{Graph } y = -3x + 4",
                solution: "Slope: -3, y-int: (0,4)",
              },
              {
                problem: "\\text{Solve } 5(x - 2) = 3x + 4",
                solution: "x = 7",
              },
              {
                problem:
                  "\\text{Write equation through } (2, -1) \\text{ with slope 3}",
                solution: "y = 3x - 7",
              },
              {
                problem: "\\text{Solve } \\frac{2x}{5} = 8",
                solution: "x = 20",
              },
              {
                problem:
                  "\\text{Find intersection of } y = 2x + 1 \\text{ and } y = -x + 4",
                solution: "(1, 3)",
              },
              {
                problem:
                  "\\text{Convert } y + 4 = -2(x - 3) \\text{ to slope-intercept}",
                solution: "y = -2x + 2",
              },
              {
                problem: "\\text{Solve } 0.5x + 1.2 = 3.4",
                solution: "x = 4.4",
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
