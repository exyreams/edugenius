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
 * @component FormalLanguages
 * @description A client component that renders a page explaining formal languages and automata theory.
 * @returns {JSX.Element} The rendered FormalLanguages page.
 */
export default function FormalLanguages() {
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
      label: "Formal Languages",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/formal-languages",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-emerald-200 sm:scrollbar-track-emerald-200 scrollbar-thumb-emerald-300 sm:scrollbar-thumb-emerald-300 dark:scrollbar-track-emerald-600 dark:sm:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-500 dark:sm:scrollbar-thumb-emerald-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-emerald-200 sm:scrollbar-track-emerald-300 scrollbar-thumb-emerald-300 sm:scrollbar-thumb-emerald-400 dark:scrollbar-track-emerald-600 dark:sm:scrollbar-track-emerald-700 dark:scrollbar-thumb-emerald-500 dark:sm:scrollbar-thumb-emerald-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl`}
        >
          Formal Languages
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore automata theory, regular expressions, and context-free grammars that form the foundation of computer science.
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
                  Alphabet
                </h3>
                <p className="mt-2">
                  An alphabet <InlineMath math="\Sigma" /> is a finite, non-empty set of symbols.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> <InlineMath math="\Sigma = \{0, 1\}" /> (binary alphabet)
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
                  String
                </h3>
                <p className="mt-2">
                  A string (or word) is a finite sequence of symbols from an alphabet.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> "101" is a string over <InlineMath math="\{0, 1\}" />
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
                  Language
                </h3>
                <p className="mt-2">
                  A language L over alphabet <InlineMath math="\Sigma" /> is a set of strings over <InlineMath math="\Sigma" />.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> <InlineMath math="L = \{0^n1^n : n \geq 0\}" />
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
                  Empty String
                </h3>
                <p className="mt-2">
                  The empty string <InlineMath math="\epsilon" /> (or <InlineMath math="\lambda" />) contains no symbols.
                </p>
                <p className="mt-2 text-sm">
                  <strong>Property:</strong> <InlineMath math="|\epsilon| = 0" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Languages */}
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
            Regular Languages
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Regular languages are the simplest class in the Chomsky hierarchy and can be recognized by finite automata.
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
                  Regular Expressions
                </h3>
                <p className="mt-2">Basic operations:</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                  <li><strong>Union:</strong> <InlineMath math="r_1 + r_2" /> or <InlineMath math="r_1 | r_2" /></li>
                  <li><strong>Concatenation:</strong> <InlineMath math="r_1 \cdot r_2" /> or <InlineMath math="r_1 r_2" /></li>
                  <li><strong>Kleene Star:</strong> <InlineMath math="r^*" /> (zero or more repetitions)</li>
                  <li><strong>Plus:</strong> <InlineMath math="r^+" /> (one or more repetitions)</li>
                </ul>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> <InlineMath math="(0+1)^*" /> represents all binary strings.
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
                  Finite Automata
                </h3>
                <p className="mt-2">
                  A finite automaton is a 5-tuple <InlineMath math="M = (Q, \Sigma, \delta, q_0, F)" />:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                  <li><InlineMath math="Q" />: finite set of states</li>
                  <li><InlineMath math="\Sigma" />: input alphabet</li>
                  <li><InlineMath math="\delta" />: transition function</li>
                  <li><InlineMath math="q_0 \in Q" />: start state</li>
                  <li><InlineMath math="F \subseteq Q" />: set of accept states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Context-Free Languages */}
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
            Context-Free Languages
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Context-free languages are generated by context-free grammars and recognized by pushdown automata.
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
                  Context-Free Grammar
                </h3>
                <p className="mt-2">
                  A CFG is a 4-tuple <InlineMath math="G = (V, \Sigma, R, S)" />:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                  <li><InlineMath math="V" />: finite set of variables (non-terminals)</li>
                  <li><InlineMath math="\Sigma" />: finite set of terminals</li>
                  <li><InlineMath math="R" />: finite set of rules</li>
                  <li><InlineMath math="S \in V" />: start variable</li>
                </ul>
                <p className="mt-2 text-sm">
                  <strong>Example:</strong> <InlineMath math="S \rightarrow 0S1 | \epsilon" /> generates <InlineMath math="\{0^n1^n : n \geq 0\}" />
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
                  Pushdown Automata
                </h3>
                <p className="mt-2">
                  A PDA is like a finite automaton with an additional stack memory.
                </p>
                <p className="mt-2 text-sm">
                  PDA = <InlineMath math="(Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)" />
                </p>
                <p className="mt-1 text-sm">
                  Where <InlineMath math="\Gamma" /> is the stack alphabet and <InlineMath math="Z_0" /> is the initial stack symbol.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chomsky Hierarchy */}
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
            Chomsky Hierarchy
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
                  Type 3: Regular
                </h3>
                <p className="mt-2 text-sm">
                  <strong>Grammar:</strong> <InlineMath math="A \rightarrow aB" /> or <InlineMath math="A \rightarrow a" />
                </p>
                <p className="text-sm">
                  <strong>Automaton:</strong> Finite Automaton
                </p>
                <p className="text-sm">
                  <strong>Example:</strong> <InlineMath math="(ab)^*" />
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
                  Type 2: Context-Free
                </h3>
                <p className="mt-2 text-sm">
                  <strong>Grammar:</strong> <InlineMath math="A \rightarrow \alpha" />
                </p>
                <p className="text-sm">
                  <strong>Automaton:</strong> Pushdown Automaton
                </p>
                <p className="text-sm">
                  <strong>Example:</strong> <InlineMath math="\{0^n1^n : n \geq 0\}" />
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
                  Type 1: Context-Sensitive
                </h3>
                <p className="mt-2 text-sm">
                  <strong>Grammar:</strong> <InlineMath math="\alpha A \beta \rightarrow \alpha \gamma \beta" />
                </p>
                <p className="text-sm">
                  <strong>Automaton:</strong> Linear Bounded Automaton
                </p>
                <p className="text-sm">
                  <strong>Example:</strong> <InlineMath math="\{a^nb^nc^n : n \geq 1\}" />
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
                  Type 0: Unrestricted
                </h3>
                <p className="mt-2 text-sm">
                  <strong>Grammar:</strong> <InlineMath math="\alpha \rightarrow \beta" />
                </p>
                <p className="text-sm">
                  <strong>Automaton:</strong> Turing Machine
                </p>
                <p className="text-sm">
                  <strong>Property:</strong> Recursively enumerable
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
                problem: "\\text{Write a regular expression for strings ending with '01'}",
                solution: "(0+1)^*01",
              },
              {
                problem: "\\text{Is the language } \\{0^n1^n : n \\geq 0\\} \\text{ regular?}",
                solution: "\\text{No, it's context-free but not regular (pumping lemma)}",
              },
              {
                problem: "\\text{Convert the regex } (a+b)^* \\text{ to an NFA}",
                solution: "\\text{Two states with transitions on a,b and epsilon loop}",
              },
              {
                problem: "\\text{Write a CFG for balanced parentheses}",
                solution: "S \\rightarrow (S) | SS | \\epsilon",
              },
              {
                problem: "\\text{What type of language is } \\{a^nb^nc^n : n \\geq 1\\}?",
                solution: "\\text{Context-sensitive (Type 1)}",
              },
              {
                problem: "\\text{Simplify: } (a^*b^*)^*",
                solution: "(a+b)^* \\text{ (equivalent)}",
              },
              {
                problem: "\\text{Is } \\{ww : w \\in \\{0,1\\}^*\\} \\text{ context-free?}",
                solution: "\\text{No, it's context-sensitive}",
              },
              {
                problem: "\\text{Design a PDA for } \\{0^i1^j : i > j \\geq 0\\}",
                solution: "\\text{Push 0s, pop on 1s, accept if stack non-empty}",
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
          The Foundation of Computation Theory
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}