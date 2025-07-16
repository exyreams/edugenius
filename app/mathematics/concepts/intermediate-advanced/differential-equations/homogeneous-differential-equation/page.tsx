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

export default function HomogeneousDifferentialEquation() {
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
      label: "Homogeneous Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/homogeneous-differential-equation",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-rose-300 dark:scrollbar-track-rose-600 dark:scrollbar-thumb-rose-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-rose-300 dark:to-pink-400 md:text-5xl lg:text-6xl`}
        >
          Homogeneous Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the substitution method for solving homogeneous differential equations.
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
            Definition of Homogeneous Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A first-order differential equation is homogeneous if it can be written in the form:
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{dy}{dx} = f\left(\frac{y}{x}\right)" />
              <p className="mt-2">or equivalently:</p>
              <BlockMath math="M(x,y)dx + N(x,y)dy = 0" />
              <p className="mt-2">where M(x,y) and N(x,y) are homogeneous functions of the same degree.</p>
              <p className="mt-2"><strong>Homogeneous Function:</strong> A function f(x,y) is homogeneous of degree n if:</p>
              <BlockMath math="f(tx, ty) = t^n f(x,y)" />
            </div>
          </div>
        </div>

        {/* Solution Method */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Substitution Method
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
                <h3 className="text-lg font-semibold">Step 1: Make Substitution</h3>
                <p className="mt-2">Let <InlineMath math="v = \frac{y}{x}" />, so <InlineMath math="y = vx" /></p>
                <p className="mt-1">Then: <InlineMath math="\frac{dy}{dx} = v + x\frac{dv}{dx}" /></p>
              </div>
              
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Step 2: Transform Equation</h3>
                <p className="mt-2">The equation becomes:</p>
                <BlockMath math="v + x\frac{dv}{dx} = f(v)" />
                <p className="mt-2">Rearranging:</p>
                <BlockMath math="x\frac{dv}{dx} = f(v) - v" />
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Step 3: Separate Variables</h3>
                <BlockMath math="\frac{dv}{f(v) - v} = \frac{dx}{x}" />
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Step 4: Integrate and Substitute Back</h3>
                <p className="mt-2">Integrate both sides and substitute <InlineMath math="v = \frac{y}{x}" /> back.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-violet-300`}
          >
            Worked Example
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mt-2"><strong>Problem:</strong></p>
              <BlockMath math="\frac{dy}{dx} = \frac{x + y}{x}" />
              <p className="mt-2"><strong>Solution:</strong></p>
              <p>Step 1: Rewrite as <InlineMath math="\frac{dy}{dx} = 1 + \frac{y}{x}" /></p>
              <p className="mt-2">Step 2: Let <InlineMath math="v = \frac{y}{x}" />, so <InlineMath math="y = vx" /> and <InlineMath math="\frac{dy}{dx} = v + x\frac{dv}{dx}" /></p>
              <p className="mt-2">Step 3: Substitute:</p>
              <BlockMath math="v + x\frac{dv}{dx} = 1 + v" />
              <p className="mt-2">Step 4: Simplify:</p>
              <BlockMath math="x\frac{dv}{dx} = 1" />
              <p className="mt-2">Step 5: Separate and integrate:</p>
              <BlockMath math="dv = \frac{dx}{x}" />
              <BlockMath math="v = \ln|x| + C" />
              <p className="mt-2">Step 6: Substitute back:</p>
              <BlockMath math="\frac{y}{x} = \ln|x| + C" />
              <BlockMath math="y = x(\ln|x| + C)" />
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
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{y}{x}",
                solution: "y = Cx \\text{ (separable case)}",
              },
              {
                problem: "\\text{Solve: } \\frac{dy}{dx} = \\frac{x^2 + y^2}{2xy}",
                solution: "x^2 - y^2 = Cx",
              },
              {
                problem: "\\text{Solve: } x\\frac{dy}{dx} = y + \\sqrt{x^2 + y^2}",
                solution: "\\ln|x| = \\ln\\left|\\frac{y}{x} + \\sqrt{1 + \\left(\\frac{y}{x}\\right)^2}\\right| + C",
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
          Scaling and Substitution
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}