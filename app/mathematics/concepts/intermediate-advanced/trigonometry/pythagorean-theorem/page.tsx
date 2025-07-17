"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function PythagoreanTheorem() {
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
      label: "Pythagorean Theorem",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/pythagorean-theorem",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Pythagorean Theorem</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Pythagorean theorem is one of the most fundamental theorems in mathematics, establishing the relationship between the sides of a right triangle. It forms the foundation for trigonometry and has countless applications in mathematics, science, and engineering.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">The Theorem</h2>
        <p className="mb-4">
          In a right triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.
        </p>
        
        <div className="text-center">
          <BlockMath math="a^2 + b^2 = c^2" />
        </div>
        
        <p className="mt-4">
          Where <InlineMath math="c" /> is the hypotenuse and <InlineMath math="a" /> and <InlineMath math="b" /> are the legs of the right triangle.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Historical Background</h2>
        <p className="mb-4">
          While named after the ancient Greek mathematician Pythagoras (c. 570-495 BCE), this theorem was known to various civilizations long before his time:
        </p>
        
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Babylonians (c. 1900-1600 BCE):</strong> Used Pythagorean triples in their calculations</li>
          <li><strong>Ancient Egyptians:</strong> Used the 3-4-5 triangle for construction</li>
          <li><strong>Ancient Chinese:</strong> The "Gougu theorem" appeared in Chinese mathematics</li>
          <li><strong>Ancient Indians:</strong> Described in the Sulba Sutras (c. 800-400 BCE)</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Proofs of the Pythagorean Theorem</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Geometric Proof (Square Method)</h3>
            <p className="mb-2">
              Consider a square with side length (a + b). This square can be divided into:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Four right triangles, each with legs a and b</li>
              <li>One inner square with side length c</li>
            </ul>
            
            <p className="mb-2">Area of the large square:</p>
            <BlockMath math="(a + b)^2 = a^2 + 2ab + b^2" />
            
            <p className="mb-2">Area as sum of parts:</p>
            <BlockMath math="4 \cdot \frac{1}{2}ab + c^2 = 2ab + c^2" />
            
            <p className="mb-2">Setting them equal:</p>
            <BlockMath math="a^2 + 2ab + b^2 = 2ab + c^2" />
            <BlockMath math="a^2 + b^2 = c^2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Algebraic Proof Using Similar Triangles</h3>
            <p className="mb-2">
              When an altitude is drawn from the right angle to the hypotenuse, it creates two smaller triangles similar to the original triangle and to each other.
            </p>
            
            <p className="mb-2">If the altitude has length h and divides the hypotenuse into segments of lengths p and q:</p>
            <BlockMath math="a^2 = c \cdot p" />
            <BlockMath math="b^2 = c \cdot q" />
            <BlockMath math="c = p + q" />
            
            <p className="mb-2">Therefore:</p>
            <BlockMath math="a^2 + b^2 = c \cdot p + c \cdot q = c(p + q) = c \cdot c = c^2" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Pythagorean Triples</h2>
        <p className="mb-4">
          A Pythagorean triple is a set of three positive integers a, b, c such that a² + b² = c².
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Pythagorean Triples</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-3">a</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">b</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">c</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-3">Verification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">3</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">4</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">5</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">9 + 16 = 25</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">5</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">12</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">13</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">25 + 144 = 169</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">8</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">15</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">17</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">64 + 225 = 289</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">7</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">24</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">25</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">49 + 576 = 625</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">20</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">21</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">29</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-3">400 + 441 = 841</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Generating Pythagorean Triples</h3>
            <p className="mb-2">For any two positive integers m {">"} n, the following formulas generate a Pythagorean triple:</p>
            <BlockMath math="a = m^2 - n^2" />
            <BlockMath math="b = 2mn" />
            <BlockMath math="c = m^2 + n^2" />
            
            <p className="mb-2">These are called <strong>primitive triples</strong> when gcd(m,n) = 1 and m and n have opposite parity.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Converse of the Pythagorean Theorem</h2>
        <p className="mb-4">
          If the square of one side of a triangle equals the sum of the squares of the other two sides, then the triangle is a right triangle.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Statement</h3>
            <p className="mb-2">If <InlineMath math="a^2 + b^2 = c^2" /> in triangle ABC, then angle C is a right angle.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Applications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Determining if a triangle is a right triangle</li>
              <li>Checking if three lengths can form a right triangle</li>
              <li>Construction and carpentry (ensuring square corners)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Extensions and Generalizations</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Law of Cosines</h3>
            <p className="mb-2">The Pythagorean theorem is a special case of the law of cosines when C = 90°:</p>
            <BlockMath math="c^2 = a^2 + b^2 - 2ab\cos C" />
            <p className="mb-2">When C = 90°, cos C = 0, so we get c² = a² + b²</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Three-Dimensional Extension</h3>
            <p className="mb-2">For a rectangular box with dimensions a, b, and c, the space diagonal d is:</p>
            <BlockMath math="d^2 = a^2 + b^2 + c^2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Distance Formula</h3>
            <p className="mb-2">The distance between two points (x₁, y₁) and (x₂, y₂) is:</p>
            <BlockMath math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Connection to Trigonometry</h2>
        <p className="mb-4">
          The Pythagorean theorem is fundamental to trigonometry and leads to the Pythagorean identity:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Pythagorean Identity</h3>
            <p className="mb-2">For any angle θ in a right triangle:</p>
            <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
            
            <p className="mb-2">This comes from dividing the Pythagorean theorem by c²:</p>
            <BlockMath math="\frac{a^2}{c^2} + \frac{b^2}{c^2} = \frac{c^2}{c^2}" />
            <BlockMath math="\left(\frac{a}{c}\right)^2 + \left(\frac{b}{c}\right)^2 = 1" />
            <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Other Pythagorean Identities</h3>
            <BlockMath math="1 + \tan^2 \theta = \sec^2 \theta" />
            <BlockMath math="1 + \cot^2 \theta = \csc^2 \theta" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Finding the Hypotenuse</h3>
          <p className="mb-2">A right triangle has legs of length 9 and 12. Find the hypotenuse.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="c^2 = a^2 + b^2 = 9^2 + 12^2 = 81 + 144 = 225" />
            <BlockMath math="c = \sqrt{225} = 15" />
            <p><strong>Answer:</strong> The hypotenuse is 15 units.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Finding a Leg</h3>
          <p className="mb-2">A right triangle has a hypotenuse of 13 and one leg of length 5. Find the other leg.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="a^2 + b^2 = c^2" />
            <BlockMath math="5^2 + b^2 = 13^2" />
            <BlockMath math="25 + b^2 = 169" />
            <BlockMath math="b^2 = 144" />
            <BlockMath math="b = 12" />
            <p><strong>Answer:</strong> The other leg is 12 units.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Checking if a Triangle is Right</h3>
          <p className="mb-2">Determine if a triangle with sides 8, 15, and 17 is a right triangle.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Check if a² + b² = c² where c is the longest side:</p>
            <BlockMath math="8^2 + 15^2 = 64 + 225 = 289" />
            <BlockMath math="17^2 = 289" />
            <p>Since 8² + 15² = 17², this is a right triangle.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Distance Between Points</h3>
          <p className="mb-2">Find the distance between points A(1, 2) and B(4, 6).</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" />
            <BlockMath math="d = \sqrt{(4 - 1)^2 + (6 - 2)^2}" />
            <BlockMath math="d = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" />
            <p><strong>Answer:</strong> The distance is 5 units.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Generating Pythagorean Triples</h3>
          <p className="mb-2">Use m = 4 and n = 3 to generate a Pythagorean triple.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <BlockMath math="a = m^2 - n^2 = 4^2 - 3^2 = 16 - 9 = 7" />
            <BlockMath math="b = 2mn = 2(4)(3) = 24" />
            <BlockMath math="c = m^2 + n^2 = 4^2 + 3^2 = 16 + 9 = 25" />
            
            <p>Verification: 7² + 24² = 49 + 576 = 625 = 25²</p>
            <p><strong>Answer:</strong> The Pythagorean triple is (7, 24, 25).</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Real-World Application</h3>
          <p className="mb-2">A ladder 10 feet long leans against a wall. If the bottom of the ladder is 6 feet from the wall, how high up the wall does the ladder reach?</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>This forms a right triangle where:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Hypotenuse (ladder) = 10 feet</li>
              <li>Base (distance from wall) = 6 feet</li>
              <li>Height (up the wall) = h feet</li>
            </ul>
            
            <BlockMath math="6^2 + h^2 = 10^2" />
            <BlockMath math="36 + h^2 = 100" />
            <BlockMath math="h^2 = 64" />
            <BlockMath math="h = 8" />
            
            <p><strong>Answer:</strong> The ladder reaches 8 feet up the wall.</p>
          </div>
        </div>
      </div>
    </div>
  );
}