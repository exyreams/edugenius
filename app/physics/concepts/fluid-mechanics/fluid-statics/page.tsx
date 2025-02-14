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

export default function FluidStatics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Fluid Mechanics", href: "/physics/concepts/fluid-mechanics" },
    {
      label: "Fluid Statics",
      href: "/physics/concepts/fluid-mechanics/fluid-statics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-teal-200 dark:to-blue-300">
          Fluid Statics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Delve into the principles governing fluids at rest, exploring concepts
          such as pressure, density, and buoyancy.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Fluid Statics */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-emerald-300 dark:to-green-300">
            Introduction to Fluid Statics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Fluid statics, also known as hydrostatics, is the branch of fluid
              mechanics that studies fluids at rest. It examines the conditions
              under which fluids are in equilibrium and the forces acting on
              them. This section covers fundamental properties of fluids and key
              principles like Pascal&#39;s Law, hydrostatic pressure, and
              Archimedes&#39; Principle.
            </p>
          </div>
        </div>

        {/* Properties of Fluids */}
        <div className="rounded-2xl bg-gradient-to-br from-fuchsia-200 to-pink-200 p-6 dark:from-fuchsia-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-fuchsia-300 dark:to-rose-300">
            Properties of Fluids
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Understanding the properties of fluids is essential for analyzing
              their behavior. Key properties include density, pressure,
              viscosity, and surface tension.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Density
                </h3>
                <BlockMath math="\rho = \frac{m}{V}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Density (<InlineMath math="\rho" />) is the mass per unit
                  volume of a substance.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="m" /> = Mass (kg)
                  <br />
                  <InlineMath math="V" /> = Volume (m³)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Pressure
                </h3>
                <BlockMath math="P = \frac{F}{A}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Pressure (<InlineMath math="P" />) is the force per unit area
                  exerted by a fluid.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="F" /> = Force (N)
                  <br />
                  <InlineMath math="A" /> = Area (m²)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Viscosity
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Viscosity is a measure of a fluid&#39;s resistance to flow.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Surface Tension
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Surface tension is the force acting along the surface of a
                  liquid, causing it to contract.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pascal’s Law */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Pascal&#39;s Law
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Pascal&#39;s Law states that a change in pressure applied to an
              enclosed fluid is transmitted undiminished to every portion of the
              fluid and the walls of the containing vessel.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  Pascal&#39;s Law Formula
                </h3>
                <BlockMath math="P_1 = P_2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In a closed system, the pressure at any two points is equal.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="P_1" /> = Pressure at point 1
                  <br />
                  <InlineMath math="P_2" /> = Pressure at point 2
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Pascal&#39;s Law is the principle behind hydraulic systems,
                  such as hydraulic lifts and brakes.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Pascal’s Law */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
              />
              <rect
                x="120"
                y="20"
                width="60"
                height="60"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
              />
              <path
                d="M80 50 L120 50"
                stroke="#d97706"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text x="40" y="50" fontSize="12" fill="#d97706">
                P₁
              </text>
              <text x="140" y="50" fontSize="12" fill="#d97706">
                P₂
              </text>
            </svg>
          </div>
        </div>

        {/* Hydrostatic Pressure */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Hydrostatic Pressure
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Hydrostatic pressure is the pressure exerted by a fluid at
              equilibrium due to the force of gravity. It increases linearly
              with depth.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Hydrostatic Pressure Formula
                </h3>
                <BlockMath math="P = \rho g h" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The pressure at a depth <InlineMath math="h" /> in a fluid is
                  proportional to the density of the fluid and the depth.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="P" /> = Pressure (Pa)
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid (kg/m³)
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity (9.81
                  m/s²)
                  <br />
                  <InlineMath math="h" /> = Depth (m)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Hydrostatic pressure is crucial in understanding phenomena
                  such as buoyancy, pressure in dams, and underwater pressure.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Hydrostatic Pressure */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <rect
                x="50"
                y="10"
                width="100"
                height="80"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <path
                d="M50 90 L150 90"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text x="70" y="50" fontSize="12" fill="#3b82f6">
                P = ρgh
              </text>
            </svg>
          </div>
        </div>

        {/* Archimedes’ Principle & Buoyancy */}
        <div className="rounded-2xl bg-gradient-to-br from-yellow-200 to-lime-200 p-6 dark:from-yellow-600 dark:to-lime-600">
          <h2 className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300">
            Archimedes&#39; Principle & Buoyancy
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Archimedes&#39; Principle states that the upward buoyant force
              exerted on a body immersed in a fluid, whether fully or partially
              submerged, is equal to the weight of the fluid that the body
              displaces.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Archimedes&#39; Principle Formula
                </h3>
                <BlockMath math="F_B = \rho V g" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The buoyant force (<InlineMath math="F_B" />) is equal to the
                  weight of the fluid displaced.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="F_B" /> = Buoyant force (N)
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid (kg/m³)
                  <br />
                  <InlineMath math="V" /> = Volume of fluid displaced (m³)
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity (9.81
                  m/s²)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Archimedes&#39; Principle explains why objects float or sink
                  and is used in designing ships, submarines, and hot air
                  balloons.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Archimedes’ Principle */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <rect
                x="50"
                y="10"
                width="100"
                height="80"
                fill="none"
                stroke="#65a30d"
                strokeWidth="2"
              />
              <circle cx="100" cy="50" r="20" fill="#65a30d" />
              <text x="130" y="50" fontSize="12" fill="#65a30d">
                F_B
              </text>
            </svg>
          </div>
        </div>

        {/* Numerical Problems Section */}
        <div className="mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-gray-200 to-indigo-200 p-6 dark:from-gray-800 dark:to-indigo-800">
            <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
              Numerical Problems
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  problem:
                    "Calculate the density of a fluid if 5 m³ of the fluid has a mass of 4000 kg.",
                  solution:
                    "\\rho = \\frac{m}{V} = \\frac{4000}{5} = 800 \\ \\text{kg/m³}",
                },
                {
                  problem:
                    "A hydraulic lift has an input piston with an area of 0.02 m² and an output piston with an area of 0.5 m². If a force of 100 N is applied to the input piston, what is the force exerted by the output piston?",
                  solution:
                    "\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\Rightarrow F_2 = \\frac{F_1 A_2}{A_1} = \\frac{100 \\times 0.5}{0.02} = 2500 \\ \\text{N}",
                },
                {
                  problem:
                    "Calculate the hydrostatic pressure at a depth of 10 m in water (density = 1000 kg/m³).",
                  solution:
                    "P = \\rho g h = 1000 \\times 9.81 \\times 10 = 98100 \\ \\text{Pa}",
                },
                {
                  problem:
                    "An object with a volume of 0.2 m³ is fully submerged in water (density = 1000 kg/m³). Calculate the buoyant force acting on the object.",
                  solution:
                    "F_B = \\rho V g = 1000 \\times 0.2 \\times 9.81 = 1962 \\ \\text{N}",
                },
                {
                  problem:
                    "A cube of side 0.5 m is submerged in a fluid with a density of 800 kg/m³. Calculate the buoyant force on the cube.",
                  solution:
                    "V = (0.5)^3 = 0.125 \\ \\text{m³} \\\\ F_B = \\rho V g = 800 \\times 0.125 \\times 9.81 = 981 \\ \\text{N}",
                },
                {
                  problem:
                    "A pressure of 5000 Pa is applied to a hydraulic system. If the output piston has an area of 0.4 m², calculate the force exerted by the output piston.",
                  solution:
                    "F = P \\times A = 5000 \\times 0.4 = 2000 \\ \\text{N}",
                },
                {
                  problem:
                    "Calculate the depth at which the hydrostatic pressure in seawater (density = 1030 kg/m³) is equal to 200,000 Pa.",
                  solution:
                    "h = \\frac{P}{\\rho g} = \\frac{200000}{1030 \\times 9.81} = 19.8 \\ \\text{m}",
                },
                {
                  problem:
                    "A solid object has a weight of 50 N in air and 30 N when fully submerged in water (density = 1000 kg/m³). Calculate the volume of the object.",
                  solution:
                    "F_B = 50 - 30 = 20 \\ \\text{N} \\\\ V = \\frac{F_B}{\\rho g} = \\frac{20}{1000 \\times 9.81} = 0.00204 \\ \\text{m³}",
                },
                {
                  problem:
                    "A cylindrical container with a base area of 0.1 m² is filled with oil (density = 900 kg/m³) to a height of 2 m. Calculate the force exerted by the oil on the base of the container.",
                  solution:
                    "P = \\rho g h = 900 \\times 9.81 \\times 2 = 17658 \\ \\text{Pa} \\\\ F = P \\times A = 17658 \\times 0.1 = 1765.8 \\ \\text{N}",
                },
                {
                  problem:
                    "A rectangular block of wood with dimensions 0.2 m × 0.3 m × 0.1 m floats in water (density = 1000 kg/m³). If the block is submerged to a depth of 0.05 m, calculate the mass of the block.",
                  solution:
                    "V_{\\text{submerged}} = 0.2 \\times 0.3 \\times 0.05 = 0.003 \\ \\text{m³} \\\\ F_B = \\rho V_{\\text{submerged}} g = 1000 \\times 0.003 \\times 9.81 = 29.43 \\ \\text{N} \\\\ m = \\frac{F_B}{g} = \\frac{29.43}{9.81} = 3 \\ \\text{kg}",
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
          Exploring the Depths of Fluids at Rest
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
