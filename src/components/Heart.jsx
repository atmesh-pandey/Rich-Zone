import React from 'react';
import HeartParts from './HeartParts';
import items from '../utils/data'

const Heart = () => {

    return (
        <div className='w-full px-4 py-8'>
            <div className='text-center max-w-6xl mx-auto mb-8 font-semibold text-xl'>
                A <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                    <span className="relative text-white"> trusted partner </span>
                </span> in the import and supply of high-quality filler masterbatches and plastic raw materials, including LDPE, PP polymers 
                (virgin and recycled),and calcium-based compounds. Delivering tailored material solutions to manufacturers across industries—ensuring consistency,
                cost-effectiveness, and performance in every product created.
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
