import React from 'react'
import DailyDough from './DailyDough'
import PersonBaking from './PersonBaking'
import Workingbox from './Workingbox'

const Section3 = () => {
  return (
    <div className='mt-25 flex flex-col '>
        <DailyDough />
        <PersonBaking />
        <Workingbox />
    </div>
  )
}

export default Section3