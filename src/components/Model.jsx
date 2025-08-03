// Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // close modal when clicking outside content
    >
      <div
        className="bg-white p-6 rounded shadow-lg max-w-lg w-full"
        onClick={e => e.stopPropagation()} // prevent closing on content click
      >
        <button
          className="float-right text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
