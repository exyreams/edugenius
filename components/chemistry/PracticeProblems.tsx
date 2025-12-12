"use client";

import React from "react";
import { PracticeProblemsProps } from "./types";

const PracticeProblems: React.FC<PracticeProblemsProps> = ({ problems }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {problems.map((problem, index) => (
        <div key={index} className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            {problem.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {problem.problem}
          </p>
          <details className="bg-gray-50 p-4 rounded dark:bg-gray-700">
            <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
              Show Solution
            </summary>
            <div className="mt-3 text-gray-600 dark:text-gray-300 space-y-2">
              {problem.solution.map((step, stepIndex) => (
                <p key={stepIndex}>{step}</p>
              ))}
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default PracticeProblems;