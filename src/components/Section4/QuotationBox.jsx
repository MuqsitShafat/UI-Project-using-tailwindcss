import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "the eggless cakes here are really good. Had ordered a kit kat cake which was really good. Surely worth a try.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", // Placeholder profile image
    name: "Amy Brown",
    role: "Food critique"
  },
  {
    id: 2,
    quote: "Amazing customer service and the freshness of the bread is unmatched. Highly recommend Adan Bakery!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Jenkins",
    role: "Local Foodie"
  },
  {
    id: 3,
    quote: "The custom birthday cakes are spectacular! Not only beautiful to look at but incredibly delicious.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "John Doe",
    role: "Regular Customer"
  }
];

const QuotationBox = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  return (
    <div className="pt-20 pb-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-112.5 px-6 text-center relative select-none">
      
      {/* Testimonial Core Content Container */}
      <div className="relative w-full py-10 transition-all duration-500 ease-in-out ">
        
        {/* Background Opening Quotation Marks */}
        <span className="absolute left-0 md:-left-4 -top-5 text-[120px] md:text-[160px] font-serif leading-none text-[#fffcf795] font-bold opacity-70 pointer-events-none">
          “
        </span>

        {/* The Review Text */}
        <p className="text-2xl md:text-4xl text-[#514037] font-space-reg leading-snug tracking-wide max-w-3xl mx-auto relative z-10 px-8 first-letter:capitalize ">
          {current.quote}
        </p>

        {/* Background Closing Quotation Marks */}
        <span className="absolute right-0 md:right-0 -bottom-18 text-[120px] md:text-[160px] font-serif leading-none text-[#fffcf795] font-bold opacity-70 pointer-events-none -translate-x-6">
          ”
        </span>
      </div>

      {/* User Information Display */}
      <div className="flex flex-col items-center mt-4">
        {/* Profile Avatar */}
        <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden shadow-md border-2 border-white">
          <img 
            src={current.image} 
            alt={current.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-[#403129] mt-3 tracking-wide">
          {current.name}
        </h3>
        
        {/* Subtitle / Role */}
        <p className="text-sm font-medium text-[#6e5d53] mt-1 tracking-wider">
          {current.role}
        </p>
      </div>

      {/* Slide Interactive Indicator Dots */}
      <div className="flex gap-2.5 mt-8 mb-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-[#514037] scale-110' 
                : 'bg-[#bca691] hover:bg-[#8e7b6c]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          /> //self closing button thats why i use the aria label gives the browser explicit descriptive text so it can announce: "Button: Go to slide 1" instead of just saying "Button".
        ))}
      </div>

    </div>
  );
};

export default QuotationBox;