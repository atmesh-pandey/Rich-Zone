import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Cookware – Kadai',
    image: '/images/kadai.jpg',
    description: "Durable tri-ply stainless steel kadai for fast, even heating. Features a cool-touch handle, induction & gas-compatible base, and a stainless steel lid for better heat retention. Perfect for everyday cooking.",
    features: [
      'Material: Tri-Ply Stainless Steel',
      'Sizes Available: [2L, 3L, 5L]',
      'Induction & Gas Compatible Base',
      'Stay-Cool Handle',
    ],
    path: '/products/kadai',
  },
  {
    name: 'Biryani Pot',
    image: '/images/biryaniPoat.jpg',
    description:
      'Perfectly crafted for authentic biryani cooking, this premium stainless steel pot offers durability and excellent heat distribution for rich, flavorful meals.',
    features: [
      'High-Grade Stainless Steel: Rust-resistant and durable',
      'Compatible with Gas & Induction: Versatile cooking options',
      'Elegant Polished Finish: Stylish and modern look for your kitchen',
      'Thick Base: Prevents food from burning and ensures even cooking',
    ],
    path: '/products/biryani-pot',


  },
  {
    name: 'Fry Pan',
    image: '/images/fryPan.jpg',
    description:
      'The Triplex Tri-Ply Fry Pan is a kitchen essential engineered for effortless frying, sautéing, and stir-frying. With its tri-ply design, you’ll enjoy consistent cooking results every time.',
    features: [
      'Flat Base: Ideal for frying, browning, and pan-searing',
      'Cool-Touch Handle: Ergonomic and riveted for safety',
      'Induction Friendly: Works with gas, induction, and electric stovetops',
      'Non-Reactive Surface: Safe and toxin-free cooking',
    ],
    path: '/products/fry-pan',
  },
  {
    name: 'Sauce Pan',
    image: '/images/pan.jpg',
    description:
      'The Triplex Tri-Ply Sauce Pan is your everyday companion for boiling, simmering, and preparing sauces or gravies. Built with a tri-ply structure, it ensures faster and more even cooking across all stovetops.',
    features: [
      'Mirror Polish Exterior: Stylish and elegant look',
      'Precision Pouring Rim: Drip-free pouring without mess',
      'Induction Ready: Works with all cooktops',
      'Easy to Clean: Dishwasher safe and stain-resistan',
    ],
    path: '/products/sauce-pan',
  },
  {
    name: 'Top',
    image: '/images/top.jpg',
    description:
      'The Triplex Stainless Steel Top is an essential cookware item in every Indian kitchen—perfect for boiling milk, water, or preparing soups and gravies. Made with premium food-grade stainless steel and a sleek finish.',
    features: [
      'Induction & Gas Compatible: Versatile cooking options',
      'Seamless Design: Easy to clean with no sharp edges',
      'Stackable: Saves space in your kitchen shelves',
      'Multipurpose Use: Ideal for boiling, heating, or storing',
    ],
    path: '/products/top',

  },
  {
    name: 'Tasra',
    image: '/images/tasla.jpg',
    description:
      'The Triplex Stainless Steel Tasra is ideal for simmering curries, boiling milk, or making tea. Crafted from premium stainless steel, it combines functionality with elegant design—perfect for modern Indian kitchens.',
    features: [
      'Dishwasher-Safe: Easy maintenance for everyday use',
      'Premium Stainless Steel: 100% food-grade and rust-resistant',
      'Sturdy Handles: Riveted handles for durability and safety',
      'Multi-Utility: Boil, cook, or reheat with ease',
    ],
    path: '/products/tasra',
  },
  {
    name: 'PE-Based Calcium Filler',
    image: '/images/pePollemer.png',
    description:
      'PE-Based Calcium Filler is specially designed for polyethylene-based products like films, injection molding, and blow molding. It enhances stiffness and reduces production costs.',
    features: [
      'Excellent compatibility with PE resins',
      'Reduces cost without compromising quality',
      'Improves dimensional stability and rigidity',
      'High dispersion and uniform particle size',
    ],
    path: '/products/pecalciumfiller',
  },
  {
    name: 'PP-Based Calcium Filler',
    image: '/images/PP Polymers.png',
    description:
      'PP-Based Calcium Filler improves processing stability, rigidity, and printability for polypropylene-based applications including injection molding and woven sacks.',
    features: [
      'Enhances stiffness and surface quality',
      'Reduces shrinkage and warping',
      'Compatible with raffia, non-woven, and injection molding',
      'High thermal stability',
    ],
    path: '/products/ppcalciumfiller',
  },
  {
    name: 'HD Based Calcium Filler',
    image: '/images/hdBased.jpeg',
    description:
      'HD-Based Calcium Filler is optimized for high-density polyethylene products, improving mechanical properties and reducing production costs.',
    features: [
      'Tailored for HDPE extrusion and blow molding',
      'Excellent processing and surface finish',
      'Increases opacity and stiffness',
      'Minimizes shrinkage and deformation',
    ],
    path: '/products/hdcalciumfiller',
  },
  {
    name: 'Sodium Based Transparent Filler',
    image: '/images/transParent.jpeg',
    description:
      'Sodium Based Transparent Filler maintains transparency while enhancing strength and reducing costs, ideal for films and injection molded parts.',
    features: [
      'Preserves optical clarity',
      'Suitable for transparent PP and PE products',
      'Enhances barrier properties',
      'Improves processability and mechanical strength',
    ],
    path: '/products/sodiumtransparentfiller',
  },
  {
    name: 'Black and White Masterbatch Filler',
    image: '/images/blackWhite.jpeg',
    description:
      'Black and White Masterbatch Filler offers pigmentation and filler benefits, combining color and cost-effectiveness for various plastic applications.',
    features: [
      'Strong color performance with high filler content',
      'UV protection and opacity',
      'Cost reduction with dual functionality',
      'Wide compatibility with various resins',
    ],
    path: '/products/blackwhitemasterbatchfiller',
  },
  {
    name: 'Desiccant (Anti Moisture) Masterbatch',
    image: '/images/antiM.jpeg',
    description:
      'Desiccant Masterbatch absorbs moisture during processing, ideal for recycled plastics and improving final product quality.',
    features: [
      'Removes moisture content during extrusion or molding',
      'Prevents surface defects like bubbles and pinholes',
      'Improves mechanical properties',
      'Easy to use and compatible with PE, PP, and recycled polymers',
    ],
    path: '/products/desiccantmasterbatch',
  },
  {
    name: 'OB Masterbatch',
    image: '/images/obm.jpeg',
    description:
      'Optical brightener masterbatch (OB) enhances whiteness and brightness in plastic products. Ideal for PP, PE, and PS-based applications.',
    features: [
      'Contains optical brightening agent (OB-1)',
      'Improves color appeal',
      'Heat resistant and long-lasting',
      'Effective in thin films and molded parts',
    ],
    path: '/products/obmasterbatch',
  },
];

const Product = () => {
  return (
    <div className=" font-sans py-10 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-[color:#9BC936] mb-12">
        Masterbatches & Filler Products
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow hover:shadow-lg transition p-8 space-y-2"
          >
            <div className="w-full h-[50vh] rounded overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>


            <h2 className="text-2xl font-semibold text-[color:#9BC936]">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="text-right">
              <Link
                to={product.path}
                className="inline-block mt-4 bg-[color:#9BC936] hover:bg-[color:#85b02f] transition hover:scale-105 text-white font-medium py-2 px-4 rounded"
              >
                All Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
