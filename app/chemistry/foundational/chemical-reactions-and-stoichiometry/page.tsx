"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Scale, Zap, ArrowRight, Calculator } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for chemical reactions and stoichiometry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Foundational", href: "/chemistry/foundational" },
  { label: "Chemical Reactions", href: "/chemistry/foundational/chemical-reactions-and-stoichiometry" }
];

export default function ChemicalReactionsAndStoichiometry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-4xl font-bold text-transparent dark:from-pink-600 dark:to-rose-600 sm:text-5xl md:text-6xl">
          Chemical Reactions & Stoichiometry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the quantitative relationships in chemical reactions. Learn to balance equations, 
          calculate molar relationships, and predict reaction outcomes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Types of Chemical Reactions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent dark:from-pink-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Types of Chemical Reactions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Synthesis
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Two or more substances combine to form a single product.
            </p>
            <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                A + B → AB
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Example: 2H₂ + O₂ → 2H₂O
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-8 w-8 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Decomposition
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              A single compound breaks down into two or more products.
            </p>
            <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                AB → A + B
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Example: 2H₂O₂ → 2H₂O + O₂
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Single Replacement
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              One element replaces another in a compound.
            </p>
            <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                A + BC → AC + B
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Example: Zn + CuSO₄ → ZnSO₄ + Cu
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="h-8 w-8 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Double Replacement
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Two compounds exchange ions to form two new compounds.
            </p>
            <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                AB + CD → AD + CB
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Example: AgNO₃ + NaCl → AgCl + NaNO₃
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Combustion
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              A substance reacts with oxygen, often producing heat and light.
            </p>
            <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                CₓHᵧ + O₂ → CO₂ + H₂O
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Example: CH₄ + 2O₂ → CO₂ + 2H₂O
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Balancing Chemical Equations */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent dark:from-pink-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Balancing Chemical Equations
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-6">
            <Scale className="h-12 w-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Law of Conservation of Mass
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Matter cannot be created or destroyed in a chemical reaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Steps to Balance Equations:
              </h4>
              <ol className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span>Count atoms of each element on both sides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span>Start with the most complex molecule</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span>Use coefficients to balance each element</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span>Check that all atoms are balanced</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Example: Balancing Combustion
              </h4>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Unbalanced:</p>
                  <p className="font-mono text-gray-700 dark:text-gray-300">C₃H₈ + O₂ → CO₂ + H₂O</p>
                </div>
                <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                  <p className="text-sm text-green-600 dark:text-green-400">Balanced:</p>
                  <p className="font-mono text-green-700 dark:text-green-300">C₃H₈ + 5O₂ → 3CO₂ + 4H₂O</p>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <p>C: 3 = 3 ✓</p>
                  <p>H: 8 = 8 ✓</p>
                  <p>O: 10 = 10 ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stoichiometry Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent dark:from-pink-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Stoichiometry
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Mole-to-Mole Calculations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Use molar ratios from balanced equations to convert between moles of different substances.
            </p>
            <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
              <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">Example:</p>
              <p className="font-mono text-sm text-blue-700 dark:text-blue-300">2H₂ + O₂ → 2H₂O</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                2 mol H₂ : 1 mol O₂ : 2 mol H₂O
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Mass-to-Mass Calculations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Convert grams of one substance to grams of another using molar masses and mole ratios.
            </p>
            <div className="bg-green-50 p-4 rounded dark:bg-green-900">
              <p className="text-green-800 dark:text-green-200 font-semibold mb-2">Steps:</p>
              <ol className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>1. grams → moles (÷ molar mass)</li>
                <li>2. moles → moles (× mole ratio)</li>
                <li>3. moles → grams (× molar mass)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Limiting Reactant Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent dark:from-pink-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Limiting Reactant & Percent Yield
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Limiting Reactant
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The reactant that is completely consumed first, limiting the amount of product formed.
              </p>
              <div className="bg-yellow-50 p-4 rounded dark:bg-yellow-900">
                <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">
                  How to Find:
                </p>
                <ol className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>1. Calculate moles of each reactant</li>
                  <li>2. Use stoichiometry to find theoretical product</li>
                  <li>3. The reactant producing less product is limiting</li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Percent Yield
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Compares actual yield to theoretical yield to measure reaction efficiency.
              </p>
              <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
                <p className="text-purple-800 dark:text-purple-200 font-semibold mb-2">
                  Formula:
                </p>
                <p className="font-mono text-purple-700 dark:text-purple-300 text-center text-lg">
                  % Yield = (Actual/Theoretical) × 100%
                </p>
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
              ? "bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent dark:from-pink-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Practice Problems
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Problem 1: Stoichiometry
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              How many grams of H₂O are produced when 4.0 g of H₂ react with excess O₂?
            </p>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-4">
              2H₂ + O₂ → 2H₂O
            </p>
            <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                Show Solution
              </summary>
              <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                <p>1. Convert H₂ to moles: 4.0 g ÷ 2.0 g/mol = 2.0 mol H₂</p>
                <p>2. Use mole ratio: 2.0 mol H₂ × (2 mol H₂O / 2 mol H₂) = 2.0 mol H₂O</p>
                <p>3. Convert to grams: 2.0 mol × 18.0 g/mol = 36.0 g H₂O</p>
              </div>
            </details>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Problem 2: Limiting Reactant
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If 3.0 mol N₂ and 6.0 mol H₂ react, which is the limiting reactant?
            </p>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-4">
              N₂ + 3H₂ → 2NH₃
            </p>
            <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                Show Solution
              </summary>
              <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                <p>From N₂: 3.0 mol N₂ × (2 mol NH₃ / 1 mol N₂) = 6.0 mol NH₃</p>
                <p>From H₂: 6.0 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4.0 mol NH₃</p>
                <p>H₂ produces less NH₃, so H₂ is the limiting reactant.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-8 text-center dark:from-pink-600 dark:to-rose-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Your Chemistry Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master chemical reactions and stoichiometry, then explore other foundational topics 
          to build a comprehensive understanding of chemical principles.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/thermochemistry"
            className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700"
          >
            Thermochemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/foundational/gases-and-their-properties"
            className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-sky-700"
          >
            Gas Properties
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Quantitative Chemical Relationships
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}