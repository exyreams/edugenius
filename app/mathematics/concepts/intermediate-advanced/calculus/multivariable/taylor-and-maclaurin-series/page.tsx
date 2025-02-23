"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function TaylorSeries() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus",
    },
    {
      label: "Multivariable",
      href: "/mathematics/concepts/intermediate-advanced/calculus/multivariable",
    },
    {
      label: "Taylor & Maclaurin Series",
      href: "/mathematics/concepts/intermediate-advanced/calculus/multivariable/taylor-series",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300 md:mb-6 md:text-4xl">
        Taylor & Maclaurin Series
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Concepts */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Expansions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Taylor Series
                </h3>
                <BlockMath math="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Maclaurin Series
                </h3>
                <BlockMath math="f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Remainder Term
                </h3>
                <BlockMath math="R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Coefficient Formula
                </h3>
                <BlockMath math="a_n = \frac{f^{(n)}(a)}{n!}" />
              </div>
            </div>
          </div>
        </div>

        {/* Common Expansions */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Common Series Expansions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Exponential Function
                </h3>
                <BlockMath math="e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Sine Function
                </h3>
                <BlockMath math="\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Cosine Function
                </h3>
                <BlockMath math="\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Natural Logarithm
                </h3>
                <BlockMath math="\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}" />
              </div>
            </div>
          </div>
        </div>

        {/* Approximation Visualization */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Polynomial Approximations
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                {/* e^x approximation curves */}
                <path
                  d="M20 180 L180 20"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="1.5"
                  strokeDasharray="4"
                />
                <path
                  d="M20 180 Q100 130 180 20"
                  stroke="#10b981"
                  fill="none"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 180 C50 160 150 40 180 20"
                  stroke="#ef4444"
                  fill="none"
                  strokeWidth="2"
                />
                <text x="30" y="30" fontSize="12">
                  1st Degree
                </text>
                <text x="100" y="80" fontSize="12">
                  3rd Degree
                </text>
                <text x="150" y="150" fontSize="12">
                  Actual e^x
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Taylor Polynomial
                </h3>
                <BlockMath math="T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Error Bound
                </h3>
                <BlockMath math="|R_n(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}" />
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
                problem: "\\text{Find Maclaurin series for } \\cos x",
                solution: "\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}",
              },
              {
                problem: "\\text{3rd Taylor poly for } e^x \\text{ at } a=0",
                solution: "1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}",
              },
              {
                problem:
                  "\\text{Find Taylor series for } \\ln x \\text{ at } a=1",
                solution: "\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}(x-1)^n}{n}",
              },
              {
                problem:
                  "\\text{Approximate } \\sin(0.1) \\text{ with 3 terms}",
                solution:
                  "0.1 - \\frac{0.1^3}{6} + \\frac{0.1^5}{120} \\approx 0.099833",
              },
              {
                problem:
                  "\\text{Radius of convergence for } \\sum \\frac{x^n}{n!}",
                solution: "\\infty",
              },
              {
                problem: "\\text{4th Maclaurin poly for } (1+x)^k",
                solution: "1 + kx + \\frac{k(k-1)}{2}x^2 + \\cdots",
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
