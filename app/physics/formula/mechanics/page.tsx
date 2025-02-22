"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description A page that displays key formulas in Mechanics.
 * @returns {JSX.Element} The rendered React component.
 */
export default function MechanicsFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    { label: "Formula", href: "/physics/formula" },
    {
      label: "Mechanics",
      href: "/physics/formula/mechanics",
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
        <h1 className="bg-gradient-to-r from-red-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-200 dark:to-orange-300 sm:text-5xl md:text-6xl">
          Mechanics Formulas
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A comprehensive collection of key formulas in Mechanics, covering
          topics from kinematics to rotational motion and energy conservation.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Theme Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Kinematics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Kinematics
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
                      ? "text-amber-600 dark:text-amber-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Displacement
                </h3>
                <BlockMath math="\Delta x = x_f - x_i" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\Delta x" /> = Displacement
                  <br />
                  <InlineMath math="x_f" /> = Final position
                  <br />
                  <InlineMath math="x_i" /> = Initial position
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
                      ? "text-yellow-600 dark:text-yellow-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Average Velocity
                </h3>
                <BlockMath math="v_{avg} = \frac{\Delta x}{\Delta t}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="v_{avg}" /> = Average velocity
                  <br />
                  <InlineMath math="\Delta x" /> = Displacement
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
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
                      ? "text-orange-600 dark:text-orange-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Average Acceleration
                </h3>
                <BlockMath math="a_{avg} = \frac{\Delta v}{\Delta t}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="a_{avg}" /> = Average acceleration
                  <br />
                  <InlineMath math="\Delta v" /> = Change in velocity
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
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
                  Equations of Motion
                </h3>
                {/* Equations of motions in the same div */}
                <BlockMath math="v = u + at" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="v" /> = Final velocity
                  <br />
                  <InlineMath math="u" /> = Initial velocity
                  <br />
                  <InlineMath math="a" /> = Acceleration
                  <br />
                  <InlineMath math="t" /> = Time
                </p>
                <BlockMath math="s = ut + \frac{1}{2}at^2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="s" /> = Displacement
                  <br />
                  <InlineMath math="u" /> = Initial velocity
                  <br />
                  <InlineMath math="a" /> = Acceleration
                  <br />
                  <InlineMath math="t" /> = Time
                </p>
                <BlockMath math="v^2 = u^2 + 2as" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="v" /> = Final velocity
                  <br />
                  <InlineMath math="u" /> = Initial velocity
                  <br />
                  <InlineMath math="a" /> = Acceleration
                  <br />
                  <InlineMath math="s" /> = Displacement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-emerald-300 dark:to-green-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Dynamics
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
                      ? "text-green-600 dark:text-green-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Newton&#39;s Second Law
                </h3>
                <BlockMath math="\mathbf{F} = m\mathbf{a}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="\mathbf{a}" /> = Acceleration
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
                  Weight
                </h3>
                <BlockMath math="W = mg" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="W" /> = Weight
                  <br />
                  <InlineMath math="m" /> = Mass
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
                      ? "text-teal-600 dark:text-teal-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Friction Force
                </h3>
                <BlockMath math="f = \mu N" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Friction force
                  <br />
                  <InlineMath math="\mu" /> = Coefficient of friction
                  <br />
                  <InlineMath math="N" /> = Normal force
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
                  Hooke&#39;s Law
                </h3>
                <BlockMath math="F = -kx" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="F" /> = Force
                  <br />
                  <InlineMath math="k" /> = Spring constant
                  <br />
                  <InlineMath math="x" /> = Displacement from equilibrium
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work, Energy, and Power */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-sky-200 dark:from-blue-600 dark:to-sky-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-cyan-300 dark:to-blue-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Work, Energy, and Power
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
                      ? "text-blue-600 dark:text-blue-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Work
                </h3>
                <BlockMath math="W = \mathbf{F} \cdot \mathbf{d} = Fd \cos \theta" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="W" /> = Work done
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force
                  <br />
                  <InlineMath math="\mathbf{d}" /> = Displacement
                  <br />
                  <InlineMath math="\theta" /> = Angle between force and
                  displacement
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
                      ? "text-sky-600 dark:text-sky-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Kinetic Energy
                </h3>
                <BlockMath math="K = \frac{1}{2}mv^2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="K" /> = Kinetic energy
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="v" /> = Velocity
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
                  Potential Energy
                </h3>
                <BlockMath math="U = mgh" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="U" /> = Potential energy
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
                  <br />
                  <InlineMath math="h" /> = Height
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
                  Power
                </h3>
                <BlockMath math="P = \frac{W}{t} = \mathbf{F} \cdot \mathbf{v}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Power
                  <br />
                  <InlineMath math="W" /> = Work done
                  <br />
                  <InlineMath math="t" /> = Time
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force
                  <br />
                  <InlineMath math="\mathbf{v}" /> = Velocity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Momentum and Impulse */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-fuchsia-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Momentum and Impulse
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
                  Momentum
                </h3>
                <BlockMath math="\mathbf{p} = m\mathbf{v}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{p}" /> = Momentum
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="\mathbf{v}" /> = Velocity
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
                  Impulse
                </h3>
                <BlockMath math="\mathbf{J} = \Delta \mathbf{p} = \mathbf{F}\Delta t" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{J}" /> = Impulse
                  <br />
                  <InlineMath math="\Delta \mathbf{p}" /> = Change in momentum
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
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
                  Conservation of Momentum
                </h3>
                <BlockMath math="\sum \mathbf{p}_{\text{initial}} = \sum \mathbf{p}_{\text{final}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\sum \mathbf{p}_{\text{initial}}" /> = Sum
                  of initial momenta
                  <br />
                  <InlineMath math="\sum \mathbf{p}_{\text{final}}" /> = Sum of
                  final momenta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rotational Motion */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-rose-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Rotational Motion
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
                      ? "text-rose-600 dark:text-rose-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Angular Velocity
                </h3>
                <BlockMath math="\omega = \frac{\Delta \theta}{\Delta t}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\omega" /> = Angular velocity
                  <br />
                  <InlineMath math="\Delta \theta" /> = Change in angle
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
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
                      ? "text-orange-600 dark:text-orange-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Angular Acceleration
                </h3>
                <BlockMath math="\alpha = \frac{\Delta \omega}{\Delta t}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\alpha" /> = Angular acceleration
                  <br />
                  <InlineMath math="\Delta \omega" /> = Change in angular
                  velocity
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
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
                      ? "text-red-600 dark:text-red-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Torque
                </h3>
                <BlockMath math="\tau = rF\sin\theta" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\tau" /> = Torque
                  <br />
                  <InlineMath math="r" /> = Distance from the axis of rotation
                  <br />
                  <InlineMath math="F" /> = Force
                  <br />
                  <InlineMath math="\theta" /> = Angle between the force and the
                  lever arm
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
                      ? "text-rose-600 dark:text-rose-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Moment of Inertia
                </h3>
                <BlockMath math="I = \sum m_i r_i^2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="I" /> = Moment of inertia
                  <br />
                  <InlineMath math="m_i" /> = Mass of the i-th particle
                  <br />
                  <InlineMath math="r_i" /> = Distance of the i-th particle from
                  the axis of rotation
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
                      ? "text-orange-600 dark:text-orange-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Rotational Kinetic Energy
                </h3>
                <BlockMath math="K_{\text{rot}} = \frac{1}{2}I\omega^2" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="K_{\text{rot}}" /> = Rotational kinetic
                  energy
                  <br />
                  <InlineMath math="I" /> = Moment of inertia
                  <br />
                  <InlineMath math="\omega" /> = Angular velocity
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
                  Angular Momentum
                </h3>
                <BlockMath math="\mathbf{L} = I\mathbf{\omega}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{L}" /> = Angular momentum
                  <br />
                  <InlineMath math="I" /> = Moment of inertia
                  <br />
                  <InlineMath math="\mathbf{\omega}" /> = Angular velocity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Harmonic Motion */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-cyan-300 dark:to-teal-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Simple Harmonic Motion
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
                  Displacement in SHM
                </h3>
                <BlockMath math="x(t) = A\cos(\omega t + \phi)" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="x(t)" /> = Displacement at time t
                  <br />
                  <InlineMath math="A" /> = Amplitude
                  <br />
                  <InlineMath math="\omega" /> = Angular frequency
                  <br />
                  <InlineMath math="t" /> = Time
                  <br />
                  <InlineMath math="\phi" /> = Phase constant
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
                  Velocity in SHM
                </h3>
                <BlockMath math="v(t) = -A\omega\sin(\omega t + \phi)" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="v(t)" /> = Velocity at time t
                  <br />
                  <InlineMath math="A" /> = Amplitude
                  <br />
                  <InlineMath math="\omega" /> = Angular frequency
                  <br />
                  <InlineMath math="t" /> = Time
                  <br />
                  <InlineMath math="\phi" /> = Phase constant
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
                  Acceleration in SHM
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-400 dark:scrollbar-thumb-teal-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="a(t) = -A\omega^2\cos(\omega t + \phi)" />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="a(t)" /> = Acceleration at time t
                  <br />
                  <InlineMath math="A" /> = Amplitude
                  <br />
                  <InlineMath math="\omega" /> = Angular frequency
                  <br />
                  <InlineMath math="t" /> = Time
                  <br />
                  <InlineMath math="\phi" /> = Phase constant
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
                  Period of SHM
                </h3>
                <BlockMath math="T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{m}{k}}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="T" /> = Period
                  <br />
                  <InlineMath math="\omega" /> = Angular frequency
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="k" /> = Spring constant
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
          Mechanics: Understanding Motion and Forces
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
