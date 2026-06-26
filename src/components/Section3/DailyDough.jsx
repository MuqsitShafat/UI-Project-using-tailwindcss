import React from 'react'

const DailyDough = () => {
 return (
    <div className='flex flex-row justify-between  bg-[#dfc198] px-10 py-5 rounded-lg'>
      <div>
        <h1 className='font-briqusion  drop-shadow-lg text-[170px] relative -top-20 left-10'>Daily Dough</h1>
      </div>
      <div className='shrink-0'>
        <div className='bg-[#8716165b] rounded-tl-[20%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[20%] shadow-lg relative -top-30'>

        <img src='src/assets/images/Daily_Dough_image.png' className='drop-shadow-lg h-100 w-100 object-cover ' />
        </div>
      </div>
    </div>
  )
}


export default DailyDough