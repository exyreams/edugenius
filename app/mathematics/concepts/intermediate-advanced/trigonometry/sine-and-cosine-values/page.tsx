"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function SineAndCosineValues() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Trigonometry",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry",
    },
    {
      label: "Sine and Cosine Values",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/sine-and-cosine-values",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Sine and Cosine Values</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Understanding the exact values of sine and cosine functions for special angles is crucial in trigonometry. These values form the foundation for solving trigonometric equations and analyzing periodic phenomena.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Unit Circle Definition</h2>
        <p className="mb-4">
          On the unit circle (radius = 1), for any angle θ:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>cos θ = x-coordinate of the point</li>
          <li>sin θ = y-coordinate of the point</li>
          <li>The point is (cos θ, sin θ)</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Angles and Their Values</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quadrantal Angles</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Angle (Degrees)</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Angle (Radians)</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">cos θ</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">sin θ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">90°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">π/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">180°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">π</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-1</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">270°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">3π/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">360°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">2π</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Special Acute Angles</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Angle (Degrees)</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Angle (Radians)</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">cos θ</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">sin θ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">30°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">π/6</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√3/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">45°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">π/4</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√2/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√2/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">60°</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">π/3</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√3/2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation of Special Values</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">30° and 60° (π/6 and π/3)</h3>
            <p className="mb-2">These values come from an equilateral triangle with side length 2:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Height of equilateral triangle = √3</li>
              <li>This creates a 30-60-90 triangle with sides 1, √3, 2</li>
              <li>For 30°: opposite = 1, adjacent = √3, hypotenuse = 2</li>
              <li>For 60°: opposite = √3, adjacent = 1, hypotenuse = 2</li>
            </ul>
            
            <div className="mt-4">
              <BlockMath math="\sin 30° = \frac{1}{2}, \quad \cos 30° = \frac{\sqrt{3}}{2}" />
              <BlockMath math="\sin 60° = \frac{\sqrt{3}}{2}, \quad \cos 60° = \frac{1}{2}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">45° (π/4)</h3>
            <p className="mb-2">This value comes from an isosceles right triangle:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Two legs of length 1, hypotenuse of length √2</li>
              <li>Both acute angles are 45°</li>
            </ul>
            
            <div className="mt-4">
              <BlockMath math="\sin 45° = \cos 45° = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Values in All Four Quadrants</h2>
        <p className="mb-4">
          Using reference angles and the signs of sine and cosine in each quadrant:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quadrant Signs</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Quadrant I:</strong> sin {">"} 0, cos {">"} 0</li>
              <li><strong>Quadrant II:</strong> sin {">"} 0, cos &lt; 0</li>
              <li><strong>Quadrant III:</strong> sin &lt; 0, cos &lt; 0</li>
              <li><strong>Quadrant IV:</strong> sin &lt; 0, cos {">"} 0</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Extended Special Angle Values</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Angle</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Quadrant</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">cos θ</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">sin θ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">120° (2π/3)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">II</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-1/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√3/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">135° (3π/4)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">II</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√2/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√2/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">150° (5π/6)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">II</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√3/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">210° (7π/6)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">III</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√3/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-1/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">225° (5π/4)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">III</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√2/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√2/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">240° (4π/3)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">III</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-1/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√3/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">300° (5π/3)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">IV</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">1/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√3/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">315° (7π/4)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">IV</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√2/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-√2/2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">330° (11π/6)</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">IV</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">√3/2</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">-1/2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Memory Aids and Patterns</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Pattern for Special Angles</h3>
            <p className="mb-2">For angles 0°, 30°, 45°, 60°, 90°:</p>
            
            <div className="space-y-2">
              <p><strong>Sine values:</strong></p>
              <BlockMath math="\sin 0° = \frac{\sqrt{0}}{2}, \sin 30° = \frac{\sqrt{1}}{2}, \sin 45° = \frac{\sqrt{2}}{2}, \sin 60° = \frac{\sqrt{3}}{2}, \sin 90° = \frac{\sqrt{4}}{2}" />
              
              <p><strong>Cosine values (reverse order):</strong></p>
              <BlockMath math="\cos 0° = \frac{\sqrt{4}}{2}, \cos 30° = \frac{\sqrt{3}}{2}, \cos 45° = \frac{\sqrt{2}}{2}, \cos 60° = \frac{\sqrt{1}}{2}, \cos 90° = \frac{\sqrt{0}}{2}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Co-function Relationships</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>sin 30° = cos 60° = 1/2</li>
              <li>sin 60° = cos 30° = √3/2</li>
              <li>sin 45° = cos 45° = √2/2</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Symmetry Properties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>sin(180° - θ) = sin θ</li>
              <li>cos(180° - θ) = -cos θ</li>
              <li>sin(180° + θ) = -sin θ</li>
              <li>cos(180° + θ) = -cos θ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Finding Exact Values</h3>
          <p className="mb-2">Find the exact values of sin 150° and cos 150°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>150° is in Quadrant II, with reference angle 180° - 150° = 30°</p>
            <p>In Quadrant II: sin {">"} 0, cos &lt; 0</p>
            <BlockMath math="\sin 150° = \sin 30° = \frac{1}{2}" />
            <BlockMath math="\cos 150° = -\cos 30° = -\frac{\sqrt{3}}{2}" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Using Periodicity</h3>
          <p className="mb-2">Find sin 390° and cos 390°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>390° = 360° + 30°, so:</p>
            <BlockMath math="\sin 390° = \sin(360° + 30°) = \sin 30° = \frac{1}{2}" />
            <BlockMath math="\cos 390° = \cos(360° + 30°) = \cos 30° = \frac{\sqrt{3}}{2}" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Negative Angles</h3>
          <p className="mb-2">Find sin(-45°) and cos(-45°).</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using even-odd identities:</p>
            <BlockMath math="\sin(-45°) = -\sin 45° = -\frac{\sqrt{2}}{2}" />
            <BlockMath math="\cos(-45°) = \cos 45° = \frac{\sqrt{2}}{2}" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Radian Measure</h3>
          <p className="mb-2">Find the exact values of sin(5π/6) and cos(5π/6).</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>5π/6 = 150° (in Quadrant II)</p>
            <p>Reference angle = π - 5π/6 = π/6</p>
            <BlockMath math="\sin\frac{5\pi}{6} = \sin\frac{\pi}{6} = \frac{1}{2}" />
            <BlockMath math="\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt{3}}{2}" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Verifying Identities</h3>
          <p className="mb-2">Verify that sin²60° + cos²60° = 1.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="\sin^2 60° + \cos^2 60° = \left(\frac{\sqrt{3}}{2}\right)^2 + \left(\frac{1}{2}\right)^2" />
            <BlockMath math="= \frac{3}{4} + \frac{1}{4} = \frac{4}{4} = 1 \checkmark" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Finding Unknown Values</h3>
          <p className="mb-2">If cos θ = -1/2 and θ is in Quadrant III, find sin θ.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using the Pythagorean identity:</p>
            <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
            <BlockMath math="\sin^2 \theta + \left(-\frac{1}{2}\right)^2 = 1" />
            <BlockMath math="\sin^2 \theta + \frac{1}{4} = 1" />
            <BlockMath math="\sin^2 \theta = \frac{3}{4}" />
            <BlockMath math="\sin \theta = \pm\frac{\sqrt{3}}{2}" />
            <p>Since θ is in Quadrant III, sin θ &lt; 0, so:</p>
            <BlockMath math="\sin \theta = -\frac{\sqrt{3}}{2}" />
          </div>
        </div>
      </div>
    </div>
  );
}