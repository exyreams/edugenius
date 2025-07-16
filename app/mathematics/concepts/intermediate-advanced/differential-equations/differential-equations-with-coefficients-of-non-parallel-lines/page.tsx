"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function DifferentialEquationsWithCoefficientsOfNonParallelLines() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Differential Equations", href: "/mathematics/concepts/intermediate-advanced/differential-equations" },
    { label: "Non-Parallel Line Coefficients", href: "/mathematics/concepts/intermediate-advanced/differential-equations/differential-equations-with-coefficients-of-non-parallel-lines" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-sky-300 dark:to-blue-400 md:text-5xl lg:text-6xl">
          Differential Equations with Coefficients of Non-Parallel Lines
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Solve differential equations where coefficients form non-parallel lines using substitution methods.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Form of Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>These equations have the form:</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <BlockMath math="(a_1x + b_1y + c_1)dx + (a_2x + b_2y + c_2)dy = 0" />
              <p className="mt-2">where the coefficients satisfy the non-parallel condition:</p>
              <BlockMath math="\frac{a_1}{a_2} \neq \frac{b_1}{b_2}" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">Non-Parallel Coefficient Systems</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}