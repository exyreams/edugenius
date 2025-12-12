import { memo } from "react";
import { Zap, AlertTriangle } from "lucide-react";
import ChemicalReactionCard from "./ChemicalReactionCard";
import { CHAPMAN_CYCLE_REACTIONS, OZONE_DEPLETION_REACTIONS } from "@/lib/chemistry/atmosphericData";

interface OzoneChemistrySectionProps {
  isColorful: boolean;
}

const OzoneChemistrySection = memo(function OzoneChemistrySection({ 
  isColorful 
}: OzoneChemistrySectionProps) {
  return (
    <section className="mt-16" aria-labelledby="ozone-chemistry-heading">
      <h2
        id="ozone-chemistry-heading"
        className={`mb-8 text-center text-3xl font-bold ${
          isColorful
            ? "bg-gradient-to-r from-purple-700 to-violet-700 bg-clip-text text-transparent dark:from-purple-600 dark:to-violet-600"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        Stratospheric Ozone Chemistry
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-purple-500" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Ozone Formation & Destruction
            </h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded dark:bg-purple-900">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                Chapman Cycle
              </h4>
              <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                {CHAPMAN_CYCLE_REACTIONS.map((reaction, index) => (
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

        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Ozone Depletion
            </h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded dark:bg-red-900">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                Catalytic Destruction
              </h4>
              <div className="space-y-2 text-sm text-red-700 dark:text-red-300">
                {OZONE_DEPLETION_REACTIONS.map((reaction, index) => (
                  <ChemicalReactionCard
                    key={index}
                    reaction={reaction.reaction}
                    description={reaction.description}
                  />
                ))}
                <p className="text-xs italic mt-2">
                  Net: O₃ + O → 2O₂ (catalyzed by Cl)
                </p>
              </div>
            </div>
            <div className="bg-orange-50 p-3 rounded dark:bg-orange-900">
              <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                Ozone Depleting Substances
              </h5>
              <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1">
                <li>• CFCs (Chlorofluorocarbons)</li>
                <li>• HCFCs (Hydrochlorofluorocarbons)</li>
                <li>• Halons (Brominated compounds)</li>
                <li>• Methyl bromide</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default OzoneChemistrySection;