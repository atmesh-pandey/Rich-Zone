import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Fuse from 'fuse.js';

// Sample product list
const products = [
  { name: 'Kadai', path: '/products/kadai' },
  { name: 'Biryani Pot', path: '/products/biryani-pot' },
  { name: 'Frypan', path: '/products/fry-pan' },
  { name: 'Sauce Pan', path: '/products/sauce-pan' },
  { name: 'Top', path: '/products/top' },
  { name: 'Tasra', path: '/products/tasra' },
  { name: 'SodiumTransparetFiller', path: '/products/sodiumtransparentfiller'},
  { name: 'pecalciumfiller', path: "/products/pecalciumfiller"},
  { name: 'ppcalciumfiller', path: "/products/ppcalciumfiller"},
  { name: 'hdcalciumfiller', path: "/products/hdcalciumfiller"},
  { name: 'blackwhitemasterbatchfiller', path: "/products/blackwhitemasterbatchfiller"},
  { name: 'desiccantmasterbatch', path: "/products/desiccantmasterbatch"},
  { name: 'obmasterbatch', path: "/products/obmasterbatch"}

];

// Fuse.js config
const fuseOptions = {
  keys: ['name'],
  includeScore: true,
  threshold: 0.4, // Lower = stricter match; 0.4 is good for general use
};

// Helper to get query params
const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';

  const fuse = new Fuse(products, fuseOptions);
  const results = searchTerm ? fuse.search(searchTerm) : [];

  const matchedProducts = results.map(result => result.item);

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Search results for: <span className="text-blue-600">"{searchTerm}"</span>
      </h1>

      {matchedProducts.length > 0 ? (
        <ul className="space-y-4">
          {matchedProducts.map((product, index) => (
            <li key={index}>
              <Link
                to={product.path}
                className="text-lg text-pink-600 hover:text-pink-700 font-medium underline"
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No matching products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
