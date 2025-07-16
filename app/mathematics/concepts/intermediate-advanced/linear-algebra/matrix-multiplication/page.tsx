"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function MatrixMultiplication() {
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
      label: "Matrix Multiplication",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/matrix-multiplication",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-green-300 dark:to-emerald-400 md:text-5xl lg:text-6xl`}
        >
          Matrix Multiplication
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn the fundamental operation of multiplying matrices and its properties.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Definition */}
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
            Matrix Multiplication Rule
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              For matrices A (m×n) and B (n×p), the product AB is an (m×p) matrix where:
            </p>
            <BlockMath math="(AB)_{ij} = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}" />
            <div>
              <h3 className="font-semibold">Requirements:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Number of columns in A must equal number of rows in B</li>
                <li>If A is m×n and B is n×p, then AB is m×p</li>
                <li>Matrix multiplication is generally not commutative: AB ≠ BA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
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
            Step-by-Step Process
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">To find element (i,j) in AB:</h3>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Take the i-th row of matrix A</li>
                <li>Take the j-th column of matrix B</li>
                <li>Multiply corresponding elements</li>
                <li>Sum all the products</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold">Visual Representation:</h3>
              <p>Row i of A × Column j of B = Element (i,j) of AB</p>
              <BlockMath math="[a_{i1}, a_{i2}, \ldots, a_{in}] \cdot \begin{bmatrix} b_{1j} \\ b_{2j} \\ \vdots \\ b_{nj} \end{bmatrix} = \sum_{k=1}^{n} a_{ik}b_{kj}" />
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
              <h3 className="font-semibold">Example 1: 2×2 Matrices</h3>
              <BlockMath math="A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}" />
              <BlockMath math="AB = \begin{bmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Different Dimensions</h3>
              <BlockMath math="A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}_{2 \times 3}, \quad B = \begin{bmatrix} 7 & 8 \\ 9 & 10 \\ 11 & 12 \end{bmatrix}_{3 \times 2}" />
              <BlockMath math="AB = \begin{bmatrix} 58 & 64 \\ 139 & 154 \end{bmatrix}_{2 \times 2}" />
              <p className="text-sm">Calculation: First row, first column: 1×7 + 2×9 + 3×11 = 7 + 18 + 33 = 58</p>
            </div>
          </div>
        </div>

        {/* Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-orange-300 dark:to-amber-300`}
          >
            Properties of Matrix Multiplication
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Associativity:</h3>
              <p><InlineMath math="(AB)C = A(BC)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Distributivity:</h3>
              <p><InlineMath math="A(B + C) = AB + AC" /></p>
              <p><InlineMath math="(A + B)C = AC + BC" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Scalar Multiplication:</h3>
              <p><InlineMath math="k(AB) = (kA)B = A(kB)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Identity Matrix:</h3>
              <p><InlineMath math="AI = IA = A" /> (where I is the identity matrix)</p>
            </div>
            <div>
              <h3 className="font-semibold">Non-Commutativity:</h3>
              <p>Generally, <InlineMath math="AB \neq BA" /></p>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Matrix-Vector Multiplication:</h3>
              <p>When B is a column vector, AB gives a linear transformation of the vector</p>
              <BlockMath math="A\vec{x} = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} a_{11}x_1 + a_{12}x_2 \\ a_{21}x_1 + a_{22}x_2 \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Square Matrix Powers:</h3>
              <p><InlineMath math="A^2 = AA, \quad A^3 = AAA, \quad A^n = A \cdot A^{n-1}" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Zero Matrix:</h3>
              <p>If AB = O (zero matrix), it doesn't necessarily mean A = O or B = O</p>
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
              <li><strong>Linear Transformations:</strong> Rotations, scaling, and reflections in computer graphics</li>
              <li><strong>Systems of Equations:</strong> Solving Ax = b using matrix operations</li>
              <li><strong>Network Analysis:</strong> Adjacency matrices and graph theory</li>
              <li><strong>Economics:</strong> Input-output models and Leontief matrices</li>
              <li><strong>Machine Learning:</strong> Neural networks and data transformations</li>
              <li><strong>Physics:</strong> Quantum mechanics and state transformations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
