import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const OBMasterbatch = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:pt-28 max-h-screen overflow-hidden">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src='/images/obm.jpeg'
            alt="OB Masterbatch"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">OB Masterbatch</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              Optical brightener masterbatch (OB) enhances whiteness and brightness in plastic products. Ideal for PP, PE, and PS-based applications.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">✨ Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Contains optical brightening agent (OB-1)</li>
                <li>Improves color appeal</li>
                <li>Heat resistant and long-lasting</li>
                <li>Effective in thin films and molded parts</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default OBMasterbatch;
