"use client";

import Link from "next/link";
import {
  BarChart,
  Calculator,
  Divide,
  FunctionSquare,
  LayoutDashboard,
  Percent,
  Pi,
  Ruler,
  Scale,
  Shapes,
  SquareSigma,
  Variable,
} from "lucide-react";
import { MdStraight } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { TbMath } from "react-icons/tb";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

const foundationalTopics = [
  {
    id: "number-systems",
    name: "Number Systems",
    icon: LayoutDashboard,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-blue-100 to-sky-200 dark:from-blue-700 dark:to-sky-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Understanding different types of numbers.",
  },
  {
    id: "integers",
    name: "Integers",
    icon: Calculator,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-blue-100 to-sky-200 dark:from-blue-700 dark:to-sky-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Working with positive and negative numbers.",
  },
  {
    id: "fractions",
    name: "Fractions",
    icon: Divide,
    color: "text-green-500 dark:text-green-200",
    gradient: "from-green-100 to-lime-200 dark:from-green-700 dark:to-lime-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Understanding parts of a whole.",
  },
  {
    id: "decimals",
    name: "Decimals",
    icon: Pi,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient:
      "from-yellow-100 to-amber-200 dark:from-yellow-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Numbers with decimal points.",
  },
  {
    id: "percentages",
    name: "Percentages",
    icon: Percent,
    color: "text-pink-500 dark:text-pink-200",
    gradient: "from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Representing parts out of 100.",
  },
  {
    id: "ratios-proportions",
    name: "Ratios & Proportions",
    icon: Scale,
    color: "text-purple-500 dark:text-purple-200",
    gradient:
      "from-purple-100 to-indigo-200 dark:from-purple-700 dark:to-indigo-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Comparing quantities and solving for unknowns.",
  },
  {
    id: "measurement-units",
    name: "Measurement & Units",
    icon: MdStraight,
    color: "text-cyan-500 dark:text-cyan-200",
    gradient: "from-cyan-100 to-teal-200 dark:from-cyan-700 dark:to-teal-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Understanding units and how to convert them.",
  },
  {
    id: "exponents-roots",
    name: "Exponents & Roots",
    icon: SquareSigma,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-orange-200 dark:from-red-700 dark:to-orange-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Powers and square roots.",
  },
  {
    id: "variables-expressions",
    name: "Variables & Expressions",
    icon: Variable,
    color: "text-teal-500 dark:text-teal-200",
    gradient: "from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Using letters to represent numbers.",
  },
  {
    id: "equations-inequalities",
    name: "Equations & Inequalities",
    icon: TbMath,
    color: "text-orange-500 dark:text-orange-200",
    gradient:
      "from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Solving for unknown values.",
  },
  {
    id: "order-of-operations",
    name: "Order of Operations",
    icon: FunctionSquare,
    color: "text-indigo-500 dark:text-indigo-200",
    gradient:
      "from-indigo-100 to-violet-200 dark:from-indigo-700 dark:to-violet-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "PEMDAS/BODMAS - The order to calculate.",
  },
  {
    id: "basic-shapes",
    name: "Basic Shapes",
    icon: Shapes,
    color: "text-lime-500 dark:text-lime-200",
    gradient:
      "from-lime-100 to-emerald-200 dark:from-lime-700 dark:to-emerald-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Triangles, squares, circles, and more.",
  },
  {
    id: "area-perimeter",
    name: "Area & Perimeter",
    icon: Ruler,
    color: "text-cyan-500 dark:text-cyan-200",
    gradient: "from-cyan-100 to-sky-200 dark:from-cyan-700 dark:to-sky-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Measuring shapes.",
  },
  {
    id: "data-handling-statistics",
    name: "Data & Statistics",
    icon: BarChart,
    color: "text-pink-500 dark:text-pink-200",
    gradient:
      "from-pink-100 to-fuchsia-200 dark:from-pink-700 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Collecting and interpreting data.",
  },
];

export default function Foundational() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Foundational Concepts
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental concepts in mathematics, essential for
          building a strong understanding.
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Foundational Mathematics */}
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foundationalTopics.map((topic) => (
            <Link
              href={`/mathematics/concepts/foundational/${topic.id}`}
              key={topic.id}
              className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
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
                    <topic.icon
                      className={`h-5 w-5 ${
                        isColorful
                          ? "text-current"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    />
                  </div>
                  <h4 className={`font-medium ${topic.text}`}>{topic.name}</h4>
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
                    className={`text-sm font-medium ${"text-gray-700 dark:text-white/80"}`}
                  >
                    Explore Now
                  </span>
                  <FaChevronRight
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${"text-gray-700 dark:text-gray-300"}`}
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
          ))}
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Building Blocks of Mathematics
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}
