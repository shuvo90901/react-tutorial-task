import React, { useState } from "react";
import ModalData from "./ModalData";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      {isModalOpen && (
        <ModalData
          title="Example Modal"
          content="This is a basic modal example using React and Tailwind CSS."
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Modal;
