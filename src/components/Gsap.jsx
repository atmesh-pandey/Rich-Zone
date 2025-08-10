import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Gsap = ({ textArr, dir }) => {
  const marqueeRef = useRef();

  useEffect(() => {
    const el = marqueeRef.current;

    gsap.fromTo(
      el,
      {
        x: dir === 0 || dir === 2 ? "100%" : "-100%",
      },
      {
        x: dir === 0 || dir === 2 ? "-100%" : "100%",
        duration: 25,
        ease: "linear",
        repeat: -1,
      }
    );
  }, [dir]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap font-bold uppercase"
        style={{
          fontSize: "clamp(1rem, 5vw, 8rem)",
          color:
            dir === 1
              ? "rgb(17, 63, 103)"
              : dir === 2
              ? "rgb(255, 204, 0)"
              : "#9BC936",
        }}
      >
        {textArr.map((item, index) => (
          <span key={index} className="mr-10">
            {item}&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Gsap;
