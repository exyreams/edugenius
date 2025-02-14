"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function LogarithmProperties() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Logarithm Properties",
      href: "/mathematics/formulas/algebra/logarithm-properties",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Logarithm Properties
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            7 Fundamental Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {/* Column 1 */}
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  1. Product Rule
                </h3>
                <BlockMath math="\log_b(xy) = \log_b x + \log_b y" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  2. Quotient Rule
                </h3>
                <BlockMath math="\log_b\left(\frac{x}{y}\right) = \log_b x - \log_b y" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  3. Power Rule
                </h3>
                <BlockMath math="\log_b(x^n) = n\log_b x" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  7. Inverse Properties
                </h3>
                <BlockMath math="b^{\log_b x} = x" />
                <BlockMath math="\log_b(b^x) = x" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  4. Change of Base
                </h3>
                <BlockMath math="\log_b a = \frac{\log_c a}{\log_c b}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  5. Logarithm of 1
                </h3>
                <BlockMath math="\log_b 1 = 0" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  6. Logarithm of the Base
                </h3>
                <BlockMath math="\log_b b = 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Logarithmic Graph
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <path
                  d="M20 180 L180 20"
                  stroke="currentColor"
                  fill="none"
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
                <text x="30" y="160" fontSize="12">
                  (1, 0)
                </text>
                <text x="150" y="30" fontSize="12">
                  Vertical asymptote at x=0
                </text>
                <text
                  x="100"
                  y="100"
                  fontSize="14"
                  className="[fill:currentColor]"
                >
                  y = log_b(x)
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Domain
                </h3>
                <BlockMath math="x > 0" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Range
                </h3>
                <BlockMath math="y \in \mathbb{R}" />
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Worked Examples
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Combining Logs
                </h3>
                <BlockMath math="\ln 5 + 3\ln 2 = \ln(5 \cdot 2^3) = \ln 40" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Expanding Logs
                </h3>
                <BlockMath math="\log\left(\frac{x^3}{y}\right) = 3\log x - \log y" />
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
              { problem: "\\text{Simplify } \\log_4 64", solution: "3" },
              {
                problem: "\\text{Expand } \\ln\\left(\\frac{x^2}{y^3}\\right)",
                solution: "2\\ln x - 3\\ln y",
              },
              {
                problem: "\\text{Combine } 2\\log a + \\frac{1}{2}\\log b",
                solution: "\\log(a^2\\sqrt{b})",
              },
              { problem: "\\text{Solve } \\log_5 x = 3", solution: "x = 125" },
              { problem: "\\text{Evaluate } \\log_2 32", solution: "5" },
              {
                problem: "\\text{Simplify } \\log_3 81 - \\log_3 9",
                solution: "2",
              },
              {
                problem: "\\text{Convert to natural log: } \\log_7 10",
                solution: "\\frac{\\ln 10}{\\ln 7}",
              },
              {
                problem: "\\text{Solve } \\ln(x^2) = 4",
                solution: "x = \\pm e^2",
              },
              {
                problem: "\\text{Expand } \\log\\sqrt[3]{xy}",
                solution: "\\frac{1}{3}(\\log x + \\log y)",
              },
              {
                problem: "\\text{Prove } \\log_b b^x = x",
                solution: "By definition of logarithms",
              },
              { problem: "\\text{Simplify } 5^{\\log_5 8}", solution: "8" },
              {
                problem: "\\text{Solve } 2\\log x = \\log 16",
                solution: "x = 4",
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
