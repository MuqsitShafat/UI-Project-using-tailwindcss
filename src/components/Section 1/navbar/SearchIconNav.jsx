import React,{useRef} from 'react'
import { Search } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const SearchIconNav = () => {
  const searchRef = useRef();

  useGSAP(() => {
    gsap.from(searchRef.current, {
      delay: 0.5,
      opacity: 0,
      y: -50,
      rotateX: 120,
      rotateY: 240,
      duration: 1,
    });
  }, { scope: searchRef });
  return (
    <div className="mr-5 flex items-center justify-around hover:text-red-500 cursor-pointer active:scale-90 transition-transform ">
        <Search ref={searchRef} size={30} className="mx-5" />
    </div>
  )
}

export default SearchIconNav