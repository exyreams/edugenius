"use client";

import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Breadcrumb from "@/components/Breadcrumb";

export default function Probability() {
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
      label: "Probability",
      href: "/mathematics/concepts/intermediate-advanced/probability-statistics/probability",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="heading mb-8">Probability</h1>
      <Breadcrumb items={breadcrumbItems} />
      <br />

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Definition</h2>
        <p className="mb-4">
          Probability is a measure of the likelihood that an event will occur. It quantifies uncertainty and is expressed as a number between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold">Basic Formula</h2>
        <p className="mb-4">For equally likely outcomes:</p>
        <BlockMath math="P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}" />
        
        <p className="mb-4">Where P(A) represents the probability of event A occurring.</p>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Properties of Probability</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Range</h3>
            <BlockMath math="0 \leq P(A) \leq 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">2. Certain Event</h3>
            <BlockMath math="P(\text{Sample Space}) = 1" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">3. Impossible Event</h3>
            <BlockMath math="P(\emptyset) = 0" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Complement Rule</h3>
            <BlockMath math="P(A^c) = 1 - P(A)" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Types of Probability</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Classical Probability</h3>
            <p>Based on equally likely outcomes (theoretical)</p>
            <BlockMath math="P(A) = \frac{|A|}{|S|}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Empirical Probability</h3>
            <p>Based on observed frequencies (experimental)</p>
            <BlockMath math="P(A) = \frac{\text{Number of times A occurred}}{\text{Total number of trials}}" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Subjective Probability</h3>
            <p>Based on personal judgment or belief</p>
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Probability Rules</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Addition Rule (Union)</h3>
            <p>For any two events A and B:</p>
            <BlockMath math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
            
            <p className="mt-2">For mutually exclusive events:</p>
            <BlockMath math="P(A \cup B) = P(A) + P(B)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Multiplication Rule</h3>
            <p>For independent events:</p>
            <BlockMath math="P(A \cap B) = P(A) \times P(B)" />
            
            <p className="mt-2">For dependent events:</p>
            <BlockMath math="P(A \cap B) = P(A) \times P(B|A)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Conditional Probability</h3>
            <BlockMath math="P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0" />
          </div>
        </div>
      </div>

      <div className="glass p-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Important Theorems</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Law of Total Probability</h3>
            <p>If <InlineMath math="B_1, B_2, \ldots, B_n" /> form a partition of the sample space:</p>
            <BlockMath math="P(A) = \sum_{i=1}^{n} P(A|B_i)P(B_i)" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Bayes' Theorem</h3>
            <BlockMath math="P(B_i|A) = \frac{P(A|B_i)P(B_i)}{\sum_{j=1}^{n} P(A|B_j)P(B_j)}" />
          </div>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="mb-4 text-2xl font-semibold">Examples</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 1: Coin Toss</h3>
          <p className="mb-2">What is the probability of getting heads when flipping a fair coin?</p>
          <BlockMath math="P(\text{Heads}) = \frac{1}{2} = 0.5" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 2: Dice Roll</h3>
          <p className="mb-2">What is the probability of rolling a number greater than 4 on a fair six-sided die?</p>
          <p className="mb-2">Favorable outcomes: {"{5, 6}"}</p>
          <BlockMath math="P(X > 4) = \frac{2}{6} = \frac{1}{3} \approx 0.333" />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Example 3: Card Drawing</h3>
          <p className="mb-2">What is the probability of drawing a red card from a standard deck?</p>
          <p className="mb-2">Red cards: 26 (hearts + diamonds), Total cards: 52</p>
          <BlockMath math="P(\text{Red}) = \frac{26}{52} = \frac{1}{2} = 0.5" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Example 4: Conditional Probability</h3>
          <p className="mb-2">In a class of 30 students, 18 are female and 12 are male. If 10 females and 8 males wear glasses, what is the probability that a randomly selected student who wears glasses is female?</p>
          
          <p className="mb-2">Given information:</p>
          <p className="mb-1">• P(Female) = 18/30 = 3/5</p>
          <p className="mb-1">• P(Glasses|Female) = 10/18 = 5/9</p>
          <p className="mb-1">• P(Glasses|Male) = 8/12 = 2/3</p>
          
          <p className="mb-2">Using Bayes' theorem:</p>
          <BlockMath math="P(\text{Female}|\text{Glasses}) = \frac{P(\text{Glasses}|\text{Female}) \times P(\text{Female})}{P(\text{Glasses})}" />
          
          <p className="mb-2">First, find P(Glasses):</p>
          <BlockMath math="P(\text{Glasses}) = \frac{10 + 8}{30} = \frac{18}{30} = \frac{3}{5}" />
          
          <p className="mb-2">Therefore:</p>
          <BlockMath math="P(\text{Female}|\text{Glasses}) = \frac{\frac{5}{9} \times \frac{3}{5}}{\frac{3}{5}} = \frac{5}{9} \approx 0.556" />
        </div>
      </div>
    </div>
  );
}
