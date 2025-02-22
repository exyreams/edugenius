"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description A page that displays key formulas in Electromagnetism.
 * @returns {JSX.Element} The rendered React component.
 */
export default function ElectromagnetismFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    { label: "Formula", href: "/physics/formula" },
    {
      label: "Electromagnetism",
      href: "/physics/formula/electromagnetism",
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
          Electromagnetism Formulas
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A comprehensive collection of key formulas in Electromagnetism,
          covering topics from electrostatics to electromagnetic waves.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Theme Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Electrostatics */}
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
            Electrostatics
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
                  Coulomb&#39;s Law
                </h3>
                <BlockMath math="F = k_e \frac{q_1 q_2}{r^2}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="F" /> = Electric force
                  <br />
                  <InlineMath math="k_e" /> = Coulomb&#39;s constant (
                  <InlineMath math="8.9875 \times 10^9 N \cdot m^2/C^2" />)
                  <br />
                  <InlineMath math="q_1" />, <InlineMath math="q_2" /> = Charges
                  <br />
                  <InlineMath math="r" /> = Distance between charges
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
                  Electric Field
                </h3>
                <BlockMath math="\mathbf{E} = \frac{\mathbf{F}}{q}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Electric force
                  <br />
                  <InlineMath math="q" /> = Test charge
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
                  Electric Potential
                </h3>
                <BlockMath math="V = \frac{U}{q}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="V" /> = Electric potential
                  <br />
                  <InlineMath math="U" /> = Electric potential energy
                  <br />
                  <InlineMath math="q" /> = Charge
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
                  Gauss&#39;s Law
                </h3>
                <BlockMath math="\oiint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\epsilon_0}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Phi_E" /> = Electric flux
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
                  <br />
                  <InlineMath math="Q_{\text{enc}}" /> = Enclosed charge
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  (
                  <InlineMath math="8.854 \times 10^{-12} C^2/N \cdot m^2" />)
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
                      ? "text-indigo-600 dark:text-indigo-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Capacitance
                </h3>
                <BlockMath math="C = \frac{Q}{V}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="C" /> = Capacitance
                  <br />
                  <InlineMath math="Q" /> = Charge
                  <br />
                  <InlineMath math="V" /> = Voltage
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Magnetostatics */}
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
            Magnetostatics
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
                  Biot-Savart Law
                </h3>
                <BlockMath math="d\mathbf{B} = \frac{\mu_0}{4\pi} \frac{I \, d\mathbf{l} \times \hat{r}}{r^2}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="d\mathbf{B}" /> = Differential magnetic
                  field
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space (
                  <InlineMath math="4\pi \times 10^{-7} T \cdot m/A" />)
                  <br />
                  <InlineMath math="I" /> = Current
                  <br />
                  <InlineMath math="d\mathbf{l}" /> = Differential length
                  element
                  <br />
                  <InlineMath math="r" /> = Distance from the element
                  <br />
                  <InlineMath math="\hat{r}" /> = Unit vector pointing from the
                  element to the point
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
                  Ampère&#39;s Law
                </h3>
                <BlockMath math="\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enc}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="d\mathbf{l}" /> = Differential length
                  element
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
                  <br />
                  <InlineMath math="I_{\text{enc}}" /> = Enclosed current
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
                  Magnetic Flux
                </h3>
                <BlockMath math="\Phi_B = \int \mathbf{B} \cdot d\mathbf{A}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Phi_B" /> = Magnetic flux
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
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
                  Gauss&#39;s Law for Magnetism
                </h3>
                <BlockMath math="\oiint \mathbf{B} \cdot d\mathbf{A} = 0" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
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
                      ? "text-teal-600 dark:text-teal-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Force on a Moving Charge
                </h3>
                <BlockMath math="\mathbf{F} = q(\mathbf{v} \times \mathbf{B})" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Magnetic force
                  <br />
                  <InlineMath math="q" /> = Charge
                  <br />
                  <InlineMath math="\mathbf{v}" /> = Velocity of the charge
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Electrodynamics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-violet-200 to-fuchsia-200 dark:from-violet-600 dark:to-fuchsia-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Electrodynamics
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
                      ? "text-purple-600 dark:text-purple-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Faraday&#39;s Law of Induction
                </h3>
                <BlockMath math="\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="d\mathbf{l}" /> = Differential length
                  element
                  <br />
                  <InlineMath math="\Phi_B" /> = Magnetic flux
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
                      ? "text-fuchsia-600 dark:text-fuchsia-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Lenz&#39;s Law
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  (Direction of induced current opposes the change in magnetic
                  flux)
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
                      ? "text-pink-600 dark:text-pink-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Ampère-Maxwell&#39;s Law
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300 dark:scrollbar-track-pink-400 dark:scrollbar-thumb-pink-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0\left(I_{\text{enc}} + \epsilon_0\frac{d\Phi_E}{dt}\right)" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="d\mathbf{l}" /> = Differential length
                  element
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
                  <br />
                  <InlineMath math="I_{\text{enc}}" /> = Enclosed current
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  <br />
                  <InlineMath math="\Phi_E" /> = Electric flux
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
                      ? "text-purple-600 dark:text-purple-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Motional EMF
                </h3>
                <BlockMath math="\mathcal{E} = vBL" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathcal{E}" /> = Motional EMF
                  <br />
                  <InlineMath math="v" /> = Velocity of the conductor
                  <br />
                  <InlineMath math="B" /> = Magnetic field
                  <br />
                  <InlineMath math="L" /> = Length of the conductor
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
                      ? "text-fuchsia-600 dark:text-fuchsia-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Inductance
                </h3>
                <BlockMath math="L = \frac{N\Phi_B}{I}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="L" /> = Inductance
                  <br />
                  <InlineMath math="N" /> = Number of turns
                  <br />
                  <InlineMath math="\Phi_B" /> = Magnetic flux
                  <br />
                  <InlineMath math="I" /> = Current
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Electromagnetic Waves */}
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
            Electromagnetic Waves
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
                  Wave Equation for Electric Field
                </h3>
                <BlockMath math="\nabla^2 \mathbf{E} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
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
                      ? "text-green-600 dark:text-green-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Wave Equation for Magnetic Field
                </h3>
                <BlockMath math="\nabla^2 \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  <br />
                  <InlineMath math="t" /> = Time
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
                      ? "text-yellow-600 dark:text-yellow-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Speed of Light
                </h3>
                <BlockMath math="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="c" /> = Speed of light in vacuum
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
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
                      ? "text-lime-600 dark:text-lime-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Poynting Vector
                </h3>
                <BlockMath math="\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{S}" /> = Poynting vector (power per
                  unit area)
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
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
                  Energy Density
                </h3>
                <BlockMath math="u = \frac{1}{2}\left(\epsilon_0 E^2 + \frac{B^2}{\mu_0}\right)" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="u" /> = Energy density
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
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
          Electromagnetism: Unifying the Forces of Nature
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
