"use client";

import {
  Atom,
  ChevronRight,
  Cog,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  FlaskRound,
  Leaf,
  Scale,
  Shapes,
  Square,
  Thermometer,
  WavesIcon,
  Zap,
} from "lucide-react";
import { FaFileUpload } from "react-icons/fa";
import { SiLibreofficemath, SiMoleculer } from "react-icons/si";

// Helper function to render the "Coming Soon" tag
const ComingSoonTag = () => (
  <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-xs font-semibold text-black">
    Coming Soon
  </span>
);

const mainBranches = [
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

const subfields = [
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

export default function Chemistry() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-red-300 dark:to-purple-200 sm:text-5xl md:text-6xl">
          Intermediate & Advanced Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the fundamental concepts and applications of chemistry, from
          basic principles to advanced topics.
        </p>
      </div>

      {/* Main Branches of Chemistry */}
      <div className="mt-12">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Main Branches of Chemistry
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mainBranches.map((branch) => {
            const Icon = branch.icon;
            return (
              <div
                key={branch.id}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${branch.gradient} ${branch.text} p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
              >
                {branch.comingSoon && <ComingSoonTag />}
                <div className="mt-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg bg-black/10 p-2 ${branch.text} backdrop-blur-sm dark:bg-black/25`}
                    >
                      <Icon className={`h-5 w-5 ${branch.color}`} />
                    </div>
                    <h4 className={`font-medium ${branch.text} mt-2`}>
                      {branch.name}
                    </h4>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                      {branch.description}
                    </p>
                  </div>
                </div>
                {/* Animated background element */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Subfields & Specialized Areas */}
      <div className="mt-16">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Subfields & Specialized Areas
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {subfields.map((field) => {
            const Icon = field.icon;
            return (
              <div
                key={field.id}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${field.gradient} ${field.text} p-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
              >
                {field.comingSoon && <ComingSoonTag />}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg bg-black/10 p-2 ${field.text} backdrop-blur-sm dark:bg-black/25`}
                    >
                      <Icon className={`h-5 w-5 ${field.color}`} />
                    </div>
                    <h4 className={`font-medium ${field.text} mt-2`}>
                      {field.name}
                    </h4>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                      {field.description}
                    </p>
                  </div>
                </div>
                {/* Animated background element */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-gray-200">
          Quizzes
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Challenges */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:from-sky-600 dark:to-blue-600">
            <ComingSoonTag />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                  <SiLibreofficemath className="h-6 w-6 text-current" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Challenges
                </h3>
              </div>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                Solve chemistry problems to test your skills
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                  Take Challenge
                </span>
                <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
              </div>
            </div>
            {/* Animated background element */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
          </div>
          {/* Quiz from File */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-200 to-amber-200 p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:from-yellow-600 dark:to-amber-600">
            <ComingSoonTag />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                  <FaFileUpload className="h-6 w-6 text-current" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Quiz from File
                </h3>
              </div>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                Upload a file to generate a custom quiz
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                  Start Quiz
                </span>
                <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
              </div>
            </div>
            {/* Animated background element */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
          </div>
        </div>
      </div>
      {/* Problem Solver Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-gray-200">
          Solve
        </h2>{" "}
        {/* Added Solve Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-purple-200 to-blue-200 p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:from-purple-600 dark:to-blue-700">
            <ComingSoonTag />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FlaskRound className="h-8 w-8 text-purple-700 dark:text-purple-200" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Problem Solver
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Get step-by-step solutions to chemistry problems
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Start Solving
                </span>
                <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-gray-200" />
              </div>
            </div>
            {/* Animated background element */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Discovering the Building Blocks of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
