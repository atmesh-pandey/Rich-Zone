import React from 'react';
import { Link } from 'react-router-dom';

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

          <div className="flex flex-col sm:flex-row gap-2 -mt-4">
            <button
              onClick={() => window.history.back()}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded text-center transition duration-300 flex items-center justify-center gap-1 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OBMasterbatch;
