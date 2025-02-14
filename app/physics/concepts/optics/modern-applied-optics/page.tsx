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

export default function ModernAppliedOptics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Optics",
      href: "/physics/concepts/optics",
    },
    {
      label: "Modern & Applied Optics",
      href: "/physics/concepts/optics/modern-applied-optics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Modern & Applied Optics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the cutting-edge applications of optics in modern
          technologies, from advanced sensors and communication systems to
          photonic devices and the emerging field of quantum cryptography.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Modern & Applied Optics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Modern & Applied Optics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Modern and applied optics encompasses the development and
              application of optical technologies in various fields, including
              telecommunications, sensing, imaging, and information processing.
              It leverages the principles of both classical and quantum optics
              to create innovative solutions for real-world problems.
            </p>
          </div>
        </div>

        {/* Optical Sensors & Detectors */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Optical Sensors & Detectors
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Optical sensors and detectors are devices that convert light
              signals into electrical signals. They are used in a wide range of
              applications, including imaging, spectroscopy, environmental
              monitoring, and medical diagnostics.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Types of Optical Sensors
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Photodiodes:</b> Convert light into current or voltage.
                  </li>
                  <li>
                    <b>Photomultiplier Tubes (PMTs):</b> Detect very low light
                    levels by amplifying the photoelectron current.
                  </li>
                  <li>
                    <b>Charge-Coupled Devices (CCDs):</b> Used in digital
                    imaging to capture light and convert it into digital
                    signals.
                  </li>
                  <li>
                    <b>CMOS Image Sensors:</b> Similar to CCDs but with
                    integrated amplifiers and analog-to-digital converters.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Digital Cameras:</b> CCD and CMOS sensors capture images.
                  </li>
                  <li>
                    <b>Spectroscopy:</b> Photodiodes and PMTs measure light
                    intensity at different wavelengths.
                  </li>
                  <li>
                    <b>Medical Imaging:</b> Optical coherence tomography (OCT)
                    uses light waves to create cross-sectional images of
                    biological tissues.
                  </li>
                  <li>
                    <b>Environmental Monitoring:</b> Optical sensors detect
                    pollutants, measure water quality, and monitor atmospheric
                    conditions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optical Communication */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Optical Communication (Fiber Optic Networks)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Optical communication utilizes light to transmit information over
              long distances. Fiber optic networks, which use thin strands of
              glass or plastic to guide light signals, form the backbone of
              modern telecommunications infrastructure.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Advantages of Fiber Optics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>High Bandwidth:</b> Can carry much more data than
                    traditional copper wires.
                  </li>
                  <li>
                    <b>Low Loss:</b> Signals can travel long distances with
                    minimal attenuation.
                  </li>
                  <li>
                    <b>Immunity to Electromagnetic Interference:</b> Not
                    affected by external electromagnetic fields.
                  </li>
                  <li>
                    <b>Security:</b> Difficult to tap into without detection.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Components of Fiber Optic Networks
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Optical Transmitters:</b> Convert electrical signals into
                    light signals (e.g., LEDs, laser diodes).
                  </li>
                  <li>
                    <b>Optical Fibers:</b> Transmit the light signals.
                  </li>
                  <li>
                    <b>Optical Receivers:</b> Convert light signals back into
                    electrical signals (e.g., photodiodes).
                  </li>
                  <li>
                    <b>Optical Amplifiers:</b> Boost the signal strength for
                    long-distance transmission.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Photonic Devices & Quantum Cryptography */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Photonic Devices & Quantum Cryptography
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Photonic devices manipulate light for various applications,
              including computing, sensing, and communication. Quantum
              cryptography utilizes the principles of quantum mechanics to
              secure communication, leveraging the unique properties of photons.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Photonic Devices
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Photonic Crystals:</b> Periodic structures that affect
                    the propagation of light, analogous to semiconductor
                    crystals for electrons.
                  </li>
                  <li>
                    <b>Optical Modulators:</b> Devices that control the
                    properties of light, such as amplitude, phase, and
                    polarization.
                  </li>
                  <li>
                    <b>Optical Switches:</b> Used to route optical signals in
                    communication networks.
                  </li>
                  <li>
                    <b>Integrated Photonics:</b> Integration of multiple
                    photonic functions on a single chip.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Quantum Cryptography
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Uses the principles of quantum mechanics to secure
                    communication.
                  </li>
                  <li>
                    <b>Quantum Key Distribution (QKD):</b> Allows two parties to
                    share a secret key with security guaranteed by the laws of
                    physics.
                  </li>
                  <li>
                    <b>BB84 Protocol:</b> A widely used QKD protocol based on
                    the polarization of single photons.
                  </li>
                  <li>
                    Relies on the fact that any attempt to eavesdrop on a
                    quantum channel inevitably disturbs the system and can be
                    detected.
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
                    "A photodiode has a responsivity of 0.5 A/W. If the incident optical power is 10 μW, what is the generated photocurrent?",
                  solution:
                    "Photocurrent = Responsivity × Incident Power = 0.5 \\ \\text{A/W} \\times 10 \\times 10^{-6} \\ \\text{W} = 5 \\times 10^{-6} \\ \\text{A} = 5 \\ \\mu\\text{A}",
                },
                {
                  problem:
                    "A fiber optic link has a total attenuation of 20 dB. If the input power is 1 mW, what is the output power?",
                  solution:
                    "Attenuation (dB) = 10 \\log_{10}\\left(\\frac{P_{in}}{P_{out}}\\right) \\\\ 20 = 10 \\log_{10}\\left(\\frac{1 \\ \\text{mW}}{P_{out}}\\right) \\\\ P_{out} = \\frac{1 \\ \\text{mW}}{10^2} = 0.01 \\ \\text{mW} = 10 \\ \\mu\\text{W}",
                },
                {
                  problem:
                    "Calculate the energy of a photon used in a quantum key distribution system operating at a wavelength of 1550 nm.",
                  solution:
                    "E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34} \\ \\text{J} \\cdot \\text{s})(3 \\times 10^8 \\ \\text{m/s})}{1550 \\times 10^{-9} \\ \\text{m}} \\approx 1.28 \\times 10^{-19} \\ \\text{J}",
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
          Harnessing Light for Future Technologies
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
