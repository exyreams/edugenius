"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, BarChart3, Droplets, Wind, Zap } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for chromatography
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Analytical Chemistry", href: "/chemistry/intermediate-advanced/analytical-chemistry" },
  { label: "Chromatography", href: "/chemistry/intermediate-advanced/analytical-chemistry/chromatography" }
];

export default function Chromatography() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-cyan-600 sm:text-5xl md:text-6xl">
          Chromatography
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the art of separation science. Learn how chromatographic techniques 
          separate, identify, and quantify components in complex mixtures.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Principles of Chromatography */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Principles of Chromatography
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <BarChart3 className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Separation by Differential Partitioning
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chromatography separates components based on their different affinities 
              for a stationary phase and a mobile phase. Components with stronger 
              affinity for the stationary phase move slower.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Key Components
              </h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-800 dark:text-white">Mobile Phase</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Fluid that carries the sample through the system (gas or liquid)
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-800 dark:text-white">Stationary Phase</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Fixed phase that interacts with sample components (solid or liquid)
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-800 dark:text-white">Sample</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Mixture to be separated and analyzed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Separation Mechanisms
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded dark:bg-gray-700">
                  <p className="font-semibold text-gray-800 dark:text-white">Adsorption</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Surface interactions between analyte and stationary phase
                  </p>
                </div>
                <div className="bg-white p-3 rounded dark:bg-gray-700">
                  <p className="font-semibold text-gray-800 dark:text-white">Partition</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Distribution between two immiscible liquid phases
                  </p>
                </div>
                <div className="bg-white p-3 rounded dark:bg-gray-700">
                  <p className="font-semibold text-gray-800 dark:text-white">Size Exclusion</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Separation based on molecular size differences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Chromatography */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Types of Chromatography
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Wind className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Gas Chromatography (GC)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Uses an inert gas as mobile phase to separate volatile compounds.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Environmental analysis (pesticides, VOCs)</li>
                  <li>• Forensic analysis (drugs, explosives)</li>
                  <li>• Food analysis (flavors, contaminants)</li>
                  <li>• Petroleum industry (hydrocarbon analysis)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Key Features:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• High resolution and sensitivity</li>
                  <li>• Fast analysis times</li>
                  <li>• Requires volatile samples</li>
                  <li>• Temperature programming capability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Liquid Chromatography (LC)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Uses liquid mobile phase, including High-Performance LC (HPLC).
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Pharmaceutical analysis</li>
                  <li>• Protein and peptide separation</li>
                  <li>• Natural product analysis</li>
                  <li>• Quality control in manufacturing</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Key Features:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Suitable for non-volatile compounds</li>
                  <li>• Various detection methods</li>
                  <li>• Gradient elution capability</li>
                  <li>• Wide range of stationary phases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Ion Chromatography (IC)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Specialized for separation and analysis of ionic species.
            </p>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded dark:bg-purple-900">
                <p className="text-purple-800 dark:text-purple-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Water quality analysis</li>
                  <li>• Environmental monitoring</li>
                  <li>• Food and beverage analysis</li>
                  <li>• Industrial process monitoring</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Key Features:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Conductivity detection</li>
                  <li>• Suppressor technology</li>
                  <li>• Low detection limits for ions</li>
                  <li>• Simultaneous multi-ion analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Thin Layer Chromatography (TLC)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Simple, quick technique using thin layer of adsorbent on a plate.
            </p>
            <div className="space-y-3">
              <div className="bg-orange-50 p-3 rounded dark:bg-orange-900">
                <p className="text-orange-800 dark:text-orange-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Reaction monitoring</li>
                  <li>• Purity assessment</li>
                  <li>• Natural product screening</li>
                  <li>• Educational demonstrations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Key Features:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Low cost and simple setup</li>
                  <li>• Visual detection possible</li>
                  <li>• Multiple samples simultaneously</li>
                  <li>• Qualitative analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chromatographic Parameters */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Important Chromatographic Parameters
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Retention Time (tR)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Time taken for a component to travel through the system.
            </p>
            <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Used for qualitative identification - each compound has a characteristic retention time under specific conditions.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Resolution (Rs)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Measure of separation between two adjacent peaks.
            </p>
            <div className="bg-green-50 p-3 rounded dark:bg-green-900">
              <p className="text-sm text-green-800 dark:text-green-200">
                Rs ≥ 1.5 indicates baseline separation. Higher resolution means better separation quality.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Selectivity (α)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Ability to distinguish between different compounds.
            </p>
            <div className="bg-purple-50 p-3 rounded dark:bg-purple-900">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                α = k₂/k₁ where k is the retention factor. Higher selectivity improves separation.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Efficiency (N)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Number of theoretical plates - measure of column performance.
            </p>
            <div className="bg-orange-50 p-3 rounded dark:bg-orange-900">
              <p className="text-sm text-orange-800 dark:text-orange-200">
                Higher N values indicate sharper peaks and better separation efficiency.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Capacity Factor (k)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Measure of retention relative to unretained peak.
            </p>
            <div className="bg-red-50 p-3 rounded dark:bg-red-900">
              <p className="text-sm text-red-800 dark:text-red-200">
                k = (tR - t0)/t0. Optimal range is typically 1-10 for good separation.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Peak Area/Height
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Used for quantitative analysis of component concentration.
            </p>
            <div className="bg-indigo-50 p-3 rounded dark:bg-indigo-900">
              <p className="text-sm text-indigo-800 dark:text-indigo-200">
                Peak area is proportional to concentration - basis for quantitative analysis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-200 to-cyan-200 p-8 text-center dark:from-blue-600 dark:to-cyan-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Analytical Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master chromatographic separations, then explore other analytical techniques 
          to build comprehensive analytical chemistry expertise.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/spectroscopy"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Spectroscopy
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/wet-chemistry"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Wet Chemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Art of Separation Science
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}