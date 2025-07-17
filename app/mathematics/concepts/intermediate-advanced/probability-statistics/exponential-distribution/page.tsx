"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function ExponentialDistribution() {
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
      label: "Exponential Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/exponential-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Exponential Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The exponential distribution is a continuous probability distribution that models the time between events in a Poisson process. It describes the waiting time until the next event occurs.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Characteristics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Continuous distribution for non-negative values (x ≥ 0)</li>
          <li>Memoryless property</li>
          <li>Right-skewed (decreasing exponentially)</li>
          <li>Single parameter λ (rate parameter)</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Density Function</h2>
        <p className="mb-4">The PDF of an exponential distribution is:</p>
        <BlockMath math="f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \geq 0 \\ 0 & \text{if } x < 0 \end{cases}" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="\lambda > 0" /> = rate parameter</li>
          <li><InlineMath math="x \geq 0" /> = random variable (time, distance, etc.)</li>
          <li><InlineMath math="e \approx 2.71828" /> = Euler's number</li>
        </ul>
        
        <p className="mb-4">Notation: <InlineMath math="X \sim \text{Exp}(\lambda)" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cumulative Distribution Function</h2>
        <p className="mb-4">The CDF gives the probability that X ≤ x:</p>
        <BlockMath math="F(x) = P(X \leq x) = \begin{cases} 1 - e^{-\lambda x} & \text{if } x \geq 0 \\ 0 & \text{if } x < 0 \end{cases}" />
        
        <p className="mb-4">The survival function (probability that X {">"} x):</p>
        <BlockMath math="S(x) = P(X > x) = e^{-\lambda x}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean</h3>
            <BlockMath math="E[X] = \frac{1}{\lambda}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(X) = \frac{1}{\lambda^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="\sigma = \frac{1}{\lambda}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Mode</h3>
            <BlockMath math="\text{Mode} = 0" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Median</h3>
            <BlockMath math="\text{Median} = \frac{\ln(2)}{\lambda} \approx \frac{0.693}{\lambda}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Skewness</h3>
            <BlockMath math="\text{Skewness} = 2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Kurtosis</h3>
            <BlockMath math="\text{Kurtosis} = 9" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Memoryless Property</h2>
        <p className="mb-4">
          The exponential distribution has the unique memoryless property among continuous distributions:
        </p>
        <BlockMath math="P(X > s + t | X > s) = P(X > t)" />
        
        <p className="mb-4">
          This means that the probability of waiting an additional time t is independent of how long you have already waited.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mathematical Proof</h3>
            <BlockMath math="P(X > s + t | X > s) = \frac{P(X > s + t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Poisson Distribution</h2>
        <p className="mb-4">
          The exponential distribution is closely related to the Poisson distribution:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Connection</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>If events occur according to a Poisson process with rate λ</li>
              <li>Then the time between consecutive events follows Exp(λ)</li>
              <li>The time until the nth event follows Gamma(n, λ)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Minimum of Exponentials</h3>
            <p className="mb-2">If <InlineMath math="X_1, X_2, \ldots, X_n" /> are independent exponential random variables with rates <InlineMath math="\lambda_1, \lambda_2, \ldots, \lambda_n" />:</p>
            <BlockMath math="\min(X_1, X_2, \ldots, X_n) \sim \text{Exp}\left(\sum_{i=1}^{n} \lambda_i\right)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Parameter Estimation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Method of Moments</h3>
            <p className="mb-2">Since <InlineMath math="E[X] = \frac{1}{\lambda}" />:</p>
            <BlockMath math="\hat{\lambda} = \frac{1}{\bar{x}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Maximum Likelihood Estimation</h3>
            <p className="mb-2">For a sample <InlineMath math="x_1, x_2, \ldots, x_n" />:</p>
            <BlockMath math="\hat{\lambda}_{MLE} = \frac{n}{\sum_{i=1}^{n} x_i} = \frac{1}{\bar{x}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Reliability engineering (time until failure)</li>
          <li>Queueing theory (service times, interarrival times)</li>
          <li>Radioactive decay (time between decay events)</li>
          <li>Survival analysis (time until death or event)</li>
          <li>Finance (time between trades)</li>
          <li>Call centers (time between calls)</li>
          <li>Network traffic analysis</li>
          <li>Epidemiology (time between infections)</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Probability Calculation</h3>
          <p className="mb-2">The time between customer arrivals at a store follows an exponential distribution with an average of 5 minutes. What is the probability that the next customer arrives within 3 minutes?</p>
          
          <p className="mb-2">Given: Mean = 5 minutes, so λ = 1/5 = 0.2 per minute</p>
          <p className="mb-2">We want P(X ≤ 3)</p>
          
          <BlockMath math="P(X \leq 3) = 1 - e^{-0.2 \times 3} = 1 - e^{-0.6}" />
          <BlockMath math="= 1 - 0.5488 = 0.4512" />
          
          <p>There's about a 45.1% chance the next customer arrives within 3 minutes.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Memoryless Property</h3>
          <p className="mb-2">Using the same scenario, if 2 minutes have already passed without a customer, what is the probability that you'll wait at least 4 more minutes?</p>
          
          <p className="mb-2">By the memoryless property:</p>
          <BlockMath math="P(X > 2 + 4 | X > 2) = P(X > 4)" />
          <BlockMath math="= e^{-0.2 \times 4} = e^{-0.8} \approx 0.449" />
          
          <p>There's about a 44.9% chance of waiting at least 4 more minutes.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Reliability Analysis</h3>
          <p className="mb-2">A component has an exponential failure time with a mean time to failure of 1000 hours. What is the probability it survives at least 500 hours?</p>
          
          <p className="mb-2">Given: Mean = 1000 hours, so λ = 1/1000 = 0.001 per hour</p>
          <p className="mb-2">We want P(X {">"} 500)</p>
          
          <BlockMath math="P(X > 500) = e^{-0.001 \times 500} = e^{-0.5} \approx 0.606" />
          
          <p>There's about a 60.6% chance the component survives at least 500 hours.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Finding Percentiles</h3>
          <p className="mb-2">For the same component, find the time by which 90% of components will have failed.</p>
          
          <p className="mb-2">We want to find t such that P(X ≤ t) = 0.90</p>
          <BlockMath math="1 - e^{-0.001t} = 0.90" />
          <BlockMath math="e^{-0.001t} = 0.10" />
          <BlockMath math="-0.001t = \ln(0.10) = -2.303" />
          <BlockMath math="t = \frac{2.303}{0.001} = 2303 \text{ hours}" />
          
          <p>90% of components will fail by 2303 hours.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Parameter Estimation</h3>
          <p className="mb-2">Service times at a bank (in minutes) are recorded: 2.1, 0.8, 3.5, 1.2, 4.7, 0.9, 2.3, 1.8. Estimate the rate parameter λ.</p>
          
          <p className="mb-2">Calculate the sample mean:</p>
          <BlockMath math="\bar{x} = \frac{2.1 + 0.8 + 3.5 + 1.2 + 4.7 + 0.9 + 2.3 + 1.8}{8} = \frac{17.3}{8} = 2.1625" />
          
          <p className="mb-2">Estimate λ:</p>
          <BlockMath math="\hat{\lambda} = \frac{1}{\bar{x}} = \frac{1}{2.1625} \approx 0.462 \text{ per minute}" />
          
          <p>The estimated rate parameter is approximately 0.462 per minute.</p>
        </div>
      </div>
    </div>
  );
}
