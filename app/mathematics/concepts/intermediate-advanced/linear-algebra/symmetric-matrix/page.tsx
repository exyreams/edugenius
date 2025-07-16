"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function SymmetricMatrix() {
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
      label: "Symmetric Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/symmetric-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Symmetric Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          A symmetric matrix is a square matrix that is equal to its transpose. In other words, the matrix is symmetric about its main diagonal.
        </p>
        
        <BlockMath math="A = A^T" />
        
        <p className="mb-4">This means that for all i and j:</p>
        <BlockMath math="a_{ij} = a_{ji}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Real Eigenvalues</h3>
            <p>All eigenvalues of a real symmetric matrix are real</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Orthogonal Eigenvectors</h3>
            <p>Eigenvectors corresponding to distinct eigenvalues are orthogonal</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Diagonalizable</h3>
            <p>Every symmetric matrix is diagonalizable by an orthogonal matrix</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Sum and Difference</h3>
            <p>The sum and difference of symmetric matrices are symmetric</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Scalar Multiplication</h3>
            <p>Scalar multiples of symmetric matrices are symmetric</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Cases</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Positive Definite</h3>
            <p>A symmetric matrix A is positive definite if <InlineMath math="x^T A x > 0" /> for all non-zero vectors x</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Positive Semi-definite</h3>
            <p>A symmetric matrix A is positive semi-definite if <InlineMath math="x^T A x \geq 0" /> for all vectors x</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Negative Definite</h3>
            <p>A symmetric matrix A is negative definite if <InlineMath math="x^T A x < 0" /> for all non-zero vectors x</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">2×2 Symmetric Matrix</h3>
          <BlockMath math="A = \begin{pmatrix} 3 & 2 \\ 2 & 5 \end{pmatrix}" />
          
          <p className="mb-2">Verification:</p>
          <BlockMath math="A^T = \begin{pmatrix} 3 & 2 \\ 2 & 5 \end{pmatrix} = A" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">3×3 Symmetric Matrix</h3>
          <BlockMath math="B = \begin{pmatrix} 1 & 4 & 7 \\ 4 & 2 & 8 \\ 7 & 8 & 3 \end{pmatrix}" />
          
          <p className="mb-2">Note how <InlineMath math="b_{ij} = b_{ji}" /> for all i, j</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Creating Symmetric Matrices</h3>
          <p className="mb-2">Any matrix can be made symmetric using:</p>
          <BlockMath math="S = \frac{1}{2}(A + A^T)" />
          <p>This creates a symmetric matrix from any square matrix A</p>
        </div>
      </div>
    </div>
  );
}
