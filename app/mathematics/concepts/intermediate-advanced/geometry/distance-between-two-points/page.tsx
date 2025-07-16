"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function DistanceBetweenTwoPoints() {
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
      label: "Distance Between Two Points",
      href: "/mathematics/concepts/intermediate-advanced/geometry/distance-between-two-points",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-red-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-orange-400 md:text-5xl lg:text-6xl`}
        >
          Distance Between Two Points
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn how to calculate the distance between any two points in coordinate geometry using the distance formula.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* 2D Distance Formula */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-orange-300`}
          >
            Distance Formula in 2D
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The distance between two points <InlineMath math="P_1(x_1, y_1)" /> and <InlineMath math="P_2(x_2, y_2)" /> in a 2D coordinate plane is:
            </p>
            <div className="mt-4">
              <BlockMath math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
            </div>
            <p className="mt-4">
              This formula is derived from the Pythagorean theorem, where the distance is the hypotenuse of a right triangle formed by the horizontal and vertical differences between the points.
            </p>
          </div>
        </div>

        {/* Derivation */}
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
            Derivation from Pythagorean Theorem
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Consider two points <InlineMath math="P_1(x_1, y_1)" /> and <InlineMath math="P_2(x_2, y_2)" />:
            </p>
            <div className="mt-4 space-y-2">
              <p>• Horizontal distance: <InlineMath math="|x_2 - x_1|" /></p>
              <p>• Vertical distance: <InlineMath math="|y_2 - y_1|" /></p>
              <p>• These form the legs of a right triangle</p>
            </div>
            <p className="mt-4">
              By the Pythagorean theorem:
            </p>
            <div className="mt-2">
              <BlockMath math="d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2" />
            </div>
            <p className="mt-2">
              Taking the square root of both sides gives us the distance formula.
            </p>
          </div>
        </div>

        {/* 3D Distance Formula */}
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
            Distance Formula in 3D
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For points in 3D space <InlineMath math="P_1(x_1, y_1, z_1)" /> and <InlineMath math="P_2(x_2, y_2, z_2)" />:
            </p>
            <div className="mt-4">
              <BlockMath math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}" />
            </div>
            <p className="mt-4">
              This extends the 2D formula by adding the third dimension (z-coordinate).
            </p>
          </div>
        </div>

        {/* n-Dimensional Distance */}
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
            n-Dimensional Distance (Euclidean Distance)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For points in n-dimensional space:
            </p>
            <div className="mt-4">
              <BlockMath math="d = \sqrt{\sum_{i=1}^{n} (x_{2i} - x_{1i})^2}" />
            </div>
            <p className="mt-4">
              Where <InlineMath math="x_{1i}" /> and <InlineMath math="x_{2i}" /> are the coordinates of the first and second points in the i-th dimension.
            </p>
          </div>
        </div>

        {/* Examples */}
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
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: 2D Distance</h3>
              <p>Find the distance between points A(3, 4) and B(7, 1):</p>
              <div className="mt-2">
                <BlockMath math="d = \sqrt{(7-3)^2 + (1-4)^2} = \sqrt{16 + 9} = \sqrt{25} = 5" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: 3D Distance</h3>
              <p>Find the distance between points P(1, 2, 3) and Q(4, 6, 8):</p>
              <div className="mt-2">
                <BlockMath math="d = \sqrt{(4-1)^2 + (6-2)^2 + (8-3)^2} = \sqrt{9 + 16 + 25} = \sqrt{50} = 5\sqrt{2}" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Origin Distance</h3>
              <p>Distance from origin (0, 0) to point (3, 4):</p>
              <div className="mt-2">
                <BlockMath math="d = \sqrt{(3-0)^2 + (4-0)^2} = \sqrt{9 + 16} = 5" />
              </div>
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
              <h3 className="font-semibold">Horizontal Distance:</h3>
              <p>When <InlineMath math="y_1 = y_2" />: <InlineMath math="d = |x_2 - x_1|" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Vertical Distance:</h3>
              <p>When <InlineMath math="x_1 = x_2" />: <InlineMath math="d = |y_2 - y_1|" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Same Point:</h3>
              <p>When <InlineMath math="P_1 = P_2" />: <InlineMath math="d = 0" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Distance from Origin:</h3>
              <p>Distance from (0, 0) to (x, y): <InlineMath math="d = \sqrt{x^2 + y^2}" /></p>
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
              <li><strong>Navigation:</strong> GPS systems and route planning</li>
              <li><strong>Computer Graphics:</strong> 3D modeling and collision detection</li>
              <li><strong>Physics:</strong> Calculating displacement and motion</li>
              <li><strong>Engineering:</strong> Structural analysis and design</li>
              <li><strong>Data Science:</strong> Clustering algorithms and similarity measures</li>
              <li><strong>Game Development:</strong> Character movement and AI pathfinding</li>
              <li><strong>Architecture:</strong> Building design and space planning</li>
              <li><strong>Astronomy:</strong> Calculating distances between celestial objects</li>
            </ul>
          </div>
        </div>

        {/* Related Concepts */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-indigo-300 dark:to-purple-300`}
          >
            Related Concepts
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <p>• <strong>Midpoint Formula:</strong> Finding the center point between two points</p>
            <p>• <strong>Section Formula:</strong> Dividing a line segment in a given ratio</p>
            <p>• <strong>Manhattan Distance:</strong> <InlineMath math="|x_2-x_1| + |y_2-y_1|" /> (city block distance)</p>
            <p>• <strong>Chebyshev Distance:</strong> <InlineMath math="\max(|x_2-x_1|, |y_2-y_1|)" /></p>
            <p>• <strong>Circle Equation:</strong> Using distance from center to define a circle</p>
            <p>• <strong>Sphere Equation:</strong> 3D extension using distance formula</p>
          </div>
        </div>
      </div>
    </div>
  );
}
