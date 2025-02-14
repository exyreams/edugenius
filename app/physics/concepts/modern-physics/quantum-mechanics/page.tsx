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

export default function QuantumMechanics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Modern Physics",
      href: "/physics/concepts/modern-physics",
    },
    {
      label: "Quantum Mechanics",
      href: "/physics/concepts/modern-physics/quantum-mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-emerald-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-emerald-200 dark:to-blue-300">
          Quantum Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Delve into the fascinating realm of Quantum Mechanics, exploring
          wave-particle duality, the Schrödinger equation, the Heisenberg
          Uncertainty Principle, quantum tunneling, and the mysteries of
          superposition and entanglement.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Quantum Mechanics */}
        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-cyan-200 p-6 dark:from-teal-600 dark:to-cyan-600">
          <h2 className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-cyan-300 dark:to-blue-300">
            Introduction to Quantum Mechanics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum Mechanics is a revolutionary theory in physics that
              describes the physical properties of nature at the scale of atoms
              and subatomic particles. It introduces fundamental concepts that
              differ drastically from classical physics, including wave-particle
              duality, quantization of energy, and the probabilistic nature of
              quantum phenomena.
            </p>
          </div>
        </div>

        {/* Wave-Particle Duality */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Wave-Particle Duality
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Wave-particle duality is a fundamental concept of quantum
              mechanics that states that all particles exhibit both wave and
              particle properties. This duality is demonstrated in phenomena
              like the photoelectric effect and Compton scattering.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Photoelectric Effect
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The photoelectric effect is the emission of electrons when
                  light hits a material. This phenomenon demonstrates the
                  particle nature of light (photons).
                </p>
                <BlockMath math="E = hf - \phi" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="E" /> = Kinetic energy of the emitted
                  electron
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                  <br />
                  <InlineMath math="f" /> = Frequency of the incident light
                  <br />
                  <InlineMath math="\phi" /> = Work function of the material
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Compton Scattering
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Compton scattering is the scattering of a photon by a charged
                  particle, usually an electron. It results in a decrease in
                  energy (increase in wavelength) of the photon.
                </p>
                <BlockMath math="\lambda' - \lambda = \frac{h}{m_e c}(1 - \cos\theta)" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="\lambda'" /> = Wavelength of scattered
                  photon
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength of incident photon
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                  <br />
                  <InlineMath math="m_e" /> = Electron rest mass
                  <br />
                  <InlineMath math="c" /> = Speed of light
                  <br />
                  <InlineMath math="\theta" /> = Scattering angle
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schrödinger Equation */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Schrödinger Equation
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Schrödinger equation is a linear partial differential equation
              that describes how the quantum state of a physical system changes
              over time. It is a cornerstone of quantum mechanics.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Time-Dependent Schrödinger Equation
                </h3>
                <BlockMath math="i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="i" /> = Imaginary unit
                  <br />
                  <InlineMath math="\hbar" /> = Reduced Planck&#39;s constant
                  <br />
                  <InlineMath math="\Psi(\mathbf{r},t)" /> = Wave function
                  <br />
                  <InlineMath math="\hat{H}" /> = Hamiltonian operator
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Time-Independent Schrödinger Equation
                </h3>
                <BlockMath math="\hat{H}\psi(\mathbf{r}) = E\psi(\mathbf{r})" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\hat{H}" /> = Hamiltonian operator
                  <br />
                  <InlineMath math="\psi(\mathbf{r})" /> = Time-independent wave
                  function
                  <br />
                  <InlineMath math="E" /> = Energy eigenvalue
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heisenberg Uncertainty Principle */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Heisenberg Uncertainty Principle
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              The Heisenberg Uncertainty Principle states that certain pairs of
              physical properties of a particle, such as position and momentum,
              cannot both be known to arbitrary precision. The more precisely
              one property is known, the less precisely the other can be known.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
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
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Energy and Time
                </h3>
                <BlockMath math="\Delta E \Delta t \geq \frac{\hbar}{2}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="\Delta E" /> = Uncertainty in energy
                  <br />
                  <InlineMath math="\Delta t" /> = Uncertainty in time
                  <br />
                  <InlineMath math="\hbar" /> = Reduced Planck&#39;s constant
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Tunneling */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-pink-200 p-6 dark:from-rose-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-pink-300 dark:to-rose-300">
            Quantum Tunneling
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum tunneling is a phenomenon where particles penetrate a
              potential energy barrier with a height greater than the kinetic
              energy of the particle. This is a consequence of the wave nature
              of particles in quantum mechanics.
            </p>
          </div>
          <div className="mt-4">
            <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                Key Concepts
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                <li>
                  Tunneling probability depends on the height and width of the
                  potential barrier.
                </li>
                <li>
                  Tunneling is more likely for particles with lower mass and
                  lower energy barriers.
                </li>
                <li>
                  Applications include scanning tunneling microscopes (STM) and
                  nuclear fusion in stars.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quantum Superposition & Entanglement */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Quantum Superposition & Entanglement
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum superposition is the ability of a quantum system to be in
              multiple states at the same time until measured. Quantum
              entanglement is a phenomenon where two or more particles become
              linked in such a way that they remain connected even when
              separated by vast distances.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Superposition
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  A quantum system can exist in multiple states simultaneously.
                  The state of the system is described by a superposition of
                  these states. Upon measurement, the system collapses into one
                  of the possible states.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Entanglement
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Entangled particles are connected in such a way that the state
                  of one particle is correlated with the state of the other,
                  regardless of the distance between them. This phenomenon has
                  profound implications for quantum computing and information
                  theory.
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
                    "Calculate the energy of a photon with a frequency of 6 x 10¹⁴ Hz. (h = 6.63 x 10⁻³⁴ J·s)",
                  solution:
                    "E = hf = 6.63 \\times 10^{-34} \\times 6 \\times 10^{14} = 3.98 \\times 10^{-19} \\ \\text{J}",
                },
                {
                  problem:
                    "Light with a wavelength of 400 nm is incident on a metal with a work function of 2.0 eV. Calculate the maximum kinetic energy of the emitted electrons. (h = 6.63 x 10⁻³⁴ J·s, c = 3 x 10⁸ m/s, 1 eV = 1.6 x 10⁻¹⁹ J)",
                  solution:
                    "E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{400 \\times 10^{-9}} = 4.97 \\times 10^{-19} \\ \\text{J} \\\\ \\phi = 2.0 \\ \\text{eV} = 2.0 \\times 1.6 \\times 10^{-19} = 3.2 \\times 10^{-19} \\ \\text{J} \\\\ K = E - \\phi = 4.97 \\times 10^{-19} - 3.2 \\times 10^{-19} = 1.77 \\times 10^{-19} \\ \\text{J}",
                },
                {
                  problem:
                    "An X-ray photon with a wavelength of 0.1 nm undergoes Compton scattering at an angle of 90°. Calculate the wavelength of the scattered photon. (h = 6.63 x 10⁻³⁴ J·s, mₑ = 9.11 x 10⁻³¹ kg, c = 3 x 10⁸ m/s)",
                  solution:
                    "\\lambda' - \\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta) \\\\ \\lambda' = \\lambda + \\frac{h}{m_e c}(1 - \\cos 90°) = 0.1 \\times 10^{-9} + \\frac{6.63 \\times 10^{-34}}{9.11 \\times 10^{-31} \\times 3 \\times 10^8}(1 - 0) \\\\ \\lambda' = 0.1 \\times 10^{-9} + 2.43 \\times 10^{-12} = 1.0243 \\times 10^{-10} \\ \\text{m}",
                },
                {
                  problem:
                    "An electron has a momentum of 5 x 10⁻²⁴ kg·m/s. Calculate its de Broglie wavelength. (h = 6.63 x 10⁻³⁴ J·s)",
                  solution:
                    "\\lambda = \\frac{h}{p} = \\frac{6.63 \\times 10^{-34}}{5 \\times 10^{-24}} = 1.33 \\times 10^{-10} \\ \\text{m}",
                },
                {
                  problem:
                    "Calculate the uncertainty in the position of an electron if the uncertainty in its momentum is 1 x 10⁻²⁵ kg·m/s. (ħ = 1.05 x 10⁻³⁴ J·s)",
                  solution:
                    "\\Delta x \\Delta p \\geq \\frac{\\hbar}{2} \\Rightarrow \\Delta x \\geq \\frac{\\hbar}{2\\Delta p} = \\frac{1.05 \\times 10^{-34}}{2 \\times 1 \\times 10^{-25}} = 5.25 \\times 10^{-10} \\ \\text{m}",
                },
                {
                  problem:
                    "A particle is confined to a one-dimensional box of length 0.2 nm. Calculate the ground state energy of the particle. (Particle mass = 9.11 x 10⁻³¹ kg, h = 6.63 x 10⁻³⁴ J·s)",
                  solution:
                    "E_n = \\frac{n^2 h^2}{8mL^2} \\Rightarrow E_1 = \\frac{1^2 \\times (6.63 \\times 10^{-34})^2}{8 \\times 9.11 \\times 10^{-31} \\times (0.2 \\times 10^{-9})^2} = 1.51 \\times 10^{-18} \\ \\text{J}",
                },
                {
                  problem:
                    "Determine the energy of the photon emitted when an electron transitions from n=3 to n=2 in a hydrogen atom. (Rydberg constant R = 1.097 x 10⁷ m⁻¹, h = 6.63 x 10⁻³⁴ J·s, c = 3 x 10⁸ m/s)",
                  solution:
                    "\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) = 1.097 \\times 10^7 \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = 1.52 \\times 10^6 \\ \\text{m}^{-1} \\\\ \\lambda = \\frac{1}{1.52 \\times 10^6} = 6.56 \\times 10^{-7} \\ \\text{m} \\\\ E = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{6.56 \\times 10^{-7}} = 3.03 \\times 10^{-19} \\ \\text{J}",
                },
                {
                  problem:
                    "A particle is in a superposition state given by \\(\\Psi = \\frac{1}{\\sqrt{2}}(\\psi_1 + \\psi_2)\\), where \\(\\psi_1\\) and \\(\\psi_2\\) are normalized eigenstates with energies \\(E_1\\) and \\(E_2\\). Calculate the expectation value of the energy.",
                  solution:
                    "\\langle E \\rangle = \\langle \\Psi | \\hat{H} | \\Psi \\rangle = \\frac{1}{2}(\\langle \\psi_1 | + \\langle \\psi_2 |) \\hat{H} (\\psi_1 + \\psi_2) \\\\ = \\frac{1}{2}(E_1 \\langle \\psi_1 | \\psi_1 \\rangle + E_2 \\langle \\psi_2 | \\psi_2 \\rangle) = \\frac{1}{2}(E_1 + E_2)",
                },
                {
                  problem:
                    "The wave function of a particle is given by \\(\\Psi(x) = Ae^{-x^2/2a^2}\\). Normalize the wave function.",
                  solution:
                    "\\int_{-\\infty}^{\\infty} |\\Psi(x)|^2 dx = 1 \\Rightarrow A^2 \\int_{-\\infty}^{\\infty} e^{-x^2/a^2} dx = 1 \\\\ A^2 \\sqrt{\\pi a^2} = 1 \\Rightarrow A = \\left(\\frac{1}{\\pi a^2}\\right)^{1/4}",
                },
                {
                  problem:
                    "A particle is in a potential well with a finite barrier. The wave function inside the barrier is given by \\(\\psi(x) = Be^{-\\kappa x}\\). If \\(B = 0.5\\) and \\(\\kappa = 2 \\ \\text{nm}^{-1}\\), calculate the probability of finding the particle at a distance \\(x = 1 \\ \\text{nm}\\) inside the barrier.",
                  solution:
                    "P(x) = |\\psi(x)|^2 = |Be^{-\\kappa x}|^2 = (0.5)^2 e^{-2 \\times 2 \\times 1} = 0.25 e^{-4} \\approx 0.00458",
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
          Embracing the Quantum Frontier
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
