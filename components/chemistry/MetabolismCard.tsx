"use client";

import { LucideIcon } from "lucide-react";

interface MetabolismSection {
  title: string;
  items: string[];
  bgColor: string;
  textColor: string;
}

interface MetabolismCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  sections: MetabolismSection[];
}

export default function MetabolismCard({
  title,
  description,
  icon: Icon,
  iconColor,
  sections
}: MetabolismCardProps) {
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
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div key={index} className={`p-3 rounded ${section.bgColor}`}>
            <p className={`${section.textColor} font-semibold mb-1`}>
              {section.title}:
            </p>
            <ul className={`text-sm ${section.textColor.replace('800', '700').replace('200', '300')} space-y-1`}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}