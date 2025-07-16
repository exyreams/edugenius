"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function CramersRule() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Linear Algebra",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra",
    },
    {
      label: "Cramer's Rule",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/cramers-rule",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent dark:from-amber-300 dark:to-orange-400 md:text-5xl lg:text-6xl`}
        >
          Cramer's Rule
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A method for solving systems of linear equations using determinants.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* General Statement */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-orange-300`}
          >
            Cramer's Rule Statement
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              For a system of n linear equations in n unknowns Ax = b, where det(A) ≠ 0:
            </p>
            <BlockMath math="x_i = \frac{\det(A_i)}{\det(A)}" />
            <p>where <InlineMath math="A_i" /> is the matrix A with the i-th column replaced by vector b.</p>
            <div>
              <h3 className="font-semibold">Requirements:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Square coefficient matrix (n×n)</li>
                <li>Non-zero determinant: det(A) ≠ 0</li>
                <li>Unique solution exists</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2x2 System */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-indigo-300`}
          >
            2×2 System
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">System:</h3>
              <BlockMath math="\begin{cases} ax + by = e \\ cx + dy = f \end{cases}" />
            </div>
            <div>
              <h3 className="font-semibold">Matrix Form:</h3>
              <BlockMath math="\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} e \\ f \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Solution:</h3>
              <BlockMath math="x = \frac{\begin{vmatrix} e & b \\ f & d \end{vmatrix}}{\begin{vmatrix} a & b \\ c & d \end{vmatrix}} = \frac{ed - bf}{ad - bc}" />
              <BlockMath math="y = \frac{\begin{vmatrix} a & e \\ c & f \end{vmatrix}}{\begin{vmatrix} a & b \\ c & d \end{vmatrix}} = \frac{af - ce}{ad - bc}" />
            </div>
          </div>
        </div>

        {/* 3x3 System */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            3×3 System
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">System:</h3>
              <BlockMath math="\begin{cases} a_1x + b_1y + c_1z = d_1 \\ a_2x + b_2y + c_2z = d_2 \\ a_3x + b_3y + c_3z = d_3 \end{cases}" />
            </div>
            <div>
              <h3 className="font-semibold">Coefficient Matrix:</h3>
              <BlockMath math="A = \begin{bmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Solutions:</h3>
              <BlockMath math="x = \frac{\det(A_x)}{\det(A)}, \quad y = \frac{\det(A_y)}{\det(A)}, \quad z = \frac{\det(A_z)}{\det(A)}" />
              <p>where:</p>
              <div className="text-sm space-y-1">
                <p><InlineMath math="A_x = \begin{bmatrix} d_1 & b_1 & c_1 \\ d_2 & b_2 & c_2 \\ d_3 & b_3 & c_3 \end{bmatrix}" /></p>
                <p><InlineMath math="A_y = \begin{bmatrix} a_1 & d_1 & c_1 \\ a_2 & d_2 & c_2 \\ a_3 & d_3 & c_3 \end{bmatrix}" /></p>
                <p><InlineMath math="A_z = \begin{bmatrix} a_1 & b_1 & d_1 \\ a_2 & b_2 & d_2 \\ a_3 & b_3 & d_3 \end{bmatrix}" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-violet-300`}
          >
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: 2×2 System</h3>
              <BlockMath math="\begin{cases} 2x + 3y = 7 \\ x - y = 1 \end{cases}" />
              <div className="mt-2 space-y-1 text-sm">
                <p>Step 1: <InlineMath math="\det(A) = \begin{vmatrix} 2 & 3 \\ 1 & -1 \end{vmatrix} = 2(-1) - 3(1) = -5" /></p>
                <p>Step 2: <InlineMath math="x = \frac{\begin{vmatrix} 7 & 3 \\ 1 & -1 \end{vmatrix}}{-5} = \frac{-10}{-5} = 2" /></p>
                <p>Step 3: <InlineMath math="y = \frac{\begin{vmatrix} 2 & 7 \\ 1 & 1 \end{vmatrix}}{-5} = \frac{-5}{-5} = 1" /></p>
                <p>Solution: x = 2, y = 1</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: 3×3 System</h3>
              <BlockMath math="\begin{cases} x + 2y + z = 6 \\ 2x + y - z = 1 \\ x - y + 2z = 5 \end{cases}" />
              <div className="mt-2 space-y-1 text-sm">
                <p>Step 1: <InlineMath math="\det(A) = \begin{vmatrix} 1 & 2 & 1 \\ 2 & 1 & -1 \\ 1 & -1 & 2 \end{vmatrix} = -6" /></p>
                <p>Step 2: Calculate <InlineMath math="\det(A_x), \det(A_y), \det(A_z)" /></p>
                <p>Solution: x = 1, y = 2, z = 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages and Limitations */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Advantages and Limitations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Advantages:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Direct formula for solution</li>
                <li>Useful for theoretical analysis</li>
                <li>Good for small systems (2×2, 3×3)</li>
                <li>Provides insight into system behavior</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Limitations:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Computationally expensive for large systems</li>
                <li>Only works when det(A) ≠ 0</li>
                <li>Requires calculation of multiple determinants</li>
                <li>Numerical instability for ill-conditioned matrices</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">When to Use:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Small systems (n ≤ 3)</li>
                <li>Theoretical derivations</li>
                <li>When exact symbolic solutions are needed</li>
                <li>Educational purposes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Engineering:</strong> Circuit analysis and structural calculations</li>
              <li><strong>Economics:</strong> Market equilibrium and resource allocation</li>
              <li><strong>Physics:</strong> Force balance and equilibrium problems</li>
              <li><strong>Computer Graphics:</strong> Solving transformation equations</li>
              <li><strong>Statistics:</strong> Regression analysis and curve fitting</li>
              <li><strong>Chemistry:</strong> Balancing chemical equations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
