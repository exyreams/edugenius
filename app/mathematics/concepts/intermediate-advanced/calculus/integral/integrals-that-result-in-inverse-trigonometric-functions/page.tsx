"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component IntegralsThatResultInverseTrigonometricFunctions
 * @description A React component explaining and demonstrating integrals that result in inverse trigonometric functions.
 * @returns {JSX.Element} The Integrals that Result in Inverse Trigonometric Functions page.
 */
export default function IntegralsThatResultInverseTrigonometricFunctions() {
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
      label: "Integral Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral",
    },
    {
      label: "Inverse Trig Integrals",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral/integrals-that-result-in-inverse-trigonometric-functions",
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
          Integrals that Result in Inverse Trigonometric Functions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the key integration formulas that yield inverse trigonometric
          functions (arcsin, arccos, arctan), along with examples and
          applications.
        </p>
      </div>
      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Formulas Section */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-800 dark:to-indigo-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Key Integration Formulas
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Arcsine Integral */}
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
                Arcsine
              </h3>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \frac{du}{\sqrt{a^2 - u^2}} = \arcsin\left(\frac{u}{a}\right) + C" />
              </div>
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Where <InlineMath math="a > 0" />.
              </p>
            </div>

            {/* Arctangent Integral */}
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
                Arctangent
              </h3>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \frac{du}{a^2 + u^2} = \frac{1}{a} \arctan\left(\frac{u}{a}\right) + C" />
              </div>
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Where <InlineMath math="a \neq 0" />.
              </p>
            </div>

            {/* Arcsecant Integral */}
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
                Arcsecant
              </h3>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300  dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="\int \frac{du}{u\sqrt{u^2 - a^2}} = \frac{1}{a} arcsec\left|\frac{u}{a}\right| + C" />
              </div>
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Where <InlineMath math="a > 0" />.
              </p>
            </div>
          </div>
          <p
            className={`mt-4  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            These formulas are essential for solving integrals that, after
            appropriate substitutions or manipulations, match these forms. The
            constant <InlineMath math="C" /> represents the constant of
            integration. Note that the absolute value is used in the arcsecant
            formula to ensure the argument of arcsecant is always positive.
          </p>
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
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Examples
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Example 1 */}
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
                Example 1: Arcsine
              </h3>
              <BlockMath math="\int \frac{dx}{\sqrt{9 - x^2}}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Solution:
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300  dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\arcsin(\frac{x}{3}) + C" />
                </div>
              </p>
            </div>
            {/* Example 2 */}
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
                    ? "text-teal-600 dark:text-teal-300"
                    : "text-teal-600 dark:text-teal-300"
                }`}
              >
                Example 2: Arctangent
              </h3>
              <BlockMath math="\int \frac{dx}{4 + x^2}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Solution:{" "}
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300  dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{1}{2}\arctan(\frac{x}{2}) + C" />
                </div>
              </p>
            </div>
            {/* Example 3 */}
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
                Example 3: Arcsecant
              </h3>
              <BlockMath math="\int \frac{dx}{x\sqrt{x^2 - 16}}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Solution:{" "}
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300  dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{1}{4}arcsec|\frac{x}{4}| + C" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Inverse Trigonometric Integrals
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
