import React from 'react';

const Advantage = () => {
  return (
    <div className="w-full min-h-screen bg-green-300 flex items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-12">
        {/* Left Content */}
        <div className="flex flex-col text-white space-y-12 w-full lg:max-w-[45%]">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold ">Our Advantage</h1>

          {[
            "World's No 1 filler masterbatch manufacturer",
            "Unique natural resources advantage",
            "Leading experts in the plastic materials market",
            "Tailor-made solutions for each customer",
            "Cost-effective material solutions"
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center mt-1">
                <span className="text-green-600 font-bold text-sm">✓</span>
              </div>
              <p className="text-base md:text-lg">{point}</p>
            </div>
          ))}
        </div>

        {/* Right Video */}
        <div className="w-full lg:w-[55%] h-[250px] md:h-[400px] mt-8 lg:h-[450px] flex items-center justify-center bg-black rounded-sm overflow-hidden shadow-lg">
          <video
            src="https://v.ftcdn.net/15/90/67/63/240_F_1590676306_AqD4woLsT9vBr5U8RbpsnmHkXUF8DsZU_ST.mp4"
            loop
            muted
            autoPlay
            controls
            playsInline
            poster="your-thumbnail.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
