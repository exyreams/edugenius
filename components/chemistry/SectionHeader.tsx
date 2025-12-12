"use client";

interface SectionHeaderProps {
  title: string;
  isColorful: boolean;
  className?: string;
}

export default function SectionHeader({ title, isColorful, className = "" }: SectionHeaderProps) {
  return (
    <h2
      className={`mb-8 text-center text-3xl font-bold ${
        isColorful
          ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
          : "text-gray-800 dark:text-gray-200"
      } ${className}`}
    >
      {title}
    </h2>
  );
}