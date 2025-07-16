"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AngleBetweenVectors() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Linear Algebra",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra",
    },
    {
      label: "Angle Between Vectors",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/angle-between-vectors",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Angle Between Vectors
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn to calculate the angle between two vectors using the dot product formula.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Main Formula */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-cyan-300 dark:to-blue-300`}
          >
            Angle Formula
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Main Formula:</h3>
              <BlockMath math="\cos \theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| |\vec{v}|}" />
              <p>where θ is the angle between vectors <InlineMath math="\vec{u}" /> and <InlineMath math="\vec{v}" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Solving for Angle:</h3>
              <BlockMath math="\theta = \arccos\left(\frac{\vec{u} \cdot \vec{v}}{|\vec{u}| |\vec{v}|}\right)" />
            </div>
            <div>
              <h3 className="font-semibold">Range:</h3>
              <p><InlineMath math="0 \leq \theta \leq \pi" /> (0° to 180°)</p>
            </div>
          </div>
        </div>

        {/* Component Forms */}
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
            Component Forms
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">2D Vectors:</h3>
              <p>For <InlineMath math="\vec{u} = \langle u_1, u_2 \rangle" /> and <InlineMath math="\vec{v} = \langle v_1, v_2 \rangle" />:</p>
              <BlockMath math="\cos \theta = \frac{u_1v_1 + u_2v_2}{\sqrt{u_1^2 + u_2^2} \sqrt{v_1^2 + v_2^2}}" />
            </div>
            <div>
              <h3 className="font-semibold">3D Vectors:</h3>
              <p>For <InlineMath math="\vec{u} = \langle u_1, u_2, u_3 \rangle" /> and <InlineMath math="\vec{v} = \langle v_1, v_2, v_3 \rangle" />:</p>
              <BlockMath math="\cos \theta = \frac{u_1v_1 + u_2v_2 + u_3v_3}{\sqrt{u_1^2 + u_2^2 + u_3^2} \sqrt{v_1^2 + v_2^2 + v_3^2}}" />
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
              <h3 className="font-semibold">Example 1: 2D Vectors</h3>
              <p>Find the angle between <InlineMath math="\vec{u} = \langle 3, 4 \rangle" /> and <InlineMath math="\vec{v} = \langle 1, 2 \rangle" /></p>
              <div className="mt-2 space-y-1 text-sm">
                <p>Step 1: Calculate dot product: <InlineMath math="\vec{u} \cdot \vec{v} = 3(1) + 4(2) = 11" /></p>
                <p>Step 2: Calculate magnitudes: <InlineMath math="|\vec{u}| = \sqrt{3^2 + 4^2} = 5" /></p>
                <p>Step 3: <InlineMath math="|\vec{v}| = \sqrt{1^2 + 2^2} = \sqrt{5}" /></p>
                <p>Step 4: <InlineMath math="\cos \theta = \frac{11}{5\sqrt{5}} = \frac{11\sqrt{5}}{25}" /></p>
                <p>Step 5: <InlineMath math="\theta = \arccos\left(\frac{11\sqrt{5}}{25}\right) \approx 0.322 \text{ radians} \approx 18.4°" /></p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: 3D Vectors</h3>
              <p>Find the angle between <InlineMath math="\vec{a} = \langle 1, 0, 1 \rangle" /> and <InlineMath math="\vec{b} = \langle 0, 1, 1 \rangle" /></p>
              <div className="mt-2 space-y-1 text-sm">
                <p>Step 1: <InlineMath math="\vec{a} \cdot \vec{b} = 1(0) + 0(1) + 1(1) = 1" /></p>
                <p>Step 2: <InlineMath math="|\vec{a}| = \sqrt{1^2 + 0^2 + 1^2} = \sqrt{2}" /></p>
                <p>Step 3: <InlineMath math="|\vec{b}| = \sqrt{0^2 + 1^2 + 1^2} = \sqrt{2}" /></p>
                <p>Step 4: <InlineMath math="\cos \theta = \frac{1}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2}" /></p>
                <p>Step 5: <InlineMath math="\theta = \arccos\left(\frac{1}{2}\right) = \frac{\pi}{3} = 60°" /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Parallel Vectors (Same Direction):</h3>
              <p><InlineMath math="\cos \theta = 1" />, so <InlineMath math="\theta = 0°" /></p>
              <p>Example: <InlineMath math="\vec{u} = \langle 2, 4 \rangle" /> and <InlineMath math="\vec{v} = \langle 1, 2 \rangle" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Parallel Vectors (Opposite Direction):</h3>
              <p><InlineMath math="\cos \theta = -1" />, so <InlineMath math="\theta = 180°" /></p>
              <p>Example: <InlineMath math="\vec{u} = \langle 3, 6 \rangle" /> and <InlineMath math="\vec{v} = \langle -1, -2 \rangle" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Perpendicular Vectors:</h3>
              <p><InlineMath math="\cos \theta = 0" />, so <InlineMath math="\theta = 90°" /></p>
              <p>Example: <InlineMath math="\vec{u} = \langle 1, 0 \rangle" /> and <InlineMath math="\vec{v} = \langle 0, 1 \rangle" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Acute vs Obtuse Angles:</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>If <InlineMath math="\vec{u} \cdot \vec{v} > 0" />, then <InlineMath math="\theta < 90°" /> (acute)</li>
                <li>If <InlineMath math="\vec{u} \cdot \vec{v} < 0" />, then <InlineMath math="\theta > 90°" /> (obtuse)</li>
                <li>If <InlineMath math="\vec{u} \cdot \vec{v} = 0" />, then <InlineMath math="\theta = 90°" /> (right angle)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Properties */}
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
            Properties and Notes
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Symmetry:</h3>
              <p>The angle between <InlineMath math="\vec{u}" /> and <InlineMath math="\vec{v}" /> equals the angle between <InlineMath math="\vec{v}" /> and <InlineMath math="\vec{u}" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Unit Vectors:</h3>
              <p>For unit vectors, <InlineMath math="\cos \theta = \vec{u} \cdot \vec{v}" /> (since <InlineMath math="|\vec{u}| = |\vec{v}| = 1" />)</p>
            </div>
            <div>
              <h3 className="font-semibold">Geometric Interpretation:</h3>
              <p>The dot product <InlineMath math="\vec{u} \cdot \vec{v} = |\vec{u}||\vec{v}|\cos \theta" /> represents the projection relationship</p>
            </div>
            <div>
              <h3 className="font-semibold">Domain Consideration:</h3>
              <p>Always verify that <InlineMath math="-1 \leq \frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|} \leq 1" /> before applying arccos</p>
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
              <li><strong>Computer Graphics:</strong> Lighting calculations and surface normal angles</li>
              <li><strong>Physics:</strong> Work calculations (W = F·d cos θ) and force analysis</li>
              <li><strong>Engineering:</strong> Structural analysis and load direction calculations</li>
              <li><strong>Navigation:</strong> Bearing calculations and directional analysis</li>
              <li><strong>Machine Learning:</strong> Similarity measures and clustering algorithms</li>
              <li><strong>Robotics:</strong> Joint angle calculations and path planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
