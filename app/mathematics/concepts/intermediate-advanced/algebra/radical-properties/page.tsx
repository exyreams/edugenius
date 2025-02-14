"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function RadicalProperties() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Radical Properties",
      href: "/mathematics/formulas/algebra/radical-properties",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Radical Properties
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="grid gap-6">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Product Rule
                </h3>
                <BlockMath math="\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{a \cdot b}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Quotient Rule
                </h3>
                <BlockMath math="\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-300">
                  Simplification Rule
                </h3>
                <BlockMath math="\sqrt[n]{a^n \cdot b} = a\sqrt[n]{b} \quad (a \geq 0)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Factor out perfect nth powers
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Power Rule
                </h3>
                <BlockMath math="(\sqrt[n]{a})^m = \sqrt[n]{a^m}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Rational Exponents
                </h3>
                <BlockMath math="a^{m/n} = \sqrt[n]{a^m}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Distributive Property
                </h3>
                <BlockMath math="c\sqrt[n]{a} \pm d\sqrt[n]{a} = (c \pm d)\sqrt[n]{a}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Combine like radicals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Operations with Radicals
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="grid gap-6">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Simplification</h3>
                  <BlockMath math="\sqrt{50} = 5\sqrt{2}" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Addition</h3>
                  <BlockMath math="3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}" />
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Rationalization</h3>
                  <BlockMath math="\frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Multiplication</h3>
                  <BlockMath math="\sqrt{3} \cdot \sqrt{12} = 6" />
                </div>
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
            <div className="grid gap-6">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Simplifying Radicals
                </h3>
                <BlockMath math="\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-300">
                  Simplification
                </h3>
                <BlockMath math="\sqrt{45} = \sqrt{9 \cdot 5} = 3\sqrt{5}" />
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Combining Radicals
                </h3>
                <BlockMath math="2\sqrt{18} + 3\sqrt{8} = 6\sqrt{2} + 6\sqrt{2} = 12\sqrt{2}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Combining Like Terms
                </h3>
                <BlockMath math="2\sqrt{3} + 5\sqrt{3} - \sqrt{3} = 6\sqrt{3}" />
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
                problem: "\\text{Simplify } \\sqrt{200}",
                solution: "10\\sqrt{2}",
              },
              {
                problem: "\\text{Solve } \\sqrt{3x - 5} = 4",
                solution: "x = 7",
              },
              {
                problem: "\\text{Add } 3\\sqrt{5} + 2\\sqrt{5}",
                solution: "5\\sqrt{5}",
              },
              {
                problem: "\\text{Rationalize } \\frac{4}{\\sqrt{2}}",
                solution: "2\\sqrt{2}",
              },
              {
                problem: "\\text{Multiply } \\sqrt{6} \\cdot \\sqrt{10}",
                solution: "2\\sqrt{15}",
              },
              { problem: "\\text{Convert } 16^{3/4}", solution: "8" },
              {
                problem: "\\text{Simplify } \\sqrt[3]{54}",
                solution: "3\\sqrt[3]{2}",
              },
              {
                problem: "\\text{Solve } \\sqrt{x} + 2 = 7",
                solution: "x = 25",
              },
              {
                problem: "\\text{Combine } 2\\sqrt{27} - \\sqrt{75}",
                solution: "\\sqrt{3}",
              },
              {
                problem: "\\text{Evaluate } 25^{-1/2}",
                solution: "\\frac{1}{5}",
              },
              {
                problem: "\\text{Multiply } (\\sqrt{5} + 2)(\\sqrt{5} - 2)",
                solution: "1",
              },
              {
                problem: "\\text{Simplify } \\sqrt{\\frac{49}{25}}",
                solution: "\\frac{7}{5}",
              },
              {
                problem: "\\text{Simplify } 3\\sqrt{12} + 2\\sqrt{27}",
                solution: "12\\sqrt{3}",
              },
              {
                problem: "\\text{Combine } 5\\sqrt[3]{16} - 2\\sqrt[3]{54}",
                solution: "4\\sqrt[3]{2}",
              },
              {
                problem: "\\text{Simplify } \\sqrt{125x^3}",
                solution: "5x\\sqrt{5x}",
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
