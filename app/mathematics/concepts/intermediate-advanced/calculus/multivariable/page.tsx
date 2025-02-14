import Link from "next/link";
import {
  Axis3d,
  Boxes,
  Braces,
  ChevronRight,
  Crosshair,
  FunctionSquare,
  GalleryHorizontalEnd,
  GitGraph,
  Infinity,
  Radar,
  ScatterChart,
  Sigma,
  SquareDashedMousePointer,
  Variable,
  Waves,
} from "lucide-react";
import { IoMdCube } from "react-icons/io";
import Breadcrumb from "@/components/Breadcrumb";

const formulas = [
  {
    id: "arc-length",
    name: "Arc Length",
    icon: <Sigma className="h-6 w-6 text-purple-400 dark:text-purple-300" />,
    description: "Calculate curve lengths in multidimensional spaces",
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "area-of-a-surface-of-revolution",
    name: "Surface of Revolution",
    icon: (
      <FunctionSquare className="h-6 w-6 text-blue-400 dark:text-blue-300" />
    ),
    description: "Compute areas of rotated 3D surfaces",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "areas-under-the-curve",
    name: "Curve Areas",
    icon: (
      <IoMdCube className="h-6 w-6 text-emerald-400 dark:text-emerald-300" />
    ),
    description: "Determine spatial regions under complex functions",
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "derivative-of-a-vector-function",
    name: "Vector Derivatives",
    icon: <Crosshair className="h-6 w-6 text-rose-400 dark:text-rose-300" />,
    description: "Differentiate multivariable vector fields",
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "differential-operators",
    name: "Differential Operators",
    icon: <Radar className="h-6 w-6 text-amber-400 dark:text-amber-300" />,
    description: "Master gradient, divergence, and curl operations",
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "directional-derivative-gradient-of-function-and-total-differential",
    name: "Directional Derivatives",
    icon: <Boxes className="h-6 w-6 text-indigo-400 dark:text-indigo-300" />,
    description: "Analyze multidimensional rate changes",
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "fubinis-theorem",
    name: "Fubini's Theorem",
    icon: <Infinity className="h-6 w-6 text-lime-400 dark:text-lime-300" />,
    description: "Simplify complex double integrals",
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integral-in-cylindrical-coordinates",
    name: "Cylindrical Integration",
    icon: <Waves className="h-6 w-6 text-sky-400 dark:text-sky-300" />,
    description: "3D integration in rotational systems",
    gradient: "from-sky-200 to-cyan-200 dark:from-sky-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "integral-theorems",
    name: "Integral Theorems",
    icon: <Braces className="h-6 w-6 text-fuchsia-400 dark:text-fuchsia-300" />,
    description: "Green's, Stokes', and Divergence theorems",
    gradient:
      "from-fuchsia-200 to-purple-200 dark:from-fuchsia-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "limit-derivative-and-integral-of-vector-function",
    name: "Vector Calculus",
    icon: <GitGraph className="h-6 w-6 text-cyan-400 dark:text-cyan-300" />,
    description: "Core operations on vector functions",
    gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "line-integrals",
    name: "Line Integrals",
    icon: (
      <GalleryHorizontalEnd className="h-6 w-6 text-orange-400 dark:text-orange-300" />
    ),
    description: "Compute path integrals in vector fields",
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "partial-derivatives",
    name: "Partial Derivatives",
    icon: (
      <ScatterChart className="h-6 w-6 text-green-400 dark:text-green-300" />
    ),
    description: "Multivariable differentiation techniques",
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "properties-of-limits-of-functions-of-several-variables",
    name: "Multivariable Limits",
    icon: (
      <SquareDashedMousePointer className="h-6 w-6 text-pink-400 dark:text-pink-300" />
    ),
    description: "Understand convergence in higher dimensions",
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "taylor-and-maclaurin-series",
    name: "Series Expansions",
    icon: <Axis3d className="h-6 w-6 text-violet-400 dark:text-violet-300" />,
    description: "Approximate functions with polynomial series",
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "variable-change",
    name: "Variable Substitution",
    icon: <Variable className="h-6 w-6 text-teal-400 dark:text-teal-300" />,
    description: "Coordinate transformations in integration",
    gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "vector-identities",
    name: "Vector Identities",
    icon: <GitGraph className="h-6 w-6 text-rose-400 dark:text-rose-300" />,
    description: "Essential vector algebra relationships",
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
  },
];

export default function MultivariableCalculusFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Multivariable",
      href: "/mathematics/formulas/calculus/multivariable",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Multivariable Calculus
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master mathematical analysis in multiple dimensions - from vector
          fields to complex spatial relationships and advanced integration
          techniques
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/calculus/multivariable/${formula.id}`}
            key={formula.id}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                  {formula.icon}
                </div>
                <h3 className={`text-xl font-semibold ${formula.text}`}>
                  {formula.name}
                </h3>
              </div>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                {formula.description}
              </p>
              <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                  Explore Concept
                </span>
                <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
              </div>
            </div>

            {/* Animated background element */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
          </Link>
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          The Language of Multidimensional Reality
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
