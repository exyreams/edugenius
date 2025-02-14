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

export default function WaveOpticsPhysicalOptics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Optics",
      href: "/physics/optics",
    },
    {
      label: "Wave Optics (Physical Optics)",
      href: "/physics/optics/wave-optics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Wave Optics (Physical Optics)
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the wave nature of light and the phenomena that arise from it,
          including interference, diffraction, and polarization, which cannot be
          explained by geometric optics alone.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Wave Optics */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Wave Optics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Wave optics, also known as physical optics, is a branch of optics
              that studies phenomena such as interference, diffraction, and
              polarization, which arise from the wave nature of light. These
              effects cannot be adequately explained by geometric optics, which
              treats light as rays.
            </p>
          </div>
        </div>

        {/* Huygens' Principle */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Huygens&#39; Principle
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Huygens&#39; principle is a method of analysis applied to problems
              of wave propagation. It states that every point on a wavefront can
              be considered as a source of secondary spherical wavelets, and the
              new position of the wavefront after a time interval is the surface
              tangent to these secondary wavelets.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-1">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Each point on a wavefront acts as a source of secondary
                    spherical wavelets.
                  </li>
                  <li>
                    The new position of the wavefront is the envelope of these
                    wavelets.
                  </li>
                  <li>
                    Explains wave phenomena like diffraction and refraction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interference */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Interference (Young&#39;s Double-Slit Experiment, Thin Films)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Interference is the phenomenon that occurs when two or more waves
              overlap, resulting in a new wave pattern. The principle of
              superposition states that the resultant displacement at any point
              is the algebraic sum of the displacements of the individual waves.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Young&#39;s Double-Slit Experiment
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A classic experiment demonstrating the wave nature of light.
                  Coherent light passing through two narrow slits produces an
                  interference pattern of bright and dark fringes on a screen.
                </p>
                <BlockMath math="d\sin\theta = m\lambda" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="d" /> = Distance between the slits
                  <br />
                  <InlineMath math="\theta" /> = Angle of the mth bright fringe
                  from the central maximum
                  <br />
                  <InlineMath math="m" /> = Order of the fringe (0, 1, 2, ...)
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength of light
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Thin Film Interference
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Occurs when light waves reflected from the upper and lower
                  surfaces of a thin film interfere with each other.
                  <br />
                  Examples: soap bubbles, oil slicks on water.
                </p>
                <BlockMath math="2nt = \left(m + \frac{1}{2}\right)\lambda" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Condition for constructive interference in reflected light
                  (for normal incidence):
                  <br />
                  Where:
                  <br />
                  <InlineMath math="n" /> is the index of refraction of the
                  film. <br />
                  <InlineMath math="t" /> is the thickness of the film.
                  <br />
                  <InlineMath math="m" /> is an integer.
                  <br />
                  <InlineMath math="\lambda" /> is the wavelength of light in
                  vacuum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diffraction */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Diffraction (Single-Slit, Double-Slit, and Grating Diffraction)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Diffraction is the bending of waves around obstacles or the
              spreading of waves past small openings. It is a characteristic
              phenomenon of all types of waves, including light waves.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Single-Slit Diffraction
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  When light passes through a single narrow slit, it produces a
                  diffraction pattern consisting of a broad central maximum and
                  weaker secondary maxima.
                </p>
                <BlockMath math="a\sin\theta = m\lambda" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="a" /> = Width of the slit
                  <br />
                  <InlineMath math="\theta" /> = Angle of the mth minimum from
                  the central maximum
                  <br />
                  <InlineMath math="m" /> = Order of the minimum (1, 2, 3, ...)
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength of light
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Double-Slit Diffraction
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Combines the effects of both interference and diffraction. The
                  resulting pattern is an interference pattern within a
                  diffraction envelope.
                </p>
                <BlockMath math="d\sin\theta = m\lambda" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="d" /> is the distance between the two slits.
                  <br />
                  <InlineMath math="\theta" /> is the angle to the mth order
                  maximum.
                  <br />
                  <InlineMath math="m" /> is an integer representing the order
                  of the maximum.
                  <br />
                  <InlineMath math="\lambda" /> is the wavelength of the light.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Diffraction Grating
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Consists of a large number of equally spaced parallel slits.
                  Produces sharp, well-defined interference maxima.
                </p>
                <BlockMath math="d\sin\theta = m\lambda" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="d" /> is the spacing between adjacent slits
                  (grating spacing).
                  <br />
                  <InlineMath math="\theta" /> is the angle to the mth order
                  maximum.
                  <br />
                  <InlineMath math="m" /> is an integer representing the order
                  of the maximum.
                  <br />
                  <InlineMath math="\lambda" /> is the wavelength of the light.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Polarization */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Polarization (Linear, Circular, and Brewster&#39;s Angle)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Polarization refers to the orientation of the oscillations of a
              transverse wave. Light is an electromagnetic wave, and its
              polarization describes the direction of the electric field
              oscillations.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Linear Polarization
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The electric field oscillates in a single plane.
                  <br />
                  Can be produced by passing unpolarized light through a
                  polarizing filter.
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Brewster&#39;s Angle
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The angle of incidence at which light with a particular
                  polarization is perfectly transmitted through a transparent
                  dielectric surface, with no reflection.
                  <br />
                  Given by:
                  <BlockMath math="\tan\theta_B = \frac{n_2}{n_1}" />
                  Where <InlineMath math="\theta_B" /> is Brewster&#39;s angle,
                  and <InlineMath math="n_1" /> and <InlineMath math="n_2" />{" "}
                  are the refractive indices of the two media.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Circular Polarization
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The electric field vector rotates in a circular path around
                  the direction of propagation.
                  <br />
                  Can be right-circularly or left-circularly polarized.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>Polarizing sunglasses to reduce glare.</li>
                  <li>3D movies using circularly polarized light.</li>
                  <li>Liquid crystal displays (LCDs)</li>
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
                    "In a Young's double-slit experiment, the slit separation is 0.2 mm, and the screen is placed 1 m away. If the wavelength of light is 500 nm, calculate the distance between adjacent bright fringes.",
                  solution:
                    "\\Delta y = \\frac{\\lambda L}{d} = \\frac{(500 \\times 10^{-9} \\ \\text{m})(1 \\ \\text{m})}{0.2 \\times 10^{-3} \\ \\text{m}} = 2.5 \\times 10^{-3} \\ \\text{m} = 2.5 \\ \\text{mm}",
                },
                {
                  problem:
                    "A thin film of oil (n = 1.4) on water (n = 1.33) produces constructive interference for reflected light of wavelength 600 nm. What is the minimum thickness of the oil film?",
                  solution:
                    "2nt = \\left(m + \\frac{1}{2}\\right)\\lambda \\\\ t = \\frac{\\left(m + \\frac{1}{2}\\right)\\lambda}{2n} = \\frac{\\left(0 + \\frac{1}{2}\\right)(600 \\ \\text{nm})}{2(1.4)} \\approx 107 \\ \\text{nm}",
                },
                {
                  problem:
                    "A diffraction grating has 5000 lines per cm. Calculate the angle of the second-order maximum for light with a wavelength of 550 nm.",
                  solution:
                    "d = \\frac{1 \\ \\text{cm}}{5000} = 2 \\times 10^{-4} \\ \\text{cm} = 2 \\times 10^{-6} \\ \\text{m} \\\\ \\sin\\theta = \\frac{m\\lambda}{d} = \\frac{2(550 \\times 10^{-9} \\ \\text{m})}{2 \\times 10^{-6} \\ \\text{m}} = 0.55 \\\\ \\theta = \\sin^{-1}(0.55) \\approx 33.4°",
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
          Unveiling the Wave Nature of Light
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
