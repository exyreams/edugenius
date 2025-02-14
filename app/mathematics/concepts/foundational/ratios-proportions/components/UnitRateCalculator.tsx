"use client";

import React, { useEffect, useState } from "react";

/**
 * @component UnitRateCalculator
 * @description An interactive component to calculate unit rates.
 * @param {object} props - The component props.
 * @param {boolean} [props.isColorful=true] - Whether to use a colorful theme or grayscale.
 * @returns {JSX.Element} The UnitRateCalculator component.
 */
const UnitRateCalculator: React.FC<{ isColorful?: boolean }> = ({
  isColorful = true,
}) => {
  /**
   * @state quantity
   * @description State for the quantity value.
   * @type {number | string}
   */
  const [quantity, setQuantity] = useState<number | string>("");

  /**
   * @state units
   * @description State for the number of units.
   * @type {number | string}
   */
  const [units, setUnits] = useState<number | string>("");
  /**
   * @state unitRate
   * @description  Holds calculated unit rate, or an error message.
   */
  const [unitRate, setUnitRate] = useState<string | number>("");

  /**
   * @description Handles input changes for quantity and units, ensuring they are non-negative numbers.
   * Empty strings are allowed for clearing inputs.
   * @param {('quantity' | 'units')} type - Specifies whether 'quantity' or 'units' is being updated.
   * @param {string} value - The new value entered by the user.
   */
  const handleInputChange = (type: "quantity" | "units", value: string) => {
    const numValue = value === "" ? "" : Number(value);

    if (value === "" || (typeof numValue === "number" && numValue >= 0)) {
      // Allow positive numbers or empty string
      if (type === "quantity") {
        setQuantity(value);
      } else {
        setUnits(value);
      }
    }
  };

  /**
   * @description Calculates the unit rate whenever quantity or units change.  Handles edge cases for
   * empty inputs and division by zero.  Sets the unitRate state to the calculated rate or an error message.
   */
  useEffect(() => {
    if (quantity === "" || units === "") {
      setUnitRate(""); // Reset if inputs are cleared
      return;
    }

    const numQuantity = Number(quantity);
    const numUnits = Number(units);

    if (numUnits === 0) {
      setUnitRate("Cannot divide by zero");
      return;
    }

    setUnitRate((numQuantity / numUnits).toFixed(2)); // Calculate and format
  }, [quantity, units]);

  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div>
          <label
            htmlFor="quantity"
            className={`block text-sm font-medium ${isColorful ? "text-gray-700" : "text-gray-800 dark:text-gray-200"}`}
          >
            Quantity:
          </label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(e) => handleInputChange("quantity", e.target.value)}
            className={`mt-1 w-32 rounded border border-gray-300 p-2 text-center dark:bg-gray-800 dark:text-white ${isColorful ? "" : "dark:bg-gray-700 dark:text-gray-200"}`}
          />
        </div>
        <div>
          <label
            htmlFor="units"
            className={`block text-sm font-medium ${isColorful ? "text-gray-700" : "text-gray-800 dark:text-gray-200"}`}
          >
            Units:
          </label>
          <input
            type="text"
            id="units"
            value={units}
            onChange={(e) => handleInputChange("units", e.target.value)}
            className={`mt-1 w-32 rounded border border-gray-300 p-2 text-center dark:bg-gray-800 dark:text-white ${isColorful ? "" : "dark:bg-gray-700 dark:text-gray-200"}`}
          />
        </div>
      </div>
      {unitRate !== "" && (
        <p
          className={`text-lg ${isColorful ? "text-gray-800" : "text-gray-900 dark:text-gray-100"}`}
        >
          Unit Rate: {unitRate}
        </p>
      )}
    </div>
  );
};

export default UnitRateCalculator;
