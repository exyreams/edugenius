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

export default function FluidContinuumMechanics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Fluid Mechanics",
      href: "/physics/concepts/mechanics",
    },
    {
      label: "Fluid & Continuum Mechanics",
      href: "/physics/concepts/mechanics/fluid-and-continuum-mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Fluid & Continuum Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fundamental principles governing the behavior of
          materials, both solids and fluids, under the action of forces and
          deformations.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Fluid & Continuum Mechanics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Fluid & Continuum Mechanics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Continuum mechanics is a branch of mechanics that deals with the
              mechanical behavior of materials modeled as a continuous mass
              rather than as discrete particles. It provides a framework for
              understanding both solids and fluids.
            </p>
          </div>
        </div>

        {/* Mechanics of Solids (Stress & Strain) */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Mechanics of Solids (Stress & Strain)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              This section focuses on the behavior of solid materials under
              stress and strain, covering concepts like elasticity, plasticity,
              and failure criteria.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Stress
                </h3>
                <BlockMath math="\sigma = \frac{F}{A}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Stress is the internal force per unit area within a deformable
                  body.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\sigma" /> = Stress (Pa or N/m²)
                  <br />
                  <InlineMath math="F" /> = Force (N)
                  <br />
                  <InlineMath math="A" /> = Area (m²)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Types of Stress
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Normal Stress: Force applied perpendicular to a surface.
                  </li>
                  <li>Shear Stress: Force applied parallel to a surface.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Strain
                </h3>
                <BlockMath math="\epsilon = \frac{\Delta L}{L_0}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Strain is the measure of deformation, representing the
                  displacement between particles in the body relative to a
                  reference length.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\epsilon" /> = Strain (dimensionless)
                  <br />
                  <InlineMath math="\Delta L" /> = Change in length (m)
                  <br />
                  <InlineMath math="L_0" /> = Original length (m)
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Hooke&#39;s Law
                </h3>
                <BlockMath math="\sigma = E\epsilon" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Within the elastic limit, stress is proportional to strain.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="E" /> = Young&#39;s modulus (Pa or N/m²)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Note on Fluid Dynamics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Fluid Dynamics (Covered Separately)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Fluid dynamics, a subdiscipline of fluid mechanics, describes the
              flow of fluids—liquids and gases. While it&#39;s a crucial part of
              continuum mechanics, it is covered in detail on separate pages
              dedicated to specific fluid dynamics topics.
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Please refer to the following pages for in-depth exploration of
              fluid dynamics:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>
                <a
                  href="/physics/fluid-mechanics/fluid-statics"
                  className="text-blue-600 hover:underline dark:text-blue-300"
                >
                  Fluid Statics
                </a>
              </li>
              <li>
                <a
                  href="/physics/fluid-mechanics/fluid-dynamics"
                  className="text-blue-600 hover:underline dark:text-blue-300"
                >
                  Fluid Dynamics
                </a>
              </li>
              <li>
                <a
                  href="/physics/fluid-mechanics/viscous-flow-boundary-layers"
                  className="text-blue-600 hover:underline dark:text-blue-300"
                >
                  Viscous Flow & Boundary Layers
                </a>
              </li>
              <li>
                <a
                  href="/physics/fluid-mechanics/compressible-flow-gas-dynamics"
                  className="text-blue-600 hover:underline dark:text-blue-300"
                >
                  Compressible Flow & Gas Dynamics
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
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
                    "A steel rod with a cross-sectional area of 0.01 m² is subjected to a tensile force of 10,000 N. Calculate the stress in the rod.",
                  solution:
                    "\\sigma = \\frac{F}{A} = \\frac{10,000 \\ \\text{N}}{0.01 \\ \\text{m}^2} = 1 \\times 10^6 \\ \\text{Pa} = 1 \\ \\text{MPa}",
                },
                {
                  problem:
                    "A 2 m long copper wire stretches by 0.001 m when a force is applied. Calculate the strain in the wire.",
                  solution:
                    "\\epsilon = \\frac{\\Delta L}{L_0} = \\frac{0.001 \\ \\text{m}}{2 \\ \\text{m}} = 5 \\times 10^{-4}",
                },
                {
                  problem:
                    "A material has a Young's modulus of 200 GPa. If a stress of 50 MPa is applied, calculate the resulting strain.",
                  solution:
                    "\\epsilon = \\frac{\\sigma}{E} = \\frac{50 \\times 10^6 \\ \\text{Pa}}{200 \\times 10^9 \\ \\text{Pa}} = 2.5 \\times 10^{-4}",
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
          Bridging the Microscopic and Macroscopic Worlds
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
