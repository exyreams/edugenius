"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeftRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Box,
  Boxes,
  ChevronRight,
  Circle,
  Cross,
  Dot,
  Layers,
  Ruler,
  ScatterChart,
  Square,
  Triangle,
} from "lucide-react";
import { TbMatrix, TbVector } from "react-icons/tb";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const formulas = [
  {
    id: "addition-and-subtraction-of-matrices",
    name: "Matrix Addition/Subtraction",
    icon: TbMatrix,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental matrix operations",
  },
  {
    id: "adjoint-matrix",
    name: "Adjoint Matrix",
    icon: Box,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate matrix adjoints",
  },
  {
    id: "angle-between-vectors",
    name: "Vector Angles",
    icon: TbVector,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Compute angles between vectors",
  },
  {
    id: "cramers-rule",
    name: "Cramer's Rule",
    icon: ArrowRight,
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Solve linear systems",
  },
  {
    id: "cross-product-and-its-properties",
    name: "Cross Product",
    icon: Cross,
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Vector cross products",
  },
  {
    id: "determinants",
    name: "Determinants",
    icon: Ruler,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Matrix determinant calculations",
  },
  {
    id: "dot-product-and-its-properties",
    name: "Dot Product",
    icon: Dot,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Vector dot products",
  },
  {
    id: "identity-matrix",
    name: "Identity Matrix",
    icon: Square,
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description: "Special diagonal matrix",
  },
  {
    id: "inverse-matrix",
    name: "Matrix Inverse",
    icon: ArrowLeftRight,
    gradient:
      "from-fuchsia-200 to-purple-200 dark:from-fuchsia-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate matrix inverses",
  },
  {
    id: "matrix-multiplication",
    name: "Matrix Multiplication",
    icon: Boxes,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Matrix product operations",
  },
  {
    id: "midpoint-between-two-points-in-space",
    name: "3D Midpoints",
    icon: Layers,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate spatial midpoints",
  },
  {
    id: "operations-with-vectors-and-their-properties",
    name: "Vector Operations",
    icon: ScatterChart,
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental vector math",
  },
  {
    id: "orthogonal-matrix",
    name: "Orthogonal Matrix",
    icon: Triangle,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Special matrix properties",
  },
  {
    id: "properties-of-matrix",
    name: "Matrix Properties",
    icon: Circle,
    gradient: "from-sky-200 to-cyan-200 dark:from-sky-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Key matrix characteristics",
  },
  {
    id: "sarrus-rule",
    name: "Sarrus Rule",
    icon: ArrowUp,
    gradient:
      "from-amber-200 to-yellow-200 dark:from-amber-600 dark:to-yellow-600",
    text: "text-gray-800 dark:text-white",
    description: "3x3 determinant shortcut",
  },
  {
    id: "symmetric-matrix",
    name: "Symmetric Matrix",
    icon: ArrowDown,
    gradient:
      "from-emerald-200 to-green-200 dark:from-emerald-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Special square matrices",
  },
  {
    id: "transpose-of-matrix",
    name: "Matrix Transpose",
    icon: ArrowUpRight,
    gradient:
      "from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600",
    text: "text-gray-800 dark:text-white",
    description: "Flip matrix dimensions",
  },
  {
    id: "triangular-matrix",
    name: "Triangular Matrix",
    icon: ArrowDownRight,
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description: "Upper/lower triangular forms",
  },
  {
    id: "unit-vector",
    name: "Unit Vector",
    icon: TbVector,
    gradient:
      "from-purple-200 to-fuchsia-200 dark:from-purple-600 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-white",
    description: "Normalized direction vectors",
  },
  {
    id: "vector-normalization",
    name: "Vector Normalization",
    icon: Ruler,
    gradient: "from-cyan-200 to-teal-200 dark:from-cyan-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Scale vectors to unit length",
  },
  {
    id: "vector-projections",
    name: "Vector Projections",
    icon: ArrowRight,
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Project vectors onto axes",
  },
  {
    id: "vectors-and-their-magnitude",
    name: "Vector Magnitude",
    icon: Ruler,
    gradient: "from-green-200 to-lime-200 dark:from-green-600 dark:to-lime-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate vector lengths",
  },
];

export default function LinearAlgebraFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },    
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    { label: "Linear Algebra", href: "/mathematics/concepts/intermediate-advanced/linear-algebra" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 sm:text-5xl md:text-6xl">
          Linear Algebra
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master vectors, matrices, and linear transformations - the foundation
          of modern mathematics and data science
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />
      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/intermediate-advanced/linear-algebra/${formula.id}`}
              key={formula.id}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${formula.gradient} ${formula.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-lg p-3 ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    {isColorful ? (
                      <Icon className="h-6 w-6 text-current" />
                    ) : (
                      <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    )}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      isColorful ? "" : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {formula.name}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-6 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-200"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {formula.description}
                </p>
                <div
                  className={`mt-4 flex items-center justify-between ${
                    isColorful
                      ? "opacity-0 transition-opacity group-hover:opacity-100"
                      : ""
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 dark:text-white/80"
                        : "text-gray-700 dark:text-white/80"
                    }`}
                  >
                    Explore Concept
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                      isColorful
                        ? "text-gray-700 dark:text-white/80"
                        : "text-gray-700 dark:text-white/80"
                    }`}
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
          );
        })}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Language of Linear Transformations
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
