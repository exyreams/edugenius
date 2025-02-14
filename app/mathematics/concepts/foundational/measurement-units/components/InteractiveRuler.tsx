import React, { useEffect, useRef, useState } from "react";
import { Move, Ruler } from "lucide-react";

/**
 * @component InteractiveRuler
 * @description An enhanced interactive ruler component that visually demonstrates length measurement
 * with additional features like units toggle, snapping, and visual markers.
 * @param {object} props - The component props.
 * @param {number} props.maxLength - The maximum length the ruler can display (in cm).
 * @param {boolean} [props.isColorful=true] - Determines if the ruler uses a colorful or grayscale theme.
 * @returns {JSX.Element} An interactive ruler.
 */
const InteractiveRuler: React.FC<{
  maxLength: number;
  isColorful?: boolean;
}> = ({ maxLength, isColorful = true }) => {
  const [length, setLength] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [showSnapping, setShowSnapping] = useState(true);
  const [activeUnit, setActiveUnit] = useState<"cm" | "in">("cm");
  const [isAnimating, setIsAnimating] = useState(false);
  const rulerRef = useRef<HTMLDivElement>(null);

  // Convert between units
  const cmToInches = (cm: number) => cm * 0.393701;
  const inchesToCm = (inches: number) => inches / 0.393701;

  // Get current length in active unit
  const displayLength = activeUnit === "cm" ? length : cmToInches(length);
  const maxLengthInActiveUnit =
    activeUnit === "cm" ? maxLength : cmToInches(maxLength);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setLength(activeUnit === "cm" ? newValue : inchesToCm(newValue));

    // Trigger animation effect
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleReactTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleReactTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || !rulerRef.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const deltaX = touchCurrentX - touchStartX;

    const cmPerPixel = maxLength / rulerRef.current.offsetWidth;
    let newLength = Math.min(
      maxLength,
      Math.max(0, length + deltaX * cmPerPixel),
    );

    // Apply snapping if enabled
    if (showSnapping) {
      const snapThreshold = 0.25; // cm
      const nearestHalf = Math.round(newLength * 2) / 2;
      if (Math.abs(newLength - nearestHalf) < snapThreshold) {
        newLength = nearestHalf;
      }
    }

    setLength(newLength);
    setTouchStartX(touchCurrentX);

    // Trigger animation effect
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleReactTouchEnd = () => {
    setTouchStartX(null);
  };

  // Native event handlers for the useEffect
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartX === null || !rulerRef.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const deltaX = touchCurrentX - touchStartX;

    const cmPerPixel = maxLength / rulerRef.current.offsetWidth;
    let newLength = Math.min(
      maxLength,
      Math.max(0, length + deltaX * cmPerPixel),
    );

    // Apply snapping if enabled
    if (showSnapping) {
      const snapThreshold = 0.25; // cm
      const nearestHalf = Math.round(newLength * 2) / 2;
      if (Math.abs(newLength - nearestHalf) < snapThreshold) {
        newLength = nearestHalf;
      }
    }

    setLength(newLength);
    setTouchStartX(touchCurrentX);

    // Trigger animation effect
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const toggleUnit = () => {
    setActiveUnit((prev) => (prev === "cm" ? "in" : "cm"));
  };

  useEffect(() => {
    const ruler = rulerRef.current;
    if (ruler) {
      ruler.addEventListener("touchstart", handleTouchStart);
      ruler.addEventListener("touchmove", handleTouchMove);
      ruler.addEventListener("touchend", handleTouchEnd);

      return () => {
        ruler.removeEventListener("touchstart", handleTouchStart);
        ruler.removeEventListener("touchmove", handleTouchMove);
        ruler.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [length, touchStartX, maxLength, showSnapping]);

  const activeWidth = `${(length / maxLength) * 100}%`;

  // Generate marks based on active unit
  const generateMarks = () => {
    const marks = [];
    const step = activeUnit === "cm" ? 1 : 0.5; // 1cm or 0.5 inch steps
    const total = activeUnit === "cm" ? maxLength : cmToInches(maxLength);

    for (let i = 0; i <= total; i += step) {
      const position = activeUnit === "cm" ? i : inchesToCm(i);
      const isMajorMark = activeUnit === "cm" ? i % 1 === 0 : i % 1 === 0;

      marks.push(
        <div
          key={i}
          className={`absolute top-full ${isMajorMark ? "-mt-px h-3 font-mono text-xs" : "mt-1 h-1.5"} w-px transition-all`}
          style={{
            left: `${(position / maxLength) * 100}%`,
            backgroundColor:
              i <= length
                ? isColorful
                  ? "rgb(59, 130, 246)"
                  : "rgb(75, 85, 99)"
                : "rgb(156, 163, 175)",
          }}
        >
          {isMajorMark && i > 0 && i < total && (
            <span className="absolute -ml-2 mt-3 opacity-70">{i}</span>
          )}
        </div>,
      );
    }
    return marks;
  };

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center p-4">
      <div className="mb-2 flex w-full justify-between">
        <h3 className="text-lg font-semibold">Interactive Ruler</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowSnapping(!showSnapping)}
            className={`rounded-md p-1 transition-colors ${
              showSnapping
                ? isColorful
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-200 text-gray-700"
                : "bg-gray-100 text-gray-400"
            }`}
            title={showSnapping ? "Snapping enabled" : "Snapping disabled"}
          >
            <Move size={18} />
          </button>
          <button
            onClick={toggleUnit}
            className="flex items-center space-x-1 rounded-md p-1 transition-colors"
            title="Toggle units"
          >
            <Ruler size={18} />
            <span className="font-mono text-sm">{activeUnit}</span>
          </button>
        </div>
      </div>

      <div
        ref={rulerRef}
        className={`relative h-8 w-full cursor-pointer rounded-full ${
          isColorful
            ? "bg-gray-200 dark:bg-gray-700"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
        onTouchStart={handleReactTouchStart}
        onTouchMove={handleReactTouchMove}
        onTouchEnd={handleReactTouchEnd}
      >
        <div
          className={`transition-width absolute left-0 top-0 h-full rounded-full duration-150 ${
            isAnimating ? "animate-pulse" : ""
          } ${isColorful ? "bg-blue-500" : "bg-gray-500"}`}
          style={{ width: activeWidth }}
        ></div>

        {/* Ruler handle */}
        <div
          className={`absolute -top-2 -ml-0.5 h-12 w-1 rounded-sm ${
            isColorful ? "bg-blue-600" : "bg-gray-600"
          } transition-all`}
          style={{ left: activeWidth }}
        />

        {generateMarks()}
      </div>

      <input
        type="range"
        min="0"
        max={maxLengthInActiveUnit.toString()}
        step={activeUnit === "cm" ? "0.1" : "0.05"}
        value={displayLength}
        onChange={handleSliderChange}
        className={`mt-8 w-full ${
          isColorful ? "accent-blue-500" : "accent-gray-500"
        }`}
      />

      <div className="mt-4 flex items-center text-lg">
        <div
          className={`font-mono text-xl font-semibold ${isAnimating ? "animate-bounce" : ""}`}
        >
          {displayLength.toFixed(1)}
        </div>
        <span className="ml-1 mr-2">{activeUnit}</span>
        <span className="text-gray-500">
          {activeUnit === "cm"
            ? `(${cmToInches(length).toFixed(1)} in)`
            : `(${inchesToCm(displayLength).toFixed(1)} cm)`}
        </span>
      </div>
    </div>
  );
};

export default InteractiveRuler;
