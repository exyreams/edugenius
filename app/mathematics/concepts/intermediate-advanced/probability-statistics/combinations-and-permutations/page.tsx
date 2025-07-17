"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function CombinationsAndPermutations() {
  const breadcrumbItems = [
    { label: "Mathematics", href: "/mathematics" },
    { label: "Concepts", href: "/mathematics/concepts" },
    {
      label: "Intermediate-Advanced",
      href: "/mathematics/concepts/intermediate-advanced",
    },
    {
      label: "Probability & Statistics",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics",
    },
    {
      label: "Combinations and Permutations",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/combinations-and-permutations",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Combinations and Permutations</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
        <p className="mb-4">
          Combinations and permutations are fundamental counting principles used to determine the number of ways to arrange or select objects from a set.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Difference</h3>
            <p><strong>Permutations:</strong> Order matters (arrangements)</p>
            <p><strong>Combinations:</strong> Order doesn't matter (selections)</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Permutations</h2>
        <p className="mb-4">
          A permutation is an arrangement of objects where order matters.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Permutations of n distinct objects</h3>
            <BlockMath math="P(n) = n!" />
            <p className="mb-2">where <InlineMath math="n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1" /></p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Permutations of n objects taken r at a time</h3>
            <BlockMath math="P(n,r) = \frac{n!}{(n-r)!}" />
            <p className="mb-2">Also written as <InlineMath math="^nP_r" /> or <InlineMath math="P_n^r" /></p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Permutations with repetition</h3>
            <p className="mb-2">For n objects where <InlineMath math="n_1" /> are of type 1, <InlineMath math="n_2" /> are of type 2, etc.:</p>
            <BlockMath math="P = \frac{n!}{n_1! \times n_2! \times \cdots \times n_k!}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Circular Permutations</h3>
            <p className="mb-2">Arrangements in a circle:</p>
            <BlockMath math="P_{\text{circular}} = (n-1)!" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Combinations</h2>
        <p className="mb-4">
          A combination is a selection of objects where order doesn't matter.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Combinations of n objects taken r at a time</h3>
            <BlockMath math="C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}" />
            <p className="mb-2">Also written as <InlineMath math="^nC_r" /> or <InlineMath math="C_n^r" /></p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Properties of Combinations</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Symmetry Property</h4>
                <BlockMath math="\binom{n}{r} = \binom{n}{n-r}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Pascal's Identity</h4>
                <BlockMath math="\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}" />
              </div>
              
              <div>
                <h4 className="font-semibold">Sum Property</h4>
                <BlockMath math="\sum_{r=0}^{n} \binom{n}{r} = 2^n" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Combinations with repetition</h3>
            <p className="mb-2">Selecting r objects from n types with repetition allowed:</p>
            <BlockMath math="C(n+r-1, r) = \binom{n+r-1}{r}" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relationship Between Permutations and Combinations</h2>
        <BlockMath math="P(n,r) = r! \times C(n,r)" />
        <p className="mb-4">
          This shows that permutations account for all possible arrangements of each combination.
        </p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Decision Tree: When to Use Which</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Use Permutations when:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Order matters (arrangements, rankings, sequences)</li>
              <li>You need to arrange objects in specific positions</li>
              <li>Different orders create different outcomes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Use Combinations when:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Order doesn't matter (selections, groups, teams)</li>
              <li>You're choosing a subset from a larger set</li>
              <li>Different orders represent the same outcome</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Basic Permutation</h3>
          <p className="mb-2">How many ways can 5 people be arranged in a line?</p>
          <BlockMath math="P(5) = 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Permutation with Selection</h3>
          <p className="mb-2">How many ways can we select and arrange 3 people from a group of 8 for president, vice-president, and secretary?</p>
          <BlockMath math="P(8,3) = \frac{8!}{(8-3)!} = \frac{8!}{5!} = 8 \times 7 \times 6 = 336" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Basic Combination</h3>
          <p className="mb-2">How many ways can we choose 3 people from a group of 8 to form a committee?</p>
          <BlockMath math="C(8,3) = \binom{8}{3} = \frac{8!}{3!(8-3)!} = \frac{8!}{3! \times 5!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 4: Permutation with Repetition</h3>
          <p className="mb-2">How many distinct arrangements can be made from the letters in "STATISTICS"?</p>
          <p className="mb-2">Letters: S(3), T(3), A(1), I(1), C(1) - Total: 10 letters</p>
          <BlockMath math="P = \frac{10!}{3! \times 3! \times 1! \times 1! \times 1!} = \frac{3,628,800}{6 \times 6 \times 1 \times 1 \times 1} = 100,800" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 5: Circular Permutation</h3>
          <p className="mb-2">In how many ways can 6 people be seated around a circular table?</p>
          <BlockMath math="P_{\text{circular}} = (6-1)! = 5! = 120" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 6: Combination vs Permutation</h3>
          <p className="mb-2">From 10 students:</p>
          <p className="mb-2"><strong>Scenario A:</strong> Choose 4 students for a study group (order doesn't matter)</p>
          <BlockMath math="C(10,4) = \binom{10}{4} = \frac{10!}{4! \times 6!} = 210" />
          
          <p className="mb-2"><strong>Scenario B:</strong> Choose 4 students and assign them as leader, secretary, treasurer, and member (order matters)</p>
          <BlockMath math="P(10,4) = \frac{10!}{6!} = 10 \times 9 \times 8 \times 7 = 5,040" />
          
          <p className="mb-2">Notice that <InlineMath math="P(10,4) = 4! \times C(10,4) = 24 \times 210 = 5,040" /></p>
        </div>
      </div>
    </div>
  );
}
