import React from 'react';

const Items = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 bg-white rounded-lg font-semibold">
      {/* Header Navigation */}
      <div className="flex flex-col sm:flex-row justify-between border-b border-red-600">
        <a href="#plastic" className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-[color:#9BC936] transition-all duration-200">
          Plastic Raw Material
        </a>
        <a href="#steel" className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-[color:#9BC936] transition-all duration-200">
          Stilness Steel Processing
        </a>
        <a href="#spices" className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-[color:#9BC936] transition-all duration-200">
          Export Whole Spices & Others
        </a>
      </div>

      {/* Target Sections
      <div id="plastic" className="py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Plastic Raw Material</h2>
        <p className="text-gray-600">Details about plastic raw materials...</p>
      </div> */}

      {/* <div id="steel" className="py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Steel Processing</h2>
        <p className="text-gray-600">Information about steel processing...</p>
      </div> */}

      {/* <div id="spices" className="py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Export Whole Spices & Others</h2>
        <p className="text-gray-600">Export details and other information...</p>
      </div> */}
    </div>
  );
};

export default Items;
