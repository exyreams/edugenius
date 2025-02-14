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
export default function NonlinearQuantumOptics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Optics",
      href: "/physics/concept/optics",
    },
    {
      label: "Nonlinear & Quantum Optics",
      href: "/physics/concept/optics/nonlinear-quantum-optics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Nonlinear & Quantum Optics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the frontiers of optics where the behavior of light deviates
          from classical predictions, including nonlinear optical effects and
          the quantum nature of light-matter interactions.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Nonlinear & Quantum Optics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Nonlinear & Quantum Optics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Nonlinear optics studies phenomena that occur when the response of
              a material system to an applied optical field is nonlinear in the
              field strength. Quantum optics deals with the quantum nature of
              light and its interaction with matter at the level of individual
              photons and atoms.
            </p>
          </div>
        </div>

        {/* Dispersion & Optical Fibers */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Dispersion & Optical Fibers
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Dispersion is the phenomenon in which the phase velocity of a wave
              depends on its frequency. In optics, it leads to the separation of
              different wavelengths of light as they travel through a medium.
              Optical fibers are thin, flexible strands of glass or plastic that
              transmit light signals over long distances, often utilizing
              principles of dispersion.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Dispersion
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Material Dispersion:</b> Different wavelengths travel at
                    different speeds through a material.
                  </li>
                  <li>
                    <b>Waveguide Dispersion:</b> The geometry of the waveguide
                    affects the propagation of different wavelengths.
                  </li>
                  <li>
                    Causes pulse broadening in optical fibers, limiting data
                    transmission rates.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Optical Fibers
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Structure:</b> Core, cladding, and buffer coating.
                  </li>
                  <li>
                    <b>Principle:</b> Total internal reflection guides light
                    along the core.
                  </li>
                  <li>
                    <b>Applications:</b> Telecommunications, medical imaging,
                    sensing.
                  </li>
                  <li>
                    <b>Types:</b> Single-mode (small core, carries one signal)
                    and multi-mode (larger core, carries multiple signals).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Nonlinear Optical Effects */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Nonlinear Optical Effects (Second-Harmonic Generation)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Nonlinear optical effects occur when intense light interacts with
              a material, causing the material&#39;s response to become
              nonlinear with respect to the applied electric field. These
              effects lead to a variety of phenomena, including frequency
              conversion and intensity-dependent refractive index.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Second-Harmonic Generation (SHG)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A nonlinear optical process in which two photons with the same
                  frequency interact with a nonlinear material, are
                  &#34;combined&#34;, and generate a new photon with twice the
                  energy (half the wavelength).
                </p>
                <BlockMath math="\omega_{SHG} = 2\omega_{fundamental}" />
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Phase Matching
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  To achieve efficient SHG, the fundamental and second-harmonic
                  waves must travel at the same speed through the nonlinear
                  material (phase-matching condition).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Other Nonlinear Effects
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Third-Harmonic Generation (THG):</b> Three photons
                    combine to produce a photon with three times the frequency.
                  </li>
                  <li>
                    <b>Optical Kerr Effect:</b> The refractive index of a
                    material changes in response to the intensity of light.
                  </li>
                  <li>
                    <b>Four-Wave Mixing (FWM):</b> Three waves interact to
                    produce a fourth wave.
                  </li>
                  <li>
                    <b>Self-Phase Modulation (SPM):</b> The phase of a wave is
                    modulated by its own intensity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Optics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Quantum Optics (Photon Nature of Light, Quantum Entanglement)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum optics is the study of the quantum nature of light and its
              interaction with matter. It explores phenomena that cannot be
              explained by classical physics, such as the particle-like behavior
              of light (photons) and the entanglement of quantum states.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Photon Nature of Light
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Light is composed of discrete packets of energy called
                    photons.
                  </li>
                  <li>
                    The energy of a photon is given by{" "}
                    <InlineMath math="E = hf" />, where <InlineMath math="h" />{" "}
                    is Planck&#39;s constant and <InlineMath math="f" /> is the
                    frequency.
                  </li>
                  <li>
                    Phenomena like the photoelectric effect and Compton
                    scattering demonstrate the particle-like behavior of light.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Quantum Entanglement
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A phenomenon where two or more particles become linked in such
                  a way that they share the same quantum state, regardless of
                  the distance separating them.
                  <br />
                  Measurements on one entangled particle instantaneously affect
                  the state of the other, a phenomenon Einstein called
                  &#34;spooky action at a distance.&#34;
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-4 rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Applications of Quantum Optics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Quantum Cryptography:</b> Using the principles of quantum
                    mechanics to secure communication.
                  </li>
                  <li>
                    <b>Quantum Computing:</b> Utilizing quantum-mechanical
                    phenomena to perform operations on data.
                  </li>
                  <li>
                    <b>Quantum Teleportation:</b> Transferring quantum states
                    from one location to another using entanglement.
                  </li>
                  <li>
                    <b>Quantum Sensing:</b> Using quantum systems to make highly
                    sensitive measurements.
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
                    "Calculate the frequency of the second harmonic generated when a laser with a wavelength of 1064 nm is passed through a nonlinear crystal.",
                  solution:
                    "\\lambda_{SHG} = \\frac{\\lambda_{fundamental}}{2} = \\frac{1064 \\ \\text{nm}}{2} = 532 \\ \\text{nm} \\\\ f_{SHG} = \\frac{c}{\\lambda_{SHG}} = \\frac{3 \\times 10^8 \\ \\text{m/s}}{532 \\times 10^{-9} \\ \\text{m}} \\approx 5.64 \\times 10^{14} \\ \\text{Hz}",
                },
                {
                  problem:
                    "A single-mode optical fiber has a core diameter of 8 μm. Calculate the numerical aperture (NA) if the refractive indices of the core and cladding are 1.46 and 1.45, respectively.",
                  solution:
                    "NA = \\sqrt{n_{core}^2 - n_{cladding}^2} = \\sqrt{1.46^2 - 1.45^2} \\approx 0.172",
                },
                {
                  problem:
                    "What is the energy of a photon with a wavelength of 500 nm? (Use h = 6.63 × 10⁻³⁴ J·s)",
                  solution:
                    "E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34} \\ \\text{J} \\cdot \\text{s})(3 \\times 10^8 \\ \\text{m/s})}{500 \\times 10^{-9} \\ \\text{m}} = 3.98 \\times 10^{-19} \\ \\text{J}",
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
          Beyond the Classical Limits of Light
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
