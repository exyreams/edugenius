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
 * @component LogicAndProofs
 * @description A client component that renders a page explaining logic and proof techniques.
 * @returns {JSX.Element} The rendered LogicAndProofs page.
 */
export default function LogicAndProofs() {
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
      label: "Logic and Proofs",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/logic-and-proofs",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-green-200 sm:scrollbar-track-green-200 scrollbar-thumb-green-300 sm:scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:sm:scrollbar-track-green-600 dark:scrollbar-thumb-green-500 dark:sm:scrollbar-thumb-green-500"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-200 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:sm:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-green-200 sm:scrollbar-track-green-300 scrollbar-thumb-green-300 sm:scrollbar-thumb-green-400 dark:scrollbar-track-green-600 dark:sm:scrollbar-track-green-700 dark:scrollbar-thumb-green-500 dark:sm:scrollbar-thumb-green-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-green-300 dark:to-emerald-400 md:text-5xl lg:text-6xl`}
        >
          Logic and Proofs
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master propositional logic, predicate logic, and fundamental proof techniques used in mathematics.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Propositional Logic */}
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
            Propositional Logic
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Propositional logic deals with propositions (statements that are either true or false) and logical connectives.
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Logical Connectives
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li><strong>Negation:</strong> <InlineMath math="\neg p" /> (NOT p)</li>
                  <li><strong>Conjunction:</strong> <InlineMath math="p \land q" /> (p AND q)</li>
                  <li><strong>Disjunction:</strong> <InlineMath math="p \lor q" /> (p OR q)</li>
                  <li><strong>Implication:</strong> <InlineMath math="p \rightarrow q" /> (if p then q)</li>
                  <li><strong>Biconditional:</strong> <InlineMath math="p \leftrightarrow q" /> (p if and only if q)</li>
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Truth Values
                </h3>
                <div className="mt-2 text-sm">
                  <p><InlineMath math="p \land q" /> is true only when both p and q are true</p>
                  <p><InlineMath math="p \lor q" /> is false only when both p and q are false</p>
                  <p><InlineMath math="p \rightarrow q" /> is false only when p is true and q is false</p>
                  <p><InlineMath math="p \leftrightarrow q" /> is true when p and q have the same truth value</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logical Equivalences */}
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
            Logical Equivalences
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
                  De Morgan's Laws
                </h3>
                <BlockMath math="\neg(p \land q) \equiv \neg p \lor \neg q" />
                <BlockMath math="\neg(p \lor q) \equiv \neg p \land \neg q" />
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
                  Distributive Laws
                </h3>
                <BlockMath math="p \land (q \lor r) \equiv (p \land q) \lor (p \land r)" />
                <BlockMath math="p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)" />
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
                  Implication Equivalences
                </h3>
                <BlockMath math="p \rightarrow q \equiv \neg p \lor q" />
                <BlockMath math="p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p)" />
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
                  Double Negation
                </h3>
                <BlockMath math="\neg(\neg p) \equiv p" />
                <p className="mt-2 text-sm">The negation of a negation is the original statement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Predicate Logic */}
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
            Predicate Logic
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Predicate logic extends propositional logic by introducing predicates, variables, and quantifiers.
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
                  Universal Quantifier
                </h3>
                <BlockMath math="\forall x \, P(x)" />
                <p className="mt-2">"For all x, P(x) is true" - P(x) is true for every element x in the domain.</p>
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
                  Existential Quantifier
                </h3>
                <BlockMath math="\exists x \, P(x)" />
                <p className="mt-2">"There exists an x such that P(x)" - P(x) is true for at least one element x in the domain.</p>
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
                  Quantifier Negation
                </h3>
                <BlockMath math="\neg \forall x \, P(x) \equiv \exists x \, \neg P(x)" />
                <BlockMath math="\neg \exists x \, P(x) \equiv \forall x \, \neg P(x)" />
              </div>
            </div>
          </div>
        </div>

        {/* Proof Techniques */}
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
            Proof Techniques
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
                  Direct Proof
                </h3>
                <p className="mt-2 text-sm">
                  To prove <InlineMath math="p \rightarrow q" />, assume p is true and show that q must be true.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Structure:</strong> Assume p. ... Therefore q.
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
                  Proof by Contradiction
                </h3>
                <p className="mt-2 text-sm">
                  To prove p, assume <InlineMath math="\neg p" /> and derive a contradiction.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Structure:</strong> Assume ¬p. ... This is a contradiction. Therefore p.
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
                  Proof by Contrapositive
                </h3>
                <p className="mt-2 text-sm">
                  To prove <InlineMath math="p \rightarrow q" />, prove <InlineMath math="\neg q \rightarrow \neg p" /> instead.
                </p>
                <p className="mt-1 text-sm">
                  <strong>Structure:</strong> Assume ¬q. ... Therefore ¬p.
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
                  Mathematical Induction
                </h3>
                <p className="mt-2 text-sm">
                  To prove <InlineMath math="\forall n \geq n_0, P(n)" />:
                </p>
                <p className="mt-1 text-sm">
                  1. Base case: Prove P(n₀)
                </p>
                <p className="text-sm">
                  2. Inductive step: Prove P(k) → P(k+1)
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
                problem: "\\text{Simplify: } \\neg(p \\land \\neg q)",
                solution: "\\neg p \\lor q \\text{ (using De Morgan's law)}",
              },
              {
                problem: "\\text{Show that } p \\rightarrow q \\equiv \\neg p \\lor q",
                solution: "\\text{Use truth table or logical equivalences}",
              },
              {
                problem: "\\text{Negate: } \\forall x \\exists y (x < y)",
                solution: "\\exists x \\forall y (x \\geq y)",
              },
              {
                problem: "\\text{Prove: If } n^2 \\text{ is even, then } n \\text{ is even}",
                solution: "\\text{Use proof by contrapositive}",
              },
              {
                problem: "\\text{Express using quantifiers: 'Every student has a favorite subject'}",
                solution: "\\forall x (\\text{Student}(x) \\rightarrow \\exists y (\\text{Subject}(y) \\land \\text{Favorite}(x,y)))",
              },
              {
                problem: "\\text{Prove by induction: } 1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}",
                solution: "\\text{Base case: } n=1. \\text{ Inductive step: assume for } k, \\text{ prove for } k+1",
              },
              {
                problem: "\\text{Is } (p \\rightarrow q) \\land (q \\rightarrow p) \\text{ equivalent to } p \\leftrightarrow q?",
                solution: "\\text{Yes, this is the definition of biconditional}",
              },
              {
                problem: "\\text{Prove by contradiction: } \\sqrt{2} \\text{ is irrational}",
                solution: "\\text{Assume } \\sqrt{2} = \\frac{a}{b} \\text{ in lowest terms, derive contradiction}",
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
          The Language of Mathematical Reasoning
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}