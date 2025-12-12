import { LucideIcon } from "lucide-react";

export interface NuclearReactionType {
  id: string;
  icon: LucideIcon;
  title: string;
  generalProcess: string;
  example: string;
  exampleLabel: string;
  features: string[];
  colorScheme: ColorScheme;
}

export interface StellarProcess {
  id: string;
  title: string;
  process: string;
  equation?: string;
  description: string;
  colorScheme: ColorScheme;
}

export interface ColorScheme {
  from: string;
  to: string;
  iconColor?: string;
  processColor?: string;
  exampleColor?: string;
}

export interface ApplicationArea {
  id: string;
  title: string;
  applications: string[];
  colorScheme: ColorScheme;
}

export interface SafetyConsideration {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}