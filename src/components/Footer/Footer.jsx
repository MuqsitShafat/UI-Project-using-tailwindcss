import React from 'react'
import Socials_Section from './Socials_Section'
import BigTitle from './BigTitle'
import SubFooter from './SubFooter'
const Footer = () => {
  return (
    <div className=' flex flex-col w-full bg-gray-800 text-white px-5'>
      {/* section 1 includes socials something */}
      <Socials_Section />
      {/* section 3 includes a main heading of ADAN BAKERS */}
      <BigTitle />  
      {/* section 4 contains the all rights reserved section */}
      <SubFooter />
    </div>
  )
}

export default Footer