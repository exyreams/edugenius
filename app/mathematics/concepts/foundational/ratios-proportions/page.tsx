"use client";

import "katex/dist/katex.min.css";
import React, { useState } from "react";
import { BlockMath } from "react-katex";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";
import RatioVisualizer from "./components/RatioVisualizer";
import ProportionSolver from "./components/ProportionSolver";
import UnitRateCalculator from "./components/UnitRateCalculator";

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
 * @component RatiosAndProportions
 * @description A client component that renders a page explaining ratios and proportions.
 *              Includes practice problems and interactive components for visualization and calculations.
 * @returns {JSX.Element} The rendered RatiosAndProportions page.
 */
export default function RatiosAndProportions() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Ratios & Proportions",
      href: "/mathematics/concepts/foundational/ratios-proportions",
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
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  /**
   * @description Text color based on color theme.
   */
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Ratios & Proportions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the concepts of ratios and proportions, including unit rates
          and real-world applications.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding Ratios */}
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
            Understanding Ratios
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A ratio is a comparison of two quantities by division. It can be
              expressed in several ways: a to b, a:b, or a/b.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\text{Ratio of a to b} = a:b = \frac{a}{b}" />
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> If there are 3 apples and 2 oranges,
                the ratio of apples to oranges is 3:2 or 3/2.
              </p>
              <h3
                className={`mt-4 text-lg font-semibold ${isColorful ? "text-indigo-600 dark:text-indigo-300" : textColor}`}
              >
                Interactive Example:
              </h3>
              <RatioVisualizer
                initialA={3}
                initialB={2}
                isColorful={isColorful}
              />
            </div>
          </div>
        </div>

        {/* Understanding Proportions */}
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
            Understanding Proportions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A proportion is an equation stating that two ratios are equal.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\frac{a}{b} = \frac{c}{d}" />
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> If 1/2 = x/4, then x=2 because the
                ratios are proportional.
              </p>
              <h3
                className={`mt-4 text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : textColor}`}
              >
                Interactive Example:
              </h3>
              <ProportionSolver isColorful={isColorful} />
            </div>
          </div>
        </div>

        {/* Solving Proportions */}
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
            Solving Proportions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              To solve a proportion, cross-multiply and solve for the unknown
              variable.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <BlockMath math="\text{If } \frac{a}{b} = \frac{c}{d} \text{, then } ad = bc." />
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> Solve for x: 2/5 = x/10. Cross
                multiply: 2 * 10 = 5 * x, so 20 = 5x, and x = 4.
              </p>
            </div>
          </div>
        </div>

        {/* Unit Rates */}
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
            Unit Rates
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A unit rate is a ratio where the second term is 1. It describes
              how many units of the first quantity correspond to one unit of the
              second quantity.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> If a car travels 120 miles in 2 hours,
                the unit rate (speed) is 60 miles per hour (60 mph).
              </p>
              <h3
                className={`mt-4 text-lg font-semibold ${isColorful ? "text-orange-600 dark:text-orange-300" : textColor}`}
              >
                Interactive Example:
              </h3>
              <UnitRateCalculator isColorful={isColorful} />
            </div>
          </div>
        </div>

        {/* Applications of Ratios and Proportions */}
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
            Applications of Ratios and Proportions
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Ratios and proportions are used in various real-world contexts,
              such as scale drawings and recipes.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Scale Drawings */}
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
                  Scale Drawings
                </h3>
                <p className="mt-2">
                  Scale drawings use ratios to represent the dimensions of real
                  objects in a smaller or larger size.
                </p>
                <p className={`mt-2 ${textColor}`}>
                  <strong>Example:</strong> A map uses a scale of 1:10,000,
                  meaning 1 cm on the map represents 10,000 cm (100 meters) in
                  reality.
                </p>
              </div>

              {/* Recipes */}
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
                  Recipes
                </h3>
                <p className="mt-2">
                  Recipes use ratios to describe the proportions of ingredients.
                </p>
                <p className={`mt-2 ${textColor}`}>
                  <strong>Example:</strong> A recipe calls for a 2:1 ratio of
                  flour to water. If you use 2 cups of flour, you need 1 cup of
                  water.
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
            {[
              {
                problem:
                  "\\text{Express the ratio of 4 to 12 in simplest form.}",
                solution: "\\frac{1}{3}",
              },
              {
                problem: "\\text{Solve for } x: \\frac{3}{7} = \\frac{x}{21}",
                solution: "9",
              },
              {
                problem:
                  "\\text{A car travels 200 miles in 4 hours. What is the unit rate (speed)?}",
                solution: "\\text{50 mph}",
              },
              {
                problem:
                  "\\text{A map scale is 1:50,000. If two cities are 4 cm apart on the map, what is the actual distance?}",
                solution: "\\text{2 km}",
              },
              {
                problem:
                  "\\text{A recipe uses a 3:1 ratio of sugar to butter. If you use 6 tablespoons of sugar, how much butter do you need?}",
                solution: "\\text{2 tablespoons}",
              },
              {
                problem: "\\text{Write the ratio 15:25 as a fraction.}",
                solution: "\\frac{3}{5}",
              },
              {
                problem: "\\text{Solve } \\frac{x}{8} = \\frac{5}{4}",
                solution: "10",
              },
              {
                problem:
                  "\\text{If 5 apples cost \\$2.50, what is the cost per apple?}",
                solution: "\\text{\\$0.50}",
              },
              {
                problem:
                  "\\text{A model car is built to a 1:20 scale. If the model is 8 inches long, how long is the real car?}",
                solution: "\\text{160 inches (or 13.33 feet)}",
              },
              {
                problem:
                  "\\text{A mixture requires 2 parts cement to 5 parts sand. How much sand is needed for 6 parts cement?}",
                solution: "\\text{15 parts}",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                } hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                >
                  <BlockMath math={item.problem} />
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
          Comparing and Relating Quantities
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
