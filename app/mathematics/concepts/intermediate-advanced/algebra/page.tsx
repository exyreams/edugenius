"use client";

import Link from "next/link";
import {
  Binary,
  BookOpen,
  Brackets,
  ChevronRight,
  Dna,
  FunctionSquare,
  GitCompare,
  Infinity,
  PieChart,
  Rocket,
  Scale,
  Sigma,
  Sparkles,
} from "lucide-react";
import { PiBracketsSquareDuotone } from "react-icons/pi";
import { FaSquareRootVariable, FaWaveSquare } from "react-icons/fa6";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @typedef {Object} Formula
 * @property {string} id - Unique identifier for the formula.
 * @property {string} name - Name of the formula.
 * @property {JSX.Element} icon - Icon representing the formula.
 * @property {string} description - Brief description of the formula.
 * @property {string} gradient - CSS gradient class for the formula card background.
 * @property {string} text - CSS class for text color.
 */

/**
 * @type {Formula[]}
 * @description Array of formula objects, each representing an algebraic concept.
 */
const formulas = [
  {
    id: "binomial-theorem",
    name: "Binomial Theorem",
    icon: <Rocket className="h-6 w-6 text-current" />,
    description: "Expand powers of binomials with precision",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "conjugate-of-complex-number",
    name: "Complex Conjugates",
    icon: <Dna className="h-6 w-6 text-current" />,
    description: "Transform complex numbers by switching signs",
    gradient:
      "from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "factoring",
    name: "Factoring",
    icon: <FunctionSquare className="h-6 w-6 text-current" />,
    description: "Decompose expressions into simpler factors",
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "linear-equations",
    name: "Linear Equations",
    icon: <Infinity className="h-6 w-6 text-current" />,
    description: "Solve first-degree mathematical relationships",
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "modulus-and-argument-of-complex-number",
    name: "Complex Modulus & Argument",
    icon: <Brackets className="h-6 w-6 text-current" />,
    description: "Calculate magnitude and angle in complex plane",
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "operations-with-algebraic-fractions",
    name: "Algebraic Fractions",
    icon: <Sigma className="h-6 w-6 text-current" />,
    description: "Master operations with fractional expressions",
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "operations-with-polynomials",
    name: "Polynomial Operations",
    icon: <FaSquareRootVariable className="h-6 w-6 text-current" />,
    description: "Add, subtract, and multiply polynomial expressions",
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "product-formulas",
    name: "Product Formulas",
    icon: <Binary className="h-6 w-6 text-current" />,
    description: "Essential rules for multiplying expressions",
    gradient: "from-sky-200 to-cyan-200 dark:from-sky-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-complex-numbers",
    name: "Complex Number Properties",
    icon: <Scale className="h-6 w-6 text-current" />,
    description: "Explore the algebra of imaginary numbers",
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-exponents",
    name: "Exponent Properties & Rules",
    icon: <PieChart className="h-6 w-6 text-current" />,
    description: "Laws governing exponential expressions",
    gradient: "from-red-200 to-rose-200 dark:from-red-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-inequality",
    name: "Inequality Properties",
    icon: <Sparkles className="h-6 w-6 text-current" />,
    description: "Master the rules of mathematical inequalities",
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-logarithms",
    name: "Logarithmic Properties",
    icon: <PiBracketsSquareDuotone className="h-6 w-6 text-current" />,
    description: "Simplify expressions using log rules",
    gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "radical-properties",
    name: "Radical Expressions",
    icon: <FaWaveSquare className="h-6 w-6 text-current" />,
    description: "Work with roots and radical equations",
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "representations-of-complex-number",
    name: "Complex Representations",
    icon: <GitCompare className="h-6 w-6 text-current" />,
    description: "Different forms of complex number notation",
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "summary-of-series-criteria",
    name: "Series Convergence",
    icon: <BookOpen className="h-6 w-6 text-current" />,
    description: "Tests and criteria for infinite series",
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "summation-theorems",
    name: "Summation Formulas",
    icon: <Sigma className="h-6 w-6 text-current" />,
    description: "Essential theorems for series summation",
    gradient: "from-green-200 to-lime-200 dark:from-green-600 dark:to-lime-600",
    text: "text-gray-800 dark:text-white",
  },
];

/**
 * AlgebraFormulas Component
 * @returns {JSX.Element} The Algebra Formulas page.
 * @description Renders the Algebra Formulas page, displaying a list of algebraic concepts
 * with interactive cards that link to detailed formula pages.
 */
export default function AlgebraFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb navigation items.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Algebra",
      href: "/mathematics/concepts/intermediate-advanced/algebra",
    },
  ];

  /**
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State hook to manage the color mode of the component (colorful or grayscale).
   */
  const [isColorful, setIsColorful] = useState(true); // Add state for color mode

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Algebraic Foundations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the building blocks of mathematical reasoning through essential
          algebraic concepts and operations
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/algebra/${formula.id}`}
            key={formula.id}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
              isColorful
                ? `bg-gradient-to-br ${formula.gradient} ${formula.text}`
                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
            }`}
          >
            {/* Set z-index to be higher than the animated element */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4">
                {/* Formula Icon */}
                <div
                  className={`rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {formula.icon}
                </div>
                {/* Formula Name */}
                <h3
                  className={`text-xl font-semibold ${
                    isColorful
                      ? "currentcolor"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {formula.name}
                </h3>
              </div>
              {/* Formula Description */}
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                {formula.description}
              </p>
              {/* Explore Formulas Link */}
              <div className="mt-2 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                  Explore Formulas
                </span>
                <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
              </div>
            </div>

            {/* Animated background element */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                isColorful
                  ? "bg-black/5 dark:bg-white/10"
                  : "bg-gray-200/50 dark:bg-gray-700/50"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Decorative Footer */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Language of Mathematical Relationships
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
