"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Factoring() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    { label: "Factoring", href: "/mathematics/formulas/algebra/factoring" },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Factoring Formulas
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Formulas Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Factoring Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Greatest Common Factor (GCF)
                </h3>
                <BlockMath math="6x^3 + 9x = 3x(2x^2 + 3)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Difference of Squares
                </h3>
                <BlockMath math="a^2 - b^2 = (a - b)(a + b)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Perfect Square Trinomial
                </h3>
                <BlockMath math="a^2 \pm 2ab + b^2 = (a \pm b)^2" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Sum/Difference of Cubes
                </h3>
                <BlockMath math="a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)" />
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Factoring Process
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <p className="flex-1 text-gray-600 dark:text-gray-300">
                  Factor out the Greatest Common Factor (GCF) from all terms
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <p className="flex-1 text-gray-600 dark:text-gray-300">
                  Identify special patterns (difference of squares, perfect
                  trinomials)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <p className="flex-1 text-gray-600 dark:text-gray-300">
                  For trinomials: Find two numbers that multiply to{" "}
                  <InlineMath math="ac" /> and add to <InlineMath math="b" />
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <p className="flex-1 text-gray-600 dark:text-gray-300">
                  Check by expanding the factors (FOIL method)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Worked Examples
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Quadratic Trinomial
                </h3>
                <BlockMath math="x^2 + 5x + 6 = (x + 2)(x + 3)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Find factors of 6 that add to 5: 2 and 3
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Difference of Cubes
                </h3>
                <BlockMath math="8x^3 - 27 = (2x - 3)(4x^2 + 6x + 9)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Using formula:{" "}
                  <InlineMath math="a^3 - b^3 = (a - b)(a^2 + ab + b^2)" />
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
                problem: "\\text{Factor } x^2 - 9",
                solution: "(x - 3)(x + 3)",
              },
              {
                problem: "\\text{Factor } 4y^2 + 12y + 9",
                solution: "(2y + 3)^2",
              },
              {
                problem: "\\text{Factor } z^3 + 8",
                solution: "(z + 2)(z^2 - 2z + 4)",
              },
              {
                problem: "\\text{Factor } 3x^3 - 6x^2",
                solution: "3x^2(x - 2)",
              },
              {
                problem: "\\text{Factor } t^2 - 4t - 12",
                solution: "(t - 6)(t + 2)",
              },
              {
                problem: "\\text{Factor } 25m^2 - 16n^2",
                solution: "(5m - 4n)(5m + 4n)",
              },
              {
                problem: "\\text{Factor } 2w^2 + 5w - 3",
                solution: "(2w - 1)(w + 3)",
              },
              {
                problem: "\\text{Factor } 27p^3 - 1",
                solution: "(3p - 1)(9p^2 + 3p + 1)",
              },
              {
                problem: "\\text{Factor } x^4 - 16",
                solution: "(x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)",
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
