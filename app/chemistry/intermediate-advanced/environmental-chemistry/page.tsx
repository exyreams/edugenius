"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Cloud, Droplets, Leaf, Globe } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import EnvironmentalCompartmentCard from "@/components/chemistry/EnvironmentalCompartmentCard";
import EnvironmentalIssueCard from "@/components/chemistry/EnvironmentalIssueCard";
import BiogeochemicalCycleCard from "@/components/chemistry/BiogeochemicalCycleCard";
import { useGradientHeading } from "@/hooks/useGradientHeading";
import { 
  ENVIRONMENTAL_COMPARTMENTS, 
  ENVIRONMENTAL_ISSUES, 
  BIOGEOCHEMICAL_CYCLES 
} from "@/lib/chemistry/environmentalData";

// Breadcrumb items for environmental chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Environmental Chemistry", href: "/chemistry/intermediate-advanced/environmental-chemistry" }
];

export default function EnvironmentalChemistry() {
  const [isColorful, setIsColorful] = useState(true);
  const headingClass = useGradientHeading({ isColorful });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-emerald-600 sm:text-5xl md:text-6xl">
          Environmental Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemical processes occurring in air, water, and soil environments. 
          Understand how human activities impact natural chemical cycles and ecosystem health.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Environmental Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Environmental Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Globe className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Chemistry of Natural Systems
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Environmental chemistry studies chemical processes in air, water, and soil. 
              It examines how pollutants move through the environment and their effects on 
              living organisms and ecosystems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <Cloud className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Atmospheric Chemistry
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Chemical reactions in the atmosphere affecting air quality and climate.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Ozone formation and depletion</li>
                <li>• Greenhouse gas cycles</li>
                <li>• Acid rain formation</li>
                <li>• Photochemical smog</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-lg dark:from-cyan-800 dark:to-blue-800">
              <Droplets className="h-8 w-8 text-cyan-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Aquatic Chemistry
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Chemical processes in natural waters and water treatment systems.
              </p>
              <ul className="text-sm text-cyan-800 dark:text-cyan-200 space-y-1">
                <li>• Water quality parameters</li>
                <li>• Nutrient cycling</li>
                <li>• Pollutant transport</li>
                <li>• Acid-base equilibria</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <Leaf className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Soil Chemistry
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Chemical interactions between soil components and contaminants.
              </p>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Soil pH and buffering</li>
                <li>• Heavy metal mobility</li>
                <li>• Organic matter decomposition</li>
                <li>• Pesticide fate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Chemistry Topics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Environmental Chemistry Topics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href="/chemistry/intermediate-advanced/environmental-chemistry/atmospheric-chemistry"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="h-8 w-8 text-blue-500 group-hover:text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Atmospheric Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Study chemical processes in Earth's atmosphere, including pollution formation, 
              ozone chemistry, and climate-related reactions.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Stratospheric ozone chemistry</li>
                <li>• Tropospheric pollution</li>
                <li>• Greenhouse gas effects</li>
                <li>• Acid rain formation</li>
                <li>• Photochemical smog</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
              <span className="text-sm font-medium">Explore Atmospheric Chemistry</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/environmental-chemistry/water-chemistry"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="h-8 w-8 text-cyan-500 group-hover:text-cyan-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Water Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Examine chemical processes in natural waters, water treatment, and 
              aquatic pollution control systems.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Water quality parameters</li>
                <li>• Dissolved oxygen dynamics</li>
                <li>• Nutrient cycling (N, P)</li>
                <li>• Heavy metal speciation</li>
                <li>• Water treatment chemistry</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-cyan-600 group-hover:text-cyan-700">
              <span className="text-sm font-medium">Explore Water Chemistry</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Environmental Issues and Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Major Environmental Issues
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-orange-100 p-6 dark:from-red-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Climate Change
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• CO₂ and greenhouse gases</li>
              <li>• Carbon cycle disruption</li>
              <li>• Ocean acidification</li>
              <li>• Methane emissions</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Ozone Depletion
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• CFCs and halons</li>
              <li>• Stratospheric chemistry</li>
              <li>• UV radiation effects</li>
              <li>• Montreal Protocol</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Air Pollution
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Particulate matter (PM2.5, PM10)</li>
              <li>• NOₓ and SOₓ emissions</li>
              <li>• Photochemical smog</li>
              <li>• Indoor air quality</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Water Pollution
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Eutrophication</li>
              <li>• Heavy metal contamination</li>
              <li>• Organic pollutants</li>
              <li>• Microplastics</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Soil Contamination
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Pesticide residues</li>
              <li>• Heavy metal accumulation</li>
              <li>• Soil acidification</li>
              <li>• Remediation strategies</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 p-6 dark:from-indigo-800 dark:to-purple-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Persistent Pollutants
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• POPs (Persistent Organic Pollutants)</li>
              <li>• Bioaccumulation</li>
              <li>• Food chain magnification</li>
              <li>• Stockholm Convention</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chemical Cycles */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Biogeochemical Cycles
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Carbon Cycle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Movement of carbon through atmosphere, biosphere, hydrosphere, and geosphere
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Nitrogen Cycle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Transformation of nitrogen compounds through fixation, nitrification, and denitrification
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Phosphorus Cycle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Cycling of phosphorus through rocks, soil, water, and living organisms
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Sulfur Cycle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Movement of sulfur through atmosphere, lithosphere, and biosphere
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-8 text-center dark:from-green-600 dark:to-emerald-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Environmental Chemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into specific environmental systems to understand how chemistry 
          shapes our planet's air and water quality.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/environmental-chemistry/atmospheric-chemistry"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Atmospheric Chemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/environmental-chemistry/water-chemistry"
            className="inline-flex items-center rounded-lg bg-cyan-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-cyan-700"
          >
            Water Chemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Chemistry for a Sustainable Future
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}