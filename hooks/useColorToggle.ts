import { useState, useCallback } from 'react';

export function useColorToggle(initialState: boolean = true) {
  const [isColorful, setIsColorful] = useState(initialState);

  const toggleColorful = useCallback(() => {
    setIsColorful(prev => !prev);
  }, []);

  const getGradientClass = useCallback((colors: string, fallback: string = "text-gray-800 dark:text-gray-200") => {
    return isColorful ? colors : fallback;
  }, [isColorful]);

  return {
    isColorful,
    setIsColorful,
    toggleColorful,
    getGradientClass
  };
}