import React from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const NavContent = () => {
  const navElem = useRef()
  useGSAP(() => {
    // gsap code here...
    gsap.from('.nav-elem', {
      delay : 1,
      duration: 0.5,
      y: -50,
      opacity: 0,
      stagger: 0.2,
    });
  }, { scope: navElem });
  return (
    <div ref={navElem} className="mx-10 w-auto flex items-center justify-center gap-30 ">
      <h3 className="nav-elem text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer">Menu</h3>
      <h3 className="nav-elem text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer whitespace-nowrap">Lunch Box</h3>
      <h3 className="nav-elem text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer">Specials</h3>
      <h3 className="nav-elem text-[#FFFAF3] font-space-semi-bold text-2xl cursor-pointer">Contact</h3>
    </div>
  );
};

export default NavContent;
