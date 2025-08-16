import React from "react";

const HeartParts = ({ title, description, image, index, onClickHandler, parentIndex = 0 }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      onClick={onClickHandler}
      className="relative bg-white rounded-lg overflow-hidden transition duration-300 group h-[28rem]" // Set a fixed height
    >
      <div className="w-full h-full overflow-hidden rounded-t-lg">
        <img src={image} alt="Heart Image" className={`w-full h-full ${parentIndex === 1 ? "object-contain" : "object-cover"} object-center transition-transform duration-500 group-hover:scale-105`} />
      </div>

      <div className={`absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent`} style={{ textShadow: "0 0 14px black" }}>
        <h3 className="text-4xl font-bold text-white text-start mb-1">{title}</h3>
        <p className="text-xl text-white text-start opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{description}</p>
      </div>
    </div>
  );
};

export default HeartParts;
