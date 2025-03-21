import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { ScrollTrigger, Power4, Linear } from "gsap/all";

import gsap from 'gsap'

const Heading = () => {
  let headingRef = useRef(null)
  let parent = useRef(null)
   useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(headingRef.current,{
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 3,
        // markers: true, // Remove this in production
      },
      x:"-80%",
      duration:7,
      ease:Linear
    })
  })
  return (
    <div ref={parent} className='w-full  overflow-x-hidden flex items-center sm:px-20 py-20'>
        <h1 ref={headingRef}  className='text-[33rem] max-sm:text-[12rem]  text-nowrap uppercase '>Launching Careers, Building Futures!</h1>
    </div>
  )
  
}

export default Heading