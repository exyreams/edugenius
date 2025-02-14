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

export default function CondensedMatterPhysics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Modern Physics",
      href: "/physics/concepts/modern-physics",
    },
    {
      label: "Condensed Matter Physics",
      href: "/physics/concepts/modern-physics/condensed-matter-physics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-teal-200 dark:to-blue-300">
          Condensed Matter Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fascinating world of Condensed Matter Physics, covering
          superconductivity, superfluidity, semiconductors, band theory, and
          Bose-Einstein condensates.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Condensed Matter Physics */}
        <div className="rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-6 dark:from-green-600 dark:to-emerald-600">
          <h2 className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-emerald-300 dark:to-green-300">
            Introduction to Condensed Matter Physics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Condensed Matter Physics is the field of physics that deals with
              the macroscopic and microscopic physical properties of matter,
              especially the solid and liquid phases which arise from
              electromagnetic forces between atoms. This section introduces the
              fundamental concepts and phenomena studied in condensed matter
              physics.
            </p>
          </div>
        </div>

        {/* Superconductivity & Superfluidity */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-200 to-cyan-200 p-6 dark:from-blue-600 dark:to-cyan-600">
          <h2 className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-cyan-300 dark:to-blue-300">
            Superconductivity & Superfluidity
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Superconductivity and superfluidity are two remarkable phenomena
              that occur at very low temperatures. Superconductivity is the
              ability of certain materials to conduct electric current with zero
              resistance, while superfluidity is the frictionless flow of a
              fluid.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Superconductivity
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Characterized by zero electrical resistance below a critical
                    temperature (<InlineMath math="T_c" />
                    ).
                  </li>
                  <li>
                    Explained by the BCS theory, involving the formation of
                    Cooper pairs of electrons.
                  </li>
                  <li>
                    Applications include MRI machines, magnetic levitation
                    trains, and power transmission.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Superfluidity
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Observed in liquid helium at temperatures below 2.17 K (the
                    lambda point).
                  </li>
                  <li>
                    Characterized by zero viscosity, allowing the fluid to flow
                    without any loss of kinetic energy.
                  </li>
                  <li>
                    Involves the formation of a Bose-Einstein condensate of
                    helium atoms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Semiconductors & Band Theory */}
        <div className="rounded-2xl bg-gradient-to-br from-yellow-200 to-lime-200 p-6 dark:from-yellow-600 dark:to-lime-600">
          <h2 className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300">
            Semiconductors & Band Theory
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Semiconductors are materials with electrical conductivity between
              that of a conductor and an insulator. Band theory explains the
              behavior of electrons in solids and the formation of energy bands
              that determine the electrical properties of materials.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Semiconductors
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Common examples include silicon (Si) and germanium (Ge).
                  </li>
                  <li>
                    Conductivity can be controlled by doping with impurities.
                  </li>
                  <li>
                    Used in electronic devices like transistors, diodes, and
                    solar cells.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Band Theory
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Describes the allowed energy levels for electrons in a
                    solid.
                  </li>
                  <li>Valence band: Highest occupied energy band.</li>
                  <li>Conduction band: Lowest unoccupied energy band.</li>
                  <li>
                    Band gap: Energy difference between the valence and
                    conduction bands.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Illustration: Band Gap */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <rect x="20" y="10" width="160" height="30" fill="#65a30d" />
              <rect x="20" y="60" width="160" height="30" fill="#16a34a" />
              <text
                x="100"
                y="30"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Conduction Band
              </text>
              <text
                x="100"
                y="80"
                fontSize="12"
                fill="white"
                textAnchor="middle"
              >
                Valence Band
              </text>
              <path
                d="M100 40 L100 60"
                stroke="#d97706"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text x="110" y="50" fontSize="12" fill="#d97706">
                Band Gap
              </text>
            </svg>
          </div>
        </div>

        {/* Bose-Einstein Condensates */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-pink-200 p-6 dark:from-rose-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-pink-300 dark:to-rose-300">
            Bose-Einstein Condensates
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A Bose-Einstein condensate (BEC) is a state of matter formed when
              a gas of bosons at very low densities is cooled to temperatures
              very close to absolute zero. Under such conditions, a large
              fraction of bosons occupy the lowest quantum state, at which point
              microscopic quantum phenomena become apparent.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Formed by cooling a gas of bosons to extremely low
                    temperatures.
                  </li>
                  <li>Macroscopic occupation of the ground state.</li>
                  <li>Described by the Gross-Pitaevskii equation.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Properties
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Coherence: All particles are in the same quantum state.
                  </li>
                  <li>Superfluidity: Can flow without viscosity.</li>
                  <li>
                    Interference: Can exhibit interference patterns like waves.
                  </li>
                </ul>
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
                    "A superconductor has a critical temperature of 77 K. If the resistance of the material is zero at 4 K, what is the resistance at 80 K?",
                  solution:
                    "Since the temperature is above the critical temperature (77 K), the material is no longer superconducting, and its resistance will be non-zero. However, the exact value of resistance cannot be determined without additional information.",
                },
                {
                  problem:
                    "Calculate the critical magnetic field for a superconductor at 4 K, given that the critical magnetic field at 0 K is 0.02 T and the critical temperature is 10 K.",
                  solution:
                    "B_c(T) = B_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right] = 0.02\\left[1 - \\left(\\frac{4}{10}\\right)^2\\right] = 0.02(1 - 0.16) = 0.0168 \\ \\text{T}",
                },
                {
                  problem:
                    "The band gap of a semiconductor is 1.1 eV. Calculate the wavelength of light that can excite an electron from the valence band to the conduction band. (h = 6.63 x 10⁻³⁴ J·s, c = 3 x 10⁸ m/s, 1 eV = 1.6 x 10⁻¹⁹ J)",
                  solution:
                    "E = \\frac{hc}{\\lambda} \\Rightarrow \\lambda = \\frac{hc}{E} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{1.1 \\times 1.6 \\times 10^{-19}} = 1.13 \\times 10^{-6} \\ \\text{m} = 1130 \\ \\text{nm}",
                },
                {
                  problem:
                    "A Bose-Einstein condensate is formed at a temperature of 100 nK. If the number density of the condensate is 10¹⁴ cm⁻³, calculate the critical temperature for Bose-Einstein condensation. (Assume the mass of the atoms is 87 u, 1 u = 1.66 x 10⁻²⁷ kg, k = 1.38 x 10⁻²³ J/K)",
                  solution:
                    "T_c = \\left(\\frac{n}{2.612}\\right)^{2/3} \\frac{h^2}{2\\pi mk} = \\left(\\frac{10^{14} \\times 10^6}{2.612}\\right)^{2/3} \\frac{(6.63 \\times 10^{-34})^2}{2\\pi (87 \\times 1.66 \\times 10^{-27})(1.38 \\times 10^{-23})} \\approx 2.4 \\times 10^{-7} \\ \\text{K} = 240 \\ \\text{nK} \\\\ \\text{Since the given temperature is lower than the calculated critical temperature, the BEC can be formed.}",
                },
                {
                  problem:
                    "The Fermi energy of a metal is 5 eV. Calculate the Fermi velocity of electrons in the metal. (Electron mass = 9.11 x 10⁻³¹ kg, 1 eV = 1.6 x 10⁻¹⁹ J)",
                  solution:
                    "E_F = \\frac{1}{2}m_e v_F^2 \\Rightarrow v_F = \\sqrt{\\frac{2E_F}{m_e}} = \\sqrt{\\frac{2 \\times 5 \\times 1.6 \\times 10^{-19}}{9.11 \\times 10^{-31}}} = 1.33 \\times 10^6 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A semiconductor has a band gap of 1.5 eV. Calculate the temperature at which the probability of an electron being in the conduction band is 0.01. (Assume the Fermi level is at the middle of the band gap, k = 1.38 x 10⁻²³ J/K)",
                  solution:
                    "f(E) = \\frac{1}{e^{(E - E_F)/kT} + 1} \\\\ 0.01 = \\frac{1}{e^{(0.75 \\times 1.6 \\times 10^{-19})/(1.38 \\times 10^{-23} T)} + 1} \\\\ e^{(0.75 \\times 1.6 \\times 10^{-19})/(1.38 \\times 10^{-23} T)} \\approx 99 \\\\ \\frac{0.75 \\times 1.6 \\times 10^{-19}}{1.38 \\times 10^{-23} T} = \\ln 99 \\\\ T = \\frac{0.75 \\times 1.6 \\times 10^{-19}}{1.38 \\times 10^{-23} \\times \\ln 99} \\approx 1885 \\ \\text{K}",
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
          Bridging the Microscopic and Macroscopic Worlds
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
