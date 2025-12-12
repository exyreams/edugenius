"use client";

interface ApplicationCardProps {
  title: string;
  applications: string[];
  colorScheme: {
    from: string;
    to: string;
  };
}

export default function ApplicationCard({
  title,
  applications,
  colorScheme
}: ApplicationCardProps) {
  return (
    <div className={`rounded-lg bg-gradient-to-br ${colorScheme.from} ${colorScheme.to} p-6 dark:${colorScheme.from.replace('100', '800')} dark:${colorScheme.to.replace('100', '800')}`}>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-sm">
        {applications.map((application, index) => (
          <li key={index}>• {application}</li>
        ))}
      </ul>
    </div>
  );
}