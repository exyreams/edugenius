"use client";

import "katex/dist/katex.min.css";
import React, { useMemo, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { Bar, Pie } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

/**
 * @interface DataPoint
 * @description Represents a single data point.
 * @property {string} label - Label for the data point (e.g., name, category).
 * @property {number} value - Numeric value of the data point.
 */
interface DataPoint {
  label: string;
  value: number;
}

/**
 * @component DataHandlingAndStatistics
 * @description A client component that explains data handling and statistics.
 * @returns {JSX.Element} The rendered Data Handling and Statistics page.
 */
export default function DataHandlingAndStatistics() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Foundational", href: "/mathematics/concepts/foundational" },
    {
      label: "Data Handling and Statistics",
      href: "/mathematics/concepts/foundational/data-handling-and-statistics",
    },
  ];

  /**
   * @state isColorful
   * @description State to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);
  /**
   * @state selectedDataType
   * @description which type of data representation to show.
   */
  const [selectedDataType, setSelectedDataType] = useState("Frequency Table");

  /**
   * @description Sample dataset for demonstration.
   */
  const sampleData: DataPoint[] = [
    { label: "Red", value: 12 },
    { label: "Blue", value: 19 },
    { label: "Yellow", value: 3 },
    { label: "Green", value: 5 },
    { label: "Purple", value: 2 },
    { label: "Orange", value: 3 },
  ];

  /**
   * @function calculateMean
   * @description Calculates the mean (average) of a dataset.
   * @param {DataPoint[]} data - The dataset.
   * @returns {number} The mean.
   */
  const calculateMean = (data: DataPoint[]): number => {
    const sum = data.reduce((acc, point) => acc + point.value, 0);
    return data.length > 0 ? sum / data.length : 0;
  };

  /**
   * @function calculateMedian
   * @description Calculates the median of a dataset.
   * @param {DataPoint[]} data - The dataset.
   * @returns {number} The median.
   */
  const calculateMedian = (data: DataPoint[]): number => {
    const sortedValues = [...data].sort((a, b) => a.value - b.value);
    const mid = Math.floor(sortedValues.length / 2);
    return sortedValues.length % 2 !== 0
      ? sortedValues[mid].value
      : (sortedValues[mid - 1].value + sortedValues[mid].value) / 2;
  };

  /**
   * @function calculateMode
   * @description Calculates the mode(s) of a dataset.
   * @param {DataPoint[]} data - The dataset
   * @returns {number[]} An array containing mode(s).
   */
  const calculateMode = (data: DataPoint[]): number[] => {
    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    const modes: number[] = [];

    for (const point of data) {
      counts[point.value] = (counts[point.value] || 0) + 1;
      if (counts[point.value] > maxCount) {
        maxCount = counts[point.value];
      }
    }

    for (const value in counts) {
      if (counts[Number(value)] === maxCount) {
        modes.push(Number(value));
      }
    }

    return modes;
  };

  /**
   * @function calculateRange
   * @description Calculates the range of a dataset.
   * @param {DataPoint[]} data - The dataset.
   * @returns {number} The range.
   */
  const calculateRange = (data: DataPoint[]): number => {
    if (data.length === 0) {
      return 0;
    }
    const sortedValues = [...data].sort((a, b) => a.value - b.value);
    return sortedValues[sortedValues.length - 1].value - sortedValues[0].value;
  };

  /**
   * @constant mean
   * @description The calculated mean of the sample data.
   */
  const mean = useMemo(() => calculateMean(sampleData), [sampleData]);

  /**
   * @constant median
   * @description The calculated median of the sample data.
   */
  const median = useMemo(() => calculateMedian(sampleData), [sampleData]);

  /**
   * @constant mode
   * @description The calculated mode of the sample data.
   */
  const mode = useMemo(() => calculateMode(sampleData), [sampleData]);

  /**
   * @constant range
   * @description The range value of sample data
   */
  const range = useMemo(() => calculateRange(sampleData), [sampleData]);

  /**
   * @constant barChartData
   * @description Data configuration for the bar chart.
   */
  const barChartData = {
    labels: sampleData.map((point) => point.label),
    datasets: [
      {
        label: "Value",
        data: sampleData.map((point) => point.value),
        backgroundColor: isColorful
          ? [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ]
          : "rgba(99, 99, 99, 0.5)", // Grayscale
        borderColor: isColorful
          ? [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ]
          : "rgba(99, 99, 99, 1)",
        borderWidth: 1,
      },
    ],
  };

  /**
   *  @constant barChartOptions
   *  @description Options for bar chart
   */
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Bar Graph of Sample Data",
        color: isColorful ? "#1f2937" : "#6b7280",
      },
    },
    scales: {
      y: {
        // Configure the y-axis
        beginAtZero: true,
        ticks: {
          color: isColorful ? "#1f2937" : "#6b7280",
        },
      },
      x: {
        // Configure the x-axis
        ticks: {
          color: isColorful ? "#1f2937" : "#6b7280",
        },
      },
    },
  };

  /**
   * @constant pieChartData
   * @description Data configuration for the pie chart.
   */
  const pieChartData = {
    labels: sampleData.map((point) => point.label),
    datasets: [
      {
        label: "Value",
        data: sampleData.map((point) => point.value),
        backgroundColor: isColorful
          ? [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
            ]
          : [
              // Grayscale colors
              "rgba(200, 200, 200, 0.5)",
              "rgba(170, 170, 170, 0.5)",
              "rgba(140, 140, 140, 0.5)",
              "rgba(110, 110, 110, 0.5)",
              "rgba(80, 80, 80, 0.5)",
              "rgba(50, 50, 50, 0.5)",
            ],
        borderColor: isColorful
          ? [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ]
          : [
              // Grayscale borders (optional, can be same as background)
              "rgba(200, 200, 200, 1)",
              "rgba(170, 170, 170, 1)",
              "rgba(140, 140, 140, 1)",
              "rgba(110, 110, 110, 1)",
              "rgba(80, 80, 80, 1)",
              "rgba(50, 50, 50, 1)",
            ],
        borderWidth: 1,
      },
    ],
  };

  /**
   *  @constant pieChartOptions
   *  @description Options for pie chart
   */
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: isColorful ? "#1f2937" : "#6b7280",
        },
      },
      title: {
        display: true,
        text: "Pie Chart of Sample Data",
        color: isColorful ? "#1f2937" : "#6b7280",
      },
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 md:text-5xl lg:text-6xl`}
        >
          Data Handling and Statistics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about collecting, organizing, analyzing, and interpreting data.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Collecting Data */}
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
            Collecting Data
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Data collection is the process of gathering information. Methods
              include surveys, experiments, observations, and using existing
              datasets. The quality of data collection directly impacts the
              validity of any conclusions drawn from the data.
            </p>
            <ul className="ml-6 mt-2 list-disc">
              <li>
                <strong>Surveys:</strong> Asking questions to a sample of
                individuals.
              </li>
              <li>
                <strong>Experiments:</strong> Manipulating variables to observe
                the effects.
              </li>
              <li>
                <strong>Observations:</strong> Recording what is seen or
                measured.
              </li>
              <li>
                <strong>Existing Datasets:</strong> Utilizing data that has
                already been collected.
              </li>
            </ul>
          </div>
        </div>

        {/* Organizing Data */}
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
            Organizing Data
          </h2>
          {/* Tabs */}
          <div className="mb-4 mt-4 flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {["Frequency Table", "Bar Graph", "Pie Chart"].map((type) => (
              <button
                key={type}
                className={`mr-4 inline-flex items-center justify-center rounded-t-lg border-b-2 px-4 py-2 text-sm font-medium ${
                  selectedDataType === type
                    ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                } focus:outline-none`}
                onClick={() => setSelectedDataType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Organizing data makes it easier to analyze and understand. Common
              methods include frequency tables, bar graphs, and pie charts.
            </p>

            {/* Conditional Rendering based on selectedDataType */}
            {selectedDataType === "Frequency Table" && (
              <div
                className={`mt-4 overflow-x-auto rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        className={`bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-700 dark:text-gray-400`}
                      >
                        Label
                      </th>
                      <th
                        className={`bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-700 dark:text-gray-400`}
                      >
                        Frequency
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((point, index) => (
                      <tr key={index}>
                        <td
                          className={`border-t border-gray-200 px-6 py-4 dark:border-gray-600`}
                        >
                          {point.label}
                        </td>
                        <td
                          className={`border-t border-gray-200 px-6 py-4 dark:border-gray-600`}
                        >
                          {point.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selectedDataType === "Bar Graph" && (
              <div
                className={`mt-4 h-[300px] rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            )}

            {selectedDataType === "Pie Chart" && (
              <div
                className={`mt-4 h-[300px] w-full rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
            )}
          </div>
        </div>

        {/* Mean, Median, and Mode */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600"
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
            Mean, Median, and Mode
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              These are measures of central tendency, which describe the
              "center" or "typical" value of a dataset.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Mean */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Mean</h3>
                <p>
                  The average of a set of numbers. Calculated by adding all
                  values and dividing by the number of values.
                </p>
                <BlockMath
                  math={`\\text{Mean} = \\frac{\\text{Sum of values}}{\\text{Number of values}}`}
                />
                <p className="mt-2">
                  <strong>Sample Data Mean:</strong>{" "}
                  <InlineMath math={`${mean.toFixed(2)}`} />
                </p>
              </div>

              {/* Median */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Median</h3>
                <p>
                  The middle value in a sorted dataset. If there's an even
                  number of values, it's the average of the two middle values.
                </p>
                <p className="mt-2">
                  <strong>Sample Data Median:</strong>{" "}
                  <InlineMath math={`${median}`} />
                </p>
              </div>

              {/* Mode */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">Mode</h3>
                <p>
                  The value(s) that appear most frequently in a dataset. A
                  dataset can have one mode (unimodal), multiple modes
                  (multimodal), or no mode.
                </p>
                <p className="mt-2">
                  <strong>Sample Data Mode:</strong>{" "}
                  {mode.length > 0 ? (
                    <InlineMath math={mode.join(", ")} />
                  ) : (
                    "No mode"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Range */}
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
            Range
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              The range is the difference between the highest and lowest values
              in a dataset. It provides a measure of the spread or dispersion of
              the data.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mt-2">
                <strong>Sample Data Range:</strong>{" "}
                <InlineMath math={`${range}`} />
              </p>
            </div>
          </div>
        </div>

        {/* Interpreting Data */}
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
            Interpreting Data
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Data interpretation involves drawing conclusions and making
              inferences from data. This includes understanding the significance
              of measures of central tendency, spread, and the overall
              distribution of the data. Context is crucial for proper
              interpretation.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Understanding Data
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
