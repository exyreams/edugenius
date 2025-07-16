"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function RelationsAndFunctions() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Discrete Mathematics", href: "/mathematics/concepts/intermediate-advanced/discrete-math" },
    { label: "Relations and Functions", href: "/mathematics/concepts/intermediate-advanced/discrete-math/relations-and-functions" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-rose-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-rose-300 dark:to-pink-400 md:text-5xl lg:text-6xl">
          Relations and Functions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Study binary relations, equivalence relations, and function properties in discrete mathematics.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Binary Relations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>A binary relation R from set A to set B is a subset of the Cartesian product A × B.</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <p><strong>Notation:</strong> <InlineMath math="aRb" /> or <InlineMath math="(a,b) \in R" /></p>
              <p className="mt-2"><strong>Properties of Relations on a Set:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Reflexive:</strong> <InlineMath math="\forall a \in A, aRa" /></li>
                <li><strong>Symmetric:</strong> <InlineMath math="\forall a,b \in A, aRb \rightarrow bRa" /></li>
                <li><strong>Transitive:</strong> <InlineMath math="\forall a,b,c \in A, aRb \land bRc \rightarrow aRc" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-rose-300 dark:to-pink-300`}>
            Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>A function f: A → B is a relation where each element in A is related to exactly one element in B.</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <p><strong>Types of Functions:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Injective (One-to-one):</strong> <InlineMath math="f(a) = f(b) \rightarrow a = b" /></li>
                <li><strong>Surjective (Onto):</strong> <InlineMath math="\forall b \in B, \exists a \in A : f(a) = b" /></li>
                <li><strong>Bijective:</strong> Both injective and surjective</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">Mapping and Relationships</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}