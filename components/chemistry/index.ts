// Chemistry-specific UI components
export { 
  ChemicalEquationRenderer, 
  ChemicalFormula, 
  ChemicalReactionSteps 
} from './ChemicalEquationRenderer';

export { 
  MolecularVisualization, 
  createMolecularStructure 
} from './MolecularVisualization';

export { 
  PeriodicTableInteractive 
} from './PeriodicTableInteractive';

export { 
  ReactionMechanism, 
  createReactionMechanism 
} from './ReactionMechanism';

// Re-export existing components for convenience
export { default as TopicCard } from './TopicCard';
export { default as ConceptGrid } from './ConceptGrid';
export { default as SectionHeader } from './SectionHeader';
export { default as PracticeProblems } from './PracticeProblems';
export { default as ErrorBoundary } from './ErrorBoundary';