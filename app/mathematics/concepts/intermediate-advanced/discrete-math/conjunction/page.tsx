"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component Conjunction
 * @description A client component that renders a page explaining conjunction in logic.
 * @returns {JSX.Element} The rendered Conjunction page.
 */
export default function Conjunction() {
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
      label: "Conjunction",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/conjunction",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-green-300 dark:to-emerald-400 md:text-5xl lg:text-6xl`}
        >
          Conjunction (AND)
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about the logical conjunction operator that combines two propositions with "AND".
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
            Logical Conjunction
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The conjunction <InlineMath math="p \land q" /> (read as "p AND q") is true only when both p and q are true.
            </p>
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
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Truth Table for <InlineMath math="p \land q" />
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="border-r px-4 py-2 text-center">p</th>
                      <th className="border-r px-4 py-2 text-center">q</th>
                      <th className="px-4 py-2 text-center"><InlineMath math="p \land q" /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="px-4 py-2 text-center">T</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="px-4 py-2 text-center">F</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="border-r px-4 py-2 text-center">T</td>
                      <td className="px-4 py-2 text-center">F</td>
                    </tr>
                    <tr>
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="border-r px-4 py-2 text-center">F</td>
                      <td className="px-4 py-2 text-center">F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Properties of Conjunction
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
                  Commutative Property
                </h3>
                <BlockMath math="p \land q \equiv q \land p" />
                <p className="mt-2 text-sm">
                  The order of operands doesn't matter.
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
                  Associative Property
                </h3>
                <BlockMath math="(p \land q) \land r \equiv p \land (q \land r)" />
                <p className="mt-2 text-sm">
                  Grouping doesn't affect the result.
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
                  Identity Laws
                </h3>
                <BlockMath math="p \land T \equiv p" />
                <BlockMath math="p \land F \equiv F" />
                <p className="mt-2 text-sm">
                  Conjunction with true/false constants.
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
                  Idempotent Law
                </h3>
                <BlockMath math="p \land p \equiv p" />
                <p className="mt-2 text-sm">
                  A proposition AND itself equals itself.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* De Morgan's Laws */}
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
            De Morgan's Laws with Conjunction
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\neg(p \land q) \equiv \neg p \lor \neg q" />
              <p className="mt-2">
                The negation of a conjunction is equivalent to the disjunction of the negations.
              </p>
              <p className="mt-2 text-sm">
                <strong>Example:</strong> "It's not the case that it's both raining and sunny" is equivalent to "It's either not raining or not sunny (or both)".
              </p>
            </div>
          </div>
        </div>

        {/* Examples */}
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
            Examples and Applications
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Natural Language Examples
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>"It is raining AND it is cold" - True only if both conditions are met</li>
                  <li>"x {">"} 5 AND x {"<"} 10" - True for values between 5 and 10</li>
                  <li>"The number is even AND positive" - True for positive even numbers</li>
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
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Programming Applications
                </h3>
                <p className="mt-2 text-sm">
                  In programming, conjunction is used in conditional statements:
                </p>
                <p className="mt-1 text-sm font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  if (age {">="} 18 && hasLicense) { /* can drive */ }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Logical AND Operation
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
