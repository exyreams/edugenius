"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function TriangularMatrix() {
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
      label: "Triangular Matrix",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/triangular-matrix",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Triangular Matrix</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          A triangular matrix is a square matrix where all elements above or below the main diagonal are zero. There are two types of triangular matrices.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Types of Triangular Matrices</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Upper Triangular Matrix</h3>
            <p className="mb-4">All elements below the main diagonal are zero: <InlineMath math="a_{ij} = 0" /> for <InlineMath math="i > j" /></p>
            <BlockMath math="U = \begin{pmatrix} u_{11} & u_{12} & u_{13} & \cdots & u_{1n} \\ 0 & u_{22} & u_{23} & \cdots & u_{2n} \\ 0 & 0 & u_{33} & \cdots & u_{3n} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \cdots & u_{nn} \end{pmatrix}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Lower Triangular Matrix</h3>
            <p className="mb-4">All elements above the main diagonal are zero: <InlineMath math="a_{ij} = 0" /> for <InlineMath math="i < j" /></p>
            <BlockMath math="L = \begin{pmatrix} l_{11} & 0 & 0 & \cdots & 0 \\ l_{21} & l_{22} & 0 & \cdots & 0 \\ l_{31} & l_{32} & l_{33} & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ l_{n1} & l_{n2} & l_{n3} & \cdots & l_{nn} \end{pmatrix}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Determinant</h3>
            <p>The determinant equals the product of diagonal elements:</p>
            <BlockMath math="\det(A) = a_{11} \cdot a_{22} \cdot a_{33} \cdots a_{nn}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Product Property</h3>
            <p>The product of two upper (or lower) triangular matrices is triangular of the same type</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Inverse Property</h3>
            <p>The inverse of a triangular matrix (if it exists) is triangular of the same type</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Eigenvalues</h3>
            <p>The eigenvalues are the diagonal elements</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Transpose</h3>
            <p>The transpose of an upper triangular matrix is lower triangular, and vice versa</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Cases</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Unit Triangular Matrix</h3>
            <p>A triangular matrix with all diagonal elements equal to 1</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Strictly Triangular Matrix</h3>
            <p>A triangular matrix with all diagonal elements equal to 0</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Diagonal Matrix</h3>
            <p>A matrix that is both upper and lower triangular (only diagonal elements are non-zero)</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>LU decomposition of matrices</li>
          <li>Solving systems of linear equations efficiently</li>
          <li>Computing matrix inverses</li>
          <li>Numerical algorithms and computations</li>
          <li>Cholesky decomposition</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Upper Triangular Matrix</h3>
          <BlockMath math="U = \begin{pmatrix} 2 & 3 & 1 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{pmatrix}" />
          
          <p className="mb-2">Determinant: <InlineMath math="\det(U) = 2 \times 4 \times 6 = 48" /></p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Lower Triangular Matrix</h3>
          <BlockMath math="L = \begin{pmatrix} 3 & 0 & 0 \\ 2 & 5 & 0 \\ 1 & 4 & 7 \end{pmatrix}" />
          
          <p className="mb-2">Determinant: <InlineMath math="\det(L) = 3 \times 5 \times 7 = 105" /></p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Unit Upper Triangular Matrix</h3>
          <BlockMath math="U_1 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}" />
          
          <p className="mb-2">Determinant: <InlineMath math="\det(U_1) = 1 \times 1 \times 1 = 1" /></p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Solving Linear Systems</h3>
          <p className="mb-2">For upper triangular system <InlineMath math="Ux = b" />:</p>
          <BlockMath math="\begin{pmatrix} 2 & 3 & 1 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 10 \\ 13 \\ 12 \end{pmatrix}" />
          
          <p className="mb-2">Solve by back substitution:</p>
          <p className="mb-1"><InlineMath math="x_3 = 12/6 = 2" /></p>
          <p className="mb-1"><InlineMath math="x_2 = (13 - 5 \times 2)/4 = 3/4" /></p>
          <p><InlineMath math="x_1 = (10 - 3 \times 3/4 - 1 \times 2)/2 = 15/8" /></p>
        </div>
      </div>
    </div>
  );
}
