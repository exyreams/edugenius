"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function HalfWaveSymmetry() {
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
      label: "Half-Wave Symmetry",
      href: "/mathematics/concepts/intermediate-advanced/fourier/half-wave-symmetry",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-red-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-orange-400 md:text-5xl lg:text-6xl`}
        >
          Half-Wave Symmetry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Understand functions with half-wave symmetry and their impact on Fourier series coefficients.
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
              ? "bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-orange-300`}
          >
            Half-Wave Symmetry Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A function f(t) has half-wave symmetry if:
            </p>
            <div className="mt-4">
              <BlockMath math="f(t + \frac{T}{2}) = -f(t)" />
            </div>
            <p className="mt-4">
              This means the function in the second half of the period is the negative of the function in the first half.
            </p>
          </div>
        </div>

        {/* Fourier Series Impact */}
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
            Impact on Fourier Coefficients
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For functions with half-wave symmetry:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">DC Component:</h3>
                <BlockMath math="a_0 = 0" />
              </div>
              <div>
                <h3 className="font-semibold">Even Harmonics:</h3>
                <BlockMath math="a_{2n} = 0, \quad b_{2n} = 0" />
                <p>All even harmonics are absent.</p>
              </div>
              <div>
                <h3 className="font-semibold">Odd Harmonics Only:</h3>
                <p>Only odd harmonics (1st, 3rd, 5th, ...) are present.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Example */}
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
            Square Wave Example
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A square wave with half-wave symmetry:
            </p>
            <div className="mt-4">
              <BlockMath math="f(t) = \begin{cases} 
                1 & \text{for } 0 < t < \frac{T}{2} \\
                -1 & \text{for } \frac{T}{2} < t < T
              \end{cases}" />
            </div>
            <p className="mt-4">
              Fourier series contains only odd harmonics:
            </p>
            <div className="mt-2">
              <BlockMath math="f(t) = \frac{4}{\pi} \sum_{n=1,3,5,...} \frac{1}{n} \sin\left(\frac{2\pi nt}{T}\right)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
