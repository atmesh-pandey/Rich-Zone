import React from 'react';

const products = [
    {
        name: 'PE-Based Calcium Filler',
        image: '../../public/images/kadai.png',
        description:
            'A polyethylene-based calcium carbonate masterbatch ideal for blown film and injection molding applications. Enhances stiffness, reduces cost, and improves output rates.',
        features: [
            'Carrier: LDPE/LLDPE',
            'Calcium Carbonate loading: Up to 75%',
            'Improves extrusion performance',
            'Available in multiple grades',
        ],
    },
    {
        name: 'PP-Based Calcium Filler',
        image: '../../public/images/biryaniPoat.png',
        description:
            'Polypropylene-based filler masterbatch used for injection molding, raffia, and thermoforming. Offers better surface finish and improved dimensional stability.',
        features: [
            'Carrier: PP',
            'Optimized for woven sacks and thermoforming',
            'Enhances rigidity and opacity',
            'Cost-effective material substitution',
        ],
    },
    {
        name: 'HD-Based Calcium Filler',
        image: '../../public/images/fryPan.png',
        description:
            'High-density polyethylene-based filler masterbatch designed for HDPE film, pipe extrusion, and blow molding.',
        features: [
            'Carrier: HDPE',
            'Excellent dispersion and whiteness',
            'Reduces shrinkage',
            'Compatible with multi-layer applications',
        ],
    },
    {
        name: 'Sodium Based Transparent Filler',
        image: '../../public/images/pan.png',
        description:
            'Sodium-based transparent filler for applications that require clarity with mineral content. Best for shopping bags and transparent films.',
        features: [
            'Maintains film transparency',
            'Improves stiffness and tensile strength',
            'Low haze levels',
            'Recommended for T-shirt bags and liners',
        ],
    },
    {
        name: 'Black and White Masterbatch Filler',
        image: '../../public/images/top.png',
        description:
            'Black and white masterbatches offering high color consistency and UV protection. Widely used in pipes, films, and molded parts.',
        features: [
            'High pigment concentration',
            'Excellent dispersion',
            'UV resistant and FDA compliant (optional)',
            'Custom shades available on request',
        ],
    },
    {
        name: 'Desiccant (Anti Moisture) Masterbatch',
        image: 'https://via.placeholder.com/600x300?text=Desiccant+MB',
        description:
            'Anti-moisture masterbatch for recycled plastic processing. Removes surface and trapped moisture to prevent bubbles, holes, or weak spots in finished goods.',
        features: [
            'Absorbs 20–25% of its weight in moisture',
            'No pre-drying required',
            'Improves process stability',
            'Ideal for blown film and injection molding',
        ],
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
                        {/* <div className="text-right">
              <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
                📦 Request Sample
              </button>
            </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
