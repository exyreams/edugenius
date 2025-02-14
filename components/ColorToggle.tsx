"use client";

import React, { useEffect, useState } from "react";

interface ToggleProps {
  onChange: (isColorful: boolean) => void;
  initialState: boolean;
}

const ColorToggle: React.FC<ToggleProps> = ({ onChange, initialState }) => {
  const [isColorful, setIsColorful] = useState(initialState);

  useEffect(() => {
    onChange(isColorful);
  }, [isColorful, onChange]);

  const handleToggle = () => {
    setIsColorful(!isColorful);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-sm font-medium text-black dark:text-white">
        Colorful
      </span>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isColorful}
          onChange={handleToggle}
          className="peer sr-only"
        />
        <div
          className={`peer h-6 w-11 rounded-full bg-gray-100 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black/40 dark:border-gray-600 dark:bg-gray-600 dark:peer-focus:ring-white`}
        />
      </label>
      <span className="text-sm font-medium text-black dark:text-white">
        Normal
      </span>
    </div>
  );
};

export default ColorToggle;
