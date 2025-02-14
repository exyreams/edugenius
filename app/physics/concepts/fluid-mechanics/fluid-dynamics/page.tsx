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

export default function FluidDynamics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Fluid Mechanics", href: "/physics/concepts/fluid-mechanics" },
    {
      label: "Fluid Dynamics",
      href: "/physics/concepts/fluid-mechanics/fluid-dynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-green-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-blue-200 dark:to-green-300">
          Fluid Dynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Dive into the study of fluids in motion, exploring fundamental
          principles such as the Equation of Continuity, Bernoulli&#39;s
          Principle, and the characteristics of laminar and turbulent flow.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Fluid Dynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-cyan-200 p-6 dark:from-teal-600 dark:to-cyan-600">
          <h2 className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-blue-300">
            Introduction to Fluid Dynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Fluid dynamics is the branch of fluid mechanics that deals with
              fluids in motion. It encompasses a wide range of phenomena, from
              the flow of blood in the circulatory system to the movement of air
              over an aircraft wing. This section introduces the key concepts
              and equations that govern fluid dynamics.
            </p>
          </div>
        </div>

        {/* Equation of Continuity */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 p-6 dark:from-rose-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-red-300">
            Equation of Continuity
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Equation of Continuity is a fundamental principle in fluid
              dynamics that describes the conservation of mass in a fluid flow.
              It states that for an incompressible fluid, the mass flow rate is
              constant along a streamline.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Equation of Continuity Formula
                </h3>
                <BlockMath math="A_1 v_1 = A_2 v_2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="A_1" />, <InlineMath math="A_2" /> =
                  Cross-sectional areas at points 1 and 2
                  <br />
                  <InlineMath math="v_1" />, <InlineMath math="v_2" /> = Fluid
                  velocities at points 1 and 2
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Equation of Continuity is used to analyze flow in pipes,
                  rivers, and other systems where fluid is in motion. It is
                  essential for understanding how changes in area affect flow
                  velocity.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Equation of Continuity */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <path
                d="M20 50 Q80 20 140 50"
                stroke="#d97706"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M140 50 Q170 65 180 50"
                stroke="#d97706"
                strokeWidth="2"
                fill="none"
              />
              <text x="30" y="55" fontSize="12" fill="#d97706">
                A₁v₁
              </text>
              <text x="145" y="45" fontSize="12" fill="#d97706">
                A₂v₂
              </text>
            </svg>
          </div>
        </div>

        {/* Bernoulli’s Principle */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Bernoulli&#39;s Principle
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Bernoulli&#39;s Principle states that an increase in the speed of
              a fluid occurs simultaneously with a decrease in static pressure
              or a decrease in the fluid&#39;s potential energy. It is a
              statement of the conservation of energy for flowing fluids.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Bernoulli&#39;s Equation
                </h3>
                <BlockMath math="P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Pressure
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid
                  <br />
                  <InlineMath math="v" /> = Velocity of the fluid
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
                  <br />
                  <InlineMath math="h" /> = Height above a reference point
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Bernoulli&#39;s Principle is used to explain phenomena such as
                  the lift on an airfoil, the operation of a Venturi meter, and
                  the behavior of fluids in various engineering applications.
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Bernoulli’s Principle */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <path
                d="M20 50 Q80 20 140 50"
                stroke="#4ade80"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M140 50 Q170 65 180 50"
                stroke="#4ade80"
                strokeWidth="2"
                fill="none"
              />
              <text x="30" y="55" fontSize="12" fill="#4ade80">
                P₁
              </text>
              <text x="70" y="30" fontSize="12" fill="#4ade80">
                v₁
              </text>
              <text x="145" y="45" fontSize="12" fill="#4ade80">
                P₂
              </text>
              <text x="160" y="70" fontSize="12" fill="#4ade80">
                v₂
              </text>
            </svg>
          </div>
        </div>

        {/* Euler’s Equation */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 p-6 dark:from-purple-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-fuchsia-300 dark:to-purple-300">
            Euler&#39;s Equation
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Euler&#39;s Equation describes the motion of an inviscid,
              incompressible fluid. It is a simplification of the Navier-Stokes
              equations and is useful for analyzing ideal fluid flow.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Euler&#39;s Equation (for inviscid flow)
                </h3>
                <BlockMath math="\rho \frac{D\mathbf{u}}{Dt} = -\nabla P + \rho \mathbf{g}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\rho" /> = Density
                  <br />
                  <InlineMath math="\frac{D\mathbf{u}}{Dt}" /> = Material
                  derivative of velocity
                  <br />
                  <InlineMath math="\nabla P" /> = Pressure gradient
                  <br />
                  <InlineMath math="\mathbf{g}" /> = Gravitational acceleration
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Euler&#39;s Equation is used in aerodynamics, hydrodynamics,
                  and other fields to model the behavior of ideal fluids.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Laminar vs. Turbulent Flow */}
        <div className="rounded-2xl bg-gradient-to-br from-yellow-200 to-lime-200 p-6 dark:from-yellow-600 dark:to-lime-600">
          <h2 className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300">
            Laminar vs. Turbulent Flow
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Fluid flow can be broadly classified into two types: laminar and
              turbulent. Laminar flow is characterized by smooth, parallel
              layers of fluid, while turbulent flow is characterized by chaotic,
              irregular motion.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Laminar Flow
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Characterized by smooth, orderly motion with layers of fluid
                  sliding past each other.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Turbulent Flow
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Characterized by chaotic, irregular motion with mixing between
                  layers of fluid.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Understanding the difference between laminar and turbulent
                  flow is crucial in designing pipelines, aircraft, and other
                  systems involving fluid motion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reynolds Number */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Reynolds Number
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Reynolds number is a dimensionless quantity that helps predict
              whether fluid flow will be laminar or turbulent. It is the ratio
              of inertial forces to viscous forces within a fluid.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Reynolds Number Formula
                </h3>
                <BlockMath math="Re = \frac{\rho u L}{\mu}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="Re" /> = Reynolds number
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid
                  <br />
                  <InlineMath math="u" /> = Flow speed
                  <br />
                  <InlineMath math="L" /> = Characteristic linear dimension
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity of the fluid
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Flow Regime Prediction
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    <InlineMath math="Re < 2000" />: Typically laminar flow
                  </li>
                  <li>
                    <InlineMath math="2000 < Re < 4000" />: Transitional flow
                  </li>
                  <li>
                    <InlineMath math="Re > 4000" />: Typically turbulent flow
                  </li>
                </ul>
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
                    "Water flows through a pipe with a cross-sectional area of 0.04 m² at a velocity of 2 m/s. If the pipe narrows to 0.02 m², calculate the velocity of the water in the narrower section.",
                  solution:
                    "A_1 v_1 = A_2 v_2 \\Rightarrow v_2 = \\frac{A_1 v_1}{A_2} = \\frac{0.04 \\times 2}{0.02} = 4 \\ \\text{m/s}",
                },
                {
                  problem:
                    "Calculate the Reynolds number for a fluid with density 1000 kg/m³, viscosity 0.001 Pa·s, flowing through a pipe of diameter 0.05 m with a velocity of 0.5 m/s.",
                  solution:
                    "Re = \\frac{\\rho u D}{\\mu} = \\frac{1000 \\times 0.5 \\times 0.05}{0.001} = 25000",
                },
                {
                  problem:
                    "A fluid flows through a pipe with a pressure of 100 kPa at a velocity of 1 m/s. If the fluid density is 1000 kg/m³ and the height is constant, calculate the pressure at a point where the velocity is 3 m/s.",
                  solution:
                    "P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\Rightarrow P_2 = P_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2) = 100000 + \\frac{1}{2} \\times 1000 \\times (1^2 - 3^2) = 96000 \\ \\text{Pa}",
                },
                {
                  problem:
                    "Water flows through a horizontal pipe of diameter 0.1 m at a speed of 2 m/s. Calculate the Reynolds number to determine if the flow is laminar or turbulent.",
                  solution:
                    "Re = \\frac{\\rho u D}{\\mu} = \\frac{1000 \\times 2 \\times 0.1}{0.001} = 200000 \\ \\text{(Turbulent)}",
                },
                {
                  problem:
                    "A pipe has a cross-sectional area of 0.1 m² where the fluid velocity is 1 m/s. If the pipe narrows to 0.05 m², calculate the fluid velocity in the narrower section.",
                  solution:
                    "v_2 = \\frac{A_1 v_1}{A_2} = \\frac{0.1 \\times 1}{0.05} = 2 \\ \\text{m/s}",
                },
                {
                  problem:
                    "An airplane wing experiences a lift due to the difference in air pressure. If the air density is 1.2 kg/m³, the velocity over the top is 70 m/s, and over the bottom is 60 m/s, calculate the pressure difference.",
                  solution:
                    "\\Delta P = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\frac{1}{2} \\times 1.2 \\times (70^2 - 60^2) = 780 \\ \\text{Pa}",
                },
                {
                  problem:
                    "Calculate the Reynolds number for a fluid with density 900 kg/m³, viscosity 0.02 Pa·s, flowing through a pipe of diameter 0.08 m with a velocity of 0.3 m/s.",
                  solution:
                    "Re = \\frac{\\rho u D}{\\mu} = \\frac{900 \\times 0.3 \\times 0.08}{0.02} = 1080 \\ \\text{(Laminar)}",
                },
                {
                  problem:
                    "A fluid flows through a pipe at a velocity of 2 m/s with a pressure of 150 kPa. If the kinetic energy of the fluid is increased by a factor of 4, calculate the new pressure.",
                  solution:
                    "v_2 = 2 \\sqrt{4} = 4 \\ \\text{m/s} \\\\ P_2 = P_1 + \\frac{1}{2}\\rho (v_1^2 - v_2^2) = 150000 + \\frac{1}{2} \\times 1000 \\times (2^2 - 4^2) = 144000 \\ \\text{Pa}",
                },
                {
                  problem:
                    "A venturi meter has a main section diameter of 0.1 m and a throat diameter of 0.05 m. If the fluid density is 800 kg/m³ and the velocity in the main section is 1 m/s, calculate the velocity in the throat.",
                  solution:
                    "v_2 = \\frac{A_1 v_1}{A_2} = \\frac{\\pi (0.05)^2 \\times 1}{\\pi (0.025)^2} = 4 \\ \\text{m/s}",
                },
                {
                  problem:
                    "Oil flows through a pipe of diameter 0.2 m with a velocity of 0.5 m/s. If the viscosity of the oil is 0.03 Pa·s and the density is 850 kg/m³, calculate the Reynolds number.",
                  solution:
                    "Re = \\frac{\\rho u D}{\\mu} = \\frac{850 \\times 0.5 \\times 0.2}{0.03} = 2833.33 \\ \\text{(Transitional)}",
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
          Exploring the Dynamics of Fluids in Motion
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
