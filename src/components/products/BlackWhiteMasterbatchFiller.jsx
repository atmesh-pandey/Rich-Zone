import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const BlackWhiteMasterbatchFiller = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 sm:pt-28 max-h-screen overflow-hidden">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[90vh] overflow-hidden">
          <img
            src='/images/blackWhite.jpeg'
            alt="Black and White Masterbatch Filler"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Black and White Masterbatch Filler</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              Black and White Masterbatch Filler offers pigmentation and filler benefits, combining color and cost-effectiveness for various plastic applications.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">✨ Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li>Strong color performance with high filler content</li>
                <li>UV protection and opacity</li>
                <li>Cost reduction with dual functionality</li>
                <li>Wide compatibility with various resins</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🛠️ Applications:</h2>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                <li>Plastic molding</li>
                <li>Injection molding</li>
                <li>Packaging</li>
                <li>Color masterbatch blends</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default BlackWhiteMasterbatchFiller;
