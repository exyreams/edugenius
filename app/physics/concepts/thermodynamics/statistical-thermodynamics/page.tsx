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

export default function StatisticalThermodynamics() {
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
      label: "Statistical Thermodynamics",
      href: "/physics/concepts/thermodynamics/statistical-thermodynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Statistical Thermodynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the microscopic origins of thermodynamic behavior, bridging
          the gap between the quantum world of particles and the macroscopic
          world of classical thermodynamics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Statistical Thermodynamics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Statistical Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Statistical thermodynamics provides a framework for relating the
              microscopic properties of individual atoms and molecules to the
              macroscopic, bulk properties of materials that can be observed in
              everyday life. It connects classical thermodynamics to the quantum
              world.
            </p>
          </div>
        </div>

        {/* Microstates & Macrostates */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Microstates & Macrostates
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A <b>microstate</b> is a specific microscopic configuration of a
              thermodynamic system, specifying the quantum states of all its
              constituent particles. A <b>macrostate</b> is defined by the
              macroscopic properties of the system (e.g., temperature, pressure,
              volume) and corresponds to many possible microstates.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Many different microstates can correspond to the same
                    macrostate.
                  </li>
                  <li>
                    The number of microstates corresponding to a given
                    macrostate is called its multiplicity (Ω).
                  </li>
                  <li>
                    Statistical thermodynamics postulates that all accessible
                    microstates are equally probable.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Example
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Consider a system of 4 coins. A macrostate could be defined by
                  the number of heads (e.g., 2 heads). The corresponding
                  microstates would be all the possible arrangements of 2 heads
                  and 2 tails (e.g., HHTT, HTHT, HTTH, THHT, THTH, TTHH).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Boltzmann Distribution & Partition Function */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Boltzmann Distribution & Partition Function
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Boltzmann distribution describes the probability of a system
              being in a particular state as a function of that state&#39;s
              energy and the temperature of the system. The partition function
              is a normalization factor that plays a central role in statistical
              thermodynamics.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Boltzmann Distribution
                </h3>
                <BlockMath math="P_i = \frac{e^{-E_i/k_BT}}{Z}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="P_i" /> = Probability of the system being in
                  state i
                  <br />
                  <InlineMath math="E_i" /> = Energy of state i
                  <br />
                  <InlineMath math="k_B" /> = Boltzmann constant
                  <br />
                  <InlineMath math="T" /> = Temperature
                  <br />
                  <InlineMath math="Z" /> = Partition function
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Partition Function
                </h3>
                <BlockMath math="Z = \sum_i e^{-E_i/k_BT}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The partition function is the sum of the Boltzmann factors for
                  all possible states of the system. It provides a measure of
                  the number of thermally accessible states at a given
                  temperature.
                  <br />
                  It can be used to calculate thermodynamic properties like
                  internal energy, entropy, and free energy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Entropy and Probability */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Entropy and Probability
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              In statistical thermodynamics, entropy is related to the
              multiplicity (Ω) of a macrostate, which is the number of
              microstates corresponding to that macrostate. The more microstates
              a macrostate has, the higher its probability and the higher its
              entropy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Boltzmann&#39;s Entropy Formula
                </h3>
                <BlockMath math="S = k_B \ln \Omega" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="S" /> = Entropy
                  <br />
                  <InlineMath math="k_B" /> = Boltzmann constant
                  <br />
                  <InlineMath math="\Omega" /> = Multiplicity (number of
                  microstates)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Statistical Interpretation of the Second Law
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Second Law of Thermodynamics can be interpreted
                  statistically: systems tend to evolve towards macrostates with
                  higher multiplicity (higher probability) because there are
                  more ways to achieve those states.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Maxwell-Boltzmann, Bose-Einstein, and Fermi-Dirac Statistics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Maxwell-Boltzmann, Bose-Einstein, and Fermi-Dirac Statistics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Different types of particles obey different statistical
              distributions depending on their quantum nature:
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Maxwell-Boltzmann Statistics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Applies to distinguishable, non-interacting particles.
                  </li>
                  <li>Classical particles (e.g., atoms in an ideal gas).</li>
                  <li>Any number of particles can occupy the same state.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Bose-Einstein Statistics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Applies to indistinguishable particles with integer spin
                    (bosons).
                  </li>
                  <li>Examples: photons, helium-4 atoms.</li>
                  <li>
                    Any number of bosons can occupy the same quantum state
                    (leading to phenomena like Bose-Einstein condensation).
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Fermi-Dirac Statistics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Applies to indistinguishable particles with half-integer
                    spin (fermions).
                  </li>
                  <li>Examples: electrons, protons, neutrons.</li>
                  <li>
                    Pauli Exclusion Principle: Only one fermion can occupy a
                    given quantum state.
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
                    "A system has two energy levels, E₁ = 0 and E₂ = ε. Calculate the ratio of the probabilities of the system being in each state at temperature T.",
                  solution:
                    "\\frac{P_2}{P_1} = \\frac{e^{-E_2/k_BT}}{e^{-E_1/k_BT}} = \\frac{e^{-\\epsilon/k_BT}}{e^0} = e^{-\\epsilon/k_BT}",
                },
                {
                  problem:
                    "A system has a partition function Z = 4 at a certain temperature. If the ground state energy is 0, what is the probability of finding the system in the ground state?",
                  solution:
                    "P_0 = \\frac{e^{-E_0/k_BT}}{Z} = \\frac{e^0}{4} = \\frac{1}{4} = 0.25",
                },
                {
                  problem:
                    "Calculate the entropy of a system with 1000 possible microstates.",
                  solution:
                    "S = k_B \\ln \\Omega = (1.38 \\times 10^{-23} \\ \\text{J/K}) \\ln 1000 \\approx 9.57 \\times 10^{-23} \\ \\text{J/K}",
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
          Connecting the Microscopic and Macroscopic Worlds
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
