"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function GeometricDistribution() {
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
      label: "Geometric Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/geometric-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Geometric Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The geometric distribution models the number of trials needed to get the first success in a sequence of independent Bernoulli trials, each with the same probability of success.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Conditions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Each trial has only two possible outcomes (success or failure)</li>
          <li>Probability of success (p) remains constant for each trial</li>
          <li>Trials are independent of each other</li>
          <li>We count the number of trials until the first success</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Two Formulations</h2>
        <p className="mb-4">There are two common ways to define the geometric distribution:</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formulation 1: Number of trials until first success</h3>
            <p className="mb-2">X = number of trials needed to get the first success (X = 1, 2, 3, ...)</p>
            <BlockMath math="P(X = k) = (1-p)^{k-1} p" />
            <p className="mb-2">where k = 1, 2, 3, ...</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Formulation 2: Number of failures before first success</h3>
            <p className="mb-2">Y = number of failures before the first success (Y = 0, 1, 2, ...)</p>
            <BlockMath math="P(Y = k) = (1-p)^k p" />
            <p className="mb-2">where k = 0, 1, 2, ...</p>
            <p className="mb-2">Note: Y = X - 1</p>
          </div>
        </div>
        
        <p className="mb-4">We'll use Formulation 1 (number of trials) as the primary definition.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Mass Function</h2>
        <p className="mb-4">For the number of trials until first success:</p>
        <BlockMath math="P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, 3, \ldots" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="k" /> = number of trials until first success</li>
          <li><InlineMath math="p" /> = probability of success on each trial {"(0 < p ≤ 1)"}</li>
          <li><InlineMath math="1-p = q" /> = probability of failure on each trial</li>
        </ul>
        
        <p className="mb-4">Notation: <InlineMath math="X \sim \text{Geom}(p)" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cumulative Distribution Function</h2>
        <p className="mb-4">The probability of getting the first success in k or fewer trials:</p>
        <BlockMath math="P(X \leq k) = \sum_{i=1}^{k} (1-p)^{i-1} p = 1 - (1-p)^k" />
        
        <p className="mb-4">The probability of needing more than k trials:</p>
        <BlockMath math="P(X > k) = (1-p)^k" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean (Expected Value)</h3>
            <BlockMath math="E[X] = \frac{1}{p}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(X) = \frac{1-p}{p^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="\sigma = \sqrt{\frac{1-p}{p^2}} = \frac{\sqrt{1-p}}{p}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Mode</h3>
            <BlockMath math="\text{Mode} = 1" />
            <p>(The first trial is always the most likely to be the first success)</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Median</h3>
            <BlockMath math="\text{Median} = \left\lceil \frac{\ln(0.5)}{\ln(1-p)} \right\rceil" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Memoryless Property</h2>
        <p className="mb-4">
          The geometric distribution has the memoryless property (among discrete distributions):
        </p>
        <BlockMath math="P(X > m + n | X > m) = P(X > n)" />
        
        <p className="mb-4">
          This means that if you've already had m failures, the probability of needing n more trials is the same as if you were starting fresh.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mathematical Proof</h3>
            <BlockMath math="P(X > m + n | X > m) = \frac{P(X > m + n)}{P(X > m)} = \frac{(1-p)^{m+n}}{(1-p)^m} = (1-p)^n = P(X > n)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Other Distributions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Negative Binomial Distribution</h3>
            <p className="mb-2">The geometric distribution is a special case of the negative binomial distribution with r = 1:</p>
            <BlockMath math="\text{Geom}(p) = \text{NegBin}(1, p)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Exponential Distribution</h3>
            <p className="mb-2">The geometric distribution is the discrete analog of the exponential distribution.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sum of Geometric Variables</h3>
            <p className="mb-2">If <InlineMath math="X_1, X_2, \ldots, X_r" /> are independent Geom(p) random variables:</p>
            <BlockMath math="X_1 + X_2 + \cdots + X_r \sim \text{NegBin}(r, p)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quality control (number of items inspected until finding a defective one)</li>
          <li>Marketing (number of calls until making a sale)</li>
          <li>Medical testing (number of tests until finding a positive result)</li>
          <li>Gaming (number of attempts until winning)</li>
          <li>Network protocols (number of transmission attempts until success)</li>
          <li>Reliability testing (number of components tested until failure)</li>
          <li>Survey sampling (number of people contacted until getting a response)</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Probability Calculation</h3>
          <p className="mb-2">A basketball player has a 60% free throw success rate. What is the probability that they make their first free throw on the 3rd attempt?</p>
          
          <p className="mb-2">Given: p = 0.6, k = 3</p>
          <BlockMath math="P(X = 3) = (1-0.6)^{3-1} \times 0.6 = (0.4)^2 \times 0.6" />
          <BlockMath math="= 0.16 \times 0.6 = 0.096" />
          
          <p>There's a 9.6% chance of making the first free throw on the 3rd attempt.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Cumulative Probability</h3>
          <p className="mb-2">Using the same scenario, what is the probability that the player makes their first free throw within the first 3 attempts?</p>
          
          <p className="mb-2">We want P(X ≤ 3)</p>
          <BlockMath math="P(X \leq 3) = 1 - (1-p)^3 = 1 - (0.4)^3" />
          <BlockMath math="= 1 - 0.064 = 0.936" />
          
          <p>There's a 93.6% chance of making the first free throw within 3 attempts.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Expected Value</h3>
          <p className="mb-2">A quality control inspector finds that 5% of products are defective. On average, how many products must be inspected to find the first defective one?</p>
          
          <p className="mb-2">Given: p = 0.05</p>
          <BlockMath math="E[X] = \frac{1}{p} = \frac{1}{0.05} = 20" />
          
          <p>On average, 20 products must be inspected to find the first defective one.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Memoryless Property</h3>
          <p className="mb-2">A salesperson has a 10% success rate on calls. If they've already made 5 unsuccessful calls, what is the probability they'll need at least 3 more calls to make their first sale?</p>
          
          <p className="mb-2">By the memoryless property:</p>
          <BlockMath math="P(X > 5 + 3 | X > 5) = P(X > 3)" />
          <BlockMath math="= (1-0.1)^3 = (0.9)^3 = 0.729" />
          
          <p>There's a 72.9% chance of needing at least 3 more calls.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Variance Calculation</h3>
          <p className="mb-2">For the basketball player with 60% success rate, find the variance and standard deviation of the number of attempts until the first success.</p>
          
          <p className="mb-2">Given: p = 0.6</p>
          
          <p className="mb-2">Variance:</p>
          <BlockMath math="Var(X) = \frac{1-p}{p^2} = \frac{1-0.6}{(0.6)^2} = \frac{0.4}{0.36} = \frac{10}{9} \approx 1.11" />
          
          <p className="mb-2">Standard deviation:</p>
          <BlockMath math="\sigma = \sqrt{\frac{10}{9}} = \frac{\sqrt{10}}{3} \approx 1.05" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Comparison of Formulations</h3>
          <p className="mb-2">A coin has probability 0.3 of landing heads. Compare the two formulations for finding the probability of getting heads for the first time.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Formulation 1 (number of trials): P(X = 2)</h4>
              <BlockMath math="P(X = 2) = (1-0.3)^{2-1} \times 0.3 = 0.7 \times 0.3 = 0.21" />
            </div>
            
            <div>
              <h4 className="font-semibold">Formulation 2 (number of failures): P(Y = 1)</h4>
              <BlockMath math="P(Y = 1) = (1-0.3)^1 \times 0.3 = 0.7 \times 0.3 = 0.21" />
            </div>
            
            <div>
              <h4 className="font-semibold">Interpretation</h4>
              <p>Both give the same result: 21% chance of getting the first heads on the 2nd trial (after 1 failure).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
