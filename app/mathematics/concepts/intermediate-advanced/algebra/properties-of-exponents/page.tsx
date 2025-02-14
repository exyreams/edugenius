"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function PropertiesOfExponents() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Exponent Properties",
      href: "/mathematics/formulas/algebra/exponent-properties",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Properties of Exponents
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Rules
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Product Rule
                </h3>
                <BlockMath math="a^m \cdot a^n = a^{m+n}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Quotient Rule
                </h3>
                <BlockMath math="\frac{a^m}{a^n} = a^{m-n}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Power Rule
                </h3>
                <BlockMath math="(a^m)^n = a^{mn}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Product to Power
                </h3>
                <BlockMath math="(ab)^m = a^m \cdot b^m" />
              </div>
            </div>
          </div>
        </div>

        {/* Extended Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Extended Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Zero Exponent
                </h3>
                <BlockMath math="a^0 = 1 \quad (a \neq 0)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Negative Exponent
                </h3>
                <BlockMath math="a^{-m} = \frac{1}{a^m}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Quotient to Power
                </h3>
                <BlockMath math="\left(\frac{a}{b}\right)^m = \frac{a^m}{b^m}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Rational Exponents
                </h3>
                <BlockMath math="a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m" />
              </div>
            </div>
          </div>
        </div>

        {/* Exponential Functions */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Exponential Growth/Decay
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <path
                  d="M20 180 L50 140 L80 100 L110 60 L140 30 L170 20"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="2"
                />
                <path
                  d="M20 180 L50 160 L80 150 L110 140 L140 130 L170 120"
                  stroke="#10b981"
                  fill="none"
                  strokeWidth="2"
                />
                <text x="30" y="30" fontSize="12">
                  Growth: y = 2^x
                </text>
                <text x="30" y="50" fontSize="12">
                  Decay: y = (1/2)^x
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="y = ab^x" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where <InlineMath math="b > 1" /> for growth,{" "}
                  <InlineMath math="0 < b < 1" /> for decay
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="e^x = \lim_{n \to \infty} \left(1 + \frac{x}{n}\right)^n" />
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
                problem: "\\text{Simplify } 2^3 \\cdot 2^5",
                solution: "2^8 = 256",
              },
              {
                problem: "\\text{Evaluate } \\frac{5^7}{5^4}",
                solution: "5^3 = 125",
              },
              { problem: "\\text{Simplify } (3^2)^4", solution: "3^8 = 6561" },
              {
                problem:
                  "\\text{Rewrite } x^{-3} \\text{ with positive exponents}",
                solution: "\\frac{1}{x^3}",
              },
              {
                problem: "\\text{Simplify } \\left(\\frac{2a}{b}\\right)^3",
                solution: "\\frac{8a^3}{b^3}",
              },
              {
                problem: "\\text{Convert } 5^{3/2} \\text{ to radical form}",
                solution: "\\sqrt{5^3} = 5\\sqrt{5}",
              },
              { problem: "\\text{Solve } 4^{x} = 64", solution: "x = 3" },
              {
                problem: "\\text{Simplify } \\frac{6^4 \\cdot 6^{-1}}{6^2}",
                solution: "6^{1} = 6",
              },
              {
                problem: "\\text{Expand } (2x^2y^3)^4",
                solution: "16x^8y^{12}",
              },
              {
                problem:
                  "\\text{Express } \\sqrt[3]{a^2} \\text{ using exponents}",
                solution: "a^{2/3}",
              },
              {
                problem: "\\text{Evaluate } 8^{2/3}",
                solution: "(8^{1/3})^2 = 2^2 = 4",
              },
              {
                problem: "\\text{Simplify } \\frac{(3^2 \\cdot 3^5)^0}{3^{-2}}",
                solution: "3^2 = 9",
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
