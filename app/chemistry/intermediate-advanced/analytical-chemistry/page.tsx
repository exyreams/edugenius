"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Eye, Microscope, FlaskConical, BarChart3 } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items for analytical chemistry
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Analytical Chemistry", href: "/chemistry/intermediate-advanced/analytical-chemistry" }
];

export default function AnalyticalChemistry() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-4xl font-bold text-transparent dark:from-purple-600 dark:to-fuchsia-600 sm:text-5xl md:text-6xl">
          Analytical Chemistry
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Master the science of obtaining, processing, and communicating information about 
          the composition and structure of matter. Learn advanced analytical techniques and instrumentation.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* What is Analytical Chemistry */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-fuchsia-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          What is Analytical Chemistry?
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="text-center mb-8">
            <Eye className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              The Science of Chemical Analysis
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Analytical chemistry develops methods to identify and quantify matter. 
              It answers two fundamental questions: "What is it?" (qualitative analysis) 
              and "How much is there?" (quantitative analysis).
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg dark:from-blue-800 dark:to-cyan-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Qualitative Analysis
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Identifies what substances are present in a sample.
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Element identification</li>
                <li>• Compound characterization</li>
                <li>• Structural determination</li>
                <li>• Purity assessment</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg dark:from-green-800 dark:to-emerald-800">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Quantitative Analysis
              </h4>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Determines how much of each substance is present.
              </p>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Concentration measurements</li>
                <li>• Trace analysis</li>
                <li>• Stoichiometric calculations</li>
                <li>• Statistical analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Major Analytical Techniques */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-fuchsia-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Major Analytical Techniques
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/chromatography"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-8 w-8 text-blue-500 group-hover:text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Chromatography
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Separation techniques based on differential partitioning between phases.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Techniques:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Gas Chromatography (GC)</li>
                <li>• High-Performance Liquid Chromatography (HPLC)</li>
                <li>• Thin Layer Chromatography (TLC)</li>
                <li>• Ion Exchange Chromatography</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
              <span className="text-sm font-medium">Learn More</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/spectroscopy"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="h-8 w-8 text-purple-500 group-hover:text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Spectroscopy
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Analysis based on interaction of matter with electromagnetic radiation.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Techniques:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• UV-Visible Spectroscopy</li>
                <li>• Infrared (IR) Spectroscopy</li>
                <li>• Nuclear Magnetic Resonance (NMR)</li>
                <li>• Mass Spectrometry (MS)</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-purple-600 group-hover:text-purple-700">
              <span className="text-sm font-medium">Learn More</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>

          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/wet-chemistry"
            className="group rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="h-8 w-8 text-green-500 group-hover:text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Wet Chemistry
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Classical analytical methods using chemical reactions in solution.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Techniques:</strong>
              </div>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Titrations (Acid-Base, Redox)</li>
                <li>• Gravimetric Analysis</li>
                <li>• Precipitation Reactions</li>
                <li>• Complexometric Titrations</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center text-green-600 group-hover:text-green-700">
              <span className="text-sm font-medium">Learn More</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Analytical Process */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-fuchsia-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          The Analytical Process
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Sample Collection
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Obtain representative samples using proper techniques to avoid contamination
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Sample Preparation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Process samples to make them suitable for analysis (dissolution, extraction, purification)
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Apply appropriate analytical techniques to obtain qualitative and quantitative data
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Data Interpretation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Process results using statistics and report findings with appropriate uncertainty
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-purple-700 to-fuchsia-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-fuchsia-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Applications of Analytical Chemistry
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-red-100 to-pink-100 p-6 dark:from-red-800 dark:to-pink-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Environmental Monitoring
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Water quality testing</li>
              <li>• Air pollution analysis</li>
              <li>• Soil contamination assessment</li>
              <li>• Pesticide residue detection</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-6 dark:from-blue-800 dark:to-cyan-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Pharmaceutical Analysis
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Drug purity testing</li>
              <li>• Bioavailability studies</li>
              <li>• Quality control in manufacturing</li>
              <li>• Metabolite identification</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-6 dark:from-green-800 dark:to-emerald-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Food Safety
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Nutritional analysis</li>
              <li>• Contaminant detection</li>
              <li>• Authenticity verification</li>
              <li>• Shelf-life studies</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-yellow-100 to-orange-100 p-6 dark:from-yellow-800 dark:to-orange-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Clinical Chemistry
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Blood glucose monitoring</li>
              <li>• Hormone level testing</li>
              <li>• Drug screening</li>
              <li>• Disease biomarkers</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 p-6 dark:from-purple-800 dark:to-violet-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Forensic Science
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• DNA analysis</li>
              <li>• Trace evidence examination</li>
              <li>• Toxicology testing</li>
              <li>• Document authentication</li>
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 p-6 dark:from-indigo-800 dark:to-blue-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Materials Science
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
              <li>• Composition analysis</li>
              <li>• Surface characterization</li>
              <li>• Defect identification</li>
              <li>• Quality assurance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-purple-200 to-fuchsia-200 p-8 text-center dark:from-purple-600 dark:to-fuchsia-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Explore Analytical Techniques
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Dive deeper into specific analytical techniques to master the tools and methods 
          used in modern chemical analysis.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/chromatography"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700"
          >
            Chromatography
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/chemistry/intermediate-advanced/analytical-chemistry/spectroscopy"
            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-purple-700"
          >
            Spectroscopy
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Section Divider */}
      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
        <span className="text-sm italic text-gray-500 dark:text-gray-200">
          Revealing the Composition of Matter
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:from-transparent dark:via-gray-400 dark:to-transparent" />
      </div>
    </div>
  );
}