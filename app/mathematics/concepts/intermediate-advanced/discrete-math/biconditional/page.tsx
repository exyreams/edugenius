"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function Biconditional() {
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
      label: "Biconditional",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/biconditional",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-teal-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-teal-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Biconditional (IF AND ONLY IF)
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about the biconditional logical operator that is true when both propositions have the same truth value.
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
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-blue-300`}
          >
            Biconditional Statement
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The biconditional <InlineMath math="p \leftrightarrow q" /> (read as "p if and only if q") is true when both propositions have the same truth value.
            </p>
            <p className="mt-2">
              It can be written as: <InlineMath math="p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p)" />
            </p>
            <p className="mt-2">
              This means p is true if and only if q is true, and p is false if and only if q is false.
            </p>
          </div>
        </div>

        {/* Truth Table */}
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
                ? "bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-teal-300`}
          >
            Truth Table for Biconditional
          </h2>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">p</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">q</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">p ↔ q</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">T</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">T</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-green-100 dark:bg-green-800">T</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">T</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">F</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-red-100 dark:bg-red-800">F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">F</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">T</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-red-100 dark:bg-red-800">F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">F</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">F</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center bg-green-100 dark:bg-green-800">T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Examples */}
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
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <p><strong>Example 1:</strong></p>
              <p>p = "A number is even"</p>
              <p>q = "A number is divisible by 2"</p>
              <p>p ↔ q is true because both statements are equivalent</p>
            </div>
            <div>
              <p><strong>Example 2:</strong></p>
              <p>p = "x = 3"</p>
              <p>q = "x² = 9"</p>
              <p>p ↔ q is false because when x = -3, q is true but p is false</p>
            </div>
            <div>
              <p><strong>Example 3:</strong></p>
              <p>p = "Triangle ABC is equilateral"</p>
              <p>q = "All angles in triangle ABC are 60°"</p>
              <p>p ↔ q is true because these statements are logically equivalent</p>
            </div>
          </div>
        </div>

        {/* Properties */}
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
                ? "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-orange-300 dark:to-red-300`}
          >
            Properties of Biconditional
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <p><strong>Commutativity:</strong></p>
              <BlockMath math="p \leftrightarrow q \equiv q \leftrightarrow p" />
            </div>
            <div>
              <p><strong>Associativity:</strong></p>
              <BlockMath math="(p \leftrightarrow q) \leftrightarrow r \equiv p \leftrightarrow (q \leftrightarrow r)" />
            </div>
            <div>
              <p><strong>Identity:</strong></p>
              <BlockMath math="p \leftrightarrow T \equiv p" />
              <BlockMath math="p \leftrightarrow F \equiv \neg p" />
            </div>
            <div>
              <p><strong>Negation:</strong></p>
              <BlockMath math="\neg(p \leftrightarrow q) \equiv p \leftrightarrow \neg q \equiv \neg p \leftrightarrow q" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}