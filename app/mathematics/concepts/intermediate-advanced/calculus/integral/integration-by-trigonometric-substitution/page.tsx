"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component IntegrationByTrigonometricSubstitution
 * @description A React component explaining integration by trigonometric substitution, including the three main cases, examples, and usage guidelines.
 * @returns {JSX.Element} The Integration by Trigonometric Substitution page.
 */
export default function IntegrationByTrigonometricSubstitution() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb navigation items for the page.
   */
  const breadcrumbItems = [
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
      label: "Integral Calculus",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral",
    },
    {
      label: "Trig Substitution",
      href: "/mathematics/concepts/intermediate-advanced/calculus/integral/integration-by-trigonometric-substitution",
    },
  ];
  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles or a glassmorphism style.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:text-5xl lg:text-6xl">
          Integration by Trigonometric Substitution
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the technique of trigonometric substitution to solve integrals
          involving expressions like √(a² - x²), √(a² + x²), and √(x² - a²).
        </p>
      </div>
      {/* Color Toggle and Breadcrumb */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Introduction */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-800 dark:to-indigo-700"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <p
            className={`mt-4  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Trigonometric substitution is a technique used to simplify integrals
            containing expressions of the form
            <InlineMath math="\sqrt{a^2 - x^2}" />,{" "}
            <InlineMath math="\sqrt{a^2 + x^2}" />, or{" "}
            <InlineMath math="\sqrt{x^2 - a^2}" />, where{" "}
            <InlineMath math="a > 0" />. The core idea is to substitute{" "}
            <InlineMath math="x" /> with a trigonometric function of a new
            variable (usually <InlineMath math="\theta" />
            ), which allows us to use trigonometric identities to simplify the
            integrand.
          </p>
        </div>

        {/* Case 1: √(a² - x²) */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-700 dark:to-cyan-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-teal-300 dark:to-cyan-300`}
          >
            Case 1: √(a² - x²)
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-indigo-600 dark:text-indigo-300"
                }`}
              >
                Substitution
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="x = a\sin\theta, \quad -\frac{\pi}{2} \leq \theta \leq \frac{\pi}{2}" />
              </div>
              <h3
                className={`mt-4 text-lg font-semibold ${
                  isColorful
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-indigo-600 dark:text-indigo-300"
                }`}
              >
                Resulting Identity
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\sqrt{a^2 - x^2} = \sqrt{a^2 - a^2\sin^2\theta} = \sqrt{a^2\cos^2\theta} = a\cos\theta" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                We use this substitution because the Pythagorean identity{" "}
                <InlineMath math="1 - \sin^2\theta = \cos^2\theta" /> allows us
                to eliminate the square root. The restriction on{" "}
                <InlineMath math="\theta" /> ensures that{" "}
                <InlineMath math="\cos\theta" /> is non-negative, so we can
                write <InlineMath math="\sqrt{\cos^2\theta} = \cos\theta" />.
              </p>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-indigo-600 dark:text-indigo-300"
                }`}
              >
                Example
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\int \frac{dx}{\sqrt{4 - x^2}}" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Let <InlineMath math="x = 2\sin\theta" />. Then,{" "}
                <InlineMath math="dx = 2\cos\theta d\theta" />, and the integral
                becomes:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\int \frac{2\cos\theta d\theta}{\sqrt{4 - 4\sin^2\theta}} = \int \frac{2\cos\theta d\theta}{2\cos\theta} = \int d\theta = \theta + C = \arcsin\left(\frac{x}{2}\right) + C" />
              </div>
            </div>
          </div>
        </div>

        {/* Case 2: √(a² + x²) */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-amber-300 dark:to-yellow-300`}
          >
            Case 2: √(a² + x²)
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-teal-600 dark:text-teal-300"
                    : "text-teal-600 dark:text-teal-300"
                }`}
              >
                Substitution
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="x = a\tan\theta, \quad -\frac{\pi}{2} < \theta < \frac{\pi}{2}" />
              </div>
              <h3
                className={`mt-4 text-lg font-semibold ${
                  isColorful
                    ? "text-teal-600 dark:text-teal-300"
                    : "text-teal-600 dark:text-teal-300"
                }`}
              >
                Resulting Identity
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\sqrt{a^2 + x^2} = \sqrt{a^2 + a^2\tan^2\theta} = \sqrt{a^2\sec^2\theta} = a\sec\theta" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                This substitution utilizes the identity{" "}
                <InlineMath math="1 + \tan^2\theta = \sec^2\theta" />. The
                restriction on <InlineMath math="\theta" /> ensures that{" "}
                <InlineMath math="\sec\theta" /> is positive.
              </p>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-teal-600 dark:text-teal-300"
                    : "text-teal-600 dark:text-teal-300"
                }`}
              >
                Example
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\int \frac{dx}{9 + x^2}" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Let <InlineMath math="x = 3\tan\theta" />. Then{" "}
                <InlineMath math="dx = 3\sec^2\theta d\theta" />, and the
                integral becomes:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\int \frac{3\sec^2\theta d\theta}{9 + 9\tan^2\theta} = \int \frac{3\sec^2\theta d\theta}{9\sec^2\theta} = \frac{1}{3}\int d\theta = \frac{1}{3}\theta + C = \frac{1}{3}\arctan\left(\frac{x}{3}\right) + C" />
              </div>
            </div>
          </div>
        </div>

        {/* Case 3: √(x² - a²) */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            Case 3: √(x² - a²)
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-amber-600 dark:text-amber-300"
                    : "text-amber-600 dark:text-amber-300"
                }`}
              >
                Substitution
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="x = a\sec\theta, \quad 0 \leq \theta < \frac{\pi}{2} \text{ or } \pi \leq \theta < \frac{3\pi}{2}" />
              </div>
              <h3
                className={`mt-4 text-lg font-semibold ${
                  isColorful
                    ? "text-amber-600 dark:text-amber-300"
                    : "text-amber-600 dark:text-amber-300"
                }`}
              >
                Resulting Identity
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\sqrt{x^2 - a^2} = \sqrt{a^2\sec^2\theta - a^2} = \sqrt{a^2\tan^2\theta} = a\tan\theta" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                This substitution is based on the identity{" "}
                <InlineMath math="\sec^2\theta - 1 = \tan^2\theta" />. The
                restriction on <InlineMath math="\theta" /> ensures that{" "}
                <InlineMath math="\tan\theta" /> is non-negative.
              </p>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-amber-600 dark:text-amber-300"
                    : "text-amber-600 dark:text-amber-300"
                }`}
              >
                Example
              </h3>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\int \frac{dx}{x^2\sqrt{x^2 - 9}}" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Let <InlineMath math="x = 3\sec\theta" />. Then{" "}
                <InlineMath math="dx = 3\sec\theta\tan\theta d\theta" />, and
                the integral becomes:
              </p>
              <div
                className={`mt-2 flex justify-start overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <BlockMath math="\int \frac{3\sec\theta\tan\theta d\theta}{9\sec^2\theta \cdot 3\tan\theta} = \frac{1}{9}\int \cos\theta d\theta = \frac{1}{9}\sin\theta + C" />
              </div>
              <p
                className={`mt-4  ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                From the substitution,{" "}
                <InlineMath math="\sec\theta = \frac{x}{3}" />. Drawing a right
                triangle, we find{" "}
                <InlineMath math="\sin\theta = \frac{\sqrt{x^2 - 9}}{x}" />.
                Therefore, the final answer is{" "}
                <InlineMath math="\frac{1}{9}\frac{\sqrt{x^2-9}}{x} + C" />.
              </p>
            </div>
          </div>
        </div>
        {/* General Guidelines */}
        <div
          className={`${
            isColorful
              ? "bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600"
              : "glass"
          } rounded-lg p-6 shadow-md`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text  text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-pink-300 dark:to-rose-300`}
          >
            General Guidelines
          </h2>
          <ul
            className={`ml-6 mt-4 list-disc space-y-2  ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            <li>
              <b>Identify the form:</b> Determine which of the three forms (
              <InlineMath math="\sqrt{a^2 - x^2}" />,{" "}
              <InlineMath math="\sqrt{a^2 + x^2}" />, or{" "}
              <InlineMath math="\sqrt{x^2 - a^2}" />) is present in the
              integral.
            </li>
            <li>
              <b>Choose the correct substitution:</b> Use the appropriate
              substitution based on the identified form.
            </li>
            <li>
              <b>Find dx:</b> Calculate <InlineMath math="dx" /> in terms of{" "}
              <InlineMath math="d\theta" />.
            </li>
            <li>
              <b>Substitute and simplify:</b> Replace <InlineMath math="x" />{" "}
              and <InlineMath math="dx" /> in the integral with their
              trigonometric equivalents, and simplify using trigonometric
              identities.
            </li>
            <li>
              <b>Integrate:</b> Evaluate the resulting trigonometric integral.
            </li>
            <li>
              <b>Convert back to x:</b> Use the original substitution to express
              the answer in terms of the original variable{" "}
              <InlineMath math="x" />. Drawing a right triangle is often helpful
              for this step.
            </li>
          </ul>
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Trigonometric Substitution
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
