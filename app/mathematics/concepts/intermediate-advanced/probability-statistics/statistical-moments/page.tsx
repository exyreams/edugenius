"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function StatisticalMoments() {
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
      label: "Statistical Moments",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/statistical-moments",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Statistical Moments</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          Statistical moments are quantitative measures that describe the shape and characteristics of a probability distribution. They provide information about the central tendency, spread, asymmetry, and tail behavior of data or probability distributions.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">General Definition</h2>
        <p className="mb-4">The k-th moment about a point c is defined as:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">For Discrete Random Variables</h3>
            <BlockMath math="M_k = E[(X - c)^k] = \sum_{i} (x_i - c)^k P(X = x_i)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">For Continuous Random Variables</h3>
            <BlockMath math="M_k = E[(X - c)^k] = \int_{-\infty}^{\infty} (x - c)^k f(x) dx" />
          </div>
        </div>
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="k" /> = order of the moment (positive integer)</li>
          <li><InlineMath math="c" /> = reference point</li>
          <li><InlineMath math="f(x)" /> = probability density function</li>
          <li><InlineMath math="P(X = x_i)" /> = probability mass function</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Types of Moments</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Raw Moments (About Origin)</h3>
            <p className="mb-2">Moments calculated about the origin (c = 0):</p>
            <BlockMath math="M_k' = E[X^k]" />
            
            <div className="space-y-2 ml-4">
              <div>
                <h4 className="font-semibold">First Raw Moment (k = 1)</h4>
                <BlockMath math="M_1' = E[X] = \mu \text{ (mean)}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Second Raw Moment (k = 2)</h4>
                <BlockMath math="M_2' = E[X^2]" />
              </div>
              
              <div>
                <h4 className="font-semibold">Third Raw Moment (k = 3)</h4>
                <BlockMath math="M_3' = E[X^3]" />
              </div>
              
              <div>
                <h4 className="font-semibold">Fourth Raw Moment (k = 4)</h4>
                <BlockMath math="M_4' = E[X^4]" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Central Moments (About Mean)</h3>
            <p className="mb-2">Moments calculated about the mean (c = μ):</p>
            <BlockMath math="M_k = E[(X - \mu)^k]" />
            
            <div className="space-y-2 ml-4">
              <div>
                <h4 className="font-semibold">First Central Moment (k = 1)</h4>
                <BlockMath math="M_1 = E[X - \mu] = 0" />
                <p>Always equals zero by definition</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Second Central Moment (k = 2)</h4>
                <BlockMath math="M_2 = E[(X - \mu)^2] = \sigma^2 \text{ (variance)}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Third Central Moment (k = 3)</h4>
                <BlockMath math="M_3 = E[(X - \mu)^3]" />
                <p>Related to skewness</p>
              </div>
              
              <div>
                <h4 className="font-semibold">Fourth Central Moment (k = 4)</h4>
                <BlockMath math="M_4 = E[(X - \mu)^4]" />
                <p>Related to kurtosis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship Between Raw and Central Moments</h2>
        <p className="mb-4">Central moments can be expressed in terms of raw moments:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Second Central Moment</h3>
            <BlockMath math="M_2 = M_2' - (M_1')^2 = E[X^2] - \mu^2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Third Central Moment</h3>
            <BlockMath math="M_3 = M_3' - 3M_1'M_2' + 2(M_1')^3" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Fourth Central Moment</h3>
            <BlockMath math="M_4 = M_4' - 4M_1'M_3' + 6(M_1')^2M_2' - 3(M_1')^4" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Standardized Moments</h2>
        <p className="mb-4">Standardized moments are dimensionless quantities obtained by dividing central moments by appropriate powers of the standard deviation:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Skewness (Third Standardized Moment)</h3>
            <BlockMath math="\text{Skewness} = \gamma_1 = \frac{M_3}{\sigma^3} = \frac{E[(X - \mu)^3]}{\sigma^3}" />
            
            <p className="mb-2">Interpretation:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>γ₁ = 0: Symmetric distribution</li>
              <li>γ₁ {">"} 0: Right-skewed (positive skew)</li>
              <li>γ₁ {"<"} 0: Left-skewed (negative skew)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Kurtosis (Fourth Standardized Moment)</h3>
            <BlockMath math="\text{Kurtosis} = \gamma_2 = \frac{M_4}{\sigma^4} = \frac{E[(X - \mu)^4]}{\sigma^4}" />
            
            <p className="mb-2">Excess Kurtosis:</p>
            <BlockMath math="\text{Excess Kurtosis} = \gamma_2 - 3" />
            
            <p className="mb-2">Interpretation:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Excess kurtosis = 0: Mesokurtic (normal-like tails)</li>
              <li>Excess kurtosis {">"} 0: Leptokurtic (heavy tails)</li>
              <li>Excess kurtosis {"<"} 0: Platykurtic (light tails)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Sample Moments</h2>
        <p className="mb-4">For a sample of n observations, sample moments are calculated as:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Raw Moments</h3>
            <BlockMath math="m_k' = \frac{1}{n} \sum_{i=1}^{n} x_i^k" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Central Moments</h3>
            <BlockMath math="m_k = \frac{1}{n} \sum_{i=1}^{n} (x_i - \bar{x})^k" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Variance (Unbiased)</h3>
            <BlockMath math="s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Skewness</h3>
            <BlockMath math="g_1 = \frac{\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^3}{\left(\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2\right)^{3/2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Kurtosis</h3>
            <BlockMath math="g_2 = \frac{\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^4}{\left(\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2\right)^2}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Moment Generating Function</h2>
        <p className="mb-4">The moment generating function (MGF) is a function that uniquely determines a probability distribution:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Definition</h3>
            <BlockMath math="M_X(t) = E[e^{tX}]" />
            
            <p className="mb-2">For discrete variables:</p>
            <BlockMath math="M_X(t) = \sum_{x} e^{tx} P(X = x)" />
            
            <p className="mb-2">For continuous variables:</p>
            <BlockMath math="M_X(t) = \int_{-\infty}^{\infty} e^{tx} f(x) dx" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Generating Moments</h3>
            <p className="mb-2">The k-th moment can be found by:</p>
            <BlockMath math="M_k' = E[X^k] = \frac{d^k M_X(t)}{dt^k}\bigg|_{t=0}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>If MGF exists, it uniquely determines the distribution</li>
              <li>MGF of sum of independent variables is the product of their MGFs</li>
              <li>MGF of aX + b is <InlineMath math="e^{bt}M_X(at)" /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Calculating Sample Moments</h3>
          <p className="mb-2">Given data: 2, 4, 6, 8, 10</p>
          
          <p className="mb-2">Sample mean (first raw moment):</p>
          <BlockMath math="m_1' = \bar{x} = \frac{2 + 4 + 6 + 8 + 10}{5} = 6" />
          
          <p className="mb-2">Second raw moment:</p>
          <BlockMath math="m_2' = \frac{2^2 + 4^2 + 6^2 + 8^2 + 10^2}{5} = \frac{4 + 16 + 36 + 64 + 100}{5} = 44" />
          
          <p className="mb-2">Sample variance (second central moment):</p>
          <BlockMath math="s^2 = \frac{1}{4}[(2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2]" />
          <BlockMath math="= \frac{1}{4}[16 + 4 + 0 + 4 + 16] = \frac{40}{4} = 10" />
          
          <p className="mb-2">Alternative calculation:</p>
          <BlockMath math="s^2 = \frac{n}{n-1}(m_2' - (m_1')^2) = \frac{5}{4}(44 - 36) = \frac{5}{4} \times 8 = 10" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Normal Distribution Moments</h3>
          <p className="mb-2">For X ~ N(μ, σ²):</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Raw Moments</h4>
              <p>M₁' = μ</p>
              <p>M₂' = σ² + μ²</p>
              <p>M₃' = μ³ + 3μσ²</p>
              <p>M₄' = μ⁴ + 6μ²σ² + 3σ⁴</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Central Moments</h4>
              <p>M₁ = 0</p>
              <p>M₂ = σ²</p>
              <p>M₃ = 0</p>
              <p>M₄ = 3σ⁴</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Standardized Moments</h4>
              <p>Skewness = 0 (symmetric)</p>
              <p>Kurtosis = 3 (mesokurtic)</p>
              <p>Excess Kurtosis = 0</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Exponential Distribution Moments</h3>
          <p className="mb-2">For X ~ Exp(λ) with PDF f(x) = λe^(-λx), x ≥ 0:</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Raw Moments</h4>
              <BlockMath math="M_k' = E[X^k] = \frac{k!}{\lambda^k}" />
              <p>M₁' = 1/λ</p>
              <p>M₂' = 2/λ²</p>
              <p>M₃' = 6/λ³</p>
              <p>M₄' = 24/λ⁴</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Central Moments</h4>
              <p>M₁ = 0</p>
              <p>M₂ = 1/λ² (variance)</p>
              <p>M₃ = 2/λ³</p>
              <p>M₄ = 9/λ⁴</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Standardized Moments</h4>
              <p>Skewness = 2 (right-skewed)</p>
              <p>Kurtosis = 9 (leptokurtic)</p>
              <p>Excess Kurtosis = 6</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Moment Generating Function</h3>
          <p className="mb-2">For X ~ N(μ, σ²), the MGF is:</p>
          <BlockMath math="M_X(t) = e^{\mu t + \frac{\sigma^2 t^2}{2}}" />
          
          <p className="mb-2">Finding the first moment:</p>
          <BlockMath math="\frac{dM_X(t)}{dt} = (\mu + \sigma^2 t)e^{\mu t + \frac{\sigma^2 t^2}{2}}" />
          <BlockMath math="M_1' = \frac{dM_X(t)}{dt}\bigg|_{t=0} = \mu" />
          
          <p className="mb-2">Finding the second moment:</p>
          <BlockMath math="\frac{d^2M_X(t)}{dt^2} = [(\mu + \sigma^2 t)^2 + \sigma^2]e^{\mu t + \frac{\sigma^2 t^2}{2}}" />
          <BlockMath math="M_2' = \frac{d^2M_X(t)}{dt^2}\bigg|_{t=0} = \mu^2 + \sigma^2" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Interpreting Skewness and Kurtosis</h3>
          <p className="mb-2">Consider three datasets:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Dataset</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Mean</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Std Dev</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Skewness</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Excess Kurtosis</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">A</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Normal-like</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">B</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1.5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Right-skewed, heavy tails</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">C</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-0.8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Left-skewed, light tails</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">These moments help characterize the shape and behavior of distributions beyond just mean and variance.</p>
        </div>
      </div>
    </div>
  );
}
