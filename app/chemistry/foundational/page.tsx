"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import { foundationalTopics } from "../data/topics";
import TopicCard from "../components/TopicCard";

// Breadcrumb items for foundational chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Concepts", href: "/chemistry/concepts" },
  { label: "Foundational", href: "/chemistry/foundational" }
];

export default function FoundationalChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-600 dark:to-cyan-600 sm:text-5xl md:text-6xl">
          Foundational Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the fundamental concepts of chemistry. Build a strong foundation with atomic structure, 
          chemical reactions, acids and bases, and essential chemical principles.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Topics Grid */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Foundational Topics
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {foundationalTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              level="foundational"
              isColorful={isColorful}
            />
          ))}
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-200 to-cyan-200 p-8 text-center dark:from-blue-600 dark:to-cyan-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Recommended Learning Path
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Start with Introduction to Chemistry to understand basic concepts, then explore Atomic Structure 
          to learn about matter's building blocks. Progress through Chemical Reactions and Stoichiometry 
          to master quantitative relationships, and continue with Acids & Bases and Thermochemistry.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/foundational/introduction-to-chemistry"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Start Learning
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Advanced Topics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Key Concepts Overview */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Atomic Theory
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Understand the structure of atoms, electron configurations, and periodic trends.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Chemical Bonding
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn how atoms combine to form compounds through ionic and covalent bonds.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Stoichiometry
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Master the quantitative relationships in chemical reactions and calculations.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Acid-Base Chemistry
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore pH, neutralization reactions, and buffer systems.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Thermochemistry
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Study energy changes in chemical reactions and calorimetry.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Gas Laws
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Understand the behavior of gases and their mathematical relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Building Strong Chemical Foundations
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}