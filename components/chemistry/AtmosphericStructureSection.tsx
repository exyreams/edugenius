import { Wind } from "lucide-react";
import AtmosphericLayerCard from "./AtmosphericLayerCard";
import { ATMOSPHERIC_LAYERS } from "@/lib/chemistry/atmosphericData";

interface AtmosphericStructureSectionProps {
  isColorful: boolean;
}

export default function AtmosphericStructureSection({ isColorful }: AtmosphericStructureSectionProps) {
  return (
    <div className="mt-16">
      <h2
        className={`mb-8 text-center text-3xl font-bold ${
          isColorful
            ? "bg-gradient-to-r from-blue-700 to-sky-700 bg-clip-text text-transparent dark:from-blue-600 dark:to-sky-600"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        Structure of the Atmosphere
      </h2>
      <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <div className="text-center mb-8">
          <Wind className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Atmospheric Layers
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The atmosphere is divided into distinct layers based on temperature profiles, 
            each with unique chemical processes and environmental significance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ATMOSPHERIC_LAYERS.map((layer, index) => (
            <AtmosphericLayerCard
              key={index}
              title={layer.title}
              altitudeRange={layer.altitudeRange}
              features={layer.features}
              bgColor={layer.bgColor}
              textColor={layer.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}