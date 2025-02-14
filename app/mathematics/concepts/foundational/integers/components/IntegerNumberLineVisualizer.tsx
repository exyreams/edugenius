"use client";

import React, { useState } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import ColorToggle from "@/components/ColorToggle";

interface NumberPointProps {
  value: number | string;
  isSelected: boolean;
  onSelect: (num: number | string) => void;
  isColorful: boolean;
}

const NumberPoint: React.FC<NumberPointProps> = ({
  value,
  isSelected,
  onSelect,
  isColorful,
}) => {
  const isZero = value === 0;
  const isInfinity = value === "-∞" || value === "+∞";

  // Dynamic styling based on isColorful and selection
  // Sets the color of the vertical line based on selection and colorful mode.
  const verticalLineColor = isSelected
    ? "bg-blue-600"
    : isZero
      ? isColorful
        ? "bg-green-500"
        : "bg-green-700"
      : isColorful
        ? "bg-gray-400 dark:bg-gray-700"
        : "bg-gray-600";

  // Sets the color of the number point based on selection, zero, and colorful mode.
  const pointColor = isSelected
    ? "bg-blue-600 border-blue-600"
    : isZero
      ? isColorful
        ? "bg-green-500 border-green-500"
        : "bg-green-700 border-green-700"
      : isColorful
        ? "bg-white border-gray-400 group-hover:border-gray-600" // White with gray border when not selected/zero and colorful
        : "bg-gray-300 border-gray-700 group-hover:border-gray-500 dark:bg-gray-700 dark:border-gray-300"; // Gray/dark gray when not selected/zero and not colorful

  // Sets the text color of the number label based on selection, zero, and color mode.
  const labelColor = isSelected
    ? isColorful
      ? "text-blue-700 font-bold"
      : "text-blue-800 font-bold dark:text-blue-300"
    : isZero
      ? isColorful
        ? "text-green-700 font-bold"
        : "text-green-800 font-bold dark:text-green-300"
      : isColorful
        ? "text-gray-600"
        : "text-gray-700 dark:text-gray-300";

  // Calculate left position. Handle infinity and zero separately.
  let leftPosition: string;
  let transform = "translateX(-50%)";

  if (isInfinity) {
    leftPosition = value === "-∞" ? "0%" : "100%";
    transform = value === "-∞" ? "translateX(0%)" : "translateX(-100%)";
  } else if (isZero) {
    leftPosition = "50%";
    transform = "translateX(-50%)";
  } else {
    leftPosition = `${(((value as number) + 9) / 18) * 100}%`;
  }

  return (
    <div
      className={`group absolute flex cursor-pointer flex-col items-center`}
      style={{
        left: leftPosition,
        transform,
      }}
      onClick={() => onSelect(value)}
    >
      {/* Vertical Line */}
      {!isInfinity && <div className={`h-4 w-0.5 ${verticalLineColor}`}></div>}

      {/* Number Point - Removed extra div */}
      {!isInfinity && (
        <div
          className={`h-2 w-2 rounded-full border-2 ${pointColor} ${isSelected ? "scale-150" : ""} ${isZero && !isSelected ? "scale-125" : ""}`}
        ></div>
      )}

      {/* Number Label */}
      {!isInfinity && (
        <span className={`mt-1 text-xs ${labelColor}`}>{value}</span>
      )}
    </div>
  );
};

const IntegerNumberLineVisualizer: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | string | null>(
    null,
  );
  const [isColorful, setIsColorful] = useState(true);

  // Generate numbers from -9 to 9, including infinity
  const numbers: (number | string)[] = [
    "-∞",
    ...Array.from({ length: 19 }, (_, i) => i - 9),
    "+∞",
  ];

  const handleNumberSelect = (num: number | string) => {
    setSelectedNumber(num);
  };

  const renderNumberInfo = () => {
    if (selectedNumber === "-∞") {
      return (
        <div
          className={`${isColorful ? "bg-blue-200 dark:bg-blue-500" : "bg-gray-300 dark:bg-black/40"} mx-auto max-w-md rounded-lg p-4 shadow-md`}
        >
          <h3
            className={`mb-2 text-xl font-semibold ${isColorful ? "dark:text-white" : "text-gray-800 dark:text-gray-200"}`}
          >
            Negative Infinity <InlineMath math="-\infty" />
          </h3>
          <p
            className={`${isColorful ? "text-gray-600 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
          >
            Represents the smallest possible value, less than any finite number.
          </p>
        </div>
      );
    }
    if (selectedNumber === "+∞") {
      return (
        <div
          className={`${isColorful ? "bg-blue-200 dark:bg-blue-500" : "bg-gray-300 dark:bg-black/40"} mx-auto max-w-md rounded-lg p-4 shadow-md`}
        >
          <h3
            className={`mb-2 text-xl font-semibold ${isColorful ? "dark:text-white" : "text-gray-800 dark:text-gray-200"}`}
          >
            Positive Infinity <InlineMath math="+\infty" />
          </h3>
          <p
            className={`${isColorful ? "text-gray-600 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
          >
            Represents the largest possible value, greater than any finite
            number.
          </p>
        </div>
      );
    }
    if (typeof selectedNumber === "number") {
      return (
        <div
          className={`${isColorful ? "bg-blue-200 dark:bg-blue-500" : "bg-gray-300 dark:bg-black/40"} mx-auto max-w-md rounded-lg p-4 shadow-md`}
        >
          <h3
            className={`mb-2 text-left text-xl font-semibold ${isColorful ? "text-gray-800 dark:text-gray-200" : "text-gray-800 dark:text-gray-200"}`}
          >
            Number Analysis: {selectedNumber}
          </h3>
          <div
            className={`flex justify-between ${isColorful ? "text-gray-600" : "text-gray-700 dark:text-gray-300"}`}
          >
            <div>
              <p
                className={`font-medium ${isColorful ? "text-gray-800 dark:text-white" : "text-gray-800 dark:text-gray-200"}`}
              >
                Type:{" "}
                {selectedNumber > 0
                  ? "Positive"
                  : selectedNumber < 0
                    ? "Negative"
                    : "Zero"}
              </p>
            </div>
            <div>
              <p
                className={`font-medium ${isColorful ? "text-gray-800 dark:text-white" : "text-gray-800 dark:text-gray-200"}`}
              >
                Distance from Zero: {Math.abs(selectedNumber)}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`${
        isColorful
          ? "bg-sky-300 dark:bg-sky-400"
          : "bg-gray-200 dark:bg-black/70"
      }  max-w-auto mx-auto rounded-lg p-6`}
    >
      <div className="mb-4 flex justify-end">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <h2
        className={`mb-6 text-center text-xl font-bold ${isColorful ? "text-gray-800" : "text-gray-800 dark:text-gray-200"}`}
      >
        Extended Number Line Explorer
      </h2>

      <div className="relative flex h-16 w-full items-center justify-center">
        {/* X-Axis */}
        <div
          className={`absolute left-0 right-0 h-0.5 ${isColorful ? "bg-gray-700" : "bg-gray-700"}`}
        ></div>

        {/* Axis Labels, clickable */}
        <div
          className={`text-md absolute -bottom-6 left-0 rounded-md bg-dropdown-light p-1 py-0.5 ${isColorful ? "text-gray-700 dark:text-black" : "text-gray-700 dark:text-black"}`}
        >
          <span
            onClick={() => handleNumberSelect("-∞")}
            className="cursor-pointer"
          >
            <InlineMath math="-\infty" />
          </span>
        </div>
        <div
          className={`text-md absolute -bottom-6 right-0 rounded-md  bg-dropdown-light p-1 py-0.5 ${isColorful ? "text-gray-700 dark:text-black" : "text-gray-700 dark:text-black"}`}
        >
          <span
            onClick={() => handleNumberSelect("+∞")}
            className="cursor-pointer"
          >
            <InlineMath math="+\infty" />
          </span>
        </div>

        {/* Number Points */}
        {numbers.map((num) => (
          <NumberPoint
            key={num}
            value={num}
            isSelected={selectedNumber === num}
            onSelect={handleNumberSelect}
            isColorful={isColorful}
          />
        ))}
      </div>

      {/* Information Display */}
      <div className="mt-8 min-h-24 text-center">
        {selectedNumber !== null ? (
          renderNumberInfo()
        ) : (
          <p
            className={`${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
          >
            Click on a point to explore the number
          </p>
        )}
      </div>
    </div>
  );
};

export default IntegerNumberLineVisualizer;
