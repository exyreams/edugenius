import { Atom, Sun, Target, Beaker } from "lucide-react";
import { NuclearReactionType, StellarProcess, ApplicationArea, SafetyConsideration } from "@/types/nuclear-chemistry";

export const NUCLEAR_REACTION_TYPES: NuclearReactionType[] = [
  {
    id: "fission",
    icon: Atom,
    title: "Nuclear Fission",
    generalProcess: "Heavy nucleus → 2 fragments + neutrons + energy",
    example: "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + energy",
    exampleLabel: "Example (U-235)",
    features: [
      "Splits heavy nuclei (A > 230)",
      "Releases ~200 MeV per fission",
      "Chain reaction possible",
      "Used in nuclear power plants"
    ],
    colorScheme: {
      from: "from-red-100",
      to: "to-orange-100",
      iconColor: "text-red-500",
      processColor: "bg-red-50 dark:bg-red-900",
      exampleColor: "bg-orange-50 dark:bg-orange-900"
    }
  },
  {
    id: "fusion",
    icon: Sun,
    title: "Nuclear Fusion",
    generalProcess: "Light nuclei → Heavier nucleus + energy",
    example: "²H + ³H → ⁴He + n + 17.6 MeV",
    exampleLabel: "Example (D-T fusion)",
    features: [
      "Combines light nuclei (A < 60)",
      "Requires extremely high temperatures",
      "Powers the sun and stars",
      "Clean energy source potential"
    ],
    colorScheme: {
      from: "from-blue-100",
      to: "to-cyan-100",
      iconColor: "text-blue-500",
      processColor: "bg-blue-50 dark:bg-blue-900",
      exampleColor: "bg-cyan-50 dark:bg-cyan-900"
    }
  },
  {
    id: "transmutation",
    icon: Target,
    title: "Artificial Transmutation",
    generalProcess: "Target + Projectile → Product + Ejectile",
    example: "¹⁴N + ⁴He → ¹⁷O + ¹H",
    exampleLabel: "Example (First artificial)",
    features: [
      "Creates new elements/isotopes",
      "Uses particle accelerators",
      "Discovered by Rutherford (1919)",
      "Produces transuranium elements"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-emerald-100",
      iconColor: "text-green-500",
      processColor: "bg-green-50 dark:bg-green-900",
      exampleColor: "bg-emerald-50 dark:bg-emerald-900"
    }
  },
  {
    id: "neutron-activation",
    icon: Beaker,
    title: "Neutron Activation",
    generalProcess: "Stable nucleus + n → Radioactive nucleus",
    example: "⁵⁹Co + n → ⁶⁰Co (radioactive)",
    exampleLabel: "Example",
    features: [
      "Creates radioactive isotopes",
      "Used in neutron activation analysis",
      "Medical isotope production",
      "Research applications"
    ],
    colorScheme: {
      from: "from-purple-100",
      to: "to-violet-100",
      iconColor: "text-purple-500",
      processColor: "bg-purple-50 dark:bg-purple-900",
      exampleColor: "bg-violet-50 dark:bg-violet-900"
    }
  }
];

export const STELLAR_PROCESSES: StellarProcess[] = [
  {
    id: "hydrogen-burning",
    title: "Hydrogen Burning",
    process: "Proton-Proton Chain",
    equation: "4¹H → ⁴He + 2e⁺ + 2νₑ + 26.7 MeV",
    description: "Powers main sequence stars like our Sun",
    colorScheme: {
      from: "from-yellow-100",
      to: "to-orange-100"
    }
  },
  {
    id: "helium-burning",
    title: "Helium Burning",
    process: "Triple-Alpha Process",
    equation: "3⁴He → ¹²C + γ",
    description: "Creates carbon in red giant stars",
    colorScheme: {
      from: "from-red-100",
      to: "to-pink-100"
    }
  },
  {
    id: "advanced-burning",
    title: "Advanced Burning",
    process: "Silicon Burning",
    description: "Creates elements up to iron-56. Occurs in massive stars before supernova",
    colorScheme: {
      from: "from-blue-100",
      to: "to-indigo-100"
    }
  },
  {
    id: "supernova",
    title: "Supernova Nucleosynthesis",
    process: "r-process & s-process",
    description: "Rapid and slow neutron capture. Creates elements heavier than iron",
    colorScheme: {
      from: "from-purple-100",
      to: "to-violet-100"
    }
  },
  {
    id: "big-bang",
    title: "Big Bang Nucleosynthesis",
    process: "Primordial Elements",
    description: "H, He, Li, Be, B. First 20 minutes after Big Bang",
    colorScheme: {
      from: "from-green-100",
      to: "to-teal-100"
    }
  },
  {
    id: "cosmic-ray",
    title: "Cosmic Ray Spallation",
    process: "High-Energy Collisions",
    description: "Creates Li, Be, B. Fragmentation of heavier nuclei",
    colorScheme: {
      from: "from-orange-100",
      to: "to-red-100"
    }
  }
];

export const APPLICATION_AREAS: ApplicationArea[] = [
  {
    id: "nuclear-power",
    title: "Nuclear Power",
    applications: [
      "Electricity generation (~10% global)",
      "Nuclear submarines and ships",
      "Space probe power sources",
      "Carbon-free energy source"
    ],
    colorScheme: {
      from: "from-blue-100",
      to: "to-cyan-100"
    }
  },
  {
    id: "medical",
    title: "Medical Applications",
    applications: [
      "Radioisotope production",
      "Cancer treatment (neutron therapy)",
      "Medical imaging isotopes",
      "Sterilization of medical equipment"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-emerald-100"
    }
  },
  {
    id: "research",
    title: "Research Applications",
    applications: [
      "Element synthesis (superheavy elements)",
      "Neutron activation analysis",
      "Nuclear physics research",
      "Fundamental particle studies"
    ],
    colorScheme: {
      from: "from-purple-100",
      to: "to-violet-100"
    }
  },
  {
    id: "industrial",
    title: "Industrial Applications",
    applications: [
      "Neutron radiography",
      "Material testing",
      "Polymer modification",
      "Gemstone color enhancement"
    ],
    colorScheme: {
      from: "from-yellow-100",
      to: "to-orange-100"
    }
  },
  {
    id: "future-energy",
    title: "Future Energy",
    applications: [
      "Fusion power development",
      "ITER project",
      "Inertial confinement fusion",
      "Clean, abundant energy"
    ],
    colorScheme: {
      from: "from-red-100",
      to: "to-pink-100"
    }
  },
  {
    id: "space",
    title: "Space Applications",
    applications: [
      "Radioisotope thermoelectric generators",
      "Nuclear thermal propulsion",
      "Deep space power sources",
      "Mars mission applications"
    ],
    colorScheme: {
      from: "from-indigo-100",
      to: "to-blue-100"
    }
  }
];

export const SAFETY_CONSIDERATIONS: SafetyConsideration[] = [
  {
    id: "radiation-safety",
    title: "Radiation Safety",
    description: "Proper shielding, monitoring, and safety protocols for nuclear facilities",
    icon: "AlertTriangle",
    bgColor: "bg-red-500"
  },
  {
    id: "nuclear-waste",
    title: "Nuclear Waste",
    description: "Long-term storage and disposal of radioactive waste materials",
    icon: "Waste",
    bgColor: "bg-yellow-500"
  },
  {
    id: "non-proliferation",
    title: "Non-Proliferation",
    description: "International treaties to prevent spread of nuclear weapons",
    icon: "NPT",
    bgColor: "bg-blue-500"
  },
  {
    id: "regulation",
    title: "Regulation",
    description: "International oversight and safety standards for nuclear activities",
    icon: "IAEA",
    bgColor: "bg-green-500"
  }
];