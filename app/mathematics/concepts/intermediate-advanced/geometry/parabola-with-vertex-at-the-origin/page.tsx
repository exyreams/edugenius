"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function ParabolaWithVertexAtTheOrigin() {
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
      label: "Parabola with Vertex at the Origin",
      href: "/mathematics/concepts/intermediate-advanced/geometry/parabola-with-vertex-at-the-origin",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-red-700 to-pink-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-pink-400 md:text-5xl lg:text-6xl`}
        >
          Parabola with Vertex at the Origin
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the properties and equations of parabolas with vertex at the origin in coordinate geometry.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Standard Forms */}
        <div
          className={`rounded-lg p-6 shadow-md ${isColorful
              ? "bg-gradient-to-br from-red-200 to-pink-200 dark:from-red-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
            }`}
        >
          <h2
            className={`text-2xl font-semibold ${isColorful
                ? "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
              } dark:from-red-300 dark:to-pink-300`}
          >
            Standard Forms of Parabola
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Vertical Parabola (opens up/down):</h3>
              <BlockMath math="x^2 = 4py" />
              <p>• Opens upward if p {">"} 0, downward if p {"<"} 0</p>
              <p>• Focus: (0, p)</p>
              <p>• Directrix: y = -p</p>
            </div>
            <div>
              <h3 className="font-semibold">Horizontal Parabola (opens left/right):</h3>
              <BlockMath math="y^2 = 4px" />
              <p>• Opens rightward if p {">"} 0, leftward if p {"<"} 0</p>
              <p>• Focus: (p, 0)</p>
              <p>• Directrix: x = -p</p>
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
              <h3 className="font-semibold">Vertex:</h3>
              <p>The vertex is at the origin (0, 0) for both forms</p>
            </div>
            <div>
              <h3 className="font-semibold">Axis of Symmetry:</h3>
              <p>• For x² = 4py: y-axis (x = 0)</p>
              <p>• For y² = 4px: x-axis (y = 0)</p>
            </div>
            <div>
              <h3 className="font-semibold">Focal Parameter:</h3>
              <p>The parameter p determines the "width" and direction of the parabola</p>
              <p>|p| = distance from vertex to focus = distance from vertex to directrix</p>
            </div>
            <div>
              <h3 className="font-semibold">Eccentricity:</h3>
              <p>e = 1 (constant for all parabolas)</p>
            </div>
          </div>
        </div>

        {/* Alternative Forms */}
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
            Alternative Forms
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Vertex Form (vertical):</h3>
              <BlockMath math="y = ax^2" />
              <p>Where a = 1/(4p), so p = 1/(4a)</p>
            </div>
            <div>
              <h3 className="font-semibold">Vertex Form (horizontal):</h3>
              <BlockMath math="x = ay^2" />
              <p>Where a = 1/(4p), so p = 1/(4a)</p>
            </div>
            <div>
              <h3 className="font-semibold">Parametric Form (vertical):</h3>
              <BlockMath math="x = t, \quad y = \frac{t^2}{4p}" />
            </div>
            <div>
              <h3 className="font-semibold">Parametric Form (horizontal):</h3>
              <BlockMath math="x = \frac{t^2}{4p}, \quad y = t" />
            </div>
          </div>
        </div>

        {/* Examples */}
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
            Examples
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Example 1: Upward-opening parabola</h3>
              <p>Equation: <InlineMath math="x^2 = 8y" /></p>
              <div className="mt-2 space-y-1">
                <p>• 4p = 8, so p = 2</p>
                <p>• Focus: (0, 2)</p>
                <p>• Directrix: y = -2</p>
                <p>• Opens upward</p>
                <p>• Alternative form: <InlineMath math="y = \frac{1}{8}x^2" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Rightward-opening parabola</h3>
              <p>Equation: <InlineMath math="y^2 = 12x" /></p>
              <div className="mt-2 space-y-1">
                <p>• 4p = 12, so p = 3</p>
                <p>• Focus: (3, 0)</p>
                <p>• Directrix: x = -3</p>
                <p>• Opens rightward</p>
                <p>• Alternative form: <InlineMath math="x = \frac{1}{12}y^2" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Downward-opening parabola</h3>
              <p>Equation: <InlineMath math="y = -\frac{1}{4}x^2" /></p>
              <div className="mt-2 space-y-1">
                <p>• a = -1/4, so p = 1/(4a) = -1</p>
                <p>• Standard form: <InlineMath math="x^2 = -4y" /></p>
                <p>• Focus: (0, -1)</p>
                <p>• Directrix: y = 1</p>
                <p>• Opens downward</p>
              </div>
            </div>
          </div>
        </div>

        {/* Focal Properties */}
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
            Focal Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Definition:</h3>
              <p>A parabola is the locus of all points equidistant from the focus and directrix</p>
            </div>
            <div>
              <h3 className="font-semibold">Distance Property:</h3>
              <p>For any point P(x, y) on the parabola:</p>
              <p>Distance from P to focus = Distance from P to directrix</p>
            </div>
            <div>
              <h3 className="font-semibold">Reflection Property:</h3>
              <p>Rays parallel to the axis of symmetry reflect through the focus</p>
              <p>This property is used in satellite dishes and car headlights</p>
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
              <h3 className="font-semibold">For x² = 4py, tangent at point (x₁, y₁):</h3>
              <BlockMath math="x \cdot x_1 = 2p(y + y_1)" />
            </div>
            <div>
              <h3 className="font-semibold">For y² = 4px, tangent at point (x₁, y₁):</h3>
              <BlockMath math="y \cdot y_1 = 2p(x + x_1)" />
            </div>
            <div>
              <h3 className="font-semibold">Slope at point (x₁, y₁) for x² = 4py:</h3>
              <BlockMath math="m = \frac{x_1}{2p}" />
            </div>
            <div>
              <h3 className="font-semibold">Slope at point (x₁, y₁) for y² = 4px:</h3>
              <BlockMath math="m = \frac{2p}{y_1}" />
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
            Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Optics:</strong> Parabolic mirrors in telescopes and satellite dishes</li>
              <li><strong>Engineering:</strong> Parabolic arches in bridges and architecture</li>
              <li><strong>Physics:</strong> Projectile motion follows parabolic paths</li>
              <li><strong>Automotive:</strong> Car headlight reflectors use parabolic shapes</li>
              <li><strong>Solar Energy:</strong> Parabolic collectors focus sunlight</li>
              <li><strong>Mathematics:</strong> Optimization problems and calculus applications</li>
              <li><strong>Sports:</strong> Trajectory analysis in ballistics and athletics</li>
              <li><strong>Architecture:</strong> Parabolic domes and structural elements</li>
            </ul>
          </div>
        </div>

        {/* Chord Properties */}
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
            Chord Properties
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Focal Chord:</h3>
              <p>A chord passing through the focus</p>
              <p>For x² = 4py, if focal chord has endpoints (x₁, y₁) and (x₂, y₂):</p>
              <p>• x₁x₂ = -4p²</p>
              <p>• y₁ + y₂ = length of focal chord</p>
            </div>
            <div>
              <h3 className="font-semibold">Latus Rectum:</h3>
              <p>The focal chord perpendicular to the axis of symmetry</p>
              <p>Length = 4|p|</p>
              <p>Endpoints: (±2p, p) for x² = 4py</p>
            </div>
            <div>
              <h3 className="font-semibold">Chord of Contact:</h3>
              <p>From external point (x₁, y₁), the chord of contact has equation:</p>
              <p>For x² = 4py: <InlineMath math="x \cdot x_1 = 2p(y + y_1)" /></p>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases and Notes
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Degenerate Case:</h3>
              <p>When p = 0, the parabola degenerates to a line (the axis of symmetry)</p>
            </div>
            <div>
              <h3 className="font-semibold">Relationship to Conic Sections:</h3>
              <p>A parabola is formed when a plane cuts a cone parallel to its generator</p>
            </div>
            <div>
              <h3 className="font-semibold">Quadratic Function Connection:</h3>
              <p>Every quadratic function y = ax² represents a parabola with vertex at origin</p>
            </div>
            <div>
              <h3 className="font-semibold">Scaling:</h3>
              <p>Larger |p| values create "wider" parabolas</p>
              <p>Smaller |p| values create "narrower" parabolas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
