"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function OperationsWithAlgebraicFractions() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Operations with Algebraic Fractions",
      href: "/mathematics/formulas/algebra/algebraic-fractions",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Algebraic Fractions
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Operations Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Operations
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Multiplication
                </h3>
                <BlockMath math="\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Multiply numerators and denominators directly
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Division
                </h3>
                <BlockMath math="\frac{a}{b} \div \frac{c}{d} = \frac{ad}{bc}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Multiply by reciprocal of divisor
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Addition/Subtraction
                </h3>
                <BlockMath math="\frac{a}{b} \pm \frac{c}{d} = \frac{ad \pm bc}{bd}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Requires common denominator
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Simplification
                </h3>
                <BlockMath math="\frac{a^2 - b^2}{a + b} = a - b" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Factor and cancel common terms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simplification Process */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Simplification Strategy
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Factor Completely</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="\frac{x^2 - 4}{x^2 + 2x} = \frac{(x-2)(x+2)}{x(x+2)}" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold">
                    Cancel Common Factors
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="= \frac{x-2}{x}" />
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
                  <h3 className="text-lg font-semibold">State Restrictions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <BlockMath math="x \neq 0, -2" />
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Verify</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Multiply back to check
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complex Fractions */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Complex Fractions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Method 1: Simplify Numerator/Denominator
                </h3>
                <BlockMath math="\frac{\frac{a}{b}}{\frac{c}{d}} = \frac{a}{b} \div \frac{c}{d}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Method 2: Multiply by LCD
                </h3>
                <BlockMath math="\frac{\frac{1}{x} + \frac{1}{y}}{x + y} \cdot \frac{xy}{xy} = \frac{y + x}{xy(x + y)}" />
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
                problem: "\\text{Simplify } \\frac{3x^2}{6x}",
                solution: "\\frac{x}{2}",
              },
              {
                problem: "\\text{Add } \\frac{2}{a} + \\frac{3}{b}",
                solution: "\\frac{2b + 3a}{ab}",
              },
              {
                problem:
                  "\\text{Multiply } \\frac{x-1}{x+2} \\cdot \\frac{x+2}{x^2-1}",
                solution: "\\frac{1}{x+1}",
              },
              {
                problem: "\\text{Divide } \\frac{y^2}{5} \\div \\frac{y}{10}",
                solution: "2y",
              },
              {
                problem: "\\text{Simplify } \\frac{x^2 - 9}{x^2 + 4x + 3}",
                solution: "\\frac{x-3}{x+1}",
              },
              {
                problem:
                  "\\text{Solve } \\frac{1}{x} + \\frac{2}{3x} = \\frac{5}{6}",
                solution: "x = 2",
              },
              {
                problem:
                  "\\text{Simplify } \\frac{\\frac{2}{x} - \\frac{3}{y}}{4}",
                solution: "\\frac{2y - 3x}{4xy}",
              },
              {
                problem: "\\text{Combine } \\frac{2}{x-1} - \\frac{1}{x+1}",
                solution: "\\frac{x + 3}{(x-1)(x+1)}",
              },
              {
                problem: "\\text{Simplify } \\frac{4a^2b}{6ab^3}",
                solution: "\\frac{2a}{3b^2}",
              },
              {
                problem:
                  "\\text{Complex fraction } \\frac{\\frac{3}{m} + 2}{\\frac{1}{m} - 4}",
                solution: "\\frac{3 + 2m}{1 - 4m}",
              },
              {
                problem: "\\text{Simplify } \\frac{(x+y)^2}{x^2 - y^2}",
                solution: "\\frac{x+y}{x-y}",
              },
              {
                problem:
                  "\\text{Divide } \\frac{x^2 - 16}{x} \\div \\frac{x-4}{2x}",
                solution: "2(x+4)",
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
