import React from 'react';

const Explanation = () => {
    return (
        <div className="w-full overflow-x-hidden relative">
            {/* Image */}
            <img
                src="/images/explanation.png"
                alt="Explore"
                className="w-full h-[60vh] object-cover"
            />

            {/* Centered Text with blur and background shadow */}
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/40">
                <div className="bg-black/40 px-6 py-4 rounded shadow-xl">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center drop-shadow-sm">
                        We're committed to providing world-class products <br /> to manufacturers worldwide.
                    </h1>
                </div>
            </div>


        </div>
    );
};

export default Explanation;
