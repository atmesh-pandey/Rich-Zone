import React from 'react';
import PlasticRawMeterial from './PlasticRawMeterial';

const Catagory = () => {
  return (
    <div id="main-category" className="w-full max-w-6xl mx-auto px-4 py-6 bg-white rounded-lg font-semibold">
      {/* Header Navigation */}
      <div className="flex flex-col sm:flex-row justify-between border-b border-red-600">
        <a href="#plastic" className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-[color:#9BC936] transition-all duration-200">
          Plastic Raw Material
        </a>
        <a href="#steel" className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-[color:#9BC936] transition-all duration-200">
          Stainless Steel Triply 
        </a>
        <a href="#spices" className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-[color:#9BC936] transition-all duration-200">
          Diverse Export Portfolio
        </a>
      </div>



    </div>
  );
};

export default Catagory;
