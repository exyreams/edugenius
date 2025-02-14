"use client";

import "katex/dist/katex.min.css";
import React, { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Array of gradient color strings for practice problems. These are used to style the
 * problem containers. The `dark:` prefix applies the style in dark mode.
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
 * @component Percentages
 * @description A client component that renders a page explaining percentages.  Includes practice
 * problems, but *without* using a mapped array for problems.  Demonstrates manual problem layout.
 * @returns {JSX.Element} The rendered Percentages page.
 */
export default function Percentages() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Percentages",
      href: "/mathematics/concepts/foundational/percentages",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between a colorful theme and a grayscale theme.
   * @type {boolean}
   * @default true
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles based on the `isColorful` state.  Includes
   * responsive variations using Tailwind's `sm:` prefix.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Percentages
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the concept of percentages, learn how to calculate them, and
          explore their applications in various real-world scenarios.
        </p>
      </div>

      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding Percentages */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Understanding Percentages
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A percentage is a way of expressing a number as a fraction of 100.
              It is often denoted using the percent sign, &#34;%&#34;.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {/* Block Math for Percentage Definition */}
              <BlockMath math="x\% = \frac{x}{100}" />
            </div>
          </div>
        </div>

        {/* Percentages, Fractions, and Decimals */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Percentages, Fractions, and Decimals
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Percentages, fractions, and decimals are different ways of
              representing the same value. They can be easily converted between
              each other.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Percentage to Fraction */}
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
                Percentage to Fraction
              </h3>
              {/* Block Math for Percentage to Fraction */}
              <BlockMath math="x\% = \frac{x}{100}" />
              <p className="mt-2">
                Divide the percentage by 100 and simplify. Example:{" "}
                {/* Inline Math for Example */}
                <InlineMath math="50\% = \frac{50}{100} = \frac{1}{2}" />
              </p>
            </div>

            {/* Fraction to Percentage */}
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
                Fraction to Percentage
              </h3>
              {/* Block Math for Fraction to Percentage */}
              <BlockMath math="\frac{a}{b} = \frac{a}{b} \times 100\%" />
              <p className="mt-2">
                Multiply the fraction by 100%. Example:{" "}
                <InlineMath math="\frac{3}{4} = \frac{3}{4} \times 100\% = 75\%" />
              </p>
            </div>

            {/* Percentage to Decimal */}
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
                Percentage to Decimal
              </h3>
              {/* Block Math for Percentage to Decimal */}
              <BlockMath math="x\% = \frac{x}{100}" />
              <p className="mt-2">
                Divide the percentage by 100. Example:{" "}
                <InlineMath math="25\% = \frac{25}{100} = 0.25" />
              </p>
            </div>

            {/* Decimal to Percentage */}
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
                Decimal to Percentage
              </h3>
              {/* Block Math for Decimal to Percentage */}
              <BlockMath math="\text{Decimal} \times 100\%" />
              <p className="mt-2">
                Multiply the decimal by 100%. Example:{" "}
                <InlineMath math="0.75 = 0.75 \times 100\% = 75\%" />
              </p>
            </div>
          </div>
        </div>

        {/* Calculating Percentage of a Number */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500 dark:to-pink-500"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Calculating Percentage of a Number
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              To find the percentage of a number, convert the percentage to a
              decimal or fraction and then multiply by the number.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-pink-300 backdrop-blur-sm dark:bg-pink-600"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <div
                className={`overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-400 dark:scrollbar-thumb-pink-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{Percentage of a Number} = \frac{\text{Percentage}}{100} \times \text{Number}" />
              </div>

              <p className="mt-4">
                <strong>Example:</strong> Find 20% of 80.
              </p>

              <div
                className={`overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-400 dark:scrollbar-thumb-pink-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="20\% \text{ of } 80 = \frac{20}{100} \times 80 = 0.20 \times 80 = 16" />
              </div>
            </div>
          </div>
        </div>

        {/* Percentage Increase and Decrease */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-orange-300`}
          >
            Percentage Increase and Decrease
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Calculate the percentage increase or decrease between two values.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Percentage Increase */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-yellow-300 backdrop-blur-sm dark:bg-yellow-800"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Percentage Increase
                </h3>

                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-500 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-800"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\text{Percentage Increase} = \frac{\text{New Value} - \text{Original Value}}{\text{Original Value}} \times 100\%" />
                </div>
                <p className="mt-4">
                  <strong>Example:</strong> Increase from 50 to 75.
                </p>
                <div className={`overflow-x-auto ${scrollbarStyle}`}>
                  <BlockMath math="\frac{75 - 50}{50} \times 100\% = 50\%" />
                </div>
              </div>

              {/* Percentage Decrease */}
              <div
                className={`w-full rounded-lg p-4 ${
                  isColorful
                    ? "bg-yellow-300 backdrop-blur-sm dark:bg-yellow-800"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Percentage Decrease
                </h3>

                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-500 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-800"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\text{Percentage Decrease} = \frac{\text{Original Value} - \text{New Value}}{\text{Original Value}} \times 100\%" />
                </div>
                <p className="mt-4">
                  <strong>Example:</strong> Decrease from 80 to 60.
                </p>
                <div className={`overflow-x-auto ${scrollbarStyle}`}>
                  <BlockMath math="\frac{80 - 60}{80} \times 100\% = 25\%" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications of Percentages */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            Applications of Percentages
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Percentages are used in various real-world contexts, such as
              calculating sales tax, discounts, interest rates, and more.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Sales Tax */}
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
                      ? "text-green-600 dark:text-green-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Sales Tax
                </h3>
                <p className="mt-2">
                  Calculated as a percentage of the purchase price.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong> Suppose you purchase an item priced
                  at <strong>$50</strong>, and the sales tax rate is{" "}
                  <strong>8%</strong>. The sales tax is calculated using the
                  formula:
                </p>
                <div className={`overflow-x-auto ${scrollbarStyle}`}>
                  <BlockMath
                    math={
                      "\\text{Sales Tax} = \\text{Price} \\times \\text{Tax Rate}"
                    }
                  />
                </div>
                <p>
                  The tax rate of <InlineMath math={"8\\%"} /> is written as a
                  decimal:
                  <InlineMath math={"8\\% = 0.08"} />.
                </p>
                <p>Multiplying these values gives:</p>
                <BlockMath math={"0.08 \\times 50 = 4"} />
                <p>
                  This means the sales tax is <strong>$4</strong>. To find the
                  total cost, add the tax to the original price:
                </p>
                <BlockMath math={"50 + 4 = 54"} />
                <p>
                  So, the total price including an 8% sales tax is{" "}
                  <strong>$54</strong>.
                </p>
              </div>

              {/* Discounts */}
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
                      ? "text-green-600 dark:text-green-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Discounts
                </h3>
                <p className="mt-2">Percentage reduction in price.</p>
                <p className="mt-1">
                  <strong>Example:</strong> Suppose an item originally costs{" "}
                  <strong>$100</strong>, and it is on sale for{" "}
                  <strong>20% off</strong>. The discount amount is calculated
                  using the formula:
                </p>
                <div className={`overflow-x-auto ${scrollbarStyle}`}></div>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-500 dark:scrollbar-track-green-500 dark:scrollbar-thumb-green-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\text{Discount} = \\text{Original Price} \\times \\text{Discount Rate}"
                    }
                  />
                </div>
                <p>
                  Here, the original price is <InlineMath math={"100"} />, and
                  the discount rate is expressed as a decimal:
                  <InlineMath math={"20\\% = 0.20"} />.
                </p>
                <p>Multiplying these values gives:</p>
                <BlockMath math={"0.20 \\times 100 = 20"} />
                <p>
                  This means the discount amount is <strong>$20</strong>. To
                  find the final price, subtract the discount from the original
                  price:
                </p>
                <BlockMath math={"100 - 20 = 80"} />
                <p>
                  So, the final price after a 20% discount is{" "}
                  <strong>$80</strong>.
                </p>
              </div>

              {/* Interest */}
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
                      ? "text-green-600 dark:text-green-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Interest
                </h3>
                <p className="mt-2">
                  Percentage earned on an investment or paid on a loan.
                </p>
                <p className="mt-1">
                  <strong>Example:</strong> Suppose you invest{" "}
                  <strong>$1000</strong> in an account that earns an annual
                  interest rate of <strong>5%</strong>. Interest is calculated
                  as:
                </p>
                <div className={`overflow-x-auto ${scrollbarStyle}`}>
                  <BlockMath
                    math={
                      "\\text{Interest} = \\text{Principal} \\times \\text{Rate}"
                    }
                  />
                </div>
                <p>
                  Here, the principal amount is <InlineMath math={"1000"} />,
                  and the rate is expressed as a decimal:
                  <InlineMath math={"5\\% = 0.05"} />.
                </p>
                <p>Multiplying these values gives:</p>
                <BlockMath math={"0.05 \\times 1000 = 50"} />
                <p>
                  This means that after one year, the interest earned on $1000
                  at a 5% annual rate is <strong>$50</strong>.
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
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[0]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{What is } 25\% \text{ of } 80?" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="20" />
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[1]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } \frac{3}{5} \text{ to a percentage.}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="60\%" />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[2]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } 75\% \text{ to a decimal.}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="0.75" />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[3]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-100 scrollbar-thumb-green-300 dark:scrollbar-track-green-400 dark:scrollbar-thumb-green-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{If a shirt costs \$50 and is on sale for 10\% off, what is the sale price?}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="\text{\$45}" />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[4]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-100 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-400 dark:scrollbar-thumb-teal-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{A price increases from \$80 to \$100. What is the percentage increase?}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="25\%" />
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[5]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              ></div>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-100 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-400 dark:scrollbar-thumb-sky-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{A price decreases from \$120 to \$90. What is the percentage decrease?}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="25\%" />
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[6]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              ></div>
              <div
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-100 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-400 dark:scrollbar-thumb-indigo-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{What is } 150\% \text{ of } 40?" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="60" />
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[7]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } 0.125 \text{ to a percentage.}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="12.5\%" />
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[8]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-100 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-400 dark:scrollbar-thumb-pink-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{If a \$200 item has a 6\% sales tax, what is the total cost?}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="\text{\$212}" />
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[9]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
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
                className={`mt-2 h-auto  overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-600"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\text{If you score 85 out of 100 on a test, what is your percentage score?}" />
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
                  } ${scrollbarStyle}`}
                >
                  <BlockMath math="85\%" />
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
          Part of 100
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
