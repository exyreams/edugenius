"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function CosineRuleForAngles() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate-Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Trigonometry", href: "/mathematics/concepts/intermediate-advanced/trigonometry" },
    {
      label: "Spherical Trigonometry",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/spherical-trigonometry",
    },
    {
      label: "Cosine Rule For Angles",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/spherical-trigonometry/cosine-rule-for-angles",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Spherical Cosine Rule for Angles</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Spherical Cosine Rule for Angles is the dual of the cosine rule for sides. 
          It relates the three angles of a spherical triangle to one of its sides. This rule 
          demonstrates the beautiful symmetry in spherical trigonometry.
        </p>
        <p className="mb-4">
          This law is particularly useful when we know all three angles and need to find a side, 
          or when we know two angles and the included side and need to find the third angle.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">The Spherical Cosine Rule for Angles</h2>
        <p className="mb-4">
          For a spherical triangle with sides a, b, c and opposite angles A, B, C respectively:
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">General Form:</h3>
          <BlockMath math="\\cos A = -\\cos B \\cos C + \\sin B \\sin C \\cos a" />
          <BlockMath math="\\cos B = -\\cos A \\cos C + \\sin A \\sin C \\cos b" />
          <BlockMath math="\\cos C = -\\cos A \\cos B + \\sin A \\sin B \\cos c" />
        </div>
        
        <p className="mb-4">
          Notice the negative sign in front of the first term - this is what distinguishes 
          the angle form from the side form of the cosine rule.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Cosine Rule for Sides</h2>
        <p className="mb-4">
          The cosine rule for angles is the polar (or dual) form of the cosine rule for sides. 
          This duality is a fundamental property of spherical trigonometry.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Rule for Sides</h3>
            <BlockMath math="\\cos c = \\cos a \\cos b + \\sin a \\sin b \\cos C" />
            <p className="text-sm mt-2">Used when sides are the primary unknowns</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Rule for Angles</h3>
            <BlockMath math="\\cos C = -\\cos A \\cos B + \\sin A \\sin B \\cos c" />
            <p className="text-sm mt-2">Used when angles are the primary unknowns</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Type 1: Finding an Angle (ASA Case)</h3>
            <p className="mb-2">
              <strong>Given:</strong> Two angles and the included side
            </p>
            <p className="mb-2">
              <strong>Find:</strong> The third angle
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="mb-2">Example: Given angles A, B and side c, find angle C:</p>
              <BlockMath math="C = \\arccos(-\\cos A \\cos B + \\sin A \\sin B \\cos c)" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Type 2: Finding a Side (AAA Case)</h3>
            <p className="mb-2">
              <strong>Given:</strong> All three angles
            </p>
            <p className="mb-2">
              <strong>Find:</strong> Any side
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="mb-2">Example: Given angles A, B, C, find side c:</p>
              <BlockMath math="c = \\arccos\\left(\\frac{\\cos C + \\cos A \\cos B}{\\sin A \\sin B}\\right)" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Cases</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Right Spherical Triangles</h3>
            <p className="mb-2">When side c = 90°, cos c = 0, so:</p>
            <BlockMath math="\\cos C = -\\cos A \\cos B" />
            <p className="text-sm">This shows that in a right spherical triangle, the angles are related in a specific way.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Spherical Excess</h3>
            <p className="mb-2">
              The cosine rule for angles helps in calculating the spherical excess E = A + B + C - π:
            </p>
            <BlockMath math="E = A + B + C - \\pi" />
            <p className="text-sm">The area of the spherical triangle is proportional to this excess.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Finding an Angle (ASA)</h3>
            <p className="mb-2">
              In a spherical triangle, angles A = 80° and B = 70°, with included side c = 60°. 
              Find angle C.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the spherical cosine rule for angles:</p>
              <BlockMath math="\\cos C = -\\cos A \\cos B + \\sin A \\sin B \\cos c" />
              
              <p>Substituting the values:</p>
              <BlockMath math="\\cos C = -\\cos(80°) \\cos(70°) + \\sin(80°) \\sin(70°) \\cos(60°)" />
              <BlockMath math="\\cos C = -(0.1736)(0.3420) + (0.9848)(0.9397)(0.5000)" />
              <BlockMath math="\\cos C = -0.0594 + 0.4628 = 0.4034" />
              
              <p>Therefore:</p>
              <BlockMath math="C = \\arccos(0.4034) = 66.2°" />
              
              <p><strong>Answer:</strong> Angle C ≈ 66.2°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Finding a Side (AAA)</h3>
            <p className="mb-2">
              In a spherical triangle with angles A = 100°, B = 110°, and C = 80°, find side c.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Rearranging the cosine rule for angles to solve for side c:</p>
              <BlockMath math="\\cos c = \\frac{\\cos C + \\cos A \\cos B}{\\sin A \\sin B}" />
              
              <p>Substituting the values:</p>
              <BlockMath math="\\cos c = \\frac{\\cos(80°) + \\cos(100°) \\cos(110°)}{\\sin(100°) \\sin(110°)}" />
              <BlockMath math="\\cos c = \\frac{0.1736 + (-0.1736)(-0.3420)}{(0.9848)(0.9397)}" />
              <BlockMath math="\\cos c = \\frac{0.1736 + 0.0594}{0.9254} = \\frac{0.2330}{0.9254} = 0.2518" />
              
              <p>Therefore:</p>
              <BlockMath math="c = \\arccos(0.2518) = 75.4°" />
              
              <p><strong>Answer:</strong> Side c ≈ 75.4°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Spherical Excess Calculation</h3>
            <p className="mb-2">
              For a spherical triangle with angles A = 95°, B = 105°, and C = 85°, 
              calculate the spherical excess and verify using the cosine rule.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, calculate the spherical excess directly:</p>
              <BlockMath math="E = A + B + C - 180° = 95° + 105° + 85° - 180° = 105°" />
              
              <p>Now find the sides using the cosine rule for angles:</p>
              
              <p>For side a:</p>
              <BlockMath math="\\cos a = \\frac{\\cos A + \\cos B \\cos C}{\\sin B \\sin C}" />
              <BlockMath math="\\cos a = \\frac{\\cos(95°) + \\cos(105°) \\cos(85°)}{\\sin(105°) \\sin(85°)}" />
              <BlockMath math="\\cos a = \\frac{-0.0872 + (-0.2588)(0.0872)}{(0.9659)(0.9962)}" />
              <BlockMath math="\\cos a = \\frac{-0.0872 - 0.0226}{0.9623} = -0.1141" />
              <BlockMath math="a = \\arccos(-0.1141) = 96.6°" />
              
              <p>The large angles and sides confirm this is a triangle with significant spherical excess.</p>
              
              <p><strong>Answer:</strong> Spherical excess = 105°, side a ≈ 96.6°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}