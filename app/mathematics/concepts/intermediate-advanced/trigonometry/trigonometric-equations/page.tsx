"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function TrigonometricEquations() {
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
      label: "Trigonometric Equations",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/trigonometric-equations",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Trigonometric Equations</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Trigonometric equations are equations that involve trigonometric functions of unknown angles. 
          Solving these equations requires understanding the periodic nature of trigonometric functions 
          and applying various algebraic and trigonometric techniques.
        </p>
        <p className="mb-4">
          The general approach involves:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Simplifying the equation using trigonometric identities</li>
          <li>Isolating the trigonometric function</li>
          <li>Finding the principal solutions</li>
          <li>Finding all solutions using the periodic properties</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Basic Trigonometric Equations</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine Equations</h3>
            <p className="mb-2">For the equation sin θ = k:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>If |k| {">"} 1, no solution exists</li>
              <li>If |k| ≤ 1, solutions exist</li>
            </ul>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">General Solution:</p>
              <BlockMath math="\sin\theta = k \Rightarrow \theta = n\pi + (-1)^n \sin^{-1}(k)" />
              <p className="text-sm mt-2">where n ∈ ℤ (integers)</p>
            </div>
            
            <p className="mb-2">Alternative form:</p>
            <BlockMath math="\theta = \sin^{-1}(k) + 2n\pi \text{ or } \theta = \pi - \sin^{-1}(k) + 2n\pi" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Equations</h3>
            <p className="mb-2">For the equation cos θ = k:</p>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">General Solution:</p>
              <BlockMath math="\cos\theta = k \Rightarrow \theta = 2n\pi \pm \cos^{-1}(k)" />
              <p className="text-sm mt-2">where n ∈ ℤ</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Equations</h3>
            <p className="mb-2">For the equation tan θ = k:</p>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">General Solution:</p>
              <BlockMath math="\tan\theta = k \Rightarrow \theta = n\pi + \tan^{-1}(k)" />
              <p className="text-sm mt-2">where n ∈ ℤ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Quadratic Trigonometric Equations</h2>
        <p className="mb-4">
          These are equations of the form a·trig²(θ) + b·trig(θ) + c = 0, where trig represents 
          any trigonometric function.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Method</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Let u = trig(θ) to convert to a quadratic equation in u</li>
              <li>Solve the quadratic equation: au² + bu + c = 0</li>
              <li>Find the values of u using the quadratic formula or factoring</li>
              <li>Substitute back: trig(θ) = u</li>
              <li>Solve the basic trigonometric equations</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example Types</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>2sin²θ - 3sinθ + 1 = 0</li>
              <li>cos²θ + cosθ - 2 = 0</li>
              <li>tan²θ - 4tanθ + 3 = 0</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Equations Involving Multiple Angles</h2>
        <p className="mb-4">
          These equations involve trigonometric functions of different multiples of the same angle.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Strategies</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Use double angle, half angle, or multiple angle formulas</li>
              <li>Express all terms in the same angle</li>
              <li>Use sum-to-product or product-to-sum identities</li>
              <li>Factor when possible</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example Types</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>sin(2θ) = cos(θ)</li>
              <li>cos(3θ) + cos(θ) = 0</li>
              <li>sin(θ/2) = cos(θ)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Equations with Mixed Functions</h2>
        <p className="mb-4">
          These equations involve different trigonometric functions of the same angle.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Approaches</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Use fundamental identities to express in terms of one function</li>
              <li>Use Pythagorean identities: sin²θ + cos²θ = 1</li>
              <li>Use quotient identities: tan θ = sin θ / cos θ</li>
              <li>Square both sides (check for extraneous solutions)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example Types</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>sin θ + cos θ = 1</li>
              <li>tan θ + cot θ = 2</li>
              <li>sec θ - tan θ = 1</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Conditional Trigonometric Equations</h2>
        <p className="mb-4">
          These are equations that are satisfied only for specific values of the variable, 
          not for all values in the domain.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Solving Steps</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Simplify using trigonometric identities</li>
              <li>Isolate the trigonometric function</li>
              <li>Find principal solutions</li>
              <li>Use periodicity to find general solutions</li>
              <li>Check solutions in the original equation</li>
              <li>Apply any given domain restrictions</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic Sine Equation</h3>
            <p className="mb-2">Solve: sin θ = 1/2 for 0 ≤ θ {"<"} 2π</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>We need to find all angles θ where sin θ = 1/2 in {"[0, 2π)"}.</p>
              
              <p>Principal value: θ₁ = sin⁻¹(1/2) = π/6</p>
              
              <p>Since sine is positive in quadrants I and II:</p>
              <ul className="list-disc list-inside ml-4">
                <li>First quadrant: θ₁ = π/6</li>
                <li>Second quadrant: θ₂ = π - π/6 = 5π/6</li>
              </ul>
              
              <p><strong>Answer:</strong> θ = π/6, 5π/6</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Quadratic in Cosine</h3>
            <p className="mb-2">Solve: 2cos²θ - 3cos θ + 1 = 0</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Let u = cos θ. Then: 2u² - 3u + 1 = 0</p>
              
              <p>Factoring: (2u - 1)(u - 1) = 0</p>
              
              <p>So u = 1/2 or u = 1</p>
              
              <p>Case 1: cos θ = 1/2</p>
              <p>θ = π/3 + 2nπ or θ = -π/3 + 2nπ = 5π/3 + 2nπ</p>
              
              <p>Case 2: cos θ = 1</p>
              <p>θ = 2nπ</p>
              
              <p><strong>General Solution:</strong> θ = 2nπ, π/3 + 2nπ, 5π/3 + 2nπ where n ∈ ℤ</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Double Angle Equation</h3>
            <p className="mb-2">Solve: sin(2θ) = cos θ for 0 ≤ θ {"<"} 2π</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the double angle formula: sin(2θ) = 2sin θ cos θ</p>
              
              <p>So: 2sin θ cos θ = cos θ</p>
              <p>2sin θ cos θ - cos θ = 0</p>
              <p>cos θ(2sin θ - 1) = 0</p>
              
              <p>This gives us:</p>
              <ul className="list-disc list-inside ml-4">
                <li>cos θ = 0 ⟹ θ = π/2, 3π/2</li>
                <li>2sin θ - 1 = 0 ⟹ sin θ = 1/2 ⟹ θ = π/6, 5π/6</li>
              </ul>
              
              <p><strong>Answer:</strong> θ = π/6, π/2, 5π/6, 3π/2</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Mixed Functions</h3>
            <p className="mb-2">Solve: sin θ + cos θ = 1 for 0 ≤ θ {"<"} 2π</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Method 1: Squaring both sides</p>
              <p>(sin θ + cos θ)² = 1²</p>
              <p>sin²θ + 2sin θ cos θ + cos²θ = 1</p>
              <p>1 + 2sin θ cos θ = 1</p>
              <p>2sin θ cos θ = 0</p>
              <p>sin(2θ) = 0</p>
              
              <p>So: 2θ = nπ ⟹ θ = nπ/2</p>
              
              <p>For 0 ≤ θ {"<"} 2π: θ = 0, π/2, π, 3π/2</p>
              
              <p>Checking in original equation:</p>
              <ul className="list-disc list-inside ml-4">
                <li>θ = 0: sin(0) + cos(0) = 0 + 1 = 1 ✓</li>
                <li>θ = π/2: sin(π/2) + cos(π/2) = 1 + 0 = 1 ✓</li>
                <li>θ = π: sin(π) + cos(π) = 0 + (-1) = -1 ✗</li>
                <li>θ = 3π/2: sin(3π/2) + cos(3π/2) = -1 + 0 = -1 ✗</li>
              </ul>
              
              <p><strong>Answer:</strong> θ = 0, π/2</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 5: Sum-to-Product</h3>
            <p className="mb-2">Solve: sin(5θ) + sin(3θ) = 0</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using sum-to-product identity:</p>
              <BlockMath math="\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)" />
              
              <p>With A = 5θ and B = 3θ:</p>
              <p>sin(5θ) + sin(3θ) = 2sin(4θ)cos(θ) = 0</p>
              
              <p>This gives us:</p>
              <ul className="list-disc list-inside ml-4">
                <li>sin(4θ) = 0 ⟹ 4θ = nπ ⟹ θ = nπ/4</li>
                <li>cos(θ) = 0 ⟹ θ = π/2 + nπ</li>
              </ul>
              
              <p><strong>General Solution:</strong> θ = nπ/4 or θ = π/2 + nπ where n ∈ ℤ</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 6: Tangent Equation</h3>
            <p className="mb-2">Solve: tan²θ - 3tan θ + 2 = 0</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Let u = tan θ. Then: u² - 3u + 2 = 0</p>
              
              <p>Factoring: (u - 1)(u - 2) = 0</p>
              
              <p>So u = 1 or u = 2</p>
              
              <p>Case 1: tan θ = 1</p>
              <p>θ = π/4 + nπ</p>
              
              <p>Case 2: tan θ = 2</p>
              <p>θ = tan⁻¹(2) + nπ ≈ 1.107 + nπ</p>
              
              <p><strong>General Solution:</strong> θ = π/4 + nπ or θ = tan⁻¹(2) + nπ where n ∈ ℤ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}