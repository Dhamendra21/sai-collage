import React from 'react'
import Lendingpage from './landing page/Lendingpage'
import Placements from './Placements/Placements'
import Course from './courses/Course'
import Campus from './campus/Campus'
import LocomotiveScroll from 'locomotive-scroll'
import Footer from './others/Footer'

function App() {
  let loco = new LocomotiveScroll()
  return (
    <div className='w-full font-["helvetica"] relative overflow-x-hidden'>
        <Lendingpage/>
        <Placements/>
        <Course/>
        <Campus/>
        <Footer/>
    </div>
  )
}
export default App