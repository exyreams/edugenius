"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component Factoring
 * @description A React component that explains factoring formulas and techniques.
 * @returns {JSX.Element} The Factoring page.
 */
export default function Factoring() {
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
      label: "Factoring",
      href: "/mathematics/concepts/intermediate-advanced/algebra/factoring",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or a glassmorphism style.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Array of gradient color strings for practice problems. These are used to style the
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
   * @description Dynamically generated scrollbar styles based on the `isColorful` state.  Includes
   * responsive variations using Tailwind's `sm:` prefix.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1
        className={`mb-4 bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:mb-6 md:text-4xl ${
          isColorful ? "" : "text-gray-800 dark:text-white"
        }`}
      >
        Factoring Formulas
      </h1>
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Formulas Section */}
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
            Fundamental Factoring Techniques
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Greatest Common Factor (GCF)
                </h3>
                <BlockMath math="6x^3 + 9x = 3x(2x^2 + 3)" />
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Difference of Squares
                </h3>
                <BlockMath math="a^2 - b^2 = (a - b)(a + b)" />
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Perfect Square Trinomial
                </h3>
                <BlockMath math="a^2 \pm 2ab + b^2 = (a \pm b)^2" />
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Sum/Difference of Cubes
                </h3>
                <BlockMath math="a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)" />
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
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
            Factoring Process
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div
                className={`flex items-start gap-3 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <p className="flex-1">
                  Factor out the Greatest Common Factor (GCF) from all terms.
                </p>
              </div>
              <div
                className={`flex items-start gap-3 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <p className="flex-1">
                  Identify special patterns (difference of squares, perfect
                  trinomials).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`flex items-start gap-3 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <p className="flex-1">
                  For trinomials: Find two numbers that multiply to{" "}
                  <InlineMath math="ac" /> and add to <InlineMath math="b" />.
                </p>
              </div>
              <div
                className={`flex items-start gap-3 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <p className="flex-1">
                  Check by expanding the factors (FOIL method).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Worked Examples */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Worked Examples
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Quadratic Trinomial
                </h3>
                <BlockMath math="x^2 + 5x + 6 = (x + 2)(x + 3)" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Find factors of 6 that add to 5: 2 and 3.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } ${scrollbarStyle}`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Difference of Cubes
                </h3>
                <BlockMath math="8x^3 - 27 = (2x - 3)(4x^2 + 6x + 9)" />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Using formula:{" "}
                  <InlineMath math="a^3 - b^3 = (a - b)(a^2 + ab + b^2)" />.
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
            className={`bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem: "\\text{Factor } x^2 - 9",
                solution: "(x - 3)(x + 3)",
              },
              {
                problem: "\\text{Factor } 4y^2 + 12y + 9",
                solution: "(2y + 3)^2",
              },
              {
                problem: "\\text{Factor } z^3 + 8",
                solution: "(z + 2)(z^2 - 2z + 4)",
              },
              {
                problem: "\\text{Factor } 3x^3 - 6x^2",
                solution: "3x^2(x - 2)",
              },
              {
                problem: "\\text{Factor } t^2 - 4t - 12",
                solution: "(t - 6)(t + 2)",
              },
              {
                problem: "\\text{Factor } 25m^2 - 16n^2",
                solution: "(5m - 4n)(5m + 4n)",
              },
              {
                problem: "\\text{Factor } 2w^2 + 5w - 3",
                solution: "(2w - 1)(w + 3)",
              },
              {
                problem: "\\text{Factor } 27p^3 - 1",
                solution: "(3p - 1)(9p^2 + 3p + 1)",
              },
              {
                problem: "\\text{Factor } x^4 - 16",
                solution: "(x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${problemColors[index]} dark:text-white`
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
          Factoring Techniques
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
