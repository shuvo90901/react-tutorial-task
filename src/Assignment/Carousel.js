/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE",
    "https://via.placeholder.com/400x200",
  ];
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-5xl text-white"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-5xl text-white"
        onClick={nextImage}
      >
        &gt;
      </button>
      <img
        className="w-full h-[100vh]"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
    </div>
  );
};

export default Carousel;
