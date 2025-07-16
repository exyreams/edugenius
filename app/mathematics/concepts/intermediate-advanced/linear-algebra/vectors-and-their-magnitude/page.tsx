"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function VectorsAndTheirMagnitude() {
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
      label: "Vectors and Their Magnitude",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/vectors-and-their-magnitude",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-indigo-400 md:text-5xl lg:text-6xl`}
        >
          Vectors and Their Magnitude
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Understanding vectors as mathematical objects with both direction and magnitude.
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
            Vector Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              A vector is a mathematical object that has both magnitude (length) and direction.
            </p>
            <div>
              <h3 className="font-semibold">Vector Notation:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Bold lowercase: <strong>v</strong></li>
                <li>Arrow notation: <InlineMath math="\vec{v}" /></li>
                <li>Component form: <InlineMath math="\langle v_1, v_2, v_3 \rangle" /></li>
                <li>Column vector: <InlineMath math="\begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}" /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Magnitude Formulas */}
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
            Vector Magnitude (Length)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">2D Vector:</h3>
              <p>For vector <InlineMath math="\vec{v} = \langle v_1, v_2 \rangle" />:</p>
              <BlockMath math="|\vec{v}| = \sqrt{v_1^2 + v_2^2}" />
            </div>
            <div>
              <h3 className="font-semibold">3D Vector:</h3>
              <p>For vector <InlineMath math="\vec{v} = \langle v_1, v_2, v_3 \rangle" />:</p>
              <BlockMath math="|\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}" />
            </div>
            <div>
              <h3 className="font-semibold">n-Dimensional Vector:</h3>
              <p>For vector <InlineMath math="\vec{v} = \langle v_1, v_2, \ldots, v_n \rangle" />:</p>
              <BlockMath math="|\vec{v}| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2} = \sqrt{\sum_{i=1}^{n} v_i^2}" />
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
              <h3 className="font-semibold">Example 1: 2D Vector</h3>
              <p>Find the magnitude of <InlineMath math="\vec{v} = \langle 3, 4 \rangle" /></p>
              <div className="mt-2 space-y-1">
                <p><InlineMath math="|\vec{v}| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: 3D Vector</h3>
              <p>Find the magnitude of <InlineMath math="\vec{u} = \langle 1, -2, 2 \rangle" /></p>
              <div className="mt-2 space-y-1">
                <p><InlineMath math="|\vec{u}| = \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Position Vector</h3>
              <p>A point P(2, -1, 3) creates position vector <InlineMath math="\vec{OP} = \langle 2, -1, 3 \rangle" /></p>
              <div className="mt-2 space-y-1">
                <p>Distance from origin: <InlineMath math="|\vec{OP}| = \sqrt{2^2 + (-1)^2 + 3^2} = \sqrt{14}" /></p>
              </div>
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
            Properties of Vector Magnitude
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Non-negativity:</h3>
              <p><InlineMath math="|\vec{v}| \geq 0" /> for all vectors <InlineMath math="\vec{v}" /></p>
              <p><InlineMath math="|\vec{v}| = 0" /> if and only if <InlineMath math="\vec{v} = \vec{0}" /> (zero vector)</p>
            </div>
            <div>
              <h3 className="font-semibold">Scalar Multiplication:</h3>
              <p><InlineMath math="|k\vec{v}| = |k| \cdot |\vec{v}|" /> for scalar k</p>
            </div>
            <div>
              <h3 className="font-semibold">Triangle Inequality:</h3>
              <p><InlineMath math="|\vec{u} + \vec{v}| \leq |\vec{u}| + |\vec{v}|" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Reverse Triangle Inequality:</h3>
              <p><InlineMath math="|||\vec{u}| - |\vec{v}|| \leq |\vec{u} - \vec{v}|" /></p>
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
              <li><strong>Physics:</strong> Velocity, acceleration, and force vectors</li>
              <li><strong>Engineering:</strong> Displacement and load analysis</li>
              <li><strong>Computer Graphics:</strong> 3D modeling and transformations</li>
              <li><strong>Navigation:</strong> GPS coordinates and direction vectors</li>
              <li><strong>Data Science:</strong> Feature vectors and distance metrics</li>
              <li><strong>Economics:</strong> Multi-dimensional optimization problems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
