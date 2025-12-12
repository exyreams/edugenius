"use client";

import { useState } from "react";
import { RadioIcon, Clock, TrendingDown, AlertTriangle } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for radioactivity
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Nuclear Chemistry", href: "/chemistry/intermediate-advanced/nuclear-chemistry" },
  { label: "Radioactivity", href: "/chemistry/intermediate-advanced/nuclear-chemistry/radioactivity" }
];

export default function Radioactivity() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-4xl font-bold text-transparent dark:from-red-600 dark:to-orange-600 sm:text-5xl md:text-6xl">
          Radioactivity
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the spontaneous decay of unstable atomic nuclei, the types of radiation 
          emitted, and the mathematical laws governing radioactive decay processes.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Introduction */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent dark:from-red-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Understanding Radioactive Decay
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <RadioIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Spontaneous Nuclear Transformation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Radioactivity is the spontaneous emission of radiation from unstable atomic nuclei. 
              This process transforms one element into another while releasing energy in the form 
              of alpha particles, beta particles, or gamma rays.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Radioactive Decay */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent dark:from-red-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Types of Radioactive Decay
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Alpha (α) Decay
            </h3>
            <div className="space-y-3">
              <div className="bg-red-50 dark:bg-red-900 p-3 rounded">
                <p className="text-red-800 dark:text-red-200 text-sm font-medium mb-1">
                  General Equation:
                </p>
                <code className="text-red-700 dark:text-red-300 text-sm">
                  ᴬX → ᴬ⁻⁴Y + ⁴He²⁺
                </code>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900 p-3 rounded">
                <p className="text-pink-800 dark:text-pink-200 text-sm font-medium mb-1">
                  Example:
                </p>
                <code className="text-pink-700 dark:text-pink-300 text-sm">
                  ²³⁸U → ²³⁴Th + ⁴He²⁺
                </code>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Decreases mass number by 4</li>
                <li>• Decreases atomic number by 2</li>
                <li>• Common in heavy nuclei (A &gt; 200)</li>
                <li>• Low penetrating power</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Beta (β⁻) Decay
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-1">
                  General Equation:
                </p>
                <code className="text-blue-700 dark:text-blue-300 text-sm">
                  ᴬX → ᴬY + e⁻ + ν̄ₑ
                </code>
              </div>
              <div className="bg-cyan-50 dark:bg-cyan-900 p-3 rounded">
                <p className="text-cyan-800 dark:text-cyan-200 text-sm font-medium mb-1">
                  Example:
                </p>
                <code className="text-cyan-700 dark:text-cyan-300 text-sm">
                  ¹⁴C → ¹⁴N + e⁻ + ν̄ₑ
                </code>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Mass number unchanged</li>
                <li>• Increases atomic number by 1</li>
                <li>• Neutron converts to proton</li>
                <li>• Moderate penetrating power</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Gamma (γ) Emission
            </h3>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900 p-3 rounded">
                <p className="text-green-800 dark:text-green-200 text-sm font-medium mb-1">
                  General Equation:
                </p>
                <code className="text-green-700 dark:text-green-300 text-sm">
                  ᴬX* → ᴬX + γ
                </code>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900 p-3 rounded">
                <p className="text-emerald-800 dark:text-emerald-200 text-sm font-medium mb-1">
                  Example:
                </p>
                <code className="text-emerald-700 dark:text-emerald-300 text-sm">
                  ⁹⁹ᵐTc → ⁹⁹Tc + γ
                </code>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• No change in mass or atomic number</li>
                <li>• Energy release from excited nucleus</li>
                <li>• Often accompanies α or β decay</li>
                <li>• High penetrating power</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Positron (β⁺) Emission
            </h3>
            <div className="space-y-3">
              <div className="bg-purple-50 dark:bg-purple-900 p-3 rounded">
                <p className="text-purple-800 dark:text-purple-200 text-sm font-medium mb-1">
                  General Equation:
                </p>
                <code className="text-purple-700 dark:text-purple-300 text-sm">
                  ᴬX → ᴬY + e⁺ + νₑ
                </code>
              </div>
              <div className="bg-violet-50 dark:bg-violet-900 p-3 rounded">
                <p className="text-violet-800 dark:text-violet-200 text-sm font-medium mb-1">
                  Example:
                </p>
                <code className="text-violet-700 dark:text-violet-300 text-sm">
                  ¹¹C → ¹¹B + e⁺ + νₑ
                </code>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Mass number unchanged</li>
                <li>• Decreases atomic number by 1</li>
                <li>• Proton converts to neutron</li>
                <li>• Used in PET scans</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Electron Capture
            </h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 dark:bg-yellow-900 p-3 rounded">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium mb-1">
                  General Equation:
                </p>
                <code className="text-yellow-700 dark:text-yellow-300 text-sm">
                  ᴬX + e⁻ → ᴬY + νₑ
                </code>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900 p-3 rounded">
                <p className="text-orange-800 dark:text-orange-200 text-sm font-medium mb-1">
                  Example:
                </p>
                <code className="text-orange-700 dark:text-orange-300 text-sm">
                  ⁴⁰K + e⁻ → ⁴⁰Ar + νₑ
                </code>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Inner orbital electron captured</li>
                <li>• Decreases atomic number by 1</li>
                <li>• Alternative to positron emission</li>
                <li>• X-rays often emitted</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 p-6 dark:from-indigo-800 dark:to-blue-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Spontaneous Fission
            </h3>
            <div className="space-y-3">
              <div className="bg-indigo-50 dark:bg-indigo-900 p-3 rounded">
                <p className="text-indigo-800 dark:text-indigo-200 text-sm font-medium mb-1">
                  General Process:
                </p>
                <code className="text-indigo-700 dark:text-indigo-300 text-sm">
                  ᴬX → Y + Z + neutrons
                </code>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-1">
                  Example:
                </p>
                <code className="text-blue-700 dark:text-blue-300 text-sm">
                  ²⁵²Cf → fragments + neutrons
                </code>
              </div>
              <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
                <li>• Nucleus splits into two fragments</li>
                <li>• Very heavy nuclei (A &gt; 230)</li>
                <li>• Releases multiple neutrons</li>
                <li>• Rare compared to other decays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decay Kinetics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent dark:from-red-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Radioactive Decay Kinetics
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                First-Order Kinetics
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Rate Law
                </h4>
                <div className="text-center">
                  <code className="text-blue-700 dark:text-blue-300">
                    Rate = -dN/dt = λN
                  </code>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm mt-2">
                  λ = decay constant, N = number of nuclei
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Integrated Rate Law
                </h4>
                <div className="text-center">
                  <code className="text-green-700 dark:text-green-300">
                    N(t) = N₀e^(-λt)
                  </code>
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                  N₀ = initial number of nuclei
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Half-Life
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  Definition
                </h4>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  Time required for half of the radioactive nuclei to decay
                </p>
                <div className="text-center mt-2">
                  <code className="text-orange-700 dark:text-orange-300">
                    t₁/₂ = ln(2)/λ = 0.693/λ
                  </code>
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  Examples
                </h4>
                <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                  <li>• ¹⁴C: 5,730 years</li>
                  <li>• ²³⁸U: 4.5 billion years</li>
                  <li>• ⁹⁹ᵐTc: 6 hours</li>
                  <li>• ²²²Rn: 3.8 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Radioactive Decay Series */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent dark:from-red-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Radioactive Decay Series
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Natural radioactive decay series show sequential decay of heavy nuclei to stable products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-lg dark:from-red-800 dark:to-pink-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Uranium Series (4n+2)
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Parent:</strong> ²³⁸U (t₁/₂ = 4.5 × 10⁹ y)
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>End Product:</strong> ²⁰⁶Pb (stable)
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Notable Members:</strong>
                </p>
                <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                  <li>• ²²⁶Ra (radium)</li>
                  <li>• ²²²Rn (radon)</li>
                  <li>• ²¹⁰Po (polonium)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Actinium Series (4n+3)
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Parent:</strong> ²³⁵U (t₁/₂ = 7.0 × 10⁸ y)
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>End Product:</strong> ²⁰⁷Pb (stable)
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Notable Members:</strong>
                </p>
                <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                  <li>• ²²⁷Ac (actinium)</li>
                  <li>• ²²³Ra (radium)</li>
                  <li>• ²¹⁹Rn (radon)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Thorium Series (4n)
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Parent:</strong> ²³²Th (t₁/₂ = 1.4 × 10¹⁰ y)
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>End Product:</strong> ²⁰⁸Pb (stable)
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Notable Members:</strong>
                </p>
                <ul className="text-gray-600 dark:text-gray-300 text-xs space-y-1">
                  <li>• ²²⁸Ra (radium)</li>
                  <li>• ²²⁰Rn (radon)</li>
                  <li>• ²¹²Pb (lead)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detection and Measurement */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent dark:from-red-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Detection and Measurement
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Geiger Counter
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Gas-filled detector</li>
              <li>• Counts individual particles</li>
              <li>• Audible clicks</li>
              <li>• Portable and rugged</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 p-6 dark:from-blue-800 dark:to-indigo-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Scintillation Counter
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Light flashes from radiation</li>
              <li>• High detection efficiency</li>
              <li>• Energy discrimination</li>
              <li>• Used in medical imaging</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-teal-100 p-6 dark:from-green-800 dark:to-teal-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Semiconductor Detector
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Silicon or germanium</li>
              <li>• Excellent energy resolution</li>
              <li>• Gamma spectroscopy</li>
              <li>• Requires cooling</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-6 dark:from-purple-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Film Badge
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Photographic film</li>
              <li>• Personal dosimetry</li>
              <li>• Permanent record</li>
              <li>• Energy and type information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Biological Effects */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent dark:from-red-600 dark:to-orange-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Biological Effects of Radiation
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Radiation Dose Units
                </h3>
              </div>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900 p-4 rounded">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    Absorbed Dose (Gray, Gy)
                  </h4>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    Energy absorbed per unit mass: 1 Gy = 1 J/kg
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                    Equivalent Dose (Sievert, Sv)
                  </h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">
                    Biological effectiveness: Sv = Gy × radiation weighting factor
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Activity (Becquerel, Bq)
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    Rate of decay: 1 Bq = 1 disintegration/second
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Health Effects
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Acute Effects (High Doses)
                  </h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Radiation sickness</li>
                    <li>• Skin burns</li>
                    <li>• Blood cell damage</li>
                    <li>• Gastrointestinal effects</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-4 rounded">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Chronic Effects (Low Doses)
                  </h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Increased cancer risk</li>
                    <li>• Genetic mutations</li>
                    <li>• Cataracts</li>
                    <li>• Shortened lifespan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          The Spontaneous Transformation of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}