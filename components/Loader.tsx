import React from "react";
import { GiBrain } from "react-icons/gi";

interface LoaderProps {
  size?: number;
  className?: string;
  mainText?: string;
  subText?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = 400,
  className = "",
  mainText = "Loading...",
  subText = "Please wait while we process your request",
}) => {
  const loaderColors = [
    "from-red-200 to-rose-300 dark:from-red-600 dark:to-rose-500",
    "from-orange-200 to-amber-300 dark:from-orange-600 dark:to-amber-500",
    "from-yellow-200 to-lime-300 dark:from-yellow-600 dark:to-lime-500",
    "from-green-200 to-emerald-300 dark:from-green-600 dark:to-emerald-500",
    "from-teal-200 to-cyan-300 dark:from-teal-600 dark:to-cyan-500",
    "from-sky-200 to-blue-300 dark:from-sky-600 dark:to-blue-500",
  ];

  const boxes = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`pointer-events-none relative ${className}`}
        style={{ height: size, width: size }}
      >
        {boxes.map((i) => {
          const inset = 44 - (i - 1) * 4;
          const colorIndex = i - 1;

          return (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-b ${loaderColors[colorIndex]} 
                        pointer-events-auto
                        animate-ripple 
                        shadow-[0px_10px_10px_0px_rgba(0,0,0,0.5),inset_0px_5px_10px_-7px_rgba(205,155,255,0.5)] transition-all duration-300
                        hover:blur-sm hover:brightness-125`}
              style={{
                inset: `${inset}%`,
                animationDelay: `${i * 0.15}s`,
                zIndex: 6 - i,
              }}
            >
              {i === 1 && (
                <div className="absolute inset-0 flex items-center justify-center p-[30%]">
                  <GiBrain
                    className="h-full w-full animate-color-change text-black dark:text-white"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          );
        })}

        <div
          className={`absolute rounded-full bg-gradient-to-b ${loaderColors[7]}
                      pointer-events-auto animate-ripple blur-2xl`}
          style={{
            inset: "16%",
            animationDelay: "1.2s",
            zIndex: 0,
          }}
        />
      </div>

      {/* Text container below the loader */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
          {mainText}
        </h2>
        <p className="max-w-md text-center text-sm text-gray-600 dark:text-gray-400">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default Loader;
