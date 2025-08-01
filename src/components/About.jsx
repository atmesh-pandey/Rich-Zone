import React from 'react';

const AboutUs = () => {
  return (
    <div>
      {/* Banner Image */}
      <img
        className="w-full h-[40vh] object-cover"
        src="https://t4.ftcdn.net/jpg/13/11/53/63/240_F_1311536317_6lUH7M9dnr0pMPdW6Bh9iQOAes23erlr.jpg"
        alt="Banner"
      />

      {/* Text Section */}
      <div className="w-4/6 mx-auto mt-8 flex items-start gap-3">
        <div className="text-red-600 font-bold text-7xl leading-none">“</div>
        <p className="text-2xl font-semibold leading-relaxed">
          As the{' '}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white dark:text-gray-950">world's No. 1</span>
          </span>{' '}
          filler masterbatch manufacturer, EuP proudly brings customers tailor-made plastic
          material solutions to help them enhance their competitiveness.
          
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
