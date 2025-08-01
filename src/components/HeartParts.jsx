import React from "react";

const HeartParts = ({ title, description, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow transition duration-300 group">
      <div className="overflow-hidden rounded-t-lg">
        <img src={image} alt="Heart Image" className="w-full h-112 object-cover transform scale-100 transition-transform duration-500 group-hover:scale-120" />
      </div>
      <div className={`absolute inset-0 flex flex-col ${isEven ? "justify-end" : "justify-start"} p-8 bg-gradient-to-t from-black/70 to-transparent`}>
        <h3 className="text-4xl font-bold text-white text-start mb-1">{title}</h3>

        <p className="text-xl text-white text-start opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{description}</p>
      </div>
    </div>
  );
};

export default HeartParts;
