import React from "react";

const Country = () => {
  return (
    <div className="w-full relative">
      {/* Background Image Section - fixed, 40vh height */}
      <div
        className="w-full h-[40vh] bg-[url('../../public/images/calciumCarbonate.pn')] bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
        style={{ minHeight: "40vh", maxHeight: "40vh" }}
      />

      {/* Overlayed Content */}
      <div
        className="absolute top-0 left-0 w-full h-[40vh] flex items-center justify-center px-4 sm:px-6 md:px-10"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 md:gap-14 text-black w-full max-w-7xl pointer-events-auto p-8 sm:p-6 md:p-10"
          style={{ transform: "translateX(5vw)" }} // ✅ Shift entire grid 5vw to right
        >
          {/* Card 1 */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-1 h-20 bg-red-600" />
            <div>
              <div className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11418/11418411.png"
                  alt="tick icon"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <h2 className="text-3xl sm:text-4xl font-bold ml-2">0.8</h2>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-medium mt-1">
                Million tons/years
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-1 h-20 bg-red-600" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-red-600 text-4xl sm:text-5xl">+</span>12
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg font-medium">
                Factories
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-1 h-20 bg-red-600" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-red-600 text-4xl sm:text-5xl">+</span>17
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg font-medium">
                Years of experience
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
