import React from "react";
import items from "../utils/data";

const Modal = ({ isOpen, setIsOpen, data }) => {
  if (!isOpen || data.length < 1) return null;

  const selectedItems = items[data[0]][data[1]];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded w-full max-w-4xl p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-10"
        >
          ✕
        </button>

        {/* Image container */}
        <div className="w-full md:w-1/2 h-64 md:h-[50vh] rounded overflow-hidden">
          <img
            src={selectedItems.image}
            alt={selectedItems.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Content container */}
        <div className="w-full md:w-1/2 flex flex-col justify-start space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[color:#9BC936]">
            {selectedItems.title}
          </h2>
          <p className="text-gray-700 font-semibold text-sm md:text-base">
            {selectedItems.description}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm md:text-base">
            {selectedItems?.features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
