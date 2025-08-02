import React from 'react';
import { Link } from 'react-router-dom';

const SaucePan = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:pt-28 sm:pb-20 max-h-screen overflow-hidden">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src='../../public/images/pan.png' // Update this with your actual image path
            alt="Jenny Stainless Steel Sauce Pan"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Jenny® Tri-Ply Stainless Steel Sauce Pan</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              The Jenny® Tri-Ply Sauce Pan is your everyday companion for boiling, simmering, and preparing sauces or gravies. Built with a tri-ply structure, it ensures faster and more even cooking across all stovetops.
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

          {/* <div>
            <div className="mb-5">
              <span className="text-2xl font-bold text-pink-600">₹899</span>
              <span className="text-sm line-through text-gray-400 ml-2">₹1,299</span>
              <span className="text-sm text-green-600 ml-2">(31% OFF)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/buy-now"
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded text-center transition duration-300"
              >
                🛒 Buy Now
              </Link>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-2 -mt-4">
            <Link
              to="/products"
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaucePan;
