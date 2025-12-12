import { memo } from "react";
import { Cloud, AlertTriangle } from "lucide-react";
import ChemicalReactionCard from "./ChemicalReactionCard";

interface AcidRainSectionProps {
  isColorful: boolean;
}

interface AcidFormationReaction {
  reaction: string;
  description?: string;
}

const SULFURIC_ACID_REACTIONS: AcidFormationReaction[] = [
  { reaction: "SO₂ + OH• → HSO₃•" },
  { reaction: "HSO₃• + O₂ → SO₃ + HO₂•" },
  { reaction: "SO₃ + H₂O → H₂SO₄" }
];

const NITRIC_ACID_REACTIONS: AcidFormationReaction[] = [
  { reaction: "NO₂ + OH• → HNO₃" },
  { reaction: "N₂O₅ + H₂O → 2HNO₃" }
];

const AcidRainSection = memo(function AcidRainSection({ 
  isColorful 
}: AcidRainSectionProps) {
  return (
    <section className="mt-16" aria-labelledby="acid-rain-heading">
      <h2
        id="acid-rain-heading"
        className={`mb-8 text-center text-3xl font-bold ${
          isColorful
            ? "bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text text-transparent dark:from-gray-600 dark:to-slate-600"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        Acid Rain Chemistry
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="h-8 w-8 text-gray-500" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Formation Mechanisms
            </h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded dark:bg-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Sulfuric Acid Formation
              </h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {SULFURIC_ACID_REACTIONS.map((reaction, index) => (
                  <div key={index} className="bg-white p-2 rounded dark:bg-gray-600">
                    <p className="font-mono text-sm">{reaction.reaction}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded dark:bg-blue-900">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Nitric Acid Formation
              </h4>
              <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                {NITRIC_ACID_REACTIONS.map((reaction, index) => (
                  <div key={index} className="bg-white p-2 rounded dark:bg-gray-600">
                    <p className="font-mono text-sm">{reaction.reaction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-500" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Environmental Effects
            </h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded dark:bg-red-900">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                Ecosystem Damage
              </h4>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1" role="list">
                <li>• Forest decline and tree death</li>
                <li>• Soil acidification</li>
                <li>• Lake and stream acidification</li>
                <li>• Aquatic ecosystem disruption</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded dark:bg-orange-900">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                Material Damage
              </h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1" role="list">
                <li>• Building and monument corrosion</li>
                <li>• Metal structure deterioration</li>
                <li>• Paint and coating damage</li>
                <li>• Cultural heritage destruction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AcidRainSection;