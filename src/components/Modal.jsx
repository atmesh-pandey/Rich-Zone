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
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div
        className=" bg-white rounded w-[50vw] max-w-full p-8 flex gap-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button just after box starts */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
        >
          ✕
        </button>

        {/* Image container */}
        <div className="w-1/2 h-[50vh] rounded overflow-hidden relative">
          <img
            src={selectedItems.image}
            alt={selectedItems.title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Content container */}
        <div className="w-1/2 flex flex-col justify-start space-y-4">
          <h2 className="text-3xl font-bold text-[color:#9BC936]">
            {selectedItems.title}
          </h2>
          <p className="text-gray-700 font-semibold">{selectedItems.description}</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
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
