"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function MidpointBetweenTwoPointInSpace() {
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
      label: "Midpoint Between Two Points in Space",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/midpoint-between-two-points-in-space",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Midpoint Between Two Points in Space</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          The midpoint between two points in space is the point that lies exactly halfway between them. It is the average of the coordinates of the two points.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Formulas</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">2D Space (Plane)</h3>
            <p className="mb-2">For points <InlineMath math="A(x_1, y_1)" /> and <InlineMath math="B(x_2, y_2)" />:</p>
            <BlockMath math="M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3D Space</h3>
            <p className="mb-2">For points <InlineMath math="A(x_1, y_1, z_1)" /> and <InlineMath math="B(x_2, y_2, z_2)" />:</p>
            <BlockMath math="M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}\right)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">n-Dimensional Space</h3>
            <p className="mb-2">For points <InlineMath math="A(a_1, a_2, \ldots, a_n)" /> and <InlineMath math="B(b_1, b_2, \ldots, b_n)" />:</p>
            <BlockMath math="M = \left(\frac{a_1 + b_1}{2}, \frac{a_2 + b_2}{2}, \ldots, \frac{a_n + b_n}{2}\right)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Vector Form</h2>
        <p className="mb-4">Using position vectors, if <InlineMath math="\vec{a}" /> and <InlineMath math="\vec{b}" /> are position vectors of points A and B:</p>
        
        <BlockMath math="\vec{m} = \frac{\vec{a} + \vec{b}}{2}" />
        
        <p className="mb-4">This can also be written as:</p>
        <BlockMath math="\vec{m} = \vec{a} + \frac{1}{2}(\vec{b} - \vec{a})" />
        <BlockMath math="\vec{m} = \vec{b} + \frac{1}{2}(\vec{a} - \vec{b})" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Symmetry</h3>
            <p>The midpoint is equidistant from both original points</p>
            <BlockMath math="|AM| = |BM| = \frac{1}{2}|AB|" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Collinearity</h3>
            <p>The midpoint lies on the line segment connecting the two points</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Uniqueness</h3>
            <p>There is exactly one midpoint for any two distinct points</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Parametric Form</h3>
            <p>The midpoint corresponds to parameter <InlineMath math="t = \frac{1}{2}" /> in the parametric equation:</p>
            <BlockMath math="P(t) = (1-t)A + tB" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Computer graphics: Finding center points for shapes and objects</li>
          <li>Navigation: Calculating waypoints between locations</li>
          <li>Engineering: Determining center of mass for uniform objects</li>
          <li>Game development: Positioning objects between two points</li>
          <li>Data analysis: Finding central tendencies in multi-dimensional data</li>
          <li>Geometry: Constructing perpendicular bisectors</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: 2D Midpoint</h3>
          <p className="mb-2">Find the midpoint between <InlineMath math="A(2, 5)" /> and <InlineMath math="B(8, 1)" />:</p>
          
          <BlockMath math="M = \left(\frac{2 + 8}{2}, \frac{5 + 1}{2}\right) = \left(\frac{10}{2}, \frac{6}{2}\right) = (5, 3)" />
          
          <p className="mb-2">Verification:</p>
          <BlockMath math="|AM| = \sqrt{(5-2)^2 + (3-5)^2} = \sqrt{9 + 4} = \sqrt{13}" />
          <BlockMath math="|BM| = \sqrt{(5-8)^2 + (3-1)^2} = \sqrt{9 + 4} = \sqrt{13}" />
          <p>Since <InlineMath math="|AM| = |BM|" />, M is indeed the midpoint.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: 3D Midpoint</h3>
          <p className="mb-2">Find the midpoint between <InlineMath math="P(1, 3, 5)" /> and <InlineMath math="Q(7, -1, 3)" />:</p>
          
          <BlockMath math="M = \left(\frac{1 + 7}{2}, \frac{3 + (-1)}{2}, \frac{5 + 3}{2}\right)" />
          <BlockMath math="M = \left(\frac{8}{2}, \frac{2}{2}, \frac{8}{2}\right) = (4, 1, 4)" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Vector Form</h3>
          <p className="mb-2">Using vectors <InlineMath math="\vec{a} = (2, -3, 1)" /> and <InlineMath math="\vec{b} = (6, 1, 5)" />:</p>
          
          <BlockMath math="\vec{m} = \frac{\vec{a} + \vec{b}}{2} = \frac{(2, -3, 1) + (6, 1, 5)}{2}" />
          <BlockMath math="\vec{m} = \frac{(8, -2, 6)}{2} = (4, -1, 3)" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Multiple Midpoints</h3>
          <p className="mb-2">For triangle with vertices <InlineMath math="A(0, 0)" />, <InlineMath math="B(6, 0)" />, and <InlineMath math="C(3, 6)" />:</p>
          
          <p className="mb-2">Midpoint of AB:</p>
          <BlockMath math="M_{AB} = \left(\frac{0 + 6}{2}, \frac{0 + 0}{2}\right) = (3, 0)" />
          
          <p className="mb-2">Midpoint of BC:</p>
          <BlockMath math="M_{BC} = \left(\frac{6 + 3}{2}, \frac{0 + 6}{2}\right) = (4.5, 3)" />
          
          <p className="mb-2">Midpoint of AC:</p>
          <BlockMath math="M_{AC} = \left(\frac{0 + 3}{2}, \frac{0 + 6}{2}\right) = (1.5, 3)" />
          
          <p>These midpoints can be used to find the centroid of the triangle.</p>
        </div>
      </div>
    </div>
  );
}
