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

export default function Electrodynamics() {
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
      label: "Electrodynamics",
      href: "/physics/concepts/electromagnetism/electrodynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Electrodynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental laws of electromagnetism, from Maxwell&#39;s
          equations to circuit dynamics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Electrodynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Electrodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Electrodynamics is the branch of physics that studies the
              interaction between electric and magnetic fields and their effects
              on charged particles. It&#39;s the foundation for understanding
              phenomena ranging from how generators and motors work to how
              electromagnetic waves propagate through space. This section
              provides an overview of key concepts and formulas.
            </p>
          </div>
        </div>

        {/* Faraday's Law with Visualization */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-emerald-200 p-6 dark:from-teal-600 dark:to-emerald-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Electromagnetic Induction
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Faraday&#39;s Law
                </h3>
                <BlockMath math="\mathcal{E} = -N\frac{d\Phi_B}{dt}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Faraday&#39;s Law of Induction describes how a changing
                  magnetic field through a loop of wire induces an electromotive
                  force (EMF), which can drive a current.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathcal{E}" /> = Induced EMF (Volts)
                  <br />
                  <InlineMath math="N" /> = Number of turns in the coil
                  <br />
                  <InlineMath math="\frac{d\Phi_B}{dt}" /> = Rate of change of
                  magnetic flux (Webers per second)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Lenz&#39;s Law Visualization
                </h3>
                <svg viewBox="0 0 200 120" className="w-full">
                  <rect
                    x="20"
                    y="40"
                    width="160"
                    height="40"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path d="M60 60 L140 60" stroke="#3b82f6" strokeWidth="2" />
                  <path
                    d="M100 20 L100 100"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                  <text x="40" y="30" fontSize="12">
                    Moving Magnet
                  </text>
                  <text x="110" y="90" fontSize="12">
                    Induced Current
                  </text>
                  <path d="M102 70 L110 65 L102 60" fill="#10b981" />
                </svg>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  This visualization demonstrates Lenz&#39;s Law, showing the
                  induced current&#39;s direction as opposing the magnetic flux
                  change. When a magnet moves near a coil, a current is induced
                  creating a magnetic field that counteracts the motion of the
                  magnet.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Flux Calculation
                </h3>
                <BlockMath math="\Phi_B = \int \mathbf{B} \cdot d\mathbf{A}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Magnetic flux (<InlineMath math="\Phi_B" />) is a measure of
                  the total magnetic field passing through a given area. It is
                  the integral of the magnetic field over the area.
                  <br />
                  For a uniform field:
                  <BlockMath math="\Phi_B = BA\cos\theta" />
                  <br />
                  Where:
                  <br />
                  <InlineMath math="B" /> = Magnetic field strength (Teslas)
                  <br />
                  <InlineMath math="A" /> = Area of the loop (meters squared)
                  <br />
                  <InlineMath math="\theta" /> = Angle between the magnetic
                  field and the normal to the area
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Motional EMF
                </h3>
                <BlockMath math="\mathcal{E} = B\ell v" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Motional EMF is the electromotive force generated when a
                  conductor moves through a magnetic field, which causes free
                  electrons in the conductor to drift along its length, creating
                  an electric field and an associated voltage.
                  <br />
                  Conductor of length <InlineMath math="\ell" /> moving at
                  velocity <InlineMath math="v" /> perpendicular to{" "}
                  <InlineMath math="B" />.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="B" /> = Magnetic field strength (Teslas)
                  <br />
                  <InlineMath math="\ell" /> = Length of the conductor (meters)
                  <br />
                  <InlineMath math="v" /> = Velocity of the conductor (meters
                  per second)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Maxwell's Equations Deep Dive */}
        <div className="rounded-2xl bg-gradient-to-br from-violet-200 to-fuchsia-200 p-6 dark:from-violet-600 dark:to-fuchsia-600">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Maxwell&#39;s Equations
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Maxwell&#39;s equations form the cornerstone of classical
              electrodynamics. They describe how electric and magnetic fields
              are generated and how they interact with each other and with
              charges. These four equations explain the fundamental principles
              of electromagnetism.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Gauss&#39;s Law for Electricity
                </h3>
                <BlockMath math="\oiint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\epsilon_0}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Gauss&#39;s Law for Electricity relates the electric flux
                  through a closed surface to the charge enclosed by that
                  surface.
                  <br />
                  Electric flux through closed surface is proportional to the
                  enclosed charge.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
                  (m²)
                  <br />
                  <InlineMath math="Q_{\text{enc}}" /> = Enclosed charge
                  (Coulombs)
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  (8.854 x 10^-12 F/m)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Faraday&#39;s Law of Induction
                </h3>
                <BlockMath math="\oint \mathbf{E} \cdot d\mathbf{l} = -\frac{d}{dt} \iint \mathbf{B} \cdot d\mathbf{A}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Faraday&#39;s Law of Induction describes how a changing
                  magnetic field through a loop of wire induces an electromotive
                  force (EMF), which can drive a current.
                  <br />
                  Changing magnetic flux induces a circulating electric field.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                  <br />
                  <InlineMath math="d\mathbf{l}" /> = Differential length vector
                  (m)
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field (Teslas)
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
                  (m²)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Gauss&#39;s Law for Magnetism
                </h3>
                <BlockMath math="\oiint \mathbf{B} \cdot d\mathbf{A} = 0" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Gauss&#39;s Law for Magnetism states that the total magnetic
                  flux through any closed surface is always zero.
                  <br />
                  This implies there are no magnetic monopoles - field lines are
                  continuous, and magnetic fields always form closed loops.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field (Teslas)
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
                  (m²)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Ampère-Maxwell Law
                </h3>
                <BlockMath math="\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0I_{\text{enc}} + \mu_0\epsilon_0\frac{d}{dt} \iint \mathbf{E} \cdot d\mathbf{A}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Ampère-Maxwell Law describes how magnetic fields are
                  generated by electric currents and changing electric fields.
                  <br />
                  Currents and changing electric fields generate magnetic
                  fields.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathbf{B}" /> = Magnetic field (Teslas)
                  <br />
                  <InlineMath math="d\mathbf{l}" /> = Differential length vector
                  (m)
                  <br />
                  <InlineMath math="\mu_0" /> = Permeability of free space (4π ×
                  10^-7 H/m)
                  <br />
                  <InlineMath math="I_{\text{enc}}" /> = Enclosed current
                  (Amperes)
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  (8.854 x 10^-12 F/m)
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
                  (m²)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Numerical Problems Section */}
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

        {/* Decorative Section Divider */}
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-500 dark:text-gray-200">
            Unveiling the Universe&#39;s Secrets
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
