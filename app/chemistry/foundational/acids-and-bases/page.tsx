"use client";

import "katex/dist/katex.min.css";
import React, { useState, useCallback } from "react";
import { BlockMath, InlineMath } from "react-katex";
import Link from "next/link";
import { ChevronRight, Droplet, FlaskConical, TestTube, Beaker, Zap } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * @description Array of gradient color strings for practice problems.
 */
const problemColors = [
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

/**
 * @component AcidsAndBases
 * @description A client component explaining acids and bases concepts.
 * @returns {JSX.Element} The rendered AcidsAndBases page.
 */
export default function AcidsAndBases() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Chemistry", href: "/chemistry" },
    { label: "Foundational", href: "/chemistry/foundational" },
    { label: "Acids and Bases", href: "/chemistry/foundational/acids-and-bases" },
  ];

  /**
   * @state isColorful
   * @description State for toggling between colorful/grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  /**
   * @description Dynamically generated scrollbar styles.
   */
  const scrollbarStyle = isColorful
    ? "scrollbar-thin sm:scrollbar-thin scrollbar-track-yellow-200 sm:scrollbar-track-yellow-300 scrollbar-thumb-yellow-300 sm:scrollbar-thumb-yellow-400 dark:scrollbar-track-yellow-600 dark:sm:scrollbar-track-yellow-700 dark:scrollbar-thumb-yellow-500 dark:sm:scrollbar-thumb-yellow-600"
    : "scrollbar-thin sm:scrollbar-thin scrollbar-track-gray-200 sm:scrollbar-track-gray-300 scrollbar-thumb-gray-300 sm:scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:sm:scrollbar-track-gray-700 dark:scrollbar-thumb-gray-500 dark:sm:scrollbar-thumb-gray-600";

  /**
   * @description Text color class, determined by the `isColorful` state.
   * @type {string}
   */
  const textColor = isColorful ? "" : "text-gray-800 dark:text-white";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-yellow-700 to-amber-800 bg-clip-text text-4xl font-bold text-transparent dark:from-yellow-300 dark:to-amber-400 md:text-5xl lg:text-6xl`}
        >
          Acids and Bases
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Learn about acids and bases, pH scale, neutralization reactions, and their applications in chemistry and everyday life.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="mb-4 flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Understanding Acids */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-red-300 dark:to-orange-300`}
          >
            Understanding Acids
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Acids are substances that donate protons (H⁺ ions) in aqueous solutions. They have characteristic properties and play crucial roles in chemical reactions.
            </p>
            <div className="my-4 flex justify-center">
              <svg width="300" height="200" className="border border-gray-600 rounded">
                <circle cx="150" cy="100" r="60" stroke="#ef4444" fill="rgba(239, 68, 68, 0.1)" strokeWidth="2"/>
                <text x="150" y="85" fontSize="14" textAnchor="middle" fill="#dc2626">H⁺</text>
                <text x="150" y="105" fontSize="12" textAnchor="middle" fill="#dc2626">Proton</text>
                <text x="150" y="120" fontSize="12" textAnchor="middle" fill="#dc2626">Donor</text>
                <text x="150" y="180" fontSize="16" textAnchor="middle" fill="#374151">Acid Molecule</text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Common Properties of Acids:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>Taste sour (DO NOT taste chemicals in lab!)</li>
                <li>Turn blue litmus paper red</li>
                <li>React with metals to produce hydrogen gas: <InlineMath math={"\\text{Acid} + \\text{Metal} \\rightarrow \\text{Salt} + H_2"} /></li>
                <li>Conduct electricity in aqueous solution</li>
                <li>pH less than 7</li>
              </ul>
              <p className={`mt-2 ${textColor}`}>
                <strong>Examples:</strong> Hydrochloric acid (HCl), Sulfuric acid (H₂SO₄), Acetic acid (CH₃COOH)
              </p>
            </div>
          </div>
        </div>

        {/* Understanding Bases */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-cyan-300`}
          >
            Understanding Bases
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Bases are substances that accept protons (H⁺ ions) or donate hydroxide ions (OH⁻) in aqueous solutions. They have properties opposite to acids.
            </p>
            <div className="my-4 flex justify-center">
              <svg width="300" height="200" className="border border-gray-600 rounded">
                <circle cx="150" cy="100" r="60" stroke="#3b82f6" fill="rgba(59, 130, 246, 0.1)" strokeWidth="2"/>
                <text x="150" y="85" fontSize="14" textAnchor="middle" fill="#2563eb">OH⁻</text>
                <text x="150" y="105" fontSize="12" textAnchor="middle" fill="#2563eb">Hydroxide</text>
                <text x="150" y="120" fontSize="12" textAnchor="middle" fill="#2563eb">Donor</text>
                <text x="150" y="180" fontSize="16" textAnchor="middle" fill="#374151">Base Molecule</text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>Common Properties of Bases:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>Taste bitter (DO NOT taste chemicals in lab!)</li>
                <li>Turn red litmus paper blue</li>
                <li>Feel slippery or soapy to touch</li>
                <li>Conduct electricity in aqueous solution</li>
                <li>pH greater than 7</li>
              </ul>
              <p className={`mt-2 ${textColor}`}>
                <strong>Examples:</strong> Sodium hydroxide (NaOH), Ammonia (NH₃), Calcium hydroxide (Ca(OH)₂)
              </p>
            </div>
          </div>
        </div>

        {/* pH Scale */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-500 dark:to-pink-500"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-pink-300`}
          >
            The pH Scale
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>The pH scale measures the acidity or basicity of a solution, ranging from 0 to 14.</p>
            {/* pH Scale Visualization */}
            <div className="my-4 flex justify-center">
              <svg width="400" height="100" className="border border-gray-600 rounded">
                {/* pH Scale Bar */}
                <defs>
                  <linearGradient id="phGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <rect x="50" y="40" width="300" height="20" fill="url(#phGradient)" stroke="#374151" strokeWidth="1"/>
                {/* pH Numbers */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((ph, index) => (
                  <g key={ph}>
                    <text x={50 + (index * 300/14)} y={35} fontSize="10" textAnchor="middle" fill="#374151">{ph}</text>
                    <line x1={50 + (index * 300/14)} y1={40} x2={50 + (index * 300/14)} y2={60} stroke="#374151" strokeWidth="1"/>
                  </g>
                ))}
                <text x="75" y="80" fontSize="12" textAnchor="middle" fill="#dc2626">Acidic</text>
                <text x="200" y="80" fontSize="12" textAnchor="middle" fill="#22c55e">Neutral</text>
                <text x="325" y="80" fontSize="12" textAnchor="middle" fill="#3b82f6">Basic</text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>pH Scale Interpretation:</strong>
              </p>
              <ul className={`list-inside list-disc ${textColor}`}>
                <li>pH = 7: Neutral (pure water)</li>
                <li>pH &lt; 7: Acidic (lower pH = more acidic)</li>
                <li>pH &gt; 7: Basic/Alkaline (higher pH = more basic)</li>
                <li>pH calculation: <InlineMath math={"pH = -\\log[H^+]"} /></li>
              </ul>
              <p className={`mt-2 ${textColor}`}>
                <strong>Common Examples:</strong> Lemon juice (pH ≈ 2), Coffee (pH ≈ 5), Blood (pH ≈ 7.4), Soap (pH ≈ 9)
              </p>
            </div>
          </div>
        </div>

        {/* Neutralization Reactions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
              : "glass"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-green-300 dark:to-emerald-300`}
          >
            Neutralization Reactions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Neutralization occurs when an acid and base react to form water and a salt, resulting in a solution closer to neutral pH.
            </p>
            <div className="my-4 flex justify-center">
              <svg width="400" height="150" className="border border-gray-600 rounded">
                <circle cx="100" cy="75" r="30" stroke="#ef4444" fill="rgba(239, 68, 68, 0.1)" strokeWidth="2"/>
                <text x="100" y="80" fontSize="12" textAnchor="middle" fill="#dc2626">Acid</text>
                
                <text x="150" y="80" fontSize="20" textAnchor="middle" fill="#374151">+</text>
                
                <circle cx="200" cy="75" r="30" stroke="#3b82f6" fill="rgba(59, 130, 246, 0.1)" strokeWidth="2"/>
                <text x="200" y="80" fontSize="12" textAnchor="middle" fill="#2563eb">Base</text>
                
                <text x="250" y="80" fontSize="20" textAnchor="middle" fill="#374151">→</text>
                
                <circle cx="320" cy="60" r="25" stroke="#22c55e" fill="rgba(34, 197, 94, 0.1)" strokeWidth="2"/>
                <text x="320" y="65" fontSize="10" textAnchor="middle" fill="#16a34a">Salt</text>
                
                <circle cx="320" cy="100" r="25" stroke="#06b6d4" fill="rgba(6, 182, 212, 0.1)" strokeWidth="2"/>
                <text x="320" y="105" fontSize="10" textAnchor="middle" fill="#0891b2">Water</text>
                
                <text x="200" y="130" fontSize="14" textAnchor="middle" fill="#374151">Neutralization Reaction</text>
              </svg>
            </div>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className={`${textColor}`}>
                <strong>General Neutralization Equation:</strong>
              </p>
              <div className={`mt-2 flex justify-center ${textColor}`}>
                <BlockMath math={"\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}"} />
              </div>
              <p className={`mt-2 ${textColor}`}>
                <strong>Example:</strong>
              </p>
              <div className={`mt-2 flex justify-center ${textColor}`}>
                <BlockMath math={"HCl + NaOH \\rightarrow NaCl + H_2O"} />
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                problem: "\\text{What is the pH of a solution with } [H^+] = 1 \\times 10^{-3} \\text{ M}?",
                solution: "pH = -\\log(1 \\times 10^{-3}) = 3",
              },
              {
                problem: "\\text{Is a solution with pH = 9.5 acidic, neutral, or basic?}",
                solution: "\\text{Basic (pH > 7)}",
              },
              {
                problem: "\\text{Complete: } HNO_3 + KOH \\rightarrow \\text{?}",
                solution: "HNO_3 + KOH \\rightarrow KNO_3 + H_2O",
              },
              {
                problem: "\\text{What color will red litmus paper turn in a basic solution?}",
                solution: "\\text{Blue}",
              },
              {
                problem: "\\text{Calculate the pH of a solution with } [OH^-] = 1 \\times 10^{-5} \\text{ M}",
                solution: "pOH = 5, \\text{ so } pH = 14 - 5 = 9",
              },
              {
                problem: "\\text{Name the salt formed when } H_2SO_4 \\text{ reacts with } Ca(OH)_2",
                solution: "\\text{Calcium sulfate } (CaSO_4)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"
                } hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>
                </div>
                <div
                  className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                >
                  <BlockMath math={item.problem} />
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 hover:text-rose-600 dark:text-gray-300 dark:hover:text-rose-300"
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
                    } ${scrollbarStyle}`}
                  >
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-yellow-200 to-amber-200 p-8 text-center dark:from-yellow-600 dark:to-amber-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Continue Your Chemistry Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Master acids and bases, then explore other foundational chemistry topics
          to build a comprehensive understanding of chemical principles.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/atomic-structure-and-properties"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            Atomic Structure
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/foundational/chemical-reactions-and-stoichiometry"
            className="inline-flex items-center rounded-lg bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-pink-700"
          >
            Chemical Reactions
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Understanding Chemical Behavior
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}