"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function ModulusAndArgumentOfComplexNumber() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Modulus & Arguments of Complex Number",
      href: "/mathematics/formulas/algebra/modulus-and-argument",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Complex Number Analysis
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Concepts Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Concepts
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Modulus (Absolute Value)
              </h3>
              <BlockMath math="|z| = \sqrt{a^2 + b^2}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Distance from origin in complex plane
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Argument (Angle)
              </h3>
              <BlockMath math="\theta = \arg(z) = \tan^{-1}\left(\frac{b}{a}\right)" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Measured from positive real axis
              </p>
            </div>
          </div>
        </div>

        {/* Geometric Representation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Geometric Interpretation
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-full max-w-xs [&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
              >
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="140" cy="60" r="4" fill="#3b82f6" />
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="60"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <path
                  d="M 100 100 L 120 100 A 45 45 0 0 1 140 60"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4"
                />
                <text x="120" y="80" fontSize="12">
                  θ = arg(z)
                </text>
                <text x="130" y="50" fontSize="12">
                  |z|
                </text>
                <text x="145" y="65" fontSize="12">
                  z = a + bi
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Polar Form
                </h3>
                <BlockMath math="z = r(\cos\theta + i\sin\theta)" />
                <BlockMath math="r = |z|, \quad \theta = \arg(z)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Euler&#39;s Formula
                </h3>
                <BlockMath math="z = re^{i\theta}" />
              </div>
            </div>
          </div>
        </div>

        {/* Properties Section */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Key Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="|z_1 z_2| = |z_1||z_2|" />
                <BlockMath math="\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="|\overline{z}| = |z|" />
                <BlockMath math="\arg(\overline{z}) = -\arg(z)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}" />
                <BlockMath math="\arg\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <BlockMath math="|z^n| = |z|^n" />
                <BlockMath math="\arg(z^n) = n\arg(z)" />
              </div>
            </div>
          </div>
        </div>

        {/* Conversion Methods */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Conversion Methods
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Rectangular to Polar
                </h3>
                <BlockMath math="r = \sqrt{a^2 + b^2}" />
                <BlockMath math="\theta = \tan^{-1}(b/a)" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Polar to Rectangular
                </h3>
                <BlockMath math="a = r\cos\theta" />
                <BlockMath math="b = r\sin\theta" />
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { problem: "\\text{Find } |3 + 4i|", solution: "5" },
              {
                problem: "\\text{Calculate } \\arg(-1 + i)",
                solution: "\\frac{3\\pi}{4}",
              },
              {
                problem: "\\text{Convert } 1 + i \\text{ to polar form}",
                solution: "\\sqrt{2} \\text{ cis } \\frac{\\pi}{4}",
              },
              {
                problem:
                  "\\text{Find } z \\text{ if } |z| = 5, \\arg(z) = \\frac{\\pi}{3}",
                solution: "\\frac{5}{2} + \\frac{5\\sqrt{3}}{2}i",
              },
              {
                problem: "\\text{Verify } |(2+i)(3-4i)| = |2+i||3-4i|",
                solution: "\\sqrt{5} \\times 5 = \\sqrt{65}",
              },
              {
                problem:
                  "\\text{Find } \\arg(z^2) \\text{ if } z = 1 + \\sqrt{3}i",
                solution: "\\frac{2\\pi}{3}",
              },
              {
                problem:
                  "\\text{Convert } 4\\text{ cis } \\frac{2\\pi}{3} \\text{ to rectangular}",
                solution: "-2 + 2\\sqrt{3}i",
              },
              {
                problem: "\\text{Calculate } |\\frac{3+4i}{1-i}|",
                solution: "\\frac{5}{\\sqrt{2}}",
              },
              {
                problem: "\\text{Find argument of } -\\sqrt{3} - i",
                solution: "-\\frac{5\\pi}{6}",
              },
              {
                problem:
                  "\\text{Express } 5e^{i\\pi/2} \\text{ in rectangular}",
                solution: "5i",
              },
              {
                problem: "\\text{Verify } |e^{i\\theta}| = 1",
                solution: "\\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 1",
              },
              {
                problem: "\\text{Find } |(1+i)^{10}|",
                solution: "(\\sqrt{2})^{10} = 32",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border p-4 transition-all hover:border-indigo-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-indigo-900/50 dark:hover:bg-gray-800"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Problem {index + 1}
                  </span>
                </div>
                <div className="mt-2 flex justify-start overflow-x-auto">
                  <BlockMath math={item.problem} />
                </div>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer items-center text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                    <span>Show Solution</span>
                    <svg
                      className="ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180"
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
                  <div className="mt-2 flex justify-start overflow-x-auto rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
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
