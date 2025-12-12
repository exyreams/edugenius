"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Atom, Zap, Target, Grid3X3 } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for atomic structure
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Foundational", href: "/chemistry/foundational" },
  { label: "Atomic Structure", href: "/chemistry/foundational/atomic-structure-and-properties" }
];

export default function AtomicStructureAndProperties() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-rose-600 sm:text-5xl md:text-6xl">
          Atomic Structure & Properties
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Discover the fundamental building blocks of matter. Learn about atomic models, 
          electron configurations, and how atomic structure determines chemical properties.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Atomic Models Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Historical Atomic Models
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center dark:bg-gray-600">
                <span className="text-2xl">⚫</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Dalton Model
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">(1803)</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Atoms are indivisible, solid spheres. All atoms of an element are identical.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center dark:bg-blue-600">
                <span className="text-2xl">🍇</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Thomson Model
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">(1897)</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              "Plum pudding" model with electrons embedded in a positive sphere.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto mb-3 flex items-center justify-center dark:bg-yellow-600">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Rutherford Model
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">(1911)</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Nuclear model with dense, positive nucleus and orbiting electrons.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center dark:bg-green-600">
                <Atom className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Bohr Model
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">(1913)</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Electrons orbit in fixed energy levels around the nucleus.
            </p>
          </div>
        </div>
      </div>

      {/* Atomic Structure Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Modern Atomic Structure
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">p⁺</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Protons
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2">
              <li>• Positive charge (+1)</li>
              <li>• Mass ≈ 1 amu</li>
              <li>• Located in nucleus</li>
              <li>• Determines atomic number</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-gray-100 to-slate-100 p-6 dark:from-gray-800 dark:to-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">n⁰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Neutrons
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2">
              <li>• Neutral charge (0)</li>
              <li>• Mass ≈ 1 amu</li>
              <li>• Located in nucleus</li>
              <li>• Determines isotopes</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">e⁻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Electrons
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2">
              <li>• Negative charge (-1)</li>
              <li>• Mass ≈ 1/1836 amu</li>
              <li>• Located in orbitals</li>
              <li>• Determines chemical behavior</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Electron Configuration Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Electron Configuration
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Orbital Types
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">s</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">s orbital</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Spherical shape, holds 2 electrons</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">p</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">p orbital</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Dumbbell shape, holds 6 electrons</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">d</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">d orbital</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Complex shapes, holds 10 electrons</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Examples
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                  <p className="font-semibold text-gray-800 dark:text-white">Hydrogen (H)</p>
                  <p className="font-mono text-gray-600 dark:text-gray-300">1s¹</p>
                </div>
                <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                  <p className="font-semibold text-gray-800 dark:text-white">Carbon (C)</p>
                  <p className="font-mono text-gray-600 dark:text-gray-300">1s² 2s² 2p²</p>
                </div>
                <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                  <p className="font-semibold text-gray-800 dark:text-white">Neon (Ne)</p>
                  <p className="font-mono text-gray-600 dark:text-gray-300">1s² 2s² 2p⁶</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Periodic Trends Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Periodic Trends
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Grid3X3 className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Atomic Radius
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The size of an atom from nucleus to outermost electron.
            </p>
            <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
              <p className="text-purple-800 dark:text-purple-200 font-semibold">Trends:</p>
              <ul className="text-purple-700 dark:text-purple-300 mt-2">
                <li>• Decreases across a period (left to right)</li>
                <li>• Increases down a group (top to bottom)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Ionization Energy
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Energy required to remove an electron from an atom.
            </p>
            <div className="bg-orange-50 p-4 rounded dark:bg-orange-900">
              <p className="text-orange-800 dark:text-orange-200 font-semibold">Trends:</p>
              <ul className="text-orange-700 dark:text-orange-300 mt-2">
                <li>• Increases across a period (left to right)</li>
                <li>• Decreases down a group (top to bottom)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-red-200 to-rose-200 p-8 text-center dark:from-red-600 dark:to-rose-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Your Chemistry Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Now that you understand atomic structure, explore how atoms combine 
          to form compounds and participate in chemical reactions.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/chemical-reactions-and-stoichiometry"
            className="inline-flex items-center rounded-lg bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-pink-700"
          >
            Chemical Reactions
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/foundational/acids-and-bases"
            className="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-yellow-700"
          >
            Acids & Bases
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Building Blocks of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}