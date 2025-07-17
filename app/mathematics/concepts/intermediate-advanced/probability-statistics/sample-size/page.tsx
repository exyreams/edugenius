"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function SampleSize() {
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
      label: "Sample Size",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/sample-size",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Sample Size Determination</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Sample size determination is a crucial aspect of statistical study design. It involves calculating the minimum number of observations needed to achieve desired statistical power, confidence level, and margin of error for a given study.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Confidence Level (1-α):</strong> The probability that the confidence interval contains the true parameter</li>
          <li><strong>Margin of Error (E):</strong> The maximum expected difference between the sample statistic and population parameter</li>
          <li><strong>Statistical Power (1-β):</strong> The probability of correctly rejecting a false null hypothesis</li>
          <li><strong>Effect Size:</strong> The magnitude of the difference we want to detect</li>
          <li><strong>Population Variance (σ²):</strong> The variability in the population</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Sample Size for Estimating Population Mean</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Known Population Standard Deviation</h3>
            <p className="mb-2">When σ is known, use the normal distribution:</p>
            <BlockMath math="n = \left(\frac{z_{\alpha/2} \sigma}{E}\right)^2" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="z_{\alpha/2}" /> = critical z-value for desired confidence level</li>
              <li><InlineMath math="\sigma" /> = population standard deviation</li>
              <li><InlineMath math="E" /> = desired margin of error</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Unknown Population Standard Deviation</h3>
            <p className="mb-2">When σ is unknown, use the t-distribution (iterative process):</p>
            <BlockMath math="n = \left(\frac{t_{\alpha/2, n-1} s}{E}\right)^2" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="t_{\alpha/2, n-1}" /> = critical t-value with n-1 degrees of freedom</li>
              <li><InlineMath math="s" /> = sample standard deviation (from pilot study)</li>
              <li><InlineMath math="E" /> = desired margin of error</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Conservative Approach</h3>
            <p className="mb-2">When no prior information is available, use:</p>
            <BlockMath math="n = \left(\frac{z_{\alpha/2} s}{E}\right)^2" />
            <p>Where s is estimated from a pilot study or literature</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Sample Size for Estimating Population Proportion</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Known Population Proportion</h3>
            <p className="mb-2">When p is known or estimated:</p>
            <BlockMath math="n = \frac{z_{\alpha/2}^2 p(1-p)}{E^2}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="p" /> = population proportion (or best estimate)</li>
              <li><InlineMath math="E" /> = desired margin of error</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Unknown Population Proportion</h3>
            <p className="mb-2">When p is completely unknown, use p = 0.5 for maximum sample size:</p>
            <BlockMath math="n = \frac{z_{\alpha/2}^2 \times 0.25}{E^2}" />
            <p>This gives the most conservative (largest) sample size estimate</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Sample Size for Hypothesis Testing</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">One-Sample t-test</h3>
            <p className="mb-2">To detect a difference δ from the null hypothesis value:</p>
            <BlockMath math="n = \frac{(z_{\alpha/2} + z_\beta)^2 \sigma^2}{\delta^2}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="z_\beta" /> = critical z-value for desired power (1-β)</li>
              <li><InlineMath math="\delta" /> = effect size (difference to detect)</li>
              <li><InlineMath math="\sigma" /> = population standard deviation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Two-Sample t-test</h3>
            <p className="mb-2">To detect a difference between two means:</p>
            <BlockMath math="n = \frac{2(z_{\alpha/2} + z_\beta)^2 \sigma^2}{(\mu_1 - \mu_2)^2}" />
            
            <p className="mb-2">For each group (assuming equal sample sizes)</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Proportion Test</h3>
            <p className="mb-2">To detect a difference between two proportions:</p>
            <BlockMath math="n = \frac{(z_{\alpha/2} + z_\beta)^2 [p_1(1-p_1) + p_2(1-p_2)]}{(p_1 - p_2)^2}" />
            
            <p className="mb-2">For each group</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Common Critical Values</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Confidence Levels</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-2">Confidence Level</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2">α</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2">α/2</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2">z<sub>α/2</sub></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">90%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.10</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.05</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">1.645</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">95%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.05</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.025</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">1.96</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">99%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.01</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.005</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">2.576</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Statistical Power</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-2">Power (1-β)</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2">β</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2">z<sub>β</sub></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">80%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.20</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.842</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">85%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.15</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">1.036</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">90%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.10</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">1.282</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">95%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">0.05</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">1.645</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Finite Population Correction</h2>
        <p className="mb-4">When sampling from a finite population, the sample size can be adjusted:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Adjusted Sample Size</h3>
            <BlockMath math="n_{adj} = \frac{n_0}{1 + \frac{n_0 - 1}{N}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="n_0" /> = initial sample size calculation</li>
              <li><InlineMath math="N" /> = population size</li>
              <li><InlineMath math="n_{adj}" /> = adjusted sample size</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">When to Use</h3>
            <p>Use finite population correction when:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The sample size is more than 5% of the population</li>
              <li>The population is small and well-defined</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Sample Size for Mean Estimation</h3>
          <p className="mb-2">A researcher wants to estimate the average height of college students with 95% confidence and a margin of error of 2 inches. From previous studies, σ = 4 inches. What sample size is needed?</p>
          
          <p className="mb-2">Given: Confidence level = 95%, E = 2, σ = 4</p>
          <p className="mb-2">From the table: <InlineMath math="z_{0.025}" /> = 1.96</p>
          
          <BlockMath math="n = \left(\frac{z_{\alpha/2} \sigma}{E}\right)^2 = \left(\frac{1.96 \times 4}{2}\right)^2 = \left(\frac{7.84}{2}\right)^2 = (3.92)^2 = 15.37" />
          
          <p>Round up to n = 16 students.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Sample Size for Proportion Estimation</h3>
          <p className="mb-2">A pollster wants to estimate the proportion of voters supporting a candidate with 95% confidence and a margin of error of 3%. No prior estimate is available. What sample size is needed?</p>
          
          <p className="mb-2">Given: Confidence level = 95%, E = 0.03, p unknown (use p = 0.5)</p>
          <p className="mb-2"><InlineMath math="z_{0.025}" /> = 1.96</p>
          
          <BlockMath math="n = \frac{z_{\alpha/2}^2 p(1-p)}{E^2} = \frac{(1.96)^2 \times 0.5 \times 0.5}{(0.03)^2} = \frac{3.8416 \times 0.25}{0.0009} = \frac{0.9604}{0.0009} = 1067.1" />
          
          <p>Round up to n = 1068 voters.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Sample Size for Hypothesis Testing</h3>
          <p className="mb-2">A researcher wants to test if a new drug reduces blood pressure by at least 10 mmHg. With α = 0.05, power = 80%, and σ = 15 mmHg, what sample size is needed?</p>
          
          <p className="mb-2">Given: α = 0.05, power = 80% (β = 0.20), δ = 10, σ = 15</p>
          <p className="mb-2"><InlineMath math="z_{0.025}" /> = 1.96, <InlineMath math="z_{0.20}" /> = 0.842</p>
          
          <BlockMath math="n = \frac{(z_{\alpha/2} + z_\beta)^2 \sigma^2}{\delta^2} = \frac{(1.96 + 0.842)^2 \times 15^2}{10^2} = \frac{(2.802)^2 \times 225}{100} = \frac{1766.6}{100} = 17.67" />
          
          <p>Round up to n = 18 subjects.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Two-Sample Comparison</h3>
          <p className="mb-2">Compare two teaching methods. We want to detect a difference of 5 points in test scores with α = 0.05, power = 90%, and σ = 12. What sample size is needed for each group?</p>
          
          <p className="mb-2">Given: α = 0.05, power = 90% (β = 0.10), difference = 5, σ = 12</p>
          <p className="mb-2"><InlineMath math="z_{0.025}" /> = 1.96, <InlineMath math="z_{0.10}" /> = 1.282</p>
          
          <BlockMath math="n = \frac{2(z_{\alpha/2} + z_\beta)^2 \sigma^2}{(\mu_1 - \mu_2)^2} = \frac{2(1.96 + 1.282)^2 \times 12^2}{5^2} = \frac{2 \times (3.242)^2 \times 144}{25} = \frac{3026.5}{25} = 121.1" />
          
          <p>Round up to n = 122 students per group (244 total).</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Finite Population Correction</h3>
          <p className="mb-2">A company with 500 employees wants to survey job satisfaction. Using the result from Example 2 (n₀ = 1068), what is the adjusted sample size?</p>
          
          <p className="mb-2">Given: N = 500, n₀ = 1068</p>
          <p className="mb-2">Since n₀ {">"} N, we definitely need the finite population correction.</p>
          
          <BlockMath math="n_{adj} = \frac{n_0}{1 + \frac{n_0 - 1}{N}} = \frac{1068}{1 + \frac{1068 - 1}{500}} = \frac{1068}{1 + \frac{1067}{500}} = \frac{1068}{1 + 2.134} = \frac{1068}{3.134} = 340.8" />
          
          <p>Round up to n = 341 employees.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Iterative Process for Unknown σ</h3>
          <p className="mb-2">Estimate the mean income with 95% confidence and E = $1000. A pilot study of 10 people gives s = $5000. What sample size is needed?</p>
          
          <p className="mb-2">Step 1: Initial estimate using z-value</p>
          <BlockMath math="n_1 = \left(\frac{1.96 \times 5000}{1000}\right)^2 = (9.8)^2 = 96.04 \approx 97" />
          
          <p className="mb-2">Step 2: Use t-value with df = 96</p>
          <p className="mb-2"><InlineMath math="t_{0.025, 96}" /> ≈ 1.985</p>
          
          <BlockMath math="n_2 = \left(\frac{1.985 \times 5000}{1000}\right)^2 = (9.925)^2 = 98.5 \approx 99" />
          
          <p className="mb-2">Step 3: Check with df = 98</p>
          <p className="mb-2"><InlineMath math="t_{0.025, 98}" /> ≈ 1.984</p>
          
          <p>The sample size converges to n = 99.</p>
        </div>
      </div>
    </div>
  );
}
