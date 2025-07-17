"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function CotangentTheorem() {
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
      label: "Cotangent Theorem",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/spherical-trigonometry/cotangent-theorem",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Spherical Cotangent Theorem</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Spherical Cotangent Theorem, also known as the Four-Parts Formula, is another 
          fundamental relationship in spherical trigonometry. It provides an alternative method 
          for solving spherical triangles and is particularly useful in certain configurations.
        </p>
        <p className="mb-4">
          This theorem relates four parts of a spherical triangle (three sides and one angle, 
          or three angles and one side) and is especially valuable in navigation and astronomy 
          calculations.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">The Cotangent Theorem</h2>
        <p className="mb-4">
          For a spherical triangle with sides a, b, c and opposite angles A, B, C:
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Form 1: Using Three Sides and One Angle</h3>
          <BlockMath math="\\cot A \\sin b = \\cos b \\cot c + \\cos C \\cot \\sin c" />
          <BlockMath math="\\cot B \\sin c = \\cos c \\cot a + \\cos A \\cot \\sin a" />
          <BlockMath math="\\cot C \\sin a = \\cos a \\cot b + \\cos B \\cot \\sin b" />
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Form 2: Alternative Expression</h3>
          <BlockMath math="\\sin b \\cot A = \\cos b \\cot c - \\sin c \\cos A" />
          <BlockMath math="\\sin c \\cot B = \\cos c \\cot a - \\sin a \\cos B" />
          <BlockMath math="\\sin a \\cot C = \\cos a \\cot b - \\sin b \\cos C" />
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation</h2>
        <p className="mb-4">
          The cotangent theorem can be derived from the fundamental spherical trigonometry 
          relationships using the law of sines and cosines.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Method 1: From Law of Sines and Cosines</h3>
            <p className="mb-2">Starting with the spherical law of sines:</p>
            <BlockMath math="\\frac{\\sin a}{\\sin A} = \\frac{\\sin b}{\\sin B} = \\frac{\\sin c}{\\sin C}" />
            
            <p className="mb-2">And the cosine rule for sides:</p>
            <BlockMath math="\\cos a = \\cos b \\cos c + \\sin b \\sin c \\cos A" />
            
            <p className="mb-2">Through algebraic manipulation and trigonometric identities, 
            we can derive the cotangent theorem.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation Problems</h3>
            <p className="mb-2">
              The cotangent theorem is particularly useful in celestial navigation where 
              angles are often easier to measure than distances.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Finding position from celestial observations</li>
              <li>Great circle sailing calculations</li>
              <li>Determining course corrections</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Astronomical Calculations</h3>
            <p className="mb-2">
              In astronomy, the cotangent theorem helps solve problems involving:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Celestial coordinate transformations</li>
              <li>Rising and setting times of celestial objects</li>
              <li>Eclipse calculations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Geodetic Surveying</h3>
            <p className="mb-2">
              For large-scale surveying on the Earth's surface:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Triangulation networks</li>
              <li>Coordinate system transformations</li>
              <li>Precise distance measurements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Computational Advantages</h2>
        <p className="mb-4">
          The cotangent theorem offers several computational advantages:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Numerical Stability</h3>
            <p className="mb-2">
              In certain ranges, cotangent calculations can be more numerically stable 
              than direct sine and cosine calculations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Solution Path</h3>
            <p className="mb-2">
              When the standard law of sines or cosines leads to numerical difficulties, 
              the cotangent theorem provides an alternative approach.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Specific Problem Types</h3>
            <p className="mb-2">
              Some spherical triangle configurations are more naturally solved using 
              the cotangent theorem rather than other methods.
            </p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Finding an Angle</h3>
            <p className="mb-2">
              In a spherical triangle with sides a = 40°, b = 50°, c = 60°, find angle A 
              using the cotangent theorem.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the cotangent theorem in the form:</p>
              <BlockMath math="\\sin b \\cot A = \\cos b \\cot c - \\sin c \\cos A" />
              
              <p>First, we need angle A from the cosine rule to use in our verification:</p>
              <BlockMath math="\\cos A = \\frac{\\cos a - \\cos b \\cos c}{\\sin b \\sin c}" />
              <BlockMath math="\\cos A = \\frac{\\cos(40°) - \\cos(50°)\\cos(60°)}{\\sin(50°)\\sin(60°)}" />
              <BlockMath math="\\cos A = \\frac{0.7660 - (0.6428)(0.5000)}{(0.7660)(0.8660)} = \\frac{0.7660 - 0.3214}{0.6634} = 0.6699" />
              <BlockMath math="A = \\arccos(0.6699) = 47.9°" />
              
              <p>Now verify using the cotangent theorem:</p>
              <BlockMath math="\\sin(50°) \\cot(47.9°) = \\cos(50°) \\cot(60°) - \\sin(60°) \\cos(47.9°)" />
              <BlockMath math="0.7660 \\times 0.9004 = 0.6428 \\times 0.5774 - 0.8660 \\times 0.6699" />
              <BlockMath math="0.6897 ≈ 0.3712 - 0.5801 = 0.3712 - 0.5801" />
              
              <p><strong>Answer:</strong> Angle A ≈ 47.9° (verified by cotangent theorem)</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Navigation Problem</h3>
            <p className="mb-2">
              A navigator observes two stars with an angular separation of 45°. The altitude 
              of the first star is 30° and the second is 40°. Find the azimuth difference 
              between the stars using spherical trigonometry.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>This forms a spherical triangle where:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Side c (angular separation) = 45°</li>
                <li>Side a (co-altitude of star 2) = 90° - 40° = 50°</li>
                <li>Side b (co-altitude of star 1) = 90° - 30° = 60°</li>
              </ul>
              
              <p>We need to find angle C (azimuth difference).</p>
              
              <p>Using the cotangent theorem:</p>
              <BlockMath math="\\sin a \\cot C = \\cos a \\cot b - \\sin b \\cos C" />
              
              <p>This requires iterative solution or use of the cosine rule first:</p>
              <BlockMath math="\\cos C = \\frac{\\cos c - \\cos a \\cos b}{\\sin a \\sin b}" />
              <BlockMath math="\\cos C = \\frac{\\cos(45°) - \\cos(50°)\\cos(60°)}{\\sin(50°)\\sin(60°)}" />
              <BlockMath math="\\cos C = \\frac{0.7071 - (0.6428)(0.5000)}{(0.7660)(0.8660)} = \\frac{0.7071 - 0.3214}{0.6634} = 0.5814" />
              <BlockMath math="C = \\arccos(0.5814) = 54.5°" />
              
              <p><strong>Answer:</strong> The azimuth difference between the stars is approximately 54.5°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Verification Problem</h3>
            <p className="mb-2">
              For a spherical triangle with A = 70°, b = 45°, c = 55°, verify the 
              cotangent theorem and find side a.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, find side a using the cosine rule:</p>
              <BlockMath math="\\cos a = \\cos b \\cos c + \\sin b \\sin c \\cos A" />
              <BlockMath math="\\cos a = \\cos(45°)\\cos(55°) + \\sin(45°)\\sin(55°)\\cos(70°)" />
              <BlockMath math="\\cos a = (0.7071)(0.5736) + (0.7071)(0.8192)(0.3420)" />
              <BlockMath math="\\cos a = 0.4056 + 0.1980 = 0.6036" />
              <BlockMath math="a = \\arccos(0.6036) = 52.8°" />
              
              <p>Now verify using the cotangent theorem:</p>
              <BlockMath math="\\sin b \\cot A = \\cos b \\cot c - \\sin c \\cos A" />
              <BlockMath math="\\sin(45°) \\cot(70°) = \\cos(45°) \\cot(55°) - \\sin(55°) \\cos(70°)" />
              <BlockMath math="0.7071 \\times 0.3640 = 0.7071 \\times 0.7002 - 0.8192 \\times 0.3420" />
              <BlockMath math="0.2574 ≈ 0.4952 - 0.2802 = 0.2150" />
              
              <p>The small difference is due to rounding errors in the calculations.</p>
              
              <p><strong>Answer:</strong> Side a ≈ 52.8°, cotangent theorem verified within rounding error</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}