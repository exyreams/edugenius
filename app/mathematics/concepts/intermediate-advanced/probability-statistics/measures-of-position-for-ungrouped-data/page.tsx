"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function MeasuresOfPositionForUngroupedData() {
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
      label: "Measures of Position for Ungrouped Data",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/measures-of-position-for-ungrouped-data",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Measures of Position for Ungrouped Data</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
        <p className="mb-4">
          Measures of position (also called measures of location) describe where a particular data value stands in relation to the rest of the dataset. They help identify the relative standing of observations and divide the data into meaningful parts.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Types of Measures of Position</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Percentiles:</strong> Divide data into 100 equal parts</li>
          <li><strong>Quartiles:</strong> Divide data into 4 equal parts</li>
          <li><strong>Deciles:</strong> Divide data into 10 equal parts</li>
          <li><strong>Quintiles:</strong> Divide data into 5 equal parts</li>
          <li><strong>Z-scores:</strong> Standardized positions relative to the mean</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Percentiles</h2>
        <p className="mb-4">
          Percentiles divide a dataset into 100 equal parts. The kth percentile is the value below which k% of the data falls.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula for Position</h3>
            <p className="mb-2">For the kth percentile (P_k):</p>
            <BlockMath math="L_k = \frac{k(n+1)}{100}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="L_k" /> = position of the kth percentile</li>
              <li><InlineMath math="k" /> = percentile rank (1 to 99)</li>
              <li><InlineMath math="n" /> = number of data values</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Calculation Steps</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Arrange data in ascending order</li>
              <li>Calculate the position using the formula</li>
              <li>If L_k is a whole number, P_k is the average of values at positions L_k and L_k+1</li>
              <li>If L_k is not a whole number, P_k is the value at position ⌈L_k⌉ (ceiling)</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Percentiles</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>P₂₅:</strong> 25th percentile (First quartile, Q₁)</li>
              <li><strong>P₅₀:</strong> 50th percentile (Median, Q₂)</li>
              <li><strong>P₇₅:</strong> 75th percentile (Third quartile, Q₃)</li>
              <li><strong>P₉₀:</strong> 90th percentile</li>
              <li><strong>P₉₅:</strong> 95th percentile</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Quartiles</h2>
        <p className="mb-4">
          Quartiles divide the dataset into four equal parts, each containing 25% of the data.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">The Four Quartiles</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Q₁ (First Quartile):</strong> 25% of data below this value</li>
              <li><strong>Q₂ (Second Quartile):</strong> 50% of data below this value (Median)</li>
              <li><strong>Q₃ (Third Quartile):</strong> 75% of data below this value</li>
              <li><strong>Q₄ (Fourth Quartile):</strong> Maximum value (100% of data below)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Formulas</h3>
            <BlockMath math="Q_1 = P_{25}, \quad Q_2 = P_{50}, \quad Q_3 = P_{75}" />
            
            <p className="mb-2">Position formulas:</p>
            <BlockMath math="L_{Q_1} = \frac{n+1}{4}, \quad L_{Q_2} = \frac{2(n+1)}{4}, \quad L_{Q_3} = \frac{3(n+1)}{4}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Five-Number Summary</h3>
            <p className="mb-2">The five-number summary consists of:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Minimum value</li>
              <li>Q₁ (First quartile)</li>
              <li>Q₂ (Median)</li>
              <li>Q₃ (Third quartile)</li>
              <li>Maximum value</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Deciles</h2>
        <p className="mb-4">
          Deciles divide the dataset into 10 equal parts, each containing 10% of the data.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <p className="mb-2">For the kth decile (D_k), where k = 1, 2, ..., 9:</p>
            <BlockMath math="L_{D_k} = \frac{k(n+1)}{10}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Relationship to Percentiles</h3>
            <BlockMath math="D_k = P_{10k}" />
            <p className="mb-2">For example: D₁ = P₁₀, D₅ = P₅₀ (median), D₉ = P₉₀</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Quintiles</h2>
        <p className="mb-4">
          Quintiles divide the dataset into 5 equal parts, each containing 20% of the data.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <p className="mb-2">For the kth quintile (Qu_k), where k = 1, 2, 3, 4:</p>
            <BlockMath math="L_{Qu_k} = \frac{k(n+1)}{5}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Relationship to Percentiles</h3>
            <BlockMath math="Qu_k = P_{20k}" />
            <p className="mb-2">For example: Qu₁ = P₂₀, Qu₂ = P₄₀, Qu₃ = P₆₀, Qu₄ = P₈₀</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Z-Scores (Standard Scores)</h2>
        <p className="mb-4">
          Z-scores indicate how many standard deviations a data point is from the mean.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="z = \frac{x - \bar{x}}{s}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="z" /> = z-score</li>
              <li><InlineMath math="x" /> = data value</li>
              <li><InlineMath math="\bar{x}" /> = sample mean</li>
              <li><InlineMath math="s" /> = sample standard deviation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Interpretation</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>z = 0:</strong> Value equals the mean</li>
              <li><strong>z {">"} 0:</strong> Value is above the mean</li>
              <li><strong>z {"<"} 0:</strong> Value is below the mean</li>
              <li><strong>|z| {">"} 2:</strong> Usually considered an outlier</li>
              <li><strong>|z| {">"} 3:</strong> Extreme outlier</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Dimensionless (no units)</li>
              <li>Allows comparison across different datasets</li>
              <li>Mean of z-scores is always 0</li>
              <li>Standard deviation of z-scores is always 1</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Percentile Rank</h2>
        <p className="mb-4">
          Percentile rank tells us what percentage of values in the dataset are below a given value.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\text{Percentile Rank} = \frac{\text{Number of values below } x + 0.5 \times \text{Number of values equal to } x}{n} \times 100" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Formula</h3>
            <p className="mb-2">For a value at position k in ordered data:</p>
            <BlockMath math="\text{Percentile Rank} = \frac{k - 0.5}{n} \times 100" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Box Plot and Outlier Detection</h2>
        <p className="mb-4">
          Measures of position are essential for creating box plots and identifying outliers.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Interquartile Range (IQR)</h3>
            <BlockMath math="IQR = Q_3 - Q_1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Outlier Detection</h3>
            <p className="mb-2">A value is considered an outlier if:</p>
            <BlockMath math="x < Q_1 - 1.5 \times IQR \quad \text{or} \quad x > Q_3 + 1.5 \times IQR" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Extreme Outliers</h3>
            <p className="mb-2">A value is considered an extreme outlier if:</p>
            <BlockMath math="x < Q_1 - 3 \times IQR \quad \text{or} \quad x > Q_3 + 3 \times IQR" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Calculating Quartiles</h3>
          <p className="mb-2">Find Q₁, Q₂, and Q₃ for the dataset: 12, 15, 18, 20, 22, 25, 28, 30, 35</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <p>n = 9, data already ordered</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Q₁ position:</h4>
              <BlockMath math="L_{Q_1} = \frac{9+1}{4} = 2.5" />
              <p>Q₁ = average of 2nd and 3rd values = (15 + 18)/2 = 16.5</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Q₂ position:</h4>
              <BlockMath math="L_{Q_2} = \frac{2(9+1)}{4} = 5" />
              <p>Q₂ = 5th value = 22</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Q₃ position:</h4>
              <BlockMath math="L_{Q_3} = \frac{3(9+1)}{4} = 7.5" />
              <p>Q₃ = average of 7th and 8th values = (28 + 30)/2 = 29</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Calculating Percentiles</h3>
          <p className="mb-2">Find the 75th percentile for the dataset: 10, 12, 14, 16, 18, 20, 22, 24, 26, 28</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Given:</h4>
              <p>n = 10, k = 75</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Position calculation:</h4>
              <BlockMath math="L_{75} = \frac{75(10+1)}{100} = \frac{825}{100} = 8.25" />
            </div>
            
            <div>
              <h4 className="font-semibold">Since 8.25 is not a whole number:</h4>
              <p>P₇₅ = value at position ⌈8.25⌉ = 9th value = 26</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Z-Score Calculation</h3>
          <p className="mb-2">For the dataset: 85, 90, 78, 92, 88, 76, 95, 82, find the z-score for the value 95.</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Calculate mean and standard deviation:</h4>
              <p>Mean = 85.75, Standard deviation ≈ 6.67</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Z-score for x = 95:</h4>
              <BlockMath math="z = \frac{95 - 85.75}{6.67} = \frac{9.25}{6.67} \approx 1.39" />
            </div>
            
            <div>
              <h4 className="font-semibold">Interpretation:</h4>
              <p>The value 95 is 1.39 standard deviations above the mean.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Percentile Rank</h3>
          <p className="mb-2">Find the percentile rank of 18 in the dataset: 12, 15, 16, 18, 18, 20, 22, 25, 28</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Count values:</h4>
              <p>Values below 18: 3 (12, 15, 16)</p>
              <p>Values equal to 18: 2</p>
              <p>Total values: 9</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Percentile rank:</h4>
              <BlockMath math="\text{Percentile Rank} = \frac{3 + 0.5 \times 2}{9} \times 100 = \frac{4}{9} \times 100 \approx 44.4\%" />
            </div>
            
            <div>
              <h4 className="font-semibold">Interpretation:</h4>
              <p>About 44.4% of the values are below 18.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Outlier Detection</h3>
          <p className="mb-2">Identify outliers in the dataset: 10, 12, 14, 15, 16, 18, 20, 22, 45</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Calculate quartiles:</h4>
              <p>Q₁ = 13, Q₂ = 16, Q₃ = 21</p>
              <p>IQR = 21 - 13 = 8</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Outlier boundaries:</h4>
              <p>Lower boundary: 13 - 1.5(8) = 1</p>
              <p>Upper boundary: 21 + 1.5(8) = 33</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Conclusion:</h4>
              <p>45 {">"} 33, so 45 is an outlier.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
