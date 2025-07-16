"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function DistanceFromPointToLine() {
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
      label: "Distance from a Point to a Line",
      href: "/mathematics/concepts/intermediate-advanced/geometry/distance-from-a-point-to-line",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-pink-700 to-rose-800 bg-clip-text text-4xl font-bold text-transparent dark:from-pink-300 dark:to-rose-400 md:text-5xl lg:text-6xl`}
        >
          Distance from a Point to a Line
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn how to calculate the shortest distance from a point to a line using various methods.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Standard Form Formula */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-pink-300 dark:to-rose-300`}
          >
            Distance Formula (Standard Form)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a line in standard form <InlineMath math="Ax + By + C = 0" /> and point <InlineMath math="P(x_0, y_0)" />:
            </p>
            <div className="mt-4">
              <BlockMath math="d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}" />
            </div>
            <p className="mt-4">
              This gives the perpendicular (shortest) distance from the point to the line.
            </p>
            <div className="mt-4 space-y-2">
              <p>• The numerator is the absolute value of substituting the point into the line equation</p>
              <p>• The denominator is the magnitude of the normal vector (A, B)</p>
              <p>• The result is always positive (distance cannot be negative)</p>
            </div>
          </div>
        </div>

        {/* Slope-Intercept Form */}
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
            Distance Formula (Slope-Intercept Form)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a line <InlineMath math="y = mx + b" /> and point <InlineMath math="P(x_0, y_0)" />:
            </p>
            <div className="mt-4">
              <BlockMath math="d = \frac{|mx_0 - y_0 + b|}{\sqrt{m^2 + 1}}" />
            </div>
            <p className="mt-4">
              This is derived by converting <InlineMath math="y = mx + b" /> to standard form: <InlineMath math="mx - y + b = 0" />
            </p>
            <p className="mt-2">
              Where A = m, B = -1, and C = b in the standard form formula.
            </p>
          </div>
        </div>

        {/* Vector Method */}
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
            Vector Method
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a line passing through point <InlineMath math="A(x_1, y_1)" /> with direction vector <InlineMath math="\vec{d} = (d_x, d_y)" />:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Step 1: Find vector from line point to external point</h3>
                <BlockMath math="\vec{AP} = (x_0 - x_1, y_0 - y_1)" />
              </div>
              <div>
                <h3 className="font-semibold">Step 2: Calculate distance using cross product</h3>
                <BlockMath math="d = \frac{|\vec{AP} \times \vec{d}|}{|\vec{d}|}" />
              </div>
              <div>
                <h3 className="font-semibold">In 2D, this becomes:</h3>
                <BlockMath math="d = \frac{|(x_0 - x_1)d_y - (y_0 - y_1)d_x|}{\sqrt{d_x^2 + d_y^2}}" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Horizontal Line (y = k):</h3>
              <p>Distance from point <InlineMath math="(x_0, y_0)" /> to line <InlineMath math="y = k" />:</p>
              <BlockMath math="d = |y_0 - k|" />
            </div>
            <div>
              <h3 className="font-semibold">Vertical Line (x = h):</h3>
              <p>Distance from point <InlineMath math="(x_0, y_0)" /> to line <InlineMath math="x = h" />:</p>
              <BlockMath math="d = |x_0 - h|" />
            </div>
            <div>
              <h3 className="font-semibold">Line through Origin (y = mx):</h3>
              <p>Distance from point <InlineMath math="(x_0, y_0)" /> to line <InlineMath math="y = mx" />:</p>
              <BlockMath math="d = \frac{|mx_0 - y_0|}{\sqrt{m^2 + 1}}" />
            </div>
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
              <h3 className="font-semibold">Example 1: Standard Form</h3>
              <p>Find distance from point (2, 3) to line 3x + 4y - 12 = 0:</p>
              <div className="mt-2">
                <BlockMath math="d = \frac{|3(2) + 4(3) - 12|}{\sqrt{3^2 + 4^2}} = \frac{|6 + 12 - 12|}{\sqrt{9 + 16}} = \frac{6}{5} = 1.2" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Slope-Intercept Form</h3>
              <p>Find distance from point (1, 5) to line y = 2x + 1:</p>
              <div className="mt-2">
                <BlockMath math="d = \frac{|2(1) - 5 + 1|}{\sqrt{2^2 + 1}} = \frac{|2 - 5 + 1|}{\sqrt{5}} = \frac{2}{\sqrt{5}} = \frac{2\sqrt{5}}{5}" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Horizontal Line</h3>
              <p>Find distance from point (4, 7) to line y = 3:</p>
              <div className="mt-2">
                <BlockMath math="d = |7 - 3| = 4" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 4: Vertical Line</h3>
              <p>Find distance from point (-2, 5) to line x = 1:</p>
              <div className="mt-2">
                <BlockMath math="d = |-2 - 1| = 3" />
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Interpretation */}
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
            Geometric Interpretation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Perpendicular Distance:</h3>
              <p>The distance formula gives the length of the perpendicular from the point to the line.</p>
            </div>
            <div>
              <h3 className="font-semibold">Foot of Perpendicular:</h3>
              <p>The point where the perpendicular meets the line can be found using:</p>
              <BlockMath math="x_f = x_0 - \frac{A(Ax_0 + By_0 + C)}{A^2 + B^2}" />
              <BlockMath math="y_f = y_0 - \frac{B(Ax_0 + By_0 + C)}{A^2 + B^2}" />
            </div>
            <div>
              <h3 className="font-semibold">Signed Distance:</h3>
              <p>Without absolute value, the formula gives signed distance, indicating which side of the line the point is on.</p>
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
              <li><strong>Computer Graphics:</strong> Collision detection and proximity testing</li>
              <li><strong>Robotics:</strong> Path planning and obstacle avoidance</li>
              <li><strong>GIS:</strong> Finding nearest roads or boundaries</li>
              <li><strong>Engineering:</strong> Clearance calculations and safety margins</li>
              <li><strong>Machine Learning:</strong> Support Vector Machines and classification</li>
              <li><strong>Architecture:</strong> Building setbacks and zoning compliance</li>
              <li><strong>Navigation:</strong> Cross-track error in GPS systems</li>
              <li><strong>Quality Control:</strong> Measuring deviations from specifications</li>
            </ul>
          </div>
        </div>

        {/* 3D Extension */}
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
            3D Extension
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a line in 3D space defined by point <InlineMath math="A" /> and direction vector <InlineMath math="\vec{d}" />:
            </p>
            <div className="mt-4">
              <BlockMath math="d = \frac{|\vec{AP} \times \vec{d}|}{|\vec{d}|}" />
            </div>
            <p className="mt-4">
              Where <InlineMath math="\vec{AP}" /> is the vector from point A on the line to point P, and × denotes the cross product.
            </p>
            <p className="mt-2">
              This formula extends naturally to higher dimensions using the same vector principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
