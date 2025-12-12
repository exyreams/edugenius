import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

// Base interfaces for chemistry components - matching the actual data structure
export interface ChemistryTopic {
  readonly id: string;
  readonly name: string;
  readonly icon: LucideIcon | IconType;
  readonly color?: string;
  readonly gradient: string;
  readonly text: string;
  readonly description: string;
}

export interface ChemistryInteractiveTool {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: LucideIcon | IconType;
  readonly cta: string;
  readonly gradient: string;
  readonly comingSoon: boolean;
  readonly span: string;
}

// Component prop interfaces
export interface ChemistryHeroProps {
  title: string;
  description: string;
}

export interface ChemistrySectionProps {
  title: string;
  isColorful: boolean;
  gradientFrom: string;
  gradientTo: string;
  children: ReactNode;
  className?: string;
}

export interface TopicCardProps {
  topic: ChemistryTopic;
  isColorful: boolean;
  href: string;
}

export interface InteractiveToolCardProps {
  tool: ChemistryInteractiveTool;
  isColorful: boolean;
}

// Style utility types
export type ColorVariant = 'primary' | 'secondary' | 'muted';

export interface StyleConfig {
  isColorful: boolean;
  variant?: ColorVariant;
  gradient?: string;
  additionalClasses?: string;
}