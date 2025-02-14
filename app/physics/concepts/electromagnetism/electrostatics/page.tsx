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

export default function Electrostatics() {
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
      label: "Electrostatics",
      href: "/physics/concepts/electromagnetism/electrostatics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Electrostatics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Dive into the world of static electric charges and explore concepts
          like Coulomb&#39;s Law, electric fields, and capacitance.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Electrostatics */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Electrostatics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Electrostatics is the study of electric charges at rest. It deals
              with the forces, fields, and potentials arising from static
              electric charges. This section covers the fundamental principles
              of electrostatics, including Coulomb&#39;s Law, electric fields,
              Gauss&#39;s Law, and capacitance.
            </p>
          </div>
        </div>

        {/* Coulomb’s Law */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-emerald-200 p-6 dark:from-teal-600 dark:to-emerald-600">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Coulomb&#39;s Law
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Coulomb&#39;s Law describes the force between two point charges.
              It is the foundation of electrostatics and explains how charges
              interact with each other.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Coulomb&#39;s Law Formula
                </h3>
                <BlockMath math="F = k_e \frac{q_1 q_2}{r^2}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The force between two point charges is directly proportional
                  to the product of their charges and inversely proportional to
                  the square of the distance between them.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="F" /> = Force (N)
                  <br />
                  <InlineMath math="k_e" /> = Coulomb&#39;s constant (8.988 ×
                  10⁹ N·m²/C²)
                  <br />
                  <InlineMath math="q_1, q_2" /> = Charges (Coulombs)
                  <br />
                  <InlineMath math="r" /> = Distance between charges (m)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Force Direction
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The force is attractive if the charges have opposite signs and
                  repulsive if they have the same sign.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Coulomb’s Law */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <circle cx="50" cy="50" r="10" fill="#3b82f6" />
              <circle cx="150" cy="50" r="10" fill="#10b981" />
              <path d="M60 50 L140 50" stroke="currentColor" strokeWidth="2" />
              <text x="40" y="30" fontSize="12" fill="#3b82f6">
                q₁
              </text>
              <text x="140" y="30" fontSize="12" fill="#10b981">
                q₂
              </text>
              <text x="90" y="70" fontSize="12" fill="currentColor">
                F = kₑ q₁q₂/r²
              </text>
            </svg>
          </div>
        </div>

        {/* Electric Field & Electric Potential */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 p-6 dark:from-purple-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Electric Field & Electric Potential
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The electric field is a vector field that describes the force
              experienced by a unit positive charge at any point in space.
              Electric potential is the work done to bring a unit positive
              charge from infinity to a point in the field.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Electric Field
                </h3>
                <BlockMath math="\mathbf{E} = \frac{\mathbf{F}}{q}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The electric field at a point is the force per unit charge
                  experienced by a small positive test charge placed at that
                  point.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force (N)
                  <br />
                  <InlineMath math="q" /> = Test charge (C)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Electric Potential
                </h3>
                <BlockMath math="V = \frac{U}{q}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The electric potential at a point is the work done per unit
                  charge to bring a positive test charge from infinity to that
                  point.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="V" /> = Electric potential (Volts)
                  <br />
                  <InlineMath math="U" /> = Potential energy (Joules)
                  <br />
                  <InlineMath math="q" /> = Test charge (C)
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Electric Field */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <circle cx="100" cy="50" r="10" fill="#3b82f6" />
              <path d="M100 50 L150 50" stroke="#3b82f6" strokeWidth="2" />
              <text x="110" y="45" fontSize="12" fill="#3b82f6">
                E
              </text>
            </svg>
          </div>
        </div>

        {/* Gauss’s Law */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 p-6 dark:from-rose-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Gauss’s Law
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Gauss&#39;s Law relates the electric flux through a closed surface
              to the charge enclosed by that surface. It is one of Maxwell&#39;s
              equations and is particularly useful for calculating electric
              fields in symmetric systems.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Gauss’s Law Formula
                </h3>
                <BlockMath math="\oiint \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\text{enc}}}{\epsilon_0}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The total electric flux through a closed surface is
                  proportional to the charge enclosed by that surface.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\mathbf{E}" /> = Electric field (N/C)
                  <br />
                  <InlineMath math="d\mathbf{A}" /> = Differential area vector
                  (m²)
                  <br />
                  <InlineMath math="Q_{\text{enc}}" /> = Enclosed charge (C)
                  <br />
                  <InlineMath math="\epsilon_0" /> = Permittivity of free space
                  (8.854 × 10⁻¹² F/m)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Gauss&#39;s Law is particularly useful for calculating
                  electric fields in systems with high symmetry, such as
                  spheres, cylinders, and infinite planes.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Gauss’s Law */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <circle
                cx="100"
                cy="50"
                r="40"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <circle cx="100" cy="50" r="10" fill="#10b981" />
              <text x="90" y="30" fontSize="12" fill="#3b82f6">
                Gaussian Surface
              </text>
              <text x="90" y="70" fontSize="12" fill="#10b981">
                Q_enc
              </text>
            </svg>
          </div>
        </div>

        {/* Capacitance & Dielectrics */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Capacitance & Dielectrics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Capacitance is the ability of a system to store electric charge.
              Dielectrics are insulating materials that increase the capacitance
              of a system by reducing the electric field.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Capacitance
                </h3>
                <BlockMath math="C = \frac{Q}{V}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Capacitance is the ratio of the charge stored on a conductor
                  to the potential difference across it.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="C" /> = Capacitance (Farads)
                  <br />
                  <InlineMath math="Q" /> = Charge (Coulombs)
                  <br />
                  <InlineMath math="V" /> = Potential difference (Volts)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Dielectrics
                </h3>
                <BlockMath math="C = \kappa C_0" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Dielectrics increase the capacitance of a system by a factor
                  of <InlineMath math="\kappa" />, the dielectric constant.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="C" /> = Capacitance with dielectric (Farads)
                  <br />
                  <InlineMath math="C_0" /> = Capacitance without dielectric
                  (Farads)
                  <br />
                  <InlineMath math="\kappa" /> = Dielectric constant
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Capacitor */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <rect
                x="50"
                y="20"
                width="100"
                height="60"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <text x="90" y="50" fontSize="12" fill="#3b82f6">
                C = Q/V
              </text>
            </svg>
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
                    "Two point charges, +5 μC and -3 μC, are separated by a distance of 0.2 m. Calculate the electrostatic force between them.",
                  solution:
                    "F = 8.988 \\times 10^9 \\times \\frac{(5 \\times 10^{-6})(-3 \\times 10^{-6})}{(0.2)^2} = -3.37 \\ \\text{N (attractive)}",
                },
                {
                  problem:
                    "An electric field has a magnitude of 2000 N/C. Calculate the force experienced by a +2 μC charge placed in this field.",
                  solution:
                    "F = (2000)(2 \\times 10^{-6}) = 4 \\times 10^{-3} \\ \\text{N}",
                },
                {
                  problem:
                    "Calculate the electric potential at a distance of 0.5 m from a +10 μC point charge.",
                  solution:
                    "V = 8.988 \\times 10^9 \\times \\frac{10 \\times 10^{-6}}{0.5} = 1.8 \\times 10^5 \\ \\text{V}",
                },
                {
                  problem:
                    "A parallel plate capacitor has a plate area of 0.02 m² and a plate separation of 0.001 m. Calculate its capacitance.",
                  solution:
                    "C = \\frac{(8.854 \\times 10^{-12})(0.02)}{0.001} = 1.77 \\times 10^{-10} \\ \\text{F}",
                },
                {
                  problem:
                    "A dielectric material with a dielectric constant of 4 is inserted between the plates of a capacitor. If the original capacitance was 50 pF, what is the new capacitance?",
                  solution: "C = 4 \\times 50 = 200 \\ \\text{pF}",
                },
                {
                  problem:
                    "Calculate the electric field at the surface of a uniformly charged sphere with a radius of 0.1 m and a total charge of +8 μC.",
                  solution:
                    "E = \\frac{8.988 \\times 10^9 \\times 8 \\times 10^{-6}}{(0.1)^2} = 7.19 \\times 10^6 \\ \\text{N/C}",
                },
                {
                  problem:
                    "A capacitor is charged to 100 V and stores 0.01 J of energy. Calculate its capacitance.",
                  solution:
                    "C = \\frac{2 \\times 0.01}{(100)^2} = 2 \\times 10^{-6} \\ \\text{F}",
                },
                {
                  problem:
                    "Two parallel plates are separated by 0.002 m and have a potential difference of 50 V. Calculate the electric field between the plates.",
                  solution: "E = \\frac{50}{0.002} = 25,000 \\ \\text{V/m}",
                },
                {
                  problem:
                    "A +4 μC charge is placed at the origin. Calculate the electric potential at a point (0.3 m, 0.4 m) away from the origin.",
                  solution:
                    "r = \\sqrt{(0.3)^2 + (0.4)^2} = 0.5 \\ \\text{m} \\\\ V = \\frac{8.988 \\times 10^9 \\times 4 \\times 10^{-6}}{0.5} = 7.19 \\times 10^4 \\ \\text{V}",
                },
                {
                  problem:
                    "A 10 μF capacitor is connected to a 12 V battery. Calculate the charge stored on the capacitor.",
                  solution:
                    "Q = (10 \\times 10^{-6})(12) = 1.2 \\times 10^{-4} \\ \\text{C}",
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
          Exploring the Static Universe
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
