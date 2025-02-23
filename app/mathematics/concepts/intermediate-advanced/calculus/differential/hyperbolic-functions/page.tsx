"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component HyperbolicFunctions
 * @description A React component that provides a comprehensive overview of hyperbolic functions.
 *  Includes definitions, derivatives, integrals, inverse functions, graphical representations, and applications.
 * @returns {JSX.Element} The Hyperbolic Functions page.
 */
export default function HyperbolicFunctions() {
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
      label: "Hyperbolic Functions",
      href: "/mathematics/concepts/intermediate-advanced/calculus/differential/hyperbolic-functions",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or glassmorphism.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @function getProblemColor
   * @description Returns a Tailwind CSS gradient class string based on the index for Practice Exercises.
   * @param {number} index - The index of the problem.
   * @returns {string} The Tailwind CSS gradient class string.
   */
  function getProblemColor(index: number): string {
    const colors = [
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
    return colors[index % colors.length];
  }
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Hyperbolic Functions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the definitions, properties, derivatives, integrals, and
          applications of hyperbolic functions (sinh, cosh, tanh, etc.) and
          their inverses.
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Definitions */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-800 dark:to-indigo-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Fundamental Definitions
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
                  className={`text-lg font-semibold ${isColorful ? "text-indigo-600 dark:text-indigo-300" : "text-indigo-600 dark:text-indigo-300"}`}
                >
                  Hyperbolic Sine
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\sinh x = \frac{e^x - e^{-x}}{2}" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The hyperbolic sine of x is defined as half the difference
                  between the exponential function of x and the exponential
                  function of -x.
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
                  className={`text-lg font-semibold ${isColorful ? "text-emerald-600 dark:text-emerald-300" : "text-emerald-600 dark:text-emerald-300"}`}
                >
                  Hyperbolic Cosine
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\cosh x = \frac{e^x + e^{-x}}{2}" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The hyperbolic cosine of x is defined as half the sum of the
                  exponential function of x and the exponential function of -x.
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
                  className={`text-lg font-semibold ${isColorful ? "text-rose-600 dark:text-rose-300" : "text-rose-600 dark:text-rose-300"}`}
                >
                  Hyperbolic Tangent
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The hyperbolic tangent of x is the ratio of the hyperbolic
                  sine of x to the hyperbolic cosine of x.
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
                  className={`text-lg font-semibold ${isColorful ? "text-amber-600 dark:text-amber-300" : "text-amber-600 dark:text-amber-300"}`}
                >
                  Reciprocal Functions
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\operatorname{sech} x = \\frac{1}{\\cosh x}, \\quad \\operatorname{csch} x = \\frac{1}{\\sinh x}, \\quad \\operatorname{coth} x = \\frac{1}{\\tanh x}"
                    }
                  />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  These are the reciprocal functions: hyperbolic secant (sech),
                  hyperbolic cosecant (csch), and hyperbolic cotangent (coth).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Derivatives and Integrals */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300 ${isColorful ? "" : "text-gray-800 dark:text-gray-200"}`}
          >
            Calculus Operations
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3
                className={`text-lg font-semibold ${isColorful ? "text-teal-700 dark:text-teal-300" : "text-teal-700 dark:text-teal-300"}`}
              >
                Derivatives
              </h3>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx} \sinh x = \cosh x" />
                </div>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx} \cosh x = \sinh x" />
                </div>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx} \tanh x = sech^2 x" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3
                className={`text-lg font-semibold ${isColorful ? "text-teal-700 dark:text-teal-300" : "text-teal-700 dark:text-teal-300"}`}
              >
                Integrals
              </h3>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int \sinh x \, dx = \cosh x + C" />
                </div>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int \cosh x \, dx = \sinh x + C" />
                </div>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int sech^2 x \, dx = \tanh x + C" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inverse Hyperbolic Functions */}
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
            Inverse Hyperbolic Functions
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {" "}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\sinh^{-1} x = \ln\left(x + \sqrt{x^2 + 1}\right)" />
                </div>
              </div>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\cosh^{-1} x = \ln\left(x + \sqrt{x^2 - 1}\right), \quad x \geq 1" />
                </div>
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
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\tanh^{-1} x = \frac{1}{2} \ln\left(\frac{1 + x}{1 - x}\right), \quad |x| < 1" />
                </div>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="sech^{-1} x = \ln\left(\frac{1 + \sqrt{1 - x^2}}{x}\right), \quad 0 < x \leq 1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Representation */}
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
                <text x="185" y="175" fontSize="12">
                  x
                </text>
                <text x="25" y="20" fontSize="12">
                  y
                </text>

                {/* sinh(x) curve */}
                <path
                  d="M20 100 C 40 40, 160 160, 180 100"
                  stroke={isColorful ? "#f97316" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                <text
                  x="60"
                  y="80"
                  fontSize="14"
                  fill={isColorful ? "#f97316" : "gray"}
                >
                  sinh(x)
                </text>

                {/* cosh(x) curve */}
                <path
                  d="M20 180 Q 100 80 180 180"
                  stroke={isColorful ? "#22c55e" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                <text
                  x="110"
                  y="190"
                  fontSize="14"
                  fill={isColorful ? "#22c55e" : "gray"}
                >
                  cosh(x)
                </text>
                {/* tanh(x) curve */}
                <path
                  d="M20 180 C 80 180 80 100 100 100 C 120 100 120 20 180 20"
                  stroke={isColorful ? "#a855f7" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />

                <text
                  x="100"
                  y="80"
                  fontSize="14"
                  fill={isColorful ? "#a855f7" : "gray"}
                >
                  tanh(x)
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
                  Asymptotes and Limits
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\lim_{x \\to \\infty} \\tanh(x) = 1"} />
                </div>

                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\lim_{x \\to -\\infty} \\tanh(x) = -1"} />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The hyperbolic tangent function,{" "}
                  <InlineMath math="\tanh(x)" />, approaches 1 as{" "}
                  <InlineMath math="x" /> goes to infinity, and -1 as{" "}
                  <InlineMath math="x" /> goes to negative infinity.
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
                  Symmetry
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\sinh(-x) = -\sinh(x) \quad \text{(odd)}" />
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\cosh(-x) = \cosh(x) \quad \text{(even)}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Hyperbolic sine is an odd function, while hyperbolic cosine is
                  an even function.
                </p>
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
            className={`bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-pink-300 dark:to-rose-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Key Applications
          </h2>
          {/* Applications Grid */}
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Complex Division */}
            <div className="space-y-4">
              <div
                className={` ${
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
                  Catenary Curves
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"y = a \\cosh\\left(\\frac{x}{a}\\right)"} />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Describes the shape of a hanging chain or cable under its own
                  weight when supported only at its ends.
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
                  Special Relativity
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\tanh \\phi = \\frac{v}{c}"} />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Relates rapidity (ϕ) to velocity (v) and the speed of light
                  (c) in Lorentz transformations.
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
            {/* Problem 1 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(0)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 1
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-rose-300 dark:scrollbar-track-rose-600 dark:scrollbar-thumb-rose-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Simplify } \\cosh^2 x - \\sinh^2 x"}
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                        ? "scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-rose-300 dark:scrollbar-track-rose-600 dark:scrollbar-thumb-rose-500"
                        : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math="1" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 2 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(1)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 2
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300 dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\text{Find } \\frac{d}{dx} \\tanh(3x)"} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300 dark:bg-black/20 dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    } `}
                  >
                    <BlockMath math={"3sech^2(3x)"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 3 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(2)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 3
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-lime-200 scrollbar-thumb-lime-300 dark:scrollbar-track-lime-600 dark:scrollbar-thumb-lime-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\text{Solve } \\sinh x = 0"} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                        ? "scrollbar-thin scrollbar-track-lime-200 scrollbar-thumb-lime-300 dark:scrollbar-track-lime-600 dark:scrollbar-thumb-lime-500"
                        : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"x = 0"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 4 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(3)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 4
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Evaluate } \\int sech x \\tanh x \\, dx"}
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                    <BlockMath math={" -sech x + C"} />
                  </div>
                </details>
              </div>
            </div>
            {/* Problem 5 */}

            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(4)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 5
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Prove } \\cosh(2x) = 2\\cosh^2 x - 1"}
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                    <BlockMath math="\text{Use exponential definition}" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 6 */}

            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(5)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 6
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math={"\\text{Find inverse } \\sinh^{-1}(1)"} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                    <BlockMath math="\\ln(1 + sqrt{2})" />
                  </div>
                </details>
              </div>
            </div>
            {/* Problem 7 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(6)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 7
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Solve } 2\\cosh x + 3\\sinh x = 5"}
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                    <BlockMath math="{x = \\ln 2}" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 8 */}

            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(7)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 8
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Integrate } \\int x \\sinh x \\, dx"}
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                    <BlockMath math="{x\\cosh x - \\sinh x + C}" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 9 */}

            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(8)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 9
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\text{Find } \\lim_{x \\to \\infty} \\tanh x"}
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                        : "bg-gray-200  dark:bg-gray-600"
                    } ${
                      isColorful
                        ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                        : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math="{1}" />
                  </div>
                </details>
              </div>
            </div>
            {/* Problem 10 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(9)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 10
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\text{Express } \\cosh x \\text{ in terms of exponentials}"
                    }
                  />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
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
                    <BlockMath math={"\\frac{e^x + e^{-x}}{2}"} />
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Section Divider (moved inside the main space-y-8 div) */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Exploring Hyperbolic Functions
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
