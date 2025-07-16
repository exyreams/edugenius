"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function TransposeOfMatrix() {
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
      label: "Transpose of Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/transpose-of-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Transpose of Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The transpose of a matrix A is obtained by interchanging its rows and columns. The transpose of matrix A is denoted as <InlineMath math="A^T" /> or <InlineMath math="A'" />.
        </p>
        
        <p className="mb-4">If A is an m×n matrix, then <InlineMath math="A^T" /> is an n×m matrix where:</p>
        <BlockMath math="(A^T)_{ij} = A_{ji}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
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
            <h3 className="text-lg font-semibold mb-2">3. Scalar Multiplication</h3>
            <BlockMath math="(kA)^T = kA^T" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Product Transpose</h3>
            <BlockMath math="(AB)^T = B^T A^T" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Note: The order is reversed</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Inverse Transpose</h3>
            <BlockMath math="(A^{-1})^T = (A^T)^{-1}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Cases</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Symmetric Matrix</h3>
            <p>A matrix A is symmetric if <InlineMath math="A = A^T" /></p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Skew-Symmetric Matrix</h3>
            <p>A matrix A is skew-symmetric if <InlineMath math="A^T = -A" /></p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Orthogonal Matrix</h3>
            <p>A matrix A is orthogonal if <InlineMath math="A^T A = I" /></p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Solving systems of linear equations</li>
          <li>Computing dot products: <InlineMath math="x \cdot y = x^T y" /></li>
          <li>Defining symmetric and orthogonal matrices</li>
          <li>Matrix decompositions (LU, QR, SVD)</li>
          <li>Least squares problems</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Basic Example</h3>
          <p className="mb-2">Given matrix:</p>
          <BlockMath math="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}" />
          
          <p className="mb-2">The transpose is:</p>
          <BlockMath math="A^T = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Square Matrix Example</h3>
          <p className="mb-2">Given:</p>
          <BlockMath math="B = \begin{pmatrix} 2 & 7 & 1 \\ 3 & 5 & 8 \\ 9 & 4 & 6 \end{pmatrix}" />
          
          <p className="mb-2">The transpose is:</p>
          <BlockMath math="B^T = \begin{pmatrix} 2 & 3 & 9 \\ 7 & 5 & 4 \\ 1 & 8 & 6 \end{pmatrix}" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Property Verification</h3>
          <p className="mb-2">Let <InlineMath math="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" /> and <InlineMath math="B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}" /></p>
          
          <p className="mb-2">Then:</p>
          <BlockMath math="AB = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}" />
          <BlockMath math="(AB)^T = \begin{pmatrix} 19 & 43 \\ 22 & 50 \end{pmatrix}" />
          
          <p className="mb-2">And:</p>
          <BlockMath math="B^T A^T = \begin{pmatrix} 5 & 7 \\ 6 & 8 \end{pmatrix} \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 19 & 43 \\ 22 & 50 \end{pmatrix}" />
          
          <p>Verifying that <InlineMath math="(AB)^T = B^T A^T" /></p>
        </div>
      </div>
    </div>
  );
}
