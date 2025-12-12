"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Dna, Heart, Leaf, Zap } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for biochemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Biochemistry", href: "/chemistry/intermediate-advanced/biochemistry" }
];

export default function Biochemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-rose-600 sm:text-5xl md:text-6xl">
          Biochemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the chemical processes within and relating to living organisms. 
          Discover how molecular interactions drive the complexity of life.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Biochemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Chemistry of Life
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Dna className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Bridging Chemistry and Biology
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Biochemistry studies the chemical processes and substances that occur within 
              living organisms. It explains how molecular interactions create the 
              complexity and diversity of life at the cellular and molecular level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Molecular Structure
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Understanding how the 3D structure of biomolecules determines their function
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Metabolic Pathways
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Networks of chemical reactions that sustain life and provide energy
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Enzyme Catalysis
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                How biological catalysts accelerate reactions essential for life
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Information Transfer
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                How genetic information is stored, replicated, and expressed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Major Biomolecules */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Four Major Classes of Biomolecules
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/amino-acids-and-proteins"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-red-500 group-hover:text-red-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Proteins & Amino Acids
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The workhorses of the cell - enzymes, structural proteins, and signaling molecules.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• 20 standard amino acids</li>
                <li>• Protein structure (1°, 2°, 3°, 4°)</li>
                <li>• Enzyme kinetics and mechanisms</li>
                <li>• Protein folding and stability</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-red-600 group-hover:text-red-700">
              <span className="text-sm font-medium">Explore Proteins</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/biochemistry/carbohydrates"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-8 w-8 text-green-500 group-hover:text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Carbohydrates
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Energy sources and structural components - from simple sugars to complex polysaccharides.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Monosaccharides and stereochemistry</li>
                <li>• Glycosidic bonds and disaccharides</li>
                <li>• Polysaccharides (starch, cellulose, glycogen)</li>
                <li>• Glycolysis and carbohydrate metabolism</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-green-600 group-hover:text-green-700">
              <span className="text-sm font-medium">Explore Carbohydrates</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/biochemistry/lipids"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-yellow-500 group-hover:text-yellow-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Lipids
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Diverse molecules for energy storage, membrane structure, and signaling.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Fatty acids and triglycerides</li>
                <li>• Phospholipids and membrane structure</li>
                <li>• Steroids and cholesterol</li>
                <li>• Lipid metabolism and β-oxidation</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-yellow-600 group-hover:text-yellow-700">
              <span className="text-sm font-medium">Explore Lipids</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/biochemistry/nucleic-acids"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Dna className="h-8 w-8 text-blue-500 group-hover:text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Nucleic Acids
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The information molecules - DNA and RNA that store and express genetic information.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Key Topics:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Nucleotides and base pairing</li>
                <li>• DNA structure and replication</li>
                <li>• RNA types and functions</li>
                <li>• Transcription and translation</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
              <span className="text-sm font-medium">Explore Nucleic Acids</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Central Dogma */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Central Dogma of Molecular Biology
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Information Flow in Living Systems
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The central dogma describes how genetic information flows from DNA to RNA to proteins, 
              governing the expression of genetic traits in all living organisms.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800 text-center">
              <Dna className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">DNA</h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Genetic information storage
              </p>
            </div>
            
            <div className="flex items-center">
              <ChevronRight className="h-8 w-8 text-gray-400" />
              <span className="mx-2 text-sm text-gray-600 dark:text-gray-300">Transcription</span>
              <ChevronRight className="h-8 w-8 text-gray-400" />
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800 text-center">
              <Zap className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">RNA</h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Information transfer
              </p>
            </div>
            
            <div className="flex items-center">
              <ChevronRight className="h-8 w-8 text-gray-400" />
              <span className="mx-2 text-sm text-gray-600 dark:text-gray-300">Translation</span>
              <ChevronRight className="h-8 w-8 text-gray-400" />
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800 text-center">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Protein</h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Functional molecules
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-900">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Transcription (DNA → RNA)
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• RNA polymerase reads DNA template</li>
                <li>• Complementary RNA strand synthesized</li>
                <li>• mRNA processing (splicing, capping, polyadenylation)</li>
                <li>• mRNA exported from nucleus</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg dark:bg-green-900">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Translation (RNA → Protein)
              </h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Ribosomes read mRNA codons</li>
                <li>• tRNA brings amino acids to ribosome</li>
                <li>• Peptide bonds form between amino acids</li>
                <li>• Protein folding and post-translational modifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Metabolism Overview */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Metabolism: The Chemistry of Life
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Catabolism
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Breakdown of complex molecules to release energy and building blocks.
            </p>
            <div className="space-y-3">
              <div className="bg-orange-50 p-3 rounded dark:bg-orange-900">
                <p className="text-orange-800 dark:text-orange-200 font-semibold mb-1">Key Pathways:</p>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Glycolysis (glucose → pyruvate)</li>
                  <li>• Citric acid cycle (Krebs cycle)</li>
                  <li>• Electron transport chain</li>
                  <li>• β-oxidation of fatty acids</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Products:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• ATP (energy currency)</li>
                  <li>• NADH and FADH₂ (reducing power)</li>
                  <li>• CO₂ and H₂O (waste products)</li>
                  <li>• Metabolic intermediates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Anabolism
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Synthesis of complex molecules from simpler precursors, requiring energy input.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-1">Key Pathways:</p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Gluconeogenesis (glucose synthesis)</li>
                  <li>• Fatty acid synthesis</li>
                  <li>• Protein synthesis</li>
                  <li>• DNA and RNA synthesis</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-3 rounded dark:bg-gray-700">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">Requirements:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• ATP (energy input)</li>
                  <li>• NADPH (reducing power)</li>
                  <li>• Building blocks (amino acids, sugars)</li>
                  <li>• Enzymatic machinery</li>
                </ul>
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
              ? "bg-gradient-to-r from-red-700 to-rose-700 bg-clip-text text-transparent dark:from-red-600 dark:to-rose-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Applications of Biochemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Medicine & Healthcare
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Drug design and development</li>
              <li>• Disease diagnosis and biomarkers</li>
              <li>• Gene therapy and personalized medicine</li>
              <li>• Understanding disease mechanisms</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Biotechnology
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Recombinant protein production</li>
              <li>• Enzyme engineering and optimization</li>
              <li>• Biofuel production</li>
              <li>• Industrial biotechnology</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Agriculture & Food
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Crop improvement and GMOs</li>
              <li>• Food preservation and safety</li>
              <li>• Nutritional biochemistry</li>
              <li>• Fermentation processes</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Environmental Science
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Bioremediation and pollution cleanup</li>
              <li>• Environmental monitoring</li>
              <li>• Biodegradation pathways</li>
              <li>• Ecosystem biochemistry</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Research & Discovery
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Structural biology and crystallography</li>
              <li>• Proteomics and metabolomics</li>
              <li>• Systems biology approaches</li>
              <li>• Evolutionary biochemistry</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 p-6 dark:from-indigo-800 dark:to-blue-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Forensics & Analysis
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• DNA fingerprinting and identification</li>
              <li>• Toxicology and drug testing</li>
              <li>• Paternity testing</li>
              <li>• Archaeological biochemistry</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-red-200 to-rose-200 p-8 text-center dark:from-red-600 dark:to-rose-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Biomolecules
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into the four major classes of biomolecules to understand 
          how molecular structure determines biological function.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/amino-acids-and-proteins"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            Proteins
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/nucleic-acids"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Nucleic Acids
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Where Chemistry Meets Life
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}