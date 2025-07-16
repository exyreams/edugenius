"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function HigherOrderLinearDifferentialEquations() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Differential Equations", href: "/mathematics/concepts/intermediate-advanced/differential-equations" },
    { label: "Higher-Order Linear Equations", href: "/mathematics/concepts/intermediate-advanced/differential-equations/higher-order-linear-differential-equations" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-300 dark:to-blue-400 md:text-5xl lg:text-6xl">
          Higher-Order Linear Differential Equations
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to solve second and higher-order linear differential equations using characteristic equations.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Second-Order Linear Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>The general form of a second-order linear differential equation is:</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <BlockMath math="a_2(x)y'' + a_1(x)y' + a_0(x)y = f(x)" />
              <p className="mt-2">For constant coefficients:</p>
              <BlockMath math="ay'' + by' + cy = f(x)" />
              <p className="mt-2">The characteristic equation is:</p>
              <BlockMath math="ar^2 + br + c = 0" />
            </div>
          </div>
        </div>

        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-teal-300 dark:to-cyan-300`}>
            Solution Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Distinct Real Roots</h3>
                <p className="mt-2">If <InlineMath math="r_1 \neq r_2" />:</p>
                <BlockMath math="y = c_1e^{r_1x} + c_2e^{r_2x}" />
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Repeated Real Root</h3>
                <p className="mt-2">If <InlineMath math="r_1 = r_2 = r" />:</p>
                <BlockMath math="y = (c_1 + c_2x)e^{rx}" />
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Complex Roots</h3>
                <p className="mt-2">If <InlineMath math="r = \alpha \pm \beta i" />:</p>
                <BlockMath math="y = e^{\alpha x}(c_1\cos\beta x + c_2\sin\beta x)" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">Advanced Linear Systems</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}