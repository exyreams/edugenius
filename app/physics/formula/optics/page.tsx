"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import React, { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description A page that displays key formulas in Optics.
 * @returns {JSX.Element} The rendered React component.
 */
export default function OpticsFormulas() {
  /**
   * @type {Array<{label: string, href: string}>}
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    { label: "Formula", href: "/physics/formula" },
    {
      label: "Optics",
      href: "/physics/formula/optics",
    },
  ];

  /**
   * @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
   * @description State hook to manage the color theme of the formulas.
   */
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent dark:from-amber-200 dark:to-orange-300 sm:text-5xl md:text-6xl">
          Optics Formulas
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          A comprehensive collection of key formulas in Optics, covering topics
          from reflection and refraction to lenses, optical instruments, and
          wave optics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Theme Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Reflection and Refraction */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Reflection and Refraction
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-amber-600 dark:text-amber-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Law of Reflection
                </h3>
                <BlockMath math="\theta_i = \theta_r" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\theta_i" /> = Angle of incidence
                  <br />
                  <InlineMath math="\theta_r" /> = Angle of reflection
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Snell&#39;s Law
                </h3>
                <BlockMath math="n_1 \sin(\theta_1) = n_2 \sin(\theta_2)" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="n_1" /> = Refractive index of medium 1
                  <br />
                  <InlineMath math="\theta_1" /> = Angle of incidence in medium
                  1
                  <br />
                  <InlineMath math="n_2" /> = Refractive index of medium 2
                  <br />
                  <InlineMath math="\theta_2" /> = Angle of refraction in medium
                  2
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-orange-600 dark:text-orange-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Critical Angle
                </h3>
                <BlockMath math="\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="\theta_c" /> = Critical angle
                  <br />
                  <InlineMath math="n_1" /> = Refractive index of the denser
                  medium
                  <br />
                  <InlineMath math="n_2" /> = Refractive index of the rarer
                  medium
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mirrors */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Mirrors
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-blue-600 dark:text-blue-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Mirror Equation
                </h3>
                <BlockMath math="\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="d_o" /> = Object distance
                  <br />
                  <InlineMath math="d_i" /> = Image distance
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-cyan-600 dark:text-cyan-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Magnification (Mirrors)
                </h3>
                <BlockMath math="M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Magnification
                  <br />
                  <InlineMath math="d_i" /> = Image distance
                  <br />
                  <InlineMath math="d_o" /> = Object distance
                  <br />
                  <InlineMath math="h_i" /> = Image height
                  <br />
                  <InlineMath math="h_o" /> = Object height
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-sky-600 dark:text-sky-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Focal Length of Spherical Mirror
                </h3>
                <BlockMath math="f = \frac{R}{2}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="R" /> = Radius of curvature
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lenses */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Lenses
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Lens Equation
                </h3>
                <BlockMath math="\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="d_o" /> = Object distance
                  <br />
                  <InlineMath math="d_i" /> = Image distance
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-green-600 dark:text-green-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Magnification (Lenses)
                </h3>
                <BlockMath math="M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Magnification
                  <br />
                  <InlineMath math="d_i" /> = Image distance
                  <br />
                  <InlineMath math="d_o" /> = Object distance
                  <br />
                  <InlineMath math="h_i" /> = Image height
                  <br />
                  <InlineMath math="h_o" /> = Object height
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-lime-600 dark:text-lime-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Lens Maker&#39;s Formula
                </h3>
                <BlockMath math="\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="n" /> = Refractive index of the lens
                  material
                  <br />
                  <InlineMath math="R_1" /> = Radius of curvature of the first
                  lens surface
                  <br />
                  <InlineMath math="R_2" /> = Radius of curvature of the second
                  lens surface
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optical Instruments */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Optical Instruments
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-pink-600 dark:text-pink-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Magnification of a Magnifying Glass
                </h3>
                <BlockMath math={"M = \\frac{25 \\text{ cm}}{f}"} />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Magnification
                  <br />
                  <InlineMath math="f" /> = Focal length (in cm)
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Angular Magnification of a Telescope
                </h3>
                <BlockMath math="M = -\frac{f_o}{f_e}" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Angular magnification
                  <br />
                  <InlineMath math="f_o" /> = Focal length of the objective lens
                  <br />
                  <InlineMath math="f_e" /> = Focal length of the eyepiece lens
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-red-600 dark:text-red-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Magnification of a Microscope
                </h3>
                <div
                  className={`overflow-x-auto ${
                    isColorful
                      ? "scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-rose-300 dark:scrollbar-track-rose-400 dark:scrollbar-thumb-rose-600"
                      : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500"
                  }`}
                >
                  <BlockMath
                    math={
                      "M = M_o \\times M_e = -\\frac{L}{f_o} \\times \\frac{25\\text{ cm}}{f_e}"
                    }
                  />
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Total magnification
                  <br />
                  <InlineMath math="M_o" /> = Magnification of the objective
                  lens
                  <br />
                  <InlineMath math="M_e" /> = Magnification of the eyepiece lens
                  <br />
                  <InlineMath math="L" /> = Tube length
                  <br />
                  <InlineMath math="f_o" /> = Focal length of the objective lens
                  <br />
                  <InlineMath math="f_e" /> = Focal length of the eyepiece lens
                  (in cm)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Optics */}
        <div
          className={`rounded-2xl p-6 ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-600 dark:to-indigo-600"
              : "glass"
          }`}
        >
          <h2
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300 ${
              isColorful ? "" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            Wave Optics
          </h2>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-indigo-600 dark:text-indigo-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Wavelength and Frequency
                </h3>
                <BlockMath math="c = f\lambda" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="c" /> = Speed of light
                  <br />
                  <InlineMath math="f" /> = Frequency
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Diffraction Grating
                </h3>
                <BlockMath math="d\sin\theta = m\lambda" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="d" /> = Grating spacing
                  <br />
                  <InlineMath math="\theta" /> = Angle of diffraction
                  <br />
                  <InlineMath math="m" /> = Order of the maximum
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-fuchsia-600 dark:text-fuchsia-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Thin Film Interference (Constructive)
                </h3>
                <BlockMath math="2nt = m\lambda" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="n" /> = Refractive index of the film
                  <br />
                  <InlineMath math="t" /> = Thickness of the film
                  <br />
                  <InlineMath math="m" /> = Order of interference
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength
                </p>
              </div>
              <div
                className={`rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20 ${
                  !isColorful && "bg-gray-300 dark:bg-gray-500"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-pink-600 dark:text-pink-200"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Thin Film Interference (Destructive)
                </h3>
                <BlockMath math="2nt = \left(m + \frac{1}{2}\right)\lambda" />
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-100">
                  Where:
                  <br />
                  <InlineMath math="n" /> = Refractive index of the film
                  <br />
                  <InlineMath math="t" /> = Thickness of the film
                  <br />
                  <InlineMath math="m" /> = Order of interference
                  <br />
                  <InlineMath math="\lambda" /> = Wavelength
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Exploring the Nature of Light
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
