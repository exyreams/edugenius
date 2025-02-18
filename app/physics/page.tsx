"use client";

import Link from "next/link";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";
import {
  Atom,
  BookOpen,
  Calculator,
  ChevronRight,
  Cog,
  Droplet,
  Eye,
  Layout,
  Thermometer,
  Waves,
  Zap,
} from "lucide-react";
import { SiLibreofficemath } from "react-icons/si";
import { FaFileUpload } from "react-icons/fa";

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

// Helper function to render the "Coming Soon" tag
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
          Intermediate & Advanced Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental laws of the universe, from quantum phenomena
          to cosmic scales
        </p>
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Main Topic Grid */}
      <h2
        className={`mb-6 mt-8 text-center text-2xl font-bold ${
          isColorful
            ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
            : "text-gray-800 dark:text-gray-200"
        } `}
      >
        Learn Concepts
      </h2>
      <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Link
              href={`/physics/concepts/${topic.id}`}
              key={topic.id}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-lg p-3 ${
                      isColorful
                        ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isColorful
                          ? "text-current"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      isColorful
                        ? "currentcolor"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {topic.name}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-6 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-200"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {topic.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 dark:text-white/80"
                        : "text-gray-700 dark:text-white/80"
                    }`}
                  >
                    Explore Now
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                      isColorful
                        ? "text-gray-700 dark:text-white/80"
                        : "text-gray-700 dark:text-white/80"
                    }`}
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
      <div className="mt-16">
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Essential Formulas
        </h2>
        <div
          className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
            isColorful
              ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-700 dark:to-cyan-700"
              : "glass"
          }`}
        >
          {/* Animated background element */}
          <div
            className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${
              isColorful
                ? "bg-black/5 dark:bg-white/10"
                : "bg-gray-300/50 dark:bg-gray-700/50"
            }`}
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {topics.slice(0, 6).map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  href={`/physics/formula/${topic.id}`}
                  key={topic.id}
                  className={`group flex items-center gap-4 rounded-xl p-4 transition-all ${
                    isColorful
                      ? "hover:bg-teal-300/50 dark:hover:bg-teal-600/50"
                      : "hover:bg-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <div
                    className={`rounded-lg p-3 ${
                      isColorful
                        ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/20`
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isColorful
                          ? "text-current"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        isColorful ? "" : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {topic.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Key equations and relationships
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="mt-16">
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent dark:from-amber-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Quizzes
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Challenges */}
          <Link
            href="/physics/quiz/challenges"
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
              isColorful
                ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
                : "glass"
            }`}
          >
            <div
              className={`space-y-4 ${
                isColorful ? "text-gray-800" : "text-gray-800 dark:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <SiLibreofficemath
                    className={`h-6 w-6 ${
                      isColorful
                        ? "text-black dark:text-white"
                        : "text-gray-800 dark:text-white"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    isColorful
                      ? "text-black dark:text-white"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  Challenges
                </h3>
              </div>
              <p
                className={`text-sm leading-6 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-200"
                }`}
              >
                Solve problems to test your physics skills
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
                >
                  Take Challenge
                </span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
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
          {/* Quiz from File */}
          <Link
            href="/physics/quiz/from-files"
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
              isColorful
                ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
                : "glass"
            }`}
          >
            <div
              className={`space-y-4 ${
                isColorful ? "text-gray-800" : "text-gray-800 dark:text-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-lg p-3 ${
                    isColorful
                      ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  <FaFileUpload
                    className={`h-6 w-6 ${
                      isColorful
                        ? "text-black dark:text-white"
                        : "text-gray-800 dark:text-white"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    isColorful
                      ? "text-black dark:text-white"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  Quiz from File
                </h3>
              </div>
              <p
                className={`text-sm leading-6 ${
                  isColorful
                    ? "text-gray-600 dark:text-gray-200"
                    : "text-gray-600 dark:text-gray-200"
                }`}
              >
                Upload a file to generate a custom quiz
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
                >
                  Start Quiz
                </span>
                <ChevronRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                    isColorful
                      ? "text-gray-700 dark:text-white/80"
                      : "text-gray-700 dark:text-white/80"
                  }`}
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
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-16">
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-pink-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Solutions & Explanations
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Problem-Solving Section */}
          <Link
            href="/physics/solve"
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
              isColorful
                ? "bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-600 dark:to-blue-600"
                : "glass"
            }`}
          >
            <div className="flex items-center gap-4">
              <Calculator
                className={`h-8 w-8 ${
                  isColorful
                    ? "text-current"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              />
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    isColorful ? "" : "text-gray-800 dark:text-white"
                  }`}
                >
                  Problem Solver
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                  Practice solving physics problems with step-by-step guidance
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  isColorful
                    ? "text-gray-700 dark:text-white/80"
                    : "text-gray-700 dark:text-white/80"
                }`}
              >
                Start Solving
              </span>
              <ChevronRight
                className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                  isColorful
                    ? "text-gray-700 dark:text-white/80"
                    : "text-gray-700 dark:text-white/80"
                }`}
              />
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

          {/* Concept Explainer Section */}
          <Link
            href="/physics/explainer"
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
              isColorful
                ? "bg-gradient-to-br from-green-200 to-teal-200 dark:from-green-600 dark:to-teal-600"
                : "glass"
            }`}
          >
            <ComingSoonTag />
            <div className="flex items-center gap-4">
              <BookOpen
                className={`h-8 w-8 ${
                  isColorful
                    ? "text-current"
                    : "bg-black/5 text-gray-700 dark:text-gray-300"
                }`}
              />
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    isColorful ? "" : "text-gray-800 dark:text-white"
                  }`}
                >
                  Concept Explainer
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                  Deep dive into complex physics concepts with interactive
                  explanations
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  isColorful
                    ? "text-gray-700 dark:text-white/80"
                    : "text-gray-700 dark:text-white/80"
                }`}
              >
                Learn More
              </span>
              <ChevronRight
                className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                  isColorful
                    ? "text-gray-700 dark:text-white/80"
                    : "text-gray-700 dark:text-white/80"
                }`}
              />
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
        </div>
      </div>
      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Unveiling the Universe&#39;s Secrets
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
