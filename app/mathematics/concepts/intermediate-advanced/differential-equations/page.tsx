// import Link from "next/link";
// import {
//   Axis3d,
//   Braces,
//   ChevronRight,
//   FunctionSquare,
//   GalleryHorizontalEnd,
//   GitGraph,
//   Infinity,
//   ScatterChart,
//   SquareDashedMousePointer,
//   Waves,
// } from "lucide-react";
// import Breadcrumb from "@/components/Breadcrumb";
//
// const formulas = [
//   {
//     id: "differential-equations-with-coefficients-of-non-parallel-lines",
//     name: "Non-Parallel Line Coefficients",
//     icon: FunctionSquare,
//     gradient:
//       "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Solving equations with non-parallel line coefficients",
//   },
//   {
//     id: "differential-equations-with-coefficients-of-parallel-lines",
//     name: "Parallel Line Coefficients",
//     icon: Infinity,
//     gradient:
//       "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Techniques for parallel line coefficient equations",
//   },
//   {
//     id: "differential-equations-with-constant-coefficients",
//     name: "Constant Coefficients",
//     icon: Waves,
//     gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Solving equations with constant coefficients",
//   },
//   {
//     id: "exact-differential-equations",
//     name: "Exact Equations",
//     icon: Braces,
//     gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Methods for exact differential equations",
//   },
//   {
//     id: "first-order-linear-differential-equation",
//     name: "First-Order Linear",
//     icon: GitGraph,
//     gradient:
//       "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Solving first-order linear equations",
//   },
//   {
//     id: "higher-order-linear-differential-equations",
//     name: "Higher-Order Linear",
//     icon: GalleryHorizontalEnd,
//     gradient:
//       "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Techniques for higher-order equations",
//   },
//   {
//     id: "homogeneous-differential-equation",
//     name: "Homogeneous Equations",
//     icon: ScatterChart,
//     gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Solving homogeneous differential equations",
//   },
//   {
//     id: "properties-of-the-constant-of-integration",
//     name: "Integration Constants",
//     icon: SquareDashedMousePointer,
//     gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Understanding integration constants",
//   },
//   {
//     id: "separable-differential-equation",
//     name: "Separable Equations",
//     icon: Axis3d,
//     gradient:
//       "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Methods for separable equations",
//   },
// ];
//
// export default function DifferentialEquationFormulas() {
//   const breadcrumbItems = [
//     { label: "Mathematics", href: "/mathematics" },
//     { label: "Formulas", href: "/mathematics/formulas" },
//     {
//       label: "Differential Equations",
//       href: "/mathematics/formulas/differential-equations",
//     },
//   ];
//
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="mb-12 space-y-6 text-center">
//         <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-cyan-300 dark:to-blue-400">
//           Differential Equations
//         </h1>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
//           Master the art of solving equations that describe rates of change and
//           dynamic systems
//         </p>
//       </div>
//
//       <Breadcrumb items={breadcrumbItems} />
//
//       {/* Formula Grid */}
//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {formulas.map((formula) => {
//           const Icon = formula.icon;
//           return (
//             <Link
//               href={`/mathematics/formulas/differential-equations/${formula.id}`}
//               key={formula.id}
//               className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
//             >
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
//                     <Icon className="h-6 w-6 text-current" />
//                   </div>
//                   <h3 className="currentcolor text-xl font-semibold">
//                     {formula.name}
//                   </h3>
//                 </div>
//                 <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
//                   {formula.description}
//                 </p>
//                 <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
//                   <span className="text-sm font-medium text-gray-700 dark:text-white/80">
//                     Explore Methods
//                   </span>
//                   <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
//                 </div>
//               </div>
//
//               {/* Animated background element */}
//               <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
//             </Link>
//           );
//         })}
//       </div>
//
//       {/* Decorative Section Divider */}
//       <div className="mt-16 flex items-center justify-center space-x-4">
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//         <span className="text-sm italic text-gray-700 dark:text-gray-200">
//           Modeling Dynamic Systems
//         </span>
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//       </div>
//     </div>
//   );
// }

// v2

"use client";

import Link from "next/link";
import {
  Axis3d,
  Braces,
  ChevronRight,
  FunctionSquare,
  GalleryHorizontalEnd,
  GitGraph,
  Infinity,
  ScatterChart,
  SquareDashedMousePointer,
  Waves,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const formulas = [
  {
    id: "differential-equations-with-coefficients-of-non-parallel-lines",
    name: "Non-Parallel Line Coefficients",
    icon: FunctionSquare,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Solving equations with non-parallel line coefficients",
  },
  {
    id: "differential-equations-with-coefficients-of-parallel-lines",
    name: "Parallel Line Coefficients",
    icon: Infinity,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Techniques for parallel line coefficient equations",
  },
  {
    id: "differential-equations-with-constant-coefficients",
    name: "Constant Coefficients",
    icon: Waves,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Solving equations with constant coefficients",
  },
  {
    id: "exact-differential-equations",
    name: "Exact Equations",
    icon: Braces,
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Methods for exact differential equations",
  },
  {
    id: "first-order-linear-differential-equation",
    name: "First-Order Linear",
    icon: GitGraph,
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Solving first-order linear equations",
  },
  {
    id: "higher-order-linear-differential-equations",
    name: "Higher-Order Linear",
    icon: GalleryHorizontalEnd,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Techniques for higher-order equations",
  },
  {
    id: "homogeneous-differential-equation",
    name: "Homogeneous Equations",
    icon: ScatterChart,
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description: "Solving homogeneous differential equations",
  },
  {
    id: "properties-of-the-constant-of-integration",
    name: "Integration Constants",
    icon: SquareDashedMousePointer,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Understanding integration constants",
  },
  {
    id: "separable-differential-equation",
    name: "Separable Equations",
    icon: Axis3d,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Methods for separable equations",
  },
];

export default function DifferentialEquationFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    {
      label: "Differential Equations",
      href: "/mathematics/formulas/differential-equations",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the art of solving equations that describe rates of change and
          dynamic systems
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/differential-equations/${formula.id}`}
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
                    <Icon
                      className={`h-6 w-6 ${
                        isColorful
                          ? "text-current"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    />
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
                    Explore Methods
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
          Modeling Dynamic Systems
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
