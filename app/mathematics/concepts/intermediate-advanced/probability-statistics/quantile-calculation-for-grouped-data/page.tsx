"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function QuantileCalculationForGroupedData() {
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
      label: "Quantile Calculation for Grouped Data",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/quantile-calculation-for-grouped-data",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Quantile Calculation for Grouped Data</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          Quantiles are values that divide a dataset into equal parts. For grouped data (data organized in frequency distributions), we use interpolation methods to estimate quantiles since we don't have individual data points.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Types of Quantiles</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Quartiles (Q₁, Q₂, Q₃):</strong> Divide data into 4 equal parts</li>
          <li><strong>Deciles (D₁, D₂, ..., D₉):</strong> Divide data into 10 equal parts</li>
          <li><strong>Percentiles (P₁, P₂, ..., P₉₉):</strong> Divide data into 100 equal parts</li>
          <li><strong>Median:</strong> The 50th percentile (Q₂ = D₅ = P₅₀)</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">General Formula for Quantiles</h2>
        <p className="mb-4">For any quantile in grouped data:</p>
        <BlockMath math="Q_k = L + \left(\frac{\frac{k \cdot n}{m} - F}{f}\right) \times c" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="Q_k" /> = the k-th quantile</li>
          <li><InlineMath math="L" /> = lower boundary of the quantile class</li>
          <li><InlineMath math="n" /> = total frequency (sample size)</li>
          <li><InlineMath math="m" /> = number of parts (4 for quartiles, 10 for deciles, 100 for percentiles)</li>
          <li><InlineMath math="k" /> = quantile number (1, 2, 3 for quartiles; 1-9 for deciles; 1-99 for percentiles)</li>
          <li><InlineMath math="F" /> = cumulative frequency before the quantile class</li>
          <li><InlineMath math="f" /> = frequency of the quantile class</li>
          <li><InlineMath math="c" /> = width of the quantile class</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Quartiles for Grouped Data</h2>
        <p className="mb-4">Quartiles divide the data into four equal parts:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">First Quartile (Q₁)</h3>
            <p className="mb-2">Position: <InlineMath math="\frac{n}{4}" /></p>
            <BlockMath math="Q_1 = L + \left(\frac{\frac{n}{4} - F}{f}\right) \times c" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Second Quartile (Q₂) - Median</h3>
            <p className="mb-2">Position: <InlineMath math="\frac{n}{2}" /></p>
            <BlockMath math="Q_2 = L + \left(\frac{\frac{n}{2} - F}{f}\right) \times c" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Third Quartile (Q₃)</h3>
            <p className="mb-2">Position: <InlineMath math="\frac{3n}{4}" /></p>
            <BlockMath math="Q_3 = L + \left(\frac{\frac{3n}{4} - F}{f}\right) \times c" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Deciles for Grouped Data</h2>
        <p className="mb-4">Deciles divide the data into ten equal parts:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">k-th Decile (Dₖ)</h3>
            <p className="mb-2">Position: <InlineMath math="\frac{k \cdot n}{10}" /> where k = 1, 2, ..., 9</p>
            <BlockMath math="D_k = L + \left(\frac{\frac{k \cdot n}{10} - F}{f}\right) \times c" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Deciles</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>D₁ = 10th percentile</li>
              <li>D₅ = 50th percentile = Median</li>
              <li>D₉ = 90th percentile</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Percentiles for Grouped Data</h2>
        <p className="mb-4">Percentiles divide the data into one hundred equal parts:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">k-th Percentile (Pₖ)</h3>
            <p className="mb-2">Position: <InlineMath math="\frac{k \cdot n}{100}" /> where k = 1, 2, ..., 99</p>
            <BlockMath math="P_k = L + \left(\frac{\frac{k \cdot n}{100} - F}{f}\right) \times c" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Percentiles</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>P₂₅ = Q₁ (First quartile)</li>
              <li>P₅₀ = Q₂ = Median</li>
              <li>P₇₅ = Q₃ (Third quartile)</li>
              <li>P₉₀ = D₉ (Ninth decile)</li>
              <li>P₉₅ = 95th percentile</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Steps to Calculate Quantiles</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Create a frequency distribution table with cumulative frequencies</li>
          <li>Calculate the position of the desired quantile using the appropriate formula</li>
          <li>Identify the quantile class (the class containing the quantile position)</li>
          <li>Apply the interpolation formula to find the exact quantile value</li>
          <li>Verify the result makes sense within the context of the data</li>
        </ol>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Interquartile Range (IQR)</h2>
        <p className="mb-4">The IQR measures the spread of the middle 50% of the data:</p>
        <BlockMath math="IQR = Q_3 - Q_1" />
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Uses of IQR</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Measure of variability less affected by outliers</li>
              <li>Used in box plots to identify outliers</li>
              <li>Robust measure of spread</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Outlier Detection</h3>
            <p className="mb-2">Values are considered outliers if they fall outside:</p>
            <BlockMath math="[Q_1 - 1.5 \times IQR, Q_3 + 1.5 \times IQR]" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Calculating Quartiles</h3>
          <p className="mb-2">Find Q₁, Q₂, and Q₃ for the following frequency distribution:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Class Interval</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Frequency (f)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Cumulative Frequency (F)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10-20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20-30</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">13</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">30-40</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">28</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">40-50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">40</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50-60</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">Given: n = 50</p>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold">First Quartile (Q₁)</h4>
              <p className="mb-2">Position: n/4 = 50/4 = 12.5</p>
              <p className="mb-2">Q₁ class: 20-30 (since 12.5 falls between cumulative frequencies 5 and 13)</p>
              <p className="mb-2">L = 20, F = 5, f = 8, c = 10</p>
              <BlockMath math="Q_1 = 20 + \left(\frac{12.5 - 5}{8}\right) \times 10 = 20 + \frac{7.5}{8} \times 10 = 20 + 9.375 = 29.375" />
            </div>
            
            <div>
              <h4 className="font-semibold">Second Quartile (Q₂) - Median</h4>
              <p className="mb-2">Position: n/2 = 50/2 = 25</p>
              <p className="mb-2">Q₂ class: 30-40 (since 25 falls between cumulative frequencies 13 and 28)</p>
              <p className="mb-2">L = 30, F = 13, f = 15, c = 10</p>
              <BlockMath math="Q_2 = 30 + \left(\frac{25 - 13}{15}\right) \times 10 = 30 + \frac{12}{15} \times 10 = 30 + 8 = 38" />
            </div>
            
            <div>
              <h4 className="font-semibold">Third Quartile (Q₃)</h4>
              <p className="mb-2">Position: 3n/4 = 3×50/4 = 37.5</p>
              <p className="mb-2">Q₃ class: 40-50 (since 37.5 falls between cumulative frequencies 28 and 40)</p>
              <p className="mb-2">L = 40, F = 28, f = 12, c = 10</p>
              <BlockMath math="Q_3 = 40 + \left(\frac{37.5 - 28}{12}\right) \times 10 = 40 + \frac{9.5}{12} \times 10 = 40 + 7.92 = 47.92" />
            </div>
            
            <div>
              <h4 className="font-semibold">Interquartile Range</h4>
              <BlockMath math="IQR = Q_3 - Q_1 = 47.92 - 29.375 = 18.545" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Calculating Deciles</h3>
          <p className="mb-2">Using the same data, find D₃ and D₇:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Third Decile (D₃)</h4>
              <p className="mb-2">Position: 3n/10 = 3×50/10 = 15</p>
              <p className="mb-2">D₃ class: 30-40 (since 15 falls between cumulative frequencies 13 and 28)</p>
              <p className="mb-2">L = 30, F = 13, f = 15, c = 10</p>
              <BlockMath math="D_3 = 30 + \left(\frac{15 - 13}{15}\right) \times 10 = 30 + \frac{2}{15} \times 10 = 30 + 1.33 = 31.33" />
            </div>
            
            <div>
              <h4 className="font-semibold">Seventh Decile (D₇)</h4>
              <p className="mb-2">Position: 7n/10 = 7×50/10 = 35</p>
              <p className="mb-2">D₇ class: 40-50 (since 35 falls between cumulative frequencies 28 and 40)</p>
              <p className="mb-2">L = 40, F = 28, f = 12, c = 10</p>
              <BlockMath math="D_7 = 40 + \left(\frac{35 - 28}{12}\right) \times 10 = 40 + \frac{7}{12} \times 10 = 40 + 5.83 = 45.83" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Calculating Percentiles</h3>
          <p className="mb-2">Using the same data, find P₂₅ and P₉₀:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">25th Percentile (P₂₅)</h4>
              <p className="mb-2">Position: 25n/100 = 25×50/100 = 12.5</p>
              <p className="mb-2">Note: P₂₅ = Q₁ = 29.375 (as calculated earlier)</p>
            </div>
            
            <div>
              <h4 className="font-semibold">90th Percentile (P₉₀)</h4>
              <p className="mb-2">Position: 90n/100 = 90×50/100 = 45</p>
              <p className="mb-2">P₉₀ class: 50-60 (since 45 falls between cumulative frequencies 40 and 50)</p>
              <p className="mb-2">L = 50, F = 40, f = 10, c = 10</p>
              <BlockMath math="P_{90} = 50 + \left(\frac{45 - 40}{10}\right) \times 10 = 50 + \frac{5}{10} \times 10 = 50 + 5 = 55" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Outlier Detection</h3>
          <p className="mb-2">Using the quartiles from Example 1, identify potential outliers:</p>
          
          <p className="mb-2">Given: Q₁ = 29.375, Q₃ = 47.92, IQR = 18.545</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Lower Fence</h4>
              <BlockMath math="Q_1 - 1.5 \times IQR = 29.375 - 1.5 \times 18.545 = 29.375 - 27.818 = 1.557" />
            </div>
            
            <div>
              <h4 className="font-semibold">Upper Fence</h4>
              <BlockMath math="Q_3 + 1.5 \times IQR = 47.92 + 1.5 \times 18.545 = 47.92 + 27.818 = 75.738" />
            </div>
          </div>
          
          <p className="mt-4">Any values below 1.557 or above 75.738 would be considered outliers. Since our data ranges from 10-60, there are no outliers in this dataset.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 5: Interpretation of Quantiles</h3>
          <p className="mb-2">Based on the calculations from Example 1:</p>
          
          <ul className="list-disc list-inside space-y-1">
            <li>25% of the data falls below 29.375</li>
            <li>50% of the data falls below 38 (median)</li>
            <li>75% of the data falls below 47.92</li>
            <li>The middle 50% of the data spans from 29.375 to 47.92</li>
            <li>The data is relatively well-distributed with no extreme outliers</li>
          </ul>
          
          <p className="mt-4">These quantiles help us understand the distribution and spread of the grouped data without having access to individual data points.</p>
        </div>
      </div>
    </div>
  );
}
