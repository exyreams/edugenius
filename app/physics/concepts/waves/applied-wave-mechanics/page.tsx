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

export default function AppliedWaveMechanics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Waves", href: "/physics/concepts/waves" },
    {
      label: "Applied Wave Mechanics",
      href: "/physics/concepts/waves/applied-wave-mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-fuchsia-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-fuchsia-200 dark:to-purple-300">
          Applied Wave Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the practical applications of wave mechanics in various
          fields, including seismic waves, acoustic engineering, sonar, optics,
          fiber optics communication, and quantum computing.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Applied Wave Mechanics */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Introduction to Applied Wave Mechanics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Applied wave mechanics involves the study and utilization of wave
              phenomena in various practical applications. This section provides
              an overview of how wave mechanics is applied in fields such as
              seismology, acoustic engineering, optics, and quantum computing.
            </p>
          </div>
        </div>

        {/* Seismic Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-red-200 to-orange-200 p-6 dark:from-red-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-amber-300">
            Seismic Waves (P-Waves & S-Waves)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Seismic waves are waves of energy that travel through the
              Earth&#39;s layers, and are a result of earthquakes, volcanic
              eruptions, magma movement, large landslides, and large man-made
              explosions that give out low-frequency acoustic energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  P-Waves (Primary Waves)
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Longitudinal waves, meaning the oscillation direction is
                    parallel to the direction of propagation.
                  </li>
                  <li>
                    Fastest seismic waves, hence they are the first to arrive at
                    a seismic station.
                  </li>
                  <li>Can travel through solids, liquids, and gases.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  S-Waves (Secondary Waves)
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Transverse waves, meaning the oscillation direction is
                    perpendicular to the direction of propagation.
                  </li>
                  <li>
                    Slower than P-waves, arriving after P-waves at a seismic
                    station.
                  </li>
                  <li>Can only travel through solids.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Acoustic Engineering & Sonar */}
        <div className="rounded-2xl bg-gradient-to-br from-yellow-200 to-lime-200 p-6 dark:from-yellow-600 dark:to-lime-600">
          <h2 className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300">
            Acoustic Engineering & Sonar
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Acoustic engineering deals with the study and application of sound
              waves. Sonar (Sound Navigation and Ranging) is a technique that
              uses sound propagation to navigate, communicate with, or detect
              objects on or under the surface of the water, such as other
              vessels.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Acoustic Engineering
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Involves the control of sound and vibration in various
                    applications.
                  </li>
                  <li>
                    Applications include architectural acoustics, noise control,
                    and audio signal processing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Sonar
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Active sonar emits sound pulses and listens for echoes to
                    detect objects.
                  </li>
                  <li>
                    Passive sonar listens for sounds emitted by objects without
                    emitting any sound itself.
                  </li>
                  <li>
                    Used in underwater navigation, fishing, and military
                    applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optics & Fiber Optics Communication */}
        <div className="rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-6 dark:from-green-600 dark:to-emerald-600">
          <h2 className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-emerald-300 dark:to-teal-300">
            Optics & Fiber Optics Communication
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Optics is the branch of physics that studies the behavior and
              properties of light. Fiber optics communication uses thin strands
              of glass or plastic to transmit data as light signals, enabling
              high-speed and long-distance communication.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Optical Fibers
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Transmit light signals through total internal reflection.
                  </li>
                  <li>Consist of a core, cladding, and buffer coating.</li>
                  <li>Used in telecommunications, internet, and cable TV.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-300">
                  Advantages of Fiber Optics
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>High bandwidth and data transmission rates.</li>
                  <li>Low signal loss over long distances.</li>
                  <li>Immune to electromagnetic interference.</li>
                  <li>Lightweight and flexible.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Computing & Wave Functions */}
        <div className="rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-200 p-6 dark:from-cyan-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-sky-300">
            Quantum Computing & Wave Functions
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum computing utilizes the principles of quantum mechanics to
              perform computations. Wave functions play a crucial role in
              describing the quantum state of particles, and their manipulation
              is essential for quantum algorithms and computations.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Quantum Computing
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Uses quantum bits (qubits) which can exist in superposition
                    states.
                  </li>
                  <li>
                    Leverages quantum phenomena like superposition and
                    entanglement to perform computations.
                  </li>
                  <li>
                    Potential to solve certain problems much faster than
                    classical computers.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-300">
                  Wave Functions
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Mathematical description of the quantum state of a particle.
                  </li>
                  <li>Governed by the Schrödinger equation.</li>
                  <li>
                    Probability amplitude associated with finding a particle in
                    a particular state.
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
                    "An earthquake produces a P-wave with a speed of 6 km/s and an S-wave with a speed of 3.5 km/s. If the P-wave arrives at a seismic station 20 seconds before the S-wave, calculate the distance to the earthquake's epicenter.",
                  solution:
                    "\\(d = \\frac{v_p v_s \\Delta t}{v_p - v_s} = \\frac{6 \\times 3.5 \\times 20}{6 - 3.5} = \\frac{420}{2.5} = 168 \\ \\text{km}\\)",
                },
                {
                  problem:
                    "A sonar device emits a sound pulse and detects the echo after 1.5 seconds. If the speed of sound in seawater is 1500 m/s, calculate the depth of the object.",
                  solution:
                    "\\(d = \\frac{vt}{2} = \\frac{1500 \\times 1.5}{2} = 1125 \\ \\text{m}\\)",
                },
                {
                  problem:
                    "An optical fiber has a core refractive index of 1.5 and a cladding refractive index of 1.45. Calculate the critical angle for total internal reflection.",
                  solution:
                    "\\(\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right) = \\sin^{-1}\\left(\\frac{1.45}{1.5}\\right) \\approx 75.2°\\)",
                },
                {
                  problem:
                    "A quantum computer uses qubits with a superposition state described by \\(|\\psi\\rangle = \\frac{1}{\\sqrt{2}}(|0\\rangle + |1\\rangle)\\). What is the probability of measuring the qubit in the state \\(|0\\rangle\\)?",
                  solution:
                    "\\(P(|0\\rangle) = |\\langle 0|\\psi \\rangle|^2 = \\left|\\frac{1}{\\sqrt{2}}\\right|^2 = \\frac{1}{2}\\)",
                },
                {
                  problem:
                    "A laser produces light with a wavelength of 633 nm. Calculate the energy of a single photon. (h = 6.63 x 10⁻³⁴ J·s, c = 3 x 10⁸ m/s)",
                  solution:
                    "\\(E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{633 \\times 10^{-9}} \\approx 3.14 \\times 10^{-19} \\ \\text{J}\\)",
                },
                {
                  problem:
                    "A standing wave is formed on a string of length 2 m. If the wave speed is 20 m/s, calculate the frequency of the third harmonic.",
                  solution:
                    "\\(f_n = \\frac{nv}{2L} = \\frac{3 \\times 20}{2 \\times 2} = 15 \\ \\text{Hz}\\)",
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
          Applying Wave Phenomena in Modern Technologies
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
