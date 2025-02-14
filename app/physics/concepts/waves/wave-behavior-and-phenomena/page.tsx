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

export default function WaveBehaviorPhenomena() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Waves",
      href: "/physics/concepts/waves",
    },
    {
      label: "Wave Behavior & Phenomena",
      href: "/physics/concepts/waves/wave-behavior-and-phenomena",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Wave Behavior & Phenomena
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the fascinating ways in which waves interact with their
          environment and each other, including reflection, refraction,
          diffraction, interference, superposition, and the Doppler effect.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Wave Behavior & Phenomena */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Wave Behavior & Phenomena
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Waves exhibit a variety of interesting behaviors when they
              encounter boundaries, obstacles, or other waves. These phenomena
              include reflection, refraction, diffraction, interference, and the
              Doppler effect, all of which can be described using fundamental
              principles.
            </p>
          </div>
        </div>

        {/* Reflection & Refraction */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Reflection & Refraction (Snell&#39;s Law)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              <b>Reflection</b> is the bouncing back of a wave when it
              encounters a boundary. <b>Refraction</b> is the bending of a wave
              as it passes from one medium to another.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Reflection
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    The angle of incidence equals the angle of reflection.
                  </li>
                  <li>
                    Examples: Light reflecting off a mirror, sound echoing.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Refraction
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The bending of a wave as it passes from one medium to another
                  due to a change in wave speed.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Snell&#39;s Law
                </h3>
                <BlockMath math="n_1 \sin\theta_1 = n_2 \sin\theta_2" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Relates the angles of incidence and refraction to the
                  refractive indices of the two media.
                  <br />
                  Where:
                  <br />
                  <InlineMath math="n_1" /> = Refractive index of the first
                  medium
                  <br />
                  <InlineMath math="\theta_1" /> = Angle of incidence
                  <br />
                  <InlineMath math="n_2" /> = Refractive index of the second
                  medium
                  <br />
                  <InlineMath math="\theta_2" /> = Angle of refraction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diffraction & Interference */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Diffraction & Interference
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              <b>Diffraction</b> is the bending of waves around obstacles or the
              spreading of waves past small openings. <b>Interference</b> is the
              phenomenon that occurs when two or more waves overlap, resulting
              in a new wave pattern.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Diffraction
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    More pronounced when the size of the obstacle or opening is
                    comparable to the wavelength.
                  </li>
                  <li>
                    Examples: Light bending around a corner, water waves
                    spreading out from a narrow opening.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Interference
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Constructive interference:</b> Waves add up to create a
                    larger amplitude.
                  </li>
                  <li>
                    <b>Destructive interference:</b> Waves cancel each other
                    out, resulting in a smaller amplitude.
                  </li>
                  <li>
                    Examples: Young&#39;s double-slit experiment, colors in thin
                    films.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Superposition Principle */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Superposition Principle
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The superposition principle states that when two or more waves
              overlap, the resultant displacement at any point and at any
              instant is the algebraic sum of the displacements of the
              individual waves.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Implications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Waves can pass through each other without being permanently
                    altered.
                  </li>
                  <li>
                    Interference and diffraction patterns are a result of
                    superposition.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    Understanding wave interference in optics and acoustics.
                  </li>
                  <li>
                    Analyzing complex waveforms by decomposing them into simpler
                    waves (Fourier analysis).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Doppler Effect */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Doppler Effect (Moving Source & Observer)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Doppler effect is the change in frequency or wavelength of a
              wave in relation to an observer who is moving relative to the wave
              source. It is commonly observed with sound waves and light waves.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Moving Source
                </h3>
                <BlockMath math="f' = f \left(\frac{v}{v \pm v_s}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f'" /> = Observed frequency
                  <br />
                  <InlineMath math="f" /> = Source frequency
                  <br />
                  <InlineMath math="v" /> = Speed of the wave in the medium
                  <br />
                  <InlineMath math="v_s" /> = Speed of the source (positive if
                  moving away from the observer, negative if moving towards)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Moving Observer
                </h3>
                <BlockMath math="f' = f \left(\frac{v \pm v_o}{v}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f'" /> = Observed frequency
                  <br />
                  <InlineMath math="f" /> = Source frequency
                  <br />
                  <InlineMath math="v" /> = Speed of the wave in the medium
                  <br />
                  <InlineMath math="v_o" /> = Speed of the observer (positive if
                  moving towards the source, negative if moving away)
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-4 rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Applications
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Radar:</b> Measuring the speed of objects.
                  </li>
                  <li>
                    <b>Astronomy:</b> Determining the motion of stars and
                    galaxies (redshift and blueshift).
                  </li>
                  <li>
                    <b>Medical imaging:</b> Doppler ultrasound to visualize
                    blood flow.
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
                    "Light with a wavelength of 600 nm in air enters water, which has a refractive index of 1.33. Calculate the wavelength of light in water.",
                  solution:
                    "\\lambda_w = \\frac{\\lambda_{air}}{n_w} = \\frac{600 \\ \\text{nm}}{1.33} \\approx 451.13 \\ \\text{nm}",
                },
                {
                  problem:
                    "A double-slit experiment is performed with slit separation 0.5 mm and a screen distance of 2 m. If the distance between the first and fifth bright fringes is 10 mm, calculate the wavelength of light used.",
                  solution:
                    "\\Delta y = \\frac{m\\lambda L}{d} \\Rightarrow \\lambda = \\frac{\\Delta y d}{mL} = \\frac{(10 \\times 10^{-3} \\ \\text{m})(0.5 \\times 10^{-3} \\ \\text{m})}{(5-1)(2 \\ \\text{m})} = 6.25 \\times 10^{-7} \\ \\text{m} = 625 \\ \\text{nm}",
                },
                {
                  problem:
                    "A train is moving at 30 m/s towards a stationary observer. If the train's whistle has a frequency of 200 Hz, what frequency does the observer hear? (Assume the speed of sound in air is 340 m/s)",
                  solution:
                    "f' = f \\left(\\frac{v}{v - v_s}\\right) = 200 \\ \\text{Hz} \\left(\\frac{340 \\ \\text{m/s}}{340 \\ \\text{m/s} - 30 \\ \\text{m/s}}\\right) \\approx 219.35 \\ \\text{Hz}",
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
          Unveiling the Interplay of Waves
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
