"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, WavesIcon, Thermometer, Gauge, Beaker } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import GasLawCard from "@/components/chemistry/GasLawCard";
import PracticeProblems from "@/components/chemistry/PracticeProblems";
import SectionHeader from "@/components/chemistry/SectionHeader";
import { BreadcrumbItem, GasLawCardProps } from "@/components/chemistry/types";

// Static data - moved outside component for better performance
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Foundational", href: "/chemistry/foundational" },
  { label: "Gases", href: "/chemistry/foundational/gases-and-their-properties" }
];

const GAS_PROPERTIES = [
  {
    icon: Gauge,
    title: "Pressure (P)",
    description: "Force exerted by gas molecules per unit area.",
    iconColor: "text-blue-500",
    units: "atm, mmHg, Pa, torr",
    stp: "1 atm = 760 mmHg",
    bgColor: "bg-blue-50 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-200"
  },
  {
    icon: Beaker,
    title: "Volume (V)",
    description: "Space occupied by gas molecules.",
    iconColor: "text-green-500",
    units: "L, mL, m³",
    stp: "22.4 L/mol",
    bgColor: "bg-green-50 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-200"
  },
  {
    icon: Thermometer,
    title: "Temperature (T)",
    description: "Average kinetic energy of gas molecules.",
    iconColor: "text-red-500",
    units: "K (Kelvin)",
    stp: "273.15 K (0°C)",
    bgColor: "bg-red-50 dark:bg-red-900",
    textColor: "text-red-800 dark:text-red-200"
  },
  {
    icon: WavesIcon,
    title: "Amount (n)",
    description: "Number of gas molecules present.",
    iconColor: "text-purple-500",
    units: "moles (mol)",
    stp: "6.022 × 10²³",
    bgColor: "bg-purple-50 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-200"
  }
] as const;

const GAS_LAWS_DATA: GasLawCardProps[] = [
  {
    title: "Boyle's Law",
    description: "At constant temperature and amount, pressure and volume are inversely proportional.",
    formula: "P₁V₁ = P₂V₂",
    conditions: "(T and n constant)",
    example: {
      problem: "A gas at 2.0 atm and 5.0 L is compressed to 2.5 L. What is the new pressure?",
      solution: "P₂ = P₁V₁/V₂ = (2.0 atm)(5.0 L)/(2.5 L) = 4.0 atm"
    },
    gradientColors: {
      from: "from-blue-100",
      to: "to-cyan-100",
      darkFrom: "dark:from-blue-800",
      darkTo: "dark:to-cyan-800"
    }
  },
  {
    title: "Charles's Law",
    description: "At constant pressure and amount, volume and temperature are directly proportional.",
    formula: "V₁/T₁ = V₂/T₂",
    conditions: "(P and n constant)",
    example: {
      problem: "A gas at 300 K occupies 2.0 L. What volume at 450 K?",
      solution: "V₂ = V₁T₂/T₁ = (2.0 L)(450 K)/(300 K) = 3.0 L"
    },
    gradientColors: {
      from: "from-red-100",
      to: "to-orange-100",
      darkFrom: "dark:from-red-800",
      darkTo: "dark:to-orange-800"
    }
  },
  {
    title: "Gay-Lussac's Law",
    description: "At constant volume and amount, pressure and temperature are directly proportional.",
    formula: "P₁/T₁ = P₂/T₂",
    conditions: "(V and n constant)",
    example: {
      problem: "Gas pressure is 1.5 atm at 300 K. What pressure at 400 K?",
      solution: "P₂ = P₁T₂/T₁ = (1.5 atm)(400 K)/(300 K) = 2.0 atm"
    },
    gradientColors: {
      from: "from-green-100",
      to: "to-emerald-100",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-emerald-800"
    }
  },
  {
    title: "Avogadro's Law",
    description: "At constant temperature and pressure, volume and amount are directly proportional.",
    formula: "V₁/n₁ = V₂/n₂",
    conditions: "(T and P constant)",
    example: {
      problem: "2.0 mol gas occupies 44.8 L. Volume of 3.0 mol?",
      solution: "V₂ = V₁n₂/n₁ = (44.8 L)(3.0 mol)/(2.0 mol) = 67.2 L"
    },
    gradientColors: {
      from: "from-purple-100",
      to: "to-violet-100",
      darkFrom: "dark:from-purple-800",
      darkTo: "dark:to-violet-800"
    }
  }
];

const PRACTICE_PROBLEMS = [
  {
    title: "Problem 1: Ideal Gas Law",
    problem: "What volume does 2.5 mol of gas occupy at 1.2 atm and 300 K?",
    solution: [
      "Using PV = nRT",
      "V = nRT/P",
      "V = (2.5 mol)(0.0821 L·atm/mol·K)(300 K)/(1.2 atm)",
      "V = 51.3 L"
    ]
  },
  {
    title: "Problem 2: Combined Gas Law",
    problem: "A gas at 2.0 atm, 5.0 L, and 300 K is changed to 1.5 atm and 400 K. Find the new volume.",
    solution: [
      "Using P₁V₁/T₁ = P₂V₂/T₂",
      "V₂ = P₁V₁T₂/(P₂T₁)",
      "V₂ = (2.0 atm)(5.0 L)(400 K)/[(1.5 atm)(300 K)]",
      "V₂ = 8.9 L"
    ]
  }
];

export default function GasesAndTheirProperties() {
  const [isColorful, setIsColorful] = useState(true);

  // Memoize the color toggle handler to prevent unnecessary re-renders
  const handleColorToggle = useCallback((value: boolean) => {
    setIsColorful(value);
  }, []);

  // Memoize gas properties to prevent recreation on every render
  const gasPropertiesCards = useMemo(() => 
    GAS_PROPERTIES.map((property, index) => (
      <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <div className="flex items-center gap-3 mb-4">
          <property.icon className={`h-8 w-8 ${property.iconColor}`} />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {property.title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          {property.description}
        </p>
        <div className={`${property.bgColor} p-3 rounded`}>
          <p className={`text-sm ${property.textColor}`}>
            <strong>Units:</strong> {property.units}
          </p>
          <p className={`text-sm ${property.textColor}`}>
            <strong>STP:</strong> {property.stp}
          </p>
        </div>
      </div>
    )), []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-sky-700 to-cyan-700 bg-clip-text text-4xl font-bold text-transparent dark:from-sky-600 dark:to-cyan-600 sm:text-5xl md:text-6xl">
          Gases and Their Properties
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the behavior of gases and the mathematical relationships that govern them. 
          Master gas laws, kinetic molecular theory, and real-world applications.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={handleColorToggle} initialState={true} />

      {/* Gas Properties Section */}
      <div className="mt-16">
        <SectionHeader 
          title="Properties of Gases" 
          isColorful={isColorful}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {gasPropertiesCards}
        </div>
      </div>

      {/* Gas Laws Section */}
      <div className="mt-16">
        <SectionHeader 
          title="Gas Laws" 
          isColorful={isColorful}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {GAS_LAWS_DATA.map((gasLaw, index) => (
            <GasLawCard key={index} {...gasLaw} />
          ))}
        </div>
      </div>

      {/* Combined Gas Law & Ideal Gas Law */}
      <div className="mt-16">
        <SectionHeader 
          title="Combined & Ideal Gas Laws" 
          isColorful={isColorful}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              Combined Gas Law
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Combines Boyle's, Charles's, and Gay-Lussac's laws
            </p>
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded dark:from-indigo-800 dark:to-purple-800">
              <p className="font-mono text-2xl text-center text-indigo-800 dark:text-indigo-200 mb-3">
                P₁V₁/T₁ = P₂V₂/T₂
              </p>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 text-center">
                (n constant)
              </p>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded dark:bg-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Use when:</strong> P, V, and T all change, but amount stays constant
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              Ideal Gas Law
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              The master equation for ideal gases
            </p>
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded dark:from-yellow-800 dark:to-orange-800">
              <p className="font-mono text-2xl text-center text-yellow-800 dark:text-yellow-200 mb-3">
                PV = nRT
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 text-center">
                R = 0.0821 L·atm/(mol·K)
              </p>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded dark:bg-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Use when:</strong> Any gas law calculation involving all four variables
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Molecular Theory */}
      <div className="mt-16">
        <SectionHeader 
          title="Kinetic Molecular Theory" 
          isColorful={isColorful}
        />
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            Explains gas behavior based on molecular motion
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Key Assumptions:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-gray-600 dark:text-gray-300">Gas particles are in constant, random motion</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-gray-600 dark:text-gray-300">Gas particles have negligible volume</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-gray-600 dark:text-gray-300">No intermolecular forces between particles</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-gray-600 dark:text-gray-300">Collisions are perfectly elastic</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <span className="text-gray-600 dark:text-gray-300">Average kinetic energy ∝ temperature</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Consequences:
              </h3>
              <div className="space-y-3">
                <div className="bg-cyan-50 p-3 rounded dark:bg-cyan-900">
                  <p className="text-cyan-800 dark:text-cyan-200 font-semibold">Pressure</p>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300">
                    Results from collisions with container walls
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded dark:bg-blue-900">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold">Temperature</p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Measure of average kinetic energy
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded dark:bg-indigo-900">
                  <p className="text-indigo-800 dark:text-indigo-200 font-semibold">Diffusion</p>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    Lighter gases move faster at same temperature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Problems */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-sky-700 to-cyan-700 bg-clip-text text-transparent dark:from-sky-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Practice Problems
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Problem 1: Ideal Gas Law
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              What volume does 2.5 mol of gas occupy at 1.2 atm and 300 K?
            </p>
            <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                Show Solution
              </summary>
              <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                <p>Using PV = nRT</p>
                <p>V = nRT/P</p>
                <p>V = (2.5 mol)(0.0821 L·atm/mol·K)(300 K)/(1.2 atm)</p>
                <p>V = 51.3 L</p>
              </div>
            </details>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Problem 2: Combined Gas Law
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A gas at 2.0 atm, 5.0 L, and 300 K is changed to 1.5 atm and 400 K. Find the new volume.
            </p>
            <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                Show Solution
              </summary>
              <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
                <p>Using P₁V₁/T₁ = P₂V₂/T₂</p>
                <p>V₂ = P₁V₁T₂/(P₂T₁)</p>
                <p>V₂ = (2.0 atm)(5.0 L)(400 K)/[(1.5 atm)(300 K)]</p>
                <p>V₂ = 8.9 L</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-sky-200 to-cyan-200 p-8 text-center dark:from-sky-600 dark:to-cyan-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Your Chemistry Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master gas laws and properties, then explore other foundational topics 
          to build a comprehensive understanding of chemical principles.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/thermochemistry"
            className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-700"
          >
            Thermochemistry
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/foundational/introduction-to-chemistry"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Chemistry Basics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Understanding Gas Behavior
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}