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

export default function Statics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Mechanics",
      href: "/physics/concepts/mechanics",
    },
    {
      label: "Statics (Forces in Equilibrium)",
      href: "/physics/concepts/mechanics/statics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Statics (Forces in Equilibrium)
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the principles governing objects at rest, where forces are
          balanced, and learn how to analyze and solve problems involving
          equilibrium.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Statics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Statics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Statics is a branch of mechanics that deals with bodies at rest or
              in equilibrium under the action of forces. It&#39;s fundamental to
              understanding how structures and objects remain stable.
            </p>
          </div>
        </div>

        {/* Newton’s Laws of Motion */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Newton&#39;s Laws of Motion
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Newton&#39;s Laws are foundational to classical mechanics and
              provide the basis for understanding equilibrium in statics.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                First Law (Inertia)
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                An object at rest stays at rest, and an object in motion stays
                in motion with the same speed and direction unless acted upon by
                an unbalanced force.
              </p>
            </div>
            <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Second Law
              </h3>
              <BlockMath math="F = ma" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The acceleration of an object is directly proportional to the
                net force acting on it and inversely proportional to its mass.
              </p>
            </div>
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

        {/* Free-Body Diagrams */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Free-Body Diagrams
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A free-body diagram (FBD) is a graphical illustration used to
              visualize the applied forces, moments, and resulting reactions on
              a body in a given condition.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Purpose
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  FBDs help simplify problems by isolating the body of interest
                  and showing all external forces acting on it.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Steps to Draw an FBD
                </h3>
                <ol className="mt-2 list-decimal pl-6 text-gray-600 dark:text-gray-300">
                  <li>Isolate the body.</li>
                  <li>Identify all external forces.</li>
                  <li>
                    Represent forces as vectors with appropriate magnitude and
                    direction.
                  </li>
                  <li>Choose a coordinate system.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Force and Torque */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Force and Torque
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Force is a vector quantity that tends to cause a change in the
              motion of an object. Torque is the rotational equivalent of force,
              causing a change in rotational motion.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Force
                </h3>
                <BlockMath math="\mathbf{F} = m\mathbf{a}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force (vector)
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="\mathbf{a}" /> = Acceleration (vector)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Torque
                </h3>
                <BlockMath math="\mathbf{\tau} = \mathbf{r} \times \mathbf{F}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{\tau}" /> = Torque (vector)
                  <br />
                  <InlineMath math="\mathbf{r}" /> = Position vector from the
                  pivot point to the point of force application
                  <br />
                  <InlineMath math="\mathbf{F}" /> = Force (vector)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Equilibrium of Rigid Bodies */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Equilibrium of Rigid Bodies
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              A rigid body is in equilibrium when the net external force and the
              net external torque acting on it are both zero.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Translational Equilibrium
                </h3>
                <BlockMath math="\sum \mathbf{F} = 0" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The sum of all forces acting on the body is zero.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Rotational Equilibrium
                </h3>
                <BlockMath math="\sum \mathbf{\tau} = 0" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The sum of all torques acting on the body is zero.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Friction (Static & Kinetic) */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-sky-300 dark:to-blue-300">
            Friction (Static & Kinetic)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Friction is a force that opposes the relative motion or tendency
              of such motion of two surfaces in contact.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Static Friction
                </h3>
                <BlockMath math="f_s \leq \mu_s N" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f_s" /> = Static friction force
                  <br />
                  <InlineMath math="\mu_s" /> = Coefficient of static friction
                  <br />
                  <InlineMath math="N" /> = Normal force
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Kinetic Friction
                </h3>
                <BlockMath math="f_k = \mu_k N" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f_k" /> = Kinetic friction force
                  <br />
                  <InlineMath math="\mu_k" /> = Coefficient of kinetic friction
                  <br />
                  <InlineMath math="N" /> = Normal force
                </p>
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
                    "A 10 kg block rests on a horizontal surface. The coefficient of static friction is 0.4. What is the maximum force that can be applied horizontally without moving the block?",
                  solution:
                    "f_s = \\mu_s N = \\mu_s mg = 0.4 \\times 10 \\ \\text{kg} \\times 9.8 \\ \\text{m/s}^2 = 39.2 \\ \\text{N}",
                },
                {
                  problem:
                    "A beam of length 5 m is supported at both ends. A load of 500 N is placed 2 m from the left end. Calculate the reactions at the supports.",
                  solution:
                    "Let R_L and R_R be the reactions at the left and right supports, respectively. \\\\ R_L + R_R = 500 \\ \\text{N} \\\\ Taking moments about the left end: \\\\ 5R_R = 500 \\times 2 \\\\ R_R = 200 \\ \\text{N} \\\\ R_L = 500 - 200 = 300 \\ \\text{N}",
                },
                {
                  problem:
                    "A 5 kg block is on an inclined plane at an angle of 30° to the horizontal. The coefficient of kinetic friction is 0.2. Calculate the acceleration of the block down the plane.",
                  solution:
                    "Forces along the plane: \\\\ mg\\sin\\theta - f_k = ma \\\\ f_k = \\mu_k N = \\mu_k mg\\cos\\theta \\\\ a = g(\\sin\\theta - \\mu_k \\cos\\theta) = 9.8(\\sin 30° - 0.2\\cos 30°) \\approx 3.2 \\ \\text{m/s}^2",
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
          Balancing the Forces of Nature
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
