"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function IdentityMatrix() {
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
      label: "Identity Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/identity-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Identity Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          An identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere. It acts as the multiplicative identity for matrix multiplication.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Notation</h2>
        <p className="mb-4">The identity matrix is denoted as <InlineMath math="I" /> or <InlineMath math="I_n" /> for an n×n matrix.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">General Form</h2>
        <p className="mb-4">For an n×n identity matrix:</p>
        <BlockMath math="I_n = \begin{pmatrix} 1 & 0 & 0 & \cdots & 0 \\ 0 & 1 & 0 & \cdots & 0 \\ 0 & 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & 1 \end{pmatrix}" />
        
        <p className="mb-4">In terms of the Kronecker delta:</p>
        <BlockMath math="(I_n)_{ij} = \delta_{ij} = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Multiplicative Identity</h3>
            <BlockMath math="AI = IA = A" />
            <p>for any compatible matrix A</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Determinant</h3>
            <BlockMath math="\det(I) = 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Trace</h3>
            <BlockMath math="\text{tr}(I_n) = n" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Eigenvalues</h3>
            <p>All eigenvalues equal 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Inverse</h3>
            <BlockMath math="I^{-1} = I" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">2×2 Identity Matrix</h3>
          <BlockMath math="I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">3×3 Identity Matrix</h3>
          <BlockMath math="I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Verification Example</h3>
          <p className="mb-2">Let <InlineMath math="A = \begin{pmatrix} 2 & 3 \\ 4 & 5 \end{pmatrix}" /></p>
          <BlockMath math="AI_2 = \begin{pmatrix} 2 & 3 \\ 4 & 5 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 5 \end{pmatrix} = A" />
        </div>
      </div>
    </div>
  );
}
