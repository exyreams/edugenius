"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function HypergeometricDistribution() {
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
      label: "Hypergeometric Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/hypergeometric-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Hypergeometric Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The hypergeometric distribution models the probability of obtaining a specific number of successes in a fixed number of draws from a finite population without replacement. Unlike the binomial distribution, the probability of success changes with each draw because the population size decreases.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Characteristics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Fixed finite population size</li>
          <li>Two types of objects in the population (success and failure)</li>
          <li>Sampling without replacement</li>
          <li>Fixed number of draws/trials</li>
          <li>Each draw affects the probability of subsequent draws</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Mass Function</h2>
        <p className="mb-4">
          The probability of getting exactly k successes in n draws from a population of size N containing K successes is:
        </p>
        
        <BlockMath math="P(X = k) = \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}" />
        
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-semibold mb-2">Parameters</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><InlineMath math="N" /> = total population size</li>
            <li><InlineMath math="K" /> = number of success items in the population</li>
            <li><InlineMath math="n" /> = number of draws (sample size)</li>
            <li><InlineMath math="k" /> = number of successes in the sample</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-2">Constraints</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><InlineMath math="0 \leq k \leq \min(n, K)" /></li>
            <li><InlineMath math="0 \leq n \leq N" /></li>
            <li><InlineMath math="0 \leq K \leq N" /></li>
            <li><InlineMath math="k \geq \max(0, n - (N - K))" /></li>
          </ul>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Mean and Variance</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Expected Value (Mean)</h3>
            <BlockMath math="E[X] = \mu = n \cdot \frac{K}{N}" />
            <p className="mb-2">This represents the expected number of successes in n draws.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(X) = \sigma^2 = n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}" />
            
            <p className="mb-2">The factor <InlineMath math="\frac{N-n}{N-1}" /> is called the finite population correction factor.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="\sigma = \sqrt{n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Comparison with Binomial Distribution</h3>
            <p className="mb-2">If we let <InlineMath math="p = \frac{K}{N}" />, then:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Hypergeometric mean = Binomial mean = <InlineMath math="np" /></li>
              <li>Hypergeometric variance = Binomial variance × <InlineMath math="\frac{N-n}{N-1}" /></li>
              <li>As N → ∞, hypergeometric → binomial</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">When to Use Hypergeometric Distribution</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Conditions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Sampling without replacement from a finite population</li>
              <li>Population has exactly two types of items</li>
              <li>Sample size is fixed in advance</li>
              <li>Population size is relatively small compared to sample size</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Applications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Quality control sampling</li>
              <li>Card games and lottery problems</li>
              <li>Survey sampling from small populations</li>
              <li>Acceptance sampling in manufacturing</li>
              <li>Ecological sampling (capture-recapture studies)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Rule of Thumb</h3>
            <p className="mb-2">Use hypergeometric when:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Sample size n {">"} 5% of population size N (i.e., n/N {">"} 0.05)</li>
              <li>Sampling is done without replacement</li>
            </ul>
            <p className="mb-2">Use binomial when:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Sample size n ≤ 5% of population size N (i.e., n/N ≤ 0.05)</li>
              <li>Population is very large relative to sample</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cumulative Distribution Function</h2>
        <p className="mb-4">
          The cumulative probability P(X ≤ k) is the sum of individual probabilities:
        </p>
        
        <BlockMath math="P(X \leq k) = \sum_{i=0}^{k} \frac{\binom{K}{i} \binom{N-K}{n-i}}{\binom{N}{n}}" />
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Complementary Probability</h3>
          <BlockMath math="P(X > k) = 1 - P(X \leq k)" />
          <BlockMath math="P(X \geq k) = 1 - P(X \leq k-1)" />
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Normal Approximation</h2>
        <p className="mb-4">
          For large sample sizes, the hypergeometric distribution can be approximated by a normal distribution.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Conditions for Normal Approximation</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="n \cdot \frac{K}{N} \geq 5" /></li>
              <li><InlineMath math="n \cdot \frac{N-K}{N} \geq 5" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Approximation</h3>
            <BlockMath math="X \sim N\left(\mu, \sigma^2\right)" />
            <p className="mb-2">Where μ and σ² are the hypergeometric mean and variance.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Continuity Correction</h3>
            <p className="mb-2">When using normal approximation:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>P(X = k) ≈ P(k - 0.5 &lt; Z &lt; k + 0.5)</li>
              <li>P(X ≤ k) ≈ P(Z &lt; k + 0.5)</li>
              <li>P(X ≥ k) ≈ P(Z {">"} k - 0.5)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Quality Control</h3>
          <p className="mb-2">A shipment contains 50 items, of which 8 are defective. If 10 items are randomly selected for inspection, what is the probability that exactly 2 are defective?</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>N = 50 (total items)</li>
                <li>K = 8 (defective items)</li>
                <li>n = 10 (items selected)</li>
                <li>k = 2 (defective items in sample)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <BlockMath math="P(X = 2) = \frac{\binom{8}{2} \binom{42}{8}}{\binom{50}{10}}" />
              
              <p>Calculate each binomial coefficient:</p>
              <BlockMath math="\binom{8}{2} = \frac{8!}{2!(8-2)!} = \frac{8 \times 7}{2 \times 1} = 28" />
              <BlockMath math="\binom{42}{8} = \frac{42!}{8!(42-8)!} = 538,257,874" />
              <BlockMath math="\binom{50}{10} = \frac{50!}{10!(50-10)!} = 10,272,278,170" />
              
              <p>Therefore:</p>
              <BlockMath math="P(X = 2) = \frac{28 \times 538,257,874}{10,272,278,170} = \frac{15,071,220,472}{10,272,278,170} = 0.467" />
              
              <p><strong>Answer:</strong> The probability is approximately 0.467 or 46.7%.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Card Game</h3>
          <p className="mb-2">From a standard deck of 52 cards, 5 cards are drawn without replacement. What is the probability of getting exactly 2 hearts?</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>N = 52 (total cards)</li>
                <li>K = 13 (hearts in deck)</li>
                <li>n = 5 (cards drawn)</li>
                <li>k = 2 (hearts desired)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <BlockMath math="P(X = 2) = \frac{\binom{13}{2} \binom{39}{3}}{\binom{52}{5}}" />
              
              <p>Calculate each binomial coefficient:</p>
              <BlockMath math="\binom{13}{2} = \frac{13 \times 12}{2} = 78" />
              <BlockMath math="\binom{39}{3} = \frac{39 \times 38 \times 37}{3 \times 2 \times 1} = 9,139" />
              <BlockMath math="\binom{52}{5} = \frac{52!}{5! \times 47!} = 2,598,960" />
              
              <p>Therefore:</p>
              <BlockMath math="P(X = 2) = \frac{78 \times 9,139}{2,598,960} = \frac{712,842}{2,598,960} = 0.274" />
              
              <p><strong>Answer:</strong> The probability is approximately 0.274 or 27.4%.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Mean and Variance</h3>
          <p className="mb-2">For the quality control example (N=50, K=8, n=10), find the mean and variance of the number of defective items.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Mean:</h4>
              <BlockMath math="\mu = n \cdot \frac{K}{N} = 10 \cdot \frac{8}{50} = 10 \cdot 0.16 = 1.6" />
              <p>On average, we expect 1.6 defective items in the sample.</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Variance:</h4>
              <BlockMath math="\sigma^2 = n \cdot \frac{K}{N} \cdot \frac{N-K}{N} \cdot \frac{N-n}{N-1}" />
              <BlockMath math="\sigma^2 = 10 \cdot \frac{8}{50} \cdot \frac{42}{50} \cdot \frac{40}{49}" />
              <BlockMath math="\sigma^2 = 10 \cdot 0.16 \cdot 0.84 \cdot 0.816 = 1.098" />
            </div>
            
            <div>
              <h4 className="font-semibold">Standard Deviation:</h4>
              <BlockMath math="\sigma = \sqrt{1.098} = 1.048" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Cumulative Probability</h3>
          <p className="mb-2">Using the quality control example, find P(X ≤ 2), the probability of finding at most 2 defective items.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <BlockMath math="P(X \leq 2) = P(X = 0) + P(X = 1) + P(X = 2)" />
              
              <p>Calculate each probability:</p>
              
              <p><strong>P(X = 0):</strong></p>
              <BlockMath math="P(X = 0) = \frac{\binom{8}{0} \binom{42}{10}}{\binom{50}{10}} = \frac{1 \times 850,668,301}{10,272,278,170} = 0.0828" />
              
              <p><strong>P(X = 1):</strong></p>
              <BlockMath math="P(X = 1) = \frac{\binom{8}{1} \binom{42}{9}}{\binom{50}{10}} = \frac{8 \times 52,078,117}{10,272,278,170} = 0.406" />
              
              <p><strong>P(X = 2):</strong></p>
              <p>From Example 1: P(X = 2) = 0.467</p>
              
              <p><strong>Total:</strong></p>
              <BlockMath math="P(X \leq 2) = 0.0828 + 0.406 + 0.467 = 0.956" />
              
              <p><strong>Answer:</strong> There is a 95.6% probability of finding at most 2 defective items.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Normal Approximation</h3>
          <p className="mb-2">A population of 1000 items contains 200 defective items. If 100 items are sampled, approximate the probability that between 15 and 25 items are defective.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <p>N = 1000, K = 200, n = 100</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Check conditions for normal approximation:</h4>
              <BlockMath math="n \cdot \frac{K}{N} = 100 \cdot \frac{200}{1000} = 20 \geq 5 \checkmark" />
              <BlockMath math="n \cdot \frac{N-K}{N} = 100 \cdot \frac{800}{1000} = 80 \geq 5 \checkmark" />
            </div>
            
            <div>
              <h4 className="font-semibold">Calculate parameters:</h4>
              <BlockMath math="\mu = 100 \cdot \frac{200}{1000} = 20" />
              <BlockMath math="\sigma^2 = 100 \cdot \frac{200}{1000} \cdot \frac{800}{1000} \cdot \frac{900}{999} = 20 \cdot 0.8 \cdot 0.901 = 14.42" />
              <BlockMath math="\sigma = \sqrt{14.42} = 3.80" />
            </div>
            
            <div>
              <h4 className="font-semibold">Apply normal approximation with continuity correction:</h4>
              <BlockMath math="P(15 \leq X \leq 25) = P(14.5 < Z < 25.5)" />
              
              <p>Standardize:</p>
              <BlockMath math="Z_1 = \frac{14.5 - 20}{3.80} = -1.45" />
              <BlockMath math="Z_2 = \frac{25.5 - 20}{3.80} = 1.45" />
              
              <p>Using standard normal table:</p>
              <BlockMath math="P(-1.45 < Z < 1.45) = \Phi(1.45) - \Phi(-1.45) = 0.9265 - 0.0735 = 0.853" />
              
              <p><strong>Answer:</strong> The probability is approximately 0.853 or 85.3%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}