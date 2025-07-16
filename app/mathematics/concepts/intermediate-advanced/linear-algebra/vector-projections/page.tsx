"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function VectorProjections() {
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
      label: "Vector Projections",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/vector-projections",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Vector Projections</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          Vector projection is the process of finding the component of one vector in the direction of another vector. The projection of vector <InlineMath math="\vec{a}" /> onto vector <InlineMath math="\vec{b}" /> gives the "shadow" of <InlineMath math="\vec{a}" /> along <InlineMath math="\vec{b}" />.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Scalar Projection</h2>
        <p className="mb-4">
          The scalar projection (or component) of <InlineMath math="\vec{a}" /> onto <InlineMath math="\vec{b}" /> is:
        </p>
        
        <BlockMath math="\text{comp}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}" />
        
        <p className="mb-4">This can also be written as:</p>
        <BlockMath math="\text{comp}_{\vec{b}}\vec{a} = |\vec{a}|\cos\theta" />
        
        <p className="mb-4">where θ is the angle between vectors <InlineMath math="\vec{a}" /> and <InlineMath math="\vec{b}" />.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Vector Projection</h2>
        <p className="mb-4">
          The vector projection of <InlineMath math="\vec{a}" /> onto <InlineMath math="\vec{b}" /> is:
        </p>
        
        <BlockMath math="\text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\vec{b}" />
        
        <p className="mb-4">This can also be written using the unit vector <InlineMath math="\hat{b}" />:</p>
        <BlockMath math="\text{proj}_{\vec{b}}\vec{a} = (\vec{a} \cdot \hat{b})\hat{b}" />
        
        <p className="mb-4">where <InlineMath math="\hat{b} = \frac{\vec{b}}{|\vec{b}|}" /> is the unit vector in the direction of <InlineMath math="\vec{b}" />.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Orthogonal Component</h2>
        <p className="mb-4">
          The orthogonal component (or rejection) of <InlineMath math="\vec{a}" /> with respect to <InlineMath math="\vec{b}" /> is:
        </p>
        
        <BlockMath math="\text{orth}_{\vec{b}}\vec{a} = \vec{a} - \text{proj}_{\vec{b}}\vec{a}" />
        
        <p className="mb-4">This component is perpendicular to <InlineMath math="\vec{b}" /> and satisfies:</p>
        <BlockMath math="\vec{a} = \text{proj}_{\vec{b}}\vec{a} + \text{orth}_{\vec{b}}\vec{a}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Direction</h3>
            <p>The projection is always in the direction of <InlineMath math="\vec{b}" /> (or opposite if the dot product is negative)</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Magnitude</h3>
            <p>The magnitude of the projection is <InlineMath math="|\text{proj}_{\vec{b}}\vec{a}| = |\text{comp}_{\vec{b}}\vec{a}|" /></p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Orthogonality</h3>
            <p>The orthogonal component is perpendicular to <InlineMath math="\vec{b}" />:</p>
            <BlockMath math="\text{orth}_{\vec{b}}\vec{a} \cdot \vec{b} = 0" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Pythagorean Theorem</h3>
            <BlockMath math="|\vec{a}|^2 = |\text{proj}_{\vec{b}}\vec{a}|^2 + |\text{orth}_{\vec{b}}\vec{a}|^2" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Physics: Finding force components</li>
          <li>Computer graphics: Lighting calculations and reflections</li>
          <li>Engineering: Stress analysis and structural mechanics</li>
          <li>Machine learning: Principal component analysis (PCA)</li>
          <li>Signal processing: Filtering and decomposition</li>
          <li>Geometry: Distance from point to line/plane</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Projection</h3>
          <p className="mb-2">Find the projection of <InlineMath math="\vec{a} = (3, 4)" /> onto <InlineMath math="\vec{b} = (1, 0)" />:</p>
          
          <p className="mb-2">Step 1: Calculate dot product</p>
          <BlockMath math="\vec{a} \cdot \vec{b} = (3)(1) + (4)(0) = 3" />
          
          <p className="mb-2">Step 2: Calculate magnitude of <InlineMath math="\vec{b}" /></p>
          <BlockMath math="|\vec{b}|^2 = 1^2 + 0^2 = 1" />
          
          <p className="mb-2">Step 3: Calculate projection</p>
          <BlockMath math="\text{proj}_{\vec{b}}\vec{a} = \frac{3}{1}(1, 0) = (3, 0)" />
          
          <p className="mb-2">Step 4: Calculate orthogonal component</p>
          <BlockMath math="\text{orth}_{\vec{b}}\vec{a} = (3, 4) - (3, 0) = (0, 4)" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: 3D Projection</h3>
          <p className="mb-2">Find the projection of <InlineMath math="\vec{u} = (2, 1, 3)" /> onto <InlineMath math="\vec{v} = (1, 1, 1)" />:</p>
          
          <p className="mb-2">Step 1: Calculate dot product</p>
          <BlockMath math="\vec{u} \cdot \vec{v} = (2)(1) + (1)(1) + (3)(1) = 6" />
          
          <p className="mb-2">Step 2: Calculate magnitude squared</p>
          <BlockMath math="|\vec{v}|^2 = 1^2 + 1^2 + 1^2 = 3" />
          
          <p className="mb-2">Step 3: Calculate projection</p>
          <BlockMath math="\text{proj}_{\vec{v}}\vec{u} = \frac{6}{3}(1, 1, 1) = 2(1, 1, 1) = (2, 2, 2)" />
          
          <p className="mb-2">Step 4: Verify using scalar projection</p>
          <BlockMath math="\text{comp}_{\vec{v}}\vec{u} = \frac{6}{\sqrt{3}} = 2\sqrt{3}" />
          <BlockMath math="|\text{proj}_{\vec{v}}\vec{u}| = |(2, 2, 2)| = 2\sqrt{3} \checkmark" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 3: Angle Calculation</h3>
          <p className="mb-2">Find the angle between <InlineMath math="\vec{p} = (1, 2, 2)" /> and <InlineMath math="\vec{q} = (2, 1, 0)" />:</p>
          
          <p className="mb-2">Using the scalar projection formula:</p>
          <BlockMath math="\vec{p} \cdot \vec{q} = (1)(2) + (2)(1) + (2)(0) = 4" />
          <BlockMath math="|\vec{p}| = \sqrt{1^2 + 2^2 + 2^2} = 3" />
          <BlockMath math="|\vec{q}| = \sqrt{2^2 + 1^2 + 0^2} = \sqrt{5}" />
          
          <p className="mb-2">Therefore:</p>
          <BlockMath math="\cos\theta = \frac{\vec{p} \cdot \vec{q}}{|\vec{p}||\vec{q}|} = \frac{4}{3\sqrt{5}} = \frac{4\sqrt{5}}{15}" />
          <BlockMath math="\theta = \arccos\left(\frac{4\sqrt{5}}{15}\right) \approx 53.13°" />
        </div>
      </div>
    </div>
  );
}
