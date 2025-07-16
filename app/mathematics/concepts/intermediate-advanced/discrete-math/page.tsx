"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  TbMathFunction,
  TbMathSymbols,
  TbMathXDivideY,
  TbMathIntegrals,
  TbMathMax,
  TbMathMin,
  TbMathXPlusY,
  TbMathXMinusY,
  TbMathIntegralX,
  TbMathPi,
  TbMathSin,
} from "react-icons/tb";
import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @typedef {Object} DiscreteMathTopic
 * @property {string} id - Unique identifier for the topic.
 * @property {string} name - Name of the topic.
 * @property {JSX.Element} icon - Icon representing the topic.
 * @property {string} description - Brief description of the topic.
 * @property {string} gradient - CSS gradient class for the topic card background.
 * @property {string} text - CSS class for text color.
 */

/**
 * @type {DiscreteMathTopic[]}
 * @description Array of discrete mathematics topics, each representing a key concept.
 */
const discreteMathTopics = [
  {
    id: "set-theory",
    name: "Set Theory",
    icon: (
      <TbMathSymbols className="h-6 w-6 text-blue-400 dark:text-blue-300" />
    ),
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental concepts of sets, operations, and relationships",
  },
  {
    id: "laws-of-set-theories",
    name: "Laws of Set Theory",
    icon: (
      <TbMathSymbols className="h-6 w-6 text-emerald-400 dark:text-emerald-300" />
    ),
    gradient: "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental laws and properties governing set operations",
  },
  {
    id: "logic-and-proofs",
    name: "Logic and Proofs",
    icon: (
      <TbMathFunction className="h-6 w-6 text-green-400 dark:text-green-300" />
    ),
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Propositional logic, predicate logic, and proof techniques",
  },
  {
    id: "laws-of-propositional-logic",
    name: "Laws of Propositional Logic",
    icon: (
      <TbMathFunction className="h-6 w-6 text-indigo-400 dark:text-indigo-300" />
    ),
    gradient: "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental laws and equivalences in logical reasoning",
  },
  {
    id: "logical-connectors",
    name: "Logical Connectors",
    icon: (
      <TbMathFunction className="h-6 w-6 text-violet-400 dark:text-violet-300" />
    ),
    gradient: "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental logical operators that connect and combine propositions",
  },
  {
    id: "negation",
    name: "Negation (NOT)",
    icon: (
      <TbMathXMinusY className="h-6 w-6 text-red-400 dark:text-red-300" />
    ),
    gradient: "from-red-200 to-pink-200 dark:from-red-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Logical negation operator that reverses truth values",
  },
  {
    id: "conjunction",
    name: "Conjunction (AND)",
    icon: (
      <TbMathXPlusY className="h-6 w-6 text-green-400 dark:text-green-300" />
    ),
    gradient: "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Logical AND operator for combining propositions",
  },
  {
    id: "disjunction",
    name: "Disjunction (OR)",
    icon: (
      <TbMathXPlusY className="h-6 w-6 text-orange-400 dark:text-orange-300" />
    ),
    gradient: "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Logical OR operator for alternative propositions",
  },
  {
    id: "conditional",
    name: "Conditional (IF-THEN)",
    icon: (
      <TbMathFunction className="h-6 w-6 text-blue-400 dark:text-blue-300" />
    ),
    gradient: "from-blue-200 to-sky-200 dark:from-blue-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description: "Logical implication operator for conditional statements",
  },
  {
    id: "biconditional",
    name: "Biconditional (IFF)",
    icon: (
      <TbMathXDivideY className="h-6 w-6 text-teal-400 dark:text-teal-300" />
    ),
    gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "If and only if logical operator for equivalence",
  },
  {
    id: "combinatorics",
    name: "Combinatorics",
    icon: (
      <TbMathXPlusY className="h-6 w-6 text-purple-400 dark:text-purple-300" />
    ),
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Counting principles, permutations, combinations, and arrangements",
  },
  {
    id: "graph-theory",
    name: "Graph Theory",
    icon: (
      <TbMathIntegrals className="h-6 w-6 text-orange-400 dark:text-orange-300" />
    ),
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Vertices, edges, paths, cycles, and graph algorithms",
  },
  {
    id: "number-theory",
    name: "Number Theory",
    icon: (
      <TbMathPi className="h-6 w-6 text-teal-400 dark:text-teal-300" />
    ),
    gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Prime numbers, divisibility, modular arithmetic, and cryptography",
  },
  {
    id: "relations-and-functions",
    name: "Relations and Functions",
    icon: (
      <TbMathXDivideY className="h-6 w-6 text-rose-400 dark:text-rose-300" />
    ),
    gradient: "from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Binary relations, equivalence relations, and function properties",
  },
  {
    id: "boolean-algebra",
    name: "Boolean Algebra",
    icon: (
      <TbMathMax className="h-6 w-6 text-indigo-400 dark:text-indigo-300" />
    ),
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Boolean operations, logic gates, and digital circuit design",
  },
  {
    id: "recursion-and-recurrence",
    name: "Recursion and Recurrence",
    icon: (
      <TbMathMin className="h-6 w-6 text-lime-400 dark:text-lime-300" />
    ),
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Recursive algorithms and solving recurrence relations",
  },
  {
    id: "probability-theory",
    name: "Probability Theory",
    icon: (
      <TbMathSin className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
    ),
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Discrete probability, random variables, and distributions",
  },
  {
    id: "algorithms-and-complexity",
    name: "Algorithms and Complexity",
    icon: (
      <TbMathIntegralX className="h-6 w-6 text-sky-400 dark:text-sky-300" />
    ),
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Algorithm analysis, time complexity, and computational efficiency",
  },
  {
    id: "formal-languages",
    name: "Formal Languages",
    icon: (
      <TbMathXMinusY className="h-6 w-6 text-emerald-400 dark:text-emerald-300" />
    ),
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Automata theory, regular expressions, and context-free grammars",
  },
];

/**
 * @component DiscreteMath
 * @description Renders the main page for Discrete Mathematics concepts.
 * @returns {JSX.Element} The Discrete Mathematics page.
 */
export default function DiscreteMath() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb navigation items for the page.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Discrete Mathematics",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math",
    },
  ];

  /**
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} isColorful
   * @description State to manage to apply colorful style, or glass style to the page.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Discrete Mathematics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the mathematical structures and concepts that form the foundation of computer science and digital logic
        </p>
      </div>

      {/* Color Toggle and Breadcrumb */}
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Topics Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {discreteMathTopics.map((topic) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/discrete-math/${topic.id}`}
            key={topic.id}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${isColorful
                ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                : "glass text-gray-800 dark:text-white"
              }`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Topic Icon */}
                <div
                  className={`rounded-lg p-3 ${isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                    }`}
                >
                  {topic.icon}
                </div>
                {/* Topic Name */}
                <h3
                  className={`text-lg font-semibold ${isColorful
                      ? "currentcolor"
                      : "text-gray-800 dark:text-white"
                    }`}
                >
                  {topic.name}
                </h3>
              </div>
              {/* Topic Description */}
              <p
                className={`text-sm leading-6 ${isColorful
                    ? "text-gray-600 dark:text-gray-200"
                    : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                {topic.description}
              </p>
              {/* "Explore Concepts" Link */}
              <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                <span
                  className={`text-sm font-medium ${isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-800 dark:text-white"
                    }`}
                >
                  Explore Concepts
                </span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-800 dark:text-white"
                    }`}
                />
              </div>
            </div>

            {/* Animated background element */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${isColorful
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
          The Mathematics of Digital Logic
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}