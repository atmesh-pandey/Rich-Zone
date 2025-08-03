import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Advantage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-10" style={{ backgroundColor: "#9ac936" }}>
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
        <div className="w-full lg:w-[55%] h-[250px] md:h-[400px] mt-8 lg:h-[450px] flex items-center justify-center rounded-sm overflow-hidden">
          {/* <video
            src='./images/industries.webm'
            loop
            muted
            autoPlay
            controls
            playsInline
            poster="your-thumbnail.jpg"
            className="w-full h-full object-cover"
          /> */}
          <DotLottieReact
            src="https://lottie.host/1e4ff190-0e9f-4f88-a44b-d02f1f03aa48/vVuL0JXmSl.lottie"
            loop
            autoplay
            style={{ filter: "drop-shadow(2px 4px 6px yellow)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Advantage;
