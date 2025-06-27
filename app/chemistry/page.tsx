"use client";

import Link from "next/link";
import {
  Atom,
  BookOpen,
  ChevronRight,
  Cog,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  FlaskRound,
  Leaf,
  Lightbulb,
  Scale,
  Shapes,
  Square,
  Thermometer,
  WavesIcon,
  Zap,
} from "lucide-react";
import { FaFileUpload } from "react-icons/fa";
import { SiLibreofficemath, SiMoleculer } from "react-icons/si";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const foundationalTopics = [
  {
    id: "electrochemistry",
    name: "Electrochemistry",
    icon: Zap,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient:
      "from-yellow-100 to-amber-200 dark:from-yellow-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Chemical reactions involving electricity",
    comingSoon: true,
  },
  {
    id: "environmental-chemistry",
    name: "Environmental Chemistry",
    icon: Leaf,
    color: "text-green-500 dark:text-green-200",
    gradient:
      "from-green-100 to-emerald-200 dark:from-green-700 dark:to-emerald-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Chemical effects on the environment",
    comingSoon: true,
  },
  {
    id: "gas-chemistry",
    name: "Gas Chemistry",
    icon: WavesIcon,
    color: "text-sky-500 dark:text-sky-200",
    gradient: "from-sky-100 to-cyan-200 dark:from-sky-700 dark:to-cyan-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Behavior and laws of gases",
    comingSoon: true,
  },
  {
    id: "industrial-chemistry",
    name: "Industrial Chemistry",
    icon: Cog,
    color: "text-gray-500 dark:text-gray-200",
    gradient: "from-gray-100 to-zinc-200 dark:from-gray-700 dark:to-zinc-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Application of chemical processes in industries",
    comingSoon: true,
  },
  {
    id: "nuclear-chemistry",
    name: "Nuclear Chemistry",
    icon: Atom,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-rose-200 dark:from-red-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Radioactive substances and nuclear reactions",
    comingSoon: true,
  },
  {
    id: "polymer-chemistry",
    name: "Polymer Chemistry",
    icon: FlaskConical,
    color: "text-fuchsia-500 dark:text-fuchsia-200",
    gradient:
      "from-fuchsia-100 to-pink-200 dark:from-fuchsia-700 dark:to-pink-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Study of polymers and macromolecules",
    comingSoon: true,
  },
  {
    id: "quantum-chemistry",
    name: "Quantum Chemistry",
    icon: Atom,
    color: "text-violet-500 dark:text-violet-200",
    gradient:
      "from-violet-100 to-purple-200 dark:from-violet-700 dark:to-purple-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Application of quantum mechanics to chemistry",
    comingSoon: true,
  },
  {
    id: "solution-chemistry",
    name: "Solution Chemistry",
    icon: Droplet,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-sky-100 to-blue-200 dark:from-sky-700 dark:to-blue-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Properties of solutions",
    comingSoon: true,
  },
  {
    id: "stoichiometry",
    name: "Stoichiometry",
    icon: Scale,
    color: "text-pink-500 dark:text-pink-200",
    gradient: "from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Quantitative relationships in chemical reactions",
    comingSoon: true,
  },
  {
    id: "thermochemistry",
    name: "Thermochemistry",
    icon: Thermometer,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-rose-200 dark:from-red-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Heat energy changes in chemical reactions",
    comingSoon: true,
  },
];

const intermediateAdvancedTopics = [
  {
    id: "analytical",
    name: "Analytical Chemistry",
    icon: Eye,
    color: "text-purple-500 dark:text-purple-200",
    gradient:
      "from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Techniques for identifying and quantifying substances",
    comingSoon: true,
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    icon: Dna,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-rose-200 dark:from-red-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Chemical processes within living organisms",
    comingSoon: true,
  },
  {
    id: "inorganic",
    name: "Inorganic Chemistry",
    icon: Square,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-sky-100 to-blue-200 dark:from-sky-700 dark:to-blue-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Study of non-carbon elements and compounds",
    comingSoon: true,
  },
  {
    id: "organic",
    name: "Organic Chemistry",
    icon: SiMoleculer,
    color: "text-green-500 dark:text-green-200",
    gradient:
      "from-green-100 to-emerald-200 dark:from-green-700 dark:to-emerald-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Study of carbon-containing compounds",
    comingSoon: true,
  },
  {
    id: "physical",
    name: "Physical Chemistry",
    icon: Atom,
    color: "text-orange-500 dark:text-orange-200",
    gradient:
      "from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Study of chemical processes and energy",
    comingSoon: true,
  },
  {
    id: "theoretical",
    name: "Theoretical Chemistry",
    icon: Shapes,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient:
      "from-yellow-100 to-amber-200 dark:from-yellow-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "Mathematical models and computations in chemistry",
    comingSoon: true,
  },
];

const interactiveTools = [
    {
    id: "challenges",
    title: "Challenges",
    description: "Solve chemistry problems to test your skills.",
    href: "#",
    icon: SiLibreofficemath,
    cta: "Take Challenge",
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    comingSoon: true,
    span: "lg:col-span-1",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Get step-by-step solutions to chemistry problems.",
    href: "#",
    icon: Lightbulb,
    cta: "Start Solving",
    gradient: "from-purple-200 to-blue-200 dark:from-purple-600 dark:to-blue-600",
    comingSoon: true,
    span: "lg:col-span-2",
  },
  {
    id: "quiz-from-file",
    title: "Quiz from File",
    description: "Upload a file to generate a custom quiz.",
    href: "#",
    icon: FaFileUpload,
    cta: "Start Quiz",
    gradient: "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    comingSoon: true,
    span: "lg:col-span-1",
  },
    {
    id: "concept-explainer",
    title: "Concept Explainer",
    description: "Deep dive into complex chemistry concepts with interactive explanations.",
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

export default function Chemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-purple-200 sm:text-5xl md:text-6xl">
          Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental concepts and applications of chemistry, from basic principles to advanced topics.
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

      {/* Foundational Chemistry */}
      <div className="mt-12">
        <h2
          className={`mb-6 mt-8 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-cyan-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Foundational Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {foundationalTopics.map((topic) => (
            <div
              key={topic.id}
              className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
            >
              {topic.comingSoon && <ComingSoonTag />}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-lg p-2 ${
                      isColorful
                        ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/25`
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <topic.icon
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
            </div>
          ))}
        </div>
      </div>

      {/* Intermediate & Advanced Chemistry */}
      <div className="mt-12">
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
              : "text-gray-800 dark:text-gray-200"
          } `}
        >
          Intermediate & Advanced Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {intermediateAdvancedTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                  isColorful
                    ? `bg-gradient-to-br ${topic.gradient} ${topic.text}`
                    : "glass text-gray-800 dark:text-white"
                }`}
              >
                {topic.comingSoon && <ComingSoonTag />}
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
              </div>
            );
          })}
        </div>
      </div>

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