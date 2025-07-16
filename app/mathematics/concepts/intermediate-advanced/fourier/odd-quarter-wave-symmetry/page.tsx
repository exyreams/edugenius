"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function OddQuarterWaveSymmetry() {
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
      label: "Odd Quarter-Wave Symmetry",
      href: "/mathematics/concepts/intermediate-advanced/fourier/odd-quarter-wave-symmetry",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent dark:from-amber-300 dark:to-orange-400 md:text-5xl lg:text-6xl`}
        >
          Odd Quarter-Wave Symmetry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the special case of Fourier series with odd quarter-wave symmetry and its unique sine-only representation.
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
              ? "bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-orange-300`}
          >
            Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A function f(t) has odd quarter-wave symmetry if it satisfies both:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">1. Odd Symmetry:</h3>
                <BlockMath math="f(-t) = -f(t)" />
                <p>The function is antisymmetric about the origin.</p>
              </div>
              <div>
                <h3 className="font-semibold">2. Quarter-Wave Symmetry:</h3>
                <BlockMath math="f(t + \frac{T}{2}) = -f(t)" />
                <p>The function has half-period antisymmetry, where T is the period.</p>
              </div>
            </div>
            <p className="mt-4">
              This combination results in a Fourier series containing only odd-indexed sine terms.
            </p>
          </div>
        </div>

        {/* Fourier Series */}
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
            Fourier Series Representation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a function with odd quarter-wave symmetry, the Fourier series simplifies to:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <BlockMath math="f(t) = \sum_{n=1,3,5,...}^{\infty} b_n \sin(n\omega_0 t)" />
                <p>Only odd-indexed sine terms remain!</p>
              </div>
              <div>
                <h3 className="font-semibold">Coefficients:</h3>
                <BlockMath math="a_0 = 0" />
                <BlockMath math="a_n = 0 \text{ for all } n" />
                <BlockMath math="b_n = 0 \text{ for even } n" />
                <BlockMath math="b_n = \frac{8}{T} \int_0^{T/4} f(t) \sin(n\omega_0 t) dt \text{ for odd } n" />
              </div>
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Simplified Integration:</h3>
              <p>Due to symmetry, integration is only needed over T/4 instead of the full period.</p>
              <BlockMath math="b_n = \frac{8}{T} \int_0^{T/4} f(t) \sin(n\omega_0 t) dt" />
            </div>
            <div>
              <h3 className="font-semibold">No DC Component:</h3>
              <BlockMath math="a_0 = 0" />
              <p>The average value of the function is zero (due to odd symmetry).</p>
            </div>
            <div>
              <h3 className="font-semibold">No Cosine Terms:</h3>
              <p>All cosine coefficients are zero due to odd symmetry.</p>
            </div>
            <div>
              <h3 className="font-semibold">Only Odd Harmonics:</h3>
              <p>Only odd multiples of the fundamental frequency appear.</p>
            </div>
          </div>
        </div>

        {/* Examples */}
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
            Common Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">1. Square Wave with Odd Quarter-Wave Symmetry:</h3>
              <BlockMath math="f(t) = \begin{cases} 
                1 & \text{for } 0 < t < \frac{T}{4} \\
                1 & \text{for } \frac{T}{4} < t < \frac{T}{2} \\
                -1 & \text{for } \frac{T}{2} < t < \frac{3T}{4} \\
                -1 & \text{for } \frac{3T}{4} < t < T
              \end{cases}" />
              <p>Fourier series:</p>
              <BlockMath math="f(t) = \frac{4}{\pi} \sum_{n=1,3,5,...}^{\infty} \frac{\sin(n\omega_0 t)}{n}" />
            </div>
            <div>
              <h3 className="font-semibold">2. Triangular Wave with Odd Quarter-Wave Symmetry:</h3>
              <p>A triangular wave that is odd and has quarter-wave symmetry:</p>
              <BlockMath math="f(t) = \frac{8}{\pi^2} \sum_{n=1,3,5,...}^{\infty} \frac{(-1)^{(n-1)/2}}{n^2} \sin(n\omega_0 t)" />
            </div>
            <div>
              <h3 className="font-semibold">3. Sawtooth Wave (Modified):</h3>
              <p>A sawtooth wave modified to have odd quarter-wave symmetry:</p>
              <BlockMath math="f(t) = \frac{2}{\pi} \sum_{n=1,3,5,...}^{\infty} \frac{(-1)^{(n-1)/2}}{n} \sin(n\omega_0 t)" />
            </div>
          </div>
        </div>

        {/* Identification Steps */}
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
            How to Identify Odd Quarter-Wave Symmetry
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ol className="space-y-3 list-decimal list-inside">
              <li>
                <strong>Check Odd Symmetry:</strong> Verify that f(-t) = -f(t)
              </li>
              <li>
                <strong>Check Quarter-Wave Symmetry:</strong> Verify that f(t + T/2) = -f(t)
              </li>
              <li>
                <strong>Visual Inspection:</strong> The function should be antisymmetric about the origin and have alternating positive/negative half-periods
              </li>
              <li>
                <strong>Zero Average:</strong> The function should have zero DC component
              </li>
              <li>
                <strong>Origin Behavior:</strong> f(0) = 0 (consequence of odd symmetry)
              </li>
            </ol>
          </div>
        </div>

        {/* Comparison with Other Symmetries */}
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
            Comparison with Other Symmetries
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Symmetry Type</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Fourier Series</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Non-zero Terms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Even</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Cosines only</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">All cosine terms</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Odd</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Sines only</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">All sine terms</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Even Quarter-Wave</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Odd cosines only</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">cos(ω₀t), cos(3ω₀t), cos(5ω₀t)...</td>
                  </tr>
                  <tr className="bg-yellow-100 dark:bg-yellow-900">
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><strong>Odd Quarter-Wave</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><strong>Odd sines only</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2"><strong>sin(ω₀t), sin(3ω₀t), sin(5ω₀t)...</strong></td>
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
              ? "bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-indigo-300 dark:to-blue-300`}
          >
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Power Electronics:</strong> Analysis of certain switching patterns</li>
              <li><strong>Motor Control:</strong> PWM signals with specific symmetries</li>
              <li><strong>Signal Processing:</strong> Efficient representation of antisymmetric signals</li>
              <li><strong>Audio Processing:</strong> Analysis of certain musical waveforms</li>
              <li><strong>Communications:</strong> Modulation schemes with odd symmetry</li>
              <li><strong>Vibration Analysis:</strong> Antisymmetric vibration modes</li>
              <li><strong>Control Systems:</strong> Analysis of bipolar control signals</li>
            </ul>
          </div>
        </div>

        {/* Computational Advantages */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-amber-300`}
          >
            Computational Advantages
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Reduced Integration Domain:</h3>
              <p>Integration only over [0, T/4] instead of full period</p>
            </div>
            <div>
              <h3 className="font-semibold">Fewer Non-Zero Coefficients:</h3>
              <p>Only odd-indexed sine terms need to be calculated</p>
            </div>
            <div>
              <h3 className="font-semibold">Simplified Analysis:</h3>
              <p>No need to compute cosine coefficients or even sine coefficients</p>
            </div>
            <div>
              <h3 className="font-semibold">Memory Efficiency:</h3>
              <p>Approximately 75% reduction in storage requirements for coefficients</p>
            </div>
            <div>
              <h3 className="font-semibold">Fast Convergence:</h3>
              <p>Often provides rapid convergence for signals with this symmetry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}