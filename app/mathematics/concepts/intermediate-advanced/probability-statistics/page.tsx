// import Link from "next/link";
// import {
//   BarChart,
//   Calculator,
//   ChevronRight,
//   CircleDashed,
//   Clock,
//   Divide,
//   Gauge,
//   Grid,
//   LineChart,
//   Percent,
//   PieChart,
//   Sigma,
//   Sliders,
//   Target,
//   TrendingUp,
//   User,
// } from "lucide-react";
// import { FaBezierCurve } from "react-icons/fa6";
// import { MdAutoGraph } from "react-icons/md";
// import Breadcrumb from "@/components/Breadcrumb";
//
// const formulas = [
//   {
//     id: "binomial-distribution",
//     name: "Binomial Distribution",
//     icon: FaBezierCurve,
//     gradient:
//       "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Learn about the binomial distribution and its applications.",
//   },
//   {
//     id: "combinations-and-permutations",
//     name: "Combinations and Permutations",
//     icon: Grid,
//     gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Explore combinations and permutations and how to calculate them.",
//   },
//   {
//     id: "confidence-intervals",
//     name: "Confidence Intervals",
//     icon: Gauge,
//     gradient:
//       "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand confidence intervals and how they are used in estimation.",
//   },
//   {
//     id: "exponential-distribution",
//     name: "Exponential Distribution",
//     icon: TrendingUp,
//     gradient:
//       "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Learn about the exponential distribution and its properties.",
//   },
//   {
//     id: "geometric-distribution",
//     name: "Geometric Distribution",
//     icon: CircleDashed,
//     gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Explore the geometric distribution and its use in probability.",
//   },
//   {
//     id: "geometric-mean",
//     name: "Geometric Mean",
//     icon: Divide,
//     gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Understand the geometric mean and its applications.",
//   },
//   {
//     id: "hypergeometric-distribution",
//     name: "Hypergeometric Distribution",
//     icon: MdAutoGraph,
//     gradient:
//       "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Learn about the hypergeometric distribution and when to apply it.",
//   },
//   {
//     id: "inferential-statistics",
//     name: "Inferential Statistics",
//     icon: BarChart,
//     gradient:
//       "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Explore the concepts and methods of inferential statistics.",
//   },
//   {
//     id: "measures-of-central-tendency-for-grouped-data",
//     name: "Measures of Central Tendency for Grouped Data",
//     icon: Sliders,
//     gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate measures of central tendency (mean, median, mode) for grouped data.",
//   },
//   {
//     id: "measures-of-central-tendency-for-ungrouped-data",
//     name: "Measures of Central Tendency for Ungrouped Data",
//     icon: Sliders,
//     gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate measures of central tendency (mean, median, mode) for ungrouped data.",
//   },
//   {
//     id: "measures-of-dispersion-for-ungrouped-data",
//     name: "Measures of Dispersion for Ungrouped Data",
//     icon: Sigma,
//     gradient:
//       "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Calculate measures of dispersion (range, variance, standard deviation) for ungrouped data.",
//   },
//   {
//     id: "measures-of-position-for-ungrouped-data",
//     name: "Measures of Position for Ungrouped Data",
//     icon: Target,
//     gradient:
//       "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand and calculate measures of position (percentiles, quartiles) for ungrouped data.",
//   },
//   {
//     id: "normal-distribution",
//     name: "Normal Distribution",
//     icon: FaBezierCurve,
//     gradient:
//       "from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Learn about the normal distribution and its characteristics.",
//   },
//   {
//     id: "poisson-distribution",
//     name: "Poisson Distribution",
//     icon: Clock,
//     gradient: "from-rose-200 to-red-200 dark:from-rose-600 dark:to-red-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Explore the poisson distribution and its applications for rare events.",
//   },
//   {
//     id: "probability",
//     name: "Probability",
//     icon: Percent,
//     gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Explore the fundamentals of probability theory.",
//   },
//   {
//     id: "quantile-calculation-for-grouped-data",
//     name: "Quantile Calculation for Grouped Data",
//     icon: PieChart,
//     gradient:
//       "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
//     text: "text-gray-800 dark:text-white",
//     description: "Calculate quantiles for grouped data.",
//   },
//   {
//     id: "sample-size",
//     name: "Sample Size",
//     icon: User,
//     gradient:
//       "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand how to determine the appropriate sample size for your studies.",
//   },
//   {
//     id: "statistical-moments",
//     name: "Statistical Moments",
//     icon: LineChart,
//     gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Explore statistical moments, including mean, variance, skewness, and kurtosis.",
//   },
//   {
//     id: "students-t-distribution",
//     name: "Student's t-Distribution",
//     icon: Calculator,
//     gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
//     text: "text-gray-800 dark:text-white",
//     description:
//       "Understand the Student's t-distribution and its use in statistical inference.",
//   },
// ];
//
// export default function ProbabilityStatisticsFormulas() {
//   const breadcrumbItems = [
//     { label: "Mathematics", href: "/mathematics" },
//     { label: "Formulas", href: "/mathematics/formulas" },
//     {
//       label: "Probability & Statistics",
//       href: "/mathematics/formulas/probability-statistics",
//     },
//   ];
//
//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="mb-12 space-y-6 text-center">
//         <h1 className="bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl dark:from-blue-300 dark:to-cyan-400">
//           Probability & Statistics
//         </h1>
//         <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300">
//           Explore the principles of probability and statistics to analyze data
//           and make informed decisions.
//         </p>
//       </div>
//
//       <Breadcrumb items={breadcrumbItems} />
//
//       {/* Formula Grid */}
//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {formulas.map((formula) => (
//           <Link
//             href={`/mathematics/formulas/probability-statistics/${formula.id}`}
//             key={formula.id}
//             className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${formula.gradient} ${formula.text} p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30`}
//           >
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
//                   <formula.icon className="h-6 w-6 text-current" />
//                 </div>
//                 <h3 className="currentcolor text-lg font-semibold">
//                   {formula.name}
//                 </h3>
//               </div>
//               <p className="text-sm leading-6 text-gray-600 dark:text-gray-200">
//                 {formula.description}
//               </p>
//               <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
//                 <span className="text-sm font-medium text-gray-700 dark:text-white/80">
//                   Explore Concept
//                 </span>
//                 <ChevronRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-1 dark:text-white/80" />
//               </div>
//             </div>
//
//             {/* Animated background element */}
//             <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-black/5 transition-all duration-500 group-hover:-right-4 group-hover:-top-4 dark:bg-white/10" />
//           </Link>
//         ))}
//       </div>
//
//       {/* Decorative Section Divider */}
//       <div className="mt-16 flex items-center justify-center space-x-4">
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//         <span className="text-sm italic text-gray-700 dark:text-gray-200">
//           Data, Analysis, and Insights
//         </span>
//         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
//       </div>
//     </div>
//   );
// }

// v2

"use client";

import Link from "next/link";
import {
  BarChart,
  Calculator,
  ChevronRight,
  CircleDashed,
  Clock,
  Divide,
  Gauge,
  Grid,
  LineChart,
  Percent,
  PieChart,
  Sigma,
  Sliders,
  Target,
  TrendingUp,
  User,
} from "lucide-react";
import { FaBezierCurve } from "react-icons/fa6"; // Corrected import
import { MdAutoGraph } from "react-icons/md";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import ColorToggle from "@/components/ColorToggle";

const formulas = [
  {
    id: "binomial-distribution",
    name: "Binomial Distribution",
    icon: FaBezierCurve, // Corrected: using component, not JSX
    gradient:
      "from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600",
    text: "text-gray-800 dark:text-white",
    description: "Learn about the binomial distribution and its applications.",
  },
  {
    id: "combinations-and-permutations",
    name: "Combinations and Permutations",
    icon: Grid, // Corrected: using component, not JSX
    gradient: "from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore combinations and permutations and how to calculate them.",
  },
  {
    id: "confidence-intervals",
    name: "Confidence Intervals",
    icon: Gauge, // Corrected: using component, not JSX
    gradient:
      "from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand confidence intervals and how they are used in estimation.",
  },
  {
    id: "exponential-distribution",
    name: "Exponential Distribution",
    icon: TrendingUp, // Corrected: using component, not JSX
    gradient:
      "from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description: "Learn about the exponential distribution and its properties.",
  },
  {
    id: "geometric-distribution",
    name: "Geometric Distribution",
    icon: CircleDashed, // Corrected: using component, not JSX
    gradient: "from-red-200 to-orange-200 dark:from-red-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore the geometric distribution and its use in probability.",
  },
  {
    id: "geometric-mean",
    name: "Geometric Mean",
    icon: Divide, // Corrected: using component, not JSX
    gradient: "from-pink-200 to-rose-200 dark:from-pink-600 dark:to-rose-600",
    text: "text-gray-800 dark:text-white",
    description: "Understand the geometric mean and its applications.",
  },
  {
    id: "hypergeometric-distribution",
    name: "Hypergeometric Distribution",
    icon: MdAutoGraph, // Corrected: using component, not JSX
    gradient:
      "from-indigo-200 to-blue-200 dark:from-indigo-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Learn about the hypergeometric distribution and when to apply it.",
  },
  {
    id: "inferential-statistics",
    name: "Inferential Statistics",
    icon: BarChart, // Corrected: using component, not JSX
    gradient:
      "from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600",
    text: "text-gray-800 dark:text-white",
    description: "Explore the concepts and methods of inferential statistics.",
  },
  {
    id: "measures-of-central-tendency-for-grouped-data",
    name: "Measures of Central Tendency for Grouped Data",
    icon: Sliders, // Corrected: using component, not JSX
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate measures of central tendency (mean, median, mode) for grouped data.",
  },
  {
    id: "measures-of-central-tendency-for-ungrouped-data",
    name: "Measures of Central Tendency for Ungrouped Data",
    icon: Sliders, // Corrected: using component, not JSX
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate measures of central tendency (mean, median, mode) for ungrouped data.",
  },
  {
    id: "measures-of-dispersion-for-ungrouped-data",
    name: "Measures of Dispersion for Ungrouped Data",
    icon: Sigma, // Corrected: using component, not JSX
    gradient:
      "from-amber-200 to-orange-200 dark:from-amber-600 dark:to-orange-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Calculate measures of dispersion (range, variance, standard deviation) for ungrouped data.",
  },
  {
    id: "measures-of-position-for-ungrouped-data",
    name: "Measures of Position for Ungrouped Data",
    icon: Target, // Corrected: using component, not JSX
    gradient:
      "from-violet-200 to-purple-200 dark:from-violet-600 dark:to-purple-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand and calculate measures of position (percentiles, quartiles) for ungrouped data.",
  },
  {
    id: "normal-distribution",
    name: "Normal Distribution",
    icon: FaBezierCurve, // Corrected: using component, not JSX
    gradient:
      "from-fuchsia-200 to-pink-200 dark:from-fuchsia-600 dark:to-pink-600",
    text: "text-gray-800 dark:text-white",
    description: "Learn about the normal distribution and its characteristics.",
  },
  {
    id: "poisson-distribution",
    name: "Poisson Distribution",
    icon: Clock, // Corrected: using component, not JSX
    gradient: "from-rose-200 to-red-200 dark:from-rose-600 dark:to-red-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore the poisson distribution and its applications for rare events.",
  },
  {
    id: "probability",
    name: "Probability",
    icon: Percent, // Corrected: using component, not JSX
    gradient: "from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600",
    text: "text-gray-800 dark:text-white",
    description: "Explore the fundamentals of probability theory.",
  },
  {
    id: "quantile-calculation-for-grouped-data",
    name: "Quantile Calculation for Grouped Data",
    icon: PieChart, // Corrected: using component, not JSX
    gradient:
      "from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600",
    text: "text-gray-800 dark:text-white",
    description: "Calculate quantiles for grouped data.",
  },
  {
    id: "sample-size",
    name: "Sample Size",
    icon: User, // Corrected: using component, not JSX
    gradient:
      "from-orange-200 to-amber-200 dark:from-orange-600 dark:to-amber-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand how to determine the appropriate sample size for your studies.",
  },
  {
    id: "statistical-moments",
    name: "Statistical Moments",
    icon: LineChart, // Corrected: using component, not JSX
    gradient: "from-cyan-200 to-sky-200 dark:from-cyan-600 dark:to-sky-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Explore statistical moments, including mean, variance, skewness, and kurtosis.",
  },
  {
    id: "students-t-distribution",
    name: "Student's t-Distribution",
    icon: Calculator, // Corrected: using component, not JSX
    gradient: "from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600",
    text: "text-gray-800 dark:text-white",
    description:
      "Understand the Student's t-distribution and its use in statistical inference.",
  },
];

export default function ProbabilityStatisticsFormulas() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/formulas" },
    {
      label: "Probability & Statistics",
      href: "/mathematics/formulas/probability-statistics",
    },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-300 dark:to-cyan-400 sm:text-5xl md:text-6xl">
          Probability & Statistics
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the principles of probability and statistics to analyze data
          and make informed decisions.
        </p>
      </div>
      <ColorToggle onChange={setIsColorful} initialState={true} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Formula Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formulas.map((formula) => {
          const Icon = formula.icon;
          return (
            <Link
              href={`/mathematics/concepts/probability-statistics/${formula.id}`}
              key={formula.id}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30 ${
                isColorful
                  ? `bg-gradient-to-br ${formula.gradient} ${formula.text}`
                  : "glass text-gray-800 dark:text-white"
              }`}
            >
              <div className="relative z-10 space-y-4">
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
                          : "text-gray-800 dark:text-white"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-semibold ${
                      isColorful
                        ? "currentcolor"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {formula.name}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-6 ${
                    isColorful
                      ? "text-gray-600 dark:text-gray-200"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {formula.description}
                </p>
                <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                  <span
                    className={`text-sm font-medium ${
                      isColorful
                        ? "text-gray-700 dark:text-white/80"
                        : "text-gray-700 dark:text-white/80"
                    }`}
                  >
                    Explore Concept
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

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Data, Analysis, and Insights
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}
