import Link from "next/link";
import { ChevronRight, DraftingCompass, TriangleRight } from "lucide-react";
import { TbMathCos, TbMathSin } from "react-icons/tb";
import Breadcrumb from "@/components/Breadcrumb";

const formulas = [
  {
    id: "cosine-rule-for-angles",
    name: "Cosine Rule For Angles",
    icon: TbMathCos,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the cosine rule for calculating angles in spherical triangles.",
  },
  {
    id: "cosine-rule-for-sides",
    name: "Cosine Rule For Sides",
    icon: TbMathCos,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn how to apply the cosine rule to calculate sides in spherical triangles.",
  },
  {
    id: "cotangent-theorem",
    name: "Cotangent Theorem",
    icon: TriangleRight,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore the cotangent theorem and its applications in spherical trigonometry.",
  },
  {
    id: "half-angle",
    name: "Half Angle",
    icon: DraftingCompass,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the half-angle formulas in spherical trigonometry.",
  },
  {
    id: "law-of-sines",
    name: "Law of Sines",
    icon: TbMathSin,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about the law of sines and its use in solving spherical triangles.",
  },
];

export default function SphericalTrigonometry() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Trigonometry", href: "/mathematics/formulas/trigonometry" },
    {
      label: "Spherical Trigonometry",
      href: "/mathematics/formulas/trigonometry/spherical-trigonometry",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Spherical Trigonometry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the relationships between angles and sides in spherical
          triangles.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/trigonometry/spherical-trigonometry/${formula.id}`}
              key={formula.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                    <Icon className="h-6 w-6 text-current" />
                  </div>
                  <h3 className="currentcolor text-xl font-semibold">
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
          );
        })}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Angles and Sides on a Sphere
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
