import React from 'react';
import { Link } from 'react-router-dom';

const FryPan = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 sm:pt-28 sm:pb-20 max-h-screen overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-h-full">
        {/* Product Image */}
        <div className="md:w-1/2 w-full max-h-[90vh] overflow-hidden">
          <img
            src='../../public/images/fryPan.png'
            alt="Jenny Stainless Steel Fry Pan"
            className="w-full h-full object-cover"
            style={{ maxHeight: '90vh' }} // fallback inline style
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 w-full flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Jenny® Tri-Ply Stainless Steel Fry Pan</h1>

            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              The Jenny® Tri-Ply Fry Pan is a kitchen essential engineered for effortless frying, sautéing, and stir-frying. With its tri-ply design, you’ll enjoy consistent cooking results every time.
            </p>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">🔥 Key Features:</h2>
              <ul className="space-y-1.5 text-sm text-gray-700 list-disc list-inside">
                <li><strong>Tri-Ply Construction:</strong> For even and efficient heat distribution</li>
                <li><strong>Flat Base:</strong> Ideal for frying, browning, and pan-searing</li>
                <li><strong>Cool-Touch Handle:</strong> Ergonomic and riveted for safety</li>
                <li><strong>Induction Friendly:</strong> Works with gas, induction, and electric stovetops</li>
                <li><strong>Non-Reactive Surface:</strong> Safe and toxin-free cooking</li>
                <li><strong>Easy to Clean:</strong> Dishwasher-safe and stain-resistant</li>
              </ul>
            </div>

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">📐 Specifications:</h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Material: SS 304 inner, Aluminum core, SS 430 base</li>
                <li>Size Options: 20cm, 24cm, 28cm</li>
                <li>Weight: ~0.9kg (varies by size)</li>
                <li>Finish: Mirror polish outside, brushed steel inside</li>
                <li>Warranty: 5 Years Manufacturer Guarantee</li>
              </ul>
            </div>
          </div>

          {/* <div>
            <div className="mb-5">
              <span className="text-2xl font-bold text-pink-600">₹999</span>
              <span className="text-sm line-through text-gray-400 ml-2">₹1,499</span>
              <span className="text-sm text-green-600 ml-2">(33% OFF)</span>
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

export default FryPan;
