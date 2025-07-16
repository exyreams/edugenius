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
 * @component BooleanAlgebra
 * @description A client component that renders a page explaining Boolean algebra concepts.
 * @returns {JSX.Element} The rendered BooleanAlgebra page.
 */
export default function BooleanAlgebra() {
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
      label: "Boolean Algebra",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/boolean-algebra",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-400 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-600"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Boolean Algebra
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the mathematical foundation of digital logic and computer circuits.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction */}
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
            Introduction to Boolean Algebra
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Boolean algebra is a branch of mathematics that deals with operations on logical values. 
              Named after George Boole, it forms the theoretical foundation for digital logic design and computer science.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Key Characteristics:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Works with binary values: 0 (False) and 1 (True)</li>
                <li>Uses logical operations: AND, OR, NOT</li>
                <li>Follows specific laws and identities</li>
                <li>Foundation for digital circuit design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Basic Operations */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-indigo-300 dark:to-blue-300`}
          >
            Basic Boolean Operations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* AND Operation */}
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  AND Operation (∧)
                </h3>
                <p className="mt-2 text-sm">Symbol: A ∧ B or A · B</p>
                <div className="mt-2 text-sm">
                  <p><strong>Truth Table:</strong></p>
                  <table className="mt-1 text-xs">
                    <tr><td>A</td><td>B</td><td>A∧B</td></tr>
                    <tr><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td></tr>
                  </table>
                </div>
              </div>

              {/* OR Operation */}
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  OR Operation (∨)
                </h3>
                <p className="mt-2 text-sm">Symbol: A ∨ B or A + B</p>
                <div className="mt-2 text-sm">
                  <p><strong>Truth Table:</strong></p>
                  <table className="mt-1 text-xs">
                    <tr><td>A</td><td>B</td><td>A∨B</td></tr>
                    <tr><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td></tr>
                  </table>
                </div>
              </div>

              {/* NOT Operation */}
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  NOT Operation (¬)
                </h3>
                <p className="mt-2 text-sm">Symbol: ¬A or A'</p>
                <div className="mt-2 text-sm">
                  <p><strong>Truth Table:</strong></p>
                  <table className="mt-1 text-xs">
                    <tr><td>A</td><td>¬A</td></tr>
                    <tr><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td></tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boolean Laws */}
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
            Boolean Laws and Identities
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Basic Laws */}
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
                  Basic Laws
                </h3>
                <ul className="mt-2 text-sm space-y-1">
                  <li><strong>Identity:</strong> A ∧ 1 = A, A ∨ 0 = A</li>
                  <li><strong>Null:</strong> A ∧ 0 = 0, A ∨ 1 = 1</li>
                  <li><strong>Idempotent:</strong> A ∧ A = A, A ∨ A = A</li>
                  <li><strong>Complement:</strong> A ∧ ¬A = 0, A ∨ ¬A = 1</li>
                  <li><strong>Involution:</strong> ¬(¬A) = A</li>
                </ul>
              </div>

              {/* Advanced Laws */}
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
                  Advanced Laws
                </h3>
                <ul className="mt-2 text-sm space-y-1">
                  <li><strong>Commutative:</strong> A ∧ B = B ∧ A</li>
                  <li><strong>Associative:</strong> (A ∧ B) ∧ C = A ∧ (B ∧ C)</li>
                  <li><strong>Distributive:</strong> A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)</li>
                  <li><strong>De Morgan's:</strong> ¬(A ∧ B) = ¬A ∨ ¬B</li>
                  <li><strong>Absorption:</strong> A ∧ (A ∨ B) = A</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Boolean Functions */}
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
            Boolean Functions and Expressions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Boolean functions map binary inputs to binary outputs and can be represented in various forms.
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Sum of Products (SOP)
                </h3>
                <p className="mt-2 text-sm">
                  Express function as OR of AND terms (minterms):
                </p>
                <p className="mt-1 text-sm font-mono">
                  F(A,B,C) = A'B'C + A'BC' + AB'C'
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
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Product of Sums (POS)
                </h3>
                <p className="mt-2 text-sm">
                  Express function as AND of OR terms (maxterms):
                </p>
                <p className="mt-1 text-sm font-mono">
                  F(A,B,C) = (A+B+C')(A+B'+C)(A'+B+C)
                </p>
              </div>
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
                  Digital Circuits
                </h3>
                <p className="mt-2 text-sm">
                  Logic gates (AND, OR, NOT) implement Boolean operations in hardware.
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
                  Computer Programming
                </h3>
                <p className="mt-2 text-sm">
                  Boolean logic in conditional statements, loops, and decision making.
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
                  Database Queries
                </h3>
                <p className="mt-2 text-sm">
                  SQL WHERE clauses use Boolean logic for filtering data.
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
                  Search Engines
                </h3>
                <p className="mt-2 text-sm">
                  Boolean operators (AND, OR, NOT) in search queries.
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
                problem: "\\text{Simplify: } A \\land (A \\lor B)",
                solution: "A \\text{ (Absorption Law)}",
              },
              {
                problem: "\\text{Apply De Morgan's Law: } \\neg(A \\land B)",
                solution: "\\neg A \\lor \\neg B",
              },
              {
                problem: "\\text{Simplify: } (A \\lor B) \\land (A \\lor \\neg B)",
                solution: "A \\text{ (Distributive + Complement)}",
              },
              {
                problem: "\\text{Find complement: } A \\land B \\land C",
                solution: "\\neg A \\lor \\neg B \\lor \\neg C",
              },
              {
                problem: "\\text{Simplify: } A \\lor (A \\land B)",
                solution: "A \\text{ (Absorption Law)}",
              },
              {
                problem: "\\text{Evaluate: } (1 \\land 0) \\lor (\\neg 0 \\land 1)",
                solution: "1 \\text{ (since } 0 \\lor 1 = 1\\text{)}",
              },
              {
                problem: "\\text{Convert to POS: } A'B + AB'",
                solution: "(A + B)(A' + B')",
              },
              {
                problem: "\\text{Simplify: } A \\land \\neg A \\land B",
                solution: "0 \\text{ (Complement Law)}",
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
          Foundation of Digital Logic
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}