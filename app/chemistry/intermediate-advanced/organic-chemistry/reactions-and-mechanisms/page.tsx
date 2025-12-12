"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Zap, ArrowRight, RotateCw, Target } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for reactions and mechanisms
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Organic Chemistry", href: "/chemistry/intermediate-advanced/organic-chemistry" },
  { label: "Reactions & Mechanisms", href: "/chemistry/intermediate-advanced/organic-chemistry/reactions-and-mechanisms" }
];

export default function ReactionsAndMechanisms() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-4xl font-bold text-transparent dark:from-orange-600 dark:to-red-600 sm:text-5xl md:text-6xl">
          Reactions & Mechanisms
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the step-by-step pathways of organic reactions. Understand electron flow, 
          intermediates, and how molecular structure determines reactivity.
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
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Reaction Mechanisms
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Zap className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Molecular Dance of Chemical Change
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reaction mechanisms show the step-by-step process by which reactants are converted 
              to products. They reveal the movement of electrons, formation of intermediates, 
              and the energy changes that drive chemical transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-lg dark:from-orange-800 dark:to-red-800">
              <ArrowRight className="h-8 w-8 text-orange-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Electron Movement
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Curved arrows show how electrons flow during reactions.
              </p>
              <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                <li>• Nucleophilic attack</li>
                <li>• Electrophilic attack</li>
                <li>• Bond formation/breaking</li>
                <li>• Electron pair movement</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800">
              <Target className="h-8 w-8 text-red-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Reaction Intermediates
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Short-lived species formed during multi-step reactions.
              </p>
              <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                <li>• Carbocations</li>
                <li>• Carbanions</li>
                <li>• Free radicals</li>
                <li>• Transition states</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-lg dark:from-yellow-800 dark:to-orange-800">
              <RotateCw className="h-8 w-8 text-yellow-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Reaction Types
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Classification based on the overall transformation.
              </p>
              <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                <li>• Substitution reactions</li>
                <li>• Addition reactions</li>
                <li>• Elimination reactions</li>
                <li>• Rearrangement reactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Substitution Reactions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Substitution Reactions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              SN2 Mechanism
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Bimolecular nucleophilic substitution - concerted, one-step process.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center">
                <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  Nu⁻ + R-X → Nu-R + X⁻
                </code>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  (Backside attack, inversion of configuration)
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">Characteristics:</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Second-order kinetics: Rate = k[Nu][RX]</li>
                <li>• Favored by primary alkyl halides</li>
                <li>• Strong nucleophiles, polar aprotic solvents</li>
                <li>• Stereochemical inversion (Walden inversion)</li>
                <li>• No carbocation intermediate</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              SN1 Mechanism
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Unimolecular nucleophilic substitution - two-step process via carbocation.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center space-y-1">
                <code className="block text-sm font-mono text-gray-800 dark:text-gray-200">
                  R-X → R⁺ + X⁻ (slow)
                </code>
                <code className="block text-sm font-mono text-gray-800 dark:text-gray-200">
                  R⁺ + Nu⁻ → R-Nu (fast)
                </code>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  (Carbocation intermediate, racemization)
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">Characteristics:</h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• First-order kinetics: Rate = k[RX]</li>
                <li>• Favored by tertiary alkyl halides</li>
                <li>• Polar protic solvents stabilize ions</li>
                <li>• Racemization at chiral centers</li>
                <li>• Possible rearrangements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Elimination Reactions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Elimination Reactions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              E2 Mechanism
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Bimolecular elimination - concerted removal of H and X.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center">
                <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                  B⁻ + H-C-C-X → B-H + C=C + X⁻
                </code>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  (Anti-periplanar geometry required)
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">Characteristics:</h4>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Second-order kinetics: Rate = k[Base][RX]</li>
                <li>• Strong bases favor E2</li>
                <li>• Anti-periplanar arrangement</li>
                <li>• Zaitsev's rule (most substituted alkene)</li>
                <li>• Competes with SN2</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              E1 Mechanism
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Unimolecular elimination - two-step process via carbocation.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center space-y-1">
                <code className="block text-sm font-mono text-gray-800 dark:text-gray-200">
                  R-X → R⁺ + X⁻ (slow)
                </code>
                <code className="block text-sm font-mono text-gray-800 dark:text-gray-200">
                  R⁺ → C=C + H⁺ (fast)
                </code>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  (Same carbocation as SN1)
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">Characteristics:</h4>
              <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                <li>• First-order kinetics: Rate = k[RX]</li>
                <li>• Weak bases, high temperature</li>
                <li>• Tertiary > secondary > primary</li>
                <li>• Zaitsev's rule applies</li>
                <li>• Competes with SN1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Addition Reactions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Addition Reactions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 p-6 dark:from-cyan-800 dark:to-blue-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Electrophilic Addition
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Addition of electrophiles to alkenes and alkynes.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                C=C + H-X → H-C-C-X
              </code>
            </div>
            <ul className="text-sm text-cyan-800 dark:text-cyan-200 space-y-1">
              <li>• Markovnikov's rule</li>
              <li>• Carbocation intermediate</li>
              <li>• HX, X₂, H₂O additions</li>
              <li>• Anti-Markovnikov with peroxides</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-teal-100 p-6 dark:from-green-800 dark:to-teal-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Nucleophilic Addition
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Addition of nucleophiles to carbonyl compounds.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                C=O + Nu⁻ → Nu-C-O⁻
              </code>
            </div>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Aldehydes and ketones</li>
              <li>• Grignard reactions</li>
              <li>• Hydride reductions</li>
              <li>• Cyanohydrin formation</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-amber-100 p-6 dark:from-yellow-800 dark:to-amber-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Radical Addition
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Free radical chain reactions with alkenes.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                C=C + X• → X-C-C•
              </code>
            </div>
            <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>• Initiated by peroxides/light</li>
              <li>• Chain propagation</li>
              <li>• Anti-Markovnikov HBr</li>
              <li>• Polymerization reactions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aromatic Substitution */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Aromatic Substitution
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 p-6 dark:from-rose-800 dark:to-pink-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Electrophilic Aromatic Substitution
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Substitution reactions that preserve aromaticity.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <div className="text-center space-y-1">
                <code className="block text-sm font-mono text-gray-800 dark:text-gray-200">
                  Ar-H + E⁺ → Ar-E + H⁺
                </code>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  (via σ-complex intermediate)
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 dark:text-white">Common Reactions:</h4>
              <ul className="text-sm text-rose-800 dark:text-rose-200 space-y-1">
                <li>• Nitration (HNO₃/H₂SO₄)</li>
                <li>• Halogenation (X₂/FeX₃)</li>
                <li>• Sulfonation (SO₃/H₂SO₄)</li>
                <li>• Friedel-Crafts acylation/alkylation</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 p-6 dark:from-violet-800 dark:to-purple-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Directing Effects
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Substituents influence the position and rate of substitution.
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Ortho/Para Directors (Activating)
                </h5>
                <div className="text-sm text-violet-800 dark:text-violet-200">
                  -OH, -OR, -NH₂, -NR₂, -R, -Ar
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Meta Directors (Deactivating)
                </h5>
                <div className="text-sm text-violet-800 dark:text-violet-200">
                  -NO₂, -CN, -COOH, -CHO, -COR
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Ortho/Para Directors (Deactivating)
                </h5>
                <div className="text-sm text-violet-800 dark:text-violet-200">
                  -F, -Cl, -Br, -I
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carbonyl Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Carbonyl Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 p-6 dark:from-amber-800 dark:to-yellow-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Aldol Reactions
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Formation of C-C bonds via enolate chemistry.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-xs font-mono text-gray-800 dark:text-gray-200">
                2 R-CHO → R-CH(OH)-CH(R)-CHO
              </code>
            </div>
            <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
              <li>• Base-catalyzed condensation</li>
              <li>• Enolate formation</li>
              <li>• β-hydroxy carbonyl products</li>
              <li>• Dehydration to α,β-unsaturated</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-green-100 p-6 dark:from-emerald-800 dark:to-green-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Claisen Condensation
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Formation of β-dicarbonyl compounds from esters.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-xs font-mono text-gray-800 dark:text-gray-200">
                2 R-COOR' → R-CO-CH(R)-COOR'
              </code>
            </div>
            <ul className="text-sm text-emerald-800 dark:text-emerald-200 space-y-1">
              <li>• Ester enolate chemistry</li>
              <li>• Strong base required</li>
              <li>• β-keto ester products</li>
              <li>• Intramolecular Dieckmann</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-sky-100 to-blue-100 p-6 dark:from-sky-800 dark:to-blue-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Michael Addition
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              1,4-Addition to α,β-unsaturated carbonyls.
            </p>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <code className="text-xs font-mono text-gray-800 dark:text-gray-200">
                Nu⁻ + CH₂=CH-CO-R → Nu-CH₂-CH₂-CO-R
              </code>
            </div>
            <ul className="text-sm text-sky-800 dark:text-sky-200 space-y-1">
              <li>• Conjugate addition</li>
              <li>• Enolate nucleophiles</li>
              <li>• Robinson annulation</li>
              <li>• Thermodynamic control</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reaction Prediction */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Predicting Reaction Outcomes
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Key Factors to Consider
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Substrate Structure
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    <li>• Primary, secondary, or tertiary</li>
                    <li>• Presence of leaving groups</li>
                    <li>• Steric hindrance</li>
                    <li>• Electronic effects</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900 dark:to-pink-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Reaction Conditions
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    <li>• Temperature and pressure</li>
                    <li>• Solvent polarity</li>
                    <li>• Presence of catalysts</li>
                    <li>• Concentration of reagents</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Competition Between Mechanisms
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    SN1 vs SN2
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    <li>• Substrate: 3° favors SN1, 1° favors SN2</li>
                    <li>• Nucleophile: Strong favors SN2</li>
                    <li>• Solvent: Protic favors SN1</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    Substitution vs Elimination
                  </h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    <li>• Temperature: High favors elimination</li>
                    <li>• Base strength: Strong favors elimination</li>
                    <li>• Steric hindrance: Bulky bases favor elimination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-orange-200 to-red-200 p-8 text-center dark:from-orange-600 dark:to-red-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Master Organic Reactions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Understanding reaction mechanisms is key to predicting products, 
          designing syntheses, and explaining experimental observations.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/functional-groups"
            className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700"
          >
            Functional Groups
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/nomenclature"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
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
          Understanding the How and Why of Chemical Change
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}