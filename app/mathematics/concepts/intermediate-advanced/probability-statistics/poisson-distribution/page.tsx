"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function PoissonDistribution() {
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
      label: "Poisson Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/poisson-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Poisson Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The Poisson distribution models the number of events occurring in a fixed interval of time or space, given that these events occur with a known constant mean rate and independently of the time since the last event.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Conditions for Poisson Distribution</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Events occur independently</li>
          <li>The average rate of occurrence is constant</li>
          <li>Two events cannot occur at exactly the same instant</li>
          <li>The probability of an event in a small interval is proportional to the length of the interval</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Mass Function</h2>
        <p className="mb-4">The probability of exactly k events occurring:</p>
        <BlockMath math="P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="k" /> = number of events (k = 0, 1, 2, 3, ...)</li>
          <li><InlineMath math="\lambda" /> = average rate of occurrence (λ {">"} 0)</li>
          <li><InlineMath math="e \approx 2.71828" /> = Euler's number</li>
          <li><InlineMath math="k!" /> = k factorial</li>
        </ul>
        
        <p className="mb-4">Notation: <InlineMath math="X \sim \text{Poisson}(\lambda)" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean</h3>
            <BlockMath math="E[X] = \lambda" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(X) = \lambda" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="\sigma = \sqrt{\lambda}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Mode</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>If λ is not an integer: <InlineMath math="\lfloor \lambda \rfloor" /></li>
              <li>If λ is an integer: both λ-1 and λ</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Skewness</h3>
            <BlockMath math="\text{Skewness} = \frac{1}{\sqrt{\lambda}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Kurtosis</h3>
            <BlockMath math="\text{Kurtosis} = 3 + \frac{1}{\lambda}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cumulative Distribution Function</h2>
        <p className="mb-4">The probability of k or fewer events:</p>
        <BlockMath math="P(X \leq k) = \sum_{i=0}^{k} \frac{\lambda^i e^{-\lambda}}{i!}" />
        
        <p className="mb-4">The probability of more than k events:</p>
        <BlockMath math="P(X > k) = 1 - P(X \leq k) = \sum_{i=k+1}^{\infty} \frac{\lambda^i e^{-\lambda}}{i!}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Other Distributions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Poisson Approximation to Binomial</h3>
            <p className="mb-2">When n is large and p is small, with np = λ:</p>
            <BlockMath math="\text{Binomial}(n,p) \approx \text{Poisson}(\lambda)" />
            <p className="mb-2">Rule of thumb: n ≥ 20, p ≤ 0.05, and np ≤ 10</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Normal Approximation to Poisson</h3>
            <p className="mb-2">When λ is large (typically λ ≥ 10):</p>
            <BlockMath math="\text{Poisson}(\lambda) \approx N(\lambda, \lambda)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sum of Independent Poisson Variables</h3>
            <p className="mb-2">If <InlineMath math="X_1 \sim \text{Poisson}(\lambda_1)" /> and <InlineMath math="X_2 \sim \text{Poisson}(\lambda_2)" /> are independent:</p>
            <BlockMath math="X_1 + X_2 \sim \text{Poisson}(\lambda_1 + \lambda_2)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Poisson Process</h2>
        <p className="mb-4">
          A Poisson process is a model for a series of discrete events where the average time between events is known, but the exact timing of events is random.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Rate Parameter</h3>
            <p>If events occur at rate λ per unit time, then in time interval t:</p>
            <BlockMath math="X \sim \text{Poisson}(\lambda t)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Interarrival Times</h3>
            <p>The time between consecutive events follows an exponential distribution:</p>
            <BlockMath math="T \sim \text{Exponential}(\lambda)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Number of phone calls received by a call center per hour</li>
          <li>Number of customers arriving at a store per day</li>
          <li>Number of defects in a manufactured product</li>
          <li>Number of accidents on a highway per month</li>
          <li>Number of emails received per day</li>
          <li>Number of radioactive decay events per second</li>
          <li>Number of mutations in DNA sequences</li>
          <li>Number of goals scored in a soccer match</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Probability Calculation</h3>
          <p className="mb-2">A call center receives an average of 3 calls per minute. What is the probability of receiving exactly 5 calls in the next minute?</p>
          
          <p className="mb-2">Given: λ = 3, k = 5</p>
          <BlockMath math="P(X = 5) = \frac{3^5 e^{-3}}{5!} = \frac{243 \times e^{-3}}{120}" />
          <BlockMath math="= \frac{243 \times 0.0498}{120} = \frac{12.10}{120} \approx 0.101" />
          
          <p>There's about a 10.1% chance of receiving exactly 5 calls.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Cumulative Probability</h3>
          <p className="mb-2">Using the same call center, what is the probability of receiving 2 or fewer calls in the next minute?</p>
          
          <p className="mb-2">We need P(X ≤ 2) = P(X = 0) + P(X = 1) + P(X = 2)</p>
          
          <BlockMath math="P(X = 0) = \frac{3^0 e^{-3}}{0!} = e^{-3} \approx 0.0498" />
          <BlockMath math="P(X = 1) = \frac{3^1 e^{-3}}{1!} = 3e^{-3} \approx 0.1494" />
          <BlockMath math="P(X = 2) = \frac{3^2 e^{-3}}{2!} = \frac{9e^{-3}}{2} \approx 0.2240" />
          
          <BlockMath math="P(X \leq 2) \approx 0.0498 + 0.1494 + 0.2240 = 0.4232" />
          
          <p>There's about a 42.3% chance of receiving 2 or fewer calls.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Poisson Process with Time</h3>
          <p className="mb-2">Customers arrive at a bank at an average rate of 2 per minute. What is the probability that exactly 6 customers arrive in a 3-minute period?</p>
          
          <p className="mb-2">Rate = 2 per minute, Time = 3 minutes</p>
          <p className="mb-2">So λ = 2 × 3 = 6 for the 3-minute period</p>
          
          <BlockMath math="P(X = 6) = \frac{6^6 e^{-6}}{6!} = \frac{46656 \times e^{-6}}{720}" />
          <BlockMath math="= \frac{46656 \times 0.00248}{720} \approx 0.161" />
          
          <p>There's about a 16.1% chance of exactly 6 customers arriving in 3 minutes.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Poisson Approximation to Binomial</h3>
          <p className="mb-2">A factory produces 1000 items per day, and each item has a 0.2% chance of being defective. What is the probability of having exactly 3 defective items in a day?</p>
          
          <p className="mb-2">Given: n = 1000, p = 0.002</p>
          <p className="mb-2">Check conditions: n ≥ 20 ✓, p ≤ 0.05 ✓, np = 2 ≤ 10 ✓</p>
          
          <p className="mb-2">Use Poisson approximation with λ = np = 1000 × 0.002 = 2</p>
          
          <BlockMath math="P(X = 3) = \frac{2^3 e^{-2}}{3!} = \frac{8 \times e^{-2}}{6}" />
          <BlockMath math="= \frac{8 \times 0.1353}{6} \approx 0.180" />
          
          <p>There's about an 18.0% chance of having exactly 3 defective items.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Normal Approximation to Poisson</h3>
          <p className="mb-2">A website receives an average of 50 visitors per hour. What is the probability of receiving between 45 and 55 visitors in the next hour?</p>
          
          <p className="mb-2">Given: λ = 50 (large enough for normal approximation)</p>
          <p className="mb-2">Use normal approximation: X ~ N(50, 50)</p>
          <p className="mb-2">Standard deviation: σ = √50 ≈ 7.07</p>
          
          <p className="mb-2">Using continuity correction:</p>
          <BlockMath math="P(45 \leq X \leq 55) \approx P(44.5 < Y < 55.5)" />
          
          <p className="mb-2">Standardizing:</p>
          <BlockMath math="Z_1 = \frac{44.5 - 50}{7.07} \approx -0.78, \quad Z_2 = \frac{55.5 - 50}{7.07} \approx 0.78" />
          
          <BlockMath math="P(45 \leq X \leq 55) \approx P(-0.78 < Z < 0.78) \approx 0.565" />
          
          <p>There's about a 56.5% chance of receiving between 45 and 55 visitors.</p>
        </div>
      </div>
    </div>
  );
}
