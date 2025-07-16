"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function EllipseWithCenterAtOrigin() {
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
      label: "Ellipse with Center at the Origin",
      href: "/mathematics/concepts/intermediate-advanced/geometry/ellipse-with-center-at-the-origin",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-300 dark:to-teal-400 md:text-5xl lg:text-6xl`}
        >
          Ellipse with Center at the Origin
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the properties and equations of ellipses centered at the origin in coordinate geometry.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Standard Form */}
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
            Standard Form of Ellipse
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The standard form of an ellipse centered at the origin is:
            </p>
            <div className="mt-4">
              <BlockMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" />
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>a</strong> = semi-major axis length (if a  {">"} b) or semi-minor axis length (if a {"<"} b)</p>
              <p>• <strong>b</strong> = semi-minor axis length (if a {">"} b) or semi-major axis length (if a {"<"} b)</p>
              <p>• The ellipse is symmetric about both coordinate axes</p>
              <p>• When a = b, the ellipse becomes a circle</p>
            </div>
          </div>
        </div>

        {/* Key Properties */}
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
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Vertices:</h3>
              <p>• Major axis vertices: <InlineMath math="(\pm a, 0)" /> if a {">"} b, or <InlineMath math="(0, \pm b)" /> if b {">"} a</p>
              <p>• Minor axis vertices: <InlineMath math="(0, \pm b)" /> if a {">"} b, or <InlineMath math="(\pm a, 0)" /> if b {">"} a</p>
            </div>
            <div>
              <h3 className="font-semibold">Foci:</h3>
              <p>For a {">"} b: <InlineMath math="F_1(-c, 0)" /> and <InlineMath math="F_2(c, 0)" /> where <InlineMath math="c = \sqrt{a^2 - b^2}" /></p>
              <p>For b {">"} a: <InlineMath math="F_1(0, -c)" /> and <InlineMath math="F_2(0, c)" /> where <InlineMath math="c = \sqrt{b^2 - a^2}" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Eccentricity:</h3>
              <BlockMath math="e = \frac{c}{\text{semi-major axis}} = \frac{\sqrt{|a^2 - b^2|}}{\max(a, b)}" />
              <p>Where 0 ≤ e {"<"} 1 (e = 0 for a circle, e approaches 1 for very elongated ellipses)</p>
            </div>
          </div>
        </div>

        {/* Area and Perimeter */}
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
            Area and Perimeter
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Area:</h3>
              <BlockMath math="A = \pi ab" />
              <p>The area is the product of π and both semi-axis lengths.</p>
            </div>
            <div>
              <h3 className="font-semibold">Perimeter (Approximate):</h3>
              <BlockMath math="P \approx \pi[3(a + b) - \sqrt{(3a + b)(a + 3b)}]" />
              <p>This is Ramanujan's approximation, which is very accurate.</p>
            </div>
            <div>
              <h3 className="font-semibold">Exact Perimeter:</h3>
              <BlockMath math="P = 4a E(e)" />
              <p>Where E(e) is the complete elliptic integral of the second kind.</p>
            </div>
          </div>
        </div>

        {/* Parametric Form */}
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
            Parametric Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The parametric form of an ellipse centered at the origin:
            </p>
            <div className="mt-4 space-y-2">
              <BlockMath math="x = a \cos(t)" />
              <BlockMath math="y = b \sin(t)" />
            </div>
            <p className="mt-4">
              Where t is the parameter ranging from 0 to 2π.
            </p>
            <p className="mt-2">
              This form is useful for plotting points on the ellipse and for calculus applications.
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
              <h3 className="font-semibold">Example 1: Standard ellipse</h3>
              <p>Equation: <InlineMath math="\frac{x^2}{25} + \frac{y^2}{16} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• a = 5, b = 4 (major axis is horizontal)</p>
                <p>• Vertices: (±5, 0) and (0, ±4)</p>
                <p>• c = √(25 - 16) = 3</p>
                <p>• Foci: (±3, 0)</p>
                <p>• Eccentricity: e = 3/5 = 0.6</p>
                <p>• Area: A = π(5)(4) = 20π</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Vertical ellipse</h3>
              <p>Equation: <InlineMath math="\frac{x^2}{9} + \frac{y^2}{36} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• a = 3, b = 6 (major axis is vertical)</p>
                <p>• Vertices: (±3, 0) and (0, ±6)</p>
                <p>• c = √(36 - 9) = √27 = 3√3</p>
                <p>• Foci: (0, ±3√3)</p>
                <p>• Eccentricity: e = 3√3/6 = √3/2 ≈ 0.866</p>
                <p>• Area: A = π(3)(6) = 18π</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tangent Lines */}
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
            Tangent Lines
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Tangent at point (x₁, y₁):</h3>
              <BlockMath math="\frac{x \cdot x_1}{a^2} + \frac{y \cdot y_1}{b^2} = 1" />
            </div>
            <div>
              <h3 className="font-semibold">Slope at point (x₁, y₁):</h3>
              <BlockMath math="m = -\frac{b^2 x_1}{a^2 y_1}" />
            </div>
            <div>
              <h3 className="font-semibold">Tangent with given slope m:</h3>
              <BlockMath math="y = mx \pm \sqrt{a^2 m^2 + b^2}" />
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
              <li><strong>Astronomy:</strong> Planetary orbits are elliptical with the sun at one focus</li>
              <li><strong>Architecture:</strong> Elliptical arches and domes for structural strength</li>
              <li><strong>Engineering:</strong> Gear design and cam profiles</li>
              <li><strong>Optics:</strong> Elliptical mirrors focus light from one focus to another</li>
              <li><strong>Acoustics:</strong> Whispering galleries use elliptical shapes</li>
              <li><strong>Art and Design:</strong> Aesthetic proportions in design</li>
              <li><strong>Statistics:</strong> Confidence ellipses in bivariate data</li>
              <li><strong>Medical:</strong> Lithotripsy uses elliptical reflectors</li>
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
              <h3 className="font-semibold">Circle (a = b):</h3>
              <p>When a = b = r, the ellipse becomes a circle: <InlineMath math="x^2 + y^2 = r^2" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Focal Property:</h3>
              <p>For any point P on the ellipse: PF₁ + PF₂ = 2a (constant sum of distances to foci)</p>
            </div>
            <div>
              <h3 className="font-semibold">Reflection Property:</h3>
              <p>A ray from one focus reflects off the ellipse and passes through the other focus</p>
            </div>
            <div>
              <h3 className="font-semibold">Directrix:</h3>
              <p>For horizontal major axis: <InlineMath math="x = \pm \frac{a}{e}" /></p>
              <p>The ratio of distance to focus to distance to directrix equals the eccentricity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
