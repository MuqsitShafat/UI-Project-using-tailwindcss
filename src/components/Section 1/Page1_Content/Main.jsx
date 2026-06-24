import React from 'react'
import Left_side from './Left_side'
import Right_side from './Right_side'

const Main = () => {
  return (

    <div className=' flex items-center justify-between px-7 h-[calc(100vh-80px)] w-full mt-5'>
      <div className='flex items-center justify-center h-full w-full bg-[#dfc198]  rounded-tl-[20%] rounded-tr-[100%] rounded-br-[70%] rounded-bl-[10%] '>

        <Left_side />
        <Right_side />
      </div>
    </div>
  )
}

export default Main