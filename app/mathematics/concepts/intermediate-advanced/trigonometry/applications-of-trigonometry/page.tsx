"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function ApplicationsOfTrigonometry() {
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
      label: "Applications of Trigonometry",
      href: "/mathematics/concepts/intermediate-advanced/trigonometry/applications-of-trigonometry",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Applications of Trigonometry</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p className="mb-4">
          Trigonometry has extensive applications across various fields including physics, engineering, 
          astronomy, navigation, architecture, and many other areas. This chapter explores the practical 
          applications of trigonometric concepts and how they solve real-world problems.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Heights and Distances</h2>
        <p className="mb-4">
          One of the most common applications of trigonometry is finding heights and distances 
          that cannot be measured directly.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Angle of Elevation and Depression</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Angle of Elevation:</strong> The angle above the horizontal when looking up at an object</li>
              <li><strong>Angle of Depression:</strong> The angle below the horizontal when looking down at an object</li>
            </ul>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">Key Relationships:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>tan(angle) = opposite/adjacent = height/horizontal distance</li>
                <li>sin(angle) = opposite/hypotenuse = height/line of sight</li>
                <li>cos(angle) = adjacent/hypotenuse = horizontal distance/line of sight</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Common Problem Types</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Finding the height of buildings, towers, or mountains</li>
              <li>Determining distances across rivers or valleys</li>
              <li>Calculating the range of projectiles</li>
              <li>Measuring the depth of wells or craters</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Navigation and Surveying</h2>
        <p className="mb-4">
          Trigonometry is essential in navigation, surveying, and mapping applications.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Bearing and Direction</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>True Bearing:</strong> Angle measured clockwise from north (0° to 360°)</li>
              <li><strong>Compass Bearing:</strong> Angle from north or south toward east or west</li>
              <li><strong>Magnetic Bearing:</strong> Bearing relative to magnetic north</li>
            </ul>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-semibold mb-2">Navigation Formulas:</p>
              <BlockMath math="\text{Distance} = \sqrt{(\Delta x)^2 + (\Delta y)^2}" />
              <BlockMath math="\text{Bearing} = \tan^{-1}\left(\frac{\Delta x}{\Delta y}\right)" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Triangulation</h3>
            <p className="mb-2">
              Method used in surveying to determine distances and positions using triangles.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Measure angles from known positions</li>
              <li>Use Law of Sines and Law of Cosines</li>
              <li>Calculate unknown distances and positions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Physics Applications</h2>
        <p className="mb-4">
          Trigonometry is fundamental in many areas of physics.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Wave Motion</h3>
            <p className="mb-2">Trigonometric functions describe periodic phenomena:</p>
            <BlockMath math="y = A\sin(\omega t + \phi)" />
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>A = amplitude</li>
              <li>ω = angular frequency</li>
              <li>φ = phase constant</li>
              <li>t = time</li>
            </ul>
            
            <p className="mb-2">Applications include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Sound waves and acoustics</li>
              <li>Light waves and optics</li>
              <li>Electromagnetic waves</li>
              <li>Mechanical vibrations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Projectile Motion</h3>
            <p className="mb-2">For a projectile launched at angle θ with initial velocity v₀:</p>
            <div className="space-y-2">
              <BlockMath math="x = v_0 \cos\theta \cdot t" />
              <BlockMath math="y = v_0 \sin\theta \cdot t - \frac{1}{2}gt^2" />
              <BlockMath math="\text{Range} = \frac{v_0^2 \sin(2\theta)}{g}" />
              <BlockMath math="\text{Maximum Height} = \frac{v_0^2 \sin^2\theta}{2g}" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Forces and Vectors</h3>
            <p className="mb-2">Resolving forces into components:</p>
            <BlockMath math="F_x = F \cos\theta" />
            <BlockMath math="F_y = F \sin\theta" />
            <BlockMath math="|F| = \sqrt{F_x^2 + F_y^2}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Engineering Applications</h2>
        <p className="mb-4">
          Engineers use trigonometry in design, analysis, and problem-solving.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Structural Engineering</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Analyzing forces in trusses and frameworks</li>
              <li>Calculating load distributions</li>
              <li>Designing roof slopes and angles</li>
              <li>Determining stress and strain in materials</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Electrical Engineering</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AC circuit analysis using phasors</li>
              <li>Signal processing and Fourier analysis</li>
              <li>Antenna design and radiation patterns</li>
              <li>Power calculations in three-phase systems</li>
            </ul>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">AC Circuit Example:</p>
              <BlockMath math="V(t) = V_0 \sin(\omega t + \phi)" />
              <BlockMath math="I(t) = I_0 \sin(\omega t + \phi - \theta)" />
              <p className="text-sm">where θ is the phase difference between voltage and current</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Mechanical Engineering</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Gear ratios and mechanical advantage</li>
              <li>Cam and linkage design</li>
              <li>Vibration analysis</li>
              <li>Fluid flow in pipes and channels</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Astronomy and Space Science</h2>
        <p className="mb-4">
          Trigonometry is crucial for understanding celestial mechanics and space navigation.
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Celestial Coordinates</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Right ascension and declination</li>
              <li>Altitude and azimuth</li>
              <li>Galactic coordinates</li>
              <li>Ecliptic coordinates</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Distance Measurements</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Parallax method for nearby stars</li>
              <li>Angular diameter and actual size relationships</li>
              <li>Orbital mechanics calculations</li>
            </ul>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-4">
              <p className="font-semibold mb-2">Parallax Distance Formula:</p>
              <BlockMath math="d = \frac{1}{p}" />
              <p className="text-sm">where d is distance in parsecs and p is parallax angle in arcseconds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Computer Graphics and Animation</h2>
        <p className="mb-4">
          Modern computer graphics heavily rely on trigonometric functions.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">2D Transformations</h3>
            <p className="mb-2">Rotation of point (x, y) by angle θ:</p>
            <BlockMath math="x' = x\cos\theta - y\sin\theta" />
            <BlockMath math="y' = x\sin\theta + y\cos\theta" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3D Graphics</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>3D rotations using rotation matrices</li>
              <li>Perspective projection</li>
              <li>Lighting calculations (dot products)</li>
              <li>Camera positioning and orientation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Animation</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Smooth interpolation between keyframes</li>
              <li>Circular and elliptical motion paths</li>
              <li>Oscillating movements</li>
              <li>Wave-like animations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Worked Examples</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Height of a Building</h3>
            <p className="mb-2">
              From a point 50 meters away from the base of a building, the angle of elevation 
              to the top is 60°. Find the height of the building.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Let h = height of the building</p>
              <p>Given: horizontal distance = 50 m, angle of elevation = 60°</p>
              
              <p>Using tangent ratio:</p>
              <BlockMath math="\tan(60°) = \frac{h}{50}" />
              <BlockMath math="h = 50 \times \tan(60°) = 50 \times \sqrt{3} = 50\sqrt{3} \approx 86.6 \text{ meters}" />
              
              <p><strong>Answer:</strong> The height of the building is 50√3 ≈ 86.6 meters.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Navigation Problem</h3>
            <p className="mb-2">
              A ship travels 30 km on a bearing of 040°, then 40 km on a bearing of 130°. 
              Find the distance and bearing from the starting point.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Using coordinate system with north as positive y-axis:</p>
              
              <p>First leg: 30 km at 040°</p>
              <p>x₁ = 30 sin(40°) ≈ 19.28 km</p>
              <p>y₁ = 30 cos(40°) ≈ 22.98 km</p>
              
              <p>Second leg: 40 km at 130°</p>
              <p>x₂ = 40 sin(130°) ≈ 30.64 km</p>
              <p>y₂ = 40 cos(130°) ≈ -25.71 km</p>
              
              <p>Final position:</p>
              <p>x = x₁ + x₂ = 19.28 + 30.64 = 49.92 km</p>
              <p>y = y₁ + y₂ = 22.98 - 25.71 = -2.73 km</p>
              
              <p>Distance from start:</p>
              <BlockMath math="d = \sqrt{x^2 + y^2} = \sqrt{49.92^2 + (-2.73)^2} \approx 50.0 \text{ km}" />
              
              <p>Bearing from start:</p>
              <BlockMath math="\theta = \tan^{-1}\left(\frac{49.92}{-2.73}\right) \approx 93.1°" />
              
              <p><strong>Answer:</strong> Distance ≈ 50.0 km, Bearing ≈ 093°</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 3: Projectile Motion</h3>
            <p className="mb-2">
              A projectile is launched at 45° with initial velocity 20 m/s. Find the range 
              and maximum height. (g = 9.8 m/s²)
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: θ = 45°, v₀ = 20 m/s, g = 9.8 m/s²</p>
              
              <p>Range formula:</p>
              <BlockMath math="R = \frac{v_0^2 \sin(2\theta)}{g} = \frac{20^2 \sin(90°)}{9.8} = \frac{400 \times 1}{9.8} \approx 40.8 \text{ m}" />
              
              <p>Maximum height formula:</p>
              <BlockMath math="H = \frac{v_0^2 \sin^2\theta}{2g} = \frac{20^2 \sin^2(45°)}{2 \times 9.8} = \frac{400 \times 0.5}{19.6} \approx 10.2 \text{ m}" />
              
              <p><strong>Answer:</strong> Range ≈ 40.8 m, Maximum height ≈ 10.2 m</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 4: AC Circuit Analysis</h3>
            <p className="mb-2">
              In an AC circuit, voltage V = 120 sin(100πt) volts and current I = 8 sin(100πt - π/4) amperes. 
              Find the average power consumed.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: V = 120 sin(100πt), I = 8 sin(100πt - π/4)</p>
              
              <p>RMS values:</p>
              <p>V_rms = 120/√2 ≈ 84.85 V</p>
              <p>I_rms = 8/√2 ≈ 5.66 A</p>
              
              <p>Phase difference: φ = π/4 = 45°</p>
              
              <p>Average power:</p>
              <BlockMath math="P = V_{rms} \times I_{rms} \times \cos\phi = 84.85 \times 5.66 \times \cos(45°)" />
              <BlockMath math="P = 84.85 \times 5.66 \times \frac{1}{\sqrt{2}} \approx 339.3 \text{ watts}" />
              
              <p><strong>Answer:</strong> Average power ≈ 339.3 watts</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 5: Stellar Parallax</h3>
            <p className="mb-2">
              A star has a parallax angle of 0.1 arcseconds. Calculate its distance in parsecs and light-years.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: parallax angle p = 0.1 arcseconds</p>
              
              <p>Distance in parsecs:</p>
              <BlockMath math="d = \frac{1}{p} = \frac{1}{0.1} = 10 \text{ parsecs}" />
              
              <p>Converting to light-years (1 parsec ≈ 3.26 light-years):</p>
              <p>d = 10 × 3.26 = 32.6 light-years</p>
              
              <p><strong>Answer:</strong> Distance = 10 parsecs = 32.6 light-years</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 6: 2D Rotation</h3>
            <p className="mb-2">
              Rotate the point (3, 4) by 30° counterclockwise about the origin.
            </p>
            
            <div className="space-y-2">
              <p><strong>Solution:</strong></p>
              <p>Given: (x, y) = (3, 4), θ = 30°</p>
              
              <p>Rotation formulas:</p>
              <BlockMath math="x' = x\cos\theta - y\sin\theta" />
              <BlockMath math="y' = x\sin\theta + y\cos\theta" />
              
              <p>Calculating:</p>
              <p>x' = 3 cos(30°) - 4 sin(30°) = 3(√3/2) - 4(1/2) = 3√3/2 - 2 ≈ 0.598</p>
              <p>y' = 3 sin(30°) + 4 cos(30°) = 3(1/2) + 4(√3/2) = 1.5 + 2√3 ≈ 4.964</p>
              
              <p><strong>Answer:</strong> New coordinates ≈ (0.598, 4.964)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}