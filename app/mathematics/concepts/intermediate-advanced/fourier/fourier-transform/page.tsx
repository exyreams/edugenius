"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function FourierTransform() {
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
      label: "Fourier Transform",
      href: "/mathematics/concepts/intermediate-advanced/fourier/fourier-transform",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-teal-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-teal-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Fourier Transform
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Extend Fourier analysis to non-periodic functions and explore frequency domain representations.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Continuous Fourier Transform */}
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
            Continuous Fourier Transform
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The Fourier Transform decomposes a function into its frequency components:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p><strong>Forward Transform:</strong></p>
                <BlockMath math="F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt" />
              </div>
              <div>
                <p><strong>Inverse Transform:</strong></p>
                <BlockMath math="f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{i\omega t} d\omega" />
              </div>
            </div>
            <p className="mt-4">
              Where <InlineMath math="F(\omega)" /> is the frequency domain representation of <InlineMath math="f(t)" />.
            </p>
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
              <h3 className="font-semibold">Linearity:</h3>
              <BlockMath math="\mathcal{F}\{af(t) + bg(t)\} = aF(\omega) + bG(\omega)" />
            </div>
            <div>
              <h3 className="font-semibold">Time Shifting:</h3>
              <BlockMath math="\mathcal{F}\{f(t - t_0)\} = F(\omega)e^{-i\omega t_0}" />
            </div>
            <div>
              <h3 className="font-semibold">Frequency Shifting:</h3>
              <BlockMath math="\mathcal{F}\{f(t)e^{i\omega_0 t}\} = F(\omega - \omega_0)" />
            </div>
            <div>
              <h3 className="font-semibold">Scaling:</h3>
              <BlockMath math="\mathcal{F}\{f(at)\} = \frac{1}{|a|}F\left(\frac{\omega}{a}\right)" />
            </div>
            <div>
              <h3 className="font-semibold">Differentiation:</h3>
              <BlockMath math="\mathcal{F}\left\{\frac{df}{dt}\right\} = i\omega F(\omega)" />
            </div>
          </div>
        </div>

        {/* Convolution Theorem */}
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
            Convolution Theorem
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              One of the most important properties of the Fourier Transform:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p><strong>Time Domain Convolution:</strong></p>
                <BlockMath math="\mathcal{F}\{f * g\} = F(\omega) \cdot G(\omega)" />
              </div>
              <div>
                <p><strong>Frequency Domain Convolution:</strong></p>
                <BlockMath math="\mathcal{F}\{f \cdot g\} = \frac{1}{2\pi}F * G" />
              </div>
            </div>
            <p className="mt-4">
              Where <InlineMath math="*" /> denotes convolution: <InlineMath math="(f * g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau)d\tau" />
            </p>
          </div>
        </div>

        {/* Common Transform Pairs */}
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
            Common Transform Pairs
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Time Domain f(t)</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Frequency Domain F(ω)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">δ(t)</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">1</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">2πδ(ω)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">e^(-at)u(t), a {">"} 0</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">1/(a + iω)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">e^(-a|t|), a {">"} 0</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">2a/(a² + ω²)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">rect(t/T)</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">T sinc(ωT/2)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Parseval's Theorem */}
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
            Parseval's Theorem
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Energy conservation between time and frequency domains:
            </p>
            <div className="mt-4">
              <BlockMath math="\int_{-\infty}^{\infty} |f(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |F(\omega)|^2 d\omega" />
            </div>
            <p className="mt-4">
              This theorem states that the total energy of a signal is the same whether calculated in the time domain or frequency domain.
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
              <li><strong>Signal Processing:</strong> Filtering, modulation, and spectral analysis</li>
              <li><strong>Image Processing:</strong> Edge detection, compression, and enhancement</li>
              <li><strong>Communications:</strong> Modulation schemes and channel analysis</li>
              <li><strong>Physics:</strong> Quantum mechanics and wave analysis</li>
              <li><strong>Engineering:</strong> System analysis and control theory</li>
              <li><strong>Medical Imaging:</strong> MRI and CT scan reconstruction</li>
              <li><strong>Audio Processing:</strong> Music analysis and noise reduction</li>
            </ul>
          </div>
        </div>

        {/* Discrete Fourier Transform */}
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
            Discrete Fourier Transform (DFT)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For digital signal processing, we use the discrete version:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p><strong>Forward DFT:</strong></p>
                <BlockMath math="X[k] = \sum_{n=0}^{N-1} x[n] e^{-i2\pi kn/N}" />
              </div>
              <div>
                <p><strong>Inverse DFT:</strong></p>
                <BlockMath math="x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k] e^{i2\pi kn/N}" />
              </div>
            </div>
            <p className="mt-4">
              The Fast Fourier Transform (FFT) is an efficient algorithm to compute the DFT with O(N log N) complexity instead of O(N²).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
