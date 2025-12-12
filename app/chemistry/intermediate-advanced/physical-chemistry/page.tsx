"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Zap, Thermometer, Atom, BarChart3 } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import TopicCard from "@/components/chemistry/TopicCard";
import ConceptGrid from "@/components/chemistry/ConceptGrid";
import { 
  PHYSICAL_CHEMISTRY_TOPICS, 
  FUNDAMENTAL_CONCEPTS, 
  APPLICATIONS 
} from "@/lib/chemistry/physical-chemistry-data";

// Breadcrumb items for physical chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Physical Chemistry", href: "/chemistry/intermediate-advanced/physical-chemistry" }
];

export default function PhysicalChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-purple-600 sm:text-5xl md:text-6xl">
          Physical Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the physical properties and behavior of molecules, the forces acting between them, 
          and how chemical reactions occur through the lens of physics and mathematics.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Physical Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-transparent dark:from-red-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Physical Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <BarChart3 className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Physics Behind Chemistry
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Physical chemistry applies the principles of physics and mathematics to understand 
              chemical phenomena. It bridges the gap between chemistry and physics, providing 
              quantitative insights into molecular behavior and chemical processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-lg dark:from-yellow-800 dark:to-orange-800">
              <Zap className="h-8 w-8 text-yellow-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Chemical Kinetics
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Study of reaction rates and the factors that influence them.
              </p>
              <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                <li>• Rate laws and mechanisms</li>
                <li>• Activation energy</li>
                <li>• Catalysis</li>
                <li>• Temperature effects</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800">
              <Thermometer className="h-8 w-8 text-red-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Thermodynamics
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Energy changes and spontaneity in chemical processes.
              </p>
              <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                <li>• Enthalpy and entropy</li>
                <li>• Gibbs free energy</li>
                <li>• Chemical equilibrium</li>
                <li>• Phase transitions</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <Atom className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Quantum Chemistry
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Quantum mechanical description of chemical bonding and structure.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Wave functions</li>
                <li>• Molecular orbitals</li>
                <li>• Spectroscopy</li>
                <li>• Electronic structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Physical Chemistry Topics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-transparent dark:from-red-600 dark:to-purple-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Physical Chemistry Topics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PHYSICAL_CHEMISTRY_TOPICS.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>
      </div>

      {/* Fundamental Concepts */}
      <ConceptGrid 
        title="Fundamental Concepts"
        concepts={FUNDAMENTAL_CONCEPTS}
        isColorful={isColorful}
        titleGradient="bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-transparent dark:from-red-600 dark:to-purple-600"
      />

      {/* Applications */}
      <ConceptGrid 
        title="Applications of Physical Chemistry"
        concepts={APPLICATIONS}
        isColorful={isColorful}
        titleGradient="bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-transparent dark:from-red-600 dark:to-purple-600"
      />

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-red-200 to-purple-200 p-8 text-center dark:from-red-600 dark:to-purple-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Physical Chemistry Topics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into the quantitative aspects of chemistry and discover how 
          physics principles explain chemical phenomena at the molecular level.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/chemistry/intermediate-advanced/physical-chemistry/chemical-kinetics"
            className="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-yellow-700"
          >
            Chemical Kinetics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/physical-chemistry/chemical-thermodynamics"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            Thermodynamics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/physical-chemistry/quantum-chemistry"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Quantum Chemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Where Physics Meets Chemistry
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}