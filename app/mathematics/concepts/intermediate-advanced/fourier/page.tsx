// import Link from "next/link";
// import {
//   Activity,
//   ArrowLeftRight,
//   ArrowRightLeft,
//   Binary,
//   ChevronRight,
//   CircleDashed,
//   FunctionSquare,
//   Gauge,
//   Radar,
//   Sigma,
//   Signal,
//   SquareDashedBottom,
//   Waves,
// } from "lucide-react";
// import Breadcrumb from "@/components/Breadcrumb";
//
// const formulas = [
//   {
//     id: "complex-form-of-fourier-series",
//     name: "Complex Fourier Series",
//     icon: <Waves className="h-6 w-6 text-cyan-400" />,
//     gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
//     description: "Fourier series in complex exponential form",
//   },
//   {
//     id: "convolution",
//     name: "Convolution",
//     icon: <CircleDashed className="h-6 w-6 text-purple-400" />,
//     gradient:
//       "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
//     description: "Applications in signal processing and analysis",
//   },
//   {
//     id: "even-quarter-wave-symmetry",
//     name: "Even Quarter-Wave",
//     icon: <FunctionSquare className="h-6 w-6 text-green-400" />,
//     gradient:
//       "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
//     description: "Properties of even quarter-wave symmetry",
//   },
//   {
//     id: "even-symmetry",
//     name: "Even Symmetry",
//     icon: <Sigma className="h-6 w-6 text-pink-400" />,
//     gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
//     description: "Characteristics of even functions",
//   },
//   {
//     id: "fourier-series",
//     name: "Fourier Series",
//     icon: <Activity className="h-6 w-6 text-orange-400" />,
//     gradient:
//       "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
//     description: "Representation of periodic functions",
//   },
//   {
//     id: "fourier-sine-and-cosine-transform",
//     name: "Sine & Cosine Transforms",
//     icon: <Gauge className="h-6 w-6 text-indigo-400" />,
//     gradient:
//       "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
//     description: "Transforms for even and odd functions",
//   },
//   {
//     id: "fourier-transform",
//     name: "Fourier Transform",
//     icon: <Radar className="h-6 w-6 text-teal-400" />,
//     gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
//     description: "Analysis of non-periodic functions",
//   },
//   {
//     id: "fourier-transform-table",
//     name: "Transform Table",
//     icon: <Signal className="h-6 w-6 text-yellow-400" />,
//     gradient:
//       "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
//     description: "Reference for common transforms",
//   },
//   {
//     id: "half-wave-symmetry",
//     name: "Half-Wave Symmetry",
//     icon: <Binary className="h-6 w-6 text-red-400" />,
//     gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
//     description: "Properties of half-wave symmetry",
//   },
//   {
//     id: "heaviside-step-function",
//     name: "Heaviside Function",
//     icon: <ArrowLeftRight className="h-6 w-6 text-lime-400" />,
//     gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
//     description: "Step function applications",
//   },
//   {
//     id: "odd-quarter-wave-symmetry",
//     name: "Odd Quarter-Wave",
//     icon: <ArrowRightLeft className="h-6 w-6 text-sky-400" />,
//     gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
//     description: "Properties of odd quarter-wave symmetry",
//   },
//   {
//     id: "odd-symmetry",
//     name: "Odd Symmetry",
//     icon: <SquareDashedBottom className="h-6 w-6 text-violet-400" />,
//     gradient:
//       "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
//     description: "Characteristics of odd functions",
//   },
//   {
//     id: "unit-impulse-function",
//     name: "Unit Impulse",
//     icon: <Activity className="h-6 w-6 text-fuchsia-400" />,
//     gradient:
//       "from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600",
//     description: "Dirac delta function properties",
//   },
// ];
//
// export default function FourierFormulas() {
//   const breadcrumbItems = [
//     { label: "Mathematics", href: "/mathematics" },
//     { label: "Formulas", href: "/mathematics/formulas" },
//     { label: "Fourier", href: "/mathematics/formulas/fourier" },
//   ];
//
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="mb-12 space-y-6 text-center">
//         <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-cyan-300 dark:to-blue-400">
//           Fourier Analysis
//         </h1>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
//           Explore the mathematical framework for analyzing signals and waveforms
//           through frequency domain transformations
//         </p>
//       </div>
//
//       <Breadcrumb items={breadcrumbItems} />
//
//       {/* Formula Grid */}
//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {formulas.map((formula) => (
//           <Link
//             href={`/mathematics/formulas/fourier/${formula.id}`}
//             key={formula.id}
//             className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
//           >
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
//                   {formula.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//                   {formula.name}
//                 </h3>
//               </div>
//               <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
//                 {formula.description}
//               </p>
//               <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
//                 <span className="text-sm font-medium text-gray-700 dark:text-white/80">
//                   Explore Concept
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
//           Transforming Signals, Revealing Patterns
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
  Activity,
  ArrowLeftRight,
  ArrowRightLeft,
  Binary,
  ChevronRight,
  CircleDashed,
  FunctionSquare,
  Gauge,
  Radar,
  Sigma,
  Signal,
  SquareDashedBottom,
  Waves,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import React, { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const formulas = [
  {
    id: "complex-form-of-fourier-series",
    name: "Complex Fourier Series",
    icon: <Waves className="h-6 w-6 text-cyan-400" />,
    gradient: "from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Fourier series in complex exponential form",
  },
  {
    id: "convolution",
    name: "Convolution",
    icon: <CircleDashed className="h-6 w-6 text-purple-400" />,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Applications in signal processing and analysis",
  },
  {
    id: "even-quarter-wave-symmetry",
    name: "Even Quarter-Wave",
    icon: <FunctionSquare className="h-6 w-6 text-green-400" />,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Properties of even quarter-wave symmetry",
  },
  {
    id: "even-symmetry",
    name: "Even Symmetry",
    icon: <Sigma className="h-6 w-6 text-pink-400" />,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Characteristics of even functions",
  },
  {
    id: "fourier-series",
    name: "Fourier Series",
    icon: <Activity className="h-6 w-6 text-orange-400" />,
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Representation of periodic functions",
  },
  {
    id: "fourier-sine-and-cosine-transform",
    name: "Sine & Cosine Transforms",
    icon: <Gauge className="h-6 w-6 text-indigo-400" />,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Transforms for even and odd functions",
  },
  {
    id: "fourier-transform",
    name: "Fourier Transform",
    icon: <Radar className="h-6 w-6 text-teal-400" />,
    gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Analysis of non-periodic functions",
  },
  {
    id: "fourier-transform-table",
    name: "Transform Table",
    icon: <Signal className="h-6 w-6 text-yellow-400" />,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Reference for common transforms",
  },
  {
    id: "half-wave-symmetry",
    name: "Half-Wave Symmetry",
    icon: <Binary className="h-6 w-6 text-red-400" />,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Properties of half-wave symmetry",
  },
  {
    id: "heaviside-step-function",
    name: "Heaviside Function",
    icon: <ArrowLeftRight className="h-6 w-6 text-lime-400" />,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Step function applications",
  },
  {
    id: "odd-quarter-wave-symmetry",
    name: "Odd Quarter-Wave",
    icon: <ArrowRightLeft className="h-6 w-6 text-sky-400" />,
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Properties of odd quarter-wave symmetry",
  },
  {
    id: "odd-symmetry",
    name: "Odd Symmetry",
    icon: <SquareDashedBottom className="h-6 w-6 text-violet-400" />,
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Characteristics of odd functions",
  },
  {
    id: "unit-impulse-function",
    name: "Unit Impulse",
    icon: <Activity className="h-6 w-6 text-fuchsia-400" />,
    gradient:
      "from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Dirac delta function properties",
  },
];

export default function FourierFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    { label: "Fourier Analysis", href: "/mathematics/concepts/intermediate-advanced/fourier" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Fourier Analysis
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the mathematical framework for analyzing signals and waveforms
          through frequency domain transformations
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/fourier/${formula.id}`}
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
                  {isColorful
                    ? formula.icon
                    : React.cloneElement(formula.icon, {
                        className: "h-6 w-6 text-gray-700 dark:text-gray-300",
                      })}
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
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Transforming Signals, Revealing Patterns
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
