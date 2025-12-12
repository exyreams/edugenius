// Centralized styling utilities for chemistry components

export type ColorVariant = 'primary' | 'secondary' | 'muted';

export const getTextColor = (
  isColorful: boolean, 
  variant: ColorVariant = 'primary'
): string => {
  const colorMap = {
    colorful: {
      primary: 'text-black dark:text-white',
      secondary: 'text-gray-700 dark:text-white/80',
      muted: 'text-gray-600 dark:text-gray-200'
    },
    monochrome: {
      primary: 'text-gray-800 dark:text-white',
      secondary: 'text-gray-700 dark:text-white/80',
      muted: 'text-gray-600 dark:text-gray-300'
    }
  };

  return colorMap[isColorful ? 'colorful' : 'monochrome'][variant];
};

export const getBackgroundColor = (isColorful: boolean): string =>
  isColorful 
    ? 'bg-black/5 backdrop-blur-sm dark:bg-black/20' 
    : 'bg-gray-300 dark:bg-gray-700';

export const getAnimatedBackground = (isColorful: boolean): string =>
  isColorful 
    ? 'bg-black/5 dark:bg-white/10' 
    : 'bg-gray-300/50 dark:bg-gray-700/50';

export const getCardClasses = (
  isColorful: boolean,
  gradient?: string,
  additionalClasses = ''
): string => {
  const baseClasses = 'group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-black/30';
  
  const backgroundClasses = isColorful && gradient
    ? `bg-gradient-to-br ${gradient}`
    : 'glass text-gray-800 dark:text-white';

  return `${baseClasses} ${backgroundClasses} ${additionalClasses}`;
};