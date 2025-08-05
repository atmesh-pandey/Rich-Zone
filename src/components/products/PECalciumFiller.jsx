import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const PECalciumFiller = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:pt-28">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src="/images/pePollemer.png"
            alt="PE-Based Calcium Filler"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">PE-Based Calcium Filler</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              PE-Based Calcium Filler is specially designed for polyethylene-based products like films,
              injection molding, and blow molding. It enhances stiffness and reduces production costs.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🔧 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Excellent compatibility with PE resins</li>
                <li>Reduces cost without compromising quality</li>
                <li>Improves dimensional stability and rigidity</li>
                <li>High dispersion and uniform particle size</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📦 Applications:</h2>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                <li>Blow molding</li>
                <li>Injection molding</li>
                <li>Plastic film extrusion</li>
                <li>PE-based consumer packaging</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default PECalciumFiller;
