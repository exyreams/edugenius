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
  "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700",
  "from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700",
];

/**
 * @component RecursionAndRecurrence
 * @description A client component that renders a page explaining recursion and recurrence relations.
 * @returns {JSX.Element} The rendered RecursionAndRecurrence page.
 */
export default function RecursionAndRecurrence() {
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
      label: "Discrete Mathematics",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math",
    },
    {
      label: "Recursion and Recurrence",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/recursion-and-recurrence",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-lime-200 scrollbar-thumb-lime-300 dark:scrollbar-track-lime-600 dark:scrollbar-thumb-lime-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-lime-200 scrollbar-thumb-lime-400 dark:scrollbar-track-lime-600 dark:scrollbar-thumb-lime-600"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-lime-700 to-green-800 bg-clip-text text-4xl font-bold text-transparent dark:from-lime-300 dark:to-green-400 md:text-5xl lg:text-6xl`}
        >
          Recursion and Recurrence Relations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master recursive algorithms and the mathematical analysis of recurrence relations.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction to Recursion */}
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
            Introduction to Recursion
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Recursion is a method of solving problems where the solution depends on solutions to smaller instances of the same problem.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Key Components of Recursion:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Base Case:</strong> The condition that stops the recursion</li>
                <li><strong>Recursive Case:</strong> The function calls itself with modified parameters</li>
                <li><strong>Progress:</strong> Each recursive call moves toward the base case</li>
              </ul>
              <p className="mt-2"><strong>Example - Factorial:</strong></p>
              <BlockMath math="n! = \begin{cases} 1 & \text{if } n = 0 \\ n \cdot (n-1)! & \text{if } n > 0 \end{cases}" />
            </div>
          </div>
        </div>

        {/* Recurrence Relations */}
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
            Recurrence Relations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A recurrence relation is an equation that defines a sequence based on previous terms in the sequence.
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
                      ? "text-lime-600 dark:text-lime-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Linear Homogeneous Recurrence
                </h3>
                <p className="mt-2">General form:</p>
                <BlockMath math="a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k}" />
                <p className="mt-2">Example - Fibonacci sequence:</p>
                <BlockMath math="F_n = F_{n-1} + F_{n-2}, \quad F_0 = 0, F_1 = 1" />
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
                      ? "text-lime-600 dark:text-lime-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Linear Non-Homogeneous Recurrence
                </h3>
                <p className="mt-2">General form:</p>
                <BlockMath math="a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k} + f(n)" />
                <p className="mt-2">where f(n) is a function of n (not zero).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solving Methods */}
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
            Methods for Solving Recurrence Relations
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
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Characteristic Equation Method
                </h3>
                <p className="mt-2">For linear homogeneous recurrences:</p>
                <ol className="mt-2 list-decimal list-inside space-y-1 text-sm">
                  <li>Form the characteristic equation</li>
                  <li>Find the roots</li>
                  <li>Write the general solution</li>
                  <li>Use initial conditions to find constants</li>
                </ol>
                <p className="mt-2 text-sm"><strong>Example:</strong> For <InlineMath math="a_n = 5a_{n-1} - 6a_{n-2}" /></p>
                <p className="text-sm">Characteristic equation: <InlineMath math="r^2 = 5r - 6" /></p>
                <p className="text-sm">Roots: r = 2, 3</p>
                <p className="text-sm">Solution: <InlineMath math="a_n = A \cdot 2^n + B \cdot 3^n" /></p>
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
                  Master Theorem
                </h3>
                <p className="mt-2">For recurrences of the form:</p>
                <BlockMath math="T(n) = aT(n/b) + f(n)" />
                <p className="mt-2 text-sm">where a ≥ 1, b > 1, and f(n) is asymptotically positive.</p>
                <p className="mt-2 text-sm">Compare <InlineMath math="f(n)" /> with <InlineMath math="n^{\log_b a}" /> to determine the solution.</p>
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
                  Generating Functions
                </h3>
                <p className="mt-2">Use generating functions to solve complex recurrences:</p>
                <BlockMath math="G(x) = \sum_{n=0}^{\infty} a_n x^n" />
                <p className="mt-2 text-sm">Transform the recurrence relation into an equation involving G(x).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Examples */}
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
            Common Examples
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Tower of Hanoi
                </h3>
                <p className="mt-2 text-sm">Recurrence relation:</p>
                <BlockMath math="T(n) = 2T(n-1) + 1, \quad T(1) = 1" />
                <p className="mt-2 text-sm">Solution: <InlineMath math="T(n) = 2^n - 1" /></p>
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Binary Search
                </h3>
                <p className="mt-2 text-sm">Recurrence relation:</p>
                <BlockMath math="T(n) = T(n/2) + 1" />
                <p className="mt-2 text-sm">Solution: <InlineMath math="T(n) = O(\log n)" /></p>
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Merge Sort
                </h3>
                <p className="mt-2 text-sm">Recurrence relation:</p>
                <BlockMath math="T(n) = 2T(n/2) + n" />
                <p className="mt-2 text-sm">Solution: <InlineMath math="T(n) = O(n \log n)" /></p>
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Catalan Numbers
                </h3>
                <p className="mt-2 text-sm">Recurrence relation:</p>
                <BlockMath math="C_n = \sum_{i=0}^{n-1} C_i C_{n-1-i}" />
                <p className="mt-2 text-sm">Closed form: <InlineMath math="C_n = \frac{1}{n+1}\binom{2n}{n}" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
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
            } dark:from-amber-300 dark:to-orange-300 `}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                problem: "\\text{Solve: } a_n = 3a_{n-1} - 2a_{n-2}, \\text{ with } a_0 = 1, a_1 = 1",
                solution: "a_n = 2^n - 1",
              },
              {
                problem: "\\text{Find closed form for: } T(n) = T(n-1) + n, \\text{ with } T(1) = 1",
                solution: "T(n) = \\frac{n(n+1)}{2}",
              },
              {
                problem: "\\text{Solve using Master Theorem: } T(n) = 4T(n/2) + n",
                solution: "T(n) = O(n^2)",
              },
              {
                problem: "\\text{Find } F_{10} \\text{ where } F_n = F_{n-1} + F_{n-2}, F_0 = 0, F_1 = 1",
                solution: "F_{10} = 55",
              },
              {
                problem: "\\text{Solve: } a_n = 4a_{n-1} - 4a_{n-2}, \\text{ with } a_0 = 1, a_1 = 2",
                solution: "a_n = (1 + n) \\cdot 2^{n-1}",
              },
              {
                problem: "\\text{Find complexity: } T(n) = 3T(n/4) + n^2",
                solution: "T(n) = O(n^2)",
              },
              {
                problem: "\\text{Solve: } a_n = a_{n-1} + 2^n, \\text{ with } a_0 = 1",
                solution: "a_n = 2^{n+1} - 1",
              },
              {
                problem: "\\text{Find } C_3 \\text{ (3rd Catalan number)}",
                solution: "C_3 = 5",
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
          Self-Referential Solutions
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}