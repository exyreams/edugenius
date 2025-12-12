"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import { foundationalTopics, intermediateAdvancedTopics } from "../data/topics";
import TopicSection from "../components/TopicSection";

// Memoize breadcrumb items to prevent recreation on every render
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Concepts", href: "/chemistry/concepts" }
] as const;

export default function ChemistryConcepts() {
  const [isColorful, setIsColorful] = useState(true);

  // Memoize the color toggle handler to prevent unnecessary re-renders
  const handleColorToggle = useCallback((value: boolean) => {
    setIsColorful(value);
  }, []);

  // Memoize topic sections to prevent unnecessary re-renders
  const foundationalSection = useMemo(() => (
    <TopicSection
      title="Foundational Chemistry"
      topics={foundationalTopics}
      level="foundational"
      isColorful={isColorful}
      gradientClasses="from-blue-700 to-cyan-700 dark:from-blue-600 dark:to-cyan-600"
    />
  ), [isColorful]);

  const advancedSection = useMemo(() => (
    <TopicSection
      title="Intermediate & Advanced Chemistry"
      topics={intermediateAdvancedTopics}
      level="intermediate-advanced"
      isColorful={isColorful}
      gradientClasses="from-green-700 to-emerald-700 dark:from-green-600 dark:to-emerald-600"
    />
  ), [isColorful]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-purple-200 sm:text-5xl md:text-6xl">
          Chemistry Concepts
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore comprehensive chemistry concepts from foundational principles to advanced topics. 
          Master chemical reactions, molecular structures, and theoretical frameworks.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={handleColorToggle} initialState={true} />

      {/* Foundational Chemistry Topics */}
      {foundationalSection}

      {/* Intermediate & Advanced Chemistry Topics */}
      {advancedSection}

      {/* Call-to-Action Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-red-200 to-purple-200 p-8 text-center dark:from-red-600 dark:to-purple-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Ready to Master Chemistry?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Start with foundational concepts and progress to advanced topics. 
          Build your understanding of chemical principles with interactive content and practice problems.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/concepts/foundational"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Start with Fundamentals
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/concepts/intermediate-advanced"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Explore Advanced Topics
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Understanding the Molecular World
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}