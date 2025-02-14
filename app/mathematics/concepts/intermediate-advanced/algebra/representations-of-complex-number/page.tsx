"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function ComplexRepresentations() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    { label: "Algebra", href: "/mathematics/formulas/algebra" },
    {
      label: "Representation of Complex Numbers",
      href: "/mathematics/formulas/algebra/complex-numbers",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      <h1 className="mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent md:mb-6 md:text-4xl dark:bg-gradient-to-r dark:from-blue-200 dark:to-purple-300">
        Representation of Complex Numbers
      </h1>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Representations */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300">
            Fundamental Forms
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                Rectangular Form
              </h3>
              <BlockMath math="z = a + bi" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <InlineMath math="a" /> = real part, <InlineMath math="b" /> =
                imaginary part
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                Polar Form
              </h3>
              <BlockMath math="z = r(\cos\theta + i\sin\theta)" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <InlineMath math="r" /> = modulus, <InlineMath math="\theta" />{" "}
                = argument
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                Exponential Form
              </h3>
              <BlockMath math="z = re^{i\theta}" />
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Euler&#39;s formula:{" "}
                <InlineMath math="e^{i\theta} = \cos\theta + i\sin\theta" />
              </p>
            </div>
          </div>
        </div>

        {/* Geometric Interpretation */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300">
            Geometric Representation
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
                <circle cx="140" cy="60" r="3" fill="#3b82f6" />
                <text x="145" y="65" fontSize="12">
                  z = a + bi
                </text>
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
                  stroke="#ef4444"
                  strokeDasharray="4"
                />
                <text x="120" y="80" fontSize="12" fill="#ef4444">
                  θ = arg(z)
                </text>
                <text x="130" y="50" fontSize="12" fill="#10b981">
                  r = |z|
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Conversion Formulas
                </h3>
                <BlockMath math="r = \sqrt{a^2 + b^2}" />
                <BlockMath math="\theta = \tan^{-1}\left(\frac{b}{a}\right)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Rectangular to Polar
                </h3>
                <BlockMath math="a = r\cos\theta, \quad b = r\sin\theta" />
              </div>
            </div>
          </div>
        </div>

        {/* Operations & Properties */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Key Properties
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Complex Conjugate
                </h3>
                <BlockMath math="\overline{z} = a - bi = re^{-i\theta}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Multiplication
                </h3>
                <BlockMath math="z_1z_2 = r_1r_2e^{i(\theta_1+\theta_2)}" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  De Moivre&#39;s Theorem
                </h3>
                <BlockMath math="z^n = r^n(\cos n\theta + i\sin n\theta)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Roots
                </h3>
                <BlockMath math="z^{1/n} = r^{1/n}e^{i(\theta + 2\pi k)/n}" />
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="glass rounded-lg p-6 shadow-md">
          <h2 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-purple-300 dark:to-pink-300">
            Practical Applications
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Electrical Engineering
                </h3>
                <BlockMath math="V = IZ \quad (Ohm's Law for AC circuits)" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Signal Processing
                </h3>
                <BlockMath math="e^{i\omega t} = \cos\omega t + i\sin\omega t" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Quantum Mechanics
                </h3>
                <BlockMath math="\psi(x,t) = Ae^{i(kx - \omega t)}" />
              </div>
              <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Fluid Dynamics
                </h3>
                <BlockMath math="F = \phi + i\psi \quad (Complex Potential)" />
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
              {
                problem: "\\text{Convert } 3 + 4i \\text{ to polar form}",
                solution: "5(\\cos\\tan^{-1}(4/3) + i\\sin\\tan^{-1}(4/3))",
              },
              {
                problem:
                  "\\text{Find } z = 2e^{i\\pi/3} \\text{ in rectangular form}",
                solution: "1 + i\\sqrt{3}",
              },
              {
                problem: "\\text{Compute } (1+i)^4 \\text{ using De Moivre}",
                solution: "-4",
              },
              {
                problem: "\\text{Find cube roots of } 8i",
                solution: "2i, -\\sqrt{3} - i, \\sqrt{3} - i",
              },
              { problem: "\\text{Calculate } |3 - 4i|", solution: "5" },
              {
                problem:
                  "\\text{Express } -2 + 2i \\text{ in exponential form}",
                solution: "2\\sqrt{2}e^{i3\\pi/4}",
              },
              {
                problem:
                  "\\text{Multiply } 2e^{i\\pi/6} \\text{ and } 3e^{i\\pi/3}",
                solution: "6e^{i\\pi/2} = 6i",
              },
              {
                problem: "\\text{Find conjugate of } 5e^{i2\\pi/5}",
                solution: "5e^{-i2\\pi/5}",
              },
              {
                problem:
                  "\\text{Convert } 5\\text{cis}(120^\\circ) \\text{ to rectangular}",
                solution: "-2.5 + i4.330",
              },
              { problem: "\\text{Solve } z^2 = -9", solution: "\\pm 3i" },
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
