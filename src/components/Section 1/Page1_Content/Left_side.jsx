import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Left_side = () => {
  const containerRef = useRef();
  const revealRef = useRef(); // the black-text layer with the circle mask
  const splitTextRef = useRef();
  useGSAP(() => {

    const splitTextEl = splitTextRef.current;
    const splitTextContent = splitTextEl.textContent;
    const splitChars = splitTextContent.split("");

    let letters = "";
    splitChars.forEach((char, idx) => {
      if (idx === 2) letters += `<span class="a inline-block">${char}</span>`;
      else letters += `<span class="b">${char}</span>`;
    });

    splitTextEl.innerHTML = letters; // ✅ writing into the real element now
    
    gsap.to(".a", {
      rotate: -180,
      ease: "none",
      duration: 0.5,
      delay : 3
    });

    // quickTo = smooth, interruptible tweens for fast-updating values like mouse position
    const xTo = gsap.quickTo(revealRef.current, "--x", {
      duration: 0.3,
      ease: "power3",
    });
    const yTo = gsap.quickTo(revealRef.current, "--y", {
      duration: 0.3,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
      // console.log(e);
    };

    const handleMouseEnter = () => {
      gsap.to(revealRef.current, {
        "--r": "50px",
        duration: 0.4,
        ease: "power2.out",
        backgroundColor: "#1614116c",
        color: "#f4f4f4",
        boxShadow: "0px 0px 23px 15px #dfc2986c",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(revealRef.current, {
        "--r": "0px",
        duration: 0.1,
        ease: "power2.in",
      });
    };

    const el = containerRef.current;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="ml-10 h-full w-[45%] flex justify-center items-center">
      <div>
        <h1 className="text-7xl font-anton text-black">
          WELCOME TO <br />
          <span ref={splitTextRef} className="text-red-600">ADAN</span> BAKERY
        </h1>

        {/* container must be relative so both text layers stack */}
        <div ref={containerRef} className="relative mt-5 max-w-[93%]">
          {/* base gray text, always visible */}
          <p className="text-2xl text-gray-900 leading-[1.2] font-space-medium opacity-60">
            We are a team of bakers who are passionate about creating delicious
            and beautiful desserts. Since 2010, we have been serving our customers
            with the best desserts in town. We are committed to using only the
            freshest ingredients and the highest quality products to create our
            desserts.
          </p>

          {/* black text, clipped to a circle that follows the cursor */}
          <p
            ref={revealRef}
            className="text-2xl text-black leading-[1.2] font-space-medium absolute top-0 left-0 pointer-events-none"
            style={{
              "--x": "0px",
              "--y": "0px",
              "--r": "0px",
              clipPath: "circle(var(--r) at var(--x) var(--y))",
              WebkitClipPath: "circle(var(--r) at var(--x) var(--y))",
            }}
          >
            We are a team of bakers who are passionate about creating delicious
            and beautiful desserts. Since 2010, we have been serving our customers
            with the best desserts in town. We are committed to using only the
            freshest ingredients and the highest quality products to create our
            desserts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Left_side;