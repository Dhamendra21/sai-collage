import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
function Heading() {


  useGSAP(()=>{
    //  gsap.to(headingRef.current,{
    //       scrollTrigger: {
    //         trigger: parent.current,
    //         top: "0 0",
    //         pin: true,
    //         scrub: 3,
    //         // markers: true, // Remove this in production
    //       },
    //       x:"-120%",
    //       duration:7
    //     })
  })

  return (
    <div className="w-full  overflow-x-hidden flex items-center sm:px-20 max-sm:pt-0 py-20">
    <motion.h1 className="text-[6.5rem] max-sm:text-[4rem] font-['inter'] font-semibold  leading-none mt-20 uppercase">
  {["campus", "glimpse &", "facility"].map((p, i) => {
    return (
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}  // Correct initial values
        whileInView={{ y: 0, opacity: 1 }}       // Correct animate object
        transition={{ delay: i * 0.2, duration: 0.5 }} // Adding delay for staggered effect
        className="inline-block ml-5 w-full text-wrap"
      >
        {p}
      </motion.span>
    );
  })}
</motion.h1>
</div>
  );
}

export default Heading;

// 

