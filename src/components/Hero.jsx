import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "/images/banner1.webp",
    title: (
      <>
        <span style={{ width: "60vw" }}>
          <span className="relative text-pink-500">India’s</span>{" "}
          Leading Manufacturer Filler Masterbatch Solutions
        </span>
      </>
    ),
    row: 1,
  },
  {
    image: "/images/banner2.png",
    title: (
      <span
        style={{
          textAlign: "right",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          float: "right",
          marginRight: "8vw",
          textShadow: "0 0 1px 10px black",
        }}
      >
        <p>Innovating Plastic</p>
        <p>with</p>
        <p>Nature in Mind</p>
      </span>
    ),
  },
  {
    image: "/images/banner3.jpg",
    title: (
      <span
        style={{
          textAlign: "center",
          display: "grid",
          marginLeft: "40px",
          marginTop: "-10vh",
          textShadow: `-2px -2px 0 #888,
            2px -2px 0 #888,
            -2px  2px 0 #888,
            2px  2px 0 #888,
            0    0  10px #888`,
        }}
      >
        <p>Driven by Purpose</p>
        <p>Delivered with Precision</p>
      </span>
    ),
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null); // 👈 for storing interval ID

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const resetSlider = () => {
    clearInterval(intervalRef.current);
    startSlider();
  };

  useEffect(() => {
    startSlider(); // start on mount
    return () => clearInterval(intervalRef.current); // clear on unmount
  }, []);

  const { image, title, row } = slides[currentSlide];

  return (
    <section className="relative w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out" style={{ backgroundImage: `url('${image}')`, height: "calc(100vh - 81px)" }}>
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-black/10 to-black/30 flex flex-col justify-center px-4 text-white text-center ${row === 1 ? "items-center" : ""}`}>
        <h1 className={`text-5xl md:text-7xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg uppercase break-words ${row === 1 ? "w-[60vw]" : ""}`}>{title}</h1>

        {/* Slide Dots */}
        <div className="absolute bottom-8 flex justify-center w-full space-x-3">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setCurrentSlide(index); // change slide
                resetSlider(); // 👈 reset timer
              }}
              className={`h-3 w-3 rounded-full cursor-pointer transform transition-all duration-300 ${index === currentSlide ? "scale-125 bg-white shadow-lg" : "bg-white/50 hover:bg-white/80"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
