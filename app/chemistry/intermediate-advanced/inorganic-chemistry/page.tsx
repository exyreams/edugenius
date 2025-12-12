"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Atom, Zap, Layers, Hexagon } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for inorganic chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Inorganic Chemistry", href: "/chemistry/intermediate-advanced/inorganic-chemistry" }
];

export default function InorganicChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-600 dark:to-purple-600 sm:text-5xl md:text-6xl">
          Inorganic Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemistry of elements and compounds that typically do not contain carbon-hydrogen bonds. 
          Study metals, minerals, salts, and their fascinating properties and reactions.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Inorganic Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent dark:from-indigo-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Inorganic Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Atom className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Chemistry of Elements and Minerals
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Inorganic chemistry deals with the properties and behavior of inorganic compounds—
              those that typically do not contain carbon-hydrogen bonds. This includes metals, 
              minerals, salts, acids, bases, and many industrially important materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg dark:from-blue-800 dark:to-indigo-800">
              <Zap className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Main Group Elements
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Elements in groups 1, 2, and 13-18 of the periodic table.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Alkali and alkaline earth metals</li>
                <li>• Halogens and noble gases</li>
                <li>• p-block elements</li>
                <li>• Simple ionic compounds</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <Layers className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Transition Metals
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                d-block elements with unique properties and complex chemistry.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Variable oxidation states</li>
                <li>• Colored compounds</li>
                <li>• Catalytic properties</li>
                <li>• Magnetic behavior</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <Hexagon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Coordination Compounds
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Complex ions with central metal atoms surrounded by ligands.
              </p>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Coordination geometries</li>
                <li>• Ligand field theory</li>
                <li>• Isomerism in complexes</li>
                <li>• Biological applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Inorganic Chemistry Topics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent dark:from-indigo-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Inorganic Chemistry Topics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link
            href="/chemistry/intermediate-advanced/inorganic-chemistry/coordination-chemistry"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Hexagon className="h-8 w-8 text-green-500 group-hover:text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Coordination Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Study complex ions, coordination geometries, and the bonding theories 
              that explain their properties and behavior.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Crystal field theory</li>
                <li>• Ligand field theory</li>
                <li>• Coordination geometries</li>
                <li>• Isomerism in complexes</li>
                <li>• Spectroscopic properties</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-green-600 group-hover:text-green-700">
              <span className="text-sm font-medium">Explore Coordination Chemistry</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/inorganic-chemistry/descriptive-chemistry"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Layers className="h-8 w-8 text-blue-500 group-hover:text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Descriptive Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore the systematic study of elements and their compounds, 
              including preparation methods, properties, and applications.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Periodic trends</li>
                <li>• Group chemistry</li>
                <li>• Industrial processes</li>
                <li>• Mineral chemistry</li>
                <li>• Synthetic methods</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
              <span className="text-sm font-medium">Explore Descriptive Chemistry</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/inorganic-chemistry/main-group-and-transition-metals"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Atom className="h-8 w-8 text-purple-500 group-hover:text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Main Group & Transition Metals
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Compare and contrast the chemistry of main group elements 
              with transition metals and their unique properties.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Electronic configurations</li>
                <li>• Oxidation states</li>
                <li>• Magnetic properties</li>
                <li>• Catalytic behavior</li>
                <li>• Organometallic chemistry</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-purple-600 group-hover:text-purple-700">
              <span className="text-sm font-medium">Explore Metals Chemistry</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>      {/*
 Periodic Table Trends */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent dark:from-indigo-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Periodic Trends in Inorganic Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Atomic Size
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Decreases across periods</li>
              <li>• Increases down groups</li>
              <li>• Nuclear charge effects</li>
              <li>• Shielding considerations</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Ionization Energy
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Increases across periods</li>
              <li>• Decreases down groups</li>
              <li>• Successive ionizations</li>
              <li>• Electron configuration effects</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Electronegativity
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Pauling scale</li>
              <li>• Bond polarity prediction</li>
              <li>• Ionic vs covalent character</li>
              <li>• Chemical reactivity</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Metallic Character
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Decreases across periods</li>
              <li>• Increases down groups</li>
              <li>• Metal-nonmetal boundary</li>
              <li>• Metalloid properties</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Crystal Structures */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent dark:from-indigo-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Common Crystal Structures
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">NaCl</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Rock Salt Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Face-centered cubic arrangement with 6:6 coordination
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">CsCl</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Cesium Chloride Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Body-centered cubic with 8:8 coordination
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">ZnS</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Zinc Blende Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tetrahedral coordination in cubic arrangement
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">CaF₂</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Fluorite Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                8:4 coordination with cubic symmetry
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">TiO₂</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Rutile Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Octahedral coordination in tetragonal system
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">Al₂O₃</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Corundum Structure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Hexagonal close-packed oxygen with Al³⁺ in octahedral holes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent dark:from-indigo-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Industrial Applications
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Catalysis
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Transition metal catalysts</li>
              <li>• Heterogeneous catalysis</li>
              <li>• Zeolite frameworks</li>
              <li>• Industrial processes</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 p-6 dark:from-cyan-800 dark:to-blue-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Electronic Materials
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Semiconductors</li>
              <li>• Superconductors</li>
              <li>• Magnetic materials</li>
              <li>• Optical devices</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-pink-100 to-red-100 p-6 dark:from-pink-800 dark:to-red-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Ceramics & Refractories
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• High-temperature materials</li>
              <li>• Structural ceramics</li>
              <li>• Protective coatings</li>
              <li>• Thermal barriers</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-teal-100 p-6 dark:from-green-800 dark:to-teal-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Pigments & Dyes
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Transition metal colors</li>
              <li>• Inorganic pigments</li>
              <li>• UV-stable colorants</li>
              <li>• Specialty coatings</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-violet-100 to-purple-100 p-6 dark:from-violet-800 dark:to-purple-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Energy Storage
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Battery materials</li>
              <li>• Fuel cell components</li>
              <li>• Hydrogen storage</li>
              <li>• Solar cell materials</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 p-6 dark:from-amber-800 dark:to-yellow-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Biomedicine
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• MRI contrast agents</li>
              <li>• Anticancer drugs</li>
              <li>• Dental materials</li>
              <li>• Implant coatings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 p-8 text-center dark:from-indigo-600 dark:to-purple-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Inorganic Chemistry Topics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into specific areas of inorganic chemistry to understand the 
          fascinating world of elements, compounds, and their applications.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/inorganic-chemistry/coordination-chemistry"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Coordination Chemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/inorganic-chemistry/main-group-and-transition-metals"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Metals Chemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Foundation of Materials Science
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}