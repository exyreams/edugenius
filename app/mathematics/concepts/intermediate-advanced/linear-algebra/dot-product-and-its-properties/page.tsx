"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function DotProductAndProperties() {
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
      label: "Dot Product and Its Properties",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/dot-product-and-its-properties",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Dot Product and Its Properties</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The dot product (or scalar product) of two vectors <InlineMath math="\vec{a}" /> and <InlineMath math="\vec{b}" /> is a scalar quantity.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Formula</h2>
        <p className="mb-4">For vectors in component form:</p>
        <BlockMath math="\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3" />
        
        <p className="mb-4">Using magnitudes and angle:</p>
        <BlockMath math="\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta" />
        <p className="mb-4">where θ is the angle between the vectors.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Commutative Property</h3>
            <BlockMath math="\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Distributive Property</h3>
            <BlockMath math="\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Scalar Multiplication</h3>
            <BlockMath math="k(\vec{a} \cdot \vec{b}) = (k\vec{a}) \cdot \vec{b} = \vec{a} \cdot (k\vec{b})" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Self Dot Product</h3>
            <BlockMath math="\vec{a} \cdot \vec{a} = |\vec{a}|^2" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Orthogonal Vectors</h3>
            <p>If vectors are perpendicular: <InlineMath math="\vec{a} \cdot \vec{b} = 0" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Finding the angle between two vectors</li>
          <li>Determining if vectors are orthogonal</li>
          <li>Calculating vector projections</li>
          <li>Computing work done by a force</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <p className="mb-4">Find the dot product of <InlineMath math="\vec{a} = (3, 4, 2)" /> and <InlineMath math="\vec{b} = (1, 2, 5)" />:</p>
        
        <BlockMath math="\vec{a} \cdot \vec{b} = (3)(1) + (4)(2) + (2)(5)" />
        <BlockMath math="= 3 + 8 + 10 = 21" />
        
        <p className="mb-4">To find the angle between them:</p>
        <BlockMath math="|\vec{a}| = \sqrt{3^2 + 4^2 + 2^2} = \sqrt{29}" />
        <BlockMath math="|\vec{b}| = \sqrt{1^2 + 2^2 + 5^2} = \sqrt{30}" />
        <BlockMath math="\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|} = \frac{21}{\sqrt{29}\sqrt{30}}" />
      </div>
    </div>
  );
}
