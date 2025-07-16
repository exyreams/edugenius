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
 * @component SetTheory
 * @description A client component that renders a page explaining set theory concepts.
 * @returns {JSX.Element} The rendered SetTheory page.
 */
export default function SetTheory() {
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
      label: "Set Theory",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/set-theory",
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
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Set Theory
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn the fundamental concepts of sets, set operations, and relationships that form the foundation of modern mathematics.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Definitions */}
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
            Basic Definitions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A set is a well-defined collection of distinct objects, called elements or members.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Notation:</strong></p>
              <ul className="list-disc list-inside space-y-2">
                <li>Set: <InlineMath math="A = \{1, 2, 3, 4\}" /></li>
                <li>Element membership: <InlineMath math="x \in A" /> (x is in A)</li>
                <li>Non-membership: <InlineMath math="x \notin A" /> (x is not in A)</li>
                <li>Empty set: <InlineMath math="\emptyset" /> or <InlineMath math="\{\}" /></li>
                <li>Universal set: <InlineMath math="U" /> (contains all elements under consideration)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Set Operations */}
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
            Set Operations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Union */}
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
                  Union
                </h3>
                <BlockMath math="A \cup B = \{x : x \in A \text{ or } x \in B\}" />
                <p className="mt-2 text-sm">
                  Contains all elements that are in A or B (or both).
                </p>
              </div>

              {/* Intersection */}
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
                  Intersection
                </h3>
                <BlockMath math="A \cap B = \{x : x \in A \text{ and } x \in B\}" />
                <p className="mt-2 text-sm">
                  Contains all elements that are in both A and B.
                </p>
              </div>

              {/* Difference */}
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
                  Difference
                </h3>
                <BlockMath math="A - B = \{x : x \in A \text{ and } x \notin B\}" />
                <p className="mt-2 text-sm">
                  Contains elements in A but not in B.
                </p>
              </div>

              {/* Complement */}
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
                  Complement
                </h3>
                <BlockMath math="A^c = \{x : x \in U \text{ and } x \notin A\}" />
                <p className="mt-2 text-sm">
                  Contains all elements in the universal set U that are not in A.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Set Relationships */}
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
            Set Relationships
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
                  Subset
                </h3>
                <BlockMath math="A \subseteq B \iff \forall x (x \in A \rightarrow x \in B)" />
                <p className="mt-2">A is a subset of B if every element of A is also in B.</p>
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
                  Proper Subset
                </h3>
                <BlockMath math="A \subset B \iff A \subseteq B \text{ and } A \neq B" />
                <p className="mt-2">A is a proper subset of B if A ⊆ B and A ≠ B.</p>
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
                  Set Equality
                </h3>
                <BlockMath math="A = B \iff A \subseteq B \text{ and } B \subseteq A" />
                <p className="mt-2">Two sets are equal if they contain exactly the same elements.</p>
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
                  Disjoint Sets
                </h3>
                <BlockMath math="A \cap B = \emptyset" />
                <p className="mt-2">Two sets are disjoint if they have no elements in common.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Set Laws */}
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
            Important Set Laws
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
                  Commutative Laws
                </h3>
                <BlockMath math="A \cup B = B \cup A" />
                <BlockMath math="A \cap B = B \cap A" />
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
                  Associative Laws
                </h3>
                <BlockMath math="(A \cup B) \cup C = A \cup (B \cup C)" />
                <BlockMath math="(A \cap B) \cap C = A \cap (B \cap C)" />
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
                  Distributive Laws
                </h3>
                <BlockMath math="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" />
                <BlockMath math="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />
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
                  De Morgan's Laws
                </h3>
                <BlockMath math="(A \cup B)^c = A^c \cap B^c" />
                <BlockMath math="(A \cap B)^c = A^c \cup B^c" />
              </div>
            </div>
          </div>
        </div>

        {/* Cardinality */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            Cardinality and Power Sets
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
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
                    ? "text-green-600 dark:text-green-300"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Cardinality
              </h3>
              <p className="mt-2">
                The cardinality of a set A, denoted <InlineMath math="|A|" /> or <InlineMath math="n(A)" />, is the number of elements in A.
              </p>
              <p className="mt-2"><strong>Example:</strong> If <InlineMath math="A = \{1, 2, 3\}" />, then <InlineMath math="|A| = 3" />.</p>
            </div>

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
                    ? "text-green-600 dark:text-green-300"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Power Set
              </h3>
              <p className="mt-2">
                The power set of A, denoted <InlineMath math="P(A)" /> or <InlineMath math="2^A" />, is the set of all subsets of A.
              </p>
              <BlockMath math="P(A) = \{S : S \subseteq A\}" />
              <p className="mt-2">
                If <InlineMath math="|A| = n" />, then <InlineMath math="|P(A)| = 2^n" />.
              </p>
              <p className="mt-2">
                <strong>Example:</strong> If <InlineMath math="A = \{1, 2\}" />, then <InlineMath math="P(A) = \{\emptyset, \{1\}, \{2\}, \{1,2\}\}" />.
              </p>
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
                problem: "\\text{Let } A = \\{1, 2, 3\\} \\text{ and } B = \\{2, 3, 4\\}. \\text{ Find } A \\cup B.",
                solution: "A \\cup B = \\{1, 2, 3, 4\\}",
              },
              {
                problem: "\\text{Let } A = \\{1, 2, 3\\} \\text{ and } B = \\{2, 3, 4\\}. \\text{ Find } A \\cap B.",
                solution: "A \\cap B = \\{2, 3\\}",
              },
              {
                problem: "\\text{Let } A = \\{1, 2, 3\\} \\text{ and } B = \\{2, 3, 4\\}. \\text{ Find } A - B.",
                solution: "A - B = \\{1\\}",
              },
              {
                problem: "\\text{Find the power set of } A = \\{a, b\\}.",
                solution: "P(A) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a,b\\}\\}",
              },
              {
                problem: "\\text{If } |A| = 5, \\text{ what is } |P(A)|?",
                solution: "|P(A)| = 2^5 = 32",
              },
              {
                problem: "\\text{Prove: } A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)",
                solution: "\\text{Use element-wise proof or Venn diagrams}",
              },
              {
                problem: "\\text{Let } U = \\{1,2,3,4,5\\}, A = \\{1,2,3\\}. \\text{ Find } A^c.",
                solution: "A^c = \\{4, 5\\}",
              },
              {
                problem: "\\text{Are sets } \\{1, 2, 3\\} \\text{ and } \\{3, 2, 1\\} \\text{ equal?}",
                solution: "\\text{Yes, order doesn't matter in sets}",
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
          Foundation of Mathematical Logic
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}