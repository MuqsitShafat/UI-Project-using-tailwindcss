import { Cake } from "lucide-react";
import React, { useRef } from "react";
import NavContent from "./NavContent";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const CakeIconnav = () => {
  const cakeRef = useRef();

  useGSAP(() => {
    gsap.from(cakeRef.current, {
      delay: 0.5,
      opacity: 0,
      y: -50,
      rotateX: 120,
      rotateY: 240,
      duration: 1,
    });

    const el = cakeRef.current;
    if (!el) return;
    const svgIcon = el.querySelector('svg');
    const allPaths = el.querySelectorAll('svg path');

    gsap.from(allPaths, {
      opacity: 0,
      y: -10,
      stagger: 0.08,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.3
    });

    let candleTween;

    const candlePaths = [allPaths[6], allPaths[7], allPaths[8]];

    const handleMouseEnter = () => {
      gsap.to(svgIcon, { scale: 1.1, duration: 0.1 });

      candleTween = gsap.to(candlePaths, {
        y: -3,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        stagger: 0.15,
        stroke: '#FFBF00',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(svgIcon, { duration: 0.2, scale: 1 });
      if (candleTween) candleTween.kill();
      gsap.to(candlePaths, {
        y: 0,
        duration: 0.2,
        overwrite: "auto",
        stroke: '#E7000B',
      });
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (candleTween) candleTween.kill();
    };
  }, { scope: cakeRef });

  return (
    <div className="py-5 ml-10 w-auto flex items-center justify-start">
      <span ref={cakeRef} className="inline-block cursor-pointer">
        <Cake size={50} color="#E7000B" />
      </span>

      <NavContent />
    </div>
  );
};

export default CakeIconnav;