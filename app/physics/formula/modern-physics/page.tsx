"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function ModernPhysicsFormulas() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Modern Physics Formulas",
      href: "/physics/formulas/modern-physics",
    },
  ];
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Modern Physics Formulas
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A concise collection of essential formulas in Modern Physics, covering
          topics from relativity to quantum mechanics and nuclear physics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Theme Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Special Relativity */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-100 dark:to-purple-800 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Special Relativity
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Time Dilation
                </h3>
                <BlockMath math="\Delta t = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}}" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-blue-600 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Length Contraction
                </h3>
                <BlockMath math="L = L_0\sqrt{1 - v^2/c^2}" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-sky-600 dark:text-sky-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Mass-Energy Equivalence
                </h3>
                <BlockMath math="E = mc^2" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Relativistic Momentum
                </h3>
                <BlockMath math="p = \frac{m_0v}{\sqrt{1 - v^2/c^2}}" />
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Mechanics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Quantum Mechanics
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Planck&#39;s Equation
                </h3>
                <BlockMath math="E = hf" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  de Broglie Wavelength
                </h3>
                <BlockMath math="\lambda = \frac{h}{p}" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-green-600 dark:text-green-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Heisenberg Uncertainty Principle
                </h3>
                <BlockMath math="\Delta x \Delta p \geq \frac{h}{4\pi}" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Schrödinger Equation
                </h3>
                <BlockMath math="i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi" />
              </div>
            </div>
          </div>
        </div>

        {/* Atomic Physics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-lime-200 dark:from-yellow-600 dark:to-lime-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-yellow-300 dark:to-green-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Atomic Physics
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-lime-600 dark:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Bohr Radius
                </h3>
                <BlockMath math="a_0 = \frac{4\pi\epsilon_0\hbar^2}{m_e e^2}" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-green-600 dark:text-green-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Rydberg Formula
                </h3>
                <BlockMath math="\frac{1}{\lambda} = R_H\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)" />
              </div>
            </div>
          </div>
        </div>

        {/* Nuclear Physics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-rose-200 dark:from-orange-600 dark:to-rose-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-200 dark:to-red-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Nuclear Physics
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-orange-600 dark:text-orange-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Radioactive Decay Law
                </h3>
                <BlockMath math="N(t) = N_0 e^{-\lambda t}" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-red-600 dark:text-red-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Binding Energy
                </h3>
                <BlockMath math="E_b = \left[Zm_p + Nm_n - M(^{A}_{Z}X)\right]c^2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Half-Life
                </h3>
                <BlockMath math="t_{1/2} = \frac{\ln 2}{\lambda}" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-red-600 dark:text-red-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Q-Value
                </h3>
                <BlockMath math="Q = (M_i - M_f)c^2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Exploring the Quantum Realm and Beyond
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
