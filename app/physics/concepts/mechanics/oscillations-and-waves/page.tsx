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

export default function OscillationsAndWaves() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Mechanics", href: "/physics/concepts/mechanics" },
    {
      label: "Oscillations & Waves",
      href: "/physics/concepts/mechanics/oscillations-and-waves",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-purple-200 dark:to-pink-300">
          Oscillations & Waves
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fascinating world of oscillations and waves, including
          simple harmonic motion, damped and forced oscillations, resonance, and
          the properties of wave motion.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Oscillations & Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-fuchsia-200 to-pink-200 p-6 dark:from-fuchsia-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-pink-300 dark:to-purple-300">
            Introduction to Oscillations & Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Oscillations and waves are fundamental phenomena in physics that
              describe repetitive motions and the propagation of disturbances.
              This section introduces the basic concepts of oscillations and
              waves, setting the stage for a deeper exploration of these topics.
            </p>
          </div>
        </div>

        {/* Simple Harmonic Motion (SHM) */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Simple Harmonic Motion (SHM)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Simple Harmonic Motion (SHM) is a special type of periodic motion
              where the restoring force is directly proportional to the
              displacement and acts towards the equilibrium position.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Displacement (<InlineMath math="x" />
                    ): Distance from the equilibrium position.
                  </li>
                  <li>
                    Amplitude (<InlineMath math="A" />
                    ): Maximum displacement from equilibrium.
                  </li>
                  <li>
                    Period (<InlineMath math="T" />
                    ): Time for one complete oscillation.
                  </li>
                  <li>
                    Frequency (<InlineMath math="f" />
                    ): Number of oscillations per unit time.
                  </li>
                  <li>
                    Angular frequency (<InlineMath math="\omega" />
                    ): <InlineMath math="\omega = 2\pi f = \frac{2\pi}{T}" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Equations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Displacement:{" "}
                    <InlineMath math="x(t) = A\cos(\omega t + \phi)" />
                  </li>
                  <li>
                    Velocity:{" "}
                    <InlineMath math="v(t) = -A\omega\sin(\omega t + \phi)" />
                  </li>
                  <li>
                    Acceleration:{" "}
                    <InlineMath math="a(t) = -A\omega^2\cos(\omega t + \phi)" />
                  </li>
                  <li>
                    Restoring force: <InlineMath math="F = -kx" />
                  </li>
                </ul>
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="A" /> = Amplitude
                  <br />
                  <InlineMath math="\omega" /> = Angular frequency
                  <br />
                  <InlineMath math="\phi" /> = Phase constant
                  <br />
                  <InlineMath math="k" /> = Spring constant
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Simple Harmonic Motion */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <path
                d="M20 50 H180"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 20 Q120 50 100 80 Q80 50 100 20"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4"
              />
              <circle cx="100" cy="50" r="4" fill="#3b82f6" />
              <text x="90" y="45" fontSize="12" fill="#3b82f6">
                x
              </text>
              <text x="105" y="15" fontSize="12" fill="#3b82f6">
                A
              </text>
              <text x="95" y="90" fontSize="12" fill="#3b82f6">
                -A
              </text>
            </svg>
          </div>
        </div>

        {/* Damped & Forced Oscillations */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-yellow-300 dark:to-orange-300">
            Damped & Forced Oscillations
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Damped oscillations occur when an oscillating system loses energy
              over time, usually due to friction. Forced oscillations occur when
              an external force is applied to an oscillating system.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Damped Oscillations
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In damped oscillations, the amplitude of oscillation decreases
                  over time due to energy dissipation.
                </p>
                <BlockMath math="x(t) = Ae^{-\gamma t}\cos(\omega' t + \phi)" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="\gamma" /> = Damping constant
                  <br />
                  <InlineMath math="\omega'" /> = Angular frequency of damped
                  oscillation
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Forced Oscillations
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Forced oscillations occur when a system is driven by an
                  external periodic force.
                </p>
                <BlockMath math="F(t) = F_0\cos(\omega t)" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="F_0" /> = Amplitude of the driving force
                  <br />
                  <InlineMath math="\omega" /> = Angular frequency of the
                  driving force
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resonance */}
        <div className="rounded-2xl bg-gradient-to-br from-green-200 to-lime-200 p-6 dark:from-green-600 dark:to-lime-600">
          <h2 className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300">
            Resonance
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Resonance is a phenomenon that occurs when the driving frequency
              of a forced oscillation matches the natural frequency of the
              system, resulting in a large amplitude of oscillation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Natural frequency (<InlineMath math="f_0" />
                    ): The frequency at which a system oscillates when not
                    subjected to a continuous or repeated external force.
                  </li>
                  <li>
                    Resonant frequency (<InlineMath math="f_r" />
                    ): The frequency at which the amplitude of oscillation is
                    maximum.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Tuning a radio to a specific frequency.</li>
                  <li>Musical instruments producing specific notes.</li>
                  <li>
                    Mechanical systems like bridges and buildings vibrating
                    under specific conditions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Motion (Transverse & Longitudinal) */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 p-6 dark:from-rose-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-rose-300">
            Wave Motion (Transverse & Longitudinal)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Wave motion is the propagation of disturbances from one place to
              another. Waves can be classified as transverse or longitudinal
              based on the direction of oscillation relative to the direction of
              wave propagation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Transverse Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In transverse waves, the particles of the medium oscillate
                  perpendicular to the direction of wave propagation.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Examples: Light waves, water waves (surface).</li>
                  <li>
                    Characteristics: Crests (highest points) and troughs (lowest
                    points).
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  Longitudinal Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In longitudinal waves, the particles of the medium oscillate
                  parallel to the direction of wave propagation.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Examples: Sound waves, seismic P-waves.</li>
                  <li>
                    Characteristics: Compressions (regions of high density) and
                    rarefactions (regions of low density).
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Wave Properties */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Wave Properties
            </h3>
            <div className="mt-2 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h4 className="text-md font-medium text-orange-600 dark:text-orange-300">
                  Wavelength (<InlineMath math="\lambda" />)
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  The distance between two consecutive points in the same phase
                  (e.g., crest to crest or trough to trough).
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h4 className="text-md font-medium text-rose-600 dark:text-rose-300">
                  Wave Speed (<InlineMath math="v" />)
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  The speed at which a wave propagates through a medium.
                  <BlockMath math="v = f\lambda" />
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
                    "A mass-spring system has a mass of 0.5 kg and a spring constant of 50 N/m. Calculate the angular frequency of oscillation.",
                  solution:
                    "\\omega = \\sqrt{\\frac{k}{m}} = \\sqrt{\\frac{50}{0.5}} = 10 \\ \\text{rad/s}",
                },
                {
                  problem:
                    "A simple pendulum has a length of 1 m. Calculate its period of oscillation. (Assume g = 9.8 m/s²)",
                  solution:
                    "T = 2\\pi\\sqrt{\\frac{L}{g}} = 2\\pi\\sqrt{\\frac{1}{9.8}} = 2.01 \\ \\text{s}",
                },
                {
                  problem:
                    "A damped oscillator has a mass of 0.2 kg, a spring constant of 80 N/m, and a damping constant of 0.05 kg/s. Calculate the angular frequency of the damped oscillation.",
                  solution:
                    "\\omega' = \\sqrt{\\frac{k}{m} - \\frac{\\gamma^2}{4m^2}} = \\sqrt{\\frac{80}{0.2} - \\frac{0.05^2}{4 \\times 0.2^2}} = 19.97 \\ \\text{rad/s}",
                },
                {
                  problem:
                    "A forced oscillator is driven by a force with an amplitude of 10 N and a frequency of 5 Hz. If the system has a natural frequency of 4 Hz, will resonance occur? Explain.",
                  solution:
                    "No, resonance will not occur because the driving frequency (5 Hz) does not match the natural frequency (4 Hz).",
                },
                {
                  problem:
                    "A transverse wave on a string has a frequency of 100 Hz and a wavelength of 0.5 m. Calculate the speed of the wave.",
                  solution:
                    "v = f\\lambda = 100 \\times 0.5 = 50 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A longitudinal wave in a medium has a speed of 340 m/s and a frequency of 200 Hz. Calculate the wavelength of the wave.",
                  solution:
                    "\\lambda = \\frac{v}{f} = \\frac{340}{200} = 1.7 \\ \\text{m}",
                },
                {
                  problem:
                    "A mass-spring system is undergoing simple harmonic motion with an amplitude of 0.1 m. If the maximum speed of the mass is 2 m/s, calculate the angular frequency.",
                  solution:
                    "v_{\\text{max}} = A\\omega \\Rightarrow \\omega = \\frac{v_{\\text{max}}}{A} = \\frac{2}{0.1} = 20 \\ \\text{rad/s}",
                },
                {
                  problem:
                    "A simple pendulum has a period of 1.5 s on Earth. Calculate its length. (Assume g = 9.8 m/s²)",
                  solution:
                    "T = 2\\pi\\sqrt{\\frac{L}{g}} \\Rightarrow L = \\frac{gT^2}{4\\pi^2} = \\frac{9.8 \\times 1.5^2}{4\\pi^2} = 0.56 \\ \\text{m}",
                },
                {
                  problem:
                    "A wave has a frequency of 50 Hz and a speed of 30 m/s. Calculate its wavelength.",
                  solution:
                    "\\lambda = \\frac{v}{f} = \\frac{30}{50} = 0.6 \\ \\text{m}",
                },
                {
                  problem:
                    "An object undergoing simple harmonic motion has a maximum acceleration of 8 m/s² and an amplitude of 0.2 m. Calculate the angular frequency.",
                  solution:
                    "a_{\\text{max}} = A\\omega^2 \\Rightarrow \\omega = \\sqrt{\\frac{a_{\\text{max}}}{A}} = \\sqrt{\\frac{8}{0.2}} = 6.32 \\ \\text{rad/s}",
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
          Unveiling the Rhythms of the Universe
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
