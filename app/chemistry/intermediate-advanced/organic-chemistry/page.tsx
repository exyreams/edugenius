"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Layers, Hexagon, Beaker, Dna } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import TopicCard from "@/components/chemistry/TopicCard";
import ConceptGrid from "@/components/chemistry/ConceptGrid";
import { 
  ORGANIC_CHEMISTRY_TOPICS, 
  FUNDAMENTAL_CONCEPTS, 
  APPLICATIONS 
} from "@/lib/chemistry/organic-chemistry-data";

// Breadcrumb items for organic chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Organic Chemistry", href: "/chemistry/intermediate-advanced/organic-chemistry" }
];

export default function OrganicChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-blue-600 sm:text-5xl md:text-6xl">
          Organic Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemistry of carbon compounds and their fascinating structures, reactions, and mechanisms. 
          Discover the molecular basis of life and synthetic organic materials.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Organic Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Organic Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Dna className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Chemistry of Carbon Compounds
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Organic chemistry is the study of carbon-containing compounds and their properties, 
              structures, composition, reactions, and synthesis. It forms the molecular foundation 
              of all living organisms and countless synthetic materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <Hexagon className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Functional Groups
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Specific arrangements of atoms that determine chemical behavior.
              </p>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Alcohols and phenols</li>
                <li>• Aldehydes and ketones</li>
                <li>• Carboxylic acids and esters</li>
                <li>• Amines and amides</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <Layers className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Molecular Structure
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Three-dimensional arrangements and their impact on properties.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Stereochemistry</li>
                <li>• Conformational analysis</li>
                <li>• Chirality and optical activity</li>
                <li>• Molecular recognition</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <Beaker className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Reaction Mechanisms
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Step-by-step pathways showing how reactions occur.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Nucleophilic substitution</li>
                <li>• Electrophilic addition</li>
                <li>• Radical reactions</li>
                <li>• Pericyclic reactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Chemistry Topics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Key Organic Chemistry Topics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {ORGANIC_CHEMISTRY_TOPICS.map((topic, index) => (
            <TopicCard key={index} {...topic} />
          ))}
        </div>
      </div>

      {/* Fundamental Concepts */}
      <ConceptGrid 
        title="Fundamental Concepts"
        concepts={FUNDAMENTAL_CONCEPTS}
        isColorful={isColorful}
        titleGradient="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
      />

      {/* Applications */}
      <ConceptGrid 
        title="Applications of Organic Chemistry"
        concepts={APPLICATIONS}
        isColorful={isColorful}
        titleGradient="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
      />

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-blue-200 p-8 text-center dark:from-green-600 dark:to-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Organic Chemistry Topics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into specific areas of organic chemistry to master the 
          fascinating world of carbon compounds and their transformations.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/functional-groups"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Functional Groups
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/reactions-and-mechanisms"
            className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700"
          >
            Reactions & Mechanisms
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Molecular Foundation of Life
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}