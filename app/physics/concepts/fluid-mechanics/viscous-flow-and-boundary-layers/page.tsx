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

export default function ViscousFlowBoundaryLayers() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Fluid Mechanics", href: "/physics/concepts/fluid-mechanics" },
    {
      label: "Viscous Flow & Boundary Layers",
      href: "/physics/concepts/fluid-mechanics/viscous-flow-boundary-layers",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-orange-700 to-red-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-orange-200 dark:to-red-300">
          Viscous Flow & Boundary Layers
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the intricacies of fluid motion with viscosity, including
          Navier-Stokes equations, flow in pipes, and the forces of drag and
          lift.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Viscous Flow */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-200 p-6 dark:from-amber-600 dark:to-yellow-600">
          <h2 className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-red-300 dark:to-orange-300">
            Introduction to Viscous Flow
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Viscous flow refers to the flow of fluids where the effects of
              viscosity are significant. This section delves into the
              fundamental principles governing viscous flow, including the
              Navier-Stokes equations, Poiseuille&#39;s Law, and the formation
              of boundary layers.
            </p>
          </div>
        </div>

        {/* Navier-Stokes Equations */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-emerald-300 dark:to-green-300">
            Navier-Stokes Equations
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Navier-Stokes equations describe the motion of viscous fluid
              substances. They are fundamental to fluid dynamics and are used to
              model a wide range of phenomena, from weather patterns to blood
              flow.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Navier-Stokes Equation (Incompressible Flow)
                </h3>
                <BlockMath math="\rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \mathbf{f}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid
                  <br />
                  <InlineMath math="\mathbf{u}" /> = Velocity vector of the
                  fluid
                  <br />
                  <InlineMath math="t" /> = Time
                  <br />
                  <InlineMath math="p" /> = Pressure
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity
                  <br />
                  <InlineMath math="\mathbf{f}" /> = External forces per unit
                  volume
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Navier-Stokes equations are used in various fields,
                  including aerodynamics, hydrodynamics, and meteorology, to
                  model and analyze fluid flow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Poiseuille’s Law */}
        <div className="rounded-2xl bg-gradient-to-br from-fuchsia-200 to-pink-200 p-6 dark:from-fuchsia-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-fuchsia-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-fuchsia-300 dark:to-rose-300">
            Poiseuille&#39;s Law
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Poiseuille&#39;s Law describes the flow rate of a viscous fluid
              through a cylindrical pipe. It is particularly relevant for
              laminar flow in narrow tubes.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Poiseuille&#39;s Law Formula
                </h3>
                <BlockMath math="Q = \frac{\pi r^4 \Delta P}{8 \mu L}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Volumetric flow rate
                  <br />
                  <InlineMath math="r" /> = Radius of the pipe
                  <br />
                  <InlineMath math="\Delta P" /> = Pressure difference between
                  the ends
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity
                  <br />
                  <InlineMath math="L" /> = Length of the pipe
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Poiseuille&#39;s Law is important in understanding blood flow
                  in the circulatory system and in designing piping systems for
                  viscous fluids.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drag and Lift Forces */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Drag and Lift Forces
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Drag and lift forces are aerodynamic forces that act on objects
              moving through a fluid. Drag opposes the motion, while lift acts
              perpendicular to the motion.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Drag Force
                </h3>
                <BlockMath math="F_D = \frac{1}{2} \rho u^2 C_D A" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="F_D" /> = Drag force
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid
                  <br />
                  <InlineMath math="u" /> = Flow velocity relative to the object
                  <br />
                  <InlineMath math="C_D" /> = Drag coefficient
                  <br />
                  <InlineMath math="A" /> = Reference area
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Lift Force
                </h3>
                <BlockMath math="F_L = \frac{1}{2} \rho u^2 C_L A" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="F_L" /> = Lift force
                  <br />
                  <InlineMath math="\rho" /> = Density of the fluid
                  <br />
                  <InlineMath math="u" /> = Flow velocity relative to the object
                  <br />
                  <InlineMath math="C_L" /> = Lift coefficient
                  <br />
                  <InlineMath math="A" /> = Reference area
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-300">
                  Applications
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Understanding drag and lift forces is crucial in the design of
                  aircraft, automobiles, and other vehicles, as well as in
                  sports such as cycling and swimming.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow in Pipes */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Flow in Pipes
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Flow in pipes is a common scenario in fluid mechanics, with
              applications ranging from water distribution systems to oil
              pipelines. This section covers the Hagen-Poiseuille equation and
              the Darcy-Weisbach equation for analyzing flow in pipes.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Hagen-Poiseuille Equation
                </h3>
                <BlockMath math="Q = \frac{\pi R^4 (P_1 - P_2)}{8 \mu L}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Describes laminar flow in a long cylindrical pipe.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="Q" /> = Volumetric flow rate
                  <br />
                  <InlineMath math="R" /> = Radius of the pipe
                  <br />
                  <InlineMath math="P_1 - P_2" /> = Pressure difference between
                  the ends
                  <br />
                  <InlineMath math="\mu" /> = Dynamic viscosity
                  <br />
                  <InlineMath math="L" /> = Length of the pipe
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Darcy-Weisbach Equation
                </h3>
                <BlockMath math="h_f = f_D \frac{L}{D} \frac{V^2}{2g}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Describes the head loss due to friction in turbulent flow.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="h_f" /> = Head loss due to friction
                  <br />
                  <InlineMath math="f_D" /> = Darcy friction factor
                  <br />
                  <InlineMath math="L" /> = Length of the pipe
                  <br />
                  <InlineMath math="D" /> = Diameter of the pipe
                  <br />
                  <InlineMath math="V" /> = Average flow velocity
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
                </p>
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
                    "Calculate the flow rate of a fluid with viscosity 0.1 Pa·s through a pipe of radius 0.05 m and length 10 m, with a pressure difference of 1000 Pa.",
                  solution:
                    "Q = \\frac{\\pi (0.05)^4 \\times 1000}{8 \\times 0.1 \\times 10} = 0.00245 \\ \\text{m³/s}",
                },
                {
                  problem:
                    "A fluid with density 1000 kg/m³ flows over a flat plate with a velocity of 2 m/s. If the drag coefficient is 0.01 and the reference area is 0.5 m², calculate the drag force.",
                  solution:
                    "F_D = \\frac{1}{2} \\times 1000 \\times (2)^2 \\times 0.01 \\times 0.5 = 10 \\ \\text{N}",
                },
                {
                  problem:
                    "Calculate the head loss due to friction in a pipe of length 50 m and diameter 0.1 m, with a flow velocity of 1 m/s and a Darcy friction factor of 0.02.",
                  solution:
                    "h_f = 0.02 \\times \\frac{50}{0.1} \\times \\frac{(1)^2}{2 \\times 9.81} = 0.51 \\ \\text{m}",
                },
                {
                  problem:
                    "An aircraft wing with a reference area of 2 m² experiences a lift force of 5000 N. If the air density is 1.2 kg/m³ and the flow velocity is 50 m/s, calculate the lift coefficient.",
                  solution:
                    "C_L = \\frac{2 \\times 5000}{1.2 \\times (50)^2 \\times 2} = 1.67",
                },
                {
                  problem:
                    "Water flows through a pipe of radius 0.02 m and length 5 m with a pressure difference of 500 Pa. If the flow rate is 0.001 m³/s, calculate the viscosity of the water.",
                  solution:
                    "\\mu = \\frac{\\pi (0.02)^4 \\times 500}{8 \\times 0.001 \\times 5} = 0.00628 \\ \\text{Pa·s}",
                },
                {
                  problem:
                    "A fluid flows through a pipe of diameter 0.2 m with a velocity of 0.5 m/s. If the Darcy friction factor is 0.015 and the pipe length is 100 m, calculate the head loss due to friction.",
                  solution:
                    "h_f = 0.015 \\times \\frac{100}{0.2} \\times \\frac{(0.5)^2}{2 \\times 9.81} = 0.096 \\ \\text{m}",
                },
                {
                  problem:
                    "Calculate the Reynolds number for a fluid with density 1200 kg/m³, viscosity 0.05 Pa·s, flowing through a pipe of diameter 0.1 m with a velocity of 0.2 m/s.",
                  solution:
                    "Re = \\frac{\\rho V D}{\\mu} = \\frac{1200 \\times 0.2 \\times 0.1}{0.05} = 480",
                },
                {
                  problem:
                    "A spherical object with a radius of 0.1 m moves through a fluid with density 1000 kg/m³ at a velocity of 1 m/s. If the drag coefficient is 0.47, calculate the drag force.",
                  solution:
                    "A = \\pi (0.1)^2 = 0.0314 \\ \\text{m²} \\\\ F_D = \\frac{1}{2} \\times 1000 \\times (1)^2 \\times 0.47 \\times 0.0314 = 7.38 \\ \\text{N}",
                },
                {
                  problem:
                    "Calculate the pressure difference required to maintain a flow rate of 0.005 m³/s through a pipe of radius 0.03 m and length 20 m, with a fluid viscosity of 0.08 Pa·s.",
                  solution:
                    "\\Delta P = \\frac{8 \\times 0.08 \\times 20 \\times 0.005}{\\pi (0.03)^4} = 2515.8 \\ \\text{Pa}",
                },
                {
                  problem:
                    "A pipe with a diameter of 0.15 m and length 30 m has a head loss of 2 m due to friction. If the flow velocity is 0.8 m/s, calculate the Darcy friction factor.",
                  solution:
                    "f_D = \\frac{2 \\times 9.81 \\times 2 \\times 0.15}{30 \\times (0.8)^2} = 0.307",
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
          Unveiling the Dynamics of Viscous Flow
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
