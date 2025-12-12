"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Settings } from 'lucide-react';

interface ReactionStep {
  id: string;
  title: string;
  description: string;
  reactants: MoleculeStructure[];
  products: MoleculeStructure[];
  transitionState?: MoleculeStructure;
  electronMovements: ElectronMovement[];
  energyChange?: number;
  duration?: number; // Animation duration in ms
}

interface MoleculeStructure {
  id: string;
  name: string;
  atoms: AtomPosition[];
  bonds: BondConnection[];
  charges?: ChargePosition[];
}

interface AtomPosition {
  id: string;
  element: string;
  x: number;
  y: number;
  color?: string;
  radius?: number;
}

interface BondConnection {
  id: string;
  atom1: string;
  atom2: string;
  type: 'single' | 'double' | 'triple' | 'dashed';
  color?: string;
}

interface ChargePosition {
  id: string;
  x: number;
  y: number;
  charge: '+' | '-' | 'δ+' | 'δ-';
  size?: 'small' | 'medium' | 'large';
}

interface ElectronMovement {
  id: string;
  type: 'curved-arrow' | 'straight-arrow' | 'fishhook';
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  controlX?: number;
  controlY?: number;
  color?: string;
  electrons: 1 | 2; // Number of electrons (1 for radical, 2 for normal)
}

interface ReactionMechanismProps {
  mechanism: ReactionStep[];
  className?: string;
  autoPlay?: boolean;
  showEnergyDiagram?: boolean;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  width?: number;
  height?: number;
}

// Default colors for different elements
const ELEMENT_COLORS = {
  'C': '#909090',
  'H': '#FFFFFF',
  'O': '#FF0D0D',
  'N': '#3050F8',
  'Cl': '#1FF01F',
  'Br': '#A62929',
  'S': '#FFFF30',
  'P': '#FF8000',
};

/**
 * Component for rendering electron movement arrows
 */
const ElectronArrow: React.FC<{
  movement: ElectronMovement;
  animated: boolean;
  progress: number;
}> = ({ movement, animated, progress }) => {
  const { startX, startY, endX, endY, controlX, controlY, type, electrons, color = '#FF0000' } = movement;
  
  // Calculate path based on arrow type
  const getPath = () => {
    if (type === 'straight-arrow') {
      return `M ${startX} ${startY} L ${endX} ${endY}`;
    } else if (type === 'curved-arrow' && controlX !== undefined && controlY !== undefined) {
      return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
    } else {
      // Default curved arrow
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2 - 20;
      return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
    }
  };

  // Calculate arrowhead position
  const getArrowheadTransform = () => {
    const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
    return `translate(${endX}, ${endY}) rotate(${angle})`;
  };

  const pathLength = animated ? progress : 1;

  return (
    <g className="electron-arrow">
      {/* Arrow path */}
      <path
        d={getPath()}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeDasharray={animated ? "5,5" : "none"}
        strokeDashoffset={animated ? `${(1 - pathLength) * 100}` : "0"}
        className="transition-all duration-300"
      />
      
      {/* Arrowhead */}
      <g transform={getArrowheadTransform()} opacity={pathLength}>
        <polygon
          points="-8,-4 0,0 -8,4"
          fill={color}
          stroke={color}
          strokeWidth="1"
        />
      </g>
      
      {/* Double electron indicator */}
      {electrons === 2 && (
        <g transform={getArrowheadTransform()} opacity={pathLength}>
          <polygon
            points="-12,-4 -4,0 -12,4"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
        </g>
      )}
    </g>
  );
};

/**
 * Component for rendering molecular structures
 */
const MoleculeRenderer: React.FC<{
  molecule: MoleculeStructure;
  showCharges?: boolean;
  opacity?: number;
}> = ({ molecule, showCharges = true, opacity = 1 }) => {
  return (
    <g className="molecule" opacity={opacity}>
      {/* Render bonds first */}
      {molecule.bonds.map(bond => {
        const atom1 = molecule.atoms.find(a => a.id === bond.atom1);
        const atom2 = molecule.atoms.find(a => a.id === bond.atom2);
        if (!atom1 || !atom2) return null;

        const strokeWidth = bond.type === 'single' ? 2 : bond.type === 'double' ? 4 : 6;
        const strokeDasharray = bond.type === 'dashed' ? '5,5' : 'none';

        return (
          <line
            key={bond.id}
            x1={atom1.x}
            y1={atom1.y}
            x2={atom2.x}
            y2={atom2.y}
            stroke={bond.color || '#333333'}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
          />
        );
      })}

      {/* Render atoms */}
      {molecule.atoms.map(atom => {
        const color = atom.color || ELEMENT_COLORS[atom.element as keyof typeof ELEMENT_COLORS] || '#999999';
        const radius = atom.radius || (atom.element === 'H' ? 8 : 12);

        return (
          <g key={atom.id}>
            <circle
              cx={atom.x}
              cy={atom.y}
              r={radius}
              fill={color}
              stroke="#333333"
              strokeWidth="1"
            />
            <text
              x={atom.x}
              y={atom.y + 4}
              textAnchor="middle"
              fontSize="12"
              fill="#333333"
              className="font-semibold"
            >
              {atom.element}
            </text>
          </g>
        );
      })}

      {/* Render charges */}
      {showCharges && molecule.charges?.map(charge => (
        <text
          key={charge.id}
          x={charge.x}
          y={charge.y}
          textAnchor="middle"
          fontSize={charge.size === 'small' ? '10' : charge.size === 'large' ? '16' : '12'}
          fill="#FF0000"
          className="font-bold"
        >
          {charge.charge}
        </text>
      ))}
    </g>
  );
};

/**
 * Energy diagram component
 */
const EnergyDiagram: React.FC<{
  steps: ReactionStep[];
  currentStep: number;
  width: number;
  height: number;
}> = ({ steps, currentStep, width, height }) => {
  const padding = 40;
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Calculate energy levels (simplified)
  const energyLevels = steps.map((step, index) => ({
    x: padding + (index * plotWidth) / (steps.length - 1),
    y: padding + plotHeight / 2 + (step.energyChange || 0) * 2,
    step: index
  }));

  return (
    <svg width={width} height={height} className="energy-diagram">
      {/* Background */}
      <rect width={width} height={height} fill="white" stroke="#ccc" />
      
      {/* Energy curve */}
      <path
        d={`M ${energyLevels.map(level => `${level.x},${level.y}`).join(' L ')}`}
        stroke="#2563eb"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Energy points */}
      {energyLevels.map((level, index) => (
        <circle
          key={index}
          cx={level.x}
          cy={level.y}
          r={index === currentStep ? 6 : 4}
          fill={index === currentStep ? "#dc2626" : "#2563eb"}
          stroke="white"
          strokeWidth="2"
        />
      ))}
      
      {/* Labels */}
      <text x={padding} y={height - 10} fontSize="12" fill="#666">
        Reaction Progress
      </text>
      <text x={10} y={padding} fontSize="12" fill="#666" transform={`rotate(-90, 10, ${padding})`}>
        Energy
      </text>
    </svg>
  );
};

/**
 * Main Reaction Mechanism Component
 */
export const ReactionMechanism: React.FC<ReactionMechanismProps> = ({
  mechanism,
  className = "",
  autoPlay = false,
  showEnergyDiagram = false,
  animationSpeed = 'normal',
  width = 600,
  height = 400
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const speedMultiplier = animationSpeed === 'slow' ? 0.5 : animationSpeed === 'fast' ? 2 : 1;
  const stepDuration = (mechanism[currentStep]?.duration || 2000) / speedMultiplier;

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setAnimationProgress(prev => {
          if (prev >= 1) {
            // Move to next step
            setCurrentStep(prevStep => {
              const nextStep = prevStep + 1;
              if (nextStep >= mechanism.length) {
                setIsPlaying(false);
                return 0; // Reset to beginning
              }
              return nextStep;
            });
            return 0;
          }
          return prev + 0.02; // Increment progress
        });
      }, stepDuration * 0.02);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, stepDuration, mechanism.length]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setAnimationProgress(0);
  };

  const handleStepForward = () => {
    if (currentStep < mechanism.length - 1) {
      setCurrentStep(currentStep + 1);
      setAnimationProgress(0);
    }
  };

  const handleStepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnimationProgress(0);
    }
  };

  const currentReactionStep = mechanism[currentStep];

  return (
    <div className={`reaction-mechanism-container ${className}`}>
      {/* Header with controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="mechanism-info">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Reaction Mechanism
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {mechanism.length}: {currentReactionStep?.title}
          </p>
        </div>
        
        <div className="controls flex gap-2">
          <button
            onClick={handleStepBackward}
            disabled={currentStep === 0}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Previous step"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={handlePlay}
            className="p-2 rounded-md bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          
          <button
            onClick={handleStepForward}
            disabled={currentStep === mechanism.length - 1}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Next step"
          >
            <ChevronRight size={16} />
          </button>
          
          <button
            onClick={handleReset}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Reset"
          >
            <RotateCcw size={16} />
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Settings"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className="settings-panel mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex gap-4 items-center text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showEnergyDiagram}
                onChange={(e) => setShowSettings(e.target.checked)}
              />
              Show Energy Diagram
            </label>
            <div className="flex items-center gap-2">
              <span>Speed:</span>
              <select
                value={animationSpeed}
                onChange={(e) => setAnimationProgress(e.target.value as 'slow' | 'normal' | 'fast')}
                className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700"
              >
                <option value="slow">Slow</option>
                <option value="normal">Normal</option>
                <option value="fast">Fast</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="mechanism-content flex gap-4">
        {/* Main mechanism visualization */}
        <div className="mechanism-display flex-1">
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <svg width={width} height={height} className="mechanism-svg">
              {/* Render reactants */}
              {currentReactionStep?.reactants.map((molecule, index) => (
                <MoleculeRenderer
                  key={`reactant-${molecule.id}`}
                  molecule={molecule}
                  opacity={animationProgress < 0.3 ? 1 : 1 - animationProgress}
                />
              ))}
              
              {/* Render transition state */}
              {currentReactionStep?.transitionState && animationProgress > 0.3 && animationProgress < 0.7 && (
                <MoleculeRenderer
                  molecule={currentReactionStep.transitionState}
                  opacity={1 - Math.abs(animationProgress - 0.5) * 2}
                />
              )}
              
              {/* Render products */}
              {currentReactionStep?.products.map((molecule, index) => (
                <MoleculeRenderer
                  key={`product-${molecule.id}`}
                  molecule={molecule}
                  opacity={animationProgress > 0.7 ? animationProgress : 0}
                />
              ))}
              
              {/* Render electron movements */}
              {currentReactionStep?.electronMovements.map(movement => (
                <ElectronArrow
                  key={movement.id}
                  movement={movement}
                  animated={isPlaying}
                  progress={animationProgress}
                />
              ))}
            </svg>
          </div>
          
          {/* Step description */}
          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {currentReactionStep?.description}
            </p>
          </div>
        </div>

        {/* Energy diagram */}
        {showEnergyDiagram && (
          <div className="energy-diagram-container">
            <EnergyDiagram
              steps={mechanism}
              currentStep={currentStep}
              width={200}
              height={height}
            />
          </div>
        )}
      </div>

      {/* Progress indicator */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Progress</span>
          <span>{Math.round(((currentStep + animationProgress) / mechanism.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-100"
            style={{ width: `${((currentStep + animationProgress) / mechanism.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Utility function to create common reaction mechanisms
 */
export const createReactionMechanism = {
  sn2: (): ReactionStep[] => [
    {
      id: "sn2-step1",
      title: "Nucleophilic Attack",
      description: "The nucleophile attacks the electrophilic carbon from the backside, forming a transition state.",
      reactants: [
        {
          id: "substrate",
          name: "Alkyl Halide",
          atoms: [
            { id: "C1", element: "C", x: 100, y: 100 },
            { id: "X1", element: "Cl", x: 150, y: 100 },
            { id: "H1", element: "H", x: 75, y: 75 },
            { id: "H2", element: "H", x: 75, y: 125 },
            { id: "H3", element: "H", x: 100, y: 50 },
          ],
          bonds: [
            { id: "b1", atom1: "C1", atom2: "X1", type: "single" },
            { id: "b2", atom1: "C1", atom2: "H1", type: "single" },
            { id: "b3", atom1: "C1", atom2: "H2", type: "single" },
            { id: "b4", atom1: "C1", atom2: "H3", type: "single" },
          ]
        }
      ],
      products: [
        {
          id: "product",
          name: "Substituted Product",
          atoms: [
            { id: "C1", element: "C", x: 100, y: 100 },
            { id: "Nu1", element: "N", x: 50, y: 100 },
            { id: "H1", element: "H", x: 125, y: 75 },
            { id: "H2", element: "H", x: 125, y: 125 },
            { id: "H3", element: "H", x: 100, y: 50 },
          ],
          bonds: [
            { id: "b1", atom1: "C1", atom2: "Nu1", type: "single" },
            { id: "b2", atom1: "C1", atom2: "H1", type: "single" },
            { id: "b3", atom1: "C1", atom2: "H2", type: "single" },
            { id: "b4", atom1: "C1", atom2: "H3", type: "single" },
          ]
        }
      ],
      electronMovements: [
        {
          id: "attack",
          type: "curved-arrow",
          startX: 30,
          startY: 100,
          endX: 80,
          endY: 100,
          electrons: 2
        }
      ],
      energyChange: 20,
      duration: 3000
    }
  ]
};

export default ReactionMechanism;