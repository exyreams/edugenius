"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function SurfaceOfTriangleAndSphericalPolygon() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Trigonometry",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry",
    },
    {
      label: "Surface of Triangle and Spherical Polygon",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/surface-of-triangle-and-spherical-polygon",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Surface of Triangle and Spherical Polygon</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The calculation of surface areas is fundamental in both plane and spherical geometry. 
          This chapter covers methods for finding the area of triangles in plane geometry and 
          the surface area of spherical triangles and polygons on the surface of a sphere.
        </p>
        <p className="mb-4">
          These concepts are essential in fields such as geodesy, astronomy, navigation, 
          and computer graphics, where accurate area calculations on curved surfaces are required.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Area of Plane Triangles</h2>
        <p className="mb-4">
          There are several methods to calculate the area of a triangle in plane geometry, 
          depending on what information is available.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Area Formula</h3>
            <p className="mb-2">When base and height are known:</p>
            <BlockMath math="A = \frac{1}{2} \times \text{base} \times \text{height}" />
            <BlockMath math="A = \frac{1}{2}bh" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Two Sides and Included Angle</h3>
            <p className="mb-2">When two sides and the included angle are known:</p>
            <BlockMath math="A = \frac{1}{2}ab\sin C" />
            <BlockMath math="A = \frac{1}{2}bc\sin A" />
            <BlockMath math="A = \frac{1}{2}ac\sin B" />
            <p className="text-sm mt-2">where a, b, c are the sides and A, B, C are the opposite angles.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Heron's Formula</h3>
            <p className="mb-2">When all three sides are known:</p>
            <BlockMath math="A = \sqrt{s(s-a)(s-b)(s-c)}" />
            <p className="mb-2">where s is the semi-perimeter:</p>
            <BlockMath math="s = \frac{a+b+c}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Coordinates</h3>
            <p className="mb-2">For a triangle with vertices at (x₁, y₁), (x₂, y₂), (x₃, y₃):</p>
            <BlockMath math="A = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Trigonometric Form</h3>
            <p className="mb-2">Alternative expressions using angles:</p>
            <BlockMath math="A = \frac{a^2\sin B \sin C}{2\sin A}" />
            <BlockMath math="A = \frac{abc}{4R}" />
            <p className="text-sm mt-2">where R is the circumradius of the triangle.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Spherical Triangles</h2>
        <p className="mb-4">
          A spherical triangle is formed by three great circle arcs on the surface of a sphere. 
          The area calculation for spherical triangles involves different principles than plane triangles.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Spherical Excess</h3>
            <p className="mb-4">
              The key concept in spherical triangle area calculation is the spherical excess, 
              which is the amount by which the sum of the angles exceeds 180°.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">Spherical Excess Formula:</p>
              <BlockMath math="E = A + B + C - \pi" />
              <p className="text-sm mt-2">where A, B, C are the angles of the spherical triangle in radians.</p>
            </div>
            
            <p className="mb-2">The area of a spherical triangle is directly proportional to its spherical excess:</p>
            <BlockMath math="\text{Area} = R^2 \cdot E = R^2(A + B + C - \pi)" />
            <p className="text-sm mt-2">where R is the radius of the sphere.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">L'Huilier's Theorem</h3>
            <p className="mb-2">
              For a spherical triangle with sides a, b, c, L'Huilier's theorem provides:
            </p>
            <BlockMath math="\tan\left(\frac{E}{4}\right) = \sqrt{\tan\left(\frac{s}{2}\right)\tan\left(\frac{s-a}{2}\right)\tan\left(\frac{s-b}{2}\right)\tan\left(\frac{s-c}{2}\right)}" />
            <p className="mb-2">where s is the spherical semi-perimeter:</p>
            <BlockMath math="s = \frac{a+b+c}{2}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Area Formulas</h3>
            <p className="mb-2">Using sides and angles:</p>
            <BlockMath math="\tan\left(\frac{A}{2}\right) = \frac{r}{\sin(s-a)}" />
            <p className="mb-2">where r is the radius of the inscribed circle:</p>
            <BlockMath math="\tan\left(\frac{r}{2}\right) = \sqrt{\frac{\sin(s-a)\sin(s-b)\sin(s-c)}{\sin s}}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Spherical Polygons</h2>
        <p className="mb-4">
          A spherical polygon is a closed figure on the surface of a sphere bounded by great circle arcs. 
          The area calculation extends the principles used for spherical triangles.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">General Formula for Spherical Polygons</h3>
            <p className="mb-2">For a spherical polygon with n sides and interior angles A₁, A₂, ..., Aₙ:</p>
            <BlockMath math="\text{Area} = R^2\left(\sum_{i=1}^{n} A_i - (n-2)\pi\right)" />
            <p className="text-sm mt-2">This is the generalization of the spherical excess formula.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Triangulation Method</h3>
            <p className="mb-4">
              Complex spherical polygons can be divided into spherical triangles, and the total area 
              is the sum of the individual triangle areas.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Divide the polygon into n-2 triangles (where n is the number of sides)</li>
              <li>Calculate the area of each triangle using spherical triangle formulas</li>
              <li>Sum all triangle areas to get the total polygon area</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Girard's Theorem</h3>
            <p className="mb-2">
              Girard's theorem states that the area of a spherical polygon is proportional to 
              its angular excess:
            </p>
            <BlockMath math="\text{Area} = R^2 \times \text{Angular Excess}" />
            <p className="mb-2">where the angular excess is:</p>
            <BlockMath math="\text{Angular Excess} = \sum \text{Interior Angles} - (n-2)\pi" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        <p className="mb-4">
          Surface area calculations have numerous practical applications across various fields.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Geodesy and Surveying</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Calculating land areas on the Earth's curved surface</li>
              <li>Determining property boundaries</li>
              <li>Mapping and cartographic projections</li>
              <li>GPS and navigation system calculations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Astronomy</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Calculating areas of celestial regions</li>
              <li>Determining coverage areas of telescopic observations</li>
              <li>Planetary surface area calculations</li>
              <li>Stellar coordinate system conversions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Computer Graphics and Gaming</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>3D surface rendering and texturing</li>
              <li>Collision detection algorithms</li>
              <li>Lighting and shading calculations</li>
              <li>Virtual reality and augmented reality applications</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Engineering and Architecture</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Structural surface area calculations</li>
              <li>Material quantity estimation</li>
              <li>Heat transfer and fluid dynamics</li>
              <li>Dome and curved structure design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Plane Triangle Area (Heron's Formula)</h3>
            <p className="mb-2">
              Find the area of a triangle with sides a = 13, b = 14, c = 15.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, calculate the semi-perimeter:</p>
              <BlockMath math="s = \frac{a+b+c}{2} = \frac{13+14+15}{2} = 21" />
              
              <p>Apply Heron's formula:</p>
              <BlockMath math="A = \sqrt{s(s-a)(s-b)(s-c)}" />
              <BlockMath math="A = \sqrt{21(21-13)(21-14)(21-15)}" />
              <BlockMath math="A = \sqrt{21 \times 8 \times 7 \times 6}" />
              <BlockMath math="A = \sqrt{7056} = 84" />
              
              <p><strong>Answer:</strong> The area is 84 square units.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Triangle Area Using SAS</h3>
            <p className="mb-2">
              Find the area of a triangle where two sides are 8 and 12, and the included angle is 60°.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the formula A = ½ab sin C:</p>
              <BlockMath math="A = \frac{1}{2} \times 8 \times 12 \times \sin(60°)" />
              <BlockMath math="A = \frac{1}{2} \times 8 \times 12 \times \frac{\sqrt{3}}{2}" />
              <BlockMath math="A = 48 \times \frac{\sqrt{3}}{2} = 24\sqrt{3} \approx 41.57" />
              
              <p><strong>Answer:</strong> The area is 24√3 ≈ 41.57 square units.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Spherical Triangle Area</h3>
            <p className="mb-2">
              Find the area of a spherical triangle on a sphere of radius 6371 km (Earth's radius) 
              with angles A = 95°, B = 110°, C = 85°.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, convert angles to radians:</p>
              <p>A = 95° = 95π/180 ≈ 1.658 rad</p>
              <p>B = 110° = 110π/180 ≈ 1.920 rad</p>
              <p>C = 85° = 85π/180 ≈ 1.484 rad</p>
              
              <p>Calculate the spherical excess:</p>
              <BlockMath math="E = A + B + C - \pi" />
              <BlockMath math="E = 1.658 + 1.920 + 1.484 - 3.14159 = 1.921 \text{ rad}" />
              
              <p>Calculate the area:</p>
              <BlockMath math="\text{Area} = R^2 \times E = 6371^2 \times 1.921" />
              <BlockMath math="\text{Area} = 40,589,641 \times 1.921 \approx 77,972,000 \text{ km}^2" />
              
              <p><strong>Answer:</strong> The area is approximately 77,972,000 km².</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Spherical Triangle Using L'Huilier's Theorem</h3>
            <p className="mb-2">
              Find the area of a spherical triangle with sides a = 60°, b = 80°, c = 70° 
              on a unit sphere (R = 1).
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Convert sides to radians:</p>
              <p>a = π/3, b = 4π/9, c = 7π/18</p>
              
              <p>Calculate the spherical semi-perimeter:</p>
              <BlockMath math="s = \frac{a+b+c}{2} = \frac{\pi/3 + 4\pi/9 + 7\pi/18}{2}" />
              <BlockMath math="s = \frac{6\pi/18 + 8\pi/18 + 7\pi/18}{2} = \frac{21\pi/18}{2} = \frac{7\pi}{12}" />
              
              <p>Apply L'Huilier's theorem:</p>
              <BlockMath math="\tan\left(\frac{E}{4}\right) = \sqrt{\tan\left(\frac{s}{2}\right)\tan\left(\frac{s-a}{2}\right)\tan\left(\frac{s-b}{2}\right)\tan\left(\frac{s-c}{2}\right)}" />
              
              <p>Calculate each term:</p>
              <p>s/2 = 7π/24, (s-a)/2 = π/24, (s-b)/2 = π/72, (s-c)/2 = π/36</p>
              
              <p>After computation:</p>
              <BlockMath math="E \approx 0.524 \text{ rad} \approx 30°" />
              
              <p>Area = R² × E = 1² × 0.524 = 0.524 square units</p>
              
              <p><strong>Answer:</strong> The area is approximately 0.524 square units.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 5: Spherical Quadrilateral</h3>
            <p className="mb-2">
              Find the area of a spherical quadrilateral on Earth's surface with interior angles 
              92°, 88°, 91°, and 89°.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>For a spherical quadrilateral (n = 4):</p>
              <BlockMath math="\text{Area} = R^2\left(\sum_{i=1}^{4} A_i - (4-2)\pi\right)" />
              
              <p>Sum of interior angles:</p>
              <p>92° + 88° + 91° + 89° = 360°</p>
              
              <p>Convert to radians: 360° = 2π rad</p>
              
              <p>Angular excess:</p>
              <BlockMath math="E = 2\pi - 2\pi = 0" />
              
              <p>This indicates the quadrilateral is actually planar (lies on a great circle), 
              so its area is 0.</p>
              
              <p><strong>Answer:</strong> The area is 0 (degenerate case).</p>
              
              <p><strong>Note:</strong> For a proper spherical quadrilateral, the sum of angles 
              should exceed 360°.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 6: Land Area Calculation</h3>
            <p className="mb-2">
              Calculate the area of a triangular piece of land with vertices at coordinates:
              A(0, 0), B(100, 0), C(50, 80) in meters.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using the coordinate formula:</p>
              <BlockMath math="A = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|" />
              
              <p>Substituting coordinates:</p>
              <p>(x₁, y₁) = (0, 0), (x₂, y₂) = (100, 0), (x₃, y₃) = (50, 80)</p>
              
              <BlockMath math="A = \frac{1}{2}|0(0 - 80) + 100(80 - 0) + 50(0 - 0)|" />
              <BlockMath math="A = \frac{1}{2}|0 + 8000 + 0| = \frac{8000}{2} = 4000" />
              
              <p><strong>Answer:</strong> The area is 4000 square meters.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}