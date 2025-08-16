import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const BiryaniPot = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src="/images/biryaniPoat.png"
            alt="Premium Biryani Pot"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }} // fallback inline style
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Triplex Tri-Ply Premium Stainless Steel Biryani Pot</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              Perfectly crafted for authentic biryani cooking, this premium stainless steel pot offers durability and excellent heat distribution for rich, flavorful meals.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🍽️ Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li><strong>Thick Base:</strong> Prevents food from burning and ensures even cooking</li>
                <li><strong>High-Grade Stainless Steel:</strong> Rust-resistant and durable</li>
                <li><strong>Heavy-Duty Lid:</strong> Locks moisture and aroma inside</li>
                <li><strong>Compatible with Gas & Induction:</strong> Versatile cooking options</li>
                <li><strong>Easy to Clean:</strong> Dishwasher safe and stain-resistant</li>
                <li><strong>Elegant Polished Finish:</strong> Stylish and modern look for your kitchen</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📐 Specifications:</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Material: SS 304 High-Grade Stainless Steel</li>
                <li>Sizes Available: 3L, 5L, 7L</li>
                <li>Weight: Approx. 1.5kg (varies by size)</li>
                <li>Finish: Mirror polished exterior, matte interior</li>
                <li>Warranty: 5 Years Manufacturer Guarantee</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default BiryaniPot;
