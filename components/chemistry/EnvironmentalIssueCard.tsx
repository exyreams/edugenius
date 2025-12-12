import { memo } from "react";

interface EnvironmentalIssueCardProps {
  title: string;
  items: string[];
  bgColor: string;
  textColor: string;
}

const EnvironmentalIssueCard = memo(function EnvironmentalIssueCard({
  title,
  items,
  bgColor,
  textColor
}: EnvironmentalIssueCardProps) {
  return (
    <div className={`rounded-lg p-6 ${bgColor}`}>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      <ul className={`space-y-1 text-sm ${textColor}`} role="list">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
});

export default EnvironmentalIssueCard;