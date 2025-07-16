"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function Negation() {
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
      label: "Negation",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/negation",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-red-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-pink-400 md:text-5xl lg:text-6xl`}
        >
          Negation (NOT)
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about the logical negation operator that reverses the truth value of a proposition.
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
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-blue-300 dark:to-purple-300`}
          >
            Logical Negation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The negation <InlineMath math="\neg p" /> (read as "NOT p") reverses the truth value of a proposition.
            </p>
            <p className="mt-2">
              If p is true, then <InlineMath math="\neg p" /> is false. If p is false, then <InlineMath math="\neg p" /> is true.
            </p>
          </div>
        </div>

        {/* Truth Table */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-green-300 dark:to-teal-300`}
          >
            Truth Table for Negation
          </h2>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">p</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">¬p</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">T</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">F</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-purple-300 dark:to-pink-300`}
          >
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <p><strong>Example 1:</strong></p>
              <p>Let p = "It is raining"</p>
              <p>Then ¬p = "It is not raining"</p>
            </div>
            <div>
              <p><strong>Example 2:</strong></p>
              <p>Let p = "5 {">"} 3" (True)</p>
              <p>Then ¬p = "5 ≤ 3" (False)</p>
            </div>
            <div>
              <p><strong>Example 3:</strong></p>
              <p>Let p = "All birds can fly" (False)</p>
              <p>Then ¬p = "Not all birds can fly" or "Some birds cannot fly" (True)</p>
            </div>
          </div>
        </div>

        {/* Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-orange-300 dark:to-red-300`}
          >
            Properties of Negation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <p><strong>Double Negation:</strong></p>
              <BlockMath math="\neg(\neg p) \equiv p" />
              <p>The negation of a negation returns the original proposition.</p>
            </div>
            <div>
              <p><strong>De Morgan's Laws:</strong></p>
              <BlockMath math="\neg(p \land q) \equiv \neg p \lor \neg q" />
              <BlockMath math="\neg(p \lor q) \equiv \neg p \land \neg q" />
              <p>These laws show how negation distributes over conjunction and disjunction.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
