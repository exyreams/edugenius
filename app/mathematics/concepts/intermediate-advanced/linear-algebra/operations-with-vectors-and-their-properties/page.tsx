"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function OperationsWithVectorsAndTheirProperties() {
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
      label: "Operations with Vectors and Their Properties",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/operations-with-vectors-and-their-properties",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">
        Operations with Vectors and Their Properties
      </h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Vector Addition</h2>
        <p className="mb-4">
          Vector addition combines two or more vectors to produce a resultant vector.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Component Form</h3>
            <p className="mb-2">For vectors <InlineMath math="\vec{a} = (a_1, a_2, a_3)" /> and <InlineMath math="\vec{b} = (b_1, b_2, b_3)" />:</p>
            <BlockMath math="\vec{a} + \vec{b} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties of Addition</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Commutative Property</h4>
                <BlockMath math="\vec{a} + \vec{b} = \vec{b} + \vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Associative Property</h4>
                <BlockMath math="(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})" />
              </div>
              
              <div>
                <h4 className="font-semibold">Identity Element</h4>
                <BlockMath math="\vec{a} + \vec{0} = \vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Additive Inverse</h4>
                <BlockMath math="\vec{a} + (-\vec{a}) = \vec{0}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Vector Subtraction</h2>
        <p className="mb-4">
          Vector subtraction is equivalent to adding the negative of a vector.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Component Form</h3>
            <BlockMath math="\vec{a} - \vec{b} = (a_1 - b_1, a_2 - b_2, a_3 - b_3)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Form</h3>
            <BlockMath math="\vec{a} - \vec{b} = \vec{a} + (-\vec{b})" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Non-commutative</h4>
                <BlockMath math="\vec{a} - \vec{b} \neq \vec{b} - \vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Self Subtraction</h4>
                <BlockMath math="\vec{a} - \vec{a} = \vec{0}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Scalar Multiplication</h2>
        <p className="mb-4">
          Scalar multiplication involves multiplying a vector by a scalar (real number).
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Component Form</h3>
            <p className="mb-2">For scalar k and vector <InlineMath math="\vec{a} = (a_1, a_2, a_3)" />:</p>
            <BlockMath math="k\vec{a} = (ka_1, ka_2, ka_3)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Associative with Scalars</h4>
                <BlockMath math="k(l\vec{a}) = (kl)\vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Distributive over Vector Addition</h4>
                <BlockMath math="k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Distributive over Scalar Addition</h4>
                <BlockMath math="(k + l)\vec{a} = k\vec{a} + l\vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Identity Element</h4>
                <BlockMath math="1 \cdot \vec{a} = \vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Zero Property</h4>
                <BlockMath math="0 \cdot \vec{a} = \vec{0}" />
                <BlockMath math="k \cdot \vec{0} = \vec{0}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Dot Product (Scalar Product)</h2>
        <p className="mb-4">
          The dot product produces a scalar from two vectors.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3" />
            <BlockMath math="\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Commutative</h4>
                <BlockMath math="\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Distributive</h4>
                <BlockMath math="\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Scalar Multiplication</h4>
                <BlockMath math="k(\vec{a} \cdot \vec{b}) = (k\vec{a}) \cdot \vec{b} = \vec{a} \cdot (k\vec{b})" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Cross Product (Vector Product)</h2>
        <p className="mb-4">
          The cross product produces a vector perpendicular to both input vectors (3D only).
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="\vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Anti-commutative</h4>
                <BlockMath math="\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})" />
              </div>
              
              <div>
                <h4 className="font-semibold">Distributive</h4>
                <BlockMath math="\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Zero Property</h4>
                <BlockMath math="\vec{a} \times \vec{a} = \vec{0}" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Vector Magnitude</h2>
        <p className="mb-4">
          The magnitude (or length) of a vector is its distance from the origin.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Formula</h3>
            <BlockMath math="|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Non-negative</h4>
                <BlockMath math="|\vec{a}| \geq 0" />
              </div>
              
              <div>
                <h4 className="font-semibold">Zero Vector</h4>
                <BlockMath math="|\vec{a}| = 0 \iff \vec{a} = \vec{0}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Scalar Multiplication</h4>
                <BlockMath math="|k\vec{a}| = |k||\vec{a}|" />
              </div>
              
              <div>
                <h4 className="font-semibold">Triangle Inequality</h4>
                <BlockMath math="|\vec{a} + \vec{b}| \leq |\vec{a}| + |\vec{b}|" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Vector Operations</h3>
          <p className="mb-2">Given <InlineMath math="\vec{a} = (2, 3, 1)" /> and <InlineMath math="\vec{b} = (1, -2, 4)" />:</p>
          
          <p className="mb-2">Addition:</p>
          <BlockMath math="\vec{a} + \vec{b} = (2+1, 3+(-2), 1+4) = (3, 1, 5)" />
          
          <p className="mb-2">Subtraction:</p>
          <BlockMath math="\vec{a} - \vec{b} = (2-1, 3-(-2), 1-4) = (1, 5, -3)" />
          
          <p className="mb-2">Scalar multiplication (k = 3):</p>
          <BlockMath math="3\vec{a} = (3 \cdot 2, 3 \cdot 3, 3 \cdot 1) = (6, 9, 3)" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Dot Product</h3>
          <p className="mb-2">For the same vectors:</p>
          <BlockMath math="\vec{a} \cdot \vec{b} = (2)(1) + (3)(-2) + (1)(4) = 2 - 6 + 4 = 0" />
          <p className="mb-2">Since the dot product is 0, the vectors are orthogonal.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 3: Magnitude</h3>
          <p className="mb-2">Magnitude of <InlineMath math="\vec{a} = (2, 3, 1)" />:</p>
          <BlockMath math="|\vec{a}| = \sqrt{2^2 + 3^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}" />
        </div>
      </div>
    </div>
  );
}
