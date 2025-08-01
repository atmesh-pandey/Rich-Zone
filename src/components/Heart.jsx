import React, { useState, useRef, useEffect } from 'react';
import HeartParts from './HeartParts';
import items from '../utils/data';

const Heart = () => {
    const [showAll, setShowAll] = useState(false);
    const containerRef = useRef(null);
    const [height, setHeight] = useState('auto');
    const displayedItems = showAll ? items : items.slice(0, 4);

    // Dynamically calculate the height for smooth transition
    useEffect(() => {
        const content = containerRef.current;
        if (!content) return;

        const fullHeight = content.scrollHeight;
        if (showAll) {
            setHeight(`${fullHeight}px`);
        } else {
            // Temporarily render all items to measure height of first 4
            const temp = [...items.slice(0, 4)];
            const tempWrapper = document.createElement('div');
            tempWrapper.style.cssText = 'position:absolute;visibility:hidden;height:auto;';
            tempWrapper.className = content.className;
            tempWrapper.innerHTML = content.innerHTML;
            document.body.appendChild(tempWrapper);
            const partialHeight = tempWrapper.scrollHeight;
            document.body.removeChild(tempWrapper);
            setHeight(`${partialHeight}px`);
        }
    }, [showAll]);

    return (
        <div className="w-full px-4 py-12">
            <div className='text-center max-w-6xl mx-auto mb-12 font-semibold text-xl' style={{ lineHeight: "1.8" }}>
                A <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                    <span className="relative text-white"> trusted partner </span>
                </span> in the import and supply of high-quality filler masterbatches and plastic raw materials, including LDPE, PP polymers 
                (virgin and recycled), and calcium-based compounds. Delivering tailored material solutions to manufacturers across industries—ensuring consistency,
                cost-effectiveness, and performance in every product created.
            </div>

            {/* Animated container */}
            <div
                ref={containerRef}
                style={{
                    height,
                    transition: 'height 0.5s ease',
                    overflow: 'hidden',
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {displayedItems.map(({ image, title, description }, index) => (
                        <HeartParts
                            key={index}
                            image={image}
                            title={title}
                            description={description}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            {/* Toggle Button */}
            {items.length > 4 && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAll(prev => !prev)}
                        className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
                    >
                        {showAll ? 'View Less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Heart;
