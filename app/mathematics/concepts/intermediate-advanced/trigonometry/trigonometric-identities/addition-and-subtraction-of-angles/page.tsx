import Breadcrumb from "@/components/Breadcrumb";

export default function AdditionAndSubtractionOfAngles() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Formulas", href: "/mathematics/" },
    { label: "Trigonometry", href: "/mathematics/concepts/intermediate-advanced/trigonometry" },
    {
      label: "Trignometric Identities",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/trigonometric-identities",
    },
    {
      label: "Addition and Subtraction of Angles",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/trigonometric-identities/addition-and-subtraction-of-angles",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Addition and Subtraction of Angles</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Addition Formulas</h2>
        <div className="mb-6 space-y-3 text-lg">
          <p><strong>sin(A + B) = sin A cos B + cos A sin B</strong></p>
          <p><strong>cos(A + B) = cos A cos B - sin A sin B</strong></p>
          <p><strong>tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</strong></p>
        </div>

        <h2 className="mb-4 text-2xl font-semibold">Subtraction Formulas</h2>
        <div className="mb-6 space-y-3 text-lg">
          <p><strong>sin(A - B) = sin A cos B - cos A sin B</strong></p>
          <p><strong>cos(A - B) = cos A cos B + sin A sin B</strong></p>
          <p><strong>tan(A - B) = (tan A - tan B) / (1 + tan A tan B)</strong></p>
        </div>

        <h2 className="mb-4 text-2xl font-semibold">Explanation</h2>
        <p className="mb-4">
          The addition and subtraction formulas for trigonometric functions allow us to find the exact values
          of trigonometric functions for angles that can be expressed as the sum or difference of two known angles.
          These identities are fundamental in trigonometry and are used extensively in calculus, physics, and engineering.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Key Applications</h2>
        <ul className="mb-6 list-disc pl-6 space-y-2">
          <li>Finding exact values for angles like 15°, 75°, 105°, etc.</li>
          <li>Simplifying complex trigonometric expressions</li>
          <li>Solving trigonometric equations</li>
          <li>Deriving other trigonometric identities</li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example 1: Find sin(75°)</h3>
            <p className="mb-2">Since 75° = 45° + 30°, we can use the addition formula:</p>
            <p className="mb-2">sin(75°) = sin(45° + 30°)</p>
            <p className="mb-2">= sin(45°)cos(30°) + cos(45°)sin(30°)</p>
            <p className="mb-2">= (√2/2)(√3/2) + (√2/2)(1/2)</p>
            <p>= (√6 + √2)/4</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example 2: Find cos(15°)</h3>
            <p className="mb-2">Since 15° = 45° - 30°, we can use the subtraction formula:</p>
            <p className="mb-2">cos(15°) = cos(45° - 30°)</p>
            <p className="mb-2">= cos(45°)cos(30°) + sin(45°)sin(30°)</p>
            <p className="mb-2">= (√2/2)(√3/2) + (√2/2)(1/2)</p>
            <p>= (√6 + √2)/4</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example 3: Simplify sin(x + π/4)</h3>
            <p className="mb-2">Using the addition formula:</p>
            <p className="mb-2">sin(x + π/4) = sin(x)cos(π/4) + cos(x)sin(π/4)</p>
            <p className="mb-2">= sin(x)(√2/2) + cos(x)(√2/2)</p>
            <p>= (√2/2)(sin(x) + cos(x))</p>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-semibold">Memory Tips</h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <ul className="space-y-2">
            <li><strong>For sine:</strong> "Sine of sum = sine-cosine + cosine-sine"</li>
            <li><strong>For cosine:</strong> "Cosine of sum = cosine-cosine - sine-sine"</li>
            <li><strong>For tangent:</strong> "Add tangents on top, subtract their product from 1 on bottom"</li>
            <li><strong>Subtraction:</strong> Just change the middle sign in each formula</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
