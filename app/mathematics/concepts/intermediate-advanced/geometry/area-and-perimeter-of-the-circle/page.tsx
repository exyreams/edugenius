"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AreaAndPerimeterOfTheCircle() {
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
      label: "Area and Perimeter of the Circle",
      href: "/mathematics/concepts/intermediate-advanced/geometry/area-and-perimeter-of-the-circle",
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
          Area and Perimeter of the Circle
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the fundamental formulas for calculating the area and circumference of circles.
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
            Circle Formulas
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Area of a Circle:</h3>
              <BlockMath math="A = \pi r^2" />
              <p>Where r is the radius of the circle</p>
            </div>
            <div>
              <h3 className="font-semibold">Circumference (Perimeter) of a Circle:</h3>
              <BlockMath math="C = 2\pi r = \pi d" />
              <p>Where r is the radius and d is the diameter</p>
            </div>
            <div>
              <h3 className="font-semibold">Relationship:</h3>
              <p>Diameter = 2 × Radius, so <InlineMath math="d = 2r" /></p>
            </div>
          </div>
        </div>

        {/* Derivation of Area */}
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
            Derivation of Circle Area
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The area formula can be derived using integration or by approximating the circle with many small triangles:
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">Method 1: Integration</h3>
                <p>Using the equation of a circle <InlineMath math="x^2 + y^2 = r^2" />:</p>
                <BlockMath math="A = 4\int_0^r \sqrt{r^2 - x^2} \, dx = \pi r^2" />
              </div>
              <div>
                <h3 className="font-semibold">Method 2: Triangular Approximation</h3>
                <p>Divide the circle into n triangles with base on circumference:</p>
                <p>As n → ∞, the sum of triangle areas approaches <InlineMath math="\pi r^2" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Forms */}
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
            Alternative Forms
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Area in terms of diameter:</h3>
              <BlockMath math="A = \pi \left(\frac{d}{2}\right)^2 = \frac{\pi d^2}{4}" />
            </div>
            <div>
              <h3 className="font-semibold">Area in terms of circumference:</h3>
              <BlockMath math="A = \frac{C^2}{4\pi}" />
            </div>
            <div>
              <h3 className="font-semibold">Radius in terms of area:</h3>
              <BlockMath math="r = \sqrt{\frac{A}{\pi}}" />
            </div>
            <div>
              <h3 className="font-semibold">Radius in terms of circumference:</h3>
              <BlockMath math="r = \frac{C}{2\pi}" />
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
              <h3 className="font-semibold">Example 1: Given radius r = 5 units</h3>
              <div className="mt-2 space-y-2">
                <p>Area: <InlineMath math="A = \pi r^2 = \pi (5)^2 = 25\pi \approx 78.54" /> square units</p>
                <p>Circumference: <InlineMath math="C = 2\pi r = 2\pi (5) = 10\pi \approx 31.42" /> units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Given diameter d = 12 units</h3>
              <div className="mt-2 space-y-2">
                <p>Radius: <InlineMath math="r = \frac{d}{2} = \frac{12}{2} = 6" /> units</p>
                <p>Area: <InlineMath math="A = \pi r^2 = \pi (6)^2 = 36\pi \approx 113.10" /> square units</p>
                <p>Circumference: <InlineMath math="C = \pi d = 12\pi \approx 37.70" /> units</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Given circumference C = 20π units</h3>
              <div className="mt-2 space-y-2">
                <p>Radius: <InlineMath math="r = \frac{C}{2\pi} = \frac{20\pi}{2\pi} = 10" /> units</p>
                <p>Area: <InlineMath math="A = \pi r^2 = \pi (10)^2 = 100\pi \approx 314.16" /> square units</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors and Segments */}
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
            Sectors and Segments
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Sector Area (central angle θ in radians):</h3>
              <BlockMath math="A_{sector} = \frac{1}{2}r^2\theta = \frac{\theta}{2\pi} \cdot \pi r^2" />
            </div>
            <div>
              <h3 className="font-semibold">Sector Area (central angle θ in degrees):</h3>
              <BlockMath math="A_{sector} = \frac{\theta}{360°} \cdot \pi r^2" />
            </div>
            <div>
              <h3 className="font-semibold">Arc Length:</h3>
              <BlockMath math="s = r\theta \text{ (radians)} \quad \text{or} \quad s = \frac{\theta}{360°} \cdot 2\pi r \text{ (degrees)}" />
            </div>
            <div>
              <h3 className="font-semibold">Segment Area:</h3>
              <BlockMath math="A_{segment} = A_{sector} - A_{triangle} = \frac{1}{2}r^2(\theta - \sin\theta)" />
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
            Real-World Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Architecture:</strong> Designing circular buildings, domes, and arches</li>
              <li><strong>Engineering:</strong> Calculating material needed for circular pipes and tanks</li>
              <li><strong>Agriculture:</strong> Irrigation system design with circular coverage</li>
              <li><strong>Manufacturing:</strong> Production of circular components and wheels</li>
              <li><strong>Sports:</strong> Field dimensions for circular tracks and playing areas</li>
              <li><strong>Astronomy:</strong> Calculating orbital paths and planetary sizes</li>
              <li><strong>Art and Design:</strong> Creating circular patterns and decorative elements</li>
              <li><strong>Navigation:</strong> Radar coverage areas and GPS accuracy circles</li>
            </ul>
          </div>
        </div>

        {/* Important Constants */}
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
            Important Constants and Approximations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-2">
            <p>• <InlineMath math="\pi \approx 3.14159" /> (exact value is irrational)</p>
            <p>• <InlineMath math="\pi \approx \frac{22}{7}" /> (common approximation)</p>
            <p>• <InlineMath math="2\pi \approx 6.28318" /> (full circle in radians)</p>
            <p>• For quick calculations: <InlineMath math="\pi \approx 3.14" /></p>
            <p>• The ratio of circumference to diameter is always π, regardless of circle size</p>
            <p>• Area grows quadratically with radius (doubling radius quadruples area)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
