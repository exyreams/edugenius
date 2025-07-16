"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function EvenSymmetry() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Fourier Analysis",
      href: "/mathematics/concepts/intermediate-advanced/fourier",
    },
    {
      label: "Even Symmetry",
      href: "/mathematics/concepts/intermediate-advanced/fourier/even-symmetry",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-pink-700 to-rose-800 bg-clip-text text-4xl font-bold text-transparent dark:from-pink-300 dark:to-rose-400 md:text-5xl lg:text-6xl`}
        >
          Even Symmetry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore even functions and their special properties in Fourier analysis.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Definition */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-pink-300 dark:to-rose-300`}
          >
            Even Function Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A function f(t) is even if it satisfies:
            </p>
            <div className="mt-4">
              <BlockMath math="f(-t) = f(t)" />
            </div>
            <p className="mt-4">
              This means the function is symmetric about the y-axis.
            </p>
          </div>
        </div>

        {/* Fourier Series for Even Functions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-indigo-300`}
          >
            Fourier Series of Even Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For even functions, the Fourier series contains only cosine terms:
            </p>
            <div className="mt-4">
              <BlockMath math="f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\left(\frac{2\pi nt}{T}\right)" />
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Sine Coefficients:</h3>
                <BlockMath math="b_n = 0 \quad \text{for all } n" />
              </div>
              <div>
                <h3 className="font-semibold">Cosine Coefficients:</h3>
                <BlockMath math="a_n = \frac{4}{T} \int_0^{T/2} f(t) \cos\left(\frac{2\pi nt}{T}\right) dt" />
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            Examples of Even Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Cosine Function:</h3>
              <BlockMath math="f(t) = \cos(t)" />
              <p>cos(-t) = cos(t)</p>
            </div>
            <div>
              <h3 className="font-semibold">Even Powers:</h3>
              <BlockMath math="f(t) = t^2, \quad f(t) = t^4" />
            </div>
            <div>
              <h3 className="font-semibold">Rectangular Pulse:</h3>
              <BlockMath math="f(t) = \begin{cases} 
                1 & \text{for } |t| < \frac{T}{4} \\
                0 & \text{otherwise}
              \end{cases}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
