"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Leaf, Zap, Atom, Hexagon } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import CarbohydrateCard from "@/components/chemistry/CarbohydrateCard";
import MetabolismCard from "@/components/chemistry/MetabolismCard";
import PolysaccharideSection from "@/components/chemistry/PolysaccharideSection";
import FunctionCard from "@/components/chemistry/FunctionCard";
import SectionHeader from "@/components/chemistry/SectionHeader";
import { 
  CARBOHYDRATE_CLASSIFICATIONS, 
  POLYSACCHARIDE_SECTIONS, 
  METABOLISM_PROCESSES,
  CARBOHYDRATE_FUNCTIONS 
} from "@/lib/chemistry/carbohydrateData";

// Breadcrumb items for carbohydrates
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Biochemistry", href: "/chemistry/intermediate-advanced/biochemistry" },
  { label: "Carbohydrates", href: "/chemistry/intermediate-advanced/biochemistry/carbohydrates" }
];

export default function Carbohydrates() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-emerald-600 sm:text-5xl md:text-6xl">
          Carbohydrates
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the energy sources and structural components of life. From simple sugars 
          to complex polysaccharides, discover how carbohydrates fuel biological processes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What are Carbohydrates */}
      <div className="mt-16">
        <SectionHeader title="What are Carbohydrates?" isColorful={isColorful} />
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Leaf className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Energy Molecules of Life
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Carbohydrates are organic compounds composed of carbon, hydrogen, and oxygen, 
              typically in the ratio (CH₂O)ₙ. They serve as primary energy sources and 
              structural components in living organisms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CARBOHYDRATE_FUNCTIONS.map((func, index) => (
              <FunctionCard
                key={index}
                title={func.title}
                description={func.description}
                bgColor={func.bgColor}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Classification of Carbohydrates */}
      <div className="mt-16">
        <SectionHeader title="Classification of Carbohydrates" isColorful={isColorful} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CARBOHYDRATE_CLASSIFICATIONS.map((classification, index) => (
            <CarbohydrateCard
              key={index}
              title={classification.title}
              description={classification.description}
              icon={classification.icon === "Hexagon" ? Hexagon : classification.icon === "Atom" ? Atom : Zap}
              iconColor={classification.iconColor}
              examples={classification.examples}
              features={classification.features}
            />
          ))}
        </div>
      </div>

      {/* Important Polysaccharides */}
      <div className="mt-16">
        <SectionHeader title="Important Polysaccharides" isColorful={isColorful} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {POLYSACCHARIDE_SECTIONS.map((section, index) => (
            <PolysaccharideSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>

      {/* Carbohydrate Metabolism */}
      <div className="mt-16">
        <SectionHeader title="Carbohydrate Metabolism" isColorful={isColorful} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {METABOLISM_PROCESSES.map((process, index) => (
            <MetabolismCard
              key={index}
              title={process.title}
              description={process.description}
              icon={process.icon === "Zap" ? Zap : Leaf}
              iconColor={process.iconColor}
              sections={process.sections}
            />
          ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-8 text-center dark:from-green-600 dark:to-emerald-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Biochemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master carbohydrate structure and metabolism, then explore other biomolecules 
          to understand the complete picture of biochemical processes.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/lipids"
            className="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-yellow-700"
          >
            Lipids
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/amino-acids-and-proteins"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            Proteins
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Fuel of Life
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}