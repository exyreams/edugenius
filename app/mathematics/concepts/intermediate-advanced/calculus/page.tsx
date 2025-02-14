// import Link from "next/link";
// import { ChevronRight } from "lucide-react";
// import {
//   TbMathIntegrals,
//   TbMathIntegralX,
//   TbMathXDivideY,
// } from "react-icons/tb";
// import Breadcrumb from "@/components/Breadcrumb";
//
// const formulas = [
//   {
//     id: "differential",
//     name: "Differential Calculus",
//     icon: (
//       <TbMathXDivideY className="h-8 w-8 text-blue-400 dark:text-blue-300" />
//     ),
//     gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Study of rates of change and slopes of curves",
//   },
//   {
//     id: "integral",
//     name: "Integral Calculus",
//     icon: (
//       <TbMathIntegrals className="h-8 w-8 text-green-400 dark:text-green-300" />
//     ),
//     gradient:
//       "from-green-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Mathematics of accumulation and areas under curves",
//   },
//   {
//     id: "multivariable",
//     name: "Multivariable Calculus",
//     icon: (
//       <TbMathIntegralX className="h-8 w-8 text-purple-400 dark:text-purple-300" />
//     ),
//     gradient:
//       "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Extension to higher dimensions and vector fields",
//   },
// ];
//
// export default function CalculusFormulas() {
//   const breadcrumbItems = [
//     { label: "Mathematics", href: "/mathematics" },
//     { label: "Formulas", href: "/mathematics/formulas" },
//     { label: "Calculus", href: "/mathematics/formulas/calculus" },
//   ];
//
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="mb-12 space-y-6 text-center">
//         <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-cyan-300 dark:to-blue-400">
//           Calculus Foundations
//         </h1>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
//           Master the mathematics of change and motion through fundamental
//           principles and powerful analytical tools
//         </p>
//       </div>
//
//       <Breadcrumb items={breadcrumbItems} />
//
//       {/* Formula Grid */}
//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {formulas.map((formula) => (
//           <Link
//             href={`/mathematics/formulas/calculus/${formula.id}`}
//             key={formula.id}
//             className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
//           >
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
//                   {formula.icon}
//                 </div>
//                 <h3 className="currentcolor text-2xl font-semibold">
//                   {formula.name}
//                 </h3>
//               </div>
//               <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
//                 {formula.description}
//               </p>
//               <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
//                 <span className="text-sm font-medium text-gray-700 dark:text-white/80">
//                   Explore Concepts
//                 </span>
//                 <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
//               </div>
//             </div>
//
//             {/* Animated background element */}
//             <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
//           </Link>
//         ))}
//       </div>
//
//       {/* Decorative Section Divider */}
//       <div className="mt-16 flex items-center justify-center space-x-4">
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//         <span className="text-sm italic text-gray-700 dark:text-gray-200">
//           The Language of Change
//         </span>
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//       </div>
//     </div>
//   );
// }

// v2

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  TbMathIntegrals,
  TbMathIntegralX,
  TbMathXDivideY,
} from "react-icons/tb";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react"; // Import useState
import ColorToggle from "@/components/ColorToggle"; // Import ColorToggle

const formulas = [
  {
    id: "differential",
    name: "Differential Calculus",
    icon: (
      <TbMathXDivideY className="h-8 w-8 text-blue-400 dark:text-blue-300" />
    ),
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Study of rates of change and slopes of curves",
  },
  {
    id: "integral",
    name: "Integral Calculus",
    icon: (
      <TbMathIntegrals className="h-8 w-8 text-green-400 dark:text-green-300" />
    ),
    gradient:
      "from-green-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Mathematics of accumulation and areas under curves",
  },
  {
    id: "multivariable",
    name: "Multivariable Calculus",
    icon: (
      <TbMathIntegralX className="h-8 w-8 text-purple-400 dark:text-purple-300" />
    ),
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Extension to higher dimensions and vector fields",
  },
];

export default function CalculusFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Calculus", href: "/mathematics/formulas/calculus" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Calculus Foundations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the mathematics of change and motion through fundamental
          principles and powerful analytical tools
        </p>
      </div>
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/calculus/${formula.id}`}
            key={formula.id}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
              isColorful
                ? `bg-gradient-to-br ${formula.gradient} ${formula.text}`
                : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
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
                  {formula.icon}
                </div>
                <h3
                  className={`text-2xl font-semibold ${
                    isColorful
                      ? "currentcolor"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
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
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                isColorful
                  ? "bg-black/5 dark:bg-white/10"
                  : "bg-gray-200/50 dark:bg-gray-700/50"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          The Language of Change
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
