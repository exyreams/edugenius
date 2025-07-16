// import Link from "next/link";
// import {
//   ArrowDownToDot,
//   Box,
//   ChevronRight,
//   Circle,
//   Hexagon,
//   RectangleHorizontal,
//   Square,
//   Triangle,
//   Waypoints,
// } from "lucide-react";
//
// import Breadcrumb from "@/components/Breadcrumb";
//
// const formulas = [
//   {
//     id: "angles-in-polygon",
//     name: "Angles in a Polygon",
//     icon: Hexagon,
//     gradient:
//       "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Calculate the sum of interior angles in any polygon.",
//   },
//   {
//     id: "area-and-perimeter-of-the-circle",
//     name: "Area and Perimeter of the Circle",
//     icon: Circle,
//     gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate the area and perimeter (circumference) of a circle.",
//   },
//   {
//     id: "area-and-perimeter-of-triangles",
//     name: "Area and Perimeter of Triangles",
//     icon: Triangle,
//     gradient:
//       "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate the area and perimeter of different types of triangles.",
//   },
//   {
//     id: "circumference",
//     name: "Circumference of a Circle",
//     icon: Circle,
//     gradient:
//       "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Calculate the distance around a circle.",
//   },
//   {
//     id: "distance-between-two-points",
//     name: "Distance Between Two Points",
//     icon: Waypoints,
//     gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate the distance between two points in a coordinate plane.",
//   },
//   {
//     id: "distance-from-a-point-to-line",
//     name: "Distance from a Point to a Line",
//     icon: ArrowDownToDot,
//     gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Calculate the shortest distance from a point to a line.",
//   },
//   {
//     id: "ellipse-with-center-at-the-origin",
//     name: "Ellipse with Center at the Origin",
//     icon: Circle,
//     gradient:
//       "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand the properties of an ellipse centered at the origin.",
//   },
//   {
//     id: "ellipse-with-different-center-of-origin",
//     name: "Ellipse with Center different from the Origin",
//     icon: Circle,
//     gradient:
//       "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand the properties of an ellipse with a center different from the origin.",
//   },
//   {
//     id: "equation-of-the-line",
//     name: "Equation of the Line",
//     icon: Waypoints,
//     gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Find the equation of a line given different information (e.g., two points, slope and a point).",
//   },
//   {
//     id: "hyperbola",
//     name: "Hyperbola",
//     icon: RectangleHorizontal,
//     gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Understand the properties of a hyperbola.",
//   },
//   {
//     id: "midpoint-between-two-points",
//     name: "Midpoint Between Two Points",
//     icon: ArrowDownToDot,
//     gradient:
//       "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Calculate the midpoint of a line segment between two points.",
//   },
//   {
//     id: "parabola-with-vertex-at-the-origin",
//     name: "Parabola with Vertex at the Origin",
//     icon: RectangleHorizontal,
//     gradient:
//       "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand the properties of a parabola with its vertex at the origin.",
//   },
//   {
//     id: "parabola-with-vertex-different-from-the-origin",
//     name: "Parabola with Vertex different from the Origin",
//     icon: RectangleHorizontal,
//     gradient:
//       "from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand the properties of a parabola with its vertex different from the origin.",
//   },
//   {
//     id: "quadrilateral-area-and-perimeter",
//     name: "Quadrilateral Area and Perimeter",
//     icon: Square,
//     gradient: "from-rose-200 to-red-200 dark:from-rose-600 dark:to-red-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate the area and perimeter of different types of quadrilaterals.",
//   },
//   {
//     id: "volume-of-geometric-bodies",
//     name: "Volume of Geometric Bodies",
//     icon: Box,
//     gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Calculate the volume of various 3D geometric shapes.",
//   },
// ];
//
// export default function GeometryFormulas() {
//   const breadcrumbItems = [
//     { label: "Mathematics", href: "/mathematics" },
//     { label: "Formulas", href: "/mathematics/formulas" },
//     { label: "Geometry", href: "/mathematics/formulas/geometry" },
//   ];
//
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="mb-12 space-y-6 text-center">
//         <h1 className="bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-green-300 dark:to-emerald-400">
//           Geometry
//         </h1>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
//           Explore the properties, measurements, and relationships of points,
//           lines, angles, surfaces, and solids.
//         </p>
//       </div>
//
//       <Breadcrumb items={breadcrumbItems} />
//
//       {/* Formula Grid */}
//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {formulas.map((formula) => (
//           <Link
//             href={`/mathematics/formulas/geometry/${formula.id}`}
//             key={formula.id}
//             className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
//           >
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
//                   <formula.icon className="h-6 w-6 text-current" />
//                 </div>
//                 <h3 className="currentcolor text-lg font-semibold">
//                   {formula.name}
//                 </h3>
//               </div>
//               <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
//                 {formula.description}
//               </p>
//               <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
//                 <span className="text-sm font-medium text-gray-700 dark:text-white/80">
//                   Explore Concept
//                 </span>
//                 <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
//               </div>
//             </div>
//
//             {/* Animated background element */}
//             <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
//           </Link>
//         ))}
//       </div>
//
//       {/* Decorative Section Divider */}
//       <div className="mt-16 flex items-center justify-center space-x-4">
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//         <span className="text-sm italic text-gray-700 dark:text-gray-200">
//           Shapes, Spaces, and Dimensions
//         </span>
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//       </div>
//     </div>
//   );
// }

// v2

"use client";

import Link from "next/link";
import {
  ArrowDownToDot,
  Box,
  ChevronRight,
  Circle,
  Hexagon,
  RectangleHorizontal,
  Square,
  Triangle,
  Waypoints,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import React, { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const formulas = [
  {
    id: "angles-in-polygon",
    name: "Angles in a Polygon",
    icon: Hexagon,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate the sum of interior angles in any polygon.",
  },
  {
    id: "area-and-perimeter-of-the-circle",
    name: "Area and Perimeter of the Circle",
    icon: Circle,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate the area and perimeter (circumference) of a circle.",
  },
  {
    id: "area-and-perimeter-of-triangles",
    name: "Area and Perimeter of Triangles",
    icon: Triangle,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate the area and perimeter of different types of triangles.",
  },
  {
    id: "circumference",
    name: "Circumference of a Circle",
    icon: Circle,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate the distance around a circle.",
  },
  {
    id: "distance-between-two-points",
    name: "Distance Between Two Points",
    icon: Waypoints,
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate the distance between two points in a coordinate plane.",
  },
  {
    id: "distance-from-a-point-to-line",
    name: "Distance from a Point to a Line",
    icon: ArrowDownToDot,
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate the shortest distance from a point to a line.",
  },
  {
    id: "ellipse-with-center-at-the-origin",
    name: "Ellipse with Center at the Origin",
    icon: Circle,
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the properties of an ellipse centered at the origin.",
  },
  {
    id: "ellipse-with-different-center-of-origin",
    name: "Ellipse with Center different from the Origin",
    icon: Circle,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the properties of an ellipse with a center different from the origin.",
  },
  {
    id: "equation-of-the-line",
    name: "Equation of the Line",
    icon: Waypoints,
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Find the equation of a line given different information (e.g., two points, slope and a point).",
  },
  {
    id: "hyperbola",
    name: "Hyperbola",
    icon: RectangleHorizontal,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Understand the properties of a hyperbola.",
  },
  {
    id: "midpoint-between-two-points",
    name: "Midpoint Between Two Points",
    icon: ArrowDownToDot,
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate the midpoint of a line segment between two points.",
  },
  {
    id: "parabola-with-vertex-at-the-origin",
    name: "Parabola with Vertex at the Origin",
    icon: RectangleHorizontal,
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the properties of a parabola with its vertex at the origin.",
  },
  {
    id: "parabola-with-vertex-different-from-the-origin",
    name: "Parabola with Vertex different from the Origin",
    icon: RectangleHorizontal,
    gradient:
      "from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the properties of a parabola with its vertex different from the origin.",
  },
  {
    id: "quadrilateral-area-and-perimeter",
    name: "Quadrilateral Area and Perimeter",
    icon: Square,
    gradient: "from-rose-200 to-red-200 dark:from-rose-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate the area and perimeter of different types of quadrilaterals.",
  },
  {
    id: "volume-of-geometric-bodies",
    name: "Volume of Geometric Bodies",
    icon: Box,
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate the volume of various 3D geometric shapes.",
  },
];

export default function GeometryFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    { label: "Geometry", href: "/mathematics/concepts/intermediate-advanced/geometry" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-green-300 dark:to-emerald-400 sm:text-5xl md:text-6xl">
          Geometry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the properties, measurements, and relationships of points,
          lines, angles, surfaces, and solids.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => (
          <Link
            href={`/mathematics/concepts/intermediate-advanced/geometry/${formula.id}`}
            key={formula.id}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
              isColorful
                ? `bg-gradient-to-br ${formula.gradient} ${formula.text}`
                : "glass text-gray-800 dark:text-white"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  {isColorful ? (
                    <formula.icon className="h-6 w-6 text-current" />
                  ) : (
                    <formula.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  )}
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    isColorful ? "" : "text-gray-800 dark:text-white"
                  }`}
                >
                  {formula.name}
                </h3>
              </div>
              <p
                className={`text-sm leading-6 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {formula.description}
              </p>
              <div
                className={`mt-4 flex items-center justify-between ${
                  isColorful
                    ? "opacity-0 transition-opacity group-hover:opacity-100"
                    : ""
                }`}
              >
                <span
                  className={`text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
                >
                  Explore Concept
                </span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
                />
              </div>
            </div>

            {/* Animated background element */}
            <div
              className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                isColorful
                  ? "bg-black/5 dark:bg-white/10"
                  : "bg-gray-300/50 dark:bg-gray-700/50"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Shapes, Spaces, and Dimensions
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
