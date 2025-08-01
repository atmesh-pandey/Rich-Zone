import React from 'react';
import HeartParts from './HeartParts';
import items from '../utils/data'

const Heart = () => {

    return (
        <div className='w-full px-4 py-8'>
            <div className='text-center max-w-6xl mx-auto mb-8 font-semibold text-lg'>
                As the <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                    <span className="relative text-white dark:text-gray-950"> world's No. 1 </span>
                </span> filler masterbatch manufacturer, EuroPlas proudly brings customers unique plastic
                raw material solutions to help their factories optimize production costs and improve the competitiveness on the market.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                {items.map(({ image, title, description }) => (
                    <HeartParts
                        image={image}
                        title={title}
                        description={description}
                    />
                ))}
            </div>
        </div>

    );
};

export default Heart;
