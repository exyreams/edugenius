"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ColorToggle from "@/components/ColorToggle";

export default function NumberTheory() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    { label: "Intermediate & Advanced", href: "/mathematics/concepts/intermediate-advanced" },
    { label: "Discrete Mathematics", href: "/mathematics/concepts/intermediate-advanced/discrete-math" },
    { label: "Number Theory", href: "/mathematics/concepts/intermediate-advanced/discrete-math/number-theory" },
  ];

  const [isColorful, setIsColorful] = useState(true);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-teal-700 to-cyan-800 bg-clip-text text-4xl font-bold text-transparent dark:from-teal-300 dark:to-cyan-400 md:text-5xl lg:text-6xl">
          Number Theory
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          Explore the properties of integers: primes, divisibility, modular arithmetic, and cryptographic applications.
        </p>
      </div>

      <div className="flex justify-center">
        <ColorToggle onChange={setIsColorful} initialState={true} />
      </div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-sky-200 to-blue-200 dark:from-sky-600 dark:to-blue-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-blue-300 dark:to-purple-300`}>
            Divisibility and Prime Numbers
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <p><strong>Division Algorithm:</strong></p>
              <BlockMath math="a = bq + r, \quad 0 \leq r < b" />
              <p className="mt-2"><strong>Greatest Common Divisor:</strong></p>
              <BlockMath math="\gcd(a,b) = \gcd(b, a \bmod b)" />
              <p className="mt-2"><strong>Fundamental Theorem of Arithmetic:</strong></p>
              <p className="mt-1">Every integer greater than 1 has a unique prime factorization.</p>
            </div>
          </div>
        </div>

        <div className={`rounded-lg p-6 shadow-md ${isColorful ? "bg-gradient-to-br from-teal-200 to-emerald-200 dark:from-teal-600 dark:to-emerald-600" : "glass dark:bg-gray-800"}`}>
          <h2 className={`text-2xl font-semibold ${isColorful ? "bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent" : "text-gray-800 dark:text-gray-200"} dark:from-teal-300 dark:to-cyan-300`}>
            Modular Arithmetic
          </h2>
          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <div className={`rounded-lg p-4 ${isColorful ? "bg-black/5 backdrop-blur-sm dark:bg-black/20" : "bg-gray-200 dark:bg-gray-700"}`}>
              <p><strong>Congruence:</strong></p>
              <BlockMath math="a \equiv b \pmod{m} \iff m | (a-b)" />
              <p className="mt-2"><strong>Properties:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>If <InlineMath math="a \equiv b \pmod{m}" /> and <InlineMath math="c \equiv d \pmod{m}" />, then <InlineMath math="a+c \equiv b+d \pmod{m}" /></li>
                <li>If <InlineMath math="a \equiv b \pmod{m}" /> and <InlineMath math="c \equiv d \pmod{m}" />, then <InlineMath math="ac \equiv bd \pmod{m}" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center space-x-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
        <span className="text-sm italic text-gray-700 dark:text-gray-200">The Queen of Mathematics</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent dark:via-gray-400" />
      </div>
    </div>
  );
}