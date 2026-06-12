import React from "react";
import { useState, useEffect, useRef } from "react";
import CarouselImages from "./CarouselImages";
const Right_side = () => {
  const slides = [...CarouselImages, CarouselImages[0]];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  // Move to next slide
  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

   useEffect(() => {
    if (currentIndex === slides.length - 1) {
      // Wait for the CSS transition to finish (match your duration)
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable transition
        setCurrentIndex(0);        // snap to real first slide
      }, 700); // must match transition duration in ms

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

 return (
  <div className="h-150  w-150 absolute right-10 bottom-4 rounded-full overflow-hidden flex justify-center mt-5"> 
    <div
      className="flex h-full w-full rounded-full shadow-lg "
      style={{
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
      }}
    >
      {slides.map((image, index) => (
        <div
          key={index}
          className="min-w-full h-full" 
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover "
          />
        </div>
      ))}
    </div>
  </div>
);
};

export default Right_side;
