import React from 'react'
import Left_side from './Left_side'
import Right_side from './Right_side'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Main = () => {
  const yellowBoxRef = React.useRef();

  useGSAP(() => {
    const el = yellowBoxRef.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      // console.log(rect);
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // how far mouse is from center, scaled down to a small movement
      const moveX = (e.clientX - centerX) * 0.02; // try 0.02–0.05
      const moveY = (e.clientY - centerY) * 0.02;

      xTo(moveX);
      yTo(moveY);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className='flex items-center justify-between px-7 h-[calc(100vh-80px)] w-full mt-5'>
      <div
        ref={yellowBoxRef}
        className='flex items-center shadow-lg justify-center h-full w-full bg-[#dfc198] rounded-tl-[15%] rounded-tr-[100%] rounded-br-[70%] rounded-bl-[10%]'
      >
        <Left_side />
        <Right_side />
      </div>
    </div>
  )
}

export default Main