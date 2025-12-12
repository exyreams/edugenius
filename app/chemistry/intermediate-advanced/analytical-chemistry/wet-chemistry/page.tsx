"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, FlaskConical, Droplets, Scale, Beaker } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for wet chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Analytical Chemistry", href: "/chemistry/intermediate-advanced/analytical-chemistry" },
  { label: "Wet Chemistry", href: "/chemistry/intermediate-advanced/analytical-chemistry/wet-chemistry" }
];

export default function WetChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-emerald-600 sm:text-5xl md:text-6xl">
          Wet Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master classical analytical methods using chemical reactions in solution. 
          Learn titrations, gravimetric analysis, and precipitation techniques.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Introduction to Wet Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Classical Analytical Methods
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <FlaskConical className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Chemical Reactions in Solution
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Wet chemistry uses chemical reactions in aqueous solutions to determine 
              the composition and concentration of analytes. These time-tested methods 
              remain fundamental to analytical chemistry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Advantages
              </h4>
              <ul className="text-green-800 dark:text-green-200 space-y-2">
                <li>• High accuracy and precision</li>
                <li>• Well-established methods</li>
                <li>• Low cost and simple equipment</li>
                <li>• Excellent for teaching fundamentals</li>
                <li>• Reference methods for validation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Limitations
              </h4>
              <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                <li>• Time-consuming procedures</li>
                <li>• Limited selectivity</li>
                <li>• Interference from other species</li>
                <li>• Requires skilled analysts</li>
                <li>• Not suitable for trace analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Titrations */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Titrations
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Acid-Base Titrations
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Determine concentration by neutralization reactions between acids and bases.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-1">Types:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Strong acid vs. strong base</li>
                  <li>• Weak acid vs. strong base</li>
                  <li>• Strong acid vs. weak base</li>
                  <li>• Polyprotic acid titrations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Indicators:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Phenolphthalein (pH 8.2-10.0)</li>
                  <li>• Methyl orange (pH 3.1-4.4)</li>
                  <li>• Bromothymol blue (pH 6.0-7.6)</li>
                  <li>• Universal indicators</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Redox Titrations
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Based on electron transfer reactions between oxidizing and reducing agents.
            </p>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded dark:bg-purple-900">
                <p className="text-purple-800 dark:text-purple-200 font-semibold mb-1">Common Titrants:</p>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• KMnO₄ (permanganometry)</li>
                  <li>• K₂Cr₂O₇ (dichromate method)</li>
                  <li>• I₂/I⁻ (iodometry/iodimetry)</li>
                  <li>• Ce⁴⁺ (ceric sulfate)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Iron determination in ores</li>
                  <li>• Vitamin C analysis</li>
                  <li>• Water hardness measurement</li>
                  <li>• Organic compound analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Beaker className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Complexometric Titrations
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Use complex formation reactions, typically with EDTA as titrant.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-1">EDTA Titrations:</p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• 1:1 stoichiometry with most metals</li>
                  <li>• pH control is critical</li>
                  <li>• Masking agents for selectivity</li>
                  <li>• Metallochromic indicators</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Water hardness (Ca²⁺, Mg²⁺)</li>
                  <li>• Metal ion determination</li>
                  <li>• Pharmaceutical analysis</li>
                  <li>• Environmental monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Precipitation Titrations
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Based on precipitation reactions, commonly used for halide analysis.
            </p>
            <div className="space-y-3">
              <div className="bg-orange-50 p-3 rounded dark:bg-orange-900">
                <p className="text-orange-800 dark:text-orange-200 font-semibold mb-1">Methods:</p>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Mohr method (Cl⁻ with AgNO₃)</li>
                  <li>• Volhard method (Ag⁺ with KSCN)</li>
                  <li>• Fajans method (adsorption indicators)</li>
                  <li>• Potentiometric end point</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Requirements:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Low solubility product</li>
                  <li>• Rapid precipitation</li>
                  <li>• Stoichiometric reaction</li>
                  <li>• Suitable indicator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gravimetric Analysis */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Gravimetric Analysis
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Scale className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Analysis by Mass Measurement
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Gravimetric analysis determines analyte concentration by measuring 
              the mass of a pure compound containing the analyte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Precipitation Gravimetry:
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold mb-1">Process:</p>
                  <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>1. Dissolve sample</li>
                    <li>2. Add precipitating agent</li>
                    <li>3. Digest and age precipitate</li>
                    <li>4. Filter and wash</li>
                    <li>5. Dry or ignite</li>
                    <li>6. Weigh and calculate</li>
                  </ol>
                </div>
                <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                  <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Examples:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• BaSO₄ for sulfate determination</li>
                    <li>• AgCl for chloride analysis</li>
                    <li>• Al₂O₃ for aluminum content</li>
                    <li>• Mg₂P₂O₇ for magnesium</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Volatilization Gravimetry:
              </h4>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                  <p className="text-green-800 dark:text-green-200 font-semibold mb-1">Principle:</p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Analyte or its decomposition products are volatilized. 
                    Mass loss or gain is measured.
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                  <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Applications:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Moisture content determination</li>
                    <li>• CO₂ in carbonates</li>
                    <li>• Organic matter in soils</li>
                    <li>• Volatile components</li>
                  </ul>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 mt-6">
                Requirements for Good Precipitates:
              </h4>
              <div className="space-y-2">
                <div className="bg-yellow-50 p-2 rounded dark:bg-yellow-900">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Low Solubility:</strong> Minimize losses during washing
                  </p>
                </div>
                <div className="bg-yellow-50 p-2 rounded dark:bg-yellow-900">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>High Purity:</strong> Avoid coprecipitation and contamination
                  </p>
                </div>
                <div className="bg-yellow-50 p-2 rounded dark:bg-yellow-900">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Filterable:</strong> Large, dense crystals preferred
                  </p>
                </div>
                <div className="bg-yellow-50 p-2 rounded dark:bg-yellow-900">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Known Composition:</strong> Definite stoichiometry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculations and Stoichiometry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Calculations in Wet Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Titration Calculations
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                  Basic Formula:
                </p>
                <p className="font-mono text-lg text-blue-700 dark:text-blue-300 text-center mb-2">
                  M₁V₁ = M₂V₂
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Where M = molarity, V = volume
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-2">
                  Example Problem:
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  25.0 mL of 0.100 M HCl requires 23.5 mL of NaOH. Find [NaOH].
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  [NaOH] = (0.100 M × 25.0 mL) / 23.5 mL = 0.106 M
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Gravimetric Calculations
            </h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
                <p className="text-purple-800 dark:text-purple-200 font-semibold mb-2">
                  Gravimetric Factor:
                </p>
                <p className="font-mono text-lg text-purple-700 dark:text-purple-300 text-center mb-2">
                  GF = (MW of analyte) / (MW of precipitate)
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Mass of analyte = Mass of precipitate × GF
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded dark:bg-orange-900">
                <p className="text-orange-800 dark:text-orange-200 font-semibold mb-2">
                  Example Problem:
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                  0.5000 g BaSO₄ precipitate. Find mass of SO₄²⁻.
                </p>
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  GF = 96.06/233.39 = 0.4115
                  Mass SO₄²⁻ = 0.5000 × 0.4115 = 0.2058 g
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-8 text-center dark:from-green-600 dark:to-emerald-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Analytical Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master classical wet chemistry methods, then explore modern instrumental 
          techniques to build comprehensive analytical chemistry expertise.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/chromatography"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Chromatography
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/spectroscopy"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Spectroscopy
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Classical Methods, Timeless Precision
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}