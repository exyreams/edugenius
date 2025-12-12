"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Zap, RadioIcon, Atom, AlertTriangle } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for nuclear chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Nuclear Chemistry", href: "/chemistry/intermediate-advanced/nuclear-chemistry" }
];

export default function NuclearChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-4xl font-bold text-transparent dark:from-orange-600 dark:to-red-600 sm:text-5xl md:text-6xl">
          Nuclear Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemistry of atomic nuclei, radioactive decay, nuclear reactions, 
          and their applications in energy, medicine, and research.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Nuclear Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Nuclear Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Atom className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Chemistry of Atomic Nuclei
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nuclear chemistry studies the properties and reactions of atomic nuclei, 
              including radioactive decay, nuclear fission and fusion, and the applications 
              of radioactive isotopes in various fields.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4">
              <RadioIcon className="h-12 w-12 text-red-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Radioactivity
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Spontaneous decay of unstable nuclei with emission of radiation
              </p>
            </div>
            
            <div className="text-center p-4">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Nuclear Reactions
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Artificial nuclear transformations and energy release
              </p>
            </div>
            
            <div className="text-center p-4">
              <Atom className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Isotopes
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Atoms with same proton number but different neutron numbers
              </p>
            </div>
            
            <div className="text-center p-4">
              <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Applications
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Medicine, energy production, dating methods, and research
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nuclear Chemistry Topics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Nuclear Chemistry Topics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href="/chemistry/intermediate-advanced/nuclear-chemistry/radioactivity"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <RadioIcon className="h-8 w-8 text-red-500 group-hover:text-red-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Radioactivity
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Study the spontaneous decay of unstable nuclei, types of radiation, 
              decay kinetics, and radioactive decay series.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Alpha, beta, and gamma decay</li>
                <li>• Half-life and decay constants</li>
                <li>• Radioactive decay series</li>
                <li>• Detection and measurement</li>
                <li>• Biological effects of radiation</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-red-600 group-hover:text-red-700">
              <span className="text-sm font-medium">Explore Radioactivity</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/nuclear-chemistry/nuclear-reactions"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-yellow-500 group-hover:text-yellow-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Nuclear Reactions
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore artificial nuclear transformations, fission, fusion, 
              and the enormous energy changes involved in nuclear processes.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Nuclear fission and fusion</li>
                <li>• Artificial transmutation</li>
                <li>• Nuclear binding energy</li>
                <li>• Chain reactions</li>
                <li>• Nuclear reactors</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-yellow-600 group-hover:text-yellow-700">
              <span className="text-sm font-medium">Explore Nuclear Reactions</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>  
    {/* Types of Radiation */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Types of Nuclear Radiation
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Alpha (α) Radiation
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                <strong>Composition:</strong> Helium nuclei (²He⁴)
              </p>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Mass: 4 amu</li>
                <li>• Charge: +2</li>
                <li>• Low penetrating power</li>
                <li>• Stopped by paper/skin</li>
                <li>• High ionizing power</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Beta (β) Radiation
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                <strong>Composition:</strong> High-energy electrons
              </p>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Mass: ~0 amu</li>
                <li>• Charge: -1 (β⁻) or +1 (β⁺)</li>
                <li>• Moderate penetrating power</li>
                <li>• Stopped by aluminum</li>
                <li>• Moderate ionizing power</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Gamma (γ) Radiation
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
                <strong>Composition:</strong> High-energy photons
              </p>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Mass: 0 amu</li>
                <li>• Charge: 0</li>
                <li>• High penetrating power</li>
                <li>• Requires lead shielding</li>
                <li>• Low ionizing power</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nuclear Stability */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Nuclear Stability
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Factors Affecting Nuclear Stability
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Neutron-to-Proton Ratio
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Stable nuclei follow the "belt of stability" on N vs Z plot
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Magic Numbers
                  </h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    2, 8, 20, 28, 50, 82, 126 - extra stable configurations
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                    Even-Odd Effects
                  </h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Even-even nuclei are most stable, odd-odd least stable
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Binding Energy
              </h3>
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Mass-Energy Equivalence
                </h4>
                <p className="text-orange-700 dark:text-orange-300 text-sm mb-2">
                  E = mc² relates mass defect to binding energy
                </p>
                <div className="bg-orange-100 dark:bg-orange-800 p-2 rounded text-center">
                  <code className="text-orange-800 dark:text-orange-200 text-sm">
                    BE = (Δm)c²
                  </code>
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  Binding Energy per Nucleon
                </h4>
                <p className="text-red-700 dark:text-red-300 text-sm">
                  Maximum around Fe-56, explains fission and fusion energy release
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Applications of Nuclear Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Nuclear Medicine
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Diagnostic imaging (Tc-99m)</li>
              <li>• Cancer treatment (I-131)</li>
              <li>• PET scans (F-18)</li>
              <li>• Radiopharmaceuticals</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Nuclear Power
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Electricity generation</li>
              <li>• Nuclear reactors (U-235)</li>
              <li>• Breeder reactors (Pu-239)</li>
              <li>• Nuclear submarines</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Dating Methods
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Carbon-14 dating</li>
              <li>• Uranium-lead dating</li>
              <li>• Potassium-argon dating</li>
              <li>• Archaeological applications</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Industrial Applications
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Food irradiation</li>
              <li>• Sterilization</li>
              <li>• Thickness gauging</li>
              <li>• Smoke detectors (Am-241)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Research Applications
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Tracer studies</li>
              <li>• Neutron activation analysis</li>
              <li>• Nuclear physics research</li>
              <li>• Element synthesis</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Space Applications
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Radioisotope thermoelectric generators</li>
              <li>• Space probe power sources</li>
              <li>• Mars rover batteries</li>
              <li>• Deep space missions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Safety and Environmental Considerations */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Safety and Environmental Considerations
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Radiation Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Time, distance, and shielding principles for radiation safety
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Sv</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Dose Limits
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Regulatory limits for occupational and public exposure
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Waste</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Waste Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Safe storage and disposal of radioactive materials
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Mon</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Monitoring
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Detection and measurement of radioactive contamination
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-orange-200 to-red-200 p-8 text-center dark:from-orange-600 dark:to-red-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Nuclear Chemistry Topics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into the fascinating world of nuclear processes and their 
          applications in science, medicine, and technology.
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
            href="/chemistry/intermediate-advanced/nuclear-chemistry/nuclear-reactions"
            className="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-yellow-700"
          >
            Nuclear Reactions
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Harnessing the Power of the Atom
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}