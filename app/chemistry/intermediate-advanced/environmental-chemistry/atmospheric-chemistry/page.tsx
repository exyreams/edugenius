"use client";

import { useState } from "react";
import { Cloud, Wind, Sun, AlertTriangle } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import AtmosphericStructureSection from "@/components/chemistry/AtmosphericStructureSection";
import OzoneChemistrySection from "@/components/chemistry/OzoneChemistrySection";
import GreenhouseGasesSection from "@/components/chemistry/GreenhouseGasesSection";
import PhotochemicalSmogSection from "@/components/chemistry/PhotochemicalSmogSection";
import AcidRainSection from "@/components/chemistry/AcidRainSection";

// Breadcrumb items for atmospheric chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Environmental Chemistry", href: "/chemistry/intermediate-advanced/environmental-chemistry" },
  { label: "Atmospheric Chemistry", href: "/chemistry/intermediate-advanced/environmental-chemistry/atmospheric-chemistry" }
];

export default function AtmosphericChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-cyan-600 sm:text-5xl md:text-6xl">
          Atmospheric Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemical processes occurring in Earth's atmosphere, from ozone formation 
          to greenhouse gas effects and air pollution chemistry.
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
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Our Atmosphere
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Cloud className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Chemical Processes in the Sky
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Atmospheric chemistry studies the chemical composition and reactions occurring 
              in Earth's atmosphere. These processes control air quality, climate, and the 
              protective ozone layer that shields us from harmful UV radiation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4">
              <Wind className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Air Quality
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chemical reactions that form pollutants and affect human health
              </p>
            </div>
            
            <div className="text-center p-4">
              <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Photochemistry
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Light-driven reactions that create and destroy atmospheric species
              </p>
            </div>
            
            <div className="text-center p-4">
              <Cloud className="h-12 w-12 text-gray-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Climate Chemistry
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Greenhouse gases and their role in global warming
              </p>
            </div>
            
            <div className="text-center p-4">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Ozone Depletion
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Chemical destruction of the protective stratospheric ozone layer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric Structure */}
      <AtmosphericStructureSection isColorful={isColorful} />

      {/* Ozone Chemistry */}
      <OzoneChemistrySection isColorful={isColorful} />

      {/* Greenhouse Gases */}
      <GreenhouseGasesSection isColorful={isColorful} />

      {/* Photochemical Smog */}
      <PhotochemicalSmogSection isColorful={isColorful} />

      {/* Acid Rain */}
      <AcidRainSection isColorful={isColorful} />

      {/* Key Atmospheric Reactions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Atmospheric Reactions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Hydroxyl Radical Chemistry
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The OH radical is the "detergent" of the atmosphere, initiating the oxidation 
              of most atmospheric pollutants.
            </p>
            <div className="space-y-2">
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <code className="text-blue-800 dark:text-blue-200">
                  O₃ + H₂O + hν → 2OH• + O₂
                </code>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  OH radical formation
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                <code className="text-green-800 dark:text-green-200">
                  CH₄ + OH• → CH₃• + H₂O
                </code>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Methane oxidation
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Nitrogen Oxide Cycle
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              NOₓ species play crucial roles in both ozone formation and destruction 
              depending on atmospheric conditions.
            </p>
            <div className="space-y-2">
              <div className="bg-orange-50 dark:bg-orange-900 p-3 rounded">
                <code className="text-orange-800 dark:text-orange-200">
                  NO₂ + hν → NO + O
                </code>
                <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                  NO₂ photolysis
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded">
                <code className="text-purple-800 dark:text-purple-200">
                  NO + O₃ → NO₂ + O₂
                </code>
                <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                  Ozone titration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric Measurement Techniques */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Atmospheric Measurement Techniques
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Ground-Based Monitoring
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Air quality monitoring stations</li>
              <li>• FTIR spectroscopy</li>
              <li>• LIDAR systems</li>
              <li>• Chemical sensors</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Satellite Observations
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Total ozone mapping</li>
              <li>• Greenhouse gas monitoring</li>
              <li>• Aerosol optical depth</li>
              <li>• Trace gas columns</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Aircraft & Balloon Studies
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Vertical profile measurements</li>
              <li>• In-situ chemical analysis</li>
              <li>• Stratospheric sampling</li>
              <li>• Pollution plume tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Understanding the Chemistry Above Us
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}