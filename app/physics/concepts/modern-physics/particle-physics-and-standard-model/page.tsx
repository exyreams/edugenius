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

export default function ParticlePhysicsStandardModel() {
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
      label: "Particle Physics & Standard Model",
      href: "/physics/concepts/modern-physics/particle-physics-standard-model",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Particle Physics & Standard Model
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Journey into the realm of the infinitesimally small and explore the
          fundamental constituents of matter and the forces that govern their
          interactions, as described by the Standard Model.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Particle Physics & Standard Model */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Particle Physics & Standard Model
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Particle physics is the study of the fundamental constituents of
              matter and the forces that govern their interactions. The Standard
              Model is a theoretical framework that describes three of the four
              known fundamental forces (electromagnetic, weak, and strong
              interactions) and classifies all known elementary particles.
            </p>
          </div>
        </div>

        {/* Fundamental Particles */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Fundamental Particles (Quarks, Leptons, Bosons)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Standard Model classifies elementary particles into two main
              categories: fermions (matter particles) and bosons (force
              carriers). Fermions are further divided into quarks and leptons.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Quarks
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Constituents of protons and neutrons (and other hadrons)
                  </li>
                  <li>Six flavors: up, down, charm, strange, top, bottom</li>
                  <li>Interact via the strong force (mediated by gluons)</li>
                  <li>Have fractional electric charge (+2/3 or -1/3)</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Leptons
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Do not interact via the strong force</li>
                  <li>
                    Six types: electron, muon, tau, and their associated
                    neutrinos
                  </li>
                  <li>
                    Charged leptons (e, μ, τ) interact via electromagnetic and
                    weak forces
                  </li>
                  <li>
                    Neutral leptons (ν<sub>e</sub>, ν<sub>μ</sub>, ν<sub>τ</sub>
                    ) interact only via the weak force
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Bosons
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Force-carrying particles</li>
                  <li>Photon (γ): Mediates electromagnetic force</li>
                  <li>W and Z bosons: Mediate weak force</li>
                  <li>Gluon (g): Mediates strong force</li>
                  <li>Higgs boson (H): Gives mass to other particles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Higgs Boson & Mass Generation */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Higgs Boson & Mass Generation
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Higgs boson is a fundamental particle associated with the
              Higgs field, a field that permeates all of space. The interaction
              of particles with the Higgs field is what gives them mass.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Higgs Field
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A field that permeates all space and interacts with particles.
                  The stronger the interaction, the greater the mass of the
                  particle.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Higgs Mechanism
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The process by which particles acquire mass through their
                  interaction with the Higgs field.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Higgs Boson
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  An excitation of the Higgs field. Its discovery in 2012 at the
                  Large Hadron Collider (LHC) was a major confirmation of the
                  Standard Model.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QED & QCD */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Quantum Electrodynamics (QED) & Quantum Chromodynamics (QCD)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum Electrodynamics (QED) and Quantum Chromodynamics (QCD) are
              quantum field theories that describe the electromagnetic and
              strong interactions, respectively.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Quantum Electrodynamics (QED)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Describes the interaction of light (photons) with charged
                  particles (e.g., electrons).
                  <br />
                  One of the most accurately tested theories in physics.
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Predicts phenomena like the magnetic moment of the electron
                    and the Lamb shift.
                  </li>
                  <li>Based on the principle of gauge symmetry.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Quantum Chromodynamics (QCD)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Describes the strong interaction between quarks and gluons.
                  <br />
                  Responsible for binding quarks together to form protons,
                  neutrons, and other hadrons.
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Features properties like color confinement (quarks cannot be
                    isolated) and asymptotic freedom (interaction strength
                    decreases at high energies).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Symmetry & Conservation Laws */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Symmetry & Conservation Laws
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Symmetries play a crucial role in particle physics. According to
              Noether&#39;s theorem, every continuous symmetry of a physical
              system is associated with a conserved quantity.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Symmetries in the Standard Model
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Gauge symmetries: Associated with the fundamental forces
                    (e.g., U(1) for electromagnetism, SU(3) for the strong
                    force).
                  </li>
                  <li>
                    Lorentz symmetry: Laws of physics are the same for all
                    observers in uniform motion.
                  </li>
                  <li>
                    CPT symmetry: Combined symmetry of charge conjugation (C),
                    parity (P), and time reversal (T).
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Conservation Laws
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Conservation of energy: Energy cannot be created or
                    destroyed, only transformed.
                  </li>
                  <li>
                    Conservation of momentum: Total momentum of a closed system
                    remains constant.
                  </li>
                  <li>
                    Conservation of electric charge: Total electric charge in a
                    closed system remains constant.
                  </li>
                  <li>
                    Conservation of baryon number and lepton number: These
                    quantum numbers are conserved in all known interactions
                    (with some exceptions in beyond-Standard-Model physics).
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
                  problem: "Calculate the electric charge of an up quark.",
                  solution:
                    "Up quark has a charge of +2/3 in units of the elementary charge (e). So, the charge is +2/3 e \\approx +1.07 \\times 10^{-19} \\ \\text{C}.",
                },
                {
                  problem:
                    "If the mass of the Higgs boson is 125 GeV/c², what is its mass in kilograms?",
                  solution:
                    "m = \\frac{E}{c^2} = \\frac{125 \\times 10^9 \\times 1.6 \\times 10^{-19} \\ \\text{J}}{(3 \\times 10^8 \\ \\text{m/s})^2} \\approx 2.22 \\times 10^{-25} \\ \\text{kg}",
                },
                {
                  problem:
                    "A proton is made up of two up quarks and one down quark. Calculate the total charge of a proton.",
                  solution:
                    "Charge of proton = 2(charge of up quark) + 1(charge of down quark) = 2(+2/3) + 1(-1/3) = +1 (in units of elementary charge e).",
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
          Exploring the Foundations of Reality
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
