"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Zap, Droplets, Shield, Waves } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for lipids
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Biochemistry", href: "/chemistry/intermediate-advanced/biochemistry" },
  { label: "Lipids", href: "/chemistry/intermediate-advanced/biochemistry/lipids" }
];

export default function Lipids() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-4xl font-bold text-transparent dark:from-yellow-600 dark:to-orange-600 sm:text-5xl md:text-6xl">
          Lipids
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Discover the diverse world of lipids - from energy storage and membrane structure 
          to signaling molecules. Learn how these hydrophobic compounds shape life processes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What are Lipids */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What are Lipids?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Droplets className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Hydrophobic Biomolecules
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Lipids are a diverse group of hydrophobic or amphiphilic molecules composed 
              primarily of carbon and hydrogen. They are largely nonpolar and insoluble 
              in water but soluble in nonpolar solvents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-lg dark:from-yellow-800 dark:to-orange-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Energy Storage
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Store more than twice the energy per gram compared to carbohydrates
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Membrane Structure
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Form biological membranes that separate cellular compartments
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Signaling
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Act as hormones and signaling molecules in cellular communication
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Insulation
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Provide thermal insulation and protection for organs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 p-8 text-center dark:from-yellow-600 dark:to-orange-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Biochemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master lipid structure and function, then explore other biomolecules 
          to understand the complete picture of biochemical processes.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/nucleic-acids"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Nucleic Acids
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/carbohydrates"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Carbohydrates
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
  
    {/* Classification of Lipids */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent dark:from-yellow-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Major Classes of Lipids
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Fatty Acids & Triglycerides
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Simple lipids composed of fatty acid chains and glycerol backbone.
            </p>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded dark:bg-orange-900">
                <p className="text-orange-800 dark:text-orange-200 font-semibold mb-2">Fatty Acids:</p>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Saturated: no double bonds (palmitic, stearic)</li>
                  <li>• Monounsaturated: one double bond (oleic)</li>
                  <li>• Polyunsaturated: multiple double bonds (linoleic)</li>
                  <li>• Essential fatty acids (omega-3, omega-6)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded dark:bg-yellow-900">
                <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Triglycerides:</p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Three fatty acids + glycerol</li>
                  <li>• Primary form of stored fat</li>
                  <li>• Adipose tissue energy reserves</li>
                  <li>• 9 kcal/g energy density</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Phospholipids
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Amphiphilic molecules that form the structural basis of cell membranes.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">Structure:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Hydrophilic phosphate head group</li>
                  <li>• Two hydrophobic fatty acid tails</li>
                  <li>• Glycerol or sphingosine backbone</li>
                  <li>• Various head group modifications</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded dark:bg-cyan-900">
                <p className="text-cyan-800 dark:text-cyan-200 font-semibold mb-2">Common Types:</p>
                <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
                  <li>• Phosphatidylcholine (lecithin)</li>
                  <li>• Phosphatidylserine</li>
                  <li>• Phosphatidylethanolamine</li>
                  <li>• Cardiolipin (mitochondrial)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Hydrophobic Foundation of Life
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>