"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function Convolution() {
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
      label: "Convolution",
      href: "/mathematics/concepts/intermediate-advanced/fourier/convolution",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-purple-700 to-violet-800 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-300 dark:to-violet-400 md:text-5xl lg:text-6xl`}
        >
          Convolution
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Understand the mathematical operation that combines two functions to produce a third function.
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
            Convolution Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The convolution of two functions f(t) and g(t) is defined as:
            </p>
            <div className="mt-4">
              <BlockMath math="(f * g)(t) = \int_{-\infty}^{\infty} f(\tau) g(t - \tau) d\tau" />
            </div>
            <p className="mt-4">
              Alternatively, due to commutativity:
            </p>
            <div className="mt-2">
              <BlockMath math="(f * g)(t) = \int_{-\infty}^{\infty} f(t - \tau) g(\tau) d\tau" />
            </div>
          </div>
        </div>

        {/* Discrete Convolution */}
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
            Discrete Convolution
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For discrete signals, convolution is defined as:
            </p>
            <div className="mt-4">
              <BlockMath math="(f * g)[n] = \sum_{m=-\infty}^{\infty} f[m] g[n - m]" />
            </div>
            <p className="mt-4">
              For finite sequences of length N and M:
            </p>
            <div className="mt-2">
              <BlockMath math="(f * g)[n] = \sum_{m=0}^{M-1} f[m] g[n - m]" />
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
            Properties of Convolution
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Commutativity:</h3>
              <BlockMath math="f * g = g * f" />
            </div>
            <div>
              <h3 className="font-semibold">Associativity:</h3>
              <BlockMath math="(f * g) * h = f * (g * h)" />
            </div>
            <div>
              <h3 className="font-semibold">Distributivity:</h3>
              <BlockMath math="f * (g + h) = f * g + f * h" />
            </div>
            <div>
              <h3 className="font-semibold">Identity Element:</h3>
              <BlockMath math="f * \delta = f" />
              <p>where δ is the Dirac delta function</p>
            </div>
            <div>
              <h3 className="font-semibold">Scaling:</h3>
              <BlockMath math="(af) * g = a(f * g) = f * (ag)" />
            </div>
          </div>
        </div>

        {/* Convolution Theorem */}
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
            Convolution Theorem
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Fourier Transform of a convolution is the product of the individual Fourier Transforms:
            </p>
            <div className="mt-4">
              <BlockMath math="\mathcal{F}\{f * g\} = \mathcal{F}\{f\} \cdot \mathcal{F}\{g\}" />
            </div>
            <p className="mt-4">
              Conversely, the Fourier Transform of a product is the convolution of the individual transforms:
            </p>
            <div className="mt-2">
              <BlockMath math="\mathcal{F}\{f \cdot g\} = \frac{1}{2\pi} \mathcal{F}\{f\} * \mathcal{F}\{g\}" />
            </div>
            <p className="mt-4">
              This theorem makes convolution computationally efficient using FFT.
            </p>
          </div>
        </div>

        {/* Geometric Interpretation */}
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
            Geometric Interpretation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Convolution can be understood as a process involving four steps:
            </p>
            <ol className="mt-4 list-decimal list-inside space-y-2">
              <li><strong>Reflection:</strong> Flip g(τ) to get g(-τ)</li>
              <li><strong>Shifting:</strong> Shift by t to get g(t-τ)</li>
              <li><strong>Multiplication:</strong> Multiply f(τ) and g(t-τ)</li>
              <li><strong>Integration:</strong> Integrate the product over all τ</li>
            </ol>
            <p className="mt-4">
              This process is often described as "flip, shift, multiply, and integrate."
            </p>
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
              <li><strong>Signal Processing:</strong> Filtering, system response analysis</li>
              <li><strong>Image Processing:</strong> Blurring, edge detection, feature extraction</li>
              <li><strong>Probability:</strong> Sum of independent random variables</li>
              <li><strong>Physics:</strong> Green's functions, impulse response</li>
              <li><strong>Engineering:</strong> System analysis, control theory</li>
              <li><strong>Computer Vision:</strong> Template matching, object detection</li>
              <li><strong>Audio Processing:</strong> Reverb, echo effects</li>
            </ul>
          </div>
        </div>

        {/* Example */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-indigo-300 dark:to-purple-300`}
          >
            Example: Exponential Functions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Consider the convolution of two exponential functions:
            </p>
            <div className="mt-4">
              <BlockMath math="f(t) = e^{-at}u(t), \quad g(t) = e^{-bt}u(t)" />
            </div>
            <p className="mt-4">
              where u(t) is the unit step function. The convolution is:
            </p>
            <div className="mt-2">
              <BlockMath math="(f * g)(t) = \frac{e^{-at} - e^{-bt}}{b - a} u(t) \quad (a \neq b)" />
            </div>
            <p className="mt-4">
              For the special case where a = b:
            </p>
            <div className="mt-2">
              <BlockMath math="(f * f)(t) = te^{-at}u(t)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
