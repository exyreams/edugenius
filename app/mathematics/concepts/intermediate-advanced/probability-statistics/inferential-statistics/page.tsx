"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function InferentialStatistics() {
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
      label: "Inferential Statistics",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/inferential-statistics",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Inferential Statistics</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Inferential statistics involves making predictions, inferences, and conclusions about a population based on sample data. Unlike descriptive statistics that summarize data, inferential statistics help us draw conclusions beyond the immediate data.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Concepts</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Population vs Sample</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Population:</strong> The entire group of individuals or items of interest</li>
              <li><strong>Sample:</strong> A subset of the population used to make inferences</li>
              <li><strong>Parameter:</strong> A numerical characteristic of a population (μ, σ, p)</li>
              <li><strong>Statistic:</strong> A numerical characteristic of a sample (x̄, s, p̂)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sampling Distribution</h3>
            <p>The probability distribution of a sample statistic obtained from all possible samples of the same size from a population.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Central Limit Theorem</h2>
        <p className="mb-4">
          The Central Limit Theorem (CLT) is fundamental to inferential statistics and states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Statement</h3>
            <p className="mb-2">For a population with mean μ and standard deviation σ, the sampling distribution of the sample mean x̄ from samples of size n will have:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Mean: <InlineMath math="\mu_{\bar{x}} = \mu" /></li>
              <li>Standard deviation: <InlineMath math="\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}" /> (Standard Error)</li>
              <li>Shape: Approximately normal for n ≥ 30 (regardless of population distribution)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Z-Score for Sample Mean</h3>
            <BlockMath math="Z = \frac{\bar{x} - \mu}{\sigma/\sqrt{n}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Confidence Intervals</h2>
        <p className="mb-4">
          A confidence interval provides a range of values that likely contains the true population parameter with a specified level of confidence.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Confidence Interval for Population Mean (σ known)</h3>
            <BlockMath math="\bar{x} \pm Z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="Z_{\alpha/2}" /> = critical value from standard normal distribution</li>
              <li><InlineMath math="\alpha" /> = significance level (1 - confidence level)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Confidence Interval for Population Mean (σ unknown)</h3>
            <BlockMath math="\bar{x} \pm t_{\alpha/2,df} \cdot \frac{s}{\sqrt{n}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="t_{\alpha/2,df}" /> = critical value from t-distribution</li>
              <li><InlineMath math="df = n - 1" /> = degrees of freedom</li>
              <li><InlineMath math="s" /> = sample standard deviation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Confidence Interval for Population Proportion</h3>
            <BlockMath math="\hat{p} \pm Z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\hat{p}" /> = sample proportion</li>
              <li>Conditions: <InlineMath math="n\hat{p} \geq 5" /> and <InlineMath math="n(1-\hat{p}) \geq 5" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Confidence Levels</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Confidence Level</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">α</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">α/2</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">{"Z_{α/2}"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">90%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0.10</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0.05</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1.645</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">95%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0.05</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0.025</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1.96</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">99%</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0.01</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0.005</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">2.576</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Hypothesis Testing</h2>
        <p className="mb-4">
          Hypothesis testing is a statistical method used to make decisions about population parameters based on sample data.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Steps in Hypothesis Testing</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>State the null hypothesis (H₀) and alternative hypothesis (H₁)</li>
              <li>Choose the significance level (α)</li>
              <li>Select the appropriate test statistic</li>
              <li>Determine the critical region</li>
              <li>Calculate the test statistic from sample data</li>
              <li>Make a decision (reject or fail to reject H₀)</li>
              <li>State the conclusion in context</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Types of Hypotheses</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Null Hypothesis (H₀):</strong> Statement of no effect or no difference</li>
              <li><strong>Alternative Hypothesis (H₁):</strong> Statement we want to prove</li>
              <li><strong>Two-tailed test:</strong> H₁: μ ≠ μ₀</li>
              <li><strong>Left-tailed test:</strong> H₁: μ &lt; μ₀</li>
              <li><strong>Right-tailed test:</strong> H₁: μ {">"} μ₀</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Types of Errors</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3"></th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">H₀ is True</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">H₀ is False</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Reject H₀</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Type I Error (α)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Correct Decision</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Fail to Reject H₀</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Correct Decision</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">Type II Error (β)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Common Statistical Tests</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">One-Sample Z-Test</h3>
            <p className="mb-2">Used when testing a population mean with known population standard deviation.</p>
            <BlockMath math="Z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}" />
            <p className="mb-2"><strong>Conditions:</strong> σ known, n ≥ 30 or population normally distributed</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">One-Sample t-Test</h3>
            <p className="mb-2">Used when testing a population mean with unknown population standard deviation.</p>
            <BlockMath math="t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}" />
            <p className="mb-2"><strong>Conditions:</strong> σ unknown, population approximately normal, df = n - 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Two-Sample t-Test</h3>
            <p className="mb-2">Used to compare means of two independent populations.</p>
            
            <div className="space-y-2">
              <p><strong>Equal variances assumed:</strong></p>
              <BlockMath math="t = \frac{(\bar{x}_1 - \bar{x}_2) - (\mu_1 - \mu_2)}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}" />
              
              <p>Where pooled standard deviation:</p>
              <BlockMath math="s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}}" />
              
              <p><strong>Degrees of freedom:</strong> df = n₁ + n₂ - 2</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Paired t-Test</h3>
            <p className="mb-2">Used for comparing means of two related groups.</p>
            <BlockMath math="t = \frac{\bar{d} - \mu_d}{s_d/\sqrt{n}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\bar{d}" /> = mean of differences</li>
              <li><InlineMath math="s_d" /> = standard deviation of differences</li>
              <li><InlineMath math="\mu_d" /> = hypothesized mean difference (usually 0)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Chi-Square Test</h3>
            <p className="mb-2">Used for testing relationships between categorical variables.</p>
            <BlockMath math="\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="O_i" /> = observed frequency</li>
              <li><InlineMath math="E_i" /> = expected frequency</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">P-Values</h2>
        <p className="mb-4">
          The p-value is the probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Interpretation</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>p &lt; α:</strong> Reject H₀ (statistically significant)</li>
              <li><strong>p ≥ α:</strong> Fail to reject H₀ (not statistically significant)</li>
              <li><strong>Small p-value:</strong> Strong evidence against H₀</li>
              <li><strong>Large p-value:</strong> Weak evidence against H₀</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Significance Levels</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>α = 0.05:</strong> Most common (5% chance of Type I error)</li>
              <li><strong>α = 0.01:</strong> More stringent (1% chance of Type I error)</li>
              <li><strong>α = 0.10:</strong> Less stringent (10% chance of Type I error)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Confidence Interval for Mean</h3>
          <p className="mb-2">A sample of 36 students has a mean test score of 78 with a standard deviation of 12. Find a 95% confidence interval for the population mean.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <p>n = 36, x̄ = 78, s = 12, confidence level = 95%</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <p>Since n ≥ 30, we can use the z-distribution:</p>
              <p>For 95% confidence: Z₀.₀₂₅ = 1.96</p>
              
              <p>Margin of error:</p>
              <BlockMath math="E = Z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} = 1.96 \cdot \frac{12}{\sqrt{36}} = 1.96 \cdot 2 = 3.92" />
              
              <p>Confidence interval:</p>
              <BlockMath math="78 \pm 3.92 = (74.08, 81.92)" />
              
              <p><strong>Interpretation:</strong> We are 95% confident that the true population mean test score is between 74.08 and 81.92.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: One-Sample t-Test</h3>
          <p className="mb-2">A manufacturer claims that their light bulbs last an average of 1000 hours. A sample of 25 bulbs has a mean life of 980 hours with a standard deviation of 50 hours. Test at α = 0.05.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: State hypotheses</h4>
              <p>H₀: μ = 1000 (manufacturer's claim is true)</p>
              <p>H₁: μ ≠ 1000 (two-tailed test)</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 2: Test statistic</h4>
              <BlockMath math="t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{980 - 1000}{50/\sqrt{25}} = \frac{-20}{10} = -2.0" />
            </div>
            
            <div>
              <h4 className="font-semibold">Step 3: Critical value</h4>
              <p>df = n - 1 = 24</p>
              <p>For α = 0.05 (two-tailed): t₀.₀₂₅,₂₄ = ±2.064</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 4: Decision</h4>
              <p>Since |t| = 2.0 &lt; 2.064, we fail to reject H₀.</p>
              <p><strong>Conclusion:</strong> There is insufficient evidence to reject the manufacturer's claim at the 0.05 significance level.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Two-Sample t-Test</h3>
          <p className="mb-2">Compare the mean heights of two groups:</p>
          <p>Group 1: n₁ = 20, x̄₁ = 170 cm, s₁ = 8 cm</p>
          <p>Group 2: n₂ = 25, x̄₂ = 165 cm, s₂ = 10 cm</p>
          <p>Test if there's a significant difference at α = 0.05.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: State hypotheses</h4>
              <p>H₀: μ₁ = μ₂ (no difference in means)</p>
              <p>H₁: μ₁ ≠ μ₂ (there is a difference)</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Step 2: Calculate pooled standard deviation</h4>
              <BlockMath math="s_p = \sqrt{\frac{(20-1)(8)^2 + (25-1)(10)^2}{20 + 25 - 2}} = \sqrt{\frac{19(64) + 24(100)}{43}} = \sqrt{\frac{3616}{43}} = 9.17" />
            </div>
            
            <div>
              <h4 className="font-semibold">Step 3: Test statistic</h4>
              <BlockMath math="t = \frac{(170 - 165) - 0}{9.17\sqrt{\frac{1}{20} + \frac{1}{25}}} = \frac{5}{9.17 \times 0.3} = \frac{5}{2.75} = 1.82" />
            </div>
            
            <div>
              <h4 className="font-semibold">Step 4: Critical value and decision</h4>
              <p>df = 20 + 25 - 2 = 43</p>
              <p>t₀.₀₂₅,₄₃ ≈ 2.017</p>
              <p>Since |t| = 1.82 &lt; 2.017, we fail to reject H₀.</p>
              <p><strong>Conclusion:</strong> There is no significant difference between the mean heights of the two groups.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Confidence Interval for Proportion</h3>
          <p className="mb-2">In a survey of 400 voters, 240 support a particular candidate. Find a 95% confidence interval for the population proportion.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <p>n = 400, x = 240, p̂ = 240/400 = 0.6</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Check conditions:</h4>
              <p>np̂ = 400(0.6) = 240 ≥ 5 ✓</p>
              <p>n(1-p̂) = 400(0.4) = 160 ≥ 5 ✓</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <p>For 95% confidence: Z₀.₀₂₅ = 1.96</p>
              
              <p>Margin of error:</p>
              <BlockMath math="E = Z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} = 1.96 \sqrt{\frac{0.6(0.4)}{400}} = 1.96 \sqrt{0.0006} = 1.96(0.0245) = 0.048" />
              
              <p>Confidence interval:</p>
              <BlockMath math="0.6 \pm 0.048 = (0.552, 0.648)" />
              
              <p><strong>Interpretation:</strong> We are 95% confident that between 55.2% and 64.8% of all voters support the candidate.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}