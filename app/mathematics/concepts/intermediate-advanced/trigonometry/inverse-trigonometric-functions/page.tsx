"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function InverseTrigonometricFunctions() {
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
      label: "Inverse Trigonometric Functions",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/inverse-trigonometric-functions",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Inverse Trigonometric Functions</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Inverse trigonometric functions are the inverse functions of the trigonometric functions. 
          They are used to find angles when the values of trigonometric ratios are known. 
          These functions are essential in solving trigonometric equations and have applications 
          in calculus, physics, and engineering.
        </p>
        <p className="mb-4">
          Since trigonometric functions are periodic, they are not one-to-one over their entire domain. 
          To define inverse functions, we must restrict their domains to intervals where they are 
          one-to-one and onto.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">The Six Inverse Trigonometric Functions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Arcsine (sin⁻¹ or arcsin)</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <BlockMath math="y = \sin^{-1}(x) \text{ means } \sin(y) = x" />
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Domain: [-1, 1]</li>
                <li>Range: [-π/2, π/2] or [-90°, 90°]</li>
                <li>Also written as arcsin(x)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Arccosine (cos⁻¹ or arccos)</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <BlockMath math="y = \cos^{-1}(x) \text{ means } \cos(y) = x" />
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Domain: [-1, 1]</li>
                <li>Range: [0, π] or [0°, 180°]</li>
                <li>Also written as arccos(x)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Arctangent (tan⁻¹ or arctan)</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <BlockMath math="y = \tan^{-1}(x) \text{ means } \tan(y) = x" />
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Domain: (-∞, ∞)</li>
                <li>Range: (-π/2, π/2) or (-90°, 90°)</li>
                <li>Also written as arctan(x)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Arccosecant (csc⁻¹ or arccsc)</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <BlockMath math="y = \csc^{-1}(x) \text{ means } \csc(y) = x" />
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Domain: (-∞, -1] ∪ [1, ∞)</li>
                <li>Range: [-π/2, 0) ∪ (0, π/2] or [-90°, 0°) ∪ (0°, 90°]</li>
                <li>Also written as arccsc(x)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Arcsecant (sec⁻¹ or arcsec)</h3>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <BlockMath math="y = \sec^{-1}(x) \text{ means } \sec(y) = x" />
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Domain: (-∞, -1] ∪ [1, ∞)</li>
                <li>Range: [0, π/2) ∪ (π/2, π] or [0°, 90°) ∪ (90°, 180°]</li>
                <li>Also written as arcsec(x)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Arccotangent (cot⁻¹ or arccot)</h3>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
              <BlockMath math="y = \cot^{-1}(x) \text{ means } \cot(y) = x" />
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Domain: (-∞, ∞)</li>
                <li>Range: (0, π) or (0°, 180°)</li>
                <li>Also written as arccot(x)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Key Properties and Relationships</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Complementary Relationships</h3>
            <div className="space-y-2">
              <BlockMath math="\sin^{-1}(x) + \cos^{-1}(x) = \frac{\pi}{2}" />
              <BlockMath math="\tan^{-1}(x) + \cot^{-1}(x) = \frac{\pi}{2}" />
              <BlockMath math="\sec^{-1}(x) + \csc^{-1}(x) = \frac{\pi}{2}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Negative Argument Properties</h3>
            <div className="space-y-2">
              <BlockMath math="\sin^{-1}(-x) = -\sin^{-1}(x)" />
              <BlockMath math="\cos^{-1}(-x) = \pi - \cos^{-1}(x)" />
              <BlockMath math="\tan^{-1}(-x) = -\tan^{-1}(x)" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Reciprocal Relationships</h3>
            <div className="space-y-2">
              <BlockMath math="\csc^{-1}(x) = \sin^{-1}\left(\frac{1}{x}\right)" />
              <BlockMath math="\sec^{-1}(x) = \cos^{-1}\left(\frac{1}{x}\right)" />
              <BlockMath math="\cot^{-1}(x) = \tan^{-1}\left(\frac{1}{x}\right) \text{ for } x > 0" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Composition of Functions</h2>
        <p className="mb-4">
          When composing trigonometric functions with their inverses, we get important identities:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Function Composed with Its Inverse</h3>
            <div className="space-y-2">
              <BlockMath math="\sin(\sin^{-1}(x)) = x \text{ for } x \in [-1, 1]" />
              <BlockMath math="\cos(\cos^{-1}(x)) = x \text{ for } x \in [-1, 1]" />
              <BlockMath math="\tan(\tan^{-1}(x)) = x \text{ for } x \in (-\infty, \infty)" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Inverse Composed with Function</h3>
            <div className="space-y-2">
              <BlockMath math="\sin^{-1}(\sin(x)) = x \text{ for } x \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]" />
              <BlockMath math="\cos^{-1}(\cos(x)) = x \text{ for } x \in [0, \pi]" />
              <BlockMath math="\tan^{-1}(\tan(x)) = x \text{ for } x \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Exact Values</h2>
        <p className="mb-4">
          Common exact values for inverse trigonometric functions:
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-2">x</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">sin⁻¹(x)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">cos⁻¹(x)</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2">tan⁻¹(x)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-1</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-√3/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/3</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">5π/6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-√2/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/4</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">3π/4</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-1/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">2π/3</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">-π/6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/3</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√2/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/4</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/4</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">√3/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/3</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/6</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">1</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/2</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">0</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 text-center">π/4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivatives of Inverse Trigonometric Functions</h2>
        <p className="mb-4">
          The derivatives of inverse trigonometric functions are important in calculus:
        </p>
        
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <BlockMath math="\frac{d}{dx}\sin^{-1}(x) = \frac{1}{\sqrt{1-x^2}}" />
              <BlockMath math="\frac{d}{dx}\cos^{-1}(x) = -\frac{1}{\sqrt{1-x^2}}" />
              <BlockMath math="\frac{d}{dx}\tan^{-1}(x) = \frac{1}{1+x^2}" />
            </div>
            <div>
              <BlockMath math="\frac{d}{dx}\csc^{-1}(x) = -\frac{1}{|x|\sqrt{x^2-1}}" />
              <BlockMath math="\frac{d}{dx}\sec^{-1}(x) = \frac{1}{|x|\sqrt{x^2-1}}" />
              <BlockMath math="\frac{d}{dx}\cot^{-1}(x) = -\frac{1}{1+x^2}" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Evaluating Inverse Functions</h3>
            <p className="mb-2">Find the exact values of:</p>
            <p className="mb-2">a) sin⁻¹(√3/2)  b) cos⁻¹(-1/2)  c) tan⁻¹(-1)</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              
              <p><strong>a)</strong> sin⁻¹(√3/2)</p>
              <p>We need an angle θ in [-π/2, π/2] such that sin(θ) = √3/2</p>
              <p>Since sin(π/3) = √3/2 and π/3 is in the range [-π/2, π/2]:</p>
              <BlockMath math="\sin^{-1}\left(\frac{\sqrt{3}}{2}\right) = \frac{\pi}{3}" />
              
              <p><strong>b)</strong> cos⁻¹(-1/2)</p>
              <p>We need an angle θ in [0, π] such that cos(θ) = -1/2</p>
              <p>Since cos(2π/3) = -1/2 and 2π/3 is in the range [0, π]:</p>
              <BlockMath math="\cos^{-1}\left(-\frac{1}{2}\right) = \frac{2\pi}{3}" />
              
              <p><strong>c)</strong> tan⁻¹(-1)</p>
              <p>We need an angle θ in (-π/2, π/2) such that tan(θ) = -1</p>
              <p>Since tan(-π/4) = -1 and -π/4 is in the range (-π/2, π/2):</p>
              <BlockMath math="\tan^{-1}(-1) = -\frac{\pi}{4}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Composition of Functions</h3>
            <p className="mb-2">Evaluate: sin(cos⁻¹(3/5))</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Let θ = cos⁻¹(3/5), so cos(θ) = 3/5 and θ ∈ [0, π]</p>
              <p>We need to find sin(θ).</p>
              
              <p>Using the Pythagorean identity: sin²(θ) + cos²(θ) = 1</p>
              <BlockMath math="\sin^2(\theta) = 1 - \cos^2(\theta) = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}" />
              
              <p>Since θ ∈ [0, π], sin(θ) ≥ 0, so:</p>
              <BlockMath math="\sin(\theta) = \sqrt{\frac{16}{25}} = \frac{4}{5}" />
              
              <p>Therefore:</p>
              <BlockMath math="\sin\left(\cos^{-1}\left(\frac{3}{5}\right)\right) = \frac{4}{5}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Solving Equations</h3>
            <p className="mb-2">Solve: 2sin⁻¹(x) = π/3</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Divide both sides by 2:</p>
              <BlockMath math="\sin^{-1}(x) = \frac{\pi}{6}" />
              
              <p>Take the sine of both sides:</p>
              <BlockMath math="x = \sin\left(\frac{\pi}{6}\right) = \frac{1}{2}" />
              
              <p>Check: The domain of sin⁻¹ is [-1, 1], and 1/2 is in this interval.</p>
              <p>Verification: 2sin⁻¹(1/2) = 2(π/6) = π/3 ✓</p>
              
              <p><strong>Answer:</strong> x = 1/2</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Using Complementary Relationships</h3>
            <p className="mb-2">Simplify: sin⁻¹(x) + cos⁻¹(x)</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the complementary relationship:</p>
              <BlockMath math="\sin^{-1}(x) + \cos^{-1}(x) = \frac{\pi}{2}" />
              
              <p>This is true for all x in the domain [-1, 1].</p>
              
              <p><strong>Verification:</strong> Let θ = sin⁻¹(x), so sin(θ) = x and θ ∈ [-π/2, π/2]</p>
              <p>Then cos(π/2 - θ) = sin(θ) = x</p>
              <p>Since π/2 - θ ∈ [0, π], we have cos⁻¹(x) = π/2 - θ = π/2 - sin⁻¹(x)</p>
              <p>Therefore: sin⁻¹(x) + cos⁻¹(x) = π/2</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 5: Triangle Application</h3>
            <p className="mb-2">
              In a right triangle, if the opposite side is 7 and the hypotenuse is 25, 
              find the angle θ using inverse trigonometric functions.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: opposite = 7, hypotenuse = 25</p>
              
              <p>Using sine:</p>
              <BlockMath math="\sin(\theta) = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{7}{25}" />
              
              <p>Therefore:</p>
              <BlockMath math="\theta = \sin^{-1}\left(\frac{7}{25}\right)" />
              
              <p>Using a calculator: θ ≈ sin⁻¹(0.28) ≈ 16.26° or 0.284 radians</p>
              
              <p>We can also find the adjacent side using Pythagorean theorem:</p>
              <p>adjacent = √(25² - 7²) = √(625 - 49) = √576 = 24</p>
              
              <p>Verification using cosine:</p>
              <BlockMath math="\theta = \cos^{-1}\left(\frac{24}{25}\right) \approx 16.26°" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}