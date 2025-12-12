"use client";

import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Info } from 'lucide-react';

interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  group: number;
  period: number;
  category: string;
  electronConfiguration: string;
  electronegativity?: number;
  ionizationEnergy?: number;
  atomicRadius?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  density?: number;
  discoveryYear?: number;
  discoveredBy?: string;
  description?: string;
}

interface PeriodicTableInteractiveProps {
  className?: string;
  onElementSelect?: (element: Element) => void;
  highlightCategory?: string;
  showLegend?: boolean;
  compact?: boolean;
}

// Element categories with colors
const ELEMENT_CATEGORIES = {
  'alkali-metal': { name: 'Alkali Metals', color: 'bg-red-200 dark:bg-red-800' },
  'alkaline-earth-metal': { name: 'Alkaline Earth Metals', color: 'bg-orange-200 dark:bg-orange-800' },
  'transition-metal': { name: 'Transition Metals', color: 'bg-yellow-200 dark:bg-yellow-800' },
  'post-transition-metal': { name: 'Post-transition Metals', color: 'bg-green-200 dark:bg-green-800' },
  'metalloid': { name: 'Metalloids', color: 'bg-teal-200 dark:bg-teal-800' },
  'nonmetal': { name: 'Nonmetals', color: 'bg-blue-200 dark:bg-blue-800' },
  'halogen': { name: 'Halogens', color: 'bg-purple-200 dark:bg-purple-800' },
  'noble-gas': { name: 'Noble Gases', color: 'bg-pink-200 dark:bg-pink-800' },
  'lanthanide': { name: 'Lanthanides', color: 'bg-indigo-200 dark:bg-indigo-800' },
  'actinide': { name: 'Actinides', color: 'bg-gray-200 dark:bg-gray-800' },
};

// Simplified periodic table data (first 36 elements for demonstration)
const ELEMENTS: Element[] = [
  { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, group: 1, period: 1, category: 'nonmetal', electronConfiguration: '1s¹', electronegativity: 2.20, description: 'The lightest and most abundant element in the universe.' },
  { atomicNumber: 2, symbol: 'He', name: 'Helium', atomicMass: 4.003, group: 18, period: 1, category: 'noble-gas', electronConfiguration: '1s²', description: 'A noble gas that is chemically inert under standard conditions.' },
  { atomicNumber: 3, symbol: 'Li', name: 'Lithium', atomicMass: 6.941, group: 1, period: 2, category: 'alkali-metal', electronConfiguration: '[He] 2s¹', electronegativity: 0.98, description: 'The lightest metal and the least dense solid element.' },
  { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', atomicMass: 9.012, group: 2, period: 2, category: 'alkaline-earth-metal', electronConfiguration: '[He] 2s²', electronegativity: 1.57, description: 'A lightweight, strong metal used in aerospace applications.' },
  { atomicNumber: 5, symbol: 'B', name: 'Boron', atomicMass: 10.811, group: 13, period: 2, category: 'metalloid', electronConfiguration: '[He] 2s² 2p¹', electronegativity: 2.04, description: 'A metalloid essential for plant growth and used in glass manufacturing.' },
  { atomicNumber: 6, symbol: 'C', name: 'Carbon', atomicMass: 12.011, group: 14, period: 2, category: 'nonmetal', electronConfiguration: '[He] 2s² 2p²', electronegativity: 2.55, description: 'The basis of all organic chemistry and life on Earth.' },
  { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, group: 15, period: 2, category: 'nonmetal', electronConfiguration: '[He] 2s² 2p³', electronegativity: 3.04, description: 'Makes up about 78% of Earth\'s atmosphere.' },
  { atomicNumber: 8, symbol: 'O', name: 'Oxygen', atomicMass: 15.999, group: 16, period: 2, category: 'nonmetal', electronConfiguration: '[He] 2s² 2p⁴', electronegativity: 3.44, description: 'Essential for respiration and combustion.' },
  { atomicNumber: 9, symbol: 'F', name: 'Fluorine', atomicMass: 18.998, group: 17, period: 2, category: 'halogen', electronConfiguration: '[He] 2s² 2p⁵', electronegativity: 3.98, description: 'The most electronegative element.' },
  { atomicNumber: 10, symbol: 'Ne', name: 'Neon', atomicMass: 20.180, group: 18, period: 2, category: 'noble-gas', electronConfiguration: '[He] 2s² 2p⁶', description: 'A noble gas used in lighting and signs.' },
  { atomicNumber: 11, symbol: 'Na', name: 'Sodium', atomicMass: 22.990, group: 1, period: 3, category: 'alkali-metal', electronConfiguration: '[Ne] 3s¹', electronegativity: 0.93, description: 'A highly reactive metal essential for biological processes.' },
  { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, group: 2, period: 3, category: 'alkaline-earth-metal', electronConfiguration: '[Ne] 3s²', electronegativity: 1.31, description: 'A lightweight metal used in alloys and biological systems.' },
  { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', atomicMass: 26.982, group: 13, period: 3, category: 'post-transition-metal', electronConfiguration: '[Ne] 3s² 3p¹', electronegativity: 1.61, description: 'The most abundant metal in Earth\'s crust.' },
  { atomicNumber: 14, symbol: 'Si', name: 'Silicon', atomicMass: 28.086, group: 14, period: 3, category: 'metalloid', electronConfiguration: '[Ne] 3s² 3p²', electronegativity: 1.90, description: 'The second most abundant element in Earth\'s crust, essential for electronics.' },
  { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, group: 15, period: 3, category: 'nonmetal', electronConfiguration: '[Ne] 3s² 3p³', electronegativity: 2.19, description: 'Essential for life, found in DNA, RNA, and ATP.' },
  { atomicNumber: 16, symbol: 'S', name: 'Sulfur', atomicMass: 32.065, group: 16, period: 3, category: 'nonmetal', electronConfiguration: '[Ne] 3s² 3p⁴', electronegativity: 2.58, description: 'Important for proteins and many industrial processes.' },
  { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: 35.453, group: 17, period: 3, category: 'halogen', electronConfiguration: '[Ne] 3s² 3p⁵', electronegativity: 3.16, description: 'A halogen used for disinfection and in many compounds.' },
  { atomicNumber: 18, symbol: 'Ar', name: 'Argon', atomicMass: 39.948, group: 18, period: 3, category: 'noble-gas', electronConfiguration: '[Ne] 3s² 3p⁶', description: 'A noble gas making up about 1% of Earth\'s atmosphere.' },
  // Add more elements as needed...
];

/**
 * Individual element cell component
 */
const ElementCell: React.FC<{
  element: Element;
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
  compact: boolean;
}> = ({ element, isSelected, isHighlighted, onClick, compact }) => {
  const categoryInfo = ELEMENT_CATEGORIES[element.category as keyof typeof ELEMENT_CATEGORIES];
  
  return (
    <button
      onClick={onClick}
      className={`
        element-cell relative p-1 border border-gray-300 dark:border-gray-600 
        hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-200
        ${categoryInfo?.color || 'bg-gray-100 dark:bg-gray-700'}
        ${isSelected ? 'ring-2 ring-blue-500 scale-105' : ''}
        ${isHighlighted ? 'ring-2 ring-yellow-400' : ''}
        ${compact ? 'text-xs' : 'text-sm'}
      `}
      title={`${element.name} (${element.symbol}) - Atomic Number: ${element.atomicNumber}`}
    >
      <div className="text-center">
        <div className={`font-bold ${compact ? 'text-xs' : 'text-sm'}`}>
          {element.atomicNumber}
        </div>
        <div className={`font-bold ${compact ? 'text-sm' : 'text-lg'}`}>
          {element.symbol}
        </div>
        {!compact && (
          <div className="text-xs truncate">
            {element.name}
          </div>
        )}
        {!compact && (
          <div className="text-xs">
            {element.atomicMass.toFixed(2)}
          </div>
        )}
      </div>
    </button>
  );
};

/**
 * Element detail modal component
 */
const ElementModal: React.FC<{
  element: Element;
  onClose: () => void;
}> = ({ element, onClose }) => {
  const categoryInfo = ELEMENT_CATEGORIES[element.category as keyof typeof ELEMENT_CATEGORIES];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            {element.name} ({element.symbol})
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          {/* Basic info */}
          <div className={`p-3 rounded-lg ${categoryInfo?.color || 'bg-gray-100 dark:bg-gray-700'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{element.symbol}</div>
              <div className="text-lg font-semibold">{element.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {categoryInfo?.name || element.category}
              </div>
            </div>
          </div>

          {/* Properties */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Atomic Number:</span>
              <div>{element.atomicNumber}</div>
            </div>
            <div>
              <span className="font-semibold">Atomic Mass:</span>
              <div>{element.atomicMass} u</div>
            </div>
            <div>
              <span className="font-semibold">Group:</span>
              <div>{element.group}</div>
            </div>
            <div>
              <span className="font-semibold">Period:</span>
              <div>{element.period}</div>
            </div>
            {element.electronegativity && (
              <div>
                <span className="font-semibold">Electronegativity:</span>
                <div>{element.electronegativity}</div>
              </div>
            )}
          </div>

          {/* Electron configuration */}
          <div>
            <span className="font-semibold">Electron Configuration:</span>
            <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-1">
              {element.electronConfiguration}
            </div>
          </div>

          {/* Description */}
          {element.description && (
            <div>
              <span className="font-semibold">Description:</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {element.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Main Periodic Table Interactive Component
 */
export const PeriodicTableInteractive: React.FC<PeriodicTableInteractiveProps> = ({
  className = "",
  onElementSelect,
  highlightCategory,
  showLegend = true,
  compact = false
}) => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  // Filter elements based on search and category
  const filteredElements = useMemo(() => {
    return ELEMENTS.filter(element => {
      const matchesSearch = searchTerm === "" || 
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filterCategory === "" || element.category === filterCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
    setShowModal(true);
    onElementSelect?.(element);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedElement(null);
  };

  // Create grid layout (simplified 18-column layout)
  const createPeriodicGrid = () => {
    const grid: (Element | null)[][] = Array(7).fill(null).map(() => Array(18).fill(null));
    
    filteredElements.forEach(element => {
      const row = element.period - 1;
      let col = element.group - 1;
      
      // Adjust for proper positioning
      if (element.group === 1 && element.period > 1) col = 0;
      else if (element.group === 2) col = 1;
      else if (element.group >= 13) col = element.group - 1;
      else if (element.group >= 3 && element.group <= 12) col = element.group - 1;
      
      if (row >= 0 && row < 7 && col >= 0 && col < 18) {
        grid[row][col] = element;
      }
    });
    
    return grid;
  };

  const periodicGrid = createPeriodicGrid();

  return (
    <div className={`periodic-table-container ${className}`}>
      {/* Search and Filter Controls */}
      <div className="controls mb-4 space-y-2">
        <div className="flex gap-2 flex-wrap">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search elements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option value="">All Categories</option>
              {Object.entries(ELEMENT_CATEGORIES).map(([key, category]) => (
                <option key={key} value={key}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="legend mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <Info size={16} />
            Element Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
            {Object.entries(ELEMENT_CATEGORIES).map(([key, category]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${category.color}`}></div>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Periodic Table Grid */}
      <div className="periodic-table-grid overflow-x-auto">
        <div className={`grid grid-cols-18 gap-1 ${compact ? 'text-xs' : 'text-sm'}`} style={{ minWidth: '900px' }}>
          {periodicGrid.map((row, rowIndex) =>
            row.map((element, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className={compact ? 'w-8 h-8' : 'w-12 h-16'}>
                {element ? (
                  <ElementCell
                    element={element}
                    isSelected={selectedElement?.atomicNumber === element.atomicNumber}
                    isHighlighted={highlightCategory === element.category}
                    onClick={() => handleElementClick(element)}
                    compact={compact}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Element Detail Modal */}
      {showModal && selectedElement && (
        <ElementModal element={selectedElement} onClose={closeModal} />
      )}

      {/* Instructions */}
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Click on any element to view detailed information. Use search and filters to find specific elements.
      </div>
    </div>
  );
};

export default PeriodicTableInteractive;