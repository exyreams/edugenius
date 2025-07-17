"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function FundamentalTrigonometricIdentities() {
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
      label: "Fundamental Trigonometric Identities",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/fundamental-trigonometric-identities",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Fundamental Trigonometric Identities</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Trigonometric identities are equations involving trigonometric functions that are true for all values of the variables for which both sides are defined. These fundamental identities form the foundation for solving trigonometric equations and simplifying expressions.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">1. Reciprocal Identities</h2>
        <p className="mb-4">
          These identities relate the six trigonometric functions through reciprocal relationships.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Reciprocal Identities</h3>
            <BlockMath math="\csc \theta = \frac{1}{\sin \theta}" />
            <BlockMath math="\sec \theta = \frac{1}{\cos \theta}" />
            <BlockMath math="\cot \theta = \frac{1}{\tan \theta}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Forms</h3>
            <BlockMath math="\sin \theta = \frac{1}{\csc \theta}" />
            <BlockMath math="\cos \theta = \frac{1}{\sec \theta}" />
            <BlockMath math="\tan \theta = \frac{1}{\cot \theta}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">2. Quotient Identities</h2>
        <p className="mb-4">
          These identities express tangent and cotangent in terms of sine and cosine.
        </p>
        
        <div className="space-y-4">
          <BlockMath math="\tan \theta = \frac{\sin \theta}{\cos \theta}" />
          <BlockMath math="\cot \theta = \frac{\cos \theta}{\sin \theta}" />
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">3. Pythagorean Identities</h2>
        <p className="mb-4">
          These are the most important fundamental identities, derived from the Pythagorean theorem.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Primary Pythagorean Identity</h3>
            <BlockMath math="\sin^2 \theta + \cos^2 \theta = 1" />
            <p className="mb-2">This is the most fundamental trigonometric identity.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Derived Pythagorean Identities</h3>
            <p className="mb-2">Dividing the primary identity by cos²θ:</p>
            <BlockMath math="\tan^2 \theta + 1 = \sec^2 \theta" />
            
            <p className="mb-2">Dividing the primary identity by sin²θ:</p>
            <BlockMath math="1 + \cot^2 \theta = \csc^2 \theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Forms</h3>
            <BlockMath math="\sin^2 \theta = 1 - \cos^2 \theta" />
            <BlockMath math="\cos^2 \theta = 1 - \sin^2 \theta" />
            <BlockMath math="\tan^2 \theta = \sec^2 \theta - 1" />
            <BlockMath math="\cot^2 \theta = \csc^2 \theta - 1" />
            <BlockMath math="\sec^2 \theta = 1 + \tan^2 \theta" />
            <BlockMath math="\csc^2 \theta = 1 + \cot^2 \theta" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">4. Co-function Identities</h2>
        <p className="mb-4">
          These identities relate trigonometric functions of complementary angles.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Co-function Identities</h3>
            <BlockMath math="\sin \theta = \cos(90° - \theta) = \cos\left(\frac{\pi}{2} - \theta\right)" />
            <BlockMath math="\cos \theta = \sin(90° - \theta) = \sin\left(\frac{\pi}{2} - \theta\right)" />
            <BlockMath math="\tan \theta = \cot(90° - \theta) = \cot\left(\frac{\pi}{2} - \theta\right)" />
            <BlockMath math="\cot \theta = \tan(90° - \theta) = \tan\left(\frac{\pi}{2} - \theta\right)" />
            <BlockMath math="\sec \theta = \csc(90° - \theta) = \csc\left(\frac{\pi}{2} - \theta\right)" />
            <BlockMath math="\csc \theta = \sec(90° - \theta) = \sec\left(\frac{\pi}{2} - \theta\right)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">5. Even-Odd Identities</h2>
        <p className="mb-4">
          These identities describe the symmetry properties of trigonometric functions.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Even Functions</h3>
            <p className="mb-2">Functions where f(-x) = f(x):</p>
            <BlockMath math="\cos(-\theta) = \cos \theta" />
            <BlockMath math="\sec(-\theta) = \sec \theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Odd Functions</h3>
            <p className="mb-2">Functions where f(-x) = -f(x):</p>
            <BlockMath math="\sin(-\theta) = -\sin \theta" />
            <BlockMath math="\tan(-\theta) = -\tan \theta" />
            <BlockMath math="\csc(-\theta) = -\csc \theta" />
            <BlockMath math="\cot(-\theta) = -\cot \theta" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">6. Periodicity Identities</h2>
        <p className="mb-4">
          These identities describe the periodic nature of trigonometric functions.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Period 2π Functions</h3>
            <BlockMath math="\sin(\theta + 2\pi) = \sin \theta" />
            <BlockMath math="\cos(\theta + 2\pi) = \cos \theta" />
            <BlockMath math="\sec(\theta + 2\pi) = \sec \theta" />
            <BlockMath math="\csc(\theta + 2\pi) = \csc \theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Period π Functions</h3>
            <BlockMath math="\tan(\theta + \pi) = \tan \theta" />
            <BlockMath math="\cot(\theta + \pi) = \cot \theta" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Summary of All Fundamental Identities</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Category</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Identity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Reciprocal</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  sin θ = 1/csc θ, cos θ = 1/sec θ, tan θ = 1/cot θ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Quotient</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  tan θ = sin θ/cos θ, cot θ = cos θ/sin θ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Pythagorean</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Co-function</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  sin θ = cos(π/2 - θ), cos θ = sin(π/2 - θ)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Even-Odd</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">
                  cos(-θ) = cos θ, sin(-θ) = -sin θ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Using Pythagorean Identity</h3>
          <p className="mb-2">If sin θ = 3/5 and θ is in the first quadrant, find cos θ.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using sin²θ + cos²θ = 1:</p>
            <BlockMath math="\left(\frac{3}{5}\right)^2 + \cos^2 \theta = 1" />
            <BlockMath math="\frac{9}{25} + \cos^2 \theta = 1" />
            <BlockMath math="\cos^2 \theta = 1 - \frac{9}{25} = \frac{16}{25}" />
            <BlockMath math="\cos \theta = \pm\frac{4}{5}" />
            <p>Since θ is in the first quadrant, cos θ {">"} 0, so cos θ = 4/5.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Simplifying Using Identities</h3>
          <p className="mb-2">Simplify: (sin θ)(csc θ) + (cos θ)(sec θ)</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using reciprocal identities:</p>
            <BlockMath math="(\sin \theta)\left(\frac{1}{\sin \theta}\right) + (\cos \theta)\left(\frac{1}{\cos \theta}\right)" />
            <BlockMath math="= 1 + 1 = 2" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Proving an Identity</h3>
          <p className="mb-2">Prove: tan²θ - sin²θ = tan²θ sin²θ</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Start with the left side:</p>
            <BlockMath math="\tan^2 \theta - \sin^2 \theta" />
            <p>Substitute tan θ = sin θ/cos θ:</p>
            <BlockMath math="\frac{\sin^2 \theta}{\cos^2 \theta} - \sin^2 \theta" />
            <p>Factor out sin²θ:</p>
            <BlockMath math="\sin^2 \theta \left(\frac{1}{\cos^2 \theta} - 1\right)" />
            <BlockMath math="\sin^2 \theta \left(\frac{1 - \cos^2 \theta}{\cos^2 \theta}\right)" />
            <p>Using sin²θ + cos²θ = 1, so 1 - cos²θ = sin²θ:</p>
            <BlockMath math="\sin^2 \theta \left(\frac{\sin^2 \theta}{\cos^2 \theta}\right) = \sin^2 \theta \tan^2 \theta" />
            <p>This equals the right side, so the identity is proven.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Using Co-function Identities</h3>
          <p className="mb-2">Express sin 25° in terms of cosine.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using the co-function identity:</p>
            <BlockMath math="\sin 25° = \cos(90° - 25°) = \cos 65°" />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Finding All Trigonometric Functions</h3>
          <p className="mb-2">If tan θ = -4/3 and θ is in the second quadrant, find all six trigonometric functions.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Given: tan θ = -4/3, so opposite = -4, adjacent = 3</p>
            <p>Find hypotenuse using Pythagorean theorem:</p>
            <BlockMath math="r = \sqrt{(-4)^2 + 3^2} = \sqrt{16 + 9} = 5" />
            
            <p>In the second quadrant, x {"<"} 0 and y {">"} 0, so:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>sin θ = y/r = 4/5</li>
              <li>cos θ = x/r = -3/5</li>
              <li>tan θ = y/x = -4/3 (given)</li>
              <li>csc θ = r/y = 5/4</li>
              <li>sec θ = r/x = -5/3</li>
              <li>cot θ = x/y = -3/4</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Verifying Using Multiple Identities</h3>
          <p className="mb-2">Verify: (1 + cos θ)(1 - cos θ) = sin²θ</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Expand the left side:</p>
            <BlockMath math="(1 + \cos \theta)(1 - \cos \theta) = 1 - \cos^2 \theta" />
            <p>Using the Pythagorean identity sin²θ + cos²θ = 1:</p>
            <BlockMath math="1 - \cos^2 \theta = \sin^2 \theta" />
            <p>This matches the right side, so the identity is verified.</p>
          </div>
        </div>
      </div>
    </div>
  );
}