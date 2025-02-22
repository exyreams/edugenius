"use client";

import React, { useEffect, useState } from "react";

/**
 * @component RatioVisualizer
 * @description An interactive component to visualize ratios using adjustable bars.
 * @param {object} props - The component props.
 * @param {number} props.initialA - The initial value for part A of the ratio.
 * @param {number} props.initialB - The initial value for part B of the ratio.
 * @param {string} [props.colorA="bg-blue-500"] - The background color for part A.
 * @param {string} [props.colorB="bg-green-500"] - The background color for part B.
 * @param {boolean} [props.isColorful=true] - Whether to use colors or grayscale.
 * @returns {JSX.Element} The RatioVisualizer component.
 */
const RatioVisualizer: React.FC<{
  initialA: number;
  initialB: number;
  colorA?: string;
  colorB?: string;
  isColorful?: boolean;
}> = ({
  initialA,
  initialB,
  colorA = "bg-blue-500",
  colorB = "bg-green-500",
  isColorful = true,
}) => {
  /**
   * @state a
   * @description State for the value of part A.
   * @type {number}
   */
  const [a, setA] = useState(initialA);
  /**
   * @state b
   * @description State for the value of part B.
   * @type {number}
   */
  const [b, setB] = useState(initialB);

  /**
   * @description Updates the state of 'a' and keeps it within the range [1, 10].
   * @param {number} newValue - The new value to set for 'a'.
   */
  const updateA = (newValue: number) => {
    setA(Math.max(1, Math.min(10, newValue)));
  };

  /**
   * @description Updates the state of 'b' and keeps it within the range [1, 10].
   * @param {number} newValue - The new value to set for 'b'.
   */
  const updateB = (newValue: number) => {
    setB(Math.max(1, Math.min(10, newValue)));
  };

  /**
   * @description Simplifies a given ratio to its simplest form.
   * @param {number} a - The first number in the ratio.
   * @param {number} b - The second number in the ratio.
   * @returns {string} The simplified ratio as a string "x:y".  Returns an error message if either input is zero.
   */
  const simplifyRatio = (a: number, b: number): string => {
    if (a === 0 || b === 0) {
      return "Cannot simplify (division by zero)";
    }

    const gcd = (x: number, y: number): number => {
      return y === 0 ? x : gcd(y, x % y);
    };
    const greatestCommonDivisor = gcd(a, b);
    return `${a / greatestCommonDivisor}:${b / greatestCommonDivisor}`;
  };

  /**
   * @state simplified
   * @description Holds the simplified ratio string.  Gets updated whenever 'a' or 'b' changes.
   */
  const [simplified, setSimplified] = useState<string>(simplifyRatio(a, b));

  /**
   * @description Updates simplified ratio string whenever a or b changes.
   */
  useEffect(() => {
    setSimplified(simplifyRatio(a, b));
  }, [a, b]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-end">
        <div
          className={`h-24 w-12 rounded-t-md transition-all duration-300 ${
            isColorful ? colorA : "bg-gray-400 dark:bg-gray-500"
          }`}
          style={{ height: `${a * 20}px` }}
        ></div>
        <div
          className={`h-24 w-12 rounded-t-md transition-all duration-300 ${
            isColorful ? colorB : "bg-gray-600 dark:bg-gray-300"
          }`}
          style={{ height: `${b * 20}px` }}
        ></div>
      </div>
      <div className="flex space-x-4">
        <div>
          <label
            htmlFor="inputA"
            className={`block text-sm font-medium ${
              isColorful ? "text-gray-700" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Part A:
          </label>
          <input
            id="inputA"
            type="number"
            min="1"
            max="10"
            value={a}
            onChange={(e) => updateA(parseInt(e.target.value, 10))}
            className={`mt-1 w-20 rounded-md border border-gray-300 p-2 text-center text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500`}
          />
        </div>
        <div>
          <label
            htmlFor="inputB"
            className={`block text-sm font-medium ${
              isColorful ? "text-gray-700" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Part B:
          </label>
          <input
            id="inputB"
            type="number"
            min="1"
            max="10"
            value={b}
            onChange={(e) => updateB(parseInt(e.target.value, 10))}
            className={`mt-1 w-20 rounded-md border border-gray-300 p-2 text-center text-gray-700 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-500`}
          />
        </div>
      </div>
      <p
        className={`text-lg ${
          isColorful ? "text-gray-800" : "text-gray-900 dark:text-gray-100"
        }`}
      >
        Ratio: {a}:{b}
      </p>
      <p
        className={`text-lg ${isColorful ? "text-gray-800" : "text-gray-900 dark:text-gray-100"}`}
      >
        Simplified: {simplified}
      </p>
    </div>
  );
};

export default RatioVisualizer;
