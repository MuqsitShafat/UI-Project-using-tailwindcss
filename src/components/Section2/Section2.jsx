import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Categories from './Categories'
import MostLoved from './MostLoved'

gsap.registerPlugin(useGSAP);

const Section2 = () => {
  useGSAP(() => {
    let svg = document.querySelector(".svg");
    var path = `M 100 100 Q 250 100 490 100`;
    var initialPath = `M 100 100 Q 250 100 890 100`;
    const handlemousemove = (e) => {
      svg.addEventListener("mousemove", (e) => {
        const rect = svg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        path = `M 100 100 Q ${x} ${y} 890 100`
        gsap.to(`svg path`, {
          attr: { d: path },
          ease: "power4.out",
          duration: 0.2
        })
      })
    }
    const handlemouseleave = (e) => {
      svg.addEventListener("mouseleave", (e) => {
        path = initialPath
        gsap.to(`svg path`, {
          duration: 1,
          ease: "elastic.out(1,0.1])",
          attr: { d: path }
        })
      })
    }

    svg.addEventListener("mousemove", handlemousemove)
    svg.addEventListener("mouseleave", handlemouseleave)

    return () => {
      svg.removeEventListener("mousemove", handlemousemove)
      svg.removeEventListener("mouseleave", handlemouseleave)
    }

  }, []);
  return (
    <div className='flex flex-col p-10'>
      <div className="svg w-full -mx-10 relative left-1/2 -translate-x-1/2">
        <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path
            d="M 100 100 Q 500 100 890 100"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>
      <Categories />
      <MostLoved />
    </div>
  )
}

export default Section2