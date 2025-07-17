"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function DoubleAndHalfAngleTrigonometricIdentities() {
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
      label: "Double and Half Angle Trigonometric Identities",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/double-and-half-angle-trigonometric-identities",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Double and Half Angle Trigonometric Identities</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Double and half angle identities are special cases of the sum and difference formulas. These identities express trigonometric functions of double angles (2θ) and half angles (θ/2) in terms of functions of the original angle θ.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Importance</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Simplifying complex trigonometric expressions</li>
          <li>Solving trigonometric equations</li>
          <li>Integration and differentiation in calculus</li>
          <li>Signal processing and wave analysis</li>
          <li>Physics applications involving oscillations</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Double Angle Identities</h2>
        <p className="mb-4">
          These identities express trigonometric functions of 2θ in terms of functions of θ.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine Double Angle</h3>
            <BlockMath math="\sin(2\theta) = 2\sin\theta\cos\theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Double Angle</h3>
            <p className="mb-2">There are three equivalent forms:</p>
            <BlockMath math="\cos(2\theta) = \cos^2\theta - \sin^2\theta" />
            <BlockMath math="\cos(2\theta) = 2\cos^2\theta - 1" />
            <BlockMath math="\cos(2\theta) = 1 - 2\sin^2\theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Double Angle</h3>
            <BlockMath math="\tan(2\theta) = \frac{2\tan\theta}{1 - \tan^2\theta}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Derivation from Sum Formulas</h3>
            <p className="mb-2">These identities come from setting α = β = θ in the sum formulas:</p>
            <BlockMath math="\sin(2\theta) = \sin(\theta + \theta) = \sin\theta\cos\theta + \cos\theta\sin\theta = 2\sin\theta\cos\theta" />
            <BlockMath math="\cos(2\theta) = \cos(\theta + \theta) = \cos\theta\cos\theta - \sin\theta\sin\theta = \cos^2\theta - \sin^2\theta" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Half Angle Identities</h2>
        <p className="mb-4">
          These identities express trigonometric functions of θ/2 in terms of functions of θ.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine Half Angle</h3>
            <BlockMath math="\sin\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{2}}" />
            <p className="mb-2">The sign depends on the quadrant of θ/2.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Half Angle</h3>
            <BlockMath math="\cos\frac{\theta}{2} = \pm\sqrt{\frac{1 + \cos\theta}{2}}" />
            <p className="mb-2">The sign depends on the quadrant of θ/2.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Half Angle</h3>
            <p className="mb-2">There are several equivalent forms:</p>
            <BlockMath math="\tan\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{1 + \cos\theta}}" />
            <BlockMath math="\tan\frac{\theta}{2} = \frac{\sin\theta}{1 + \cos\theta}" />
            <BlockMath math="\tan\frac{\theta}{2} = \frac{1 - \cos\theta}{\sin\theta}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Derivation</h3>
            <p className="mb-2">Starting with the double angle formula for cosine:</p>
            <BlockMath math="\cos\theta = 1 - 2\sin^2\frac{\theta}{2}" />
            <p className="mb-2">Solving for sin²(θ/2):</p>
            <BlockMath math="\sin^2\frac{\theta}{2} = \frac{1 - \cos\theta}{2}" />
            <p className="mb-2">Taking the square root gives the half angle formula for sine.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Power Reduction Identities</h2>
        <p className="mb-4">
          These identities, derived from double angle formulas, express powers of trigonometric functions in terms of first powers of multiple angles.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine Squared</h3>
            <BlockMath math="\sin^2\theta = \frac{1 - \cos(2\theta)}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Squared</h3>
            <BlockMath math="\cos^2\theta = \frac{1 + \cos(2\theta)}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Squared</h3>
            <BlockMath math="\tan^2\theta = \frac{1 - \cos(2\theta)}{1 + \cos(2\theta)}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Triple Angle Identities</h2>
        <p className="mb-4">
          These identities express trigonometric functions of 3θ in terms of functions of θ.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine Triple Angle</h3>
            <BlockMath math="\sin(3\theta) = 3\sin\theta - 4\sin^3\theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Triple Angle</h3>
            <BlockMath math="\cos(3\theta) = 4\cos^3\theta - 3\cos\theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Triple Angle</h3>
            <BlockMath math="\tan(3\theta) = \frac{3\tan\theta - \tan^3\theta}{1 - 3\tan^2\theta}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Summary Table</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Function</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Double Angle (2θ)</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Half Angle (θ/2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Sine</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">2sin θ cos θ</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">±√[(1 - cos θ)/2]</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Cosine</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">cos²θ - sin²θ</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">±√[(1 + cos θ)/2]</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Tangent</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">2tan θ/(1 - tan²θ)</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">sin θ/(1 + cos θ)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Using Double Angle Identity</h3>
          <p className="mb-2">If sin θ = 3/5 and θ is in the first quadrant, find sin(2θ) and cos(2θ).</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>First, find cos θ using the Pythagorean identity:</p>
            <BlockMath math="\cos^2\theta = 1 - \sin^2\theta = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}" />
            <p>Since θ is in the first quadrant, cos θ = 4/5.</p>
            
            <p>Now find sin(2θ):</p>
            <BlockMath math="\sin(2\theta) = 2\sin\theta\cos\theta = 2 \cdot \frac{3}{5} \cdot \frac{4}{5} = \frac{24}{25}" />
            
            <p>Find cos(2θ):</p>
            <BlockMath math="\cos(2\theta) = \cos^2\theta - \sin^2\theta = \left(\frac{4}{5}\right)^2 - \left(\frac{3}{5}\right)^2 = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}" />
            
            <p><strong>Answer:</strong> sin(2θ) = 24/25, cos(2θ) = 7/25</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Using Half Angle Identity</h3>
          <p className="mb-2">Find the exact value of sin(15°) using a half angle identity.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Note that 15° = 30°/2, so we can use the half angle formula:</p>
            <BlockMath math="\sin\frac{30°}{2} = \sin 15° = \sqrt{\frac{1 - \cos 30°}{2}}" />
            
            <p>We know that cos 30° = √3/2, so:</p>
            <BlockMath math="\sin 15° = \sqrt{\frac{1 - \frac{\sqrt{3}}{2}}{2}} = \sqrt{\frac{\frac{2 - \sqrt{3}}{2}}{2}} = \sqrt{\frac{2 - \sqrt{3}}{4}} = \frac{\sqrt{2 - \sqrt{3}}}{2}" />
            
            <p>We can simplify this further:</p>
            <BlockMath math="\sin 15° = \frac{\sqrt{6} - \sqrt{2}}{4}" />
            
            <p><strong>Answer:</strong> sin(15°) = (√6 - √2)/4</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Simplifying Expressions</h3>
          <p className="mb-2">Simplify: 1 - 2sin²(3x)</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>This expression matches the double angle formula for cosine:</p>
            <BlockMath math="\cos(2\theta) = 1 - 2\sin^2\theta" />
            
            <p>With θ = 3x:</p>
            <BlockMath math="1 - 2\sin^2(3x) = \cos(2 \cdot 3x) = \cos(6x)" />
            
            <p><strong>Answer:</strong> cos(6x)</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Solving Equations</h3>
          <p className="mb-2">Solve: cos(2x) = cos x for 0 ≤ x ≤ 2π</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using the double angle formula:</p>
            <BlockMath math="\cos(2x) = 2\cos^2 x - 1" />
            
            <p>So the equation becomes:</p>
            <BlockMath math="2\cos^2 x - 1 = \cos x" />
            <BlockMath math="2\cos^2 x - \cos x - 1 = 0" />
            
            <p>This is a quadratic in cos x. Let u = cos x:</p>
            <BlockMath math="2u^2 - u - 1 = 0" />
            <BlockMath math="(2u + 1)(u - 1) = 0" />
            
            <p>So u = -1/2 or u = 1</p>
            <p>This means cos x = -1/2 or cos x = 1</p>
            
            <p>For cos x = 1: x = 0, 2π</p>
            <p>For cos x = -1/2: x = 2π/3, 4π/3</p>
            
            <p><strong>Answer:</strong> x = 0, 2π/3, 4π/3, 2π</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Power Reduction</h3>
          <p className="mb-2">Express sin⁴x in terms of multiple angles.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>First, use the power reduction formula:</p>
            <BlockMath math="\sin^2 x = \frac{1 - \cos(2x)}{2}" />
            
            <p>Therefore:</p>
            <BlockMath math="\sin^4 x = (\sin^2 x)^2 = \left(\frac{1 - \cos(2x)}{2}\right)^2" />
            <BlockMath math="= \frac{(1 - \cos(2x))^2}{4} = \frac{1 - 2\cos(2x) + \cos^2(2x)}{4}" />
            
            <p>Now use the power reduction formula again for cos²(2x):</p>
            <BlockMath math="\cos^2(2x) = \frac{1 + \cos(4x)}{2}" />
            
            <p>Substituting:</p>
            <BlockMath math="\sin^4 x = \frac{1 - 2\cos(2x) + \frac{1 + \cos(4x)}{2}}{4}" />
            <BlockMath math="= \frac{2 - 4\cos(2x) + 1 + \cos(4x)}{8} = \frac{3 - 4\cos(2x) + \cos(4x)}{8}" />
            
            <p><strong>Answer:</strong> sin⁴x = (3 - 4cos(2x) + cos(4x))/8</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Verifying Identities</h3>
          <p className="mb-2">Verify: tan(θ/2) = (1 - cos θ)/sin θ</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Start with the half angle formula for tangent:</p>
            <BlockMath math="\tan\frac{\theta}{2} = \pm\sqrt{\frac{1 - \cos\theta}{1 + \cos\theta}}" />
            
            <p>Multiply numerator and denominator by (1 - cos θ):</p>
            <BlockMath math="\tan\frac{\theta}{2} = \pm\sqrt{\frac{(1 - \cos\theta)^2}{(1 + \cos\theta)(1 - \cos\theta)}} = \pm\sqrt{\frac{(1 - \cos\theta)^2}{1 - \cos^2\theta}}" />
            
            <p>Since 1 - cos²θ = sin²θ:</p>
            <BlockMath math="\tan\frac{\theta}{2} = \pm\sqrt{\frac{(1 - \cos\theta)^2}{\sin^2\theta}} = \pm\frac{1 - \cos\theta}{|\sin\theta|}" />
            
            <p>For appropriate choice of sign, this equals:</p>
            <BlockMath math="\tan\frac{\theta}{2} = \frac{1 - \cos\theta}{\sin\theta}" />
            
            <p><strong>Answer:</strong> The identity is verified.</p>
          </div>
        </div>
      </div>
    </div>
  );
}