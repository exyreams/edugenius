import Link from "next/link";
import { ChevronRight, Diff, FunctionSquare } from "lucide-react";
import { BiMath } from "react-icons/bi";
import Breadcrumb from "@/components/Breadcrumb";

const formulas = [
  {
    id: "addition-and-subtraction-of-angles",
    name: "Angle Addition & Subtraction",
    icon: Diff,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    description: "Formulas for combining and separating angles",
  },
  {
    id: "sum-to-product-and-product-to-sum",
    name: "Sum-Product Conversions",
    icon: BiMath,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    description: "Transform between sums and products of trig functions",
  },
  {
    id: "pythagorean-identities",
    name: "Pythagorean Identities",
    icon: FunctionSquare,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    description: "Fundamental relationships from the unit circle",
  },
  {
    id: "double-angle-formulas",
    name: "Double Angle Formulas",
    icon: Diff,
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    description: "Express trig functions of doubled angles",
  },
];

export default function TrigonometricIdentities() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Trigonometry",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry",
    },
    {
      label: "Trigonometric Identities",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/trigonometric-identities",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Trigonometric Identities
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the fundamental relationships between trigonometric functions
          through essential formulas and transformations
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/trigonometry/trigonometric-identities/${formula.id}`}
              key={formula.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                    <Icon className="h-6 w-6 text-current" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {formula.name}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                  {formula.description}
                </p>
                <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                    Explore Identity
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
                </div>
              </div>

              {/* Animated background element */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
            </Link>
          );
        })}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Circular Relationships
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
