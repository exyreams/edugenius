"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function LogarithmicFunctions() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Logarithmic Functions",
      href: "/mathematics/formulas/calculus/logarithmic-functions",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Logarithmic Functions Calculus
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Derivatives */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Basic Differentiation
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Natural Logarithm
                </h3>
                <BlockMath math="\frac{d}{dx} \ln x = \frac{1}{x}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  General Logarithm
                </h3>
                <BlockMath math="\frac{d}{dx} \log_b x = \frac{1}{x \ln b}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Chain Rule Application
                </h3>
                <BlockMath math="\frac{d}{dx} \ln u = \frac{u'}{u}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Logarithmic Differentiation
                </h3>
                <BlockMath math="y = f(x) \Rightarrow \ln y = \ln f(x)" />
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Integration Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{1}{x} dx = \ln |x| + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \frac{u'}{u} dx = \ln |u| + C" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \ln x \, dx = x \ln x - x + C" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\int \log_b x \, dx = \frac{x}{\ln b}(\ln x - 1) + C" />
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Interpretation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Graphical Behavior
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <path
                  d="M20 180 L180 20"
                  stroke="#3b82f6"
                  fill="none"
                  strokeWidth="2"
                />
                <path
                  d="M20 100 Q100 20 180 100"
                  stroke="#10b981"
                  fill="none"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="180"
                  x2="180"
                  y2="180"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="180"
                  x2="20"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <text x="30" y="50" fontSize="12">
                  y = ln(x)
                </text>
                <text x="140" y="160" fontSize="12">
                  dy/dx = 1/x
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Features
                </h3>
                <ul className="ml-4 list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Domain: <InlineMath math="x > 0" />
                  </li>
                  <li>
                    Vertical asymptote at <InlineMath math="x = 0" />
                  </li>
                  <li>Concave downward for all x</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Derivative Behavior
                </h3>
                <BlockMath math="\frac{d^2}{dx^2} \ln x = -\frac{1}{x^2}" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Real-World Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Exponential Growth/Decay
                </h3>
                <BlockMath math="\frac{d}{dt} \ln N(t) = k \Rightarrow N(t) = N_0 e^{kt}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Logarithmic Scales
                </h3>
                <BlockMath math="\text{pH} = -\log[H^+], \quad \text{dB} = 10\log\left(\frac{I}{I_0}\right)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Economic Elasticity
                </h3>
                <BlockMath math="\epsilon = \frac{d \ln Q}{d \ln P}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Logistic Growth
                </h3>
                <BlockMath math="\frac{d}{dt} \ln\left(\frac{P}{K-P}\right) = rt" />
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
                problem: "\\text{Find } \\frac{d}{dx} \\ln(3x^2 + 2)",
                solution: "\\frac{6x}{3x^2 + 2}",
              },
              {
                problem: "\\text{Integrate } \\int \\frac{4}{2x + 5} dx",
                solution: "2\\ln|2x + 5| + C",
              },
              {
                problem: "\\text{Differentiate } y = x^2 \\ln x",
                solution: "2x\\ln x + x",
              },
              {
                problem: "\\text{Solve } \\int_1^e \\frac{\\ln x}{x} dx",
                solution: "\\frac{1}{2}",
              },
              {
                problem: "\\text{Find } \\frac{d}{dx} \\log_2(x^3)",
                solution: "\\frac{3}{x \\ln 2}",
              },
              {
                problem: "\\text{Integrate } \\int \\ln(2x) dx",
                solution: "x\\ln(2x) - x + C",
              },
              {
                problem: "\\text{Differentiate } y = \\ln(\\sin x)",
                solution: "\\cot x",
              },
              {
                problem: "\\text{Evaluate } \\lim_{x\\to0^+} x\\ln x",
                solution: "0",
              },
              {
                problem:
                  "\\text{Solve } \\frac{d}{dx} [\\ln(x + \\sqrt{x^2 + 1})]",
                solution: "\\frac{1}{\\sqrt{x^2 + 1}}",
              },
              {
                problem: "\\text{Integrate } \\int \\frac{dx}{x\\ln x}",
                solution: "\\ln|\\ln x| + C",
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
