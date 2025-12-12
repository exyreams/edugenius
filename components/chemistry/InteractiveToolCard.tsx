"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JSX } from "react";
import { getTextColor, getBackgroundColor, getAnimatedBackground } from "@/lib/chemistry/styles";
import { InteractiveToolCardProps } from "@/types/chemistry-components";

const ComingSoonTag = (): JSX.Element => (
  <span className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-xs font-semibold text-black">
    Coming Soon
  </span>
);

export default function InteractiveToolCard({ tool, isColorful }: InteractiveToolCardProps): JSX.Element {
  const cardContent = (
    <>
      {tool.comingSoon && <ComingSoonTag />}
      <div className="flex h-full flex-col justify-between p-8">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <div className={`rounded-lg p-3 ${getBackgroundColor(isColorful)}`}>
              <tool.icon className={`h-8 w-8 ${getTextColor(isColorful)}`} />
            </div>
            <h3 className={`text-2xl font-semibold ${getTextColor(isColorful)}`}>
              {tool.title}
            </h3>
          </div>
          <p className={`mb-6 text-base leading-relaxed ${getTextColor(isColorful, 'muted')}`}>
            {tool.description}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className={`text-md font-medium ${getTextColor(isColorful, 'secondary')}`}>
            {tool.cta}
          </span>
          <ChevronRight 
            className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${getTextColor(isColorful, 'secondary')}`} 
          />
        </div>
      </div>
      <div 
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full transition-all duration-500 group-hover:-right-8 group-hover:-top-8 ${getAnimatedBackground(isColorful)}`} 
      />
    </>
  );

  const cardClasses = `group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:hover:shadow-black/40 flex flex-col ${
    isColorful ? `bg-gradient-to-br ${tool.gradient}` : "glass"
  } ${tool.comingSoon ? "cursor-not-allowed opacity-70" : ""} ${tool.span || ""}`;

  if (tool.comingSoon) {
    return (
      <div className={cardClasses}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={tool.href} className={cardClasses}>
      {cardContent}
    </Link>
  );
}