"use client";

interface FunctionCardProps {
  title: string;
  description: string;
  bgColor: string;
}

export default function FunctionCard({ title, description, bgColor }: FunctionCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-200 text-sm">
        {description}
      </p>
    </div>
  );
}