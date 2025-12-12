"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Zap, Factory, Sun, Flame, AlertTriangle } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for nuclear reactions
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Nuclear Chemistry", href: "/chemistry/intermediate-advanced/nuclear-chemistry" },
  { label: "Nuclear Reactions", href: "/chemistry/intermediate-advanced/nuclear-chemistry/nuclear-reactions" }
];

export default function NuclearReactions() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-4xl font-bold text-transparent dark:from-yellow-600 dark:to-orange-600 sm:text-5xl md:text-6xl">
          Nuclear Reactions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore artificial nuclear transformations, fission, fusion, and the enormous 
          energy changes involved in nuclear processes that power stars and reactors.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Nuclear Reaction Types */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Types of Nuclear Reactions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Nuclear Fission
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Heavy nucleus splits into lighter fragments, releasing energy and neutrons.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <code className="text-blue-700 dark:text-blue-300 text-sm">
                  ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + energy
                </code>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="h-8 w-8 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Nuclear Fusion
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Light nuclei combine to form heavier nucleus, releasing tremendous energy.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                <code className="text-yellow-700 dark:text-yellow-300 text-sm">
                  ²H + ³H → ⁴He + n + 17.6 MeV
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 p-8 text-center dark:from-yellow-600 dark:to-orange-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Nuclear Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Learn about radioactivity and nuclear decay processes to complete your understanding of nuclear chemistry.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/nuclear-chemistry/radioactivity"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            Radioactivity
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/nuclear-chemistry"
            className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700"
          >
            Nuclear Chemistry Overview
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Nuclear Transformations and Energy
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}