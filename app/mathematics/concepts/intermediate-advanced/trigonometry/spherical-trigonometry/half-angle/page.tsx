"use client";

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function HalfAngle() {
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
      label: "Half Angle",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/spherical-trigonometry/half-angle",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Spherical Half Angle Formulas</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Spherical Half Angle Formulas are specialized relationships in spherical 
          trigonometry that express half-angles in terms of the sides of a spherical triangle. 
          These formulas are particularly useful for solving spherical triangles and have 
          important applications in navigation and astronomy.
        </p>
        <p className="mb-4">
          Unlike plane trigonometry, spherical half-angle formulas involve more complex 
          relationships due to the curvature of the sphere, but they provide elegant 
          solutions to many practical problems.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Half Angle Formulas for Angles</h2>
        <p className="mb-4">
          For a spherical triangle with sides a, b, c and angles A, B, C, let s be the 
          semi-perimeter: s = (a + b + c)/2
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Half Angle Formulas:</h3>
          <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{\\sin(s-b)\\sin(s-c)}{\\sin s \\sin(s-a)}}" />
          <BlockMath math="\\tan\\frac{B}{2} = \\sqrt{\\frac{\\sin(s-a)\\sin(s-c)}{\\sin s \\sin(s-b)}}" />
          <BlockMath math="\\tan\\frac{C}{2} = \\sqrt{\\frac{\\sin(s-a)\\sin(s-b)}{\\sin s \\sin(s-c)}}" />
        </div>
        
        <p className="mb-4">
          These formulas are the spherical analogs of the plane triangle half-angle formulas, 
          but use sine functions instead of the linear expressions found in plane geometry.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Half Angle Formulas for Sides</h2>
        <p className="mb-4">
          Similarly, we can express half-sides in terms of the angles. Let Σ be the 
          semi-sum of angles: Σ = (A + B + C)/2
        </p>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">Half Side Formulas:</h3>
          <BlockMath math="\\tan\\frac{a}{2} = \\sqrt{\\frac{\\sin(\\Sigma-B)\\sin(\\Sigma-C)}{\\sin\\Sigma \\sin(\\Sigma-A)}}" />
          <BlockMath math="\\tan\\frac{b}{2} = \\sqrt{\\frac{\\sin(\\Sigma-A)\\sin(\\Sigma-C)}{\\sin\\Sigma \\sin(\\Sigma-B)}}" />
          <BlockMath math="\\tan\\frac{c}{2} = \\sqrt{\\frac{\\sin(\\Sigma-A)\\sin(\\Sigma-B)}{\\sin\\Sigma \\sin(\\Sigma-C)}}" />
        </div>
        
        <p className="mb-4">
          These formulas are particularly useful when all three angles of a spherical 
          triangle are known and we need to find the sides.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Alternative Forms</h2>
        <p className="mb-4">
          The half-angle formulas can also be expressed using different trigonometric functions:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Sine Functions</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <BlockMath math="\\sin\\frac{A}{2} = \\sqrt{\\frac{\\sin(s-b)\\sin(s-c)}{\\sin b \\sin c}}" />
              <BlockMath math="\\cos\\frac{A}{2} = \\sqrt{\\frac{\\sin s \\sin(s-a)}{\\sin b \\sin c}}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Haversine Formula</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="mb-2">The haversine of half an angle can be expressed as:</p>
              <BlockMath math="\\text{hav}\\left(\\frac{A}{2}\\right) = \\frac{\\sin(s-b)\\sin(s-c)}{\\sin b \\sin c}" />
              <p className="text-sm mt-2">where hav(θ) = sin²(θ/2) = (1 - cos θ)/2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation</h2>
        <p className="mb-4">
          The spherical half-angle formulas can be derived from the fundamental formulas 
          of spherical trigonometry using various approaches:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Method 1: From Spherical Excess</h3>
            <p className="mb-2">
              Starting with the spherical excess E = A + B + C - π, and using the 
              relationship between the area of a spherical triangle and its angles:
            </p>
            <BlockMath math="\\tan\\frac{E}{4} = \\sqrt{\\tan\\frac{s}{2}\\tan\\frac{s-a}{2}\\tan\\frac{s-b}{2}\\tan\\frac{s-c}{2}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Method 2: From L'Huilier's Theorem</h3>
            <p className="mb-2">
              L'Huilier's theorem provides a direct relationship that can be manipulated 
              to derive the half-angle formulas:
            </p>
            <BlockMath math="\\tan\\frac{E}{4} = \\sqrt{\\frac{\\sin(s-a)\\sin(s-b)\\sin(s-c)}{\\sin s}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>Calculating intermediate waypoints on great circle routes</li>
                <li>Determining course corrections for long-distance navigation</li>
                <li>Computing bearing changes at specific points along a route</li>
                <li>Solving complex multi-leg navigation problems</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Astronomy</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>Calculating positions of celestial objects</li>
                <li>Determining rise and set times of stars and planets</li>
                <li>Computing eclipse predictions and visibility</li>
                <li>Solving problems in celestial mechanics</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Geodesy</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>Precise measurement of distances on Earth's surface</li>
                <li>Triangulation in surveying and mapping</li>
                <li>GPS coordinate system calculations</li>
                <li>Satellite orbit determination</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Computational Considerations</h2>
        <p className="mb-4">
          When implementing spherical half-angle formulas in computer programs, 
          several numerical considerations are important:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Numerical Stability</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Use appropriate precision for trigonometric calculations</li>
              <li>Be aware of potential division by zero when sin s = 0</li>
              <li>Consider using alternative formulations for very small or large angles</li>
              <li>Implement proper error checking and validation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Angle Range Considerations</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ensure angles are in the correct range (0 to π for spherical triangles)</li>
              <li>Handle the square root carefully to ensure positive results</li>
              <li>Consider the quadrant when taking inverse trigonometric functions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Finding Half-Angles from Sides</h3>
            <p className="mb-2">
              Given a spherical triangle with sides a = 60°, b = 80°, c = 70°, 
              find tan(A/2).
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, calculate the semi-perimeter:</p>
              <BlockMath math="s = \\frac{a + b + c}{2} = \\frac{60° + 80° + 70°}{2} = 105°" />
              
              <p>Calculate the required terms:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>s - a = 105° - 60° = 45°</li>
                <li>s - b = 105° - 80° = 25°</li>
                <li>s - c = 105° - 70° = 35°</li>
              </ul>
              
              <p>Apply the half-angle formula:</p>
              <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{\\sin(s-b)\\sin(s-c)}{\\sin s \\sin(s-a)}}" />
              <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{\\sin(25°)\\sin(35°)}{\\sin(105°) \\sin(45°)}}" />
              
              <p>Calculate the sine values:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>sin(25°) = 0.4226</li>
                <li>sin(35°) = 0.5736</li>
                <li>sin(105°) = 0.9659</li>
                <li>sin(45°) = 0.7071</li>
              </ul>
              
              <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{0.4226 \\times 0.5736}{0.9659 \\times 0.7071}} = \\sqrt{\\frac{0.2424}{0.6830}} = \\sqrt{0.3548} = 0.5957" />
              
              <p>Therefore: A/2 = arctan(0.5957) = 30.8°, so A = 61.6°</p>
              
              <p><strong>Answer:</strong> tan(A/2) = 0.5957, A = 61.6°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Finding Half-Sides from Angles</h3>
            <p className="mb-2">
              Given a spherical triangle with angles A = 70°, B = 80°, C = 90°, 
              find tan(a/2).
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Calculate the semi-sum of angles:</p>
              <BlockMath math="\\Sigma = \\frac{A + B + C}{2} = \\frac{70° + 80° + 90°}{2} = 120°" />
              
              <p>Calculate the required terms:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Σ - A = 120° - 70° = 50°</li>
                <li>Σ - B = 120° - 80° = 40°</li>
                <li>Σ - C = 120° - 90° = 30°</li>
              </ul>
              
              <p>Apply the half-side formula:</p>
              <BlockMath math="\\tan\\frac{a}{2} = \\sqrt{\\frac{\\sin(\\Sigma-B)\\sin(\\Sigma-C)}{\\sin\\Sigma \\sin(\\Sigma-A)}}" />
              <BlockMath math="\\tan\\frac{a}{2} = \\sqrt{\\frac{\\sin(40°)\\sin(30°)}{\\sin(120°) \\sin(50°)}}" />
              
              <p>Calculate the sine values:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>sin(40°) = 0.6428</li>
                <li>sin(30°) = 0.5000</li>
                <li>sin(120°) = 0.8660</li>
                <li>sin(50°) = 0.7660</li>
              </ul>
              
              <BlockMath math="\\tan\\frac{a}{2} = \\sqrt{\\frac{0.6428 \\times 0.5000}{0.8660 \\times 0.7660}} = \\sqrt{\\frac{0.3214}{0.6634}} = \\sqrt{0.4844} = 0.6960" />
              
              <p>Therefore: a/2 = arctan(0.6960) = 34.9°, so a = 69.8°</p>
              
              <p><strong>Answer:</strong> tan(a/2) = 0.6960, a = 69.8°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Navigation Application</h3>
            <p className="mb-2">
              A navigator needs to find the intermediate bearing at the midpoint of a 
              great circle route. The route forms a spherical triangle with the North Pole, 
              where the sides are 40° and 50°, and the included angle is 30°. 
              Find the half-angle at the North Pole.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: b = 40°, c = 50°, A = 30° (angle at North Pole)</p>
              
              <p>First, find side a using the spherical cosine rule:</p>
              <BlockMath math="\\cos a = \\cos b \\cos c + \\sin b \\sin c \\cos A" />
              <BlockMath math="\\cos a = \\cos(40°)\\cos(50°) + \\sin(40°)\\sin(50°)\\cos(30°)" />
              <BlockMath math="\\cos a = 0.7660 \\times 0.6428 + 0.6428 \\times 0.7660 \\times 0.8660" />
              <BlockMath math="\\cos a = 0.4924 + 0.4264 = 0.9188" />
              <BlockMath math="a = \\arccos(0.9188) = 23.1°" />
              
              <p>Now calculate the semi-perimeter:</p>
              <BlockMath math="s = \\frac{23.1° + 40° + 50°}{2} = 56.55°" />
              
              <p>Apply the half-angle formula:</p>
              <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{\\sin(s-b)\\sin(s-c)}{\\sin s \\sin(s-a)}}" />
              <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{\\sin(16.55°)\\sin(6.55°)}{\\sin(56.55°) \\sin(33.45°)}}" />
              
              <p>Calculate and substitute:</p>
              <BlockMath math="\\tan\\frac{A}{2} = \\sqrt{\\frac{0.2845 \\times 0.1139}{0.8339 \\times 0.5505}} = \\sqrt{\\frac{0.0324}{0.4590} = 0.2655" />
              
              <p>Therefore: A/2 = arctan(0.2655) = 14.9°</p>
              
              <p><strong>Answer:</strong> The half-angle at the North Pole is 14.9°, 
              confirming our given angle A = 30°.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Astronomical Application</h3>
            <p className="mb-2">
              An astronomer observes three stars forming a spherical triangle on the 
              celestial sphere. The angular separations are 45°, 60°, and 75°. 
              Find the half-angle opposite the 75° side.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given sides: a = 45°, b = 60°, c = 75°</p>
              <p>We want to find tan(C/2), where C is opposite side c.</p>
              
              <p>Calculate the semi-perimeter:</p>
              <BlockMath math="s = \\frac{45° + 60° + 75°}{2} = 90°" />
              
              <p>Calculate the required terms:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>s - a = 90° - 45° = 45°</li>
                <li>s - b = 90° - 60° = 30°</li>
                <li>s - c = 90° - 75° = 15°</li>
              </ul>
              
              <p>Apply the half-angle formula for C:</p>
              <BlockMath math="\\tan\\frac{C}{2} = \\sqrt{\\frac{\\sin(s-a)\\sin(s-b)}{\\sin s \\sin(s-c)}}" />
              <BlockMath math="\\tan\\frac{C}{2} = \\sqrt{\\frac{\\sin(45°)\\sin(30°)}{\\sin(90°) \\sin(15°)}}" />
              
              <p>Calculate the sine values:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>sin(45°) = 0.7071</li>
                <li>sin(30°) = 0.5000</li>
                <li>sin(90°) = 1.0000</li>
                <li>sin(15°) = 0.2588</li>
              </ul>
              
              <BlockMath math="\\tan\\frac{C}{2} = \\sqrt{\\frac{0.7071 \\times 0.5000}{1.0000 \\times 0.2588}} = \\sqrt{\\frac{0.3536}{0.2588}} = \\sqrt{1.366} = 1.169" />
              
              <p>Therefore: C/2 = arctan(1.169) = 49.4°, so C = 98.8°</p>
              
              <p><strong>Answer:</strong> The half-angle opposite the 75° side is 49.4°, 
              making the full angle 98.8°.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}