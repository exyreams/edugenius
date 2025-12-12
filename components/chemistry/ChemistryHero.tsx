"use client";

import { JSX } from "react";
import { ChemistryHeroProps } from "@/types/chemistry-components";

export default function ChemistryHero({ title, description }: ChemistryHeroProps): JSX.Element {
  return (
    <div className="mb-12 space-y-6 text-center">
      <h1 className="bg-gradient-to-r from-indigo-700 to-purple-800 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-200 dark:to-purple-300 sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
        {description}
      </p>
    </div>
  );
}