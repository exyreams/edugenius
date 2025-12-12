import { memo } from "react";
import { Cloud, Droplets, Leaf, LucideIcon } from "lucide-react";

interface EnvironmentalCompartmentCardProps {
  title: string;
  description: string;
  icon: string;
  items: string[];
  bgColor: string;
  textColor: string;
}

const iconMap: Record<string, LucideIcon> = {
  Cloud,
  Droplets,
  Leaf
};

const EnvironmentalCompartmentCard = memo(function EnvironmentalCompartmentCard({
  title,
  description,
  icon,
  items,
  bgColor,
  textColor
}: EnvironmentalCompartmentCardProps) {
  const IconComponent = iconMap[icon];
  
  return (
    <div className={`p-6 rounded-lg ${bgColor}`}>
      {IconComponent && (
        <IconComponent className="h-8 w-8 text-blue-500 mb-3" aria-hidden="true" />
      )}
      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-200 mb-3">
        {description}
      </p>
      <ul className={`text-sm space-y-1 ${textColor}`} role="list">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
});

export default EnvironmentalCompartmentCard;