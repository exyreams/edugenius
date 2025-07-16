"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

/**
 * @description Array of gradient color strings for practice problems.
 */
const problemColors = [
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
  "from-indigo-100 to-violet-200 dark:from-indigo-800 dark:to-violet-700",
  "from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-700",
];

/**
 * @component ProbabilityTheory
 * @description A client component that renders a page explaining discrete probability theory.
 * @returns {JSX.Element} The rendered ProbabilityTheory page.
 */
export default function ProbabilityTheory() {
  /**
   * @description Breadcrumb items for navigation.
   */
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate & Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Discrete Mathematics",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math",
    },
    {
      label: "Probability Theory",
      href: "/mathematics/concepts/intermediate-advanced/discrete-math/probability-theory",
    },
  ];

  /**
   * @state isColorful
   * @description State variable to toggle between colorful and grayscale themes.
   */
  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-300 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  const solutionScrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-yellow-200 scrollbar-thumb-yellow-400 dark:scrollbar-track-yellow-600 dark:scrollbar-thumb-yellow-600"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-600";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title and Description */}
      <div className="mb-12 space-y-6 text-center">
        <h1
          className={`bg-gradient-to-r from-yellow-700 to-amber-800 bg-clip-text text-4xl font-bold text-transparent dark:from-yellow-300 dark:to-amber-400 md:text-5xl lg:text-6xl`}
        >
          Discrete Probability Theory
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore probability concepts in discrete mathematics and their applications in computer science.
        </p>
      </div>

      {/* Color Toggle */}
      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Concepts */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-blue-300 dark:to-purple-300`}
          >
            Basic Probability Concepts
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              Discrete probability deals with events that have countable outcomes.
            </p>
            <div
              className={`mt-4 rounded-lg p-4 ${
                isColorful
                  ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="mb-2"><strong>Key Definitions:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Sample Space (S):</strong> Set of all possible outcomes</li>
                <li><strong>Event (E):</strong> Subset of the sample space</li>
                <li><strong>Probability:</strong> <InlineMath math="P(E) = \frac{|E|}{|S|}" /> for equally likely outcomes</li>
                <li><strong>Properties:</strong> <InlineMath math="0 \leq P(E) \leq 1" /> and <InlineMath math="P(S) = 1" /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Probability Rules */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-600 dark:to-amber-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-yellow-300 dark:to-amber-300`}
          >
            Probability Rules and Operations
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Addition Rule */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Addition Rule
                </h3>
                <p className="mt-2 text-sm">For any two events A and B:</p>
                <BlockMath math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
                <p className="mt-2 text-sm">For mutually exclusive events:</p>
                <BlockMath math="P(A \cup B) = P(A) + P(B)" />
              </div>

              {/* Multiplication Rule */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Multiplication Rule
                </h3>
                <p className="mt-2 text-sm">For any two events A and B:</p>
                <BlockMath math="P(A \cap B) = P(A) \cdot P(B|A)" />
                <p className="mt-2 text-sm">For independent events:</p>
                <BlockMath math="P(A \cap B) = P(A) \cdot P(B)" />
              </div>

              {/* Complement Rule */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Complement Rule
                </h3>
                <p className="mt-2 text-sm">For any event A:</p>
                <BlockMath math="P(A^c) = 1 - P(A)" />
                <p className="mt-2 text-sm">where <InlineMath math="A^c" /> is the complement of A.</p>
              </div>

              {/* Conditional Probability */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-yellow-600 dark:text-yellow-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Conditional Probability
                </h3>
                <p className="mt-2 text-sm">Probability of A given B:</p>
                <BlockMath math="P(A|B) = \frac{P(A \cap B)}{P(B)}" />
                <p className="mt-2 text-sm">provided <InlineMath math="P(B) > 0" />.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Discrete Random Variables */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-purple-200 to-violet-200 dark:from-purple-600 dark:to-violet-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-purple-300 dark:to-violet-300`}
          >
            Discrete Random Variables
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>
              A discrete random variable takes on countable values with specific probabilities.
            </p>
            <div className="mt-4 space-y-4">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Probability Mass Function (PMF)
                </h3>
                <p className="mt-2 text-sm">For discrete random variable X:</p>
                <BlockMath math="P(X = x) = p(x)" />
                <p className="mt-2 text-sm">Properties:</p>
                <ul className="mt-1 text-sm list-disc list-inside">
                  <li><InlineMath math="p(x) \geq 0" /> for all x</li>
                  <li><InlineMath math="\sum_x p(x) = 1" /></li>
                </ul>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-purple-600 dark:text-purple-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Expected Value and Variance
                </h3>
                <p className="mt-2 text-sm">Expected value (mean):</p>
                <BlockMath math="E[X] = \mu = \sum_x x \cdot p(x)" />
                <p className="mt-2 text-sm">Variance:</p>
                <BlockMath math="Var(X) = \sigma^2 = E[X^2] - (E[X])^2" />
                <p className="mt-2 text-sm">Standard deviation:</p>
                <BlockMath math="\sigma = \sqrt{Var(X)}" />
              </div>
            </div>
          </div>
        </div>

        {/* Common Distributions */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-600 dark:to-teal-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-emerald-300 dark:to-teal-300`}
          >
            Common Discrete Distributions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Bernoulli */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Bernoulli Distribution
                </h3>
                <p className="mt-2 text-sm">Single trial with success probability p:</p>
                <BlockMath math="P(X = 1) = p, \quad P(X = 0) = 1-p" />
                <p className="mt-2 text-sm">Mean: p, Variance: p(1-p)</p>
              </div>

              {/* Binomial */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Binomial Distribution
                </h3>
                <p className="mt-2 text-sm">n independent trials, success probability p:</p>
                <BlockMath math="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}" />
                <p className="mt-2 text-sm">Mean: np, Variance: np(1-p)</p>
              </div>

              {/* Geometric */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Geometric Distribution
                </h3>
                <p className="mt-2 text-sm">Number of trials until first success:</p>
                <BlockMath math="P(X = k) = (1-p)^{k-1} p" />
                <p className="mt-2 text-sm">Mean: 1/p, Variance: (1-p)/p²</p>
              </div>

              {/* Poisson */}
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-emerald-600 dark:text-emerald-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Poisson Distribution
                </h3>
                <p className="mt-2 text-sm">Events occurring at rate λ:</p>
                <BlockMath math="P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}" />
                <p className="mt-2 text-sm">Mean: λ, Variance: λ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-600 dark:to-pink-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-rose-300 dark:to-pink-300`}
          >
            Applications in Computer Science
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Algorithm Analysis
                </h3>
                <p className="mt-2 text-sm">
                  Probabilistic analysis of randomized algorithms and expected running times.
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Network Reliability
                </h3>
                <p className="mt-2 text-sm">
                  Modeling packet loss, network failures, and system reliability.
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Machine Learning
                </h3>
                <p className="mt-2 text-sm">
                  Probabilistic models, Bayesian inference, and classification algorithms.
                </p>
              </div>

              <div
                className={`rounded-lg p-4 ${
                  isColorful
                    ? "bg-black/5 backdrop-blur-sm dark:bg-black/20"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    isColorful
                      ? "text-rose-600 dark:text-rose-300"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Cryptography
                </h3>
                <p className="mt-2 text-sm">
                  Random number generation, key distribution, and security analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div
          className={`rounded-lg p-6 shadow-md ${
            isColorful
              ? "bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-600 dark:to-blue-600"
              : "glass dark:bg-gray-800"
          }`}
        >
          <h2
            className={`text-2xl font-semibold ${
              isColorful
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                : "text-gray-800 dark:text-gray-200"
            } dark:from-cyan-300 dark:to-blue-300 `}
          >
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                problem: "\\text{A fair die is rolled. Find } P(\\text{even number})",
                solution: "P = \\frac{3}{6} = \\frac{1}{2}",
              },
              {
                problem: "\\text{Find } P(A \\cup B) \\text{ if } P(A) = 0.3, P(B) = 0.4, P(A \\cap B) = 0.1",
                solution: "P(A \\cup B) = 0.3 + 0.4 - 0.1 = 0.6",
              },
              {
                problem: "\\text{Binomial: } n = 5, p = 0.2. \\text{ Find } P(X = 2)",
                solution: "P(X = 2) = \\binom{5}{2}(0.2)^2(0.8)^3 = 0.2048",
              },
              {
                problem: "\\text{Geometric: } p = 0.25. \\text{ Find } P(X = 4)",
                solution: "P(X = 4) = (0.75)^3(0.25) = 0.105",
              },
              {
                problem: "\\text{Poisson: } \\lambda = 3. \\text{ Find } P(X = 2)",
                solution: "P(X = 2) = \\frac{3^2 e^{-3}}{2!} = \\frac{9e^{-3}}{2} \\approx 0.224",
              },
              {
                problem: "\\text{Find } E[X] \\text{ for Bernoulli with } p = 0.3",
                solution: "E[X] = p = 0.3",
              },
              {
                problem: "\\text{Cards: Find } P(\\text{King}|\\text{Face card})",
                solution: "P = \\frac{4}{12} = \\frac{1}{3}",
              },
              {
                problem: "\\text{Binomial: } n = 10, p = 0.1. \\text{ Find } E[X] \\text{ and } Var(X)",
                solution: "E[X] = 1, Var(X) = 0.9",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 transition-all ${
                  isColorful
                    ? `bg-gradient-to-br ${
                        problemColors[index % problemColors.length]
                      } dark:text-white`
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white "
                } hover:shadow-lg `}
              >
                <div>
                  <span
                    className={`text-sm font-medium text-gray-700 dark:text-gray-300`}
                  >
                    Problem {index + 1}
                  </span>

                  <div
                    className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}
                  >
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3">
                  <summary
                    className={`flex cursor-pointer items-center text-sm font-medium  ${
                      isColorful
                        ? " text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-300"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span>Show Solution</span>
                    <svg
                      className={`ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div
                    className={`mt-2 flex justify-start overflow-x-auto rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20  ${solutionScrollbarStyle}`}
                  >
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">
          Quantifying Uncertainty
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}