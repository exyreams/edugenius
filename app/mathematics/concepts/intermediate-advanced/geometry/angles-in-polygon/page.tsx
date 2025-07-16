"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AnglesInPolygon() {
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
      label: "Angles in a Polygon",
      href: "/mathematics/concepts/intermediate-advanced/geometry/angles-in-polygon",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-purple-700 to-violet-800 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-300 dark:to-violet-400 md:text-5xl lg:text-6xl`}
        >
          Angles in a Polygon
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Discover the relationships between interior and exterior angles in polygons of all types.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Interior Angles */}
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
            Sum of Interior Angles
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The sum of interior angles in any polygon with n sides is:
            </p>
            <div className="mt-4">
              <BlockMath math="S = (n - 2) \times 180°" />
            </div>
            <p className="mt-4">
              Or in radians:
            </p>
            <div className="mt-2">
              <BlockMath math="S = (n - 2) \times \pi \text{ radians}" />
            </div>
            <p className="mt-4">
              This formula works for any polygon, whether regular or irregular, convex or concave.
            </p>
          </div>
        </div>

        {/* Regular Polygon Interior Angles */}
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
            Regular Polygon Interior Angles
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              In a regular polygon (all sides and angles equal), each interior angle measures:
            </p>
            <div className="mt-4">
              <BlockMath math="\text{Each angle} = \frac{(n - 2) \times 180°}{n}" />
            </div>
            <p className="mt-4">
              This can also be written as:
            </p>
            <div className="mt-2">
              <BlockMath math="\text{Each angle} = 180° - \frac{360°}{n}" />
            </div>
          </div>
        </div>

        {/* Exterior Angles */}
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
            Exterior Angles
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Sum of Exterior Angles:</h3>
              <p>The sum of exterior angles of any polygon is always:</p>
              <BlockMath math="\text{Sum of exterior angles} = 360°" />
              <p>This is true regardless of the number of sides or shape of the polygon.</p>
            </div>
            <div>
              <h3 className="font-semibold">Each Exterior Angle (Regular Polygon):</h3>
              <BlockMath math="\text{Each exterior angle} = \frac{360°}{n}" />
            </div>
            <div>
              <h3 className="font-semibold">Relationship with Interior Angles:</h3>
              <BlockMath math="\text{Interior angle} + \text{Exterior angle} = 180°" />
            </div>
          </div>
        </div>

        {/* Common Polygons */}
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
            Common Polygons
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Polygon</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Sides (n)</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Sum of Interior Angles</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Each Interior Angle</th>
                    <th className="border border-gray-400 dark:border-gray-600 px-4 py-2">Each Exterior Angle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Triangle</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">3</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">180°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">60°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">120°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Square</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">4</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">360°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">90°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">90°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Pentagon</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">5</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">540°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">108°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">72°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Hexagon</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">6</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">720°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">120°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">60°</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2">Octagon</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">8</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">1080°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">135°</td>
                    <td className="border border-gray-400 dark:border-gray-600 px-4 py-2 text-center">45°</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Examples */}
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
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: Find the sum of interior angles of a heptagon (7 sides)</h3>
              <div className="mt-2">
                <BlockMath math="S = (n - 2) \times 180° = (7 - 2) \times 180° = 5 \times 180° = 900°" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Find each interior angle of a regular decagon (10 sides)</h3>
              <div className="mt-2">
                <BlockMath math="\text{Each angle} = \frac{(10 - 2) \times 180°}{10} = \frac{8 \times 180°}{10} = \frac{1440°}{10} = 144°" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: If each interior angle of a regular polygon is 150°, how many sides does it have?</h3>
              <p className="mt-2">Using the formula: <InlineMath math="150° = \frac{(n - 2) \times 180°}{n}" /></p>
              <p>Solving: <InlineMath math="150n = 180n - 360" /></p>
              <p><InlineMath math="360 = 30n" /></p>
              <p><InlineMath math="n = 12" /> sides (dodecagon)</p>
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
              <li><strong>Architecture:</strong> Designing polygonal buildings and structures</li>
              <li><strong>Engineering:</strong> Creating polygonal cross-sections and supports</li>
              <li><strong>Art and Design:</strong> Creating geometric patterns and tessellations</li>
              <li><strong>Computer Graphics:</strong> Polygon rendering and 3D modeling</li>
              <li><strong>Navigation:</strong> Understanding angular relationships in surveying</li>
              <li><strong>Crystallography:</strong> Analyzing crystal structures and lattices</li>
              <li><strong>Game Development:</strong> Collision detection and polygon-based physics</li>
              <li><strong>Manufacturing:</strong> Designing polygonal parts and components</li>
            </ul>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases and Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Concave Polygons:</h3>
              <p>The interior angle formulas still apply, but some interior angles may be greater than 180° (reflex angles).</p>
            </div>
            <div>
              <h3 className="font-semibold">Star Polygons:</h3>
              <p>For star polygons, the sum of interior angles formula becomes more complex and depends on the specific star configuration.</p>
            </div>
            <div>
              <h3 className="font-semibold">Irregular Polygons:</h3>
              <p>While individual angles vary, the sum of interior angles still follows the formula (n-2)×180°.</p>
            </div>
            <div>
              <h3 className="font-semibold">Limiting Case:</h3>
              <p>As n approaches infinity, a regular polygon approaches a circle, and each interior angle approaches 180°.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
