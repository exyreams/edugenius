"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @interface DecimalConcept
 * @description Defines the structure for a decimal concept.
 * @property {string} title - The title of the concept.
 * @property {string} description - A description of the concept.
 * @property {string} [formula] - An optional mathematical formula related to the concept.
 * @property {React.ReactNode} [illustration] - An optional illustration for the concept.
 */
interface DecimalConcept {
  title: string;
  description: string;
  formula?: string;
  illustration?: React.ReactNode;
}

/**
 * @description An array of decimal concepts, each with a title, description, and optional formula.
 */
const decimalConcepts: DecimalConcept[] = [
  {
    title: "Decimal Place Values",
    description:
      "Each digit in a decimal number has a specific place value based on powers of ten. Places to the left of the decimal point are whole number places: ones, tens, hundreds, thousands, and so on. Places to the right of the decimal point are fractional places: tenths, hundredths, thousandths, ten-thousandths, and so on. Each place represents a power of ten (or 1/10 for places to the right of the decimal).",
  },
  {
    title: "Decimals and Fractions",
    description:
      "Decimals and fractions are two different ways of representing the same number. A decimal is a fraction where the denominator is a power of ten (10, 100, 1000, etc.), but the denominator isn't written explicitly. The position of the digits after the decimal point indicates the denominator.",
    formula:
      "\\text{Decimal} = \\frac{\\text{Integer Part}}{1} + \\frac{\\text{Tenths}}{10} + \\frac{\\text{Hundredths}}{100} + \\frac{\\text{Thousandths}}{1000} + \\cdots",
  },
  {
    title: "Adding and Subtracting Decimals",
    description:
      "To add or subtract decimals, line up the decimal points vertically. This ensures that you are adding or subtracting digits with the same place value (tenths to tenths, hundredths to hundredths, etc.). Then, add or subtract as you would with whole numbers, carrying or borrowing as necessary. Keep the decimal point aligned in the result.",
  },
  {
    title: "Multiplying Decimals",
    description:
      "To multiply decimals, first multiply the numbers as if they were whole numbers (ignore the decimal points). Then, count the total number of digits to the *right* of the decimal points in *both* of the original numbers. Place the decimal point in the answer so that it has that many digits to the right of the decimal point.",
  },
  {
    title: "Dividing Decimals",
    description:
      "To divide decimals, you often need to adjust the numbers so that the divisor (the number you're dividing *by*) is a whole number. You do this by moving the decimal point to the right in *both* the divisor and the dividend the same number of places. Then, divide as you would with whole numbers. The decimal point in the quotient (the answer) goes directly above the decimal point in the dividend.",
  },
  {
    title: "Rounding Decimals",
    description:
      "Rounding decimals means approximating a decimal to a certain place value. To round, look at the digit *immediately to the right* of the place you're rounding to. If that digit is 5 or greater, round the digit *in* the desired place value *up*. If it's less than 5, leave the digit in the desired place value as it is. Then, drop all the digits to the right.",
  },
  {
    title: "Decimal Approximations and Estimation",
    description:
      "Decimal approximations are useful for estimating calculations and simplifying numbers. Rounding is a common way to approximate decimals.",
  },
];

/**
 * @description Array of gradient color strings for practice problems.  These are used to style the problem containers.
 * The `dark:` prefix applies the style in dark mode.
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
 * @component Decimals
 * @description A client component for displaying information and practice problems about decimals.
 * @returns {JSX.Element} The rendered Decimals page.
 */
export default function Decimals() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Decimals",
      href: "/mathematics/concepts/foundational/decimals",
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
   * @description Dynamically generated scrollbar styles based on the `isColorful` state.
   * Includes responsive variations for small screens using Tailwind's `sm:` prefix.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-black/10 sm:scrollbar-track-black/10 scrollbar-thumb-black/10 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  /**
   * @description Text color class, determined by the `isColorful` state.
   * @type {string}
   */
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Decimals
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Fundamental decimal concepts and operations in mathematics.
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-12 space-y-8">
        {/* Decimal Concepts Sections */}
        {decimalConcepts.map((concept, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 ${
              isColorful
                ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
                : "glass"
            }`}
          >
            <h2
              className={`text-2xl font-semibold ${
                isColorful
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-indigo-100 dark:to-purple-100"
                  : "text-gray-800 dark:text-gray-200"
              } dark:from-blue-300 dark:to-purple-300`}
            >
              {concept.title}
            </h2>
            <div className="mt-4 space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <p className={`text-gray-800 dark:text-gray-100`}>
                  {concept.description}
                </p>

                {/* Conditionally render examples based on concept title */}
                {concept.title === "Decimal Place Values" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p>Consider the number 123.456:</p>
                    <ul className="list-inside list-disc">
                      <li>1 is in the hundreds place (100).</li>
                      <li>2 is in the tens place (10).</li>
                      <li>3 is in the ones place (1).</li>
                      <li>
                        4 is in the tenths place (<InlineMath math="1/10" /> or
                        0.1).
                      </li>
                      <li>
                        5 is in the hundredths place (
                        <InlineMath math="1/100" /> or 0.01).
                      </li>
                      <li>
                        6 is in the thousandths place (
                        <InlineMath math="1/1000" /> or 0.001).
                      </li>
                    </ul>
                  </div>
                )}

                {concept.title === "Decimals and Fractions" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-inside list-disc">
                      <li>
                        <InlineMath math="0.5" /> is equivalent to{" "}
                        <InlineMath math="1/2" />.
                      </li>
                      <li>
                        <InlineMath math="0.75" /> is equivalent to{" "}
                        <InlineMath math="3/4" />.
                      </li>
                      <li>
                        <InlineMath math="0.1" /> is equivalent to{" "}
                        <InlineMath math="1/10" />.
                      </li>
                      <li>
                        <InlineMath math="0.01" /> is equivalent to{" "}
                        <InlineMath math="1/100" />.
                      </li>
                    </ul>
                  </div>
                )}

                {concept.title === "Adding and Subtracting Decimals" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-inside list-disc">
                      <li>
                        <InlineMath math="1.25 + 2.3 = 3.55" />
                      </li>
                      <li>
                        <InlineMath math="4.5 - 1.23 = 3.27" />
                      </li>
                    </ul>
                  </div>
                )}

                {concept.title === "Multiplying Decimals" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-inside list-disc">
                      <li>
                        <InlineMath math={"1.2 \\times 0.3 = 0.36"} /> (One
                        digit after the decimal in 1.2, one in 0.3, so {""}
                        <span className="font-bold">two</span> in the answer.)
                      </li>
                      <li>
                        <InlineMath math={"2.5 \\times 1.25 = 3.125"} /> (One
                        digit in 2.5, two in 1.25, so{" "}
                        <span className="font-bold">three</span> in the answer.)
                      </li>
                    </ul>
                  </div>
                )}

                {concept.title === "Dividing Decimals" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-inside list-disc">
                      <li>
                        <InlineMath math={"6.4 \\div 0.2 = 32"} /> (Move decimal
                        one place right in both, resulting in{" "}
                        <InlineMath math={"64 \\div 2"} />
                        .)
                      </li>
                      <li>
                        <InlineMath math={"0.125 \\div 0.25 = 0.5"} /> (Move
                        decimal two places right in both, resulting in{" "}
                        <InlineMath math={"12.5 \\div 25"} />
                        .)
                      </li>
                    </ul>
                  </div>
                )}

                {concept.title === "Rounding Decimals" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Examples:</strong>
                    </p>
                    <ul className="list-inside list-disc">
                      <li>
                        Rounding <InlineMath math="3.14159" /> to the nearest
                        hundredth gives{" "}
                        <InlineMath
                          math={"3.14 \\text{ (because } 1 \\lt 5 \\text{)}"}
                        />
                      </li>
                      <li>
                        Rounding <InlineMath math="2.785" /> to the nearest
                        tenth gives{" "}
                        <InlineMath
                          math={"2.8 \\text{ (because } 8 \\ge 5 \\text{)}"}
                        />{" "}
                        {/* Corrected to \ge */}
                      </li>
                      <li>
                        Rounding <InlineMath math="5.6" /> to the nearest whole
                        number gives <InlineMath math="6" />.
                      </li>
                    </ul>
                  </div>
                )}

                {concept.title === "Decimal Approximations and Estimation" && (
                  <div className={`mt-2 ${textColor}`}>
                    <p>
                      <strong>Example:</strong>
                    </p>
                    <p>
                      Estimate <InlineMath math={"3.14159 \\times 2.71828"} />.
                      We can approximate this as{" "}
                      <InlineMath math={"3 \\times 3 = 9"} /> (the actual value
                      is closer to <InlineMath math="8.54" />, but 9 is a
                      reasonable estimate).
                    </p>
                  </div>
                )}

                {concept.formula && (
                  <div className="mt-4">
                    <strong className={`${textColor}`}>Formula: </strong>
                    <div
                      className={`mt-2 h-auto  overflow-x-auto ${scrollbarStyle}`}
                    >
                      <BlockMath math={concept.formula} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

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
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              { problem: "1.23 + 4.56", solution: "5.79" },
              { problem: "7.89 - 2.34", solution: "5.55" },
              { problem: "2.5 \\times 1.2", solution: "3.00" },
              { problem: "6.4 \\div 0.8", solution: "8" },
              {
                problem: "\\text{Round } 3.14159 \\text{ to the nearest tenth}",
                solution: "3.1",
              },
              {
                problem:
                  "\\text{Round } 2.71828 \\text{ to the nearest hundredth}",
                solution: "2.72",
              },
              {
                problem:
                  "\\text{Convert } 0.75 \\text{ to a fraction in simplest form}",
                solution: "\\frac{3}{4}",
              },
              {
                problem: "\\text{Convert } \\frac{2}{5} \\text{ to a decimal}",
                solution: "0.4",
              },
              {
                problem:
                  "\\text{Estimate } 5.87 + 2.11 \\text{ by rounding to the nearest whole number}",
                solution: "6 + 2 = 8",
              },
              {
                problem:
                  "\\text{Estimate } 9.95 \\times 3.03 \\text{ by rounding to the nearest whole number}",
                solution: "10 \\times 3 = 30",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`mt-6 grid grid-cols-1 rounded-lg p-4 transition-all md:grid-cols-1 ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white "
                } hover:shadow-lg `}
              >
                <div>
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                  >
                    {/* Block Math for Problem Statement */}
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    {/* SVG for Expand/Collapse Icon */}
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
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3  ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-600"
                    } ${scrollbarStyle}`}
                  >
                    {/* Block Math for Solution */}
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Foundations of Numbers
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
