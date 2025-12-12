"use client";

import { useState } from "react";
import { Hexagon, Zap, Palette, Magnet } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for coordination chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Inorganic Chemistry", href: "/chemistry/intermediate-advanced/inorganic-chemistry" },
  { label: "Coordination Chemistry", href: "/chemistry/intermediate-advanced/inorganic-chemistry/coordination-chemistry" }
];

export default function CoordinationChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-teal-600 sm:text-5xl md:text-6xl">
          Coordination Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fascinating world of coordination compounds, where metal centers
          are surrounded by ligands to form complex ions with unique properties and applications.
        </p>

        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Introduction */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${isColorful
            ? "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent dark:from-green-600 dark:to-teal-600"
            : "text-gray-800 dark:text-gray-200"
            }`}
        >
          Understanding Coordination Compounds
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Hexagon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Complex Ions and Their Structure
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Coordination compounds consist of a central metal atom or ion surrounded by
              molecules or ions called ligands. These compounds exhibit unique properties
              including distinctive colors, magnetic behavior, and catalytic activity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Key Components
              </h4>
              <ul className="text-gray-700 dark:text-gray-200 space-y-2">
                <li><strong>Central Metal:</strong> Usually a transition metal ion</li>
                <li><strong>Ligands:</strong> Molecules or ions that donate electron pairs</li>
                <li><strong>Coordination Number:</strong> Number of ligand atoms bonded to metal</li>
                <li><strong>Coordination Sphere:</strong> Metal and directly bonded ligands</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Common Examples
              </h4>
              <ul className="text-gray-700 dark:text-gray-200 space-y-2">
                <li><strong>[Cu(NH₃)₄]²⁺:</strong> Tetraamminecopper(II) ion</li>
                <li><strong>[Fe(CN)₆]³⁻:</strong> Hexacyanoferrate(III) ion</li>
                <li><strong>[Co(en)₃]³⁺:</strong> Tris(ethylenediamine)cobalt(III)</li>
                <li><strong>[Cr(H₂O)₆]³⁺:</strong> Hexaaquachromium(III) ion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Coordination Geometries */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${isColorful
            ? "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent dark:from-green-600 dark:to-teal-600"
            : "text-gray-800 dark:text-gray-200"
            }`}
        >
          Common Coordination Geometries
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Coordination Number 2
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                <strong>Linear Geometry</strong>
              </p>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Bond angle: 180°</li>
                <li>• Example: [Ag(NH₃)₂]⁺</li>
                <li>• Common with d¹⁰ metals</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Coordination Number 4
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                <strong>Tetrahedral & Square Planar</strong>
              </p>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Tetrahedral: [Zn(NH₃)₄]²⁺</li>
                <li>• Square planar: [PtCl₄]²⁻</li>
                <li>• Depends on d-electron count</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Coordination Number 6
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                <strong>Octahedral Geometry</strong>
              </p>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Most common geometry</li>
                <li>• Example: [Co(NH₃)₆]³⁺</li>
                <li>• 90° bond angles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Crystal Field Theory */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${isColorful
            ? "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent dark:from-green-600 dark:to-teal-600"
            : "text-gray-800 dark:text-gray-200"
            }`}
        >
          Crystal Field Theory
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Zap className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <p className="text-gray-600 dark:text-gray-300">
              Crystal Field Theory explains the electronic structure and properties of
              coordination compounds by considering the electrostatic interactions between
              the metal d-orbitals and the ligand electron pairs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Octahedral Complexes
              </h3>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  d-Orbital Splitting
                </h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• e_g orbitals: higher energy (d_z², d_x²-y²)</li>
                  <li>• t₂g orbitals: lower energy (d_xy, d_xz, d_yz)</li>
                  <li>• Crystal field splitting energy: Δ_oct</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  High-Spin vs Low-Spin
                </h4>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Weak field: high-spin configuration</li>
                  <li>• Strong field: low-spin configuration</li>
                  <li>• Depends on ligand field strength</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Tetrahedral Complexes
              </h3>
              <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  d-Orbital Splitting
                </h4>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
                  <li>• e orbitals: lower energy (d_z², d_x²-y²)</li>
                  <li>• t₂ orbitals: higher energy (d_xy, d_xz, d_yz)</li>
                  <li>• Δ_tet ≈ 4/9 × Δ_oct</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Characteristics
                </h4>
                <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                  <li>• Usually high-spin</li>
                  <li>• Weaker crystal field splitting</li>
                  <li>• Less common than octahedral</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ligand Types */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${isColorful
            ? "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent dark:from-green-600 dark:to-teal-600"
            : "text-gray-800 dark:text-gray-200"
            }`}
        >
          Types of Ligands
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Monodentate Ligands
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Ligands that bind through one donor atom
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• H₂O (aqua)</li>
              <li>• NH₃ (ammine)</li>
              <li>• Cl⁻ (chloro)</li>
              <li>• CN⁻ (cyano)</li>
              <li>• CO (carbonyl)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 p-6 dark:from-blue-800 dark:to-indigo-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Bidentate Ligands
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Ligands that bind through two donor atoms
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• en (ethylenediamine)</li>
              <li>• ox²⁻ (oxalate)</li>
              <li>• bipy (bipyridine)</li>
              <li>• acac⁻ (acetylacetonate)</li>
              <li>• phen (phenanthroline)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Polydentate Ligands
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
              Ligands that bind through multiple donor atoms
            </p>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• EDTA⁴⁻ (hexadentate)</li>
              <li>• DTPA⁵⁻ (octadentate)</li>
              <li>• Porphyrin (tetradentate)</li>
              <li>• Crown ethers</li>
              <li>• Cryptands</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Isomerism */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${isColorful
            ? "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent dark:from-green-600 dark:to-teal-600"
            : "text-gray-800 dark:text-gray-200"
            }`}
        >
          Isomerism in Coordination Compounds
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Structural Isomerism
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 text-sm">
                  Linkage Isomerism
                </h4>
                <p className="text-blue-700 dark:text-blue-300 text-xs">
                  [Co(NH₃)₅(NO₂)]²⁺ vs [Co(NH₃)₅(ONO)]²⁺
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 text-sm">
                  Coordination Isomerism
                </h4>
                <p className="text-green-700 dark:text-green-300 text-xs">
                  [Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆]
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-sm">
                  Ionization Isomerism
                </h4>
                <p className="text-purple-700 dark:text-purple-300 text-xs">
                  [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Stereoisomerism
            </h3>
            <div className="space-y-3">
              <div className="bg-orange-50 dark:bg-orange-900 p-3 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 text-sm">
                  Geometric Isomerism
                </h4>
                <p className="text-orange-700 dark:text-orange-300 text-xs">
                  cis-[PtCl₂(NH₃)₂] vs trans-[PtCl₂(NH₃)₂]
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-3 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-200 text-sm">
                  Optical Isomerism
                </h4>
                <p className="text-red-700 dark:text-red-300 text-xs">
                  Δ-[Co(en)₃]³⁺ vs Λ-[Co(en)₃]³⁺
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                  Facial/Meridional
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-xs">
                  fac-[Co(NH₃)₃Cl₃] vs mer-[Co(NH₃)₃Cl₃]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties and Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${isColorful
            ? "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent dark:from-green-600 dark:to-teal-600"
            : "text-gray-800 dark:text-gray-200"
            }`}
        >
          Properties and Applications
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center p-6">
            <Palette className="h-12 w-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Color
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              d-d transitions create vibrant colors in coordination compounds
            </p>
          </div>

          <div className="text-center p-6">
            <Magnet className="h-12 w-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Magnetism
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Paramagnetic or diamagnetic behavior based on electron configuration
            </p>
          </div>

          <div className="text-center p-6">
            <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Catalysis
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Many coordination compounds serve as efficient catalysts
            </p>
          </div>

          <div className="text-center p-6">
            <Hexagon className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Biology
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Essential in biological systems (hemoglobin, chlorophyll, enzymes)
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Art and Science of Complex Formation
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}