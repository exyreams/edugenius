"use client";

import "katex/dist/katex.min.css";
import React, { JSX, useEffect, useState } from "react";
import { BlockMath } from "react-katex";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";
import InteractiveRuler from "./components/InteractiveRuler";

import InteractiveMeasuringCup from "./components/InteractiveMeasuringCup";
import InteractiveClock from "./components/InteractiveClock";
import UnitConverter from "./components/UnitConverter";

/**
 * @description Array of gradient color strings for practice problems.
 * The `dark:` prefix applies the style in dark mode.
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
 * @interface UnitSystem
 * @description Interface for a unit system (e.g., Metric, Imperial).
 * @property {string} name - The name of the unit system.
 * @property {string} description - A detailed description.
 * @property {string} history - Historical context of the system.
 */
interface UnitSystem {
  name: string;
  description: string;
  history: string;
}

/**
 * @description Array of common unit systems, now with more detail.
 */
const unitSystems: UnitSystem[] = [
  {
    name: "Metric System",
    description:
      "A decimal-based system of measurement used globally. It's based on units like meters (length), grams (mass), and liters (volume), and uses prefixes (kilo-, centi-, milli-) to denote multiples or fractions of the base units.  This makes conversions within the system very straightforward (e.g., 1000 meters = 1 kilometer).",
    history:
      "Developed in France in the late 18th century during the French Revolution.  It was designed to be a rational and universal system, replacing the many inconsistent local and regional systems.",
  },
  {
    name: "Imperial System",
    description:
      "A system of measurement primarily used in the United States.  It includes units like feet, inches (length), pounds, ounces (weight), and gallons, pints (volume).  The relationships between units are often not based on powers of ten, making conversions more complex than in the metric system.",
    history:
      "Evolved over centuries from traditional English units. Many units were based on practical measures (e.g., the length of a foot, the weight of a grain).  The system has historical roots in Roman and Anglo-Saxon units.",
  },
];

/**
 * @interface MeasuringTool
 * @description Interface for a measuring tool.
 * @property {string} name - The name of the tool.
 * @property {string} measures - What the tool measures (e.g., Length, Weight).
 * @property {string} description - A detailed description of the tool.
 * @property {string} [imageUrl] -  Optional URL for an image of the tool.
 * @property {JSX.Element} [interactiveComponent] - Optional React component for interactive demonstration.
 */
interface MeasuringTool {
  name: string;
  measures: string;
  description: string;
  imageUrl?: string;
  interactiveComponent?: JSX.Element;
}

/**
 * @description Array of measuring tools.
 */
const measuringTools: MeasuringTool[] = [
  {
    name: "Ruler",
    measures: "Length",
    description:
      "A straight-edged instrument marked with units (usually inches and centimeters) for measuring length. Rulers are typically made of wood, plastic, or metal and can range in length from a few inches to several feet.",
    interactiveComponent: <InteractiveRuler maxLength={30} />, // Pass isColorful
  },
  {
    name: "Measuring Cup",
    measures: "Volume",
    description:
      "A kitchen utensil used primarily to measure the volume of liquid or solid cooking ingredients. Measuring cups are often marked with graduations indicating different volumes (e.g., cups, ounces, milliliters).",
    interactiveComponent: (
      <InteractiveMeasuringCup maxVolume={500} initialVolume={0} />
    ), // Pass isColorful
  },
  {
    name: "Clock/Timer",
    measures: "Time",
    description:
      "An instrument used to measure and indicate time. Clocks typically display the current time, while timers measure specific intervals of time.  They can be mechanical, electronic, or digital.",
    interactiveComponent: (
      <InteractiveClock isColorful={false} size="large" showDigital={false} />
    ), // Pass isColorful
  },
];

/**
 * @component MeasurementAndUnits
 * @description An in-depth client component that explains measurement, units, and conversions, including interactive converters.
 * @returns {JSX.Element} The rendered Measurement and Units page.
 */
export default function MeasurementAndUnits() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Measurement and Units",
      href: "/mathematics/concepts/foundational/measurement-and-units",
    },
  ];

  /**
   * @state isColorful
   * @description State to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @effect
   * @description Updates the interactive components when `isColorful` changes.
   */
  useEffect(() => {
    measuringTools.forEach((tool) => {
      if (tool.interactiveComponent) {
        switch (tool.name) {
          case "Ruler":
            tool.interactiveComponent = (
              <InteractiveRuler maxLength={30} isColorful={isColorful} />
            );
            break;
          case "Measuring Cup":
            tool.interactiveComponent = (
              <InteractiveMeasuringCup maxVolume={700} initialVolume={20} />
            );
            break;
          case "Clock/Timer":
            tool.interactiveComponent = (
              <InteractiveClock isColorful={isColorful} />
            );
            break;
        }
      }
    });
  }, [isColorful]);

  /**
   * @description Scrollbar style based on the isColorful state.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-blue-200 sm:scrollbar-track-blue-300 scrollbar-thumb-blue-300 sm:scrollbar-thumb-blue-400 dark:scrollbar-track-blue-600 dark:sm:scrollbar-track-blue-700 dark:scrollbar-thumb-blue-500 dark:sm:scrollbar-thumb-blue-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Measurement and Units
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore standard units of measurement, conversion, and measuring
          tools.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Standard Units of Measurement */}
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
            Standard Units of Measurement
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Understand the standard units used for measuring length, weight
              (mass), volume, and time.
            </p>
            {/* Tabs for Measurement Types (Simplified - Handled in UnitConverter) */}
            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-300">
                Select a measurement type in the Unit Converter below to see the
                available units.
              </p>
            </div>
          </div>
        </div>

        {/* Metric System vs. Imperial System */}
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
            Metric System vs. Imperial System
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Compare and contrast the Metric and Imperial systems of
              measurement, including their histories and usage.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {unitSystems.map((system, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{system.name}</h3>
                  <p>{system.description}</p>
                  <p className="mt-2 text-sm italic">{system.history}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unit Conversions */}
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
            Unit Conversions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Learn how to convert units within the same system and between
              different systems. Use the interactive converter below.
            </p>

            {/* Unit Converter */}
            <UnitConverter isColorful={isColorful} />
          </div>
        </div>

        {/* Measuring Tools */}
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
            Measuring Tools
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Explore common measuring tools and their uses in determining
              various measurements.
            </p>
            {/* Interactive Measuring Tools */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {measuringTools.map((tool, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center rounded-lg border p-4 ${
                    isColorful
                      ? "border-gray-300 dark:border-gray-600"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <h3 className="mb-2 text-lg font-semibold">{tool.name}</h3>
                  {tool.interactiveComponent}
                </div>
              ))}
            </div>
            {/* Measuring Tool Descriptions */}
            <div className="mt-6 space-y-4">
              {measuringTools.map((tool, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-4 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <p>
                    <strong>{tool.name}:</strong> {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={` rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-lime-300 dark:to-green-300 `}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[0]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 1
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } 2.5 \text{ kilometers to miles.}" />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  {/* Expand/Collapse Icon */}
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
                  <BlockMath math="2.5 \text{ km} \times 0.621371 \frac{\text{mi}}{\text{km}} \approx 1.5534 \text{ mi}" />
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[1]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 2
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } 750 \text{ grams to ounces.}" />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
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
                  <BlockMath math="750 \text{ g} \times 0.035274 \frac{\text{oz}}{\text{g}} \approx 26.4555 \text{ oz}" />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[2]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 3
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } 5 \text{ US gallons to liters.}" />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
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
                  <BlockMath math="5 \text{ gal} \times 3.78541 \frac{\text{L}}{\text{gal}} \approx 18.9271 \text{ L}" />
                </div>
              </details>
            </div>

            {/* Problem 4: Mixed Units */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? `bg-gradient-to-br ${problemColors[3]} dark:text-white`
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 4
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
              >
                <BlockMath math="\text{Convert } 3 \text{ hours and } 30 \text{ minutes to seconds.}" />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
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
                  <BlockMath math="(3 \times 60 \times 60) + (30 \times 60) = 10800 + 1800 = 12600 \text{ s}" />
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Measuring the World
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
