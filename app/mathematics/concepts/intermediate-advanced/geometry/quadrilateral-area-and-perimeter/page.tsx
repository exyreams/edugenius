"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function QuadrilateralAreaAndPerimeter() {
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
      label: "Quadrilateral Area and Perimeter",
      href: "/mathematics/concepts/intermediate-advanced/geometry/quadrilateral-area-and-perimeter",
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
          Quadrilateral Area and Perimeter
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the formulas for calculating area and perimeter of different types of quadrilaterals.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* General Quadrilateral */}
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
            General Quadrilateral Formulas
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Perimeter:</h3>
              <BlockMath math="P = a + b + c + d" />
              <p>Where a, b, c, and d are the lengths of the four sides</p>
            </div>
            <div>
              <h3 className="font-semibold">Area (Shoelace Formula):</h3>
              <p>For vertices <InlineMath math="(x_1, y_1), (x_2, y_2), (x_3, y_3), (x_4, y_4)" />:</p>
              <BlockMath math="A = \frac{1}{2}|x_1(y_2-y_4) + x_2(y_3-y_1) + x_3(y_4-y_2) + x_4(y_1-y_3)|" />
            </div>
            <div>
              <h3 className="font-semibold">Area (Diagonal Method):</h3>
              <BlockMath math="A = \frac{1}{2} \cdot d_1 \cdot d_2 \cdot \sin(\theta)" />
              <p>Where d₁ and d₂ are diagonal lengths, θ is the angle between them</p>
            </div>
          </div>
        </div>

        {/* Rectangle */}
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
            Rectangle
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Opposite sides are equal and parallel</li>
                <li>All angles are 90°</li>
                <li>Diagonals are equal and bisect each other</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Formulas:</h3>
              <p>Perimeter: <InlineMath math="P = 2(l + w)" /></p>
              <p>Area: <InlineMath math="A = l \times w" /></p>
              <p>Diagonal: <InlineMath math="d = \sqrt{l^2 + w^2}" /></p>
              <p>Where l = length, w = width</p>
            </div>
          </div>
        </div>

        {/* Square */}
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
            Square
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>All sides are equal</li>
                <li>All angles are 90°</li>
                <li>Diagonals are equal, perpendicular, and bisect each other</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Formulas:</h3>
              <p>Perimeter: <InlineMath math="P = 4s" /></p>
              <p>Area: <InlineMath math="A = s^2" /></p>
              <p>Diagonal: <InlineMath math="d = s\sqrt{2}" /></p>
              <p>Where s = side length</p>
            </div>
          </div>
        </div>

        {/* Parallelogram */}
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
            Parallelogram
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Opposite sides are equal and parallel</li>
                <li>Opposite angles are equal</li>
                <li>Diagonals bisect each other</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Formulas:</h3>
              <p>Perimeter: <InlineMath math="P = 2(a + b)" /></p>
              <p>Area: <InlineMath math="A = base \times height = ab\sin(\theta)" /></p>
              <p>Where a, b are adjacent sides, θ is the angle between them</p>
            </div>
          </div>
        </div>

        {/* Rhombus */}
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
            Rhombus
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>All sides are equal</li>
                <li>Opposite angles are equal</li>
                <li>Diagonals are perpendicular and bisect each other</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Formulas:</h3>
              <p>Perimeter: <InlineMath math="P = 4s" /></p>
              <p>Area: <InlineMath math="A = \frac{1}{2}d_1 d_2" /> (using diagonals)</p>
              <p>Area: <InlineMath math="A = s^2\sin(\theta)" /> (using side and angle)</p>
              <p>Where s = side length, d₁, d₂ = diagonal lengths</p>
            </div>
          </div>
        </div>

        {/* Trapezoid */}
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
            Trapezoid (Trapezium)
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>One pair of parallel sides (bases)</li>
                <li>Non-parallel sides are called legs</li>
                <li>Isosceles trapezoid has equal legs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Formulas:</h3>
              <p>Perimeter: <InlineMath math="P = a + b + c + d" /></p>
              <p>Area: <InlineMath math="A = \frac{1}{2}(b_1 + b_2)h" /></p>
              <p>Where b₁, b₂ are parallel sides (bases), h = height</p>
            </div>
            <div>
              <h3 className="font-semibold">Median (Midsegment):</h3>
              <p>Length: <InlineMath math="m = \frac{b_1 + b_2}{2}" /></p>
              <p>The median is parallel to the bases and its length is the average of the base lengths</p>
            </div>
          </div>
        </div>

        {/* Kite */}
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
            Kite
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Two pairs of adjacent sides are equal</li>
                <li>One diagonal bisects the other at right angles</li>
                <li>One axis of symmetry</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Formulas:</h3>
              <p>Perimeter: <InlineMath math="P = 2(a + b)" /></p>
              <p>Area: <InlineMath math="A = \frac{1}{2}d_1 d_2" /></p>
              <p>Where a, b are lengths of unequal adjacent sides, d₁, d₂ are diagonal lengths</p>
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
            Chapter: Examples and Problem Solving
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: Rectangle</h3>
              <p>Rectangle with length 8 units and width 5 units:</p>
              <div className="mt-2 space-y-1">
                <p>• Perimeter: P = 2(8 + 5) = 26 units</p>
                <p>• Area: A = 8 × 5 = 40 square units</p>
                <p>• Diagonal: d = √(8² + 5²) = √89 ≈ 9.43 units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Rhombus</h3>
              <p>Rhombus with side 6 units and diagonals 8 and 10 units:</p>
              <div className="mt-2 space-y-1">
                <p>• Perimeter: P = 4 × 6 = 24 units</p>
                <p>• Area: A = ½ × 8 × 10 = 40 square units</p>
                <p>• Verification: side² = (d₁/2)² + (d₂/2)² = 4² + 5² = 41, so side = √41 ≈ 6.4</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Trapezoid</h3>
              <p>Trapezoid with parallel sides 12 and 8 units, height 5 units:</p>
              <div className="mt-2 space-y-1">
                <p>• Area: A = ½(12 + 8) × 5 = 50 square units</p>
                <p>• Median length: m = (12 + 8)/2 = 10 units</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Architecture:</strong> Floor plans, window designs, and structural elements</li>
              <li><strong>Engineering:</strong> Cross-sectional areas, material calculations</li>
              <li><strong>Construction:</strong> Land surveying, foundation layouts</li>
              <li><strong>Art and Design:</strong> Geometric patterns, tile arrangements</li>
              <li><strong>Agriculture:</strong> Field area calculations, irrigation planning</li>
              <li><strong>Manufacturing:</strong> Sheet metal cutting, fabric layouts</li>
              <li><strong>Computer Graphics:</strong> 2D shape rendering, collision detection</li>
              <li><strong>Real Estate:</strong> Property area calculations, zoning</li>
            </ul>
          </div>
        </div>

        {/* Special Formulas */}
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
            Special Formulas and Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Bretschneider's Formula (General Quadrilateral):</h3>
              <BlockMath math="A = \sqrt{(s-a)(s-b)(s-c)(s-d) - abcd \cdot \cos^2\left(\frac{B+D}{2}\right)}" />
              <p>Where s = (a+b+c+d)/2, B and D are opposite angles</p>
            </div>
            <div>
              <h3 className="font-semibold">Cyclic Quadrilateral (Brahmagupta's Formula):</h3>
              <BlockMath math="A = \sqrt{(s-a)(s-b)(s-c)(s-d)}" />
              <p>For quadrilaterals inscribed in a circle</p>
            </div>
            <div>
              <h3 className="font-semibold">Ptolemy's Theorem (Cyclic Quadrilateral):</h3>
              <BlockMath math="AC \cdot BD = AB \cdot CD + AD \cdot BC" />
              <p>Relates the sides and diagonals of a cyclic quadrilateral</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}