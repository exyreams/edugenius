"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function DelambreGaussAnalogies() {
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
      label: "Delambre (Gauss) Analogies",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/delambre-gauss-analogies",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Delambre (Gauss) Analogies</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The Delambre (also known as Gauss) Analogies are a set of four trigonometric identities that relate the sides and angles of any triangle. These formulas are particularly useful in solving triangles when certain combinations of sides and angles are known.
        </p>
        
        <p className="mb-4">
          Named after French mathematician Jean Baptiste Joseph Delambre and German mathematician Carl Friedrich Gauss, these analogies provide elegant relationships that are especially valuable in spherical trigonometry and navigation.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">The Four Delambre Analogies</h2>
        <p className="mb-4">
          For a triangle with sides a, b, c and opposite angles A, B, C respectively, the Delambre Analogies are:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">First Analogy</h3>
            <BlockMath math="\frac{\sin\left(\frac{A-B}{2}\right)}{\cos\left(\frac{C}{2}\right)} = \frac{a-b}{c}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Second Analogy</h3>
            <BlockMath math="\frac{\cos\left(\frac{A-B}{2}\right)}{\sin\left(\frac{C}{2}\right)} = \frac{a+b}{c}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Third Analogy</h3>
            <BlockMath math="\frac{\sin\left(\frac{A+B}{2}\right)}{\cos\left(\frac{C}{2}\right)} = \frac{a+b}{c}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Fourth Analogy</h3>
            <BlockMath math="\frac{\cos\left(\frac{A+B}{2}\right)}{\sin\left(\frac{C}{2}\right)} = \frac{c}{a+b}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Alternative Forms</h2>
        <p className="mb-4">
          The Delambre Analogies can also be written in terms of the semi-perimeter s = (a + b + c)/2:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Semi-perimeter</h3>
            <BlockMath math="\frac{\sin\left(\frac{A-B}{2}\right)}{\sin\left(\frac{C}{2}\right)} = \frac{s-c}{s-a} \cdot \frac{s-c}{s-b}" />
            <BlockMath math="\frac{\cos\left(\frac{A-B}{2}\right)}{\cos\left(\frac{C}{2}\right)} = \frac{s}{s-c}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Forms</h3>
            <BlockMath math="\tan\left(\frac{A-B}{2}\right) = \frac{a-b}{a+b} \cot\left(\frac{C}{2}\right)" />
            <BlockMath math="\tan\left(\frac{A+B}{2}\right) = \frac{a+b}{c-a-b} \cot\left(\frac{C}{2}\right)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Derivation</h2>
        <p className="mb-4">
          The Delambre Analogies can be derived from the Law of Sines and various trigonometric identities. Here's a brief derivation of the first analogy:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Starting with the Law of Sines</h3>
            <BlockMath math="\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R" />
            <p className="mb-2">where R is the circumradius of the triangle.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using Sum-to-Product Identities</h3>
            <p className="mb-2">We can express:</p>
            <BlockMath math="a - b = 2R(\sin A - \sin B)" />
            <BlockMath math="a + b = 2R(\sin A + \sin B)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Applying Trigonometric Identities</h3>
            <BlockMath math="\sin A - \sin B = 2\cos\left(\frac{A+B}{2}\right)\sin\left(\frac{A-B}{2}\right)" />
            <BlockMath math="\sin A + \sin B = 2\sin\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Final Steps</h3>
            <p className="mb-2">Since A + B + C = π, we have A + B = π - C, so:</p>
            <BlockMath math="\sin\left(\frac{A+B}{2}\right) = \sin\left(\frac{\pi-C}{2}\right) = \cos\left(\frac{C}{2}\right)" />
            <BlockMath math="\cos\left(\frac{A+B}{2}\right) = \cos\left(\frac{\pi-C}{2}\right) = \sin\left(\frac{C}{2}\right)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Applications</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Triangle Solving</h3>
            <p className="mb-2">
              The Delambre Analogies are particularly useful when you know:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Two sides and the included angle (SAS case)</li>
              <li>Two angles and the included side (ASA case)</li>
              <li>All three sides (SSS case)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Spherical Trigonometry</h3>
            <p className="mb-2">
              In spherical trigonometry, analogous formulas exist for spherical triangles, making these relationships fundamental in:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Navigation and GPS systems</li>
              <li>Astronomy and celestial mechanics</li>
              <li>Geodesy and cartography</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Computational Advantages</h3>
            <p className="mb-2">
              These analogies often provide more numerically stable computations compared to direct application of the Law of Cosines, especially for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Nearly equilateral triangles</li>
              <li>Very obtuse or very acute triangles</li>
              <li>High-precision calculations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Finding Angle Differences</h3>
          <p className="mb-2">
            Given a triangle with sides a = 7, b = 5, c = 8, find the difference A - B.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <p className="mb-2">First, find angle C using the Law of Cosines:</p>
              <BlockMath math="c^2 = a^2 + b^2 - 2ab\cos C" />
              <BlockMath math="64 = 49 + 25 - 70\cos C" />
              <BlockMath math="\cos C = \frac{49 + 25 - 64}{70} = \frac{10}{70} = \frac{1}{7}" />
              <BlockMath math="C = \arccos\left(\frac{1}{7}\right) \approx 81.79°" />
            </div>
            
            <div>
              <p className="mb-2">Now use the first Delambre Analogy:</p>
              <BlockMath math="\frac{\sin\left(\frac{A-B}{2}\right)}{\cos\left(\frac{C}{2}\right)} = \frac{a-b}{c}" />
              <BlockMath math="\sin\left(\frac{A-B}{2}\right) = \frac{7-5}{8} \cdot \cos\left(\frac{81.79°}{2}\right)" />
              <BlockMath math="\sin\left(\frac{A-B}{2}\right) = \frac{2}{8} \cdot \cos(40.895°) = 0.25 \cdot 0.756 = 0.189" />
              <BlockMath math="\frac{A-B}{2} = \arcsin(0.189) \approx 10.9°" />
              <BlockMath math="A - B \approx 21.8°" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Verification of Triangle Properties</h3>
          <p className="mb-2">
            For an equilateral triangle with all sides equal to s, verify that the Delambre Analogies give consistent results.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <p className="mb-2">In an equilateral triangle: a = b = c = s and A = B = C = 60°</p>
              
              <p className="mb-2">First Analogy:</p>
              <BlockMath math="\frac{\sin\left(\frac{60° - 60°}{2}\right)}{\cos\left(\frac{60°}{2}\right)} = \frac{s - s}{s}" />
              <BlockMath math="\frac{\sin(0°)}{\cos(30°)} = \frac{0}{s}" />
              <BlockMath math="\frac{0}{\frac{\sqrt{3}}{2}} = 0 \checkmark" />
              
              <p className="mb-2">Second Analogy:</p>
              <BlockMath math="\frac{\cos\left(\frac{60° - 60°}{2}\right)}{\sin\left(\frac{60°}{2}\right)} = \frac{s + s}{s}" />
              <BlockMath math="\frac{\cos(0°)}{\sin(30°)} = \frac{2s}{s}" />
              <BlockMath math="\frac{1}{\frac{1}{2}} = 2 \checkmark" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 3: Practical Navigation Problem</h3>
          <p className="mb-2">
            A ship travels 50 km northeast, then 30 km southeast. Find the angle between the two legs of the journey.
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Solution:</h4>
              <p className="mb-2">This forms a triangle with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Side a = 50 km (first leg)</li>
                <li>Side b = 30 km (second leg)</li>
                <li>Angle C = 90° (angle between northeast and southeast directions)</li>
              </ul>
              
              <p className="mb-2">Find side c using Pythagorean theorem:</p>
              <BlockMath math="c = \sqrt{a^2 + b^2} = \sqrt{50^2 + 30^2} = \sqrt{2500 + 900} = \sqrt{3400} \approx 58.31 \text{ km}" />
              
              <p className="mb-2">Using the second Delambre Analogy to find A - B:</p>
              <BlockMath math="\frac{\cos\left(\frac{A-B}{2}\right)}{\sin\left(\frac{90°}{2}\right)} = \frac{50 + 30}{58.31}" />
              <BlockMath math="\frac{\cos\left(\frac{A-B}{2}\right)}{\sin(45°)} = \frac{80}{58.31}" />
              <BlockMath math="\cos\left(\frac{A-B}{2}\right) = \frac{80}{58.31} \cdot \frac{\sqrt{2}}{2} \approx 0.970" />
              <BlockMath math="\frac{A-B}{2} \approx 13.6°, \text{ so } A - B \approx 27.2°" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}