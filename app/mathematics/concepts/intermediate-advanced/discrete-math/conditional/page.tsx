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
 * @component Conditional
 * @description A client component that renders a page explaining conditional statements in logic.
 * @returns {JSX.Element} The rendered Conditional page.
 */
export default function Conditional() {
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
      label: "Conditional",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/conditional",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-200 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-300 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-600 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-indigo-400 md:text-5xl lg:text-6xl`}
        >
          Conditional Statements
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about conditional statements (implications) in propositional logic and their truth conditions.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Definition */}
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
            Conditional Statement (Implication)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A conditional statement <InlineMath math="p \rightarrow q" /> (read as "if p then q") is a logical connective that is false only when the antecedent p is true and the consequent q is false.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
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
                Truth Table for <InlineMath math="p \rightarrow q" />
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="border-r px-4 py-2 text-center">p</th>
                      <th className="border-r px-4 py-2 text-center">q</th>
                      <th className="px-4 py-2 text-center"><InlineMath math="p \rightarrow q" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="px-4 py-2 text-center">T</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="px-4 py-2 text-center">F</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="px-4 py-2 text-center">T</td>
                    </tr>
                    <tr>
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="px-4 py-2 text-center">T</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Related Forms */}
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
            Related Forms of Conditionals
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Converse
                </h3>
                <BlockMath math="q \rightarrow p" />
                <p className="mt-2 text-sm">
                  The converse of <InlineMath math="p \rightarrow q" /> is <InlineMath math="q \rightarrow p" />. Not logically equivalent to the original.
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Inverse
                </h3>
                <BlockMath math="\neg p \rightarrow \neg q" />
                <p className="mt-2 text-sm">
                  The inverse of <InlineMath math="p \rightarrow q" /> is <InlineMath math="\neg p \rightarrow \neg q" />. Not logically equivalent to the original.
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Contrapositive
                </h3>
                <BlockMath math="\neg q \rightarrow \neg p" />
                <p className="mt-2 text-sm">
                  The contrapositive of <InlineMath math="p \rightarrow q" /> is <InlineMath math="\neg q \rightarrow \neg p" />. Logically equivalent to the original.
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Logical Equivalence
                </h3>
                <BlockMath math="p \rightarrow q \equiv \neg p \lor q" />
                <p className="mt-2 text-sm">
                  A conditional can be expressed as a disjunction.
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
                problem: "\\text{What is the contrapositive of 'If it rains, then the ground is wet'?}",
                solution: "\\text{'If the ground is not wet, then it does not rain'}",
              },
              {
                problem: "\\text{Is } (p \\rightarrow q) \\text{ equivalent to } (q \\rightarrow p)?",
                solution: "\\text{No, the converse is not equivalent to the original}",
              },
              {
                problem: "\\text{Express } p \\rightarrow q \\text{ using only } \\neg \\text{ and } \\lor",
                solution: "\\neg p \\lor q",
              },
              {
                problem: "\\text{When is } p \\rightarrow q \\text{ false?}",
                solution: "\\text{Only when p is true and q is false}",
              },
              {
                problem: "\\text{What is the converse of } \\neg p \\rightarrow q?",
                solution: "q \\rightarrow \\neg p",
              },
              {
                problem: "\\text{Is } (p \\rightarrow q) \\equiv (\\neg q \\rightarrow \\neg p)?",
                solution: "\\text{Yes, a statement and its contrapositive are equivalent}",
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
          If-Then Logic
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
