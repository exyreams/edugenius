"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function GeometricMean() {
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
      label: "Geometric Mean",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/geometric-mean",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Geometric Mean</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The geometric mean is a type of average that is calculated by multiplying all values together and then taking the nth root of the product, where n is the number of values. It is particularly useful for averaging rates, ratios, percentages, and values that represent growth over time.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Formula</h2>
        <p className="mb-4">For n positive numbers <InlineMath math="x_1, x_2, x_3, \ldots, x_n" />:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Formula</h3>
            <BlockMath math="G = \sqrt[n]{x_1 \times x_2 \times x_3 \times \cdots \times x_n}" />
            <BlockMath math="G = \left(\prod_{i=1}^{n} x_i\right)^{\frac{1}{n}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Logarithmic Form</h3>
            <p className="mb-2">Using logarithms (often more practical for computation):</p>
            <BlockMath math="\log G = \frac{1}{n} \sum_{i=1}^{n} \log x_i" />
            <BlockMath math="G = \exp\left(\frac{1}{n} \sum_{i=1}^{n} \log x_i\right)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">For Two Numbers</h3>
            <BlockMath math="G = \sqrt{x_1 \times x_2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">For Three Numbers</h3>
            <BlockMath math="G = \sqrt[3]{x_1 \times x_2 \times x_3}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Domain Restriction</h3>
            <p>All values must be positive ({">"} 0) for the geometric mean to be defined in real numbers</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Multiplicative Property</h3>
            <BlockMath math="G(kx_1, kx_2, \ldots, kx_n) = k \cdot G(x_1, x_2, \ldots, x_n)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Product Property</h3>
            <BlockMath math="G(x_1 \cdot y_1, x_2 \cdot y_2, \ldots, x_n \cdot y_n) = G(x_1, x_2, \ldots, x_n) \cdot G(y_1, y_2, \ldots, y_n)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Invariant Under Reciprocals</h3>
            <BlockMath math="G\left(\frac{1}{x_1}, \frac{1}{x_2}, \ldots, \frac{1}{x_n}\right) = \frac{1}{G(x_1, x_2, \ldots, x_n)}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Monotonicity</h3>
            <p>If all <InlineMath math="x_i \leq y_i" />, then <InlineMath math="G(x_1, \ldots, x_n) \leq G(y_1, \ldots, y_n)" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Other Means</h2>
        <p className="mb-4">For positive numbers, the means satisfy the inequality:</p>
        <BlockMath math="H \leq G \leq A \leq Q" />
        
        <p className="mb-4">Where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath math="H" /> = Harmonic Mean</li>
          <li><InlineMath math="G" /> = Geometric Mean</li>
          <li><InlineMath math="A" /> = Arithmetic Mean</li>
          <li><InlineMath math="Q" /> = Quadratic Mean (Root Mean Square)</li>
        </ul>
        
        <div className="space-y-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Arithmetic Mean</h3>
            <BlockMath math="A = \frac{x_1 + x_2 + \cdots + x_n}{n}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Harmonic Mean</h3>
            <BlockMath math="H = \frac{n}{\frac{1}{x_1} + \frac{1}{x_2} + \cdots + \frac{1}{x_n}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Equality Condition</h3>
            <p>All means are equal if and only if all values are equal: <InlineMath math="x_1 = x_2 = \cdots = x_n" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">When to Use Geometric Mean</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Ideal Applications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Growth rates and compound interest</li>
              <li>Investment returns over multiple periods</li>
              <li>Population growth rates</li>
              <li>Price indices and inflation rates</li>
              <li>Ratios and percentages</li>
              <li>Data with multiplicative relationships</li>
              <li>Averaging rates of change</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Advantages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Less affected by extreme values than arithmetic mean</li>
              <li>Appropriate for multiplicative processes</li>
              <li>Gives equal weight to equal ratios</li>
              <li>Suitable for averaging rates and percentages</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Limitations</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Cannot be used with negative numbers or zero</li>
              <li>More complex to calculate than arithmetic mean</li>
              <li>Less intuitive interpretation</li>
              <li>Sensitive to values close to zero</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Weighted Geometric Mean</h2>
        <p className="mb-4">When values have different weights or frequencies:</p>
        <BlockMath math="G_w = \left(\prod_{i=1}^{n} x_i^{w_i}\right)^{\frac{1}{\sum_{i=1}^{n} w_i}}" />
        
        <p className="mb-4">Or in logarithmic form:</p>
        <BlockMath math="\log G_w = \frac{\sum_{i=1}^{n} w_i \log x_i}{\sum_{i=1}^{n} w_i}" />
        
        <p className="mb-4">Where <InlineMath math="w_i" /> are the weights for each value <InlineMath math="x_i" />.</p>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Calculation</h3>
          <p className="mb-2">Find the geometric mean of 2, 8, and 32.</p>
          
          <BlockMath math="G = \sqrt[3]{2 \times 8 \times 32} = \sqrt[3]{512} = 8" />
          
          <p>The geometric mean is 8.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Investment Returns</h3>
          <p className="mb-2">An investment has annual returns of +10%, -5%, and +15% over three years. What is the average annual return?</p>
          
          <p className="mb-2">Convert to growth factors: 1.10, 0.95, 1.15</p>
          <BlockMath math="G = \sqrt[3]{1.10 \times 0.95 \times 1.15} = \sqrt[3]{1.20175} \approx 1.0633" />
          
          <p className="mb-2">Average annual return = 6.33%</p>
          
          <p className="mb-2">Verification: <InlineMath math="1.0633^3 \approx 1.202" />, which matches the total growth factor.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Population Growth</h3>
          <p className="mb-2">A city's population grows by 5%, 8%, and 3% over three consecutive years. What is the average annual growth rate?</p>
          
          <p className="mb-2">Growth factors: 1.05, 1.08, 1.03</p>
          <BlockMath math="G = \sqrt[3]{1.05 \times 1.08 \times 1.03} = \sqrt[3]{1.1664} \approx 1.0527" />
          
          <p>Average annual growth rate = 5.27%</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Comparison with Arithmetic Mean</h3>
          <p className="mb-2">Compare geometric and arithmetic means for the values 1, 10, 100.</p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Geometric Mean:</h4>
              <BlockMath math="G = \sqrt[3]{1 \times 10 \times 100} = \sqrt[3]{1000} = 10" />
            </div>
            
            <div>
              <h4 className="font-semibold">Arithmetic Mean:</h4>
              <BlockMath math="A = \frac{1 + 10 + 100}{3} = \frac{111}{3} = 37" />
            </div>
            
            <div>
              <h4 className="font-semibold">Observation:</h4>
              <p>The geometric mean (10) is much less affected by the large value (100) than the arithmetic mean (37).</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Weighted Geometric Mean</h3>
          <p className="mb-2">A portfolio has three investments with returns of 8%, 12%, and 6%, with weights of 50%, 30%, and 20% respectively. Find the weighted geometric mean return.</p>
          
          <p className="mb-2">Growth factors: 1.08, 1.12, 1.06</p>
          <p className="mb-2">Weights: 0.5, 0.3, 0.2</p>
          
          <BlockMath math="G_w = (1.08)^{0.5} \times (1.12)^{0.3} \times (1.06)^{0.2}" />
          <BlockMath math="= 1.0392 \times 1.0344 \times 1.0117 \approx 1.0865" />
          
          <p>Weighted geometric mean return = 8.65%</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Using Logarithms</h3>
          <p className="mb-2">Find the geometric mean of 4, 16, 64, and 256 using logarithms.</p>
          
          <p className="mb-2">Using natural logarithms:</p>
          <BlockMath math="\ln G = \frac{1}{4}(\ln 4 + \ln 16 + \ln 64 + \ln 256)" />
          <BlockMath math="= \frac{1}{4}(1.386 + 2.773 + 4.159 + 5.545) = \frac{13.863}{4} = 3.466" />
          <BlockMath math="G = e^{3.466} = 32" />
          
          <p className="mb-2">Verification by direct calculation:</p>
          <BlockMath math="G = \sqrt[4]{4 \times 16 \times 64 \times 256} = \sqrt[4]{1,048,576} = 32" />
        </div>
      </div>
    </div>
  );
}
