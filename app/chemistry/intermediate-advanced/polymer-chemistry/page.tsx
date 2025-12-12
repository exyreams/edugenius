"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Layers, Atom, Zap, Dna } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import TopicCard from "@/components/chemistry/TopicCard";
import ConceptGrid from "@/components/chemistry/ConceptGrid";
import { 
  POLYMER_CHEMISTRY_TOPICS, 
  FUNDAMENTAL_CONCEPTS, 
  APPLICATIONS 
} from "@/lib/chemistry/polymer-chemistry-data";

// Breadcrumb items for polymer chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Polymer Chemistry", href: "/chemistry/intermediate-advanced/polymer-chemistry" }
];

export default function PolymerChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-pink-600 sm:text-5xl md:text-6xl">
          Polymer Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fascinating world of macromolecules, from synthesis mechanisms to structure-property 
          relationships that define modern materials science.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Polymer Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Polymer Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Dna className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Science of Macromolecules
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Polymer chemistry is the study of large molecules composed of repeating structural units 
              connected by covalent bonds. It encompasses synthesis, characterization, and understanding 
              of structure-property relationships in macromolecular systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <Layers className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Polymer Structure
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Understanding how molecular architecture affects material properties.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Linear and branched chains</li>
                <li>• Cross-linked networks</li>
                <li>• Crystalline vs amorphous</li>
                <li>• Molecular weight distribution</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg dark:from-pink-800 dark:to-rose-800">
              <Atom className="h-8 w-8 text-pink-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Polymerization
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Mechanisms by which small molecules combine to form polymers.
              </p>
              <ul className="text-sm text-pink-800 dark:text-pink-200 space-y-1">
                <li>• Addition polymerization</li>
                <li>• Condensation polymerization</li>
                <li>• Ring-opening polymerization</li>
                <li>• Living polymerization</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <Zap className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Material Properties
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                How polymer structure translates to mechanical and thermal behavior.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Glass transition temperature</li>
                <li>• Mechanical strength</li>
                <li>• Thermal stability</li>
                <li>• Electrical properties</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Polymer Chemistry Topics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Polymer Chemistry Topics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {POLYMER_CHEMISTRY_TOPICS.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>
      </div>

      {/* Fundamental Concepts */}
      <ConceptGrid 
        title="Fundamental Concepts"
        concepts={FUNDAMENTAL_CONCEPTS}
        isColorful={isColorful}
        titleGradient="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
      />

      {/* Applications */}
      <ConceptGrid 
        title="Applications of Polymer Chemistry"
        concepts={APPLICATIONS}
        isColorful={isColorful}
        titleGradient="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
      />

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 p-8 text-center dark:from-purple-600 dark:to-pink-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Polymer Chemistry Topics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into specific areas of polymer chemistry to master the 
          science of macromolecules and their applications in modern technology.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/chemistry/intermediate-advanced/polymer-chemistry/polymer-structures-and-properties"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Structures & Properties
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/polymer-chemistry/polymer-synthesis"
            className="inline-flex items-center rounded-lg bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-pink-700"
          >
            Polymer Synthesis
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Building the Materials of Tomorrow
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}