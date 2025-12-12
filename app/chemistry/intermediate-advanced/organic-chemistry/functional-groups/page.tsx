"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Hexagon, Zap, Droplets, Flame } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for functional groups
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Organic Chemistry", href: "/chemistry/intermediate-advanced/organic-chemistry" },
  { label: "Functional Groups", href: "/chemistry/intermediate-advanced/organic-chemistry/functional-groups" }
];

export default function FunctionalGroups() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-emerald-600 sm:text-5xl md:text-6xl">
          Functional Groups
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the key functional groups that define organic compound behavior, 
          their properties, reactions, and role in biological systems.
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
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Functional Groups
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Hexagon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Building Blocks of Organic Chemistry
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Functional groups are specific arrangements of atoms within molecules that 
              determine the chemical behavior and properties of organic compounds. 
              They are the reactive sites where most chemical reactions occur.
            </p>
          </div>
        </div>
      </div>

      {/* Hydrocarbon Functional Groups */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Hydrocarbon Functional Groups
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Alkanes (C-C)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-CH₂-CH₂-R'
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li>• Saturated hydrocarbons</li>
              <li>• Single C-C bonds only</li>
              <li>• Relatively unreactive</li>
              <li>• Combustion and substitution reactions</li>
              <li>• Examples: methane, ethane, propane</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Alkenes (C=C)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-CH=CH-R'
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li>• Unsaturated hydrocarbons</li>
              <li>• Double C=C bonds</li>
              <li>• Addition reactions</li>
              <li>• Geometric isomerism (cis/trans)</li>
              <li>• Examples: ethene, propene, butene</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Alkynes (C≡C)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-C≡C-R'
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li>• Unsaturated hydrocarbons</li>
              <li>• Triple C≡C bonds</li>
              <li>• Addition reactions</li>
              <li>• Terminal alkynes are acidic</li>
              <li>• Examples: ethyne, propyne, butyne</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oxygen-Containing Functional Groups */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Oxygen-Containing Functional Groups
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Alcohols (-OH)
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-OH
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Hydroxyl group</li>
              <li>• Hydrogen bonding</li>
              <li>• Primary, secondary, tertiary</li>
              <li>• Oxidation to aldehydes/ketones</li>
              <li>• Examples: methanol, ethanol</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 p-6 dark:from-orange-800 dark:to-yellow-800">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Aldehydes (-CHO)
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-CHO
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Carbonyl group at chain end</li>
              <li>• Easily oxidized</li>
              <li>• Nucleophilic addition</li>
              <li>• Aldol condensation</li>
              <li>• Examples: formaldehyde, acetaldehyde</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-amber-100 p-6 dark:from-yellow-800 dark:to-amber-800">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Ketones (C=O)
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-CO-R'
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Carbonyl group within chain</li>
              <li>• Less reactive than aldehydes</li>
              <li>• Nucleophilic addition</li>
              <li>• Keto-enol tautomerism</li>
              <li>• Examples: acetone, butanone</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-teal-100 p-6 dark:from-green-800 dark:to-teal-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Carboxylic Acids (-COOH)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-COOH
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Carboxyl group</li>
              <li>• Acidic properties</li>
              <li>• Hydrogen bonding</li>
              <li>• Esterification reactions</li>
              <li>• Examples: acetic acid, formic acid</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 p-6 dark:from-cyan-800 dark:to-blue-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Esters (-COO-)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-COO-R'
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Derived from acids and alcohols</li>
              <li>• Pleasant odors (fruity)</li>
              <li>• Hydrolysis reactions</li>
              <li>• Saponification</li>
              <li>• Examples: ethyl acetate, methyl butyrate</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Ethers (R-O-R')
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-O-R'
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Oxygen bridge between carbons</li>
              <li>• Relatively unreactive</li>
              <li>• Good solvents</li>
              <li>• Cleavage by acids</li>
              <li>• Examples: diethyl ether, THF</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nitrogen-Containing Functional Groups */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Nitrogen-Containing Functional Groups
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 p-6 dark:from-violet-800 dark:to-purple-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Amines (-NH₂, -NHR, -NR₂)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-NH₂
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Primary, secondary, tertiary</li>
              <li>• Basic properties</li>
              <li>• Hydrogen bonding</li>
              <li>• Nucleophilic behavior</li>
              <li>• Examples: methylamine, aniline</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-pink-100 to-rose-100 p-6 dark:from-pink-800 dark:to-rose-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Amides (-CONH₂)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-CONH₂
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Derived from carboxylic acids</li>
              <li>• Resonance stabilization</li>
              <li>• Hydrogen bonding</li>
              <li>• Hydrolysis reactions</li>
              <li>• Examples: acetamide, formamide</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 p-6 dark:from-emerald-800 dark:to-green-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Nitriles (-CN)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                R-CN
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Triple bond C≡N</li>
              <li>• Linear geometry</li>
              <li>• Hydrolysis to carboxylic acids</li>
              <li>• Reduction to amines</li>
              <li>• Examples: acetonitrile, benzonitrile</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aromatic Functional Groups */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Aromatic Functional Groups
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 p-6 dark:from-amber-800 dark:to-orange-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Benzene Ring (Ar-)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                C₆H₅-
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Aromatic stability (resonance)</li>
              <li>• Electrophilic aromatic substitution</li>
              <li>• Directing effects of substituents</li>
              <li>• π-electron delocalization</li>
              <li>• Examples: benzene, toluene, phenol</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-teal-100 to-cyan-100 p-6 dark:from-teal-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Phenols (Ar-OH)
            </h3>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-lg font-mono text-gray-800 dark:text-gray-200">
                C₆H₅-OH
              </code>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Hydroxyl group on benzene ring</li>
              <li>• More acidic than alcohols</li>
              <li>• Resonance stabilization</li>
              <li>• Electrophilic substitution</li>
              <li>• Examples: phenol, cresol, hydroquinone</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Functional Group Priority */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Functional Group Priority Order
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            When naming compounds with multiple functional groups, priority determines which group gets the suffix:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Carboxylic Acids (-COOH)",
              "Esters (-COO-)",
              "Amides (-CONH₂)",
              "Aldehydes (-CHO)",
              "Ketones (C=O)",
              "Alcohols (-OH)",
              "Amines (-NH₂)",
              "Ethers (-O-)",
              "Alkenes (C=C)",
              "Alkynes (C≡C)"
            ].map((group, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 dark:from-green-800 dark:to-emerald-800"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {group}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-8 text-center dark:from-green-600 dark:to-emerald-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Master Functional Groups
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Understanding functional groups is essential for predicting chemical behavior, 
          naming compounds, and designing synthetic pathways.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/nomenclature"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Learn Nomenclature
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/reactions-and-mechanisms"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-700"
          >
            Explore Reactions
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Language of Organic Chemistry
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}