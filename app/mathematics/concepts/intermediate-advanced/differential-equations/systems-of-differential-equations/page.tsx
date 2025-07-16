"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Array of gradient color strings for practice problems.
 */
const problemColors = [
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
];

/**
 * @component SystemsOfDifferentialEquations
 * @description A client component that renders a page explaining systems of differential equations.
 * @returns {JSX.Element} The rendered SystemsOfDifferentialEquations page.
 */
export default function SystemsOfDifferentialEquations() {
  /**
   * @description Breadcrumb items for navigation.
   */
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
      label: "Systems of Equations",
      href: "/mathematics/concepts/intermediate-advanced/differential-equations/systems-of-differential-equations",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-cyan-200 scrollbar-thumb-cyan-300 dark:scrollbar-track-cyan-600 dark:scrollbar-thumb-cyan-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-cyan-200 scrollbar-thumb-cyan-400 dark:scrollbar-track-cyan-600 dark:scrollbar-thumb-cyan-600"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Systems of Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to solve coupled differential equations using matrix methods and eigenvalue techniques.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
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
            Definition of Systems
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A system of differential equations consists of multiple equations involving several unknown functions and their derivatives.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>General Form (2×2 System):</strong></p>
              <BlockMath math="\begin{cases} \frac{dx}{dt} = f(t, x, y) \\ \frac{dy}{dt} = g(t, x, y) \end{cases}" />
              <p className="mt-2"><strong>Linear System with Constant Coefficients:</strong></p>
              <BlockMath math="\begin{cases} \frac{dx}{dt} = ax + by \\ \frac{dy}{dt} = cx + dy \end{cases}" />
              <p className="mt-2">In matrix form:</p>
              <BlockMath math="\frac{d\mathbf{x}}{dt} = A\mathbf{x}" />
              <p className="mt-1">where <InlineMath math="\mathbf{x} = \begin{pmatrix} x \\ y \end{pmatrix}" /> and <InlineMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" /></p>
            </div>
          </div>
        </div>

        {/* Eigenvalue Method */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-cyan-200 to-teal-200 dark:from-cyan-600 dark:to-teal-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-cyan-300 dark:to-teal-300`}
          >
            Eigenvalue Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For linear systems with constant coefficients, the eigenvalue method provides a systematic solution approach.
            </p>
            <div className="mt-4 space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 1: Find Eigenvalues
                </h3>
                <p className="mt-2">
                  Solve the characteristic equation:
                </p>
                <BlockMath math="\det(A - \lambda I) = 0" />
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 2: Find Eigenvectors
                </h3>
                <p className="mt-2">
                  For each eigenvalue <InlineMath math="\lambda_i" />, solve:
                </p>
                <BlockMath math="(A - \lambda_i I)\mathbf{v}_i = \mathbf{0}" />
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Step 3: Construct General Solution
                </h3>
                <p className="mt-2">
                  The general solution depends on the nature of eigenvalues:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Real distinct eigenvalues: <InlineMath math="\mathbf{x} = c_1e^{\lambda_1 t}\mathbf{v}_1 + c_2e^{\lambda_2 t}\mathbf{v}_2" /></li>
                  <li>Complex eigenvalues: Use Euler's formula</li>
                  <li>Repeated eigenvalues: May need generalized eigenvectors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Portraits */}
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
            Phase Portraits and Stability
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Phase portraits visualize the behavior of solutions in the phase plane, helping analyze system stability.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Critical Points
                </h3>
                <p className="mt-2 text-sm">
                  Points where <InlineMath math="\frac{d\mathbf{x}}{dt} = \mathbf{0}" />. Classification depends on eigenvalues:
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>Node: Real eigenvalues, same sign</li>
                  <li>Saddle: Real eigenvalues, opposite signs</li>
                  <li>Spiral: Complex eigenvalues</li>
                  <li>Center: Pure imaginary eigenvalues</li>
                </ul>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Stability Analysis
                </h3>
                <p className="mt-2 text-sm">
                  Stability determined by eigenvalue real parts:
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>Stable: All real parts negative</li>
                  <li>Unstable: Any real part positive</li>
                  <li>Marginally stable: Zero real parts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Example */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-emerald-300 dark:to-teal-300`}
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
              <BlockMath math="\begin{cases} \frac{dx}{dt} = x + 2y \\ \frac{dy}{dt} = 3x + 2y \end{cases}" />
              <p className="mt-2"><strong>Solution:</strong></p>
              <p>Step 1: Write in matrix form with <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 2 \end{pmatrix}" /></p>
              
              <p className="mt-2">Step 2: Find eigenvalues</p>
              <BlockMath math="\det(A - \lambda I) = \det\begin{pmatrix} 1-\lambda & 2 \\ 3 & 2-\lambda \end{pmatrix} = (1-\lambda)(2-\lambda) - 6 = \lambda^2 - 3\lambda - 4" />
              <BlockMath math="\lambda_1 = 4, \quad \lambda_2 = -1" />
              
              <p className="mt-2">Step 3: Find eigenvectors</p>
              <p className="mt-1">For <InlineMath math="\lambda_1 = 4" />:</p>
              <BlockMath math="(A - 4I)\mathbf{v}_1 = \begin{pmatrix} -3 & 2 \\ 3 & -2 \end{pmatrix}\mathbf{v}_1 = \mathbf{0} \Rightarrow \mathbf{v}_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}" />
              
              <p className="mt-2">For <InlineMath math="\lambda_2 = -1" />:</p>
              <BlockMath math="(A + I)\mathbf{v}_2 = \begin{pmatrix} 2 & 2 \\ 3 & 3 \end{pmatrix}\mathbf{v}_2 = \mathbf{0} \Rightarrow \mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" />
              
              <p className="mt-2">Step 4: General solution</p>
              <BlockMath math="\mathbf{x}(t) = c_1 e^{4t}\begin{pmatrix} 2 \\ 3 \end{pmatrix} + c_2 e^{-t}\begin{pmatrix} 1 \\ -1 \end{pmatrix}" />
              
              <p className="mt-2">Therefore:</p>
              <BlockMath math="x(t) = 2c_1 e^{4t} + c_2 e^{-t}" />
              <BlockMath math="y(t) = 3c_1 e^{4t} - c_2 e^{-t}" />
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-orange-300`}
          >
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Predator-Prey Models
                </h3>
                <p className="mt-2 text-sm">
                  Lotka-Volterra equations modeling population dynamics between predators and prey.
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Coupled Oscillators
                </h3>
                <p className="mt-2 text-sm">
                  Mechanical systems with multiple masses and springs, electrical circuits with coupled components.
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Chemical Kinetics
                </h3>
                <p className="mt-2 text-sm">
                  Reaction networks with multiple species and competing reaction pathways.
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Epidemiology
                </h3>
                <p className="mt-2 text-sm">
                  SIR models tracking susceptible, infected, and recovered populations in disease spread.
                </p>
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
            } dark:from-lime-300 dark:to-green-300 `}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                problem: "\\text{Solve: } \\begin{cases} \\frac{dx}{dt} = 2x - y \\\\ \\frac{dy}{dt} = x + 2y \\end{cases}",
                solution: "\\mathbf{x}(t) = c_1 e^{(2+i)t}\\begin{pmatrix} 1 \\\\ i \\end{pmatrix} + c_2 e^{(2-i)t}\\begin{pmatrix} 1 \\\\ -i \\end{pmatrix}",
              },
              {
                problem: "\\text{Find eigenvalues of } A = \\begin{pmatrix} 3 & -1 \\\\ 1 & 1 \\end{pmatrix}",
                solution: "\\lambda_1 = 2 + i, \\lambda_2 = 2 - i",
              },
              {
                problem: "\\text{Classify the critical point at origin for } \\begin{cases} \\frac{dx}{dt} = -x + 2y \\\\ \\frac{dy}{dt} = -2x - y \\end{cases}",
                solution: "\\text{Stable spiral (eigenvalues: } -1 \\pm 2i\\text{)}",
              },
              {
                problem: "\\text{Solve: } \\begin{cases} \\frac{dx}{dt} = 4x - 2y \\\\ \\frac{dy}{dt} = x + y \\end{cases}",
                solution: "\\mathbf{x}(t) = c_1 e^{2t}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} + c_2 e^{3t}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}",
              },
              {
                problem: "\\text{Determine stability of } \\begin{cases} \\frac{dx}{dt} = -x + 3y \\\\ \\frac{dy}{dt} = -3x - y \\end{cases}",
                solution: "\\text{Stable (eigenvalues: } -1 \\pm 3i\\text{, both have negative real parts)}",
              },
              {
                problem: "\\text{Find the general solution of } \\begin{cases} \\frac{dx}{dt} = y \\\\ \\frac{dy}{dt} = -x \\end{cases}",
                solution: "x(t) = c_1\\cos t + c_2\\sin t, \\quad y(t) = -c_1\\sin t + c_2\\cos t",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white "
                } hover:shadow-lg `}
              >
                <div>
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>

                  <div
                    className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                  >
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
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
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20  ${solutionScrollbarStyle}`}
                  >
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Coupled Dynamic Systems
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}