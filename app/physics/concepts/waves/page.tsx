import Link from "next/link";
import {
  Atom,
  ChevronRight,
  RadioTower,
  Satellite,
  Waves,
  Wind,
} from "lucide-react";
import { GiVibratingBall } from "react-icons/gi";
import Breadcrumb from "@/components/Breadcrumb";

const topics = [
  {
    id: "applied-wave-mechanics",
    name: "Applied Wave Mechanics",
    icon: RadioTower,
    gradient:
      "from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Practical applications of wave mechanics in engineering and technology",
    href: "/physics/concepts/waves/applied-wave-mechanics",
  },
  {
    id: "basic-properties-of-waves",
    name: "Basic Properties of Waves",
    icon: Waves,
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Fundamental characteristics of waves: amplitude, frequency, wavelength",
    href: "/physics/concepts/waves/basic-properties-of-waves",
  },
  {
    id: "electromagnetic-waves",
    name: "Electromagnetic Waves",
    icon: Satellite,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Propagation of light, radio waves, and other electromagnetic radiation",
    href: "/physics/concepts/waves/electromagnetic-waves",
  },
  {
    id: "mechanical-waves",
    name: "Mechanical Waves",
    icon: GiVibratingBall,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Waves that require a medium, such as sound and water waves",
    href: "/physics/concepts/waves/mechanical-waves",
  },
  {
    id: "quantum-waves",
    name: "Quantum Waves",
    icon: Atom,
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Wave-particle duality and quantum wave functions",
    href: "/physics/concepts/waves/quantum-waves",
  },
  {
    id: "wave-behavior-and-phenomena",
    name: "Wave Behavior & Phenomena",
    icon: Wind,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Interference, diffraction, and other wave phenomena",
    href: "/physics/concepts/waves/wave-behavior-and-phenomena",
  },
];

export default function Wave() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Wave",
      href: "/physics/concepts/wave",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Wave Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Understanding the nature of waves: from mechanical vibrations to
          quantum wave functions
        </p>
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Topic Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {topics.map((topic) => {
          const Icon = topic.icon;
          return (
            <Link
              href={topic.href}
              key={topic.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${topic.gradient} ${topic.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                    <Icon className="h-6 w-6 text-current" />
                  </div>
                  <h3 className="currentcolor text-lg font-semibold">
                    {topic.name}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                  {topic.description}
                </p>
                <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                    Explore Now
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
                </div>
              </div>

              {/* Animated background element */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
            </Link>
          );
        })}
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Study of Oscillations and Wave Phenomena
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
