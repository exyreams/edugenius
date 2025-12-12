import { useMemo } from "react";

interface UseGradientHeadingProps {
  isColorful: boolean;
  colorFrom?: string;
  colorTo?: string;
  darkColorFrom?: string;
  darkColorTo?: string;
}

export function useGradientHeading({
  isColorful,
  colorFrom = "green-700",
  colorTo = "emerald-700", 
  darkColorFrom = "green-600",
  darkColorTo = "emerald-600"
}: UseGradientHeadingProps) {
  return useMemo(() => {
    if (isColorful) {
      return `bg-gradient-to-r from-${colorFrom} to-${colorTo} bg-clip-text text-transparent dark:from-${darkColorFrom} dark:to-${darkColorTo}`;
    }
    return "text-gray-800 dark:text-gray-200";
  }, [isColorful, colorFrom, colorTo, darkColorFrom, darkColorTo]);
}