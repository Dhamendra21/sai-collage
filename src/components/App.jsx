import React from 'react'
import Lendingpage from './landing page/Lendingpage'
import Placements from './Placements/Placements'
import Course from './courses/Course'
import Campus from './campus/Campus'
import LocomotiveScroll from 'locomotive-scroll'
import Footer from './others/Footer'
import CoursesPage from './Cources'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  let loco = new LocomotiveScroll()
  return (
    <div className='w-full overflow-x-hidden'>
      <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/courses' element={<CoursesPage/>} />
      
    </Routes>
    </div>
  )
}
export default App