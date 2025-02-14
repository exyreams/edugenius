"use client";

import React, { useEffect, useState } from "react";

/**
 * @component ProportionSolver
 * @description An interactive component for solving proportions.
 * @param {object} props - The component props.
 * @param {boolean} [props.isColorful=true] - Whether to use colors or grayscale.
 * @returns {JSX.Element} The ProportionSolver component.
 */
const ProportionSolver: React.FC<{ isColorful?: boolean }> = ({
  isColorful = true,
}) => {
  /**
   * @state a
   * @description State for the value of 'a' in the proportion.
   * @type {number | string}
   */
  const [a, setA] = useState<number | string>(1);
  /**
   * @state b
   * @description State for the value of 'b' in the proportion.
   * @type {number | string}
   */
  const [b, setB] = useState<number | string>(2);
  /**
   * @state c
   * @description State for the value of 'c' in the proportion.
   * @type {number | string}
   */
  const [c, setC] = useState<number | string>(2);
  /**
   * @state x
   * @description State for the value of 'x' (the unknown) in the proportion.
   * @type {number | string}
   */
  const [x, setX] = useState<number | string>(""); // Start with empty string for the unknown.

  /**
   * @state solution
   * @description solution for the value of 'x' .
   * @type {number | string}
   */
  const [solution, setSolution] = useState<number | string>("");

  /**
   * @description Updates states of the proportion
   * @param {string} variable - variable to set.
   * @param {string} value - value of set for the variable.
   */
  const handleInputChange = (
    variable: "a" | "b" | "c" | "x",
    value: string,
  ) => {
    const numValue = value === "" ? "" : Number(value); // Allow empty string

    if (value === "" || (typeof numValue === "number" && numValue >= 0)) {
      // allow number and empty
      switch (variable) {
        case "a":
          setA(value);
          break;
        case "b":
          setB(value);
          break;
        case "c":
          setC(value);
          break;
        case "x":
          setX(value);
          break;
      }
    }
  };

  /**
   * @description Calculates x given the values of a,b, and c, using cross-multiplication.
   *  Handles edge cases where inputs are empty strings or division by zero occurs.
   */
  useEffect(() => {
    if (a === "" || b === "" || c === "" || x !== "") {
      if (x !== "") {
        setSolution(""); // Clear solution if 'x' is being edited directly.
        return; // Early return if any value is empty or x filled, and solution being cleared
      }
      setSolution("");
      return;
    }

    const numA = Number(a);
    const numB = Number(b);
    const numC = Number(c);

    if (numB === 0) {
      setSolution("Cannot divide by zero");
      return;
    }

    const calculatedX = (numA * numC) / numB;
    setSolution(calculatedX);
  }, [a, b, c, x]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={a}
            onChange={(e) => handleInputChange("a", e.target.value)}
            className={`w-12 rounded border border-gray-300 p-1 text-center dark:bg-gray-800 dark:text-white ${
              isColorful ? "" : "dark:bg-gray-700 dark:text-gray-200"
            }`}
          />
          <hr className="w-12 border-gray-300 dark:border-gray-600" />
          <input
            type="text"
            value={b}
            onChange={(e) => handleInputChange("b", e.target.value)}
            className={`w-12 rounded border border-gray-300 p-1 text-center dark:bg-gray-800 dark:text-white ${
              isColorful ? "" : "dark:bg-gray-700 dark:text-gray-200"
            }`}
          />
        </div>
        <span
          className={`text-lg ${
            isColorful ? "text-gray-800" : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {" "}
          ={" "}
        </span>

        <div className="flex flex-col items-center">
          <input
            type="text"
            value={x === "" ? "x" : x}
            onChange={(e) => handleInputChange("x", e.target.value)}
            className={`w-12 rounded border border-gray-300 p-1 text-center dark:bg-gray-800 dark:text-white ${
              isColorful ? "" : "dark:bg-gray-700 dark:text-gray-200"
            }`}
            disabled={x !== "" && solution !== ""} // disable input if not x
          />
          <hr className="w-12 border-gray-300 dark:border-gray-600" />
          <input
            type="text"
            value={c}
            onChange={(e) => handleInputChange("c", e.target.value)}
            className={`w-12 rounded border border-gray-300 p-1 text-center dark:bg-gray-800 dark:text-white ${
              isColorful ? "" : "dark:bg-gray-700 dark:text-gray-200"
            }`}
          />
        </div>
      </div>
      {solution !== "" && (
        <p
          className={`text-lg ${
            isColorful ? "text-gray-800" : "text-gray-900 dark:text-gray-100"
          }`}
        >
          Solution: x = {solution}
        </p>
      )}
    </div>
  );
};

export default ProportionSolver;
