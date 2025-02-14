import Link from "next/link";
import {
  Atom,
  ChevronRight,
  Droplets,
  Move,
  Orbit,
  Rotate3D,
  Scale,
  Waves,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const topics = [
  {
    id: "dynamics",
    name: "Dynamics (Motion Under Forces)",
    icon: Orbit,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Motion of objects under the influence of forces",
    href: "/physics/concepts/mechanics/dynamics",
  },
  {
    id: "fluid-and-continuum-mechanics",
    name: "Fluid & Continuum Mechanics",
    icon: Droplets,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Behavior of fluids and continuous materials",
    href: "/physics/concepts/mechanics/fluid-and-continuum-mechanics",
  },
  {
    id: "kinematics",
    name: "Kinematics (Motion Without Forces)",
    icon: Move,
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Motion of objects without considering the forces",
    href: "/physics/concepts/mechanics/kinematics",
  },
  {
    id: "oscillations-and-waves",
    name: "Oscillations & Waves",
    icon: Waves,
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Periodic motion and wave phenomena",
    href: "/physics/concepts/mechanics/oscillations-and-waves",
  },
  {
    id: "relativistic-and-quantum-mechanics",
    name: "Relativistic & Quantum Mechanics (Modern Mechanics)",
    icon: Atom,
    gradient: "from-pink-200 to-red-200 dark:from-pink-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description: "Modern mechanics: relativity and quantum theory",
    href: "/physics/concepts/mechanics/relativistic-and-quantum-mechanics",
  },
  {
    id: "rotational-mechanics",
    name: "Rotational Mechanics",
    icon: Rotate3D,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Motion of rotating objects and torque",
    href: "/physics/concepts/mechanics/rotational-mechanics",
  },
  {
    id: "statics",
    name: "Statics (Forces in Equilibrium)",
    icon: Scale,
    gradient:
      "from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Forces in equilibrium and analysis of stationary systems",
    href: "/physics/concepts/mechanics/statics",
  },
];

export default function Mechanics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Mechanics",
      href: "/physics/concepts/mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          The foundation of physics: from classical motion to modern theories of
          relativity and quantum mechanics
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
          The Study of Motion and Forces
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
