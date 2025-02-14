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

export default function MechanicalWaves() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Waves", href: "/physics/concepts/waves" },
    {
      label: "Mechanical Waves",
      href: "/physics/concepts/waves/mechanical-waves",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-amber-700 to-red-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-amber-200 dark:to-red-300">
          Mechanical Waves
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fascinating world of Mechanical Waves, including sound
          waves, vibrations, resonance, standing waves, and the harmonics of
          strings and air columns.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Mechanical Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Introduction to Mechanical Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Mechanical waves are disturbances that propagate through a medium
              due to the medium&#39;s elastic and inertial properties. Unlike
              electromagnetic waves, mechanical waves require a medium for their
              propagation.
            </p>
          </div>
        </div>

        {/* Sound Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Sound Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Sound waves are longitudinal mechanical waves that propagate
              through a medium, such as air, water, or solids. They are
              characterized by their speed, intensity, and pitch.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Speed of Sound
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The speed of sound depends on the properties of the medium,
                  such as its elasticity and density. In air, the speed of sound
                  is approximately 343 m/s at room temperature.
                </p>
                <BlockMath math="v = \\sqrt{\\frac{B}{\\rho}}" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="v" /> = Speed of sound
                  <br />
                  <InlineMath math="B" /> = Bulk modulus of the medium
                  <br />
                  <InlineMath math="\rho" /> = Density of the medium
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Intensity
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The intensity of a sound wave is the power per unit area
                  carried by the wave. It is proportional to the square of the
                  amplitude.
                </p>
                <BlockMath math="I = \\frac{P}{A}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300">
                  Pitch
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Pitch is the perceived frequency of a sound wave. Higher
                  frequency corresponds to higher pitch.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Doppler Effect
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Doppler effect is the change in frequency or wavelength of
                  a wave in relation to an observer who is moving relative to
                  the wave source.
                </p>
                <BlockMath math="f' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)" />
              </div>
            </div>
          </div>
        </div>

        {/* Vibrations & Resonance */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Vibrations & Resonance
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Vibrations are oscillations of a system about an equilibrium
              position. Resonance occurs when the frequency of an applied force
              matches the natural frequency of a system, leading to large
              amplitude oscillations.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Natural Frequency
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Every object has a natural frequency at which it vibrates when
                  disturbed. This frequency depends on the object&#39;s physical
                  properties.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Resonance
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Resonance occurs when the driving frequency matches the
                  natural frequency, resulting in large amplitude vibrations.
                  Resonance can be observed in various systems, such as
                  mechanical oscillators and musical instruments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Standing Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Standing Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Standing waves are produced when two waves of the same frequency
              and amplitude traveling in opposite directions interfere. They are
              characterized by nodes (points of zero displacement) and antinodes
              (points of maximum displacement).
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Nodes
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Nodes are points along a standing wave where the amplitude is
                  always zero. These points remain stationary.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Antinodes
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Antinodes are points along a standing wave where the amplitude
                  is maximum. These points oscillate with the largest
                  displacement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* String and Air Column Resonance */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            String and Air Column Resonance
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Resonance in strings and air columns produces standing waves at
              specific frequencies called harmonics. The fundamental frequency
              and its integer multiples determine the resonant frequencies.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  String Resonance
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A string fixed at both ends can vibrate at its fundamental
                  frequency and higher harmonics. The frequencies are given by:
                </p>
                <BlockMath math="f_n = \frac{nv}{2L}" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="f_n" /> = Frequency of the nth harmonic
                  <br />
                  <InlineMath math="n" /> = Harmonic number (1, 2, 3, ...)
                  <br />
                  <InlineMath math="v" /> = Wave speed on the string
                  <br />
                  <InlineMath math="L" /> = Length of the string
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Air Column Resonance
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  An air column open at both ends or closed at one end can
                  resonate at specific frequencies, producing standing sound
                  waves. The frequencies depend on the length of the column and
                  whether it is open or closed.
                </p>
                <p className="mt-2">
                  Open at both ends:
                  <BlockMath math="f_n = \frac{nv}{2L}" />
                  Closed at one end:
                  <BlockMath math="f_n = \frac{nv}{4L}" />
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
                    "Calculate the speed of sound in air at 20°C if the bulk modulus is 1.42 x 10⁵ Pa and the density is 1.2 kg/m³.",
                  solution:
                    "\\(v = \\sqrt{\\frac{B}{\\rho}} = \\sqrt{\\frac{1.42 \\times 10^5 \\ \\text{Pa}}{1.2 \\ \\text{kg/m}^3}} \\approx 344 \\ \\text{m/s}\\)",
                },
                {
                  problem:
                    "A sound wave has an intensity of 10⁻⁶ W/m². If the threshold of hearing is 10⁻¹² W/m², what is the intensity level in decibels (dB)?",
                  solution:
                    "\\(\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) = 10 \\log_{10}\\left(\\frac{10^{-6}}{10^{-12}}\\right) = 10 \\log_{10}(10^6) = 10 \\times 6 = 60 \\ \\text{dB}\\)",
                },
                {
                  problem:
                    "A train is moving at 30 m/s towards a stationary observer. If the train emits a sound with a frequency of 500 Hz, what frequency does the observer hear? (Speed of sound = 343 m/s)",
                  solution:
                    "\\(f' = f \\left(\\frac{v}{v - v_s}\\right) = 500 \\left(\\frac{343}{343 - 30}\\right) \\approx 548 \\ \\text{Hz}\\)",
                },
                {
                  problem:
                    "A string of length 0.5 m is fixed at both ends. If the speed of waves on the string is 200 m/s, calculate the frequency of the first three harmonics.",
                  solution:
                    "\\(f_n = \\frac{nv}{2L}\\) \\\\ For n = 1 (fundamental frequency): \\(f_1 = \\frac{1 \\times 200}{2 \\times 0.5} = 200 \\ \\text{Hz}\\) \\\\ For n = 2: \\(f_2 = \\frac{2 \\times 200}{2 \\times 0.5} = 400 \\ \\text{Hz}\\) \\\\ For n = 3: \\(f_3 = \\frac{3 \\times 200}{2 \\times 0.5} = 600 \\ \\text{Hz}\\)",
                },
                {
                  problem:
                    "An air column open at both ends has a length of 1 m. Calculate the frequency of the first three harmonics. (Speed of sound = 343 m/s)",
                  solution:
                    "\\(f_n = \\frac{nv}{2L}\\) \\\\ For n = 1: \\(f_1 = \\frac{1 \\times 343}{2 \\times 1} = 171.5 \\ \\text{Hz}\\) \\\\ For n = 2: \\(f_2 = \\frac{2 \\times 343}{2 \\times 1} = 343 \\ \\text{Hz}\\) \\\\ For n = 3: \\(f_3 = \\frac{3 \\times 343}{2 \\times 1} = 514.5 \\ \\text{Hz}\\)",
                },
                {
                  problem:
                    "A closed pipe (closed at one end) has a length of 0.75 m. Calculate the frequency of the first three harmonics. (Speed of sound = 343 m/s)",
                  solution:
                    "\\(f_n = \\frac{nv}{4L}\\) \\\\ For n = 1: \\(f_1 = \\frac{1 \\times 343}{4 \\times 0.75} = 114.3 \\ \\text{Hz}\\) \\\\ For n = 3: \\(f_3 = \\frac{3 \\times 343}{4 \\times 0.75} = 343 \\ \\text{Hz}\\) \\\\ For n = 5: \\(f_5 = \\frac{5 \\times 343}{4 \\times 0.75} = 571.7 \\ \\text{Hz}\\)",
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
          Exploring the Dynamics of Mechanical Waves
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
