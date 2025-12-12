"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JSX } from "react";
import { getTextColor, getAnimatedBackground, getCardClasses } from "@/lib/chemistry/styles";
import { TopicCardProps } from "@/types/chemistry-components";

export default function TopicCard({ topic, isColorful, href }: TopicCardProps): JSX.Element {
  const Icon = topic.icon;

  return (
    <Link
      href={href}
      className={getCardClasses(isColorful, topic.gradient, 'p-4')}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div
            className={`rounded-lg p-2 ${
              isColorful
                ? `bg-black/5 ${topic.text} backdrop-blur-sm dark:bg-black/25`
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <Icon
              className={`h-5 w-5 ${
                isColorful ? "text-current" : getTextColor(false, 'secondary')
              }`}
            />
          </div>
          <h4 className={`font-medium ${topic.text}`}>{topic.name}</h4>
        </div>
        <div className="flex justify-between">
          <p className={`text-sm leading-6 ${getTextColor(isColorful, 'muted')}`}>
            {topic.description}
          </p>
          <ChevronRight
            className={`h-4 w-4 ${
              isColorful ? topic.color : getTextColor(false, 'secondary')
            }`}
          />
        </div>
      </div>
      <div 
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full transition-all duration-500 group-hover:-right-4 group-hover:-top-4 ${getAnimatedBackground(isColorful)}`} 
      />
    </Link>
  );
}