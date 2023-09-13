import React from "react";

function ModalData({ title, content, onClose, onSave }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="mb-4">{content}</div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalData;
