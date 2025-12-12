"use client";

interface CoordinationGeometryCardProps {
  coordinationNumber: number;
  title: string;
  description: string;
  examples: string[];
  characteristics: string[];
  colorScheme: {
    from: string;
    to: string;
    darkFrom: string;
    darkTo: string;
  };
}

export default function CoordinationGeometryCard({
  coordinationNumber,
  title,
  description,
  examples,
  characteristics,
  colorScheme
}: CoordinationGeometryCardProps) {
  return (
    <div className={`rounded-lg bg-gradient-to-br ${colorScheme.from} ${colorScheme.to} p-6 ${colorScheme.darkFrom} ${colorScheme.darkTo}`}>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        Coordination Number {coordinationNumber}
      </h3>
      <div className="space-y-2">
        <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
          <strong>{title}</strong>
        </p>
        <p className="text-gray-700 dark:text-gray-200 text-sm mb-3">
          {description}
        </p>
        {examples.length > 0 && (
          <div className="mb-3">
            <p className="text-gray-700 dark:text-gray-200 text-xs font-medium mb-1">Examples:</p>
            {examples.map((example, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-200 text-xs">
                • {example}
              </p>
            ))}
          </div>
        )}
        <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
          {characteristics.map((characteristic, index) => (
            <li key={index}>• {characteristic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}