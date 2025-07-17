"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function CosineRuleForSides() {
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
      label: "Cosine Rule For Sides",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/spherical-trigonometry/cosine-rule-for-sides",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Spherical Cosine Rule for Sides</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Spherical Cosine Rule for Sides is one of the fundamental laws in spherical 
          trigonometry. It relates the three sides of a spherical triangle to one of its angles, 
          providing a method to solve spherical triangles when certain combinations of sides 
          and angles are known.
        </p>
        <p className="mb-4">
          This rule is the spherical analog of the ordinary cosine rule in plane trigonometry, 
          but adapted for triangles drawn on the surface of a sphere. It's essential for 
          navigation, astronomy, and geodesy applications.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">The Spherical Cosine Rule</h2>
        <p className="mb-4">
          For a spherical triangle with sides a, b, c (measured as angles from the center 
          of the sphere) and opposite angles A, B, C respectively:
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Cosine Rule for Sides:</h3>
          <BlockMath math="\\cos a = \\cos b \\cos c + \\sin b \\sin c \\cos A" />
          <BlockMath math="\\cos b = \\cos a \\cos c + \\sin a \\sin c \\cos B" />
          <BlockMath math="\\cos c = \\cos a \\cos b + \\sin a \\sin b \\cos C" />
        </div>
        
        <p className="mb-4">
          These formulas allow us to find any side when we know the other two sides and 
          the included angle, or to find an angle when we know all three sides.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation</h2>
        <p className="mb-4">
          The spherical cosine rule can be derived using vector methods or by applying 
          the law of cosines to the plane triangle formed by the center of the sphere 
          and two points on the sphere.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Vector Derivation</h3>
            <p className="mb-2">
              Consider three unit vectors from the center of the sphere to the vertices 
              of the spherical triangle. Using the dot product:
            </p>
            <BlockMath math="\\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}|\\cos c = \\cos c" />
            <p className="mb-2">
              By expressing the vectors in terms of spherical coordinates and applying 
              vector algebra, we arrive at the spherical cosine rule.
            </p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications and Problem Types</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 1: Finding a Side (SAS)</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="mb-2"><strong>Given:</strong> Two sides and the included angle</p>
              <p className="mb-2"><strong>Find:</strong> The third side</p>
              <p className="mb-2"><strong>Formula:</strong> Use the appropriate cosine rule directly</p>
              <p className="text-sm">Example: Given b, c, and A, find a using cos a = cos b cos c + sin b sin c cos A</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 2: Finding an Angle (SSS)</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <p className="mb-2"><strong>Given:</strong> All three sides</p>
              <p className="mb-2"><strong>Find:</strong> Any angle</p>
              <p className="mb-2"><strong>Method:</strong> Rearrange the cosine rule to solve for the angle</p>
              <BlockMath math="\\cos A = \\frac{\\cos a - \\cos b \\cos c}{\\sin b \\sin c}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 3: Checking Triangle Validity</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="mb-2">
                The spherical cosine rule can be used to verify if three given sides 
                can form a valid spherical triangle.
              </p>
              <p className="text-sm">
                For a valid spherical triangle, each calculated angle must be between 0° and 180°.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship to Plane Trigonometry</h2>
        <p className="mb-4">
          When the sides of a spherical triangle are very small compared to the radius 
          of the sphere, the spherical cosine rule approaches the plane cosine rule.
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Limiting Case:</h3>
          <p className="mb-2">For small angles (in radians), cos θ ≈ 1 - θ²/2 and sin θ ≈ θ</p>
          <p className="mb-2">The spherical cosine rule:</p>
          <BlockMath math="\\cos a = \\cos b \\cos c + \\sin b \\sin c \\cos A" />
          <p className="mb-2">Becomes approximately:</p>
          <BlockMath math="1 - \\frac{a^2}{2} \\approx \\left(1 - \\frac{b^2}{2}\\right)\\left(1 - \\frac{c^2}{2}\\right) + bc\\cos A" />
          <p className="mb-2">Which simplifies to the plane cosine rule:</p>
          <BlockMath math="a^2 \\approx b^2 + c^2 - 2bc\\cos A" />
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Special Cases and Properties</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Right Spherical Triangles</h3>
            <p className="mb-2">When C = 90°, cos C = 0, so the formula becomes:</p>
            <BlockMath math="\\cos c = \\cos a \\cos b" />
            <p className="text-sm">This is one of Napier's rules for right spherical triangles.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Isosceles Spherical Triangles</h3>
            <p className="mb-2">When a = b, the triangle is isosceles and A = B.</p>
            <p className="text-sm">This symmetry can simplify calculations significantly.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Equilateral Spherical Triangles</h3>
            <p className="mb-2">When a = b = c, all angles are equal: A = B = C.</p>
            <p className="text-sm">The relationship becomes: cos a = cos²a + sin²a cos A</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Finding a Side (SAS Case)</h3>
            <p className="mb-2">
              Find side a when b = 40°, c = 50°, and A = 60°.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the cosine rule: cos a = cos b cos c + sin b sin c cos A</p>
              
              <p>Substitute the values:</p>
              <BlockMath math="\\cos a = \\cos(40°) \\cos(50°) + \\sin(40°) \\sin(50°) \\cos(60°)" />
              
              <p>Calculate each term:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>cos(40°) = 0.7660</li>
                <li>cos(50°) = 0.6428</li>
                <li>sin(40°) = 0.6428</li>
                <li>sin(50°) = 0.7660</li>
                <li>cos(60°) = 0.5000</li>
              </ul>
              
              <BlockMath math="\\cos a = 0.7660 \\times 0.6428 + 0.6428 \\times 0.7660 \\times 0.5000" />
              <BlockMath math="\\cos a = 0.4924 + 0.2464 = 0.7388" />
              <BlockMath math="a = \\arccos(0.7388) = 42.4°" />
              
              <p><strong>Answer:</strong> a = 42.4°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Finding an Angle (SSS Case)</h3>
            <p className="mb-2">
              Find angle A when a = 60°, b = 80°, and c = 70°.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Rearrange the cosine rule to solve for A:</p>
              <BlockMath math="\\cos A = \\frac{\\cos a - \\cos b \\cos c}{\\sin b \\sin c}" />
              
              <p>Calculate the components:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>cos(60°) = 0.5000</li>
                <li>cos(80°) = 0.1736</li>
                <li>cos(70°) = 0.3420</li>
                <li>sin(80°) = 0.9848</li>
                <li>sin(70°) = 0.9397</li>
              </ul>
              
              <p>Substitute:</p>
              <BlockMath math="\\cos A = \\frac{0.5000 - 0.1736 \\times 0.3420}{0.9848 \\times 0.9397}" />
              <BlockMath math="\\cos A = \\frac{0.5000 - 0.0594}{0.9254} = \\frac{0.4406}{0.9254} = 0.4762" />
              <BlockMath math="A = \\arccos(0.4762) = 61.6°" />
              
              <p><strong>Answer:</strong> A = 61.6°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Navigation Problem</h3>
            <p className="mb-2">
              A ship sails from point A to point B, then to point C. The great circle 
              distances are AB = 1200 nautical miles and BC = 800 nautical miles. 
              The angle at B is 110°. Find the distance AC.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Convert distances to angular measure (1° ≈ 60 nautical miles):</p>
              <ul className="list-disc list-inside ml-4">
                <li>AB = 1200/60 = 20°</li>
                <li>BC = 800/60 = 13.33°</li>
                <li>Angle at B = 110°</li>
              </ul>
              
              <p>Using the cosine rule to find AC:</p>
              <BlockMath math="\\cos(AC) = \\cos(20°) \\cos(13.33°) + \\sin(20°) \\sin(13.33°) \\cos(110°)" />
              
              <p>Calculate:</p>
              <BlockMath math="\\cos(AC) = 0.9397 \\times 0.9724 + 0.3420 \\times 0.2306 \\times (-0.3420)" />
              <BlockMath math="\\cos(AC) = 0.9135 - 0.0270 = 0.8865" />
              <BlockMath math="AC = \\arccos(0.8865) = 27.6°" />
              
              <p>Convert back to nautical miles:</p>
              <p>AC = 27.6° × 60 = 1656 nautical miles</p>
              
              <p><strong>Answer:</strong> The distance AC is approximately 1656 nautical miles.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Right Spherical Triangle</h3>
            <p className="mb-2">
              In a right spherical triangle with C = 90°, if a = 30° and b = 40°, find c.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>For a right spherical triangle (C = 90°), the cosine rule simplifies to:</p>
              <BlockMath math="\\cos c = \\cos a \\cos b" />
              
              <p>Substitute the values:</p>
              <BlockMath math="\\cos c = \\cos(30°) \\cos(40°) = 0.8660 \\times 0.7660 = 0.6634" />
              <BlockMath math="c = \\arccos(0.6634) = 48.4°" />
              
              <p><strong>Answer:</strong> c = 48.4°</p>
              
              <p><strong>Verification:</strong> We can check this using the Pythagorean theorem for spherical triangles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}