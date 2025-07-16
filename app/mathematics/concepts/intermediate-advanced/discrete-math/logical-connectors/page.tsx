"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function LogicalConnectors() {
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
      label: "Logical Connectors",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/logical-connectors",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-violet-300 dark:to-purple-400 md:text-5xl lg:text-6xl`}
        >
          Logical Connectors
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental logical operators that connect and combine propositions in formal logic.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-violet-300 dark:to-purple-300`}
          >
            What are Logical Connectors?
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Logical connectors (also called logical operators or connectives) are symbols used to connect propositions 
              and form compound statements. They define how the truth values of individual propositions combine to 
              determine the truth value of the compound statement.
            </p>
            <p className="mt-2">
              The five primary logical connectors are: negation, conjunction, disjunction, implication, and biconditional.
            </p>
          </div>
        </div>

        {/* Negation */}
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
            Negation (NOT) - ¬
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The negation operator <InlineMath math="\neg p" /> reverses the truth value of a proposition.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Truth Table:</h3>
                <table className="mt-2 border-collapse border border-gray-400 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">¬p</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold">Example:</h3>
                <p className="mt-2">p: "It is raining"</p>
                <p>¬p: "It is not raining"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conjunction */}
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
            Conjunction (AND) - ∧
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The conjunction <InlineMath math="p \land q" /> is true only when both propositions are true.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Truth Table:</h3>
                <table className="mt-2 border-collapse border border-gray-400 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">q</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p ∧ q</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold">Example:</h3>
                <p className="mt-2">p: "It is sunny"</p>
                <p>q: "It is warm"</p>
                <p>p ∧ q: "It is sunny and warm"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Disjunction */}
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
            Disjunction (OR) - ∨
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The disjunction <InlineMath math="p \lor q" /> is true when at least one proposition is true.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Truth Table:</h3>
                <table className="mt-2 border-collapse border border-gray-400 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">q</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p ∨ q</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold">Example:</h3>
                <p className="mt-2">p: "I will study math"</p>
                <p>q: "I will study physics"</p>
                <p>p ∨ q: "I will study math or physics"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Implication */}
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
            Implication (IF-THEN) - →
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The implication <InlineMath math="p \rightarrow q" /> is false only when p is true and q is false.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Truth Table:</h3>
                <table className="mt-2 border-collapse border border-gray-400 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">q</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p → q</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-red-100 dark:bg-red-800">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold">Example:</h3>
                <p className="mt-2">p: "It rains"</p>
                <p>q: "The ground gets wet"</p>
                <p>p → q: "If it rains, then the ground gets wet"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biconditional */}
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
            Biconditional (IF AND ONLY IF) - ↔
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The biconditional <InlineMath math="p \leftrightarrow q" /> is true when both propositions have the same truth value.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Truth Table:</h3>
                <table className="mt-2 border-collapse border border-gray-400 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">q</th>
                      <th className="border border-gray-400 dark:border-gray-600 px-3 py-1">p ↔ q</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">T</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center">F</td>
                      <td className="border border-gray-400 dark:border-gray-600 px-3 py-1 text-center bg-green-100 dark:bg-green-800">T</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="font-semibold">Example:</h3>
                <p className="mt-2">p: "A number is even"</p>
                <p>q: "A number is divisible by 2"</p>
                <p>p ↔ q: "A number is even if and only if it is divisible by 2"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-gray-200 to-slate-200 dark:from-gray-600 dark:to-slate-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-gray-300 dark:to-slate-300`}
          >
            Summary of Logical Connectors
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Connector</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Symbol</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Name</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">¬p</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">¬</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Negation</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Reverses truth value</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">p ∧ q</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">∧</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Conjunction</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">True when both are true</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">p ∨ q</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">∨</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Disjunction</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">True when at least one is true</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">p → q</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">→</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Implication</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">False only when p is true and q is false</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">p ↔ q</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">↔</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Biconditional</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">True when both have same truth value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}