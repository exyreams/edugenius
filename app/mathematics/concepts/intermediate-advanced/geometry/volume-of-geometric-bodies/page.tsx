"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function VolumeOfGeometricBodies() {
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
      label: "Volume of Geometric Bodies",
      href: "/mathematics/concepts/intermediate-advanced/geometry/volume-of-geometric-bodies",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-sky-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Volume of Geometric Bodies
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the formulas for calculating volumes of various 3D geometric shapes and solids.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Solids */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-sky-300 dark:to-blue-300`}
          >
            Basic 3D Solids
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Cube:</h3>
              <BlockMath math="V = a^3" />
              <p>Where a is the side length</p>
            </div>
            <div>
              <h3 className="font-semibold">Rectangular Prism (Cuboid):</h3>
              <BlockMath math="V = l \times w \times h" />
              <p>Where l = length, w = width, h = height</p>
            </div>
            <div>
              <h3 className="font-semibold">Sphere:</h3>
              <BlockMath math="V = \frac{4}{3}\pi r^3" />
              <p>Where r is the radius</p>
            </div>
          </div>
        </div>

        {/* Cylinders and Cones */}
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
            Cylinders and Cones
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Circular Cylinder:</h3>
              <BlockMath math="V = \pi r^2 h" />
              <p>Where r is the base radius and h is the height</p>
            </div>
            <div>
              <h3 className="font-semibold">Circular Cone:</h3>
              <BlockMath math="V = \frac{1}{3}\pi r^2 h" />
              <p>Where r is the base radius and h is the height</p>
            </div>
            <div>
              <h3 className="font-semibold">Truncated Cone (Frustum):</h3>
              <BlockMath math="V = \frac{1}{3}\pi h(r_1^2 + r_1 r_2 + r_2^2)" />
              <p>Where r₁ and r₂ are the radii of the two bases, h is the height</p>
            </div>
          </div>
        </div>

        {/* Pyramids */}
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
            Pyramids
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">General Pyramid:</h3>
              <BlockMath math="V = \frac{1}{3} \times \text{Base Area} \times \text{Height}" />
              <p>This formula applies to any pyramid regardless of base shape</p>
            </div>
            <div>
              <h3 className="font-semibold">Square Pyramid:</h3>
              <BlockMath math="V = \frac{1}{3}a^2 h" />
              <p>Where a is the side length of the square base and h is the height</p>
            </div>
            <div>
              <h3 className="font-semibold">Triangular Pyramid (Tetrahedron):</h3>
              <BlockMath math="V = \frac{1}{3} \times \frac{1}{2}ab \times h = \frac{abh}{6}" />
              <p>Where a and b are the base triangle dimensions and h is the height</p>
            </div>
            <div>
              <h3 className="font-semibold">Regular Tetrahedron:</h3>
              <BlockMath math="V = \frac{a^3}{6\sqrt{2}}" />
              <p>Where a is the edge length</p>
            </div>
          </div>
        </div>

        {/* Prisms */}
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
            Prisms
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">General Prism:</h3>
              <BlockMath math="V = \text{Base Area} \times \text{Height}" />
              <p>This formula applies to any prism regardless of base shape</p>
            </div>
            <div>
              <h3 className="font-semibold">Triangular Prism:</h3>
              <BlockMath math="V = \frac{1}{2}abh" />
              <p>Where a and b are the base triangle dimensions and h is the prism height</p>
            </div>
            <div>
              <h3 className="font-semibold">Pentagonal Prism:</h3>
              <BlockMath math="V = \frac{1}{4}\sqrt{25 + 10\sqrt{5}} \times a^2 \times h" />
              <p>Where a is the side length of the regular pentagon and h is the height</p>
            </div>
            <div>
              <h3 className="font-semibold">Hexagonal Prism:</h3>
              <BlockMath math="V = \frac{3\sqrt{3}}{2}a^2 h" />
              <p>Where a is the side length of the regular hexagon and h is the height</p>
            </div>
          </div>
        </div>

        {/* Ellipsoids and Complex Shapes */}
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
            Ellipsoids and Complex Shapes
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-6">
            <div>
              <h3 className="font-semibold">Ellipsoid:</h3>
              <BlockMath math="V = \frac{4}{3}\pi abc" />
              <p>Where a, b, and c are the semi-axes lengths</p>
            </div>
            <div>
              <h3 className="font-semibold">Torus:</h3>
              <BlockMath math="V = 2\pi^2 R r^2" />
              <p>Where R is the major radius and r is the minor radius</p>
            </div>
            <div>
              <h3 className="font-semibold">Spherical Cap:</h3>
              <BlockMath math="V = \frac{\pi h^2}{3}(3r - h)" />
              <p>Where r is the sphere radius and h is the cap height</p>
            </div>
            <div>
              <h3 className="font-semibold">Spherical Segment:</h3>
              <BlockMath math="V = \frac{\pi h}{6}(3r_1^2 + 3r_2^2 + h^2)" />
              <p>Where r₁ and r₂ are the radii of the two bases and h is the height</p>
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
              <h3 className="font-semibold">Example 1: Sphere</h3>
              <p>Find the volume of a sphere with radius 6 units:</p>
              <div className="mt-2">
                <BlockMath math="V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi (6)^3 = \frac{4}{3}\pi (216) = 288\pi \approx 904.78 \text{ cubic units}" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Cylinder</h3>
              <p>Find the volume of a cylinder with radius 4 units and height 10 units:</p>
              <div className="mt-2">
                <BlockMath math="V = \pi r^2 h = \pi (4)^2 (10) = 160\pi \approx 502.65 \text{ cubic units}" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Cone</h3>
              <p>Find the volume of a cone with base radius 5 units and height 12 units:</p>
              <div className="mt-2">
                <BlockMath math="V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (5)^2 (12) = \frac{1}{3}\pi (300) = 100\pi \approx 314.16 \text{ cubic units}" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 4: Rectangular Prism</h3>
              <p>Find the volume of a box with dimensions 8 × 6 × 4 units:</p>
              <div className="mt-2">
                <BlockMath math="V = l \times w \times h = 8 \times 6 \times 4 = 192 \text{ cubic units}" />
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
            Real-World Applications
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Architecture:</strong> Calculating building volumes and material requirements</li>
              <li><strong>Engineering:</strong> Fluid capacity, storage tank design</li>
              <li><strong>Manufacturing:</strong> Material usage and production planning</li>
              <li><strong>Medicine:</strong> Organ volume measurements and drug dosage calculations</li>
              <li><strong>Packaging:</strong> Container design and shipping optimization</li>
              <li><strong>Construction:</strong> Concrete volume for foundations and structures</li>
              <li><strong>Environmental Science:</strong> Water reservoir capacity and pollution dispersion</li>
              <li><strong>Food Industry:</strong> Recipe scaling and container sizing</li>
            </ul>
          </div>
        </div>

        {/* Volume Relationships */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-amber-300`}
          >
            Important Volume Relationships
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Scaling Property:</h3>
              <p>If all dimensions are scaled by factor k, volume scales by k³</p>
              <BlockMath math="V_{new} = k^3 \times V_{original}" />
            </div>
            <div>
              <h3 className="font-semibold">Cone vs Cylinder:</h3>
              <p>A cone has 1/3 the volume of a cylinder with the same base and height</p>
            </div>
            <div>
              <h3 className="font-semibold">Pyramid vs Prism:</h3>
              <p>A pyramid has 1/3 the volume of a prism with the same base and height</p>
            </div>
            <div>
              <h3 className="font-semibold">Units:</h3>
              <p>Volume is always measured in cubic units (cm³, m³, in³, ft³, etc.)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
