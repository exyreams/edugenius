import type { 
  CarbohydrateClassification, 
  PolysaccharideSection, 
  MetabolismProcess, 
  CarbohydrateFunction 
} from "@/types/chemistry";

// Data constants for carbohydrate page
export const CARBOHYDRATE_CLASSIFICATIONS: CarbohydrateClassification[] = [
  {
    title: "Monosaccharides",
    description: "Simple sugars that cannot be hydrolyzed into smaller carbohydrates.",
    icon: "Hexagon",
    iconColor: "text-blue-500",
    examples: [
      {
        title: "Common Examples",
        items: [
          "Glucose (C₆H₁₂O₆) - blood sugar",
          "Fructose (C₆H₁₂O₆) - fruit sugar", 
          "Galactose (C₆H₁₂O₆) - milk sugar component",
          "Ribose (C₅H₁₀O₅) - RNA component"
        ],
        bgColor: "bg-blue-50 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-200"
      }
    ],
    features: [
      {
        title: "Key Features",
        items: [
          "Aldoses (aldehyde group) or ketoses (ketone group)",
          "Multiple chiral centers",
          "Ring and linear forms in equilibrium"
        ]
      }
    ]
  },
  {
    title: "Disaccharides", 
    description: "Two monosaccharides linked by a glycosidic bond.",
    icon: "Atom",
    iconColor: "text-green-500",
    examples: [
      {
        title: "Common Examples",
        items: [
          "Sucrose = Glucose + Fructose",
          "Lactose = Glucose + Galactose",
          "Maltose = Glucose + Glucose",
          "Cellobiose = Glucose + Glucose (β-1,4)"
        ],
        bgColor: "bg-green-50 dark:bg-green-900",
        textColor: "text-green-800 dark:text-green-200"
      }
    ],
    features: [
      {
        title: "Glycosidic Bonds",
        items: [
          "α-1,4 or β-1,4 linkages",
          "Hydrolyzed by specific enzymes",
          "Reducing or non-reducing sugars"
        ]
      }
    ]
  },
  {
    title: "Polysaccharides",
    description: "Long chains of monosaccharides linked by glycosidic bonds.",
    icon: "Zap", 
    iconColor: "text-purple-500",
    examples: [
      {
        title: "Major Types",
        items: [
          "Starch (energy storage in plants)",
          "Glycogen (energy storage in animals)",
          "Cellulose (structural in plants)",
          "Chitin (structural in arthropods)"
        ],
        bgColor: "bg-purple-50 dark:bg-purple-900",
        textColor: "text-purple-800 dark:text-purple-200"
      }
    ],
    features: [
      {
        title: "Properties",
        items: [
          "High molecular weight",
          "Branched or linear structures", 
          "Storage or structural functions"
        ]
      }
    ]
  }
];

export const POLYSACCHARIDE_SECTIONS: PolysaccharideSection[] = [
  {
    title: "Energy Storage Polysaccharides",
    items: [
      {
        name: "Starch (Plants)",
        description: "Primary energy storage in plants",
        details: [
          "Amylose: linear α-1,4 glucose chains",
          "Amylopectin: branched with α-1,6 bonds", 
          "Found in seeds, tubers, and grains",
          "Easily digestible by humans"
        ],
        bgColor: "bg-yellow-50 dark:bg-yellow-900",
        textColor: "text-yellow-800 dark:text-yellow-200"
      },
      {
        name: "Glycogen (Animals)",
        description: "Primary energy storage in animals",
        details: [
          "Highly branched glucose polymer",
          "α-1,4 and α-1,6 glycosidic bonds",
          "Stored in liver and muscle tissue",
          "Rapid mobilization for energy"
        ],
        bgColor: "bg-orange-50 dark:bg-orange-900", 
        textColor: "text-orange-800 dark:text-orange-200"
      }
    ]
  },
  {
    title: "Structural Polysaccharides",
    items: [
      {
        name: "Cellulose (Plants)",
        description: "Major structural component of plant cell walls",
        details: [
          "Linear β-1,4 glucose chains",
          "Hydrogen bonding between chains",
          "Major component of plant cell walls",
          "Indigestible by most animals"
        ],
        bgColor: "bg-green-50 dark:bg-green-900",
        textColor: "text-green-800 dark:text-green-200"
      },
      {
        name: "Chitin (Arthropods)",
        description: "Structural component of exoskeletons",
        details: [
          "N-acetylglucosamine polymer",
          "β-1,4 glycosidic bonds",
          "Exoskeletons and fungal cell walls",
          "Second most abundant polysaccharide"
        ],
        bgColor: "bg-blue-50 dark:bg-blue-900",
        textColor: "text-blue-800 dark:text-blue-200"
      }
    ]
  }
];

export const METABOLISM_PROCESSES: MetabolismProcess[] = [
  {
    title: "Glycolysis",
    description: "The breakdown of glucose to pyruvate, producing ATP and NADH.",
    icon: "Zap",
    iconColor: "text-red-500",
    sections: [
      {
        title: "Key Steps",
        items: [
          "Glucose → Glucose-6-phosphate",
          "Fructose-6-phosphate → Fructose-1,6-bisphosphate",
          "Glyceraldehyde-3-phosphate → Pyruvate"
        ],
        bgColor: "bg-red-50 dark:bg-red-900",
        textColor: "text-red-800 dark:text-red-200"
      },
      {
        title: "Net Products",
        items: [
          "2 ATP molecules",
          "2 NADH molecules", 
          "2 Pyruvate molecules"
        ],
        bgColor: "bg-gray-50 dark:bg-gray-700",
        textColor: "text-gray-800 dark:text-gray-200"
      }
    ]
  },
  {
    title: "Gluconeogenesis",
    description: "The synthesis of glucose from non-carbohydrate precursors.",
    icon: "Leaf",
    iconColor: "text-green-500",
    sections: [
      {
        title: "Precursors",
        items: [
          "Amino acids (alanine, glycine)",
          "Lactate (from muscle)",
          "Glycerol (from fat breakdown)"
        ],
        bgColor: "bg-green-50 dark:bg-green-900",
        textColor: "text-green-800 dark:text-green-200"
      },
      {
        title: "Importance",
        items: [
          "Maintains blood glucose levels",
          "Active during fasting",
          "Primarily occurs in liver"
        ],
        bgColor: "bg-gray-50 dark:bg-gray-700",
        textColor: "text-gray-800 dark:text-gray-200"
      }
    ]
  }
];

export const CARBOHYDRATE_FUNCTIONS: CarbohydrateFunction[] = [
  {
    title: "Energy Storage",
    description: "Primary fuel for cellular respiration and ATP production",
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-800 dark:to-emerald-800"
  },
  {
    title: "Structural Support", 
    description: "Cell walls, exoskeletons, and connective tissues",
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800"
  },
  {
    title: "Cell Recognition",
    description: "Glycoproteins and glycolipids for cellular communication", 
    bgColor: "bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-800 dark:to-violet-800"
  }
];