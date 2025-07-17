"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function BinomialDistribution() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Probability & Statistics",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics",
    },
    {
      label: "Binomial Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/binomial-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Binomial Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The binomial distribution models the number of successes in a fixed number of independent trials, where each trial has the same probability of success.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Conditions for Binomial Distribution</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Fixed number of trials (n)</li>
          <li>Each trial has only two possible outcomes (success or failure)</li>
          <li>Probability of success (p) remains constant for each trial</li>
          <li>Trials are independent of each other</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Mass Function</h2>
        <p className="mb-4">The probability of exactly k successes in n trials:</p>
        <BlockMath math="P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="n" /> = number of trials</li>
          <li><InlineMath math="k" /> = number of successes (0 ≤ k ≤ n)</li>
          <li><InlineMath math="p" /> = probability of success on each trial</li>
          <li><InlineMath math="1-p = q" /> = probability of failure on each trial</li>
          <li><InlineMath math="\binom{n}{k}" /> = binomial coefficient</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean (Expected Value)</h3>
            <BlockMath math="E[X] = \mu = np" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(X) = \sigma^2 = np(1-p) = npq" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="\sigma = \sqrt{np(1-p)} = \sqrt{npq}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Mode</h3>
            <p>The most likely value(s):</p>
            <ul className="list-disc list-inside space-y-1">
              <li>If <InlineMath math="(n+1)p" /> is not an integer: <InlineMath math="\lfloor (n+1)p \rfloor" /></li>
              <li>If <InlineMath math="(n+1)p" /> is an integer: both <InlineMath math="(n+1)p - 1" /> and <InlineMath math="(n+1)p" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cumulative Distribution Function</h2>
        <p className="mb-4">The probability of k or fewer successes:</p>
        <BlockMath math="P(X \leq k) = \sum_{i=0}^{k} \binom{n}{i} p^i (1-p)^{n-i}" />
        
        <p className="mb-4">The probability of more than k successes:</p>
        <BlockMath math="P(X > k) = 1 - P(X \leq k) = \sum_{i=k+1}^{n} \binom{n}{i} p^i (1-p)^{n-i}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Normal Approximation</h2>
        <p className="mb-4">
          When n is large and p is not too close to 0 or 1, the binomial distribution can be approximated by a normal distribution.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Rule of Thumb</h3>
            <p>Use normal approximation when:</p>
            <BlockMath math="np \geq 5 \text{ and } n(1-p) \geq 5" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Approximation</h3>
            <BlockMath math="X \sim N(\mu = np, \sigma^2 = np(1-p))" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Continuity Correction</h3>
            <p>For better approximation, use continuity correction:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="P(X = k) \approx P(k - 0.5 < Y < k + 0.5)" /></li>
              <li><InlineMath math="P(X \leq k) \approx P(Y < k + 0.5)" /></li>
              <li><InlineMath math="P(X \geq k) \approx P(Y > k - 0.5)" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quality control (defective items in a batch)</li>
          <li>Medical trials (success rate of treatments)</li>
          <li>Marketing (response rates to campaigns)</li>
          <li>Sports (wins/losses in a season)</li>
          <li>Genetics (inheritance patterns)</li>
          <li>Survey sampling (yes/no responses)</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Coin Flipping</h3>
          <p className="mb-2">A fair coin is flipped 10 times. What is the probability of getting exactly 6 heads?</p>
          
          <p className="mb-2">Given: n = 10, k = 6, p = 0.5</p>
          <BlockMath math="P(X = 6) = \binom{10}{6} (0.5)^6 (0.5)^4 = \binom{10}{6} (0.5)^{10}" />
          <BlockMath math="= \frac{10!}{6! \times 4!} \times \frac{1}{1024} = 210 \times \frac{1}{1024} = \frac{210}{1024} \approx 0.205" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Quality Control</h3>
          <p className="mb-2">A manufacturing process produces 5% defective items. If 20 items are randomly selected, what is the probability that at most 2 are defective?</p>
          
          <p className="mb-2">Given: n = 20, p = 0.05, we want P(X ≤ 2)</p>
          <BlockMath math="P(X \leq 2) = P(X = 0) + P(X = 1) + P(X = 2)" />
          
          <BlockMath math="P(X = 0) = \binom{20}{0} (0.05)^0 (0.95)^{20} = 1 \times 1 \times (0.95)^{20} \approx 0.358" />
          <BlockMath math="P(X = 1) = \binom{20}{1} (0.05)^1 (0.95)^{19} = 20 \times 0.05 \times (0.95)^{19} \approx 0.377" />
          <BlockMath math="P(X = 2) = \binom{20}{2} (0.05)^2 (0.95)^{18} = 190 \times (0.05)^2 \times (0.95)^{18} \approx 0.189" />
          
          <BlockMath math="P(X \leq 2) \approx 0.358 + 0.377 + 0.189 = 0.924" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Expected Value and Variance</h3>
          <p className="mb-2">A basketball player has a 70% free throw success rate. If they attempt 15 free throws, find the expected number of successes and the standard deviation.</p>
          
          <p className="mb-2">Given: n = 15, p = 0.7</p>
          
          <p className="mb-2">Expected value:</p>
          <BlockMath math="E[X] = np = 15 \times 0.7 = 10.5" />
          
          <p className="mb-2">Variance:</p>
          <BlockMath math="Var(X) = np(1-p) = 15 \times 0.7 \times 0.3 = 3.15" />
          
          <p className="mb-2">Standard deviation:</p>
          <BlockMath math="\sigma = \sqrt{3.15} \approx 1.77" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Normal Approximation</h3>
          <p className="mb-2">A survey shows that 60% of people prefer brand A. If 100 people are surveyed, what is the probability that between 55 and 65 people prefer brand A?</p>
          
          <p className="mb-2">Given: n = 100, p = 0.6</p>
          <p className="mb-2">Check conditions: np = 60 ≥ 5 ✓, n(1-p) = 40 ≥ 5 ✓</p>
          
          <p className="mb-2">Parameters for normal approximation:</p>
          <BlockMath math="\mu = np = 60, \quad \sigma = \sqrt{np(1-p)} = \sqrt{24} \approx 4.90" />
          
          <p className="mb-2">Using continuity correction:</p>
          <BlockMath math="P(55 \leq X \leq 65) \approx P(54.5 < Y < 65.5)" />
          
          <p className="mb-2">Standardizing:</p>
          <BlockMath math="Z_1 = \frac{54.5 - 60}{4.90} \approx -1.12, \quad Z_2 = \frac{65.5 - 60}{4.90} \approx 1.12" />
          
          <BlockMath math="P(55 \leq X \leq 65) \approx P(-1.12 < Z < 1.12) \approx 0.737" />
        </div>
      </div>
    </div>
  );
}
