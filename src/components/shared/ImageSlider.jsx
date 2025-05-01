import React, { useState, useEffect } from 'react';

const ImageSlider = ({
  images,
  maxWidth = '100%',
  maxHeight = '500px',
  className = '',
  infinite = false,
  autoplayInterval = 2000,
  aspectRatio = '16:9', // New prop for aspect ratio
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        infinite
          ? (prevIndex + 1) % images.length
          : Math.min(prevIndex + 1, images.length - 1)
      );
    }, autoplayInterval);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length, infinite, autoplayInterval]);

  // Calculate aspect ratio for inline styles
  const [width, height] = aspectRatio.split(':').map(Number);
  const aspectRatioValue = (height / width) * 100;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ maxWidth, maxHeight }}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0"
            style={{
              paddingBottom: `${aspectRatioValue}%`, // Maintain aspect ratio
              height: 0, // Collapse height to allow padding to control it
            }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 focus:outline-none"
          onClick={() =>
            setCurrentIndex(
              infinite
                ? (currentIndex - 1 + images.length) % images.length
                : Math.max(currentIndex - 1, 0)
            )
          }
        >
          &lt;
        </button>
        <button
          className="bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 focus:outline-none"
          onClick={() =>
            setCurrentIndex(
              infinite
                ? (currentIndex + 1) % images.length
                : Math.min(currentIndex + 1, images.length - 1)
            )
          }
        >
          &gt;
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === index
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;