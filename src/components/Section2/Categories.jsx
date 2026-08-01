import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Categories = () => {
  gsap.registerPlugin(useGSAP);
  const categoriesRef = React.useRef();
  const containerRef = React.useRef(); // ref on the grid container, not each item

  useGSAP(() => {
    const categoriesEl = categoriesRef.current;

    gsap.to(categoriesEl, {
      x:14 ,
      duration: 0.5,
      ease: "back",
      repeat: -1,
      yoyo: true,
    });

    // grab every item that shares the class
    const items = containerRef.current.querySelectorAll(".drop-shadow-lg");

    const handlers = []; // keep track so we can clean up properly

    items.forEach((item) => {
      const handleMouseEnter = () => {
        gsap.to(item, { scale: 1.1, duration: 0.4, ease: "back", rotate: -100 });
      };
      const handleMouseLeave = () => {
        gsap.to(item, { scale: 1, duration: 0.5, ease: "back", rotate: 0 });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      handlers.push({ item, handleMouseEnter, handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ item, handleMouseEnter, handleMouseLeave }) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className='h-[90%] w-full flex flex-col mt-30'>
      <div ref={categoriesRef} className='bg-[#dfc198] py-2 px-6 w-fit rounded-tl-[40%] rounded-br-[35%] rounded-bl-[5%] drop-shadow-lg'>
        <h1 className='text-4xl font-space-semi-bold text-red-600'>Categories</h1>
      </div>
      <div ref={containerRef} className='ml-3 grid grid-cols-6 gap-5 place-items-center'>
        <div className='category-item flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Special.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Special</p>
        </div>
        <div className='category-item flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Donut.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>DoughNuts</p>
        </div>
        <div className='category-item flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Cookie.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Cookies</p>
        </div>
        <div className='category-item flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Cake.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Cakes</p>
        </div>
        <div className='category-item flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Bread.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Breads</p>
        </div>
        <div className='flex justify-center items-center bg-amber-900 rounded-full h-20 w-20 shadow-lg active:scale-95 cursor-pointer transition-transform duration-150'>
          <p className='font-space-bold text-2xl text-white'> {">"}</p>
        </div>
      </div>
    </div>
  )
}

export default Categories