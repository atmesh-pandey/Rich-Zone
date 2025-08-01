import React from 'react';

const HeartParts = ({ title, description, image }) => {
    return (
        <div className="relative bg-white rounded-lg overflow-hidden shadow transition duration-300 group hover:scale-100">
            <div className="overflow-hidden rounded-t-lg">
                <img
                    src={image}
                    alt="Heart Image"
                    className="w-full h-112 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-4xl font-bold text-white text-start mb-1 transition-all duration-300 group-hover:text-xl">
                    {title}
                </h3>
                <p className="text-xl text-white text-start transition-all duration-300 group-hover:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HeartParts;
