"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Microscope, Zap, Radio, Sun } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for spectroscopy
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Analytical Chemistry", href: "/chemistry/intermediate-advanced/analytical-chemistry" },
  { label: "Spectroscopy", href: "/chemistry/intermediate-advanced/analytical-chemistry/spectroscopy" }
];

export default function Spectroscopy() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-violet-600 sm:text-5xl md:text-6xl">
          Spectroscopy
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the interaction of matter with electromagnetic radiation. 
          Learn how spectroscopic techniques reveal molecular structure and composition.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Electromagnetic Spectrum */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-violet-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Electromagnetic Spectrum
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Sun className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Energy and Molecular Interactions
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Different regions of the electromagnetic spectrum interact with molecules 
              in unique ways, providing information about molecular structure, bonding, 
              and electronic states.
            </p>
          </div>
          
          {/* Spectrum Visualization */}
          <div className="mb-8">
            <div className="h-8 bg-gradient-to-r from-purple-600 via-blue-500 via-green-500 via-yellow-500 via-orange-500 to-red-600 rounded-lg"></div>
            <div className="flex justify-between text-xs mt-2 text-gray-600 dark:text-gray-300">
              <span>γ-rays</span>
              <span>X-rays</span>
              <span>UV</span>
              <span>Visible</span>
              <span>IR</span>
              <span>Microwave</span>
              <span>Radio</span>
            </div>
            <div className="flex justify-between text-xs mt-1 text-gray-500 dark:text-gray-400">
              <span>High Energy</span>
              <span>Low Energy</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-4 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                UV-Visible
              </h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Electronic transitions, conjugated systems, chromophores
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-lg dark:from-red-800 dark:to-orange-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                Infrared (IR)
              </h4>
              <p className="text-sm text-red-700 dark:text-red-300">
                Vibrational modes, functional groups, molecular fingerprints
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                NMR
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Nuclear spin states, molecular structure, connectivity
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Mass Spec
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Molecular weight, fragmentation patterns, elemental composition
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UV-Visible Spectroscopy */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-violet-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          UV-Visible Spectroscopy
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="h-8 w-8 text-yellow-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Electronic Transitions
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Measures absorption of UV and visible light by electrons transitioning 
              between molecular orbitals.
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded dark:bg-yellow-900">
                <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-1">Key Concepts:</p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• π → π* transitions (conjugated systems)</li>
                  <li>• n → π* transitions (carbonyl groups)</li>
                  <li>• Charge transfer transitions</li>
                  <li>• Beer-Lambert Law: A = εbc</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Applications:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Quantitative analysis</li>
                  <li>• Kinetic studies</li>
                  <li>• Purity assessment</li>
                  <li>• Chromophore identification</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Instrumentation & Analysis
            </h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Components:
                </h4>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Light source (deuterium/tungsten lamps)</li>
                  <li>• Monochromator (wavelength selection)</li>
                  <li>• Sample compartment (cuvettes)</li>
                  <li>• Detector (photomultiplier tube)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Data Interpretation:
                </h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• λmax indicates chromophore type</li>
                  <li>• Extinction coefficient (ε) shows intensity</li>
                  <li>• Bathochromic/hypsochromic shifts</li>
                  <li>• Hyperchromic/hypochromic effects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrared Spectroscopy */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-violet-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Infrared (IR) Spectroscopy
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Zap className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Molecular Vibrations and Functional Groups
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              IR spectroscopy identifies functional groups by measuring molecular vibrations. 
              Each bond type has characteristic stretching and bending frequencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Common IR Frequencies (cm⁻¹):
              </h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded dark:bg-red-900">
                  <p className="font-semibold text-red-800 dark:text-red-200">O-H Stretch</p>
                  <p className="text-sm text-red-700 dark:text-red-300">3200-3600 cm⁻¹ (broad, alcohols/phenols)</p>
                </div>
                <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
                  <p className="font-semibold text-blue-800 dark:text-blue-200">C-H Stretch</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">2800-3000 cm⁻¹ (alkyl), 3000-3100 cm⁻¹ (aromatic)</p>
                </div>
                <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                  <p className="font-semibold text-green-800 dark:text-green-200">C=O Stretch</p>
                  <p className="text-sm text-green-700 dark:text-green-300">1650-1750 cm⁻¹ (carbonyls, varies by type)</p>
                </div>
                <div className="bg-purple-50 p-3 rounded dark:bg-purple-900">
                  <p className="font-semibold text-purple-800 dark:text-purple-200">C=C Stretch</p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">1620-1680 cm⁻¹ (alkenes, aromatics)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                IR Regions:
              </h4>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded dark:bg-orange-900">
                  <p className="font-semibold text-orange-800 dark:text-orange-200">Functional Group Region</p>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    4000-1500 cm⁻¹: Characteristic stretching frequencies
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded dark:bg-indigo-900">
                  <p className="font-semibold text-indigo-800 dark:text-indigo-200">Fingerprint Region</p>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    1500-400 cm⁻¹: Complex bending modes, unique to each molecule
                  </p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 mt-6">
                Sample Preparation:
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-50 p-2 rounded dark:bg-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>KBr Pellets:</strong> Mix sample with KBr, press into transparent disc
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded dark:bg-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>ATR:</strong> Attenuated Total Reflectance, minimal sample prep
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded dark:bg-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Solution:</strong> Dissolve in IR-transparent solvent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NMR Spectroscopy */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-violet-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Nuclear Magnetic Resonance (NMR)
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Radio className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                ¹H NMR Spectroscopy
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Provides information about hydrogen environments, connectivity, and molecular structure.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-1">Key Parameters:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• <strong>Chemical Shift (δ):</strong> Electronic environment</li>
                  <li>• <strong>Integration:</strong> Number of protons</li>
                  <li>• <strong>Multiplicity:</strong> Neighboring protons (n+1 rule)</li>
                  <li>• <strong>Coupling Constants (J):</strong> Bond relationships</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Common Chemical Shifts:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Alkyl H: 0.8-2.0 ppm</li>
                  <li>• Aromatic H: 7.0-8.0 ppm</li>
                  <li>• Aldehyde H: 9.0-10.0 ppm</li>
                  <li>• Carboxylic acid H: 10-12 ppm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                ¹³C NMR Spectroscopy
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Reveals carbon framework and functional groups through carbon chemical shifts.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-1">Advantages:</p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Shows carbon skeleton directly</li>
                  <li>• Wide chemical shift range (0-220 ppm)</li>
                  <li>• Less complex spectra (no coupling)</li>
                  <li>• Quaternary carbons visible</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Carbon Types:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Alkyl C: 10-50 ppm</li>
                  <li>• Aromatic C: 120-160 ppm</li>
                  <li>• Carbonyl C: 160-220 ppm</li>
                  <li>• Alkene C: 100-150 ppm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mass Spectrometry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-violet-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Mass Spectrometry (MS)
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Zap className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Molecular Weight and Fragmentation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mass spectrometry determines molecular weight and provides structural information 
              through characteristic fragmentation patterns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Ionization Methods
              </h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                <li>• <strong>EI:</strong> Electron Impact (70 eV)</li>
                <li>• <strong>CI:</strong> Chemical Ionization (soft)</li>
                <li>• <strong>ESI:</strong> Electrospray (biomolecules)</li>
                <li>• <strong>MALDI:</strong> Matrix-assisted (proteins)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Mass Analyzers
              </h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                <li>• <strong>Quadrupole:</strong> Mass filtering</li>
                <li>• <strong>TOF:</strong> Time-of-flight</li>
                <li>• <strong>Ion Trap:</strong> MSⁿ capability</li>
                <li>• <strong>Orbitrap:</strong> High resolution</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Applications
              </h4>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                <li>• Molecular weight determination</li>
                <li>• Structural elucidation</li>
                <li>• Quantitative analysis</li>
                <li>• Proteomics and metabolomics</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg dark:bg-gray-700">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Interpreting Mass Spectra:
            </h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Molecular Ion Peak (M⁺•):</strong> Gives molecular weight
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Base Peak:</strong> Most abundant fragment (100% intensity)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Isotope Patterns:</strong> Confirm molecular formula
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Fragment Ions:</strong> Structural information
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>McLafferty Rearrangement:</strong> Common fragmentation
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Alpha Cleavage:</strong> Next to heteroatoms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-200 to-violet-200 p-8 text-center dark:from-purple-600 dark:to-violet-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Analytical Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master spectroscopic techniques, then explore other analytical methods 
          to build comprehensive analytical chemistry expertise.
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
          Revealing Molecular Secrets Through Light
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}