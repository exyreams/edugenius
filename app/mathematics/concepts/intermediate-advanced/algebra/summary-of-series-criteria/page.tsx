"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function SummaryOfSeriesCriteria() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Summary of Series Criteria",
      href: "/mathematics/formulas/calculus/series-convergence",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Summary of Series Criteria
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Tests Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Tests
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Geometric Series
              </h3>
              <BlockMath math="\sum_{n=0}^\infty ar^n" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Converges if <InlineMath math="|r| < 1" />
              </p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                p-Series
              </h3>
              <BlockMath math="\sum_{n=1}^\infty \frac{1}{n^p}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Converges if <InlineMath math="p > 1" />
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                Integral Test
              </h3>
              <BlockMath math="f(n) = a_n \text{ must be positive, continuous, decreasing}" />
            </div>
          </div>
        </div>

        {/* Comparison Tests */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Comparison Tests
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Direct Comparison
                </h3>
                <BlockMath math="0 \leq a_n \leq b_n" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  If <InlineMath math="\sum b_n" /> converges, then{" "}
                  <InlineMath math="\sum a_n" /> converges
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Limit Comparison
                </h3>
                <BlockMath math="\lim_{n\to\infty} \frac{a_n}{b_n} = L" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  <InlineMath math="L > 0" />: Both series converge or diverge
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Tests */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Advanced Convergence Tests
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                Ratio Test
              </h3>
              <BlockMath math="\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = L" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <InlineMath math="L < 1" />: Converges
                <br />
                <InlineMath math="L > 1" />: Diverges
              </p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                Root Test
              </h3>
              <BlockMath math="\lim_{n\to\infty} \sqrt[n]{|a_n|} = L" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Same conclusion as Ratio Test
              </p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                Alternating Series
              </h3>
              <BlockMath math="\sum (-1)^n b_n" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Converges if <InlineMath math="b_n" /> decreases to 0
              </p>
            </div>
          </div>
        </div>

        {/* Convergence Flowchart */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Convergence Decision Chart
          </h2>
          <div className="mt-4 flex flex-col items-center gap-6 md:flex-row">
            <div className="flex-1 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <pre className="font-mono text-sm leading-relaxed md:text-base">
                {`Series Type? 
  ↓
Geometric → |r| < 1?
  ↓
p-Series → p > 1?
  ↓
Alternating → Leibniz Test
  ↓
Comparison Tests
  ↓
Ratio/Root Test
  ↓
Integral Test`}
              </pre>
            </div>
            <div className="flex-1 space-y-4">
              <BlockMath math="\text{Always check } \lim_{n\to\infty} a_n = 0 \text{ first!}" />
              <p className="text-center text-gray-600 dark:text-gray-300">
                If limit ≠ 0, series diverges immediately (nth term test)
              </p>
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
                problem: "\\sum_{n=1}^\\infty \\frac{3^n}{4^{n+1}}",
                solution: "Converges (Geometric r=3/4)",
              },
              {
                problem: "\\sum_{n=1}^\\infty \\frac{1}{n^{2/3}}",
                solution: "Diverges (p=2/3 < 1)",
              },
              {
                problem: "\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}",
                solution: "Converges (Alternating Series Test)",
              },
              {
                problem: "\\sum_{n=1}^\\infty \\frac{n!}{10^n}",
                solution: "Diverges (Ratio Test L=∞)",
              },
              {
                problem: "\\sum_{n=1}^\\infty \\frac{1}{n(n+2)}",
                solution: "Converges (Comparison to 1/n²)",
              },
              {
                problem: "\\sum_{n=1}^\\infty \\frac{3n^2 + 1}{2n^4 - 5}",
                solution: "Converges (Limit Comparison to 1/n²)",
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
                  <BlockMath
                    math={`\\text{Determine convergence: } ${item.problem}`}
                  />
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
