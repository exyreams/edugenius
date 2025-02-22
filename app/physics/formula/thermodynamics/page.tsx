"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description A page that displays key formulas in Thermodynamics.
 * @returns {JSX.Element} The rendered React component.
 */
export default function ThermodynamicsFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    { label: "Formula", href: "/physics/formula" },
    {
      label: "Thermodynamics",
      href: "/physics/formula/thermodynamics",
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
          Thermodynamics Formulas
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A comprehensive collection of key formulas in Thermodynamics, covering
          topics from basic thermodynamic properties to the laws of
          thermodynamics and their applications.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Theme Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Basic Concepts & Definitions */}
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
            Basic Concepts & Definitions
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
                  Ideal Gas Law
                </h3>
                <BlockMath math="PV = nRT" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="V" /> = Volume
                  <br />
                  <InlineMath math="n" /> = Number of moles
                  <br />
                  <InlineMath math="R" /> = Ideal gas constant
                  <br />
                  <InlineMath math="T" /> = Temperature
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
                  Work Done by a Gas
                </h3>
                <BlockMath math="W = \int_{V_1}^{V_2} P dV" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="W" /> = Work done
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="V_1" /> = Initial volume
                  <br />
                  <InlineMath math="V_2" /> = Final volume
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
                  Specific Heat Capacity
                </h3>
                <BlockMath math="Q = mc\Delta T" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Heat transferred
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="c" /> = Specific heat capacity
                  <br />
                  <InlineMath math="\Delta T" /> = Change in temperature
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
                  Molar Heat Capacity
                </h3>
                <BlockMath math="Q = nC\Delta T" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Heat transferred
                  <br />
                  <InlineMath math="n" /> = Number of moles
                  <br />
                  <InlineMath math="C" /> = Molar heat capacity
                  <br />
                  <InlineMath math="\Delta T" /> = Change in temperature
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Laws of Thermodynamics */}
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
            Laws of Thermodynamics
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
                  First Law (Internal Energy)
                </h3>
                <BlockMath math="\Delta U = Q - W" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Delta U" /> = Change in internal energy
                  <br />
                  <InlineMath math="Q" /> = Heat added to the system
                  <br />
                  <InlineMath math="W" /> = Work done by the system
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
                  Second Law (Entropy Change)
                </h3>
                <BlockMath math="\Delta S \geq \int \frac{dQ}{T}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Delta S" /> = Change in entropy
                  <br />
                  <InlineMath math="dQ" /> = Infinitesimal heat transfer
                  <br />
                  <InlineMath math="T" /> = Absolute temperature
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
                  Third Law
                </h3>
                <BlockMath math="\lim_{T \to 0} S = 0" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="S" /> = Entropy
                  <br />
                  <InlineMath math="T" /> = Absolute temperature
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
                  Efficiency of a Heat Engine
                </h3>
                <BlockMath math="\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\eta" /> = Efficiency
                  <br />
                  <InlineMath math="W" /> = Work done by the engine
                  <br />
                  <InlineMath math="Q_H" /> = Heat absorbed from the hot
                  reservoir
                  <br />
                  <InlineMath math="Q_C" /> = Heat rejected to the cold
                  reservoir
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thermodynamic Processes */}
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
            Thermodynamic Processes
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
                  Isothermal Process
                </h3>
                <BlockMath math="PV = \text{constant}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="V" /> = Volume
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
                  Adiabatic Process
                </h3>
                <BlockMath math="PV^\gamma = \text{constant}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="V" /> = Volume
                  <br />
                  <InlineMath math="\gamma" /> = Heat capacity ratio
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
                  Isobaric Process
                </h3>
                <BlockMath math="W = P\Delta V" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="W" /> = Work done
                  <br />
                  <InlineMath math="P" /> = Constant pressure
                  <br />
                  <InlineMath math="\Delta V" /> = Change in volume
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
                  Isochoric Process
                </h3>
                <BlockMath math="W = 0" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="W" /> = Work done (zero in isochoric
                  process)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carnot Cycle & Heat Engines */}
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
            Carnot Cycle & Heat Engines
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
                  Carnot Efficiency
                </h3>
                <BlockMath math="\eta_{Carnot} = 1 - \frac{T_C}{T_H}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\eta_{Carnot}" /> = Carnot efficiency
                  <br />
                  <InlineMath math="T_C" /> = Absolute temperature of the cold
                  reservoir
                  <br />
                  <InlineMath math="T_H" /> = Absolute temperature of the hot
                  reservoir
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
                  Coefficient of Performance (Refrigerators)
                </h3>
                <BlockMath math="\text{COP} = \frac{Q_C}{W}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\text{COP}" /> = Coefficient of performance
                  <br />
                  <InlineMath math="Q_C" /> = Heat extracted from the cold
                  reservoir
                  <br />
                  <InlineMath math="W" /> = Work input
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
          Harnessing the Power of Heat and Energy
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
