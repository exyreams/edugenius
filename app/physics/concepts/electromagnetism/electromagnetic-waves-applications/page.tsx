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

export default function ElectromagneticWavesApplications() {
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
      label: "Electromagnetic Waves & Applications",
      href: "/physics/concepts/electromagnetism/electromagnetic-waves-applications",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Electromagnetic Waves Applications
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fundamental principles and applications of electromagnetic
          waves, from wave propagation to energy transfer.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Electromagnetic Waves */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Electromagnetic Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Electromagnetic waves are waves of electric and magnetic fields
              that propagate through space at the speed of light. They are
              fundamental to many technologies, including communication systems,
              medical imaging, and optics. This section explores the
              mathematical foundations and applications of electromagnetic
              waves.
            </p>
          </div>
        </div>

        {/* Wave Equation for E & B Fields */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-emerald-200 p-6 dark:from-teal-600 dark:to-emerald-600">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Wave Equation for E & B Fields
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The wave equations for the electric and magnetic fields describe
              how these fields propagate through space. These equations are
              derived from Maxwell&#39;s equations and form the basis for
              understanding electromagnetic waves.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Wave Equation for Electric Field
              </h3>
              <BlockMath math="\nabla^2 \mathbf{E} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                This equation describes how the electric field propagates as a
                wave. It is derived from Faraday&#39;s Law and the
                Ampère-Maxwell Law.
                <br />
                Where:
                <br />
                <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                <br />
                <InlineMath math="\mu_0" /> = Permeability of free space (4π ×
                10⁻⁷ H/m)
                <br />
                <InlineMath math="\epsilon_0" /> = Permittivity of free space
                (8.854 × 10⁻¹² F/m)
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Wave Equation for Magnetic Field
              </h3>
              <BlockMath math="\nabla^2 \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                This equation describes how the magnetic field propagates as a
                wave. It is derived from Gauss&#39;s Law for Magnetism and
                Faraday&#39;s Law.
                <br />
                Where:
                <br />
                <InlineMath math="\mathbf{B}" /> = Magnetic field (Teslas)
                <br />
                <InlineMath math="\mu_0" /> = Permeability of free space (4π ×
                10⁻⁷ H/m)
                <br />
                <InlineMath math="\epsilon_0" /> = Permittivity of free space
                (8.854 × 10⁻¹² F/m)
              </p>
            </div>
          </div>
        </div>

        {/* Poynting Vector & Energy Flow */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 p-6 dark:from-purple-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Poynting Vector & Energy Flow
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Poynting vector describes the directional energy flux (the
              rate of energy transfer per unit area) of an electromagnetic
              field. It is crucial for understanding how energy propagates in
              electromagnetic waves.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Poynting Vector
              </h3>
              <BlockMath math="\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The Poynting vector represents the power per unit area carried
                by an electromagnetic wave.
                <br />
                Where:
                <br />
                <InlineMath math="\mathbf{S}" /> = Poynting vector (W/m²)
                <br />
                <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                <br />
                <InlineMath math="\mathbf{B}" /> = Magnetic field (Teslas)
                <br />
                <InlineMath math="\mu_0" /> = Permeability of free space (4π ×
                10⁻⁷ H/m)
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Energy Density
              </h3>
              <BlockMath math="u = \frac{1}{2} \left( \epsilon_0 E^2 + \frac{B^2}{\mu_0} \right)" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The total energy density of an electromagnetic wave is the sum
                of the electric and magnetic energy densities.
                <br />
                Where:
                <br />
                <InlineMath math="u" /> = Energy density (J/m³)
                <br />
                <InlineMath math="E" /> = Electric field magnitude (N/C)
                <br />
                <InlineMath math="B" /> = Magnetic field magnitude (Teslas)
                <br />
                <InlineMath math="\epsilon_0" /> = Permittivity of free space
                (8.854 × 10⁻¹² F/m)
                <br />
                <InlineMath math="\mu_0" /> = Permeability of free space (4π ×
                10⁻⁷ H/m)
              </p>
            </div>
          </div>
        </div>

        {/* Polarization */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 p-6 dark:from-rose-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Polarization
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Polarization describes the orientation of the electric field
              vector in an electromagnetic wave. It is a key property in optics
              and communication systems.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Linear Polarization
              </h3>
              <BlockMath math="\mathbf{E}(z, t) = E_0 \cos(kz - \omega t) \hat{x}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                In linear polarization, the electric field oscillates in a
                single plane.
                <br />
                Where:
                <br />
                <InlineMath math="E_0" /> = Amplitude of the electric field
                (N/C)
                <br />
                <InlineMath math="k" /> = Wave number (rad/m)
                <br />
                <InlineMath math="\omega" /> = Angular frequency (rad/s)
                <br />
                <InlineMath math="z" /> = Position along the propagation
                direction (m)
                <br />
                <InlineMath math="t" /> = Time (s)
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Circular Polarization
              </h3>
              <BlockMath math="\mathbf{E}(z, t) = E_0 \left( \cos(kz - \omega t) \hat{x} \pm \sin(kz - \omega t) \hat{y} \right)" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                In circular polarization, the electric field rotates in a
                circular pattern as the wave propagates.
                <br />
                Where:
                <br />
                <InlineMath math="E_0" /> = Amplitude of the electric field
                (N/C)
                <br />
                <InlineMath math="k" /> = Wave number (rad/m)
                <br />
                <InlineMath math="\omega" /> = Angular frequency (rad/s)
                <br />
                <InlineMath math="z" /> = Position along the propagation
                direction (m)
                <br />
                <InlineMath math="t" /> = Time (s)
              </p>
            </div>
          </div>
        </div>

        {/* Light as an Electromagnetic Wave */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Light as an Electromagnetic Wave
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Light is a transverse electromagnetic wave that can be described
              by its wavelength, frequency, and speed. It is a fundamental part
              of the electromagnetic spectrum.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Speed of Light
              </h3>
              <BlockMath math="c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The speed of light in a vacuum is a fundamental constant of
                nature.
                <br />
                Where:
                <br />
                <InlineMath math="c" /> = Speed of light (≈ 3 × 10⁸ m/s)
                <br />
                <InlineMath math="\mu_0" /> = Permeability of free space (4π ×
                10⁻⁷ H/m)
                <br />
                <InlineMath math="\epsilon_0" /> = Permittivity of free space
                (8.854 × 10⁻¹² F/m)
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Wavelength and Frequency
              </h3>
              <BlockMath math="c = \lambda \nu" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The relationship between the speed of light, wavelength, and
                frequency.
                <br />
                Where:
                <br />
                <InlineMath math="c" /> = Speed of light (≈ 3 × 10⁸ m/s)
                <br />
                <InlineMath math="\lambda" /> = Wavelength (m)
                <br />
                <InlineMath math="\nu" /> = Frequency (Hz)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Numerical Problems Section */}
      <div className="mt-16">
        <div className="rounded-2xl bg-gradient-to-br from-gray-200 to-indigo-200 p-6 dark:from-gray-800 dark:to-indigo-800">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Numerical Problems
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem:
                  "A coil with 50 turns has a magnetic flux of 0.02 Wb. If the flux changes to 0.08 Wb in 0.5 seconds, calculate the induced EMF.",
                solution:
                  "\\mathcal{E} = -50 \\times \\frac{0.08 - 0.02}{0.5} = -6 \\ \\text{V}",
              },
              {
                problem:
                  "A conductor of length 0.5 m moves perpendicular to a magnetic field of 0.4 T at a velocity of 2 m/s. Calculate the motional EMF.",
                solution:
                  "\\mathcal{E} = 0.4 \\times 0.5 \\times 2 = 0.4 \\ \\text{V}",
              },
              {
                problem:
                  "A capacitor with a plate area of 0.1 m² and a separation of 0.01 m is charged to 100 V. Calculate the electric field between the plates.",
                solution: "E = \\frac{100}{0.01} = 10,000 \\ \\text{V/m}",
              },
              {
                problem:
                  "A solenoid with 200 turns per meter carries a current of 5 A. Calculate the magnetic field inside the solenoid.",
                solution:
                  "B = \\mu_0 n I = 4\\pi \\times 10^{-7} \\times 200 \\times 5 = 1.26 \\times 10^{-3} \\ \\text{T}",
              },
              {
                problem:
                  "A wire loop of radius 0.1 m is placed in a magnetic field of 0.5 T. If the loop is rotated by 90° in 0.2 seconds, calculate the average induced EMF.",
                solution:
                  "\\mathcal{E} = -\\frac{0.5 \\times \\pi (0.1)^2 \\times (\\cos 90° - \\cos 0°)}{0.2} = 0.0785 \\ \\text{V}",
              },
              {
                problem:
                  "A transformer has 500 primary turns and 50 secondary turns. If the primary voltage is 220 V, calculate the secondary voltage.",
                solution: "V_s = \\frac{50}{500} \\times 220 = 22 \\ \\text{V}",
              },
              {
                problem:
                  "A 10 μF capacitor is charged to 100 V and then discharged through a 1 kΩ resistor. Calculate the time constant of the circuit.",
                solution:
                  "\\tau = RC = 1000 \\times 10^{-5} = 0.01 \\ \\text{s}",
              },
              {
                problem:
                  "A 0.2 H inductor carries a current of 2 A. Calculate the energy stored in the inductor.",
                solution:
                  "U = \\frac{1}{2} L I^2 = \\frac{1}{2} \\times 0.2 \\times 4 = 0.4 \\ \\text{J}",
              },
              {
                problem:
                  "A 50 Ω resistor is connected to a 12 V battery. Calculate the power dissipated in the resistor.",
                solution:
                  "P = \\frac{V^2}{R} = \\frac{144}{50} = 2.88 \\ \\text{W}",
              },
              {
                problem:
                  "A 0.5 m long wire carries a current of 10 A in a magnetic field of 0.2 T. Calculate the force on the wire if it is perpendicular to the field.",
                solution:
                  "F = BIL = 0.2 \\times 10 \\times 0.5 = 1 \\ \\text{N}",
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

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Universe&#39;s Hidden Harmony
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
