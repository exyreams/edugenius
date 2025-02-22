"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description A page that displays key formulas in Modern Physics.
 * @returns {JSX.Element} The rendered React component.
 */
export default function ModernPhysicsFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    { label: "Formula", href: "/physics/formula" },
    {
      label: "Modern Physics",
      href: "/physics/formula/modern-physics",
    },
  ];

  /**
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State hook to manage the color theme of the formulas.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 py-8 sm:px-6 lg:px-8">
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
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-200 dark:to-purple-200 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Special Relativity
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Time Dilation
                </h3>
                <BlockMath math="\Delta t = \frac{\Delta t_0}{\sqrt{1 - v^2/c^2}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Delta t" /> = Relativistic time interval
                  <br />
                  <InlineMath math="\Delta t_0" /> = Proper time interval
                  <br />
                  <InlineMath math="v" /> = Relative velocity
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-blue-600 dark:text-blue-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Length Contraction
                </h3>
                <BlockMath math="L = L_0\sqrt{1 - v^2/c^2}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="L" /> = Relativistic length
                  <br />
                  <InlineMath math="L_0" /> = Proper length
                  <br />
                  <InlineMath math="v" /> = Relative velocity
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-sky-600 dark:text-sky-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Mass-Energy Equivalence
                </h3>
                <BlockMath math="E = mc^2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="E" /> = Energy
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Relativistic Momentum
                </h3>
                <BlockMath math="p = \frac{m_0v}{\sqrt{1 - v^2/c^2}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="p" /> = Relativistic momentum
                  <br />
                  <InlineMath math="m_0" /> = Rest mass
                  <br />
                  <InlineMath math="v" /> = Relative velocity
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-teal-600 dark:text-teal-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Planck&#39;s Equation
                </h3>
                <BlockMath math="E = hf" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="E" /> = Energy
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                  <br />
                  <InlineMath math="f" /> = Frequency
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  de Broglie Wavelength
                </h3>
                <BlockMath math="\lambda = \frac{h}{p}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\lambda" /> = de Broglie wavelength
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                  <br />
                  <InlineMath math="p" /> = Momentum
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-green-600 dark:text-green-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Heisenberg Uncertainty Principle
                </h3>
                <BlockMath math="\Delta x \Delta p \geq \frac{h}{4\pi}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Delta x" /> = Uncertainty in position
                  <br />
                  <InlineMath math="\Delta p" /> = Uncertainty in momentum
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Schrödinger Equation
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-cyan-200 scrollbar-thumb-cyan-300 dark:scrollbar-track-cyan-400 dark:scrollbar-thumb-cyan-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="i" /> = Imaginary unit
                  <br />
                  <InlineMath math="\hbar" /> = Reduced Planck&#39;s constant
                  <br />
                  <InlineMath math="\frac{\partial}{\partial t}" /> = Partial
                  derivative with respect to time
                  <br />
                  <InlineMath math="\Psi" /> = Wave function
                  <br />
                  <InlineMath math="\hat{H}" /> = Hamiltonian operator
                </p>
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-lime-600 dark:text-lime-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Bohr Radius
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-lime-200 scrollbar-thumb-lime-300 dark:scrollbar-track-lime-400 dark:scrollbar-thumb-lime-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="a_0 = \frac{4\pi\epsilon_0\hbar^2}{m_e e^2}" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="a_0" /> = Bohr radius
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  <br />
                  <InlineMath math="\hbar" /> = Reduced Planck&#39;s constant
                  <br />
                  <InlineMath math="m_e" /> = Electron mass
                  <br />
                  <InlineMath math="e" /> = Elementary charge
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-green-600 dark:text-green-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Rydberg Formula
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-400 dark:scrollbar-thumb-green-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{1}{\lambda} = R_H\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength of emitted light
                  <br />
                  <InlineMath math="R_H" /> = Rydberg constant
                  <br />
                  <InlineMath math="n_1" />, <InlineMath math="n_2" /> =
                  Principal quantum numbers
                </p>
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
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-orange-600 dark:text-orange-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Radioactive Decay Law
                </h3>
                <BlockMath math="N(t) = N_0 e^{-\lambda t}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="N(t)" /> = Number of nuclei at time t
                  <br />
                  <InlineMath math="N_0" /> = Initial number of nuclei
                  <br />
                  <InlineMath math="\lambda" /> = Decay constant
                  <br />
                  <InlineMath math="t" /> = Time
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-red-600 dark:text-red-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Binding Energy
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-400 dark:scrollbar-thumb-red-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="E_b = \left[Zm_p + Nm_n - M(^{A}_{Z}X)\right]c^2" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="E_b" /> = Binding energy
                  <br />
                  <InlineMath math="Z" /> = Atomic number
                  <br />
                  <InlineMath math="m_p" /> = Proton mass
                  <br />
                  <InlineMath math="N" /> = Neutron number
                  <br />
                  <InlineMath math="m_n" /> = Neutron mass
                  <br />
                  <InlineMath math="M(^{A}_{Z}X)" /> = Mass of the nuclide
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Half-Life
                </h3>
                <BlockMath math="t_{1/2} = \frac{\ln 2}{\lambda}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="t_{1/2}" /> = Half-life
                  <br />
                  <InlineMath math="\lambda" /> = Decay constant
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-red-600 dark:text-red-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Q-Value
                </h3>
                <BlockMath math="Q = (M_i - M_f)c^2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Q-value (energy released)
                  <br />
                  <InlineMath math="M_i" /> = Initial mass
                  <br />
                  <InlineMath math="M_f" /> = Final mass
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
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
