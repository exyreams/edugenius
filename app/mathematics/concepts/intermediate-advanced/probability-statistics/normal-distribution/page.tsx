"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function NormalDistribution() {
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
      label: "Normal Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/normal-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Normal Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The normal distribution, also known as the Gaussian distribution, is a continuous probability distribution that is symmetric about its mean. It is one of the most important distributions in statistics due to the Central Limit Theorem.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Characteristics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Bell-shaped and symmetric about the mean</li>
          <li>Continuous distribution (can take any real value)</li>
          <li>Asymptotic to the x-axis (tails never touch zero)</li>
          <li>Completely determined by two parameters: mean (μ) and standard deviation (σ)</li>
          <li>Mean = Median = Mode</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Density Function</h2>
        <p className="mb-4">The PDF of a normal distribution is:</p>
        <BlockMath math="f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="\mu" /> = mean (location parameter)</li>
          <li><InlineMath math="\sigma" /> = standard deviation (scale parameter)</li>
          <li><InlineMath math="\sigma^2" /> = variance</li>
          <li><InlineMath math="e \approx 2.71828" /> = Euler's number</li>
          <li><InlineMath math="\pi \approx 3.14159" /> = pi</li>
        </ul>
        
        <p className="mb-4">Notation: <InlineMath math="X \sim N(\mu, \sigma^2)" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Standard Normal Distribution</h2>
        <p className="mb-4">
          The standard normal distribution has mean μ = 0 and standard deviation σ = 1.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Normal PDF</h3>
            <BlockMath math="\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standardization Formula</h3>
            <p className="mb-2">Convert any normal distribution to standard normal:</p>
            <BlockMath math="Z = \frac{X - \mu}{\sigma}" />
            <p>where Z ~ N(0,1)</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean</h3>
            <BlockMath math="E[X] = \mu" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(X) = \sigma^2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="SD(X) = \sigma" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Skewness</h3>
            <BlockMath math="\text{Skewness} = 0" />
            <p>(perfectly symmetric)</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Kurtosis</h3>
            <BlockMath math="\text{Kurtosis} = 3" />
            <p>(mesokurtic - normal peakedness)</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Empirical Rule (68-95-99.7 Rule)</h2>
        <p className="mb-4">For any normal distribution:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">68% Rule</h3>
            <BlockMath math="P(\mu - \sigma \leq X \leq \mu + \sigma) \approx 0.68" />
            <p>About 68% of values lie within 1 standard deviation of the mean</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">95% Rule</h3>
            <BlockMath math="P(\mu - 2\sigma \leq X \leq \mu + 2\sigma) \approx 0.95" />
            <p>About 95% of values lie within 2 standard deviations of the mean</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">99.7% Rule</h3>
            <BlockMath math="P(\mu - 3\sigma \leq X \leq \mu + 3\sigma) \approx 0.997" />
            <p>About 99.7% of values lie within 3 standard deviations of the mean</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cumulative Distribution Function</h2>
        <p className="mb-4">The CDF gives the probability that X ≤ x:</p>
        <BlockMath math="F(x) = P(X \leq x) = \int_{-\infty}^{x} \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{t-\mu}{\sigma}\right)^2} dt" />
        
        <p className="mb-4">For standard normal distribution:</p>
        <BlockMath math="\Phi(z) = P(Z \leq z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} dt" />
        
        <p className="mb-4">Relationship between general and standard normal CDFs:</p>
        <BlockMath math="P(X \leq x) = \Phi\left(\frac{x-\mu}{\sigma}\right)" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Central Limit Theorem</h2>
        <p className="mb-4">
          The normal distribution is fundamental due to the Central Limit Theorem:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Statement</h3>
            <p>For a random sample of size n from any population with mean μ and finite variance σ²:</p>
            <BlockMath math="\bar{X} \xrightarrow{d} N\left(\mu, \frac{\sigma^2}{n}\right) \text{ as } n \to \infty" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Practical Rule</h3>
            <p>For most distributions, n ≥ 30 is sufficient for the approximation to be good.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Heights and weights of populations</li>
          <li>Test scores and IQ measurements</li>
          <li>Measurement errors in scientific experiments</li>
          <li>Financial returns and risk analysis</li>
          <li>Quality control in manufacturing</li>
          <li>Natural phenomena (temperature, rainfall)</li>
          <li>Sampling distributions in statistics</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Probability Calculation</h3>
          <p className="mb-2">Heights of adult males are normally distributed with μ = 70 inches and σ = 3 inches. What is the probability that a randomly selected male is between 67 and 73 inches tall?</p>
          
          <p className="mb-2">We need P(67 ≤ X ≤ 73)</p>
          
          <p className="mb-2">Standardize:</p>
          <BlockMath math="Z_1 = \frac{67 - 70}{3} = -1, \quad Z_2 = \frac{73 - 70}{3} = 1" />
          
          <p className="mb-2">Therefore:</p>
          <BlockMath math="P(67 \leq X \leq 73) = P(-1 \leq Z \leq 1) = \Phi(1) - \Phi(-1)" />
          <BlockMath math="= 0.8413 - 0.1587 = 0.6826 \approx 68\%" />
          
          <p>This confirms the 68% rule!</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Finding Percentiles</h3>
          <p className="mb-2">SAT scores are normally distributed with μ = 500 and σ = 100. What score represents the 90th percentile?</p>
          
          <p className="mb-2">We need to find x such that P(X ≤ x) = 0.90</p>
          
          <p className="mb-2">From standard normal table: Φ(1.28) ≈ 0.90</p>
          <p className="mb-2">So we need: <InlineMath math="\frac{x - 500}{100} = 1.28" /></p>
          
          <BlockMath math="x = 500 + 1.28 \times 100 = 628" />
          
          <p>The 90th percentile is approximately 628.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Quality Control</h3>
          <p className="mb-2">A machine fills bottles with a mean of 500ml and standard deviation of 5ml. What percentage of bottles contain less than 490ml?</p>
          
          <p className="mb-2">We need P(X {"<"} 490)</p>
          
          <p className="mb-2">Standardize:</p>
          <BlockMath math="Z = \frac{490 - 500}{5} = -2" />
          
          <p className="mb-2">Therefore:</p>
          <BlockMath math="P(X < 490) = P(Z < -2) = \Phi(-2) = 0.0228" />
          
          <p>About 2.28% of bottles contain less than 490ml.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Central Limit Theorem Application</h3>
          <p className="mb-2">A population has mean μ = 50 and standard deviation σ = 12. If we take samples of size n = 36, what is the probability that the sample mean is between 48 and 52?</p>
          
          <p className="mb-2">By CLT, the sampling distribution of <InlineMath math="\bar{X}" /> is:</p>
          <BlockMath math="\bar{X} \sim N\left(50, \frac{12^2}{36}\right) = N(50, 4)" />
          
          <p className="mb-2">So <InlineMath math="\sigma_{\bar{X}} = \frac{12}{\sqrt{36}} = 2" /></p>
          
          <p className="mb-2">We need P(48 ≤ <InlineMath math="\bar{X}" /> ≤ 52)</p>
          
          <p className="mb-2">Standardize:</p>
          <BlockMath math="Z_1 = \frac{48 - 50}{2} = -1, \quad Z_2 = \frac{52 - 50}{2} = 1" />
          
          <p className="mb-2">Therefore:</p>
          <BlockMath math="P(48 \leq \bar{X} \leq 52) = P(-1 \leq Z \leq 1) = 0.6826" />
          
          <p>There's about a 68.26% chance the sample mean falls between 48 and 52.</p>
        </div>
      </div>
    </div>
  );
}
