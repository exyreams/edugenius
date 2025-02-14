"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function InverseTrigFunctions() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Inverse Trig Functions",
      href: "/mathematics/formulas/calculus/inverse-trig-functions",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Inverse Trigonometric Functions
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Functions Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Functions
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Arcsine
                </h3>
                <BlockMath math="\arcsin(x) = \sin^{-1}(x)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="[-1, 1]" />
                  <br />
                  Range: <InlineMath math="[-\frac{\pi}{2}, \frac{\pi}{2}]" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Arctangent
                </h3>
                <BlockMath math="\arctan(x) = \tan^{-1}(x)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="(-\infty, \infty)" />
                  <br />
                  Range: <InlineMath math="(-\frac{\pi}{2}, \frac{\pi}{2})" />
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Arccosine
                </h3>
                <BlockMath math="\arccos(x) = \cos^{-1}(x)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="[-1, 1]" />
                  <br />
                  Range: <InlineMath math="[0, \pi]" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Arcsecant
                </h3>
                <BlockMath math="\arcsec(x) = \sec^{-1}(x)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Domain: <InlineMath math="(-\infty, -1] \cup [1, \infty)" />
                  <br />
                  Range:{" "}
                  <InlineMath math="[0, \frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Derivatives Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Key Derivatives
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \arcsin(x) = \frac{1}{\sqrt{1 - x^2}}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \arctan(x) = \frac{1}{1 + x^2}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \arccos(x) = -\frac{1}{\sqrt{1 - x^2}}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\frac{d}{dx} \arcsec(x) = \frac{1}{|x|\sqrt{x^2 - 1}}" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Graphical Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                {/* Arctan graph */}
                <path
                  d="M20 180 L180 180"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M100 20 L100 180"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 180 Q100 100 180 20"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                />
                <text x="50" y="50" fontSize="12">
                  y = arctan(x)
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Features
                </h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>All functions are monotonic</li>
                  <li>Bounded ranges (unlike regular trig functions)</li>
                  <li>Horizontal asymptotes for arctan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Formulas */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Integration Formulas
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{\sqrt{1 - x^2}} dx = \arcsin(x) + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{1 + x^2} dx = \arctan(x) + C" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{x\sqrt{x^2 - 1}} dx = \arcsec|x| + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{-1}{\sqrt{1 - x^2}} dx = \arccos(x) + C" />
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
                problem: "\\text{Find } \\frac{d}{dx} \\arcsin(3x)",
                solution: "\\frac{3}{\\sqrt{1 - 9x^2}}",
              },
              {
                problem:
                  "\\text{Evaluate } \\int_0^{1/2} \\frac{1}{\\sqrt{1 - x^2}} dx",
                solution: "\\frac{\\pi}{6}",
              },
              {
                problem: "\\text{Simplify } \\cos(\\arcsin(x))",
                solution: "\\sqrt{1 - x^2}",
              },
              {
                problem: "\\text{Find } \\frac{d}{dx} \\arctan(e^x)",
                solution: "\\frac{e^x}{1 + e^{2x}}",
              },
              {
                problem: "\\text{Evaluate } \\int \\frac{x}{1 + x^4} dx",
                solution: "\\frac{1}{2} \\arctan(x^2) + C",
              },
              {
                problem: "\\text{Solve } \\arccos(x) = \\frac{\\pi}{3}",
                solution: "x = \\frac{1}{2}",
              },
              {
                problem: "\\text{Find } \\frac{d}{dx} [x \\arcsec(x)]",
                solution: "\\arcsec(x) + \\frac{1}{\\sqrt{x^2 - 1}}",
              },
              {
                problem:
                  "\\text{Evaluate } \\int \\frac{1}{x\\sqrt{x^2 - 4}} dx",
                solution: "\\frac{1}{2} \\arcsec(\\frac{x}{2}) + C",
              },
              {
                problem: "\\text{Simplify } \\tan(\\arcsin(\\frac{3}{5}))",
                solution: "\\frac{3}{4}",
              },
              {
                problem: "\\text{Find } \\frac{d}{dx} \\arccos(\\sqrt{x})",
                solution: "-\\frac{1}{2\\sqrt{x(1 - x)}}",
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
