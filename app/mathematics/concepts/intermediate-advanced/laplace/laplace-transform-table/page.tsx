"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function LaplaceTransformTable() {
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
      label: "Laplace Transform Table",
      href: "/mathematics/concepts/intermediate-advanced/laplace/laplace-transform-table",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  const basicTransforms = [
    { f: "1", F: "\\frac{1}{s}", condition: "s > 0" },
    { f: "t", F: "\\frac{1}{s^2}", condition: "s > 0" },
    { f: "t^n", F: "\\frac{n!}{s^{n+1}}", condition: "s > 0, n \\in \\mathbb{N}" },
    { f: "e^{at}", F: "\\frac{1}{s-a}", condition: "s > a" },
    { f: "te^{at}", F: "\\frac{1}{(s-a)^2}", condition: "s > a" },
    { f: "t^n e^{at}", F: "\\frac{n!}{(s-a)^{n+1}}", condition: "s > a, n \\in \\mathbb{N}" },
  ];

  const trigTransforms = [
    { f: "\\sin(at)", F: "\\frac{a}{s^2+a^2}", condition: "s > 0" },
    { f: "\\cos(at)", F: "\\frac{s}{s^2+a^2}", condition: "s > 0" },
    { f: "t\\sin(at)", F: "\\frac{2as}{(s^2+a^2)^2}", condition: "s > 0" },
    { f: "t\\cos(at)", F: "\\frac{s^2-a^2}{(s^2+a^2)^2}", condition: "s > 0" },
    { f: "e^{bt}\\sin(at)", F: "\\frac{a}{(s-b)^2+a^2}", condition: "s > b" },
    { f: "e^{bt}\\cos(at)", F: "\\frac{s-b}{(s-b)^2+a^2}", condition: "s > b" },
  ];

  const hyperbolicTransforms = [
    { f: "\\sinh(at)", F: "\\frac{a}{s^2-a^2}", condition: "s > |a|" },
    { f: "\\cosh(at)", F: "\\frac{s}{s^2-a^2}", condition: "s > |a|" },
    { f: "t\\sinh(at)", F: "\\frac{2as}{(s^2-a^2)^2}", condition: "s > |a|" },
    { f: "t\\cosh(at)", F: "\\frac{s^2+a^2}{(s^2-a^2)^2}", condition: "s > |a|" },
  ];

  const specialTransforms = [
    { f: "\\delta(t)", F: "1", condition: "\\text{all } s" },
    { f: "\\delta(t-a)", F: "e^{-as}", condition: "\\text{all } s" },
    { f: "u(t)", F: "\\frac{1}{s}", condition: "s > 0" },
    { f: "u(t-a)", F: "\\frac{e^{-as}}{s}", condition: "s > 0" },
    { f: "\\frac{1}{\\sqrt{\\pi t}}", F: "\\frac{1}{\\sqrt{s}}", condition: "s > 0" },
    { f: "\\frac{2}{\\sqrt{\\pi}}\\sqrt{t}", F: "\\frac{1}{s^{3/2}}", condition: "s > 0" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl`}
        >
          Laplace Transform Table
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Comprehensive reference table of common Laplace transforms and their properties.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Functions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-indigo-300`}
          >
            Basic Functions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left p-3 font-semibold">f(t)</th>
                  <th className="text-left p-3 font-semibold">{"L{f(t)} = F(s)"}</th>
                  <th className="text-left p-3 font-semibold">Condition</th>
                </tr>
              </thead>
              <tbody>
                {basicTransforms.map((transform, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">
                      <InlineMath math={transform.f} />
                    </td>
                    <td className="p-3">
                      <InlineMath math={transform.F} />
                    </td>
                    <td className="p-3 text-sm">
                      <InlineMath math={transform.condition} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trigonometric Functions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            Trigonometric Functions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left p-3 font-semibold">f(t)</th>
                  <th className="text-left p-3 font-semibold">{"L{f(t)} = F(s)"}</th>
                  <th className="text-left p-3 font-semibold">Condition</th>
                </tr>
              </thead>
              <tbody>
                {trigTransforms.map((transform, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">
                      <InlineMath math={transform.f} />
                    </td>
                    <td className="p-3">
                      <InlineMath math={transform.F} />
                    </td>
                    <td className="p-3 text-sm">
                      <InlineMath math={transform.condition} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hyperbolic Functions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-violet-300`}
          >
            Hyperbolic Functions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left p-3 font-semibold">f(t)</th>
                  <th className="text-left p-3 font-semibold">{"L{f(t)} = F(s)"}</th>
                  <th className="text-left p-3 font-semibold">Condition</th>
                </tr>
              </thead>
              <tbody>
                {hyperbolicTransforms.map((transform, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">
                      <InlineMath math={transform.f} />
                    </td>
                    <td className="p-3">
                      <InlineMath math={transform.F} />
                    </td>
                    <td className="p-3 text-sm">
                      <InlineMath math={transform.condition} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Special Functions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-orange-300 dark:to-amber-300`}
          >
            Special Functions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left p-3 font-semibold">f(t)</th>
                  <th className="text-left p-3 font-semibold">{"L{f(t)} = F(s)"}</th>
                  <th className="text-left p-3 font-semibold">Condition</th>
                </tr>
              </thead>
              <tbody>
                {specialTransforms.map((transform, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">
                      <InlineMath math={transform.f} />
                    </td>
                    <td className="p-3">
                      <InlineMath math={transform.F} />
                    </td>
                    <td className="p-3 text-sm">
                      <InlineMath math={transform.condition} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>• δ(t) = Dirac delta function</p>
            <p>• u(t) = Unit step function (Heaviside function)</p>
          </div>
        </div>

        {/* Properties Table */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Transform Properties
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                  <th className="text-left p-3 font-semibold">Property</th>
                  <th className="text-left p-3 font-semibold">Time Domain</th>
                  <th className="text-left p-3 font-semibold">Frequency Domain</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Linearity</td>
                  <td className="p-3">
                    <InlineMath math="af(t) + bg(t)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="aF(s) + bG(s)" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">First Derivative</td>
                  <td className="p-3">
                    <InlineMath math="f'(t)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="sF(s) - f(0)" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Second Derivative</td>
                  <td className="p-3">
                    <InlineMath math="f''(t)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="s^2F(s) - sf(0) - f'(0)" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Integration</td>
                  <td className="p-3">
                    <InlineMath math="\int_0^t f(\tau) d\tau" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="\frac{F(s)}{s}" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Scaling</td>
                  <td className="p-3">
                    <InlineMath math="f(at)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="\frac{1}{a}F\left(\frac{s}{a}\right)" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Time Shifting</td>
                  <td className="p-3">
                    <InlineMath math="f(t-a)u(t-a)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="e^{-as}F(s)" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Frequency Shifting</td>
                  <td className="p-3">
                    <InlineMath math="e^{at}f(t)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="F(s-a)" />
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-3 font-medium">Convolution</td>
                  <td className="p-3">
                    <InlineMath math="f(t) * g(t)" />
                  </td>
                  <td className="p-3">
                    <InlineMath math="F(s) \cdot G(s)" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage Notes */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Usage Notes
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">General Definition:</h3>
              <BlockMath math="L\{f(t)\} = F(s) = \int_0^{\infty} f(t)e^{-st} dt" />
            </div>
            <div>
              <h3 className="font-semibold">Convergence Conditions:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>The integral must converge for Re(s) {">"} σ₀ (abscissa of convergence)</li>
                <li>Function f(t) must be of exponential order</li>
                <li>Function f(t) must be piecewise continuous on [0, ∞)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Common Applications:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Solving linear differential equations with constant coefficients</li>
                <li>Circuit analysis in electrical engineering</li>
                <li>Control system analysis and design</li>
                <li>Signal processing and system analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Inverse Transform:</h3>
              <p>Use partial fractions, convolution theorem, or complex inversion formula:</p>
              <BlockMath math="L^{-1}\{F(s)\} = \frac{1}{2\pi i} \int_{\gamma-i\infty}^{\gamma+i\infty} F(s)e^{st} ds" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
