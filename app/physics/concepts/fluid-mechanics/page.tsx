import Link from "next/link";
import {
  AirVent,
  ChevronRight,
  Droplets,
  Gauge,
  Waves,
  Wind,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const topics = [
  {
    id: "compressible-flow-and-gas-dynamics",
    name: "Compressible Flow & Gas Dynamics",
    icon: Wind,
    gradient:
      "from-rose-200 to-orange-200 dark:from-rose-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description: "Study of high-speed flows and gas behavior",
    href: "/physics/concepts/fluid-mechanics/compressible-flow-and-gas-dynamics",
  },
  {
    id: "computational-and-experimental-fluid-mechanics",
    name: "Computational & Experimental Fluid Mechanics",
    icon: Gauge,
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Numerical simulations and experimental techniques in fluid mechanics",
    href: "/physics/concepts/fluid-mechanics/computational-and-experimental-fluid-mechanics",
  },
  {
    id: "fluid-dynamics",
    name: "Fluid Dynamics (Fluids in Motion)",
    icon: Waves,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Motion of fluids and forces acting on them",
    href: "/physics/concepts/fluid-mechanics/fluid-dynamics",
  },
  {
    id: "fluid-statics",
    name: "Fluid Statics (Fluids at Rest)",
    icon: Droplets,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description: "Behavior of fluids at rest and pressure distribution",
    href: "/physics/concepts/fluid-mechanics/fluid-statics",
  },
  {
    id: "viscous-flow-and-boundary-layers",
    name: "Viscous Flow & Boundary Layers",
    icon: AirVent,
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description: "Analysis of viscous effects and boundary layer phenomena",
    href: "/physics/concepts/fluid-mechanics/viscous-flow-and-boundary-layers",
  },
];

export default function FluidMechanics() {
  const breadcrumbItems = [
    { label: "Physics", href: "/physics" },
    {
      label: "Concepts",
      href: "/physics/",
    },
    {
      label: "Fluid Mechanics",
      href: "/physics/fluid-mechanics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-indigo-200 dark:to-purple-300">
          Fluid Mechanics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Explore the behavior of fluids at rest and in motion, from laminar
          flows to turbulent dynamics
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
          Understanding the Flow of Nature
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
