"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function FourierSineAndCosineTransform() {
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
      label: "Fourier Sine and Cosine Transform",
      href: "/mathematics/concepts/intermediate-advanced/fourier/fourier-sine-and-cosine-transform",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Fourier Sine and Cosine Transforms
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore specialized Fourier transforms for even and odd functions with specific boundary conditions.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Fourier Cosine Transform */}
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
            Fourier Cosine Transform
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Fourier Cosine Transform is used for even functions defined on [0, ∞):
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Forward Transform:</h3>
                <BlockMath math="F_c(\omega) = \sqrt{\frac{2}{\pi}} \int_0^{\infty} f(t) \cos(\omega t) dt" />
              </div>
              <div>
                <h3 className="font-semibold">Inverse Transform:</h3>
                <BlockMath math="f(t) = \sqrt{\frac{2}{\pi}} \int_0^{\infty} F_c(\omega) \cos(\omega t) d\omega" />
              </div>
            </div>
            <p className="mt-4">
              This transform is particularly useful for problems with even symmetry or Neumann boundary conditions.
            </p>
          </div>
        </div>

        {/* Fourier Sine Transform */}
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
            Fourier Sine Transform
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Fourier Sine Transform is used for odd functions defined on [0, ∞):
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Forward Transform:</h3>
                <BlockMath math="F_s(\omega) = \sqrt{\frac{2}{\pi}} \int_0^{\infty} f(t) \sin(\omega t) dt" />
              </div>
              <div>
                <h3 className="font-semibold">Inverse Transform:</h3>
                <BlockMath math="f(t) = \sqrt{\frac{2}{\pi}} \int_0^{\infty} F_s(\omega) \sin(\omega t) d\omega" />
              </div>
            </div>
            <p className="mt-4">
              This transform is particularly useful for problems with odd symmetry or Dirichlet boundary conditions.
            </p>
          </div>
        </div>

        {/* Properties */}
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
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Linearity:</h3>
              <BlockMath math="\mathcal{F}_c\{af(t) + bg(t)\} = aF_c(\omega) + bG_c(\omega)" />
              <BlockMath math="\mathcal{F}_s\{af(t) + bg(t)\} = aF_s(\omega) + bG_s(\omega)" />
            </div>
            <div>
              <h3 className="font-semibold">Scaling:</h3>
              <BlockMath math="\mathcal{F}_c\{f(at)\} = \frac{1}{a}F_c\left(\frac{\omega}{a}\right)" />
              <BlockMath math="\mathcal{F}_s\{f(at)\} = \frac{1}{a}F_s\left(\frac{\omega}{a}\right)" />
            </div>
            <div>
              <h3 className="font-semibold">Derivatives:</h3>
              <BlockMath math="\mathcal{F}_c\{f'(t)\} = \omega F_s(\omega) - \sqrt{\frac{2}{\pi}}f(0)" />
              <BlockMath math="\mathcal{F}_s\{f'(t)\} = -\omega F_c(\omega)" />
            </div>
          </div>
        </div>

        {/* Transform Pairs */}
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
            Common Transform Pairs
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Cosine Transform Pairs:</h3>
                <div className="mt-2 space-y-2">
                  <p>• <InlineMath math="e^{-at} \leftrightarrow \sqrt{\frac{2}{\pi}} \frac{a}{a^2 + \omega^2}" /></p>
                  <p>• <InlineMath math="\cos(at) \leftrightarrow \sqrt{\frac{\pi}{2}} [\delta(\omega - a) + \delta(\omega + a)]" /></p>
                  <p>• <InlineMath math="1 \text{ for } 0 < t < a, 0 \text{ otherwise} \leftrightarrow \sqrt{\frac{2}{\pi}} \frac{\sin(a\omega)}{\omega}" /></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Sine Transform Pairs:</h3>
                <div className="mt-2 space-y-2">
                  <p>• <InlineMath math="te^{-at} \leftrightarrow \sqrt{\frac{2}{\pi}} \frac{2a\omega}{(a^2 + \omega^2)^2}" /></p>
                  <p>• <InlineMath math="\sin(at) \leftrightarrow \sqrt{\frac{\pi}{2}} [\delta(\omega - a) - \delta(\omega + a)]" /></p>
                  <p>• <InlineMath math="t \text{ for } 0 < t < a, 0 \text{ otherwise} \leftrightarrow \sqrt{\frac{2}{\pi}} \frac{a\omega\cos(a\omega) - \sin(a\omega)}{\omega^2}" /></p>
                </div>
              </div>
            </div>
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
              <li><strong>Heat Conduction:</strong> Solving heat equation with specific boundary conditions</li>
              <li><strong>Wave Equations:</strong> Vibrating strings and membranes</li>
              <li><strong>Quantum Mechanics:</strong> Wave functions in infinite potential wells</li>
              <li><strong>Signal Processing:</strong> Analysis of signals with specific symmetries</li>
              <li><strong>Image Processing:</strong> Discrete cosine transform (DCT) for compression</li>
              <li><strong>Structural Analysis:</strong> Vibration modes in mechanical systems</li>
            </ul>
          </div>
        </div>

        {/* Boundary Value Problems */}
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
            Boundary Value Problems
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Cosine Transform (Neumann Conditions):</h3>
              <p>Use when the derivative at the boundary is specified:</p>
              <BlockMath math="\frac{\partial u}{\partial x}\bigg|_{x=0} = 0" />
              <p>Example: Insulated boundary in heat conduction</p>
            </div>
            <div>
              <h3 className="font-semibold">Sine Transform (Dirichlet Conditions):</h3>
              <p>Use when the function value at the boundary is specified:</p>
              <BlockMath math="u(0,t) = 0" />
              <p>Example: Fixed temperature or displacement at boundary</p>
            </div>
          </div>
        </div>

        {/* Example Problem */}
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
            Example: Heat Equation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Consider the heat equation on a semi-infinite rod:
            </p>
            <div className="mt-4">
              <BlockMath math="\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}, \quad x > 0, t > 0" />
            </div>
            <p className="mt-4">
              With boundary condition u(0,t) = 0 and initial condition u(x,0) = f(x):
            </p>
            <div className="mt-2">
              <BlockMath math="u(x,t) = \sqrt{\frac{2}{\pi}} \int_0^{\infty} F_s(\omega) e^{-k\omega^2 t} \sin(\omega x) d\omega" />
            </div>
            <p className="mt-2">
              Where <InlineMath math="F_s(\omega)" /> is the sine transform of f(x).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
