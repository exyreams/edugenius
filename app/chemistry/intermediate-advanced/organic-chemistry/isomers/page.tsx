"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Layers, RotateCcw, Shuffle, FlipHorizontal } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for isomers
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Organic Chemistry", href: "/chemistry/intermediate-advanced/organic-chemistry" },
  { label: "Isomers", href: "/chemistry/intermediate-advanced/organic-chemistry/isomers" }
];

export default function Isomers() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-purple-600 sm:text-5xl md:text-6xl">
          Isomers
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fascinating world of isomers - compounds with the same molecular formula 
          but different arrangements of atoms, leading to unique properties and behaviors.
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
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Isomerism
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Layers className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Same Formula, Different Arrangements
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Isomers are compounds that have the same molecular formula but different structural 
              arrangements of atoms. This phenomenon demonstrates how molecular structure directly 
              influences chemical and physical properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Constitutional Isomers
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Different connectivity of atoms within the molecule.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Chain isomers</li>
                <li>• Position isomers</li>
                <li>• Functional group isomers</li>
                <li>• Tautomers</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Stereoisomers
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Same connectivity but different spatial arrangements.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Enantiomers</li>
                <li>• Diastereomers</li>
                <li>• Geometric isomers (cis/trans)</li>
                <li>• Conformational isomers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Constitutional Isomers */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Constitutional Isomers
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <div className="flex items-center gap-2 mb-4">
              <Shuffle className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Chain Isomers
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Different carbon skeleton arrangements (straight chain vs branched).
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-800 dark:text-gray-200">Butane (C₄H₁₀):</strong>
                </div>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-CH₂-CH₂-CH₃ (n-butane)
                </code>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-CH(CH₃)-CH₃ (isobutane)
                </code>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Different boiling points</li>
              <li>• Different physical properties</li>
              <li>• Same molecular formula</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 p-6 dark:from-orange-800 dark:to-yellow-800">
            <div className="flex items-center gap-2 mb-4">
              <RotateCcw className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Position Isomers
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Different positions of functional groups on the same carbon skeleton.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-800 dark:text-gray-200">Propanol (C₃H₈O):</strong>
                </div>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-CH₂-CH₂-OH (1-propanol)
                </code>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-CH(OH)-CH₃ (2-propanol)
                </code>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Different chemical properties</li>
              <li>• Different reactivity</li>
              <li>• Same functional group</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Functional Group Isomers
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Different functional groups with the same molecular formula.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-800 dark:text-gray-200">C₂H₆O:</strong>
                </div>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-CH₂-OH (ethanol - alcohol)
                </code>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-O-CH₃ (dimethyl ether - ether)
                </code>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Completely different properties</li>
              <li>• Different functional groups</li>
              <li>• Different chemical behavior</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Tautomers
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Rapidly interconverting isomers in equilibrium.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-800 dark:text-gray-200">Keto-Enol:</strong>
                </div>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  CH₃-CO-CH₃ ⇌ CH₃-C(OH)=CH₂
                </code>
                <div className="text-center text-gray-600 dark:text-gray-300 text-sm">
                  (keto form) ⇌ (enol form)
                </div>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Dynamic equilibrium</li>
              <li>• Proton migration</li>
              <li>• Important in biochemistry</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stereoisomers */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Stereoisomers
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 p-6 dark:from-cyan-800 dark:to-blue-800">
            <div className="flex items-center gap-2 mb-4">
              <FlipHorizontal className="h-6 w-6 text-cyan-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Enantiomers
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Non-superimposable mirror images (chiral molecules).
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center">
                <strong className="text-gray-800 dark:text-gray-200">Properties:</strong>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Same physical properties</li>
                  <li>• Rotate plane-polarized light</li>
                  <li>• Different biological activity</li>
                  <li>• Designated R or S</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-3 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                <strong>Example:</strong> Lactic acid has two enantiomers - one found in muscle tissue, 
                the other in sour milk.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Diastereomers
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Stereoisomers that are not mirror images.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center">
                <strong className="text-gray-800 dark:text-gray-200">Properties:</strong>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Different physical properties</li>
                  <li>• Different chemical properties</li>
                  <li>• Can be separated by normal methods</li>
                  <li>• Include meso compounds</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 p-3 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                <strong>Example:</strong> Tartaric acid has multiple stereoisomers including 
                a meso form with internal symmetry.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 p-6 dark:from-emerald-800 dark:to-green-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Geometric Isomers (Cis/Trans)
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Different arrangements around double bonds or rings.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-800 dark:text-gray-200">2-Butene:</strong>
                </div>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  cis: CH₃-CH=CH-CH₃ (same side)
                </code>
                <code className="block text-sm font-mono text-gray-600 dark:text-gray-300">
                  trans: CH₃-CH=CH-CH₃ (opposite sides)
                </code>
              </div>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Different boiling points</li>
              <li>• Different stability</li>
              <li>• E/Z nomenclature for complex cases</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 p-6 dark:from-amber-800 dark:to-orange-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Conformational Isomers
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Different spatial arrangements due to rotation around single bonds.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center">
                <strong className="text-gray-800 dark:text-gray-200">Ethane Conformations:</strong>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                  <li>• Staggered (lower energy)</li>
                  <li>• Eclipsed (higher energy)</li>
                  <li>• Rapid interconversion</li>
                  <li>• Energy barriers</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900 p-3 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-200">
                <strong>Note:</strong> Usually not isolable at room temperature due to 
                rapid interconversion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chirality and Optical Activity */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Chirality and Optical Activity
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Chiral Centers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A carbon atom bonded to four different groups is called a chiral center or stereocenter.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Identifying Chiral Centers:
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Look for carbon with 4 different substituents</li>
                  <li>• No plane of symmetry in the molecule</li>
                  <li>• Non-superimposable mirror images</li>
                  <li>• Usually sp³ hybridized carbon</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Optical Activity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chiral compounds rotate the plane of plane-polarized light.
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Key Terms:
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• <strong>Dextrorotatory (+):</strong> Rotates light clockwise</li>
                  <li>• <strong>Levorotatory (-):</strong> Rotates light counterclockwise</li>
                  <li>• <strong>Racemic mixture:</strong> Equal amounts of both enantiomers</li>
                  <li>• <strong>Specific rotation [α]:</strong> Characteristic property</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* R/S Configuration */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          R/S Configuration System
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            The Cahn-Ingold-Prelog system assigns R or S configuration to chiral centers:
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Assign Priority
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Rank substituents by atomic number (highest = 1)
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Orient Molecule
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Place lowest priority group (4) away from you
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Trace Path
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Draw path from 1→2→3 around the chiral center
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Assign R or S
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Clockwise = R (rectus), Counterclockwise = S (sinister)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 p-8 text-center dark:from-blue-600 dark:to-purple-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Master Isomerism
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Understanding isomers is crucial for predicting molecular properties, 
          biological activity, and designing synthetic strategies.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/functional-groups"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Functional Groups
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/nomenclature"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Nomenclature
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Structure Determines Function
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}