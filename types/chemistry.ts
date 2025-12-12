/**
 * Type definitions for chemistry-related data structures
 */

export interface ChemistryStep {
  id: number;
  description: string;
  descriptionEquation?: string;
  equation: string;
}

export interface ChemistrySolution {
  problem: string;
  steps: ChemistryStep[];
}

export interface ChemistrySolverResponse {
  solutions: ChemistrySolution[];
}

export interface ChemistrySolverRequest {
  files: File[];
}

export interface ApiErrorResponse {
  error: string;
  details?: {
    message: string;
    stack?: string;
    rawResponse?: string;
  } | null;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}