"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function PropertiesOfTheConstantOfIntegration() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Differential Equations", href: "/mathematics/concepts/intermediate-advanced/differential-equations" },
    { label: "Integration Constants", href: "/mathematics/concepts/intermediate-advanced/differential-equations/properties-of-the-constant-of-integration" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl">
          Properties of the Constant of Integration
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Understand the role and significance of integration constants in differential equation solutions.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Role of Integration Constants
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Integration constants arise naturally when solving differential equations and represent:</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <ul className="list-disc list-inside space-y-2">
                <li>The family of all possible solutions to a differential equation</li>
                <li>Initial conditions that determine specific solutions</li>
                <li>The degree of freedom in the general solution</li>
              </ul>
              <p className="mt-2">For an nth-order differential equation, there are n arbitrary constants:</p>
              <BlockMath math="y = f(x, c_1, c_2, \ldots, c_n)" />
            </div>
          </div>
        </div>

        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-emerald-300 dark:to-teal-300`}>
            Determining Constants
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>Constants are determined using initial or boundary conditions:</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <p><strong>Initial Value Problem:</strong></p>
              <BlockMath math="y'' + y = 0, \quad y(0) = 1, \quad y'(0) = 0" />
              <p className="mt-2">General solution: <InlineMath math="y = c_1\cos x + c_2\sin x" /></p>
              <p className="mt-1">Applying conditions: <InlineMath math="c_1 = 1, c_2 = 0" /></p>
              <p className="mt-1">Particular solution: <InlineMath math="y = \cos x" /></p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">Constants of Integration</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}