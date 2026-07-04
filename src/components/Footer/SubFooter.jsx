import React from 'react'

const SubFooter = () => {
  return (
    <div className='flex justify-between items-center w-full border-gray-600 py-5 px-7'>
        <div className=''>
            <p className='font-space-light'>© 2026 Adan Bakers. All rights reserved.</p>
        </div>
        <div className='flex gap-5'>
            <p className='font-space-light hover:underline cursor-pointer opacity-70'>Terms</p>
            <p className='font-space-light hover:underline cursor-pointer opacity-70'>Privacy</p>
            <p className='font-space-light hover:underline cursor-pointer opacity-70'>Cookie</p>
        </div>
    </div>
  ) 
}

export default SubFooter