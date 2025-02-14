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

export default function AtomicMolecularPhysics() {
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
      label: "Atomic & Molecular Physics",
      href: "/physics/concepts/modern-physics/atomic-molecular-physics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Atomic & Molecular Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fundamental building blocks of matter and the interactions
          between atoms and molecules, from the Bohr model to the intricacies of
          lasers and spectroscopy.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Atomic & Molecular Physics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Atomic & Molecular Physics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Atomic and molecular physics is the study of the structure,
              properties, and interactions of atoms and molecules. It bridges
              quantum mechanics and chemistry, providing insights into the
              behavior of matter at the microscopic level.
            </p>
          </div>
        </div>

        {/* Bohr Model of the Atom */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Bohr Model of the Atom
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Bohr model, proposed by Niels Bohr in 1913, was a
              groundbreaking model of the atom that introduced the concept of
              quantized energy levels for electrons.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Postulates
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Electrons orbit the nucleus in specific, quantized orbits
                    without emitting radiation.
                  </li>
                  <li>
                    Electrons can jump between orbits by absorbing or emitting
                    photons of specific energies.
                  </li>
                  <li>
                    The angular momentum of an electron in an orbit is
                    quantized: <InlineMath math="L = n\hbar" />, where n is an
                    integer and <InlineMath math="\hbar" /> is the reduced
                    Planck constant.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Energy Levels
                </h3>
                <BlockMath math="E_n = -\frac{13.6 \\ \\text{eV}}{n^2}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The energy of an electron in the nth orbit of a hydrogen atom
                  is given by:
                  <br />
                  Where:
                  <br />
                  <InlineMath math="E_n" /> = Energy of the nth level
                  <br />
                  <InlineMath math="n" /> = Principal quantum number (1, 2, 3,
                  ...)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Electron Orbitals & Quantum Numbers */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Electron Orbitals & Quantum Numbers
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              In quantum mechanics, electrons in atoms are described by
              wavefunctions, often called orbitals. Each orbital is
              characterized by a set of four quantum numbers that define its
              energy, shape, and spatial orientation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Quantum Numbers
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Principal quantum number (
                    <InlineMath math="n" />
                    ): Determines the energy level (n = 1, 2, 3, ...).
                  </li>
                  <li>
                    Azimuthal quantum number (
                    <InlineMath math="l" />
                    ): Determines the shape of the orbital (l = 0, 1, ..., n-1).
                  </li>
                  <li>
                    Magnetic quantum number (
                    <InlineMath math="m_l" />
                    ): Determines the spatial orientation of the orbital (
                    <InlineMath math="m_l" /> = -l, -l+1, ..., 0, ..., l-1, l).
                  </li>
                  <li>
                    Spin quantum number (
                    <InlineMath math="m_s" />
                    ): Describes the intrinsic angular momentum of the electron
                    (
                    <InlineMath math="m_s" /> = +1/2 or -1/2).
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Orbitals
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Orbitals are regions of space where the probability of finding
                  an electron is high. They have different shapes depending on
                  the value of <InlineMath math="l" />:
                </p>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    s orbitals (<InlineMath math="l" /> = 0): Spherical
                  </li>
                  <li>
                    p orbitals (<InlineMath math="l" /> = 1): Dumbbell-shaped
                  </li>
                  <li>
                    d orbitals (<InlineMath math="l" /> = 2): More complex
                    shapes
                  </li>
                  <li>
                    f orbitals (<InlineMath math="l" /> = 3): Even more complex
                    shapes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Spectroscopy & Energy Levels */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Spectroscopy & Energy Levels
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Spectroscopy is the study of the interaction between matter and
              electromagnetic radiation. It provides information about the
              energy levels and structure of atoms and molecules.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Atomic Spectra
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  When atoms absorb or emit light, they do so at specific
                  wavelengths corresponding to transitions between energy
                  levels. This produces a unique spectral &#34;fingerprint&#34;
                  for each element.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Types of Spectroscopy
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Absorption spectroscopy: Measures the wavelengths of light
                    absorbed by a sample.
                  </li>
                  <li>
                    Emission spectroscopy: Measures the wavelengths of light
                    emitted by an excited sample.
                  </li>
                  <li>
                    Raman spectroscopy: Studies the scattering of light by
                    molecules.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Energy Level Diagrams
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Energy level diagrams depict the allowed energy states of
                  electrons in atoms or molecules. Transitions between these
                  levels correspond to the absorption or emission of photons.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lasers & Optical Physics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Lasers & Optical Physics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Lasers (Light Amplification by Stimulated Emission of Radiation)
              are devices that produce coherent and monochromatic light. They
              have revolutionized many fields, from medicine to
              telecommunications. Optical physics is the study of the behavior
              and properties of light and its interaction with matter.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Laser Principles
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Population inversion: A higher energy state has a greater
                    population of electrons than a lower energy state.
                  </li>
                  <li>
                    Stimulated emission: An incoming photon stimulates an
                    excited electron to emit a photon with the same energy,
                    phase, and direction.
                  </li>
                  <li>
                    Optical resonator: Mirrors provide feedback, amplifying the
                    light.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications of Lasers
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Medicine: Laser surgery, eye treatment, dermatology</li>
                  <li>
                    Industry: Cutting, welding, engraving, barcode scanning
                  </li>
                  <li>
                    Communications: Fiber optic communication, laser printing
                  </li>
                  <li>Science: Spectroscopy, laser cooling, microscopy</li>
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
                    "Calculate the energy of the photon emitted when an electron in a hydrogen atom transitions from n=3 to n=2.",
                  solution:
                    "E = -13.6 \\ \\text{eV} \\left(\\frac{1}{3^2} - \\frac{1}{2^2}\\right) \\approx 1.89 \\ \\text{eV}",
                },
                {
                  problem:
                    "What is the wavelength of light emitted in the n=3 to n=2 transition in hydrogen? (Use the result from the previous problem and the conversion 1 eV = 1.6 x 10⁻¹⁹ J)",
                  solution:
                    "\\lambda = \\frac{hc}{E} = \\frac{(6.63 \\times 10^{-34} \\ \\text{J} \\cdot \\text{s})(3 \\times 10^8 \\ \\text{m/s})}{1.89 \\times 1.6 \\times 10^{-19} \\ \\text{J}} \\approx 656 \\ \\text{nm}",
                },
                {
                  problem:
                    "A laser emits light with a wavelength of 633 nm. What is the energy of each photon in electron volts (eV)?",
                  solution:
                    "E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34} \\ \\text{J} \\cdot \\text{s})(3 \\times 10^8 \\ \\text{m/s})}{633 \\times 10^{-9} \\ \\text{m}} \\times \\frac{1 \\ \\text{eV}}{1.6 \\times 10^{-19} \\ \\text{J}} \\approx 1.96 \\ \\text{eV}",
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
          Illuminating the Microscopic World
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
