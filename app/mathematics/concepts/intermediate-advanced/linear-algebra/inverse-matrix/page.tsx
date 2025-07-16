"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function InverseMatrix() {
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
      label: "Inverse Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/inverse-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Inverse Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The inverse of a square matrix A is a matrix <InlineMath math="A^{-1}" /> such that when multiplied with A gives the identity matrix.
        </p>
        
        <BlockMath math="AA^{-1} = A^{-1}A = I" />
        
        <p className="mb-4">A matrix has an inverse if and only if it is non-singular (determinant ≠ 0).</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Formula for 2×2 Matrix</h2>
        <p className="mb-4">For a 2×2 matrix:</p>
        <BlockMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" />
        
        <p className="mb-4">The inverse is:</p>
        <BlockMath math="A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
        
        <p className="mb-4">provided that <InlineMath math="\det(A) = ad - bc \neq 0" /></p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">General Formula</h2>
        <p className="mb-4">For any n×n matrix A:</p>
        <BlockMath math="A^{-1} = \frac{1}{\det(A)} \text{adj}(A)" />
        
        <p className="mb-4">where adj(A) is the adjugate (adjoint) matrix of A.</p>
        
        <p className="mb-4">The adjugate matrix is the transpose of the cofactor matrix:</p>
        <BlockMath math="\text{adj}(A) = C^T" />
        <BlockMath math="C_{ij} = (-1)^{i+j}M_{ij}" />
        
        <p className="mb-4">where <InlineMath math="M_{ij}" /> is the minor of element <InlineMath math="a_{ij}" />.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Uniqueness</h3>
            <p>If an inverse exists, it is unique</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Inverse of Inverse</h3>
            <BlockMath math="(A^{-1})^{-1} = A" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Inverse of Product</h3>
            <BlockMath math="(AB)^{-1} = B^{-1}A^{-1}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Inverse of Transpose</h3>
            <BlockMath math="(A^T)^{-1} = (A^{-1})^T" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Determinant of Inverse</h3>
            <BlockMath math="\det(A^{-1}) = \frac{1}{\det(A)}" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Example</h2>
        <p className="mb-4">Find the inverse of <InlineMath math="A = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}" />:</p>
        
        <p className="mb-4">First, calculate the determinant:</p>
        <BlockMath math="\det(A) = (2)(2) - (1)(3) = 4 - 3 = 1" />
        
        <p className="mb-4">Since det(A) ≠ 0, the inverse exists:</p>
        <BlockMath math="A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix}" />
        
        <p className="mb-4">Verification:</p>
        <BlockMath math="AA^{-1} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -3 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I" />
      </div>
    </div>
  );
}
