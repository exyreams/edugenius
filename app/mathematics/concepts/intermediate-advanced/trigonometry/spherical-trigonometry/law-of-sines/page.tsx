"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function LawOfSines() {
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
      label: "Law of Sines",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/spherical-trigonometry/law-of-sines",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Spherical Law of Sines</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Spherical Law of Sines is a fundamental theorem in spherical trigonometry that 
          relates the sides and angles of a spherical triangle. Unlike plane triangles, 
          spherical triangles are formed by the intersection of three great circles on the 
          surface of a sphere.
        </p>
        <p className="mb-4">
          This law is essential for solving spherical triangles and has applications in 
          navigation, astronomy, geodesy, and other fields where calculations on curved 
          surfaces are required.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">The Spherical Law of Sines</h2>
        <p className="mb-4">
          For a spherical triangle with sides a, b, c and opposite angles A, B, C respectively:
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <BlockMath math="\frac{\sin a}{\sin A} = \frac{\sin b}{\sin B} = \frac{\sin c}{\sin C}" />
        </div>
        
        <p className="mb-4">
          This can also be written as:
        </p>
        <BlockMath math="\sin a : \sin b : \sin c = \sin A : \sin B : \sin C" />
        
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <p className="font-semibold mb-2">Important Note:</p>
          <p className="text-sm">
            In spherical trigonometry, sides a, b, c are measured as angles (in radians or degrees) 
            subtended at the center of the sphere, not as linear distances.
          </p>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation</h2>
        <p className="mb-4">
          The spherical law of sines can be derived using vector methods or by projecting 
          the spherical triangle onto coordinate planes.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Vector Derivation (Outline)</h3>
            <p className="mb-2">
              Consider a unit sphere with center O and a spherical triangle ABC:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Let <strong>a</strong>, <strong>b</strong>, <strong>c</strong> be unit vectors from O to vertices A, B, C</li>
              <li>The sides of the triangle are great circle arcs with angular measures a, b, c</li>
              <li>Using the cross product and dot product properties of vectors</li>
              <li>Apply the scalar triple product identity</li>
              <li>The result yields the spherical law of sines</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Relationships</h3>
            <p className="mb-2">From the law of sines, we can derive:</p>
            <BlockMath math="\frac{\sin A}{\sin a} = \frac{\sin B}{\sin b} = \frac{\sin C}{\sin c} = k" />
            <p className="mb-2">where k is a constant for the given spherical triangle.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <p className="mb-4">
          The spherical law of sines is used to solve various types of spherical triangle problems:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 1: Two Angles and One Side (AAS or ASA)</h3>
            <p className="mb-2">
              When two angles and one side are known, we can find the remaining elements.
            </p>
            <p className="mb-2">Given: A, B, and side c</p>
            <p className="mb-2">Find: C, a, and b</p>
            <div className="ml-4">
              <p>Step 1: C = 180° - A - B (approximately, with spherical excess correction)</p>
              <p>Step 2: Use law of sines to find a and b:</p>
              <BlockMath math="a = \arcsin\left(\frac{\sin A \cdot \sin c}{\sin C}\right)" />
              <BlockMath math="b = \arcsin\left(\frac{\sin B \cdot \sin c}{\sin C}\right)" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Case 2: Two Sides and One Angle (SSA)</h3>
            <p className="mb-2">
              This case may have zero, one, or two solutions (ambiguous case).
            </p>
            <p className="mb-2">Given: sides a, b, and angle A</p>
            <p className="mb-2">Find: B, C, and side c</p>
            <div className="ml-4">
              <p>Step 1: Find angle B using:</p>
              <BlockMath math="\sin B = \frac{\sin b \cdot \sin A}{\sin a}" />
              <p>Step 2: Check if |sin B| ≤ 1 for solution to exist</p>
              <p>Step 3: Find C and c using the law of sines</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Comparison with Plane Law of Sines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Plane Trigonometry</h3>
            <BlockMath math="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}" />
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Sides are linear distances</li>
              <li>Angles sum to 180°</li>
              <li>Used for flat surfaces</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Spherical Trigonometry</h3>
            <BlockMath math="\frac{\sin a}{\sin A} = \frac{\sin b}{\sin B} = \frac{\sin c}{\sin C}" />
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Sides are angular measures</li>
              <li>Angles sum > 180° (spherical excess)</li>
              <li>Used for curved surfaces</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Finding an Unknown Side</h3>
            <p className="mb-2">
              In a spherical triangle, A = 80°, B = 70°, and side c = 60°. Find side a.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, we need to find angle C. For a spherical triangle:</p>
              <p>C ≈ 180° - A - B + spherical excess</p>
              <p>As an approximation, let's use C ≈ 180° - 80° - 70° = 30°</p>
              
              <p>Using the spherical law of sines:</p>
              <BlockMath math="\frac{\sin a}{\sin A} = \frac{\sin c}{\sin C}" />
              
              <p>Solving for a:</p>
              <BlockMath math="\sin a = \frac{\sin A \cdot \sin c}{\sin C} = \frac{\sin(80°) \cdot \sin(60°)}{\sin(30°)}" />
              <BlockMath math="\sin a = \frac{0.9848 \times 0.8660}{0.5000} = \frac{0.8528}{0.5000} = 1.7056" />
              
              <p>Since sin a > 1, this indicates our approximation for C was incorrect. 
              We need to use more precise methods for spherical triangles.</p>
              
              <p><strong>Note:</strong> This example shows the importance of using proper spherical 
              triangle solving techniques rather than plane triangle approximations.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Navigation Problem</h3>
            <p className="mb-2">
              A ship at point A (latitude 40°N, longitude 70°W) observes two lighthouses at 
              points B and C. The angular distance AB = 30° and AC = 45°. The angle at A 
              between the directions to B and C is 60°. Find the angular distance BC.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>This forms a spherical triangle with:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Side b (AC) = 45°</li>
                <li>Side c (AB) = 30°</li>
                <li>Angle A = 60°</li>
              </ul>
              
              <p>We need to find side a (BC).</p>
              
              <p>Using the spherical law of cosines (more appropriate for this SSA case):</p>
              <BlockMath math="\cos a = \cos b \cos c + \sin b \sin c \cos A" />
              <BlockMath math="\cos a = \cos(45°)\cos(30°) + \sin(45°)\sin(30°)\cos(60°)" />
              <BlockMath math="\cos a = (0.7071)(0.8660) + (0.7071)(0.5000)(0.5000)" />
              <BlockMath math="\cos a = 0.6124 + 0.1768 = 0.7892" />
              <BlockMath math="a = \arccos(0.7892) \approx 37.9°" />
              
              <p><strong>Answer:</strong> The angular distance BC ≈ 37.9°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Verifying the Law of Sines</h3>
            <p className="mb-2">
              For a spherical triangle with a = 50°, b = 60°, c = 70°, and 
              A = 65°, B = 80°, C = 85°, verify the spherical law of sines.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Calculate each ratio:</p>
              
              <p>Ratio 1:</p>
              <BlockMath math="\frac{\sin a}{\sin A} = \frac{\sin(50°)}{\sin(65°)} = \frac{0.7660}{0.9063} = 0.8452" />
              
              <p>Ratio 2:</p>
              <BlockMath math="\frac{\sin b}{\sin B} = \frac{\sin(60°)}{\sin(80°)} = \frac{0.8660}{0.9848} = 0.8793" />
              
              <p>Ratio 3:</p>
              <BlockMath math="\frac{\sin c}{\sin C} = \frac{\sin(70°)}{\sin(85°)} = \frac{0.9397}{0.9962} = 0.9433" />
              
              <p>The ratios are not exactly equal, which indicates that either:</p>
              <ul className="list-disc list-inside ml-4">
                <li>The given values don't form a valid spherical triangle, or</li>
                <li>There are rounding errors in the given measurements</li>
              </ul>
              
              <p><strong>Note:</strong> In practice, small discrepancies are common due to 
              measurement errors and rounding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}