import React from 'react'
import Heading from './Heading'
import Marquee from './Marquee'

function Placements() {
  return (
    <div className='w-full mt-[85vh]'>
       <Heading/>
       <div>
       <h1 className='text-7xl sm:w-4/6 font-["inter"] font-[500] max-sm:font-semibold  max-sm:text-4xl pb-10 px-20 max-sm:px-5'>Top companies our students are working with </h1>
       </div>
       <Marquee/>
    </div>
  )
}

export default Placements