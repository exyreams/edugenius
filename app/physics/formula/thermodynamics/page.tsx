"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function ThermodynamicsFormulas() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Thermodynamics Formulas",
      href: "/physics/formulas/thermodynamics",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Basic Concepts & Definitions
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
                  Ideal Gas Law
                </h3>
                <BlockMath math="PV = nRT" />
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
                  Work Done by a Gas
                </h3>
                <BlockMath math="W = \int_{V_1}^{V_2} P dV" />
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
                  Specific Heat Capacity
                </h3>
                <BlockMath math="Q = mc\Delta T" />
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
                  Molar Heat Capacity
                </h3>
                <BlockMath math="Q = nC\Delta T" />
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
                  First Law (Internal Energy)
                </h3>
                <BlockMath math="\Delta U = Q - W" />
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
                  Second Law (Entropy Change)
                </h3>
                <BlockMath math="\Delta S \geq \int \frac{dQ}{T}" />
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
                  Third Law
                </h3>
                <BlockMath math="\lim_{T \to 0} S = 0" />
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
                  Efficiency of a Heat Engine
                </h3>
                <BlockMath math="\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}" />
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
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Isothermal Process
                </h3>
                <BlockMath math="PV = \text{constant}" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-fuchsia-600 dark:text-fuchsia-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Adiabatic Process
                </h3>
                <BlockMath math="PV^\gamma = \text{constant}" />
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
                      ? "text-pink-600 dark:text-pink-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Isobaric Process
                </h3>
                <BlockMath math="W = P\Delta V" />
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Isochoric Process
                </h3>
                <BlockMath math="W = 0" />
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
                  Carnot Efficiency
                </h3>
                <BlockMath math="\eta_{Carnot} = 1 - \frac{T_C}{T_H}" />
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
                  Coefficient of Performance (Refrigerators)
                </h3>
                <BlockMath math="\text{COP} = \frac{Q_C}{W}" />
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
