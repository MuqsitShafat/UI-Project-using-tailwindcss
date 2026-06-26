import React from 'react'
import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-red-200'>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App