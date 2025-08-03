import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="flex flex-col font-sans bg-white text-gray-800">
      {/* Banner Image */}
      <img
        className="w-full h-[40vh] object-cover"
        src="/images/aboutImage.png" // Replace with actual image path
        alt="Banner"
      />

      {/* Main Content Wrapper */}
      <div className="w-11/12 md:w-4/6 mx-auto mt-10 mb-16 space-y-10">

        {/* Quote Section */}
        <div className="flex flex-col sm:flex-row items-start gap-3 bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="text-red-600 font-bold text-7xl leading-none">“</div>
          <p className="text-xl font-semibold leading-relaxed">
            We are an{' '}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[color:#9BC936]">
              <span className="relative text-white">international</span>
            </span>{' '}
            export-import conglomerate specializing in plastic raw materials, filler masterbatches, and stainless steel processing. With years of experience
            and a strong presence across global markets, we support manufacturers by supplying consistent, high-quality materials tailored to their specific production needs.
          </p>
        </div>

        {/* Mission Statement */}
        <p className="text-xl leading-relaxed bg-white p-4 rounded-lg shadow">
          Our core mission is to bridge the gap between raw material sourcing and end-product excellence, empowering our clients to innovate,
          manufacture efficiently, and stay competitive in their industries.
        </p>

        {/* Vision */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936]">🌐 Our Vision</h1>
          <p className="text-lg leading-relaxed">
            To be a globally trusted sourcing partner, enabling manufacturers to access reliable material solutions while promoting sustainability, quality, and innovation across the supply chain.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936]">🎯 Our Mission</h1>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Deliver dependable, high-performance raw materials that enhance product quality.</li>
            <li>Build efficient, responsive supply chains through global partnerships.</li>
            <li>Provide customized sourcing options — including both virgin and recycled materials — to suit varying technical and environmental needs.</li>
            <li>Foster long-term relationships based on integrity, value, and customer satisfaction.</li>
          </ul>
        </div>

        {/* Offerings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936]">🧩 What We Offer</h1>
          <ol className="list-decimal pl-6 text-lg space-y-4">
            <li className="font-bold">Plastic Raw Materials</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Polypropylene (PP) – Virgin & Recycled</li>
              <li>Low-Density Polyethylene (LDPE) – Virgin & Recycled</li>
              <li>Other polymers available on request</li>
            </ul>
            <li className="font-bold">Filler Masterbatches</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Calcium Carbonate (CaCO₃) based masterbatches with PE or PP carriers</li>
              <li>Tailored formulations for films, injection molding, and extrusion</li>
              <li>Cost-effective and quality-enhancing additives</li>
            </ul>
            <li className="font-bold">Calcium Carbonate (CaCO₃)</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>High-purity coated and uncoated powders</li>
              <li>Various micron sizes for optimal dispersion</li>
              <li>Ideal for plastic, rubber, paint, and industrial uses</li>
            </ul>
            <li className="font-bold">Stainless Steel Supply & Processing</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Precision-cut coils, sheets, and components</li>
              <li>Grades including 304, 316, 202, and more</li>
              <li>Suitable for applications in construction, kitchenware, and industrial manufacturing</li>
            </ul>
          </ol>
        </div>

        {/* Why Work With Us */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936]">🌍 Why Work With Us</h1>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><strong>Global Reach:</strong> Long-standing supplier relationships in Asia, the Middle East, and beyond</li>
            <li><strong>Consistent Quality:</strong> Strict quality control standards at every step</li>
            <li><strong>Sustainable Options:</strong> Eco-conscious material choices including recycled grades</li>
            <li><strong>Efficient Logistics:</strong> Seamless transportation, export documentation, and customs compliance</li>
            <li><strong>Technical Support:</strong> End-to-end assistance from product selection to after-sales service</li>
          </ul>
        </div>

        {/* Collaboration */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936]">🤝 Let’s Collaborate</h1>
          <p className="text-lg mb-2">
            Our goal is to be more than just a material supplier—we aim to be a strategic partner in your production success. 
            Whether you are developing new products or streamlining your current sourcing strategy, we provide the materials, expertise, and reliability to help you grow.
          </p>
          <p className="text-lg">📬 Get in touch today to explore how we can support your business.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
