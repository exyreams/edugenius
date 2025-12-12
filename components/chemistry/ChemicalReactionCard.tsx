interface ChemicalReactionCardProps {
  reaction: string;
  description: string;
}

export default function ChemicalReactionCard({
  reaction,
  description
}: ChemicalReactionCardProps) {
  return (
    <div className="bg-white p-3 rounded dark:bg-gray-700">
      <p className="font-mono text-sm md:text-base">{reaction}</p>
      <p className="text-xs mt-1 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}