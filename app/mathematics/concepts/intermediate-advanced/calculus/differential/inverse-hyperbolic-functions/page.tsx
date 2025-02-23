"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component InverseHyperbolic
 * @description A React component providing an in-depth explanation of inverse hyperbolic functions,
 *              including their definitions, derivatives, integrals, graphical representations,
 *              and practical applications.
 * @returns {JSX.Element} The Inverse Hyperbolic Functions page.
 */
export default function InverseHyperbolic() {
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
      label: "Inverse Hyperbolic",
      href: "/mathematics/concepts/intermediate-advanced/calculus/differential/inverse-hyperbolic-functions",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or glassmorphism.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-4xl">
          Inverse Hyperbolic Functions
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the properties, graphs, and applications of inverse hyperbolic
          functions, essential tools in calculus and mathematical analysis.
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Definitions */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-700 dark:to-indigo-600"
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
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Inverse Hyperbolic Sine (arcsinh)
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\sinh^{-1} x = \\ln\\left(x + \\sqrt{x^2 + 1}\\right)"
                    }
                  />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Domain: <InlineMath math={"(-\\infty, \\infty)"} /> (all real
                  numbers)
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
                  Inverse Hyperbolic Cosine (arccosh)
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-emerald-200 scrollbar-thumb-emerald-300 dark:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\cosh^{-1} x = \\ln\\left(x + \\sqrt{x^2 - 1}\\right)"
                    }
                  />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Domain: <InlineMath math={"[1, \\infty)"} />
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
                  Inverse Hyperbolic Tangent (arctanh)
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-rose-300 dark:scrollbar-track-rose-600 dark:scrollbar-thumb-rose-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\tanh^{-1} x = \\frac{1}{2} \\ln\\left(\\frac{1 + x}{1 - x}\\right)"
                    }
                  />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Domain: <InlineMath math="(-1, 1)" />
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
                  Inverse Hyperbolic Secant (arcsech)
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300 dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "sech^{-1} x = \\ln\\left(\\frac{1 + \\sqrt{1 - x^2}}{x}\\right)"
                    }
                  />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Domain: <InlineMath math="(0, 1]" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculus Operations */}
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
            Derivatives and Integrals
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-100"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                Differentiation
              </h3>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\frac{d}{dx} \\sinh^{-1} x = \\frac{1}{\\sqrt{x^2 + 1}}"
                    }
                  />
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
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\frac{d}{dx} \\cosh^{-1} x = \\frac{1}{\\sqrt{x^2 - 1}}"
                    }
                  />
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
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\frac{d}{dx} \\tanh^{-1} x = \\frac{1}{1 - x^2}"}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-100"
                    : "text-gray-800 dark:text-gray-100"
                }`}
              >
                Integration
              </h3>
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\int \\frac{1}{\\sqrt{x^2 + 1}} dx = \\sinh^{-1} x + C"
                    }
                  />
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
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\int \\frac{1}{1 - x^2} dx = \\tanh^{-1} x + C"}
                  />
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
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\int \\frac{1}{\\sqrt{x^2 - a^2}} dx = \\cosh^{-1}\\left(\\frac{x}{a}\\right) + C"
                    }
                  />
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
            Function Graphs
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
                {/* axes */}
                <line
                  x1="100"
                  y1="20"
                  x2="100"
                  y2="180"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <line
                  x1="20"
                  y1="100"
                  x2="180"
                  y2="100"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                {/* labels */}
                <text x="170" y="95" fontSize="12">
                  x
                </text>
                <text x="105" y="25" fontSize="12">
                  y
                </text>
                {/* arcsinh(x) */}
                <path
                  d="M20 100 Q 100 20 180 180"
                  stroke={isColorful ? "#f97316" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                {/* arccosh(x) */}
                <path
                  d="M100 20 L 180 100 Q 180 180 100 180"
                  stroke={isColorful ? "#f97316" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />
                {/* arctanh(x) */}
                <path
                  d="M20 100 L 100 100 Q 140 60 180 20"
                  stroke={isColorful ? "#f97316" : "gray"}
                  fill="none"
                  strokeWidth="2"
                />

                <text x="30" y="50" fontSize="12">
                  sinh⁻¹(x)
                </text>
                <text x="140" y="170" fontSize="12">
                  cosh⁻¹(x)
                </text>
                <text x="140" y="30" fontSize="12">
                  tanh⁻¹(x)
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
                  className={`ml-4 list-disc  ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : " text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <li>
                    <InlineMath math="\sinh^{-1}(x)" /> is an odd function.
                  </li>
                  <li>
                    <InlineMath math="\cosh^{-1}(x)" /> is defined for{" "}
                    <InlineMath math="x \geq 1" />.
                  </li>
                  <li>
                    <InlineMath math="\tanh^{-1}(x)" /> has vertical asymptotes
                    at <InlineMath math="x = \pm 1" />.
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
                  Important Identity
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-amber-200 scrollbar-thumb-amber-300 dark:scrollbar-track-amber-600 dark:scrollbar-thumb-amber-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "\\tanh^{-1} x = \\frac{1}{2} \\ln\\left(\\frac{1+x}{1-x}\\right)"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Practical Applications
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
                  Electrical Engineering
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "V(t) = V_0 \\tanh^{-1}\\left(\\frac{I(t)}{I_0}\\right)"
                    }
                  />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Used in modeling nonlinear circuit behavior, such as the
                  voltage-current relationship in certain types of diodes.
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
                  Relativistic Physics
                </h3>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto  ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"\\eta = \\tanh^{-1}\\left(\\frac{v}{c}\\right)"}
                  />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Appear in the calculation of rapidities in Lorentz
                  transformations, simplifying the composition of velocities in
                  special relativity.
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
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Evaluate } \\sinh^{-1}(0)"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"0"} />
                </div>
              </details>
            </div>
            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                  math={"\\text{Find } \\frac{d}{dx} \\cosh^{-1}(3x)"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"\\frac{3}{\\sqrt{(3x)^2 - 1}}"} />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                <BlockMath math={"\\text{Solve } \\tanh^{-1} x = 1"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"x = \\tanh 1 \\approx 0.7616"} />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Integrate } \\int \\frac{dx}{\\sqrt{x^2 + 4}}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath
                    math={"\\sinh^{-1}\\left(\\frac{x}{2}\\right) + C"}
                  />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                    "\\text{Prove } \\frac{d}{dx} sech^{-1} x = -\\frac{1}{x\\sqrt{1 - x^2}}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"\\text{Use derivative definition}"} />
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                <BlockMath math={"\\text{Calculate } \\cosh^{-1}(2)"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"\\ln(2 + \\sqrt{3})"} />
                </div>
              </details>
            </div>

            {/* Problem 7 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Simplify } \\sinh(\\sinh^{-1} x)"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"x"} />
                </div>
              </details>
            </div>

            {/* Problem 8 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
                isColorful
                  ? " bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-600 dark:scrollbar-thumb-purple-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Find domain of } \\coth^{-1} x"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"(-\\infty, -1) \\cup (1, \\infty)"} />
                </div>
              </details>
            </div>

            {/* Problem 9 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
                isColorful
                  ? " bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Evaluate } \\lim_{x \\to 1^-} \\tanh^{-1} x"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"\\infty"} />
                </div>
              </details>
            </div>

            {/* Problem 10 */}
            <div
              className={`rounded-lg p-4 transition-all  ${
                isColorful
                  ? " bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700 dark:text-white"
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
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Express } \\cosh^{-1} x \\text{ using natural log}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-300"
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
                  <BlockMath math={"\\ln(x + \\sqrt{x^2 - 1})"} />
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Decorative Section Divider */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Inverse Hyperbolic Functions
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
