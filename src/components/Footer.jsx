import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-6 w-full">
      {/* Company Name + Divider */}
      <div className="text-start mb-2">
        <h1 className="py-8 px-8 text-2xl font-bold uppercase text-red-600">
          European Plastic Joint Stock Company
        </h1>
        <hr className="mt-1 border-gray-400 w-2 mx-auto" />
      </div>

      {/* Main Footer Grid */}
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(10,minmax(0,1fr))] gap-4">
        {/* About Us */}
        <div className="col-span-full md:col-span-1 px-8">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Mission - Vision</li>
            <li>Production Capacity</li>
            <li>Journey of Development</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-full mx-auto col-span-1" />

        {/* Products */}
        <div className="col-span-full md:col-span-1" style={{ width: "max-content" }}>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>PE-Based Calcium Filler</li>
            <li>PP-Based Calcium Filler</li>
            <li>HD Based Calcium Filler</li>
            <li>Sodium Based Transparent Filler</li>
            <li>Black and White Masterbatch Filler</li>
            <li>Desiccant (Anti Moisture) Masterbatch</li>
            <li>OB Masterbatch</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-full mx-auto col-span-1" />

        {/* Quick Links */}
        <div className="col-span-full md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-amber-600">About Us</a></li>
            <li><a href="#" className="hover:text-amber-600">Products</a></li>
            <li><a href="#" className="hover:text-amber-600">News</a></li>
            <li><a href="#" className="hover:text-amber-600">Contact</a></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-full mx-auto col-span-1" />

        {/* Contact Info */}
        <div className="col-span-full md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-3xl" />
              <span>RICHZONE WORLWIDE PVT LTD, No 57/A, Ground floor, 5th main, Behind Lila Pa, H.A.L ll Stage, Bangalore, KARNATAKA 560008</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1" />
              <span>Tel: (+91) 8296217773</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1" />
              <span>Email: sales@myrichzone.com</span>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300 h-full mx-auto col-span-1" />

        {/* Subscribe / Follow Us */}
        <div className="col-span-full md:col-span-1 w-full md:w-[400px] lg:w-[300px] p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
          <input type="text" className="px-4 w-full mb-4 border rounded-md py-2" placeholder="Your email" />
          <button className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Send</button>
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-blue-600 text-black hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-blue-500 text-black hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-red-600 text-black hover:text-white">
              <FaYoutube />
            </a>
            <a href="#top" className="p-2 bg-gray-200 rounded-full hover:bg-green-600 text-black hover:text-white">
              <FaArrowUp />
            </a>
          </div>

        </div>
      </div>
      <div className="bg-blue-900 text-white text-center py-4 mt-8">
        <p>&copy; 2025 Rich Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
