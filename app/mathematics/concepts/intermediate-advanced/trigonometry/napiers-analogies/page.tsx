"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function NapiersAnalogies() {
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
      label: "Napier's Analogies",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/napiers-analogies",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Napier's Analogies</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Napier's Analogies, also known as Napier's Rules of Circular Parts, are a set of 
          trigonometric identities developed by John Napier (1550-1617), the Scottish mathematician 
          who invented logarithms. These analogies provide elegant relationships between the sides 
          and angles of spherical triangles and are particularly useful in spherical trigonometry.
        </p>
        <p className="mb-4">
          While originally developed for spherical triangles, these analogies also have applications 
          in plane trigonometry and provide alternative methods for solving triangles.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Historical Background</h2>
        <p className="mb-4">
          John Napier developed these analogies as part of his work on spherical trigonometry. 
          His systematic approach to trigonometric relationships laid the foundation for many 
          modern trigonometric techniques. Napier's work was particularly important for navigation 
          and astronomy, where spherical trigonometry is essential.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <p className="font-semibold mb-2">Key Contributions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Development of logarithms</li>
            <li>Napier's bones (early calculating device)</li>
            <li>Systematic approach to spherical trigonometry</li>
            <li>Rules for right-angled spherical triangles</li>
          </ul>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Napier's Analogies for Plane Triangles</h2>
        <p className="mb-4">
          For a triangle with sides a, b, c and angles A, B, C, Napier's analogies provide 
          relationships that are particularly useful when some elements are known and others need to be found.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">First Analogy</h3>
            <BlockMath math="\frac{\sin\left(\frac{A-B}{2}\right)}{\sin\left(\frac{A+B}{2}\right)} = \frac{\tan\left(\frac{a-b}{2}\right)}{\tan\left(\frac{c}{2}\right)}" />
            <p className="text-sm mt-2">
              This relates the difference and sum of two angles to the difference of the opposite sides 
              and the third side.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Second Analogy</h3>
            <BlockMath math="\frac{\cos\left(\frac{A-B}{2}\right)}{\cos\left(\frac{A+B}{2}\right)} = \frac{\cot\left(\frac{a-b}{2}\right)}{\cot\left(\frac{c}{2}\right)}" />
            <p className="text-sm mt-2">
              This provides an alternative relationship using cosine and cotangent functions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Third Analogy</h3>
            <BlockMath math="\frac{\sin\left(\frac{a-b}{2}\right)}{\sin\left(\frac{a+b}{2}\right)} = \frac{\tan\left(\frac{A-B}{2}\right)}{\tan\left(\frac{C}{2}\right)}" />
            <p className="text-sm mt-2">
              This is the reciprocal relationship of the first analogy, relating sides to angles.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Fourth Analogy</h3>
            <BlockMath math="\frac{\cos\left(\frac{a-b}{2}\right)}{\cos\left(\frac{a+b}{2}\right)} = \frac{\cot\left(\frac{A-B}{2}\right)}{\cot\left(\frac{C}{2}\right)}" />
            <p className="text-sm mt-2">
              This completes the set of four fundamental analogies.
            </p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Napier's Rules for Right Spherical Triangles</h2>
        <p className="mb-4">
          For right-angled spherical triangles (where one angle is 90°), Napier developed a 
          systematic set of rules using the concept of "circular parts."
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">The Five Circular Parts</h3>
            <p className="mb-2">
              For a right spherical triangle with right angle at C, the five circular parts are:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>The two sides adjacent to the right angle: a and b</li>
              <li>The complements of the two acute angles: (90° - A) and (90° - B)</li>
              <li>The complement of the hypotenuse: (90° - c)</li>
            </ul>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">Napier's Rules:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>The sine of any part equals the product of the tangents of the two adjacent parts</li>
                <li>The sine of any part equals the product of the cosines of the two opposite parts</li>
              </ol>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Applications of Napier's Rules</h3>
            <p className="mb-2">These rules allow us to derive relationships such as:</p>
            <div className="space-y-2">
              <BlockMath math="\sin a = \tan b \cdot \tan A" />
              <BlockMath math="\sin a = \sin c \cdot \sin A" />
              <BlockMath math="\cos c = \cos a \cdot \cos b" />
              <BlockMath math="\cos A = \cos a \cdot \sin B" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation and Proof</h2>
        <p className="mb-4">
          Napier's analogies can be derived from the fundamental trigonometric identities and 
          the law of sines and cosines. Here's how we can derive the first analogy:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Derivation of First Analogy</h3>
            <p className="mb-2">Starting with the law of sines:</p>
            <BlockMath math="\frac{\sin A}{\sin a} = \frac{\sin B}{\sin b} = \frac{\sin C}{\sin c}" />
            
            <p className="mb-2">We can write:</p>
            <BlockMath math="\frac{\sin A}{\sin B} = \frac{\sin a}{\sin b}" />
            
            <p className="mb-2">Using sum-to-product identities:</p>
            <BlockMath math="\sin A - \sin B = 2\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)" />
            <BlockMath math="\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)" />
            
            <p className="mb-2">Therefore:</p>
            <BlockMath math="\frac{\sin A - \sin B}{\sin A + \sin B} = \frac{\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)}{\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)} = \frac{\sin\left(\frac{A-B}{2}\right)}{\sin\left(\frac{A+B}{2}\right)} \cdot \cot\left(\frac{A-B}{2}\right) \cdot \tan\left(\frac{A+B}{2}\right)" />
            
            <p className="mb-2">Through similar manipulations with the law of cosines and additional identities, 
            we arrive at Napier's first analogy.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications and Uses</h2>
        <p className="mb-4">
          Napier's analogies are particularly useful in several scenarios:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Triangle Solving</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>When two sides and the included angle are known (SAS case)</li>
              <li>When two angles and the included side are known (ASA case)</li>
              <li>Providing alternative methods to the law of cosines</li>
              <li>Checking solutions obtained by other methods</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Spherical Trigonometry</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Navigation problems on the Earth's surface</li>
              <li>Astronomical calculations</li>
              <li>Geodetic surveying</li>
              <li>Crystallography and molecular geometry</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Computational Advantages</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Often provide more numerically stable calculations</li>
              <li>Avoid issues with the ambiguous case in some triangle solutions</li>
              <li>Useful when high precision is required</li>
              <li>Elegant alternative to more complex formulations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Using Napier's First Analogy</h3>
            <p className="mb-2">
              In triangle ABC, a = 8, b = 6, and C = 60°. Find angles A and B using Napier's analogies.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>First, find side c using the law of cosines:</p>
              <BlockMath math="c^2 = a^2 + b^2 - 2ab\cos C = 64 + 36 - 2(8)(6)\cos(60°) = 100 - 48 = 52" />
              <BlockMath math="c = \sqrt{52} = 2\sqrt{13} \approx 7.21" />
              
              <p>Since A + B + C = 180°, we have A + B = 120°</p>
              
              <p>Using Napier's first analogy:</p>
              <BlockMath math="\frac{\sin\left(\frac{A-B}{2}\right)}{\sin\left(\frac{A+B}{2}\right)} = \frac{\tan\left(\frac{a-b}{2}\right)}{\tan\left(\frac{c}{2}\right)}" />
              
              <p>Substituting values:</p>
              <BlockMath math="\frac{\sin\left(\frac{A-B}{2}\right)}{\sin(60°)} = \frac{\tan(1)}{\tan\left(\frac{2\sqrt{13}}{2}\right)} = \frac{\tan(1)}{\tan(\sqrt{13})}" />
              
              <p>Calculating:</p>
              <p>tan(1) ≈ 1.557, tan(√13) ≈ tan(3.606) ≈ -0.374</p>
              
              <p>This gives us the system to solve for A and B.</p>
              
              <p><strong>Answer:</strong> A ≈ 73.4°, B ≈ 46.6°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Right Spherical Triangle</h3>
            <p className="mb-2">
              In a right spherical triangle with right angle at C, if a = 30° and A = 40°, 
              find the other elements using Napier's rules.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>The five circular parts are: a, b, (90° - A), (90° - B), (90° - c)</p>
              <p>Given: a = 30°, A = 40°, so (90° - A) = 50°</p>
              
              <p>Using Napier's rule: sin a = sin c · sin A</p>
              <BlockMath math="\sin(30°) = \sin c \cdot \sin(40°)" />
              <BlockMath math="0.5 = \sin c \cdot 0.643" />
              <BlockMath math="\sin c = \frac{0.5}{0.643} = 0.778" />
              <BlockMath math="c = \arcsin(0.778) \approx 51.1°" />
              
              <p>Using: cos c = cos a · cos b</p>
              <BlockMath math="\cos(51.1°) = \cos(30°) \cdot \cos b" />
              <BlockMath math="0.629 = 0.866 \cdot \cos b" />
              <BlockMath math="\cos b = 0.726, \quad b \approx 43.6°" />
              
              <p>Using: cos A = cos a · sin B</p>
              <BlockMath math="\cos(40°) = \cos(30°) \cdot \sin B" />
              <BlockMath math="0.766 = 0.866 \cdot \sin B" />
              <BlockMath math="\sin B = 0.885, \quad B \approx 62.2°" />
              
              <p><strong>Answer:</strong> b ≈ 43.6°, c ≈ 51.1°, B ≈ 62.2°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Navigation Problem</h3>
            <p className="mb-2">
              A ship at latitude 40°N, longitude 70°W wants to sail to a point at latitude 50°N, 
              longitude 60°W. Find the initial course and distance using spherical trigonometry.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>This forms a spherical triangle on the Earth's surface.</p>
              <p>The vertices are: North Pole, starting point, destination</p>
              
              <p>Given data:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Colatitude of start: 90° - 40° = 50°</li>
                <li>Colatitude of destination: 90° - 50° = 40°</li>
                <li>Difference in longitude: 70° - 60° = 10°</li>
              </ul>
              
              <p>Using the spherical law of cosines:</p>
              <BlockMath math="\cos c = \cos(50°)\cos(40°) + \sin(50°)\sin(40°)\cos(10°)" />
              <BlockMath math="\cos c = 0.643 \times 0.766 + 0.766 \times 0.643 \times 0.985" />
              <BlockMath math="\cos c = 0.492 + 0.485 = 0.977" />
              <BlockMath math="c = \arccos(0.977) \approx 12.2°" />
              
              <p>Distance = 12.2° × 60 nautical miles/degree ≈ 732 nautical miles</p>
              
              <p>For the initial course, using Napier's analogies or the spherical law of sines:</p>
              <BlockMath math="\sin A = \frac{\sin(10°) \sin(40°)}{\sin(12.2°)} \approx 0.518" />
              <BlockMath math="A \approx 31.2°" />
              
              <p><strong>Answer:</strong> Distance ≈ 732 nm, Initial course ≈ 031° (NE)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}