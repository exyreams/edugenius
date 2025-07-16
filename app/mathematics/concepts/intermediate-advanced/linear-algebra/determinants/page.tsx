"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function Determinants() {
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
      label: "Determinants",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/determinants",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-red-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-pink-400 md:text-5xl lg:text-6xl`}
        >
          Determinants
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to calculate and understand the significance of matrix determinants.
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
              ? "bg-gradient-to-br from-red-200 to-pink-200 dark:from-red-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-pink-300`}
          >
            Definition of Determinant
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              The determinant is a scalar value that can be computed from a square matrix and encodes certain properties of the linear transformation described by the matrix.
            </p>
            <div>
              <h3 className="font-semibold">Notation:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><InlineMath math="\det(A)" /> or <InlineMath math="|A|" /></li>
                <li>For 2×2 matrix: <InlineMath math="\begin{vmatrix} a & b \\ c & d \end{vmatrix}" /></li>
                <li>Only defined for square matrices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2x2 Determinant */}
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
            2×2 Determinant
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Formula:</h3>
              <BlockMath math="\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc" />
            </div>
            <div>
              <h3 className="font-semibold">Example:</h3>
              <BlockMath math="\begin{vmatrix} 3 & 2 \\ 1 & 4 \end{vmatrix} = (3)(4) - (2)(1) = 12 - 2 = 10" />
            </div>
            <div>
              <h3 className="font-semibold">Geometric Interpretation:</h3>
              <p>The absolute value represents the area of the parallelogram formed by the column vectors.</p>
            </div>
          </div>
        </div>

        {/* 3x3 Determinant */}
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
            3×3 Determinant
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Cofactor Expansion (First Row):</h3>
              <BlockMath math="\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a\begin{vmatrix} e & f \\ h & i \end{vmatrix} - b\begin{vmatrix} d & f \\ g & i \end{vmatrix} + c\begin{vmatrix} d & e \\ g & h \end{vmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Expanded Form:</h3>
              <BlockMath math="= a(ei - fh) - b(di - fg) + c(dh - eg)" />
            </div>
            <div>
              <h3 className="font-semibold">Example:</h3>
              <BlockMath math="\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix} = 1(45-48) - 2(36-42) + 3(32-35) = -3 + 12 - 9 = 0" />
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Properties of Determinants
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Row Operations:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Swapping two rows changes the sign: <InlineMath math="\det(A') = -\det(A)" /></li>
                <li>Multiplying a row by k: <InlineMath math="\det(A') = k \cdot \det(A)" /></li>
                <li>Adding a multiple of one row to another: <InlineMath math="\det(A') = \det(A)" /></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Product Rule:</h3>
              <p><InlineMath math="\det(AB) = \det(A) \cdot \det(B)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Transpose:</h3>
              <p><InlineMath math="\det(A^T) = \det(A)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Inverse:</h3>
              <p><InlineMath math="\det(A^{-1}) = \frac{1}{\det(A)}" /> (if A is invertible)</p>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Identity Matrix:</h3>
              <p><InlineMath math="\det(I) = 1" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Triangular Matrices:</h3>
              <p>For upper or lower triangular matrices, the determinant equals the product of diagonal elements:</p>
              <BlockMath math="\det\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix} = adf" />
            </div>
            <div>
              <h3 className="font-semibold">Singular Matrix:</h3>
              <p>If <InlineMath math="\det(A) = 0" />, then A is not invertible (singular)</p>
            </div>
            <div>
              <h3 className="font-semibold">Diagonal Matrix:</h3>
              <BlockMath math="\det\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} = abc" />
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Matrix Invertibility:</strong> A matrix is invertible if and only if its determinant is non-zero</li>
              <li><strong>System of Equations:</strong> Cramer's rule uses determinants to solve linear systems</li>
              <li><strong>Area and Volume:</strong> Determinants calculate areas (2D) and volumes (3D) of parallelograms and parallelepipeds</li>
              <li><strong>Linear Transformations:</strong> The determinant represents the scaling factor of the transformation</li>
              <li><strong>Eigenvalues:</strong> Found by solving the characteristic equation det(A - λI) = 0</li>
              <li><strong>Cross Product:</strong> The 3D cross product can be computed using determinants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
