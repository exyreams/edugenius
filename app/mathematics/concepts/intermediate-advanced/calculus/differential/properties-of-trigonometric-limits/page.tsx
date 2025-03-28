"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component TrigonometricLimits
 * @description A React component explaining trigonometric limits, including fundamental limits, applications of the squeeze theorem, graphical interpretations, and calculus applications.
 * @returns {JSX.Element} The Trigonometric Limits page.
 */
export default function TrigonometricLimits() {
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
      label: "Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus",
    },
    {
      label: "Differential",
      href: "/mathematics/concepts/intermediate-advanced/calculus/differential",
    },
    {
      label: "Trigonometric Limits",
      href: "/mathematics/concepts/intermediate-advanced/calculus/differential/properties-of-trigonometric-limits",
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
          Trigonometric Limits
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore fundamental trigonometric limits like{" "}
          <InlineMath math={"\\frac{\\sin(x)}{x}"} /> and
          <InlineMath math={"\\frac{1 - \\cos(x)}{x}"} />, their graphical
          interpretations, and applications in calculus.
        </p>
      </div>
      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Limits */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-800 dark:to-indigo-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Limits
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  Sine Limit
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Foundation for trigonometric derivatives
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
                  Cosine Limit
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Cosine limit relationship
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
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Tangent Limit
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\lim_{x \to 0} \frac{\tan x}{x} = 1" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Tangent-sine relationship
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
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Scaled Argument
                </h3>

                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\lim_{x \to 0} \frac{\sin(ax)}{bx} = \frac{a}{b}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Scaled argument variation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Squeeze Theorem */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Squeeze Theorem Applications
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  Classic Inequality
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300  dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="-1 \leq \sin x \leq 1" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Classic squeeze theorem inequality, used to prove{" "}
                  <div
                    className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                      isColorful
                        ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300  dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                        : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath
                      math={"\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1"}
                    />
                  </div>
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
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Alternative Approach
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300  dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\cos x \leq \frac{\sin x}{x} \leq 1" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Alternative bounding approach for{" "}
                  <div
                    className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                      isColorful
                        ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300  dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                        : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"\\lim_{x \\to 0} \\frac{\\sin x}{x}"} />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Interpretation */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-yellow-300`}
          >
            Graphical Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className={`h-64 w-full max-w-xs ${
                  isColorful
                    ? "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                    : "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                }`}
              >
                {/* x-axis */}
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                {/* y-axis */}
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <path
                  d="M20 100 Q100 50 180 100"
                  stroke={isColorful ? "#3b82f6" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                <line
                  x1="20"
                  y1="100"
                  x2="180"
                  y2="100"
                  stroke={isColorful ? "#10b981" : "gray"}
                  strokeWidth="2"
                />
                <text x="50" y="65" fontSize="12">
                  y = sin(x)
                </text>
                <text x="50" y="115" fontSize="12">
                  y = x
                </text>
              </svg>
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Graph of sin(x) and x
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  As <InlineMath math="x \to 0" />, <InlineMath math="\sin x" />{" "}
                  becomes indistinguishable from <InlineMath math="x" />,
                  explaining:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Derivative Applications */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Calculus Applications
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
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
                  Sine Derivative
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx}\sin x = \cos x" />
                  <BlockMath math="= \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  This fundamental derivative is derived using the limit
                  definition and the angle sum identity for sine.
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
                  Cosine Derivative
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx}\cos x = -\sin x" />
                  <BlockMath math="= \lim_{h \to 0} \frac{\cos(x+h) - \cos x}{h}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Similarly, the derivative of cosine is derived using the limit
                  definition and the angle sum identity for cosine.
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
                  ? "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700 dark:text-white"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\lim_{x \\to 0} \\frac{\\sin 3x}{x}"} />
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:bg-black/20  dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300  dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\lim_{x \\to 0} \\frac{\\tan 5x}{\\sin 2x}"}
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:bg-black/20  dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\frac{5}{2}"} />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x^2}"}
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:bg-black/20  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="8" />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700 dark:text-white"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300  dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\lim_{x \\to 0} \\frac{\\sin x \\cos x}{x}"}
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:bg-black/20  dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="1" />
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300  dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\lim_{x \\to \\pi/2} \\frac{\\cos x}{x - \\pi/2}"}
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-black/20  dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="-1" />
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\lim_{x \\to 0} \\frac{\\sin^2 x}{x^2}"} />
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:bg-black/20  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="1" />
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700 dark:text-white"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\lim_{x \\to 0} \\frac{\\sin(ax)}{\\sin(bx)}"}
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:bg-black/20  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\frac{a}{b}"} />
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700 dark:text-white"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}"} />
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:bg-black/20  dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\frac{1}{6}"} />
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700 dark:text-white"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\lim_{x \\to 0} \\frac{\\arcsin x}{x}"} />
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:bg-black/20  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="1" />
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700 dark:text-white"
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
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300  dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\lim_{x \\to 0} \\frac{1 - \\cos x}{x \\sin x}"}
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
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-black/20  dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="0" />
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* Decorative Section Divider */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Trigonometric Limits Mastery
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
