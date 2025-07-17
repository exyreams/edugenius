"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function MeasurementAndClassificationOfAngles() {
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
      label: "Measurement and Classification of Angles",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/measurement-and-classification-of-angles",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Measurement and Classification of Angles</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          An angle is formed when two rays share a common endpoint called the vertex. Understanding how to measure and classify angles is fundamental to trigonometry and geometry.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Definition of an Angle</h2>
        <p className="mb-4">
          An angle is the amount of rotation from one ray (initial side) to another ray (terminal side) about their common endpoint (vertex).
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Units of Angle Measurement</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Degrees (°)</h3>
            <p className="mb-2">The most common unit for measuring angles.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>One complete rotation = 360°</li>
              <li>1° = 60 minutes (60')</li>
              <li>1' = 60 seconds (60")</li>
              <li>Therefore: 1° = 3600"</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Radians (rad)</h3>
            <p className="mb-2">The standard unit in advanced mathematics.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>One radian is the angle subtended by an arc equal in length to the radius</li>
              <li>One complete rotation = 2π radians</li>
              <li>π radians = 180°</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">Conversion Formulas:</h4>
            <BlockMath math="\text{Radians} = \text{Degrees} \times \frac{\pi}{180}" />
            <BlockMath math="\text{Degrees} = \text{Radians} \times \frac{180}{\pi}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Gradians (gon)</h3>
            <p className="mb-2">Less commonly used unit.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>One complete rotation = 400 gradians</li>
              <li>90° = 100 gradians</li>
              <li>Used primarily in surveying</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Classification by Magnitude</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Acute Angle</h3>
            <p className="mb-2">An angle measuring between 0° and 90° (0 and π/2 radians).</p>
            <BlockMath math="0° < \theta < 90° \quad \text{or} \quad 0 < \theta < \frac{\pi}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Right Angle</h3>
            <p className="mb-2">An angle measuring exactly 90° (π/2 radians).</p>
            <BlockMath math="\theta = 90° \quad \text{or} \quad \theta = \frac{\pi}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Obtuse Angle</h3>
            <p className="mb-2">An angle measuring between 90° and 180° (π/2 and π radians).</p>
            <BlockMath math="90° < \theta < 180° \quad \text{or} \quad \frac{\pi}{2} < \theta < \pi" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Straight Angle</h3>
            <p className="mb-2">An angle measuring exactly 180° (π radians).</p>
            <BlockMath math="\theta = 180° \quad \text{or} \quad \theta = \pi" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Reflex Angle</h3>
            <p className="mb-2">An angle measuring between 180° and 360° (π and 2π radians).</p>
            <BlockMath math="180° < \theta < 360° \quad \text{or} \quad \pi < \theta < 2\pi" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Complete Angle</h3>
            <p className="mb-2">An angle measuring exactly 360° (2π radians).</p>
            <BlockMath math="\theta = 360° \quad \text{or} \quad \theta = 2\pi" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Classification by Position</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Position</h3>
            <p className="mb-2">An angle is in standard position when:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Its vertex is at the origin of a coordinate system</li>
              <li>Its initial side lies along the positive x-axis</li>
              <li>Its terminal side rotates counterclockwise for positive angles</li>
              <li>Its terminal side rotates clockwise for negative angles</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Quadrantal Angles</h3>
            <p className="mb-2">Angles whose terminal sides lie on coordinate axes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>0° (0 rad): Positive x-axis</li>
              <li>90° (π/2 rad): Positive y-axis</li>
              <li>180° (π rad): Negative x-axis</li>
              <li>270° (3π/2 rad): Negative y-axis</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Coterminal Angles</h3>
            <p className="mb-2">Angles that have the same terminal side when in standard position.</p>
            <p className="mb-2">If θ is an angle, then coterminal angles are:</p>
            <BlockMath math="\theta + 360°n \quad \text{or} \quad \theta + 2\pi n" />
            <p className="mb-2">where n is any integer.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Angle Relationships</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Complementary Angles</h3>
            <p className="mb-2">Two angles whose measures add up to 90°.</p>
            <BlockMath math="\alpha + \beta = 90° \quad \text{or} \quad \alpha + \beta = \frac{\pi}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Supplementary Angles</h3>
            <p className="mb-2">Two angles whose measures add up to 180°.</p>
            <BlockMath math="\alpha + \beta = 180° \quad \text{or} \quad \alpha + \beta = \pi" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Vertical Angles</h3>
            <p className="mb-2">Opposite angles formed when two lines intersect. They are always equal.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Adjacent Angles</h3>
            <p className="mb-2">Two angles that share a common vertex and a common side but have no interior points in common.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Reference Angles</h2>
        <p className="mb-4">
          A reference angle is the acute angle between the terminal side of an angle and the x-axis.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Finding Reference Angles</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Quadrant I:</strong> Reference angle = θ</li>
              <li><strong>Quadrant II:</strong> Reference angle = 180° - θ</li>
              <li><strong>Quadrant III:</strong> Reference angle = θ - 180°</li>
              <li><strong>Quadrant IV:</strong> Reference angle = 360° - θ</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">In Radians</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Quadrant I:</strong> Reference angle = θ</li>
              <li><strong>Quadrant II:</strong> Reference angle = π - θ</li>
              <li><strong>Quadrant III:</strong> Reference angle = θ - π</li>
              <li><strong>Quadrant IV:</strong> Reference angle = 2π - θ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Unit Conversion</h3>
          <p className="mb-2">Convert 150° to radians.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="\text{Radians} = 150° \times \frac{\pi}{180°} = \frac{150\pi}{180} = \frac{5\pi}{6}" />
            <p><strong>Answer:</strong> 150° = 5π/6 radians</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Convert Radians to Degrees</h3>
          <p className="mb-2">Convert 2π/3 radians to degrees.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="\text{Degrees} = \frac{2\pi}{3} \times \frac{180°}{\pi} = \frac{2 \times 180°}{3} = \frac{360°}{3} = 120°" />
            <p><strong>Answer:</strong> 2π/3 radians = 120°</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Coterminal Angles</h3>
          <p className="mb-2">Find two positive and two negative coterminal angles for 45°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Coterminal angles = 45° + 360°n</p>
            
            <p><strong>Positive coterminal angles:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>n = 1: 45° + 360° = 405°</li>
              <li>n = 2: 45° + 720° = 765°</li>
            </ul>
            
            <p><strong>Negative coterminal angles:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>n = -1: 45° - 360° = -315°</li>
              <li>n = -2: 45° - 720° = -675°</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Reference Angles</h3>
          <p className="mb-2">Find the reference angle for 225°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>225° is in Quadrant III (180° {"<"} 225° {"<"} 270°)</p>
            <p>Reference angle = 225° - 180° = 45°</p>
            <p><strong>Answer:</strong> The reference angle is 45°</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Complementary and Supplementary Angles</h3>
          <p className="mb-2">If one angle measures 35°, find its complement and supplement.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p><strong>Complement:</strong> 90° - 35° = 55°</p>
            <p><strong>Supplement:</strong> 180° - 35° = 145°</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Common Angle Conversions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-3">Degrees</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3">Radians</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3">Classification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Zero angle</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">30°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">π/6</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Acute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">45°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">π/4</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Acute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">60°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">π/3</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Acute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">90°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">π/2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Right</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">120°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">2π/3</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Obtuse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">180°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">π</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Straight</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">270°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">3π/2</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Reflex</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">360°</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">2π</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Complete</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}