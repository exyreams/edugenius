"use client";

import Link from "next/link";
import {
  Binary,
  ChevronRight,
  Divide,
  FunctionSquare,
  Grid,
  Percent,
  Shapes,
  Triangle,
  Waves,
  Zap,
} from "lucide-react";
import { TbMathIntegrals, TbMathIntegralX } from "react-icons/tb";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * @typedef {Object} Topic
 * @property {string} id - Unique identifier for the topic.
 * @property {string} name - Name of the topic.
 * @property {Function} icon - React component for the topic icon.
 * @property {string} gradient - Tailwind CSS classes for the background gradient.
 * @property {string} text - Tailwind CSS class for text color.
 * @property {string} description - Short description of the topic.
 */

/**
 * @type {Topic[]}
 * @description Array of intermediate and advanced mathematics topics.
 */
const intermediateAdvancedTopics = [
  {
    id: "algebra",
    name: "Algebra",
    icon: FunctionSquare,
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Equations, polynomials, and algebraic structures",
  },
  {
    id: "calculus",
    name: "Calculus",
    icon: TbMathIntegrals,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Derivatives, integrals, and mathematical analysis",
  },
  {
    id: "differential-equations",
    name: "Differential Equations",
    icon: Divide,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Solving equations with derivatives",
  },
  {
    id: "discrete-math",
    name: "Discrete Mathematics",
    icon: Binary,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Logic, sets, and graph theory fundamentals",
  },
  {
    id: "fourier",
    name: "Fourier Series",
    icon: Waves,
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description: "Frequency analysis and waveform decomposition",
  },
  {
    id: "geometry",
    name: "Geometry",
    icon: Shapes,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Shapes, angles, and spatial relationships",
  },
  {
    id: "laplace",
    name: "Laplace Transform",
    icon: TbMathIntegralX,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Integral transforms for system analysis",
  },
  {
    id: "linear-algebra",
    name: "Linear Algebra",
    icon: Grid,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Vectors, matrices, and linear transformations",
  },
  {
    id: "probability-statistics",
    name: "Probability & Statistics",
    icon: Percent,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Data analysis and probabilistic models",
  },
  {
    id: "trigonometry",
    name: "Trigonometry",
    icon: Triangle,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Triangles, circles, and periodic functions",
  },
  {
    id: "z-transform",
    name: "Z-Transform",
    icon: Zap,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Discrete-time signal processing tool",
  },
];
/**
 * @returns {JSX.Element} - "Coming Soon" tag component.
 */
const ComingSoonTag = () => (
  <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-xs font-semibold text-black">
    Coming Soon
  </span>
);

/**
 * @function IntermediateAdvanced
 * @description Component for displaying Intermediate and Advanced Mathematics topics.
 * @returns {JSX.Element} The IntermediateAdvanced component.
 */
export default function IntermediateAdvanced() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Intermediate & Advanced Concepts
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Delve into more complex mathematical topics, exploring advanced
          theories and applications.
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Topic Grid */}
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {intermediateAdvancedTopics.map((topic) => {
            const Icon = topic.icon;
            const isComingSoon = !["algebra", "calculus"].includes(topic.id);
            return (
              //  Wrapper div for hover effects
              <div
                key={topic.id}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                  isColorful
                    ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                    : "glass text-gray-800 dark:text-white"
                }`}
              >
                  <Link
                    href={`/mathematics/concepts/intermediate-advanced/${topic.id}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-lg p-2 ${
                            isColorful
                              ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/25`
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              isColorful
                                ? "text-current"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          />
                        </div>
                        <h4 className={`font-medium ${topic.text}`}>
                          {topic.name}
                        </h4>
                      </div>
                      <p
                        className={`text-sm leading-6 ${
                          isColorful
                            ? "text-gray-600 dark:text-gray-200"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {topic.description}
                      </p>
                      {/* "Explore Now" and Chevron */}
                      <div
                        className={`mt-2 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100`}
                      >
                        <span
                          className={`text-sm font-medium text-gray-700 dark:text-white/80`}
                        >
                          Explore Now
                        </span>
                        <ChevronRight
                          className={`h-4 w-4 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80`}
                        />
                      </div>
                    </div>
                    {/* Animated background element */}
                    <div
                      className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                        isColorful
                          ? "bg-black/5 dark:bg-white/10"
                          : "bg-gray-300/50 dark:bg-gray-700/50"
                      }`}
                    />
                  </Link>
                
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Advanced Mathematical Explorations
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}
