"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function LawsOfSetTheories() {
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
      label: "Laws of Set Theories",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/laws-of-set-theories",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl`}
        >
          Laws of Set Theory
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Discover the fundamental laws and properties that govern set operations and relationships.
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
              <BlockMath math="A \cup \emptyset = A" />
              <BlockMath math="A \cap U = A" />
            </div>
            <p>The identity laws state that union with the empty set and intersection with the universal set leave the set unchanged.</p>
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
              <BlockMath math="A \cup U = U" />
              <BlockMath math="A \cap \emptyset = \emptyset" />
            </div>
            <p>The domination laws show that the universal set dominates union and the empty set dominates intersection.</p>
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
              <BlockMath math="A \cup A = A" />
              <BlockMath math="A \cap A = A" />
            </div>
            <p>The idempotent laws state that a set combined with itself yields the same set.</p>
          </div>
        </div>

        {/* Complement Laws */}
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
            Complement Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="A \cup A^c = U" />
              <BlockMath math="A \cap A^c = \emptyset" />
              <BlockMath math="(A^c)^c = A" />
              <BlockMath math="U^c = \emptyset, \quad \emptyset^c = U" />
            </div>
            <p>The complement laws describe the relationship between a set and its complement.</p>
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
              <BlockMath math="A \cup B = B \cup A" />
              <BlockMath math="A \cap B = B \cap A" />
            </div>
            <p>The commutative laws state that the order of sets doesn't matter in union and intersection operations.</p>
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
              <BlockMath math="(A \cup B) \cup C = A \cup (B \cup C)" />
              <BlockMath math="(A \cap B) \cap C = A \cap (B \cap C)" />
            </div>
            <p>The associative laws allow us to group sets differently without changing the result.</p>
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
              <BlockMath math="A \cup (B \cap C) = (A \cup B) \cap (A \cup C)" />
              <BlockMath math="A \cap (B \cup C) = (A \cap B) \cup (A \cap C)" />
            </div>
            <p>The distributive laws show how union and intersection distribute over each other.</p>
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
              <BlockMath math="(A \cup B)^c = A^c \cap B^c" />
              <BlockMath math="(A \cap B)^c = A^c \cup B^c" />
            </div>
            <p>De Morgan's laws describe how complement distributes over union and intersection.</p>
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
              <BlockMath math="A \cup (A \cap B) = A" />
              <BlockMath math="A \cap (A \cup B) = A" />
            </div>
            <p>The absorption laws show that certain combinations can be simplified to a single set.</p>
          </div>
        </div>

        {/* Set Difference Laws */}
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
            Set Difference Laws
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <div>
              <BlockMath math="A - B = A \cap B^c" />
              <BlockMath math="A - \emptyset = A" />
              <BlockMath math="A - A = \emptyset" />
              <BlockMath math="A - U = \emptyset" />
              <BlockMath math="U - A = A^c" />
            </div>
            <p>The set difference laws define the relationship between set difference and other set operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}