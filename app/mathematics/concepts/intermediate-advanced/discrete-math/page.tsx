// import Link from "next/link";
// import {
//   ChevronRight,
//   Code,
//   EqualNot,
//   FunctionSquare,
//   ListTree,
//   Parentheses,
//   Sigma,
//   Variable,
// } from "lucide-react";
// import { FaNotEqual } from "react-icons/fa6";
// import Breadcrumb from "@/components/Breadcrumb";
//
// const formulas = [
//   {
//     id: "biconditional",
//     name: "Biconditional",
//     icon: EqualNot,
//     gradient:
//       "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand the biconditional logical connector and its truth table",
//   },
//   {
//     id: "conditional",
//     name: "Conditional",
//     icon: Parentheses,
//     gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Explore the conditional logical connector (if-then) and its properties",
//   },
//   {
//     id: "conjunction",
//     name: "Conjunction",
//     icon: FunctionSquare,
//     gradient:
//       "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Learn about the conjunction logical connector (AND) and its truth values",
//   },
//   {
//     id: "disjunction",
//     name: "Disjunction",
//     icon: ListTree,
//     gradient:
//       "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Study the disjunction logical connector (OR) and its behavior",
//   },
//   {
//     id: "laws-of-propositional-logic",
//     name: "Propositional Logic",
//     icon: Code,
//     gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Explore the fundamental laws governing propositional logic",
//   },
//   {
//     id: "laws-of-set-theory",
//     name: "Set Theory",
//     icon: Sigma,
//     gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Understand the basic laws and principles of set theory",
//   },
//   {
//     id: "logical-connectors",
//     name: "Logical Connectors",
//     icon: Variable,
//     gradient:
//       "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Overview of different logical connectors in discrete mathematics",
//   },
//   {
//     id: "negation",
//     name: "Negation",
//     icon: FaNotEqual,
//     gradient:
//       "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Learn about the negation logical connector (NOT) and its effects",
//   },
// ];
//
// export default function DiscreteMathFormulas() {
//   const breadcrumbItems = [
//     { label: "Mathematics", href: "/mathematics" },
//     { label: "Formulas", href: "/mathematics/formulas" },
//     { label: "Discrete Math", href: "/mathematics/formulas/discrete-math" },
//   ];
//
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="mb-12 space-y-6 text-center">
//         <h1 className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-violet-300 dark:to-purple-400">
//           Discrete Mathematics
//         </h1>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
//           Explore the mathematical foundations of computer science through
//           logic, sets, and discrete structures
//         </p>
//       </div>
//
//       <Breadcrumb items={breadcrumbItems} />
//
//       {/* Formula Grid */}
//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {formulas.map((formula) => (
//           <Link
//             href={`/mathematics/formulas/discrete-math/${formula.id}`}
//             key={formula.id}
//             className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
//           >
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
//                   <formula.icon className="h-6 w-6 text-current" />
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
//           Foundation of Computational Thinking
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
  ChevronRight,
  Code,
  EqualNot,
  FunctionSquare,
  ListTree,
  Parentheses,
  Sigma,
  Variable,
} from "lucide-react";
import { FaNotEqual } from "react-icons/fa6";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react"; // Import useState
import ColorToggle from "@/components/ColorToggle"; // Import ColorToggle

const formulas = [
  {
    id: "biconditional",
    name: "Biconditional",
    icon: EqualNot,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the biconditional logical connector and its truth table",
  },
  {
    id: "conditional",
    name: "Conditional",
    icon: Parentheses,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore the conditional logical connector (if-then) and its properties",
  },
  {
    id: "conjunction",
    name: "Conjunction",
    icon: FunctionSquare,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about the conjunction logical connector (AND) and its truth values",
  },
  {
    id: "disjunction",
    name: "Disjunction",
    icon: ListTree,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Study the disjunction logical connector (OR) and its behavior",
  },
  {
    id: "laws-of-propositional-logic",
    name: "Propositional Logic",
    icon: Code,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Explore the fundamental laws governing propositional logic",
  },
  {
    id: "laws-of-set-theory",
    name: "Set Theory",
    icon: Sigma,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Understand the basic laws and principles of set theory",
  },
  {
    id: "logical-connectors",
    name: "Logical Connectors",
    icon: Variable,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Overview of different logical connectors in discrete mathematics",
  },
  {
    id: "negation",
    name: "Negation",
    icon: FaNotEqual,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about the negation logical connector (NOT) and its effects",
  },
];

export default function DiscreteMathFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Discrete Math", href: "/mathematics/formulas/discrete-math" },
  ];
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-violet-300 dark:to-purple-400 sm:text-5xl md:text-6xl">
          Discrete Mathematics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the mathematical foundations of computer science through
          logic, sets, and discrete structures
        </p>
      </div>
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/discrete-math/${formula.id}`}
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
                  <formula.icon className="h-6 w-6 text-current" />
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
                  Explore Concept
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
          Foundation of Computational Thinking
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
