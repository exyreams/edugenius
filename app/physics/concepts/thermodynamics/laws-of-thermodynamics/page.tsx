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

export default function LawsOfThermodynamics() {
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
      label: "Laws of Thermodynamics",
      href: "/physics/concepts/thermodynamics/laws-of-thermodynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Laws of Thermodynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fundamental principles that govern the behavior of thermal
          systems, from the conservation of energy to the direction of
          spontaneous processes and the unattainability of absolute zero.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to the Laws of Thermodynamics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to the Laws of Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Thermodynamics is a branch of physics that deals with heat, work,
              temperature, and their relation to energy, radiation, and physical
              properties of matter. The laws of thermodynamics define
              fundamental physical quantities (temperature, energy, and entropy)
              that characterize thermodynamic systems at thermal equilibrium.
            </p>
          </div>
        </div>

        {/* First Law: Conservation of Energy */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            First Law: Conservation of Energy
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The First Law of Thermodynamics states that energy cannot be
              created or destroyed, only transferred or changed from one form to
              another. It is often formulated as:
            </p>
            <BlockMath math="\Delta U = Q - W" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Where:
              <br />
              <InlineMath math="\Delta U" /> = Change in internal energy of the
              system
              <br />
              <InlineMath math="Q" /> = Heat added to the system
              <br />
              <InlineMath math="W" /> = Work done by the system
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Implications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>The total energy of an isolated system is constant.</li>
                  <li>Heat and work are both forms of energy transfer.</li>
                  <li>
                    Internal energy is a state function, depending only on the
                    current state of the system, not on the path taken to reach
                    that state.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Calculating the work done by or on a system during a
                    thermodynamic process.
                  </li>
                  <li>
                    Determining the heat transfer required to achieve a specific
                    change in internal energy.
                  </li>
                  <li>
                    Analyzing the efficiency of engines and refrigerators.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Law: Entropy */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Second Law: Entropy
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Second Law of Thermodynamics introduces the concept of
              entropy, a measure of the disorder or randomness of a system. It
              states that the total entropy of an isolated system can never
              decrease over time, and is constant if and only if all processes
              are reversible.
            </p>
            <BlockMath math="\Delta S \geq 0" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Where:
              <br />
              <InlineMath math="\Delta S" /> = Change in entropy of the system
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Implications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Natural processes tend to move towards a state of greater
                    disorder.
                  </li>
                  <li>
                    Heat cannot spontaneously flow from a colder body to a
                    hotter body.
                  </li>
                  <li>
                    It is impossible to convert all heat into work in a cyclic
                    process.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Heat Engines
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Devices that convert thermal energy into mechanical work. The
                  Second Law limits their efficiency.
                </p>
                <BlockMath math="\text{Efficiency} = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where: <br />
                  <InlineMath math="W" /> is the work done by the engine.
                  <br />
                  <InlineMath math="Q_H" /> is the heat absorbed from the hot
                  reservoir.
                  <br />
                  <InlineMath math="Q_C" /> is the heat rejected to the cold
                  reservoir.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Refrigerators
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Devices that transfer heat from a colder area to a hotter
                  area, requiring work input. The Second Law dictates their
                  performance limits.
                </p>
                <BlockMath math="\text{COP} = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where COP is the coefficient of performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Law: Absolute Zero & Entropy Limit */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Third Law: Absolute Zero & Entropy Limit
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Third Law of Thermodynamics states that the entropy of a
              perfect crystal approaches zero as the temperature approaches
              absolute zero (0 Kelvin).
            </p>
            <BlockMath math="\lim_{T \to 0} S = 0" />
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Implications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    It is impossible to reach absolute zero in a finite number
                    of steps.
                  </li>
                  <li>
                    The heat capacity of a substance approaches zero as the
                    temperature approaches absolute zero.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Significance
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Provides a reference point for determining the absolute
                    entropy of a substance.
                  </li>
                  <li>
                    Helps understand the behavior of materials at extremely low
                    temperatures.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Law Applications */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Second Law Applications: Carnot Cycle, Efficiency of Heat Engines
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Second Law of Thermodynamics has several important
              applications, including the analysis of heat engines and the
              determination of their maximum possible efficiency.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Carnot Cycle
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  An idealized thermodynamic cycle that provides an upper limit
                  on the efficiency that any classical thermodynamic engine can
                  achieve during the conversion of heat into work, or
                  conversely, the efficiency of a refrigeration system in
                  creating a temperature difference by the application of work
                  to the system.
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Consists of four reversible processes: two isothermal and
                    two adiabatic.
                  </li>
                  <li>
                    Provides the theoretical maximum efficiency for a heat
                    engine operating between two temperatures.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Efficiency of Heat Engines
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The efficiency of a heat engine is the ratio of the work done
                  by the engine to the heat input. For a Carnot engine, the
                  efficiency is:
                </p>
                <BlockMath math="\text{Efficiency} = 1 - \frac{T_C}{T_H}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="T_C" /> is the absolute temperature of the
                  cold reservoir.
                  <br />
                  <InlineMath math="T_H" /> is the absolute temperature of the
                  hot reservoir.
                </p>
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
                    "A heat engine absorbs 1000 J of heat from a hot reservoir and rejects 600 J to a cold reservoir. Calculate the work done by the engine and its efficiency.",
                  solution:
                    "W = Q_H - Q_C = 1000 \\ \\text{J} - 600 \\ \\text{J} = 400 \\ \\text{J} \\\\ \\text{Efficiency} = \\frac{W}{Q_H} = \\frac{400 \\ \\text{J}}{1000 \\ \\text{J}} = 0.4 \\ \\text{or} \\ 40\\%",
                },
                {
                  problem:
                    "A Carnot engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. Calculate its efficiency.",
                  solution:
                    "\\text{Efficiency} = 1 - \\frac{T_C}{T_H} = 1 - \\frac{300 \\ \\text{K}}{500 \\ \\text{K}} = 1 - 0.6 = 0.4 \\ \\text{or} \\ 40\\%",
                },
                {
                  problem:
                    "The entropy change of a system is 50 J/K when 200 J of heat is added to it. If the initial temperature is 300 K, what is the final temperature (assuming constant entropy change per unit heat)?",
                  solution:
                    "\\Delta S = \\frac{Q}{T_{avg}} \\Rightarrow T_{avg} = \\frac{Q}{\\Delta S} = \\frac{200 \\ \\text{J}}{50 \\ \\text{J/K}} = 4 \\ \\text{K} \\\\ \\text{Since entropy change is constant per unit heat and we assume linearity, this is a simplification. The average temperature is not directly useful to find the final temperature without additional information or assumptions.}",
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
          Guiding Principles of the Universe
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
