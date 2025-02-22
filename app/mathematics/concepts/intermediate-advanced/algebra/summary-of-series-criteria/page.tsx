"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component SummaryOfSeriesCriteria
 * @description A React component summarizing criteria for determining the convergence or divergence of infinite series.
 * @returns {JSX.Element} The Summary of Series Criteria page.
 */
export default function SummaryOfSeriesCriteria() {
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
      label: "Summary of Series Criteria",
      href: "/mathematics/concepts/intermediate-advanced/algebra/summary-of-series-criteria",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or a glassmorphism style.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Summary Of Series Criteria
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the essential tests for determining the convergence or
          divergence of infinite series, with clear explanations and examples
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Tests Section */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Fundamental Tests
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                Geometric Series
              </h3>
              <BlockMath math={"\\sum_{n=0}^\\infty ar^n"} />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Converges if <InlineMath math={"|r| < 1"} />; diverges if{" "}
                <InlineMath math={"|r| \\geq 1"} />. The sum, if it converges,
                is <InlineMath math={"\\frac{a}{1-r}"} />.
              </p>
            </div>

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
                p-Series
              </h3>
              <BlockMath math={"\\sum_{n=1}^\\infty \\frac{1}{n^p}"} />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Converges if <InlineMath math={"p > 1"} />; diverges if{" "}
                <InlineMath math={"p \\leq 1"} />.
              </p>
            </div>

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
                Integral Test
              </h3>
              <BlockMath math={"\\int_1^\\infty f(x) dx"} />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                If <InlineMath math={"f(x)"} /> is positive, continuous, and
                decreasing for <InlineMath math={"x \\geq 1"} />, and{" "}
                <InlineMath math={"a_n = f(n)"} />, then{" "}
                <InlineMath math={"\\sum_{n=1}^\\infty a_n"} /> and{" "}
                <InlineMath math={"\\int_1^\\infty f(x) dx"} /> either both
                converge or both diverge.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Tests */}
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
            Comparison Tests
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
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
                  Direct Comparison Test
                </h3>
                <BlockMath math={"0 \\leq a_n \\leq b_n"} />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  If <InlineMath math={"0 \\leq a_n \\leq b_n"} /> for all{" "}
                  <InlineMath math={"n"} />:
                  <br /> - If <InlineMath math={"\\sum b_n"} /> converges, then{" "}
                  <InlineMath math={"\\sum a_n"} /> converges.
                  <br /> - If <InlineMath math={"\\sum a_n"} /> diverges, then{" "}
                  <InlineMath math={"\\sum b_n"} /> diverges.
                </p>
              </div>
            </div>
            <div className="space-y-4">
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
                  Limit Comparison Test
                </h3>
                <BlockMath math={"\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = L"} />
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  If <InlineMath math={"a_n > 0"} />,{" "}
                  <InlineMath math={"b_n > 0"} />, and{" "}
                  <InlineMath
                    math={"\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = L"}
                  />
                  , where <InlineMath math={"L"} /> is finite and positive, then{" "}
                  <InlineMath math={"\\sum a_n"} /> and{" "}
                  <InlineMath math={"\\sum b_n"} /> either both converge or both
                  diverge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Tests */}
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
            Advanced Convergence Tests
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                Ratio Test
              </h3>
              <BlockMath
                math={
                  "\\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L"
                }
              />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                - If <InlineMath math={"L < 1"} />, the series converges
                absolutely.
                <br /> - If <InlineMath math={"L > 1"} /> (or{" "}
                <InlineMath math={"L = \\infty"} />
                ), the series diverges.
                <br /> - If <InlineMath math={"L = 1"} />, the test is
                inconclusive.
              </p>
            </div>

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
                    ? "text-purple-600 dark:text-purple-300"
                    : "text-purple-600 dark:text-purple-300"
                }`}
              >
                Root Test
              </h3>
              <BlockMath math={"\\lim_{n\\to\\infty} \\sqrt[n]{|a_n|} = L"} />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                - If <InlineMath math={"L < 1"} />, the series converges
                absolutely.
                <br /> - If <InlineMath math={"L > 1"} /> (or{" "}
                <InlineMath math={"L = \\infty"} />
                ), the series diverges.
                <br /> - If <InlineMath math={"L = 1"} />, the test is
                inconclusive.
              </p>
            </div>

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
                Alternating Series Test (Leibniz Criterion)
              </h3>
              <BlockMath math={"\\sum (-1)^n b_n"} />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                If <InlineMath math={"b_n > 0"} />,{" "}
                <InlineMath math={"b_{n+1} \\leq b_n"} /> for all{" "}
                <InlineMath math={"n"} /> (i.e., <InlineMath math={"b_n"} /> is
                decreasing), and{" "}
                <InlineMath math={"\\lim_{n\\to\\infty} b_n = 0"} />, then the
                alternating series <InlineMath math={"\\sum (-1)^n b_n"} />{" "}
                converges.
              </p>
            </div>
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
                Divergence Test (nth Term Test)
              </h3>
              <BlockMath math={"\\lim_{n\\to\\infty} a_n \\neq 0"} />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                If the limit of <InlineMath math={"a_n"} /> as{" "}
                <InlineMath math={"n"} /> approaches infinity is not zero, the
                series diverges. If the limit is 0, this test provides *no
                information* about convergence/divergence.
              </p>
            </div>
          </div>
        </div>

        {/* Convergence Flowchart */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Convergence Decision Chart
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex-1 rounded-lg bg-black/5 backdrop-blur-sm dark:bg-black/20">
              <div
                className={`font-mono text-sm leading-relaxed md:text-base ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={`
                    \\text{Series Type?} \\\\
                    \\downarrow \\\\
                    \\text{Geometric} \\rightarrow |r| < 1? \\\\
                    \\downarrow \\\\
                    \\text{p-Series} \\rightarrow p > 1? \\\\
                    \\downarrow \\\\
                    \\text{Alternating} \\rightarrow \\text{Leibniz Test} \\\\
                    \\downarrow \\\\
                    \\text{Comparison Tests} \\\\
                    \\downarrow \\\\
                    \\text{Ratio/Root Test} \\\\
                    \\downarrow \\\\
                    \\text{Integral Test}
                  `}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\text{Always check } \\lim_{n\\to\\infty} a_n = 0 \\text{ first!}"
                    }
                  />
                </div>
                <p
                  className={`mt-2 text-center ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  If limit ≠ 0, series diverges immediately (nth term test)
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
            {/* problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700 dark:text-white"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
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
                <BlockMath
                  math={`\\text{Determine convergence: }  \\sum_{n=1}^\\infty \\frac{3^n}{4^{n+1}}`}
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
                      ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"Converges (Geometric r=3/4)"} />
                </div>
              </details>
            </div>
            {/* problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Determine convergence: } \\sum_{n=1}^\\infty \\frac{1}{n^{2/3}}"
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
                  <BlockMath math={"Diverges (p=2/3 < 1)"} />
                </div>
              </details>
            </div>
            {/* problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Determine convergence: }  \\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n}}"
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
                  <BlockMath math={"Converges (Alternating Series Test)"} />
                </div>
              </details>
            </div>

            {/* problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700 dark:text-white"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
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
                <BlockMath
                  math={
                    "\\text{Determine convergence: } \\sum_{n=1}^\\infty \\frac{n!}{10^n}"
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
                  <BlockMath math={"Diverges (Ratio Test L=\\infty)"} />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Determine convergence: } \\sum_{n=1}^\\infty \\frac{1}{n(n+2)}"
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
                  <BlockMath math={"Converges (Comparison to 1/n^2)"} />
                </div>
              </details>
            </div>
            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-blue-200 scrollbar-thumb-blue-300 dark:scrollbar-track-blue-600 dark:scrollbar-thumb-blue-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Determine convergence: } \\sum_{n=1}^\\infty \\frac{3n^2 + 1}{2n^4 - 5}"
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
                      ? "scrollbar-thin scrollbar-track-blue-200 scrollbar-thumb-blue-300 dark:scrollbar-track-blue-600 dark:scrollbar-thumb-blue-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"Converges (Limit Comparison to 1/n^2)"} />
                </div>
              </details>
            </div>
          </div>
          {/* Decorative Section Divider */}
          <div className="mt-16 flex items-center justify-center space-x-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
            <span className="text-sm italic text-gray-700 dark:text-gray-200">
              Series Convergence Tests
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
