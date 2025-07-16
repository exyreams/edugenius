"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function LaplaceTransform() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Laplace",
      href: "/mathematics/concepts/intermediate-advanced/laplace",
    },
    {
      label: "Laplace Transform",
      href: "/mathematics/concepts/intermediate-advanced/laplace/laplace-transform",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-indigo-400 md:text-5xl lg:text-6xl`}
        >
          Laplace Transform
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the Laplace transform, a powerful tool for solving differential equations and analyzing linear systems.
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
            Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              The Laplace transform of a function f(t) is defined as:
            </p>
            <BlockMath math="L\{f(t)\} = F(s) = \int_0^{\infty} f(t)e^{-st} dt" />
            <p>where s is a complex variable and the integral converges for Re(s) {">"} σ₀.</p>
            <div className="mt-4 space-y-2">
              <p>• <strong>f(t)</strong> = original function (time domain)</p>
              <p>• <strong>F(s)</strong> = Laplace transform (frequency domain)</p>
              <p>• <strong>s</strong> = complex frequency variable</p>
              <p>• <strong>σ₀</strong> = abscissa of convergence</p>
            </div>
          </div>
        </div>

        {/* Basic Properties */}
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
            Basic Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Linearity:</h3>
              <BlockMath math="L\{af(t) + bg(t)\} = aF(s) + bG(s)" />
            </div>
            <div>
              <h3 className="font-semibold">First Shifting Theorem (s-shifting):</h3>
              <BlockMath math="L\{e^{at}f(t)\} = F(s-a)" />
            </div>
            <div>
              <h3 className="font-semibold">Second Shifting Theorem (t-shifting):</h3>
              <BlockMath math="L\{f(t-a)u(t-a)\} = e^{-as}F(s)" />
              <p>where u(t-a) is the unit step function</p>
            </div>
            <div>
              <h3 className="font-semibold">Scaling:</h3>
              <BlockMath math="L\{f(at)\} = \frac{1}{a}F\left(\frac{s}{a}\right), \quad a > 0" />
            </div>
          </div>
        </div>

        {/* Transform of Derivatives */}
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
            Transform of Derivatives
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">First Derivative:</h3>
              <BlockMath math="L\{f'(t)\} = sF(s) - f(0)" />
            </div>
            <div>
              <h3 className="font-semibold">Second Derivative:</h3>
              <BlockMath math="L\{f''(t)\} = s^2F(s) - sf(0) - f'(0)" />
            </div>
            <div>
              <h3 className="font-semibold">nth Derivative:</h3>
              <BlockMath math="L\{f^{(n)}(t)\} = s^nF(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0)" />
            </div>
            <p className="text-sm italic">
              These properties make Laplace transforms particularly useful for solving differential equations with initial conditions.
            </p>
          </div>
        </div>

        {/* Transform of Integrals */}
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
            Transform of Integrals
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Integration Property:</h3>
              <BlockMath math="L\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s}" />
            </div>
            <div>
              <h3 className="font-semibold">Convolution Theorem:</h3>
              <BlockMath math="L\{f * g\} = F(s) \cdot G(s)" />
              <p>where <InlineMath math="(f * g)(t) = \int_0^t f(\tau)g(t-\tau) d\tau" /> is the convolution</p>
            </div>
          </div>
        </div>

        {/* Common Transforms */}
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
            Common Laplace Transforms
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Basic Functions:</h3>
                <div className="space-y-2 text-sm">
                  <p><InlineMath math="L\{1\} = \frac{1}{s}" /></p>
                  <p><InlineMath math="L\{t\} = \frac{1}{s^2}" /></p>
                  <p><InlineMath math="L\{t^n\} = \frac{n!}{s^{n+1}}" /></p>
                  <p><InlineMath math="L\{e^{at}\} = \frac{1}{s-a}" /></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Trigonometric Functions:</h3>
                <div className="space-y-2 text-sm">
                  <p><InlineMath math="L\{\sin(at)\} = \frac{a}{s^2+a^2}" /></p>
                  <p><InlineMath math="L\{\cos(at)\} = \frac{s}{s^2+a^2}" /></p>
                  <p><InlineMath math="L\{\sinh(at)\} = \frac{a}{s^2-a^2}" /></p>
                  <p><InlineMath math="L\{\cosh(at)\} = \frac{s}{s^2-a^2}" /></p>
                </div>
              </div>
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
              <li><strong>Differential Equations:</strong> Converting ODEs to algebraic equations</li>
              <li><strong>Control Systems:</strong> Transfer function analysis and system stability</li>
              <li><strong>Circuit Analysis:</strong> Solving RLC circuits with initial conditions</li>
              <li><strong>Signal Processing:</strong> Analyzing linear time-invariant systems</li>
              <li><strong>Mechanical Systems:</strong> Vibration analysis and dynamic response</li>
              <li><strong>Heat Transfer:</strong> Solving heat conduction problems</li>
              <li><strong>Probability:</strong> Moment generating functions and reliability analysis</li>
            </ul>
          </div>
        </div>

        {/* Inverse Laplace Transform */}
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
            Inverse Laplace Transform
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              The inverse Laplace transform recovers the original function from its transform:
            </p>
            <BlockMath math="L^{-1}\{F(s)\} = f(t) = \frac{1}{2\pi i} \int_{\gamma-i\infty}^{\gamma+i\infty} F(s)e^{st} ds" />
            <div>
              <h3 className="font-semibold">Common Methods:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Partial fraction decomposition</li>
                <li>Table lookup</li>
                <li>Convolution theorem</li>
                <li>Residue theorem (complex analysis)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Example:</h3>
              <p><InlineMath math="L^{-1}\left\{\frac{1}{s^2+4}\right\} = \frac{1}{2}\sin(2t)" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
