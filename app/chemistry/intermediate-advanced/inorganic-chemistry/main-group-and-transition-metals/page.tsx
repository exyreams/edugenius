"use client";

import { useState } from "react";
import { Atom, Zap, Magnet, Palette } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for main group and transition metals
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Inorganic Chemistry", href: "/chemistry/intermediate-advanced/inorganic-chemistry" },
  { label: "Main Group & Transition Metals", href: "/chemistry/intermediate-advanced/inorganic-chemistry/main-group-and-transition-metals" }
];

export default function MainGroupAndTransitionMetals() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-pink-600 sm:text-5xl md:text-6xl">
          Main Group & Transition Metals
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Compare and contrast the chemistry of main group elements with transition metals, 
          exploring their unique electronic structures, properties, and applications.
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
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Metal Chemistry
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Atom className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Two Distinct Classes of Metals
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The periodic table contains two major classes of metals with distinctly different 
              properties: main group metals (s and p block) and transition metals (d block). 
              Understanding their differences is key to predicting their chemical behavior.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Main Group Metals
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                s-block and some p-block elements with simple electronic structures.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Groups 1, 2, and some Group 13-15</li>
                <li>• Simple electron configurations</li>
                <li>• Predictable oxidation states</li>
                <li>• Generally colorless compounds</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg dark:from-purple-800 dark:to-pink-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Transition Metals
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                d-block elements with partially filled d orbitals.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Groups 3-12 (d-block)</li>
                <li>• Complex electron configurations</li>
                <li>• Variable oxidation states</li>
                <li>• Often colored compounds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Electronic Configurations */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Electronic Configurations
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Main Group Metals
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Group 1 (Alkali Metals)
                </h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• Li: [He] 2s¹</li>
                  <li>• Na: [Ne] 3s¹</li>
                  <li>• K: [Ar] 4s¹</li>
                  <li>• Single valence electron</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Group 2 (Alkaline Earth)
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Be: [He] 2s²</li>
                  <li>• Mg: [Ne] 3s²</li>
                  <li>• Ca: [Ar] 4s²</li>
                  <li>• Two valence electrons</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Atom className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Transition Metals
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  First Transition Series
                </h4>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                  <li>• Sc: [Ar] 3d¹ 4s²</li>
                  <li>• Ti: [Ar] 3d² 4s²</li>
                  <li>• Fe: [Ar] 3d⁶ 4s²</li>
                  <li>• Partially filled d orbitals</li>
                </ul>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 p-4 rounded">
                <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">
                  Electron Configuration Anomalies
                </h4>
                <ul className="text-pink-700 dark:text-pink-300 text-sm space-y-1">
                  <li>• Cr: [Ar] 3d⁵ 4s¹ (not 3d⁴ 4s²)</li>
                  <li>• Cu: [Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²)</li>
                  <li>• Stability of half-filled/filled d</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oxidation States */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Oxidation States
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Main Group Predictability
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li><strong>Group 1:</strong> Always +1</li>
              <li><strong>Group 2:</strong> Always +2</li>
              <li><strong>Group 13:</strong> Usually +3</li>
              <li><strong>Predictable</strong> based on valence electrons</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Transition Metal Variability
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li><strong>Iron:</strong> +2, +3, +6</li>
              <li><strong>Chromium:</strong> +2, +3, +6</li>
              <li><strong>Manganese:</strong> +2, +3, +4, +6, +7</li>
              <li><strong>Multiple</strong> stable oxidation states</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Stability Factors
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 text-sm">
              <li><strong>d⁰, d⁵, d¹⁰:</strong> Extra stable</li>
              <li><strong>Ligand field:</strong> Affects stability</li>
              <li><strong>Size effects:</strong> Higher oxidation states</li>
              <li><strong>Electronegativity:</strong> Of bonding partner</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Physical Properties Comparison */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Physical Properties Comparison
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Property</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Main Group Metals</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Transition Metals</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-300">
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 font-medium">Density</td>
                  <td className="py-3 px-4">Generally lower</td>
                  <td className="py-3 px-4">Generally higher</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 font-medium">Melting Point</td>
                  <td className="py-3 px-4">Variable, often lower</td>
                  <td className="py-3 px-4">Generally higher</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 font-medium">Hardness</td>
                  <td className="py-3 px-4">Often soft (Group 1)</td>
                  <td className="py-3 px-4">Generally harder</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 font-medium">Electrical Conductivity</td>
                  <td className="py-3 px-4">Good conductors</td>
                  <td className="py-3 px-4">Excellent conductors</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-3 px-4 font-medium">Magnetic Properties</td>
                  <td className="py-3 px-4">Usually diamagnetic</td>
                  <td className="py-3 px-4">Often paramagnetic/ferromagnetic</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Color</td>
                  <td className="py-3 px-4">Silvery/white metals</td>
                  <td className="py-3 px-4">Various colors possible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Unique Properties */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Unique Properties of Transition Metals
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-6">
            <Palette className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Colored Compounds
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              d-d electronic transitions create vibrant colors in compounds and solutions
            </p>
          </div>
          
          <div className="text-center p-6">
            <Magnet className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Magnetic Properties
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Unpaired d electrons lead to paramagnetic and ferromagnetic behavior
            </p>
          </div>
          
          <div className="text-center p-6">
            <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Catalytic Activity
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Variable oxidation states and d orbitals make excellent catalysts
            </p>
          </div>
          
          <div className="text-center p-6">
            <Atom className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Complex Formation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Readily form coordination compounds with ligands
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Applications and Uses
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Main Group Metal Applications
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Alkali Metals</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Batteries (Li), street lighting (Na), fertilizers (K)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Alkaline Earth</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Construction (Ca), lightweight alloys (Mg), X-ray contrast (Ba)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">Group 13</h4>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Packaging and construction (Al), semiconductors (Ga, In)
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Transition Metal Applications
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">Structural Materials</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Steel (Fe), aerospace alloys (Ti), corrosion resistance (Cr, Ni)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">Catalysis</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Petroleum refining (Pt, Pd), automotive catalysts (Rh)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">Electronics</h4>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Electrical contacts (Au, Ag), magnetic storage (Fe, Co, Ni)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organometallic Chemistry Preview */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Organometallic Chemistry
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              The intersection of organic and inorganic chemistry, where metals form bonds with carbon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded dark:from-yellow-800 dark:to-orange-800">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Main Group Organometallics
              </h3>
              <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>• Grignard reagents (RMgX)</li>
                <li>• Organolithium compounds</li>
                <li>• Organoaluminum compounds</li>
                <li>• Highly reactive, ionic character</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-teal-100 p-4 rounded dark:from-green-800 dark:to-teal-800">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Transition Metal Organometallics
              </h3>
              <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>• Metal carbonyls [Ni(CO)₄]</li>
                <li>• Metallocenes [Fe(C₅H₅)₂]</li>
                <li>• Olefin complexes</li>
                <li>• More covalent character</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded dark:from-blue-800 dark:to-indigo-800">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Applications
              </h3>
              <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-1">
                <li>• Homogeneous catalysis</li>
                <li>• Organic synthesis</li>
                <li>• Materials science</li>
                <li>• Pharmaceutical industry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Bridging the Periodic Table
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}