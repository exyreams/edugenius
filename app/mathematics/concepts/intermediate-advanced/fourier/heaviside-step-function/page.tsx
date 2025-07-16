"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function HeavisideStepFunction() {
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
      label: "Heaviside Step Function",
      href: "/mathematics/concepts/intermediate-advanced/fourier/heaviside-step-function",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl`}
        >
          Heaviside Step Function
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the unit step function and its fundamental role in signal processing and system analysis.
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
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-emerald-300 dark:to-teal-300`}
          >
            Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Heaviside step function, also known as the unit step function H(t) or u(t), is defined as:
            </p>
            <div className="mt-4">
              <BlockMath math="H(t) = u(t) = \begin{cases} 
                0 & \text{if } t < 0 \\
                1 & \text{if } t \geq 0
              \end{cases}" />
            </div>
            <p className="mt-4">
              Sometimes the function is defined with H(0) = 1/2, but the most common convention is H(0) = 1.
            </p>
          </div>
        </div>

        {/* Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-blue-300 dark:to-indigo-300`}
          >
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Shifted Step Function:</h3>
              <BlockMath math="H(t - a) = \begin{cases} 
                0 & \text{if } t < a \\
                1 & \text{if } t \geq a
              \end{cases}" />
              <p>This represents a step that occurs at t = a.</p>
            </div>
            <div>
              <h3 className="font-semibold">Relationship with Dirac Delta:</h3>
              <BlockMath math="\frac{dH(t)}{dt} = \delta(t)" />
              <p>The derivative of the step function is the Dirac delta function.</p>
            </div>
            <div>
              <h3 className="font-semibold">Integration Property:</h3>
              <BlockMath math="H(t) = \int_{-\infty}^{t} \delta(\tau) d\tau" />
            </div>
            <div>
              <h3 className="font-semibold">Multiplication Property:</h3>
              <BlockMath math="f(t) \cdot H(t) = \begin{cases} 
                0 & \text{if } t < 0 \\
                f(t) & \text{if } t \geq 0
              \end{cases}" />
            </div>
          </div>
        </div>

        {/* Fourier Transform */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-purple-300 dark:to-violet-300`}
          >
            Fourier Transform
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Fourier transform of the Heaviside step function is:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <BlockMath math="\mathcal{F}\{H(t)\} = \frac{1}{i\omega} + \pi\delta(\omega)" />
                <p>This can also be written as:</p>
                <BlockMath math="\mathcal{F}\{H(t)\} = \frac{1}{2\pi}\left[\frac{1}{i\omega} + \pi\delta(\omega)\right]" />
              </div>
              <div>
                <h3 className="font-semibold">Alternative Form:</h3>
                <BlockMath math="\mathcal{F}\{H(t)\} = \pi\delta(\omega) + \frac{1}{i\omega}" />
                <p>Where the first term represents the DC component and the second represents the frequency response.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Laplace Transform */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-green-300 dark:to-emerald-300`}
          >
            Laplace Transform
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Laplace transform of the Heaviside step function is much simpler:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <BlockMath math="\mathcal{L}\{H(t)\} = \frac{1}{s}" />
                <p>For the shifted step function:</p>
                <BlockMath math="\mathcal{L}\{H(t - a)\} = \frac{e^{-as}}{s}" />
              </div>
              <div>
                <h3 className="font-semibold">Useful Identity:</h3>
                <BlockMath math="\mathcal{L}\{f(t)H(t - a)\} = e^{-as}\mathcal{L}\{f(t + a)\}" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-orange-300 dark:to-amber-300`}
          >
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Signal Processing:</strong> Modeling sudden changes or switching events</li>
              <li><strong>Control Systems:</strong> Step response analysis</li>
              <li><strong>Circuit Analysis:</strong> Switching circuits and transient analysis</li>
              <li><strong>Probability:</strong> Cumulative distribution functions</li>
              <li><strong>Physics:</strong> Modeling instantaneous changes in physical systems</li>
              <li><strong>Economics:</strong> Modeling policy changes or market shocks</li>
            </ul>
          </div>
        </div>

        {/* Signal Representation */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-rose-300 dark:to-pink-300`}
          >
            Signal Representation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Rectangular Pulse:</h3>
              <BlockMath math="\text{rect}(t) = H(t + \frac{1}{2}) - H(t - \frac{1}{2})" />
              <p>A pulse from t = -1/2 to t = 1/2.</p>
            </div>
            <div>
              <h3 className="font-semibold">Causal Signal:</h3>
              <BlockMath math="f_{\text{causal}}(t) = f(t) \cdot H(t)" />
              <p>Makes any signal causal by setting it to zero for t {"<"} 0.</p>
            </div>
            <div>
              <h3 className="font-semibold">Windowing:</h3>
              <BlockMath math="f_{\text{windowed}}(t) = f(t) \cdot [H(t - a) - H(t - b)]" />
              <p>Extracts the portion of f(t) between t = a and t = b.</p>
            </div>
          </div>
        </div>

        {/* Approximations */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-teal-300 dark:to-cyan-300`}
          >
            Smooth Approximations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Sigmoid Function:</h3>
              <BlockMath math="H_\alpha(t) = \frac{1}{1 + e^{-\alpha t}}" />
              <p>As α → ∞, this approaches H(t).</p>
            </div>
            <div>
              <h3 className="font-semibold">Error Function:</h3>
              <BlockMath math="H_\sigma(t) = \frac{1}{2}\left[1 + \text{erf}\left(\frac{t}{\sigma\sqrt{2}}\right)\right]" />
              <p>As σ → 0, this approaches H(t).</p>
            </div>
            <div>
              <h3 className="font-semibold">Arctangent:</h3>
              <BlockMath math="H_k(t) = \frac{1}{2} + \frac{1}{\pi}\arctan(kt)" />
              <p>As k → ∞, this approaches H(t).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
