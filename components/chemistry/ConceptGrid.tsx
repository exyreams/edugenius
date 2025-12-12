"use client";

interface Concept {
  title: string;
  items: string[];
  colorScheme: {
    from: string;
    to: string;
    darkFrom: string;
    darkTo: string;
  };
}

interface ConceptGridProps {
  title: string;
  concepts: Concept[];
  isColorful: boolean;
  titleGradient: string;
}

export default function ConceptGrid({
  title,
  concepts,
  isColorful,
  titleGradient
}: ConceptGridProps) {
  return (
    <div className="mt-16">
      <h2
        className={`mb-8 text-center text-3xl font-bold ${
          isColorful
            ? titleGradient
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept, index) => (
          <div
            key={index}
            className={`rounded-lg bg-gradient-to-br ${concept.colorScheme.from} ${concept.colorScheme.to} p-6 ${concept.colorScheme.darkFrom} ${concept.colorScheme.darkTo}`}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {concept.title}
            </h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2">
              {concept.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}