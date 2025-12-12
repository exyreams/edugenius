"use client";

interface LigandTypeCardProps {
  title: string;
  description: string;
  examples: string[];
  colorScheme: {
    from: string;
    to: string;
    darkFrom: string;
    darkTo: string;
  };
}

export default function LigandTypeCard({
  title,
  description,
  examples,
  colorScheme
}: LigandTypeCardProps) {
  return (
    <div className={`rounded-lg bg-gradient-to-br ${colorScheme.from} ${colorScheme.to} p-6 ${colorScheme.darkFrom} ${colorScheme.darkTo}`}>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm">
        {description}
      </p>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
        {examples.map((example, index) => (
          <li key={index}>• {example}</li>
        ))}
      </ul>
    </div>
  );
}