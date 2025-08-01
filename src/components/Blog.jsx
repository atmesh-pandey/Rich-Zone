import React from 'react';

const Blog = () => {
  return (
    <>
      {/* Reduce top padding a bit to move heading up */}
      <h1 className="flex justify-center text-4xl pt-[10vh] font-bold py-18">BLOG</h1>

      {/* Full height container with overflow hidden */}
      <div className=" w-full h-[80%] flex items-center justify-center md:-mt-8 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1700px]">
          {/* Left Image/Video Section */}
          <div className="w-full md:w-[800px] md:h-[630px] relative rounded-sm overflow-hidden shadow-xl">
            <img
              src="https://europlas.com.vn/Data/Sites/1/News/5938/0000000000pea-starch-an-alternative-material-to-plastic.jpg"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              alt="Bioplastic from Potato Starch"
            />
            <div className="absolute bottom-4 left-4 right-4 z-10 text-white bg-black/40 p-4 rounded-md">
              <h2 className="text-2xl font-semibold py-2">How to Make Bioplastic from Potato Starch</h2>
              <p className="text-lg">
                This article will walk you through the essentials of making bioplastic from potato starch, suitable for beginners, students, or anyone interested in green alternatives.
              </p>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-[800px] flex flex-col space-y-4 rounded-md">
            {/* Card 1 */}
            <div className="flex gap-6 hover:scale-110 transition-transform duration-500 bg-white rounded shadow-md p-4">
              <img
                className="w-24 md:w-94 md:h-42 object-cover rounded"
                src="https://europlas.com.vn/Data/Sites/1/News/5936/nhua-sinh-hoc-jpg-3455-1655196149.jpg"
                alt="Bioplastic"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800">What Does Potato Bioplastic Help in Agriculture?</h3>
                <p className="text-base text-gray-600">Let’s explore the potential and process behind this eco-friendly innovation.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-6 hover:scale-110 transition-transform duration-500 bg-white rounded shadow-md p-4">
              <img
                className="w-24 md:w-94 md:h-42 object-cover rounded"
                src="https://europlas.com.vn/Data/Sites/1/News/5935/conductive-vs-anti-static.png"
                alt="Conductive vs Anti-Static"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800">Conductive vs. Anti-Static: What Are The Differences?</h3>
                <p className="text-base text-gray-600">We explain the meanings of “conductive” and “anti-static” in a simple way.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-6 hover:scale-110 transition-transform duration-500 bg-white rounded shadow-md p-4">
              <img
                className="w-24 md:w-94 md:h-42 object-cover rounded"
                src="https://europlas.com.vn/Data/Sites/1/News/5934/vat-lieu-cach-dien-la-gi.jpg"
                alt="Insulation Materials"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800">Top Insulation Materials for Industrial Use</h3>
                <p className="text-base text-gray-600">Explore top plastic insulation materials used across industries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
