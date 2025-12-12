// Shared types for chemistry components
export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ConceptCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconColor: string;
}

export interface GasLawCardProps {
  title: string;
  description: string;
  formula: string;
  conditions: string;
  example: {
    problem: string;
    solution: string;
  };
  gradientColors: {
    from: string;
    to: string;
    darkFrom: string;
    darkTo: string;
  };
}

export interface PracticeProblemsProps {
  problems: Array<{
    title: string;
    problem: string;
    solution: string[];
  }>;
}