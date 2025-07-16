"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function UnitImpulseFunction() {
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
      label: "Unit Impulse Function",
      href: "/mathematics/concepts/intermediate-advanced/fourier/unit-impulse-function",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-fuchsia-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-fuchsia-300 dark:to-pink-400 md:text-5xl lg:text-6xl`}
        >
          Unit Impulse Function
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the Dirac delta function and its fundamental role in signal processing and system analysis.
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
              ? "bg-gradient-to-br from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-fuchsia-300 dark:to-pink-300`}
          >
            Dirac Delta Function
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The unit impulse function, also known as the Dirac delta function δ(t), is defined by:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <BlockMath math="\delta(t) = \begin{cases} 
                  \infty & \text{if } t = 0 \\
                  0 & \text{if } t \neq 0
                \end{cases}" />
              </div>
              <div>
                <p><strong>Unit Area Property:</strong></p>
                <BlockMath math="\int_{-\infty}^{\infty} \delta(t) dt = 1" />
              </div>
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Sifting Property:</h3>
              <BlockMath math="\int_{-\infty}^{\infty} f(t) \delta(t - a) dt = f(a)" />
              <p>The delta function "sifts out" the value of f(t) at t = a.</p>
            </div>
            <div>
              <h3 className="font-semibold">Scaling Property:</h3>
              <BlockMath math="\delta(at) = \frac{1}{|a|} \delta(t)" />
            </div>
            <div>
              <h3 className="font-semibold">Even Function:</h3>
              <BlockMath math="\delta(-t) = \delta(t)" />
            </div>
            <div>
              <h3 className="font-semibold">Multiplication:</h3>
              <BlockMath math="f(t) \delta(t - a) = f(a) \delta(t - a)" />
            </div>
          </div>
        </div>

        {/* Fourier Transform */}
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
            Fourier Transform of Delta Function
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Fourier transform of the delta function is particularly important:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Transform of δ(t):</h3>
                <BlockMath math="\mathcal{F}\{\delta(t)\} = 1" />
                <p>The spectrum is flat across all frequencies.</p>
              </div>
              <div>
                <h3 className="font-semibold">Transform of δ(t - a):</h3>
                <BlockMath math="\mathcal{F}\{\delta(t - a)\} = e^{-i\omega a}" />
              </div>
              <div>
                <h3 className="font-semibold">Inverse Transform:</h3>
                <BlockMath math="\mathcal{F}^{-1}\{1\} = \delta(t)" />
                <BlockMath math="\mathcal{F}^{-1}\{\delta(\omega)\} = \frac{1}{2\pi}" />
              </div>
            </div>
          </div>
        </div>

        {/* Approximations */}
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
            Practical Approximations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Rectangular Pulse:</h3>
              <BlockMath math="\delta_\epsilon(t) = \begin{cases} 
                \frac{1}{\epsilon} & \text{if } |t| < \frac{\epsilon}{2} \\
                0 & \text{otherwise}
              \end{cases}" />
              <p>As ε → 0, this approaches δ(t).</p>
            </div>
            <div>
              <h3 className="font-semibold">Gaussian Approximation:</h3>
              <BlockMath math="\delta_\sigma(t) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{t^2}{2\sigma^2}}" />
              <p>As σ → 0, this approaches δ(t).</p>
            </div>
            <div>
              <h3 className="font-semibold">Sinc Function:</h3>
              <BlockMath math="\delta_a(t) = \frac{a}{\pi} \frac{\sin(at)}{at}" />
              <p>As a → ∞, this approaches δ(t).</p>
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>System Analysis:</strong> Impulse response characterization</li>
              <li><strong>Signal Processing:</strong> Sampling theory and reconstruction</li>
              <li><strong>Control Systems:</strong> Transfer function analysis</li>
              <li><strong>Physics:</strong> Point charges and instantaneous forces</li>
              <li><strong>Probability:</strong> Discrete probability distributions</li>
              <li><strong>Digital Signal Processing:</strong> Discrete-time impulse response</li>
            </ul>
          </div>
        </div>

        {/* System Response */}
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
            Impulse Response
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The impulse response h(t) of a system is its output when the input is δ(t):
            </p>
            <div className="mt-4">
              <BlockMath math="h(t) = \mathcal{L}^{-1}\{H(s)\}" />
            </div>
            <p className="mt-4">
              Any system output can be found using convolution:
            </p>
            <div className="mt-2">
              <BlockMath math="y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau = x(t) * h(t)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
