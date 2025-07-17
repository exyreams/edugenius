"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function LawOfSinesAndLawOfCosines() {
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
      label: "Law of Sines and Law of Cosines",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/law-of-sines-and-law-of-cosines",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Law of Sines and Law of Cosines</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Law of Sines and Law of Cosines are fundamental theorems that extend trigonometry beyond right triangles to any triangle. These laws allow us to solve triangles when we know certain combinations of sides and angles.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Triangle Notation</h2>
        <p className="mb-4">
          In any triangle ABC:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Vertices are labeled A, B, C</li>
          <li>Sides opposite to vertices A, B, C are labeled a, b, c respectively</li>
          <li>Angles at vertices A, B, C are labeled α, β, γ (or A, B, C)</li>
        </ul>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Law of Sines</h2>
        <p className="mb-4">
          The Law of Sines states that the ratio of each side of a triangle to the sine of its opposite angle is constant.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Statement</h3>
            <BlockMath math="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}" />
            
            <p className="mb-2">Alternative form:</p>
            <BlockMath math="\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Extended Law of Sines</h3>
            <p className="mb-2">The common ratio equals the diameter of the circumscribed circle:</p>
            <BlockMath math="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R" />
            <p className="mb-2">where R is the radius of the circumcircle.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">When to Use the Law of Sines</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>ASA (Angle-Side-Angle):</strong> Two angles and the included side</li>
              <li><strong>AAS (Angle-Angle-Side):</strong> Two angles and a non-included side</li>
              <li><strong>SSA (Side-Side-Angle):</strong> Two sides and an angle opposite one of them (ambiguous case)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">The Ambiguous Case (SSA)</h3>
            <p className="mb-2">
              When given two sides and an angle opposite one of them, there may be:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>No triangle:</strong> When the given side opposite the angle is too short</li>
              <li><strong>One triangle:</strong> When the angle is obtuse or the triangle is right</li>
              <li><strong>Two triangles:</strong> When the angle is acute and conditions allow</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Law of Cosines</h2>
        <p className="mb-4">
          The Law of Cosines relates the lengths of the sides of a triangle to the cosine of one of its angles. It generalizes the Pythagorean theorem.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Statement</h3>
            <BlockMath math="c^2 = a^2 + b^2 - 2ab\cos C" />
            <BlockMath math="b^2 = a^2 + c^2 - 2ac\cos B" />
            <BlockMath math="a^2 = b^2 + c^2 - 2bc\cos A" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Form (for finding angles)</h3>
            <BlockMath math="\cos A = \frac{b^2 + c^2 - a^2}{2bc}" />
            <BlockMath math="\cos B = \frac{a^2 + c^2 - b^2}{2ac}" />
            <BlockMath math="\cos C = \frac{a^2 + b^2 - c^2}{2ab}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">When to Use the Law of Cosines</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>SAS (Side-Angle-Side):</strong> Two sides and the included angle</li>
              <li><strong>SSS (Side-Side-Side):</strong> All three sides are known</li>
              <li>When the Law of Sines would be difficult to apply</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Connection to Pythagorean Theorem</h3>
            <p className="mb-2">
              When C = 90°, cos C = 0, and the Law of Cosines reduces to:
            </p>
            <BlockMath math="c^2 = a^2 + b^2" />
            <p className="mb-2">This is exactly the Pythagorean theorem!</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Solving Triangles: Strategy Guide</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-3">Given Information</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Law to Use</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3">Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">ASA or AAS</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Law of Sines</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Find third angle, then use Law of Sines for sides</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">SAS</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Law of Cosines</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Find third side, then use Law of Sines for angles</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">SSS</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Law of Cosines</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Find angles using Law of Cosines</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3">SSA</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Law of Sines</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">Check for ambiguous case, then solve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Area Formulas Using These Laws</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Law of Sines</h3>
            <BlockMath math="Area = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Heron's Formula (when all sides are known)</h3>
            <BlockMath math="Area = \sqrt{s(s-a)(s-b)(s-c)}" />
            <p className="mb-2">where <InlineMath math="s = \frac{a+b+c}{2}" /> is the semi-perimeter.</p>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: ASA Case (Law of Sines)</h3>
          <p className="mb-2">In triangle ABC, A = 30°, C = 45°, and b = 10. Find a, c, and B.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>First, find angle B:</p>
            <BlockMath math="B = 180° - A - C = 180° - 30° - 45° = 105°" />
            
            <p>Using the Law of Sines:</p>
            <BlockMath math="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}" />
            
            <p>Find side a:</p>
            <BlockMath math="\frac{a}{\sin 30°} = \frac{10}{\sin 105°}" />
            <BlockMath math="a = \frac{10 \sin 30°}{\sin 105°} = \frac{10 \times 0.5}{0.966} = 5.18" />
            
            <p>Find side c:</p>
            <BlockMath math="\frac{c}{\sin 45°} = \frac{10}{\sin 105°}" />
            <BlockMath math="c = \frac{10 \sin 45°}{\sin 105°} = \frac{10 \times 0.707}{0.966} = 7.32" />
            
            <p><strong>Answer:</strong> B = 105°, a ≈ 5.18, c ≈ 7.32</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: SAS Case (Law of Cosines)</h3>
          <p className="mb-2">In triangle ABC, a = 8, b = 6, and C = 60°. Find c, A, and B.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>First, find side c using the Law of Cosines:</p>
            <BlockMath math="c^2 = a^2 + b^2 - 2ab\cos C" />
            <BlockMath math="c^2 = 8^2 + 6^2 - 2(8)(6)\cos 60°" />
            <BlockMath math="c^2 = 64 + 36 - 96(0.5) = 100 - 48 = 52" />
            <BlockMath math="c = \sqrt{52} = 2\sqrt{13} ≈ 7.21" />
            
            <p>Now find angle A using the Law of Cosines:</p>
            <BlockMath math="\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{36 + 52 - 64}{2(6)(2\sqrt{13})} = \frac{24}{24\sqrt{13}} = \frac{1}{\sqrt{13}}" />
            <BlockMath math="A = \cos^{-1}\left(\frac{1}{\sqrt{13}}\right) ≈ 73.9°" />
            
            <p>Find angle B:</p>
            <BlockMath math="B = 180° - A - C = 180° - 73.9° - 60° = 46.1°" />
            
            <p><strong>Answer:</strong> c ≈ 7.21, A ≈ 73.9°, B ≈ 46.1°</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: SSS Case (Law of Cosines)</h3>
          <p className="mb-2">In triangle ABC, a = 5, b = 7, and c = 9. Find all angles.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Find angle A:</p>
            <BlockMath math="\cos A = \frac{b^2 + c^2 - a^2}{2bc} = \frac{49 + 81 - 25}{2(7)(9)} = \frac{105}{126} = \frac{5}{6}" />
            <BlockMath math="A = \cos^{-1}\left(\frac{5}{6}\right) ≈ 33.6°" />
            
            <p>Find angle B:</p>
            <BlockMath math="\cos B = \frac{a^2 + c^2 - b^2}{2ac} = \frac{25 + 81 - 49}{2(5)(9)} = \frac{57}{90} = \frac{19}{30}" />
            <BlockMath math="B = \cos^{-1}\left(\frac{19}{30}\right) ≈ 50.8°" />
            
            <p>Find angle C:</p>
            <BlockMath math="C = 180° - A - B = 180° - 33.6° - 50.8° = 95.6°" />
            
            <p><strong>Answer:</strong> A ≈ 33.6°, B ≈ 50.8°, C ≈ 95.6°</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: SSA Ambiguous Case</h3>
          <p className="mb-2">In triangle ABC, a = 6, b = 8, and A = 30°. Find the possible triangles.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using the Law of Sines to find angle B:</p>
            <BlockMath math="\frac{\sin B}{b} = \frac{\sin A}{a}" />
            <BlockMath math="\sin B = \frac{b \sin A}{a} = \frac{8 \sin 30°}{6} = \frac{8 \times 0.5}{6} = \frac{2}{3}" />
            
            <p>Since sin B = 2/3 ≈ 0.667, there are two possible angles:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>B₁ = sin⁻¹(2/3) ≈ 41.8°</li>
              <li>B₂ = 180° - 41.8° = 138.2°</li>
            </ul>
            
            <p><strong>Triangle 1:</strong> B₁ = 41.8°</p>
            <p>C₁ = 180° - 30° - 41.8° = 108.2°</p>
            <p>c₁ = (6 sin 108.2°)/sin 30° = (6 × 0.949)/0.5 = 11.39</p>
            
            <p><strong>Triangle 2:</strong> B₂ = 138.2°</p>
            <p>C₂ = 180° - 30° - 138.2° = 11.8°</p>
            <p>c₂ = (6 sin 11.8°)/sin 30° = (6 × 0.204)/0.5 = 2.45</p>
            
            <p><strong>Answer:</strong> Two triangles exist with the given conditions.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Finding Area</h3>
          <p className="mb-2">Find the area of triangle ABC where a = 12, b = 15, and C = 75°.</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using the area formula:</p>
            <BlockMath math="Area = \frac{1}{2}ab\sin C" />
            <BlockMath math="Area = \frac{1}{2}(12)(15)\sin 75°" />
            <BlockMath math="Area = \frac{1}{2}(180)(0.966) = 90 × 0.966 = 86.94" />
            
            <p><strong>Answer:</strong> The area is approximately 86.94 square units.</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Real-World Application</h3>
          <p className="mb-2">Two ships leave a port at the same time. One travels at 15 mph in a direction 40° north of east, and the other travels at 20 mph in a direction 70° north of east. How far apart are they after 2 hours?</p>
          
          <div className="space-y-2">
            <p><strong>Solution:</strong></p>
            <p>After 2 hours:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ship 1 has traveled: 15 × 2 = 30 miles</li>
              <li>Ship 2 has traveled: 20 × 2 = 40 miles</li>
              <li>Angle between their paths: 70° - 40° = 30°</li>
            </ul>
            
            <p>Using the Law of Cosines:</p>
            <BlockMath math="d^2 = 30^2 + 40^2 - 2(30)(40)\cos 30°" />
            <BlockMath math="d^2 = 900 + 1600 - 2400(\frac{\sqrt{3}}{2})" />
            <BlockMath math="d^2 = 2500 - 2400(0.866) = 2500 - 2078.4 = 421.6" />
            <BlockMath math="d = \sqrt{421.6} ≈ 20.5 \text{ miles}" />
            
            <p><strong>Answer:</strong> The ships are approximately 20.5 miles apart after 2 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}