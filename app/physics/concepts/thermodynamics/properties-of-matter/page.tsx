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
export default function PropertiesOfMatter() {
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
      label: "Properties of Matter",
      href: "/physics/concepts/thermodynamics/properties-of-matter",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Properties of Matter
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the essential properties of matter, including equations of
          state, phase changes, thermodynamic potentials, enthalpy, and specific
          heat capacities.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Properties of Matter */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Introduction to Properties of Matter
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The properties of matter describe the characteristics and behavior
              of substances under various conditions. This section explores
              fundamental concepts such as equations of state, phase changes,
              thermodynamic potentials, enthalpy, and specific heat capacities.
            </p>
          </div>
        </div>

        {/* Equations of State */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Equations of State
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Equations of state describe the relationships between state
              variables of a substance. Key examples include the Ideal Gas Law
              and the Van der Waals equation, which account for the behavior of
              ideal and real gases, respectively.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Ideal Gas Law
                </h3>
                <BlockMath math="PV = nRT" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
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
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Van der Waals Equation
                </h3>
                <BlockMath math="\left(P + a\frac{n^2}{V^2}\right)(V - nb) = nRT" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
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
                  <br />
                  <InlineMath math="a" /> = Correction for intermolecular forces
                  <br />
                  <InlineMath math="b" /> = Correction for volume of molecules
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Changes */}
        <div className="rounded-2xl bg-gradient-to-br from-green-200 to-lime-200 p-6 dark:from-green-600 dark:to-lime-600">
          <h2 className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300">
            Phase Changes
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Phase changes are transformations between solid, liquid, and
              gaseous states of matter. Key concepts include latent heat,
              boiling, melting, and sublimation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Latent Heat
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Latent heat is the energy absorbed or released during a phase
                  change at constant temperature.
                </p>
                <BlockMath math="Q = mL" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Heat transferred
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="L" /> = Latent heat (fusion or vaporization)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Boiling & Melting
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Boiling is the phase transition from liquid to gas at the
                  boiling point, while melting is the transition from solid to
                  liquid at the melting point.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300">
                  Sublimation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Sublimation is the phase transition from solid directly to gas
                  without passing through the liquid phase.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thermodynamic Potentials */}
        <div className="rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-200 p-6 dark:from-cyan-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-sky-300">
            Thermodynamic Potentials
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Thermodynamic potentials are functions that represent the
              thermodynamic state of a system. Key potentials include Helmholtz
              free energy and Gibbs free energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Helmholtz Free Energy (A)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Helmholtz free energy is a thermodynamic potential that
                  measures the useful work obtainable from a closed
                  thermodynamic system at constant temperature and volume.
                </p>
                <BlockMath math="A = U - TS" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="U" /> = Internal energy
                  <br />
                  <InlineMath math="T" /> = Temperature
                  <br />
                  <InlineMath math="S" /> = Entropy
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Gibbs Free Energy (G)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Gibbs free energy is a thermodynamic potential that
                  measures the maximum work that can be extracted from a
                  thermodynamically closed system at constant temperature and
                  pressure.
                </p>
                <BlockMath math="G = H - TS" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="H" /> = Enthalpy
                  <br />
                  <InlineMath math="T" /> = Temperature
                  <br />
                  <InlineMath math="S" /> = Entropy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enthalpy & Specific Heat Capacities */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Enthalpy & Specific Heat Capacities
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Enthalpy is a thermodynamic property that describes the total heat
              content of a system. Specific heat capacity is the amount of heat
              required to raise the temperature of a unit mass of a substance by
              one degree Celsius.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Enthalpy (H)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Enthalpy is the sum of the internal energy and the product of
                  pressure and volume.
                </p>
                <BlockMath math="H = U + PV" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="U" /> = Internal energy
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="V" /> = Volume
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Specific Heat Capacity (c)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Specific heat capacity is the amount of heat required to raise
                  the temperature of one unit mass of a substance by one degree
                  Celsius.
                </p>
                <BlockMath math="c = \frac{Q}{m\Delta T}" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Heat transferred
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="\Delta T" /> = Change in temperature
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
                    "Calculate the pressure exerted by 2 moles of an ideal gas confined to a volume of 5 L at a temperature of 300 K. (R = 8.314 J/mol·K)",
                  solution:
                    "\\(PV = nRT \\Rightarrow P = \\frac{nRT}{V} = \\frac{2 \\times 8.314 \\times 300}{5 \\times 10^{-3}} = 9.98 \\times 10^5 \\ \\text{Pa}\\)",
                },
                {
                  problem:
                    "Using the Van der Waals equation, calculate the pressure exerted by 1 mole of CO₂ at 300 K in a volume of 1 L. (a = 0.364 Pa·m⁶/mol², b = 4.27 x 10⁻⁵ m³/mol, R = 8.314 J/mol·K)",
                  solution:
                    "\\(\\left(P + a\\frac{n^2}{V^2}\\right)(V - nb) = nRT \\Rightarrow P = \\frac{nRT}{V - nb} - a\\frac{n^2}{V^2} = \\frac{1 \\times 8.314 \\times 300}{1 \\times 10^{-3} - 1 \\times 4.27 \\times 10^{-5}} - 0.364 \\frac{1^2}{(1 \\times 10^{-3})^2} \\approx 2.16 \\times 10^6 \\ \\text{Pa}\\)",
                },
                {
                  problem:
                    "Calculate the heat required to melt 2 kg of ice at 0°C to water at 0°C. (Latent heat of fusion for ice = 334 kJ/kg)",
                  solution:
                    "\\(Q = mL = 2 \\ \\text{kg} \\times 334000 \\ \\text{J/kg} = 668000 \\ \\text{J} = 668 \\ \\text{kJ}\\)",
                },
                {
                  problem:
                    "Determine the change in enthalpy when 1 kg of water is heated from 25°C to 100°C at constant pressure. (Specific heat capacity of water = 4186 J/kg·°C)",
                  solution:
                    "\\(Q = mc\\Delta T = 1 \\ \\text{kg} \\times 4186 \\ \\text{J/kg°C} \\times (100°C - 25°C) = 313950 \\ \\text{J} = 313.95 \\ \\text{kJ}\\) \\\\ At constant pressure, \\(\\Delta H = Q\\), so \\(\\Delta H = 313.95 \\ \\text{kJ}\\)",
                },
                {
                  problem:
                    "Calculate the change in Helmholtz free energy for a system where the internal energy decreases by 200 J, the temperature is 300 K, and the entropy increases by 0.5 J/K.",
                  solution:
                    "\\(A = U - TS \\Rightarrow \\Delta A = \\Delta U - T\\Delta S = -200 \\ \\text{J} - 300 \\ \\text{K} \\times 0.5 \\ \\text{J/K} = -200 - 150 = -350 \\ \\text{J}\\)",
                },
                {
                  problem:
                    "Calculate the change in Gibbs free energy for a reaction where the enthalpy change is -50 kJ and the entropy change is -0.1 kJ/K at a temperature of 298 K.",
                  solution:
                    "\\(G = H - TS \\Rightarrow \\Delta G = \\Delta H - T\\Delta S = -50 \\ \\text{kJ} - 298 \\ \\text{K} \\times (-0.1 \\ \\text{kJ/K}) = -50 + 29.8 = -20.2 \\ \\text{kJ}\\)",
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
          Characterizing the Behavior of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
