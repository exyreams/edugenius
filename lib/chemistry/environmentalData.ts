// Environmental chemistry data constants

export interface EnvironmentalIssue {
  title: string;
  items: string[];
  bgColor: string;
  textColor: string;
}

export interface BiogeochemicalCycle {
  element: string;
  title: string;
  description: string;
  color: string;
}

export interface EnvironmentalCompartment {
  title: string;
  description: string;
  icon: string;
  items: string[];
  bgColor: string;
  textColor: string;
}

export const ENVIRONMENTAL_ISSUES: EnvironmentalIssue[] = [
  {
    title: "Climate Change",
    items: [
      "CO₂ and greenhouse gases",
      "Carbon cycle disruption", 
      "Ocean acidification",
      "Methane emissions"
    ],
    bgColor: "bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-800 dark:to-orange-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Ozone Depletion",
    items: [
      "CFCs and halons",
      "Stratospheric chemistry",
      "UV radiation effects", 
      "Montreal Protocol"
    ],
    bgColor: "bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Air Pollution",
    items: [
      "Particulate matter (PM2.5, PM10)",
      "NOₓ and SOₓ emissions",
      "Photochemical smog",
      "Indoor air quality"
    ],
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-800 dark:to-orange-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Water Pollution", 
    items: [
      "Eutrophication",
      "Heavy metal contamination",
      "Organic pollutants",
      "Microplastics"
    ],
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Soil Contamination",
    items: [
      "Pesticide residues",
      "Heavy metal accumulation", 
      "Soil acidification",
      "Remediation strategies"
    ],
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800",
    textColor: "text-gray-700 dark:text-gray-200"
  },
  {
    title: "Persistent Pollutants",
    items: [
      "POPs (Persistent Organic Pollutants)",
      "Bioaccumulation",
      "Food chain magnification",
      "Stockholm Convention"
    ],
    bgColor: "bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-800 dark:to-purple-800", 
    textColor: "text-gray-700 dark:text-gray-200"
  }
];

export const BIOGEOCHEMICAL_CYCLES: BiogeochemicalCycle[] = [
  {
    element: "C",
    title: "Carbon Cycle",
    description: "Movement of carbon through atmosphere, biosphere, hydrosphere, and geosphere",
    color: "bg-green-500"
  },
  {
    element: "N", 
    title: "Nitrogen Cycle",
    description: "Transformation of nitrogen compounds through fixation, nitrification, and denitrification",
    color: "bg-blue-500"
  },
  {
    element: "P",
    title: "Phosphorus Cycle", 
    description: "Cycling of phosphorus through rocks, soil, water, and living organisms",
    color: "bg-orange-500"
  },
  {
    element: "S",
    title: "Sulfur Cycle",
    description: "Movement of sulfur through atmosphere, lithosphere, and biosphere", 
    color: "bg-yellow-500"
  }
];

export const ENVIRONMENTAL_COMPARTMENTS: EnvironmentalCompartment[] = [
  {
    title: "Atmospheric Chemistry",
    description: "Chemical reactions in the atmosphere affecting air quality and climate.",
    icon: "Cloud",
    items: [
      "Ozone formation and depletion",
      "Greenhouse gas cycles", 
      "Acid rain formation",
      "Photochemical smog"
    ],
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800",
    textColor: "text-blue-800 dark:text-blue-200"
  },
  {
    title: "Aquatic Chemistry",
    description: "Chemical processes in natural waters and water treatment systems.",
    icon: "Droplets", 
    items: [
      "Water quality parameters",
      "Nutrient cycling",
      "Pollutant transport",
      "Acid-base equilibria"
    ],
    bgColor: "bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-800 dark:to-blue-800",
    textColor: "text-cyan-800 dark:text-cyan-200"
  },
  {
    title: "Soil Chemistry",
    description: "Chemical interactions between soil components and contaminants.",
    icon: "Leaf",
    items: [
      "Soil pH and buffering",
      "Heavy metal mobility", 
      "Organic matter decomposition",
      "Pesticide fate"
    ],
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800",
    textColor: "text-green-800 dark:text-green-200"
  }
];