"use client";

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import React, { JSX, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Creates an SVG for a scalene triangle.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const ScaleneTriangleSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <polygon
        points="10,90 90,90 40,10"
        style={{
          fill: isColorful ? "#81d4fa" : "lightgray",
          stroke: isColorful ? "#0288d1" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for an isosceles triangle.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const IsoscelesTriangleSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <polygon
        points="10,90 90,90 50,10"
        style={{
          fill: isColorful ? "#ffcc80" : "lightgray",
          stroke: isColorful ? "#ef6c00" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for an equilateral triangle.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const EquilateralTriangleSVG = (isColorful: boolean = true): JSX.Element => (
  <svg height="100" width="100" viewBox="0 0 100 100">
    <polygon
      points="50,10 90,90 10,90"
      style={{
        fill: isColorful ? "#a5d6a7" : "lightgray",
        stroke: isColorful ? "#388e3c" : "gray",
        strokeWidth: 2,
      }}
    />
  </svg>
);

/**
 * @description Creates an SVG for a right triangle.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const RightTriangleSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <polygon
        points="10,10 10,90 90,90"
        style={{
          fill: isColorful ? "#fff59d" : "lightgray",
          stroke: isColorful ? "#fbc02d" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for a square.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const SquareSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <rect
        width="80"
        height="80"
        x="10"
        y="10"
        style={{
          fill: isColorful ? "#ba68c8" : "lightgray",
          stroke: isColorful ? "#7b1fa2" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for a rectangle.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const RectangleSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="150" viewBox="0 0 150 100">
      <rect
        width="130"
        height="80"
        x="10"
        y="10"
        style={{
          fill: isColorful ? "#ffab91" : "lightgray",
          stroke: isColorful ? "#e65100" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for a parallelogram.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const ParallelogramSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="150" viewBox="0 0 150 100">
      <polygon
        points="30,10 140,10 120,90 10,90"
        style={{
          fill: isColorful ? "#c5e1a5" : "lightgray",
          stroke: isColorful ? "#7cb342" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for a trapezoid.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const TrapezoidSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="150" viewBox="0 0 150 100">
      <polygon
        points="30,10 120,10 140,90 10,90"
        style={{
          fill: isColorful ? "#bcaaa4" : "lightgray",
          stroke: isColorful ? "#795548" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for a rhombus.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const RhombusSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="150" viewBox="0 0 150 100">
      <polygon
        points="75,10 140,50 75,90 10,50"
        style={{
          fill: isColorful ? "#ce93d8" : "lightgray",
          stroke: isColorful ? "#8e24aa" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @description Creates an SVG for a circle.
 * @param {boolean} [isColorful=true] - Whether to use a colorful fill.
 * @returns {JSX.Element} The SVG element.
 */
const CircleSVG = (isColorful: boolean = true): JSX.Element => {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="40"
        style={{
          fill: isColorful ? "#90caf9" : "lightgray",
          stroke: isColorful ? "#1e88e5" : "gray",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

/**
 * @interface Shape
 * @description Interface for a basic shape.
 * @property {string} name - Name of the shape.
 * @property {string} type - Type of shape (Triangle, Quadrilateral, Circle).
 * @property {string} description - Short description.
 * @property {string[]} properties - Array of properties.
 * @property {(isColorful: boolean) => JSX.Element} svg - Function that returns an SVG element.
 */
interface Shape {
  name: string;
  type: string;
  description: string;
  properties: string[];
  svg: (isColorful: boolean) => JSX.Element;
}

/**
 * @description Array of basic shapes.
 */
const basicShapes: Shape[] = [
  // Triangles
  {
    name: "Scalene Triangle",
    type: "Triangle",
    description: "A triangle with all three sides of different lengths.",
    properties: [
      "All sides have different lengths.",
      "All angles have different measures.",
      "No lines of symmetry.",
      "Example: A triangle with sides of 3cm, 4cm, and 5cm.",
    ],
    svg: ScaleneTriangleSVG,
  },
  {
    name: "Isosceles Triangle",
    type: "Triangle",
    description: "A triangle with at least two sides of equal length.",
    properties: [
      "At least two sides are equal in length.",
      "The angles opposite the equal sides are equal.",
      "Has one line of symmetry.",
      "Example: A triangle with sides of 5cm, 5cm, and 6cm.",
    ],
    svg: IsoscelesTriangleSVG,
  },
  {
    name: "Equilateral Triangle",
    type: "Triangle",
    description: "A triangle with all three sides of equal length.",
    properties: [
      "All sides are equal in length.",
      "All angles are equal (60 degrees each).",
      "Has three lines of symmetry.",
      "Example: A triangle with sides of 4cm, 4cm, and 4cm.",
    ],
    svg: EquilateralTriangleSVG,
  },
  {
    name: "Right Triangle",
    type: "Triangle",
    description:
      "A triangle with one angle measuring exactly 90 degrees (a right angle).",
    properties: [
      "One angle is a right angle (90 degrees).",
      "The side opposite the right angle is called the hypotenuse.",
      "The Pythagorean theorem applies: a² + b² = c² (where a and b are the lengths of the legs, and c is the length of the hypotenuse).",
      "Example: A triangle with sides of 3cm, 4cm (legs), and 5cm (hypotenuse).",
    ],
    svg: RightTriangleSVG,
  },

  // Quadrilaterals
  {
    name: "Square",
    type: "Quadrilateral",
    description: "A quadrilateral with four equal sides and four right angles.",
    properties: [
      "All sides are equal in length.",
      "All angles are right angles (90 degrees).",
      "Opposite sides are parallel.",
      "Diagonals are equal in length and bisect each other at right angles.",
      "Has four lines of symmetry.",
      "Example: A square with sides of 5cm.",
    ],
    svg: SquareSVG,
  },
  {
    name: "Rectangle",
    type: "Quadrilateral",
    description:
      "A quadrilateral with four right angles and opposite sides equal.",
    properties: [
      "Opposite sides are equal in length.",
      "All angles are right angles (90 degrees).",
      "Opposite sides are parallel.",
      "Diagonals are equal in length and bisect each other.",
      "Has two lines of symmetry.",
      "Example: A rectangle with sides of 4cm and 6cm.",
    ],
    svg: RectangleSVG,
  },
  {
    name: "Parallelogram",
    type: "Quadrilateral",
    description: "A quadrilateral with opposite sides parallel.",
    properties: [
      "Opposite sides are parallel.",
      "Opposite sides are equal in length.",
      "Opposite angles are equal.",
      "Consecutive angles are supplementary (add up to 180 degrees).",
      "Diagonals bisect each other.",
      "Example: A parallelogram with sides of 5cm and 7cm, and angles of 60 and 120 degrees.",
    ],
    svg: ParallelogramSVG,
  },
  {
    name: "Trapezoid",
    type: "Quadrilateral",
    description:
      "A quadrilateral with at least one pair of parallel sides (called bases).",
    properties: [
      "At least one pair of opposite sides is parallel.",
      "The parallel sides are called bases.",
      "The non-parallel sides are called legs.",
      "Example: A trapezoid with bases of 6cm and 8cm, and legs of 4cm.",
    ],
    svg: TrapezoidSVG,
  },
  {
    name: "Rhombus",
    type: "Quadrilateral",
    description: "A quadrilateral with all four sides of equal length.",
    properties: [
      "All sides are equal in length.",
      "Opposite sides are parallel.",
      "Opposite angles are equal.",
      "Diagonals bisect each other at right angles.",
      "Diagonals bisect the angles of the rhombus.",
      "Has two lines of symmetry.",
      "Example: A rhombus with sides of 5cm and angles of 60 and 120 degrees.",
    ],
    svg: RhombusSVG,
  },

  // Circles
  {
    name: "Circle",
    type: "Circle",
    description:
      "A set of all points in a plane that are equidistant from a given point (the center).",
    properties: [
      "All points on the circle are the same distance (the radius) from the center.",
      "The distance around the circle is called the circumference.",
      "The diameter is twice the radius.",
      "Infinite lines of symmetry through the center.",
      `Circumference = ${(<InlineMath math="2 \pi r" />)} (where r is the radius).`,
      `Area = ${(<InlineMath math="\pi r^2" />)} (where r is the radius).`,
      "Example: A circle with a radius of 3cm.",
    ],
    svg: CircleSVG,
  },
];

/**
 * @component BasicShapes
 * @description Renders an educational page about basic geometric shapes.
 * @returns {JSX.Element} The rendered page.
 */
export default function BasicShapes() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Basic Shapes",
      href: "/mathematics/concepts/foundational/basic-shapes",
    },
  ];

  /**
   * @state isColorful
   * @description State to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @state selectedShapeType
   * @description State to track the currently selected shape type for the identification section.
   */
  const [selectedShapeType, setSelectedShapeType] = useState<string>(
    basicShapes[0].type,
  );

  /**
   * @state selectedPropertyType
   * @description State to track the currently selected shape type for the properties section.
   */
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>(
    basicShapes[0].type,
  );

  /**
   * @description Handles color change.
   * @param {boolean} colorful - New color state.
   */
  const handleColorChange = (colorful: boolean) => {
    setIsColorful(colorful);
  };

  /**
   * @description Filters shapes based on selectedShapeType.
   * @param {string} type - The shape type to filter by.
   * @returns {Shape[]} An array of shapes matching the selected type.
   */
  const filteredShapes = (type: string) => {
    return basicShapes.filter((shape) => shape.type === type);
  };

  /**
   * @description Gets all unique shape types from the basicShapes array.
   * @returns {string[]} An array of unique shape types.
   */
  const getShapeTypes = (): string[] => {
    const types = basicShapes.map((shape) => shape.type);
    return [...new Set(types)]; // Remove duplicates
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Basic Shapes
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Identify and understand the properties of fundamental geometric
          shapes.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={handleColorChange} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Shape Identification */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-indigo-300 dark:to-purple-300`}
          >
            Identifying Basic Shapes
          </h2>

          {/* Tabs for Shape Types */}
          <div className="mb-4 flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {getShapeTypes().map((type) => (
              <button
                key={type}
                className={`mr-4 inline-flex items-center justify-center rounded-t-lg border-b-2 px-4 py-2 text-sm font-medium ${
                  selectedShapeType === type
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                } focus:outline-none`}
                onClick={() => setSelectedShapeType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Shape Cards */}
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredShapes(selectedShapeType).map((shape) => (
              <div
                key={shape.name}
                className={`flex flex-col items-center rounded-lg border p-4 ${
                  isColorful
                    ? "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                    : "border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
                }`}
              >
                <div className="h-24 w-24">{shape.svg(isColorful)}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {shape.name}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  {shape.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Properties of Basic Shapes */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-700 dark:to-emerald-700"
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
            Properties of Basic Shapes
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            {/* Tabs for Shape Types (Properties Section) */}
            <div className="mb-4 flex flex-wrap border-b border-gray-200 dark:border-gray-700">
              {getShapeTypes().map((type) => (
                <button
                  key={type}
                  className={`mr-4 inline-flex items-center justify-center rounded-t-lg border-b-2 px-4 py-2 text-sm font-medium ${
                    selectedPropertyType === type
                      ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  } focus:outline-none`}
                  onClick={() => setSelectedPropertyType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
            <p>
              Learn about the key properties that define each shape, such as
              side lengths, angles, and symmetry. We&#39;ve added examples to
              help illustrate each property.
            </p>

            {/* Shape Property Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Filter shapes based on selectedPropertyType */}
              {filteredShapes(selectedPropertyType).map((shape, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border p-4 ${
                    isColorful
                      ? "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
                      : "border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {shape.name}
                  </h3>
                  {/* Removed SVG display */}
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {shape.properties.map((property, propIndex) => (
                      <li
                        key={propIndex}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {property}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Shapes Around Us
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
