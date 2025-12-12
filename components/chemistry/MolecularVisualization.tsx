"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Minimize2, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface Atom {
  id: string;
  element: string;
  x: number;
  y: number;
  z?: number;
  color: string;
  radius: number;
}

interface Bond {
  id: string;
  atom1: string;
  atom2: string;
  type: 'single' | 'double' | 'triple';
  color?: string;
}

interface MolecularStructure {
  name: string;
  formula: string;
  atoms: Atom[];
  bonds: Bond[];
  description?: string;
}

interface MolecularVisualizationProps {
  structure: MolecularStructure;
  width?: number;
  height?: number;
  className?: string;
  interactive?: boolean;
  show3D?: boolean;
  showLabels?: boolean;
  autoRotate?: boolean;
}

// Common element colors (CPK coloring scheme)
const ELEMENT_COLORS: Record<string, string> = {
  'H': '#FFFFFF',   // Hydrogen - White
  'C': '#909090',   // Carbon - Gray
  'N': '#3050F8',   // Nitrogen - Blue
  'O': '#FF0D0D',   // Oxygen - Red
  'F': '#90E050',   // Fluorine - Green
  'Cl': '#1FF01F',  // Chlorine - Green
  'Br': '#A62929',  // Bromine - Brown
  'I': '#940094',   // Iodine - Purple
  'P': '#FF8000',   // Phosphorus - Orange
  'S': '#FFFF30',   // Sulfur - Yellow
  'Na': '#AB5CF2',  // Sodium - Purple
  'Mg': '#8AFF00',  // Magnesium - Green
  'Al': '#BFA6A6',  // Aluminum - Gray
  'Si': '#F0C8A0',  // Silicon - Tan
  'K': '#8F40D4',   // Potassium - Purple
  'Ca': '#3DFF00',  // Calcium - Green
  'Fe': '#E06633',  // Iron - Orange
  'Cu': '#C88033',  // Copper - Brown
  'Zn': '#7D80B0',  // Zinc - Blue-gray
};

// Element radii (in arbitrary units)
const ELEMENT_RADII: Record<string, number> = {
  'H': 8,
  'C': 12,
  'N': 11,
  'O': 10,
  'F': 9,
  'Cl': 15,
  'Br': 18,
  'I': 22,
  'P': 15,
  'S': 14,
  'Na': 20,
  'Mg': 16,
  'Al': 14,
  'Si': 16,
  'K': 24,
  'Ca': 20,
  'Fe': 16,
  'Cu': 16,
  'Zn': 16,
};

/**
 * 2D Molecular visualization component with fallback support
 */
const Molecular2D: React.FC<{
  structure: MolecularStructure;
  width: number;
  height: number;
  showLabels: boolean;
  interactive: boolean;
}> = ({ structure, width, height, showLabels, interactive }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Center the molecule in the viewport
  const centerX = width / 2;
  const centerY = height / 2;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!interactive) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!interactive) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale(prev => Math.max(0.1, Math.min(3, prev * delta)));
  };

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={`molecular-2d ${interactive ? 'cursor-grab' : ''} ${isDragging ? 'cursor-grabbing' : ''}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <g transform={`translate(${centerX + offset.x}, ${centerY + offset.y}) scale(${scale})`}>
        {/* Render bonds first (behind atoms) */}
        {structure.bonds.map(bond => {
          const atom1 = structure.atoms.find(a => a.id === bond.atom1);
          const atom2 = structure.atoms.find(a => a.id === bond.atom2);
          if (!atom1 || !atom2) return null;

          const bondColor = bond.color || '#666666';
          const strokeWidth = bond.type === 'single' ? 2 : bond.type === 'double' ? 4 : 6;

          return (
            <line
              key={bond.id}
              x1={atom1.x}
              y1={atom1.y}
              x2={atom2.x}
              y2={atom2.y}
              stroke={bondColor}
              strokeWidth={strokeWidth}
              className="bond"
            />
          );
        })}

        {/* Render atoms */}
        {structure.atoms.map(atom => {
          const color = ELEMENT_COLORS[atom.element] || atom.color || '#999999';
          const radius = ELEMENT_RADII[atom.element] || atom.radius || 10;

          return (
            <g key={atom.id}>
              <circle
                cx={atom.x}
                cy={atom.y}
                r={radius}
                fill={color}
                stroke="#333333"
                strokeWidth="1"
                className="atom"
              />
              {showLabels && (
                <text
                  x={atom.x}
                  y={atom.y + 4}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#333333"
                  className="atom-label font-semibold"
                >
                  {atom.element}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
};

/**
 * Main Molecular Visualization Component
 */
export const MolecularVisualization: React.FC<MolecularVisualizationProps> = ({
  structure,
  width = 400,
  height = 300,
  className = "",
  interactive = true,
  show3D = false,
  showLabels = true,
  autoRotate = false
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentShowLabels, setCurrentShowLabels] = useState(showLabels);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const resetView = () => {
    setRotation(0);
  };

  const toggleLabels = () => {
    setCurrentShowLabels(!currentShowLabels);
  };

  const displayWidth = isFullscreen ? 800 : width;
  const displayHeight = isFullscreen ? 600 : height;

  return (
    <div 
      ref={containerRef}
      className={`molecular-visualization-container ${className} ${
        isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4' : 'relative'
      }`}
    >
      {/* Header with molecule info and controls */}
      <div className="flex justify-between items-center mb-2">
        <div className="molecule-info">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {structure.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {structure.formula}
          </p>
        </div>
        
        {interactive && (
          <div className="controls flex gap-2">
            <button
              onClick={toggleLabels}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={currentShowLabels ? "Hide labels" : "Show labels"}
            >
              {currentShowLabels ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            
            <button
              onClick={resetView}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title="Reset view"
            >
              <RotateCcw size={16} />
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
          </div>
        )}
      </div>

      {/* Visualization area */}
      <div className="visualization-area border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        {show3D ? (
          // 3D visualization placeholder - would integrate with a 3D library like Three.js
          <div 
            className="flex items-center justify-center text-gray-500 dark:text-gray-400"
            style={{ width: displayWidth, height: displayHeight }}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">🧬</div>
              <p>3D visualization</p>
              <p className="text-sm">(Would integrate with Three.js)</p>
            </div>
          </div>
        ) : (
          // 2D visualization
          <Molecular2D
            structure={structure}
            width={displayWidth}
            height={displayHeight}
            showLabels={currentShowLabels}
            interactive={interactive}
          />
        )}
      </div>

      {/* Description */}
      {structure.description && (
        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {structure.description}
          </p>
        </div>
      )}

      {/* Instructions for interactive mode */}
      {interactive && !isFullscreen && (
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {show3D ? "Drag to rotate • Scroll to zoom" : "Drag to pan • Scroll to zoom"}
        </div>
      )}
    </div>
  );
};

/**
 * Utility function to create common molecular structures
 */
export const createMolecularStructure = {
  water: (): MolecularStructure => ({
    name: "Water",
    formula: "H₂O",
    description: "Water molecule showing bent geometry due to lone pairs on oxygen",
    atoms: [
      { id: "O1", element: "O", x: 0, y: 0, color: ELEMENT_COLORS.O, radius: ELEMENT_RADII.O },
      { id: "H1", element: "H", x: -30, y: 25, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
      { id: "H2", element: "H", x: 30, y: 25, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
    ],
    bonds: [
      { id: "b1", atom1: "O1", atom2: "H1", type: "single" },
      { id: "b2", atom1: "O1", atom2: "H2", type: "single" },
    ]
  }),

  methane: (): MolecularStructure => ({
    name: "Methane",
    formula: "CH₄",
    description: "Methane molecule showing tetrahedral geometry",
    atoms: [
      { id: "C1", element: "C", x: 0, y: 0, color: ELEMENT_COLORS.C, radius: ELEMENT_RADII.C },
      { id: "H1", element: "H", x: -25, y: -25, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
      { id: "H2", element: "H", x: 25, y: -25, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
      { id: "H3", element: "H", x: -25, y: 25, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
      { id: "H4", element: "H", x: 25, y: 25, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
    ],
    bonds: [
      { id: "b1", atom1: "C1", atom2: "H1", type: "single" },
      { id: "b2", atom1: "C1", atom2: "H2", type: "single" },
      { id: "b3", atom1: "C1", atom2: "H3", type: "single" },
      { id: "b4", atom1: "C1", atom2: "H4", type: "single" },
    ]
  }),

  ammonia: (): MolecularStructure => ({
    name: "Ammonia",
    formula: "NH₃",
    description: "Ammonia molecule showing trigonal pyramidal geometry",
    atoms: [
      { id: "N1", element: "N", x: 0, y: 0, color: ELEMENT_COLORS.N, radius: ELEMENT_RADII.N },
      { id: "H1", element: "H", x: -30, y: 20, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
      { id: "H2", element: "H", x: 30, y: 20, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
      { id: "H3", element: "H", x: 0, y: -35, color: ELEMENT_COLORS.H, radius: ELEMENT_RADII.H },
    ],
    bonds: [
      { id: "b1", atom1: "N1", atom2: "H1", type: "single" },
      { id: "b2", atom1: "N1", atom2: "H2", type: "single" },
      { id: "b3", atom1: "N1", atom2: "H3", type: "single" },
    ]
  })
};

export default MolecularVisualization;