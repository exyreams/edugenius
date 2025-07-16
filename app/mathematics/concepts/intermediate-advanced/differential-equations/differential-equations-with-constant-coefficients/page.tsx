"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function DifferentialEquationsWithConstantCoefficients() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Differential Equations", href: "/mathematics/concepts/intermediate-advanced/differential-equations" },
    { label: "Constant Coefficients", href: "/mathematics/concepts/intermediate-advanced/differential-equations/differential-equations-with-constant-coefficients" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-lime-700 to-green-800 bg-clip-text text-4xl font-bold text-transparent dark:from-lime-300 dark:to-green-400 md:text-5xl lg:text-6xl">
          Differential Equations with Constant Coefficients
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the characteristic equation method for solving linear differential equations with constant coefficients.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Standard Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Linear differential equations with constant coefficients have the form:</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <BlockMath math="a_ny^{(n)} + a_{n-1}y^{(n-1)} + \cdots + a_1y' + a_0y = f(x)" />
              <p className="mt-2">where <InlineMath math="a_0, a_1, \ldots, a_n" /> are constants.</p>
              <p className="mt-2">The characteristic equation is:</p>
              <BlockMath math="a_nr^n + a_{n-1}r^{n-1} + \cdots + a_1r + a_0 = 0" />
            </div>
          </div>
        </div>

        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-lime-300 dark:to-green-300`}>
            Solution Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-4">
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Step 1: Find Characteristic Equation</h3>
                <p className="mt-2">Replace <InlineMath math="y^{(k)}" /> with <InlineMath math="r^k" /> in the homogeneous equation.</p>
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Step 2: Solve for Roots</h3>
                <p className="mt-2">Find all roots of the characteristic polynomial.</p>
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Step 3: Construct General Solution</h3>
                <p className="mt-2">Based on the nature of roots (real, complex, repeated).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">Constant Coefficient Solutions</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}