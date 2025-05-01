import React, { useState, useEffect, useRef, useCallback } from 'react';

const ImageGrid = ({
  images,
  className = 'h-[90vh]',
  gridClassName = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 ',
  itemClassName = 'overflow-hidden rounded-md relative animate-fade-in duration-500',
  imageClassName = 'w-full h-full object-cover transition-opacity duration-500',
  baseAltText = 'Image',
  itemSizes = [
    { cols: 2, rows: 1 },
    { cols: 2, rows: 2 },
    { cols: 2, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
  ],
  minDisplayDuration = 5000,
  maxDisplayDuration = 50000, // Changed max duration for faster updates
  transitionDuration = 1000, // Duration for fade and translate
}) => {
  const [gridItems, setGridItems] = useState([]);
  const timers = useRef({});
  const nextImageIndex = useRef(0);
  const isTransitioning = useRef({});

  const getRandomDuration = useCallback(() => {
    return Math.random() * (maxDisplayDuration - minDisplayDuration) + minDisplayDuration;
  }, [maxDisplayDuration, minDisplayDuration]);

  const getUniqueImage = useCallback((currentImages) => {
    const availableImages = images.filter(
      (img) => !currentImages.includes(img)
    );

    if (availableImages.length === 0) {
      // Fallback to a random image if no new ones are available
      return images[Math.floor(Math.random() * images.length)];
    }

    return availableImages[Math.floor(Math.random() * availableImages.length)];
  }, [images]);

  const updateGridItem = useCallback((itemId) => {
    if (isTransitioning.current[itemId]) {
      return;
    }
    isTransitioning.current[itemId] = true;

    setGridItems((prevGridItems) =>
      prevGridItems.map((item) =>
        item.id === itemId
          ? { ...item, opacity: 0 } // Start fade out
          : item
      )
    );

    setTimeout(() => {
      setGridItems((prevGridItems) => {
        const currentGridImages = prevGridItems.map((i) => i.src);
        const newImage = getUniqueImage(currentGridImages);
        const newIndex = images.indexOf(newImage);

        return prevGridItems.map((item) =>
          item.id === itemId
            ? {
                ...item,
                src: newImage,
                alt: `${baseAltText} ${newIndex + 1}`,
                currentIndex: newIndex,
                opacity: 1, // Fade in
                translateX: 0,
                translateY: 0,
              }
            : item
        );
      });
      isTransitioning.current[itemId] = false;
    }, transitionDuration);
  }, [images, baseAltText, transitionDuration, getUniqueImage]);

  useEffect(() => {
    const initialGridItems = Array.from({ length: Math.min(images.length, 6) }, (_, index) => ({
      src: images[index % images.length],
      alt: `${baseAltText} ${index + 1}`,
      id: index,
      currentIndex: index % images.length,
      opacity: 1,
      translateX: 0,
      translateY: 0,
    }));
    setGridItems(initialGridItems);

    const setupTimer = (itemId) => {
      const duration = getRandomDuration();
      timers.current[itemId] = setTimeout(() => {
        updateGridItem(itemId);
        setupTimer(itemId);
      }, duration);
    };

    initialGridItems.forEach((item) => {
      setupTimer(item.id);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(timers.current).forEach(clearTimeout);
    };
  }, [images, baseAltText, getRandomDuration, updateGridItem]);

  return (
    <div className={`${className} ${gridClassName}`}>
      {gridItems.map((item, index) => (
        <div
          key={item.id}
          className={`${itemClassName}`}
          style={{
            gridColumnEnd: `span ${itemSizes[index % itemSizes.length].cols}`,
            gridRowEnd: `span ${itemSizes[index % itemSizes.length].rows}`,
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            className={`${imageClassName}`}
            style={{
              opacity: item.opacity,
              transform: `translate(${item.translateX}px, ${item.translateY}px)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;