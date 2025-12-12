import { Layers, Atom, Beaker, Zap } from "lucide-react";

export const POLYMER_CHEMISTRY_TOPICS = [
  {
    href: "/chemistry/intermediate-advanced/polymer-chemistry/polymer-structures-and-properties",
    icon: Layers,
    title: "Polymer Structures & Properties",
    description: "Explore the relationship between polymer structure and physical properties, including molecular weight, crystallinity, and mechanical behavior.",
    keyTopics: [
      "Molecular weight and distribution",
      "Crystalline vs amorphous regions",
      "Glass transition temperature",
      "Mechanical properties",
      "Thermal and electrical properties"
    ],
    iconColor: "text-blue-500",
    hoverColor: "group-hover:text-blue-600",
    buttonText: "Explore Structures & Properties"
  },
  {
    href: "/chemistry/intermediate-advanced/polymer-chemistry/polymer-synthesis",
    icon: Beaker,
    title: "Polymer Synthesis",
    description: "Learn about different polymerization mechanisms, reaction kinetics, and methods for controlling polymer architecture.",
    keyTopics: [
      "Addition polymerization",
      "Condensation polymerization",
      "Ring-opening polymerization",
      "Living polymerization",
      "Controlled radical polymerization"
    ],
    iconColor: "text-green-500",
    hoverColor: "group-hover:text-green-600",
    buttonText: "Explore Synthesis Methods"
  }
];

export const FUNDAMENTAL_CONCEPTS = [
  {
    title: "Polymer Architecture",
    items: [
      "Linear polymers",
      "Branched polymers",
      "Cross-linked networks",
      "Block copolymers"
    ],
    colorScheme: {
      from: "from-blue-100",
      to: "to-cyan-100",
      darkFrom: "dark:from-blue-800",
      darkTo: "dark:to-cyan-800"
    }
  },
  {
    title: "Polymerization Kinetics",
    items: [
      "Initiation mechanisms",
      "Propagation rates",
      "Termination reactions",
      "Chain transfer"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-emerald-100",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-emerald-800"
    }
  },
  {
    title: "Molecular Weight",
    items: [
      "Number average (Mn)",
      "Weight average (Mw)",
      "Polydispersity index",
      "GPC analysis"
    ],
    colorScheme: {
      from: "from-purple-100",
      to: "to-violet-100",
      darkFrom: "dark:from-purple-800",
      darkTo: "dark:to-violet-800"
    }
  },
  {
    title: "Polymer Morphology",
    items: [
      "Crystalline structure",
      "Amorphous regions",
      "Spherulites",
      "Lamellar structure"
    ],
    colorScheme: {
      from: "from-red-100",
      to: "to-pink-100",
      darkFrom: "dark:from-red-800",
      darkTo: "dark:to-pink-800"
    }
  }
];

export const APPLICATIONS = [
  {
    title: "Packaging Materials",
    items: [
      "Food packaging films",
      "Barrier properties",
      "Biodegradable polymers",
      "Smart packaging"
    ],
    colorScheme: {
      from: "from-yellow-100",
      to: "to-orange-100",
      darkFrom: "dark:from-yellow-800",
      darkTo: "dark:to-orange-800"
    }
  },
  {
    title: "Biomedical Applications",
    items: [
      "Drug delivery systems",
      "Biocompatible materials",
      "Tissue engineering scaffolds",
      "Medical implants"
    ],
    colorScheme: {
      from: "from-pink-100",
      to: "to-red-100",
      darkFrom: "dark:from-pink-800",
      darkTo: "dark:to-red-800"
    }
  },
  {
    title: "Electronics",
    items: [
      "Conductive polymers",
      "Organic semiconductors",
      "Flexible electronics",
      "Polymer LEDs"
    ],
    colorScheme: {
      from: "from-cyan-100",
      to: "to-blue-100",
      darkFrom: "dark:from-cyan-800",
      darkTo: "dark:to-blue-800"
    }
  },
  {
    title: "Automotive Industry",
    items: [
      "Lightweight composites",
      "Interior materials",
      "Tire compounds",
      "Fuel system components"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-teal-100",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-teal-800"
    }
  },
  {
    title: "Construction",
    items: [
      "Insulation materials",
      "Adhesives and sealants",
      "Composite structures",
      "Protective coatings"
    ],
    colorScheme: {
      from: "from-violet-100",
      to: "to-purple-100",
      darkFrom: "dark:from-violet-800",
      darkTo: "dark:to-purple-800"
    }
  },
  {
    title: "Textiles & Fibers",
    items: [
      "Synthetic fibers",
      "Performance fabrics",
      "Smart textiles",
      "Fiber reinforcement"
    ],
    colorScheme: {
      from: "from-amber-100",
      to: "to-yellow-100",
      darkFrom: "dark:from-amber-800",
      darkTo: "dark:to-yellow-800"
    }
  }
];