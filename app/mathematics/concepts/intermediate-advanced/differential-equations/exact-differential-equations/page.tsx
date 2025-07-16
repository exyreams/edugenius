"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

const problemColors = [
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
];

export default function ExactDifferentialEquations() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Differential Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations",
    },
    {
      label: "Exact Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/exact-differential-equations",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-teal-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-teal-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Exact Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to identify and solve exact differential equations using the exactness condition.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Definition */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Definition of Exact Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A differential equation of the form <InlineMath math="M(x,y)dx + N(x,y)dy = 0" /> is called exact if there exists a function <InlineMath math="F(x,y)" /> such that:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{\partial F}{\partial x} = M(x,y) \quad \text{and} \quad \frac{\partial F}{\partial y} = N(x,y)" />
              <p className="mt-2"><strong>Exactness Condition:</strong></p>
              <BlockMath math="\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}" />
              <p className="mt-2">If this condition is satisfied, the solution is <InlineMath math="F(x,y) = C" />.</p>
            </div>
          </div>
        </div>

        {/* Solution Method */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Solution Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Step 1: Check Exactness</h3>
                <BlockMath math="\text{Verify: } \frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}" />
              </div>
              
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Step 2: Find F(x,y)</h3>
                <BlockMath math="F(x,y) = \int M(x,y) \, dx + g(y)" />
                <p className="mt-2">where g(y) is determined by using <InlineMath math="\frac{\partial F}{\partial y} = N(x,y)" />.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-lime-300 dark:to-green-300`}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                problem: "\\text{Check if exact: } (2x + y)dx + (x + 2y)dy = 0",
                solution: "\\frac{\\partial M}{\\partial y} = 1, \\frac{\\partial N}{\\partial x} = 1 \\text{ (exact)}",
              },
              {
                problem: "\\text{Solve: } (3x^2 + 2y)dx + (2x + 4y)dy = 0",
                solution: "x^3 + 2xy + 2y^2 = C",
              },
              {
                problem: "\\text{Check if exact: } y dx + x dy = 0",
                solution: "\\text{Exact. Solution: } xy = C",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${problemColors[index % problemColors.length]} dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                } hover:shadow-lg`}
              >
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Problem {index + 1}
                  </span>
                  <div className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}>
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300">
                    <span>Show Solution</span>
                    <svg className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-2 flex justify-start overflow-x-auto rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Perfect Differentials
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}