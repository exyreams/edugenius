"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Dna, Zap, Atom, Code } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for nucleic acids
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Biochemistry", href: "/chemistry/intermediate-advanced/biochemistry" },
  { label: "Nucleic Acids", href: "/chemistry/intermediate-advanced/biochemistry/nucleic-acids" }
];

export default function NucleicAcids() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-indigo-600 sm:text-5xl md:text-6xl">
          Nucleic Acids
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the information molecules of life. Discover how DNA and RNA store, 
          transmit, and express genetic information that defines all living organisms.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What are Nucleic Acids */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What are Nucleic Acids?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Dna className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Information Molecules
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Nucleic acids are large biomolecules that store and transmit genetic information. 
              They are polymers of nucleotides, each containing a nitrogenous base, 
              a five-carbon sugar, and a phosphate group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Information Storage
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Store genetic instructions for development and function
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Information Transfer
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Transmit genetic information from DNA to proteins
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Catalysis
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Some RNAs act as enzymes (ribozymes) in cellular processes
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Regulation
              </h4>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                Control gene expression and cellular processes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nucleotide Structure */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Nucleotide Structure
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Atom className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Building Blocks
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each nucleotide consists of three components: a nitrogenous base, 
              a pentose sugar, and one or more phosphate groups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-blue-50 p-6 rounded-lg dark:bg-blue-900">
              <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                Nitrogenous Bases
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Purines (2 rings):</p>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Adenine (A)</li>
                    <li>• Guanine (G)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Pyrimidines (1 ring):</p>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Cytosine (C)</li>
                    <li>• Thymine (T) - DNA only</li>
                    <li>• Uracil (U) - RNA only</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg dark:bg-green-900">
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
                Pentose Sugars
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 mb-1">Ribose (RNA):</p>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• OH groups on 2' and 3' carbons</li>
                    <li>• Less stable than deoxyribose</li>
                    <li>• Allows RNA flexibility</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200 mb-1">Deoxyribose (DNA):</p>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• H on 2' carbon (no OH)</li>
                    <li>• More stable structure</li>
                    <li>• Suitable for long-term storage</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg dark:bg-purple-900">
              <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                Phosphate Groups
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-200 mb-1">Functions:</p>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Link nucleotides together</li>
                    <li>• Create sugar-phosphate backbone</li>
                    <li>• Provide negative charge</li>
                    <li>• Enable energy storage (ATP)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-purple-800 dark:text-purple-200 mb-1">Bonds:</p>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 5' to 3' phosphodiester bonds</li>
                    <li>• Directional polymer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DNA vs RNA */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          DNA vs RNA
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Dna className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                DNA (Deoxyribonucleic Acid)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The stable repository of genetic information in most organisms.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
                <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">Structure:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Double-stranded helix</li>
                  <li>• Antiparallel strands</li>
                  <li>• Deoxyribose sugar</li>
                  <li>• A, T, G, C bases</li>
                  <li>• A-T and G-C base pairs</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded dark:bg-cyan-900">
                <p className="text-cyan-800 dark:text-cyan-200 font-semibold mb-2">Functions:</p>
                <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
                  <li>• Long-term information storage</li>
                  <li>• Template for replication</li>
                  <li>• Template for transcription</li>
                  <li>• Hereditary material</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                RNA (Ribonucleic Acid)
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Versatile molecules involved in gene expression and regulation.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded dark:bg-green-900">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-2">Structure:</p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Usually single-stranded</li>
                  <li>• Can form secondary structures</li>
                  <li>• Ribose sugar</li>
                  <li>• A, U, G, C bases</li>
                  <li>• A-U and G-C base pairs</li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-4 rounded dark:bg-emerald-900">
                <p className="text-emerald-800 dark:text-emerald-200 font-semibold mb-2">Types & Functions:</p>
                <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-1">
                  <li>• mRNA: protein synthesis template</li>
                  <li>• tRNA: amino acid transport</li>
                  <li>• rRNA: ribosome component</li>
                  <li>• miRNA: gene regulation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central Dogma */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Central Dogma
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Information Flow: DNA → RNA → Protein
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The central dogma describes the flow of genetic information from DNA to RNA to proteins, 
              the fundamental process that governs gene expression in all living organisms.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
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
              <Code className="h-12 w-12 text-green-500 mx-auto mb-3" />
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
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800 text-center">
              <Zap className="h-12 w-12 text-purple-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Protein</h4>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                Functional molecules
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-900">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Transcription (DNA → RNA)
              </h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• RNA polymerase reads DNA template</li>
                <li>• Complementary RNA strand synthesized</li>
                <li>• mRNA processing in eukaryotes</li>
                <li>• Various RNA types produced</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg dark:bg-green-900">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Translation (RNA → Protein)
              </h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Ribosomes read mRNA codons</li>
                <li>• tRNA brings amino acids</li>
                <li>• Peptide bonds form</li>
                <li>• Protein folding occurs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-200 p-8 text-center dark:from-blue-600 dark:to-indigo-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Biochemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master nucleic acid structure and function, then explore other biomolecules 
          to understand the complete picture of biochemical processes.
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
            href="/chemistry/intermediate-advanced/biochemistry/carbohydrates"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Carbohydrates
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Blueprint of Life
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}