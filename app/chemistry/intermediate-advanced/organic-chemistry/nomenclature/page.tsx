"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, Hash, Tag, List } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for nomenclature
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Organic Chemistry", href: "/chemistry/intermediate-advanced/organic-chemistry" },
  { label: "Nomenclature", href: "/chemistry/intermediate-advanced/organic-chemistry/nomenclature" }
];

export default function Nomenclature() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-indigo-600 sm:text-5xl md:text-6xl">
          Nomenclature
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the systematic naming of organic compounds using IUPAC rules. 
          Learn to communicate precisely in the universal language of chemistry.
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
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          IUPAC Nomenclature System
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <BookOpen className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Universal Language of Chemistry
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The International Union of Pure and Applied Chemistry (IUPAC) provides systematic 
              rules for naming organic compounds, ensuring clear and unambiguous communication 
              among chemists worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg dark:from-purple-800 dark:to-indigo-800">
              <Hash className="h-8 w-8 text-purple-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Systematic Rules
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Consistent, logical approach to naming all organic compounds.
              </p>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Find the longest carbon chain</li>
                <li>• Identify functional groups</li>
                <li>• Number from appropriate end</li>
                <li>• Apply priority rules</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <Tag className="h-8 w-8 text-blue-500 mb-3" />
              <h4 className="text-xl font-semibent text-gray-800 dark:text-white mb-3">
                Functional Group Priority
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Hierarchy determines which group gets the suffix.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Carboxylic acids (highest)</li>
                <li>• Aldehydes and ketones</li>
                <li>• Alcohols and amines</li>
                <li>• Alkenes and alkynes (lowest)</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <List className="h-8 w-8 text-green-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Stereochemical Descriptors
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Specify three-dimensional arrangements of atoms.
              </p>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• R/S for chiral centers</li>
                <li>• E/Z for double bonds</li>
                <li>• cis/trans for simple cases</li>
                <li>• Conformational descriptors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Naming Steps */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Basic Naming Steps
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Find Parent Chain
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Identify the longest continuous carbon chain containing the highest priority functional group
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Number the Chain
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Number from the end that gives the principal functional group the lowest number
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Identify Substituents
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Name and locate all substituents (alkyl groups, halogens, etc.)
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Assemble Name
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Combine parts: substituents (alphabetical) + parent + suffix
            </p>
          </div>
        </div>
      </div>

      {/* Alkane Nomenclature */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Alkane Nomenclature
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Parent Chain Names
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₁</span>
                  <span className="text-gray-800 dark:text-white font-mono">meth-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₂</span>
                  <span className="text-gray-800 dark:text-white font-mono">eth-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₃</span>
                  <span className="text-gray-800 dark:text-white font-mono">prop-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₄</span>
                  <span className="text-gray-800 dark:text-white font-mono">but-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₅</span>
                  <span className="text-gray-800 dark:text-white font-mono">pent-</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₆</span>
                  <span className="text-gray-800 dark:text-white font-mono">hex-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₇</span>
                  <span className="text-gray-800 dark:text-white font-mono">hept-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₈</span>
                  <span className="text-gray-800 dark:text-white font-mono">oct-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₉</span>
                  <span className="text-gray-800 dark:text-white font-mono">non-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">C₁₀</span>
                  <span className="text-gray-800 dark:text-white font-mono">dec-</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Common Alkyl Groups
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-mono text-gray-800 dark:text-white">CH₃-</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">methyl</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-mono text-gray-800 dark:text-white">CH₃CH₂-</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">ethyl</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-mono text-gray-800 dark:text-white">CH₃CH₂CH₂-</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">propyl (n-propyl)</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-mono text-gray-800 dark:text-white">(CH₃)₂CH-</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">isopropyl</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-mono text-gray-800 dark:text-white">(CH₃)₃C-</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">tert-butyl</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Functional Group Suffixes */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Functional Group Suffixes
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Highest Priority
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Carboxylic acid</span>
                <span className="font-mono text-red-700 dark:text-red-300">-oic acid</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Ester</span>
                <span className="font-mono text-red-700 dark:text-red-300">-oate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Amide</span>
                <span className="font-mono text-red-700 dark:text-red-300">-amide</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Nitrile</span>
                <span className="font-mono text-red-700 dark:text-red-300">-nitrile</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Medium Priority
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Aldehyde</span>
                <span className="font-mono text-orange-700 dark:text-orange-300">-al</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Ketone</span>
                <span className="font-mono text-orange-700 dark:text-orange-300">-one</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Alcohol</span>
                <span className="font-mono text-orange-700 dark:text-orange-300">-ol</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Amine</span>
                <span className="font-mono text-orange-700 dark:text-orange-300">-amine</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Lower Priority
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Alkene</span>
                <span className="font-mono text-green-700 dark:text-green-300">-ene</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Alkyne</span>
                <span className="font-mono text-green-700 dark:text-green-300">-yne</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Alkane</span>
                <span className="font-mono text-green-700 dark:text-green-300">-ane</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-200">Ether</span>
                <span className="font-mono text-green-700 dark:text-green-300">-oxy-</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Naming Examples */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Naming Examples
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Simple Examples
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-mono text-lg text-gray-800 dark:text-white mb-2">
                  CH₃CH₂CH₂CH₃
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  butane
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  4-carbon chain, no functional groups
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-mono text-lg text-gray-800 dark:text-white mb-2">
                  CH₃CH(CH₃)CH₂CH₃
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  2-methylbutane
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  4-carbon chain with methyl substituent at position 2
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-mono text-lg text-gray-800 dark:text-white mb-2">
                  CH₃CH₂CH₂OH
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  1-propanol
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  3-carbon chain with alcohol at position 1
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Complex Examples
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-mono text-lg text-gray-800 dark:text-white mb-2">
                  CH₃CH(OH)CH(CH₃)CH₂COOH
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  4-hydroxy-3-methylpentanoic acid
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Carboxylic acid takes priority, alcohol becomes hydroxy-
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-mono text-lg text-gray-800 dark:text-white mb-2">
                  CH₃CH₂COCH₂CH₃
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  3-pentanone
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  5-carbon chain with ketone at position 3
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="font-mono text-lg text-gray-800 dark:text-white mb-2">
                  CH₃CH=CHCH₂CH₃
                </div>
                <div className="text-purple-600 dark:text-purple-400 font-semibold">
                  2-pentene
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  5-carbon chain with double bond starting at position 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stereochemical Descriptors */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Stereochemical Descriptors
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              R/S Configuration
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Used for chiral centers (asymmetric carbons).
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-semibold text-gray-800 dark:text-white">
                  (R)-2-butanol
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  R configuration at chiral center
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-semibold text-gray-800 dark:text-white">
                  (S)-2-butanol
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  S configuration at chiral center
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              E/Z Configuration
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Used for double bond geometry (replaces cis/trans).
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-semibold text-gray-800 dark:text-white">
                  (E)-2-butene
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Higher priority groups on opposite sides
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                <div className="font-semibold text-gray-800 dark:text-white">
                  (Z)-2-butene
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Higher priority groups on same side
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Naming Mistakes */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-indigo-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Common Naming Mistakes
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              ❌ Common Errors
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li>• Not finding the longest carbon chain</li>
              <li>• Numbering from the wrong end</li>
              <li>• Ignoring functional group priority</li>
              <li>• Incorrect alphabetical ordering</li>
              <li>• Missing stereochemical descriptors</li>
              <li>• Using common names inappropriately</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              ✅ Best Practices
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li>• Always identify the principal functional group first</li>
              <li>• Draw the structure to verify your name</li>
              <li>• Use lowest possible numbers</li>
              <li>• Include all necessary locants</li>
              <li>• Check alphabetical order of substituents</li>
              <li>• Add stereochemical descriptors when needed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-8 text-center dark:from-purple-600 dark:to-indigo-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Master Chemical Nomenclature
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Systematic naming is essential for clear communication in chemistry. 
          Practice with various compound types to build confidence.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/functional-groups"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Functional Groups
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry/isomers"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700"
          >
            Isomers
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Precision in Chemical Communication
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}