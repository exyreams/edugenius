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

export default function RotationalMechanics() {
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
      label: "Rotational Mechanics",
      href: "/physics/concepts/mechanics/rotational-mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Rotational Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Dive into the world of spinning objects and explore the principles
          governing rotational motion, from angular velocity to the conservation
          of angular momentum.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Rotational Mechanics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Rotational Mechanics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Rotational mechanics is the study of objects rotating about an
              axis. It extends the principles of linear motion to rotational
              motion, introducing concepts like angular velocity, torque, and
              moment of inertia.
            </p>
          </div>
        </div>

        {/* Angular Kinematics & Dynamics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Angular Kinematics & Dynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Angular kinematics describes rotational motion using quantities
              like angular displacement, velocity, and acceleration. Angular
              dynamics relates these quantities to the forces and torques
              causing the rotation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Angular Kinematics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Angular Displacement: <InlineMath math="\theta" /> (radians)
                  </li>
                  <li>
                    Angular Velocity:{" "}
                    <InlineMath math="\omega = \frac{d\theta}{dt}" /> (rad/s)
                  </li>
                  <li>
                    Angular Acceleration:{" "}
                    <InlineMath math="\alpha = \frac{d\omega}{dt}" /> (rad/s²)
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Angular Dynamics
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Torque: <InlineMath math="\tau = I\alpha" /> (N·m)
                  </li>
                  <li>
                    Newton&#39;s 2nd Law for Rotation:{" "}
                    <InlineMath math="\sum \tau = I\alpha" />
                  </li>
                  <li>
                    Rotational Kinetic Energy:{" "}
                    <InlineMath math="K = \frac{1}{2}I\omega^2" /> (J)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Moment of Inertia */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Moment of Inertia
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The moment of inertia is a measure of an object&#39;s resistance
              to changes in its rotational motion. It depends on the
              object&#39;s mass distribution and the axis of rotation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Definition
                </h3>
                <BlockMath math="I = \sum m_i r_i^2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  For a system of particles:
                  <br />
                  <InlineMath math="I" /> = Moment of inertia
                  <br />
                  <InlineMath math="m_i" /> = Mass of particle i
                  <br />
                  <InlineMath math="r_i" /> = Distance of particle i from the
                  axis of rotation
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Parallel Axis Theorem
                </h3>
                <BlockMath math="I = I_{cm} + Md^2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Relates the moment of inertia about an axis to the moment of
                  inertia about a parallel axis through the center of mass:
                  <br />
                  <InlineMath math="I_{cm}" /> = Moment of inertia about the
                  center of mass
                  <br />
                  <InlineMath math="M" /> = Total mass
                  <br />
                  <InlineMath math="d" /> = Distance between the two axes
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Torque & Angular Momentum */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Torque & Angular Momentum
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Torque is the rotational equivalent of force, causing changes in
              angular momentum. Angular momentum is a measure of an object&#39;s
              rotational inertia.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
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
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Angular Momentum
                </h3>
                <BlockMath math="\mathbf{L} = I\mathbf{\omega}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{L}" /> = Angular momentum (vector)
                  <br />
                  <InlineMath math="I" /> = Moment of inertia
                  <br />
                  <InlineMath math="\mathbf{\omega}" /> = Angular velocity
                  (vector)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conservation of Angular Momentum */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Conservation of Angular Momentum
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              In the absence of external torques, the total angular momentum of
              a system remains constant. This principle is crucial for
              understanding phenomena like the spinning of a figure skater or
              the stability of a gyroscope.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Principle
                </h3>
                <BlockMath math="\mathbf{L}_{initial} = \mathbf{L}_{final}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  If <InlineMath math="\sum \mathbf{\tau}_{external} = 0" />,
                  then the total angular momentum is conserved.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Figure skater pulling in arms to spin faster</li>
                  <li>
                    Formation of planetary systems from rotating dust clouds
                  </li>
                  <li>Stability of bicycles and gyroscopes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Gyroscopic Motion */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-sky-300 dark:to-blue-300">
            Gyroscopic Motion
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Gyroscopic motion is the tendency of a rotating object to maintain
              its orientation in space. This phenomenon is due to the
              conservation of angular momentum and is observed in gyroscopes,
              tops, and other spinning objects.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Gyroscopic Precession
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  When a torque is applied to a spinning gyroscope, it causes
                  the axis of rotation to precess, or move in a circular path
                  perpendicular to the torque.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Navigation systems (inertial guidance)</li>
                  <li>Stabilization of ships and spacecraft</li>
                  <li>
                    Understanding the behavior of spinning tops and bicycles
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
                    "A wheel initially at rest starts rotating with a constant angular acceleration of 2 rad/s². Calculate its angular velocity after 5 seconds.",
                  solution:
                    "\\omega = \\alpha t = 2 \\ \\text{rad/s}^2 \\times 5 \\ \\text{s} = 10 \\ \\text{rad/s}",
                },
                {
                  problem:
                    "A solid cylinder of mass 2 kg and radius 0.1 m rolls down an inclined plane without slipping. Calculate its moment of inertia about its central axis.",
                  solution:
                    "I = \\frac{1}{2}mr^2 = \\frac{1}{2}(2 \\ \\text{kg})(0.1 \\ \\text{m})^2 = 0.01 \\ \\text{kg} \\cdot \\text{m}^2",
                },
                {
                  problem:
                    "A figure skater with a moment of inertia of 3 kg·m² is spinning at 2 rad/s. She then pulls her arms in, reducing her moment of inertia to 1.5 kg·m². Calculate her new angular velocity.",
                  solution:
                    "I_1\\omega_1 = I_2\\omega_2 \\\\ (3 \\ \\text{kg} \\cdot \\text{m}^2)(2 \\ \\text{rad/s}) = (1.5 \\ \\text{kg} \\cdot \\text{m}^2)\\omega_2 \\\\ \\omega_2 = 4 \\ \\text{rad/s}",
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
          Unveiling the Secrets of Spinning Systems
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
