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

export default function RelativisticAndQuantumMechanics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Mechanics", href: "/physics/concepts/mechanics" },
    {
      label: "Relativistic & Quantum Mechanics",
      href: "/physics/concepts/mechanics/relativistic-and-quantum-mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-violet-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-violet-200 dark:to-blue-300">
          Relativistic & Quantum Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the revolutionary theories of Special Relativity and Quantum
          Mechanics, along with the foundational concepts of Statistical
          Mechanics and Thermodynamics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Modern Mechanics */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-violet-300">
            Introduction to Modern Mechanics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Modern mechanics encompasses the groundbreaking theories developed
              in the 20th century that revolutionized our understanding of
              space, time, matter, and energy. This section introduces the key
              concepts of Special Relativity, Quantum Mechanics, and Statistical
              Mechanics.
            </p>
          </div>
        </div>

        {/* Special Relativity */}
        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-pink-200 p-6 dark:from-rose-600 dark:to-pink-600">
          <h2 className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-pink-300 dark:to-red-300">
            Special Relativity
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Special Relativity, developed by Albert Einstein, describes the
              relationship between space and time for objects moving at constant
              velocities. It introduces the concepts of time dilation and length
              contraction.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Postulates
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    The laws of physics are the same for all observers in
                    uniform motion.
                  </li>
                  <li>
                    The speed of light in a vacuum is the same for all
                    observers, regardless of the motion of the light source.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  Time Dilation
                </h3>
                <BlockMath math="t = \frac{t_0}{\sqrt{1 - \frac{v^2}{c^2}}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="t" /> = Time observed in the other reference
                  frame
                  <br />
                  <InlineMath math="t_0" /> = Time in the observer&#39;s own
                  frame (rest time)
                  <br />
                  <InlineMath math="v" /> = Speed of the moving object
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Length Contraction
                </h3>
                <BlockMath math="L = L_0\sqrt{1 - \frac{v^2}{c^2}}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="L" /> = Length observed in the other
                  reference frame
                  <br />
                  <InlineMath math="L_0" /> = Length in the observer&#39;s own
                  frame (rest length)
                  <br />
                  <InlineMath math="v" /> = Speed of the moving object
                  <br />
                  <InlineMath math="c" /> = Speed of light
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Mechanics */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Quantum Mechanics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Quantum Mechanics is a fundamental theory in physics that provides
              a description of the physical properties of nature at the scale of
              atoms and subatomic particles. It introduces concepts like
              wave-particle duality and the Schrödinger equation.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Wave-Particle Duality
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The concept that all particles exhibit both wave and particle
                  properties.
                </p>
                <BlockMath math="\lambda = \frac{h}{p}" />
                <p className="mt-2">
                  Where:
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength
                  <br />
                  <InlineMath math="h" /> = Planck&#39;s constant
                  <br />
                  <InlineMath math="p" /> = Momentum
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Schrödinger Equation
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
          </div>
        </div>

        {/* Statistical Mechanics & Thermodynamics */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Statistical Mechanics & Thermodynamics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Statistical Mechanics provides a framework for relating the
              microscopic properties of individual atoms and molecules to the
              macroscopic bulk properties of materials. Thermodynamics deals
              with the relationships between heat, work, temperature, and
              energy.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Key Concepts
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Entropy (<InlineMath math="S" />
                    ): A measure of the disorder or randomness of a system.
                  </li>
                  <li>
                    Temperature (<InlineMath math="T" />
                    ): A measure of the average kinetic energy of particles.
                  </li>
                  <li>
                    Pressure (<InlineMath math="P" />
                    ): Force per unit area.
                  </li>
                  <li>
                    Volume (<InlineMath math="V" />
                    ): Amount of space occupied.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Laws of Thermodynamics
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Zeroth Law: If two systems are each in thermal equilibrium
                    with a third system, then they are in thermal equilibrium
                    with each other.
                  </li>
                  <li>
                    First Law: Energy is conserved (
                    <InlineMath math="\Delta U = Q - W" />
                    ).
                  </li>
                  <li>
                    Second Law: The entropy of an isolated system tends to
                    increase over time.
                  </li>
                  <li>
                    Third Law: The entropy of a system approaches a constant
                    value as the temperature approaches absolute zero.
                  </li>
                </ul>
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
                    "A spaceship travels at 0.8c relative to Earth. If the spaceship's clock measures 1 hour, how much time has passed on Earth?",
                  solution:
                    "t = \\frac{t_0}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\frac{1}{\\sqrt{1 - \\frac{(0.8c)^2}{c^2}}} = \\frac{1}{\\sqrt{1 - 0.64}} = \\frac{1}{\\sqrt{0.36}} = \\frac{1}{0.6} = 1.67 \\ \\text{hours}",
                },
                {
                  problem:
                    "A meter stick moves at 0.6c relative to an observer. What is the length of the meter stick as measured by the observer?",
                  solution:
                    "L = L_0\\sqrt{1 - \\frac{v^2}{c^2}} = 1\\sqrt{1 - \\frac{(0.6c)^2}{c^2}} = \\sqrt{1 - 0.36} = \\sqrt{0.64} = 0.8 \\ \\text{m}",
                },
                {
                  problem:
                    "Calculate the de Broglie wavelength of an electron moving at a speed of 2 x 10⁶ m/s. (Electron mass = 9.11 x 10⁻³¹ kg, h = 6.63 x 10⁻³⁴ J·s)",
                  solution:
                    "\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{6.63 \\times 10^{-34}}{9.11 \\times 10^{-31} \\times 2 \\times 10^6} = 3.64 \\times 10^{-10} \\ \\text{m}",
                },
                {
                  problem:
                    "The half-life of a radioactive isotope is 10 minutes. If a sample initially contains 1000 atoms, how many atoms will remain after 30 minutes?",
                  solution:
                    "N(t) = N_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} = 1000 \\left(\\frac{1}{2}\\right)^{\\frac{30}{10}} = 1000 \\left(\\frac{1}{2}\\right)^3 = 1000 \\times \\frac{1}{8} = 125 \\ \\text{atoms}",
                },
                {
                  problem:
                    "A photon has a frequency of 5 x 10¹⁴ Hz. Calculate the energy of the photon. (h = 6.63 x 10⁻³⁴ J·s)",
                  solution:
                    "E = hf = 6.63 \\times 10^{-34} \\times 5 \\times 10^{14} = 3.315 \\times 10^{-19} \\ \\text{J}",
                },
                {
                  problem:
                    "An electron is confined to a one-dimensional box of length 0.1 nm. Calculate the ground state energy of the electron. (Electron mass = 9.11 x 10⁻³¹ kg, h = 6.63 x 10⁻³⁴ J·s)",
                  solution:
                    "E_n = \\frac{n^2 h^2}{8mL^2} \\Rightarrow E_1 = \\frac{1^2 \\times (6.63 \\times 10^{-34})^2}{8 \\times 9.11 \\times 10^{-31} \\times (0.1 \\times 10^{-9})^2} = 6.03 \\times 10^{-18} \\ \\text{J}",
                },
                {
                  problem:
                    "A system has an initial internal energy of 500 J. If 300 J of heat is added to the system and 100 J of work is done by the system, what is the final internal energy?",
                  solution:
                    "\\Delta U = Q - W = 300 - 100 = 200 \\ \\text{J} \\\\ U_f = U_i + \\Delta U = 500 + 200 = 700 \\ \\text{J}",
                },
                {
                  problem:
                    "Calculate the efficiency of a Carnot engine operating between temperatures of 500 K and 300 K.",
                  solution:
                    "\\eta = 1 - \\frac{T_c}{T_h} = 1 - \\frac{300}{500} = 1 - 0.6 = 0.4 \\ \\text{or} \\ 40\\%",
                },
                {
                  problem:
                    "What is the change in entropy when 2 kg of ice at 0°C melts into water at 0°C? (Latent heat of fusion for ice = 334 kJ/kg)",
                  solution:
                    "\\Delta S = \\frac{Q}{T} = \\frac{mL}{T} = \\frac{2 \\times 334000}{273} = 2446.89 \\ \\text{J/K}",
                },
                {
                  problem:
                    "A gas expands isothermally at 300 K, doing 1500 J of work. Calculate the change in entropy of the gas.",
                  solution:
                    "\\Delta S = \\frac{Q}{T} = \\frac{W}{T} = \\frac{1500}{300} = 5 \\ \\text{J/K}",
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
          Venturing Beyond Classical Boundaries
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
