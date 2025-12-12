"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Thermometer, Zap, TrendingUp, TrendingDown, Flame, Snowflake } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for thermochemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Foundational", href: "/chemistry/foundational" },
  { label: "Thermochemistry", href: "/chemistry/foundational/thermochemistry" }
];

export default function Thermochemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-4xl font-bold text-transparent dark:from-orange-600 dark:to-amber-600 sm:text-5xl md:text-6xl">
          Thermochemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the relationship between chemical reactions and energy changes. 
          Learn about enthalpy, calorimetry, and how energy flows in chemical processes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Energy and Chemical Reactions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-amber-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Energy in Chemical Reactions
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Zap className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Energy Changes in Reactions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              All chemical reactions involve energy changes. Energy can be absorbed from or released 
              to the surroundings, making reactions either endothermic or exothermic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-6 rounded-lg dark:from-red-800 dark:to-orange-800">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="h-8 w-8 text-red-500" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Exothermic Reactions
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Release energy to the surroundings, usually as heat. The products have lower energy than reactants.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>ΔH &lt; 0</strong> (negative enthalpy change)
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Examples:</strong> Combustion, neutralization, crystallization
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  <strong>Observable:</strong> Temperature increase, light emission
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <div className="flex items-center gap-3 mb-4">
                <Snowflake className="h-8 w-8 text-blue-500" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Endothermic Reactions
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Absorb energy from the surroundings. The products have higher energy than reactants.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>ΔH &gt; 0</strong> (positive enthalpy change)
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Examples:</strong> Photosynthesis, melting, evaporation
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Observable:</strong> Temperature decrease, cooling effect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enthalpy */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-amber-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Enthalpy (H)
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              What is Enthalpy?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enthalpy is a measure of the total heat content of a system at constant pressure. 
              We focus on enthalpy changes (ΔH) rather than absolute values.
            </p>
            <div className="bg-orange-50 p-4 rounded dark:bg-orange-900">
              <p className="font-mono text-lg text-center text-orange-800 dark:text-orange-200 mb-2">
                ΔH = H<sub>products</sub> - H<sub>reactants</sub>
              </p>
              <div className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <p>• ΔH &lt; 0: Exothermic (heat released)</p>
                <p>• ΔH &gt; 0: Endothermic (heat absorbed)</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Standard Enthalpy Changes
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Measured under standard conditions (25°C, 1 atm) for comparison purposes.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="font-semibold text-gray-800 dark:text-white">ΔH°<sub>f</sub></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Standard enthalpy of formation (forming 1 mol from elements)
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="font-semibold text-gray-800 dark:text-white">ΔH°<sub>c</sub></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Standard enthalpy of combustion (complete burning)
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="font-semibold text-gray-800 dark:text-white">ΔH°<sub>vap</sub></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Standard enthalpy of vaporization (liquid to gas)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hess's Law */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-amber-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Hess's Law
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Law of Heat Summation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The total enthalpy change for a reaction is independent of the pathway taken. 
              It depends only on the initial and final states.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Key Principle:
              </h4>
              <div className="bg-green-50 p-4 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-2">
                  ΔH<sub>total</sub> = ΔH<sub>1</sub> + ΔH<sub>2</sub> + ΔH<sub>3</sub> + ...
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  The sum of enthalpy changes for individual steps equals the overall change
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Example Application:
              </h4>
              <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                  Calculate ΔH for: C + ½O₂ → CO
                </p>
                <div className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <p>Step 1: C + O₂ → CO₂ (ΔH₁ = -394 kJ)</p>
                  <p>Step 2: CO + ½O₂ → CO₂ (ΔH₂ = -283 kJ)</p>
                  <p>Therefore: ΔH = ΔH₁ - ΔH₂ = -111 kJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calorimetry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-amber-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Calorimetry
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Thermometer className="h-8 w-8 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Measuring Heat Changes
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Calorimetry is the experimental technique used to measure the heat absorbed 
              or released during chemical reactions.
            </p>
            <div className="bg-red-50 p-4 rounded dark:bg-red-900">
              <p className="text-red-800 dark:text-red-200 font-semibold mb-2">
                Basic Equation:
              </p>
              <p className="font-mono text-lg text-red-700 dark:text-red-300 text-center">
                q = mcΔT
              </p>
              <div className="text-sm text-red-600 dark:text-red-400 mt-2 space-y-1">
                <p>q = heat absorbed/released (J)</p>
                <p>m = mass of substance (g)</p>
                <p>c = specific heat capacity (J/g°C)</p>
                <p>ΔT = temperature change (°C)</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Types of Calorimeters
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Coffee Cup Calorimeter
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Simple calorimeter for measuring heat changes in solution reactions at constant pressure
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded dark:bg-green-900">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Bomb Calorimeter
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Precise instrument for measuring combustion reactions at constant volume
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bond Enthalpies */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-amber-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Bond Enthalpies
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            Energy required to break bonds or released when bonds form
          </p>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Bond Breaking vs. Bond Forming
              </h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded dark:bg-red-900">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    <h4 className="font-semibold text-red-800 dark:text-red-200">
                      Bond Breaking
                    </h4>
                  </div>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Requires energy input (endothermic process, ΔH &gt; 0)
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded dark:bg-green-900">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-green-500" />
                    <h4 className="font-semibold text-green-800 dark:text-green-200">
                      Bond Forming
                    </h4>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Releases energy (exothermic process, ΔH &lt; 0)
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Calculating ΔH from Bond Enthalpies
              </h3>
              <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
                <p className="font-mono text-lg text-purple-800 dark:text-purple-200 text-center mb-3">
                  ΔH = Σ(bonds broken) - Σ(bonds formed)
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <p>• Sum energy needed to break all bonds in reactants</p>
                  <p>• Subtract energy released forming all bonds in products</p>
                  <p>• Positive ΔH = endothermic reaction</p>
                  <p>• Negative ΔH = exothermic reaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Problems */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-amber-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Practice Problems
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Problem 1: Calorimetry
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When 5.0 g of NaOH dissolves in 100.0 g water, the temperature rises from 20.0°C to 28.5°C. 
              Calculate the heat released. (c<sub>water</sub> = 4.18 J/g°C)
            </p>
            <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                Show Solution
              </summary>
              <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                <p>q = mcΔT</p>
                <p>m = 100.0 g + 5.0 g = 105.0 g</p>
                <p>ΔT = 28.5°C - 20.0°C = 8.5°C</p>
                <p>q = (105.0 g)(4.18 J/g°C)(8.5°C) = 3,730 J</p>
                <p>Heat released = 3.73 kJ</p>
              </div>
            </details>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Problem 2: Hess's Law
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Calculate ΔH for: 2C + H₂ → C₂H₂
              Given: C₂H₂ + 5/2 O₂ → 2CO₂ + H₂O (ΔH = -1300 kJ)
              C + O₂ → CO₂ (ΔH = -394 kJ)
              H₂ + ½O₂ → H₂O (ΔH = -286 kJ)
            </p>
            <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                Show Solution
              </summary>
              <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                <p>Reverse equation 1: 2CO₂ + H₂O → C₂H₂ + 5/2 O₂ (ΔH = +1300 kJ)</p>
                <p>Use equation 2 twice: 2C + 2O₂ → 2CO₂ (ΔH = 2 × -394 = -788 kJ)</p>
                <p>Use equation 3: H₂ + ½O₂ → H₂O (ΔH = -286 kJ)</p>
                <p>Sum: ΔH = 1300 + (-788) + (-286) = +226 kJ</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-8 text-center dark:from-orange-600 dark:to-amber-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Your Chemistry Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master thermochemistry and energy changes, then explore other foundational topics 
          to build a comprehensive understanding of chemical principles.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/gases-and-their-properties"
            className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-sky-700"
          >
            Gas Properties
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Advanced Topics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Energy and Chemical Change
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}