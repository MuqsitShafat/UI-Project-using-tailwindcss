import React from 'react'

const Categories = () => {
  return (
    <div className='h-[90%] w-full flex flex-col mt-30' >
     <div className='bg-[#dfc198] py-2 px-6 w-fit rounded-tl-[40%] rounded-br-[35%] rounded-bl-[5%] drop-shadow-lg '>
        <h1 className='text-4xl font-space-semi-bold text-red-600'>Categories</h1>
      </div>
      <div className='ml-3 grid grid-cols-6 gap-5 place-items-center'>
        <div className='flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Special.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Special</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Donut.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>DoughNuts</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Cookie.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Cookies</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Cake.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Cakes</p>
        </div>
        <div className='flex flex-col justify-center items-center rounded-2xl'>
          <img src='src/assets/images/Bread.png' className='drop-shadow-lg rounded-full' />
          <p className='font-space-bold text-lg'>Breads</p>
        </div>
        <div className='flex justify-center items-center bg-amber-900 rounded-full h-20 w-20  shadow-lg active:scale-95 cursor-pointer transition-transform  duration-150'>
          <p className='font-space-bold text-2xl text-white'> {">"}</p>
        </div>
      </div>
      </div>
  )
}

export default Categories