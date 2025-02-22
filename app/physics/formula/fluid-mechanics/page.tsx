"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description A page that displays key formulas in Fluid Mechanics.
 * @returns {JSX.Element} The rendered React component.
 */
export default function FluidMechanicsFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    { label: "Formula", href: "/physics/formula" },
    {
      label: "Fluid Mechanics",
      href: "/physics/formula/fluid-mechanics",
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
          Fluid Mechanics Formulas
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A comprehensive collection of key formulas in Fluid Mechanics,
          covering topics from fluid statics to fluid dynamics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Theme Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Fluid Properties */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-200 dark:to-purple-200 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Fluid Properties
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
                  Density
                </h3>
                <BlockMath math="\rho = \frac{m}{V}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="m" /> = Mass
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
                      ? "text-blue-600 dark:text-blue-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Specific Weight
                </h3>
                <BlockMath math="\gamma = \rho g" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\gamma" /> = Specific weight
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
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
                  Specific Gravity
                </h3>
                <BlockMath math="SG = \frac{\rho}{\rho_{water}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="SG" /> = Specific gravity
                  <br />
                  <InlineMath math="\rho" /> = Density of the substance
                  <br />
                  <InlineMath math="\rho_{water}" /> = Density of water
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
                  Viscosity
                </h3>
                <BlockMath math="\tau = \mu \frac{du}{dy}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\tau" /> = Shear stress
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity
                  <br />
                  <InlineMath math="\frac{du}{dy}" /> = Velocity gradient
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fluid Statics */}
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
            Fluid Statics
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
                  Hydrostatic Pressure
                </h3>
                <BlockMath math="p = \rho g h" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="p" /> = Pressure
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
                  <br />
                  <InlineMath math="h" /> = Depth
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
                  Pressure Force on a Submerged Surface
                </h3>
                <BlockMath math="F_p = p_{cg} A" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="F_p" /> = Pressure force
                  <br />
                  <InlineMath math="p_{cg}" /> = Pressure at the centroid
                  <br />
                  <InlineMath math="A" /> = Area
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
                  Buoyant Force
                </h3>
                <BlockMath math="F_B = \rho_f V_{sub} g" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="F_B" /> = Buoyant force
                  <br />
                  <InlineMath math="\rho_f" /> = Density of the fluid
                  <br />
                  <InlineMath math="V_{sub}" /> = Submerged volume
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
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
                  Manometer Equation
                </h3>
                <BlockMath math="p_1 + \gamma z_1 = p_2 + \gamma z_2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="p_1" />, <InlineMath math="p_2" /> =
                  Pressures at points 1 and 2
                  <br />
                  <InlineMath math="\gamma" /> = Specific weight
                  <br />
                  <InlineMath math="z_1" />, <InlineMath math="z_2" /> =
                  Elevations at points 1 and 2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fluid Dynamics */}
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
            Fluid Dynamics
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
                  Mass Flow Rate
                </h3>
                <BlockMath math="\dot{m} = \rho A V" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\dot{m}" /> = Mass flow rate
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="A" /> = Cross-sectional area
                  <br />
                  <InlineMath math="V" /> = Velocity
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
                  Volume Flow Rate
                </h3>
                <BlockMath math="Q = AV" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Volume flow rate
                  <br />
                  <InlineMath math="A" /> = Cross-sectional area
                  <br />
                  <InlineMath math="V" /> = Velocity
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
                  Bernoulli&#39;s Equation
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-400 dark:scrollbar-thumb-purple-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="p + \frac{1}{2}\rho V^2 + \rho g z = \text{constant}" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="p" /> = Pressure
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="V" /> = Velocity
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
                  <br />
                  <InlineMath math="z" /> = Elevation
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
                  Reynolds Number
                </h3>
                <BlockMath math="Re = \frac{\rho V D}{\mu}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="Re" /> = Reynolds number
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="V" /> = Velocity
                  <br />
                  <InlineMath math="D" /> = Diameter
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity
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
                  Darcy-Weisbach Equation
                </h3>
                <BlockMath math="h_f = f \frac{L}{D} \frac{V^2}{2g}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="h_f" /> = Head loss due to friction
                  <br />
                  <InlineMath math="f" /> = Darcy friction factor
                  <br />
                  <InlineMath math="L" /> = Length of the pipe
                  <br />
                  <InlineMath math="D" /> = Diameter of the pipe
                  <br />
                  <InlineMath math="V" /> = Velocity
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
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
                  Hagen-Poiseuille Equation
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-purple-200 scrollbar-thumb-purple-300 dark:scrollbar-track-purple-400 dark:scrollbar-thumb-purple-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="Q = \frac{\pi r^4 \Delta p}{8 \mu L}" />
                </div>

                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Volume flow rate
                  <br />
                  <InlineMath math="r" /> = Radius of the pipe
                  <br />
                  <InlineMath math="\Delta p" /> = Pressure difference
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity
                  <br />
                  <InlineMath math="L" /> = Length of the pipe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Section Divider */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-500 dark:text-gray-200">
            Flowing through the principles of fluids
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
