"use client";

import React from "react";
import { GasLawCardProps } from "./types";

const GasLawCard: React.FC<GasLawCardProps> = ({
  title,
  description,
  formula,
  conditions,
  example,
  gradientColors
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className={`bg-gradient-to-r ${gradientColors.from} ${gradientColors.to} p-4 rounded dark:${gradientColors.darkFrom} dark:${gradientColors.darkTo}`}>
        <p className="font-mono text-lg text-center text-blue-800 dark:text-blue-200 mb-2">
          {formula}
        </p>
        <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
          {conditions}
        </p>
      </div>
      <div className="mt-4 bg-gray-50 p-3 rounded dark:bg-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Example:</strong> {example.problem}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {example.solution}
        </p>
      </div>
    </div>
  );
};

export default GasLawCard;