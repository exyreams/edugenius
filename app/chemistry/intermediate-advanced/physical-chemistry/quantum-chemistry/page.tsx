"use client";

import { useState } from "react";
import { Atom, Zap, Waves, Eye, ArrowRight, Activity } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for quantum chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Physical Chemistry", href: "/chemistry/intermediate-advanced/physical-chemistry" },
  { label: "Quantum Chemistry", href: "/chemistry/intermediate-advanced/physical-chemistry/quantum-chemistry" }
];

export default function QuantumChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-indigo-600 sm:text-5xl md:text-6xl">
          Quantum Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the quantum mechanical foundations of chemical bonding, molecular structure, and spectroscopy. 
          Understand how quantum mechanics explains the behavior of atoms and molecules.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Introduction */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Quantum World of Chemistry
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Atom className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Beyond Classical Physics
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quantum chemistry applies quantum mechanics to chemical systems, providing a fundamental 
              understanding of chemical bonding, molecular structure, and the interaction of matter with light. 
              It explains phenomena that classical physics cannot describe.
            </p>
          </div>
        </div>
      </div>

      {/* Fundamental Principles */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Fundamental Quantum Principles
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100 p-6 dark:from-purple-800 dark:to-indigo-800">
            <Waves className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Wave-Particle Duality
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Matter exhibits both wave and particle properties depending on the experimental conditions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• de Broglie wavelength: λ = h/p</li>
              <li>• Electron diffraction</li>
              <li>• Photoelectric effect</li>
              <li>• Complementarity principle</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 p-6 dark:from-indigo-800 dark:to-blue-800">
            <Activity className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Uncertainty Principle
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Fundamental limit to the precision of simultaneous measurements.
            </p>
            <div className="bg-white/20 p-3 rounded dark:bg-black/20 mb-3">
              <p className="font-mono text-center">Δx·Δp ≥ ℏ/2</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Position-momentum uncertainty</li>
              <li>• Energy-time uncertainty</li>
              <li>• Implications for atomic structure</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <Zap className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Schrödinger Equation
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              The fundamental equation describing quantum mechanical systems.
            </p>
            <div className="bg-white/20 p-3 rounded dark:bg-black/20 mb-3">
              <p className="font-mono text-center">Ĥψ = Eψ</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Time-independent form</li>
              <li>• Hamiltonian operator</li>
              <li>• Eigenvalues and eigenfunctions</li>
              <li>• Boundary conditions</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-cyan-100 to-teal-100 p-6 dark:from-cyan-800 dark:to-teal-800">
            <Eye className="h-8 w-8 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Wave Functions
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Mathematical descriptions of quantum states containing all information about a system.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Probability interpretation: |ψ|²</li>
              <li>• Normalization condition</li>
              <li>• Superposition principle</li>
              <li>• Quantum numbers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Atomic Structure */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Quantum Mechanical Atomic Structure
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Hydrogen Atom Solutions
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg dark:from-purple-800 dark:to-indigo-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Quantum Numbers</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• n: Principal quantum number (1, 2, 3, ...)</li>
                    <li>• ℓ: Angular momentum (0, 1, 2, ..., n-1)</li>
                    <li>• mℓ: Magnetic (-ℓ, ..., 0, ..., +ℓ)</li>
                    <li>• ms: Spin (±1/2)</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-lg dark:from-indigo-800 dark:to-blue-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Orbital Shapes</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• s orbitals: Spherical symmetry</li>
                    <li>• p orbitals: Dumbbell shapes</li>
                    <li>• d orbitals: Complex angular patterns</li>
                    <li>• f orbitals: Even more complex</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Multi-Electron Atoms
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg dark:from-blue-800 dark:to-cyan-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Electron-Electron Repulsion</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Screening and penetration</li>
                    <li>• Effective nuclear charge</li>
                    <li>• Orbital energy ordering</li>
                    <li>• Electron correlation</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-100 to-teal-100 p-4 rounded-lg dark:from-cyan-800 dark:to-teal-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Approximation Methods</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Hartree-Fock method</li>
                    <li>• Density functional theory</li>
                    <li>• Configuration interaction</li>
                    <li>• Perturbation theory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Molecular Orbital Theory */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Molecular Orbital Theory
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              LCAO Method
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Linear Combination of Atomic Orbitals
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Bonding orbitals (σ, π)</li>
              <li>• Antibonding orbitals (σ*, π*)</li>
              <li>• Overlap integrals</li>
              <li>• Secular equations</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 p-6 dark:from-emerald-800 dark:to-teal-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Molecular Properties
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Predicting molecular behavior
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Bond order calculations</li>
              <li>• Magnetic properties</li>
              <li>• Electronic spectra</li>
              <li>• Ionization energies</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-teal-100 to-cyan-100 p-6 dark:from-teal-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Computational Methods
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Modern quantum chemistry calculations
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Basis set selection</li>
              <li>• Ab initio methods</li>
              <li>• Semi-empirical approaches</li>
              <li>• Software packages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spectroscopy */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Quantum Mechanics and Spectroscopy
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 p-6 dark:from-violet-800 dark:to-purple-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Selection Rules
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Quantum mechanical rules governing allowed transitions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Electric dipole transitions</li>
              <li>• Δℓ = ±1 for electronic transitions</li>
              <li>• Spin selection rules</li>
              <li>• Forbidden transitions</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Spectroscopic Techniques
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Applications of quantum mechanics to spectroscopy.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• UV-Visible spectroscopy</li>
              <li>• Infrared and Raman</li>
              <li>• NMR spectroscopy</li>
              <li>• X-ray photoelectron spectroscopy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Applications of Quantum Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-orange-100 p-6 dark:from-red-800 dark:to-orange-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Drug Design
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Molecular docking</li>
              <li>• QSAR studies</li>
              <li>• Pharmacophore modeling</li>
              <li>• Enzyme inhibitor design</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 p-6 dark:from-orange-800 dark:to-yellow-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Materials Science
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Electronic band structures</li>
              <li>• Semiconductor properties</li>
              <li>• Catalytic surfaces</li>
              <li>• Nanomaterial design</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-green-100 p-6 dark:from-yellow-800 dark:to-green-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Chemical Reactions
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Reaction pathway analysis</li>
              <li>• Transition state theory</li>
              <li>• Catalysis mechanisms</li>
              <li>• Photochemical processes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-8 text-center dark:from-purple-600 dark:to-indigo-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Quantum Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Quantum chemistry provides the fundamental understanding of chemical bonding and molecular behavior. 
          Master these concepts to unlock the mysteries of the molecular world.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700">
            Quantum Calculations
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700">
            Molecular Orbitals
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}