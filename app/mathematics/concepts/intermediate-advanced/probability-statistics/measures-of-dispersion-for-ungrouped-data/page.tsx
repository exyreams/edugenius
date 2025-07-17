"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function MeasuresOfDispersionForUngroupedData() {
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
      label: "Measures of Dispersion for Ungrouped Data",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/measures-of-dispersion-for-ungrouped-data",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">
        Measures of Dispersion for Ungrouped Data
      </h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
        <p className="mb-4">
          Measures of dispersion (or variability) describe how spread out or scattered the data values are around the central tendency. They provide information about the consistency and reliability of the data.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Importance</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Indicates the reliability of the average</li>
          <li>Helps compare the consistency of different datasets</li>
          <li>Essential for risk assessment and quality control</li>
          <li>Provides insight into data distribution patterns</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Range</h2>
        <p className="mb-4">
          The range is the simplest measure of dispersion, representing the difference between the maximum and minimum values.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\text{Range} = \text{Maximum value} - \text{Minimum value}" />
            <BlockMath math="R = x_{\max} - x_{\min}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Easy to calculate and understand</li>
              <li>Uses only two values from the dataset</li>
              <li>Highly sensitive to outliers</li>
              <li>Does not consider the distribution of values between extremes</li>
              <li>Always non-negative</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Coefficient of Range</h3>
            <p className="mb-2">A relative measure for comparing ranges:</p>
            <BlockMath math="\text{Coefficient of Range} = \frac{x_{\max} - x_{\min}}{x_{\max} + x_{\min}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Interquartile Range (IQR)</h2>
        <p className="mb-4">
          The IQR measures the spread of the middle 50% of the data, making it less sensitive to outliers than the range.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\text{IQR} = Q_3 - Q_1" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="Q_1" /> = First quartile (25th percentile)</li>
              <li><InlineMath math="Q_3" /> = Third quartile (75th percentile)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Quartile Calculation</h3>
            <p className="mb-2">For data arranged in ascending order:</p>
            <BlockMath math="Q_1 = \text{value at position } \frac{n+1}{4}" />
            <BlockMath math="Q_3 = \text{value at position } \frac{3(n+1)}{4}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Robust to outliers</li>
              <li>Focuses on the central portion of data</li>
              <li>Useful for identifying outliers</li>
              <li>Always non-negative</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Mean Absolute Deviation (MAD)</h2>
        <p className="mb-4">
          The MAD measures the average absolute difference between each data point and the mean.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\text{MAD} = \frac{\sum_{i=1}^{n} |x_i - \bar{x}|}{n}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="x_i" /> = individual data values</li>
              <li><InlineMath math="\bar{x}" /> = sample mean</li>
              <li><InlineMath math="|x_i - \bar{x}|" /> = absolute deviation from mean</li>
              <li><InlineMath math="n" /> = number of data values</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Uses all data values</li>
              <li>Less sensitive to outliers than variance</li>
              <li>Easy to interpret (same units as original data)</li>
              <li>Always non-negative</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Variance</h2>
        <p className="mb-4">
          Variance measures the average squared deviation from the mean, providing a measure of how spread out the data points are.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Population Variance</h3>
            <BlockMath math="\sigma^2 = \frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\sigma^2" /> = population variance</li>
              <li><InlineMath math="\mu" /> = population mean</li>
              <li><InlineMath math="N" /> = population size</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Variance</h3>
            <BlockMath math="s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="s^2" /> = sample variance</li>
              <li><InlineMath math="\bar{x}" /> = sample mean</li>
              <li><InlineMath math="n-1" /> = degrees of freedom (Bessel's correction)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Computational Formula</h3>
            <p className="mb-2">Alternative formula for easier calculation:</p>
            <BlockMath math="s^2 = \frac{\sum_{i=1}^{n} x_i^2 - \frac{(\sum_{i=1}^{n} x_i)^2}{n}}{n-1}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Uses all data values</li>
              <li>Sensitive to outliers (due to squaring)</li>
              <li>Units are squared units of original data</li>
              <li>Always non-negative</li>
              <li>Basis for many statistical procedures</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Standard Deviation</h2>
        <p className="mb-4">
          Standard deviation is the square root of variance, providing a measure of dispersion in the same units as the original data.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Population Standard Deviation</h3>
            <BlockMath math="\sigma = \sqrt{\frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Sample Standard Deviation</h3>
            <BlockMath math="s = \sqrt{\frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Same units as original data</li>
              <li>Most commonly used measure of dispersion</li>
              <li>Sensitive to outliers</li>
              <li>Always non-negative</li>
              <li>Used in many statistical distributions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Coefficient of Variation</h3>
            <p className="mb-2">A relative measure of dispersion:</p>
            <BlockMath math="CV = \frac{s}{\bar{x}} \times 100\%" />
            <p>Useful for comparing variability between datasets with different units or scales.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Comparison of Measures</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Measure</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Uses All Data</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Outlier Sensitivity</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Ease of Calculation</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Range</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Very High</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Very Easy</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Simple</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">IQR</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Partially</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Low</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Moderate</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Good</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">MAD</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Moderate</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Moderate</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Good</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Variance</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">High</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Moderate</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Difficult</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Std. Deviation</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">High</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Moderate</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Excellent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Calculations</h3>
          <p className="mb-2">Calculate all measures of dispersion for the dataset: 2, 4, 6, 8, 10</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given data:</h4>
              <p>n = 5, Mean = 6</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Range:</h4>
              <BlockMath math="R = 10 - 2 = 8" />
            </div>
            
            <div>
              <h4 className="font-semibold">IQR:</h4>
              <p className="mb-1">Q₁ position = (5+1)/4 = 1.5 → Q₁ = 3</p>
              <p className="mb-1">Q₃ position = 3(5+1)/4 = 4.5 → Q₃ = 9</p>
              <BlockMath math="IQR = 9 - 3 = 6" />
            </div>
            
            <div>
              <h4 className="font-semibold">MAD:</h4>
              <p className="mb-1">|2-6| + |4-6| + |6-6| + |8-6| + |10-6| = 4 + 2 + 0 + 2 + 4 = 12</p>
              <BlockMath math="MAD = \frac{12}{5} = 2.4" />
            </div>
            
            <div>
              <h4 className="font-semibold">Variance:</h4>
              <p className="mb-1">(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)² = 16 + 4 + 0 + 4 + 16 = 40</p>
              <BlockMath math="s^2 = \frac{40}{5-1} = \frac{40}{4} = 10" />
            </div>
            
            <div>
              <h4 className="font-semibold">Standard Deviation:</h4>
              <BlockMath math="s = \sqrt{10} \approx 3.16" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Effect of Outliers</h3>
          <p className="mb-2">Compare dispersion measures for: Dataset A: 1, 2, 3, 4, 5 vs Dataset B: 1, 2, 3, 4, 25</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Dataset A: 1, 2, 3, 4, 5</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Range = 4</li>
                <li>IQR = 3</li>
                <li>Standard Deviation ≈ 1.58</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Dataset B: 1, 2, 3, 4, 25</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Range = 24</li>
                <li>IQR = 3 (unchanged!)</li>
                <li>Standard Deviation ≈ 9.67</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold">Observation:</h4>
              <p>The outlier (25) greatly affects range and standard deviation but not IQR, demonstrating IQR's robustness.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Coefficient of Variation</h3>
          <p className="mb-2">Compare the variability of two datasets:</p>
          <p className="mb-2">Dataset A (heights in cm): Mean = 170, SD = 10</p>
          <p className="mb-2">Dataset B (weights in kg): Mean = 70, SD = 8</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">CV for heights:</h4>
              <BlockMath math="CV_A = \frac{10}{170} \times 100\% = 5.88\%" />
            </div>
            
            <div>
              <h4 className="font-semibold">CV for weights:</h4>
              <BlockMath math="CV_B = \frac{8}{70} \times 100\% = 11.43\%" />
            </div>
            
            <div>
              <h4 className="font-semibold">Conclusion:</h4>
              <p>Weights show more relative variability than heights.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Computational Formula for Variance</h3>
          <p className="mb-2">Calculate variance for: 3, 7, 11, 15 using the computational formula</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <p>n = 4, Σx = 36, Σx² = 3² + 7² + 11² + 15² = 9 + 49 + 121 + 225 = 404</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Using computational formula:</h4>
              <BlockMath math="s^2 = \frac{404 - \frac{36^2}{4}}{4-1} = \frac{404 - 324}{3} = \frac{80}{3} \approx 26.67" />
            </div>
            
            <div>
              <h4 className="font-semibold">Standard deviation:</h4>
              <BlockMath math="s = \sqrt{26.67} \approx 5.16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
