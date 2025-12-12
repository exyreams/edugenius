"use client";

import { LucideIcon } from "lucide-react";

interface NuclearReactionCardProps {
  icon: LucideIcon;
  title: string;
  generalProcess: string;
  example: string;
  exampleLabel: string;
  features: string[];
  colorScheme: {
    from: string;
    to: string;
    iconColor: string;
    processColor: string;
    exampleColor: string;
  };
}

export default function NuclearReactionCard({
  icon: Icon,
  title,
  generalProcess,
  example,
  exampleLabel,
  features,
  colorScheme
}: NuclearReactionCardProps) {
  return (
    <div className={`rounded-lg bg-gradient-to-br ${colorScheme.from} ${colorScheme.to} p-6 dark:${colorScheme.from.replace('100', '800')} dark:${colorScheme.to.replace('100', '800')}`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`h-8 w-8 ${colorScheme.iconColor}`} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        <div className={`${colorScheme.processColor} p-3 rounded`}>
          <p className="text-sm font-medium mb-1">
            General Process:
          </p>
          <code className="text-sm">
            {generalProcess}
          </code>
        </div>
        <div className={`${colorScheme.exampleColor} p-3 rounded`}>
          <p className="text-sm font-medium mb-1">
            {exampleLabel}:
          </p>
          <code className="text-sm">
            {example}
          </code>
        </div>
        <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}