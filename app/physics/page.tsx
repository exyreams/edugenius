"use client";

import Link from "next/link";
import {
  Atom,
  BookOpen,
  Calculator,
  ChevronRight,
  Cog,
  Droplet,
  Eye,
  Layout,
  Lightbulb,
  Thermometer,
  Waves,
  Zap,
} from "lucide-react";
import { SiLibreofficemath } from "react-icons/si";
import { FaFileUpload } from "react-icons/fa";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const topics = [
  {
    id: "electromagnetism",
    name: "Electromagnetism",
    icon: Zap,
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Electric and magnetic fields and their interactions",
  },
  {
    id: "fluid-mechanics",
    name: "Fluid Mechanics",
    icon: Droplet,
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Behavior of fluids at rest and in motion",
  },
  {
    id: "mechanics",
    name: "Mechanics",
    icon: Cog,
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Motion of objects and forces acting upon them",
  },
  {
    id: "modern-physics",
    name: "Modern Physics",
    icon: Atom,
    gradient:
      "from-violet-200 to-fuchsia-200 dark:from-violet-600 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-white",
    description: "Quantum theory, relativity, and contemporary physics",
  },
  {
    id: "optics",
    name: "Optics",
    icon: Eye,
    gradient: "from-sky-200 to-cyan-200 dark:from-sky-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Light behavior and optical phenomena",
  },
  {
    id: "thermodynamics",
    name: "Thermodynamics",
    icon: Thermometer,
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description: "Heat, work, and energy transformations",
  },
  {
    id: "waves",
    name: "Waves",
    icon: Waves,
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description: "Wave propagation and vibrational phenomena",
  },
  {
    id: "universal-constants",
    name: "Universal Constants",
    icon: Layout,
    gradient: "from-pink-200 to-red-200 dark:from-pink-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental physical constants of nature",
  },
];

const interactiveTools = [
  {
    id: "challenges",
    title: "Challenges",
    description: "Solve problems to test your physics skills.",
    href: "/physics/quiz/challenges",
    icon: SiLibreofficemath,
    cta: "Take Challenge",
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    comingSoon: false,
    span: "lg:col-span-1",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Practice solving physics problems with step-by-step guidance.",
    href: "/physics/solve",
    icon: Lightbulb,
    cta: "Start Solving",
    gradient: "from-purple-200 to-blue-200 dark:from-purple-600 dark:to-blue-600",
    comingSoon: false,
    span: "lg:col-span-2",
  },
  {
    id: "quiz-from-file",
    title: "Quiz from File",
    description: "Upload a file to generate a custom quiz.",
    href: "/physics/quiz/from-files",
    icon: FaFileUpload,
    cta: "Start Quiz",
    gradient: "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    comingSoon: false,
    span: "lg:col-span-1",
  },
    {
    id: "concept-explainer",
    title: "Concept Explainer",
    description: "Deep dive into complex physics concepts with interactive explanations.",
    href: "#",
    icon: BookOpen,
    cta: "Learn More",
    gradient: "from-green-200 to-teal-200 dark:from-green-600 dark:to-teal-600",
    comingSoon: true,
    span: "lg:col-span-1",
  },
];

const ComingSoonTag = () => (
  <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-xs font-semibold text-black">
    Coming Soon
  </span>
);

export default function Physics() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental laws of the universe, from quantum phenomena to cosmic scales.
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Interactive Tools Section */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent dark:from-amber-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Interactive Tools
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interactiveTools.map((tool) => {
            const cardContent = (
              <>
                {tool.comingSoon && <ComingSoonTag />}
                <div className="flex h-full flex-col justify-between p-8">
                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={`rounded-lg p-3 ${
                          isColorful
                            ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                            : "bg-gray-300 dark:bg-gray-700"
                        }`}
                      >
                        <tool.icon
                          className={`h-8 w-8 ${
                            isColorful
                              ? "text-black dark:text-white"
                              : "text-gray-800 dark:text-white"
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-2xl font-semibold ${
                          isColorful
                            ? "text-black dark:text-white"
                            : "text-gray-800 dark:text-white"
                        }`}
                      >
                        {tool.title}
                      </h3>
                    </div>
                    <p
                      className={`mb-6 text-base leading-relaxed ${
                        isColorful
                          ? "text-gray-600 dark:text-gray-200"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span
                      className={`text-md font-medium ${
                        isColorful
                          ? "text-gray-700 dark:text-white/80"
                          : "text-gray-700 dark:text-white/80"
                      }`}
                    >
                      {tool.cta}
                    </span>
                    <ChevronRight
                      className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${
                        isColorful
                          ? "text-gray-700 dark:text-white/80"
                          : "text-gray-700 dark:text-white/80"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full transition-all duration-500 group-hover:-right-8 group-hover:-top-8 ${
                    isColorful
                      ? "bg-black/5 dark:bg-white/10"
                      : "bg-gray-300/50 dark:bg-gray-700/50"
                  }`}
                />
              </>
            );

            const cardClasses = `group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:hover:shadow-black/40 flex flex-col ${
              isColorful ? `bg-gradient-to-br ${tool.gradient}` : "glass"
            } ${
              tool.comingSoon ? "cursor-not-allowed opacity-70" : ""
            } ${tool.span}`;

            if (tool.comingSoon) {
              return (
                <div key={tool.id} className={cardClasses}>
                  {cardContent}
                </div>
              );
            }

            return (
              <Link href={tool.href} key={tool.id} className={cardClasses}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Foundational Physics */}
      <div className="mt-12">
        <h2
          className={`mb-6 mt-8 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Foundational Physics
        </h2>
        <div className="text-center text-gray-500 dark:text-gray-400">
            Coming Soon
        </div>
      </div>

      {/* Intermediate & Advanced Physics */}
      <div className="mt-12">
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Intermediate & Advanced Physics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                href={`/physics/concepts/${topic.id}`}
                key={topic.id}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                  isColorful
                    ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                    : "glass text-gray-800 dark:text-white"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg p-2 ${
                        isColorful
                          ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/25`
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isColorful
                            ? "text-current"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      />
                    </div>
                    <h4 className={`font-medium ${topic.text}`}>{topic.name}</h4>
                  </div>
                  <div className="flex justify-between">
                    <p
                      className={`text-sm leading-6 ${
                        isColorful
                          ? "text-gray-600 dark:text-gray-200"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {topic.description}
                    </p>
                    <ChevronRight
                      className={`text-gray-700 dark:text-gray-300`}
                    />
                  </div>
                </div>
                {/* Animated background element */}
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
                    isColorful
                      ? "bg-black/5 dark:bg-white/10"
                      : "bg-gray-300/50 dark:bg-gray-700/50"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Unveiling the Universe's Secrets
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}