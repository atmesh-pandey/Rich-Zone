import React from 'react';
import { Link } from 'react-router-dom';

const Kadai = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:pt-28 sm:pb-20 max-h-screen overflow-hidden">
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[75vh] overflow-hidden">
          <img
            src="/images/kadai.png"
            alt="Jenny Stainless Steel Kadai"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }} // fallback inline style for image height limit
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Jenny® Tri-Ply Stainless Steel Kadai</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              Designed for performance and durability, the Jenny® Tri-Ply Kadai is perfect for everyday Indian cooking—from sautéing to deep frying. Its premium tri-ply construction ensures even heating and faster cooking.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🔧 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li><strong>Tri-Ply Body:</strong> Ensures quick and even heat distribution</li>
                <li><strong>Induction & Gas Compatible:</strong> Versatile across cooking surfaces</li>
                <li><strong>Cool-Touch Handles:</strong> Riveted handles stay cool and are easy to grip</li>
                <li><strong>Stainless Steel Lid:</strong> Locks in heat and moisture during cooking</li>
                <li><strong>Food-Safe Construction:</strong> 100% non-reactive and toxin-free</li>
                <li><strong>Dishwasher-Safe:</strong> Easy to clean and maintain</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📐 Specifications:</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Material: SS 304 + Aluminum Core + SS 430</li>
                <li>Available Sizes: 2L, 3L, 5L</li>
                <li>Weight: ~1.2kg (depends on size)</li>
                <li>Finish: Mirror exterior, matte interior</li>
                <li>Warranty: 5 Years Manufacturer Guarantee</li>
              </ul>
            </div>
          </div>

          {/* <div>
            <div className="mb-5">
              <span className="text-2xl font-bold text-pink-600">₹1,499</span>
              <span className="text-sm line-through text-gray-400 ml-2">₹2,199</span>
              <span className="text-sm text-green-600 ml-2">(32% OFF)</span>
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

export default Kadai;
