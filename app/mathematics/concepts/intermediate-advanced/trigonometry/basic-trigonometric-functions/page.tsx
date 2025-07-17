"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function BasicTrigonometricFunctions() {
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
      label: "Basic Trigonometric Functions",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/basic-trigonometric-functions",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Basic Trigonometric Functions</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Trigonometric functions are mathematical functions that relate the angles of a triangle 
          to the lengths of its sides. These functions are fundamental in mathematics and have 
          applications in physics, engineering, astronomy, and many other fields.
        </p>
        <p className="mb-4">
          The six basic trigonometric functions are sine, cosine, tangent, cosecant, secant, 
          and cotangent. They can be defined using right triangles or the unit circle.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Right Triangle Definitions</h2>
        <p className="mb-4">
          In a right triangle with angle θ, we define the trigonometric functions as ratios 
          of the sides:
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Primary Functions</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Sine (sin)</p>
                <BlockMath math="\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}" />
              </div>
              <div>
                <p className="font-semibold">Cosine (cos)</p>
                <BlockMath math="\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}" />
              </div>
              <div>
                <p className="font-semibold">Tangent (tan)</p>
                <BlockMath math="\tan\theta = \frac{\text{opposite}}{\text{adjacent}}" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Reciprocal Functions</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Cosecant (csc)</p>
                <BlockMath math="\csc\theta = \frac{\text{hypotenuse}}{\text{opposite}} = \frac{1}{\sin\theta}" />
              </div>
              <div>
                <p className="font-semibold">Secant (sec)</p>
                <BlockMath math="\sec\theta = \frac{\text{hypotenuse}}{\text{adjacent}} = \frac{1}{\cos\theta}" />
              </div>
              <div>
                <p className="font-semibold">Cotangent (cot)</p>
                <BlockMath math="\cot\theta = \frac{\text{adjacent}}{\text{opposite}} = \frac{1}{\tan\theta}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Unit Circle Definition</h2>
        <p className="mb-4">
          The unit circle is a circle with radius 1 centered at the origin. For any angle θ 
          measured from the positive x-axis, the coordinates of the point on the unit circle 
          are (cos θ, sin θ).
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">Unit Circle Definitions</h3>
          <div className="space-y-2">
            <BlockMath math="\sin\theta = y\text{-coordinate}" />
            <BlockMath math="\cos\theta = x\text{-coordinate}" />
            <BlockMath math="\tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta}" />
          </div>
        </div>
        
        <p className="mb-4">
          The unit circle allows us to extend trigonometric functions to all real numbers, 
          not just acute angles in right triangles.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Angles</h2>
        <p className="mb-4">
          Certain angles have exact trigonometric values that are commonly used:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-2">Angle (degrees)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">Angle (radians)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">sin θ</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">cos θ</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">tan θ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0°</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">30°</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1/√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">45°</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/4</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">60°</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/3</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">90°</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">undefined</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Domain and Range</h2>
        <p className="mb-4">
          Understanding the domain and range of trigonometric functions is crucial for their application:
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine and Cosine</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Domain: All real numbers (-∞, ∞)</li>
              <li>Range: [-1, 1]</li>
              <li>Period: 2π</li>
              <li>Continuous everywhere</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent and Cotangent</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Domain: All real numbers except odd multiples of π/2</li>
              <li>Range: All real numbers (-∞, ∞)</li>
              <li>Period: π</li>
              <li>Discontinuous at certain points</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Signs in Different Quadrants</h2>
        <p className="mb-4">
          The signs of trigonometric functions depend on which quadrant the angle terminates in:
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quadrant I (0° to 90°)</h3>
            <ul className="text-sm space-y-1">
              <li>sin θ: positive</li>
              <li>cos θ: positive</li>
              <li>tan θ: positive</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quadrant II (90° to 180°)</h3>
            <ul className="text-sm space-y-1">
              <li>sin θ: positive</li>
              <li>cos θ: negative</li>
              <li>tan θ: negative</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quadrant III (180° to 270°)</h3>
            <ul className="text-sm space-y-1">
              <li>sin θ: negative</li>
              <li>cos θ: negative</li>
              <li>tan θ: positive</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quadrant IV (270° to 360°)</h3>
            <ul className="text-sm space-y-1">
              <li>sin θ: negative</li>
              <li>cos θ: positive</li>
              <li>tan θ: negative</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <p className="font-semibold">Memory Aid: "All Students Take Calculus"</p>
          <p className="text-sm">Quadrant I: All positive, II: Sin positive, III: Tan positive, IV: Cos positive</p>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Reference Angles</h2>
        <p className="mb-4">
          A reference angle is the acute angle between the terminal side of an angle and the x-axis. 
          It helps find trigonometric values for any angle.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Finding Reference Angles</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Quadrant I: Reference angle = θ</li>
              <li>Quadrant II: Reference angle = 180° - θ</li>
              <li>Quadrant III: Reference angle = θ - 180°</li>
              <li>Quadrant IV: Reference angle = 360° - θ</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p className="font-semibold mb-2">Example:</p>
            <p>For θ = 150° (Quadrant II):</p>
            <p>Reference angle = 180° - 150° = 30°</p>
            <p>Therefore: sin(150°) = sin(30°) = 1/2</p>
            <p>cos(150°) = -cos(30°) = -√3/2</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Right Triangle</h3>
            <p className="mb-2">
              In a right triangle, the side opposite to angle θ is 3 units, and the hypotenuse is 5 units. 
              Find all six trigonometric functions of θ.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: opposite = 3, hypotenuse = 5</p>
              <p>Using Pythagorean theorem: adjacent = √(5² - 3²) = √(25 - 9) = √16 = 4</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <BlockMath math="\sin\theta = \frac{3}{5}" />
                  <BlockMath math="\cos\theta = \frac{4}{5}" />
                  <BlockMath math="\tan\theta = \frac{3}{4}" />
                </div>
                <div>
                  <BlockMath math="\csc\theta = \frac{5}{3}" />
                  <BlockMath math="\sec\theta = \frac{5}{4}" />
                  <BlockMath math="\cot\theta = \frac{4}{3}" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Unit Circle</h3>
            <p className="mb-2">
              Find the exact values of sin(225°), cos(225°), and tan(225°).
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>225° is in Quadrant III (180° < 225° < 270°)</p>
              <p>Reference angle = 225° - 180° = 45°</p>
              
              <p>In Quadrant III, both sine and cosine are negative:</p>
              <BlockMath math="\sin(225°) = -\sin(45°) = -\frac{\sqrt{2}}{2}" />
              <BlockMath math="\cos(225°) = -\cos(45°) = -\frac{\sqrt{2}}{2}" />
              <BlockMath math="\tan(225°) = \frac{\sin(225°)}{\cos(225°)} = \frac{-\frac{\sqrt{2}}{2}}{-\frac{\sqrt{2}}{2}} = 1" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Converting Between Functions</h3>
            <p className="mb-2">
              If sin θ = 3/5 and θ is in Quadrant II, find cos θ and tan θ.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the Pythagorean identity: sin²θ + cos²θ = 1</p>
              <BlockMath math="\cos^2\theta = 1 - \sin^2\theta = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}" />
              
              <p>Since θ is in Quadrant II, cosine is negative:</p>
              <BlockMath math="\cos\theta = -\sqrt{\frac{16}{25}} = -\frac{4}{5}" />
              
              <p>Therefore:</p>
              <BlockMath math="\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{\frac{3}{5}}{-\frac{4}{5}} = -\frac{3}{4}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Evaluating Reciprocal Functions</h3>
            <p className="mb-2">
              Find csc(60°), sec(60°), and cot(60°).
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, recall the values for 60°:</p>
              <p>sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3</p>
              
              <p>Using reciprocal relationships:</p>
              <BlockMath math="\csc(60°) = \frac{1}{\sin(60°)} = \frac{1}{\frac{\sqrt{3}}{2}} = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}" />
              <BlockMath math="\sec(60°) = \frac{1}{\cos(60°)} = \frac{1}{\frac{1}{2}} = 2" />
              <BlockMath math="\cot(60°) = \frac{1}{\tan(60°)} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}