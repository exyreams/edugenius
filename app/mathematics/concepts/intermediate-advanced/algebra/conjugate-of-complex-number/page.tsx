"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

export default function ConjugateOfComplexNumber() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Algebra",
      href: "/mathematics/concepts/intermediate-advanced/algebra",
    },
    {
      label: "Conjugate Of Complex Numbers",
      href: "/mathematics/concepts/intermediate-advanced/algebra/conjugate-of-complex-number",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1
        className={`mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:mb-6 md:text-4xl ${isColorful ? "" : "text-gray-800 dark:text-white"}`}
      >
        Conjugate Of Complex Numbers
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      <div className="mt-6 space-y-8">
        {/* Fundamental Formula */}
        <div
          className={`${isColorful ? "bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700" : "glass"} rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${isColorful ? "" : "text-gray-800 dark:text-gray-200"}`}
          >
            Fundamental Definition
          </h2>
          <div
            className={`mt-4 flex justify-start overflow-x-auto rounded-lg p-4 ${isColorful ? "bg-gray-50 dark:bg-gray-800" : "bg-gray-200 dark:bg-gray-700"}`}
          >
            <BlockMath math="\text{If } z = a + bi \text{, then } \overline{z} = a - bi" />
          </div>
        </div>

        {/* Extended Form */}
        <div
          className={`${isColorful ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600" : "glass"} rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300 ${isColorful ? "" : "text-gray-800 dark:text-gray-200"}`}
          >
            Geometric Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-start">
              <svg
                viewBox="0 0 200 200"
                className={`h-48 w-full max-w-xs ${isColorful ? "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200" : "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"}`}
              >
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <circle
                  cx="140"
                  cy="60"
                  r="3"
                  fill={isColorful ? "#3b82f6" : "gray"}
                />
                <text x="145" y="65" fontSize="12">
                  z = a + bi
                </text>
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="60"
                  stroke={isColorful ? "#3b82f6" : "gray"}
                  strokeWidth="2"
                />
                <circle
                  cx="140"
                  cy="140"
                  r="3"
                  fill={isColorful ? "#10b981" : "gray"}
                />
                <text x="145" y="135" fontSize="12">
                  z̄ = a - bi
                </text>
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="140"
                  stroke={isColorful ? "#10b981" : "gray"}
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div
              className={`space-y-4 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
            >
              <p className="flex items-baseline gap-2">
                <span
                  className={`${isColorful ? "text-emerald-600 dark:text-emerald-400" : "text-emerald-600 dark:text-emerald-400"}`}
                >
                  ●
                </span>
                Reflection across the real axis in complex plane
              </p>
              <div className="flex justify-start overflow-x-auto">
                <BlockMath math="|z| = |\overline{z}| = \sqrt{a^2 + b^2}" />
              </div>
              <div className="flex justify-start overflow-x-auto">
                <BlockMath math="\arg(\overline{z}) = -\arg(z)" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Properties Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className={`${isColorful ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600" : "glass"} rounded-lg p-6 shadow-md`}
          >
            <h3
              className={`text-xl font-semibold ${isColorful ? "dark:text-100 text-gray-800" : "text-gray-800 dark:text-gray-100"}`}
            >
              Algebraic Properties
            </h3>
            <div className="mt-4 space-y-3">
              <div
                className={`${isColorful ? "bg-gray-100  dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-700"} rounded-lg p-3`}
              >
                <BlockMath math="\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}" />
              </div>
              <div
                className={`${isColorful ? "bg-gray-100  dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-700"} rounded-lg p-3 `}
              >
                <BlockMath math="\overline{z_1 \cdot z_2} = \overline{z_1} \cdot \overline{z_2}" />
              </div>
              <div
                className={`${isColorful ? "bg-gray-100  dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-700"} rounded-lg p-3 `}
              >
                <BlockMath math="z + \overline{z} = 2a \quad (\text{Purely Real})" />
              </div>
            </div>
          </div>

          <div
            className={`${isColorful ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600" : "glass"} rounded-lg p-6 shadow-md`}
          >
            <h3
              className={`text-xl font-semibold ${isColorful ? "dark:text-100 text-gray-800" : "text-gray-800 dark:text-gray-100"}`}
            >
              Modulus Relationships
            </h3>
            <div className="mt-4 space-y-3">
              <div
                className={`${isColorful ? "bg-gray-100  dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-700"} rounded-lg p-3`}
              >
                <BlockMath math="z \cdot \overline{z} = |z|^2" />
              </div>
              <div
                className={`${isColorful ? "bg-gray-100  dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-700"} rounded-lg p-3 `}
              >
                <BlockMath math="|\overline{z}| = |z|" />
              </div>
              <div
                className={`${isColorful ? "bg-gray-100  dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-700"} rounded-lg p-3 `}
              >
                <BlockMath math="\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`${isColorful ? "bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600" : "glass"} rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful ? "dark:text-100 text-gray-800" : "text-gray-800 dark:text-gray-100"}`}
          >
            Key Applications
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div
                className={`${isColorful ? "bg-indigo-50 p-4 dark:bg-indigo-900/20" : "bg-gray-200 dark:bg-gray-700"} rounded-lg`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-indigo-600 dark:text-indigo-300" : "text-indigo-600 dark:text-indigo-300"}`}
                >
                  Complex Division
                </h3>
                <BlockMath math="\frac{z_1}{z_2} = \frac{z_1 \cdot \overline{z_2}}{|z_2|^2}" />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  Rationalizing denominators using conjugates
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`${isColorful ? "bg-emerald-50 p-4 dark:bg-emerald-900/20" : "bg-gray-200 dark:bg-gray-700"} rounded-lg`}
              >
                <h3
                  className={`text-lg font-semibold ${isColorful ? "text-emerald-600 dark:text-emerald-300" : "text-emerald-600 dark:text-emerald-300"}`}
                >
                  Polynomial Roots
                </h3>
                <BlockMath math="P(z) = 0 \Rightarrow P(\overline{z}) = 0" />
                <p
                  className={`mt-2 ${isColorful ? "text-gray-600 dark:text-gray-300" : "text-gray-700 dark:text-gray-300"}`}
                >
                  For polynomials with real coefficients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`${isColorful ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-700 dark:to-emerald-600" : "glass"} rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful ? "dark:text-100 text-gray-800" : "text-gray-800 dark:text-gray-100"}`}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem: "\\text{Find } \\overline{z} \\text{ if } z = 3 - 4i",
                solution: "3 + 4i",
              },
              {
                problem: "\\text{Compute } (2+i) + \\overline{(2+i)}",
                solution: "4",
              },
              {
                problem: "\\text{Simplify } \\frac{1}{1+i}",
                solution: "\\frac{1}{2} - \\frac{1}{2}i",
              },
              {
                problem:
                  "\\text{Verify } |\\overline{z}| = |z| \\text{ for } z = 5+12i",
                solution: "\\sqrt{5^2 + 12^2} = 13",
              },
              {
                problem: "\\text{Solve } z + \\overline{z} = 10",
                solution: "z = 5 + bi \\text{ (any real } b\\text{)}",
              },
              {
                problem: "\\text{Calculate } (3+2i)(3-2i)",
                solution: "9 + 4 = 13",
              },
              {
                problem: "\\text{Find } \\overline{e^{i\\theta}}",
                solution: "e^{-i\\theta}",
              },
              {
                problem: "\\text{Prove } \\overline{\\overline{z}} = z",
                solution: "\\text{Double conjugation returns original}",
              },
              {
                problem: "\\text{Express Re(z) using } \\overline{z}",
                solution: "\\frac{z + \\overline{z}}{2}",
              },
              {
                problem: "\\text{Find roots of } x^2 - 4x + 13 = 0",
                solution: "2 \\pm 3i",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg border p-4 transition-all ${
                  isColorful
                    ? "hover:border-indigo-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-indigo-900/50 dark:hover:bg-gray-800"
                    : "border-gray-200  bg-gray-100 dark:border-gray-600 dark:bg-gray-800 "
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-indigo-600 dark:text-indigo-400" : "text-indigo-600 dark:text-indigo-400"}`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                <div className="mt-2 flex justify-start overflow-x-auto">
                  <BlockMath math={item.problem} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm ${isColorful ? "text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400" : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-200"}`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "fill-indigo-600 dark:fill-indigo-400" : "fill-gray-700 dark:fill-gray-300"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg  ${isColorful ? "bg-gray-100 p-3 dark:bg-gray-700" : "bg-gray-200 p-3 dark:bg-gray-600"}`}
                  >
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
