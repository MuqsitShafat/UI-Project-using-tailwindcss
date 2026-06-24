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
    <div className="h-full w-[48%] flex justify-center items-center  bg-pink-100 rounded-tl-[80%] rounded-tr-[20%] rounded-br-[60%] rounded-bl-[40%]"  >
    <div className="h-full w-full flex justify-center items-center bg-[#abcc99c9] rounded-tl-[30%] rounded-br-[30%] rounded-tr-[100%]  rounded-bl-[80%] shadow-2xl"  >
    <div className="h-140  w-140 absolute right-10 bottom-4 rounded-full overflow-hidden flex justify-center mt-10 mr-15 shadow-lg"> 
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
  </div>
  </div>
);
};

export default Right_side;
