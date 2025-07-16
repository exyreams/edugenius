"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function Circumference() {
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
      label: "Circumference",
      href: "/mathematics/concepts/intermediate-advanced/geometry/circumference",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Circumference
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the properties and formulas for calculating the circumference of circles.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Formula */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-cyan-300`}
          >
            Circumference Formula
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Using Radius:</h3>
              <BlockMath math="C = 2\pi r" />
            </div>
            <div>
              <h3 className="font-semibold">Using Diameter:</h3>
              <BlockMath math="C = \pi d" />
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>C</strong> = circumference</p>
              <p>• <strong>r</strong> = radius (distance from center to edge)</p>
              <p>• <strong>d</strong> = diameter (distance across circle through center)</p>
              <p>• <strong>π</strong> ≈ 3.14159... (mathematical constant)</p>
              <p>• <strong>Relationship:</strong> d = 2r</p>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
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
            Key Concepts
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Definition:</h3>
              <p>The circumference is the distance around the edge of a circle. It's the perimeter of a circle, representing the total length of the circular boundary.</p>
            </div>
            <div>
              <h3 className="font-semibold">Pi (π):</h3>
              <p>The ratio of circumference to diameter is constant for all circles, equal to π ≈ 3.14159...</p>
              <BlockMath math="\pi = \frac{C}{d}" />
            </div>
            <div>
              <h3 className="font-semibold">Circle Properties:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>All points on the circumference are equidistant from the center</li>
                <li>The circumference divides the plane into interior and exterior regions</li>
                <li>A circle is a special case of an ellipse where both axes are equal</li>
              </ul>
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
              <h3 className="font-semibold">Example 1: Given Radius</h3>
              <p>Circle with radius r = 5 units:</p>
              <div className="mt-2 space-y-2">
                <p>Circumference: <InlineMath math="C = 2\pi r = 2\pi(5) = 10\pi" /> ≈ 31.42 units</p>
                <p>Diameter: <InlineMath math="d = 2r = 2(5) = 10" /> units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Given Diameter</h3>
              <p>Circle with diameter d = 12 units:</p>
              <div className="mt-2 space-y-2">
                <p>Circumference: <InlineMath math="C = \pi d = \pi(12) = 12\pi" /> ≈ 37.70 units</p>
                <p>Radius: <InlineMath math="r = \frac{d}{2} = \frac{12}{2} = 6" /> units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Finding Radius from Circumference</h3>
              <p>Circle with circumference C = 20π units:</p>
              <div className="mt-2 space-y-2">
                <p>Radius: <InlineMath math="r = \frac{C}{2\pi} = \frac{20\pi}{2\pi} = 10" /> units</p>
                <p>Diameter: <InlineMath math="d = 2r = 2(10) = 20" /> units</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
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
            Chapter: Applications and Problem Solving
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Real-World Applications:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Engineering:</strong> Calculating belt lengths, gear ratios, and wheel rotations</li>
                <li><strong>Architecture:</strong> Designing circular structures, arches, and domes</li>
                <li><strong>Sports:</strong> Track and field measurements, bicycle wheel calculations</li>
                <li><strong>Manufacturing:</strong> Pipe sizing, circular component design</li>
                <li><strong>Astronomy:</strong> Orbital calculations and planetary motion</li>
                <li><strong>Navigation:</strong> Great circle distances on Earth</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Problem-Solving Strategies:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Strategy 1: Direct Application</h4>
                  <p>When given radius or diameter, apply the formula directly.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
                    <p><strong>Example:</strong> Find circumference of a wheel with radius 30 cm</p>
                    <p><strong>Solution:</strong> C = 2πr = 2π(30) = 60π ≈ 188.5 cm</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Strategy 2: Working Backwards</h4>
                  <p>When given circumference, find radius or diameter.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-2">
                    <p><strong>Example:</strong> A circular track has circumference 400m. Find its radius.</p>
                    <p><strong>Solution:</strong> r = C/(2π) = 400/(2π) ≈ 63.66 m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Formulas */}
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
            Related Circle Formulas
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Area of Circle:</h3>
              <BlockMath math="A = \pi r^2" />
            </div>
            <div>
              <h3 className="font-semibold">Arc Length:</h3>
              <BlockMath math="s = r\theta" />
              <p>Where θ is the central angle in radians</p>
            </div>
            <div>
              <h3 className="font-semibold">Sector Area:</h3>
              <BlockMath math="A_{sector} = \frac{1}{2}r^2\theta" />
            </div>
            <div>
              <h3 className="font-semibold">Relationship between Arc and Circumference:</h3>
              <BlockMath math="\frac{s}{C} = \frac{\theta}{2\pi}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}