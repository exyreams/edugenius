import React, { useState } from "react";

interface InteractiveMeasuringCupProps {
  maxVolume: number;
  initialVolume?: number;
}

const InteractiveMeasuringCup: React.FC<InteractiveMeasuringCupProps> = ({
  maxVolume,
  initialVolume = 0,
}) => {
  const [volume, setVolume] = useState(initialVolume);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(Math.min(Math.max(0, newVolume), maxVolume));
  };

  const fillHeight = `${(volume / maxVolume) * 100}%`;

  return (
    <div className="flex w-64 flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-lg">
      {/* Cup Container */}
      <div className="relative h-40 w-32">
        {/* Cup Body */}
        <div className="absolute inset-0 overflow-hidden rounded-lg border-2 border-gray-300 bg-gray-50">
          {/* Liquid */}
          <div
            className="absolute bottom-0 w-full bg-gradient-to-b from-blue-400 to-blue-500 transition-all duration-300 ease-in-out"
            style={{ height: fillHeight }}
          >
            {/* Liquid Surface Shine */}
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-white/30" />
          </div>

          {/* Measurement Lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute flex w-full items-center"
              style={{ bottom: `${(i * 100) / 4}%` }}
            >
              <div className="flex w-full items-center">
                <div className="h-px w-2 bg-gray-300" />
                <span className="ml-1 text-[10px] text-gray-500">
                  {((maxVolume * i) / 4).toFixed(0)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Glass Reflection */}
        <div className="absolute bottom-0 right-0 top-0 w-2 rounded-r-lg bg-gradient-to-l from-white/20 to-transparent" />
      </div>

      {/* Controls Section */}
      <div className="w-full space-y-3">
        {/* Volume Display */}
        <div className="text-center">
          <span className="text-lg font-semibold text-gray-700">
            {volume.toFixed(0)} mL
          </span>
          <span className="ml-1 text-sm text-gray-500">
            ({(volume * 0.033814).toFixed(1)} oz)
          </span>
        </div>

        {/* Slider Control */}
        <input
          type="range"
          min="0"
          max={maxVolume}
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
        />

        {/* Quick Volume Buttons */}
        <div className="flex justify-center gap-2">
          {[0, 50, 100].map((percentage) => (
            <button
              key={percentage}
              onClick={() => handleVolumeChange((maxVolume * percentage) / 100)}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium
                       text-gray-700 transition-colors hover:bg-gray-200"
            >
              {percentage}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMeasuringCup;
