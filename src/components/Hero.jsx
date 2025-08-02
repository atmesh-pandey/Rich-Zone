import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/banner1.webp",
    title: <><span className=""><span className="relative text-pink-500" style={{ color: "" }}>India’s</span></span> Leading Manufacturer Filler Masterbatch Solutions</>,
    // subtitle: "Providing the best plastic insulation solutions across industries",
  },
  {
    image: "/images/banner2.png",
    title: "Innovating Plastic with Nature in Mind",
    // subtitle: "Engineered for durability and strength",
  },
  {
    image: "/images/banner3.jpg",
    title: "Driven by Purpose. Delivered with Precision",
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

  const { image, title, /* subtitle */ } = slides[currentSlide];

  return (
    <section className="relative w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out" style={{ backgroundImage: `url('${image}')`, height: "calc(100vh - 81px)" }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/30 flex flex-col justify-center items-center px-4 text-white text-center">
        <h1 className="text-5xl md:text-7xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg uppercase w-[60vw] break-words">
          {title}
        </h1>


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
