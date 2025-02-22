import React, { useState } from "react";

/**
 * @typedef {Object} Cell
 * @property {number} row - The row index of the cell.
 * @property {number} col - The column index of the cell.
 */
interface Cell {
  row: number;
  col: number;
}

/**
 * @typedef {Object} PascalTriangleProps
 * @property {boolean} isColorful - Determines if the triangle should use colorful styling.
 */
interface PascalTriangleProps {
  isColorful: boolean;
}

/**
 * PascalTriangle Component
 * @param {PascalTriangleProps} props - The props for the component.
 * @param {boolean} props.isColorful - Whether to use colorful styling.
 * @returns {JSX.Element} The Pascal's Triangle component.
 * @description A React component that renders an interactive Pascal's Triangle.  It allows
 * the user to hover over cells to see their row, position, and value.  The component
 * supports both colorful and grayscale modes.
 */
const PascalTriangle: React.FC<PascalTriangleProps> = ({ isColorful }) => {
  /**
   * @type {[Cell | null, React.Dispatch<React.SetStateAction<Cell | null>>]} hoveredCell
   * @description State to track the currently hovered cell.  `null` if no cell is hovered.
   */
  const [hoveredCell, setHoveredCell] = useState<Cell | null>(null);

  /**
   * @type {[number, React.Dispatch<React.SetStateAction<number>>]} rows
   * @description State to store the number of rows in the triangle. Initialized to 8.
   */
  const [rows] = useState<number>(8);

  /**
   * Generates Pascal's Triangle up to the specified number of rows.
   * @param {number} numRows - The number of rows to generate.
   * @returns {number[][]} A 2D array representing Pascal's Triangle.
   */
  const generateTriangle = (numRows: number): number[][] => {
    const triangle: number[][] = [];
    for (let i = 0; i < numRows; i++) {
      const row: number[] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
      }
      triangle.push(row);
    }
    return triangle;
  };

  const triangle: number[][] = generateTriangle(rows);
  const maxValue: number = Math.max(...triangle.flat());

  /**
   * Tailwind CSS classes for different color intensities.
   * @type {string[]}
   */
  const colorClasses = [
    "bg-indigo-100 dark:bg-indigo-500",
    "bg-indigo-200 dark:bg-indigo-600",
    "bg-indigo-300 dark:bg-indigo-700",
    "bg-indigo-400 dark:bg-indigo-800",
  ];

  /**
   * Gets the appropriate Tailwind CSS class for a cell's background color based on its value.
   * @param {number} value - The value of the cell.
   * @returns {string} The Tailwind CSS class for the cell's background.
   */
  const getColorClass = (value: number): string => {
    if (isColorful) {
      const intensity = Math.floor((value / maxValue) * colorClasses.length);
      return colorClasses[Math.min(intensity, colorClasses.length - 1)]; // Ensure index is within bounds
    } else {
      return `bg-gray-300/50 dark:bg-gray-700/50`;
    }
  };

  /**
   * Conditionally set text color based on isColorful
   * @type {string}
   *
   **/
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="space-y-8">
      {/* Interactive Triangle Section */}
      <div
        className={`flex flex-col items-center p-2 md:p-8 lg:p-4 ${
          isColorful
            ? "rounded-xl bg-black/5 shadow-lg backdrop-blur-sm dark:bg-black/20"
            : "glass rounded-xl shadow-md"
        }`}
      >
        <h2
          className={`mb-4 text-lg font-semibold md:text-xl ${
            isColorful ? "" : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Interactive Pascal&#39;s Triangle
        </h2>
        {/* Triangle Rendering */}
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          {triangle.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-center space-x-1 md:space-x-2"
            >
              {row.map((value, colIndex) => {
                const isHovered =
                  hoveredCell?.row === rowIndex &&
                  hoveredCell?.col === colIndex;
                const cellKey = `${rowIndex}-${colIndex}`;

                return (
                  <div
                    key={cellKey}
                    className={`
                      flex h-8 w-8 items-center justify-center rounded-full font-mono
                      text-xs transition-transform duration-200 md:h-12 md:w-12 md:text-sm
                      ${textColor}
                      ${getColorClass(value)}
                      ${isHovered ? "scale-110" : ""}
                    `}
                    onMouseEnter={() =>
                      setHoveredCell({ row: rowIndex, col: colIndex })
                    }
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          ))}
          {/* Display Row and Position */}
          <div
            className={`mt-4 text-xs md:text-sm ${
              isColorful
                ? "text-gray-600 dark:text-gray-200"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {/* Hovered Cell Information */}
            {hoveredCell && (
              <p>
                Row {hoveredCell.row + 1}, Position {hoveredCell.col + 1}:{" "}
                {triangle[hoveredCell.row][hoveredCell.col]}
              </p>
            )}
            {/* Default Text */}
            {!hoveredCell && <p>Hover over a cell to see its value</p>}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PascalTriangle;
