"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Heart, Zap, Atom, Grid3X3 } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for amino acids and proteins
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Biochemistry", href: "/chemistry/intermediate-advanced/biochemistry" },
  { label: "Amino Acids & Proteins", href: "/chemistry/intermediate-advanced/biochemistry/amino-acids-and-proteins" }
];

export default function AminoAcidsAndProteins() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-pink-600 sm:text-5xl md:text-6xl">
          Amino Acids & Proteins
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Discover the building blocks of life. Learn how 20 amino acids combine 
          to create the incredible diversity of proteins that drive biological processes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Amino Acids Overview */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent dark:from-red-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The 20 Standard Amino Acids
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Atom className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Building Blocks of Proteins
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              All amino acids share a common structure with an amino group, carboxyl group, 
              and a unique side chain (R group) that determines their properties and function.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Nonpolar (Hydrophobic)
              </h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Glycine (Gly, G)</li>
                <li>• Alanine (Ala, A)</li>
                <li>• Valine (Val, V)</li>
                <li>• Leucine (Leu, L)</li>
                <li>• Isoleucine (Ile, I)</li>
                <li>• Methionine (Met, M)</li>
                <li>• Phenylalanine (Phe, F)</li>
                <li>• Tryptophan (Trp, W)</li>
                <li>• Proline (Pro, P)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Polar (Hydrophilic)
              </h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Serine (Ser, S)</li>
                <li>• Threonine (Thr, T)</li>
                <li>• Cysteine (Cys, C)</li>
                <li>• Tyrosine (Tyr, Y)</li>
                <li>• Asparagine (Asn, N)</li>
                <li>• Glutamine (Gln, Q)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Acidic (Negative)
              </h4>
              <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                <li>• Aspartic acid (Asp, D)</li>
                <li>• Glutamic acid (Glu, E)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg dark:from-purple-800 dark:to-violet-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Basic (Positive)
              </h4>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Lysine (Lys, K)</li>
                <li>• Arginine (Arg, R)</li>
                <li>• Histidine (His, H)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Protein Structure Levels */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent dark:from-red-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Levels of Protein Structure
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1°</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Primary Structure
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The linear sequence of amino acids connected by peptide bonds.
            </p>
            <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
              <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">Key Features:</p>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Covalent peptide bonds (amide bonds)</li>
                <li>• N-terminus to C-terminus direction</li>
                <li>• Determines all higher-order structure</li>
                <li>• Unique for each protein</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2°</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Secondary Structure
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Local folding patterns stabilized by hydrogen bonds in the backbone.
            </p>
            <div className="bg-green-50 p-4 rounded dark:bg-green-900">
              <p className="text-green-800 dark:text-green-200 font-semibold mb-2">Common Types:</p>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• α-helix (right-handed spiral)</li>
                <li>• β-sheet (extended strands)</li>
                <li>• β-turn (reverse direction)</li>
                <li>• Random coil (no regular pattern)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3°</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Tertiary Structure
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Overall 3D shape of a single polypeptide chain.
            </p>
            <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
              <p className="text-purple-800 dark:text-purple-200 font-semibold mb-2">Stabilizing Forces:</p>
              <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Hydrogen bonds</li>
                <li>• Disulfide bonds (covalent)</li>
                <li>• Hydrophobic interactions</li>
                <li>• Electrostatic interactions</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">4°</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Quaternary Structure
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Assembly of multiple polypeptide subunits into a functional complex.
            </p>
            <div className="bg-orange-50 p-4 rounded dark:bg-orange-900">
              <p className="text-orange-800 dark:text-orange-200 font-semibold mb-2">Examples:</p>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Hemoglobin (4 subunits)</li>
                <li>• Immunoglobulins (4 subunits)</li>
                <li>• Collagen (3 subunits)</li>
                <li>• Many enzymes (multiple subunits)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Protein Functions */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-pink-700 bg-clip-text text-transparent dark:from-red-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Protein Functions
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-6 w-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Catalytic (Enzymes)
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
              Accelerate biochemical reactions by lowering activation energy.
            </p>
            <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Pepsin (protein digestion)</li>
              <li>• Catalase (H₂O₂ breakdown)</li>
              <li>• DNA polymerase (DNA synthesis)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <div className="flex items-center gap-3 mb-3">
              <Grid3X3 className="h-6 w-6 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Structural
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
              Provide mechanical support and shape to cells and tissues.
            </p>
            <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
              <li>• Collagen (connective tissue)</li>
              <li>• Keratin (hair, nails)</li>
              <li>• Elastin (elastic fibers)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="h-6 w-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Transport
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
              Carry molecules and ions throughout the body.
            </p>
            <ul className="text-xs text-purple-800 dark:text-purple-200 space-y-1">
              <li>• Hemoglobin (oxygen transport)</li>
              <li>• Albumin (fatty acid transport)</li>
              <li>• Transferrin (iron transport)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Defense (Immune)
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
              Protect against pathogens and foreign substances.
            </p>
            <ul className="text-xs text-red-800 dark:text-red-200 space-y-1">
              <li>• Antibodies (immunoglobulins)</li>
              <li>• Complement proteins</li>
              <li>• Lysozyme (antimicrobial)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Regulatory
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
              Control biological processes and maintain homeostasis.
            </p>
            <ul className="text-xs text-yellow-800 dark:text-yellow-200 space-y-1">
              <li>• Insulin (glucose regulation)</li>
              <li>• Growth hormone</li>
              <li>• Transcription factors</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 p-6 dark:from-indigo-800 dark:to-blue-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Storage
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
              Store amino acids and other important molecules.
            </p>
            <ul className="text-xs text-indigo-800 dark:text-indigo-200 space-y-1">
              <li>• Ovalbumin (egg white protein)</li>
              <li>• Casein (milk protein)</li>
              <li>• Ferritin (iron storage)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-red-200 to-pink-200 p-8 text-center dark:from-red-600 dark:to-pink-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Exploring Biochemistry
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master protein structure and function, then explore other biomolecules 
          to understand the complete picture of biochemical processes.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/biochemistry/nucleic-acids"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Nucleic Acids
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
          The Workhorses of Life
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}