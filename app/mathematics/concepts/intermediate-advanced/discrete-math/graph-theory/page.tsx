"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

const problemColors = [
  "from-red-100 to-rose-200 dark:from-red-800 dark:to-rose-700",
  "from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-700",
  "from-yellow-100 to-lime-200 dark:from-yellow-800 dark:to-lime-700",
  "from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-700",
  "from-teal-100 to-cyan-200 dark:from-teal-800 dark:to-cyan-700",
  "from-sky-100 to-blue-200 dark:from-sky-800 dark:to-blue-700",
];

export default function GraphTheory() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Discrete Mathematics", href: "/mathematics/concepts/intermediate-advanced/discrete-math" },
    { label: "Graph Theory", href: "/mathematics/concepts/intermediate-advanced/discrete-math/graph-theory" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  const scrollbarStyle = isColorful
    ? "scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-orange-300 dark:scrollbar-track-orange-600 dark:scrollbar-thumb-orange-500"
    : "scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 dark:scrollbar-track-gray-400 dark:scrollbar-thumb-gray-500";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-orange-700 to-amber-800 bg-clip-text text-4xl font-bold text-transparent dark:from-orange-300 dark:to-amber-400 md:text-5xl lg:text-6xl">
          Graph Theory
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the mathematical study of graphs: vertices, edges, paths, and network structures.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        {/* Basic Definitions */}
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Basic Definitions
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <p>A graph G = (V, E) consists of a set of vertices V and a set of edges E.</p>
            <div className={`mt-4 rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Vertex (Node):</strong> A fundamental unit of a graph</li>
                <li><strong>Edge:</strong> A connection between two vertices</li>
                <li><strong>Degree:</strong> Number of edges incident to a vertex</li>
                <li><strong>Path:</strong> A sequence of vertices connected by edges</li>
                <li><strong>Cycle:</strong> A path that starts and ends at the same vertex</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Types of Graphs */}
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-teal-300 dark:to-cyan-300`}>
            Types of Graphs
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Simple Graph</h3>
                <p className="mt-2 text-sm">No loops or multiple edges between vertices.</p>
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Complete Graph</h3>
                <p className="mt-2 text-sm">Every pair of vertices is connected by an edge. Denoted <InlineMath math="K_n" />.</p>
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Bipartite Graph</h3>
                <p className="mt-2 text-sm">Vertices can be divided into two disjoint sets with edges only between sets.</p>
              </div>
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Tree</h3>
                <p className="mt-2 text-sm">Connected graph with no cycles. Has n-1 edges for n vertices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Algorithms */}
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-purple-300 dark:to-pink-300`}>
            Important Theorems
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-4">
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Handshaking Lemma</h3>
                <BlockMath math="\sum_{v \in V} \deg(v) = 2|E|" />
                <p className="mt-2">The sum of all vertex degrees equals twice the number of edges.</p>
              </div>
              
              <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
                <h3 className="text-lg font-semibold">Euler's Formula</h3>
                <BlockMath math="V - E + F = 2" />
                <p className="mt-2">For connected planar graphs: vertices - edges + faces = 2.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-lime-200 to-green-200 dark:from-lime-600 dark:to-green-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-lime-300 dark:to-green-300`}>
            Practice Exercises
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                problem: "\\text{How many edges does } K_5 \\text{ have?}",
                solution: "\\binom{5}{2} = 10 \\text{ edges}",
              },
              {
                problem: "\\text{Can a graph with 5 vertices have degrees 4,4,3,2,1?}",
                solution: "\\text{No, sum = 14 is even, but handshaking lemma requires even sum}",
              },
              {
                problem: "\\text{What is the minimum number of edges in a connected graph with 6 vertices?}",
                solution: "5 \\text{ edges (forms a tree)}",
              },
            ].map((item, index) => (
              <div key={index} className={`rounded-lg p-4 transition-all ${isColorful ? `bg-gradient-to-br ${problemColors[index % problemColors.length]} dark:text-white` : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white"} hover:shadow-lg`}>
                <div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Problem {index + 1}</span>
                  <div className={`mt-2 flex justify-start overflow-x-auto ${scrollbarStyle}`}>
                    <BlockMath math={item.problem} />
                  </div>
                </div>
                <details className="group mt-3">
                  <summary className="flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-lime-600 dark:text-gray-300 dark:hover:text-lime-300">
                    <span>Show Solution</span>
                    <svg className="ml-2 h-4 w-4 rotate-0 text-gray-700 transition-transform group-open:rotate-180 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-2 flex justify-start overflow-x-auto rounded-lg bg-black/5 p-3 backdrop-blur-sm dark:bg-black/20">
                    <BlockMath math={item.solution} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">Networks and Connections</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}