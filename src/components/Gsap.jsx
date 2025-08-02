import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Gsap = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const width = element.scrollWidth;

    // Animate text from right to left continuously
    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: -width / 2,
        ease: "none",
        duration: 20,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={textRef}
        className="flex whitespace-nowrap text-black text-8xl font-bold"
        style={{ willChange: "transform" }}
      >
        {/* Repeat text twice for seamless scroll */}
        <span className="mr-10">PE-Based Calcium Filler&nbsp;&nbsp;&nbsp;</span>
        <span className="mr-10">PP-Based Calcium Filler&nbsp;&nbsp;&nbsp;</span>
        <span className="mr-10">HD Based Calcium Filler&nbsp;&nbsp;&nbsp;</span>
        <span className="mr-10">Sodium Based Transparent Filler&nbsp;&nbsp;&nbsp;</span>
        <span className="mr-10">Black and White Masterbatch Filler&nbsp;&nbsp;&nbsp;</span>
        <span className="mr-10">Desiccant (Anti Moisture) Masterbatch&nbsp;&nbsp;&nbsp;</span>
        <span className="mr-10">OB Masterbatch&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>
  );
};

export default Gsap;
