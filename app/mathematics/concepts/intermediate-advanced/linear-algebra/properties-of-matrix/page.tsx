"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function PropertiesOfMatrix() {
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
      label: "Properties of Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/properties-of-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Properties of Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Addition Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Commutative Property</h3>
            <BlockMath math="A + B = B + A" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Associative Property</h3>
            <BlockMath math="(A + B) + C = A + (B + C)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Additive Identity</h3>
            <BlockMath math="A + O = O + A = A" />
            <p>where O is the zero matrix</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Additive Inverse</h3>
            <BlockMath math="A + (-A) = O" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Multiplication Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Associative Property</h3>
            <BlockMath math="(AB)C = A(BC)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Distributive Properties</h3>
            <BlockMath math="A(B + C) = AB + AC" />
            <BlockMath math="(A + B)C = AC + BC" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Multiplicative Identity</h3>
            <BlockMath math="AI = IA = A" />
            <p>where I is the identity matrix</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Non-Commutative</h3>
            <p>In general: <InlineMath math="AB \neq BA" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Scalar Multiplication Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Associative with Scalars</h3>
            <BlockMath math="k(lA) = (kl)A" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Distributive over Matrix Addition</h3>
            <BlockMath math="k(A + B) = kA + kB" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Distributive over Scalar Addition</h3>
            <BlockMath math="(k + l)A = kA + lA" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Scalar Identity</h3>
            <BlockMath math="1 \cdot A = A" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Transpose Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Double Transpose</h3>
            <BlockMath math="(A^T)^T = A" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Sum Transpose</h3>
            <BlockMath math="(A + B)^T = A^T + B^T" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Product Transpose</h3>
            <BlockMath math="(AB)^T = B^T A^T" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Scalar Transpose</h3>
            <BlockMath math="(kA)^T = kA^T" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Determinant Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Product Rule</h3>
            <BlockMath math="\det(AB) = \det(A)\det(B)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Transpose Rule</h3>
            <BlockMath math="\det(A^T) = \det(A)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Scalar Rule</h3>
            <BlockMath math="\det(kA) = k^n\det(A)" />
            <p>for an n×n matrix</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Inverse Rule</h3>
            <BlockMath math="\det(A^{-1}) = \frac{1}{\det(A)}" />
          </div>
        </div>
      </div>
    </div>
  );
}
