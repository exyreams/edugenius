import {
  Atom,
  BookOpen,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  Leaf,
  Lightbulb,
  Scale,
  Square,
  Thermometer,
  WavesIcon,
  Zap,
} from "lucide-react";
import { SiLibreofficemath, SiMoleculer } from "react-icons/si";
import { FaFileUpload } from "react-icons/fa";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface Topic {
  readonly id: string;
  readonly name: string;
  readonly icon: LucideIcon | IconType;
  readonly color?: string;
  readonly gradient: string;
  readonly text: string;
  readonly description: string;
}

export interface InteractiveTool {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: LucideIcon | IconType;
  readonly cta: string;
  readonly gradient: string;
  readonly comingSoon: boolean;
  readonly span: string;
}

// Validation helper for topic data
const validateTopic = (topic: Topic): boolean => {
  return !!(
    topic.id && 
    topic.name && 
    typeof topic.icon === 'function' && 
    topic.gradient && 
    topic.description
  );
};

export const foundationalTopics: readonly Topic[] = [
  {
    id: "introduction-to-chemistry",
    name: "Introduction to Chemistry",
    icon: BookOpen,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-sky-100 to-blue-200 dark:from-sky-700 dark:to-blue-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The science of matter and its transformations.",
  },
  {
    id: "atomic-structure-and-properties",
    name: "Atomic Structure",
    icon: Atom,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-rose-200 dark:from-red-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The basic building blocks of matter.",
  },
  {
    id: "chemical-reactions-and-stoichiometry",
    name: "Reactions & Stoichiometry",
    icon: Scale,
    color: "text-pink-500 dark:text-pink-200",
    gradient: "from-pink-100 to-rose-200 dark:from-pink-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The quantitative relationships in chemical reactions.",
  },
  {
    id: "acids-and-bases",
    name: "Acids and Bases",
    icon: Droplet,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient: "from-yellow-100 to-amber-200 dark:from-yellow-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The chemistry of pH, and proton donors and acceptors.",
  },
  {
    id: "thermochemistry",
    name: "Thermochemistry",
    icon: Thermometer,
    color: "text-orange-500 dark:text-orange-200",
    gradient: "from-orange-100 to-amber-200 dark:from-orange-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of heat energy associated with chemical reactions.",
  },
  {
    id: "gases-and-their-properties",
    name: "Gases",
    icon: WavesIcon,
    color: "text-sky-500 dark:text-sky-200",
    gradient: "from-sky-100 to-cyan-200 dark:from-sky-700 dark:to-cyan-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The behavior and properties of gases.",
  },
] as const;

export const intermediateAdvancedTopics: readonly Topic[] = [
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    icon: SiMoleculer,
    color: "text-green-500 dark:text-green-200",
    gradient: "from-green-100 to-emerald-200 dark:from-green-700 dark:to-emerald-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of carbon-containing compounds.",
  },
  {
    id: "inorganic-chemistry",
    name: "Inorganic Chemistry",
    icon: Square,
    color: "text-blue-500 dark:text-blue-200",
    gradient: "from-sky-100 to-blue-200 dark:from-sky-700 dark:to-blue-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of non-carbon elements and compounds.",
  },
  {
    id: "physical-chemistry",
    name: "Physical Chemistry",
    icon: Zap,
    color: "text-yellow-500 dark:text-yellow-200",
    gradient: "from-yellow-100 to-amber-200 dark:from-yellow-700 dark:to-amber-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of the physical basis of chemical systems.",
  },
  {
    id: "analytical-chemistry",
    name: "Analytical Chemistry",
    icon: Eye,
    color: "text-purple-500 dark:text-purple-200",
    gradient: "from-purple-100 to-fuchsia-200 dark:from-purple-700 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The science of obtaining, processing, and communicating information about the composition and structure of matter.",
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    icon: Dna,
    color: "text-red-500 dark:text-red-200",
    gradient: "from-red-100 to-rose-200 dark:from-red-700 dark:to-rose-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of chemical processes within and relating to living organisms.",
  },
  {
    id: "nuclear-chemistry",
    name: "Nuclear Chemistry",
    icon: Atom,
    color: "text-indigo-500 dark:text-indigo-200",
    gradient: "from-indigo-100 to-violet-200 dark:from-indigo-700 dark:to-violet-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of radioactive substances and nuclear reactions.",
  },
  {
    id: "environmental-chemistry",
    name: "Environmental Chemistry",
    icon: Leaf,
    color: "text-lime-500 dark:text-lime-200",
    gradient: "from-lime-100 to-green-200 dark:from-lime-700 dark:to-green-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of the chemical and biochemical phenomena that occur in natural places.",
  },
  {
    id: "polymer-chemistry",
    name: "Polymer Chemistry",
    icon: FlaskConical,
    color: "text-fuchsia-500 dark:text-fuchsia-200",
    gradient: "from-fuchsia-100 to-pink-200 dark:from-fuchsia-700 dark:to-pink-600",
    text: "text-gray-800 dark:text-gray-200",
    description: "The study of the synthesis and properties of polymers.",
  },
] as const;

export const interactiveTools: readonly InteractiveTool[] = [
  {
    id: "challenges",
    title: "Challenges",
    description: "Solve chemistry problems to test your skills.",
    href: "/chemistry/quiz/challenges",
    icon: SiLibreofficemath,
    cta: "Take Challenge",
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    comingSoon: true,
    span: "lg:col-span-1",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Upload images for step-by-step chemistry solutions.",
    href: "/chemistry/solve",
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
    href: "/chemistry/quiz/from-files",
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
    href: "/chemistry/concepts",
    icon: BookOpen,
    cta: "Learn More",
    gradient: "from-green-200 to-teal-200 dark:from-green-600 dark:to-teal-600",
    comingSoon: true,
    span: "lg:col-span-1",
  },
] as const;

// Runtime validation for data integrity
if (process.env.NODE_ENV === 'development') {
  foundationalTopics.forEach(topic => {
    if (!validateTopic(topic)) {
      console.warn(`Invalid foundational topic data:`, topic);
    }
  });
  
  intermediateAdvancedTopics.forEach(topic => {
    if (!validateTopic(topic)) {
      console.warn(`Invalid intermediate/advanced topic data:`, topic);
    }
  });
}