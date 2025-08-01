"use client";

import Link from "next/link";
import {
  Axis3d,
  Braces,
  ChevronRight,
  Circle,
  FunctionSquare,
  GalleryHorizontalEnd,
  GitGraph,
  Infinity,
  ScatterChart,
  Square,
  SquareDashedMousePointer,
  Triangle,
  Waves,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const formulas = [
  {
    id: "basic-trigonometric-functions",
    name: "Basic Trigonometric Functions",
    icon: Circle,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Sine, cosine, tangent, and their reciprocal functions. Unit circle and basic properties.",
  },
  {
    id: "trigonometric-identities",
    name: "Trigonometric Identities",
    icon: Braces,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Fundamental identities, Pythagorean identities, and angle sum formulas.",
  },
  {
    id: "inverse-trigonometric-functions",
    name: "Inverse Trigonometric Functions",
    icon: FunctionSquare,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Arcsine, arccosine, arctangent functions and their properties.",
  },
  {
    id: "graphs-of-trigonometric-functions",
    name: "Graphs of Trigonometric Functions",
    icon: Waves,
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Graphing sine, cosine, tangent functions. Amplitude, period, phase shift, and transformations.",
  },
  {
    id: "law-of-sines-and-cosines",
    name: "Law of Sines and Cosines",
    icon: GitGraph,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Solving triangles using the Law of Sines and Law of Cosines. Applications to real-world problems.",
  },
  {
    id: "double-angle-and-half-angle-formulas",
    name: "Double Angle and Half Angle Formulas",
    icon: FunctionSquare,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Double angle identities, half angle identities, and their applications in solving equations.",
  },
  {
    id: "trigonometric-equations",
    name: "Trigonometric Equations",
    icon: Square,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Solving basic and complex trigonometric equations. General solutions and specific intervals.",
  },
  {
    id: "applications-of-trigonometry",
    name: "Applications of Trigonometry",
    icon: Axis3d,
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Real-world applications in physics, engineering, navigation, astronomy, and computer graphics.",
  },
  {
    id: "delambre-gauss-analogies",
    name: "Delambre (Gauss) Analogies",
    icon: Triangle,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore the Delambre (or Gauss) Analogies, a set of trigonometric identities relating the sides and angles of a triangle.",
  },
  {
    id: "double-and-half-angle-trigonometric-identities",
    name: "Double and Half Angle Trigonometric Identities",
    icon: FunctionSquare,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about double-angle and half-angle trigonometric identities and how they simplify trigonometric expressions.",
  },
  {
    id: "fundamental-trigonometric-identities",
    name: "Fundamental Trigonometric Identities",
    icon: Braces,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the fundamental trigonometric identities, which are the building blocks for many other formulas.",
  },
  {
    id: "law-of-sines-and-law-of-cosines",
    name: "Law of Sines and Law of Cosines",
    icon: GitGraph,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Apply the Law of Sines and the Law of Cosines to solve for unknown sides and angles of a triangle.",
  },
  {
    id: "measurement-and-classification-of-angles",
    name: "Measurement and Classification of Angles",
    icon: Circle,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn how to measure angles and understand different classifications of angles (e.g., acute, obtuse, right).",
  },
  {
    id: "napiers-analogies",
    name: "Napier's Analogies",
    icon: GalleryHorizontalEnd,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Discover Napier's Analogies, another set of useful formulas relating angles and sides of a spherical triangle.",
  },
  {
    id: "pythagorean-theorem",
    name: "Pythagorean Theorem",
    icon: Square,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Review the Pythagorean Theorem and its importance in solving problems with right-angled triangles.",
  },
  {
    id: "sine-and-cosine-values",
    name: "Sine and Cosine Values",
    icon: Waves,
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Study how sine and cosine values are derived, and some key relationships.",
  },
  {
    id: "spherical-trigonometry",
    name: "Spherical Trigonometry",
    icon: Infinity,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Dive into spherical trigonometry and solve for the unknown sides and angles of a spherical triangle.",
  },
  {
    id: "surface-of-triangle-and-spherical-polygon",
    name: "Surface of a Triangle and a Spherical Polygon",
    icon: Axis3d,
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn how to calculate the surface of both a triangle and spherical polygon.",
  },
  {
    id: "trigonometric-functions-of-common-angles",
    name: "Trigonometric Functions of Common Angles",
    icon: SquareDashedMousePointer,
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Memorize the common angle trigonometric values using triangles and the unit circle.",
  },
];

export default function TrigonometryFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    { label: "Trigonometry", href: "/mathematics/concepts/intermediate-advanced/trigonometry" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 sm:text-5xl md:text-6xl">
          Trigonometry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the relationships between angles and sides in triangles and
          beyond.
        </p>
      </div>
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/intermediate-advanced/trigonometry/${formula.id}`}
              key={formula.id}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${formula.gradient} ${formula.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-lg p-3 ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isColorful
                          ? "text-current"
                          : "text-gray-800 dark:text-white"
                      }`}
                    />
                  </div>
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
                <p
                  className={`text-sm leading-6 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-200"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {formula.description}
                </p>
                <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
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
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Angles, Triangles, and Beyond
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}