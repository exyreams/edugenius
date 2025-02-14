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

export default function Kinematics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Mechanics", href: "/physics/concepts/mechanics" },
    {
      label: "Kinematics",
      href: "/physics/concepts/mechanics/kinematics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-pink-700 to-rose-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-pink-200 dark:to-rose-300">
          Kinematics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fundamental principles of motion without considering
          forces, including displacement, velocity, acceleration, projectile
          motion, circular motion, and relative motion.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Kinematics */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-pink-200 p-6 dark:from-rose-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-red-300 dark:to-pink-300">
            Introduction to Kinematics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Kinematics is the branch of mechanics that describes the motion of
              points, objects, and systems of objects without considering the
              forces that cause them to move. This section introduces the basic
              concepts of kinematics, including displacement, velocity, and
              acceleration.
            </p>
          </div>
        </div>

        {/* Displacement, Velocity, and Acceleration */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Displacement, Velocity, and Acceleration
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Displacement, velocity, and acceleration are fundamental
              quantities in kinematics. Displacement refers to the change in
              position of an object, velocity is the rate of change of
              displacement, and acceleration is the rate of change of velocity.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Displacement
                </h3>
                <BlockMath math="\Delta x = x_f - x_i" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\Delta x" /> = Displacement
                  <br />
                  <InlineMath math="x_f" /> = Final position
                  <br />
                  <InlineMath math="x_i" /> = Initial position
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Velocity
                </h3>
                <BlockMath math="v = \frac{\Delta x}{\Delta t}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="v" /> = Velocity
                  <br />
                  <InlineMath math="\Delta x" /> = Displacement
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-orange-600 dark:text-orange-300">
                  Acceleration
                </h3>
                <BlockMath math="a = \frac{\Delta v}{\Delta t}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="a" /> = Acceleration
                  <br />
                  <InlineMath math="\Delta v" /> = Change in velocity
                  <br />
                  <InlineMath math="\Delta t" /> = Time interval
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  Equations of Motion
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    <InlineMath math="v = u + at" />
                  </li>
                  <li>
                    <InlineMath math="s = ut + \frac{1}{2}at^2" />
                  </li>
                  <li>
                    <InlineMath math="v^2 = u^2 + 2as" />
                  </li>
                </ul>
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="u" /> = Initial velocity
                  <br />
                  <InlineMath math="v" /> = Final velocity
                  <br />
                  <InlineMath math="a" /> = Acceleration
                  <br />
                  <InlineMath math="t" /> = Time
                  <br />
                  <InlineMath math="s" /> = Displacement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projectile Motion */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Projectile Motion
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Projectile motion is a form of motion experienced by an object
              that is projected near the Earth&#39;s surface and moves along a
              curved path under the action of gravity only.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Horizontal motion is uniform (constant velocity).</li>
                  <li>
                    Vertical motion is uniformly accelerated (constant
                    acceleration due to gravity).
                  </li>
                  <li>The path of a projectile is a parabola.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Equations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Horizontal distance: <InlineMath math="x = v_{0x}t" />
                  </li>
                  <li>
                    Vertical distance:{" "}
                    <InlineMath math="y = v_{0y}t - \frac{1}{2}gt^2" />
                  </li>
                  <li>
                    Time of flight: <InlineMath math="T = \frac{2v_{0y}}{g}" />
                  </li>
                  <li>
                    Maximum height:{" "}
                    <InlineMath math="H = \frac{v_{0y}^2}{2g}" />
                  </li>
                  <li>
                    Range:{" "}
                    <InlineMath math="R = \frac{v_0^2 \sin(2\theta)}{g}" />
                  </li>
                </ul>
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="v_{0x}" /> = Initial horizontal velocity
                  <br />
                  <InlineMath math="v_{0y}" /> = Initial vertical velocity
                  <br />
                  <InlineMath math="v_0" /> = Initial velocity
                  <br />
                  <InlineMath math="g" /> = Acceleration due to gravity
                  <br />
                  <InlineMath math="\theta" /> = Launch angle
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Projectile Motion */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <path
                d="M20 80 Q80 10 180 80"
                stroke="#4ade80"
                strokeWidth="2"
                fill="none"
              />
              <text x="20" y="85" fontSize="12" fill="#4ade80">
                v₀
              </text>
              <text x="80" y="20" fontSize="12" fill="#4ade80">
                H
              </text>
              <text x="180" y="85" fontSize="12" fill="#4ade80">
                R
              </text>
            </svg>
          </div>
        </div>

        {/* Circular Motion */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Circular Motion
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Circular motion is the movement of an object along the
              circumference of a circle or a rotation along a circular path. It
              can be uniform, with constant angular velocity, or non-uniform,
              with changing angular velocity.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Angular displacement (<InlineMath math="\theta" />
                    ): Angle through which an object rotates.
                  </li>
                  <li>
                    Angular velocity (<InlineMath math="\omega" />
                    ): Rate of change of angular displacement.
                  </li>
                  <li>
                    Angular acceleration (<InlineMath math="\alpha" />
                    ): Rate of change of angular velocity.
                  </li>
                  <li>
                    Centripetal acceleration (<InlineMath math="a_c" />
                    ): Acceleration directed towards the center of the circle.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Equations
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    <InlineMath math="\omega = \frac{\Delta \theta}{\Delta t}" />
                  </li>
                  <li>
                    <InlineMath math="\alpha = \frac{\Delta \omega}{\Delta t}" />
                  </li>
                  <li>
                    <InlineMath math="a_c = \frac{v^2}{r} = \omega^2 r" />
                  </li>
                  <li>
                    <InlineMath math="v = r\omega" />
                  </li>
                </ul>
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="\omega" /> = Angular velocity
                  <br />
                  <InlineMath math="\alpha" /> = Angular acceleration
                  <br />
                  <InlineMath math="a_c" /> = Centripetal acceleration
                  <br />
                  <InlineMath math="v" /> = Linear velocity
                  <br />
                  <InlineMath math="r" /> = Radius of the circular path
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Circular Motion */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <circle
                cx="100"
                cy="50"
                r="40"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 50 L140 50"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
              />
              <text x="120" y="45" fontSize="12" fill="#3b82f6">
                v
              </text>
              <text x="95" y="45" fontSize="12" fill="#3b82f6">
                a_c
              </text>
              <text x="145" y="55" fontSize="12" fill="#3b82f6">
                r
              </text>
            </svg>
          </div>
        </div>

        {/* Relative Motion & Frames of Reference */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 p-6 dark:from-indigo-600 dark:to-purple-600">
          <h2 className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-indigo-300">
            Relative Motion & Frames of Reference
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Relative motion refers to the motion of an object with respect to
              another object or frame of reference. A frame of reference is a
              coordinate system used to describe the motion of an object.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    The motion of an object is always described relative to
                    something else.
                  </li>
                  <li>
                    Different observers may describe the same motion
                    differently.
                  </li>
                  <li>
                    Inertial frames of reference are those in which Newton&#39;s
                    laws of motion hold.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Relative Velocity
                </h3>
                <BlockMath math="\mathbf{v}_{AB} = \mathbf{v}_{AC} + \mathbf{v}_{CB}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\mathbf{v}_{AB}" /> = Velocity of A relative
                  to B
                  <br />
                  <InlineMath math="\mathbf{v}_{AC}" /> = Velocity of A relative
                  to C
                  <br />
                  <InlineMath math="\mathbf{v}_{CB}" /> = Velocity of C relative
                  to B
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
                    "An object is thrown vertically upwards with an initial velocity of 20 m/s. Calculate the maximum height reached. (Assume g = 9.8 m/s²)",
                  solution:
                    "H = \\frac{v_{0y}^2}{2g} = \\frac{20^2}{2 \\times 9.8} = 20.41 \\ \\text{m}",
                },
                {
                  problem:
                    "A car accelerates from rest to 60 km/h in 10 seconds. Calculate the acceleration in m/s².",
                  solution:
                    "60 \\ \\text{km/h} = \\frac{60 \\times 1000}{3600} = 16.67 \\ \\text{m/s} \\\\ a = \\frac{\\Delta v}{\\Delta t} = \\frac{16.67 - 0}{10} = 1.67 \\ \\text{m/s²}",
                },
                {
                  problem:
                    "A ball is thrown at an angle of 30° with an initial velocity of 30 m/s. Calculate the horizontal range of the projectile. (Assume g = 9.8 m/s²)",
                  solution:
                    "R = \\frac{v_0^2 \\sin(2\\theta)}{g} = \\frac{30^2 \\sin(60)}{9.8} = 79.53 \\ \\text{m}",
                },
                {
                  problem:
                    "A car is moving in a circular path of radius 50 m with a constant speed of 20 m/s. Calculate the centripetal acceleration.",
                  solution:
                    "a_c = \\frac{v^2}{r} = \\frac{20^2}{50} = 8 \\ \\text{m/s²}",
                },
                {
                  problem:
                    "Two cars are moving towards each other. Car A is moving at 60 km/h and Car B is moving at 80 km/h. Calculate the relative velocity of Car A with respect to Car B.",
                  solution:
                    "v_{AB} = v_A - v_B = 60 - (-80) = 140 \\ \\text{km/h}",
                },
                {
                  problem:
                    "A projectile is fired with an initial velocity of 50 m/s at an angle of 45°. Calculate the time of flight. (Assume g = 9.8 m/s²)",
                  solution:
                    "T = \\frac{2v_{0y}}{g} = \\frac{2 \\times 50 \\sin(45)}{9.8} = 7.22 \\ \\text{s}",
                },
                {
                  problem:
                    "An object is moving in a circular path of radius 10 m with an angular velocity of 2 rad/s. Calculate the linear velocity.",
                  solution: "v = r\\omega = 10 \\times 2 = 20 \\ \\text{m/s}",
                },
                {
                  problem:
                    "A ball is dropped from a height of 80 m. Calculate the time it takes to reach the ground. (Assume g = 9.8 m/s²)",
                  solution:
                    "s = ut + \\frac{1}{2}at^2 \\Rightarrow 80 = 0 + \\frac{1}{2} \\times 9.8 \\times t^2 \\\\ t = \\sqrt{\\frac{2 \\times 80}{9.8}} = 4.04 \\ \\text{s}",
                },
                {
                  problem:
                    "A car is moving at a constant velocity of 25 m/s. Calculate the distance covered in 15 seconds.",
                  solution: "s = vt = 25 \\times 15 = 375 \\ \\text{m}",
                },
                {
                  problem:
                    "A particle moves in a circle of radius 5 m with a constant speed. If it completes one revolution in 10 seconds, calculate the angular velocity.",
                  solution:
                    "\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{10} = 0.628 \\ \\text{rad/s}",
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
          Exploring the Essence of Motion
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
