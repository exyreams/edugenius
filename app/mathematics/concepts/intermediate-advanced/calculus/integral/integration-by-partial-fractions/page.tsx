"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component IntegrationByPartialFractions
 * @description A React component explaining integration by partial fractions.  Includes
 *              the method, examples, and practice problems with solutions.
 * @returns {JSX.Element} The Integration by Partial Fractions page.
 */
export default function IntegrationByPartialFractions() {
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
      label: "Integral",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral",
    },
    {
      label: "Integration by Partial Fractions",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral/integration-by-partial-fractions",
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
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Integration by Partial Fractions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the technique of integration by partial fractions, a method
          used to decompose rational functions into simpler fractions for easier
          integration.
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-6 space-y-8">
        {/* Method of Partial Fractions */}

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
            Method of Partial Fractions
          </h2>
          <div className="mt-4 space-y-4">
            <p
              className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
            >
              Integration by partial fractions is a technique used to integrate
              rational functions (ratios of polynomials). The core idea is to
              decompose a complex rational function into a sum of simpler
              fractions.
            </p>
            <h3
              className={`text-lg font-semibold ${isColorful ? "text-indigo-600 dark:text-indigo-300" : "text-indigo-600 dark:text-indigo-300"}`}
            >
              Steps:
            </h3>
            <ol
              className={`ml-4 list-decimal space-y-2  ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
            >
              <li>
                <strong>Factor the Denominator:</strong> Completely factor the
                denominator of the rational function into linear and/or
                irreducible quadratic factors.
              </li>
              <li>
                <strong>Decompose the Fraction:</strong> Express the original
                rational function as a sum of partial fractions. The form of the
                partial fractions depends on the factors in the denominator:
                <ul className="ml-4 list-inside list-disc">
                  <li>
                    For a linear factor <InlineMath math="(ax + b)" />, use a
                    term <InlineMath math={"\\frac{A}{ax + b}"} />.
                  </li>
                  <li>
                    For a repeated linear factor{" "}
                    <InlineMath math="(ax + b)^n" />, use terms{" "}
                    <InlineMath
                      math={
                        "\\frac{A_1}{ax + b} + \\frac{A_2}{(ax + b)^2} + ... + \\frac{A_n}{(ax + b)^n}"
                      }
                    />
                    .
                  </li>
                  <li>
                    For an irreducible quadratic factor{" "}
                    <InlineMath math="(ax^2 + bx + c)" />, use a term{" "}
                    <InlineMath math={"\\frac{Ax + B}{ax^2 + bx + c}"} />.
                  </li>
                  <li>
                    For a repeated irreducible quadratic factor{" "}
                    <InlineMath math="(ax^2 + bx + c)^n" />, use terms{" "}
                    <InlineMath math="\frac{A_1x + B_1}{ax^2 + bx + c} + \frac{A_2x + B_2}{(ax^2+bx+c)^2} + ... + \frac{A_nx + B_n}{(ax^2 + bx + c)^n}" />
                    .
                  </li>
                </ul>
              </li>
              <li>
                <strong>Clear Fractions:</strong> Multiply both sides of the
                equation by the original denominator to eliminate the fractions.
              </li>
              <li>
                <strong>Solve for Coefficients:</strong> Substitute convenient
                values of x (usually the roots of the denominator) to solve for
                the unknown coefficients (A, B, etc.). If necessary, equate
                coefficients of like terms on both sides to create a system of
                linear equations.
              </li>
              <li>
                <strong>Integrate:</strong> Integrate each of the partial
                fractions. The resulting integrals will typically be logarithms
                (for linear factors) or involve arctangent and/or logarithms
                (for quadratic factors).
              </li>
            </ol>
          </div>
        </div>

        {/* Examples */}
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
            Examples
          </h2>
          <div className="mt-4 space-y-6">
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              } `}
            >
              <h3
                className={`text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : "text-teal-600 dark:text-teal-300"}`}
              >
                Example 1: Linear Factors
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto  ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \frac{5x - 4}{x^2 - x - 2} dx" />
              </div>
              <p
                className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
              >
                Factor the denominator: (x - 2)(x + 1). Decompose into partial
                fractions:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto  ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\frac{5x - 4}{(x - 2)(x + 1)} = \frac{A}{x - 2} + \frac{B}{x + 1}" />
              </div>
              <p
                className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
              >
                Solving for A and B gives A = 2, B = 3. The integral becomes:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto  ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \left(\frac{2}{x - 2} + \frac{3}{x + 1}\right) dx = 2\ln|x - 2| + 3\ln|x + 1| + C" />
              </div>
            </div>

            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              } `}
            >
              <h3
                className={`text-lg font-semibold ${isColorful ? "text-teal-600 dark:text-teal-300" : "text-teal-600 dark:text-teal-300"}`}
              >
                Example 2: Repeated Linear Factor
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto  ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \frac{x}{(x - 1)^2} dx" />
              </div>
              <p
                className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
              >
                Decompose into partial fractions:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto  ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\frac{x}{(x - 1)^2} = \frac{A}{x - 1} + \frac{B}{(x - 1)^2}" />
              </div>
              <p
                className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
              >
                Solving for A and B gives A = 1, B = 1. The integral becomes:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto  ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \left(\frac{1}{x - 1} + \frac{1}{(x - 1)^2}\right) dx = \ln|x - 1| - \frac{1}{x - 1} + C" />
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
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
        </div>
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Integration Techniques
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
