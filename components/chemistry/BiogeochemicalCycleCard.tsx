import { memo } from "react";

interface BiogeochemicalCycleCardProps {
  element: string;
  title: string;
  description: string;
  color: string;
}

const BiogeochemicalCycleCard = memo(function BiogeochemicalCycleCard({
  element,
  title,
  description,
  color
}: BiogeochemicalCycleCardProps) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
        <span className="text-white font-bold text-sm" aria-label={`${title} element symbol`}>
          {element}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </div>
  );
});

export default BiogeochemicalCycleCard;