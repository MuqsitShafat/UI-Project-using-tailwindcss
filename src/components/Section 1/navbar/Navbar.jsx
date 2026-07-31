import React, { useRef } from "react";
import CakeIconnav from "./CakeIconnav";
import SearchIconNav from "./SearchIconNav";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const Navbar = () => {

  const nav = useRef();

  useGSAP(() => {
    // gsap code here...
  gsap.set('.navbar', {
  perspective: 1000,
  transformStyle: 'preserve-3d',
});

gsap.from('.navbar', {
  rotationX: 180,
  y: -50,
  autoAlpha: 10,
  duration: 1.2,
  delay: 0.2,
  force3D: true,
  ease: 'power1.out',
});
  });
  return (
    <div ref={nav} className="navbar px-15 py-14 h-20 w-full bg-red-300 flex items-center justify-between shadow-md">
      <CakeIconnav />
      <SearchIconNav />
    </div>
  );
};

export default Navbar;
