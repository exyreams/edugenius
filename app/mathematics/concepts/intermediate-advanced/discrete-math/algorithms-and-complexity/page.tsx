"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function AlgorithmsAndComplexity() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Discrete Mathematics",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math",
    },
    {
      label: "Algorithms and Complexity",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/algorithms-and-complexity",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-sky-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent dark:from-sky-300 dark:to-blue-400 md:text-5xl lg:text-6xl`}
        >
          Algorithms and Complexity
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore algorithm analysis, time complexity, and computational efficiency in computer science.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Definition */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Algorithm Analysis
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Algorithm analysis is the process of determining the computational complexity of algorithms - 
              the amount of time, storage, or other resources needed to execute them.
            </p>
            <p className="mt-2">
              We analyze algorithms to predict their behavior and compare their efficiency before implementation.
            </p>
          </div>
        </div>

        {/* Big O Notation */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-teal-300`}
          >
            Big O Notation
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Big O notation describes the upper bound of an algorithm's time complexity:
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-4">
                <InlineMath math="O(1)" />
                <span>- Constant time</span>
              </div>
              <div className="flex items-center space-x-4">
                <InlineMath math="O(\log n)" />
                <span>- Logarithmic time</span>
              </div>
              <div className="flex items-center space-x-4">
                <InlineMath math="O(n)" />
                <span>- Linear time</span>
              </div>
              <div className="flex items-center space-x-4">
                <InlineMath math="O(n \log n)" />
                <span>- Linearithmic time</span>
              </div>
              <div className="flex items-center space-x-4">
                <InlineMath math="O(n^2)" />
                <span>- Quadratic time</span>
              </div>
              <div className="flex items-center space-x-4">
                <InlineMath math="O(2^n)" />
                <span>- Exponential time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Common Algorithms */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Common Algorithm Complexities
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Sorting Algorithms:</h3>
                <ul className="mt-2 space-y-1">
                  <li>• Bubble Sort: <InlineMath math="O(n^2)" /></li>
                  <li>• Merge Sort: <InlineMath math="O(n \log n)" /></li>
                  <li>• Quick Sort: <InlineMath math="O(n \log n)" /> average</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Search Algorithms:</h3>
                <ul className="mt-2 space-y-1">
                  <li>• Linear Search: <InlineMath math="O(n)" /></li>
                  <li>• Binary Search: <InlineMath math="O(\log n)" /></li>
                  <li>• Hash Table: <InlineMath math="O(1)" /> average</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Space Complexity */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-orange-300 dark:to-red-300`}
          >
            Space Complexity
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Space complexity measures the amount of memory space an algorithm uses relative to the input size.
            </p>
            <p className="mt-2">
              We consider both auxiliary space (extra space used by the algorithm) and input space.
            </p>
            <div className="mt-4">
              <BlockMath math="S(n) = \text{Auxiliary Space} + \text{Input Space}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}