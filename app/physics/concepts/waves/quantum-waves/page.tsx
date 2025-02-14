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

export default function QuantumWaves() {
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
      label: "Quantum Waves",
      href: "/physics/concepts/waves/quantum-waves",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Quantum Waves
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Delve into the fascinating realm of quantum mechanics where particles
          behave like waves, governed by the Schrödinger equation, and explore
          concepts like wave-particle duality, quantum tunneling, and the
          Heisenberg Uncertainty Principle.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Quantum Waves */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Introduction to Quantum Waves
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              In quantum mechanics, particles such as electrons and photons
              exhibit both wave-like and particle-like properties. This
              wave-particle duality is a fundamental concept of quantum theory,
              and the behavior of these particles is described by wave functions
              that evolve according to the Schrödinger equation.
            </p>
          </div>
        </div>

        {/* Wave-Particle Duality */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Wave-Particle Duality (de Broglie Hypothesis)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The de Broglie hypothesis postulates that all matter exhibits
              wave-like properties, and that the wavelength (λ) of a particle is
              inversely proportional to its momentum (p).
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  de Broglie Wavelength
                </h3>
                <BlockMath math="\lambda = \frac{h}{p} = \frac{h}{mv}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\lambda" /> = de Broglie wavelength
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                  <br />
                  <InlineMath math="p" /> = Momentum of the particle
                  <br />
                  <InlineMath math="m" /> = Mass of the particle
                  <br />
                  <InlineMath math="v" /> = Velocity of the particle
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Experimental Evidence
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Davisson-Germer experiment:</b> Demonstrated the
                    diffraction of electrons, confirming their wave nature.
                  </li>
                  <li>
                    <b>Electron microscopy:</b> Utilizes the wave nature of
                    electrons to achieve higher resolution than light
                    microscopes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Schrödinger's Wave Equation */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Schrödinger&#39;s Wave Equation
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Schrödinger equation is a fundamental equation in quantum
              mechanics that describes how the quantum state of a physical
              system changes over time. It is the quantum analogue of
              Newton&#39;s second law in classical mechanics.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Time-Dependent Schrödinger Equation
                </h3>
                <BlockMath math="i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \hat{H} \Psi(\mathbf{r},t)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="i" /> = Imaginary unit
                  <br />
                  <InlineMath math="\hbar" /> = Reduced Planck&#39;s constant
                  <br />
                  <InlineMath math="\Psi(\mathbf{r},t)" /> = Wave function of
                  the system
                  <br />
                  <InlineMath math="\hat{H}" /> = Hamiltonian operator
                  (represents the total energy of the system)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Time-Independent Schrödinger Equation
                </h3>
                <BlockMath math="\hat{H} \psi(\mathbf{r}) = E \psi(\mathbf{r})" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Applies to stationary states (states with definite energy).
                  <br />
                  Where:
                  <br />
                  <InlineMath math="\psi(\mathbf{r})" /> = Time-independent wave
                  function
                  <br />
                  <InlineMath math="E" /> = Energy of the state
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Probability Waves & Quantum Tunneling */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-orange-300">
            Probability Waves & Quantum Tunneling
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              In quantum mechanics, the wave function describes the quantum
              state of a particle. The square of the magnitude of the wave
              function gives the probability density of finding the particle at
              a particular location. Quantum tunneling is a phenomenon where
              particles can pass through potential energy barriers even if their
              energy is less than the barrier height.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Probability Waves
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The wave function, <InlineMath math="\Psi(\mathbf{r},t)" />,
                  is a complex-valued function that describes the quantum state
                  of a particle.
                  <br />
                  The probability density of finding the particle at a position{" "}
                  <InlineMath math="\mathbf{r}" /> at time{" "}
                  <InlineMath math="t" /> is given by{" "}
                  <InlineMath math="|\Psi(\mathbf{r},t)|^2" />.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Quantum Tunneling
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A quantum-mechanical phenomenon where a particle can pass
                  through a potential energy barrier that is higher than the
                  particle&#39;s energy.
                  <br />
                  The probability of tunneling depends on the width and height
                  of the barrier and the mass of the particle.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-6 ">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Applications of Quantum Tunneling
                </h3>
                <ul className="mt-2 list-disc pl-6 text-gray-600 dark:text-gray-300">
                  <li>
                    <b>Scanning Tunneling Microscope (STM):</b> Uses tunneling
                    current to image surfaces at the atomic scale.
                  </li>
                  <li>
                    <b>Nuclear Fusion in Stars:</b> Tunneling allows protons to
                    overcome the Coulomb barrier and fuse together.
                  </li>
                  <li>
                    <b>Flash Memory:</b> Utilizes electron tunneling to store
                    data.
                  </li>
                  <li>
                    <b>Tunnel Diodes:</b> Electronic components that exploit
                    tunneling for fast switching.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Heisenberg Uncertainty Principle */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${
            problemColors[Math.floor(Math.random() * problemColors.length)]
          } p-6`}
        >
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Heisenberg Uncertainty Principle
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Heisenberg Uncertainty Principle states that there is a
              fundamental limit to the precision with which certain pairs of
              physical properties of a particle can be known simultaneously. The
              more precisely one property is known, the less precisely the other
              can be known.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Position and Momentum
                </h3>
                <BlockMath math="\Delta x \Delta p \geq \frac{\hbar}{2}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\Delta x" /> = Uncertainty in position
                  <br />
                  <InlineMath math="\Delta p" /> = Uncertainty in momentum
                  <br />
                  <InlineMath math="\hbar" /> = Reduced Planck&#39;s constant
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Energy and Time
                </h3>
                <BlockMath math="\Delta E \Delta t \geq \frac{\hbar}{2}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\Delta E" /> = Uncertainty in energy
                  <br />
                  <InlineMath math="\Delta t" /> = Uncertainty in time
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Implications and Interpretation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Uncertainty Principle is a fundamental consequence of the
                  wave nature of matter. It implies that the act of measurement
                  inevitably affects the system being measured, and that there
                  are inherent limits to the precision with which certain
                  quantities can be known.
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
                    "Calculate the de Broglie wavelength of an electron moving with a velocity of 2 × 10⁶ m/s. (mass of electron = 9.11 × 10⁻³¹ kg)",
                  solution:
                    "\\lambda = \\frac{h}{mv} = \\frac{6.63 \\times 10^{-34} \\ \\text{J} \\cdot \\text{s}}{(9.11 \\times 10^{-31} \\ \\text{kg})(2 \\times 10^6 \\ \\text{m/s})} \\approx 3.64 \\times 10^{-10} \\ \\text{m}",
                },
                {
                  problem:
                    "A particle is confined to a one-dimensional box of length L. What is the probability of finding the particle in the first excited state (n=2) between x=0 and x=L/4?",
                  solution:
                    "\\text{For a 1D box, } \\Psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\left(\\frac{n\\pi x}{L}\\right) \\\\ P = \\int_0^{L/4} |\\Psi_2(x)|^2 dx = \\int_0^{L/4} \\frac{2}{L} \\sin^2\\left(\\frac{2\\pi x}{L}\\right) dx = \\frac{1}{4} - \\frac{1}{4\\pi}\\sin\\left(\\frac{\\pi}{2}\\right) \\approx 0.091",
                },
                {
                  problem:
                    "The position of an electron is measured with an uncertainty of 0.1 nm. What is the minimum uncertainty in its momentum?",
                  solution:
                    "\\Delta p \\geq \\frac{\\hbar}{2\\Delta x} = \\frac{1.055 \\times 10^{-34} \\ \\text{J} \\cdot \\text{s}}{2(0.1 \\times 10^{-9} \\ \\text{m})} \\approx 5.27 \\times 10^{-25} \\ \\text{kg} \\cdot \\text{m/s}",
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
          Where Particles Dance as Waves
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
