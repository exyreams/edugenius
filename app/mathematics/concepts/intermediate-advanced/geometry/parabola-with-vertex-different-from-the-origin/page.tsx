"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function ParabolaWithVertexDifferentFromOrigin() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Geometry",
      href: "/mathematics/concepts/intermediate-advanced/geometry",
    },
    {
      label: "Parabola with Vertex Different from Origin",
      href: "/mathematics/concepts/intermediate-advanced/geometry/parabola-with-vertex-different-from-the-origin",
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
          Parabola with Vertex Different from Origin
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore parabolas with vertices at any point (h, k) in the coordinate plane.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Standard Forms */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-violet-300 dark:to-purple-300`}
          >
            Standard Forms of Translated Parabola
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Vertical Parabola (opens up/down):</h3>
              <BlockMath math="(x - h)^2 = 4p(y - k)" />
              <p>Vertex at (h, k), opens up if p {">"} 0, down if p {"<"} 0</p>
            </div>
            <div>
              <h3 className="font-semibold">Horizontal Parabola (opens left/right):</h3>
              <BlockMath math="(y - k)^2 = 4p(x - h)" />
              <p>Vertex at (h, k), opens right if p {">"} 0, left if p {"<"} 0</p>
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>(h, k)</strong> = vertex coordinates</p>
              <p>• <strong>p</strong> = distance from vertex to focus (and vertex to directrix)</p>
              <p>• <strong>|p|</strong> determines the "width" of the parabola</p>
            </div>
          </div>
        </div>

        {/* Key Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-blue-300 dark:to-indigo-300`}
          >
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Vertex:</h3>
              <p>The vertex is at point (h, k) - the turning point of the parabola</p>
            </div>
            <div>
              <h3 className="font-semibold">Focus:</h3>
              <p>For vertical parabola: <InlineMath math="F(h, k + p)" /></p>
              <p>For horizontal parabola: <InlineMath math="F(h + p, k)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Directrix:</h3>
              <p>For vertical parabola: <InlineMath math="y = k - p" /></p>
              <p>For horizontal parabola: <InlineMath math="x = h - p" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Axis of Symmetry:</h3>
              <p>For vertical parabola: <InlineMath math="x = h" /></p>
              <p>For horizontal parabola: <InlineMath math="y = k" /></p>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-teal-300 dark:to-cyan-300`}
          >
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: Vertical Parabola Opening Up</h3>
              <p>Equation: <InlineMath math="(x - 3)^2 = 8(y + 2)" /></p>
              <div className="mt-2 space-y-1">
                <p>• Vertex: (3, -2)</p>
                <p>• 4p = 8, so p = 2</p>
                <p>• Opens upward (p {">"} 0)</p>
                <p>• Focus: (3, -2 + 2) = (3, 0)</p>
                <p>• Directrix: y = -2 - 2 = -4</p>
                <p>• Axis of symmetry: x = 3</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Horizontal Parabola Opening Left</h3>
              <p>Equation: <InlineMath math="(y + 1)^2 = -12(x - 4)" /></p>
              <div className="mt-2 space-y-1">
                <p>• Vertex: (4, -1)</p>
                <p>• 4p = -12, so p = -3</p>
                <p>• Opens leftward (p {"<"} 0)</p>
                <p>• Focus: (4 + (-3), -1) = (1, -1)</p>
                <p>• Directrix: x = 4 - (-3) = 7</p>
                <p>• Axis of symmetry: y = -1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-rose-300 dark:to-pink-300`}
          >
            Applications and Problem Solving
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Real-World Applications:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Architecture:</strong> Parabolic arches and bridges with specific vertex positions</li>
                <li><strong>Engineering:</strong> Satellite dishes and reflectors positioned at optimal locations</li>
                <li><strong>Physics:</strong> Projectile motion with launch points not at origin</li>
                <li><strong>Optics:</strong> Parabolic mirrors and lenses with displaced focal points</li>
                <li><strong>Economics:</strong> Profit/cost functions with maximum/minimum points</li>
                <li><strong>Sports:</strong> Trajectory analysis for balls thrown from various heights</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Problem-Solving Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Identify the vertex (h, k) from the equation</li>
                <li>Determine the value of p from the coefficient</li>
                <li>Find the direction of opening based on the sign of p</li>
                <li>Calculate the focus and directrix using the formulas</li>
                <li>Sketch the parabola using key points and symmetry</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}