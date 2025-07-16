"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function MidpointBetweenTwoPoints() {
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
      label: "Midpoint Between Two Points",
      href: "/mathematics/concepts/intermediate-advanced/geometry/midpoint-between-two-points",
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
          Midpoint Between Two Points
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn how to find the exact center point between any two points in coordinate geometry.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Midpoint Formula */}
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
            Midpoint Formula
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The midpoint M between two points <InlineMath math="P_1(x_1, y_1)" /> and <InlineMath math="P_2(x_2, y_2)" /> is:
            </p>
            <div className="mt-4">
              <BlockMath math="M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
            </div>
            <p className="mt-4">
              The midpoint coordinates are simply the average of the corresponding coordinates of the two endpoints.
            </p>
          </div>
        </div>

        {/* 3D Midpoint Formula */}
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
            3D Midpoint Formula
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For points in 3D space <InlineMath math="P_1(x_1, y_1, z_1)" /> and <InlineMath math="P_2(x_2, y_2, z_2)" />:
            </p>
            <div className="mt-4">
              <BlockMath math="M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}\right)" />
            </div>
            <p className="mt-4">
              The same averaging principle applies to all three dimensions.
            </p>
          </div>
        </div>

        {/* Derivation */}
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
            Derivation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The midpoint formula comes from the concept that the midpoint divides the line segment into two equal parts.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Using Vector Addition:</h3>
                <p>If we start at point P₁ and move halfway to P₂:</p>
                <BlockMath math="M = P_1 + \frac{1}{2}(P_2 - P_1) = \frac{P_1 + P_2}{2}" />
              </div>
              <div>
                <h3 className="font-semibold">Component-wise:</h3>
                <p>For x-coordinate: <InlineMath math="x_m = x_1 + \frac{1}{2}(x_2 - x_1) = \frac{x_1 + x_2}{2}" /></p>
                <p>For y-coordinate: <InlineMath math="y_m = y_1 + \frac{1}{2}(y_2 - y_1) = \frac{y_1 + y_2}{2}" /></p>
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
              <h3 className="font-semibold">Example 1: 2D Midpoint</h3>
              <p>Find the midpoint between A(2, 4) and B(8, 10):</p>
              <div className="mt-2">
                <BlockMath math="M = \left(\frac{2 + 8}{2}, \frac{4 + 10}{2}\right) = \left(\frac{10}{2}, \frac{14}{2}\right) = (5, 7)" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Negative Coordinates</h3>
              <p>Find the midpoint between C(-3, 5) and D(7, -1):</p>
              <div className="mt-2">
                <BlockMath math="M = \left(\frac{-3 + 7}{2}, \frac{5 + (-1)}{2}\right) = \left(\frac{4}{2}, \frac{4}{2}\right) = (2, 2)" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: 3D Midpoint</h3>
              <p>Find the midpoint between P(1, 2, 3) and Q(5, 8, 11):</p>
              <div className="mt-2">
                <BlockMath math="M = \left(\frac{1 + 5}{2}, \frac{2 + 8}{2}, \frac{3 + 11}{2}\right) = (3, 5, 7)" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 4: Fractional Coordinates</h3>
              <p>Find the midpoint between E(1/2, 3/4) and F(5/2, 7/4):</p>
              <div className="mt-2">
                <BlockMath math="M = \left(\frac{\frac{1}{2} + \frac{5}{2}}{2}, \frac{\frac{3}{4} + \frac{7}{4}}{2}\right) = \left(\frac{3}{2}, \frac{5}{4}\right)" />
              </div>
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
            Properties of Midpoints
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Distance Property:</h3>
              <p>The midpoint is equidistant from both endpoints:</p>
              <BlockMath math="d(P_1, M) = d(M, P_2) = \frac{1}{2}d(P_1, P_2)" />
            </div>
            <div>
              <h3 className="font-semibold">Symmetry:</h3>
              <p>The midpoint of AB is the same as the midpoint of BA</p>
            </div>
            <div>
              <h3 className="font-semibold">Collinearity:</h3>
              <p>The midpoint always lies on the line segment connecting the two points</p>
            </div>
            <div>
              <h3 className="font-semibold">Uniqueness:</h3>
              <p>There is exactly one midpoint for any two distinct points</p>
            </div>
          </div>
        </div>

        {/* Section Formula */}
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
            Section Formula (General Case)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The midpoint formula is a special case of the section formula. To divide a line segment in the ratio m:n:
            </p>
            <div className="mt-4">
              <BlockMath math="P = \left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}\right)" />
            </div>
            <p className="mt-4">
              For the midpoint, m = n = 1, giving us the familiar formula:
            </p>
            <div className="mt-2">
              <BlockMath math="M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Computer Graphics:</strong> Interpolation between points and smooth curves</li>
              <li><strong>Navigation:</strong> Finding waypoints and intermediate destinations</li>
              <li><strong>Engineering:</strong> Structural analysis and center of mass calculations</li>
              <li><strong>Game Development:</strong> Character movement and animation paths</li>
              <li><strong>Architecture:</strong> Symmetrical design and balanced layouts</li>
              <li><strong>Statistics:</strong> Data interpolation and trend analysis</li>
              <li><strong>Physics:</strong> Center of mass for two-particle systems</li>
              <li><strong>Surveying:</strong> Land measurement and boundary determination</li>
            </ul>
          </div>
        </div>

        {/* Related Concepts */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-amber-300`}
          >
            Related Concepts
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <p>• <strong>Distance Formula:</strong> Finding the length of line segments</p>
            <p>• <strong>Section Formula:</strong> Dividing line segments in any given ratio</p>
            <p>• <strong>Centroid:</strong> Center point of triangles and polygons</p>
            <p>• <strong>Circumcenter:</strong> Center of circles passing through given points</p>
            <p>• <strong>Perpendicular Bisector:</strong> Line passing through midpoint perpendicular to segment</p>
            <p>• <strong>Linear Interpolation:</strong> Estimating values between known data points</p>
          </div>
        </div>
      </div>
    </div>
  );
}
