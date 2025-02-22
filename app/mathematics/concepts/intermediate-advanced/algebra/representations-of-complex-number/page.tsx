"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

/**
 * @component RepresentationsOfComplexNumber
 * @description A comprehensive guide to representing complex numbers, including rectangular, polar, and exponential forms, geometric interpretations, key properties, applications, and practice exercises.
 * @returns {JSX.Element} The Complex Representations page.
 */
export default function RepresentationsOfComplexNumber() {
  /**
   * @state isColorful
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State to manage whether to apply colorful styles (true) or a glassmorphism style (false).
   */
  const [isColorful, setIsColorful] = useState(true);
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
      label: "Algebra",
      href: "/mathematics/concepts/intermediate-advanced/algebra",
    },
    {
      label: "Representation of Complex Numbers",
      href: "/mathematics/concepts/intermediate-advanced/algebra/complex-numbers",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 py-8 sm:px-6 md:max-w-7xl md:py-12">
      {/* Page Title */}
      <h1
        className={`mb-4 bg-gradient-to-r from-gray-800 to-indigo-800 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-200 dark:to-purple-300 md:mb-6 md:text-4xl ${
          isColorful ? "" : "text-gray-800 dark:text-white"
        }`}
      >
        Representation of Complex Numbers: Forms and Transformations
      </h1>
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Core Representations */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Fundamental Forms of Complex Numbers
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Complex numbers can be represented in several equivalent forms, each
            offering unique advantages for different types of calculations and
            interpretations.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Rectangular Form */}
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              } `}
            >
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-indigo-600 dark:text-indigo-300"
                }`}
              >
                Rectangular (Cartesian) Form
              </h3>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="z = a + bi" />
              </div>
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Where:
                <ul
                  className={`ml-4 list-disc ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <li>
                    <InlineMath math="a" /> is the *real part* of{" "}
                    <InlineMath math="z" /> (Re(z))
                  </li>
                  <li>
                    {" "}
                    <InlineMath math="b" /> is the *imaginary part* of{" "}
                    <InlineMath math="z" /> (Im(z))
                  </li>
                  <li>
                    {" "}
                    <InlineMath math="i" /> is the imaginary unit, where{" "}
                    <InlineMath math="i^2 = -1" />
                  </li>
                </ul>
                This form is best for addition and subtraction.
              </p>
            </div>

            {/* Polar Form */}
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              } `}
            >
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-emerald-600 dark:text-emerald-300"
                    : "text-emerald-600 dark:text-emerald-300"
                }`}
              >
                Polar Form
              </h3>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="z = r(\cos\theta + i\sin\theta)" />
              </div>
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Where:
                <ul
                  className={`ml-4 list-disc ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <li>
                    <InlineMath math="r" /> is the{" "}
                    <span className="font-bold italic">modulus</span> (or
                    magnitude) of <InlineMath math="z" /> (|z|), representing
                    the distance from the origin to the point representing{" "}
                    <span className="font-bold italic">z</span> in the complex
                    plane.
                  </li>
                  <li>
                    <InlineMath math="\theta" /> is the{" "}
                    <span className="font-bold italic">argument</span> of{" "}
                    <InlineMath math="z" /> (arg(z)), representing the angle
                    between the positive real axis and the line segment
                    connecting the origin to the point representing{" "}
                    <span className="font-bold italic">z</span>. It&#39;s
                    usually measured in radians.
                  </li>
                </ul>
                This form is best for multiplication and division. A common
                shorthand for <InlineMath math="\cos\theta + i\sin\theta" /> is{" "}
                <InlineMath math="\text{cis } \theta" />. So,{" "}
                <InlineMath math=" z = r \text{ cis } \theta" />.
              </p>
            </div>

            {/* Exponential Form */}
            <div
              className={`rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              } `}
            >
              <h3
                className={`text-lg font-semibold ${
                  isColorful
                    ? "text-rose-600 dark:text-rose-300"
                    : "text-rose-600 dark:text-rose-300"
                }`}
              >
                Exponential Form
              </h3>
              <BlockMath math="z = re^{i\theta}" />
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                This form is a compact representation derived from Euler&#39;s
                formula:
              </p>
              <div
                className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300  dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math="e^{i\theta} = \cos\theta + i\sin\theta" />
              </div>
              <p
                className={`mt-2 ${
                  isColorful
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Where:
                <ul
                  className={`ml-4 list-disc ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <li>
                    <InlineMath math="r" /> is the modulus, as in the polar
                    form.
                  </li>
                  <li>
                    <InlineMath math="\theta" /> is the argument, as in the
                    polar form,{" "}
                    <span className="font-bold italic">
                      measured in radians
                    </span>
                    .
                  </li>
                  <li>
                    <InlineMath math="e" /> is Euler&#39;s number (approximately
                    2.71828).
                  </li>
                </ul>
                This form simplifies multiplication, division, and finding
                powers/roots.
              </p>
            </div>
          </div>
        </div>

        {/* Geometric Interpretation */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-teal-300 dark:to-cyan-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Geometric Representation: The Complex Plane (Argand Diagram)
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Complex numbers can be visualized as points or vectors in a
            two-dimensional plane called the complex plane (or Argand diagram).
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              {/* SVG for Complex Plane */}
              <svg
                viewBox="0 0 200 200"
                className={`h-64 w-full max-w-xs ${
                  isColorful
                    ? "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                    : "[&_text]:fill-gray-800 [&_text]:dark:fill-gray-200"
                }`}
              >
                {/* Axes */}
                <line
                  x1="10"
                  y1="100"
                  x2="190"
                  y2="100"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                <line
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke={isColorful ? "currentColor" : "gray"}
                  strokeWidth="1.5"
                />
                {/* Point z = a + bi */}
                <circle
                  cx="140"
                  cy="60"
                  r="3"
                  fill={isColorful ? "#3b82f6" : "gray"}
                />
                <text x="145" y="65" fontSize="12">
                  z = a + bi
                </text>
                {/* Vector */}
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="60"
                  stroke={isColorful ? "#3b82f6" : "gray"}
                  strokeWidth="2"
                />
                {/* Angle θ */}
                <path
                  d="M 100 100 L 120 100 A 45 45 0 0 1 140 60"
                  fill="none"
                  stroke={isColorful ? "#ef4444" : "gray"}
                  strokeDasharray="4"
                />
                <text
                  x="120"
                  y="80"
                  fontSize="12"
                  fill={isColorful ? "#ef4444" : "gray"}
                >
                  θ = arg(z)
                </text>
                {/* Modulus r */}
                <text
                  x="130"
                  y="50"
                  fontSize="12"
                  fill={isColorful ? "#10b981" : "gray"}
                >
                  r = |z|
                </text>
                {/* Axis labels */}
                <text x="185" y="95" fontSize="12">
                  Re
                </text>
                <text x="105" y="15" fontSize="12">
                  Im
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              {/* Conversion Formulas */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Conversion Formulas
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  To convert between rectangular and polar/exponential forms,
                  use these formulas:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-emerald-200 scrollbar-thumb-emerald-300  dark:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"r = sqrt{a^2 + b^2} quad \\text{(Modulus)}"}
                  />
                </div>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-emerald-200 scrollbar-thumb-emerald-300  dark:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={`\\theta = \\begin{cases}
                  \\tan^{-1}\\left(\\frac{b}{a}\\right) & \\text{if } a > 0 \\\\
                  \\tan^{-1}\\left(\\frac{b}{a}\\right) + \\pi & \\text{if } a < 0 \\text{ and } b \\geq 0 \\\\
                  \\tan^{-1}\\left(\\frac{b}{a}\\right) - \\pi & \\text{if } a < 0 \\text{ and } b < 0 \\\\
                  +\\frac{\\pi}{2} & \\text{if } a = 0 \\text{ and } b > 0 \\\\
                  -\\frac{\\pi}{2} & \\text{if } a = 0 \\text{ and } b < 0 \\\\
                  \\text{undefined} & \\text{if } a = 0 \\text{ and } b = 0
                  \\end{cases}`}
                  />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The angle <InlineMath math="θ" /> (argument) is usually chosen
                  to be in the range <InlineMath math="(-\pi, \pi]" /> or{" "}
                  <InlineMath math="[0, 2\pi)" />. The `atan2(b, a)` function
                  (available in many programming languages and calculators)
                  handles the quadrant correctly.
                </p>
              </div>

              {/* Rectangular to Polar/Exponential */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Rectangular to Polar/Exponential
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Given <InlineMath math="z = a + bi" />, find{" "}
                  <InlineMath math="r" /> and <InlineMath math="\theta" /> using
                  the formulas above.
                </p>

                <BlockMath math="a = r\cos\theta, \quad b = r\sin\theta" />
                <p
                  className={`mt-2  font-bold italic ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Example:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-emerald-200 scrollbar-thumb-emerald-300  dark:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="1 + i = \sqrt{2}(\cos(\pi/4) + i\sin(\pi/4)) = \sqrt{2}e^{i\pi/4}" />
                </div>
              </div>
              {/* Polar/Exponential to Rectangular */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Polar/Exponential to Rectangular
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Given <InlineMath math="z = r(\cos\theta + i\sin\theta)" /> or{" "}
                  <InlineMath math="z = re^{i\theta}" />, find{" "}
                  <InlineMath math="a" /> and <InlineMath math="b" />.
                </p>
                <BlockMath math="a = r\cos\theta" />
                <BlockMath math="b = r\sin\theta" />
                <p
                  className={`mt-2  font-bold italic ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Example:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-emerald-200 scrollbar-thumb-emerald-300  dark:scrollbar-track-emerald-600 dark:scrollbar-thumb-emerald-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="2e^{i\pi/3} = 2(\cos(\pi/3) + i\sin(\pi/3)) = 2(1/2 + i\sqrt{3}/2) = 1 + i\sqrt{3}" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operations & Properties */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "text-pink-800 dark:text-pink-100"
                : "text-gray-800 dark:text-gray-100"
            }`}
          >
            Key Properties and Operations in Different Forms
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            The different forms of complex numbers lend themselves to different
            operations.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {/* Complex Conjugate */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Complex Conjugate
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\overline{z} = a - bi = re^{-i\theta}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  The complex conjugate is found by negating the imaginary part
                  (rectangular form) or negating the angle (polar/exponential
                  form). Geometrically, it&#39;s a reflection across the real
                  axis.
                </p>
              </div>

              {/* Multiplication */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Multiplication
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Multiplication is most easily performed in polar or
                  exponential form:
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="z_1z_2 = (r_1e^{i\theta_1})(r_2e^{i\theta_2}) = r_1r_2e^{i(\theta_1+\theta_2)}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Multiply the moduli and add the arguments.
                </p>
              </div>
              {/* Division */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-cyan-600 dark:text-cyan-300"
                  }`}
                >
                  Division
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Division, like multiplication, is simpler in polar or
                  exponential form.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\frac{z_1}{z_2} = \frac{r_1e^{i\theta_1}}{r_2e^{i\theta_2}} = \frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Divide the moduli and subtract the arguments.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {/* De Moivre's Theorem */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  De Moivre&#39;s Theorem
                </h3>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="z^n = [r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)" />
                  <BlockMath math="z^n = (re^{i\theta})^n = r^ne^{in\theta}" />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  This formula provides a way to raise a complex number to a
                  power. It&#39;s most easily applied when the complex number is
                  in polar or exponential form.
                </p>
              </div>

              {/* Roots */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Roots of Unity
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Finding the *n*th roots of a complex number is an extension of
                  De Moivre&#39;s Theorem. A complex number has *n* distinct
                  *n*th roots.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-pink-200 scrollbar-thumb-pink-300  dark:scrollbar-track-pink-600 dark:scrollbar-thumb-pink-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="z^{1/n} = \sqrt[n]{r}\left[\cos\left(\frac{\theta + 2\pi k}{n}\right) + i\sin\left(\frac{\theta + 2\pi k}{n}\right)\right]" />
                  <BlockMath math="z^{1/n} = \sqrt[n]{r}e^{i(\theta + 2\pi k)/n}" />
                </div>

                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  where <InlineMath math="k = 0, 1, 2, ..., n-1" />. These roots
                  are equally spaced around a circle in the complex plane.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-lime-200 dark:from-yellow-600 dark:to-lime-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-green-300 `}
          >
            Practical Applications of Complex Numbers
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Complex numbers are not just abstract mathematical entities; they
            have essential applications in various fields:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {/* Electrical Engineering */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-300"
                      : "text-indigo-600 dark:text-indigo-300"
                  }`}
                >
                  Electrical Engineering
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Complex numbers (especially in exponential form) are used
                  extensively in AC circuit analysis to represent impedance,
                  voltage, and current.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"V = IZ quad \\text{(Ohm's Law for AC circuits)}"}
                  />
                </div>
              </div>

              {/* Signal Processing */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-emerald-600 dark:text-emerald-300"
                  }`}
                >
                  Signal Processing
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Complex numbers are used to represent sinusoidal signals and
                  perform Fourier analysis, which is fundamental to
                  understanding and manipulating signals.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="e^{i\omega t} = \cos(\omega t) + i\sin(\omega t)" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {/* Quantum Mechanics */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  Quantum Mechanics
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Wave functions, which describe the state of quantum systems,
                  are often complex-valued.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="\psi(x,t) = Ae^{i(kx - \omega t)}" />
                </div>
              </div>

              {/* Fluid Dynamics */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                } `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-300"
                      : "text-amber-600 dark:text-amber-300"
                  }`}
                >
                  Fluid Dynamics
                </h3>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Complex potentials are used to model two-dimensional fluid
                  flow.
                </p>
                <div
                  className={`mt-2 h-auto overflow-x-auto rounded-lg  p-4 ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300  dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={"F = phi + ipsi quad \\text{(Complex Potential)}"}
                  />
                </div>
                <p
                  className={`mt-2 ${
                    isColorful
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  where <InlineMath math="\phi" /> is the velocity potential and{" "}
                  <InlineMath math="\psi" /> is the stream function.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-lime-300 dark:to-green-300 `}
          >
            Practice Exercises: Master Complex Number Representations
          </h2>
          <p
            className={`mt-2 ${
              isColorful
                ? "text-gray-700 dark:text-gray-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Apply your understanding of complex number representations by
            working through these problems. Solutions are provided, but try to
            solve them on your own first!
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Problem 1 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 1
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Convert } 3 + 4i \\text{ to polar form}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-300 dark:scrollbar-track-red-600 dark:scrollbar-thumb-red-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="5(\\cos(\\tan^{-1}(4/3)) + i\\sin(\\tan^{-1}(4/3)))" />
                </div>
              </details>
            </div>

            {/* Problem 2 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 2
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={
                    "\\text{Find } z = 2e^{i\\pi/3} \\text{ in rectangular form}"
                  }
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="1 + i\\sqrt{3}" />
                </div>
              </details>
            </div>

            {/* Problem 3 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 3
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Compute } (1+i)^4 \\text{ using De Moivre}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="-4" />
                </div>
              </details>
            </div>

            {/* Problem 4 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 4
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Find cube roots of } 8i"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-green-200 scrollbar-thumb-green-300 dark:scrollbar-track-green-600 dark:scrollbar-thumb-green-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="2i, -\\sqrt{3} - i, \\sqrt{3} - i" />
                </div>
              </details>
            </div>

            {/* Problem 5 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 5
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath math={"\\text{Calculate } |3 - 4i|"} />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-teal-200 scrollbar-thumb-teal-300 dark:scrollbar-track-teal-600 dark:scrollbar-thumb-teal-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="5" />
                </div>
              </details>
            </div>

            {/* Problem 6 */}
            <div
              className={`rounded-lg p-4 transition-all ${
                isColorful
                  ? "bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white"
              } hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                >
                  Problem 6
                </span>
              </div>
              <div
                className={`mt-2 flex justify-start overflow-x-auto ${
                  isColorful
                    ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                }`}
              >
                <BlockMath
                  math={"\\text{Express } -2 + 2i \\text{ in exponential form}"}
                />
              </div>
              <details className="group mt-3">
                <summary
                  className={`flex cursor-pointer items-center text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span>Show Solution</span>
                  <svg
                    className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-200 dark:bg-gray-600"
                  } ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-sky-200 scrollbar-thumb-sky-300 dark:scrollbar-track-sky-600 dark:scrollbar-thumb-sky-500"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath math="2\\sqrt{2}e^{i3\\pi/4}" />
                </div>
              </details>
            </div>
            {/* and so on... */}
          </div>
        </div>
        <div className="mt-16 flex items-center justify-center space-x-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
          <span className="text-sm italic text-gray-700 dark:text-gray-200">
            Complex Numbers Representation
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        </div>
      </div>
    </div>
  );
}
