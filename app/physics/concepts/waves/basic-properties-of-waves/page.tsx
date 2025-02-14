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

export default function BasicPropertiesOfWaves() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Waves", href: "/physics/concepts/waves" },
    {
      label: "Basic Properties of Waves",
      href: "/physics/concepts/waves/basic-properties",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-teal-200 dark:to-blue-300">
          Basic Properties of Waves
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fundamental properties of waves, including their types,
          parameters, and the wave equation.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Introduction to Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A wave is a disturbance that travels through a medium or space,
              transferring energy from one place to another without any
              permanent displacement of the medium itself. Waves are
              characterized by various properties, which determine their
              behavior and how they interact with their environment.
            </p>
          </div>
        </div>

        {/* Types of Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Types of Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Waves can be broadly classified into different types based on
              their nature and the direction of their oscillations.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Mechanical Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Mechanical waves require a medium to propagate. Examples
                  include sound waves, water waves, and seismic waves.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Electromagnetic Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Electromagnetic waves do not require a medium and can travel
                  through a vacuum. Examples include light, radio waves,
                  microwaves, and X-rays.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Transverse Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In transverse waves, the oscillations are perpendicular to the
                  direction of wave propagation. Examples include light waves
                  and waves on a string.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Longitudinal Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In longitudinal waves, the oscillations are parallel to the
                  direction of wave propagation. Examples include sound waves
                  and compression waves in a spring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Parameters */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Wave Parameters
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Waves are characterized by several key parameters, including
              wavelength, frequency, amplitude, speed, and period.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Wavelength (λ)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The distance between two consecutive points in the same phase,
                  such as two crests or two troughs.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Frequency (f)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The number of complete wave cycles passing a point per unit
                  time, usually measured in Hertz (Hz).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300">
                  Amplitude (A)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The maximum displacement of a point on the wave from its
                  equilibrium position.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Speed (v)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The speed at which the wave propagates through the medium or
                  space.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Period (T)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The time taken for one complete wave cycle to pass a given
                  point. It is the inverse of frequency (T = 1/f).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Equation */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-yellow-300 dark:to-orange-300">
            Wave Equation
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The wave equation relates the speed of a wave to its wavelength
              and frequency. It is a fundamental equation in the study of waves.
            </p>
          </div>
          <div className="mt-4">
            <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
              <BlockMath math="v = f\lambda" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Where:
                <br />
                <InlineMath math="v" /> = Wave speed
                <br />
                <InlineMath math="f" /> = Frequency
                <br />
                <InlineMath math="\lambda" /> = Wavelength
              </p>
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
                    "A wave has a frequency of 5 Hz and a wavelength of 2 meters. Calculate the speed of the wave.",
                  solution:
                    "\\(v = f\\lambda = 5 \\ \\text{Hz} \\times 2 \\ \\text{m} = 10 \\ \\text{m/s}\\)",
                },
                {
                  problem:
                    "A sound wave travels at a speed of 340 m/s. If its frequency is 250 Hz, what is its wavelength?",
                  solution:
                    "\\(\\lambda = \\frac{v}{f} = \\frac{340 \\ \\text{m/s}}{250 \\ \\text{Hz}} = 1.36 \\ \\text{m}\\)",
                },
                {
                  problem:
                    "A light wave has a wavelength of 600 nm. Calculate its frequency. (c = 3 x 10⁸ m/s)",
                  solution:
                    "\\(f = \\frac{c}{\\lambda} = \\frac{3 \\times 10^8 \\ \\text{m/s}}{600 \\times 10^{-9} \\ \\text{m}} = 5 \\times 10^{14} \\ \\text{Hz}\\)",
                },
                {
                  problem:
                    "A wave on a string has a frequency of 10 Hz and a speed of 20 m/s. What is the wavelength of the wave?",
                  solution:
                    "\\(\\lambda = \\frac{v}{f} = \\frac{20 \\ \\text{m/s}}{10 \\ \\text{Hz}} = 2 \\ \\text{m}\\)",
                },
                {
                  problem:
                    "A wave completes one oscillation in 0.2 seconds. Calculate its frequency and period.",
                  solution:
                    "\\(f = \\frac{1}{T} = \\frac{1}{0.2 \\ \\text{s}} = 5 \\ \\text{Hz} \\\\ T = 0.2 \\ \\text{s}\\)",
                },
                {
                  problem:
                    "An electromagnetic wave has a frequency of 100 MHz. Calculate its wavelength. (c = 3 x 10⁸ m/s)",
                  solution:
                    "\\(\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8 \\ \\text{m/s}}{100 \\times 10^6 \\ \\text{Hz}} = 3 \\ \\text{m}\\)",
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
          Understanding the Nature of Waves
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
