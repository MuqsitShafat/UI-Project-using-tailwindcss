import React from 'react'
import Left_side from './Left_side'
import Right_side from './Right_side'

const Main = () => {
  return (
    <div className='h-full w-full flex '>
        <Left_side />
        <Right_side />
    </div>
  )
}

export default Main