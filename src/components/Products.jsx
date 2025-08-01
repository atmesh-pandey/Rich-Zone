import React from 'react';

const Products = () => {
    return (
        <div>
            {/* Banner Image */}
            <img
                className="w-full h-[40vh] object-cover"
                src="https://europlas.com.vn/Data/Sites/1/Banner/1banner-sanpham-fillermasterbatch.png"
                alt="Banner"
            />

            {/* Text Section */}
            <div className="w-[90%] md:w-4/5 mx-auto mt-8 flex flex-col sm:flex-row items-start gap-3">
                <div className="text-red-600 font-bold text-5xl leading-none">“</div>
                <p className="text-sm md:text-xl font-semibold leading-relaxed text-justify">
                    Bioplastic compound
                    Green material solution enables end-products to be biodegradable within 12 months

                    BiONext bioplastic (shortened of biodegradable plastic) compounds are made from renewable sources such as polylactic acid (PLA) and Polyhydroxyalkanoate (PHA), plants (corn, palm oil, potatoes) or fossil fuels such as aliphatic-aromatic co-polyester (PBAT).

                    The biggest advantage of a bio compound is its biodegradability. Finished products made from BiONext bioplastic compounds can easily decompose after being disposed of into water, CO2 gas and biomass within 12 months. This biomass can continue to be used as agricultural fertilizer, thereby creating a completely circular life cycle for the product. This is the premise for sustainable development - when all activities from production, consumption to human waste treatment are based on the foundation of the ecosystem and are environmentally friendly.

                    Besides, BiONext biodegradable plastic granules also possess outstanding mechanical properties such as high hardness, excellent impact strength (for injection molding and extrusion products), good elongation (for blown film products) with a glossy, beautiful surface and easy machining ability. Thereby meeting the functional and aesthetic requirements for the finished product.

                    With outstanding advantages, BiONext bioplastic compound is widely used in various fields. Common applications of bioplastic are making bioplastic packaging, blowing food wrap, biodegradable shopping bags, agricultural mulch films, lamination, food containers, disposable bowls, chopsticks, cups, spoons, forks,...

                    In addition, using BiONext bioplastics also reduces the material's dependence on fossil fuels. This is a huge step forward for the plastic industry in the context of increasingly scarce fossil raw materials, thereby promoting sustainable development.

                    Developed exclusively by EuroPlas, BiONext is a biodegradable plastic compound with outstanding mechanical and aesthetic properties. EuroPlas ensures that our bioplastic production process is always strictly controlled to meet all requirements. Let's build a greener world with EuroPlas bioplastic compounds!
                </p>
            </div>
        </div>
    );
};

export default Products;
