"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/** * @component DifferentialOperators * @description A React component explaining the concept of differential operators in multivariable calculus. *              Includes the formula, a brief explanation, and a few practice problems. * @returns {JSX.Element} The Differential Operators page. */ export default function DifferentialOperators() {
  /**   * @type {Array<{label: string, href: string}>}   * @description Breadcrumb navigation items for the page.   */ const breadcrumbItems =
    [
      { label: "Mathematics", href: "/mathematics" },
      { label: "Concepts", href: "/mathematics/concepts" },
      {
        label: "Intermediate & Advanced",
        href: "/mathematics/concepts/intermediate-advanced",
      },
      {
        label: "Calculus",
        href: "/mathematics/concepts/intermediate-advanced/calculus",
      },
      {
        label: "Multivariable",
        href: "/mathematics/concepts/intermediate-advanced/calculus/multivariable",
      },
      {
        label: "Differential Operators",
        href: "/mathematics/concepts/intermediate-advanced/calculus/multivariable/differential-operators",
      },
    ];
  /**   * @state isColorful   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}   * @description State to manage whether to apply colorful styles or glassmorphism.   */ const [
    isColorful,
    setIsColorful,
  ] = useState(true);
  /**
   * * @function getProblemColor
   * * @description Returns a Tailwind CSS gradient class string based on the index for Practice Exercises.
   * * @param {number} index - The index of the problem.
   * * @returns {string} The Tailwind CSS gradient class string.
   * */
  function getProblemColor(index: number) {
    const colors = [
      "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
      "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
      "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
      "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
      "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
      "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
      "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700",
      "from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700",
      "from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-700",
      "from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700",
    ];
    return colors[index % colors.length];
  }
  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {" "}
      {/* Hero Section */}{" "}
      <div className="mb-12 space-y-6 text-center">
        {" "}
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          {" "}
          Differential Operators{" "}
        </h1>{" "}
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          {" "}
          Understand the gradient, divergence, and curl.{" "}
        </p>{" "}
      </div>{" "}
      {/* Color Toggle and Breadcrumb */}{" "}
      <div className="mb-4 flex justify-center">
        {" "}
        <ColorToggle onChange={setIsColorful} initialState={true} />{" "}
      </div>{" "}
      <Breadcrumb items={breadcrumbItems} />{" "}
      <div className="mt-6 space-y-8">
        {" "}
        {/* Formula and Explanation */}{" "}
        <div
          className={`${isColorful ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-800 dark:to-indigo-700" : "glass"} rounded-lg p-6 shadow-md`}
        >
          {" "}
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${isColorful ? "" : "text-gray-800 dark:text-gray-200"}`}
          >
            {" "}
            Formulas and Explanations{" "}
          </h2>{" "}
          <div className="mt-4">
            {" "}
            <h3
              className={`text-xl font-semibold ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-200"}`}
            >
              Gradient
            </h3>{" "}
            <p
              className={`text-lg ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-200"}`}
            >
              {" "}
              The gradient of a scalar function <InlineMath math="f(x, y, z)" />{" "}
              is a vector field that points in the direction of the greatest
              rate of increase of the function, and its magnitude is the rate of
              increase in that direction.{" "}
            </p>{" "}
            <div
              className={`mt-2 flex justify-start overflow-x-auto ${isColorful ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500" : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"}`}
            >
              {" "}
              <BlockMath math="\nabla f = \langle \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \rangle" />{" "}
            </div>{" "}
            <h3
              className={`mt-4 text-xl font-semibold ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-200"}`}
            >
              Divergence
            </h3>{" "}
            <p
              className={`text-lg ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-200"}`}
            >
              {" "}
              The divergence of a vector field{" "}
              <InlineMath math="\mathbf{F} = \langle P, Q, R \rangle" /> is a
              scalar field that measures the magnitude of a source or sink at a
              given point.{" "}
            </p>{" "}
            <div
              className={`mt-2 flex justify-start overflow-x-auto ${isColorful ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500" : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"}`}
            >
              {" "}
              <BlockMath math="\nabla \cdot \mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}" />{" "}
            </div>{" "}
            <h3
              className={`mt-4 text-xl font-semibold ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-200"}`}
            >
              Curl
            </h3>{" "}
            <p
              className={`text-lg ${isColorful ? "text-gray-700 dark:text-gray-300" : "text-gray-800 dark:text-gray-200"}`}
            >
              {" "}
              The curl of a vector field{" "}
              <InlineMath math="\mathbf{F} = \langle P, Q, R \rangle" /> is a
              vector field that describes the infinitesimal rotation of the
              vector field.{" "}
            </p>{" "}
            <div
              className={`mt-2 flex justify-start overflow-x-auto ${isColorful ? "scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 dark:scrollbar-track-indigo-600 dark:scrollbar-thumb-indigo-500" : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"}`}
            >
              {" "}
              <BlockMath math="\nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \langle \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \rangle" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Practice Problems */}{" "}
        <div
          className={`${isColorful ? "bg-gradient-to-br from-lime-100 to-green-200 dark:from-lime-700 dark:to-green-600" : "glass"} rounded-lg p-6 shadow-md`}
        >
          {" "}
          <h2
            className={`bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-lime-300 dark:to-green-300 ${isColorful ? "" : "text-gray-800 dark:text-gray-200"}`}
          >
            {" "}
            Practice Exercises{" "}
          </h2>{" "}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* Problem 1 */}{" "}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              {" "}
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(0)} dark:text-white` : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
              >
                {" "}
                <div className="flex items-start justify-between">
                  {" "}
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    {" "}
                    Problem 1{" "}
                  </span>{" "}
                </div>{" "}
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  {" "}
                  <BlockMath math="\text{Find the gradient of } f(x, y, z) = x^2y + yz^2 + zx^2." />{" "}
                </div>{" "}
                <details className="group mt-3">
                  {" "}
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${isColorful ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    {" "}
                    <span>Show Solution</span>{" "}
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />{" "}
                    </svg>{" "}
                  </summary>{" "}
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${isColorful ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:bg-black/20 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500" : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"}`}
                  >
                    {" "}
                    <BlockMath math="\nabla f = \langle 2xy + 2zx, x^2 + z^2, 2yz + x^2 \rangle" />{" "}
                  </div>{" "}
                </details>{" "}
              </div>{" "}
            </div>{" "}
            {/* Problem 2 */}{" "}
            <div className={`rounded-lg transition-all hover:shadow-lg`}>
              {" "}
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(1)} dark:text-white` : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
              >
                {" "}
                <div className="flex items-start justify-between">
                  {" "}
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    {" "}
                    Problem 2{" "}
                  </span>{" "}
                </div>{" "}
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  {" "}
                  <BlockMath math="\text{Find the divergence of } \mathbf{F} = \langle x^2y, y^2z, z^2x \rangle." />{" "}
                </div>{" "}
                <details className="group mt-3">
                  {" "}
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${isColorful ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    {" "}
                    <span>Show Solution</span>{" "}
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />{" "}
                    </svg>{" "}
                  </summary>{" "}
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${isColorful ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:bg-black/20 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500" : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"}`}
                  >
                    {" "}
                    <BlockMath math="\nabla \cdot \mathbf{F} = 2xy + 2yz + 2zx" />{" "}
                  </div>{" "}
                </details>{" "}
              </div>{" "}
            </div>{" "}
            {/* Problem 3 */}{" "}
            <div className={`rounded-lg  transition-all hover:shadow-lg`}>
              {" "}
              <div
                className={`p-4 ${isColorful ? `bg-gradient-to-br ${getProblemColor(2)} dark:text-white` : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"}`}
              >
                {" "}
                <div className="flex items-start justify-between">
                  {" "}
                  <span
                    className={`text-sm font-medium ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    {" "}
                    Problem 3{" "}
                  </span>{" "}
                </div>{" "}
                <div className={`mt-2 flex justify-start overflow-x-auto`}>
                  {" "}
                  <BlockMath math="\text{Find the curl of } \mathbf{F} = \langle x^2y, y^2z, z^2x \rangle." />{" "}
                </div>{" "}
                <details className="group mt-3">
                  {" "}
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${isColorful ? "text-gray-700 hover:text-green-600 dark:text-white dark:hover:text-green-300" : "text-gray-700 dark:text-gray-300"}`}
                  >
                    {" "}
                    <span>Show Solution</span>{" "}
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 transition-transform group-open:rotate-180 ${isColorful ? "text-gray-700 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />{" "}
                    </svg>{" "}
                  </summary>{" "}
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${isColorful ? "bg-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:bg-black/20 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500" : "bg-gray-200 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:bg-gray-600 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"}`}
                  >
                    {" "}
                    <BlockMath math="\nabla \times \mathbf{F} = \langle -y^2, -z^2, -x^2 \rangle" />{" "}
                  </div>{" "}
                </details>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Decorative Section Divider */}{" "}
        <div className="mt-16 flex items-center justify-center space-x-4">
          {" "}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />{" "}
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            {" "}
            Differential Operators in Multivariable Calculus{" "}
          </span>{" "}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
