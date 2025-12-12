import { memo } from "react";
import { Sun } from "lucide-react";
import ChemicalReactionCard from "./ChemicalReactionCard";
import { PHOTOCHEMICAL_REACTIONS, PRIMARY_POLLUTANTS, SECONDARY_POLLUTANTS } from "@/lib/chemistry/atmosphericData";

interface PhotochemicalSmogSectionProps {
  isColorful: boolean;
}

const PhotochemicalSmogSection = memo(function PhotochemicalSmogSection({ 
  isColorful 
}: PhotochemicalSmogSectionProps) {
  return (
    <div className="mt-16">
      <h2
        className={`mb-8 text-center text-3xl font-bold ${
          isColorful
            ? "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent dark:from-orange-600 dark:to-red-600"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        Photochemical Smog Formation
      </h2>
      <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <div className="text-center mb-8">
          <Sun className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Urban Air Pollution Chemistry
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Photochemical smog forms when nitrogen oxides and volatile organic compounds 
            react in the presence of sunlight, creating harmful secondary pollutants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className={`${PRIMARY_POLLUTANTS.bgColor} p-6 rounded-lg`}>
            <h4 className={`text-lg font-semibold ${PRIMARY_POLLUTANTS.textColor.replace('700', '800').replace('300', '200')} mb-3`}>
              {PRIMARY_POLLUTANTS.title}
            </h4>
            <ul className={`text-sm ${PRIMARY_POLLUTANTS.textColor} space-y-2`}>
              {PRIMARY_POLLUTANTS.pollutants.map((pollutant, index) => (
                <li key={index}>
                  • <strong>{pollutant.symbol}:</strong> {pollutant.name} {pollutant.description}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`${SECONDARY_POLLUTANTS.bgColor} p-6 rounded-lg`}>
            <h4 className={`text-lg font-semibold ${SECONDARY_POLLUTANTS.textColor.replace('700', '800').replace('300', '200')} mb-3`}>
              {SECONDARY_POLLUTANTS.title}
            </h4>
            <ul className={`text-sm ${SECONDARY_POLLUTANTS.textColor} space-y-2`}>
              {SECONDARY_POLLUTANTS.pollutants.map((pollutant, index) => (
                <li key={index}>
                  • <strong>{pollutant.symbol}:</strong> {pollutant.name} {pollutant.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-yellow-50 p-6 rounded-lg dark:bg-yellow-900">
          <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            Key Photochemical Reactions
          </h4>
          <div className="space-y-3 text-sm text-yellow-700 dark:text-yellow-300">
            {PHOTOCHEMICAL_REACTIONS.map((reaction, index) => (
              <ChemicalReactionCard
                key={index}
                reaction={reaction.reaction}
                description={reaction.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default PhotochemicalSmogSection;