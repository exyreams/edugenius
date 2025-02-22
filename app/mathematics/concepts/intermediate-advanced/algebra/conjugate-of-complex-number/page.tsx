"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * ConjugateOfComplexNumber Component
 * @returns {JSX.Element} The Conjugate of Complex Numbers page.
 * @description A React component that explains the concept of the conjugate of a complex number.
 * It covers the fundamental definition, geometric interpretation, algebraic properties,
 * modulus relationships, key applications, and practice exercises.
 */
export default function ConjugateOfComplexNumber() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb navigation items for the page.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Algebra",
      href: "/mathematics/concepts/intermediate-advanced/algebra",
    },
    {
      label: "Conjugate Of Complex Numbers",
      href: "/mathematics/concepts/intermediate-advanced/algebra/conjugate-of-complex-number",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage to apply colorful style, or glass style to the page.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Array of gradient color strings for practice problems.  These are used to style the
   * problem containers.  The `dark:` prefix applies the style in dark mode.
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
    "from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700",
    "from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700",
  ];

  /**
   * @description Dynamically generated scrollbar styles based on the `isColorful` state. Includes
   * responsive variations using Tailwind's `sm:` prefix.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Conjugate Of Complex Numbers
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the concept of conjugates in numbers, uncovering their role in
          simplifying expressions and solving equations with complex
          coefficients.
        </p>
      </div>

      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Formula */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Fundamental Definition
          </h2>
          {/* Fundamental Definition Formula */}
          <div
            className={`mt-4 flex justify-start overflow-x-auto rounded-lg p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            } ${scrollbarStyle}`}
          >
            <BlockMath math="\text{If } z = a + bi \text{, then } \overline{z} = a - bi" />
          </div>
        </div>

        {/* Geometric Interpretation */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Geometric Interpretation
          </h2>
          {/* Geometric Interpretation Grid */}
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* SVG Visualization */}
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className={`h-48 w-full max-w-xs ${
                  isColorful
                    ? "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                    : "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                }`}
              >
                {/* X-axis */}
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                {/* Y-axis */}
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                {/* Point z = a + bi */}
                <circle cx="140" cy="60" r="3" fill="#3b82f6" />
                <text x="145" y="65" fontSize="12">
                  z = a + bi
                </text>
                {/* Line connecting origin to z */}
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="60"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                {/* Point z̄ = a - bi */}
                <circle cx="140" cy="140" r="3" fill="#10b981" />
                <text x="145" y="135" fontSize="12">
                  z̄ = a - bi
                </text>
                {/* Line connecting origin to z̄ */}
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="140"
                  stroke="#10b981"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* Explanation */}
            <div
              className={`space-y-4 ${
                isColorful
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <p>
                Reflection across the real axis in complex plane. If{" "}
                <InlineMath math="z = a + bi" />, then its conjugate{" "}
                <InlineMath math="\overline{z} = a - bi" />.
              </p>
              {/* Modulus Formula */}
              <div
                className={`overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-500 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-800"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="|z| = |\overline{z}| = \sqrt{a^2 + b^2}" />
              </div>
              {/* Argument Formula */}
              <div
                className={`overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-500 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-800"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\arg(\overline{z}) = -\arg(z)" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Properties Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Algebraic Properties */}
          <div
            className={`${
              isColorful
                ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600"
                : "glass"
            } rounded-lg p-6 shadow-md`}
          >
            <h3
              className={`text-xl font-semibold ${
                isColorful
                  ? "text-amber-800 dark:text-orange-100"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              Algebraic Properties
            </h3>
            <div className="mt-4 space-y-3">
              {/* Conjugate of Sum */}
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <BlockMath math="\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}" />
              </div>
              {/* Conjugate of Product */}
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <BlockMath math="\overline{z_1 \cdot z_2} = \overline{z_1} \cdot \overline{z_2}" />
              </div>
              {/* Conjugate and Real Part */}
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <BlockMath math="z + \overline{z} = 2a \quad (\text{Purely Real})" />
              </div>
            </div>
          </div>

          {/* Modulus Relationships */}
          <div
            className={`${
              isColorful
                ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600"
                : "glass"
            } rounded-lg p-6 shadow-md`}
          >
            <h3
              className={`text-xl font-semibold ${
                isColorful
                  ? "text-fuchsia-800 dark:text-fuchsia-100"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              Modulus Relationships
            </h3>
            <div className="mt-4 space-y-3">
              {/* Conjugate and Modulus Squared */}
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <BlockMath math="z \cdot \overline{z} = |z|^2" />
              </div>
              {/* Modulus of Conjugate */}
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <BlockMath math="|\overline{z}| = |z|" />
              </div>
              {/* Conjugate of Quotient */}
              <div
                className={`rounded-lg p-3 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <BlockMath math="\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "text-pink-800 dark:text-pink-100"
                : "text-gray-800 dark:text-gray-100"
            }`}
          >
            Key Applications
          </h2>
          {/* Applications Grid */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Complex Division */}
            <div className="space-y-4">
              <div
                className={`${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm  dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } rounded-lg p-4`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Complex Division
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-500 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-800"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{z_1}{z_2} = \frac{z_1 \cdot \overline{z_2}}{|z_2|^2}" />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Rationalizing denominators using conjugates.
                </p>
              </div>
            </div>
            {/* Polynomial Roots */}
            <div className="space-y-4">
              <div
                className={`${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm  dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } rounded-lg p-4`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Polynomial Roots
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-emerald-200 scrollbar-thumb-emerald-500 dark:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-800"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="P(z) = 0 \Rightarrow P(\overline{z}) = 0" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  For polynomials with real coefficients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-700 dark:to-emerald-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "text-green-800 dark:text-green-100"
                : "text-gray-800 dark:text-gray-100"
            }`}
          >
            Practice Exercises
          </h2>
          {/* Practice Problems Grid */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[0]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 1
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Find } \\overline{z} \\text{ if } z = 3 - 4i"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"3 + 4i"} />
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[1]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 2
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Compute } (2+i) + \\overline{(2+i)}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"4"} />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[2]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 3
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Simplify } \\frac{1}{1+i}"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\frac{1}{2} - \\frac{1}{2}i"} />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[3]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 4
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Verify } |\\overline{z}| = |z| \\text{ for } z = 5+12i"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\sqrt{5^2 + 12^2} = 13"} />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[4]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 5
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } z + \\overline{z} = 10"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"z = 5 + bi \\text{ (any real } b\\text{)}"}
                  />
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[5]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 6
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Calculate } (3+2i)(3-2i)"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"9 + 4 = 13"} />
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[6]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 7
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Find } \\overline{e^{i\\theta}}"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"e^{-i\\theta}"} />
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[7]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 8
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Prove } \\overline{\\overline{z}} = z"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Double conjugation returns original}"}
                  />
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[8]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 9
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Express Re(z) using } \\overline{z}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\frac{z + \\overline{z}}{2}"} />
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[9]} dark:text-white`
                  : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem 10
                </span>
              </div>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Find roots of } x^2 - 4x + 13 = 0"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300"
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
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"2 \\pm 3i"} />
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Complex Numbers
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
