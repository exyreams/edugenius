"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const constants = {
  "speed-of-light": {
    name: "Speed of Light",
    symbol: "c",
    value: "2.998 \\times 10^8 \\,\\text{m/s}",
    description:
      "Speed of light in vacuum. Fundamental to electromagnetism and relativity.",
    topic: "electromagnetism, modern physics, optics",
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
  },
  "gravitational-constant": {
    name: "Gravitational Constant",
    symbol: "G",
    value:
      "6.674 \\times 10^{-11} \\,\\text{m}^3 \\cdot \\text{kg}^{-1} \\cdot \\text{s}^{-2}",
    description:
      "Constant in Newton's law of gravitation. Essential in mechanics and astrophysics.",
    topic: "mechanics",
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
  },
  "planck-constant": {
    name: "Planck Constant",
    symbol: "h",
    value: "6.626 \\times 10^{-34} \\,\\text{J} \\cdot \\text{s}",
    description:
      "Quantum of action. Key to modern physics, quantum mechanics and optics.",
    topic: "modern physics, optics",
    gradient: "from-pink-200 to-red-200 dark:from-pink-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
  },
  "reduced-planck-constant": {
    name: "Reduced Planck Constant",
    symbol: "\\hbar",
    value: "1.055 \\times 10^{-34} \\,\\text{J} \\cdot \\text{s}",
    description: "Planck constant divided by 2π. Common in quantum mechanics.",
    topic: "modern physics",
    gradient:
      "from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
  },
  "boltzmann-constant": {
    name: "Boltzmann Constant",
    symbol: "k_B",
    value: "1.381 \\times 10^{-23} \\,\\text{J/K}",
    description:
      "Relates energy to temperature. Fundamental in thermodynamics and statistical mechanics.",
    topic: "thermodynamics, modern physics",
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
  },
  "avogadro-constant": {
    name: "Avogadro Constant",
    symbol: "N_A",
    value: "6.022 \\times 10^{23} \\,\\text{mol}^{-1}",
    description:
      "Number of particles per mole. Used in chemistry, thermodynamics, and statistical mechanics.",
    topic: "thermodynamics",
    gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  "elementary-charge": {
    name: "Elementary Charge",
    symbol: "e",
    value: "1.602 \\times 10^{-19} \\,\\text{C}",
    description:
      "Magnitude of charge of a single proton or electron. Crucial in electromagnetism.",
    topic: "electromagnetism, modern physics",
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
  },
  "electron-mass": {
    name: "Electron Mass",
    symbol: "m_e",
    value: "9.109 \\times 10^{-31} \\,\\text{kg}",
    description:
      "Mass of an electron. Important in electromagnetism and atomic physics.",
    topic: "modern physics, electromagnetism",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  "proton-mass": {
    name: "Proton Mass",
    symbol: "m_p",
    value: "1.673 \\times 10^{-27} \\,\\text{kg}",
    description:
      "Mass of a proton. Important in nuclear physics and mechanics.",
    topic: "modern physics, mechanics",
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
  },
  "neutron-mass": {
    name: "Neutron Mass",
    symbol: "m_n",
    value: "1.675 \\times 10^{-27} \\,\\text{kg}",
    description: "Mass of a neutron. Important in nuclear physics.",
    topic: "modern physics",
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
  },
  "vacuum-permittivity": {
    name: "Vacuum Permittivity",
    symbol: "\\epsilon_0",
    value: "8.854 \\times 10^{-12} \\,\\text{F/m}",
    description: "Permittivity of free space. Fundamental in electromagnetism.",
    topic: "electromagnetism",
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
  },
  "vacuum-permeability": {
    name: "Vacuum Permeability",
    symbol: "\\mu_0",
    value: "4\\pi \\times 10^{-7} \\,\\text{H/m}",
    description: "Permeability of free space. Fundamental in electromagnetism.",
    topic: "electromagnetism",
    gradient: "from-red-200 to-rose-200 dark:from-red-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
  },
  "fine-structure-constant": {
    name: "Fine-Structure Constant",
    symbol: "\\alpha",
    value: "7.297 \\times 10^{-3}",
    description:
      "Dimensionless constant characterizing electromagnetic interactions. Important in modern physics.",
    topic: "modern physics, electromagnetism",
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
  },
  "rydberg-constant": {
    name: "Rydberg Constant",
    symbol: "R_\\infty",
    value: "1.097 \\times 10^7 \\,\\text{m}^{-1}",
    description:
      "Describes atomic spectral lines, particularly for hydrogen. Important in atomic and modern physics",
    topic: "modern physics, optics",
    gradient: "from-sky-200 to-cyan-200 dark:from-sky-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  "stefan-boltzmann-constant": {
    name: "Stefan-Boltzmann Constant",
    symbol: "\\sigma",
    value:
      "5.670 \\times 10^{-8} \\,\\text{W} \\cdot \\text{m}^{-2} \\cdot \\text{K}^{-4}",
    description:
      "Relates black body radiation to temperature. Important in thermodynamics and astrophysics.",
    topic: "thermodynamics, optics",
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
  },
  "molar-gas-constant": {
    name: "Molar Gas Constant",
    symbol: "R",
    value: "8.314 \\,\\text{J} \\cdot \\text{mol}^{-1} \\cdot \\text{K}^{-1}",
    description:
      "Relates the amount of substance to energy and temperature. Fundamental in thermodynamics",
    topic: "thermodynamics",
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
  },
  "magnetic-flux-quantum": {
    name: "Magnetic Flux Quantum",
    symbol: "\\Phi_0",
    value: "2.067 \\times 10^{-15} \\,\\text{Wb}",
    description: "Quantum of magnetic flux in superconductors.",
    topic: "modern physics, electromagnetism",
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
  },
  "faraday-constant": {
    name: "Faraday Constant",
    symbol: "F",
    value: "9.648 \\times 10^4 \\,\\text{C/mol}",
    description:
      "The electric charge of one mole of electrons. Essential in electrochemistry and electromagnetism.",
    topic: "electromagnetism",
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
  },
  "standard-gravity": {
    name: "Standard Gravity",
    symbol: "g",
    value: "9.807 \\,\\text{m/s}^2",
    description:
      "Nominal value of Earth's gravity. Used as a standard value in mechanics and fluid mechanics.",
    topic: "mechanics, fluid-mechanics",
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
  },
  "electron-volt": {
    name: "Electron Volt",
    symbol: "\\text{eV}",
    value: "1.602 \\times 10^{-19} \\,\\text{J}",
    description:
      "Energy equal to the kinetic energy of a single electron after accelerating through an electric potential difference of 1 volt. Commonly used in modern and atomic physics",
    topic: "modern physics, electromagnetism",
    gradient:
      "from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-white",
  },
  "characteristic-impedance-of-vacuum": {
    name: "Characteristic Impedance of Vacuum",
    symbol: "Z_0",
    value: "376.73 \\,\\Omega",
    description:
      "Impedance of free space for electromagnetic waves. Related to the permittivity and permeability of free space.",
    topic: "electromagnetism",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  "bohr-radius": {
    name: "Bohr Radius",
    symbol: "a_0",
    value: "5.292 \\times 10^{-11} \\,\\text{m}",
    description:
      "Radius of the first electron orbit in the Bohr model of the hydrogen atom. Key in atomic physics",
    topic: "modern physics",
    gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  "wien-displacement-constant": {
    name: "Wien Displacement Constant",
    symbol: "b",
    value: "2.898 \\times 10^{-3} \\,\\text{m} \\cdot \\text{K}",
    description:
      "Relates the peak wavelength in black-body radiation to the temperature. Important in optics and thermodynamics",
    topic: "optics, thermodynamics",
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
  },
  "sound-speed-in-air": {
    name: "Speed of Sound in Air",
    symbol: "v_s",
    value: "343 \\,\\text{m/s}",
    description:
      "Approximate speed of sound at room temperature. Relevant in wave physics.",
    topic: "waves, fluid mechanics",
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
  },
  "density-of-water": {
    name: "Density of Water",
    symbol: "\\rho_{\\text{water}}",
    value: "1000 \\,\\text{kg/m}^3",
    description:
      "Density of water at standard conditions. Fundamental in fluid mechanics",
    topic: "fluid-mechanics",
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
  },
  "dynamic-viscosity-of-water": {
    name: "Dynamic Viscosity of Water",
    symbol: "\\mu_{\\text{water}}",
    value: "1.002 \\times 10^{-3} \\,\\text{Pa} \\cdot \\text{s}",
    description:
      "Dynamic viscosity of water at standard conditions. Essential in fluid mechanics",
    topic: "fluid-mechanics",
    gradient: "from-sky-200 to-cyan-200 dark:from-sky-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  "surface-tension-of-water": {
    name: "Surface Tension of Water",
    symbol: "\\gamma_{\\text{water}}",
    value: "0.0728 \\,\\text{N/m}",
    description:
      "Surface tension of water at standard conditions. Used in capillarity and fluid interface problems",
    topic: "fluid-mechanics",
    gradient: "from-red-200 to-rose-200 dark:from-red-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
  },
};

export default function UniversalConstants() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Universal Constants",
      href: "/physics/concepts/universal-constants",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Universal Constants
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Fundamental constants that define the laws of physics
        </p>
      </div>
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Constants Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(constants).map(([id, constant]) => (
          <div
            key={id}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
              isColorful
                ? `bg-gradient-to-br ${constant.gradient}`
                : "bg-gray-100 dark:bg-gray-800"
            }`}
          >
            <div
              className={`space-y-4 ${
                isColorful ? constant.text : "text-gray-800 dark:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      isColorful
                        ? "text-gray-800 dark:text-white"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    <BlockMath>{constant.symbol}</BlockMath>
                  </span>
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "currentcolor"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {constant.name}
                </h3>
              </div>
              <p
                className={`text-sm leading-6 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-200"
                }`}
              >
                {constant.description}
              </p>
              <div className="mt-4">
                <p
                  className={`text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
                >
                  Value:{" "}
                  <span className="font-mono">
                    <BlockMath>{constant.value}</BlockMath>
                  </span>
                </p>
              </div>
            </div>

            {/* Animated background element */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                isColorful
                  ? "bg-black/5 dark:bg-white/10"
                  : "bg-gray-300/50 dark:bg-gray-700/50"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Building Blocks of Physics
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
