import React from 'react'
import MostLovedGrid from './MostLovedGrid'
const MostLoved = () => {
  return (
    <div className='mt-30'>
      <div className='bg-[#dfc198] py-2 px-6 w-fit rounded-tl-[40%] rounded-br-[35%] rounded-bl-[5%]  drop-shadow-lg '>
        <h1 className='text-4xl text-red-600 font-space-semi-bold'>Most Loved</h1>
      </div>
        <div className='flex flex-col'>
          <MostLovedGrid />
        </div>
    </div>
  )
}

export default MostLoved