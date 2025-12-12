"use client";

import { useState } from "react";
import { Beaker, Zap, Atom, ArrowRight, Target, Layers } from "lucide-react";
import ColorToggle from "@/components/ColorToggle";
import Breadcrumb from "@/components/Breadcrumb";

// Breadcrumb items
const BREADCRUMB_ITEMS = [
  { label: "Chemistry", href: "/chemistry" },
  { label: "Intermediate & Advanced", href: "/chemistry/intermediate-advanced" },
  { label: "Polymer Chemistry", href: "/chemistry/intermediate-advanced/polymer-chemistry" },
  { label: "Polymer Synthesis", href: "/chemistry/intermediate-advanced/polymer-chemistry/polymer-synthesis" }
];

export default function PolymerSynthesis() {
  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-4xl font-bold text-transparent dark:from-green-600 dark:to-blue-600 sm:text-5xl md:text-6xl">
          Polymer Synthesis
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the mechanisms and methods for creating polymers, from traditional 
          polymerization techniques to modern controlled synthesis approaches.
        </p>
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={BREADCRUMB_ITEMS} />
      </div>

      {/* Color Toggle */}
      <ColorToggle onChange={setIsColorful} initialState={true} />

      {/* Polymerization Mechanisms */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Major Polymerization Mechanisms
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Zap className="mr-3 h-8 w-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Addition Polymerization
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Monomers with unsaturated bonds add to growing chains without elimination of small molecules.
            </p>
            
            <div className="space-y-4">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-800 dark:text-green-200">
                  Free Radical Polymerization
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Initiation → Propagation → Termination
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>• Thermal or photochemical initiation</li>
                  <li>• Chain growth by radical addition</li>
                  <li>• Termination by combination or disproportionation</li>
                  <li>• Examples: PE, PS, PMMA</li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                  Ionic Polymerization
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Cationic or anionic chain growth
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>• Living polymerization possible</li>
                  <li>• Better molecular weight control</li>
                  <li>• Stereoregular polymers</li>
                  <li>• Examples: PIB, PS (anionic)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Beaker className="mr-3 h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Condensation Polymerization
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Step-growth polymerization with elimination of small molecules like water or HCl.
            </p>
            
            <div className="space-y-4">
              <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                  Step-Growth Mechanism
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Any two molecules can react at any time
                </p>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>• Bifunctional or multifunctional monomers</li>
                  <li>• Molecular weight builds slowly</li>
                  <li>• High conversion needed for high MW</li>
                  <li>• Examples: Nylon, PET, PC</li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200">
                  Common Reactions
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>• Esterification (polyesters)</li>
                  <li>• Amidation (polyamides)</li>
                  <li>• Etherification (polyethers)</li>
                  <li>• Urethane formation (polyurethanes)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Synthesis Methods */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Advanced Synthesis Methods
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Target className="mr-3 h-8 w-8 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Living Polymerization
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Polymerization without termination or chain transfer reactions.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Characteristics
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Linear MW vs conversion</li>
                  <li>• Narrow molecular weight distribution</li>
                  <li>• Predictable molecular weight</li>
                  <li>• Block copolymer synthesis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Examples
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Anionic polymerization</li>
                  <li>• ATRP, RAFT, NMP</li>
                  <li>• Ring-opening metathesis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Atom className="mr-3 h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Ring-Opening Polymerization
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Polymerization of cyclic monomers with ring strain relief as driving force.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Mechanisms
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Cationic ROP</li>
                  <li>• Anionic ROP</li>
                  <li>• Coordination-insertion</li>
                  <li>• Ring-opening metathesis (ROMP)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Common Monomers
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Lactones → Polyesters</li>
                  <li>• Lactams → Polyamides</li>
                  <li>• Epoxides → Polyethers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <div className="mb-4 flex items-center">
              <Layers className="mr-3 h-8 w-8 text-cyan-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Controlled Radical Polymerization
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Methods to control radical polymerization for better molecular weight control.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  ATRP
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Atom Transfer Radical Polymerization using Cu catalysts
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  RAFT
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Reversible Addition-Fragmentation chain Transfer
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  NMP
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Nitroxide-Mediated Polymerization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Polymerization Kinetics */}
      <div className="mt-16">
        <h2
          className={`mb-8 text-center text-3xl font-bold ${
            isColorful
              ? "bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:from-green-600 dark:to-blue-600"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          Polymerization Kinetics
        </h2>
        <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Chain-Growth Kinetics
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <h4 className="font-semibold text-green-800 dark:text-green-200">
                    Rate of Polymerization
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                    Rp = kp[M][M•]
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Depends on monomer and radical concentrations
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                    Degree of Polymerization
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                    DP = Rp / Rt
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Ratio of propagation to termination rates
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                    Steady-State Approximation
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Rate of initiation equals rate of termination
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Step-Growth Kinetics
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200">
                    Carothers Equation
                  </h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mt-2">
                    DPn = 1 / (1 - p)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Where p is the extent of reaction
                  </p>
                </div>
                <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                  <h4 className="font-semibold text-red-800 dark:text-red-200">
                    High Conversion Required
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Need >99% conversion for high molecular weight
                  </p>
                </div>
                <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
                  <h4 className="font-semibold text-cyan-800 dark:text-cyan-200">
                    Stoichiometric Balance
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Equal reactivity of functional groups assumed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industrial Considerations */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-green-200 to-blue-200 p-8 text-center dark:from-green-600 dark:to-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Industrial Synthesis Considerations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-200">
          Successful polymer synthesis requires careful consideration of reaction conditions, 
          catalyst selection, and process optimization for commercial viability.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <ArrowRight className="h-8 w-8 text-gray-800 dark:text-white mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Reaction Conditions
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Temperature, pressure, and atmosphere control
            </p>
          </div>
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <Target className="h-8 w-8 text-gray-800 dark:text-white mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Catalyst Selection
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Activity, selectivity, and recyclability
            </p>
          </div>
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <Beaker className="h-8 w-8 text-gray-800 dark:text-white mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Process Design
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Batch vs continuous, heat removal, mixing
            </p>
          </div>
          <div className="rounded-lg bg-white/20 p-4 backdrop-blur-sm">
            <Zap className="h-8 w-8 text-gray-800 dark:text-white mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Quality Control
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Molecular weight, purity, and property testing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}