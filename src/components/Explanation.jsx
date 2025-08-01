import React from 'react';

const Explanation = () => {
    return (
        <div className="w-full overflow-x-hidden relative">
            {/* Image */}
            <img
                src="/images/explore.png"
                alt="Explore"
                className="w-full h-auto object-cover"
            />

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
                    Thousands of factories in over 95 countries have <br /> chosen EuroPlas products
                </h1>
            </div>
        </div>
    );
};

export default Explanation;
