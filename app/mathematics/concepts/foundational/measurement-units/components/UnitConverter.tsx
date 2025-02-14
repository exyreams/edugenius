import React, { ChangeEvent, useMemo, useState } from "react";
import { InlineMath } from "react-katex";

/**
 * @interface Unit
 * @description Represents a unit of measurement.
 * @property {string} name - The name of the unit (e.g., Meter, Foot).
 * @property {string} symbol - The unit's symbol (e.g., m, ft).
 * @property {string} system - The system the unit belongs to (e.g., Metric, Imperial).
 * @property {string} type - The type of measurement (e.g., Length, Weight, Volume, Time).
 */
interface Unit {
  name: string;
  symbol: string;
  system: string;
  type: string;
}

/**
 * @interface Conversion
 * @description Represents a conversion between two units.
 * @property {string} fromUnit - The unit to convert from.
 * @property {string} toUnit - The unit to convert to.
 * @property {number} factor - The conversion factor.
 */
interface Conversion {
  fromUnit: string;
  toUnit: string;
  factor: number;
}

/**
 * @description Array of standard units.
 */
const standardUnits: Unit[] = [
  // Length
  { name: "Meter", symbol: "m", system: "Metric", type: "Length" },
  { name: "Kilometer", symbol: "km", system: "Metric", type: "Length" },
  { name: "Centimeter", symbol: "cm", system: "Metric", type: "Length" },
  { name: "Millimeter", symbol: "mm", system: "Metric", type: "Length" },
  { name: "Foot", symbol: "ft", system: "Imperial", type: "Length" },
  { name: "Inch", symbol: "in", system: "Imperial", type: "Length" },
  { name: "Yard", symbol: "yd", system: "Imperial", type: "Length" },
  { name: "Mile", symbol: "mi", system: "Imperial", type: "Length" },

  // Weight/Mass
  { name: "Gram", symbol: "g", system: "Metric", type: "Weight/Mass" },
  { name: "Kilogram", symbol: "kg", system: "Metric", type: "Weight/Mass" },
  { name: "Milligram", symbol: "mg", system: "Metric", type: "Weight/Mass" },
  { name: "Tonne", symbol: "t", system: "Metric", type: "Weight/Mass" },
  { name: "Pound", symbol: "lb", system: "Imperial", type: "Weight/Mass" },
  { name: "Ounce", symbol: "oz", system: "Imperial", type: "Weight/Mass" },

  // Volume
  { name: "Liter", symbol: "L", system: "Metric", type: "Volume" },
  { name: "Milliliter", symbol: "mL", system: "Metric", type: "Volume" },
  { name: "Cubic meter", symbol: "m³", system: "Metric", type: "Volume" },
  { name: "Gallon", symbol: "gal", system: "Imperial", type: "Volume" },
  { name: "Pint", symbol: "pt", system: "Imperial", type: "Volume" },
  { name: "Quart", symbol: "qt", system: "Imperial", type: "Volume" },
  { name: "Fluid ounce", symbol: "fl oz", system: "Imperial", type: "Volume" },

  // Time
  { name: "Second", symbol: "s", system: "Metric/Imperial", type: "Time" },
  { name: "Minute", symbol: "min", system: "Metric/Imperial", type: "Time" },
  { name: "Hour", symbol: "hr", system: "Metric/Imperial", type: "Time" },
  { name: "Day", symbol: "d", system: "Metric/Imperial", type: "Time" },
];

/**
 * @description Array of unit conversions.  Much more comprehensive!
 */
const unitConversions: Conversion[] = [
  // Length
  { fromUnit: "m", toUnit: "ft", factor: 3.28084 },
  { fromUnit: "ft", toUnit: "m", factor: 0.3048 },
  { fromUnit: "km", toUnit: "mi", factor: 0.621371 },
  { fromUnit: "mi", toUnit: "km", factor: 1.60934 },
  { fromUnit: "cm", toUnit: "in", factor: 0.393701 },
  { fromUnit: "in", toUnit: "cm", factor: 2.54 },
  { fromUnit: "mm", toUnit: "in", factor: 0.0393701 },
  { fromUnit: "in", toUnit: "mm", factor: 25.4 },
  { fromUnit: "yd", toUnit: "m", factor: 0.9144 },
  { fromUnit: "m", toUnit: "yd", factor: 1.09361 },
  { fromUnit: "km", toUnit: "m", factor: 1000 },
  { fromUnit: "m", toUnit: "km", factor: 0.001 },
  { fromUnit: "cm", toUnit: "m", factor: 0.01 },
  { fromUnit: "m", toUnit: "cm", factor: 100 },
  { fromUnit: "mm", toUnit: "m", factor: 0.001 },
  { fromUnit: "m", toUnit: "mm", factor: 1000 },

  // Weight/Mass
  { fromUnit: "g", toUnit: "oz", factor: 0.035274 },
  { fromUnit: "oz", toUnit: "g", factor: 28.3495 },
  { fromUnit: "kg", toUnit: "lb", factor: 2.20462 },
  { fromUnit: "lb", toUnit: "kg", factor: 0.453592 },
  { fromUnit: "mg", toUnit: "g", factor: 0.001 },
  { fromUnit: "g", toUnit: "mg", factor: 1000 },
  { fromUnit: "kg", toUnit: "g", factor: 1000 },
  { fromUnit: "g", toUnit: "kg", factor: 0.001 },
  { fromUnit: "t", toUnit: "kg", factor: 1000 },
  { fromUnit: "kg", toUnit: "t", factor: 0.001 },

  // Volume
  { fromUnit: "L", toUnit: "gal", factor: 0.264172 }, // US Gallons
  { fromUnit: "gal", toUnit: "L", factor: 3.78541 }, // US Gallons
  { fromUnit: "L", toUnit: "pt", factor: 2.11338 }, // US Pints
  { fromUnit: "pt", toUnit: "L", factor: 0.473176 }, // US Pints
  { fromUnit: "mL", toUnit: "L", factor: 0.001 },
  { fromUnit: "L", toUnit: "mL", factor: 1000 },
  { fromUnit: "m³", toUnit: "L", factor: 1000 },
  { fromUnit: "L", toUnit: "m³", factor: 0.001 },
  { fromUnit: "qt", toUnit: "L", factor: 0.946353 },
  { fromUnit: "L", toUnit: "qt", factor: 1.05669 },
  { fromUnit: "fl oz", toUnit: "L", factor: 0.0295735 },
  { fromUnit: "L", toUnit: "fl oz", factor: 33.814 },

  // Time
  { fromUnit: "min", toUnit: "s", factor: 60 },
  { fromUnit: "hr", toUnit: "min", factor: 60 },
  { fromUnit: "d", toUnit: "hr", factor: 24 },
  { fromUnit: "s", toUnit: "min", factor: 1 / 60 },
  { fromUnit: "min", toUnit: "hr", factor: 1 / 60 },
  { fromUnit: "hr", toUnit: "d", factor: 1 / 24 },
];

/**
 * @component UnitConverter
 * @description A reusable and comprehensive unit converter component.
 * @param {object} props The component props.
 * @param {boolean} [props.isColorful=true] Determines if the converter uses a colorful or grayscale theme.
 * @returns {JSX.Element} The rendered UnitConverter component.
 */
const UnitConverter: React.FC<{ isColorful?: boolean }> = ({
  isColorful = true,
}) => {
  /**
   * @state conversionType
   * @description State to track selected type of conversion.
   */
  const [conversionType, setConversionType] = useState("Length");

  /**
   * @state fromValue
   * @description State variable for the input value to be converted.
   */
  const [fromValue, setFromValue] = useState<number | string>("");
  /**
   * @state fromUnit
   * @description State for the unit being converted from.
   */
  const [fromUnit, setFromUnit] = useState("");
  /**
   * @state toUnit
   * @description State for the unit being converted to.
   */
  const [toUnit, setToUnit] = useState("");

  /**
   * @function handleFromValueChange
   * @description Handles changes to the 'from' value input.
   * @param {ChangeEvent<HTMLInputElement>} event - Input change event.
   */
  const handleFromValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Allow only numbers and a single decimal point.
    if (/^(\d+(\.\d*)?|(\.\d+))$/.test(value) || value === "") {
      setFromValue(value);
    }
  };

  /**
   * @function handleFromUnitChange
   * @description Handles changes to the from unit select.
   * @param {ChangeEvent<HTMLSelectElement>} event - The select change event.
   */
  const handleFromUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFromUnit(event.target.value);
  };

  /**
   * @function handleToUnitChange
   * @description Handles changes to the to unit select.
   * @param {ChangeEvent<HTMLSelectElement>} event - The select change event.
   */
  const handleToUnitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setToUnit(event.target.value);
  };

  /**
   * @function handleConversionTypeChange
   * @description  Handles changes to the conversion type (Length, Weight, etc.).
   * @param {ChangeEvent<HTMLSelectElement>} event - The select change event.
   */
  const handleConversionTypeChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setConversionType(event.target.value);
    setFromUnit(""); // Reset unit selections
    setToUnit("");
  };

  /**
   * @constant availableUnits
   * @description Filters units based on the selected `conversionType`.  It uses `useMemo` for efficiency.
   */
  const availableUnits = useMemo(() => {
    return standardUnits.filter((unit) => unit.type === conversionType);
  }, [conversionType]);

  /**
   * @constant convertedValue
   * @description Calculates the converted value. Uses useMemo to prevent unnecessary recalculations.
   */
  const convertedValue = useMemo(() => {
    if (fromValue === "" || fromUnit === "" || toUnit === "") {
      return "";
    }

    const numericFromValue = Number(fromValue);
    if (isNaN(numericFromValue)) {
      return "Invalid input";
    }

    // Direct conversion
    let conversion = unitConversions.find(
      (c) => c.fromUnit === fromUnit && c.toUnit === toUnit,
    );
    if (conversion) {
      return (numericFromValue * conversion.factor).toFixed(4);
    }

    // Reverse conversion
    conversion = unitConversions.find(
      (c) => c.fromUnit === toUnit && c.toUnit === fromUnit,
    );
    if (conversion) {
      return (numericFromValue / conversion.factor).toFixed(4);
    }

    // Indirect conversion (Metric to Imperial or vice-versa)
    const fromUnitData = standardUnits.find((u) => u.symbol === fromUnit);
    const toUnitData = standardUnits.find((u) => u.symbol === toUnit);

    if (
      fromUnitData &&
      toUnitData &&
      fromUnitData.system !== toUnitData.system
    ) {
      // 1. Convert 'fromUnit' to the base unit of its system.
      const toBaseConversion = unitConversions.find(
        (c) =>
          c.fromUnit === fromUnit &&
          c.toUnit ===
            standardUnits.find(
              (u) =>
                u.type === conversionType && u.system === fromUnitData.system,
            )?.symbol,
      );

      let baseValue: number;

      if (toBaseConversion) {
        baseValue = numericFromValue * toBaseConversion.factor;
      } else {
        const fromBaseConversion = unitConversions.find(
          (c) =>
            c.toUnit === fromUnit &&
            c.fromUnit ===
              standardUnits.find(
                (u) =>
                  u.type === conversionType && u.system === fromUnitData.system,
              )?.symbol,
        );

        if (!fromBaseConversion) return "Cannot convert";
        baseValue = numericFromValue / fromBaseConversion.factor;
      }

      // 2.  Convert the base unit to 'toUnit'.
      const fromBaseToTargetConversion = unitConversions.find(
        (c) =>
          c.fromUnit ===
            standardUnits.find(
              (u) =>
                u.type === conversionType && u.system === toUnitData.system,
            )?.symbol && c.toUnit === toUnit,
      );

      if (fromBaseToTargetConversion) {
        return (baseValue * fromBaseToTargetConversion.factor).toFixed(4);
      } else {
        const targetToBaseConversion = unitConversions.find(
          (c) =>
            c.toUnit ===
              standardUnits.find(
                (u) =>
                  u.type === conversionType && u.system === toUnitData.system,
              )?.symbol && c.fromUnit === toUnit,
        );
        if (!targetToBaseConversion) return "Cannot convert";
        return (baseValue / targetToBaseConversion.factor).toFixed(4);
      }
    }

    return "Cannot convert"; // If no conversion path is found
  }, [fromValue, fromUnit, toUnit, conversionType]);

  /**
   * @constant conversionTable
   * @description Creates a filtered list of conversions for the conversion table, based on the selected conversion type.  Uses `useMemo` for performance.
   */
  const conversionTable = useMemo(() => {
    return unitConversions.filter((conversion) => {
      const fromUnitData = standardUnits.find(
        (u) => u.symbol === conversion.fromUnit,
      );
      return fromUnitData?.type === conversionType;
    });
  }, [conversionType]);

  return (
    <div
      className={`rounded-lg p-6 ${
        isColorful
          ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
          : "bg-gray-100 dark:bg-gray-800"
      }`}
    >
      <h3
        className={`mb-4 text-xl font-semibold ${
          isColorful
            ? "text-purple-600 dark:text-purple-300"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        Unit Converter
      </h3>

      {/* Conversion Type Selection */}
      <div className="mb-4">
        <label
          htmlFor="conversionType"
          className={`block text-sm font-medium ${
            isColorful
              ? "text-gray-700 dark:text-gray-300"
              : "text-gray-800 dark:text-white"
          }`}
        >
          Conversion Type:
        </label>
        <select
          id="conversionType"
          value={conversionType}
          onChange={handleConversionTypeChange}
          className={`mt-1 block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
            isColorful
              ? ""
              : "bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white"
          }`}
        >
          <option value="Length">Length</option>
          <option value="Weight/Mass">Weight/Mass</option>
          <option value="Volume">Volume</option>
          <option value="Time">Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* From Input */}
        <div>
          <label
            htmlFor="fromValue"
            className={`block text-sm font-medium ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-800 dark:text-white"
            }`}
          >
            From Value:
          </label>
          <input
            type="text"
            id="fromValue"
            value={fromValue}
            onChange={handleFromValueChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
              isColorful
                ? ""
                : "bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
          />
        </div>

        <div>
          <label
            htmlFor="fromUnit"
            className={`block text-sm font-medium ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-800 dark:text-white"
            }`}
          >
            From Unit:
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={handleFromUnitChange}
            className={`mt-1 block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
              isColorful
                ? ""
                : "bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
          >
            <option value="">Select Unit</option>
            {availableUnits.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* To Unit Select */}
        <div>
          <label
            htmlFor="toUnit"
            className={`block text-sm font-medium ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-800 dark:text-white"
            }`}
          >
            To Unit:
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={handleToUnitChange}
            className={`mt-1 block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
              isColorful
                ? ""
                : "bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
          >
            <option value="">Select Unit</option>
            {availableUnits.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result */}
      <div className="mt-4">
        <p
          className={`text-lg font-semibold ${
            isColorful
              ? "text-gray-800 dark:text-gray-200"
              : "text-gray-800 dark:text-white"
          }`}
        >
          Converted Value:{" "}
          <span
            className={`font-bold ${
              isColorful
                ? "text-purple-600 dark:text-purple-300"
                : "text-indigo-600 dark:text-indigo-400"
            }`}
          >
            {convertedValue}
          </span>
        </p>
      </div>
      {/* Conversion Table (for reference) */}
      <div className="mt-8">
        <h4
          className={`text-lg font-semibold ${
            isColorful
              ? "text-purple-600 dark:text-purple-300"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Common Conversion Factors ({conversionType})
        </h4>
        <div
          className={`mt-2 overflow-x-auto rounded-md  ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-100 dark:bg-gray-700"}`}
        >
          <table className="min-w-full divide-y divide-gray-300">
            <thead
              className={`${isColorful ? "bg-black/5 dark:bg-black/20" : "bg-gray-50 dark:bg-gray-700"}`}
            >
              <tr>
                <th
                  scope="col"
                  className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold ${isColorful ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"} sm:pl-6`}
                >
                  From
                </th>
                <th
                  scope="col"
                  className={`px-3 py-3.5 text-left text-sm font-semibold ${isColorful ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"}`}
                >
                  To
                </th>
                <th
                  scope="col"
                  className={`px-3 py-3.5 text-left text-sm font-semibold ${isColorful ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"}`}
                >
                  Factor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-800">
              {conversionTable.map((conversion, index) => (
                <tr key={index}>
                  <td
                    className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium ${isColorful ? "text-gray-900 dark:text-gray-200" : "text-gray-900 dark:text-white"} sm:pl-6`}
                  >
                    <InlineMath math={`${conversion.fromUnit}`} />
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-4 text-sm ${isColorful ? "text-gray-500 dark:text-gray-300" : "text-gray-500 dark:text-gray-300"}`}
                  >
                    <InlineMath math={`${conversion.toUnit}`} />
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-4 text-sm ${isColorful ? "text-gray-500 dark:text-gray-300" : "text-gray-500 dark:text-gray-300"}`}
                  >
                    <InlineMath math={`${conversion.factor}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
