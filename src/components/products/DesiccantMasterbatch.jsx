import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const DesiccantMasterbatch = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 sm:pt-28">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[90vh] overflow-hidden">
          <img
            src="/images/antiM.jpeg"
            alt="Desiccant (Anti Moisture) Masterbatch"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between overflow-y-auto max-h-[90vh]">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Desiccant (Anti Moisture) Masterbatch
            </h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              Desiccant Masterbatch absorbs moisture during processing, ideal for recycled plastics and improving final product quality.
            </p>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🛡️ Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Removes moisture content during extrusion or molding</li>
                <li>Prevents surface defects like bubbles and pinholes</li>
                <li>Improves mechanical properties</li>
                <li>Easy to use and compatible with PE, PP, and recycled polymers</li>
              </ul>
            </div>

            {/* Applications */}
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🔧 Applications:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Recycled plastic processing</li>
                <li>Blown film and sheet extrusion</li>
                <li>Injection and blow molding</li>
                <li>Plastic bag and packaging manufacturing</li>
                <li>Woven sack and non-woven fabric production</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default DesiccantMasterbatch;
