"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function PolynomialOperations() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Operations with Polynomials",
      href: "/mathematics/formulas/algebra/polynomial-operations",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Operations with Polynomials
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Operations Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Operations
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Addition/Subtraction
                </h3>
                <BlockMath math="(3x^2 + 2x - 5) + (2x^2 - 4x + 1) = 5x^2 - 2x - 4" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Combine like terms with same variables and exponents
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Multiplication
                </h3>
                <BlockMath math="(x + 2)(x - 3) = x^2 - x - 6" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Use distributive property (FOIL for binomials)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Division
                </h3>
                <BlockMath math="\frac{6x^3 - 5x^2 + 4}{2x + 1} = 3x^2 - 4x + 2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Polynomial long division or synthetic division
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Factoring
                </h3>
                <BlockMath math="x^2 - 5x + 6 = (x - 2)(x - 3)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Reverse of polynomial multiplication
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Multiplication Methods */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Multiplication Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Distributive Property
                </h3>
                <BlockMath math="a(b + c) = ab + ac" />
                <BlockMath math="x(x^2 + 3x) = x^3 + 3x^2" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  FOIL Method
                </h3>
                <BlockMath math="(a+b)(c+d) = ac + ad + bc + bd" />
                <BlockMath math="(x+2)(x-5) = x^2 - 3x - 10" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Vertical Multiplication
                </h3>
                <pre className="font-mono text-sm md:text-base">
                  {`  2x^2 + 3x\n×    x - 4\n-----------\n -8x^2 -12x\n+2x^3 +3x^2\n-----------\n2x^3 -5x^2 -12x`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Factoring Techniques */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Factoring Methods
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Greatest Common Factor
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
                  Trinomial Factoring
                </h3>
                <BlockMath math="x^2 + 5x + 6 = (x + 2)(x + 3)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Grouping
                </h3>
                <BlockMath math="2x^3 + 4x^2 + 3x + 6 = (2x^2 + 3)(x + 2)" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Interpretation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Polynomial Graphs
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <path
                  d="M20 180 Q 100 20 180 180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <text x="100" y="30" fontSize="12" textAnchor="middle">
                  Degree 2 Polynomial
                </text>
                <text x="30" y="170" fontSize="12">
                  Roots
                </text>
                <text x="170" y="170" fontSize="12">
                  Roots
                </text>
                <text x="100" y="190" fontSize="12">
                  y-intercept
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Features
                </h3>
                <BlockMath math="\text{Degree } n \Rightarrow \text{At most } n \text{ roots}" />
                <BlockMath math="\text{Leading coefficient determines end behavior}" />
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
                problem: "\\text{Add: } (3x^2 - 2x + 5) + (x^2 + 4x - 3)",
                solution: "4x^2 + 2x + 2",
              },
              {
                problem: "\\text{Multiply: } (x + 3)(x - 4)",
                solution: "x^2 - x - 12",
              },
              {
                problem: "\\text{Factor: } x^2 - 7x + 10",
                solution: "(x - 2)(x - 5)",
              },
              {
                problem: "\\text{Divide: } (x^3 - 8) ÷ (x - 2)",
                solution: "x^2 + 2x + 4",
              },
              {
                problem: "\\text{Expand: } (2x - 5)^2",
                solution: "4x^2 - 20x + 25",
              },
              {
                problem: "\\text{Simplify: } 3x(x^2 - 4) - 2(x^3 - 3x)",
                solution: "x^3 - 6x",
              },
              {
                problem: "\\text{Factor: } 6x^2 - 13x + 6",
                solution: "(2x - 3)(3x - 2)",
              },
              {
                problem: "\\text{Multiply: } (x + 2)(x^2 - 3x + 1)",
                solution: "x^3 - x^2 - 5x + 2",
              },
              {
                problem: "\\text{Find roots: } x^2 + 6x + 8 = 0",
                solution: "x = -2, -4",
              },
              {
                problem: "\\text{Special product: } (a + b)(a - b)",
                solution: "a^2 - b^2",
              },
              {
                problem: "\\text{Divide: } (4x^4 - 3x^2 + 2) ÷ (x - 1)",
                solution: "4x^3 + 4x^2 + x + 1 + \\frac{3}{x-1}",
              },
              {
                problem: "\\text{Factor: } 9x^2 - 25y^2",
                solution: "(3x - 5y)(3x + 5y)",
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
