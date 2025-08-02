import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    {
        name: 'Cookware – Kadai',
        image: '../../public/images/kadai.png',
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
        image: '../../public/images/biryaniPoat.png',
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
        image: '../../public/images/fryPan.png',
        description:
            'The Jenny® Tri-Ply Fry Pan is a kitchen essential engineered for effortless frying, sautéing, and stir-frying. With its tri-ply design, you’ll enjoy consistent cooking results every time.',
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
        image: '../../public/images/pan.png',
        description:
            'The Jenny® Tri-Ply Sauce Pan is your everyday companion for boiling, simmering, and preparing sauces or gravies. Built with a tri-ply structure, it ensures faster and more even cooking across all stovetops.',
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
        image: '../../public/images/top.png',
        description:
            'The Jenny® Stainless Steel Top is an essential cookware item in every Indian kitchen—perfect for boiling milk, water, or preparing soups and gravies. Made with premium food-grade stainless steel and a sleek finish.',
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
        image: '../../public/images/tasla.png',
        description:
            'The Jenny® Stainless Steel Tasra is ideal for simmering curries, boiling milk, or making tea. Crafted from premium stainless steel, it combines functionality with elegant design—perfect for modern Indian kitchens.',
        features: [
            'Dishwasher-Safe: Easy maintenance for everyday use',
            'Premium Stainless Steel: 100% food-grade and rust-resistant',
            'Sturdy Handles: Riveted handles for durability and safety',
            'Multi-Utility: Boil, cook, or reheat with ease',
        ],
        path: '/products/tasra',
    },
    {
        name: 'OB Masterbatch',
        image: 'https://via.placeholder.com/600x300?text=OB+Masterbatch',
        description:
            'Optical brightener masterbatch (OB) enhances whiteness and brightness in plastic products. Ideal for PP, PE, and PS-based applications.',
        features: [
            'Contains optical brightening agent (OB-1)',
            'Improves color appeal',
            'Heat resistant and long-lasting',
            'Effective in thin films and molded parts',
        ],
    },
];

const Product = () => {
    return (
        <div className=" font-sans py-10 px-4 md:px-12">
            <h1 className="text-2xl font-bold text-center text-pink-600 mb-12">
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


                        <h2 className="text-2xl font-semibold text-pink-500">{product.name}</h2>
                        <p className="text-gray-700">{product.description}</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {product.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <div className="text-right">
                            <Link
                                to={product.path}
                                className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded"
                            >
                                📦 All Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
