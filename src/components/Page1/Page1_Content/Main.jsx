import React from 'react'
import Left_side from './Left_side'
import Right_side from './Right_side'

const Main = () => {
  return (
    <div className='flex items-center justify-between px-10 h-[calc(100vh-80px)] w-full'>
        <Left_side />
        <Right_side />
    </div>
  )
}

export default Main