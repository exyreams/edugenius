"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function OrthogonalMatrix() {
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
      label: "Orthogonal Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/orthogonal-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Orthogonal Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          An orthogonal matrix is a square matrix Q whose columns and rows are orthonormal vectors. The transpose of an orthogonal matrix is equal to its inverse.
        </p>
        
        <BlockMath math="Q^T Q = Q Q^T = I" />
        <BlockMath math="Q^{-1} = Q^T" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Determinant</h3>
            <BlockMath math="\det(Q) = \pm 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Preservation of Length</h3>
            <BlockMath math="|Qx| = |x|" />
            <p>for any vector x</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Preservation of Angles</h3>
            <p>Orthogonal transformations preserve angles between vectors</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Eigenvalues</h3>
            <p>All eigenvalues have absolute value 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Product Property</h3>
            <p>The product of orthogonal matrices is orthogonal</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Types</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Rotation Matrix (det = +1)</h3>
            <p>Represents pure rotation without reflection</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Reflection Matrix (det = -1)</h3>
            <p>Represents rotation combined with reflection</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">2D Rotation Matrix</h3>
          <BlockMath math="Q = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}" />
          
          <p className="mb-2">Verification:</p>
          <BlockMath math="Q^T Q = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Simple Example</h3>
          <BlockMath math="Q = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" />
          
          <p className="mb-2">Check orthogonality:</p>
          <BlockMath math="Q^T Q = \frac{1}{2} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \frac{1}{2} \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = I" />
        </div>
      </div>
    </div>
  );
}
