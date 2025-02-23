"use client";

import Link from "next/link";
import {
  ChevronRight,
  Crosshair,
  FunctionSquare,
  Infinity,
  Shapes,
  TrendingUp,
} from "lucide-react";
import { TbMathMax, TbMathSin } from "react-icons/tb";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @typedef {Object} Concepts
 * @property {string} id - Unique identifier for the concepts.
 * @property {string} name - Name of the concepts.
 * @property {JSX.Element} icon - Icon representing the concepts.
 * @property {string} description - Short description of the concepts.
 * @property {string} gradient - Tailwind CSS gradient classes for the card background.
 * @property {string} text - Tailwind CSS text color classes.
 */

/**
 * @type {differentialTopics[]}
 * @description Array of concepts objects, each representing a differential calculus concept.
 */
const differentialTopics = [
  {
    id: "basic-derivative-rules",
    name: "Derivative Rules",
    icon: (
      <FunctionSquare className="h-6 w-6 text-purple-400 dark:text-purple-300" />
    ),
    description: "Master foundational differentiation techniques",
    gradient:
      "from-purple-200 to-indigo-200 dark:from-purple-600 dark:to-indigo-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "criterion-of-first-and-second-derivative",
    name: "Criterion Of First And Second Derivative",
    icon: <Crosshair className="h-6 w-6 text-blue-400 dark:text-blue-300" />,
    description: "Analyze functions using derivative criteria",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "exponential-functions",
    name: "Exponential Functions",
    icon: <TrendingUp className="h-6 w-6 text-rose-400 dark:text-rose-300" />,
    description: "Differentiate exponential growth functions",
    gradient:
      "from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "hyperbolic-functions",
    name: "Hyperbolics",
    icon: (
      <Infinity className="h-6 w-6 text-emerald-400 dark:text-emerald-300" />
    ),
    description: "Work with sinh, cosh, and related functions",
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "inverse-hyperbolic-functions",
    name: "Inverse Hyperbolics",
    icon: <Shapes className="h-6 w-6 text-amber-400 dark:text-amber-300" />,
    description: "Derivatives of inverse hyperbolic relations",
    gradient:
      "from-amber-200 to-yellow-200 dark:from-amber-600 dark:to-yellow-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "inverse-trigonometric-functions",
    name: "Inverse Trig",
    icon: <TbMathSin className="h-6 w-6 text-pink-400 dark:text-pink-300" />,
    description: "Differentiate arcsin, arctan, and counterparts",
    gradient: "from-pink-200 to-red-200 dark:from-pink-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "logarithmic-functions",
    name: "Logarithms",
    icon: <TbMathMax className="h-6 w-6 text-sky-400 dark:text-sky-300" />,
    description: "Master logarithmic differentiation",
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-limits",
    name: "Limit Properties",
    icon: <Infinity className="h-6 w-6 text-lime-400 dark:text-lime-300" />,
    description: "Essential limit laws and behaviors",
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-trigonometric-limits",
    name: "Trig Limits",
    icon: (
      <TbMathSin className="h-6 w-6 text-violet-400 dark:text-violet-300" />
    ),
    description: "Special trigonometric limit properties",
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "trigonometric-functions",
    name: "Trig Derivatives",
    icon: <TbMathSin className="h-6 w-6 text-cyan-400 dark:text-cyan-300" />,
    description: "Differentiate sine, cosine, and related functions",
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
  },
];

/**
 * @component DifferentialCalculusConcepts
 * @description Renders the main page for Differential Calculus Concepts.
 * @returns {JSX.Element} The Differential Calculus Concepts page.
 */
export default function DifferentialCalculus() {
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
      label: "Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus",
    },
    {
      label: "Differential Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus/differential",
    },
  ];

  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or a glassmorphism style.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Differential Calculus
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          The mathematics of change - master rates of change and slopes of
          curves through fundamental principles and advanced techniques
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Concepts Topics Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {differentialTopics.map((differential) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/calculus/differential/${differential.id}`}
            key={differential.id}
            className={`group relative overflow-hidden rounded-2xl  p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
              isColorful
                ? `bg-gradient-to-br ${differential.gradient} ${differential.text}`
                : "glass text-gray-800 dark:text-white"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}
                >
                  {differential.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold ${isColorful ? "currentcolor" : "text-gray-800 dark:text-white"}`}
                >
                  {differential.name}
                </h3>
              </div>
              <p
                className={`text-sm leading-6  ${isColorful ? "text-gray-600 dark:text-gray-200" : "text-gray-700 dark:text-gray-300"}`}
              >
                {differential.description}
              </p>
              <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span
                  className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white/80" : "text-gray-800 dark:text-white"}`}
                >
                  Explore Concepts
                </span>
                <ChevronRight
                  className={`h-5 w-5  transition-transform group-hover:translate-x-1 ${isColorful ? "text-gray-700 dark:text-white/80" : "text-gray-800 dark:text-white"}`}
                />
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
          Language of Change and Motion
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
