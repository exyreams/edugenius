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

export default function Relativity() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Modern Physics",
      href: "/physics/modern-physics",
    },
    {
      label: "Relativity",
      href: "/physics/modern-physics/relativity",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Relativity
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore Einstein&#39;s revolutionary theories of Special and General
          Relativity, which reshaped our understanding of space, time, gravity,
          and the universe.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Relativity */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Relativity
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Relativity encompasses two theories by Albert Einstein: Special
              Relativity, which deals with the relationship between space and
              time for objects moving at constant velocities, and General
              Relativity, which extends these ideas to include gravity.
            </p>
          </div>
        </div>

        {/* Special Relativity */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Special Relativity (Time Dilation, Length Contraction)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Special Relativity, introduced in 1905, revolutionized our
              understanding of space and time. It is based on two postulates:
              the laws of physics are the same for all non-accelerating
              observers, and the speed of light in a vacuum is constant for all
              observers, regardless of the motion of the light source.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Time Dilation
                </h3>
                <BlockMath math="t = \frac{t_0}{\sqrt{1 - \frac{v^2}{c^2}}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Time passes slower for objects that are moving relative to a
                  stationary observer.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="t" /> = Time observed by the stationary
                  observer
                  <br />
                  <InlineMath math="t_0" /> = Proper time (time measured in the
                  moving frame)
                  <br />
                  <InlineMath math="v" /> = Relative velocity between the
                  observers
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Length Contraction
                </h3>
                <BlockMath math="L = L_0\sqrt{1 - \frac{v^2}{c^2}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The length of an object moving relative to a stationary
                  observer is measured to be shorter in the direction of motion.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="L" /> = Length observed by the stationary
                  observer
                  <br />
                  <InlineMath math="L_0" /> = Proper length (length measured in
                  the moving frame)
                  <br />
                  <InlineMath math="v" /> = Relative velocity
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lorentz Transformations */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Lorentz Transformations
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Lorentz transformations are a set of equations that relate the
              space and time coordinates of two observers moving at a constant
              velocity relative to each other. They replace the Galilean
              transformations of Newtonian physics and are essential for
              describing phenomena at high speeds.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Equations
                </h3>
                <BlockMath math="x' = \gamma(x - vt)" />
                <BlockMath math="y' = y" />
                <BlockMath math="z' = z" />
                <BlockMath math="t' = \gamma(t - \frac{vx}{c^2})" />
                <BlockMath math="\gamma = \frac{1}{\sqrt{1-\frac{v^2}{c^2}}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="(x, y, z, t)" /> are coordinates in one
                  frame.
                  <br />
                  <InlineMath math="(x', y', z', t')" /> are coordinates in the
                  moving frame
                  <br />
                  <InlineMath math="v" /> is the relative velocity between
                  frames.
                  <br />
                  <InlineMath math="\gamma" /> is the Lorentz Factor.
                  <br />
                  <InlineMath math="c" /> is the speed of light.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Implications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Time dilation and length contraction are direct consequences
                    of the Lorentz transformations.
                  </li>
                  <li>
                    Simultaneity is relative: events that are simultaneous for
                    one observer may not be simultaneous for another observer in
                    relative motion.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mass-Energy Equivalence */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Mass-Energy Equivalence
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              One of the most famous results of Special Relativity is the
              mass-energy equivalence, summarized by the equation E=mc². This
              equation states that mass and energy are interchangeable and that
              a small amount of mass can be converted into a tremendous amount
              of energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Equation
                </h3>
                <BlockMath math="E = mc^2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="E" /> = Energy
                  <br />
                  <InlineMath math="m" /> = Mass
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Implications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Nuclear reactions, such as those in nuclear power plants and
                    atomic bombs, release energy by converting a small amount of
                    mass into energy.
                  </li>
                  <li>
                    Particle physics: In particle accelerators, particles are
                    accelerated to near the speed of light, and their kinetic
                    energy contributes to their mass.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* General Relativity */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            General Relativity (Gravitational Time Dilation, Curved Spacetime)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              General Relativity, published in 1915, extends Special Relativity
              to include gravity. It describes gravity not as a force but as a
              curvature of spacetime caused by the presence of mass and energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Gravitational Time Dilation
                </h3>
                <BlockMath math="t_0 = t_f \sqrt{1 - \frac{2GM}{rc^2}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Time passes slower in stronger gravitational fields.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="t_0" /> = Time in the gravitational field
                  <br />
                  <InlineMath math="t_f" /> = Time far from the massive object
                  <br />
                  <InlineMath math="G" /> = Gravitational constant
                  <br />
                  <InlineMath math="M" /> = Mass of the object creating the
                  gravitational field
                  <br />
                  <InlineMath math="r" /> = Distance from the center of the mass
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Curved Spacetime
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Mass and energy warp the fabric of spacetime, causing it to
                  curve. Objects move along the shortest paths (geodesics) in
                  this curved spacetime, which we perceive as the effect of
                  gravity.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Predictions and Evidence
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Bending of light around massive objects (gravitational
                    lensing)
                  </li>
                  <li>
                    Gravitational redshift: Light loses energy as it climbs out
                    of a gravitational well, causing its wavelength to increase
                  </li>
                  <li>
                    Existence of black holes: Regions of spacetime with such
                    strong gravity that nothing, not even light, can escape
                  </li>
                  <li>
                    Expansion of the universe: General Relativity provides the
                    framework for modern cosmology
                  </li>
                  <li>
                    Gravitational waves: Ripples in spacetime caused by
                    accelerating massive objects, predicted by General
                    Relativity and recently detected
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
                    "A spaceship is moving at 0.8c relative to Earth. If 10 years pass on the spaceship, how much time has passed on Earth?",
                  solution:
                    "t = \\frac{t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\frac{10}{\\sqrt{1 - 0.8^2}} \\approx 16.67 \\ \\text{years}",
                },
                {
                  problem:
                    "A muon is created in the upper atmosphere and travels at 0.99c. If its lifetime in its rest frame is 2.2 μs, what is its lifetime as observed from Earth?",
                  solution:
                    "t = \\frac{t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\frac{2.2 \\times 10^{-6}}{\\sqrt{1 - 0.99^2}} \\approx 15.6 \\times 10^{-6} \\ \\text{s}",
                },
                {
                  problem:
                    "Calculate the energy equivalent of an electron's rest mass (9.11 × 10⁻³¹ kg).",
                  solution:
                    "E = mc^2 = (9.11 \\times 10^{-31} \\ \\text{kg})(3 \\times 10^8 \\ \\text{m/s})^2 \\approx 8.2 \\times 10^{-14} \\ \\text{J}",
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
          Beyond the Fabric of Everyday Experience
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
