"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function ElectromagnetismFormulas() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Electromagnetism Formulas",
      href: "/physics/formulas/electromagnetism",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Electrostatics
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
                  Coulomb&#39;s Law
                </h3>
                <BlockMath math="F = k_e \frac{q_1 q_2}{r^2}" />
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
                  Electric Field
                </h3>
                <BlockMath math="\mathbf{E} = \frac{\mathbf{F}}{q}" />
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
                  Electric Potential
                </h3>
                <BlockMath math="V = \frac{U}{q}" />
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
                  Gauss&#39;s Law
                </h3>
                <BlockMath math="\oiint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\epsilon_0}" />
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
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Capacitance
                </h3>
                <BlockMath math="C = \frac{Q}{V}" />
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
                  Biot-Savart Law
                </h3>
                <BlockMath math="d\mathbf{B} = \frac{\mu_0}{4\pi} \frac{I \, d\mathbf{l} \times \hat{r}}{r^2}" />
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
                  Ampère&#39;s Law
                </h3>
                <BlockMath math="\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\text{enc}}" />
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
                  Magnetic Flux
                </h3>
                <BlockMath math="\Phi_B = \int \mathbf{B} \cdot d\mathbf{A}" />
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
                  Gauss&#39;s Law for Magnetism
                </h3>
                <BlockMath math="\oiint \mathbf{B} \cdot d\mathbf{A} = 0" />
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
                      ? "text-teal-600 dark:text-teal-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Force on a Moving Charge
                </h3>
                <BlockMath math="\mathbf{F} = q(\mathbf{v} \times \mathbf{B})" />
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
                  Faraday&#39;s Law of Induction
                </h3>
                <BlockMath math="\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}" />
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
                  Lenz&#39;s Law
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  (Direction of induced current opposes the change in magnetic
                  flux)
                </p>
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
                  Ampère-Maxwell&#39;s Law
                </h3>
                <BlockMath math="\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0\left(I_{\text{enc}} + \epsilon_0\frac{d\Phi_E}{dt}\right)" />
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
                  Motional EMF
                </h3>
                <BlockMath math="\mathcal{E} = vBL" />
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
                      ? "text-fuchsia-600 dark:text-fuchsia-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Inductance
                </h3>
                <BlockMath math="L = \frac{N\Phi_B}{I}" />
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
                  Wave Equation for Electric Field
                </h3>
                <BlockMath math="\nabla^2 \mathbf{E} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}" />
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
                  Wave Equation for Magnetic Field
                </h3>
                <BlockMath math="\nabla^2 \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}" />
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
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Speed of Light
                </h3>
                <BlockMath math="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}" />
              </div>
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
                  Poynting Vector
                </h3>
                <BlockMath math="\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}" />
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
                  Energy Density
                </h3>
                <BlockMath math="u = \frac{1}{2}\left(\epsilon_0 E^2 + \frac{B^2}{\mu_0}\right)" />
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
