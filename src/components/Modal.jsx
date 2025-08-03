// Modal.jsx
import React from "react";
import items from "../utils/data";

const Modal = ({ isOpen, setIsOpen, data }) => {
  console.log(data);
  if (!isOpen || data.length < 1) return null;

  const selectedItems = items[data[0]][data[1]];
  console.log(selectedItems);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50" onClick={handleClose}>
      <div
        className="bg-white p-6 rounded shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()} // prevent closing on content click
      >
        <button className="float-right text-gray-500 hover:text-gray-700" onClick={handleClose}>
          ✕
        </button>
        <div key={data} className="rounded-lg shadow hover:shadow-lg transition p-8 space-y-2">
          <div className="w-full h-[50vh] rounded overflow-hidden relative">
            <img src={selectedItems.image} alt={selectedItems.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <h2 className="text-2xl font-semibold text-pink-500">{selectedItems.title}</h2>
          <p className="text-gray-700">{selectedItems.description}</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {selectedItems?.features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          {/* <div className="text-right">
            <Link to={product.path} className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
              📦 All Details
            </Link>
          </div> */}
        </div>
        {/* <div>{selectedItems}</div> */}
      </div>
    </div>
  );
};

export default Modal;
