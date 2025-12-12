"use client";

import { AlertTriangle } from "lucide-react";

interface SafetyCardProps {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

export default function SafetyCard({
  title,
  description,
  icon,
  bgColor
}: SafetyCardProps) {
  const renderIcon = () => {
    if (icon === "AlertTriangle") {
      return <AlertTriangle className="h-8 w-8 text-white" />;
    }
    return <span className="text-white font-bold text-sm">{icon}</span>;
  };

  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
        {renderIcon()}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </div>
  );
}