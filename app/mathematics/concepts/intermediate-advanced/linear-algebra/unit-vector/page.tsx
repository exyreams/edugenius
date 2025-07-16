"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function UnitVector() {
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
      label: "Unit Vector",
      href: "/mathematics/concepts/intermediate-advanced/linear-algebra/unit-vector",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Unit Vector</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          A unit vector is a vector with magnitude (length) equal to 1. Unit vectors are used to indicate direction without regard to magnitude.
        </p>
        
        <p className="mb-4">For any vector <InlineMath math="\vec{v}" />, its magnitude is:</p>
        <BlockMath math="|\vec{v}| = 1" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Creating Unit Vectors</h2>
        <p className="mb-4">To create a unit vector from any non-zero vector <InlineMath math="\vec{v}" />, divide by its magnitude:</p>
        
        <BlockMath math="\hat{v} = \frac{\vec{v}}{|\vec{v}|}" />
        
        <p className="mb-4">where <InlineMath math="\hat{v}" /> denotes the unit vector in the direction of <InlineMath math="\vec{v}" />.</p>
        
        <p className="mb-4">The magnitude of vector <InlineMath math="\vec{v} = (v_1, v_2, v_3)" /> is:</p>
        <BlockMath math="|\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Standard Unit Vectors</h2>
        <p className="mb-4">In 3D Cartesian coordinates, the standard unit vectors are:</p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">i-direction (x-axis)</h3>
            <BlockMath math="\hat{i} = (1, 0, 0)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">j-direction (y-axis)</h3>
            <BlockMath math="\hat{j} = (0, 1, 0)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">k-direction (z-axis)</h3>
            <BlockMath math="\hat{k} = (0, 0, 1)" />
          </div>
        </div>
        
        <p className="mb-4">Any vector can be expressed as:</p>
        <BlockMath math="\vec{v} = v_x\hat{i} + v_y\hat{j} + v_z\hat{k}" />
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Magnitude</h3>
            <BlockMath math="|\hat{u}| = 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Direction Preservation</h3>
            <p>Unit vectors preserve the direction of the original vector</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Dot Product with Self</h3>
            <BlockMath math="\hat{u} \cdot \hat{u} = 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Orthogonal Unit Vectors</h3>
            <p>If <InlineMath math="\hat{u}" /> and <InlineMath math="\hat{v}" /> are orthogonal unit vectors:</p>
            <BlockMath math="\hat{u} \cdot \hat{v} = 0" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Defining coordinate systems and basis vectors</li>
          <li>Representing directions in physics (force, velocity, etc.)</li>
          <li>Normal vectors to surfaces</li>
          <li>Computer graphics and 3D modeling</li>
          <li>Navigation and orientation systems</li>
        </ul>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Creating a Unit Vector</h3>
          <p className="mb-2">Given vector <InlineMath math="\vec{v} = (3, 4, 0)" />:</p>
          
          <p className="mb-2">First, find the magnitude:</p>
          <BlockMath math="|\vec{v}| = \sqrt{3^2 + 4^2 + 0^2} = \sqrt{9 + 16} = 5" />
          
          <p className="mb-2">Then, create the unit vector:</p>
          <BlockMath math="\hat{v} = \frac{(3, 4, 0)}{5} = \left(\frac{3}{5}, \frac{4}{5}, 0\right)" />
          
          <p className="mb-2">Verification:</p>
          <BlockMath math="|\hat{v}| = \sqrt{\left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2 + 0^2} = \sqrt{\frac{9}{25} + \frac{16}{25}} = \sqrt{\frac{25}{25}} = 1" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Unit Vector in 3D</h3>
          <p className="mb-2">Given vector <InlineMath math="\vec{a} = (2, -1, 2)" />:</p>
          
          <p className="mb-2">Magnitude:</p>
          <BlockMath math="|\vec{a}| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = 3" />
          
          <p className="mb-2">Unit vector:</p>
          <BlockMath math="\hat{a} = \frac{(2, -1, 2)}{3} = \left(\frac{2}{3}, -\frac{1}{3}, \frac{2}{3}\right)" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 3: Standard Unit Vectors</h3>
          <p className="mb-2">Express vector <InlineMath math="\vec{b} = (5, -3, 7)" /> in terms of standard unit vectors:</p>
          <BlockMath math="\vec{b} = 5\hat{i} - 3\hat{j} + 7\hat{k}" />
        </div>
      </div>
    </div>
  );
}
