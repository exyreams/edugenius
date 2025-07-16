"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AdditionSubtractionOfMatrices() {
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
      label: "Addition and Subtraction of Matrices",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/addition-and-subtraction-of-matrices",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl`}
        >
          Addition and Subtraction of Matrices
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn the fundamental operations of adding and subtracting matrices.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Rules */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-emerald-300 dark:to-teal-300`}
          >
            Basic Rules
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Requirements:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Matrices must have the same dimensions (same number of rows and columns)</li>
                <li>Operations are performed element-wise</li>
                <li>Result matrix has the same dimensions as the original matrices</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">General Form:</h3>
              <p>For matrices A and B of size m×n:</p>
              <BlockMath math="A \pm B = \begin{bmatrix} a_{11} \pm b_{11} & a_{12} \pm b_{12} & \cdots & a_{1n} \pm b_{1n} \\ a_{21} \pm b_{21} & a_{22} \pm b_{22} & \cdots & a_{2n} \pm b_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} \pm b_{m1} & a_{m2} \pm b_{m2} & \cdots & a_{mn} \pm b_{mn} \end{bmatrix}" />
            </div>
          </div>
        </div>

        {/* Matrix Addition */}
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
            Matrix Addition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Formula:</h3>
              <BlockMath math="(A + B)_{ij} = a_{ij} + b_{ij}" />
            </div>
            <div>
              <h3 className="font-semibold">Example:</h3>
              <BlockMath math="A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}" />
              <BlockMath math="A + B = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}" />
            </div>
          </div>
        </div>

        {/* Matrix Subtraction */}
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
            Matrix Subtraction
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Formula:</h3>
              <BlockMath math="(A - B)_{ij} = a_{ij} - b_{ij}" />
            </div>
            <div>
              <h3 className="font-semibold">Example:</h3>
              <BlockMath math="A = \begin{bmatrix} 8 & 5 \\ 3 & 9 \end{bmatrix}, \quad B = \begin{bmatrix} 2 & 1 \\ 4 & 3 \end{bmatrix}" />
              <BlockMath math="A - B = \begin{bmatrix} 8-2 & 5-1 \\ 3-4 & 9-3 \end{bmatrix} = \begin{bmatrix} 6 & 4 \\ -1 & 6 \end{bmatrix}" />
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
            Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Commutative Property:</h3>
              <p><InlineMath math="A + B = B + A" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Associative Property:</h3>
              <p><InlineMath math="(A + B) + C = A + (B + C)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Identity Element:</h3>
              <p><InlineMath math="A + O = O + A = A" /> (where O is the zero matrix)</p>
            </div>
            <div>
              <h3 className="font-semibold">Additive Inverse:</h3>
              <p><InlineMath math="A + (-A) = O" /> (where -A is the negative of A)</p>
            </div>
            <div>
              <h3 className="font-semibold">Distributive Property with Scalar:</h3>
              <p><InlineMath math="k(A + B) = kA + kB" /></p>
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
              <li><strong>Image Processing:</strong> Combining or comparing digital images</li>
              <li><strong>Economics:</strong> Adding cost matrices or budget allocations</li>
              <li><strong>Physics:</strong> Superposition of wave functions or field equations</li>
              <li><strong>Statistics:</strong> Combining data sets or calculating differences</li>
              <li><strong>Computer Graphics:</strong> Transforming coordinates and vertices</li>
              <li><strong>Engineering:</strong> Structural analysis and load combinations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
