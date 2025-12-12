"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, FlaskConical, Atom, Scale, Beaker, Microscope } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for introduction to chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Foundational", href: "/chemistry/foundational" },
  { label: "Introduction", href: "/chemistry/foundational/introduction-to-chemistry" }
];

export default function IntroductionToChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-sky-600 sm:text-5xl md:text-6xl">
          Introduction to Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Welcome to the fascinating world of chemistry! Discover the fundamental concepts, 
          terminology, and principles that form the foundation of chemical science.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Chemistry Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-sky-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <FlaskConical className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Central Science
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chemistry is the scientific study of matter, its properties, composition, structure, 
              and the changes it undergoes during chemical reactions. It bridges physics and biology, 
              making it truly the "central science."
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg dark:bg-blue-900">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                Matter & Energy
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Studies how matter interacts and transforms, including energy changes in reactions.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg dark:bg-green-900">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                Molecular Level
              </h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Explains macroscopic properties through atomic and molecular behavior.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg dark:bg-purple-900">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                Practical Applications
              </h4>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Applies knowledge to solve real-world problems in medicine, technology, and environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Branches of Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-sky-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Branches of Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Atom className="h-8 w-8 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Inorganic Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Studies all elements and compounds except organic compounds. 
              Focuses on metals, minerals, and ionic compounds.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Examples:</strong> Salt formation, metal extraction, ceramics
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="h-8 w-8 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Organic Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Studies carbon-containing compounds and their reactions. 
              Essential for understanding life processes.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Examples:</strong> Plastics, pharmaceuticals, fuels
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Physical Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Applies physics principles to understand chemical phenomena. 
              Studies reaction rates, energy changes, and molecular behavior.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Examples:</strong> Thermodynamics, kinetics, spectroscopy
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="h-8 w-8 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Analytical Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Develops methods to identify and quantify matter. 
              Determines "what" and "how much" of substances.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Examples:</strong> Chromatography, mass spectrometry
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Beaker className="h-8 w-8 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Biochemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Studies chemical processes in living organisms. 
              Bridges chemistry and biology.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Examples:</strong> Enzymes, DNA, metabolism
            </div>
          </div>
        </div>
      </div>

      {/* Scientific Method in Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-sky-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Scientific Method in Chemistry
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            Chemistry follows the scientific method to understand and explain natural phenomena
          </p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Observation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Notice and describe natural phenomena or experimental results
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Hypothesis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Propose a testable explanation for the observed phenomena
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Experiment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Design and conduct controlled tests to validate or refute the hypothesis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Interpret data and draw conclusions from experimental results
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Theory
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Develop comprehensive explanations supported by extensive evidence
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Law
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Establish universal principles that describe consistent patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Chemical Terminology */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-sky-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Essential Chemistry Terms
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Matter & Substances
            </h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Matter</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Anything that has mass and occupies space
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Element</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Pure substance made of only one type of atom
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Compound</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Pure substance made of two or more different atoms
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Mixture</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Combination of two or more substances that retain their properties
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Properties & Changes
            </h3>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Physical Property</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Characteristic observed without changing composition (color, density)
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Chemical Property</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Characteristic involving chemical change (flammability, reactivity)
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Physical Change</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Change in form without changing composition (melting, dissolving)
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <p className="font-semibold text-gray-800 dark:text-white">Chemical Change</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Change that produces new substances (burning, rusting)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* States of Matter */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-sky-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          States of Matter
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              Solid
            </h3>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-500 rounded mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">🧊</span>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li>• Fixed shape and volume</li>
              <li>• Particles closely packed</li>
              <li>• Strong intermolecular forces</li>
              <li>• Vibrate in fixed positions</li>
              <li>• Examples: Ice, metals, crystals</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              Liquid
            </h3>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">💧</span>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li>• Fixed volume, variable shape</li>
              <li>• Particles loosely packed</li>
              <li>• Moderate intermolecular forces</li>
              <li>• Particles can move freely</li>
              <li>• Examples: Water, oil, alcohol</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              Gas
            </h3>
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-500 rounded mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-2xl">💨</span>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li>• Variable shape and volume</li>
              <li>• Particles far apart</li>
              <li>• Weak intermolecular forces</li>
              <li>• Particles move rapidly</li>
              <li>• Examples: Air, helium, steam</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-200 to-sky-200 p-8 text-center dark:from-blue-600 dark:to-sky-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Begin Your Chemistry Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Now that you understand the basics, dive deeper into specific chemistry topics 
          to build your knowledge and skills in chemical science.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/atomic-structure-and-properties"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            Atomic Structure
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/foundational/chemical-reactions-and-stoichiometry"
            className="inline-flex items-center rounded-lg bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-pink-700"
          >
            Chemical Reactions
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Foundation of Chemical Knowledge
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}