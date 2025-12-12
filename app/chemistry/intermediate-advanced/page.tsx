"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";
import { intermediateAdvancedTopics } from "../data/topics";
import TopicCard from "../components/TopicCard";

// Breadcrumb items for intermediate-advanced chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Concepts", href: "/chemistry/concepts" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" }
];

export default function IntermediateAdvancedChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-emerald-600 sm:text-5xl md:text-6xl">
          Intermediate & Advanced Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Dive deep into specialized areas of chemistry. Explore organic synthesis, physical chemistry principles, 
          analytical techniques, and cutting-edge chemical research areas.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Prerequisites Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 p-8 text-center dark:from-amber-600 dark:to-orange-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Prerequisites
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Before diving into advanced topics, ensure you have a solid understanding of foundational chemistry concepts 
          including atomic structure, chemical bonding, stoichiometry, and thermochemistry.
        </p>
        <div className="mt-6">
          <Link
            href="/chemistry/foundational"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Review Fundamentals
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Advanced Topics
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {intermediateAdvancedTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              level="intermediate-advanced"
              isColorful={isColorful}
            />
          ))}
        </div>
      </div>

      {/* Specialization Areas */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Specialization Areas
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Synthetic Chemistry
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Master organic and inorganic synthesis, reaction mechanisms, and polymer chemistry 
              to design and create new compounds.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800 dark:text-green-200">
                Organic Chemistry
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                Inorganic Chemistry
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                Polymer Chemistry
              </span>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Analytical & Physical
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore advanced analytical techniques, physical chemistry principles, 
              and computational methods for understanding chemical systems.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                Analytical Chemistry
              </span>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200">
                Physical Chemistry
              </span>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200">
                Nuclear Chemistry
              </span>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Biological & Environmental
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Study the intersection of chemistry with biology and environmental science, 
              including biochemical processes and environmental impact.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800 dark:bg-red-800 dark:text-red-200">
                Biochemistry
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-800 dark:text-green-200">
                Environmental Chemistry
              </span>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Research & Applications
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Explore cutting-edge research areas and real-world applications of advanced 
              chemical principles in industry and technology.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                Materials Science
              </span>
              <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-800 dark:bg-pink-800 dark:text-pink-200">
                Nanotechnology
              </span>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-800 dark:text-cyan-200">
                Catalysis
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-8 text-center dark:from-green-600 dark:to-emerald-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Ready for Advanced Chemistry?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Choose your area of interest and dive deep into specialized chemistry topics. 
          Each area offers comprehensive coverage with interactive content and real-world applications.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/organic-chemistry"
            className="inline-flex items-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
          >
            Start with Organic
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/physical-chemistry"
            className="inline-flex items-center rounded-lg bg-yellow-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-yellow-700"
          >
            Explore Physical
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Advancing Chemical Knowledge
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}