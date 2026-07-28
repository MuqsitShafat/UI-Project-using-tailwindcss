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
    gsap.from('.navbar', { 
      y:-100,
      duration: 1,
      opacity: 0,
      delay: 0.2
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
