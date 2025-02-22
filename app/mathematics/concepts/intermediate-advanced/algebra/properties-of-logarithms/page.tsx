"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component LogarithmProperties
 * @description A comprehensive guide to logarithm properties, including fundamental properties, graphical representation, worked examples, and practice exercises.
 * @returns {JSX.Element} The Logarithm Properties page.
 */
export default function LogarithmProperties() {
  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles (true) or a glassmorphism style (false).
   */
  const [isColorful, setIsColorful] = useState(true);
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
      label: "Logarithm Properties",
      href: "/mathematics/concepts/intermediate-advanced/algebra/logarithm-properties",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Page Title */}
      <h1
        className={`mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:mb-6 md:text-4xl ${
          isColorful ? "" : "text-gray-800 dark:text-white"
        }`}
      >
        Logarithm Properties: Unlocking the Power of Exponents
      </h1>
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            The 7 Fundamental Properties of Logarithms
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Logarithms are the inverse functions of exponentiation. They allow
            us to solve equations where the unknown is in the exponent. These
            properties are essential for manipulating and simplifying
            logarithmic expressions. Throughout, assume{" "}
            <span className="font-bold italic">b</span>,{" "}
            <span className="font-bold italic">x</span>, and
            <span className="font-bold italic">y</span> are positive real
            numbers, and <span className="font-bold italic">b ≠ 1</span>.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Column 1 */}
            <div className="space-y-4">
              {/* Product Rule */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  1. Product Rule
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_b(xy) = \log_b x + \log_b y" />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The logarithm of a product is the sum of the logarithms of the
                  individual factors.
                </p>
                <p
                  className={`mt-2 font-bold italic ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Example:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_2 (8 \cdot 4) = \log_2 8 + \log_2 4 = 3 + 2 = 5" />
                </div>
              </div>

              {/* Quotient Rule */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  2. Quotient Rule
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_b\left(\frac{x}{y}\right) = \log_b x - \log_b y" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The logarithm of a quotient is the difference between the
                  logarithm of the numerator and the logarithm of the
                  denominator.
                </p>
                <p
                  className={`mt-2  font-bold italic ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Example:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_{10} \left(\frac{1000}{10}\right) = \log_{10} 1000 - \log_{10} 10 = 3 - 1 = 2" />
                </div>
              </div>

              {/* Power Rule */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  3. Power Rule
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_b(x^n) = n\log_b x" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The logarithm of a number raised to a power is the product of
                  the power and the logarithm of the number.
                </p>
                <p
                  className={`mt-2 font-bold italic ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Example:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_2 (4^3) = 3\log_2 4 = 3 \cdot 2 = 6" />
                </div>
              </div>

              {/* Inverse Properties */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-orange-600 dark:text-orange-300"
                  }`}
                >
                  7. Inverse Properties
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="b^{\log_b x} = x" />
                  <BlockMath math="\log_b(b^x) = x" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  These properties highlight the inverse relationship between
                  exponentiation and logarithms. They are fundamental for
                  solving logarithmic and exponential equations.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {/* Change of Base */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  4. Change of Base Formula
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_b a = \frac{\log_c a}{\log_c b}, \quad c > 0,  c \neq 1" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  This formula allows you to convert a logarithm from one base
                  to another. It&#39;s particularly useful for calculating
                  logarithms with bases that aren&#39;t available on a
                  calculator (typically base 10 and base
                  <span className="font-bold">e</span> are available).
                </p>
                <p
                  className={`mt-2  font-bold italic ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Example:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_2 5 = \frac{\log_{10} 5}{\log_{10} 2} \approx \frac{0.699}{0.301} \approx 2.322" />
                </div>
              </div>

              {/* Logarithm of 1 */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-cyan-600 dark:text-cyan-300"
                  }`}
                >
                  5. Logarithm of 1
                </h3>
                <BlockMath math="\log_b 1 = 0" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The logarithm of 1, regardless of the base, is always 0. This
                  is because any number raised to the power of 0 equals 1.
                </p>
              </div>

              {/* Logarithm of the Base */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-pink-600 dark:text-pink-300"
                      : "text-pink-600 dark:text-pink-300"
                  }`}
                >
                  6. Logarithm of the Base
                </h3>
                <BlockMath math="\log_b b = 1" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The logarithm of the base itself is always 1. This follows
                  directly from the definition of a logarithm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            The Logarithmic Graph: Visualizing the Inverse of Exponentiation
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            The graph of a logarithmic function,{" "}
            <InlineMath math="y = \log_b(x)" />, has a characteristic shape that
            reflects its properties.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              {/* SVG for Logarithmic Graph */}
              <svg
                viewBox="0 0 200 200"
                className={`h-64 w-full max-w-xs ${
                  isColorful
                    ? "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                    : "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                }`}
              >
                {/* Axes */}
                <line
                  x1="20"
                  y1="180"
                  x2="180"
                  y2="180"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <line
                  x1="20"
                  y1="180"
                  x2="20"
                  y2="20"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <text x="184" y="183" fontSize="16">
                  x
                </text>
                <text x="8" y="28" fontSize="16">
                  y
                </text>
                {/* Curve */}
                <path
                  d="M20 180 C 40 140, 80 100, 120 60, 150 30, 180 5"
                  stroke={isColorful ? "#f97316" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                {/* Point (1, 0) */}
                <circle
                  cx="20"
                  cy="180"
                  r="3"
                  fill={isColorful ? "#f97316" : "gray"}
                />
                <text x="5" y="195" fontSize="12">
                  (1, 0)
                </text>

                {/* Vertical Asymptote */}
                <line
                  x1="20"
                  y1="20"
                  x2="20"
                  y2="180"
                  stroke={isColorful ? "#ef4444" : "gray"}
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />
                <text x="5" y="10" fontSize="12">
                  Vertical asymptote x=0
                </text>
                {/* Curve label y = log_b(x) */}
                <text
                  x="100"
                  y="60"
                  fontSize="14"
                  fill={isColorful ? "#f97316" : "gray"}
                >
                  y = log_b(x)
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              {/* Domain */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Domain
                </h3>
                <BlockMath math="x > 0" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Logarithmic functions are only defined for positive values of
                  x. You cannot take the logarithm of zero or a negative number.
                </p>
              </div>

              {/* Range */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Range
                </h3>
                <BlockMath math="y \in \mathbb{R}" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The range of a logarithmic function is all real numbers. This
                  means the output (y-value) can be any real number.
                </p>
              </div>
              {/* Vertical Asymptote and x-intercept */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Key Features
                </h3>
                <ul
                  className={`ml-6 mt-2 list-disc  ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <li>
                    <span className="font-bold">Vertical Asymptote:</span> The
                    graph has a vertical asymptote at x = 0. This means the
                    graph gets infinitely close to the y-axis but never touches
                    it.
                  </li>
                  <li>
                    <span className="font-bold">x-intercept:</span> The graph
                    crosses the x-axis at the point (1, 0). This corresponds to
                    the property that log_b(1) = 0.
                  </li>
                  <li>
                    <span className="font-bold">Shape:</span> If{" "}
                    <InlineMath math={"b > 1"} />, the graph increases from left
                    to right. If <InlineMath math={"0 < b < 1"} /> , the graph
                    decreases from left to right.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Worked Examples: Applying the Properties
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            These examples show how to use the properties of logarithms to
            simplify and manipulate expressions.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {/* Combining Logs */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Combining Logarithmic Terms
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Use the product, quotient, and power rules to combine multiple
                  logarithmic terms into a single logarithm.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\ln 5 + 3\ln 2 = \ln 5 + \ln 2^3 = \ln(5 \cdot 2^3) = \ln 40" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {/* Expanding Logs */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Expanding Logarithmic Expressions
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Use the product, quotient, and power rules to expand a single
                  logarithmic term into multiple terms.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log\left(\frac{x^3}{y}\right) = \log(x^3) - \log y = 3\log x - \log y" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {/* Changing the base */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Changing the Base of a Logarithm
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Use the change-of-base formula to convert to a more convenient
                  base (usually base 10 or base e).
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_2 7 = \frac{\ln 7}{\ln 2} \approx 2.807" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {/* Solving equation */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Solving Logarithmic Equations
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {" "}
                  Use the properties of logarithms, especially the inverse
                  properties, to isolate and solve for the unknown.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\log_3(x-4) = 2 \Rightarrow x - 4 = 3^2 \Rightarrow x = 13" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-lime-300 dark:to-green-300 `}
          >
            Practice Exercises: Sharpen Your Logarithmic Skills
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Apply the properties of logarithms to simplify, expand, combine, and
            solve the following problems. Solutions are provided, but try to
            solve them yourself first!
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 1
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Simplify } \\log_4 64"} />
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
                  <BlockMath math="3" />
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 2
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Expand } \\ln\\left(\\frac{x^2}{y^3}\\right)"}
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
                  <BlockMath math="2\\ln x - 3\\ln y" />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 3
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Combine } 2\\log a + \\frac{1}{2}\\log b"}
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
                  <BlockMath math="\log(a^2\\sqrt{b})" />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 4
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } \\log_5 x = 3"} />
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
                  <BlockMath math="x = 125" />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 5
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Evaluate } \\log_2 32"} />
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
                  <BlockMath math="5" />
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 6
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Simplify } \\log_3 81 - \\log_3 9"} />
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
                  <BlockMath math="2" />
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 7
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Convert to natural log: } \\log_7 10"}
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
                  <BlockMath math="\\frac{\\ln 10}{\\ln 7}" />
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 8
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } \\ln(x^2) = 4"} />
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
                  <BlockMath math="x = \\pm e^2" />
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 9
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Expand } \\log\\sqrt[3]{xy}"} />
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
                  <BlockMath math="\\frac{1}{3}(\\log x + \\log y)" />
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 10
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Prove } \\log_b b^x = x"} />
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
                  <p
                    className={`${
                      isColorful
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {" "}
                    By definition of logarithms{" "}
                  </p>
                </div>
              </details>
            </div>

            {/* Problem 11 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 11
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Simplify } 5^{\\log_5 8}"} />
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
                  <BlockMath math="8" />
                </div>
              </details>
            </div>

            {/* Problem 12 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 12
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Solve } 2\\log x = \\log 16"} />
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
                  <BlockMath math="x = 4" />
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* Decorative Section Divider */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Unlocking Logarithmic Potential
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
