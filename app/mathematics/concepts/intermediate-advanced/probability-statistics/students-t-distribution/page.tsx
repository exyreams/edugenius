"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function StudentsTDistribution() {
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
      label: "Student's t-Distribution",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/students-t-distribution",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Student's t-Distribution</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The Student's t-distribution (or simply t-distribution) is a continuous probability distribution that arises when estimating the mean of a normally distributed population in situations where the sample size is small and the population standard deviation is unknown.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Characteristics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Bell-shaped and symmetric around zero</li>
          <li>Heavier tails than the standard normal distribution</li>
          <li>Approaches the standard normal distribution as degrees of freedom increase</li>
          <li>Defined by a single parameter: degrees of freedom (ν)</li>
          <li>Used when population standard deviation is unknown</li>
          <li>More spread out than the normal distribution for small sample sizes</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Density Function</h2>
        <p className="mb-4">The PDF of the t-distribution with ν degrees of freedom is:</p>
        <BlockMath math="f(t) = \frac{\Gamma\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\,\Gamma\left(\frac{\nu}{2}\right)} \left(1+\frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="\nu" /> = degrees of freedom</li>
          <li><InlineMath math="\Gamma" /> = gamma function</li>
          <li><InlineMath math="t" /> = the random variable</li>
        </ul>
        
        <p className="mb-4">Notation: <InlineMath math="T \sim t(\nu)" /> or <InlineMath math="T \sim t_\nu" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Degrees of Freedom</h2>
        <p className="mb-4">
          The degrees of freedom (ν) parameter determines the shape of the t-distribution:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">For One-Sample t-test</h3>
            <BlockMath math="\nu = n - 1" />
            <p>Where n is the sample size</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">For Two-Sample t-test (equal variances)</h3>
            <BlockMath math="\nu = n_1 + n_2 - 2" />
            <p>Where <InlineMath math="n_1" /> and <InlineMath math="n_2" /> are the sample sizes</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">For Welch's t-test (unequal variances)</h3>
            <BlockMath math="\nu = \frac{\left(\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}\right)^2}{\frac{s_1^4}{n_1^2(n_1-1)} + \frac{s_2^4}{n_2^2(n_2-1)}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Statistical Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean</h3>
            <BlockMath math="E[T] = 0 \quad \text{for } \nu > 1" />
            <p>The mean is undefined for ν ≤ 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Variance</h3>
            <BlockMath math="Var(T) = \frac{\nu}{\nu - 2} \quad \text{for } \nu > 2" />
            <p>The variance is undefined for ν ≤ 2</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <BlockMath math="\sigma = \sqrt{\frac{\nu}{\nu - 2}} \quad \text{for } \nu > 2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Skewness</h3>
            <BlockMath math="\text{Skewness} = 0 \quad \text{for } \nu > 3" />
            <p>The distribution is symmetric</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Kurtosis</h3>
            <BlockMath math="\text{Kurtosis} = \frac{6}{\nu - 4} + 3 \quad \text{for } \nu > 4" />
            <p>Excess kurtosis = <InlineMath math="\frac{6}{\nu - 4}" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Other Distributions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Normal Distribution</h3>
            <p className="mb-2">As ν → ∞, the t-distribution approaches the standard normal distribution N(0,1)</p>
            <p>For practical purposes, when ν ≥ 30, the t-distribution is very close to the normal distribution</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cauchy Distribution</h3>
            <p className="mb-2">When ν = 1, the t-distribution becomes the Cauchy distribution</p>
            <p>The Cauchy distribution has undefined mean and variance</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Chi-Square Distribution</h3>
            <p className="mb-2">If Z ~ N(0,1) and V ~ χ²(ν), then:</p>
            <BlockMath math="T = \frac{Z}{\sqrt{V/\nu}} \sim t(\nu)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. One-Sample t-test</h3>
            <p className="mb-2">Testing if a sample mean differs from a hypothesized population mean:</p>
            <BlockMath math="t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}" />
            <p>Where <InlineMath math="\bar{x}" /> is sample mean, <InlineMath math="\mu_0" /> is hypothesized mean, s is sample standard deviation</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Two-Sample t-test</h3>
            <p className="mb-2">Comparing means of two independent samples:</p>
            <BlockMath math="t = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}" />
            <p className="mb-2">Where the pooled standard deviation is:</p>
            <BlockMath math="s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Paired t-test</h3>
            <p className="mb-2">Testing the mean of paired differences:</p>
            <BlockMath math="t = \frac{\bar{d}}{s_d/\sqrt{n}}" />
            <p>Where <InlineMath math="\bar{d}" /> is the mean difference and <InlineMath math="s_d" /> is the standard deviation of differences</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Confidence Intervals</h3>
            <p className="mb-2">Constructing confidence intervals for the population mean:</p>
            <BlockMath math="\bar{x} \pm t_{\alpha/2, n-1} \frac{s}{\sqrt{n}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Regression Analysis</h3>
            <p>Testing significance of regression coefficients and constructing confidence intervals</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: One-Sample t-test</h3>
          <p className="mb-2">A manufacturer claims that their light bulbs last 1000 hours on average. A sample of 16 bulbs has a mean life of 980 hours with a standard deviation of 40 hours. Test the claim at α = 0.05.</p>
          
          <p className="mb-2">Given: n = 16, <InlineMath math="\bar{x}" /> = 980, s = 40, <InlineMath math="\mu_0" /> = 1000</p>
          
          <p className="mb-2">Hypotheses:</p>
          <p className="mb-1">H₀: μ = 1000 (claim is true)</p>
          <p className="mb-2">H₁: μ ≠ 1000 (claim is false)</p>
          
          <p className="mb-2">Test statistic:</p>
          <BlockMath math="t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{980 - 1000}{40/\sqrt{16}} = \frac{-20}{10} = -2" />
          
          <p className="mb-2">Degrees of freedom: ν = n - 1 = 15</p>
          <p className="mb-2">Critical values: <InlineMath math="t_{0.025, 15} = \pm 2.131" /></p>
          
          <p className="mb-2">Since |−2| = 2 {"<"} 2.131, we fail to reject H₀.</p>
          <p>There is insufficient evidence to reject the manufacturer's claim at the 5% significance level.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Confidence Interval</h3>
          <p className="mb-2">Using the data from Example 1, construct a 95% confidence interval for the true mean life of the bulbs.</p>
          
          <p className="mb-2">Given: <InlineMath math="\bar{x}" /> = 980, s = 40, n = 16, <InlineMath math="t_{0.025, 15}" /> = 2.131</p>
          
          <p className="mb-2">Confidence interval:</p>
          <BlockMath math="\bar{x} \pm t_{\alpha/2, n-1} \frac{s}{\sqrt{n}} = 980 \pm 2.131 \times \frac{40}{\sqrt{16}}" />
          <BlockMath math="= 980 \pm 2.131 \times 10 = 980 \pm 21.31" />
          <BlockMath math="= (958.69, 1001.31)" />
          
          <p>We are 95% confident that the true mean life of the bulbs is between 958.69 and 1001.31 hours.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Two-Sample t-test</h3>
          <p className="mb-2">Two teaching methods are compared. Method A: n₁ = 12, <InlineMath math="\bar{x}_1" /> = 85, s₁ = 8. Method B: n₂ = 15, <InlineMath math="\bar{x}_2" /> = 78, s₂ = 10. Test if there's a significant difference at α = 0.01.</p>
          
          <p className="mb-2">Hypotheses:</p>
          <p className="mb-1">H₀: μ₁ = μ₂ (no difference)</p>
          <p className="mb-2">H₁: μ₁ ≠ μ₂ (there is a difference)</p>
          
          <p className="mb-2">Pooled standard deviation:</p>
          <BlockMath math="s_p = \sqrt{\frac{(12-1) \times 8^2 + (15-1) \times 10^2}{12 + 15 - 2}} = \sqrt{\frac{11 \times 64 + 14 \times 100}{25}} = \sqrt{\frac{2104}{25}} = 9.18" />
          
          <p className="mb-2">Test statistic:</p>
          <BlockMath math="t = \frac{85 - 78}{9.18\sqrt{\frac{1}{12} + \frac{1}{15}}} = \frac{7}{9.18 \times 0.395} = \frac{7}{3.63} = 1.93" />
          
          <p className="mb-2">Degrees of freedom: ν = 12 + 15 - 2 = 25</p>
          <p className="mb-2">Critical values: <InlineMath math="t_{0.005, 25} = \pm 2.787" /></p>
          
          <p className="mb-2">Since |1.93| = 1.93 {"<"} 2.787, we fail to reject H₀.</p>
          <p>There is insufficient evidence of a significant difference between the two teaching methods at the 1% level.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Paired t-test</h3>
          <p className="mb-2">A weight loss program is tested on 8 people. Their weights before and after are recorded. Test if the program is effective at α = 0.05.</p>
          
          <p className="mb-2">Differences (Before - After): 3, 5, 2, 4, 1, 6, 3, 4</p>
          
          <p className="mb-2">Calculate: <InlineMath math="\bar{d}" /> = 3.5, <InlineMath math="s_d" /> = 1.69, n = 8</p>
          
          <p className="mb-2">Hypotheses:</p>
          <p className="mb-1">H₀: μd = 0 (no weight loss)</p>
          <p className="mb-2">H₁: μd {">"} 0 (weight loss occurred)</p>
          
          <p className="mb-2">Test statistic:</p>
          <BlockMath math="t = \frac{\bar{d}}{s_d/\sqrt{n}} = \frac{3.5}{1.69/\sqrt{8}} = \frac{3.5}{0.597} = 5.86" />
          
          <p className="mb-2">Degrees of freedom: ν = n - 1 = 7</p>
          <p className="mb-2">Critical value: <InlineMath math="t_{0.05, 7}" /> = 1.895</p>
          
          <p className="mb-2">Since 5.86 {">"} 1.895, we reject H₀.</p>
          <p>There is strong evidence that the weight loss program is effective.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Comparison with Normal Distribution</h3>
          <p className="mb-2">Compare critical values for 95% confidence intervals:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Degrees of Freedom</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">t-value</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">z-value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12.706</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2 text-center">1.96</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2.571</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2 text-center">1.96</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2.228</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2 text-center">1.96</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">30</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2.042</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2 text-center">1.96</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">∞</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1.96</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2 text-center">1.96</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">Notice how the t-values approach the z-value as degrees of freedom increase.</p>
        </div>
      </div>
    </div>
  );
}
