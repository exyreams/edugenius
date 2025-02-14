import React, { useState } from "react";

interface Cell {
  row: number;
  col: number;
}

interface PascalTriangleProps {
  isColorful: boolean;
}

const PascalTriangle: React.FC<PascalTriangleProps> = ({ isColorful }) => {
  const [hoveredCell, setHoveredCell] = useState<Cell | null>(null);
  const [rows] = useState<number>(8);

  // Generate Pascal's Triangle
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

  // Define Tailwind classes for different color intensities
  const colorClasses = [
    "bg-indigo-100 dark:bg-indigo-500",
    "bg-indigo-200 dark:bg-indigo-600",
    "bg-indigo-300 dark:bg-indigo-700",
    "bg-indigo-400 dark:bg-indigo-800",
  ];

  const getColorClass = (value: number): string => {
    if (isColorful) {
      const intensity = Math.floor((value / maxValue) * colorClasses.length);
      return colorClasses[Math.min(intensity, colorClasses.length - 1)]; // Ensure index is within bounds
    } else {
      return `bg-gray-300/50 dark:bg-gray-700/50`;
    }
  };

  // Conditionally set text color based on isColorful
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="space-y-8">
      {/* Interactive Triangle Section */}
      <div
        className={`flex flex-col items-center p-8 ${
          isColorful
            ? "rounded-xl bg-black/5 shadow-lg backdrop-blur-sm dark:bg-black/20"
            : "glass rounded-xl shadow-md"
        }`}
      >
        <h2
          className={`mb-6 text-xl font-semibold ${
            isColorful ? "" : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Interactive Pascal&#39;s Triangle
        </h2>
        <div className="flex flex-col items-center space-y-2">
          {triangle.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-center space-x-2"
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
                      flex h-12 w-12 items-center justify-center
                      rounded-full font-mono text-sm transition-transform duration-200
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
            className={`mt-6 text-sm  ${
              isColorful
                ? "text-gray-600 dark:text-gray-200"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {hoveredCell && (
              <p>
                Row {hoveredCell.row + 1}, Position {hoveredCell.col + 1}:{" "}
                {triangle[hoveredCell.row][hoveredCell.col]}
              </p>
            )}
            {!hoveredCell && <p>Hover over a cell to see its value</p>}{" "}
            {/* Default text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PascalTriangle;
