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

export default function CosmologyAstrophysics() {
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
      label: "Cosmology & Astrophysics",
      href: "/physics/concepts/modern-physics/cosmology-astrophysics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Cosmology & Astrophysics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the vastness of the universe, from the Big Bang to the
          mysteries of dark matter and dark energy, and delve into the
          fascinating world of celestial objects like black holes and neutron
          stars.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Cosmology & Astrophysics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Cosmology & Astrophysics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Cosmology is the study of the origin, evolution, and large-scale
              structure of the universe. Astrophysics applies the principles of
              physics to understand celestial objects and phenomena. Together,
              they provide a comprehensive picture of the cosmos.
            </p>
          </div>
        </div>

        {/* Big Bang Theory */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Big Bang Theory
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Big Bang theory is the prevailing cosmological model for the
              universe from the earliest known periods through its subsequent
              large-scale evolution. It describes the universe as originating
              from an extremely hot, dense state about 13.8 billion years ago
              and expanding and cooling ever since.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Evidence
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Expansion of the universe: Observed redshift of distant
                    galaxies indicates they are moving away from us.
                  </li>
                  <li>
                    Cosmic Microwave Background (CMB) radiation: Uniform
                    afterglow of the Big Bang.
                  </li>
                  <li>
                    Abundance of light elements: Observed ratios of hydrogen,
                    helium, and other light elements match predictions of Big
                    Bang nucleosynthesis.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Timeline of the Early Universe
                </h3>
                <ul className="mt-2 list-decimal pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Planck epoch: Earliest known period, all forces unified.
                  </li>
                  <li>Inflation: Rapid expansion of the universe.</li>
                  <li>Quark epoch: Quarks, electrons, and neutrinos form.</li>
                  <li>
                    Hadron epoch: Quarks combine to form protons and neutrons.
                  </li>
                  <li>Nucleosynthesis: Light nuclei (H, He, Li) form.</li>
                  <li>
                    Recombination: Electrons combine with nuclei to form neutral
                    atoms, releasing the CMB.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Matter & Dark Energy */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Dark Matter & Dark Energy
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Observations suggest that the vast majority of the universe&#39;s
              content is made up of dark matter and dark energy, mysterious
              components that do not interact with light and are not directly
              observable.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Dark Matter
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Makes up about 27% of the universe&#39;s energy density.
                  </li>
                  <li>Does not emit, absorb, or reflect light.</li>
                  <li>
                    Detected through its gravitational effects on visible
                    matter, radiation, and the structure of the universe.
                  </li>
                  <li>
                    Candidates include Weakly Interacting Massive Particles
                    (WIMPs) and axions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Dark Energy
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Makes up about 68% of the universe&#39;s energy density.
                  </li>
                  <li>
                    Responsible for the accelerating expansion of the universe.
                  </li>
                  <li>
                    Its nature is a mystery; it may be a cosmological constant
                    or a dynamic field (quintessence).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Black Holes & Neutron Stars */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Black Holes & Neutron Stars
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Black holes and neutron stars are among the most extreme objects
              in the universe, formed from the remnants of massive stars.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Black Holes
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Regions of spacetime with such strong gravity that nothing,
                    not even light, can escape.
                  </li>
                  <li>
                    Formed when massive stars collapse at the end of their
                    lives.
                  </li>
                  <li>
                    Characterized by an event horizon, a boundary beyond which
                    escape is impossible.
                  </li>
                  <li>
                    Emit Hawking radiation, a theoretical prediction of thermal
                    radiation due to quantum effects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Neutron Stars
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Extremely dense remnants of massive stars that have
                    undergone a supernova explosion.
                  </li>
                  <li>
                    Composed primarily of neutrons, packed tightly together.
                  </li>
                  <li>Have incredibly strong magnetic fields.</li>
                  <li>
                    Some neutron stars, called pulsars, emit beams of
                    electromagnetic radiation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cosmic Microwave Background Radiation */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Cosmic Microwave Background Radiation
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Cosmic Microwave Background (CMB) is a faint, uniform
              radiation that fills the entire universe. It is considered the
              afterglow of the Big Bang and provides a snapshot of the universe
              when it was only about 380,000 years old.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Discovery and Properties
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Discovered in 1964 by Penzias and Wilson.</li>
                  <li>
                    Has a nearly perfect blackbody spectrum with a temperature
                    of about 2.7 Kelvin.
                  </li>
                  <li>
                    Almost uniform in all directions, but contains tiny
                    temperature fluctuations.
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
                  <li>Strong evidence for the Big Bang theory.</li>
                  <li>
                    Provides information about the early universe&#39;s
                    composition and conditions.
                  </li>
                  <li>
                    The tiny temperature fluctuations in the CMB are the seeds
                    of the large-scale structure of the universe (galaxies and
                    clusters of galaxies).
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
                    "The Hubble constant is approximately 70 km/s/Mpc. If a galaxy is 100 Mpc away, how fast is it receding from us?",
                  solution:
                    "v = H_0 d = (70 \\ \\text{km/s/Mpc})(100 \\ \\text{Mpc}) = 7000 \\ \\text{km/s}",
                },
                {
                  problem:
                    "Calculate the Schwarzschild radius of a black hole with a mass 10 times that of the Sun (M_Sun ≈ 2 × 10³⁰ kg).",
                  solution:
                    "R_s = \\frac{2GM}{c^2} = \\frac{2(6.67 \\times 10^{-11} \\ \\text{N m}^2/\\text{kg}^2)(10 \\times 2 \\times 10^{30} \\ \\text{kg})}{(3 \\times 10^8 \\ \\text{m/s})^2} \\approx 2.96 \\times 10^4 \\ \\text{m} \\approx 29.6 \\ \\text{km}",
                },
                {
                  problem:
                    "The peak wavelength of the CMB radiation is about 1.06 mm. Calculate the corresponding temperature using Wien's displacement law (b ≈ 2.9 × 10⁻³ m·K).",
                  solution:
                    "T = \\frac{b}{\\lambda_{max}} = \\frac{2.9 \\times 10^{-3} \\ \\text{m} \\cdot \\text{K}}{1.06 \\times 10^{-3} \\ \\text{m}} \\approx 2.74 \\ \\text{K}",
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
          From the Infinitesimal to the Infinite
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
