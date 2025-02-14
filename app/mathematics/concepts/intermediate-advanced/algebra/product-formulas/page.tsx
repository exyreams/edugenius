"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function ProductFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Product Formulas",
      href: "/mathematics/formulas/algebra/product-formulas",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Product Formulas
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Product Formulas */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Formulas
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Distributive Property
                </h3>
                <BlockMath math="a(b + c) = ab + ac" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  FOIL Method
                </h3>
                <BlockMath math="(a + b)(c + d) = ac + ad + bc + bd" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Products */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Special Products
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Difference of Squares
                </h3>
                <BlockMath math="a^2 - b^2 = (a - b)(a + b)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Sum/Difference of Cubes
                </h3>
                <BlockMath math="a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Square of a Binomial
                </h3>
                <BlockMath math="(a \pm b)^2 = a^2 \pm 2ab + b^2" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Cube of a Binomial
                </h3>
                <BlockMath math="(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3" />
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Interpretation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Geometric Proofs
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <rect
                  x="20"
                  y="20"
                  width="160"
                  height="160"
                  fill="none"
                  stroke="currentColor"
                />
                <rect
                  x="20"
                  y="20"
                  width="80"
                  height="80"
                  fill="#3b82f6"
                  opacity="0.3"
                />
                <rect
                  x="100"
                  y="20"
                  width="80"
                  height="80"
                  fill="#10b981"
                  opacity="0.3"
                />
                <rect
                  x="20"
                  y="100"
                  width="80"
                  height="80"
                  fill="#f59e0b"
                  opacity="0.3"
                />
                <rect
                  x="100"
                  y="100"
                  width="80"
                  height="80"
                  fill="#ef4444"
                  opacity="0.3"
                />
                <text x="60" y="60" fontSize="14" textAnchor="middle">
                  a²
                </text>
                <text x="140" y="60" fontSize="14" textAnchor="middle">
                  ab
                </text>
                <text x="60" y="140" fontSize="14" textAnchor="middle">
                  ab
                </text>
                <text x="140" y="140" fontSize="14" textAnchor="middle">
                  b²
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Visual proof of{" "}
                <InlineMath math="(a + b)^2 = a^2 + 2ab + b^2" />:
              </p>
              <ul className="ml-4 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  Total area = <InlineMath math="(a + b)^2" />
                </li>
                <li>
                  Sum of parts = <InlineMath math="a^2 + ab + ab + b^2" />
                </li>
              </ul>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="(a + b)^2 = a^2 + 2ab + b^2" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Key Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Polynomial Multiplication
                </h3>
                <BlockMath math="(x + 2)(x^3 - 3x + 1) = x^4 - 3x^2 + x + 2x^3 - 6x + 2" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Factoring
                </h3>
                <BlockMath math="x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)" />
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
                problem: "\\text{Expand } (x + 5)(x - 5)",
                solution: "x^2 - 25",
              },
              {
                problem: "\\text{Multiply } (2a - 3b)^2",
                solution: "4a^2 - 12ab + 9b^2",
              },
              {
                problem: "\\text{Factor } 27x^3 + 8",
                solution: "(3x + 2)(9x^2 - 6x + 4)",
              },
              {
                problem: "\\text{Expand } (p + q + r)^2",
                solution: "p^2 + q^2 + r^2 + 2pq + 2pr + 2qr",
              },
              {
                problem: "\\text{Simplify } (3 + \\sqrt{2})(3 - \\sqrt{2})",
                solution: "7",
              },
              {
                problem: "\\text{Multiply } (x^2 - x + 1)(x + 2)",
                solution: "x^3 + x^2 - x + 2",
              },
              {
                problem: "\\text{Factor } 16y^4 - 81",
                solution: "(4y^2 - 9)(4y^2 + 9) = (2y - 3)(2y + 3)(4y^2 + 9)",
              },
              { problem: "\\text{Expand } (1 + i)^3", solution: "-2 + 2i" },
              {
                problem: "\\text{Find product } (a + b)(a^2 - ab + b^2)",
                solution: "a^3 + b^3",
              },
              {
                problem: "\\text{Simplify } (\\sqrt{a} + \\sqrt{b})^2",
                solution: "a + 2\\sqrt{ab} + b",
              },
              {
                problem: "\\text{Multiply } (2x - 5)(3x^2 + x - 4)",
                solution: "6x^3 - 13x^2 - 13x + 20",
              },
              {
                problem: "\\text{Factor } x^6 - y^6",
                solution: "(x - y)(x + y)(x^2 + xy + y^2)(x^2 - xy + y^2)",
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
