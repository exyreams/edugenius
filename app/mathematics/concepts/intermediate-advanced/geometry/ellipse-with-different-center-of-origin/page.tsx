"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function EllipseWithDifferentCenterOfOrigin() {
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
      label: "Ellipse with Different Center of Origin",
      href: "/mathematics/concepts/intermediate-advanced/geometry/ellipse-with-different-center-of-origin",
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
          Ellipse with Different Center of Origin
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore ellipses with centers at any point (h, k) in the coordinate plane.
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
            Standard Form of Translated Ellipse
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">General Form:</h3>
              <BlockMath math="\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1" />
              <p>Where (h, k) is the center of the ellipse</p>
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>(h, k)</strong> = center coordinates</p>
              <p>• <strong>a</strong> = semi-major axis length (if a {">"} b) or semi-minor axis length (if a {"<"} b)</p>
              <p>• <strong>b</strong> = semi-minor axis length (if a {">"} b) or semi-major axis length (if a {"<"} b)</p>
              <p>• The ellipse is symmetric about the lines x = h and y = k</p>
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
              <h3 className="font-semibold">Center:</h3>
              <p>The center is at point (h, k)</p>
            </div>
            <div>
              <h3 className="font-semibold">Vertices:</h3>
              <p>For horizontal major axis (a {">"} b):</p>
              <p>• Major axis vertices: <InlineMath math="(h \pm a, k)" /></p>
              <p>• Minor axis vertices: <InlineMath math="(h, k \pm b)" /></p>
              <p>For vertical major axis (b {">"} a):</p>
              <p>• Major axis vertices: <InlineMath math="(h, k \pm b)" /></p>
              <p>• Minor axis vertices: <InlineMath math="(h \pm a, k)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Foci:</h3>
              <p>Distance from center: <InlineMath math="c = \sqrt{|a^2 - b^2|}" /></p>
              <p>For a {">"} b: <InlineMath math="F_1(h-c, k)" /> and <InlineMath math="F_2(h+c, k)" /></p>
              <p>For b {">"} a: <InlineMath math="F_1(h, k-c)" /> and <InlineMath math="F_2(h, k+c)" /></p>
            </div>
          </div>
        </div>

        {/* Transformation from Origin */}
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
            Chapter: Transformation from Origin
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Translation Process:</h3>
              <p>To move an ellipse from origin to center (h, k):</p>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>Start with standard form: <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" /></li>
                <li>Replace x with (x - h) and y with (y - k)</li>
                <li>Result: <InlineMath math="\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1" /></li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold">Coordinate Transformation:</h3>
              <p>If we set <InlineMath math="X = x - h" /> and <InlineMath math="Y = y - k" />, then:</p>
              <BlockMath math="\frac{X^2}{a^2} + \frac{Y^2}{b^2} = 1" />
              <p>This transforms the ellipse back to the origin in the X-Y coordinate system.</p>
            </div>
          </div>
        </div>

        {/* General Form */}
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
            General Form and Conversion
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Expanded General Form:</h3>
              <BlockMath math="Ax^2 + By^2 + Cx + Dy + E = 0" />
              <p>Where A and B have the same sign and A ≠ B</p>
            </div>
            <div>
              <h3 className="font-semibold">Converting to Standard Form:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Group x and y terms separately</li>
                <li>Complete the square for both variables</li>
                <li>Rearrange to standard form</li>
              </ol>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
                <p><strong>Example:</strong> <InlineMath math="4x^2 + 9y^2 - 8x + 36y + 4 = 0" /></p>
                <p><strong>Step 1:</strong> <InlineMath math="4(x^2 - 2x) + 9(y^2 + 4y) = -4" /></p>
                <p><strong>Step 2:</strong> <InlineMath math="4(x^2 - 2x + 1) + 9(y^2 + 4y + 4) = -4 + 4 + 36" /></p>
                <p><strong>Step 3:</strong> <InlineMath math="4(x - 1)^2 + 9(y + 2)^2 = 36" /></p>
                <p><strong>Result:</strong> <InlineMath math="\frac{(x-1)^2}{9} + \frac{(y+2)^2}{4} = 1" /></p>
              </div>
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
              <h3 className="font-semibold">Example 1: Horizontal Major Axis</h3>
              <p>Equation: <InlineMath math="\frac{(x-3)^2}{25} + \frac{(y+1)^2}{16} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• Center: (3, -1)</p>
                <p>• a = 5, b = 4 (horizontal major axis)</p>
                <p>• Vertices: (3±5, -1) = (-2, -1) and (8, -1)</p>
                <p>• Co-vertices: (3, -1±4) = (3, -5) and (3, 3)</p>
                <p>• c = √(25 - 16) = 3</p>
                <p>• Foci: (3±3, -1) = (0, -1) and (6, -1)</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Vertical Major Axis</h3>
              <p>Equation: <InlineMath math="\frac{(x+2)^2}{9} + \frac{(y-4)^2}{36} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• Center: (-2, 4)</p>
                <p>• a = 3, b = 6 (vertical major axis)</p>
                <p>• Vertices: (-2, 4±6) = (-2, -2) and (-2, 10)</p>
                <p>• Co-vertices: (-2±3, 4) = (-5, 4) and (1, 4)</p>
                <p>• c = √(36 - 9) = √27 = 3√3</p>
                <p>• Foci: (-2, 4±3√3)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parametric Form */}
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
            Parametric Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Parametric Form:</h3>
              <BlockMath math="x = h + a \cos(t)" />
              <BlockMath math="y = k + b \sin(t)" />
              <p>Where t ranges from 0 to 2π</p>
            </div>
            <div>
              <h3 className="font-semibold">Applications:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Plotting points on the ellipse</li>
                <li>Animation and computer graphics</li>
                <li>Calculus applications (arc length, area)</li>
                <li>Physics simulations</li>
              </ul>
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
            Chapter: Applications and Problem Solving
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Real-World Applications:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Astronomy:</strong> Planetary orbits around stars not at coordinate origin</li>
                <li><strong>Architecture:</strong> Elliptical arches and domes with offset centers</li>
                <li><strong>Engineering:</strong> Cam profiles and gear designs with specific center positions</li>
                <li><strong>Optics:</strong> Lens and mirror systems with displaced focal points</li>
                <li><strong>Art and Design:</strong> Decorative patterns and layouts</li>
                <li><strong>Statistics:</strong> Confidence ellipses for bivariate data with means ≠ (0,0)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Problem-Solving Strategies:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Strategy 1: Identify the Center</h4>
                  <p>Look for the values of h and k in the standard form equation.</p>
                </div>
                <div>
                  <h4 className="font-medium">Strategy 2: Complete the Square</h4>
                  <p>When given general form, complete the square to find center and axes lengths.</p>
                </div>
                <div>
                  <h4 className="font-medium">Strategy 3: Use Translation</h4>
                  <p>Translate the coordinate system to simplify calculations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Properties */}
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
            Special Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Focal Property:</h3>
              <p>For any point P on the ellipse: PF₁ + PF₂ = 2a (where a is the semi-major axis length)</p>
            </div>
            <div>
              <h3 className="font-semibold">Tangent Line at Point (x₁, y₁):</h3>
              <BlockMath math="\frac{(x-h)(x_1-h)}{a^2} + \frac{(y-k)(y_1-k)}{b^2} = 1" />
            </div>
            <div>
              <h3 className="font-semibold">Area:</h3>
              <BlockMath math="A = \pi ab" />
              <p>The area remains the same regardless of the center position.</p>
            </div>
            <div>
              <h3 className="font-semibold">Eccentricity:</h3>
              <BlockMath math="e = \frac{c}{\text{semi-major axis}} = \frac{\sqrt{|a^2 - b^2|}}{\max(a, b)}" />
              <p>Eccentricity is independent of the center location.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}