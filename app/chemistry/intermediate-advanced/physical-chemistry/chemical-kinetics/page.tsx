"use client";

import { useState } from "react";
import { Zap, Clock, TrendingUp, Activity, BarChart3, ArrowRight } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for chemical kinetics
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Physical Chemistry", href: "/chemistry/intermediate-advanced/physical-chemistry" },
  { label: "Chemical Kinetics", href: "/chemistry/intermediate-advanced/physical-chemistry/chemical-kinetics" }
];

export default function ChemicalKinetics() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-4xl font-bold text-transparent dark:from-yellow-600 dark:to-orange-600 sm:text-5xl md:text-6xl">
          Chemical Kinetics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Study the rates of chemical reactions and the factors that influence how fast reactions occur. 
          Understand reaction mechanisms and the role of catalysts in accelerating chemical processes.
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
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Reaction Rates
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Speed of Chemical Change
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chemical kinetics is the study of reaction rates and the molecular events that occur 
              during a chemical reaction. It helps us understand not just what happens, but how fast 
              it happens and why.
            </p>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Concepts in Chemical Kinetics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <Clock className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Rate Laws
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Mathematical expressions that relate reaction rate to reactant concentrations.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Rate = k[A]^m[B]^n</li>
              <li>• Reaction order determination</li>
              <li>• Rate constant (k) significance</li>
              <li>• Integrated rate equations</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-orange-100 to-red-100 p-6 dark:from-orange-800 dark:to-red-800">
            <TrendingUp className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Activation Energy
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              The minimum energy required for a chemical reaction to occur.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Arrhenius equation: k = Ae^(-Ea/RT)</li>
              <li>• Temperature dependence</li>
              <li>• Transition state theory</li>
              <li>• Energy diagrams</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <Activity className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Reaction Mechanisms
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Step-by-step pathways showing how reactants transform into products.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Elementary reactions</li>
              <li>• Rate-determining step</li>
              <li>• Intermediates and catalysts</li>
              <li>• Pre-equilibrium approximation</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 p-6 dark:from-pink-800 dark:to-purple-800">
            <BarChart3 className="h-8 w-8 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Catalysis
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Substances that increase reaction rates without being consumed.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Homogeneous catalysis</li>
              <li>• Heterogeneous catalysis</li>
              <li>• Enzyme catalysis</li>
              <li>• Catalyst selectivity</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rate Laws and Orders */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Rate Laws and Reaction Orders
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Zero-Order Reactions
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700 mb-4">
                <p className="font-mono text-lg text-center text-gray-800 dark:text-gray-200">
                  Rate = k
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Rate independent of concentration</li>
                <li>• Linear decrease in [A] vs time</li>
                <li>• Common in surface reactions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                First-Order Reactions
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700 mb-4">
                <p className="font-mono text-lg text-center text-gray-800 dark:text-gray-200">
                  Rate = k[A]
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Rate proportional to concentration</li>
                <li>• Exponential decay</li>
                <li>• Half-life constant</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Second-Order Reactions
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700 mb-4">
                <p className="font-mono text-lg text-center text-gray-800 dark:text-gray-200">
                  Rate = k[A]²
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Rate proportional to [A]²</li>
                <li>• 1/[A] vs time is linear</li>
                <li>• Half-life depends on concentration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Complex Orders
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700 mb-4">
                <p className="font-mono text-lg text-center text-gray-800 dark:text-gray-200">
                  Rate = k[A]^m[B]^n
                </p>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Overall order = m + n</li>
                <li>• Fractional orders possible</li>
                <li>• Method of initial rates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Temperature Effects */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Temperature Effects and Arrhenius Equation
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg dark:from-yellow-800 dark:to-orange-800 inline-block">
              <p className="font-mono text-2xl text-gray-800 dark:text-gray-200 mb-2">
                k = Ae^(-Ea/RT)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Arrhenius Equation
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Key Parameters
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li><strong>k:</strong> Rate constant</li>
                <li><strong>A:</strong> Pre-exponential factor</li>
                <li><strong>Ea:</strong> Activation energy</li>
                <li><strong>R:</strong> Gas constant (8.314 J/mol·K)</li>
                <li><strong>T:</strong> Absolute temperature (K)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Temperature Effects
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Higher T → faster reactions</li>
                <li>• Rule of thumb: rate doubles per 10°C</li>
                <li>• Activation energy from slope</li>
                <li>• ln(k) vs 1/T plot is linear</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Applications of Chemical Kinetics
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-green-100 to-teal-100 p-6 dark:from-green-800 dark:to-teal-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Industrial Processes
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Optimizing reaction conditions</li>
              <li>• Reactor design</li>
              <li>• Process efficiency</li>
              <li>• Quality control</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 p-6 dark:from-blue-800 dark:to-indigo-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Drug Development
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Drug metabolism rates</li>
              <li>• Pharmacokinetics</li>
              <li>• Stability testing</li>
              <li>• Dosage optimization</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Environmental Chemistry
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Pollutant degradation</li>
              <li>• Atmospheric reactions</li>
              <li>• Water treatment</li>
              <li>• Ozone depletion</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 p-8 text-center dark:from-yellow-600 dark:to-orange-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Master Chemical Kinetics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Understanding reaction rates is crucial for controlling chemical processes, 
          from industrial manufacturing to biological systems.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-yellow-700">
            Practice Problems
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700">
            Interactive Simulations
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}