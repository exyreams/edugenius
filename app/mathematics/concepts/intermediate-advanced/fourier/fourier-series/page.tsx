"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function FourierSeries() {
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
      label: "Fourier Series",
      href: "/mathematics/concepts/intermediate-advanced/fourier/fourier-series",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-orange-700 to-amber-800 bg-clip-text text-4xl font-bold text-transparent dark:from-orange-300 dark:to-amber-400 md:text-5xl lg:text-6xl`}
        >
          Fourier Series
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn how to represent periodic functions as infinite sums of sines and cosines.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Trigonometric Fourier Series */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-orange-300 dark:to-amber-300`}
          >
            Trigonometric Fourier Series
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Any periodic function f(x) with period T can be represented as:
            </p>
            <div className="mt-4">
              <BlockMath math="f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\left(\frac{2\pi nx}{T}\right) + b_n \sin\left(\frac{2\pi nx}{T}\right) \right)" />
            </div>
            <p className="mt-4">
              Where <InlineMath math="\omega_0 = \frac{2\pi}{T}" /> is the fundamental frequency.
            </p>
          </div>
        </div>

        {/* Fourier Coefficients */}
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
            Fourier Coefficients
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The coefficients are calculated using:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p><strong>DC Component:</strong></p>
                <BlockMath math="a_0 = \frac{2}{T} \int_{-T/2}^{T/2} f(x) dx" />
              </div>
              <div>
                <p><strong>Cosine Coefficients:</strong></p>
                <BlockMath math="a_n = \frac{2}{T} \int_{-T/2}^{T/2} f(x) \cos\left(\frac{2\pi nx}{T}\right) dx" />
              </div>
              <div>
                <p><strong>Sine Coefficients:</strong></p>
                <BlockMath math="b_n = \frac{2}{T} \int_{-T/2}^{T/2} f(x) \sin\left(\frac{2\pi nx}{T}\right) dx" />
              </div>
            </div>
          </div>
        </div>

        {/* Dirichlet Conditions */}
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
            Dirichlet Conditions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a Fourier series to converge, the function must satisfy:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>The function must be periodic</li>
              <li>The function must be single-valued</li>
              <li>The function must have a finite number of discontinuities in one period</li>
              <li>The function must have a finite number of maxima and minima in one period</li>
              <li>The integral <InlineMath math="\int_{-T/2}^{T/2} |f(x)| dx" /> must be finite</li>
            </ul>
          </div>
        </div>

        {/* Convergence */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-violet-300`}
          >
            Convergence Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">At Points of Continuity:</h3>
              <p>The series converges to f(x)</p>
            </div>
            <div>
              <h3 className="font-semibold">At Points of Discontinuity:</h3>
              <p>The series converges to the average of left and right limits:</p>
              <BlockMath math="S(x_0) = \frac{f(x_0^-) + f(x_0^+)}{2}" />
            </div>
            <div>
              <h3 className="font-semibold">Gibbs Phenomenon:</h3>
              <p>Near discontinuities, the partial sums exhibit overshoot of approximately 9% of the jump discontinuity.</p>
            </div>
          </div>
        </div>

        {/* Example: Square Wave */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Example: Square Wave
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a square wave with amplitude A and period T:
            </p>
            <div className="mt-4">
              <BlockMath math="f(x) = \begin{cases} 
                A & \text{for } -\frac{T}{4} < x < \frac{T}{4} \\
                -A & \text{for } \frac{T}{4} < x < \frac{3T}{4}
              \end{cases}" />
            </div>
            <p className="mt-4">
              The Fourier series is:
            </p>
            <div className="mt-2">
              <BlockMath math="f(x) = \frac{4A}{\pi} \sum_{n=1,3,5,...}^{\infty} \frac{1}{n} \sin\left(\frac{2\pi nx}{T}\right)" />
            </div>
            <p className="mt-4">
              Note: Only odd harmonics are present, and there are no cosine terms due to odd symmetry.
            </p>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Signal Processing:</strong> Analyzing periodic signals and filtering</li>
              <li><strong>Heat Transfer:</strong> Solving partial differential equations</li>
              <li><strong>Vibration Analysis:</strong> Understanding mechanical oscillations</li>
              <li><strong>Electrical Engineering:</strong> AC circuit analysis and power systems</li>
              <li><strong>Image Processing:</strong> Compression and feature extraction</li>
              <li><strong>Music and Acoustics:</strong> Harmonic analysis of musical instruments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
