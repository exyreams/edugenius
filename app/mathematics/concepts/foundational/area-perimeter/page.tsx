"use client";

import "katex/dist/katex.min.css";
import React, { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Array of gradient color strings for practice problems.
 */
const problemColors = [
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
  "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700",
  "from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700",
  "from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700",
  "from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700",
];

/**
 * @component AreaAndPerimeter
 * @description A client component explaining area and perimeter.
 * @returns {JSX.Element} The rendered AreaAndPerimeter page.
 */
export default function AreaAndPerimeter() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Area & Perimeter",
      href: "/mathematics/concepts/foundational/area-perimeter",
    },
  ];

  /**
   * @state isColorful
   * @description State for toggling between colorful/grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  /**
   * @description Text color class, determined by the `isColorful` state.
   * @type {string}
   */
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Area & Perimeter
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about area and perimeter, including formulas and calculations
          for various shapes.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding Area */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Understanding Area
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Area is the amount of space inside a two-dimensional shape. It is
              measured in square units (e.g., cm², m², in², ft²).
            </p>
          </div>
        </div>

        {/* Understanding Perimeter */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Understanding Perimeter
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Perimeter is the total distance around the outside of a
              two-dimensional shape. It is measured in linear units (e.g., cm,
              m, in, ft).
            </p>
          </div>
        </div>

        {/* Area and Perimeter of Squares */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500 dark:to-pink-500"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Area and Perimeter of Squares
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>A square has four equal sides.</p>
            {/* SVG for Square */}
            <div className="my-4 flex justify-center">
              <svg width="200" height="200" className="border border-gray-600">
                <rect
                  x="50"
                  y="50"
                  width="100"
                  height="100"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="2"
                />
                <text x="90" y="165" fontSize="16">
                  s
                </text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Formulas:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  Area: <InlineMath math={"A = s^2"} />, where s is the side
                  length.
                </li>
                <li>
                  Perimeter: <InlineMath math={"P = 4s"} />, where s is the side
                  length.
                </li>
              </ul>

              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> A square with side length 5 cm has an
                area of 25 cm² and a perimeter of 20 cm.
              </p>
            </div>
          </div>
        </div>

        {/* Area and Perimeter of Rectangles */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-orange-300`}
          >
            Area and Perimeter of Rectangles
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>A rectangle has two pairs of equal sides.</p>
            {/* SVG for Rectangle */}
            <div className="my-4 flex justify-center">
              <svg width="250" height="150" className="border border-gray-600">
                <rect
                  x="50"
                  y="50"
                  width="150"
                  height="50"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="2"
                />
                <text x="120" y="115" fontSize="16">
                  l
                </text>
                <text x="205" y="80" fontSize="16">
                  w
                </text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Formulas:</strong>
              </p>

              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  Area: <InlineMath math={"A = l \\times w"} />, where l is the
                  length and w is the width.
                </li>
                <li>
                  Perimeter: <InlineMath math={"P = 2l + 2w"} />, where l is the
                  length and w is the width.
                </li>
              </ul>
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> A rectangle with length 8 cm and width
                3 cm has an area of 24 cm² and a perimeter of 22 cm.
              </p>
            </div>
          </div>
        </div>

        {/* Area and Perimeter of Triangles */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            Area and Perimeter of Triangles
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>A triangle is a three-sided polygon.</p>
            {/* SVG for Triangle */}
            <div className="my-4 flex justify-center">
              <svg width="250" height="180" className="border border-gray-600">
                <polygon
                  points="125,50 50,150 200,150"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="2"
                />
                <text x="120" y="170" fontSize="16">
                  b
                </text>
                <text x="85" y="100" fontSize="16">
                  h
                </text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Formulas:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  Area:{" "}
                  <InlineMath math={"A = \\frac{1}{2} \\times b \\times h"} />,
                  where b is the base and h is the height.
                </li>
                <li>
                  Perimeter: <InlineMath math={"P = a + b + c"} />, where a, b,
                  and c are the lengths of the three sides.
                </li>
              </ul>

              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> A triangle with base 6 cm and height 4
                cm has an area of 12 cm². If the sides are 5 cm, 5 cm, and 6 cm,
                the perimeter is 16 cm.
              </p>
            </div>
          </div>
        </div>

        {/* Circumference and Area of Circles */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-lime-300 dark:to-green-300 `}
          >
            Circumference and Area of Circles
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A circle is defined by its radius (r), which is the distance from
              the center to any point on the circle. The diameter (d) is twice
              the radius.
            </p>
            {/* SVG for Circle */}
            <div className="my-4 flex justify-center">
              <svg width="200" height="200" className="border border-gray-600">
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="100"
                  x2="170"
                  y2="100"
                  stroke="black"
                  strokeWidth="2"
                />
                <text x="130" y="95" fontSize="16">
                  r
                </text>
                <line
                  x1="30"
                  y1="100"
                  x2="170"
                  y2="100"
                  stroke="black"
                  strokeWidth="2"
                />
                <text x="90" y="60" fontSize="16">
                  d
                </text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Formulas:</strong>
              </p>

              <ul className={`list-inside list-disc ${textColor}`}>
                <li>
                  Circumference (Perimeter): <InlineMath math={"C = 2\\pi r"} />
                  , where r is the radius. Also,{" "}
                  <InlineMath math={"C = \\pi d"} />, where d is the diameter.
                </li>
                <li>
                  Area: <InlineMath math={"A = \\pi r^2"} />, where r is the
                  radius.
                </li>
                <li>
                  Diameter: <InlineMath math={"d = 2r"} />, where r is the
                  radius.
                </li>
              </ul>

              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong> A circle with radius 3 cm has a
                circumference of approximately 18.85 cm (using π ≈ 3.14159) and
                an area of approximately 28.27 cm².
              </p>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
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
            } dark:from-rose-300 dark:to-pink-300 `}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem:
                  "\\text{Find the area and perimeter of a square with side length 7 cm.}",
                solution: "A = 49 \\text{ cm}^2, P = 28 \\text{ cm}",
              },
              {
                problem:
                  "\\text{Find the area and perimeter of a rectangle with length 10 m and width 4 m.}",
                solution: "A = 40 \\text{ m}^2, P = 28 \\text{ m}",
              },
              {
                problem:
                  "\\text{Find the area of a triangle with base 8 in and height 5 in.}",
                solution: "A = 20 \\text{ in}^2",
              },
              {
                problem:
                  "\\text{Find the circumference and area of a circle with radius 6 ft (use } \\pi \\approx 3.14 \\text{).}",
                solution:
                  "C \\approx 37.68 \\text{ ft}, A \\approx 113.04 \\text{ ft}^2",
              },
              {
                problem:
                  "\\text{Find the perimeter of a triangle with sides 3 cm, 4 cm, and 5 cm.}",
                solution: "P = 12 \\text{ cm}",
              },
              {
                problem:
                  "\\text{A square has an area of 64 mm² . What is the length of one side?}",
                solution: "8 \\text{ mm}",
              },
              {
                problem:
                  "\\text{A rectangle has a perimeter of 30 ft and a length of 10 ft. What is its width?}",
                solution: "5 \\text{ ft}",
              },
              {
                problem:
                  "\\text{A circle has a circumference of 31.4 cm. What is its radius (use } \\pi \\approx 3.14 \\text{)?}",
                solution: "5 \\text{ cm}",
              },
              {
                problem:
                  "\\text{A triangle has an area of 30 m² and a base of 10 m. What is its height?}",
                solution: "6 \\text{ m}",
              },
              {
                problem:
                  "\\text{A rectangle field is 90m by 40m. If fencing cost \\$5 per meter, how much will it cost to fence the field?}",
                solution: "\\$1300",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                } hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                >
                  <BlockMath math={item.problem} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-600"
                    } ${scrollbarStyle}`}
                  >
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Measuring Shapes and Spaces
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
