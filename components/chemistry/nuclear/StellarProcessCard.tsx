"use client";

interface StellarProcessCardProps {
  title: string;
  process: string;
  equation?: string;
  description: string;
  colorScheme: {
    from: string;
    to: string;
  };
}

export default function StellarProcessCard({
  title,
  process,
  equation,
  description,
  colorScheme
}: StellarProcessCardProps) {
  return (
    <div className={`bg-gradient-to-br ${colorScheme.from} ${colorScheme.to} p-6 rounded-lg dark:${colorScheme.from.replace('100', '800')} dark:${colorScheme.to.replace('100', '800')}`}>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <div className="space-y-2">
        <p className="text-gray-700 dark:text-gray-200 text-sm">
          <strong>{process}:</strong>
        </p>
        {equation && (
          <code className="text-gray-600 dark:text-gray-300 text-xs block">
            {equation}
          </code>
        )}
        <p className="text-gray-700 dark:text-gray-200 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}