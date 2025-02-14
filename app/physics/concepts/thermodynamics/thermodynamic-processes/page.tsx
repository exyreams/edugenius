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

export default function ThermodynamicProcesses() {
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
      label: "Thermodynamic Processes",
      href: "/physics/concepts/thermodynamics/thermodynamic-processes",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Thermodynamic Processes
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the different types of processes that thermodynamic systems
          undergo, and understand how they are characterized by specific
          constraints and the paths they follow on state diagrams.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Thermodynamic Processes */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Thermodynamic Processes
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A thermodynamic process is a change in the state of a
              thermodynamic system, typically defined by changes in state
              variables such as pressure, volume, temperature, and internal
              energy. Different types of processes are characterized by specific
              constraints or conditions that are held constant.
            </p>
          </div>
        </div>

        {/* Isothermal, Adiabatic, Isobaric, and Isochoric Processes */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Isothermal, Adiabatic, Isobaric, and Isochoric Processes
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              These are four fundamental thermodynamic processes, each defined
              by a specific constraint:
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Isothermal Process
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Occurs at constant temperature (
                  <InlineMath math="T = \text{constant}" />
                  ).
                  <br />
                  For an ideal gas: <InlineMath math="PV = \text{constant}" />.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Adiabatic Process
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Occurs with no heat transfer (<InlineMath math="Q = 0" />
                  ).
                  <br />
                  For an ideal gas:{" "}
                  <InlineMath math="PV^\gamma = \text{constant}" />.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Isobaric Process
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Occurs at constant pressure (
                  <InlineMath math="P = \text{constant}" />
                  ).
                  <br />
                  Work done: <InlineMath math="W = P\Delta V" />.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Isochoric Process
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Occurs at constant volume (
                  <InlineMath math="V = \text{constant}" />
                  ).
                  <br />
                  No work is done: <InlineMath math="W = 0" />.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reversible vs. Irreversible Processes */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Reversible vs. Irreversible Processes
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A reversible process is an idealized process that can be reversed
              without any net change in either the system or its surroundings.
              An irreversible process is a process that cannot be reversed to
              restore both the system and its surroundings to their original
              states.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Reversible Processes
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Theoretical idealization; occur infinitely slowly.</li>
                  <li>System is always in equilibrium during the process.</li>
                  <li>No energy is dissipated (e.g., through friction).</li>
                  <li>
                    Can be exactly reversed, returning the system and
                    surroundings to their initial states.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Irreversible Processes
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>All real processes are irreversible to some extent.</li>
                  <li>
                    Involve dissipative effects (e.g., friction, turbulence).
                  </li>
                  <li>
                    Result in an increase in the total entropy of the system and
                    its surroundings.
                  </li>
                  <li>
                    Cannot be exactly reversed; some energy is always lost.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Polytropic Processes */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Polytropic Processes
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A polytropic process is a thermodynamic process that obeys the
              relation:
            </p>
            <BlockMath math="PV^n = \text{constant}" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Where <InlineMath math="P" /> is the pressure,{" "}
              <InlineMath math="V" /> is the volume, and <InlineMath math="n" />{" "}
              is the polytropic index, a constant for the process.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Special Cases
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <InlineMath math="n = 0" />: Isobaric process
                  </li>
                  <li>
                    <InlineMath math="n = 1" />: Isothermal process (for an
                    ideal gas)
                  </li>
                  <li>
                    <InlineMath math="n = \gamma" />: Adiabatic process (where{" "}
                    <InlineMath math="\gamma" /> is the heat capacity ratio)
                  </li>
                  <li>
                    <InlineMath math="n = \infty" />: Isochoric process
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Polytropic processes can be used to model various real-world
                  processes that do not fall neatly into the categories of
                  isothermal, adiabatic, isobaric, or isochoric.
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
                    "An ideal gas undergoes an isothermal expansion at 300 K, doing 500 J of work. Calculate the change in internal energy and the heat added to the system.",
                  solution:
                    "For an isothermal process, \\Delta U = 0 \\\\ Q = W = 500 \\ \\text{J}",
                },
                {
                  problem:
                    "A gas expands adiabatically, doing 800 J of work. What is the change in internal energy of the gas?",
                  solution:
                    "For an adiabatic process, Q = 0 \\\\ \\Delta U = Q - W = 0 - 800 \\ \\text{J} = -800 \\ \\text{J}",
                },
                {
                  problem:
                    "A gas is compressed isobarically at a pressure of 2 atm from a volume of 5 L to 2 L. Calculate the work done on the gas. (1 atm = 1.013 × 10⁵ Pa)",
                  solution:
                    "W = P\\Delta V = (2 \\times 1.013 \\times 10^5 \\ \\text{Pa})(2 \\times 10^{-3} \\ \\text{m}^3 - 5 \\times 10^{-3} \\ \\text{m}^3) = -607.8 \\ \\text{J} \\\\ \\text{(Note: Work done on the gas is negative in this convention)}",
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
          Mapping the Transformations of Energy
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
