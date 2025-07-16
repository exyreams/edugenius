"use client";

import Link from "next/link";
import { ChevronRight, FunctionSquare, Table } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react"; // Import useState
import ColorToggle from "@/components/ColorToggle"; // Import ColorToggle

const formulas = [
  {
    id: "laplace-transform",
    name: "Laplace Transform",
    icon: FunctionSquare,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about the Laplace transform, a powerful tool for solving differential equations.",
  },
  {
    id: "laplace-transform-table",
    name: "Laplace Transform Table",
    icon: Table,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Browse a comprehensive table of Laplace transforms for common functions.",
  },
];

export default function LaplaceFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    { label: "Laplace", href: "/mathematics/concepts/intermediate-advanced/formulas/laplace" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-300 dark:to-blue-400 sm:text-5xl md:text-6xl">
          Laplace Transforms
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the Laplace transform, a powerful tool for solving
          differential equations and analyzing systems.
        </p>
      </div>

      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/intermediate-advanced/laplace/${formula.id}`}
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
                      className={`h-6 w-6 ${isColorful ? "text-current" : "text-gray-800 dark:text-white"}`}
                    />
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
          Transforming Differential Equations
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
