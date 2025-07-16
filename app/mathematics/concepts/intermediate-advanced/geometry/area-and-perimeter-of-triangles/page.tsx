"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AreaAndPerimeterOfTriangles() {
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
      label: "Area and Perimeter of Triangles",
      href: "/mathematics/concepts/intermediate-advanced/geometry/area-and-perimeter-of-triangles",
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
          Area and Perimeter of Triangles
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the formulas for calculating area and perimeter of different types of triangles.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Formulas */}
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
            Basic Triangle Formulas
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Perimeter:</h3>
              <BlockMath math="P = a + b + c" />
              <p>Where a, b, and c are the lengths of the three sides</p>
            </div>
            <div>
              <h3 className="font-semibold">Area (Base × Height):</h3>
              <BlockMath math="A = \frac{1}{2} \times \text{base} \times \text{height}" />
              <p>Where height is perpendicular to the base</p>
            </div>
          </div>
        </div>

        {/* Heron's Formula */}
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
            Heron's Formula
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              When you know all three sides, use Heron's formula:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Semi-perimeter:</h3>
                <BlockMath math="s = \frac{a + b + c}{2}" />
              </div>
              <div>
                <h3 className="font-semibold">Area:</h3>
                <BlockMath math="A = \sqrt{s(s-a)(s-b)(s-c)}" />
              </div>
            </div>
            <p className="mt-4">
              This formula works for any triangle when you know the lengths of all three sides.
            </p>
          </div>
        </div>

        {/* Coordinate Geometry */}
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
            Coordinate Geometry Formula
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              For a triangle with vertices at <InlineMath math="(x_1, y_1)" />, <InlineMath math="(x_2, y_2)" />, and <InlineMath math="(x_3, y_3)" />:
            </p>
            <div className="mt-4">
              <BlockMath math="A = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|" />
            </div>
            <p className="mt-4">
              This formula uses the cross product method and works for any triangle in the coordinate plane.
            </p>
          </div>
        </div>

        {/* Special Triangles */}
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
            Special Triangle Types
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Equilateral Triangle:</h3>
              <p>All sides equal (a = b = c)</p>
              <div className="mt-2 space-y-2">
                <p>Perimeter: <InlineMath math="P = 3a" /></p>
                <p>Area: <InlineMath math="A = \frac{\sqrt{3}}{4}a^2" /></p>
                <p>Height: <InlineMath math="h = \frac{\sqrt{3}}{2}a" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Isosceles Triangle:</h3>
              <p>Two sides equal (a = b, base = c)</p>
              <div className="mt-2 space-y-2">
                <p>Perimeter: <InlineMath math="P = 2a + c" /></p>
                <p>Area: <InlineMath math="A = \frac{c}{4}\sqrt{4a^2 - c^2}" /></p>
                <p>Height to base: <InlineMath math="h = \frac{1}{2}\sqrt{4a^2 - c^2}" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Right Triangle:</h3>
              <p>One 90° angle (legs a, b; hypotenuse c)</p>
              <div className="mt-2 space-y-2">
                <p>Perimeter: <InlineMath math="P = a + b + c" /></p>
                <p>Area: <InlineMath math="A = \frac{1}{2}ab" /></p>
                <p>Pythagorean theorem: <InlineMath math="c^2 = a^2 + b^2" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Trigonometric Formulas */}
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
            Trigonometric Area Formulas
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Using Two Sides and Included Angle:</h3>
              <BlockMath math="A = \frac{1}{2}ab\sin C" />
              <p>Where a and b are sides, and C is the angle between them</p>
            </div>
            <div>
              <h3 className="font-semibold">Using All Three Sides and Angles:</h3>
              <BlockMath math="A = \frac{abc}{4R}" />
              <p>Where R is the circumradius of the triangle</p>
            </div>
            <div>
              <h3 className="font-semibold">Using Inradius:</h3>
              <BlockMath math="A = rs" />
              <p>Where r is the inradius and s is the semi-perimeter</p>
            </div>
          </div>
        </div>

        {/* Examples */}
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
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: Right Triangle</h3>
              <p>Triangle with legs 3 and 4 units:</p>
              <div className="mt-2 space-y-2">
                <p>Hypotenuse: <InlineMath math="c = \sqrt{3^2 + 4^2} = 5" /> units</p>
                <p>Perimeter: <InlineMath math="P = 3 + 4 + 5 = 12" /> units</p>
                <p>Area: <InlineMath math="A = \frac{1}{2} \times 3 \times 4 = 6" /> square units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Using Heron's Formula</h3>
              <p>Triangle with sides 5, 6, and 7 units:</p>
              <div className="mt-2 space-y-2">
                <p>Semi-perimeter: <InlineMath math="s = \frac{5 + 6 + 7}{2} = 9" /></p>
                <p>Area: <InlineMath math="A = \sqrt{9(9-5)(9-6)(9-7)} = \sqrt{9 \times 4 \times 3 \times 2} = 6\sqrt{6}" /> ≈ 14.7 square units</p>
                <p>Perimeter: <InlineMath math="P = 5 + 6 + 7 = 18" /> units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Equilateral Triangle</h3>
              <p>Equilateral triangle with side length 6 units:</p>
              <div className="mt-2 space-y-2">
                <p>Perimeter: <InlineMath math="P = 3 \times 6 = 18" /> units</p>
                <p>Area: <InlineMath math="A = \frac{\sqrt{3}}{4} \times 6^2 = 9\sqrt{3}" /> ≈ 15.6 square units</p>
                <p>Height: <InlineMath math="h = \frac{\sqrt{3}}{2} \times 6 = 3\sqrt{3}" /> ≈ 5.2 units</p>
              </div>
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
              <li><strong>Architecture:</strong> Roof design, structural triangulation</li>
              <li><strong>Engineering:</strong> Truss analysis, load distribution</li>
              <li><strong>Surveying:</strong> Land measurement and triangulation</li>
              <li><strong>Navigation:</strong> GPS positioning and triangulation</li>
              <li><strong>Computer Graphics:</strong> 3D modeling and mesh generation</li>
              <li><strong>Physics:</strong> Force vector analysis</li>
              <li><strong>Art and Design:</strong> Geometric patterns and compositions</li>
              <li><strong>Construction:</strong> Foundation layout and framing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
