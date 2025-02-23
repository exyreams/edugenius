"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component AreasUnderTheCurve
 * @description A React component presenting the concept of finding areas under curves using integration.
 * @returns {JSX.Element} The Areas Under the Curve page.
 */
export default function AreasUnderTheCurve() {
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
      label: "Areas Under the Curve",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral/areas-under-curve",
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
          Areas Under the Curve
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn how to calculate the area under a curve using definite
          integrals.
        </p>
      </div>
      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Formula Section */}
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
            Definite Integral Formula
          </h2>
          <div
            className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
              isColorful
                ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <BlockMath math="\int_{a}^{b} f(x) dx" />
          </div>
          <p
            className={`mt-4  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            The definite integral of a function <InlineMath math="f(x)" /> from{" "}
            <InlineMath math="x = a" /> to <InlineMath math="x = b" />{" "}
            represents the signed area between the curve{" "}
            <InlineMath math="y=f(x)" />, the x-axis, and the vertical lines{" "}
            <InlineMath math="x = a" /> and <InlineMath math="x = b" />.
          </p>
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Area Calculation
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
