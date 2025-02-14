"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
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

export default function BasicConcepts() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Thermodynamics",
      href: "/physics/concepts/thermodynamics",
    },
    {
      label: "Basic Concepts",
      href: "/physics/concepts/thermodynamics/basic-concepts",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-rose-700 to-amber-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-rose-200 dark:to-amber-300">
          Basic Concepts of Thermodynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the foundational principles of thermodynamics, including
          thermodynamic systems, state variables, the Zeroth Law, and the
          concepts of heat, work, and energy.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Thermodynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-yellow-300 dark:to-orange-300">
            Introduction to Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Thermodynamics is the branch of physics that deals with the
              relationships between heat and other forms of energy. It describes
              how thermal energy is converted to and from other forms of energy
              and how it affects matter.
            </p>
          </div>
        </div>

        {/* Thermodynamic Systems */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Thermodynamic Systems
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A thermodynamic system is a part of the universe that is under
              study. Systems are classified as open, closed, or isolated based
              on their ability to exchange energy and matter with their
              surroundings.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Open System
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  An open system can exchange both energy and matter with its
                  surroundings.
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Example: A pot of boiling water on a stove.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Closed System
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A closed system can exchange energy but not matter with its
                  surroundings.
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Example: A sealed container of gas.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Isolated System
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  An isolated system cannot exchange energy or matter with its
                  surroundings.
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Example: A perfectly insulated thermos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* State Variables */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            State Variables
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              State variables are properties that describe the state of a
              thermodynamic system. They include pressure, volume, temperature,
              entropy, and internal energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Pressure (P)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Force per unit area exerted by a fluid.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Volume (V)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Amount of space occupied by a substance.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-300">
                  Temperature (T)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Measure of the average kinetic energy of particles.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300">
                  Entropy (S)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Measure of the disorder or randomness of a system.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Internal Energy (U)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Total energy contained within a system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Zeroth Law of Thermodynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Zeroth Law of Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Zeroth Law of Thermodynamics states that if two systems are
              each in thermal equilibrium with a third system, then they are in
              thermal equilibrium with each other. This law establishes the
              concept of temperature.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Statement
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  If A is in thermal equilibrium with B, and B is in thermal
                  equilibrium with C, then A is in thermal equilibrium with C.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Implication
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  This law allows for the definition of a temperature scale and
                  the construction of thermometers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heat, Work, and Energy */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Heat, Work, and Energy
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Heat, work, and energy are fundamental concepts in thermodynamics.
              Heat is the transfer of thermal energy between systems, work is
              the energy transferred by a force acting through a distance, and
              energy is the capacity to do work or produce heat.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Heat (Q)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Energy transferred due to a temperature difference.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Work (W)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Energy transferred by a force acting through a distance.
                </p>
                <BlockMath math="W = Fd\cos(\theta)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Energy (E)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The capacity to do work or produce heat. Includes internal
                  energy, kinetic energy, and potential energy.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  First Law of Thermodynamics
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Energy is conserved: the change in internal energy of a system
                  is equal to the heat added to the system minus the work done
                  by the system.
                </p>
                <BlockMath math="\Delta U = Q - W" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Specific Heat Capacity
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Amount of heat needed to raise one unit mass of a substance by
                  one degree Celsius
                </p>
                <BlockMath math="Q = mc\Delta T" />
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  Latent Heat
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Amount of heat absorbed or released during phase transitions
                </p>
                <BlockMath math="Q = mL" />
              </div>
            </div>
          </div>
        </div>

        {/* Numerical Problems Section */}
        <div className="mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-gray-200 to-zinc-200 p-6 dark:from-gray-800 dark:to-zinc-800">
            <h2 className="bg-gradient-to-r from-zinc-600 to-gray-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-zinc-300 dark:to-gray-300">
              Numerical Problems
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  problem:
                    "A system absorbs 500 J of heat and does 200 J of work on its surroundings. Calculate the change in internal energy of the system.",
                  solution:
                    "\\(\\Delta U = Q - W = 500 \\ \\text{J} - 200 \\ \\text{J} = 300 \\ \\text{J}\\)",
                },
                {
                  problem:
                    "Calculate the amount of heat required to raise the temperature of 2 kg of water from 20°C to 80°C. (Specific heat capacity of water = 4186 J/kg·°C)",
                  solution:
                    "\\(Q = mc\\Delta T = 2 \\ \\text{kg} \\times 4186 \\ \\text{J/kg°C} \\times (80°C - 20°C) = 2 \\times 4186 \\times 60 = 502320 \\ \\text{J}\\)",
                },
                {
                  problem:
                    "A gas expands at a constant pressure of 2 atm from a volume of 10 L to 20 L. Calculate the work done by the gas. (1 atm = 101325 Pa, 1 L = 10⁻³ m³)",
                  solution:
                    "\\(W = P\\Delta V = 2 \\ \\text{atm} \\times (20 \\ \\text{L} - 10 \\ \\text{L}) = 2 \\times 101325 \\ \\text{Pa} \\times 10 \\times 10^{-3} \\ \\text{m}^3 = 2026.5 \\ \\text{J}\\)",
                },
                {
                  problem:
                    "How much heat is required to melt 5 kg of ice at 0°C to water at 0°C? (Latent heat of fusion for ice = 334 kJ/kg)",
                  solution:
                    "\\(Q = mL = 5 \\ \\text{kg} \\times 334000 \\ \\text{J/kg} = 1670000 \\ \\text{J} = 1670 \\ \\text{kJ}\\)",
                },
                {
                  problem:
                    "A system is in thermal equilibrium with another system at a temperature of 25°C. What is the temperature of the system in Kelvin?",
                  solution:
                    "\\(T(K) = T(°C) + 273.15 = 25 + 273.15 = 298.15 \\ \\text{K}\\)",
                },
                {
                  problem:
                    "Calculate the change in entropy when 2 kg of ice at 0°C melts into water at 0°C. (Latent heat of fusion for ice = 334 kJ/kg)",
                  solution:
                    "\\(\\Delta S = \\frac{Q}{T} = \\frac{mL}{T} = \\frac{2 \\ \\text{kg} \\times 334000 \\ \\text{J/kg}}{273.15 \\ \\text{K}} \\approx 2445.5 \\ \\text{J/K}\\)",
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
          Laying the Foundation for Thermal Physics
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
