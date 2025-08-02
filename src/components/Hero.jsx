import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "./images/banner1.webp",
    // title: "Top Industrial Insulation Materials",
    // subtitle: "Providing the best plastic insulation solutions across industries",
  },
  {
    image: "https://europlas.com.vn/Data/Sites/1/Banner/1banner-home-2.jpg",
    // title: "High Performance Plastics",
    // subtitle: "Engineered for durability and strength",
  },
  {
    image: "https://europlas.com.vn/Data/Sites/1/Banner/1untitled-2.png",
    // title: "Thermal & Acoustic Insulation",
    // subtitle: "Optimized solutions for every industrial need",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 8s interval
    return () => clearInterval(interval);
  }, []);

  const { image /*, title, subtitle */ } = slides[currentSlide];

  return (
    <section className="relative w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out" style={{ backgroundImage: `url('${image}')`, height: "calc(100vh - 81px)" }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30 flex flex-col justify-center items-center px-4 text-white text-center">
        {/* <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{title}</h1>
          <p className="text-lg md:text-2xl font-light drop-shadow-md">{subtitle}</p>
        </div> */}

        {/* Slide Dots at Bottom Center */}
        <div className="absolute bottom-8 flex justify-center w-full space-x-3">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)} // <-- Add this line
              className={`h-3 w-3 rounded-full cursor-pointer transform transition-all duration-300 ${index === currentSlide ? "scale-125 bg-white shadow-lg" : "bg-white/50 hover:bg-white/80"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
