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
import Breadcrumb from "@/components/Breadcrumb";

const formulas = [
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
    name: "Derivative Tests",
    icon: <Crosshair className="h-6 w-6 text-blue-400 dark:text-blue-300" />,
    description: "Analyze functions using derivative criteria",
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
  },
  {
    id: "exponential-functions",
    name: "Exponentials",
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

export default function DifferentialCalculusFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
    {
      label: "Differential Calculus",
      href: "/mathematics/formulas/calculus/differential",
    },
  ];

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

      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/calculus/differential/${formula.id}`}
            key={formula.id}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                  {formula.icon}
                </div>
                <h3 className="currentcolor text-2xl font-semibold">
                  {formula.name}
                </h3>
              </div>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                {formula.description}
              </p>
              <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                  Explore Concepts
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
          Language of Change and Motion
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
