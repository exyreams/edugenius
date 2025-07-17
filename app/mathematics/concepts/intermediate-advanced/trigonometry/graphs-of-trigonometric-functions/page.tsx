"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function GraphsOfTrigonometricFunctions() {
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
      label: "Graphs of Trigonometric Functions",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/graphs-of-trigonometric-functions",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Graphs of Trigonometric Functions</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Understanding the graphs of trigonometric functions is essential for visualizing 
          their behavior, solving equations, and applying them to real-world problems. 
          The graphs reveal important properties such as periodicity, amplitude, and symmetry.
        </p>
        <p className="mb-4">
          This chapter covers the basic graphs of sine, cosine, and tangent functions, 
          as well as their transformations including shifts, stretches, and reflections.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Basic Trigonometric Graphs</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sine Function: y = sin(x)</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Properties:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Domain: All real numbers (-∞, ∞)</li>
                <li>Range: [-1, 1]</li>
                <li>Period: 2π</li>
                <li>Amplitude: 1</li>
                <li>x-intercepts: x = nπ, where n is any integer</li>
                <li>Maximum points: (π/2 + 2nπ, 1)</li>
                <li>Minimum points: (3π/2 + 2nπ, -1)</li>
                <li>Odd function: sin(-x) = -sin(x)</li>
              </ul>
            </div>
            <p className="mb-2">
              The sine curve is a smooth, continuous wave that oscillates between -1 and 1. 
              It starts at the origin (0,0), reaches its maximum at π/2, returns to zero at π, 
              reaches its minimum at 3π/2, and completes one cycle at 2π.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosine Function: y = cos(x)</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Properties:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Domain: All real numbers (-∞, ∞)</li>
                <li>Range: [-1, 1]</li>
                <li>Period: 2π</li>
                <li>Amplitude: 1</li>
                <li>x-intercepts: x = π/2 + nπ, where n is any integer</li>
                <li>Maximum points: (2nπ, 1)</li>
                <li>Minimum points: (π + 2nπ, -1)</li>
                <li>Even function: cos(-x) = cos(x)</li>
              </ul>
            </div>
            <p className="mb-2">
              The cosine curve is identical to the sine curve but shifted π/2 units to the left. 
              It starts at its maximum value (0,1), decreases to zero at π/2, reaches its minimum at π, 
              and returns to its maximum at 2π.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tangent Function: y = tan(x)</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Key Properties:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Domain: All real numbers except x = π/2 + nπ</li>
                <li>Range: All real numbers (-∞, ∞)</li>
                <li>Period: π</li>
                <li>No amplitude (unbounded)</li>
                <li>x-intercepts: x = nπ, where n is any integer</li>
                <li>Vertical asymptotes: x = π/2 + nπ</li>
                <li>Odd function: tan(-x) = -tan(x)</li>
              </ul>
            </div>
            <p className="mb-2">
              The tangent function has a different shape from sine and cosine. It consists of 
              separate branches between vertical asymptotes, with each branch increasing from 
              -∞ to +∞ over an interval of length π.
            </p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Reciprocal Function Graphs</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cosecant Function: y = csc(x) = 1/sin(x)</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-1">
                <li>Domain: All real numbers except x = nπ</li>
                <li>Range: (-∞, -1] ∪ [1, ∞)</li>
                <li>Period: 2π</li>
                <li>Vertical asymptotes at x = nπ (where sin(x) = 0)</li>
                <li>U-shaped branches between asymptotes</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Secant Function: y = sec(x) = 1/cos(x)</h3>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-1">
                <li>Domain: All real numbers except x = π/2 + nπ</li>
                <li>Range: (-∞, -1] ∪ [1, ∞)</li>
                <li>Period: 2π</li>
                <li>Vertical asymptotes at x = π/2 + nπ (where cos(x) = 0)</li>
                <li>U-shaped branches between asymptotes</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Cotangent Function: y = cot(x) = 1/tan(x)</h3>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-1">
                <li>Domain: All real numbers except x = nπ</li>
                <li>Range: All real numbers (-∞, ∞)</li>
                <li>Period: π</li>
                <li>Vertical asymptotes at x = nπ (where sin(x) = 0)</li>
                <li>Decreasing function on each interval</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Transformations of Trigonometric Functions</h2>
        <p className="mb-4">
          The general form of a transformed trigonometric function is:
        </p>
        <BlockMath math="y = A \sin(B(x - C)) + D" />
        <BlockMath math="y = A \cos(B(x - C)) + D" />
        <BlockMath math="y = A \tan(B(x - C)) + D" />
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Amplitude (A)</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>|A| determines the amplitude (maximum distance from the midline)</li>
                <li>If A {">"} 0, the function is not reflected</li>
                <li>If A {"<"} 0, the function is reflected across the x-axis</li>
                <li>For sine and cosine: amplitude = |A|</li>
                <li>Tangent function has no amplitude (it's unbounded)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Period and Frequency (B)</h3>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>B affects the period of the function</li>
                <li>For sine and cosine: Period = 2π/|B|</li>
                <li>For tangent: Period = π/|B|</li>
                <li>If |B| {">"} 1, the function is compressed horizontally</li>
                <li>If 0 {"<"} |B| {"<"} 1, the function is stretched horizontally</li>
                <li>If B {"<"} 0, the function is reflected across the y-axis</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase Shift (C)</h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>C represents the horizontal shift</li>
                <li>If C {">"} 0, the function shifts C units to the right</li>
                <li>If C {"<"} 0, the function shifts |C| units to the left</li>
                <li>Phase shift = C (when in the form B(x - C))</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Vertical Shift (D)</h3>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2">
                <li>D represents the vertical shift</li>
                <li>If D {">"} 0, the function shifts D units up</li>
                <li>If D {"<"} 0, the function shifts |D| units down</li>
                <li>The midline of the function becomes y = D</li>
                <li>For sine and cosine: Range becomes [D - |A|, D + |A|]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Key Relationships and Identities</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Phase Relationships</h3>
            <div className="space-y-2">
              <BlockMath math="\cos(x) = \sin\left(x + \frac{\pi}{2}\right)" />
              <BlockMath math="\sin(x) = \cos\left(x - \frac{\pi}{2}\right)" />
              <p className="text-sm">Cosine is sine shifted π/2 units to the left</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Symmetry Properties</h3>
            <div className="space-y-2">
              <p><strong>Even Functions (symmetric about y-axis):</strong></p>
              <BlockMath math="\cos(-x) = \cos(x)" />
              <BlockMath math="\sec(-x) = \sec(x)" />
              
              <p><strong>Odd Functions (symmetric about origin):</strong></p>
              <BlockMath math="\sin(-x) = -\sin(x)" />
              <BlockMath math="\tan(-x) = -\tan(x)" />
              <BlockMath math="\csc(-x) = -\csc(x)" />
              <BlockMath math="\cot(-x) = -\cot(x)" />
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Analyzing a Transformed Sine Function</h3>
            <p className="mb-2">Analyze the function: y = 3sin(2x - π/3) + 1</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Rewrite in standard form: y = 3sin(2(x - π/6)) + 1</p>
              
              <p><strong>Amplitude:</strong> |A| = |3| = 3</p>
              <p><strong>Period:</strong> 2π/|B| = 2π/2 = π</p>
              <p><strong>Phase Shift:</strong> C = π/6 (right)</p>
              <p><strong>Vertical Shift:</strong> D = 1 (up)</p>
              <p><strong>Range:</strong> [1 - 3, 1 + 3] = [-2, 4]</p>
              <p><strong>Midline:</strong> y = 1</p>
              
              <p><strong>Key Points in one period [π/6, 7π/6]:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Start: (π/6, 1)</li>
                <li>Maximum: (π/6 + π/4, 4) = (5π/12, 4)</li>
                <li>Middle: (π/6 + π/2, 1) = (2π/3, 1)</li>
                <li>Minimum: (π/6 + 3π/4, -2) = (11π/12, -2)</li>
                <li>End: (π/6 + π, 1) = (7π/6, 1)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Finding the Equation from a Graph</h3>
            <p className="mb-2">
              A cosine function has amplitude 2, period π/2, is shifted π/8 units to the right, 
              and 3 units down. Write its equation.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>General form: y = A cos(B(x - C)) + D</p>
              
              <p><strong>Amplitude:</strong> A = 2</p>
              <p><strong>Period:</strong> π/2 = 2π/B, so B = 4</p>
              <p><strong>Phase Shift:</strong> C = π/8 (right)</p>
              <p><strong>Vertical Shift:</strong> D = -3 (down)</p>
              
              <p><strong>Equation:</strong></p>
              <BlockMath math="y = 2\cos(4(x - \pi/8)) - 3" />
              <BlockMath math="y = 2\cos(4x - \pi/2) - 3" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Graphing a Tangent Function</h3>
            <p className="mb-2">Graph y = -tan(x/2 + π/4) and identify key features.</p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Rewrite: y = -tan((1/2)(x + π/2))</p>
              
              <p><strong>Analysis:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>A = -1 (reflection across x-axis)</li>
                <li>B = 1/2, so period = π/(1/2) = 2π</li>
                <li>Phase shift = π/2 units left</li>
                <li>No vertical shift</li>
              </ul>
              
              <p><strong>Vertical Asymptotes:</strong></p>
              <p>Occur when x/2 + π/4 = π/2 + nπ</p>
              <p>x/2 = π/4 + nπ</p>
              <p>x = π/2 + 2nπ</p>
              
              <p><strong>x-intercepts:</strong></p>
              <p>Occur when x/2 + π/4 = nπ</p>
              <p>x = -π/2 + 2nπ</p>
              
              <p>The graph is the standard tangent function stretched horizontally by factor 2, 
              shifted π/2 units left, and reflected across the x-axis.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: Combining Transformations</h3>
            <p className="mb-2">
              Describe the transformations needed to obtain y = -2cos(3x) + 4 from y = cos(x).
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Starting with y = cos(x), apply transformations in order:</p>
              
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Horizontal compression:</strong> y = cos(3x)
                   <br />Period changes from 2π to 2π/3</li>
                
                <li><strong>Vertical stretch and reflection:</strong> y = -2cos(3x)
                   <br />Amplitude becomes 2, function reflected across x-axis</li>
                
                <li><strong>Vertical shift:</strong> y = -2cos(3x) + 4
                   <br />Function shifts 4 units up</li>
              </ol>
              
              <p><strong>Final Properties:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Amplitude: 2</li>
                <li>Period: 2π/3</li>
                <li>Range: [2, 6]</li>
                <li>Midline: y = 4</li>
                <li>Reflected across x-axis</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 5: Real-World Application</h3>
            <p className="mb-2">
              The height of a Ferris wheel car above ground is modeled by 
              h(t) = 25sin(π/6 · t) + 30, where t is time in minutes. 
              Analyze this function.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              
              <p><strong>Physical Interpretation:</strong></p>
              <ul className="list-disc list-inside space-y-2">
                <li>Amplitude = 25 feet (radius of the wheel)</li>
                <li>Period = 2π/(π/6) = 12 minutes (time for one revolution)</li>
                <li>Vertical shift = 30 feet (height of center above ground)</li>
                <li>Range: [5, 55] feet (minimum and maximum heights)</li>
              </ul>
              
              <p><strong>Key Times:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>t = 0: h = 30 feet (starting at center height)</li>
                <li>t = 3: h = 55 feet (maximum height)</li>
                <li>t = 6: h = 30 feet (back to center)</li>
                <li>t = 9: h = 5 feet (minimum height)</li>
                <li>t = 12: h = 30 feet (complete one revolution)</li>
              </ul>
              
              <p>The Ferris wheel has a radius of 25 feet, its center is 30 feet above ground, 
              and it takes 12 minutes to complete one full rotation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}