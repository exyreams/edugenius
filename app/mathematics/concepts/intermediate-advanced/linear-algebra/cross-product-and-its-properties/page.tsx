"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function CrossProductAndItsProperties() {
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
      label: "Cross Product and Its Properties",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/cross-product-and-its-properties",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Cross Product and Its Properties</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The cross product (or vector product) of two vectors <InlineMath math="\vec{a}" /> and <InlineMath math="\vec{b}" /> is a vector perpendicular to both original vectors.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Formula</h2>
        <p className="mb-4">For vectors in 3D space:</p>
        <BlockMath math="\vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}" />

        <p className="mb-4">Which expands to:</p>
        <BlockMath math="\vec{a} \times \vec{b} = (a_2b_3 - a_3b_2)\vec{i} - (a_1b_3 - a_3b_1)\vec{j} + (a_1b_2 - a_2b_1)\vec{k}" />

        <p className="mb-4">The magnitude is:</p>
        <BlockMath math="|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\theta" />
        <p className="mb-4">where θ is the angle between the vectors.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Anti-commutative Property</h3>
            <BlockMath math="\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">2. Distributive Property</h3>
            <BlockMath math="\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">3. Scalar Multiplication</h3>
            <BlockMath math="k(\vec{a} \times \vec{b}) = (k\vec{a}) \times \vec{b} = \vec{a} \times (k\vec{b})" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">4. Zero Vector Property</h3>
            <BlockMath math="\vec{a} \times \vec{a} = \vec{0}" />
            <BlockMath math="\vec{a} \times \vec{0} = \vec{0}" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">5. Parallel Vectors</h3>
            <p>If vectors are parallel: <InlineMath math="\vec{a} \times \vec{b} = \vec{0}" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Geometric Interpretation</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The cross product is perpendicular to both original vectors</li>
          <li>Direction follows the right-hand rule</li>
          <li>Magnitude equals the area of the parallelogram formed by the vectors</li>
          <li>If vectors are parallel, cross product is zero</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <p className="mb-4">Find the cross product of <InlineMath math="\vec{a} = (2, 1, 3)" /> and <InlineMath math="\vec{b} = (1, 4, 2)" />:</p>

        <BlockMath math="\vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 1 & 3 \\ 1 & 4 & 2 \end{vmatrix}" />

        <p className="mb-4">Expanding:</p>
        <BlockMath math="\vec{a} \times \vec{b} = (1 \cdot 2 - 3 \cdot 4)\vec{i} - (2 \cdot 2 - 3 \cdot 1)\vec{j} + (2 \cdot 4 - 1 \cdot 1)\vec{k}" />
        <BlockMath math="= (2 - 12)\vec{i} - (4 - 3)\vec{j} + (8 - 1)\vec{k}" />
        <BlockMath math="= -10\vec{i} - \vec{j} + 7\vec{k}" />
        <BlockMath math="= (-10, -1, 7)" />
      </div>
    </div>
  );
}
