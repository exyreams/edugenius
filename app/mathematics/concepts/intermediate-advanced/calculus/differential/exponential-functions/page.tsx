"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function ExponentialDerivatives() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Differential",
      href: "/mathematics/formulas/calculus/differential",
    },
    {
      label: "Exponential Derivatives Functions",
      href: "/mathematics/formulas/calculus/exponential-derivatives",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Exponential Derivatives Functions
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Derivatives Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Core Derivatives
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Natural Exponential
                </h3>
                <BlockMath math="\frac{d}{dx} e^x = e^x" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Unique self-derivative property of <InlineMath math="e^x" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  General Exponential
                </h3>
                <BlockMath math="\frac{d}{dx} a^x = a^x \ln a" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Applies to any base <InlineMath math="a > 0" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiation Rules */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Advanced Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Chain Rule Application
                </h3>
                <BlockMath math="\frac{d}{dx} e^{u(x)} = e^{u(x)} \cdot u'(x)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Example: <InlineMath math="\frac{d}{dx} e^{2x} = 2e^{2x}" />
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Product Rule
                </h3>
                <BlockMath math="\frac{d}{dx} [e^x \cdot \sin x] = e^x(\sin x + \cos x)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Logarithmic Differentiation
                </h3>
                <BlockMath math="y = x^x \Rightarrow \ln y = x\ln x \Rightarrow \frac{y'}{y} = 1 + \ln x" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Implicit Differentiation
                </h3>
                <BlockMath math="e^{xy} + y^2 = 1 \Rightarrow e^{xy}(y + xy') + 2yy' = 0" />
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
                  d="M20 180 Q100 90 180 180"
                  stroke="#10b981"
                  fill="none"
                  strokeWidth="2"
                  strokeDasharray="4"
                />
                <text x="50" y="50" fontSize="12">
                  y = e^x
                </text>
                <text x="140" y="140" fontSize="12">
                  Derivative = e^x
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\text{Slope at any point } x \text{ equals } y\text{-value}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\text{Concavity: } \frac{d^2}{dx^2} e^x = e^x > 0 \text{ always}" />
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Population Growth
                </h3>
                <BlockMath math="\frac{dP}{dt} = kP \Rightarrow P(t) = P_0e^{kt}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Radioactive Decay
                </h3>
                <BlockMath math="N(t) = N_0e^{-\lambda t} \Rightarrow \frac{dN}{dt} = -\lambda N" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Continuous Interest
                </h3>
                <BlockMath math="A(t) = Pe^{rt} \Rightarrow \frac{dA}{dt} = rA" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  RC Circuits
                </h3>
                <BlockMath math="I(t) = I_0e^{-t/RC} \Rightarrow \frac{dI}{dt} = -\frac{I}{RC}" />
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
                problem: "\\text{Find } \\frac{d}{dx} e^{3x}",
                solution: "3e^{3x}",
              },
              {
                problem: "\\text{Differentiate } 5^{2x}",
                solution: "2\\ln5 \\cdot 5^{2x}",
              },
              {
                problem: "\\text{Find derivative of } x^2e^x",
                solution: "e^x(x^2 + 2x)",
              },
              {
                problem: "\\text{Compute } \\frac{d}{dx} e^{\\sin x}",
                solution: "e^{\\sin x}\\cos x",
              },
              {
                problem: "\\text{Solve } \\frac{d}{dx} \\ln(e^x + 1)",
                solution: "\\frac{e^x}{e^x + 1}",
              },
              {
                problem: "\\text{Differentiate } y = 2e^{-x} + 3^x",
                solution: "-2e^{-x} + 3^x\\ln3",
              },
              {
                problem: "\\text{Find } y'' \\text{ if } y = e^{x^2}",
                solution: "2e^{x^2}(1 + 2x^2)",
              },
              {
                problem: "\\text{Differentiate } e^{x} \\cos(2x)",
                solution: "e^x(\\cos2x - 2\\sin2x)",
              },
              {
                problem:
                  "\\text{Find } \\frac{dy}{dx} \\text{ for } e^{xy} = x + y",
                solution: "\\frac{1 - ye^{xy}}{xe^{xy} - 1}",
              },
              {
                problem: "\\text{Differentiate } y = (1 + e^x)^{3}",
                solution: "3e^x(1 + e^x)^2",
              },
              {
                problem: "\\text{Find derivative of } \\frac{e^x - e^{-x}}{2}",
                solution: "\\frac{e^x + e^{-x}}{2}",
              },
              {
                problem: "\\text{Compute } \\frac{d}{dx} e^{\\ln(x^2)}",
                solution: "2x",
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
