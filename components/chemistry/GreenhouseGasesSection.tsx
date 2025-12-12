import { memo } from "react";
import { Thermometer } from "lucide-react";
import GreenhouseGasCard from "./GreenhouseGasCard";
import { GREENHOUSE_GASES } from "@/lib/chemistry/atmosphericData";

interface GreenhouseGasesSectionProps {
  isColorful: boolean;
}

const GreenhouseGasesSection = memo(function GreenhouseGasesSection({ 
  isColorful 
}: GreenhouseGasesSectionProps) {
  return (
    <section className="mt-16" aria-labelledby="greenhouse-gases-heading">
      <h2
        id="greenhouse-gases-heading"
        className={`mb-8 text-center text-3xl font-bold ${
          isColorful
            ? "bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent dark:from-green-600 dark:to-emerald-600"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        Greenhouse Gases & Climate Chemistry
      </h2>
      <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <div className="text-center mb-8">
          <Thermometer 
            className="h-16 w-16 text-green-500 mx-auto mb-4" 
            aria-hidden="true"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Radiative Forcing & Global Warming
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Greenhouse gases absorb and emit infrared radiation, trapping heat in the atmosphere 
            and contributing to global climate change through enhanced greenhouse effect.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label="Greenhouse gases information"
        >
          {GREENHOUSE_GASES.map((gas, index) => (
            <div key={index} role="listitem">
              <GreenhouseGasCard
                title={gas.title}
                features={gas.features}
                gwp={gas.gwp}
                bgColor={gas.bgColor}
                textColor={gas.textColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GreenhouseGasesSection;