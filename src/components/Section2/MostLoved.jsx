import React, { useRef } from 'react';
import MostLovedGrid from './MostLovedGrid';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const MostLoved = () => {
  const mostLovedRef = useRef();

  // Use scope for auto-cleanup and cleaner selector targeting
  useGSAP(
    () => {
      gsap.to(mostLovedRef.current, {
         x:14 ,
      duration: 0.5,
      ease: "back",
      repeat: -1,
      yoyo: true,
      });
    },
    
  );

  return (
    <div className='mt-28'>
      <div
        ref={mostLovedRef}
        className='bg-[#dfc198] py-2 px-6 w-fit rounded-tl-[40%] rounded-br-[35%] rounded-bl-[5%] drop-shadow-lg'
      >
        <h1 className='text-4xl text-red-600 font-space-semi-bold'>Most Loved</h1>
      </div>
      <div className='flex flex-col'>
        <MostLovedGrid />
      </div>
    </div>
  );
};

export default MostLoved;