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

export default function ApplicationsOfThermodynamics() {
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
      label: "Applications of Thermodynamics",
      href: "/physics/concepts/thermodynamics/applications-of-thermodynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-green-200 dark:to-teal-300">
          Applications of Thermodynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the practical applications of thermodynamics, including heat
          engines, refrigeration, air conditioning, thermodynamic efficiency,
          and chemical thermodynamics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Applications of Thermodynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Introduction to Applications of Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Thermodynamics has numerous practical applications in various
              fields, including engineering, chemistry, and materials science.
              This section provides an overview of how thermodynamic principles
              are applied in real-world scenarios.
            </p>
          </div>
        </div>

        {/* Heat Engines */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Heat Engines
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Heat engines are devices that convert thermal energy into
              mechanical work. This section covers the Carnot engine, Otto
              cycle, and Diesel cycle, which are fundamental to understanding
              the operation of various types of engines.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Carnot Engine
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Carnot engine is an idealized heat engine that operates on
                  the Carnot cycle, providing the maximum possible efficiency
                  for a given temperature range.
                </p>
                <BlockMath math="\eta_{\text{Carnot}} = 1 - \frac{T_c}{T_h}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Otto Cycle
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Otto cycle is an idealized thermodynamic cycle that
                  describes the functioning of a typical spark-ignition piston
                  engine (e.g., gasoline engines).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  Diesel Cycle
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Diesel cycle is an idealized thermodynamic cycle that
                  describes the functioning of a compression-ignition engine
                  (e.g., diesel engines).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Refrigeration & Air Conditioning */}
        <div className="rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-200 p-6 dark:from-cyan-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-sky-300">
            Refrigeration & Air Conditioning
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Refrigeration and air conditioning systems use thermodynamic
              principles to transfer heat from a colder area to a warmer area,
              typically involving a refrigerant that undergoes phase changes.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Refrigeration Cycle
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Refrigeration systems typically use a vapor-compression cycle,
                  which includes compression, condensation, expansion, and
                  evaporation of a refrigerant.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Coefficient of Performance (COP)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The efficiency of a refrigeration system is measured by its
                  coefficient of performance (COP), which is the ratio of the
                  heat removed to the work input.
                </p>
                <BlockMath math="\text{COP} = \frac{Q_c}{W}" />
              </div>
            </div>
          </div>
        </div>

        {/* Thermodynamic Efficiency & Performance */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-pink-200 p-6 dark:from-rose-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-pink-300 dark:to-rose-300">
            Thermodynamic Efficiency & Performance
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Thermodynamic efficiency is a measure of how effectively a system
              converts energy or performs work. This section discusses various
              efficiency metrics and their implications for different
              thermodynamic systems.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Thermal Efficiency
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Thermal efficiency (<InlineMath math="\eta" />) is the ratio
                  of the work output to the heat input in a heat engine.
                </p>
                <BlockMath math="\eta = \frac{W}{Q_h} = 1 - \frac{Q_c}{Q_h}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Carnot Efficiency
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Carnot efficiency is the maximum possible efficiency for a
                  heat engine operating between two temperatures.
                </p>
                <BlockMath math="\eta_{\text{Carnot}} = 1 - \frac{T_c}{T_h}" />
              </div>
            </div>
          </div>
        </div>

        {/* Chemical Thermodynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Chemical Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Chemical thermodynamics applies thermodynamic principles to
              chemical reactions and processes. This section covers Gibbs free
              energy, chemical potential, and phase diagrams.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Gibbs Free Energy
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Gibbs free energy (G) is a thermodynamic potential that
                  measures the maximum work that can be extracted from a
                  thermodynamically closed system at constant temperature and
                  pressure.
                </p>
                <BlockMath math="G = H - TS" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Chemical Potential
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Chemical potential (μ) is the change in Gibbs free energy with
                  respect to the change in the number of moles of a component in
                  a system.
                </p>
                <BlockMath math="\mu_i = \left(\frac{\partial G}{\partial N_i}\right)_{T,P,N_{j\neq i}}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Phase Diagrams
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Phase diagrams illustrate the conditions under which different
                  phases of a substance exist in equilibrium.
                </p>
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
                    "A Carnot engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. Calculate the maximum possible efficiency of the engine.",
                  solution:
                    "\\(\\eta_{\\text{Carnot}} = 1 - \\frac{T_c}{T_h} = 1 - \\frac{300}{500} = 1 - 0.6 = 0.4\\)",
                },
                {
                  problem:
                    "An ideal Otto cycle engine has a compression ratio of 8. Calculate the theoretical efficiency of the engine. (Assume \\( \\gamma = 1.4 \\) for air)",
                  solution:
                    "\\(\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma-1}} = 1 - \\frac{1}{8^{1.4-1}} = 1 - \\frac{1}{8^{0.4}} \\approx 1 - \\frac{1}{2.3} \\approx 0.565\\)",
                },
                {
                  problem:
                    "A refrigerator has a coefficient of performance (COP) of 3. If the refrigerator removes 600 J of heat from the cold reservoir, how much work is required?",
                  solution:
                    "\\(\\text{COP} = \\frac{Q_c}{W} \\Rightarrow W = \\frac{Q_c}{\\text{COP}} = \\frac{600}{3} = 200 \\ \\text{J}\\)",
                },
                {
                  problem:
                    "Calculate the change in Gibbs free energy for a reaction at 298 K where the enthalpy change is -100 kJ and the entropy change is -0.2 kJ/K.",
                  solution:
                    "\\(\\Delta G = \\Delta H - T\\Delta S = -100 \\ \\text{kJ} - 298 \\ \\text{K} \\times (-0.2 \\ \\text{kJ/K}) = -100 + 59.6 = -40.4 \\ \\text{kJ}\\)",
                },
                {
                  problem:
                    "The chemical potential of a component in a mixture changes by 50 J/mol when its amount is increased by 0.1 mol at constant temperature and pressure. Calculate the total change in Gibbs free energy.",
                  solution:
                    "\\(\\Delta G = \\mu \\Delta N = 50 \\ \\text{J/mol} \\times 0.1 \\ \\text{mol} = 5 \\ \\text{J}\\)",
                },
                {
                  problem:
                    "Determine the boiling point of water at a pressure where the enthalpy of vaporization is 40.7 kJ/mol and the entropy of vaporization is 109 J/mol·K.",
                  solution:
                    "At boiling point, \\(\\Delta G = 0\\), so \\(T = \\frac{\\Delta H}{\\Delta S} = \\frac{40700 \\ \\text{J/mol}}{109 \\ \\text{J/mol·K}} \\approx 373.4 \\ \\text{K}\\)",
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
          Applying Principles to Practical Systems
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
