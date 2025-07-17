"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function MeasuresOfCentralTendencyForUngroupedData() {
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
      label: "Measures of Central Tendency for Ungrouped Data",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/measures-of-central-tendency-for-ungrouped-data",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">
        Measures of Central Tendency for Ungrouped Data
      </h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
        <p className="mb-4">
          Measures of central tendency are statistical measures that describe the center or typical value of a dataset. For ungrouped data (raw data), the three main measures are the mean, median, and mode.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Arithmetic Mean</h2>
        <p className="mb-4">
          The arithmetic mean (or average) is the sum of all values divided by the number of values.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{x_1 + x_2 + x_3 + \cdots + x_n}{n}" />
            
            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\bar{x}" /> = sample mean</li>
              <li><InlineMath math="x_i" /> = individual data values</li>
              <li><InlineMath math="n" /> = number of data values</li>
              <li><InlineMath math="\sum" /> = summation symbol</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Uses all data values in its calculation</li>
              <li>Sensitive to extreme values (outliers)</li>
              <li>Can be any real number</li>
              <li>Unique for each dataset</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Weighted Mean</h3>
            <p className="mb-2">When data values have different weights or frequencies:</p>
            <BlockMath math="\bar{x}_w = \frac{\sum_{i=1}^{n} w_i x_i}{\sum_{i=1}^{n} w_i}" />
            <p>where <InlineMath math="w_i" /> are the weights</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Median</h2>
        <p className="mb-4">
          The median is the middle value when data is arranged in ascending or descending order.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <p className="mb-2">For data arranged in ascending order:</p>
            
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">If n is odd:</h4>
                <BlockMath math="\text{Median} = x_{\frac{n+1}{2}}" />
              </div>
              
              <div>
                <h4 className="font-semibold">If n is even:</h4>
                <BlockMath math="\text{Median} = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Not affected by extreme values (robust)</li>
              <li>Divides the dataset into two equal halves</li>
              <li>May not be one of the original data values</li>
              <li>Unique for each dataset</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Mode</h2>
        <p className="mb-4">
          The mode is the value that appears most frequently in the dataset.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Types of Distributions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Unimodal:</strong> One mode (one value appears most frequently)</li>
              <li><strong>Bimodal:</strong> Two modes (two values tie for highest frequency)</li>
              <li><strong>Multimodal:</strong> More than two modes</li>
              <li><strong>No mode:</strong> All values appear with equal frequency</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Always one of the original data values</li>
              <li>Not affected by extreme values</li>
              <li>May not exist or may not be unique</li>
              <li>Useful for categorical data</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Comparison of Measures</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">When to Use Each Measure</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Use Mean when:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data is approximately symmetric</li>
                  <li>No extreme outliers are present</li>
                  <li>You need to use all data points</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Use Median when:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data is skewed</li>
                  <li>Extreme outliers are present</li>
                  <li>You want a robust measure</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold">Use Mode when:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data is categorical</li>
                  <li>You want the most common value</li>
                  <li>Data has distinct peaks</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Relationship in Different Distributions</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Symmetric Distribution:</h4>
                <BlockMath math="\text{Mean} = \text{Median} = \text{Mode}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Right-skewed (Positive skew):</h4>
                <BlockMath math="\text{Mode} < \text{Median} < \text{Mean}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Left-skewed (Negative skew):</h4>
                <BlockMath math="\text{Mean} < \text{Median} < \text{Mode}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Other Measures of Central Tendency</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Geometric Mean</h3>
            <p className="mb-2">Used for data that represents rates, ratios, or percentages:</p>
            <BlockMath math="G = \sqrt[n]{x_1 \times x_2 \times x_3 \times \cdots \times x_n} = \left(\prod_{i=1}^{n} x_i\right)^{\frac{1}{n}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Harmonic Mean</h3>
            <p className="mb-2">Used for rates and ratios:</p>
            <BlockMath math="H = \frac{n}{\sum_{i=1}^{n} \frac{1}{x_i}} = \frac{n}{\frac{1}{x_1} + \frac{1}{x_2} + \cdots + \frac{1}{x_n}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Relationship</h3>
            <p>For positive values:</p>
            <BlockMath math="\text{Harmonic Mean} \leq \text{Geometric Mean} \leq \text{Arithmetic Mean}" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Calculations</h3>
          <p className="mb-2">Find the mean, median, and mode for the dataset: 2, 4, 4, 6, 8, 8, 8, 10</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Mean:</h4>
              <BlockMath math="\bar{x} = \frac{2 + 4 + 4 + 6 + 8 + 8 + 8 + 10}{8} = \frac{50}{8} = 6.25" />
            </div>
            
            <div>
              <h4 className="font-semibold">Median:</h4>
              <p className="mb-1">Data is already ordered. n = 8 (even)</p>
              <BlockMath math="\text{Median} = \frac{x_4 + x_5}{2} = \frac{6 + 8}{2} = 7" />
            </div>
            
            <div>
              <h4 className="font-semibold">Mode:</h4>
              <p>8 appears 3 times (most frequent), so Mode = 8</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Effect of Outliers</h3>
          <p className="mb-2">Compare measures for: 1, 2, 3, 4, 5 vs 1, 2, 3, 4, 50</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Dataset 1: 1, 2, 3, 4, 5</h4>
              <p>Mean = 3, Median = 3, No mode</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Dataset 2: 1, 2, 3, 4, 50</h4>
              <p>Mean = 12, Median = 3, No mode</p>
            </div>
            
            <div>
              <h4 className="font-semibold">Observation:</h4>
              <p>The outlier (50) greatly affects the mean but not the median, showing the median's robustness.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Weighted Mean</h3>
          <p className="mb-2">A student's grades: Test 1: 85 (weight 20%), Test 2: 90 (weight 30%), Final: 78 (weight 50%)</p>
          
          <BlockMath math="\bar{x}_w = \frac{85(0.20) + 90(0.30) + 78(0.50)}{0.20 + 0.30 + 0.50}" />
          <BlockMath math="= \frac{17 + 27 + 39}{1} = 83" />
          
          <p>The weighted average is 83.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Geometric Mean</h3>
          <p className="mb-2">Investment returns over 3 years: 10%, -5%, 15%. Find the average annual return.</p>
          
          <p className="mb-2">Convert to growth factors: 1.10, 0.95, 1.15</p>
          <BlockMath math="G = \sqrt[3]{1.10 \times 0.95 \times 1.15} = \sqrt[3]{1.20175} \approx 1.063" />
          
          <p>Average annual return = 6.3%</p>
        </div>
      </div>
    </div>
  );
}
