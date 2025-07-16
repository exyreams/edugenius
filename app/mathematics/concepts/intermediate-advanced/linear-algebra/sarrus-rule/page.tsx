"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function SarrusRule() {
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
      label: "Sarrus Rule",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/sarrus-rule",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Sarrus Rule</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          Sarrus' rule is a mnemonic device for computing the determinant of a 3×3 matrix. It provides a visual method to calculate the determinant by extending the matrix and following diagonal patterns.
        </p>
        
        <p className="mb-4">
          <strong>Note:</strong> Sarrus' rule only works for 3×3 matrices and cannot be generalized to larger matrices.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Method</h2>
        <p className="mb-4">For a 3×3 matrix:</p>
        <BlockMath math="A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}" />
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 1: Extend the Matrix</h3>
            <p className="mb-2">Write the first two columns again to the right of the matrix:</p>
            <BlockMath math="\begin{array}{ccc|cc} a_{11} & a_{12} & a_{13} & a_{11} & a_{12} \\ a_{21} & a_{22} & a_{23} & a_{21} & a_{22} \\ a_{31} & a_{32} & a_{33} & a_{31} & a_{32} \end{array}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 2: Calculate Positive Terms</h3>
            <p className="mb-2">Sum the products of the main diagonals (top-left to bottom-right):</p>
            <BlockMath math="+a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 3: Calculate Negative Terms</h3>
            <p className="mb-2">Subtract the products of the anti-diagonals (top-right to bottom-left):</p>
            <BlockMath math="-a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Formula</h2>
        <p className="mb-4">The complete determinant formula using Sarrus' rule:</p>
        <BlockMath math="\begin{align} \det(A) &= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\ &\quad - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} \end{align}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Visual Representation</h2>
        <p className="mb-4">The diagonals can be visualized as:</p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Positive Diagonals (↘)</h3>
            <p>Three diagonals going from top-left to bottom-right</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Negative Diagonals (↙)</h3>
            <p>Three diagonals going from top-right to bottom-left</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <p className="mb-4">Calculate the determinant of:</p>
        <BlockMath math="A = \begin{pmatrix} 2 & 1 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}" />
        
        <p className="mb-4">Extended matrix:</p>
        <BlockMath math="\begin{array}{ccc|cc} 2 & 1 & 3 & 2 & 1 \\ 4 & 5 & 6 & 4 & 5 \\ 7 & 8 & 9 & 7 & 8 \end{array}" />
        
        <p className="mb-4">Positive terms:</p>
        <BlockMath math="(2)(5)(9) + (1)(6)(7) + (3)(4)(8) = 90 + 42 + 96 = 228" />
        
        <p className="mb-4">Negative terms:</p>
        <BlockMath math="(3)(5)(7) + (2)(6)(8) + (1)(4)(9) = 105 + 96 + 36 = 237" />
        
        <p className="mb-4">Therefore:</p>
        <BlockMath math="\det(A) = 228 - 237 = -9" />
      </div>
    </div>
  );
}
