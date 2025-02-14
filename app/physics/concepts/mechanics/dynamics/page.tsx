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

export default function Dynamics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Mechanics", href: "/physics/concepts/mechanics" },
    {
      label: "Dynamics",
      href: "/physics/concepts/mechanics/dynamics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-teal-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-teal-200 dark:to-blue-300">
          Dynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the principles of motion under the influence of forces,
          including Newton&#39;s Laws, work, energy, power, momentum, impulse,
          and collisions.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Dynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-cyan-200 p-6 dark:from-teal-600 dark:to-cyan-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-green-300">
            Introduction to Dynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Dynamics is the branch of mechanics that deals with the study of
              motion and the forces that cause it. This section introduces the
              fundamental concepts of dynamics, including Newton&#39;s Laws of
              Motion and their applications.
            </p>
          </div>
        </div>

        {/* Newton’s Laws & Applications */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-orange-200 p-6 dark:from-rose-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-red-300">
            Newtons Laws & Applications
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Newtons Laws of Motion are three physical laws that describe the
              relationship between a body and the forces acting upon it, and its
              motion in response to those forces.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  First Law (Law of Inertia)
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  An object at rest stays at rest and an object in motion stays
                  in motion with the same speed and in the same direction unless
                  acted upon by an unbalanced external force.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  Second Law
                </h3>
                <BlockMath math="F = ma" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The acceleration of an object is directly proportional to the
                  net force acting on the object, is in the direction of the net
                  force, and is inversely proportional to the mass of the
                  object.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Third Law
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  For every action, there is an equal and opposite reaction.
                </p>
              </div>
            </div>
          </div>
          {/* Applications of Newtons Laws */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Applications
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
              <li>
                Analyzing forces in equilibrium and non-equilibrium systems.
              </li>
              <li>
                Solving problems involving friction, tension, and normal forces.
              </li>
              <li>
                Understanding motion in various scenarios such as inclined
                planes, pulleys, and connected bodies.
              </li>
            </ul>
          </div>
        </div>

        {/* Work, Energy, and Power */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Work, Energy, and Power
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Work, energy, and power are fundamental concepts in physics that
              describe the capacity to do work, the energy transferred by doing
              work, and the rate at which work is done.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Work
                </h3>
                <BlockMath math="W = Fd \cos(\theta)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="W" /> = Work done
                  <br />
                  <InlineMath math="F" /> = Force
                  <br />
                  <InlineMath math="d" /> = Displacement
                  <br />
                  <InlineMath math="\theta" /> = Angle between force and
                  displacement
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Energy
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The capacity to do work. Common forms include kinetic energy (
                  <InlineMath math="K = \frac{1}{2}mv^2" />) and potential
                  energy (e.g., gravitational potential energy{" "}
                  <InlineMath math="U = mgh" />
                  ).
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-lime-600 dark:text-lime-300">
                  Power
                </h3>
                <BlockMath math="P = \frac{W}{t}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="P" /> = Power
                  <br />
                  <InlineMath math="W" /> = Work done
                  <br />
                  <InlineMath math="t" /> = Time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conservation of Energy */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Conservation of Energy
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The principle of conservation of energy states that energy cannot
              be created or destroyed, only transformed from one form to
              another. In a closed system, the total energy remains constant.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Principle
                </h3>
                <BlockMath math="E_{\text{initial}} = E_{\text{final}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="E_{\text{initial}}" /> = Initial total
                  energy
                  <br />
                  <InlineMath math="E_{\text{final}}" /> = Final total energy
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Analyzing mechanical systems involving kinetic and potential
                    energy.
                  </li>
                  <li>Solving problems involving energy transformations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Momentum & Impulse */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Momentum & Impulse
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Momentum is a measure of the mass in motion, and impulse is the
              change in momentum of an object when a force is applied over a
              period of time.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Momentum
                </h3>
                <BlockMath math="p = mv" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="p" /> = Momentum
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="v" /> = Velocity
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Impulse
                </h3>
                <BlockMath math="J = \Delta p = F\Delta t" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="J" /> = Impulse
                  <br />
                  <InlineMath math="\Delta p" /> = Change in momentum
                  <br />
                  <InlineMath math="F" /> = Force
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collisions (Elastic & Inelastic) */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Collisions (Elastic & Inelastic)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Collisions are interactions between objects where momentum is
              transferred. Collisions can be elastic, where both momentum and
              kinetic energy are conserved, or inelastic, where only momentum is
              conserved.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Elastic Collisions
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In elastic collisions, both momentum and kinetic energy are
                  conserved.
                  <BlockMath math="\frac{1}{2}m_1v_{1i}^2 + \frac{1}{2}m_2v_{2i}^2 = \frac{1}{2}m_1v_{1f}^2 + \frac{1}{2}m_2v_{2f}^2" />
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Inelastic Collisions
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  In inelastic collisions, momentum is conserved, but kinetic
                  energy is not. In a perfectly inelastic collision, the objects
                  stick together after the collision.
                  <BlockMath math="m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f" />
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
                    "A 2 kg block is at rest on a frictionless surface. A force of 10 N is applied for 5 seconds. Calculate the final velocity of the block.",
                  solution:
                    "a = \\frac{F}{m} = \\frac{10}{2} = 5 \\ \\text{m/s²} \\\\ v = u + at = 0 + (5 \\times 5) = 25 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A force of 50 N is applied to a 5 kg object, moving it a distance of 10 m. Calculate the work done.",
                  solution: "W = Fd = 50 \\times 10 = 500 \\ \\text{J}",
                },
                {
                  problem:
                    "A 1 kg object is lifted to a height of 20 m. Calculate its potential energy. (Assume g = 9.8 m/s²)",
                  solution:
                    "U = mgh = 1 \\times 9.8 \\times 20 = 196 \\ \\text{J}",
                },
                {
                  problem:
                    "A 70 kg runner has a kinetic energy of 1500 J. Calculate the speed of the runner.",
                  solution:
                    "K = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{\\frac{2K}{m}} = \\sqrt{\\frac{2 \\times 1500}{70}} = 6.55 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A machine does 5000 J of work in 20 seconds. Calculate the power of the machine.",
                  solution:
                    "P = \\frac{W}{t} = \\frac{5000}{20} = 250 \\ \\text{W}",
                },
                {
                  problem:
                    "A 0.5 kg ball is moving at 10 m/s. Calculate its momentum.",
                  solution: "p = mv = 0.5 \\times 10 = 5 \\ \\text{kg m/s}",
                },
                {
                  problem:
                    "A force of 20 N is applied to an object for 3 seconds. Calculate the impulse.",
                  solution: "J = F\\Delta t = 20 \\times 3 = 60 \\ \\text{N s}",
                },
                {
                  problem:
                    "A 2 kg object moving at 5 m/s collides with a stationary 3 kg object. If the collision is perfectly inelastic, calculate the final velocity.",
                  solution:
                    "m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f \\Rightarrow v_f = \\frac{m_1v_{1i} + m_2v_{2i}}{m_1 + m_2} = \\frac{2 \\times 5 + 3 \\times 0}{2 + 3} = 2 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A 1 kg object moving at 4 m/s collides elastically with a stationary 1 kg object. Calculate the final velocities of both objects.",
                  solution:
                    "v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i} + \\frac{2m_2}{m_1 + m_2}v_{2i} = 0 \\\\ v_{2f} = \\frac{2m_1}{m_1 + m_2}v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2}v_{2i} = 4 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A 5 kg mass is sliding on a horizontal surface with a speed of 4 m/s. It encounters a rough patch with a coefficient of kinetic friction of 0.2. Calculate the distance it slides before coming to rest. (Assume g = 9.8 m/s²)",
                  solution:
                    "f = \\mu_k N = \\mu_k mg = 0.2 \\times 5 \\times 9.8 = 9.8 \\ \\text{N} \\\\ a = \\frac{f}{m} = \\frac{9.8}{5} = 1.96 \\ \\text{m/s²} \\\\ v^2 = u^2 + 2as \\Rightarrow s = \\frac{v^2 - u^2}{2a} = \\frac{0 - 4^2}{2 \\times (-1.96)} = 4.08 \\ \\text{m}",
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
          Unveiling the Forces of Motion
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
