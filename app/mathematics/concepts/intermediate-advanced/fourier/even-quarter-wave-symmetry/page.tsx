"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function EvenQuarterWaveSymmetry() {
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
      label: "Even Quarter-Wave Symmetry",
      href: "/mathematics/concepts/intermediate-advanced/fourier/even-quarter-wave-symmetry",
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
          Even Quarter-Wave Symmetry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the special case of Fourier series with even quarter-wave symmetry and its simplified coefficients.
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
            Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A function f(t) has even quarter-wave symmetry if it satisfies both:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">1. Even Symmetry:</h3>
                <BlockMath math="f(-t) = f(t)" />
                <p>The function is symmetric about the y-axis.</p>
              </div>
              <div>
                <h3 className="font-semibold">2. Quarter-Wave Symmetry:</h3>
                <BlockMath math="f(t + \frac{T}{2}) = -f(t)" />
                <p>The function has half-period antisymmetry, where T is the period.</p>
              </div>
            </div>
            <p className="mt-4">
              This combination results in a very specific and simplified Fourier series representation.
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
              For a function with even quarter-wave symmetry, the Fourier series simplifies to:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <BlockMath math="f(t) = \sum_{n=1,3,5,...}^{\infty} a_n \cos(n\omega_0 t)" />
                <p>Only odd-indexed cosine terms remain!</p>
              </div>
              <div>
                <h3 className="font-semibold">Coefficients:</h3>
                <BlockMath math="a_0 = 0" />
                <BlockMath math="a_n = 0 \text{ for even } n" />
                <BlockMath math="b_n = 0 \text{ for all } n" />
                <BlockMath math="a_n = \frac{8}{T} \int_0^{T/4} f(t) \cos(n\omega_0 t) dt \text{ for odd } n" />
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
              <BlockMath math="a_n = \frac{8}{T} \int_0^{T/4} f(t) \cos(n\omega_0 t) dt" />
            </div>
            <div>
              <h3 className="font-semibold">No DC Component:</h3>
              <BlockMath math="a_0 = 0" />
              <p>The average value of the function is zero.</p>
            </div>
            <div>
              <h3 className="font-semibold">No Sine Terms:</h3>
              <p>All sine coefficients are zero due to even symmetry.</p>
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
            Common Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">1. Rectified Cosine Wave:</h3>
              <BlockMath math="f(t) = |\cos(\omega_0 t)|" />
              <p>Fourier series:</p>
              <BlockMath math="f(t) = \frac{2}{\pi} - \frac{4}{\pi} \sum_{n=2,4,6,...}^{\infty} \frac{\cos(n\omega_0 t)}{n^2 - 1}" />
            </div>
            <div>
              <h3 className="font-semibold">2. Square Wave with Even Quarter-Wave Symmetry:</h3>
              <BlockMath math="f(t) = \begin{cases} 
                1 & \text{for } 0 < t < \frac{T}{4} \\
                -1 & \text{for } \frac{T}{4} < t < \frac{T}{2}
              \end{cases}" />
              <p>Fourier series:</p>
              <BlockMath math="f(t) = \frac{4}{\pi} \sum_{n=1,5,9,...}^{\infty} \frac{\cos(n\omega_0 t)}{n} - \frac{4}{\pi} \sum_{n=3,7,11,...}^{\infty} \frac{\cos(n\omega_0 t)}{n}" />
            </div>
          </div>
        </div>

        {/* Identification Steps */}
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
            How to Identify Even Quarter-Wave Symmetry
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ol className="space-y-3 list-decimal list-inside">
              <li>
                <strong>Check Even Symmetry:</strong> Verify that f(-t) = f(t)
              </li>
              <li>
                <strong>Check Quarter-Wave Symmetry:</strong> Verify that f(t + T/2) = -f(t)
              </li>
              <li>
                <strong>Visual Inspection:</strong> The function should be symmetric about the y-axis and have alternating positive/negative half-periods
              </li>
              <li>
                <strong>Zero Average:</strong> The function should have zero DC component
              </li>
            </ol>
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
              <li><strong>Power Electronics:</strong> Analysis of rectified AC waveforms</li>
              <li><strong>Signal Processing:</strong> Efficient representation of symmetric signals</li>
              <li><strong>Vibration Analysis:</strong> Symmetric vibration patterns</li>
              <li><strong>Audio Processing:</strong> Analysis of certain musical waveforms</li>
              <li><strong>Control Systems:</strong> Symmetric control signals</li>
              <li><strong>Communications:</strong> Modulation schemes with specific symmetries</li>
            </ul>
          </div>
        </div>

        {/* Computational Advantages */}
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
            Computational Advantages
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Reduced Integration Domain:</h3>
              <p>Integration only over [0, T/4] instead of full period</p>
            </div>
            <div>
              <h3 className="font-semibold">Fewer Non-Zero Coefficients:</h3>
              <p>Only odd-indexed cosine terms need to be calculated</p>
            </div>
            <div>
              <h3 className="font-semibold">Simplified Analysis:</h3>
              <p>No need to compute sine coefficients or even cosine coefficients</p>
            </div>
            <div>
              <h3 className="font-semibold">Memory Efficiency:</h3>
              <p>Approximately 75% reduction in storage requirements for coefficients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}