"use client";

import { useState } from "react";
import { Layers, Thermometer, Zap, BarChart3, Atom, Hexagon } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Polymer Chemistry", href: "/chemistry/intermediate-advanced/polymer-chemistry" },
  { label: "Structures & Properties", href: "/chemistry/intermediate-advanced/polymer-chemistry/polymer-structures-and-properties" }
];

export default function PolymerStructuresAndProperties() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-purple-600 sm:text-5xl md:text-6xl">
          Polymer Structures & Properties
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Understand how molecular architecture and morphology determine the physical, 
          mechanical, and thermal properties of polymeric materials.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Polymer Architecture */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Polymer Architecture
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Layers className="mr-3 h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Linear Polymers
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Long chains of repeating units connected end-to-end without branching.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li>• High molecular weight chains</li>
              <li>• Entanglement effects</li>
              <li>• Thermoplastic behavior</li>
              <li>• Examples: PE, PP, PS</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Hexagon className="mr-3 h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Branched Polymers
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Main chains with side branches affecting packing and properties.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li>• Short and long chain branching</li>
              <li>• Reduced crystallinity</li>
              <li>• Lower density</li>
              <li>• Examples: LDPE, branched PEI</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Atom className="mr-3 h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Cross-linked Networks
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Three-dimensional networks formed by covalent bonds between chains.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li>• Thermoset behavior</li>
              <li>• Insoluble and infusible</li>
              <li>• High thermal stability</li>
              <li>• Examples: Epoxy, vulcanized rubber</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Molecular Weight Effects */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Molecular Weight and Distribution
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Average Molecular Weights
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                    Number Average (Mn)
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Mn = ΣNiMi / ΣNi
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Based on the number of molecules of each size
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                    Weight Average (Mw)
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Mw = ΣNiMi² / ΣNiMi
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Weighted by the mass of each fraction
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">
                    Polydispersity Index (PDI)
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    PDI = Mw / Mn
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Measure of molecular weight distribution breadth
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Property Relationships
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 p-4 dark:from-blue-800 dark:to-purple-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Mechanical Properties
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>• Tensile strength increases with MW</li>
                    <li>• Impact resistance improves</li>
                    <li>• Elongation at break changes</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 p-4 dark:from-purple-800 dark:to-pink-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Processing Properties
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>• Melt viscosity increases</li>
                    <li>• Processing becomes more difficult</li>
                    <li>• Shear sensitivity changes</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-pink-100 to-red-100 p-4 dark:from-pink-800 dark:to-red-800">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Thermal Properties
                  </h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                    <li>• Glass transition temperature</li>
                    <li>• Melting point variations</li>
                    <li>• Thermal stability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Physical Properties */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Physical Properties
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Thermometer className="mr-3 h-8 w-8 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Thermal Properties
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Glass Transition Temperature (Tg)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Temperature where polymer transitions from glassy to rubbery state
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Melting Temperature (Tm)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Temperature where crystalline regions melt
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Thermal Degradation
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Temperature limits for polymer stability
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <BarChart3 className="mr-3 h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Mechanical Properties
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Tensile Strength
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Maximum stress before failure under tension
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Elastic Modulus
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Stiffness measure in the elastic region
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Impact Resistance
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ability to absorb energy during rapid loading
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Zap className="mr-3 h-8 w-8 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Electrical Properties
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Dielectric Constant
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ability to store electrical energy
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Conductivity
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Most polymers are insulators, some can be conductive
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Breakdown Voltage
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Maximum voltage before electrical failure
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Layers className="mr-3 h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Morphological Properties
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Crystallinity
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Degree of ordered molecular packing
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Spherulitic Structure
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Radial crystal growth patterns
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Lamellar Thickness
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Thickness of crystalline regions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structure-Property Relationships */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 p-8 text-center dark:from-blue-600 dark:to-purple-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Structure-Property Relationships
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Understanding how molecular structure determines material properties is fundamental 
          to designing polymers for specific applications and optimizing their performance.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Chain Flexibility
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Affects glass transition temperature and mechanical properties
            </p>
          </div>
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Intermolecular Forces
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Determine strength, solubility, and thermal behavior
            </p>
          </div>
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Molecular Packing
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Influences density, crystallinity, and barrier properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}