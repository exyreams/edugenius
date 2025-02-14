"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const problemColors = [
  // Original Variations
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

  // Red/Pink Variations
  "from-red-200 to-pink-300 dark:from-red-700 dark:to-pink-600",
  "from-rose-100 to-red-200 dark:from-rose-700 dark:to-red-800",
  "from-red-50 to-rose-100 dark:from-red-900 dark:to-rose-800",

  // Orange/Yellow Variations
  "from-orange-200 to-yellow-300 dark:from-orange-700 dark:to-yellow-600",
  "from-amber-100 to-orange-200 dark:from-amber-700 dark:to-orange-800",
  "from-yellow-50 to-amber-100 dark:from-yellow-900 dark:to-amber-800",

  // Green/Teal Variations
  "from-green-200 to-teal-300 dark:from-green-700 dark:to-teal-600",
  "from-emerald-100 to-green-200 dark:from-emerald-700 dark:to-green-800",
  "from-green-50 to-emerald-100 dark:from-green-900 dark:to-emerald-800",

  // Blue/Sky Variations
  "from-blue-200 to-sky-300 dark:from-blue-700 dark:to-sky-600",
  "from-sky-200 to-blue-300 dark:from-sky-700 dark:to-blue-600",
  "from-sky-50 to-blue-100 dark:from-sky-900 dark:to-blue-800",

  // Purple Variations
  "from-purple-200 to-indigo-300 dark:from-purple-700 dark:to-indigo-600",
  "from-violet-100 to-purple-200 dark:from-violet-700 dark:to-purple-800",
  "from-purple-50 to-violet-100 dark:from-purple-900 dark:to-violet-800",

  // Gray Variations
  "from-gray-200 to-slate-300 dark:from-gray-700 dark:to-slate-600",
  "from-slate-200 to-gray-300 dark:from-slate-700 dark:to-gray-600",
  "from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800",

  // Complementary/Contrasting Options
  "from-blue-200 to-yellow-200 dark:from-blue-700 dark:to-yellow-700",
  "from-pink-200 to-teal-200 dark:from-pink-700 dark:to-teal-700",
  "from-green-200 to-red-200 dark:from-green-700 dark:to-red-700",

  // Neutral with Subtle Variation
  "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
  "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800",
  "from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800",
];

export default function GeometricalOptics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    { label: "Optics", href: "/physics/concepts/optics" },
    {
      label: "Geometrical Optics",
      href: "/physics/concepts/optics/geometrical-optics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-amber-200 dark:to-orange-300">
          Geometrical Optics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the principles of Geometrical Optics, including reflection,
          refraction, mirrors, lenses, optical instruments, total internal
          reflection, and fiber optics.
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Sections */}
      <div className="mt-12 space-y-8">
        {/* Introduction to Geometrical Optics */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 p-6 dark:from-orange-600 dark:to-amber-600">
          <h2 className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-amber-300 dark:to-yellow-300">
            Introduction to Geometrical Optics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Geometrical Optics, also known as Ray Optics, describes light
              propagation in terms of rays. It is a simplified model that works
              well when the wavelength of light is much smaller than the size of
              the objects it interacts with. This section introduces the basic
              concepts of geometrical optics.
            </p>
          </div>
        </div>

        {/* Reflection & Refraction */}
        <div className="rounded-2xl bg-gradient-to-br from-lime-200 to-green-200 p-6 dark:from-lime-600 dark:to-green-600">
          <h2 className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-green-300 dark:to-emerald-300">
            Reflection & Refraction
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Reflection and refraction are two fundamental phenomena that
              describe how light interacts with surfaces and different media.
              Reflection is the bouncing back of light from a surface, while
              refraction is the bending of light as it passes from one medium to
              another.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-300">
                  Laws of Reflection
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    The angle of incidence is equal to the angle of reflection (
                    <InlineMath math="\theta_i = \theta_r" />
                    ).
                  </li>
                  <li>
                    The incident ray, the reflected ray, and the normal to the
                    surface all lie in the same plane.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
                  Snell&#39;s Law (Law of Refraction)
                </h3>
                <BlockMath math="n_1 \sin(\theta_1) = n_2 \sin(\theta_2)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="n_1" />, <InlineMath math="n_2" /> =
                  Refractive indices of the two media
                  <br />
                  <InlineMath math="\theta_1" /> = Angle of incidence
                  <br />
                  <InlineMath math="\theta_2" /> = Angle of refraction
                </p>
              </div>
            </div>
          </div>
          {/* Illustration: Reflection and Refraction */}
          <div className="mt-6 flex justify-center">
            <svg viewBox="0 0 200 100" className="w-full max-w-md">
              <line
                x1="20"
                y1="50"
                x2="180"
                y2="50"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50 20 L100 50 L150 20"
                stroke="#65a30d"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M100 50 L140 80"
                stroke="#16a34a"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="100"
                y1="0"
                x2="100"
                y2="100"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4"
              />
              <text x="50" y="15" fontSize="12" fill="#65a30d">
                Incident Ray
              </text>
              <text x="140" y="15" fontSize="12" fill="#65a30d">
                Reflected Ray
              </text>
              <text x="140" y="90" fontSize="12" fill="#16a34a">
                Refracted Ray
              </text>
              <text x="105" y="30" fontSize="12" fill="currentColor">
                Normal
              </text>
            </svg>
          </div>
        </div>

        {/* Mirrors */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 dark:from-sky-600 dark:to-blue-600">
          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-300 dark:to-cyan-300">
            Mirrors (Plane, Concave, Convex)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Mirrors are optical devices that reflect light. They can be plane,
              concave, or convex, each having different properties and
              applications.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                  Plane Mirrors
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Produce virtual, upright, and laterally inverted images.
                  </li>
                  <li>Image distance equals object distance.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  Concave Mirrors
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Converging mirrors that can produce real or virtual images.
                  </li>
                  <li>
                    Used in telescopes, headlights, and other optical
                    instruments.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-300">
                  Convex Mirrors
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Diverging mirrors that always produce virtual, upright, and
                    diminished images.
                  </li>
                  <li>Used in rear-view mirrors and security mirrors.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Mirror Equation and Magnification */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Mirror Equation and Magnification
            </h3>
            <div className="mt-2 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h4 className="text-md font-medium text-blue-600 dark:text-blue-300">
                  Mirror Equation
                </h4>
                <BlockMath math="\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="d_o" /> = Object distance
                  <br />
                  <InlineMath math="d_i" /> = Image distance
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h4 className="text-md font-medium text-cyan-600 dark:text-cyan-300">
                  Magnification
                </h4>
                <BlockMath math="M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Magnification
                  <br />
                  <InlineMath math="h_i" /> = Image height
                  <br />
                  <InlineMath math="h_o" /> = Object height
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lenses */}
        <div className="rounded-2xl bg-gradient-to-br from-purple-200 to-indigo-200 p-6 dark:from-purple-600 dark:to-indigo-600">
          <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-300 dark:to-purple-300">
            Lenses (Convex, Concave, Lens Maker’s Formula)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Lenses are optical devices that refract light. They can be convex
              (converging) or concave (diverging), and they are used to form
              images in various optical instruments.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                  Convex Lenses
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Converging lenses that can produce real or virtual images.
                  </li>
                  <li>Used in cameras, magnifying glasses, and eyeglasses.</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                  Concave Lenses
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Diverging lenses that always produce virtual, upright, and
                    diminished images.
                  </li>
                  <li>Used in eyeglasses to correct nearsightedness.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                  Lens Maker&#39;s Formula
                </h3>
                <BlockMath math="\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="n" /> = Refractive index of the lens
                  material
                  <br />
                  <InlineMath math="R_1" />, <InlineMath math="R_2" /> = Radii
                  of curvature of the lens surfaces
                </p>
              </div>
            </div>
          </div>
          {/* Lens Equation and Magnification */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Lens Equation and Magnification
            </h3>
            <div className="mt-2 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h4 className="text-md font-medium text-indigo-600 dark:text-indigo-300">
                  Lens Equation
                </h4>
                <BlockMath math="\frac{1}{f} = \frac{1}{d_o} + \frac{1}{d_i}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="f" /> = Focal length
                  <br />
                  <InlineMath math="d_o" /> = Object distance
                  <br />
                  <InlineMath math="d_i" /> = Image distance
                </p>
              </div>
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h4 className="text-md font-medium text-purple-600 dark:text-purple-300">
                  Magnification
                </h4>
                <BlockMath math="M = -\frac{d_i}{d_o} = \frac{h_i}{h_o}" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Where:
                  <br />
                  <InlineMath math="M" /> = Magnification
                  <br />
                  <InlineMath math="h_i" /> = Image height
                  <br />
                  <InlineMath math="h_o" /> = Object height
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optical Instruments */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-rose-200 p-6 dark:from-pink-600 dark:to-rose-600">
          <h2 className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-rose-300 dark:to-pink-300">
            Optical Instruments (Microscopes, Telescopes, Cameras)
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Optical instruments use combinations of lenses and mirrors to
              produce images of objects. Microscopes are used to magnify small
              objects, telescopes are used to view distant objects, and cameras
              capture images on a light-sensitive surface.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-300">
                  Microscopes
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Use two or more convex lenses to magnify small objects.
                  </li>
                  <li>Objective lens forms a real, magnified image.</li>
                  <li>Eyepiece lens further magnifies the image.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-rose-600 dark:text-rose-300">
                  Telescopes
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>Used to view distant objects.</li>
                  <li>
                    Refracting telescopes use lenses, while reflecting
                    telescopes use mirrors.
                  </li>
                  <li>
                    Objective lens/mirror forms a real image, which is then
                    magnified by the eyepiece.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-300">
                  Cameras
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Use a lens to focus light onto a light-sensitive surface
                    (film or sensor).
                  </li>
                  <li>
                    Aperture and shutter speed control the amount of light
                    entering the camera.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Total Internal Reflection & Fiber Optics */}
        <div className="rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-200 p-6 dark:from-yellow-600 dark:to-orange-600">
          <h2 className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-orange-300 dark:to-amber-300">
            Total Internal Reflection & Fiber Optics
          </h2>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300">
              Total internal reflection occurs when light traveling from a
              denser medium to a less dense medium is completely reflected back
              into the denser medium. This phenomenon is the basis for fiber
              optics, which uses thin strands of glass or plastic to transmit
              light signals over long distances.
            </p>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300">
                  Total Internal Reflection
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Occurs when the angle of incidence exceeds the critical
                    angle.
                  </li>
                  <li>
                    Critical angle:{" "}
                    <InlineMath math="\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-black/5 p-4 backdrop-blur-sm dark:bg-black/20">
                <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-300">
                  Fiber Optics
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Uses thin fibers to transmit light signals via total
                    internal reflection.
                  </li>
                  <li>
                    Applications in telecommunications, medicine, and sensing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Numerical Problems Section */}
        <div className="mt-16">
          <div className="rounded-2xl bg-gradient-to-br from-gray-200 to-zinc-200 p-6 dark:from-gray-800 dark:to-zinc-800">
            <h2 className="bg-gradient-to-r from-zinc-600 to-gray-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-zinc-300 dark:to-gray-300">
              Numerical Problems
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  problem:
                    "A light ray enters a glass block (n = 1.5) from air (n = 1) at an angle of 30°. Calculate the angle of refraction.",
                  solution:
                    "n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2) \\\\ 1 \\times \\sin(30°) = 1.5 \\times \\sin(\\theta_2) \\\\ \\sin(\\theta_2) = \\frac{1 \\times 0.5}{1.5} = 0.333 \\\\ \\theta_2 = \\sin^{-1}(0.333) \\approx 19.5°",
                },
                {
                  problem:
                    "An object is placed 10 cm in front of a concave mirror with a focal length of 5 cm. Calculate the image distance and magnification.",
                  solution:
                    "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\Rightarrow \\frac{1}{5} = \\frac{1}{10} + \\frac{1}{d_i} \\\\ \\frac{1}{d_i} = \\frac{1}{5} - \\frac{1}{10} = \\frac{1}{10} \\Rightarrow d_i = 10 \\ \\text{cm} \\\\ M = -\\frac{d_i}{d_o} = -\\frac{10}{10} = -1",
                },
                {
                  problem:
                    "A convex lens has a focal length of 20 cm. An object is placed 30 cm from the lens. Calculate the image distance and magnification.",
                  solution:
                    "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\Rightarrow \\frac{1}{20} = \\frac{1}{30} + \\frac{1}{d_i} \\\\ \\frac{1}{d_i} = \\frac{1}{20} - \\frac{1}{30} = \\frac{1}{60} \\Rightarrow d_i = 60 \\ \\text{cm} \\\\ M = -\\frac{d_i}{d_o} = -\\frac{60}{30} = -2",
                },
                {
                  problem:
                    "A lens has a refractive index of 1.6 and radii of curvature of +15 cm and -30 cm. Calculate the focal length of the lens using the lens maker's formula.",
                  solution:
                    "\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) = (1.6 - 1)\\left(\\frac{1}{15} - \\frac{1}{-30}\\right) \\\\ \\frac{1}{f} = 0.6\\left(\\frac{1}{15} + \\frac{1}{30}\\right) = 0.6 \\times \\frac{3}{30} = 0.06 \\\\ f = \\frac{1}{0.06} \\approx 16.7 \\ \\text{cm}",
                },
                {
                  problem:
                    "A microscope has an objective lens with a focal length of 4 mm and an eyepiece with a focal length of 25 mm. If the distance between the lenses is 160 mm, calculate the total magnification.",
                  solution:
                    "M_{\\text{objective}} = -\\frac{L}{f_o} = -\\frac{160 - 25 - 4}{4} \\approx -32.75 \\\\ M_{\\text{eyepiece}} = \\frac{250}{f_e} = \\frac{250}{25} = 10 \\\\ M_{\\text{total}} = M_{\\text{objective}} \\times M_{\\text{eyepiece}} = -32.75 \\times 10 = -327.5",
                },
                {
                  problem:
                    "A telescope has an objective lens with a focal length of 100 cm and an eyepiece with a focal length of 5 cm. Calculate the angular magnification.",
                  solution: "M = -\\frac{f_o}{f_e} = -\\frac{100}{5} = -20",
                },
                {
                  problem:
                    "Calculate the critical angle for light traveling from water (n = 1.33) to air (n = 1).",
                  solution:
                    "\\theta_c = \\sin^{-1}\\left(\\frac{n_2}{n_1}\\right) = \\sin^{-1}\\left(\\frac{1}{1.33}\\right) \\approx 48.8°",
                },
                {
                  problem:
                    "A fiber optic cable has a core refractive index of 1.5 and a cladding refractive index of 1.45. Calculate the numerical aperture (NA) of the fiber.",
                  solution:
                    "NA = \\sqrt{n_1^2 - n_2^2} = \\sqrt{1.5^2 - 1.45^2} = \\sqrt{2.25 - 2.1025} = \\sqrt{0.1475} \\approx 0.384",
                },
                {
                  problem:
                    "An object is placed 20 cm in front of a concave mirror with a radius of curvature of 30 cm. Calculate the image distance and magnification.",
                  solution:
                    "f = \\frac{R}{2} = \\frac{30}{2} = 15 \\ \\text{cm} \\\\ \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\Rightarrow \\frac{1}{15} = \\frac{1}{20} + \\frac{1}{d_i} \\\\ \\frac{1}{d_i} = \\frac{1}{15} - \\frac{1}{20} = \\frac{1}{60} \\Rightarrow d_i = 60 \\ \\text{cm} \\\\ M = -\\frac{d_i}{d_o} = -\\frac{60}{20} = -3",
                },
                {
                  problem:
                    "A camera lens has a focal length of 50 mm. If the camera is focused on an object 2 m away, calculate the distance from the lens to the sensor.",
                  solution:
                    "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\Rightarrow \\frac{1}{50} = \\frac{1}{2000} + \\frac{1}{d_i} \\\\ \\frac{1}{d_i} = \\frac{1}{50} - \\frac{1}{2000} = \\frac{39}{2000} \\Rightarrow d_i = \\frac{2000}{39} \\approx 51.3 \\ \\text{mm}",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-lg border bg-gradient-to-br p-4 dark:border-gray-700 ${
                    problemColors[index % problemColors.length]
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Problem {index + 1}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>{item.problem}</p>
                  </div>
                  <details className="group mt-2">
                    <summary className="cursor-pointer text-sm font-medium text-indigo-600 dark:text-blue-300">
                      Show Solution
                    </summary>
                    <div className="mt-2 whitespace-pre-wrap text-sm text-gray-600 group-open:block dark:text-gray-400">
                      <p>
                        <BlockMath>{item.solution}</BlockMath>
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Illuminating the Principles of Light
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
