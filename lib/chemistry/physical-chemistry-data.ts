import { Zap, Thermometer, Atom, BarChart3 } from "lucide-react";

export const PHYSICAL_CHEMISTRY_TOPICS = [
  {
    href: "/chemistry/intermediate-advanced/physical-chemistry/chemical-kinetics",
    icon: Zap,
    title: "Chemical Kinetics",
    description: "Study reaction rates, rate laws, and the factors that influence how fast chemical reactions occur.",
    keyTopics: [
      "Rate laws and reaction orders",
      "Integrated rate equations",
      "Activation energy and Arrhenius equation",
      "Reaction mechanisms and catalysis",
      "Enzyme kinetics"
    ],
    iconColor: "text-yellow-500",
    hoverColor: "group-hover:text-yellow-600",
    buttonText: "Explore Kinetics"
  },
  {
    href: "/chemistry/intermediate-advanced/physical-chemistry/chemical-thermodynamics",
    icon: Thermometer,
    title: "Chemical Thermodynamics",
    description: "Understand energy changes, spontaneity, and equilibrium in chemical systems through thermodynamic principles.",
    keyTopics: [
      "Laws of thermodynamics",
      "Enthalpy, entropy, and Gibbs free energy",
      "Chemical equilibrium",
      "Phase transitions and diagrams",
      "Electrochemical thermodynamics"
    ],
    iconColor: "text-red-500",
    hoverColor: "group-hover:text-red-600",
    buttonText: "Explore Thermodynamics"
  },
  {
    href: "/chemistry/intermediate-advanced/physical-chemistry/quantum-chemistry",
    icon: Atom,
    title: "Quantum Chemistry",
    description: "Explore the quantum mechanical foundations of chemical bonding, molecular structure, and spectroscopy.",
    keyTopics: [
      "Wave-particle duality",
      "Schrödinger equation",
      "Atomic and molecular orbitals",
      "Molecular orbital theory",
      "Spectroscopy and selection rules"
    ],
    iconColor: "text-purple-500",
    hoverColor: "group-hover:text-purple-600",
    buttonText: "Explore Quantum Chemistry"
  }
];

export const FUNDAMENTAL_CONCEPTS = [
  {
    title: "Thermodynamic Functions",
    items: [
      "Internal energy (U)",
      "Enthalpy (H)",
      "Entropy (S)",
      "Gibbs free energy (G)"
    ],
    colorScheme: {
      from: "from-red-100",
      to: "to-orange-100",
      darkFrom: "dark:from-red-800",
      darkTo: "dark:to-orange-800"
    }
  },
  {
    title: "Kinetic Theory",
    items: [
      "Collision theory",
      "Transition state theory",
      "Rate constants",
      "Temperature dependence"
    ],
    colorScheme: {
      from: "from-yellow-100",
      to: "to-amber-100",
      darkFrom: "dark:from-yellow-800",
      darkTo: "dark:to-amber-800"
    }
  },
  {
    title: "Quantum Mechanics",
    items: [
      "Wave functions",
      "Operators and eigenvalues",
      "Uncertainty principle",
      "Quantum tunneling"
    ],
    colorScheme: {
      from: "from-purple-100",
      to: "to-violet-100",
      darkFrom: "dark:from-purple-800",
      darkTo: "dark:to-violet-800"
    }
  },
  {
    title: "Statistical Mechanics",
    items: [
      "Boltzmann distribution",
      "Partition functions",
      "Ensemble theory",
      "Molecular dynamics"
    ],
    colorScheme: {
      from: "from-blue-100",
      to: "to-cyan-100",
      darkFrom: "dark:from-blue-800",
      darkTo: "dark:to-cyan-800"
    }
  }
];

export const APPLICATIONS = [
  {
    title: "Catalysis",
    items: [
      "Heterogeneous catalysis",
      "Homogeneous catalysis",
      "Enzyme catalysis",
      "Industrial processes"
    ],
    colorScheme: {
      from: "from-green-100",
      to: "to-emerald-100",
      darkFrom: "dark:from-green-800",
      darkTo: "dark:to-emerald-800"
    }
  },
  {
    title: "Materials Science",
    items: [
      "Surface chemistry",
      "Nanomaterials",
      "Electronic properties",
      "Phase behavior"
    ],
    colorScheme: {
      from: "from-blue-100",
      to: "to-indigo-100",
      darkFrom: "dark:from-blue-800",
      darkTo: "dark:to-indigo-800"
    }
  },
  {
    title: "Spectroscopy",
    items: [
      "UV-Vis spectroscopy",
      "IR and Raman spectroscopy",
      "NMR spectroscopy",
      "Mass spectrometry"
    ],
    colorScheme: {
      from: "from-purple-100",
      to: "to-pink-100",
      darkFrom: "dark:from-purple-800",
      darkTo: "dark:to-pink-800"
    }
  },
  {
    title: "Electrochemistry",
    items: [
      "Batteries and fuel cells",
      "Corrosion processes",
      "Electroplating",
      "Sensors and biosensors"
    ],
    colorScheme: {
      from: "from-yellow-100",
      to: "to-orange-100",
      darkFrom: "dark:from-yellow-800",
      darkTo: "dark:to-orange-800"
    }
  },
  {
    title: "Atmospheric Chemistry",
    items: [
      "Photochemical reactions",
      "Ozone depletion",
      "Climate modeling",
      "Air pollution"
    ],
    colorScheme: {
      from: "from-cyan-100",
      to: "to-teal-100",
      darkFrom: "dark:from-cyan-800",
      darkTo: "dark:to-teal-800"
    }
  },
  {
    title: "Biophysical Chemistry",
    items: [
      "Protein folding",
      "Membrane dynamics",
      "Drug-target interactions",
      "Molecular recognition"
    ],
    colorScheme: {
      from: "from-pink-100",
      to: "to-rose-100",
      darkFrom: "dark:from-pink-800",
      darkTo: "dark:to-rose-800"
    }
  }
];