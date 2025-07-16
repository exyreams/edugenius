"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function Hyperbola() {
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
      label: "Hyperbola",
      href: "/mathematics/concepts/intermediate-advanced/geometry/hyperbola",
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
          Hyperbola
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the properties and equations of hyperbolas in coordinate geometry.
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
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-red-300 dark:to-orange-300`}
          >
            Standard Form of Hyperbola
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Horizontal Transverse Axis:</h3>
              <BlockMath math="\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" />
              <p>Opens left and right</p>
            </div>
            <div>
              <h3 className="font-semibold">Vertical Transverse Axis:</h3>
              <BlockMath math="\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1" />
              <p>Opens up and down</p>
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>a</strong> = distance from center to vertex along transverse axis</p>
              <p>• <strong>b</strong> = distance related to conjugate axis</p>
              <p>• <strong>c</strong> = distance from center to focus, where <InlineMath math="c^2 = a^2 + b^2" /></p>
              <p>• The hyperbola has two separate branches</p>
            </div>
          </div>
        </div>

        {/* Key Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-600 dark:to-indigo-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-blue-300 dark:to-indigo-300`}
          >
            Key Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Vertices:</h3>
              <p>For horizontal: <InlineMath math="(\pm a, 0)" /></p>
              <p>For vertical: <InlineMath math="(0, \pm a)" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Foci:</h3>
              <p>For horizontal: <InlineMath math="F_1(-c, 0)" /> and <InlineMath math="F_2(c, 0)" /></p>
              <p>For vertical: <InlineMath math="F_1(0, -c)" /> and <InlineMath math="F_2(0, c)" /></p>
              <p>Where <InlineMath math="c = \sqrt{a^2 + b^2}" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Asymptotes:</h3>
              <p>For horizontal hyperbola: <InlineMath math="y = \pm \frac{b}{a}x" /></p>
              <p>For vertical hyperbola: <InlineMath math="y = \pm \frac{a}{b}x" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Eccentricity:</h3>
              <BlockMath math="e = \frac{c}{a} = \frac{\sqrt{a^2 + b^2}}{a}" />
              <p>Where e {">"} 1 (always greater than 1 for hyperbolas)</p>
            </div>
          </div>
        </div>

        {/* Focal Property */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-purple-300 dark:to-violet-300`}
          >
            Focal Property and Definition
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Definition:</h3>
              <p>A hyperbola is the set of all points P such that the absolute difference of distances from P to two fixed points (foci) is constant.</p>
              <BlockMath math="|PF_1 - PF_2| = 2a" />
            </div>
            <div>
              <h3 className="font-semibold">Reflection Property:</h3>
              <p>A ray directed toward one focus reflects off the hyperbola and appears to come from the other focus.</p>
            </div>
            <div>
              <h3 className="font-semibold">Conjugate Hyperbola:</h3>
              <p>For every hyperbola <InlineMath math="\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" />, there exists a conjugate hyperbola <InlineMath math="\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1" /></p>
            </div>
          </div>
        </div>

        {/* Parametric Form */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-green-300 dark:to-emerald-300`}
          >
            Parametric Equations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">For horizontal hyperbola:</h3>
              <BlockMath math="x = a \sec(t)" />
              <BlockMath math="y = b \tan(t)" />
            </div>
            <div>
              <h3 className="font-semibold">Alternative form using hyperbolic functions:</h3>
              <BlockMath math="x = a \cosh(t)" />
              <BlockMath math="y = b \sinh(t)" />
            </div>
            <p className="mt-4">
              These parametric forms are useful for plotting points on the hyperbola and for calculus applications.
            </p>
          </div>
        </div>

        {/* Examples */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-orange-300 dark:to-amber-300`}
          >
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: Horizontal hyperbola</h3>
              <p>Equation: <InlineMath math="\frac{x^2}{16} - \frac{y^2}{9} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• a = 4, b = 3</p>
                <p>• Vertices: (±4, 0)</p>
                <p>• c = √(16 + 9) = 5</p>
                <p>• Foci: (±5, 0)</p>
                <p>• Asymptotes: <InlineMath math="y = \pm \frac{3}{4}x" /></p>
                <p>• Eccentricity: e = 5/4 = 1.25</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Vertical hyperbola</h3>
              <p>Equation: <InlineMath math="\frac{y^2}{25} - \frac{x^2}{9} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• a = 5, b = 3</p>
                <p>• Vertices: (0, ±5)</p>
                <p>• c = √(25 + 9) = √34</p>
                <p>• Foci: (0, ±√34)</p>
                <p>• Asymptotes: <InlineMath math="y = \pm \frac{5}{3}x" /></p>
                <p>• Eccentricity: e = √34/5 ≈ 1.166</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tangent Lines */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-teal-300 dark:to-cyan-300`}
          >
            Tangent Lines
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Tangent at point (x₁, y₁) on horizontal hyperbola:</h3>
              <BlockMath math="\frac{x \cdot x_1}{a^2} - \frac{y \cdot y_1}{b^2} = 1" />
            </div>
            <div>
              <h3 className="font-semibold">Slope at point (x₁, y₁):</h3>
              <BlockMath math="m = \frac{b^2 x_1}{a^2 y_1}" />
            </div>
            <div>
              <h3 className="font-semibold">Tangent with given slope m:</h3>
              <BlockMath math="y = mx \pm \sqrt{a^2 m^2 - b^2}" />
              <p>Note: For real tangents, we need <InlineMath math="a^2 m^2 - b^2 \geq 0" /></p>
            </div>
          </div>
        </div>

        {/* Translated Hyperbolas */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-yellow-300 dark:to-amber-300`}
          >
            Chapter: Translated Hyperbolas
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Standard Form with Center (h, k):</h3>
              <p>Horizontal: <InlineMath math="\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1" /></p>
              <p>Vertical: <InlineMath math="\frac{(y-k)^2}{a^2} - \frac{(x-h)^2}{b^2} = 1" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Key Elements:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Center: (h, k)</li>
                <li>Vertices: (h±a, k) for horizontal, (h, k±a) for vertical</li>
                <li>Foci: (h±c, k) for horizontal, (h, k±c) for vertical</li>
                <li>Asymptotes: <InlineMath math="y - k = \pm \frac{b}{a}(x - h)" /> for horizontal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Example:</h3>
              <p>Hyperbola: <InlineMath math="\frac{(x-2)^2}{9} - \frac{(y+1)^2}{4} = 1" /></p>
              <div className="mt-2 space-y-1">
                <p>• Center: (2, -1)</p>
                <p>• a = 3, b = 2, c = √13</p>
                <p>• Vertices: (2±3, -1) = (-1, -1) and (5, -1)</p>
                <p>• Foci: (2±√13, -1)</p>
                <p>• Asymptotes: <InlineMath math="y + 1 = \pm \frac{2}{3}(x - 2)" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Solving Strategies */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-cyan-300 dark:to-blue-300`}
          >
            Chapter: Problem Solving Strategies
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Strategy 1: Identifying Hyperbola Type</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-2">
                <p><strong>Key Question:</strong> Which term is positive?</p>
                <p>• If x² term is positive: horizontal hyperbola</p>
                <p>• If y² term is positive: vertical hyperbola</p>
                <p><strong>Example:</strong> <InlineMath math="\frac{x^2}{16} - \frac{y^2}{9} = 1" /> → horizontal</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Strategy 2: Finding Key Elements</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-2">
                <p><strong>Step-by-step approach:</strong></p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Identify center (h, k)</li>
                  <li>Find a² and b² from denominators</li>
                  <li>Calculate c using <InlineMath math="c^2 = a^2 + b^2" /></li>
                  <li>Determine vertices and foci positions</li>
                  <li>Write asymptote equations</li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Strategy 3: Converting General to Standard Form</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-2">
                <p><strong>Process:</strong> Complete the square for both variables</p>
                <p><strong>Example:</strong> <InlineMath math="4x^2 - 9y^2 - 8x + 36y - 68 = 0" /></p>
                <p>Group and complete: <InlineMath math="4(x^2 - 2x + 1) - 9(y^2 - 4y + 4) = 68 + 4 - 36" /></p>
                <p>Result: <InlineMath math="\frac{(x-1)^2}{9} - \frac{(y-2)^2}{4} = 1" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-rose-300 dark:to-pink-300`}
          >
            Chapter: Real-World Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Navigation and Positioning:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>LORAN Systems:</strong> Ships and aircraft use hyperbolic positioning based on time differences of radio signals</li>
                <li><strong>GPS Technology:</strong> Hyperbolic trilateration helps determine precise locations</li>
                <li><strong>Radar Systems:</strong> Target location using hyperbolic curves from multiple stations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Astronomy and Space:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Comet Trajectories:</strong> Some comets follow hyperbolic paths around the sun</li>
                <li><strong>Spacecraft Orbits:</strong> Escape trajectories and gravity assists use hyperbolic paths</li>
                <li><strong>Binary Star Systems:</strong> Orbital mechanics involving hyperbolic encounters</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Engineering and Architecture:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Cooling Towers:</strong> Hyperbolic shape provides structural strength and optimal airflow</li>
                <li><strong>Suspension Bridges:</strong> Cable curves approximate hyperbolic shapes under certain loads</li>
                <li><strong>Antenna Design:</strong> Hyperbolic reflectors focus electromagnetic waves</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Physics and Optics:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Particle Physics:</strong> Charged particle trajectories in electromagnetic fields</li>
                <li><strong>Telescope Mirrors:</strong> Hyperbolic secondary mirrors in Cassegrain telescopes</li>
                <li><strong>Sound Localization:</strong> Determining sound source location using time differences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Topics */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-600 dark:to-green-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-emerald-300 dark:to-green-300`}
          >
            Chapter: Advanced Topics
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Hyperbola Transformations:</h3>
              <div className="space-y-2">
                <p><strong>Rotation:</strong> General conic equation <InlineMath math="Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0" /></p>
                <p>For hyperbola: <InlineMath math="B^2 - 4AC > 0" /></p>
                <p><strong>Rotation Angle:</strong> <InlineMath math="\theta = \frac{1}{2}\arctan\left(\frac{B}{A-C}\right)" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Polar Form:</h3>
              <p>Hyperbola with focus at origin:</p>
              <BlockMath math="r = \frac{ed}{1 - e\cos\theta} \text{ or } r = \frac{ed}{1 + e\cos\theta}" />
              <p>Where e {">"} 1 is the eccentricity</p>
            </div>
            <div>
              <h3 className="font-semibold">Calculus Applications:</h3>
              <div className="space-y-2">
                <p><strong>Arc Length:</strong> Complex integral involving elliptic functions</p>
                <p><strong>Area Between Branches:</strong> Infinite area between asymptotes</p>
                <p><strong>Volume of Revolution:</strong> Rotating hyperbola around axes creates various solids</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Hyperbolic Functions Connection:</h3>
              <p>Parametric equations using hyperbolic functions:</p>
              <BlockMath math="x = a\cosh(t), \quad y = b\sinh(t)" />
              <p>These satisfy the hyperbola equation naturally due to the identity <InlineMath math="\cosh^2(t) - \sinh^2(t) = 1" /></p>
            </div>
          </div>
        </div>

        {/* Special Cases */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-indigo-300 dark:to-purple-300`}
          >
            Special Cases and Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Rectangular Hyperbola (a = b):</h3>
              <p>When a = b, the asymptotes are perpendicular: <InlineMath math="y = \pm x" /></p>
              <p>Equation becomes: <InlineMath math="x^2 - y^2 = a^2" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Equilateral Hyperbola:</h3>
              <p>A rectangular hyperbola can be rotated 45° to get: <InlineMath math="xy = k" /></p>
              <p>This is useful in inverse relationships</p>
            </div>
            <div>
              <h3 className="font-semibold">Directrix:</h3>
              <p>For horizontal hyperbola: <InlineMath math="x = \pm \frac{a}{e}" /></p>
              <p>The ratio of distance to focus to distance to directrix equals the eccentricity</p>
            </div>
            <div>
              <h3 className="font-semibold">Latus Rectum:</h3>
              <p>Length of the chord through focus perpendicular to transverse axis: <InlineMath math="\frac{2b^2}{a}" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}