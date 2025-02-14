import React, { useEffect, useMemo, useState } from "react";

/**
 * @component InteractiveClock
 * @description An enhanced interactive clock component with improved styling and accessibility
 * @param {object} props The component props
 * @param {boolean} [props.isColorful=true] Determines if the clock uses a colorful or grayscale theme
 * @param {string} [props.size="medium"] Size of the clock - "small", "medium", or "large"
 * @param {boolean} [props.showDigital=true] Whether to show digital time display
 * @returns {JSX.Element} An interactive clock component
 */
const InteractiveClock: React.FC<{
  isColorful?: boolean;
  size?: "small" | "medium" | "large";
  showDigital?: boolean;
}> = ({ isColorful = true, size = "medium", showDigital = true }) => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  // Clock size mapping
  const sizeMap = {
    small: "h-24 w-24",
    medium: "h-40 w-40",
    large: "h-56 w-56",
  };

  // Update time every second when clock is running
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  // Calculate hand rotations
  const hourRotation = `rotate(${
    (time.getHours() % 12) * 30 + time.getMinutes() * 0.5
  }deg)`;

  const minuteRotation = `rotate(${time.getMinutes() * 6}deg)`;

  const secondRotation = `rotate(${time.getSeconds() * 6}deg)`;

  // Generate clock number markers
  const clockNumbers = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = ((i + 1) * 30 * Math.PI) / 180;
      // Adjust the radius to place numbers closer to the edge of the clock
      const numberRadius = size === "small" ? 1 : size === "medium" ? 5 : 7;

      // Calculate position for each number
      const x = Math.sin(angle) * numberRadius;
      const y = -Math.cos(angle) * numberRadius;

      return (
        <div
          key={i}
          className="absolute text-xs font-semibold sm:text-sm"
          style={{
            transform: `translate(${x}em, ${y}em)`,
            color: isColorful ? "var(--text-color)" : "var(--muted-text-color)",
          }}
        >
          {i + 1}
        </div>
      );
    });
  }, [size, isColorful]);

  // Theme colors based on isColorful prop
  const clockFaceColor = isColorful
    ? "bg-white dark:bg-gray-800"
    : "bg-gray-200 dark:bg-gray-700";
  const borderColor = isColorful
    ? "border-blue-300 dark:border-blue-700"
    : "border-gray-400 dark:border-gray-600";
  const hourHandColor = isColorful
    ? "bg-indigo-700 dark:bg-indigo-300"
    : "bg-gray-800 dark:bg-gray-300";
  const minuteHandColor = isColorful
    ? "bg-blue-600 dark:bg-blue-400"
    : "bg-gray-700 dark:bg-gray-400";
  const secondHandColor = isColorful
    ? "bg-red-500 dark:bg-red-400"
    : "bg-gray-600 dark:bg-gray-500";
  const buttonColor = isColorful
    ? "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
    : "bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700";

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Clock Container */}
      <div
        className={`relative ${sizeMap[size]} rounded-full ${clockFaceColor} border-8 ${borderColor} flex items-center justify-center shadow-lg transition-all duration-300`}
        style={
          {
            "--text-color": "rgb(55, 65, 81)",
            "--muted-text-color": "rgb(107, 114, 128)",
          } as React.CSSProperties
        }
        role="img"
        aria-label={`Analog clock showing ${time.toLocaleTimeString()}`}
      >
        {/* Clock Numbers */}
        {clockNumbers}

        {/* Hour Hand */}
        <div
          className={`absolute bottom-1/2 left-1/2 w-1.5 rounded-full ${hourHandColor} shadow-sm transition-transform`}
          style={{
            height:
              size === "small" ? "25%" : size === "medium" ? "28%" : "30%",
            transform: hourRotation,
            transformOrigin: "50% 100%",
          }}
        ></div>

        {/* Minute Hand */}
        <div
          className={`absolute bottom-1/2 left-1/2 w-1 rounded-full ${minuteHandColor} shadow-sm transition-transform`}
          style={{
            height:
              size === "small" ? "35%" : size === "medium" ? "38%" : "40%",
            transform: minuteRotation,
            transformOrigin: "50% 100%",
          }}
        ></div>

        {/* Second Hand */}
        <div
          className={`absolute bottom-1/2 left-1/2 w-0.5 rounded-full ${secondHandColor} transition-transform`}
          style={{
            height:
              size === "small" ? "45%" : size === "medium" ? "48%" : "50%",
            transform: secondRotation,
            transformOrigin: "50% 100%",
          }}
        ></div>

        {/* Center Dot */}
        <div
          className={`absolute rounded-full ${
            isColorful
              ? "bg-gray-900 dark:bg-gray-200"
              : "bg-gray-800 dark:bg-gray-300"
          } ${
            size === "small"
              ? "h-2 w-2"
              : size === "medium"
                ? "h-3 w-3"
                : "h-4 w-4"
          }`}
        ></div>
      </div>

      {/* Digital Time Display */}
      {showDigital && (
        <p className="font-mono text-lg tracking-wide text-gray-800 dark:text-gray-200">
          {time.toLocaleTimeString(undefined, { hour12: true })}
        </p>
      )}

      {/* Control Button */}
      <button
        onClick={() => setIsRunning(!isRunning)}
        className={`mt-2 rounded-md px-4 py-2 text-white transition-colors duration-200 ${buttonColor} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        aria-label={isRunning ? "Stop clock" : "Start clock"}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default InteractiveClock;
