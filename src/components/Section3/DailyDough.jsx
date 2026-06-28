import React from 'react'

const DailyDough = () => {
  return (
    <div className='bg-[#dfc198] px-10 py-2 rounded-lg'>

      {/* Top Section */}
      <div className='flex justify-between items-center'>

        {/* Left Text */}
        <div className='ml-10'>
          <h1 className='leading-none font-briqusion drop-shadow-lg text-[170px] text-amber-950'>
            Daily Dough
          </h1>

          <div className='bg-[#daae8275] p-5 mt-5 shadow-lg rounded-bl-[10%] rounded-tl-[5%]'
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, -10% 110%)"
            }}>
            <p className='font-space-semi-bold mt-5 max-w-175 text-lg'>
              We are a team of bakers who are passionate about creating delicious and beautiful desserts.The best desserts in town, we are committed to using only the freshest ingredients and the highest quality products to create our desserts.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className='shrink-0'>
          <div className='bg-[#8716165b] rounded-tl-[20%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[20%] shadow-lg'>
            <img
              src='src/assets/images/Daily_Dough_image.png'
              className='drop-shadow-lg h-100 w-100 object-cover'
            />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='flex justify-between items-center mt-10 px-10'>

        {/* Explore */}
        <p className='underline font-space-light text-amber-950 cursor-pointer text-lg pl-5'>
          explore now
        </p>

        {/* Email Box */}
        <div className='flex items-center bg-[#f5efe9] border border-amber-900 rounded-full w-105 h-14 overflow-hidden shadow-sm'>

          <input
            type='email'
            placeholder='add email id'
            className='flex-1 h-full px-8 outline-none bg-transparent text-amber-900 placeholder:text-amber-700 font-space-medium'
          />

          <button className='h-full px-10 bg-amber-900 text-white font-space-semi-bold rounded-full hover:scale-[1.02] transition-transform cursor-pointer'>
            sign up
          </button>

        </div>

      </div>

    </div>
  )
}

export default DailyDough