"use client";

import { useState } from "react";
import { Layers, Beaker, Factory, Gem } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for descriptive chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Inorganic Chemistry", href: "/chemistry/intermediate-advanced/inorganic-chemistry" },
  { label: "Descriptive Chemistry", href: "/chemistry/intermediate-advanced/inorganic-chemistry/descriptive-chemistry" }
];

export default function DescriptiveChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-indigo-600 sm:text-5xl md:text-6xl">
          Descriptive Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the systematic study of elements and their compounds, including their 
          preparation, properties, reactions, and applications in industry and daily life.
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
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Systematic Study of Elements
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Layers className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Properties, Preparation, and Applications
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descriptive chemistry provides a systematic overview of the elements and their 
              compounds, focusing on their physical and chemical properties, methods of 
              preparation, and practical applications in various fields.
            </p>
          </div>
        </div>
      </div>

      {/* Group Chemistry Overview */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Periodic Group Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 1: Alkali Metals
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Li, Na, K, Rb, Cs, Fr</li>
              <li>• Highly reactive metals</li>
              <li>• Form ionic compounds</li>
              <li>• Applications: batteries, glass</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-orange-100 to-red-100 p-6 dark:from-orange-800 dark:to-red-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 2: Alkaline Earth Metals
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Be, Mg, Ca, Sr, Ba, Ra</li>
              <li>• Divalent cations</li>
              <li>• Construction materials</li>
              <li>• Biological importance</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 13: Boron Group
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• B, Al, Ga, In, Tl</li>
              <li>• Electron-deficient compounds</li>
              <li>• Aluminum industry</li>
              <li>• Semiconductor applications</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 14: Carbon Group
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• C, Si, Ge, Sn, Pb</li>
              <li>• Catenation ability</li>
              <li>• Silicon technology</li>
              <li>• Allotropes and polymorphs</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 15: Nitrogen Group
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• N, P, As, Sb, Bi</li>
              <li>• Multiple oxidation states</li>
              <li>• Fertilizer industry</li>
              <li>• Biological significance</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 16: Oxygen Group
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• O, S, Se, Te, Po</li>
              <li>• Chalcogen chemistry</li>
              <li>• Sulfuric acid production</li>
              <li>• Environmental importance</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 17: Halogens
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• F, Cl, Br, I, At</li>
              <li>• Highly electronegative</li>
              <li>• Disinfectants and bleaches</li>
              <li>• Pharmaceutical applications</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-gray-100 to-slate-100 p-6 dark:from-gray-800 dark:to-slate-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Group 18: Noble Gases
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• He, Ne, Ar, Kr, Xe, Rn</li>
              <li>• Chemically inert (mostly)</li>
              <li>• Lighting applications</li>
              <li>• Xenon compounds</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Industrial Processes */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Major Industrial Processes
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Metal Extraction
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Iron and Steel Production
                </h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• Blast furnace process</li>
                  <li>• Fe₂O₃ + 3CO → 2Fe + 3CO₂</li>
                  <li>• Steel making: Basic oxygen process</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Aluminum Production
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Hall-Héroult process</li>
                  <li>• Electrolysis of Al₂O₃ in cryolite</li>
                  <li>• 2Al₂O₃ → 4Al + 3O₂</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Beaker className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Chemical Manufacturing
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Sulfuric Acid Production
                </h4>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                  <li>• Contact process</li>
                  <li>• S + O₂ → SO₂</li>
                  <li>• 2SO₂ + O₂ → 2SO₃ (V₂O₅ catalyst)</li>
                  <li>• SO₃ + H₂SO₄ → H₂S₂O₇</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Ammonia Synthesis
                </h4>
                <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                  <li>• Haber-Bosch process</li>
                  <li>• N₂ + 3H₂ ⇌ 2NH₃</li>
                  <li>• High pressure, Fe catalyst</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mineral Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Important Minerals and Their Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 p-6 dark:from-amber-800 dark:to-yellow-800">
            <div className="flex items-center gap-2 mb-3">
              <Gem className="h-6 w-6 text-amber-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Silicate Minerals
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Quartz (SiO₂)</li>
              <li>• Feldspar (KAlSi₃O₈)</li>
              <li>• Mica (complex silicates)</li>
              <li>• Clay minerals</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-red-100 to-orange-100 p-6 dark:from-red-800 dark:to-orange-800">
            <div className="flex items-center gap-2 mb-3">
              <Gem className="h-6 w-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Oxide Minerals
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Hematite (Fe₂O₃)</li>
              <li>• Magnetite (Fe₃O₄)</li>
              <li>• Corundum (Al₂O₃)</li>
              <li>• Rutile (TiO₂)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <div className="flex items-center gap-2 mb-3">
              <Gem className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Carbonate Minerals
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Calcite (CaCO₃)</li>
              <li>• Dolomite (CaMg(CO₃)₂)</li>
              <li>• Malachite (Cu₂CO₃(OH)₂)</li>
              <li>• Limestone formation</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-teal-100 p-6 dark:from-green-800 dark:to-teal-800">
            <div className="flex items-center gap-2 mb-3">
              <Gem className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Sulfide Minerals
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Pyrite (FeS₂)</li>
              <li>• Galena (PbS)</li>
              <li>• Sphalerite (ZnS)</li>
              <li>• Chalcopyrite (CuFeS₂)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <div className="flex items-center gap-2 mb-3">
              <Gem className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Halide Minerals
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Halite (NaCl)</li>
              <li>• Fluorite (CaF₂)</li>
              <li>• Sylvite (KCl)</li>
              <li>• Cryolite (Na₃AlF₆)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 p-6 dark:from-indigo-800 dark:to-blue-800">
            <div className="flex items-center gap-2 mb-3">
              <Gem className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Sulfate Minerals
              </h3>
            </div>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Gypsum (CaSO₄·2H₂O)</li>
              <li>• Anhydrite (CaSO₄)</li>
              <li>• Barite (BaSO₄)</li>
              <li>• Celestite (SrSO₄)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Synthetic Methods */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Common Synthetic Methods
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Heat</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Thermal Methods
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Calcination</li>
                <li>• Roasting</li>
                <li>• Sintering</li>
                <li>• Pyrolysis</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H₂O</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Aqueous Methods
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Precipitation</li>
                <li>• Crystallization</li>
                <li>• Hydrothermal</li>
                <li>• Sol-gel</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">e⁻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Electrochemical
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• Electrolysis</li>
                <li>• Electroplating</li>
                <li>• Anodization</li>
                <li>• Electrowinning</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Gas</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Gas Phase
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                <li>• CVD</li>
                <li>• Sublimation</li>
                <li>• Vapor transport</li>
                <li>• Plasma methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Systematic Study of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}