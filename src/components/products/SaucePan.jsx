import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const SaucePan = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src="/images/pan.jpg" // Update this with your actual image path
            alt="Triplex Stainless Steel Sauce Pan"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Triplex Tri-Ply Stainless Steel Sauce Pan
            </h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              The Triplex Tri-Ply Sauce Pan is your everyday companion for boiling, simmering, and preparing sauces or gravies. Built with a tri-ply structure, it ensures faster and more even cooking across all stovetops.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🥄 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li><strong>Tri-Ply Construction:</strong> Promotes efficient, uniform heat distribution</li>
                <li><strong>Precision Pouring Rim:</strong> Drip-free pouring without mess</li>
                <li><strong>Stay-Cool Handle:</strong> Riveted for safety, comfortable grip</li>
                <li><strong>Induction Ready:</strong> Works with all cooktops</li>
                <li><strong>Mirror Polish Exterior:</strong> Stylish and elegant look</li>
                <li><strong>Easy to Clean:</strong> Dishwasher safe and stain-resistant</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📐 Specifications:</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Material: Stainless Steel 304 inner, Aluminum core, SS 430 base</li>
                <li>Sizes: 1L, 1.5L, 2L</li>
                <li>Weight: ~0.8kg (varies by size)</li>
                <li>Finish: Mirror exterior, matte interior</li>
                <li>Warranty: 5 Years Manufacturer Warranty</li>
              </ul>
            </div>
          </div>

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default SaucePan;
