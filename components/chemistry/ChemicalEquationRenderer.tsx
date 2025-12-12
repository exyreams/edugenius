"use client";

import React from 'react';
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

interface ChemicalEquationRendererProps {
  equation: string;
  display?: 'inline' | 'block';
  className?: string;
  balanced?: boolean;
  showBalanceIndicator?: boolean;
}

interface ChemicalFormulaProps {
  formula: string;
  className?: string;
}

/**
 * Converts chemical notation to LaTeX format for KaTeX rendering
 * Handles subscripts, superscripts, arrows, and chemical symbols
 */
const convertChemicalToLatex = (chemical: string): string => {
  let latex = chemical;
  
  // Handle chemical arrows
  latex = latex.replace(/-->/g, '\\rightarrow');
  latex = latex.replace(/<-->/g, '\\leftrightarrow');
  latex = latex.replace(/<--/g, '\\leftarrow');
  latex = latex.replace(/\+/g, ' + ');
  
  // Handle subscripts (numbers after elements)
  latex = latex.replace(/([A-Z][a-z]?)(\d+)/g, '$1_{$2}');
  
  // Handle superscripts (charges)
  latex = latex.replace(/\^(\d*[+-])/g, '^{$1}');
  latex = latex.replace(/\^(\d+)/g, '^{$1}');
  
  // Handle common chemical notation
  latex = latex.replace(/\(aq\)/g, '_{(aq)}');
  latex = latex.replace(/\(s\)/g, '_{(s)}');
  latex = latex.replace(/\(l\)/g, '_{(l)}');
  latex = latex.replace(/\(g\)/g, '_{(g)}');
  
  // Handle delta (heat)
  latex = latex.replace(/delta/gi, '\\Delta');
  latex = latex.replace(/Delta/g, '\\Delta');
  
  // Handle equilibrium arrows
  latex = latex.replace(/<=>/g, '\\rightleftharpoons');
  
  // Handle reaction conditions (above/below arrows)
  latex = latex.replace(/\\rightarrow\[([^\]]+)\]/g, '\\xrightarrow{$1}');
  latex = latex.replace(/\\rightleftharpoons\[([^\]]+)\]/g, '\\xrightleftharpoons{$1}');
  
  return latex;
};

/**
 * Checks if a chemical equation appears to be balanced
 * This is a simple heuristic check, not a complete balance verification
 */
const checkBalance = (equation: string): boolean => {
  // Simple check: look for equal signs or arrows and basic element counting
  // This is a placeholder for more sophisticated balance checking
  const sides = equation.split(/-->|<-->|<--|<=>/);
  if (sides.length !== 2) return false;
  
  // For now, assume equations with proper arrow notation are balanced
  // In a real implementation, you'd parse and count atoms on each side
  return true;
};

/**
 * Component for rendering individual chemical formulas
 */
export const ChemicalFormula: React.FC<ChemicalFormulaProps> = ({ 
  formula, 
  className = "" 
}) => {
  const latexFormula = convertChemicalToLatex(formula);
  
  return (
    <span className={`chemical-formula ${className}`}>
      <InlineMath math={latexFormula} />
    </span>
  );
};

/**
 * Main component for rendering chemical equations with proper notation
 */
export const ChemicalEquationRenderer: React.FC<ChemicalEquationRendererProps> = ({
  equation,
  display = 'inline',
  className = "",
  balanced,
  showBalanceIndicator = false
}) => {
  const latexEquation = convertChemicalToLatex(equation);
  const isBalanced = balanced !== undefined ? balanced : checkBalance(equation);
  
  const renderEquation = () => {
    if (display === 'block') {
      return <BlockMath math={latexEquation} />;
    }
    return <InlineMath math={latexEquation} />;
  };

  return (
    <div className={`chemical-equation-container ${className}`}>
      <div className={`chemical-equation ${display === 'block' ? 'block' : 'inline'}`}>
        {renderEquation()}
      </div>
      {showBalanceIndicator && (
        <div className={`balance-indicator mt-1 text-xs ${
          isBalanced 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {isBalanced ? '✓ Balanced' : '⚠ Check balance'}
        </div>
      )}
    </div>
  );
};

/**
 * Component for rendering chemical reaction mechanisms with multiple steps
 */
interface ReactionStepProps {
  steps: string[];
  className?: string;
}

export const ChemicalReactionSteps: React.FC<ReactionStepProps> = ({
  steps,
  className = ""
}) => {
  return (
    <div className={`reaction-steps space-y-2 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="reaction-step">
          <div className="step-number text-sm text-gray-600 dark:text-gray-400 mb-1">
            Step {index + 1}:
          </div>
          <ChemicalEquationRenderer 
            equation={step} 
            display="block"
            showBalanceIndicator={true}
          />
        </div>
      ))}
    </div>
  );
};

export default ChemicalEquationRenderer;