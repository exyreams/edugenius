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

export default function OpticalCoherenceAndLasers() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Optics", href: "/physics/concepts/optics" },
    {
      label: "Optical Coherence & Lasers",
      href: "/physics/concepts/optics/optical-coherence-and-lasers",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-sky-700 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-sky-200 dark:to-indigo-300">
          Optical Coherence & Lasers
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Dive into the fascinating world of Optical Coherence and Lasers,
          exploring coherence, interferometry, the principles of laser
          operation, and the intriguing applications of holography.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Optical Coherence & Lasers */}
        <div className="rounded-2xl bg-gradient-to-br from-cyan-200 to-blue-200 p-6 dark:from-cyan-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-sky-300">
            Introduction to Optical Coherence & Lasers
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Optical coherence refers to the ability of light waves to maintain
              a fixed phase relationship, leading to interference phenomena.
              Lasers are devices that produce highly coherent light through
              stimulated emission. This section provides an overview of these
              concepts and their significance in modern optics.
            </p>
          </div>
        </div>

        {/* Coherence & Interferometry */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Coherence & Interferometry
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Coherence is a property of waves that enables stationary
              interference. Interferometry is a technique that uses the
              interference of waves to extract information about the waves or
              the materials they interact with.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Coherence
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Temporal coherence: Relates to the correlation between the
                    phase of a wave at different times.
                  </li>
                  <li>
                    Spatial coherence: Relates to the correlation between the
                    phase of a wave at different points in space.
                  </li>
                  <li>
                    Coherence length: The distance over which a wave maintains a
                    specified degree of coherence.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Interferometry
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Technique based on the superposition of waves to extract
                    information.
                  </li>
                  <li>
                    Used in various fields, including astronomy, metrology, and
                    medical imaging.
                  </li>
                  <li>
                    Examples: Michelson interferometer, Mach-Zehnder
                    interferometer.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Michelson Interferometer */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-yellow-300 dark:to-orange-300">
            Michelson Interferometer
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Michelson interferometer is a classic optical instrument that
              splits a beam of light into two paths, reflects the beams back,
              and then recombines them to produce an interference pattern. It is
              used to measure lengths with high precision and to study the
              properties of light.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Working Principle
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    A beam of light is split into two paths by a beam splitter.
                  </li>
                  <li>
                    The two beams are reflected back by mirrors and recombined.
                  </li>
                  <li>
                    The path difference between the two beams results in an
                    interference pattern.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Measurement of the wavelength of light.</li>
                  <li>Detection of gravitational waves (LIGO).</li>
                  <li>Fourier transform spectroscopy.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Illustration: Michelson Interferometer */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <path
                d="M20 20 L80 80"
                stroke="#d97706"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M80 80 L140 80"
                stroke="#d97706"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M80 80 L80 20"
                stroke="#d97706"
                strokeWidth="2"
                fill="none"
              />
              <rect x="140" y="75" width="10" height="10" fill="#d97706" />
              <rect x="75" y="20" width="10" height="10" fill="#d97706" />
              <line
                x1="80"
                y1="80"
                x2="120"
                y2="40"
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <text x="20" y="15" fontSize="12" fill="#d97706">
                Light Source
              </text>
              <text x="155" y="75" fontSize="12" fill="#d97706">
                Mirror
              </text>
              <text x="70" y="15" fontSize="12" fill="#d97706">
                Mirror
              </text>
              <text x="130" y="35" fontSize="12" fill="#fbbf24">
                Detector
              </text>
              <text x="50" y="50" fontSize="12" fill="#d97706">
                Beam Splitter
              </text>
            </svg>
          </div>
        </div>

        {/* Lasers */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Lasers (Stimulated Emission, Population Inversion)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              LASER stands for Light Amplification by Stimulated Emission of
              Radiation. Lasers produce highly coherent, monochromatic, and
              directional beams of light through the process of stimulated
              emission.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Stimulated Emission
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Stimulated emission is the process where an incoming photon
                  causes an excited atom to release a second photon that is
                  identical to the first in terms of frequency, phase,
                  polarization, and direction.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Population Inversion
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Population inversion is a condition where more atoms are in an
                  excited state than in the ground state. It is necessary for
                  achieving stimulated emission and laser action.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  Laser Components
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Gain medium: Material that provides the stimulated emission.
                  </li>
                  <li>
                    Energy source (pump): Provides energy to achieve population
                    inversion.
                  </li>
                  <li>
                    Optical resonator: Typically a pair of mirrors that provide
                    feedback for the light.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Holography */}
        <div className="rounded-2xl bg-gradient-to-br from-violet-200 to-purple-200 p-6 dark:from-violet-600 dark:to-purple-600">
          <h2 className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-indigo-300">
            Holography
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Holography is a technique that enables three-dimensional images
              (holograms) to be made. It involves the use of a laser,
              interference, diffraction, light intensity recording, and suitable
              illumination of the recording.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Recording a Hologram
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    A laser beam is split into an object beam and a reference
                    beam.
                  </li>
                  <li>
                    The object beam illuminates the object, and the scattered
                    light is directed to a recording medium.
                  </li>
                  <li>
                    The reference beam is also directed to the recording medium,
                    where it interferes with the light from the object beam.
                  </li>
                  <li>
                    The interference pattern is recorded on the medium, creating
                    the hologram.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Reconstructing the Image
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    The hologram is illuminated with a reconstruction beam
                    (similar to the reference beam).
                  </li>
                  <li>
                    The recorded interference pattern diffracts the light to
                    recreate the wavefronts of the original object beam.
                  </li>
                  <li>A three-dimensional image of the object is formed.</li>
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
                    "A Michelson interferometer uses a laser with a wavelength of 633 nm. If one mirror is moved by 0.1 mm, how many fringe shifts will be observed?",
                  solution:
                    "Path difference, \\(\\Delta x = 2d = 2 \\times 0.1 \\ \\text{mm} = 0.2 \\ \\text{mm} = 2 \\times 10^{-4} \\ \\text{m}\\) \\\\ Number of fringe shifts, \\(N = \\frac{\\Delta x}{\\lambda} = \\frac{2 \\times 10^{-4}}{633 \\times 10^{-9}} \\approx 316\\)",
                },
                {
                  problem:
                    "A laser has a power output of 10 mW and a beam diameter of 1 mm. Calculate the intensity of the laser beam.",
                  solution:
                    "Area, \\(A = \\pi r^2 = \\pi (0.5 \\times 10^{-3})^2 = 7.85 \\times 10^{-7} \\ \\text{m}^2 \\) \\\\ Intensity, \\(I = \\frac{P}{A} = \\frac{10 \\times 10^{-3}}{7.85 \\times 10^{-7}} \\approx 12732 \\ \\text{W/m}^2\\)",
                },
                {
                  problem:
                    "A helium-neon laser emits light at a wavelength of 632.8 nm. Calculate the energy difference between the two energy levels involved in the laser transition. (h = 6.63 x 10⁻³⁴ J·s, c = 3 x 10⁸ m/s)",
                  solution:
                    "\\(E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{632.8 \\times 10^{-9}} \\approx 3.14 \\times 10^{-19} \\ \\text{J}\\)",
                },
                {
                  problem:
                    "The coherence length of a light source is 1 mm. Calculate the coherence time of the source. (c = 3 x 10⁸ m/s)",
                  solution:
                    "Coherence time, \\(\\tau_c = \\frac{L_c}{c} = \\frac{1 \\times 10^{-3}}{3 \\times 10^8} \\approx 3.33 \\times 10^{-12} \\ \\text{s}\\)",
                },
                {
                  problem:
                    "A laser produces a beam of light with a wavelength of 532 nm. If the laser has a power of 5 mW, calculate the number of photons emitted per second.",
                  solution:
                    "Energy of one photon, \\(E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{532 \\times 10^{-9}} \\approx 3.74 \\times 10^{-19} \\ \\text{J} \\) \\\\ Number of photons per second, \\(N = \\frac{P}{E} = \\frac{5 \\times 10^{-3}}{3.74 \\times 10^{-19}} \\approx 1.34 \\times 10^{16} \\ \\text{photons/s}\\)",
                },
                {
                  problem:
                    "A three-level laser system has energy levels E₁ = 0 eV, E₂ = 1.5 eV, and E₃ = 3 eV. If the population of E₃ is maintained at 10¹⁵ atoms/cm³ and the population of E₂ is 5 x 10¹⁴ atoms/cm³, is population inversion achieved between E₃ and E₂? Explain.",
                  solution:
                    "Yes, population inversion is achieved because the population of the higher energy level (E₃) is greater than the population of the lower energy level (E₂).",
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
          Harnessing the Power of Light
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
