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
 * @component Combinatorics
 * @description A client component that renders a page explaining combinatorics concepts.
 * @returns {JSX.Element} The rendered Combinatorics page.
 */
export default function Combinatorics() {
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
      label: "Combinatorics",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/combinatorics",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-purple-200 sm:scrollbar-track-purple-200 scrollbar-thumb-purple-300 sm:scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:sm:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500 dark:sm:scrollbar-thumb-purple-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-purple-200 sm:scrollbar-track-purple-300 scrollbar-thumb-purple-300 sm:scrollbar-thumb-purple-400 dark:scrollbar-track-purple-600 dark:sm:scrollbar-track-purple-700 dark:scrollbar-thumb-purple-500 dark:sm:scrollbar-thumb-purple-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-purple-700 to-violet-800 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-300 dark:to-violet-400 md:text-5xl lg:text-6xl`}
        >
          Combinatorics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn the art of counting: permutations, combinations, and advanced counting principles.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Counting Principles */}
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
            Basic Counting Principles
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Addition Principle
                </h3>
                <p className="mt-2">
                  If there are <InlineMath math="m" /> ways to do one thing and <InlineMath math="n" /> ways to do another thing, and these cannot be done simultaneously, then there are <InlineMath math="m + n" /> ways to do either.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> 3 red balls + 5 blue balls = 8 ways to choose a ball.
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Multiplication Principle
                </h3>
                <p className="mt-2">
                  If there are <InlineMath math="m" /> ways to do one thing and <InlineMath math="n" /> ways to do another thing, then there are <InlineMath math="m \times n" /> ways to do both.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> 3 shirts × 4 pants = 12 outfit combinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Permutations */}
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
            Permutations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A permutation is an arrangement of objects where order matters.
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Permutations of n Objects
                </h3>
                <BlockMath math="P(n) = n!" />
                <p className="mt-2">
                  The number of ways to arrange n distinct objects is n factorial.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Example:</strong> Arranging 5 books: <InlineMath math="5! = 120" /> ways.
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
                  Permutations of r Objects from n
                </h3>
                <BlockMath math="P(n,r) = \frac{n!}{(n-r)!}" />
                <p className="mt-2">
                  The number of ways to arrange r objects selected from n distinct objects.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Example:</strong> Arranging 3 books from 5: <InlineMath math="P(5,3) = \frac{5!}{2!} = 60" /> ways.
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
                  Circular Permutations
                </h3>
                <BlockMath math="(n-1)!" />
                <p className="mt-2">
                  The number of ways to arrange n objects in a circle.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Example:</strong> Seating 6 people around a table: <InlineMath math="5! = 120" /> ways.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Combinations */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Combinations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A combination is a selection of objects where order does not matter.
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
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Combinations Formula
                </h3>
                <BlockMath math="C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}" />
                <p className="mt-2">
                  The number of ways to choose r objects from n distinct objects.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Example:</strong> Choosing 3 books from 5: <InlineMath math="C(5,3) = \frac{5!}{3!2!} = 10" /> ways.
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
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Properties of Combinations
                </h3>
                <BlockMath math="\binom{n}{r} = \binom{n}{n-r}" />
                <BlockMath math="\binom{n}{0} = \binom{n}{n} = 1" />
                <BlockMath math="\binom{n}{r} + \binom{n}{r+1} = \binom{n+1}{r+1}" />
                <p className="mt-2 text-sm">Pascal's identity is useful for computing binomial coefficients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Counting */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-yellow-300`}
          >
            Advanced Counting Techniques
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Inclusion-Exclusion Principle
                </h3>
                <BlockMath math="|A \cup B| = |A| + |B| - |A \cap B|" />
                <p className="mt-2 text-sm">
                  For three sets:
                </p>
                <BlockMath math="|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|" />
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Pigeonhole Principle
                </h3>
                <p className="mt-2 text-sm">
                  If n pigeons are placed in m pigeonholes and n > m, then at least one pigeonhole contains more than one pigeon.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Generalized:</strong> At least one pigeonhole contains at least <InlineMath math="\lceil n/m \rceil" /> pigeons.
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Stars and Bars
                </h3>
                <p className="mt-2 text-sm">
                  The number of ways to distribute n identical objects into k distinct boxes is:
                </p>
                <BlockMath math="\binom{n+k-1}{k-1} = \binom{n+k-1}{n}" />
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> Distributing 10 identical candies to 3 children.
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Derangements
                </h3>
                <p className="mt-2 text-sm">
                  A derangement is a permutation where no element appears in its original position.
                </p>
                <BlockMath math="D_n = n! \sum_{i=0}^{n} \frac{(-1)^i}{i!}" />
                <p className="mt-2 text-sm">
                  Approximately <InlineMath math="D_n \approx \frac{n!}{e}" /> for large n.
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
                problem: "\\text{How many ways can 5 people sit in a row?}",
                solution: "5! = 120 \\text{ ways}",
              },
              {
                problem: "\\text{How many ways to choose 3 students from 10?}",
                solution: "\\binom{10}{3} = \\frac{10!}{3!7!} = 120 \\text{ ways}",
              },
              {
                problem: "\\text{How many 4-digit numbers can be formed using digits 1,2,3,4,5 without repetition?}",
                solution: "P(5,4) = \\frac{5!}{1!} = 120 \\text{ numbers}",
              },
              {
                problem: "\\text{In how many ways can 6 people sit around a circular table?}",
                solution: "(6-1)! = 5! = 120 \\text{ ways}",
              },
              {
                problem: "\\text{How many subsets does a set with 4 elements have?}",
                solution: "2^4 = 16 \\text{ subsets}",
              },
              {
                problem: "\\text{How many ways to distribute 8 identical balls into 3 distinct boxes?}",
                solution: "\\binom{8+3-1}{3-1} = \\binom{10}{2} = 45 \\text{ ways}",
              },
              {
                problem: "\\text{In a group of 30 people, how many have the same birthday? (Pigeonhole)}",
                solution: "\\text{At least } \\lceil 30/365 \\rceil = 1 \\text{ person per day on average}",
              },
              {
                problem: "\\text{Expand } (x+y)^4 \\text{ using binomial theorem}",
                solution: "\\sum_{k=0}^{4} \\binom{4}{k} x^{4-k} y^k = x^4 + 4x^3y + 6x^2y^2 + 4xy^3 + y^4",
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
          The Art and Science of Counting
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}