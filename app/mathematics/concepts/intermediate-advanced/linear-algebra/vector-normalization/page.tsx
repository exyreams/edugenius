"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function VectorNormalization() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Linear Algebra",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra",
    },
    {
      label: "Vector Normalization",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/vector-normalization",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Vector Normalization</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          Vector normalization is the process of converting a vector into a unit vector (a vector with magnitude 1) while preserving its direction. This process is also called "unitizing" a vector.
        </p>
        
        <p className="mb-4">The normalized vector <InlineMath math="\hat{v}" /> of vector <InlineMath math="\vec{v}" /> is:</p>
        <BlockMath math="\hat{v} = \frac{\vec{v}}{|\vec{v}|}" />
        
        <p className="mb-4">where <InlineMath math="|\vec{v}|" /> is the magnitude (or norm) of the vector.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Vector Magnitude (Norm)</h2>
        <p className="mb-4">For different dimensional vectors:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">2D Vector</h3>
            <p className="mb-2">For <InlineMath math="\vec{v} = (v_x, v_y)" />:</p>
            <BlockMath math="|\vec{v}| = \sqrt{v_x^2 + v_y^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3D Vector</h3>
            <p className="mb-2">For <InlineMath math="\vec{v} = (v_x, v_y, v_z)" />:</p>
            <BlockMath math="|\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">n-Dimensional Vector</h3>
            <p className="mb-2">For <InlineMath math="\vec{v} = (v_1, v_2, \ldots, v_n)" />:</p>
            <BlockMath math="|\vec{v}| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2} = \sqrt{\sum_{i=1}^{n} v_i^2}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Normalization Process</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 1: Calculate the Magnitude</h3>
            <p>Find <InlineMath math="|\vec{v}|" /> using the appropriate formula above</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 2: Divide Each Component</h3>
            <p>Divide each component of the vector by its magnitude:</p>
            <BlockMath math="\hat{v} = \left(\frac{v_x}{|\vec{v}|}, \frac{v_y}{|\vec{v}|}, \frac{v_z}{|\vec{v}|}\right)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 3: Verify</h3>
            <p>The resulting unit vector should have magnitude 1: <InlineMath math="|\hat{v}| = 1" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Magnitude Preservation</h3>
            <p>The normalized vector always has magnitude 1</p>
            <BlockMath math="|\hat{v}| = 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Direction Preservation</h3>
            <p>The normalized vector points in the same direction as the original vector</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Scaling Relationship</h3>
            <p>The original vector can be recovered by scaling the unit vector:</p>
            <BlockMath math="\vec{v} = |\vec{v}| \cdot \hat{v}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Zero Vector Exception</h3>
            <p>The zero vector <InlineMath math="\vec{0}" /> cannot be normalized (division by zero)</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Computer graphics and 3D modeling (surface normals)</li>
          <li>Machine learning (feature scaling and normalization)</li>
          <li>Physics simulations (direction vectors)</li>
          <li>Navigation and robotics (heading directions)</li>
          <li>Signal processing (unit impulse responses)</li>
          <li>Game development (movement directions)</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: 2D Vector Normalization</h3>
          <p className="mb-2">Normalize vector <InlineMath math="\vec{v} = (6, 8)" />:</p>
          
          <p className="mb-2">Step 1: Calculate magnitude</p>
          <BlockMath math="|\vec{v}| = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10" />
          
          <p className="mb-2">Step 2: Normalize</p>
          <BlockMath math="\hat{v} = \frac{(6, 8)}{10} = \left(\frac{6}{10}, \frac{8}{10}\right) = (0.6, 0.8)" />
          
          <p className="mb-2">Step 3: Verify</p>
          <BlockMath math="|\hat{v}| = \sqrt{0.6^2 + 0.8^2} = \sqrt{0.36 + 0.64} = \sqrt{1} = 1 \checkmark" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: 3D Vector Normalization</h3>
          <p className="mb-2">Normalize vector <InlineMath math="\vec{a} = (3, -4, 12)" />:</p>
          
          <p className="mb-2">Step 1: Calculate magnitude</p>
          <BlockMath math="|\vec{a}| = \sqrt{3^2 + (-4)^2 + 12^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13" />
          
          <p className="mb-2">Step 2: Normalize</p>
          <BlockMath math="\hat{a} = \frac{(3, -4, 12)}{13} = \left(\frac{3}{13}, -\frac{4}{13}, \frac{12}{13}\right)" />
          
          <p className="mb-2">Step 3: Verify</p>
          <BlockMath math="|\hat{a}| = \sqrt{\left(\frac{3}{13}\right)^2 + \left(-\frac{4}{13}\right)^2 + \left(\frac{12}{13}\right)^2} = \sqrt{\frac{9 + 16 + 144}{169}} = \sqrt{\frac{169}{169}} = 1 \checkmark" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 3: Already Normalized Vector</h3>
          <p className="mb-2">Check if vector <InlineMath math="\vec{b} = \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0\right)" /> is normalized:</p>
          
          <BlockMath math="|\vec{b}| = \sqrt{\left(\frac{1}{\sqrt{2}}\right)^2 + \left(\frac{1}{\sqrt{2}}\right)^2 + 0^2} = \sqrt{\frac{1}{2} + \frac{1}{2}} = \sqrt{1} = 1" />
          
          <p>Since <InlineMath math="|\vec{b}| = 1" />, the vector is already normalized!</p>
        </div>
      </div>
    </div>
  );
}
