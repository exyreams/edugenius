"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function ConfidenceIntervals() {
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
      label: "Confidence Intervals",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/confidence-intervals",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Confidence Intervals</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          A confidence interval is a range of values that is likely to contain the true value of an unknown population parameter. It provides an estimated range of values which is likely to include an unknown population parameter with a specified level of confidence.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Confidence Level:</strong> The probability that the interval contains the true parameter (e.g., 95%, 99%)</li>
          <li><strong>Margin of Error:</strong> The maximum expected difference between the true parameter and the point estimate</li>
          <li><strong>Critical Value:</strong> The value from the sampling distribution used to calculate the margin of error</li>
          <li><strong>Standard Error:</strong> The standard deviation of the sampling distribution</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">General Form</h2>
        <p className="mb-4">The general form of a confidence interval is:</p>
        <BlockMath math="\text{Point Estimate} \pm \text{Margin of Error}" />
        <BlockMath math="\text{Point Estimate} \pm (\text{Critical Value}) \times (\text{Standard Error})" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Confidence Interval for Population Mean (μ)</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 1: Known Population Standard Deviation (σ)</h3>
            <p className="mb-2">When σ is known, use the Z-distribution:</p>
            <BlockMath math="\bar{x} \pm z_{\alpha/2} \frac{\sigma}{\sqrt{n}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\bar{x}" /> = sample mean</li>
              <li><InlineMath math="z_{\alpha/2}" /> = critical Z-value</li>
              <li><InlineMath math="\sigma" /> = population standard deviation</li>
              <li><InlineMath math="n" /> = sample size</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 2: Unknown Population Standard Deviation (σ)</h3>
            <p className="mb-2">When σ is unknown, use the t-distribution:</p>
            <BlockMath math="\bar{x} \pm t_{\alpha/2, n-1} \frac{s}{\sqrt{n}}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="t_{\alpha/2, n-1}" /> = critical t-value with (n-1) degrees of freedom</li>
              <li><InlineMath math="s" /> = sample standard deviation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Confidence Interval for Population Proportion (p)</h2>
        <p className="mb-4">For a population proportion:</p>
        <BlockMath math="\hat{p} \pm z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="\hat{p}" /> = sample proportion</li>
          <li><InlineMath math="z_{\alpha/2}" /> = critical Z-value</li>
          <li><InlineMath math="n" /> = sample size</li>
        </ul>
        
        <p className="mb-4">Conditions: <InlineMath math="n\hat{p} \geq 5" /> and <InlineMath math="n(1-\hat{p}) \geq 5" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Confidence Interval for Difference of Means</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Independent Samples (σ₁, σ₂ known)</h3>
            <BlockMath math="(\bar{x}_1 - \bar{x}_2) \pm z_{\alpha/2} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Independent Samples (σ₁, σ₂ unknown, equal variances)</h3>
            <BlockMath math="(\bar{x}_1 - \bar{x}_2) \pm t_{\alpha/2, n_1+n_2-2} s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}" />
            
            <p className="mb-2">Where the pooled standard deviation is:</p>
            <BlockMath math="s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Paired Samples</h3>
            <BlockMath math="\bar{d} \pm t_{\alpha/2, n-1} \frac{s_d}{\sqrt{n}}" />
            
            <p className="mb-2">Where <InlineMath math="\bar{d}" /> is the mean of differences and <InlineMath math="s_d" /> is the standard deviation of differences.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Common Critical Values</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Z-Critical Values</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>90% confidence: <InlineMath math="z_{0.05} = 1.645" /></li>
              <li>95% confidence: <InlineMath math="z_{0.025} = 1.96" /></li>
              <li>99% confidence: <InlineMath math="z_{0.005} = 2.576" /></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">t-Critical Values (examples)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>95% confidence, df = 9: <InlineMath math="t_{0.025,9} = 2.262" /></li>
              <li>95% confidence, df = 24: <InlineMath math="t_{0.025,24} = 2.064" /></li>
              <li>99% confidence, df = 9: <InlineMath math="t_{0.005,9} = 3.250" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Interpretation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Correct Interpretation</h3>
            <p>"We are 95% confident that the true population parameter lies between [lower bound] and [upper bound]."</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">What 95% Confidence Means</h3>
            <p>If we repeated this sampling process many times and constructed confidence intervals each time, approximately 95% of those intervals would contain the true population parameter.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Misconceptions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>❌ "There's a 95% probability the parameter is in this interval"</li>
              <li>❌ "95% of the data falls in this interval"</li>
              <li>✅ "We're 95% confident the parameter is in this interval"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Factors Affecting Interval Width</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Confidence Level:</strong> Higher confidence → wider interval</li>
          <li><strong>Sample Size:</strong> Larger sample → narrower interval</li>
          <li><strong>Population Variability:</strong> More variability → wider interval</li>
          <li><strong>Sampling Method:</strong> Better sampling → more reliable intervals</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Confidence Interval for Mean (σ known)</h3>
          <p className="mb-2">A sample of 36 students has a mean test score of 78. The population standard deviation is known to be 12. Find a 95% confidence interval for the population mean.</p>
          
          <p className="mb-2">Given: <InlineMath math="\bar{x} = 78" />, <InlineMath math="\sigma = 12" />, <InlineMath math="n = 36" />, 95% confidence</p>
          <p className="mb-2">Critical value: <InlineMath math="z_{0.025} = 1.96" /></p>
          
          <p className="mb-2">Margin of error:</p>
          <BlockMath math="E = z_{\alpha/2} \frac{\sigma}{\sqrt{n}} = 1.96 \times \frac{12}{\sqrt{36}} = 1.96 \times 2 = 3.92" />
          
          <p className="mb-2">Confidence interval:</p>
          <BlockMath math="78 \pm 3.92 = (74.08, 81.92)" />
          
          <p>We are 95% confident that the true population mean is between 74.08 and 81.92.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Confidence Interval for Mean (σ unknown)</h3>
          <p className="mb-2">A sample of 16 measurements has a mean of 25.3 and standard deviation of 4.2. Find a 90% confidence interval for the population mean.</p>
          
          <p className="mb-2">Given: <InlineMath math="\bar{x} = 25.3" />, <InlineMath math="s = 4.2" />, <InlineMath math="n = 16" />, 90% confidence</p>
          <p className="mb-2">Degrees of freedom: df = 16 - 1 = 15</p>
          <p className="mb-2">Critical value: <InlineMath math="t_{0.05,15} = 1.753" /></p>
          
          <p className="mb-2">Margin of error:</p>
          <BlockMath math="E = t_{\alpha/2} \frac{s}{\sqrt{n}} = 1.753 \times \frac{4.2}{\sqrt{16}} = 1.753 \times 1.05 = 1.84" />
          
          <p className="mb-2">Confidence interval:</p>
          <BlockMath math="25.3 \pm 1.84 = (23.46, 27.14)" />
          
          <p>We are 90% confident that the true population mean is between 23.46 and 27.14.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Confidence Interval for Proportion</h3>
          <p className="mb-2">In a survey of 400 voters, 240 support a particular candidate. Find a 95% confidence interval for the true proportion of supporters.</p>
          
          <p className="mb-2">Given: <InlineMath math="n = 400" />, <InlineMath math="x = 240" /></p>
          <p className="mb-2">Sample proportion: <InlineMath math="\hat{p} = \frac{240}{400} = 0.6" /></p>
          <p className="mb-2">Critical value: <InlineMath math="z_{0.025} = 1.96" /></p>
          
          <p className="mb-2">Check conditions:</p>
          <p className="mb-1"><InlineMath math="n\hat{p} = 400 \times 0.6 = 240 \geq 5" /> ✓</p>
          <p className="mb-2"><InlineMath math="n(1-\hat{p}) = 400 \times 0.4 = 160 \geq 5" /> ✓</p>
          
          <p className="mb-2">Margin of error:</p>
          <BlockMath math="E = z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{n}} = 1.96 \sqrt{\frac{0.6 \times 0.4}{400}} = 1.96 \sqrt{0.0006} = 1.96 \times 0.0245 = 0.048" />
          
          <p className="mb-2">Confidence interval:</p>
          <BlockMath math="0.6 \pm 0.048 = (0.552, 0.648)" />
          
          <p>We are 95% confident that the true proportion of supporters is between 55.2% and 64.8%.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Sample Size Determination</h3>
          <p className="mb-2">How large a sample is needed to estimate a population mean within 2 units with 95% confidence, if the population standard deviation is 8?</p>
          
          <p className="mb-2">Given: <InlineMath math="E = 2" />, <InlineMath math="\sigma = 8" />, 95% confidence</p>
          <p className="mb-2">Critical value: <InlineMath math="z_{0.025} = 1.96" /></p>
          
          <p className="mb-2">From the margin of error formula:</p>
          <BlockMath math="E = z_{\alpha/2} \frac{\sigma}{\sqrt{n}}" />
          <BlockMath math="2 = 1.96 \times \frac{8}{\sqrt{n}}" />
          <BlockMath math="\sqrt{n} = \frac{1.96 \times 8}{2} = 7.84" />
          <BlockMath math="n = (7.84)^2 = 61.47" />
          
          <p>Therefore, a sample size of at least 62 is needed.</p>
        </div>
      </div>
    </div>
  );
}
