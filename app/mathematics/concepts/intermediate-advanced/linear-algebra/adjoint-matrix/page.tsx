"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AdjointMatrix() {
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
      label: "Adjoint Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/adjoint-matrix",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-violet-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-violet-300 dark:to-purple-400 md:text-5xl lg:text-6xl`}
        >
          Adjoint Matrix
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Understanding the adjoint (adjugate) matrix and its relationship to matrix inverses.
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
              ? "bg-gradient-to-br from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-violet-300 dark:to-purple-300`}
          >
            Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              The adjoint (or adjugate) of a square matrix A is the transpose of the cofactor matrix of A.
            </p>
            <div>
              <h3 className="font-semibold">Notation:</h3>
              <p><InlineMath math="\text{adj}(A)" /> or <InlineMath math="A^*" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Formula:</h3>
              <BlockMath math="\text{adj}(A) = (C_{ij})^T" />
              <p>where <InlineMath math="C_{ij}" /> is the cofactor of element <InlineMath math="a_{ij}" /></p>
            </div>
          </div>
        </div>

        {/* Cofactor Review */}
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
            Cofactor Review
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Cofactor Formula:</h3>
              <BlockMath math="C_{ij} = (-1)^{i+j} M_{ij}" />
              <p>where <InlineMath math="M_{ij}" /> is the minor (determinant of the submatrix obtained by removing row i and column j)</p>
            </div>
            <div>
              <h3 className="font-semibold">Sign Pattern for 3×3:</h3>
              <BlockMath math="\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}" />
            </div>
          </div>
        </div>

        {/* 2x2 Example */}
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
            2×2 Matrix Example
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Given Matrix:</h3>
              <BlockMath math="A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Cofactor Matrix:</h3>
              <BlockMath math="C = \begin{bmatrix} d & -c \\ -b & a \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Adjoint Matrix:</h3>
              <BlockMath math="\text{adj}(A) = C^T = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Numerical Example:</h3>
              <BlockMath math="A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}" />
              <BlockMath math="\text{adj}(A) = \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix}" />
            </div>
          </div>
        </div>

        {/* 3x3 Example */}
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
            3×3 Matrix Example
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Given Matrix:</h3>
              <BlockMath math="A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{bmatrix}" />
            </div>
            <div>
              <h3 className="font-semibold">Step-by-step Cofactors:</h3>
              <div className="text-sm space-y-1">
                <p><InlineMath math="C_{11} = +\begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} = -24" /></p>
                <p><InlineMath math="C_{12} = -\begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} = 20" /></p>
                <p><InlineMath math="C_{13} = +\begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix} = -5" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Adjoint Matrix:</h3>
              <BlockMath math="\text{adj}(A) = \begin{bmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{bmatrix}" />
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Fundamental Property:</h3>
              <BlockMath math="A \cdot \text{adj}(A) = \text{adj}(A) \cdot A = \det(A) \cdot I" />
            </div>
            <div>
              <h3 className="font-semibold">Matrix Inverse Relationship:</h3>
              <BlockMath math="A^{-1} = \frac{1}{\det(A)} \text{adj}(A)" />
              <p>(valid when <InlineMath math="\det(A) \neq 0" />)</p>
            </div>
            <div>
              <h3 className="font-semibold">Determinant of Adjoint:</h3>
              <BlockMath math="\det(\text{adj}(A)) = (\det(A))^{n-1}" />
              <p>where n is the size of the square matrix</p>
            </div>
            <div>
              <h3 className="font-semibold">Adjoint of Adjoint:</h3>
              <BlockMath math="\text{adj}(\text{adj}(A)) = (\det(A))^{n-2} A" />
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
              <li><strong>Matrix Inversion:</strong> Computing inverse matrices using the adjoint formula</li>
              <li><strong>Cramer's Rule:</strong> Solving systems of linear equations</li>
              <li><strong>Computer Graphics:</strong> Inverse transformations in 3D modeling</li>
              <li><strong>Engineering:</strong> Solving structural and electrical network problems</li>
              <li><strong>Physics:</strong> Quantum mechanics and field theory calculations</li>
              <li><strong>Economics:</strong> Input-output analysis and optimization problems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
