import { Hexagon, Layers, Atom, Beaker } from "lucide-react";

export const ORGANIC_CHEMISTRY_TOPICS = [
  {
    href: "/chemistry/intermediate-advanced/organic-chemistry/functional-groups",
    icon: Hexagon,
    title: "Functional Groups",
    description: "Learn about the key functional groups that define organic compound behavior, their properties, and characteristic reactions.",
    keyTopics: [
      "Hydrocarbons (alkanes, alkenes, alkynes)",
      "Oxygen-containing groups",
      "Nitrogen-containing groups",
      "Aromatic compounds",
      "Functional group transformations"
    ],
    iconColor: "text-green-500",
    hoverColor: "group-hover:text-green-600",
    buttonText: "Explore Functional Groups"
  },
  {
    href: "/chemistry/intermediate-advanced/organic-chemistry/isomers",
    icon: Layers,
    title: "Isomers",
    description: "Understand structural and stereoisomers, their relationships, and how molecular arrangement affects properties.",
    keyTopics: [
      "Constitutional isomers",
      "Stereoisomers and chirality",
      "Enantiomers and diastereomers",
      "Conformational isomers",
      "Optical activity"
    ],
    iconColor: "text-blue-500",
    hoverColor: "group-hover:text-blue-600",
    buttonText: "Explore Isomers"
  },
  {
    href: "/chemistry/intermediate-advanced/organic-chemistry/nomenclature",
    icon: Atom,
    title: "Nomenclature",
    description: "Master the systematic naming of organic compounds using IUPAC rules and understand common naming conventions.",
    keyTopics: [
      "IUPAC naming rules",
      "Priority of functional groups",
      "Stereochemical descriptors",
      "Common names vs systematic names",
      "Complex molecule naming"
    ],
    iconColor: "text-purple-500",
    hoverColor: "group-hover:text-purple-600",
    buttonText: "Explore Nomenclature"
  },
  {
    href: "/chemistry/intermediate-advanced/organic-chemistry/reactions-and-mechanisms",
    icon: Beaker,
    title: "Reactions & Mechanisms",
    description: "Explore organic reaction mechanisms, understand electron flow, and predict reaction outcomes and products.",
    keyTopics: [
      "Nucleophilic substitution (SN1, SN2)",
      "Elimination reactions (E1, E2)",
      "Addition reactions",
      "Aromatic substitution",
      "Carbonyl chemistry"
    ],
    iconColor: "text-orange-500",
    hoverColor: "group-hover:text-orange-600",
    buttonText: "Explore Reactions"
  }
];

export const FUNDAMENTAL_CONCEPTS = [
  {
    title: "Hybridization",
    items: [
      "sp³ tetrahedral",
      "sp² trigonal planar",
      "sp linear",
      "Molecular geometry"
    ],
    colorScheme: {
      from: "from-red-100",
      to: "to-pink-100",
      darkFrom: "dark:from-red-800",
      darkTo: "dark:to-pink-800"
    }
  },
  {
    title: "Resonance",
    items: [
      "Delocalized electrons",
      "Resonance structures",
      "Stability effects",
      "Aromatic systems"
    ],
    colorScheme: {
      from: "from-blue-100",
      to: "to-cyan-100",
      darkFrom: "dark:from-blue-800",
      darkTo: "dark:to-cyan-800"
    }
  },
  {
    title: "Acidity & Basicity",
    items: [
      "pKa values",
      "Structural effects",
      "Lewis acids/bases",
      "Reaction predictions"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-emerald-100",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-emerald-800"
    }
  },
  {
    title: "Thermodynamics",
    items: [
      "Reaction energetics",
      "Transition states",
      "Kinetic vs thermodynamic control",
      "Activation energy"
    ],
    colorScheme: {
      from: "from-purple-100",
      to: "to-violet-100",
      darkFrom: "dark:from-purple-800",
      darkTo: "dark:to-violet-800"
    }
  }
];

export const APPLICATIONS = [
  {
    title: "Pharmaceuticals",
    items: [
      "Drug design and synthesis",
      "Structure-activity relationships",
      "Medicinal chemistry",
      "Natural product isolation"
    ],
    colorScheme: {
      from: "from-yellow-100",
      to: "to-orange-100",
      darkFrom: "dark:from-yellow-800",
      darkTo: "dark:to-orange-800"
    }
  },
  {
    title: "Materials Science",
    items: [
      "Polymers and plastics",
      "Organic semiconductors",
      "Liquid crystals",
      "Composite materials"
    ],
    colorScheme: {
      from: "from-cyan-100",
      to: "to-blue-100",
      darkFrom: "dark:from-cyan-800",
      darkTo: "dark:to-blue-800"
    }
  },
  {
    title: "Biochemistry",
    items: [
      "Enzyme mechanisms",
      "Metabolic pathways",
      "Protein structure",
      "DNA/RNA chemistry"
    ],
    colorScheme: {
      from: "from-pink-100",
      to: "to-red-100",
      darkFrom: "dark:from-pink-800",
      darkTo: "dark:to-red-800"
    }
  },
  {
    title: "Agriculture",
    items: [
      "Pesticides and herbicides",
      "Plant growth regulators",
      "Fertilizer chemistry",
      "Food preservation"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-teal-100",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-teal-800"
    }
  },
  {
    title: "Energy",
    items: [
      "Organic photovoltaics",
      "Fuel additives",
      "Battery materials",
      "Biofuels"
    ],
    colorScheme: {
      from: "from-violet-100",
      to: "to-purple-100",
      darkFrom: "dark:from-violet-800",
      darkTo: "dark:to-purple-800"
    }
  },
  {
    title: "Consumer Products",
    items: [
      "Cosmetics and fragrances",
      "Dyes and pigments",
      "Adhesives and coatings",
      "Cleaning products"
    ],
    colorScheme: {
      from: "from-amber-100",
      to: "to-yellow-100",
      darkFrom: "dark:from-amber-800",
      darkTo: "dark:to-yellow-800"
    }
  }
];