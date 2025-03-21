import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
function Heading() {

let parent = useRef(null)
let headingRef = useRef(null)

  useGSAP(()=>{
     gsap.to(headingRef.current,{
          scrollTrigger: {
            trigger: parent.current,
            top: "0 0",
            pin: true,
            scrub: 3,
            markers: true, // Remove this in production
          },
          x:"-120%",
          duration:7
        })
  })

  return (
    <div ref={parent} className="w-full  overflow-x-hidden flex items-center sm:px-20 py-20">
      <h1 ref={headingRef} className="text-[29rem] max-sm:text-[12rem]  text-nowrap uppercase ">
       campus glimpse : infrastructure & facility
      </h1>
    </div>
  );
}

export default Heading;
