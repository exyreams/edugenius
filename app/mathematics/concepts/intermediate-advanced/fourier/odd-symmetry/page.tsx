"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function OddSymmetry() {
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
      label: "Odd Symmetry",
      href: "/mathematics/concepts/intermediate-advanced/fourier/odd-symmetry",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-violet-300 dark:to-purple-400 md:text-5xl lg:text-6xl`}
        >
          Odd Symmetry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Discover odd functions and their unique characteristics in Fourier analysis.
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
              ? "bg-gradient-to-br from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-violet-300 dark:to-purple-300`}
          >
            Odd Function Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A function f(t) is odd if it satisfies:
            </p>
            <div className="mt-4">
              <BlockMath math="f(-t) = -f(t)" />
            </div>
            <p className="mt-4">
              This means the function has rotational symmetry of 180° about the origin. If you rotate the graph 180° around the origin, it looks the same.
            </p>
          </div>
        </div>

        {/* Fourier Series for Odd Functions */}
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
            Fourier Series of Odd Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For odd functions, the Fourier series contains only sine terms:
            </p>
            <div className="mt-4">
              <BlockMath math="f(t) = \sum_{n=1}^{\infty} b_n \sin\left(\frac{2\pi nt}{T}\right)" />
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">DC Component:</h3>
                <BlockMath math="a_0 = 0" />
                <p>The average value is zero because odd functions are symmetric about the origin.</p>
              </div>
              <div>
                <h3 className="font-semibold">Cosine Coefficients:</h3>
                <BlockMath math="a_n = 0 \quad \text{for all } n \geq 1" />
                <p>All cosine coefficients are zero because cosine is an even function.</p>
              </div>
              <div>
                <h3 className="font-semibold">Sine Coefficients:</h3>
                <BlockMath math="b_n = \frac{4}{T} \int_0^{T/2} f(t) \sin\left(\frac{2\pi nt}{T}\right) dt" />
                <p>Only need to integrate over half the period due to symmetry.</p>
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
            Examples of Odd Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">1. Sine Function:</h3>
              <BlockMath math="f(t) = \sin(t)" />
              <p>The sine function is inherently odd: sin(-t) = -sin(t)</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Odd Powers:</h3>
              <BlockMath math="f(t) = t, \quad f(t) = t^3, \quad f(t) = t^{2n+1}" />
              <p>All odd powers of t are odd functions.</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Square Wave (Odd):</h3>
              <BlockMath math="f(t) = \begin{cases} 
                1 & \text{for } 0 < t < \frac{T}{2} \\
                -1 & \text{for } -\frac{T}{2} < t < 0
              \end{cases}" />
              <p>An antisymmetric square wave centered at the origin.</p>
            </div>
            <div>
              <h3 className="font-semibold">4. Sawtooth Wave (Odd):</h3>
              <BlockMath math="f(t) = \frac{2t}{T} \quad \text{for } -\frac{T}{2} < t < \frac{T}{2}" />
              <p>A linear function passing through the origin with odd symmetry.</p>
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
            Properties of Odd Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Algebraic Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Sum of odd functions is odd</li>
                <li>Product of two odd functions is even</li>
                <li>Odd function × even function = odd function</li>
                <li>Derivative of odd function is even</li>
                <li>All odd functions pass through the origin: f(0) = 0</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Integration Properties:</h3>
              <BlockMath math="\int_{-a}^{a} f(t) dt = 0" />
              <p>Integration of odd functions over symmetric intervals equals zero.</p>
            </div>
            <div>
              <h3 className="font-semibold">Fourier Transform:</h3>
              <p>The Fourier transform of an odd function is purely imaginary and odd.</p>
            </div>
          </div>
        </div>

        {/* Comparison with Even Functions */}
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
            Odd vs Even Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Property</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Odd Functions</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Even Functions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Symmetry</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">f(-t) = -f(t)</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">f(-t) = f(t)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Fourier Series</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Only sine terms</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Only cosine terms</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Origin</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Always passes through (0,0)</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Symmetric about y-axis</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Integration</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">∫₋ₐᵃ f(t)dt = 0</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">∫₋ₐᵃ f(t)dt = 2∫₀ᵃ f(t)dt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Signal Processing:</strong> Antisymmetric filters and phase relationships</li>
              <li><strong>Physics:</strong> Velocity functions and antisymmetric potentials</li>
              <li><strong>Engineering:</strong> AC analysis and alternating phenomena</li>
              <li><strong>Mathematics:</strong> Integration techniques and series analysis</li>
              <li><strong>Electronics:</strong> Differential amplifiers and balanced circuits</li>
              <li><strong>Mechanics:</strong> Oscillatory motion and restoring forces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
