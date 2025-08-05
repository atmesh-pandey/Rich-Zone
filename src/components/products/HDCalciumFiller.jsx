import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const HDCalciumFiller = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 sm:pt-28">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src="/images/hdBased.jpeg"
            alt="HD Based Calcium Filler"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">HD Based Calcium Filler</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              HD-Based Calcium Filler is optimized for high-density polyethylene products, improving
              mechanical properties and reducing production costs.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🔧 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Tailored for HDPE extrusion and blow molding</li>
                <li>Excellent processing and surface finish</li>
                <li>Increases opacity and stiffness</li>
                <li>Minimizes shrinkage and deformation</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📦 Applications:</h2>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                <li>HDPE extrusion products</li>
                <li>Blow molded containers</li>
                <li>Plastic films and sheets</li>
                <li>Injection molded HDPE parts</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default HDCalciumFiller;
