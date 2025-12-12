// Data constants for atmospheric chemistry page

export interface AtmosphericLayer {
  title: string;
  altitudeRange: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

export interface ChemicalReaction {
  reaction: string;
  description: string;
}

export interface GreenhouseGas {
  title: string;
  features: string[];
  gwp: string;
  bgColor: string;
  textColor: string;
}

export interface PollutantCategory {
  title: string;
  pollutants: Array<{
    symbol: string;
    name: string;
    description: string;
  }>;
  bgColor: string;
  textColor: string;
}

export const ATMOSPHERIC_LAYERS: AtmosphericLayer[] = [
  {
    title: "Troposphere",
    altitudeRange: "0-12 km",
    features: [
      "Weather phenomena",
      "Most air pollution",
      "Temperature decreases with altitude",
      "Contains ~80% of atmospheric mass"
    ],
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800",
    textColor: "text-blue-800 dark:text-blue-200"
  },
  {
    title: "Stratosphere",
    altitudeRange: "12-50 km",
    features: [
      "Ozone layer (15-35 km)",
      "Temperature increases with altitude",
      "UV radiation absorption",
      "Stable, stratified layers"
    ],
    bgColor: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-800 dark:to-violet-800",
    textColor: "text-purple-800 dark:text-purple-200"
  },
  {
    title: "Mesosphere",
    altitudeRange: "50-85 km",
    features: [
      "Coldest atmospheric layer",
      "Meteor burnup region",
      "Noctilucent clouds",
      "Temperature decreases with altitude"
    ],
    bgColor: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-800 dark:to-red-800",
    textColor: "text-orange-800 dark:text-orange-200"
  },
  {
    title: "Thermosphere",
    altitudeRange: "85+ km",
    features: [
      "Aurora phenomena",
      "High temperature, low density",
      "Solar radiation absorption",
      "Ionosphere region"
    ],
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800",
    textColor: "text-yellow-800 dark:text-yellow-200"
  }
];

export const PHOTOCHEMICAL_REACTIONS: ChemicalReaction[] = [
  {
    reaction: "NO₂ + hν → NO + O",
    description: "Photolysis of nitrogen dioxide"
  },
  {
    reaction: "O + O₂ + M → O₃ + M",
    description: "Ozone formation"
  },
  {
    reaction: "RH + OH• → R• + H₂O",
    description: "VOC oxidation initiation"
  }
];

export const CHAPMAN_CYCLE_REACTIONS: ChemicalReaction[] = [
  {
    reaction: "O₂ + hν → 2O",
    description: "Oxygen photolysis"
  },
  {
    reaction: "O + O₂ + M → O₃ + M",
    description: "Ozone formation"
  },
  {
    reaction: "O₃ + hν → O₂ + O",
    description: "Ozone photolysis"
  }
];

export const OZONE_DEPLETION_REACTIONS: ChemicalReaction[] = [
  {
    reaction: "Cl + O₃ → ClO + O₂",
    description: "Chlorine attack"
  },
  {
    reaction: "ClO + O → Cl + O₂",
    description: "Chlorine regeneration"
  }
];

export const GREENHOUSE_GASES: GreenhouseGas[] = [
  {
    title: "Carbon Dioxide (CO₂)",
    features: [
      "Most abundant GHG",
      "Fossil fuel combustion",
      "Deforestation",
      "Long atmospheric lifetime"
    ],
    gwp: "1 (reference)",
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800",
    textColor: "text-blue-800 dark:text-blue-200"
  },
  {
    title: "Methane (CH₄)",
    features: [
      "Agriculture & livestock",
      "Natural gas leaks",
      "Wetlands & landfills",
      "Strong IR absorber"
    ],
    gwp: "28 (100-year)",
    bgColor: "bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-800 dark:to-red-800",
    textColor: "text-orange-800 dark:text-orange-200"
  },
  {
    title: "Nitrous Oxide (N₂O)",
    features: [
      "Agricultural fertilizers",
      "Fossil fuel combustion",
      "Industrial processes",
      "Very long lifetime"
    ],
    gwp: "265 (100-year)",
    bgColor: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-800 dark:to-violet-800",
    textColor: "text-purple-800 dark:text-purple-200"
  },
  {
    title: "Fluorinated Gases",
    features: [
      "HFCs, PFCs, SF₆",
      "Refrigeration & AC",
      "Industrial applications",
      "Very high GWP"
    ],
    gwp: "100s-1000s",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800",
    textColor: "text-green-800 dark:text-green-200"
  }
];

export const PRIMARY_POLLUTANTS: PollutantCategory = {
  title: "Primary Pollutants",
  pollutants: [
    { symbol: "NO", name: "Nitric oxide", description: "from combustion" },
    { symbol: "NO₂", name: "Nitrogen dioxide", description: "(brown gas)" },
    { symbol: "VOCs", name: "Volatile organic compounds", description: "" },
    { symbol: "CO", name: "Carbon monoxide", description: "" }
  ],
  bgColor: "bg-orange-50 dark:bg-orange-900",
  textColor: "text-orange-700 dark:text-orange-300"
};

export const SECONDARY_POLLUTANTS: PollutantCategory = {
  title: "Secondary Pollutants",
  pollutants: [
    { symbol: "O₃", name: "Ground-level ozone", description: "" },
    { symbol: "PAN", name: "Peroxyacetyl nitrate", description: "" },
    { symbol: "Aldehydes", name: "Formaldehyde, acetaldehyde", description: "" },
    { symbol: "Organic nitrates", name: "Various compounds", description: "" }
  ],
  bgColor: "bg-red-50 dark:bg-red-900",
  textColor: "text-red-700 dark:text-red-300"
};