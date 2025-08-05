import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const Top = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:pt-28 max-h-screen overflow-hidden">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src='/images/top.jpg' // Replace with actual image path
            alt="Triplex Stainless Steel Tope"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Triplex Stainless Steel Top</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              The Triplex Stainless Steel Top is an essential cookware item in every Indian kitchen—perfect for boiling milk, water, or preparing soups and gravies. Made with premium food-grade stainless steel and a sleek finish.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🍲 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li><strong>Food-Grade Stainless Steel:</strong> Safe and durable</li>
                <li><strong>Induction & Gas Compatible:</strong> Versatile cooking options</li>
                <li><strong>Seamless Design:</strong> Easy to clean with no sharp edges</li>
                <li><strong>Multipurpose Use:</strong> Ideal for boiling, heating, or storing</li>
                <li><strong>Mirror Finish:</strong> Adds a premium look to your kitchen</li>
                <li><strong>Stackable:</strong> Saves space in your kitchen shelves</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📐 Specifications:</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Material: Stainless Steel 304</li>
                <li>Sizes: 1L, 2L, 3L, 5L</li>
                <li>Weight: ~0.6kg to 1.2kg (based on size)</li>
                <li>Finish: Mirror Polished Exterior</li>
                <li>Warranty: 2 Years Manufacturer Guarantee</li>
              </ul>
            </div>
          </div>

          {/* <div>
            <div className="mb-5">
              <span className="text-2xl font-bold text-pink-600">₹699</span>
              <span className="text-sm line-through text-gray-400 ml-2">₹999</span>
              <span className="text-sm text-green-600 ml-2">(30% OFF)</span>
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

export default Top;
