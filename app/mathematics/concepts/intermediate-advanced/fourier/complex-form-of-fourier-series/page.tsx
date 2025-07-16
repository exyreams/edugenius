"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function ComplexFormOfFourierSeries() {
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
      label: "Complex Form of Fourier Series",
      href: "/mathematics/concepts/intermediate-advanced/fourier/complex-form-of-fourier-series",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Complex Form of Fourier Series
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the exponential representation of Fourier series using complex numbers and Euler's formula.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Complex Fourier Series Formula */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-cyan-300 dark:to-blue-300`}
          >
            Complex Fourier Series
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The complex form of Fourier series represents a periodic function using complex exponentials:
            </p>
            <div className="mt-4">
              <BlockMath math="f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\omega_0 x}" />
            </div>
            <p className="mt-4">
              Where the complex coefficients are given by:
            </p>
            <div className="mt-2">
              <BlockMath math="c_n = \frac{1}{T} \int_{-T/2}^{T/2} f(x) e^{-in\omega_0 x} dx" />
            </div>
          </div>
        </div>

        {/* Relationship to Trigonometric Form */}
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
            Relationship to Trigonometric Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The complex coefficients relate to the trigonometric coefficients as:
            </p>
            <div className="mt-4 space-y-2">
              <BlockMath math="c_0 = \frac{a_0}{2}" />
              <BlockMath math="c_n = \frac{a_n - ib_n}{2} \quad (n > 0)" />
              <BlockMath math="c_{-n} = \frac{a_n + ib_n}{2} \quad (n > 0)" />
            </div>
            <p className="mt-4">
              Where <InlineMath math="a_n" /> and <InlineMath math="b_n" /> are the cosine and sine coefficients.
            </p>
          </div>
        </div>

        {/* Euler's Formula */}
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
            Euler's Formula Foundation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The complex form is based on Euler's formula:
            </p>
            <div className="mt-4">
              <BlockMath math="e^{i\theta} = \cos\theta + i\sin\theta" />
            </div>
            <p className="mt-4">
              This allows us to express trigonometric functions as:
            </p>
            <div className="mt-2 space-y-2">
              <BlockMath math="\cos(n\omega_0 x) = \frac{e^{in\omega_0 x} + e^{-in\omega_0 x}}{2}" />
              <BlockMath math="\sin(n\omega_0 x) = \frac{e^{in\omega_0 x} - e^{-in\omega_0 x}}{2i}" />
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Properties and Advantages
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Symmetry Property:</h3>
              <p>For real functions: <InlineMath math="c_{-n} = \overline{c_n}" /> (complex conjugate)</p>
            </div>
            <div>
              <h3 className="font-semibold">Parseval's Theorem:</h3>
              <BlockMath math="\frac{1}{T} \int_{-T/2}^{T/2} |f(x)|^2 dx = \sum_{n=-\infty}^{\infty} |c_n|^2" />
            </div>
            <div>
              <h3 className="font-semibold">Advantages:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>More compact notation</li>
                <li>Easier manipulation in frequency domain</li>
                <li>Natural extension to Fourier transforms</li>
                <li>Simplified convolution operations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Example */}
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
              For a square wave with period T and amplitude A:
            </p>
            <div className="mt-4">
              <BlockMath math="c_n = \begin{cases} 
                \frac{A}{2} & \text{if } n = 0 \\
                \frac{A}{in\pi}(1 - (-1)^n) & \text{if } n \neq 0
              \end{cases}" />
            </div>
            <p className="mt-4">
              This gives us the complex Fourier series:
            </p>
            <div className="mt-2">
              <BlockMath math="f(x) = \frac{A}{2} + \sum_{n \text{ odd}} \frac{2A}{in\pi} e^{in\omega_0 x}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
