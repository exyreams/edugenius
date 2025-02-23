"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component LogarithmicFunctions
 * @description A React component that explains calculus operations (derivatives and integrals)
 *              involving logarithmic functions. It covers the natural logarithm, general logarithms,
 *              the chain rule with logarithms, and logarithmic differentiation. Includes graphical
 *              interpretation and real-world applications.
 * @returns {JSX.Element} The Logarithmic Functions Calculus page.
 */
export default function LogarithmicFunctions() {
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
      label: "Logarithmic Functions",
      href: "/mathematics/concepts/intermediate-advanced/calculus/differential/logarithmic-functions",
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
          Logarithmic Functions Calculus
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the differentiation and integration of logarithmic functions,
          including the natural logarithm and logarithms with arbitrary bases.
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Rules Section */}
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
            Fundamental Rules
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
                  Natural Logarithm
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx} \ln x = \frac{1}{x}" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The derivative of the natural logarithm of x is 1/x. This is a
                  fundamental rule in calculus.
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
                  General Logarithm
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx} \log_b x = \frac{1}{x \ln b}" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  For a logarithm with base b, the derivative is 1/(x ln(b)).
                  This generalizes the natural logarithm rule.
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
                  Chain Rule Application
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dx} \ln u = \frac{u'}{u}" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  When applying the chain rule with a logarithmic function,
                  where u is a function of x, the derivative is u&#39;/u.
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
                  Logarithmic Differentiation
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="y = f(x) \Rightarrow \ln y = \ln f(x)" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  Logarithmic differentiation simplifies differentiating complex
                  functions by taking the natural logarithm of both sides before
                  differentiating.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
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
            Integration Techniques
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
                  className={`text-lg font-semibold ${isColorful ? "text-teal-700 dark:text-teal-300" : "text-teal-700 dark:text-teal-300"}`}
                >
                  Basic Integral
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int \frac{1}{x} dx = \ln |x| + C" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The integral of 1/x is the natural logarithm of the absolute
                  value of x, plus the constant of integration.
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
                  className={`text-lg font-semibold ${isColorful ? "text-teal-700 dark:text-teal-300" : "text-teal-700 dark:text-teal-300"}`}
                >
                  Substitution Rule
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int \frac{u'}{u} dx = \ln |u| + C" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  If u is a function of x, the integral of u&#39;/u is the
                  natural logarithm of the absolute value of u, plus C.
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
                  className={`text-lg font-semibold ${isColorful ? "text-teal-700 dark:text-teal-300" : "text-teal-700 dark:text-teal-300"}`}
                >
                  Natural Logarithm
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int \ln x \, dx = x \ln x - x + C" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The integral of ln(x) can be found using integration by parts.
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
                  className={`text-lg font-semibold ${isColorful ? "text-teal-700 dark:text-teal-300" : "text-teal-700 dark:text-teal-300"}`}
                >
                  General Logarithm
                </h3>

                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\int \log_b x \, dx = \frac{x}{\ln b}(\ln x - 1) + C" />
                </div>
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  The integral of log base b of x can be expressed in terms of
                  the natural logarithm.
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

                {/* ln(x) curve */}
                <path
                  d="M 0 150 C 40 150, 60 30, 180 30"
                  stroke={isColorful ? "#f97316" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                <text
                  x="80"
                  y="80"
                  fontSize="14"
                  fill={isColorful ? "#f97316" : "gray"}
                >
                  y = ln(x)
                </text>
                {/* Vertical asymptote (x=0) */}
                <line
                  x1="20"
                  y1="20"
                  x2="20"
                  y2="180"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeDasharray="4"
                />

                {/* Tangent Line */}
                <line
                  x1="50"
                  y1="156"
                  x2="100"
                  y2="85"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeDasharray="4"
                />

                <text x="145" y="65" fontSize="12">
                  y = 1/x
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
                  Key Features
                </h3>
                <ul
                  className={`ml-4 list-disc ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  <li>
                    Domain: <InlineMath math="x > 0" />
                  </li>
                  <li>
                    Vertical asymptote at <InlineMath math="x = 0" />
                  </li>
                  <li>Concave downward for all x in its domain.</li>
                  <li>Passes through the point (1, 0).</li>
                  <li>
                    Grows slowly but without bound as{" "}
                    <InlineMath math="x \to \infty" />.
                  </li>
                </ul>
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
                  Derivative Behavior
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d^2}{dx^2} \ln x = -\frac{1}{x^2}" />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The second derivative of ln(x) is -1/x², indicating that the
                  function is always concave down.
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
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Application 1 */}
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
                  Exponential Growth/Decay
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\frac{d}{dt} \\ln N(t) = k \\Rightarrow N(t) = N_0 e^{kt}"
                    }
                  />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Logarithmic differentiation is often used to simplify the
                  process of finding derivatives in models of exponential growth
                  or decay, like population growth or radioactive decay.
                </p>
              </div>
            </div>
            {/* Application 2 */}
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
                  Logarithmic Scales
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\text{pH} = -\log[H^+], \quad \text{dB} = 10\log\left(\frac{I}{I_0}\right)" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Logarithmic scales, like pH for acidity and decibels (dB) for
                  sound intensity, use logarithms to represent wide ranges of
                  values in a compact manner.
                </p>
              </div>
            </div>
            {/* Application 3 */}
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
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Economic Elasticity
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\epsilon = \frac{d \ln Q}{d \ln P}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  In economics, elasticity (e.g., price elasticity of demand)
                  measures the responsiveness of one variable (quantity Q) to
                  changes in another (price P), often expressed using
                  logarithmic derivatives.
                </p>
              </div>
            </div>

            {/* Application 4 */}
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
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Logistic Growth
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{d}{dt} \ln\left(\frac{P}{K-P}\right) = rt" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Logarithmic differentiation helps to find the derivative with
                  the logistic growth model, where P represents population, K is
                  the carrying capacity, and r is the growth rate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-lime-100 to-green-200 dark:from-lime-700 dark:to-green-600"
              : "glass"
          } rounded-lg
               p-6 shadow-md`}
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
            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? `bg-gradient-to-br ${getProblemColor(0)} dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem 1
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Find } \\frac{d}{dx} \\ln(3x^2 + 2)"}
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
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${
                        isColorful
                          ? "text-gray-700 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
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
                        ? `bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:bg-black/20 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500`
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"\\frac{6x}{3x^2 + 2}"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 2 */}
            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? `bg-gradient-to-br ${getProblemColor(1)} dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem 2
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Integrate } \\int \\frac{4}{2x + 5} dx"}
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
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${
                        isColorful
                          ? "text-gray-700 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
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
                        ? `bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:bg-black/20 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500`
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"2\\ln|2x + 5| + C"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 3 */}
            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? `bg-gradient-to-br ${getProblemColor(2)} dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem 3
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath math={"\\text{Differentiate } y = x^2 \\ln x"} />
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
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${
                        isColorful
                          ? "text-gray-700 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:bg-black/20 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"2x\\ln x + x"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 4 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(3)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 4
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Solve } \\int_1^e \\frac{\\ln x}{x} dx"}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:bg-black/20 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"\\frac{1}{2}"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 5 */}

            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(4)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 5
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Find } \\frac{d}{dx} \\log_2(x^3)"}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:bg-black/20 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"\\frac{3}{x \\ln 2}"} />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 6 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(5)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 6
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath math={"\\text{Integrate } \\int \\ln(2x) dx"} />
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:bg-black/20 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math="{x\\ln(2x) - x + C}" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 7 */}
            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(6)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 7
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Differentiate } y = \\ln(\\sin x)"}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-blue-200 scrollbar-thumb-blue-300 dark:bg-black/20 dark:scrollbar-track-blue-600 dark:scrollbar-thumb-blue-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math="\\cot x" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 8 */}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(7)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 8
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Evaluate } \\lim_{x\\to0^+} x\\ln x"}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:bg-black/20 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math="0" />
                  </div>
                </details>
              </div>
            </div>

            {/* Problem 9 */}
            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(8)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 9
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={
                      "\\text{Solve } \\frac{d}{dx} [\\ln(x + \\sqrt{x^2 + 1})]"
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:bg-black/20 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"\\frac{1}{\\sqrt{x^2 + 1}}"} />
                  </div>
                </details>
              </div>
            </div>
            {/* Problem 10 */}

            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              <div
                className={`rounded-lg p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(9)}` : "bg-gray-100 dark:bg-gray-700"}`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    Problem 10
                  </span>
                </div>
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  <BlockMath
                    math={"\\text{Integrate } \\int \\frac{dx}{x\\ln x}"}
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
                        ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-fuchsia-200 scrollbar-thumb-fuchsia-300 dark:bg-black/20 dark:scrollbar-track-fuchsia-600 dark:scrollbar-thumb-fuchsia-500"
                        : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                    }`}
                  >
                    <BlockMath math={"\\ln|\\ln x| + C"} />
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Logarithmic Functions
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
