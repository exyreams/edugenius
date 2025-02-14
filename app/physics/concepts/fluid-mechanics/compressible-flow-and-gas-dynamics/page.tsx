"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const problemColors = [
  // Original Variations
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
  "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700",
  "from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700",
  "from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700",
  "from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700",

  // Red/Pink Variations
  "from-red-200 to-pink-300 dark:from-red-700 dark:to-pink-600",
  "from-rose-100 to-red-200 dark:from-rose-700 dark:to-red-800",
  "from-red-50 to-rose-100 dark:from-red-900 dark:to-rose-800",

  // Orange/Yellow Variations
  "from-orange-200 to-yellow-300 dark:from-orange-700 dark:to-yellow-600",
  "from-amber-100 to-orange-200 dark:from-amber-700 dark:to-orange-800",
  "from-yellow-50 to-amber-100 dark:from-yellow-900 dark:to-amber-800",

  // Green/Teal Variations
  "from-green-200 to-teal-300 dark:from-green-700 dark:to-teal-600",
  "from-emerald-100 to-green-200 dark:from-emerald-700 dark:to-green-800",
  "from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-800",

  // Blue/Sky Variations
  "from-blue-200 to-sky-300 dark:from-blue-700 dark:to-sky-600",
  "from-sky-200 to-blue-300 dark:from-sky-700 dark:to-blue-600",
  "from-sky-50 to-blue-100 dark:from-sky-900 dark:to-blue-800",

  // Purple Variations
  "from-purple-200 to-indigo-300 dark:from-purple-700 dark:to-indigo-600",
  "from-violet-100 to-purple-200 dark:from-violet-700 dark:to-purple-800",
  "from-purple-50 to-violet-100 dark:from-purple-900 dark:to-violet-800",

  // Gray Variations
  "from-gray-200 to-slate-300 dark:from-gray-700 dark:to-slate-600",
  "from-slate-200 to-gray-300 dark:from-slate-700 dark:to-gray-600",
  "from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800",

  // Complementary/Contrasting Options
  "from-blue-200 to-yellow-200 dark:from-blue-700 dark:to-yellow-700",
  "from-pink-200 to-teal-200 dark:from-pink-700 dark:to-teal-700",
  "from-green-200 to-red-200 dark:from-green-700 dark:to-red-700",

  // Neutral with Subtle Variation
  "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
  "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800",
  "from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800",
];

export default function CompressibleFlowGasDynamics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Fluid Mechanics",
      href: "/physics/concepts/fluid-mechanics",
    },
    {
      label: "Compressible Flow & Gas Dynamics",
      href: "/physics/concepts/fluid-mechanics/compressible-flow-gas-dynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Compressible Flow & Gas Dynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the behavior of fluids at high speeds, where density changes
          become significant, and understand the principles of gas dynamics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Compressible Flow & Gas Dynamics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Compressible Flow & Gas Dynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Compressible flow deals with fluid motion where density changes
              are significant, typically at high speeds. Gas dynamics extends
              these principles to the study of gases, including phenomena like
              shock waves and supersonic flow.
            </p>
          </div>
        </div>

        {/* Mach Number & Shock Waves */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Mach Number & Shock Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Mach number is a dimensionless quantity representing the ratio
              of flow velocity to the speed of sound. Shock waves are abrupt
              changes in fluid properties that occur when the flow speed exceeds
              the speed of sound.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Mach Number
                </h3>
                <BlockMath math="M = \frac{v}{a}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Mach number
                  <br />
                  <InlineMath math="v" /> = Flow velocity
                  <br />
                  <InlineMath math="a" /> = Speed of sound
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Shock Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Shock waves are characterized by sudden changes in pressure,
                  temperature, and density. They occur in supersonic flow and
                  are crucial in applications like supersonic aircraft and
                  combustion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Isentropic Flow */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Isentropic Flow
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Isentropic flow is an idealized flow that is both adiabatic (no
              heat transfer) and reversible (no entropy generation). It is a
              useful approximation for many compressible flow problems.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Isentropic Relations
                </h3>
                <BlockMath math="\frac{P_2}{P_1} = \left(\frac{\rho_2}{\rho_1}\right)^\gamma = \left(\frac{T_2}{T_1}\right)^{\frac{\gamma}{\gamma-1}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="T" /> = Temperature
                  <br />
                  <InlineMath math="\gamma" /> = Ratio of specific heats
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Isentropic flow analysis is used in the design of nozzles,
                  diffusers, and other components in high-speed flow systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prandtl-Meyer Expansion */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Prandtl-Meyer Expansion
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Prandtl-Meyer expansion describes the supersonic flow around a
              convex corner. The flow expands isentropically, and the Mach
              number increases.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Prandtl-Meyer Function
                </h3>
                <BlockMath math="\nu(M) = \sqrt{\frac{\gamma+1}{\gamma-1}} \arctan \sqrt{\frac{\gamma-1}{\gamma+1}(M^2-1)} - \arctan \sqrt{M^2-1}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\nu" /> = Prandtl-Meyer function
                  <br />
                  <InlineMath math="M" /> = Mach number
                  <br />
                  <InlineMath math="\gamma" /> = Ratio of specific heats
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Expansion Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Expansion waves are continuous, isentropic changes in flow
                  properties that occur in supersonic flow around convex
                  corners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supersonic & Subsonic Flow */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Supersonic & Subsonic Flow
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Supersonic flow occurs when the flow velocity is greater than the
              speed of sound (M {">"} 1), while subsonic flow occurs when the
              velocity is less than the speed of sound (M {"<"} 1).
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Supersonic Flow Characteristics
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Presence of shock waves and expansion waves</li>
                  <li>
                    Changes in flow properties are often abrupt and
                    discontinuous
                  </li>
                  <li>Governed by hyperbolic partial differential equations</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Subsonic Flow Characteristics
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Changes in flow properties are generally smooth and
                    continuous
                  </li>
                  <li>Governed by elliptic partial differential equations</li>
                  <li>
                    Density changes are less significant compared to supersonic
                    flow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Numerical Problems Section */}
        <div className="mt-16">
          <div
            className={`rounded-2xl bg-gradient-to-br ${
              problemColors[Math.floor(Math.random() * problemColors.length)]
            } p-6`}
          >
            <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
              Numerical Problems
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  problem:
                    "Air flows isentropically through a nozzle. At a certain section, the pressure is 200 kPa and the temperature is 400 K. If the initial pressure and temperature were 300 kPa and 500 K, respectively, calculate the density ratio.",
                  solution:
                    "\\frac{\\rho_2}{\\rho_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{1}{\\gamma}} = \\left(\\frac{200}{300}\\right)^{\\frac{1}{1.4}} \\approx 0.784",
                },
                {
                  problem:
                    "A normal shock wave occurs in air at a Mach number of 2.5. Calculate the pressure ratio across the shock wave.",
                  solution:
                    "\\frac{P_2}{P_1} = \\frac{2\\gamma M_1^2 - (\\gamma - 1)}{\\gamma + 1} = \\frac{2(1.4)(2.5)^2 - (1.4 - 1)}{1.4 + 1} \\approx 7.125",
                },
                {
                  problem:
                    "Air expands through a Prandtl-Meyer expansion fan from a Mach number of 1.5 to 2.0. If the ratio of specific heats is 1.4, calculate the expansion angle.",
                  solution:
                    "\\Delta \\nu = \\nu(M_2) - \\nu(M_1) = \\left(\\sqrt{\\frac{2.4}{0.4}} \\arctan \\sqrt{\\frac{0.4}{2.4}(2^2-1)} - \\arctan \\sqrt{2^2-1}\\right) - \\left(\\sqrt{\\frac{2.4}{0.4}} \\arctan \\sqrt{\\frac{0.4}{2.4}(1.5^2-1)} - \\arctan \\sqrt{1.5^2-1}\\right) \\approx 14.58°",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg border bg-gradient-to-br p-4 dark:border-gray-700 ${
                    problemColors[index % problemColors.length]
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Problem {index + 1}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>{item.problem}</p>
                  </div>
                  <details className="group mt-2">
                    <summary className="cursor-pointer text-sm font-medium text-indigo-600 dark:text-blue-300">
                      Show Solution
                    </summary>
                    <div className="mt-2 whitespace-pre-wrap text-sm text-gray-600 group-open:block dark:text-gray-400">
                      <p>
                        <BlockMath>{item.solution}</BlockMath>
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Mastering the Flow of Gases
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
