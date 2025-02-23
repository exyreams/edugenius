"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component FundamentalTheoremOfCalculus
 * @description A React component explaining the Fundamental Theorem of Calculus (FTC), including both parts, examples, and applications.
 * @returns {JSX.Element} The Fundamental Theorem of Calculus page.
 */
export default function FundamentalTheoremOfCalculus() {
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
      label: "Fundamental Theorem of Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral/fundamental-theorem-of-calculus",
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
          Fundamental Theorem of Calculus
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the core concepts of the Fundamental Theorem of Calculus,
          connecting differentiation and integration, with detailed explanations
          and examples.
        </p>
      </div>
      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Part 1 of FTC */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-800 dark:to-indigo-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-indigo-300`}
          >
            Part 1: Differentiation of Integrals
          </h2>
          <div
            className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <BlockMath math="F'(x) = \frac{d}{dx} \int_{a}^{x} f(t) dt = f(x)" />
          </div>
          <p
            className={`mt-4  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            If <InlineMath math="f" /> is continuous on{" "}
            <InlineMath math="[a, b]" />, then the function{" "}
            <InlineMath math="F" /> defined by
          </p>
          <div
            className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <BlockMath math="F(x) = \int_{a}^{x} f(t) dt, \quad a \leq x \leq b" />
          </div>
          <p
            className={`mt-4  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            is continuous on <InlineMath math="[a, b]" /> and differentiable on{" "}
            <InlineMath math="(a, b)" />, and its derivative is{" "}
            <InlineMath math="f(x)" />. This part of the theorem establishes
            that differentiation and integration are inverse operations.
          </p>
          <h3
            className={`text-lg font-semibold ${
              isColorful
                ? "mt-4 text-indigo-600 dark:text-indigo-300"
                : "mt-4 text-indigo-600 dark:text-indigo-300"
            }`}
          >
            Example
          </h3>
          <div
            className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <BlockMath math="\text{If } F(x) = \int_{0}^{x} t^2 dt, \text{ then } F'(x) = x^2." />
          </div>
        </div>

        {/* Part 2 of FTC */}
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
            Part 2: Evaluation of Definite Integrals
          </h2>
          <div
            className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <BlockMath math="\int_{a}^{b} f(x) dx = F(b) - F(a)" />
          </div>
          <p
            className={`mt-4  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            If <InlineMath math="f" /> is continuous on{" "}
            <InlineMath math="[a, b]" /> and <InlineMath math="F" /> is *any*
            antiderivative of <InlineMath math="f" /> (that is,{" "}
            <InlineMath math="F' = f" />
            ), then the definite integral of <InlineMath math="f" /> from{" "}
            <InlineMath math="a" /> to <InlineMath math="b" /> is equal to the
            difference <InlineMath math="F(b) - F(a)" />. This part provides a
            method for evaluating definite integrals.
          </p>
          <h3
            className={`text-lg font-semibold ${
              isColorful
                ? "mt-4 text-teal-600 dark:text-teal-300"
                : "mt-4 text-teal-600 dark:text-teal-300"
            }`}
          >
            Example
          </h3>
          <div
            className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <BlockMath math="\int_{0}^{2} x^2 dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3}" />
          </div>
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Fundamental Theorem of Calculus
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
