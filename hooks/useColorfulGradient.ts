import { useMemo } from "react";

interface GradientConfig {
  from: string;
  to: string;
  darkFrom: string;
  darkTo: string;
}

export function useColorfulGradient(isColorful: boolean, config: GradientConfig) {
  return useMemo(() => {
    if (!isColorful) {
      return "text-gray-800 dark:text-gray-200";
    }
    return `bg-gradient-to-r ${config.from} ${config.to} bg-clip-text text-transparent ${config.darkFrom} ${config.darkTo}`;
  }, [isColorful, config]);
}

// Predefined gradient configurations for chemistry subjects
export const CHEMISTRY_GRADIENTS = {
  organic: {
    from: "from-green-700",
    to: "to-blue-700", 
    darkFrom: "dark:from-green-600",
    darkTo: "dark:to-blue-600"
  },
  inorganic: {
    from: "from-indigo-700",
    to: "to-purple-700",
    darkFrom: "dark:from-indigo-600", 
    darkTo: "dark:to-purple-600"
  },
  nuclear: {
    from: "from-orange-700",
    to: "to-red-700",
    darkFrom: "dark:from-orange-600",
    darkTo: "dark:to-red-600"
  }
} as const;