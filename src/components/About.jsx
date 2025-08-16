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
            We are a leading{' '}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[color:#9BC936]">
              <span className="relative text-white">international</span>
            </span>{' '}
            import and export conglomerate, specializing in plastic raw materials such as virgin polymers, 
            recycled polymers, filler masterbatch, and calcium carbonate. In addition, we are among India’s foremost importers of stainless 
            steel triply circles and a trusted distributor of triply utensils across the nation.
          </p>
        </div>

        {/* Mission Statement */}
        <p className="text-xl leading-relaxed bg-white p-4 rounded-lg shadow">
          Our export division caters to global markets with a diverse range of products including food items (biscuits, chocolates, spices), 
          carry bags, garbage bags, disposables, and other miscellaneous goods, ensuring quality, consistency, and trust in every transaction.
          With our upcoming branch office in Dubai, Richzone is strengthening its international footprint and positioning itself as a globally 
          trusted sourcing partner for various industries and wholesale networks.
        </p>

        {/* Vision */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936] pl-[10px]">Our Vision</h1>
          <p className="text-lg leading-relaxed">
            To become a globally recognized leader in international trade, trusted for quality, integrity, and innovation, while creating 
            sustainable value for industries and wholesale networks worldwide.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936] pl-[10px]">Our Mission</h1>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>To deliver premium-quality products and seamless trade solutions that consistently exceed client expectations.</li>
            <li>To establish long-term, sustainable partnerships across international markets, built on transparency and trust.</li>
            <li>To expand our global presence, beginning with our new Dubai branch office, and strengthen our role as a reliable sourcing partner for industries worldwide.</li>
            <li>To embrace innovation and sustainability in trade, contributing positively to businesses, communities, and the environment.</li>
          </ul>
        </div>

        {/* Offerings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936] pl-[10px]">What We Offer</h1>
          <ol className="list-decimal pl-6 text-lg space-y-4">
            <li className="font-bold">Plastic Granules</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Polypropylene (PP) – Virgin and Recycled</li>
              <li>Low-Density Polyethylene (LDPE) – Virgin and Recycled</li>
              <li>Linear Low-Density Polyethylene (LLDPE) – Virgin and Recycled</li>
            </ul>
            <li className="font-bold">Plastic Compounds</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>PP + GF</li>
              <li>PA + GF</li>
              <li>PA 6 + GF</li>
              <li>PA 6 + GF</li>
              <li>PA 66 + GF</li>
              <li>PC + GF</li>
              <li>PBT + GF</li>
              <li>ABS + GF</li>
            </ul>
            <li className="font-bold">Filler Masterbatches</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Calcium Carbonate (CaCO₃) based masterbatches with PE/PP carriers</li>
              <li>Various grades of transparent filler masterbatches</li>
            </ul>
            <li className="font-bold">Black Masterbatches</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Grades with carbon content ranging from 20% to 40%</li>
              <li>Suitable for applications such as blow film, pipes, and water tanks</li>
            </ul>
            <li className="font-bold">White Masterbatches</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Various grades of WMB with TiO₂ content ranging from 15% to 75%</li>
            </ul>
            <li className="font-bold">Desiccant Masterbatches (Antimoisture)</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wide range of desiccant masterbatches for blow film applications</li>
            </ul>
            <li className="font-bold">Plastic Industry Additives</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anti-Block</li>
              <li>Slip Masterbatches</li>
              <li>Anti-Slip</li>
              <li>Anti-Static</li>
              <li>OB-1</li>
              <li>PPA</li>
            </ul>
            <li className="font-bold">Compostable Compounds</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Various grades of PLA and PBAT compounds</li>
              <li>PLA + PBAT filler masterbatches in multiple grades</li>
            </ul>
            <li className="font-bold">Calcium Carbonate (CaCO₃)</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Imported and distributed from Vietnam, Malaysia, and Egypt</li>
              <li>Available in grades with D97 ranging from 8 microns to 25 microns</li>
            </ul>
            <li className="font-bold">Stainless Steel Triply</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>Triply products in different sizes and specifications</li>
              <li>Options with *304 grade steel* and *316 grade steel</li>
              <li>Utensils including Kadais, Tasras, and Frying Pans in various sizes</li>
            </ul>
            <li className="font-bold">Export Division</li>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Diverse product portfolio catering to global markets:
                <ul className="list-disc pl-6 space-y-1">
                  <li>Food items (biscuits, chocolates, spices)</li>
                  <li>Carry bags</li>
                  <li>Garbage bags</li>
                  <li>Disposables</li>
                  <li>Other miscellaneous products</li>
                </ul>
              </li>
              <li>Ensuring "quality, consistency and reliability" with every shipment</li>
            </ul>

          </ol>
        </div>

        {/* Why Work With Us */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936] pl-[10px]">Why Choose Us</h1>
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
          <h1 className="text-2xl font-bold mb-3 bg-[color:#9BC936] pl-[10px]">Let’s Collaborate</h1>
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
