"use client";

import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  DivideCircle,
  FunctionSquare,
  Puzzle,
  RefreshCw,
  Sigma,
  Triangle,
} from "lucide-react";
import { TbMathSin } from "react-icons/tb";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @typedef {Object} Concepts
 * @property {string} id - Unique identifier for the concept.
 * @property {string} name - Name of the concept.
 * @property {JSX.Element} icon - Icon representing the concept.
 * @property {string} description - Brief description of the concept.
 * @property {string} gradient - Tailwind CSS classes for the gradient background.
 * @property {string} text - Tailwind CSS classes for text color.
 */

/**
 * @type {integralTopics[]}
 * @description Array of concepts related to integral calculus, including their names, descriptions,
 * and associated icons.  Each object defines properties for rendering a card in the UI.
 */
const integralTopics = [
  {
    id: "basic-integration-rules",
    name: "Basic Integration Rules",
    icon: (
      <FunctionSquare className="h-6 w-6 text-blue-400 dark:text-blue-300" />
    ),
    description: "Foundational rules for performing integrations",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "change-of-variables",
    name: "Change of Variables",
    icon: (
      <RefreshCw className="h-6 w-6 text-purple-400 dark:text-purple-300" />
    ),
    description: "Technique of variable substitution in integration",
    gradient:
      "from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "fundamental-theorem-of-calculus",
    name: "Fundamental Theorem",
    icon: (
      <BookOpen className="h-6 w-6 text-emerald-400 dark:text-emerald-300" />
    ),
    description: "Link between differentiation and integration",
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "hyperbolic-functions",
    name: "Hyperbolic Functions",
    icon: <Sigma className="h-6 w-6 text-rose-400 dark:text-rose-300" />,
    description: "Integrating hyperbolic functions",
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integrals-that-result-in-inverse-hyperbolic-functions",
    name: "Inverse Hyperbolic Results",
    icon: <Sigma className="h-6 w-6 text-orange-400 dark:text-orange-300" />,
    description: "Integrals yielding inverse hyperbolic functions",
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integrals-that-result-in-inverse-trigonometric-functions",
    name: "Inverse Trig Results",
    icon: <Triangle className="h-6 w-6 text-indigo-400 dark:text-indigo-300" />,
    description: "Integrals yielding inverse trigonometric functions",
    gradient:
      "from-indigo-200 to-violet-200 dark:from-indigo-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integration-by-partial-fractions",
    name: "Partial Fractions",
    icon: <DivideCircle className="h-6 w-6 text-lime-400 dark:text-lime-300" />,
    description: "Integrating rational functions using fractions",
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integration-by-parts",
    name: "Integration by Parts",
    icon: <Puzzle className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />,
    description: "Method for integrating products of functions",
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integration-by-trigonometric-substitution",
    name: "Trig Substitution",
    icon: <Triangle className="h-6 w-6 text-sky-400 dark:text-sky-300" />,
    description: "Using trigonometric identities in integration",
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "trigonometric-functions",
    name: "Trig Integrals",
    icon: <TbMathSin className="h-6 w-6 text-pink-400 dark:text-pink-300" />,
    description: "Integrating trigonometric functions",
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
  },
];

/**
 * @component IntegralCalculus
 * @description Renders a page displaying a collection of integral calculus concepts.
 * Each concept is presented in a card format with its name, description, and a relevant icon.
 * The page includes a hero section, breadcrumb navigation, a color toggle, and a grid layout for the concept cards.
 * @returns {JSX.Element} The Integral Calculus Concepts page.
 */
export default function IntegralCalculus() {
  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or a glassmorphism style.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb navigation items for the page, structured for the Breadcrumb component.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus",
    },
    {
      label: "Integral Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Integral Calculus
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the art of integration with essential techniques and theorems
          that form the backbone of mathematical analysis and its applications
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      {/* Concepts Topics Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {integralTopics.map((integral) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/calculus/integral/${integral.id}`}
            key={integral.id}
            className={`group relative overflow-hidden rounded-2xl  p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
              isColorful
                ? `bg-gradient-to-br ${integral.gradient} ${integral.text}`
                : "glass"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5  backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {integral.icon}
                </div>
                <h3
                  className={`text-xl font-semibold 
                  `}
                >
                  {integral.name}
                </h3>
              </div>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                {integral.description}
              </p>
              <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                  Explore Technique
                </span>
                <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
              </div>
            </div>

            {/* Animated background element */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                isColorful ? "" : "dark:bg-white/10"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          The Art of Accumulation and Area
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
