"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function SummationTheorems() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Summation Theorems",
      href: "/mathematics/formulas/algebra/summation-theorems",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Summation Theorems
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Formulas */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Summations
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Arithmetic Series
                </h3>
                <BlockMath math="\sum_{k=1}^n k = \frac{n(n+1)}{2}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Geometric Series
                </h3>
                <BlockMath math="\sum_{k=0}^n r^k = \frac{1 - r^{n+1}}{1 - r}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Sum of Squares
                </h3>
                <BlockMath math="\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Sum of Cubes
                </h3>
                <BlockMath math="\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Theorems */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Summation Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Linearity
                </h3>
                <BlockMath math="\sum_{k=1}^n (a_k + b_k) = \sum_{k=1}^n a_k + \sum_{k=1}^n b_k" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Constant Multiple
                </h3>
                <BlockMath math="\sum_{k=1}^n ca_k = c\sum_{k=1}^n a_k" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Telescoping Series
                </h3>
                <BlockMath math="\sum_{k=1}^n (a_k - a_{k+1}) = a_1 - a_{n+1}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Index Shift
                </h3>
                <BlockMath math="\sum_{k=m}^n a_k = \sum_{k=m+p}^{n+p} a_{k-p}" />
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Theorems */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Advanced Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Summation by Parts
                </h3>
                <BlockMath math="\sum_{k=m}^n a_k(b_{k+1} - b_k) = a_{n+1}b_{n+1} - a_m b_m - \sum_{k=m}^n b_{k+1}(a_{k+1} - a_k)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Dirichlet&#39;s Theorem
                </h3>
                <BlockMath math="\sum_{k=1}^n a_k b_k = A_n b_{n+1} - \sum_{k=1}^n A_k (b_{k+1} - b_k)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where <InlineMath math="A_k = \sum_{i=1}^k a_i" />
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
                problem: "\\text{Compute } \\sum_{k=1}^{10} k",
                solution: "\\frac{10 \\times 11}{2} = 55",
              },
              {
                problem: "\\text{Evaluate } \\sum_{k=0}^4 2^k",
                solution: "1 + 2 + 4 + 8 + 16 = 31",
              },
              {
                problem: "\\text{Find } \\sum_{k=1}^5 (3k - 2)",
                solution: "3 \\times 15 - 10 = 35",
              },
              {
                problem:
                  "\\text{Simplify } \\sum_{k=1}^n (\\frac{1}{k} - \\frac{1}{k+1})",
                solution: "1 - \\frac{1}{n+1}",
              },
              {
                problem: "\\text{Calculate } \\sum_{k=1}^{4} k^3",
                solution: "1 + 8 + 27 + 64 = 100",
              },
              {
                problem: "\\text{Prove } \\sum_{k=1}^n (2k - 1) = n^2",
                solution: "\\text{Use mathematical induction}",
              },
              {
                problem: "\\text{Evaluate } \\sum_{k=1}^\\infty \\frac{1}{2^k}",
                solution: "1",
              },
              {
                problem: "\\text{Compute } \\sum_{k=1}^{7} \\frac{k}{k+1}",
                solution:
                  "\\text{Telescoping series: } 1 - \\frac{1}{8} = \\frac{7}{8}",
              },
              {
                problem: "\\text{Find } \\sum_{k=1}^{50} 5",
                solution: "5 \\times 50 = 250",
              },
              {
                problem: "\\text{Solve } \\sum_{k=3}^{7} (k^2 - 2k)",
                solution: "(9-6)+(16-8)+(25-10)+(36-12)+(49-14) = 93",
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
