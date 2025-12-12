"use client";

import { useState, useCallback, JSX } from "react";
import ColorToggle from "@/components/ColorToggle";
import ChemistryHero from "@/components/chemistry/ChemistryHero";
import ChemistrySection from "@/components/chemistry/ChemistrySection";
import TopicCard from "@/components/chemistry/TopicCard";
import InteractiveToolCard from "@/components/chemistry/InteractiveToolCard";
import {
  foundationalTopics,
  intermediateAdvancedTopics,
  interactiveTools
} from "@/lib/chemistry/data";

export default function Chemistry(): JSX.Element {
  const [isColorful, setIsColorful] = useState(true);

  const handleColorToggle = useCallback((colorful: boolean) => {
    setIsColorful(colorful);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ChemistryHero
        title="Chemistry"
        description="Explore the fundamental concepts and applications of chemistry, from basic principles to advanced topics."
      />

      <ColorToggle onChange={handleColorToggle} initialState={true} />

      <ChemistrySection
        title="Interactive Tools"
        isColorful={isColorful}
        gradientFrom="from-amber-700"
        gradientTo="to-orange-700 dark:from-amber-600 dark:to-orange-600"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interactiveTools.map((tool) => (
            <InteractiveToolCard
              key={tool.id}
              tool={tool}
              isColorful={isColorful}
            />
          ))}
        </div>
      </ChemistrySection>

      <ChemistrySection
        title="Foundational Chemistry"
        isColorful={isColorful}
        gradientFrom="from-blue-700"
        gradientTo="to-cyan-700 dark:from-blue-600 dark:to-cyan-600"
        className="mt-12"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foundationalTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isColorful={isColorful}
              href={`/chemistry/foundational/${topic.id}`}
            />
          ))}
        </div>
      </ChemistrySection>

      <ChemistrySection
        title="Intermediate & Advanced Chemistry"
        isColorful={isColorful}
        gradientFrom="from-green-700"
        gradientTo="to-emerald-700 dark:from-green-600 dark:to-emerald-600"
        className="mt-12"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {intermediateAdvancedTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isColorful={isColorful}
              href={`/chemistry/intermediate-advanced/${topic.id}`}
            />
          ))}
        </div>
      </ChemistrySection>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Discovering the Building Blocks of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}