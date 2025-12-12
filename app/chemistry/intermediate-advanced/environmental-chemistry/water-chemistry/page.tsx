"use client";

import { useState } from "react";
import { Droplets, Fish, Beaker, Waves, TestTube, FlaskConical } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for water chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Environmental Chemistry", href: "/chemistry/intermediate-advanced/environmental-chemistry" },
  { label: "Water Chemistry", href: "/chemistry/intermediate-advanced/environmental-chemistry/water-chemistry" }
];

export default function WaterChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-600 dark:to-blue-600 sm:text-5xl md:text-6xl">
          Water Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemical processes in natural waters, water treatment systems, 
          and aquatic environments that affect water quality and ecosystem health.
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
              ? "bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent dark:from-cyan-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Chemistry of Water Systems
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Droplets className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Chemical Processes in Aquatic Environments
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Water chemistry examines the chemical composition and reactions in natural waters, 
              including rivers, lakes, oceans, and groundwater. Understanding these processes 
              is crucial for water quality management and environmental protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4">
              <TestTube className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Water Quality
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chemical parameters that determine water suitability for various uses
              </p>
            </div>
            
            <div className="text-center p-4">
              <Fish className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Aquatic Life
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chemical conditions necessary for healthy aquatic ecosystems
              </p>
            </div>
            
            <div className="text-center p-4">
              <Waves className="h-12 w-12 text-cyan-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Pollution Control
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chemical treatment methods for water purification and remediation
              </p>
            </div>
            
            <div className="text-center p-4">
              <FlaskConical className="h-12 w-12 text-purple-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Treatment Chemistry
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chemical processes used in water and wastewater treatment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Water Quality Parameters */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent dark:from-cyan-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Water Quality Parameters
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              pH and Alkalinity
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Measure of acidity/basicity and buffering capacity
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• pH range: 6.5-8.5 (drinking water)</li>
              <li>• Alkalinity: HCO₃⁻, CO₃²⁻, OH⁻</li>
              <li>• Buffering against pH changes</li>
              <li>• Affects metal solubility</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Dissolved Oxygen (DO)
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Critical for aquatic life and water quality assessment
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Saturation depends on temperature</li>
              <li>• >5 mg/L for fish survival</li>
              <li>• Affected by organic pollution</li>
              <li>• BOD/COD relationship</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Hardness
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Concentration of divalent cations (Ca²⁺, Mg²⁺)
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Temporary vs permanent hardness</li>
              <li>• Soap consumption</li>
              <li>• Scale formation</li>
              <li>• Expressed as CaCO₃ equivalent</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-orange-100 to-red-100 p-6 dark:from-orange-800 dark:to-red-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Nutrients (N, P)
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Essential for plant growth but can cause eutrophication
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Nitrogen: NH₃, NO₂⁻, NO₃⁻</li>
              <li>• Phosphorus: PO₄³⁻, organic P</li>
              <li>• Algal bloom triggers</li>
              <li>• N:P ratio importance</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Heavy Metals
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Toxic metals that bioaccumulate in aquatic systems
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Pb, Hg, Cd, Cr, As</li>
              <li>• Speciation affects toxicity</li>
              <li>• Bioaccumulation in food chain</li>
              <li>• Complexation with organics</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Organic Pollutants
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Carbon-based compounds affecting water quality
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Pesticides and herbicides</li>
              <li>• Pharmaceuticals</li>
              <li>• Industrial chemicals</li>
              <li>• Endocrine disruptors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chemical Equilibria in Water */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent dark:from-cyan-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Important Chemical Equilibria
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Carbonate System
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The carbonate system controls pH buffering and alkalinity in natural waters.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <code className="text-blue-800 dark:text-blue-200 text-sm">
                  CO₂ + H₂O ⇌ H₂CO₃
                </code>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  Carbon dioxide dissolution
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                <code className="text-green-800 dark:text-green-200 text-sm">
                  H₂CO₃ ⇌ H⁺ + HCO₃⁻
                </code>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                  First dissociation (Ka1 = 4.3 × 10⁻⁷)
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded">
                <code className="text-purple-800 dark:text-purple-200 text-sm">
                  HCO₃⁻ ⇌ H⁺ + CO₃²⁻
                </code>
                <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
                  Second dissociation (Ka2 = 4.7 × 10⁻¹¹)
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Metal Complexation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Metal ions form complexes with ligands, affecting their mobility and toxicity.
            </p>
            <div className="space-y-3">
              <div className="bg-orange-50 dark:bg-orange-900 p-3 rounded">
                <code className="text-orange-800 dark:text-orange-200 text-sm">
                  M²⁺ + L⁻ ⇌ ML⁺
                </code>
                <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                  Simple complex formation
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-3 rounded">
                <code className="text-red-800 dark:text-red-200 text-sm">
                  Cu²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄]²⁺
                </code>
                <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                  Copper-ammonia complex
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                <code className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Fe³⁺ + EDTA⁴⁻ ⇌ [Fe(EDTA)]⁻
                </code>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  Chelation with EDTA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Water Treatment Processes */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent dark:from-cyan-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Water Treatment Chemistry
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Beaker className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Coagulation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Destabilization of colloidal particles
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Al₂(SO₄)₃, FeCl₃</li>
                <li>• Charge neutralization</li>
                <li>• Sweep coagulation</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Waves className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Flocculation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Aggregation of destabilized particles
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Gentle mixing</li>
                <li>• Polymer aids</li>
                <li>• Floc formation</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <TestTube className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Disinfection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Pathogen inactivation
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Chlorination</li>
                <li>• Ozonation</li>
                <li>• UV treatment</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FlaskConical className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Advanced Treatment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Specialized removal processes
              </p>
              <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Activated carbon</li>
                <li>• Membrane filtration</li>
                <li>• Ion exchange</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Eutrophication Process */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent dark:from-cyan-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Eutrophication: A Major Water Quality Issue
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-6">
            <Fish className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <p className="text-gray-600 dark:text-gray-300">
              Eutrophication is the enrichment of water bodies with nutrients, leading to 
              excessive plant growth and oxygen depletion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Nutrient Input
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Excess nitrogen and phosphorus from agriculture, sewage, and urban runoff
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Algal Blooms
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Rapid growth of algae and aquatic plants due to abundant nutrients
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Oxygen Depletion
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Decomposition of dead algae consumes oxygen, creating hypoxic conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Protecting Our Most Precious Resource
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}