"use client";

import Link from "next/link";
import {
  Atom,
  Calculator,
  Check,
  ChevronRight,
  CircuitBoard,
  FunctionSquare,
  Lightbulb,
  Magnet,
  Shapes,
  SquareSigma,
  Thermometer,
} from "lucide-react";
import SymbolTrail from "@/components/SymbolTrails";

// Features Grid Data
const features = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: FunctionSquare,
    gradient:
      "from-indigo-200 to-purple-200 dark:from-indigo-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore foundational and advanced mathematical concepts, formulas, and problem-solving techniques.",
    href: "/mathematics",
  },
  {
    id: "physics",
    name: "Physics",
    icon: CircuitBoard,
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Dive into electromagnetism, mechanics, and modern physics with interactive tools and visualizations.",
    href: "/physics",
  },
  {
    id: "quizzes",
    name: "Quizzes",
    icon: SquareSigma,
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Test your knowledge with quizzes on various topics, from basic concepts to advanced theories.",
    href: "/quizzes",
  },
  {
    id: "solve",
    name: "Problem Solver",
    icon: Lightbulb,
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Upload problems and get step-by-step solutions or direct methods for solving them.",
    href: "/solve",
  },
];

// Popular Mathematics Topics
const popularMathTopics = [
  {
    id: "algebra",
    name: "Algebra",
    icon: Calculator,
    gradient: "from-red-200 to-rose-200 dark:from-red-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Master algebraic expressions, equations, and functions with detailed explanations and examples.",
    href: "/mathematics/concepts/algebra",
  },
  {
    id: "geometry",
    name: "Geometry",
    icon: Shapes,
    gradient: "from-teal-200 to-cyan-200 dark:from-teal-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore geometric shapes, properties, and theorems with interactive visualizations.",
    href: "/mathematics/concepts/geometry",
  },
  {
    id: "calculus",
    name: "Calculus",
    icon: SquareSigma,
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about limits, derivatives, integrals, and their applications in real-world problems.",
    href: "/mathematics/concepts/calculus",
  },
];

// Popular Physics Topics
const popularPhysicsTopics = [
  {
    id: "electromagnetism",
    name: "Electromagnetism",
    icon: Magnet,
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the principles of electric and magnetic fields, circuits, and electromagnetic waves.",
    href: "/physics/concepts/electromagnetism",
  },
  {
    id: "modern-physics",
    name: "Modern Physics",
    icon: Atom,
    gradient:
      "from-violet-200 to-fuchsia-200 dark:from-violet-600 dark:to-fuchsia-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore quantum theory, relativity, and contemporary physics with interactive tools.",
    href: "/physics/concepts/modern-physics",
  },
  {
    id: "thermodynamics",
    name: "Thermodynamics",
    icon: Thermometer,
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about heat, work, and energy transformations in physical systems.",
    href: "/physics/concepts/thermodynamics",
  },
];

// Stats Section Data
const stats = [
  { name: "Active Students", value: "10,000+" },
  { name: "Quizzes Generated", value: "50,000+" },
  { name: "Topics Covered", value: "100+" },
  { name: "Success Rate", value: "98.5%" },
];

// Pricing Section Data
const pricingTiers = [
  {
    id: "student",
    name: "Student",
    price: "Free",
    description: "Perfect for students who want to learn and practice.",
    features: [
      "Access to all topics",
      "Unlimited quizzes",
      "Step-by-step solutions",
    ],
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
  },
  {
    id: "personal",
    name: "Personal",
    price: "$3/month",
    description: "Ideal for individuals who want advanced features.",
    features: [
      "Everything in Student",
      "Priority support",
      "Downloadable resources",
    ],
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Contact Us",
    description: "Tailored solutions for schools and organizations.",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "Bulk discounts",
    ],
    gradient: "from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <SymbolTrail
          renderBuffer={30}
          rotationRange={25}
          symbolSize="24px"
          trailLength={1}
        />
        <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
          Welcome to the World of Learning
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore interactive lessons, quizzes, and problem-solving tools for
          mathematics and physics. Build your knowledge with professional
          resources and engaging content.
        </p>
        <div className="mt-6">
          <Link
            href="/mathematics"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <h2 className="mb-6 mt-16 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-purple-600 dark:to-pink-600">
        Stats
      </h2>
      <div className="">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.name}
              className={`rounded-2xl p-6 ${
                index === 0
                  ? "bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600"
                  : index === 1
                    ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
                    : index === 2
                      ? "bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600"
                      : "bg-gradient-to-br from-orange-200 to-red-200 dark:from-orange-600 dark:to-red-600"
              }`}
            >
              <p className="text-sm/6 font-medium text-gray-800 dark:text-gray-200">
                {stat.name}
              </p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <h2 className="mb-6 mt-12 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-purple-600 dark:to-pink-600">
        Features
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              href={feature.href}
              key={feature.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                    <Icon className="h-6 w-6 text-current" />
                  </div>
                  <h3 className="currentcolor text-lg font-semibold">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                  {feature.description}
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

      {/* Pricing Section */}
      <div className="mt-16">
        <h2 className="mb-6 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-purple-600 dark:to-pink-600">
          Pricing Plans
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl bg-gradient-to-br ${tier.gradient} p-6`}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {tier.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">
                {tier.price}
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-200">
                {tier.description}
              </p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200"
                  >
                    <Check className="h-4 w-4 text-gray-800 dark:text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={tier.id === "enterprise" ? "/contact" : "/get-started"}
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100"
                >
                  {tier.id === "enterprise" ? "Contact Us" : "Get Started"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Mathematics Topics Section */}
      <div className="mt-16">
        <h2 className="mb-6 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-green-600 dark:to-emerald-600">
          Popular Mathematics Topics
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularMathTopics.map((topic) => {
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
                      Learn More
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
      </div>

      {/* Popular Physics Topics Section */}
      <div className="mt-16">
        <h2 className="mb-6 bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-center text-2xl font-bold text-transparent dark:from-blue-600 dark:to-cyan-600">
          Popular Physics Topics
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularPhysicsTopics.map((topic) => {
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
                      Learn More
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
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-sky-200 to-blue-200 p-8 text-center dark:from-sky-600 dark:to-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Ready to Dive In?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Start exploring our interactive lessons, quizzes, and problem-solving
          tools today. Build your knowledge with professional resources and
          engaging content.
        </p>
        <div className="mt-6">
          <Link
            href="/mathematics"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-emerald-200 p-8 text-center dark:from-green-900 dark:to-emerald-800">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-gray-800 dark:text-white   sm:text-4xl lg:col-span-7">
            Want product news and updates? Sign up for our newsletter.
          </h2>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-emerald-300 px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-green-400 placeholder:text-green-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-800 dark:bg-emerald-400 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-emerald-500 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-left text-sm leading-6 text-gray-700 dark:text-gray-300">
              Your privacy matters to us. read our{" "}
              <a
                href="#"
                className="cursor-not-allowed font-semibold text-gray-600 dark:text-gray-200"
              >
                Privacy&nbsp;Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Unlock the Power of Knowledge
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
