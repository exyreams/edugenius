"use client";

import { LucideIcon } from "lucide-react";

interface CarbohydrateCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  examples?: Array<{
    title: string;
    items: string[];
    bgColor: string;
    textColor: string;
  }>;
  features?: Array<{
    title: string;
    items: string[];
  }>;
}

export default function CarbohydrateCard({
  title,
  description,
  icon: Icon,
  iconColor,
  examples = [],
  features = []
}: CarbohydrateCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`h-8 w-8 ${iconColor}`} />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className={`p-4 rounded ${example.bgColor}`}>
            <p className={`${example.textColor} font-semibold mb-2`}>
              {example.title}:
            </p>
            <ul className={`text-sm ${example.textColor.replace('800', '700').replace('200', '300')} space-y-1`}>
              {example.items.map((item, itemIndex) => (
                <li key={itemIndex}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded dark:bg-gray-700">
            <p className="text-gray-800 dark:text-gray-200 font-semibold mb-1">
              {feature.title}:
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}