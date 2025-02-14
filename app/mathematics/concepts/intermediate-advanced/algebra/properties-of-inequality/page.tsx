"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function PropertiesOfInequality() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Inequality Properties",
      href: "/mathematics/formulas/algebra/inequality-properties",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Properties of Inequalities
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Addition/Subtraction
                </h3>
                <BlockMath math="a < b \Rightarrow a \pm c < b \pm c" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Multiplication (Positive)
                </h3>
                <BlockMath math="c > 0: a < b \Rightarrow ac < bc" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Multiplication (Negative)
                </h3>
                <BlockMath math="c < 0: a < b \Rightarrow ac > bc" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Transitive Property
                </h3>
                <BlockMath math="a < b \text{ and } b < c \Rightarrow a < c" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Inequalities */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Special Inequality Types
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Absolute Value
                </h3>
                <BlockMath math="|x| < a \Rightarrow -a < x < a" />
                <BlockMath math="|x| > a \Rightarrow x < -a \text{ or } x > a" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Compound Inequalities
                </h3>
                <BlockMath math="a < x < b = a < x \text{ and } x < b" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Graphical Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 100"
                className="h-32 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <line
                  x1="20"
                  y1="50"
                  x2="180"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="140"
                  cy="50"
                  r="4"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <line
                  x1="140"
                  y1="50"
                  x2="180"
                  y2="50"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <text x="100" y="30" fontSize="12">
                  x &gt; 3
                </text>
                <text x="20" y="80" fontSize="12">
                  -∞
                </text>
                <text x="180" y="80" fontSize="12">
                  ∞
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Number Line Notation
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Open circle: &gt; or &lt;</li>
                  <li>Closed circle: ≥ or ≤</li>
                  <li>Arrow direction indicates solution set</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Practical Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Budget Constraints
                </h3>
                <BlockMath math="5x + 3y \leq 100" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  x = items A, y = items B
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Physics Boundaries
                </h3>
                <BlockMath math="0 \leq t \leq 10 \text{ (time in seconds)}" />
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
              { problem: "\\text{Solve } 3x - 5 < 10", solution: "x < 5" },
              { problem: "\\text{Solve } -2y \\geq 8", solution: "y \\leq -4" },
              {
                problem: "\\text{Solve } |2x + 1| > 7",
                solution: "x > 3 \\text{ or } x < -4",
              },
              {
                problem: "\\text{Solve } 4 < 2x - 6 \\leq 10",
                solution: "5 < x \\leq 8",
              },
              {
                problem: "\\text{Graph } x \\leq -1 \\text{ on number line}",
                solution: "Closed circle at -1, arrow left",
              },
              {
                problem: "\\text{Solve } \\frac{x}{3} + 2 \\geq 5",
                solution: "x \\geq 9",
              },
              { problem: "\\text{Solve } 5 - 3x > 14", solution: "x < -3" },
              {
                problem: "\\text{Solve } |x - 2| \\leq 5",
                solution: "-3 \\leq x \\leq 7",
              },
              {
                problem: "\\text{Find integers satisfying } -2 < n \\leq 3",
                solution: "\\{-1, 0, 1, 2, 3\\}",
              },
              {
                problem: "\\text{Solve } 2(x + 3) < 4x - 6",
                solution: "x > 6",
              },
              {
                problem:
                  "\\text{Solve compound } 3x + 2 > 5 \\text{ and } x - 4 < 1",
                solution: "1 < x < 5",
              },
              {
                problem: "\\text{Solve } \\frac{2x - 5}{3} \\leq 1",
                solution: "x \\leq 4",
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
