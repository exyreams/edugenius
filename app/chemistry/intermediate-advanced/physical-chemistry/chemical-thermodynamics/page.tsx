"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Thermometer, TrendingUp, Zap, BarChart3, ArrowRight, Activity } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for chemical thermodynamics
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Physical Chemistry", href: "/chemistry/intermediate-advanced/physical-chemistry" },
  { label: "Chemical Thermodynamics", href: "/chemistry/intermediate-advanced/physical-chemistry/chemical-thermodynamics" }
];

export default function ChemicalThermodynamics() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-pink-600 sm:text-5xl md:text-6xl">
          Chemical Thermodynamics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the relationship between energy, entropy, and chemical equilibrium. 
          Understand how thermodynamic principles govern chemical reactions and processes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Laws of Thermodynamics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent dark:from-red-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Laws of Thermodynamics
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                First Law
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Energy cannot be created or destroyed, only converted from one form to another.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <code className="text-blue-700 dark:text-blue-300 text-sm">
                  ΔU = q - w
                </code>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Second Law
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                The entropy of an isolated system always increases in spontaneous processes.
              </p>
              <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                <code className="text-green-700 dark:text-green-300 text-sm">
                  ΔS_universe ≥ 0
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-red-200 to-pink-200 p-8 text-center dark:from-red-600 dark:to-pink-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Physical Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master thermodynamics and explore other physical chemistry topics like kinetics and quantum chemistry.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/physical-chemistry/chemical-kinetics"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Chemical Kinetics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/physical-chemistry"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Physical Chemistry Overview
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Energy, Entropy, and Equilibrium
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}