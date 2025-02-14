import Link from "next/link";
import {
  Atom,
  ChevronRight,
  FlaskConical,
  Gauge,
  Globe,
  Layers,
  Orbit,
  Radiation,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const topics = [
  {
    id: "atomic-and-molecular-physics",
    name: "Atomic & Molecular Physics",
    icon: Atom,
    gradient:
      "from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Study of atoms, molecules, and their interactions",
    href: "/physics/concepts/modern-physics/atomic-and-molecular-physics",
  },
  {
    id: "condensed-matter-physics",
    name: "Condensed Matter Physics",
    icon: Layers,
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Properties of solids and liquids at microscopic scales",
    href: "/physics/concepts/modern-physics/condensed-matter-physics",
  },
  {
    id: "cosmology-and-astrophysics",
    name: "Cosmology & Astrophysics",
    icon: Globe,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "The universe, galaxies, and celestial phenomena",
    href: "/physics/concepts/modern-physics/cosmology-and-astrophysics",
  },
  {
    id: "nuclear-physics",
    name: "Nuclear Physics",
    icon: Radiation,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Structure and behavior of atomic nuclei",
    href: "/physics/concepts/modern-physics/nuclear-physics",
  },
  {
    id: "particle-physics-and-standard-model",
    name: "Particle Physics & Standard Model",
    icon: FlaskConical,
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Fundamental particles and their interactions",
    href: "/physics/concepts/modern-physics/particle-physics-and-standard-model",
  },
  {
    id: "quantum-mechanics",
    name: "Quantum Mechanics",
    icon: Orbit,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Behavior of matter and energy at the quantum scale",
    href: "/physics/concepts/modern-physics/quantum-mechanics",
  },
  {
    id: "relativity",
    name: "Relativity",
    icon: Gauge,
    gradient: "from-pink-200 to-red-200 dark:from-pink-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description: "Einstein's theories of special and general relativity",
    href: "/physics/concepts/modern-physics/relativity",
  },
];

export default function ModernPhysics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Modern Physics",
      href: "/physics/modern-physics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Modern Physics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Exploring the frontiers of physics: from the quantum realm to the vast
          cosmos
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
          The Science of the Very Small and the Very Large
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
