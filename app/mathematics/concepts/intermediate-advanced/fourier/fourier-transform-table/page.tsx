"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function FourierTransformTable() {
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
      label: "Fourier Transform Table",
      href: "/mathematics/concepts/intermediate-advanced/fourier/fourier-transform-table",
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
          Fourier Transform Table
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Comprehensive reference of common Fourier transform pairs and their properties for signal analysis.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Definition */}
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
            Fourier Transform Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Forward Transform:</h3>
                <BlockMath math="F(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt" />
              </div>
              <div>
                <h3 className="font-semibold">Inverse Transform:</h3>
                <BlockMath math="f(t) = \mathcal{F}^{-1}\{F(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega" />
              </div>
            </div>
          </div>
        </div>

        {/* Basic Functions */}
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
            Basic Function Pairs
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Domain f(t)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Frequency Domain F(ω)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\delta(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="1" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="1" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="2\pi\delta(\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\delta(t - a)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{-i\omega a}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{i\omega_0 t}" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="2\pi\delta(\omega - \omega_0)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\cos(\omega_0 t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\pi[\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\sin(\omega_0 t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="i\pi[\delta(\omega + \omega_0) - \delta(\omega - \omega_0)]" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Exponential and Polynomial Functions */}
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
            Exponential and Polynomial Pairs
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Domain f(t)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Frequency Domain F(ω)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{-at}u(t), \quad a > 0" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{1}{a + i\omega}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="te^{-at}u(t), \quad a > 0" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{1}{(a + i\omega)^2}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="t^n e^{-at}u(t), \quad a > 0" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{n!}{(a + i\omega)^{n+1}}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{-a|t|}, \quad a > 0" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{2a}{a^2 + \omega^2}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\text{sgn}(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{2}{i\omega}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="u(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{1}{i\omega} + \pi\delta(\omega)" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Gaussian and Rectangular Functions */}
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
            Gaussian and Rectangular Pairs
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Domain f(t)</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Frequency Domain F(ω)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{-\frac{t^2}{2\sigma^2}}" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\sigma\sqrt{2\pi} e^{-\frac{\sigma^2\omega^2}{2}}" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\text{rect}\left(\frac{t}{T}\right)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="T \text{sinc}\left(\frac{\omega T}{2\pi}\right)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\text{sinc}(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\pi \text{rect}\left(\frac{\omega}{2\pi}\right)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\Lambda\left(\frac{t}{T}\right)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="T \text{sinc}^2\left(\frac{\omega T}{2\pi}\right)" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Note:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><InlineMath math="\text{rect}(t)" /> is the rectangular function: 1 for |t| ≤ 1/2, 0 otherwise</li>
                <li><InlineMath math="\text{sinc}(t) = \frac{\sin(\pi t)}{\pi t}" /></li>
                <li><InlineMath math="\Lambda(t)" /> is the triangular function</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Transform Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Property</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Domain</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-3 py-2">Frequency Domain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Linearity</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="af(t) + bg(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="aF(\omega) + bG(\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Shift</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="f(t - a)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{-i\omega a}F(\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Frequency Shift</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="e^{i\omega_0 t}f(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="F(\omega - \omega_0)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Scaling</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="f(at)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{1}{|a|}F\left(\frac{\omega}{a}\right)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Time Reversal</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="f(-t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="F(-\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Differentiation</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{df(t)}{dt}" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="i\omega F(\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Integration</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\int_{-\infty}^{t} f(\tau) d\tau" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{F(\omega)}{i\omega} + \pi F(0)\delta(\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Convolution</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="f(t) * g(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="F(\omega)G(\omega)" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">Multiplication</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="f(t)g(t)" />
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">
                      <InlineMath math="\frac{1}{2\pi}F(\omega) * G(\omega)" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Symmetry Properties */}
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
            Symmetry Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Real and Even Function:</h3>
                <p>If f(t) is real and even, then F(ω) is real and even</p>
                <BlockMath math="f(t) = f(-t) \text{ and } f(t) \in \mathbb{R} \Rightarrow F(\omega) = F(-\omega) \text{ and } F(\omega) \in \mathbb{R}" />
              </div>
              <div>
                <h3 className="font-semibold">Real and Odd Function:</h3>
                <p>If f(t) is real and odd, then F(ω) is purely imaginary and odd</p>
                <BlockMath math="f(t) = -f(-t) \text{ and } f(t) \in \mathbb{R} \Rightarrow F(\omega) = -F(-\omega) \text{ and } F(\omega) \in i\mathbb{R}" />
              </div>
              <div>
                <h3 className="font-semibold">Real Function:</h3>
                <p>If f(t) is real, then F(ω) has Hermitian symmetry</p>
                <BlockMath math="f(t) \in \mathbb{R} \Rightarrow F(\omega) = F^*(-\omega)" />
              </div>
            </div>
          </div>
        </div>

        {/* Parseval's Theorem */}
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
            Energy and Power Relations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Parseval's Theorem:</h3>
              <BlockMath math="\int_{-\infty}^{\infty} |f(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |F(\omega)|^2 d\omega" />
              <p>The total energy is preserved in both domains.</p>
            </div>
            <div>
              <h3 className="font-semibold">Cross-Correlation:</h3>
              <BlockMath math="\int_{-\infty}^{\infty} f(t)g^*(t) dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega)G^*(\omega) d\omega" />
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Signal Processing:</strong> Frequency analysis and filtering</li>
              <li><strong>Communications:</strong> Modulation and demodulation</li>
              <li><strong>Image Processing:</strong> 2D Fourier transforms for image analysis</li>
              <li><strong>Control Systems:</strong> Frequency response analysis</li>
              <li><strong>Physics:</strong> Wave analysis and quantum mechanics</li>
              <li><strong>Engineering:</strong> System analysis and design</li>
              <li><strong>Mathematics:</strong> Solving differential equations</li>
              <li><strong>Audio Processing:</strong> Spectral analysis and synthesis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}