import React from 'react'
import Lendingpage from './landing page/Lendingpage'
import Placements from './Placements/Placements'
import Course from './courses/Course'
import Campus from './campus/Campus'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  let loco = new LocomotiveScroll()
  return (
    <div className='w-full font-["helvetica"]'>
        <Lendingpage/>
        <Placements/>
        <Course/>
        <Campus/>
    </div>
  )
}
export default App