"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function LawsOfPropositionalLogic() {
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
      label: "Laws of Propositional Logic",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/laws-of-propositional-logic",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-300 dark:to-purple-400 md:text-5xl lg:text-6xl`}
        >
          Laws of Propositional Logic
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental laws and equivalences that govern logical reasoning and proposition manipulation.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Identity Laws */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-indigo-300`}
          >
            Identity Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land T \equiv p" />
              <BlockMath math="p \lor F \equiv p" />
            </div>
            <p>The identity laws state that conjunction with true and disjunction with false leave the proposition unchanged.</p>
          </div>
        </div>

        {/* Domination Laws */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-red-200 to-pink-200 dark:from-red-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-pink-300`}
          >
            Domination Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land F \equiv F" />
              <BlockMath math="p \lor T \equiv T" />
            </div>
            <p>The domination laws show that false dominates conjunction and true dominates disjunction.</p>
          </div>
        </div>

        {/* Idempotent Laws */}
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
            Idempotent Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land p \equiv p" />
              <BlockMath math="p \lor p \equiv p" />
            </div>
            <p>The idempotent laws state that a proposition combined with itself yields the same proposition.</p>
          </div>
        </div>

        {/* Double Negation Law */}
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
            Double Negation Law
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="\neg(\neg p) \equiv p" />
            </div>
            <p>The double negation law states that negating a negation returns the original proposition.</p>
          </div>
        </div>

        {/* Commutative Laws */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-orange-300 dark:to-amber-300`}
          >
            Commutative Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land q \equiv q \land p" />
              <BlockMath math="p \lor q \equiv q \lor p" />
            </div>
            <p>The commutative laws state that the order of operands doesn't matter in conjunction and disjunction.</p>
          </div>
        </div>

        {/* Associative Laws */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
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
            Associative Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="(p \land q) \land r \equiv p \land (q \land r)" />
              <BlockMath math="(p \lor q) \lor r \equiv p \lor (q \lor r)" />
            </div>
            <p>The associative laws allow us to group propositions differently without changing the result.</p>
          </div>
        </div>

        {/* Distributive Laws */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Distributive Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land (q \lor r) \equiv (p \land q) \lor (p \land r)" />
              <BlockMath math="p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)" />
            </div>
            <p>The distributive laws show how conjunction and disjunction distribute over each other.</p>
          </div>
        </div>

        {/* De Morgan's Laws */}
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
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-amber-300`}
          >
            De Morgan's Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="\neg(p \land q) \equiv \neg p \lor \neg q" />
              <BlockMath math="\neg(p \lor q) \equiv \neg p \land \neg q" />
            </div>
            <p>De Morgan's laws describe how negation distributes over conjunction and disjunction.</p>
          </div>
        </div>

        {/* Absorption Laws */}
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
            Absorption Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land (p \lor q) \equiv p" />
              <BlockMath math="p \lor (p \land q) \equiv p" />
            </div>
            <p>The absorption laws show that certain combinations can be simplified to a single proposition.</p>
          </div>
        </div>

        {/* Negation Laws */}
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
                ? "bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-sky-300 dark:to-blue-300`}
          >
            Negation Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="p \land \neg p \equiv F" />
              <BlockMath math="p \lor \neg p \equiv T" />
            </div>
            <p>The negation laws show that a proposition and its negation always yield contradiction or tautology.</p>
          </div>
        </div>
      </div>
    </div>
  );
}