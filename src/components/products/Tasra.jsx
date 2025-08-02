import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const Tasra = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:pt-28 max-h-screen overflow-hidden">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src='/images/tasla.png' // Replace with actual path
            alt="Jenny Stainless Steel Tasra"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Jenny® Stainless Steel Tasra</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              The Jenny® Stainless Steel Tasra is ideal for simmering curries, boiling milk, or making tea. Crafted from premium stainless steel, it combines functionality with elegant design—perfect for modern Indian kitchens.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🔥 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li><strong>Premium Stainless Steel:</strong> 100% food-grade and rust-resistant</li>
                <li><strong>Sturdy Handles:</strong> Riveted handles for durability and safety</li>
                <li><strong>Mirror Finish:</strong> Sleek look, easy to clean</li>
                <li><strong>Gas & Induction Compatible:</strong> Use it on any cooktop</li>
                <li><strong>Multi-Utility:</strong> Boil, cook, or reheat with ease</li>
                <li><strong>Dishwasher-Safe:</strong> Easy maintenance for everyday use</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📐 Specifications:</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Material: Stainless Steel (Grade 304)</li>
                <li>Available Sizes: 1.5L, 2.5L, 3.5L</li>
                <li>Weight: ~0.8kg – 1.4kg (based on size)</li>
                <li>Finish: Mirror Polished Exterior</li>
                <li>Warranty: 2 Years Manufacturer Guarantee</li>
              </ul>
            </div>
          </div>

          {/* <div>
            <div className="mb-5">
              <span className="text-2xl font-bold text-pink-600">₹849</span>
              <span className="text-sm line-through text-gray-400 ml-2">₹1,199</span>
              <span className="text-sm text-green-600 ml-2">(29% OFF)</span>
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

          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default Tasra;
