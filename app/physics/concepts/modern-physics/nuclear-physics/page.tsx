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

export default function NuclearPhysics() {
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
      label: "Nuclear Physics",
      href: "/physics/concepts/modern-physics/nuclear-physics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-red-200 dark:to-purple-300">
          Nuclear Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fascinating field of Nuclear Physics, covering
          radioactivity, nuclear fission and fusion, particle accelerators, and
          the role of neutrinos and weak interactions.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Nuclear Physics */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Introduction to Nuclear Physics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Nuclear Physics is the field of physics that studies the
              constituents and interactions of atomic nuclei. This section
              introduces the fundamental concepts of nuclear physics, including
              the structure of the nucleus, radioactivity, and nuclear
              reactions.
            </p>
          </div>
        </div>

        {/* Radioactivity */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Radioactivity (Alpha, Beta, Gamma Decay)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Radioactivity is the spontaneous emission of particles or
              electromagnetic radiation from the nucleus of an atom. The main
              types of radioactive decay are alpha, beta, and gamma decay.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Alpha Decay
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Emission of an alpha particle (helium nucleus,{" "}
                  <InlineMath math="^4_2\text{He}" />) from the nucleus.
                </p>
                <BlockMath math="^{A}_{Z}X \rightarrow ^{A-4}_{Z-2}Y + ^4_2\text{He}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Beta Decay
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Emission of a beta particle (electron or positron) and a
                  neutrino from the nucleus.
                </p>
                <BlockMath math="^{A}_{Z}X \rightarrow ^{A}_{Z+1}Y + e^- + \bar{\nu}_e" />
                <BlockMath math="^{A}_{Z}X \rightarrow ^{A}_{Z-1}Y + e^+ + \nu_e" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  Gamma Decay
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Emission of a gamma-ray photon from the nucleus, usually
                  following alpha or beta decay.
                </p>
                <BlockMath math="^{A}_{Z}X^* \rightarrow ^{A}_{Z}X + \gamma" />
              </div>
            </div>
          </div>
        </div>

        {/* Nuclear Fission & Fusion */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Nuclear Fission & Fusion
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Nuclear fission is the process of splitting a heavy nucleus into
              two lighter nuclei, releasing a large amount of energy. Nuclear
              fusion is the process of combining two light nuclei into a heavier
              nucleus, also releasing a large amount of energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Nuclear Fission
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Fission typically occurs when a heavy nucleus, such as
                  uranium-235, absorbs a neutron and splits into two smaller
                  nuclei, releasing neutrons and energy.
                </p>
                <BlockMath math="^{235}_{92}\text{U} + ^1_0\text{n} \rightarrow ^{141}_{56}\text{Ba} + ^{92}_{36}\text{Kr} + 3^1_0\text{n} + \text{Energy}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Nuclear Fusion
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Fusion is the process that powers the sun and stars. It
                  involves the combining of light nuclei, such as hydrogen
                  isotopes, to form a heavier nucleus, releasing energy.
                </p>
                <BlockMath math="^2_1\text{H} + ^3_1\text{H} \rightarrow ^4_2\text{He} + ^1_0\text{n} + \text{Energy}" />
              </div>
            </div>
          </div>
        </div>

        {/* Particle Accelerators */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Particle Accelerators
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Particle accelerators are devices that use electromagnetic fields
              to propel charged particles to very high speeds and energies. They
              are used in scientific research to study the fundamental
              constituents of matter and the forces that govern them.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Types of Accelerators
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Linear accelerators (Linacs): Accelerate particles in a
                    straight line.
                  </li>
                  <li>
                    Cyclotrons: Use a magnetic field to accelerate particles in
                    a spiral path.
                  </li>
                  <li>
                    Synchrotrons: Use varying magnetic fields to accelerate
                    particles in a circular path.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Research in particle physics, nuclear physics, and materials
                    science.
                  </li>
                  <li>Medical applications, such as cancer therapy.</li>
                  <li>Industrial applications, such as ion implantation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Neutrinos & Weak Interactions */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Neutrinos & Weak Interactions
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Neutrinos are elementary particles that interact only via the weak
              force and gravity. They are produced in various nuclear reactions,
              including beta decay and nuclear fusion in the sun. The weak
              interaction is one of the four fundamental forces and is
              responsible for processes like beta decay.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Neutrinos
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Electrically neutral, nearly massless particles.</li>
                  <li>
                    Three types (flavors): electron neutrino (
                    <InlineMath math="\nu_e" />
                    ), muon neutrino (
                    <InlineMath math="\nu_\mu" />
                    ), and tau neutrino (
                    <InlineMath math="\nu_\tau" />
                    ).
                  </li>
                  <li>
                    Can oscillate between flavors, a phenomenon known as
                    neutrino oscillation.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Weak Interactions
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Mediated by W and Z bosons.</li>
                  <li>
                    Responsible for processes like beta decay and neutron decay.
                  </li>
                  <li>
                    Much weaker than the strong and electromagnetic forces but
                    stronger than gravity.
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
                    "Calculate the energy released in the alpha decay of Uranium-238 to Thorium-234. (Mass of U-238 = 238.05079 u, Mass of Th-234 = 234.04363 u, Mass of α particle = 4.00260 u, 1 u = 931.5 MeV/c²)",
                  solution:
                    "\\Delta m = m_U - (m_{Th} + m_\\alpha) = 238.05079 - (234.04363 + 4.00260) = 0.00456 \\ \\text{u} \\\\ E = \\Delta m \\times 931.5 \\ \\text{MeV/c}^2 = 0.00456 \\times 931.5 = 4.25 \\ \\text{MeV}",
                },
                {
                  problem:
                    "A radioactive sample has a half-life of 20 minutes. If the initial activity is 1000 Bq, what will be the activity after 1 hour?",
                  solution:
                    "A(t) = A_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} = 1000 \\left(\\frac{1}{2}\\right)^{\\frac{60}{20}} = 1000 \\left(\\frac{1}{2}\\right)^3 = 1000 \\times \\frac{1}{8} = 125 \\ \\text{Bq}",
                },
                {
                  problem:
                    "Calculate the binding energy per nucleon for Iron-56 (⁵⁶₂₆Fe). (Mass of Fe-56 = 55.93494 u, Mass of proton = 1.00728 u, Mass of neutron = 1.00866 u, 1 u = 931.5 MeV/c²)",
                  solution:
                    "\\Delta m = 26m_p + 30m_n - m_{Fe} = 26(1.00728) + 30(1.00866) - 55.93494 = 0.52844 \\ \\text{u} \\\\ BE = \\Delta m \\times 931.5 \\ \\text{MeV/c}^2 = 0.52844 \\times 931.5 = 492.2 \\ \\text{MeV} \\\\ BE/\\text{nucleon} = \\frac{492.2}{56} = 8.79 \\ \\text{MeV/nucleon}",
                },
                {
                  problem:
                    "In a nuclear fission reaction, a neutron is absorbed by Uranium-235, producing Barium-141, Krypton-92, and three neutrons. Calculate the energy released. (Mass of U-235 = 235.04393 u, Mass of Ba-141 = 140.91441 u, Mass of Kr-92 = 91.92616 u, Mass of neutron = 1.00866 u, 1 u = 931.5 MeV/c²)",
                  solution:
                    "\\Delta m = m_U + m_n - (m_{Ba} + m_{Kr} + 3m_n) = 235.04393 + 1.00866 - (140.91441 + 91.92616 + 3 \\times 1.00866) = 0.18604 \\ \\text{u} \\\\ E = \\Delta m \\times 931.5 \\ \\text{MeV/c}^2 = 0.18604 \\times 931.5 = 173.3 \\ \\text{MeV}",
                },
                {
                  problem:
                    "Calculate the energy released in the fusion of two deuterium nuclei to form helium-4. (Mass of deuterium = 2.01410 u, Mass of helium-4 = 4.00260 u, 1 u = 931.5 MeV/c²)",
                  solution:
                    "\\Delta m = 2m_D - m_{He} = 2(2.01410) - 4.00260 = 0.0256 \\ \\text{u} \\\\ E = \\Delta m \\times 931.5 \\ \\text{MeV/c}^2 = 0.0256 \\times 931.5 = 23.8 \\ \\text{MeV}",
                },
                {
                  problem:
                    "A particle accelerator accelerates protons to an energy of 1 TeV. Calculate the speed of the protons as a fraction of the speed of light. (Proton rest mass = 938.3 MeV/c²)",
                  solution:
                    "E = \\gamma m_0 c^2 \\Rightarrow \\gamma = \\frac{E}{m_0 c^2} = \\frac{10^{12} \\ \\text{eV}}{938.3 \\times 10^6 \\ \\text{eV}} = 1065.6 \\\\ \\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}} \\Rightarrow \\frac{v}{c} = \\sqrt{1 - \\frac{1}{\\gamma^2}} = \\sqrt{1 - \\frac{1}{1065.6^2}} \\approx 0.9999996",
                },
                {
                  problem:
                    "A muon neutrino has an energy of 100 MeV. Calculate its momentum, assuming the neutrino is massless. (1 eV = 1.6 x 10⁻¹⁹ J, c = 3 x 10⁸ m/s)",
                  solution:
                    "E = pc \\Rightarrow p = \\frac{E}{c} = \\frac{100 \\times 10^6 \\times 1.6 \\times 10^{-19}}{3 \\times 10^8} = 5.33 \\times 10^{-20} \\ \\text{kg m/s}",
                },
                {
                  problem:
                    "A radioactive source has an activity of 500 Bq. If the half-life of the source is 15 hours, calculate the number of radioactive nuclei present in the source. (1 Bq = 1 decay/s)",
                  solution:
                    "A = \\lambda N \\Rightarrow N = \\frac{A}{\\lambda} \\\\ \\lambda = \\frac{\\ln 2}{T_{1/2}} = \\frac{0.693}{15 \\times 3600} = 1.28 \\times 10^{-5} \\ \\text{s}^{-1} \\\\ N = \\frac{500}{1.28 \\times 10^{-5}} = 3.9 \\times 10^7",
                },
                {
                  problem:
                    "Calculate the Q-value of the beta-minus decay of Carbon-14 to Nitrogen-14. (Mass of C-14 = 14.00324 u, Mass of N-14 = 14.00307 u, Mass of electron = 0.00055 u, 1 u = 931.5 MeV/c²)",
                  solution:
                    "\\Delta m = m_C - (m_N + m_e) = 14.00324 - (14.00307 + 0.00055) = -0.00038 \\ \\text{u} \\\\ Q = \\Delta m \\times 931.5 \\ \\text{MeV/c}^2 = -0.00038 \\times 931.5 = -0.35 \\ \\text{MeV} \\\\ \\text{Since the mass difference is negative, the Q-value should be calculated as:} \\\\ Q = (m_C - m_N - m_e) \\times 931.5 = (14.00324 - 14.00307 - 0.00055) \\times 931.5 = 0.156 \\ \\text{MeV}",
                },
                {
                  problem:
                    "The activity of a radioactive sample decreases from 800 Bq to 100 Bq in 12 hours. Calculate the half-life of the sample.",
                  solution:
                    "A(t) = A_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} \\Rightarrow \\frac{A(t)}{A_0} = \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} \\\\ \\frac{100}{800} = \\left(\\frac{1}{2}\\right)^{\\frac{12}{T_{1/2}}} \\Rightarrow \\frac{1}{8} = \\left(\\frac{1}{2}\\right)^{\\frac{12}{T_{1/2}}} \\\\ 3 = \\frac{12}{T_{1/2}} \\Rightarrow T_{1/2} = \\frac{12}{3} = 4 \\ \\text{hours}",
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
          Exploring the Heart of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
