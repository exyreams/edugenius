"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function TrigonometricFunctionsOfCommonAngles() {
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
      label: "Trigonometric Functions of Common Angles",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/trigonometric-functions-of-common-angles",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Trigonometric Functions of Common Angles</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Knowing the exact values of all six trigonometric functions for common angles is essential for solving trigonometric problems efficiently. These values are derived from special right triangles and the unit circle.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">The Six Trigonometric Functions</h2>
        <div className="space-y-2">
          <p><strong>Primary functions:</strong> sine (sin), cosine (cos), tangent (tan)</p>
          <p><strong>Reciprocal functions:</strong> cosecant (csc), secant (sec), cotangent (cot)</p>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Complete Table of Common Angles</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-2">Degrees</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">Radians</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">sin θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">cos θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">tan θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">csc θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">sec θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">cot θ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">30°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">π/6</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">45°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">π/4</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">60°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">π/3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">90°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">π/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Rationalized Forms</h2>
        <p className="mb-4">
          It's conventional to rationalize denominators containing radicals:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">30° (π/6) Rationalized Values</h3>
            <BlockMath math="\tan 30° = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}" />
            <BlockMath math="\sec 30° = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}" />
            <BlockMath math="\csc 60° = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}" />
            <BlockMath math="\cot 60° = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Extended Angles (Quadrant II)</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-2">Degrees</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">Radians</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">sin θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">cos θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">tan θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">csc θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">sec θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">cot θ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">120°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2π/3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">135°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">3π/4</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">150°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">5π/6</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">180°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">π</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Extended Angles (Quadrants III and IV)</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-2">Degrees</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">Radians</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">sin θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">cos θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">tan θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">csc θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">sec θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-2">cot θ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">210°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">7π/6</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">225°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">5π/4</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">240°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">4π/3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">270°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">3π/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">undefined</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">300°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">5π/3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">315°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">7π/4</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-2">330°</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">11π/6</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-1/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-2</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">2/√3</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">-√3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Sign Patterns by Quadrant</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Quadrant</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">sin θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">cos θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">tan θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">csc θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">sec θ</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">cot θ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">I (0° to 90°)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">II (90° to 180°)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">III (180° to 270°)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">IV (270° to 360°)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">+</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">-</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4">
          <p><strong>Memory Aid:</strong> "All Students Take Calculus"</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>All</strong> functions positive in Quadrant I</li>
            <li><strong>Students</strong> (Sine and csc) positive in Quadrant II</li>
            <li><strong>Take</strong> (Tangent and cot) positive in Quadrant III</li>
            <li><strong>Calculus</strong> (Cosine and sec) positive in Quadrant IV</li>
          </ul>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Finding All Six Functions</h3>
          <p className="mb-2">Find all six trigonometric functions of 240°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>240° is in Quadrant III with reference angle 240° - 180° = 60°</p>
            <p>In Quadrant III: sin &lt; 0, cos &lt; 0, tan {">"} 0</p>
            
            <ul className="list-disc list-inside space-y-1">
              <li>sin 240° = -sin 60° = -√3/2</li>
              <li>cos 240° = -cos 60° = -1/2</li>
              <li>tan 240° = tan 60° = √3</li>
              <li>csc 240° = 1/sin 240° = -2/√3 = -2√3/3</li>
              <li>sec 240° = 1/cos 240° = -2</li>
              <li>cot 240° = 1/tan 240° = 1/√3 = √3/3</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Using Reciprocal Relationships</h3>
          <p className="mb-2">If sin θ = -3/5 and θ is in Quadrant III, find csc θ, cos θ, and sec θ.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>csc θ = 1/sin θ = 1/(-3/5) = -5/3</p>
            
            <p>Using sin²θ + cos²θ = 1:</p>
            <BlockMath math="(-3/5)^2 + \cos^2 \theta = 1" />
            <BlockMath math="9/25 + \cos^2 \theta = 1" />
            <BlockMath math="\cos^2 \theta = 16/25" />
            <BlockMath math="\cos \theta = \pm 4/5" />
            
            <p>Since θ is in Quadrant III, cos θ &lt; 0, so cos θ = -4/5</p>
            <p>sec θ = 1/cos θ = 1/(-4/5) = -5/4</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Evaluating Expressions</h3>
          <p className="mb-2">Evaluate: sin 30° cos 60° + cos 30° sin 60°</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="\sin 30° \cos 60° + \cos 30° \sin 60°" />
            <BlockMath math="= \frac{1}{2} \cdot \frac{1}{2} + \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2}" />
            <BlockMath math="= \frac{1}{4} + \frac{3}{4} = 1" />
            
            <p><strong>Note:</strong> This equals sin(30° + 60°) = sin 90° = 1</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Negative Angles</h3>
          <p className="mb-2">Find sin(-150°), cos(-150°), and tan(-150°).</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using even-odd identities:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>sin(-150°) = -sin(150°) = -1/2</li>
              <li>cos(-150°) = cos(150°) = -√3/2</li>
              <li>tan(-150°) = -tan(150°) = -(-1/√3) = 1/√3 = √3/3</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Verifying Identities</h3>
          <p className="mb-2">Verify that tan 45° = sin 45°/cos 45°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Left side: tan 45° = 1</p>
            <p>Right side:</p>
            <BlockMath math="\frac{\sin 45°}{\cos 45°} = \frac{\sqrt{2}/2}{\sqrt{2}/2} = 1" />
            <p>Since both sides equal 1, the identity is verified.</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Finding Coterminal Angle Values</h3>
          <p className="mb-2">Find sin 420° and cos 420°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>420° = 360° + 60°, so 420° and 60° are coterminal.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>sin 420° = sin 60° = √3/2</li>
              <li>cos 420° = cos 60° = 1/2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}