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

export default function ElectromagneticWaves() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Electromagnetism",
      href: "/physics/concepts/electromagnetism",
    },
    {
      label: "Electromagnetic Waves",
      href: "/physics/concepts/electromagnetism/electromagnetic-waves",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Electromagnetic Waves
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fascinating world of electromagnetic waves, from their
          theoretical foundation in Maxwell&#39;s equations to their diverse
          manifestations across the electromagnetic spectrum and their role in
          energy transport.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Electromagnetic Waves */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Electromagnetic Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Electromagnetic waves are disturbances that propagate through
              space, consisting of oscillating electric and magnetic fields
              perpendicular to each other and to the direction of propagation.
              They are transverse waves and can travel through a vacuum.
            </p>
          </div>
        </div>

        {/* Maxwell's Equations & Wave Nature of Light */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Maxwell&#39;s Equations & Wave Nature of Light
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Maxwell&#39;s equations are a set of four fundamental equations
              that describe the behavior of electric and magnetic fields and
              their interactions with matter. They predicted the existence of
              electromagnetic waves and showed that light itself is an
              electromagnetic wave.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Maxwell&#39;s Equations (in vacuum)
                </h3>
                <BlockMath math="\nabla \cdot \mathbf{E} = 0" />
                <BlockMath math="\nabla \cdot \mathbf{B} = 0" />
                <BlockMath math="\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}" />
                <BlockMath math="\nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> is the electric field.
                  <br />
                  <InlineMath math="\mathbf{B}" /> is the magnetic field.
                  <br />
                  <InlineMath math="\mu_0" /> is the permeability of free space.
                  <br />
                  <InlineMath math="\epsilon_0" /> is the permittivity of free
                  space.
                  <br />
                  <InlineMath math="\nabla \cdot" /> is the divergence operator.
                  <br />
                  <InlineMath math="\nabla \times" /> is the curl operator.
                  <br />
                  <InlineMath math="\frac{\partial}{\partial t}" /> is the
                  partial derivative with respect to time.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Wave Equation for Light
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Maxwell&#39;s equations can be manipulated to derive the wave
                  equation for electromagnetic waves. The speed of light in a
                  vacuum, <InlineMath math="c" /> is related to the constants{" "}
                  <InlineMath math="\mu_0" /> and{" "}
                  <InlineMath math="\epsilon_0" />.
                </p>
                <BlockMath math="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}" />
              </div>
            </div>
          </div>
        </div>

        {/* Polarization of Light */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Polarization of Light
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Polarization describes the orientation of the oscillations of the
              electric field in an electromagnetic wave. Light can be linearly
              polarized, circularly polarized, or elliptically polarized.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Linear Polarization
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The electric field oscillates in a single plane.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Circular Polarization
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The electric field vector rotates in a circular path around
                  the direction of propagation.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Unpolarized Light
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Mixture of waves with random polarization directions.
                  <br />
                  Can be polarized using filters (e.g., Polaroid).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Electromagnetic Spectrum */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Electromagnetic Spectrum
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The electromagnetic spectrum is the range of all possible
              frequencies of electromagnetic radiation. It is divided into
              different regions based on wavelength and frequency, each with its
              own characteristics and applications.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Radio Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Longest wavelength, lowest frequency. Used in communication
                  (radio, television).
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Microwaves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Used in microwave ovens, radar, and communication.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Infrared
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Associated with heat. Used in thermal imaging and remote
                  controls.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Visible Light
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The only part of the spectrum visible to the human eye. Colors
                  correspond to different wavelengths.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Ultraviolet (UV)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Can cause sunburn and other biological effects. Used in
                  sterilization.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  X-rays
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Used in medical imaging and to study crystal structures.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Gamma Rays
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Highest frequency, shortest wavelength. Produced in nuclear
                  reactions and radioactive decay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Energy Transport */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Energy Transport (Poynting Vector)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Electromagnetic waves carry energy, and the rate of energy
              transport per unit area is described by the Poynting vector.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Poynting Vector
                </h3>
                <BlockMath math="\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{S}" /> = Poynting vector
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Significance
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Points in the direction of energy flow.</li>
                  <li>
                    Magnitude represents the power per unit area (intensity) of
                    the electromagnetic wave.
                  </li>
                  <li>
                    Used to calculate the energy radiated by antennas, the solar
                    energy received by Earth, etc.
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
                    "Calculate the speed of light in a vacuum using the values of ε₀ (8.85 × 10⁻¹² F/m) and μ₀ (4π × 10⁻⁷ H/m).",
                  solution:
                    "c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = \\frac{1}{\\sqrt{(4\\pi \\times 10^{-7} \\ \\text{H/m})(8.85 \\times 10^{-12} \\ \\text{F/m})}} \\approx 3 \\times 10^8 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A linearly polarized light wave has an electric field amplitude of 100 V/m. What is the intensity of the wave?",
                  solution:
                    "I = \\frac{1}{2} c \\epsilon_0 E_0^2 = \\frac{1}{2} (3 \\times 10^8 \\ \\text{m/s})(8.85 \\times 10^{-12} \\ \\text{F/m}) (100 \\ \\text{V/m})^2 \\approx 13.28 \\ \\text{W/m}^2",
                },
                {
                  problem:
                    "The intensity of sunlight at the Earth's surface is about 1000 W/m². Calculate the magnitude of the Poynting vector.",
                  solution:
                    "The magnitude of the Poynting vector represents the intensity of the electromagnetic wave. Therefore, S = 1000 \\ \\text{W/m}^2",
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
          Illuminating the Universe&#39;s Mysteries
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
