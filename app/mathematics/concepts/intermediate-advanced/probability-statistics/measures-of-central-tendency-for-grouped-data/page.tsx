"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function MeasuresOfCentralTendencyForGroupedData() {
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
      label: "Measures of Central Tendency for Grouped Data",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/measures-of-central-tendency-for-grouped-data",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Measures of Central Tendency for Grouped Data</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
        <p className="mb-4">
          When data is organized into frequency distributions or grouped into class intervals, we need special methods to calculate measures of central tendency. These measures help us understand the typical or central value of the dataset.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Types of Grouped Data</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Discrete Grouped Data:</strong> Data grouped by distinct values with their frequencies</li>
          <li><strong>Continuous Grouped Data:</strong> Data organized into class intervals with class boundaries</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Mean for Grouped Data</h2>
        <p className="mb-4">
          The mean of grouped data is calculated using the midpoint of each class interval and its corresponding frequency.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Direct Method</h3>
            <BlockMath math="\bar{x} = \frac{\sum f_i x_i}{\sum f_i}" />

            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="x_i" /> = midpoint of the i-th class interval</li>
              <li><InlineMath math="f_i" /> = frequency of the i-th class</li>
              <li><InlineMath math="\sum f_i = n" /> = total number of observations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Assumed Mean Method (Short-cut Method)</h3>
            <p className="mb-2">When dealing with large numbers, we can use an assumed mean:</p>
            <BlockMath math="\bar{x} = A + \frac{\sum f_i d_i}{\sum f_i}" />

            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="A" /> = assumed mean (usually the midpoint of the middle class)</li>
              <li><InlineMath math="d_i = x_i - A" /> = deviation of each class midpoint from assumed mean</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Step Deviation Method</h3>
            <p className="mb-2">For equal class intervals, we can further simplify:</p>
            <BlockMath math="\bar{x} = A + \frac{\sum f_i u_i}{\sum f_i} \times h" />

            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="u_i = \frac{x_i - A}{h}" /> = step deviation</li>
              <li><InlineMath math="h" /> = class width (common difference)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Median for Grouped Data</h2>
        <p className="mb-4">
          The median is the value that divides the data into two equal parts. For grouped data, we use interpolation to find the median.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="Median = L + \left(\frac{\frac{n}{2} - F}{f}\right) \times h" />

            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="L" /> = lower boundary of the median class</li>
              <li><InlineMath math="n" /> = total number of observations</li>
              <li><InlineMath math="F" /> = cumulative frequency before the median class</li>
              <li><InlineMath math="f" /> = frequency of the median class</li>
              <li><InlineMath math="h" /> = class width</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Steps to Find Median</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Calculate cumulative frequencies</li>
              <li>Find <InlineMath math="\frac{n}{2}" /></li>
              <li>Identify the median class (where cumulative frequency ≥ <InlineMath math="\frac{n}{2}" />)</li>
              <li>Apply the median formula</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Mode for Grouped Data</h2>
        <p className="mb-4">
          The mode is the value that occurs most frequently. For grouped data, the modal class is the class with the highest frequency.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="Mode = L + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h" />

            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="L" /> = lower boundary of the modal class</li>
              <li><InlineMath math="f_1" /> = frequency of the modal class</li>
              <li><InlineMath math="f_0" /> = frequency of the class before the modal class</li>
              <li><InlineMath math="f_2" /> = frequency of the class after the modal class</li>
              <li><InlineMath math="h" /> = class width</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Formula</h3>
            <BlockMath math="Mode = L + \left(\frac{\Delta_1}{\Delta_1 + \Delta_2}\right) \times h" />

            <p className="mb-4">Where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><InlineMath math="\Delta_1 = f_1 - f_0" /> = difference between modal class frequency and preceding class frequency</li>
              <li><InlineMath math="\Delta_2 = f_1 - f_2" /> = difference between modal class frequency and succeeding class frequency</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship Between Mean, Median, and Mode</h2>
        <p className="mb-4">
          For moderately skewed distributions, there's an empirical relationship:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Empirical Relationship</h3>
            <BlockMath math="Mode = 3 \times Median - 2 \times Mean" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Distribution Types</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Symmetric Distribution:</strong> Mean = Median = Mode</li>
              <li><strong>Positively Skewed:</strong> Mean {">"} Median {">"} Mode</li>
              <li><strong>Negatively Skewed:</strong> Mode {">"} Median {">"} Mean</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Mean Calculation</h3>
          <p className="mb-2">Calculate the mean for the following grouped data:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Class Interval</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Frequency (f)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Midpoint (x)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">fx</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10-20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">75</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20-30</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">25</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">200</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">30-40</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">35</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">525</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">40-50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">45</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">540</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50-60</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">55</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">550</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Total</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1890</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">Using the direct method:</p>
          <BlockMath math="\bar{x} = \frac{\sum fx}{\sum f} = \frac{1890}{50} = 37.8" />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Median Calculation</h3>
          <p className="mb-2">Find the median for the same data:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Class Interval</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Frequency (f)</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Cumulative Frequency</th>
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

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Find n/2</h4>
              <BlockMath math="\frac{n}{2} = \frac{50}{2} = 25" />
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Identify median class</h4>
              <p>The cumulative frequency just greater than 25 is 28, so the median class is 30-40.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 3: Apply the formula</h4>
              <p>L = 30, F = 13, f = 15, h = 10</p>
              <BlockMath math="Median = 30 + \left(\frac{25 - 13}{15}\right) \times 10 = 30 + \frac{12}{15} \times 10 = 30 + 8 = 38" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Mode Calculation</h3>
          <p className="mb-2">Find the mode for the same data:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Step 1: Identify modal class</h4>
              <p>The class with the highest frequency (15) is 30-40, so this is the modal class.</p>
            </div>

            <div>
              <h4 className="font-semibold">Step 2: Apply the formula</h4>
              <p>L = 30, f₁ = 15, f₀ = 8, f₂ = 12, h = 10</p>
              <BlockMath math="Mode = 30 + \left(\frac{15 - 8}{2(15) - 8 - 12}\right) \times 10" />
              <BlockMath math="Mode = 30 + \left(\frac{7}{30 - 20}\right) \times 10 = 30 + \frac{7}{10} \times 10 = 30 + 7 = 37" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Step Deviation Method</h3>
          <p className="mb-2">Calculate mean using step deviation method with A = 35:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Class</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">f</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">x</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">d = x - 35</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">u = d/10</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">fu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10-20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">5</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-10</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20-30</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">8</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">25</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-8</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">30-40</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">15</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">35</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">40-50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">45</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">12</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50-60</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">10</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">55</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">20</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Total</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">50</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">-</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">14</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">Using the step deviation formula:</p>
          <BlockMath math="\bar{x} = A + \frac{\sum fu}{\sum f} \times h = 35 + \frac{14}{50} \times 10 = 35 + 2.8 = 37.8" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Summary of Results</h3>
          <div className="space-y-2">
            <p><strong>Mean:</strong> 37.8</p>
            <p><strong>Median:</strong> 38</p>
            <p><strong>Mode:</strong> 37</p>
            <p className="mt-4"><strong>Verification using empirical relationship:</strong></p>
            <BlockMath math="Mode = 3 \times Median - 2 \times Mean = 3(38) - 2(37.8) = 114 - 75.6 = 38.4" />
            <p>The slight difference is due to the approximation nature of the empirical relationship.</p>
          </div>
        </div>
      </div>
    </div>
  );
}