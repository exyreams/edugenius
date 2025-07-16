"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function EquationOfTheLine() {
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
      label: "Equation of the Line",
      href: "/mathematics/concepts/intermediate-advanced/geometry/equation-of-the-line",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-cyan-700 to-sky-800 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-sky-400 md:text-5xl lg:text-6xl`}
        >
          Equation of the Line
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the various forms of linear equations and learn how to find the equation of a line.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Slope-Intercept Form */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-cyan-300 dark:to-sky-300`}
          >
            Slope-Intercept Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The most common form of a linear equation:
            </p>
            <div className="mt-4">
              <BlockMath math="y = mx + b" />
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>m</strong> = slope of the line</p>
              <p>• <strong>b</strong> = y-intercept (where the line crosses the y-axis)</p>
              <p>• <strong>x, y</strong> = coordinates of any point on the line</p>
            </div>
          </div>
        </div>

        {/* Point-Slope Form */}
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
            Point-Slope Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Used when you know a point on the line and the slope:
            </p>
            <div className="mt-4">
              <BlockMath math="y - y_1 = m(x - x_1)" />
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>m</strong> = slope of the line</p>
              <p>• <strong>(x₁, y₁)</strong> = known point on the line</p>
              <p>• <strong>(x, y)</strong> = any other point on the line</p>
            </div>
          </div>
        </div>

        {/* Two-Point Form */}
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
            Two-Point Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Used when you know two points on the line:
            </p>
            <div className="mt-4">
              <BlockMath math="\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}" />
            </div>
            <p className="mt-4">
              First, calculate the slope:
            </p>
            <div className="mt-2">
              <BlockMath math="m = \frac{y_2 - y_1}{x_2 - x_1}" />
            </div>
            <p className="mt-2">
              Then use point-slope form with either point.
            </p>
          </div>
        </div>

        {/* Standard Form */}
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
            Standard Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The general form of a linear equation:
            </p>
            <div className="mt-4">
              <BlockMath math="Ax + By = C" />
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>A, B, C</strong> = constants (A and B not both zero)</p>
              <p>• Usually written with integer coefficients</p>
              <p>• A is typically positive</p>
            </div>
            <p className="mt-4">
              To convert to slope-intercept form:
            </p>
            <div className="mt-2">
              <BlockMath math="y = -\frac{A}{B}x + \frac{C}{B}" />
            </div>
          </div>
        </div>

        {/* Intercept Form */}
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
            Intercept Form
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Used when you know the x and y intercepts:
            </p>
            <div className="mt-4">
              <BlockMath math="\frac{x}{a} + \frac{y}{b} = 1" />
            </div>
            <div className="mt-4 space-y-2">
              <p>• <strong>a</strong> = x-intercept (where line crosses x-axis)</p>
              <p>• <strong>b</strong> = y-intercept (where line crosses y-axis)</p>
              <p>• Line passes through points (a, 0) and (0, b)</p>
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
              <h3 className="font-semibold">Example 1: Given slope and y-intercept</h3>
              <p>Slope = 2, y-intercept = -3</p>
              <p>Equation: <InlineMath math="y = 2x - 3" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Example 2: Given two points</h3>
              <p>Points: (1, 3) and (4, 9)</p>
              <p>Slope: <InlineMath math="m = \frac{9-3}{4-1} = \frac{6}{3} = 2" /></p>
              <p>Using point-slope form: <InlineMath math="y - 3 = 2(x - 1)" /></p>
              <p>Simplified: <InlineMath math="y = 2x + 1" /></p>
            </div>
            <div>
              <h3 className="font-semibold">Example 3: Given point and slope</h3>
              <p>Point: (-2, 5), Slope: -1/2</p>
              <p>Point-slope form: <InlineMath math="y - 5 = -\frac{1}{2}(x - (-2))" /></p>
              <p>Simplified: <InlineMath math="y = -\frac{1}{2}x + 4" /></p>
            </div>
          </div>
        </div>

        {/* Special Cases */}
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
            Special Cases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
            <div>
              <h3 className="font-semibold">Horizontal Line:</h3>
              <BlockMath math="y = k" />
              <p>Where k is a constant. Slope = 0.</p>
            </div>
            <div>
              <h3 className="font-semibold">Vertical Line:</h3>
              <BlockMath math="x = h" />
              <p>Where h is a constant. Slope is undefined.</p>
            </div>
            <div>
              <h3 className="font-semibold">Line through Origin:</h3>
              <BlockMath math="y = mx" />
              <p>y-intercept = 0, passes through (0, 0).</p>
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
              <li><strong>Economics:</strong> Cost functions, supply and demand curves</li>
              <li><strong>Physics:</strong> Motion equations, velocity-time relationships</li>
              <li><strong>Engineering:</strong> Load-deflection relationships, calibration curves</li>
              <li><strong>Statistics:</strong> Linear regression and trend analysis</li>
              <li><strong>Computer Graphics:</strong> Line drawing algorithms</li>
              <li><strong>Navigation:</strong> Course plotting and GPS systems</li>
              <li><strong>Architecture:</strong> Slope calculations for roofs and ramps</li>
              <li><strong>Business:</strong> Break-even analysis and profit projections</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
