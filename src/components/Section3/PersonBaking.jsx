import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger);

const PersonBaking = () => {
  const sectionRef = React.useRef(null);
  const image1Ref = React.useRef(null);
  const image2Ref = React.useRef(null);
  const textContentRef = React.useRef(null);
  const text2ContentRef = React.useRef(null);
  useGSAP(() => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none none",
      // markers: true,

    }
  });

  tl.from(image1Ref.current, {
    x: -100,
    opacity: 0,
    duration: 0.7
  })

  .from(textContentRef.current, {
    y: 50,
    opacity: 0,
    duration: 0.7
  })

  .from(text2ContentRef.current, {
    x: -100,
    opacity: 0,
    duration: 0.7
  })

  .from(image2Ref.current, {
    x: 100,
    opacity: 0,
    duration: 0.7
  });

});
  return (
    <div   ref={sectionRef} className='flex flex-col gap-20 px-10 py-10 bg-amber-50 '>
      {/* above portion */}
      <div className='flex flex-row gap-5 items-center pl-10 justify-between mt-10'>
        <img
          src='src/assets/images/BakingPerson.png'
          className='max-h-75 object-cover rounded-3xl w-[40%]'
          ref={image1Ref}
        />
        <div ref={textContentRef} className='flex flex-col gap-4 max-w-[50%] pr-10'>
          <h1 className='font-space-bold text-4xl text-amber-950'>
            See Magic Happen, <br />  Right Here In Our Bakery
          </h1>
          <p className='font-space-regular text-lg text-gray-700'>
            Step into our bakery and be captivated by the enchanting sight of our talented bakers in action. From the careful mixing of ingredients to the precise artistry of decorating, inviting you to witness the creation of our delectable delights right before your eyes.
          </p>
        </div>
      </div>

      {/* below portion */}
      <div className='flex flex-row gap-5 justify-between items-center mt-10 pl-10 '>
        <div ref={text2ContentRef} className='flex flex-col gap-4 max-w-[40%] '>
          <h1 className='font-space-bold text-4xl text-amber-950 '>
            Baked Fresh For You,<br /> Straight From The Oven
          </h1>
          <p className='font-space-regular text-lg text-gray-700'>
            From our oven to your doorstep, each bite is a testament to our commitment to quality and taste. With every order, experience the joy of indulging in bakery treats that are both comforting and delicious, making every moment a celebration of flavor.
          </p>
          <a href='#' className='underline font-space-light text-amber-950 '>Read more</a>
        </div>
        <div className='w-[50%] pr-10'>
          <img
            src='src/assets/images/BakingPerson.png'
            className='w-full max-h-75 object-cover rounded-3xl'
            ref={image2Ref}
          />
        </div>
      </div>
    </div>
  )
}

export default PersonBaking