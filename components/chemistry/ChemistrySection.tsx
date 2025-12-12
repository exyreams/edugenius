"use client";

import { JSX } from "react";
import { ChemistrySectionProps } from "@/types/chemistry-components";

export default function ChemistrySection({
  title,
  isColorful,
  gradientFrom,
  gradientTo,
  children,
  className = ""
}: ChemistrySectionProps): JSX.Element {
  const titleClasses = isColorful
    ? `bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`
    : "text-gray-800 dark:text-gray-200";

  return (
    <div className={`mt-16 ${className}`}>
      <h2 className={`mb-8 text-center text-3xl font-bold ${titleClasses}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}