import { motion } from "framer-motion";
import React from "react";

function LendingPage() {
  // Define reusable animation variants for similar animations
  const textVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div   data-scroll-container
    className="w-full h-[110vh] relative">
      <img
        className="w-full absolute h-full object-cover object-left blur-[3px]"
        src="./collage pics/gate.jpg"
        alt=""
        data-scroll 
          data-scroll-speed='-1'
      />

      <div className="w-full px-3 sm:px-20 top-[20%] text-white absolute ">
        {/* Animated heading with textVariants */}
        <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-3xl inline-block overflow-y-hidden sm:tracking-[27px] sm:ml-3 sm:mb-0 font-semibold text-white"
        >
          WE ARE
        </motion.h2>

        {/* Animated Main Title */}
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7, duration: 0.7 }}
          className='text-[5rem] sm:text-[12rem] overflow-y-hidden sm:font-semibold py-5 font-["Inter"] font-bold leading-none tracking-tighter'
        >
          SAI <br /> COLLEGE
        </motion.h1>

        {/* Section with vision, mission, and button */}
        <div className="max-sm:mt-5">
          <h2 className="text-xl tracking-[7px] mt-5 mb-5 max-sm:mb-0 font-semibold text-white">
            WE
          </h2>
          <motion.h4
          initial={{y:"100%",opacity:"0"}}
          animate="animate"
          transition={{ delay: 0.3, duration: 0.5 }}
          whileInView={{y: 0,opacity:1 }}
          className="text-7xl max-sm:text-[3rem] w-2/3 font-semibold">
            ENDEAVOR THROUGH EXCELLENCE
          </motion.h4>

          <h2 className="text-xl mt-20 font-semibold text-white tracking-widest">
            OUR VISION
          </h2>

          <motion.h4
            
            initial={{y:"100%",opacity:"0"}}
          animate="animate"
          transition={{  duration: 0.5 }}
          whileInView={{y: 0,opacity:1 }}
            className="inline-block text-4xl w-2/3 py-5 max-sm:w-full font-semibold"
          >
            EDUCATION FOR ALL QUALITY AND AFFORDABILITY
          </motion.h4>

          <p
           
          className="w-1/2 max-sm:w-full">
           <motion.span
           initial={{y:"100%",opacity:"0"}}
           animate="animate"
           transition={{  duration: 0.5 }}
           whileInView={{y: 0,opacity:1 }}
           className="inline-block"
           > Sai College (Sai Mahavidyalaya) in Bhilai-Durg offers quality
            education in Computers, Science, and Commerce, focusing on holistic
            development to shape future leaders.
            <br  />
            
            We offer quality education at an affordable cost, ensuring that no
            student is deprived of higher learning due to financial constraints.
            The college strives to support students in every possible way.
            </motion.span>
          </p>

          

          {/* Animated button */}
          <motion.button
            initial={{y:"100%",opacity:"0"}}
            animate="animate"
            transition={{  duration: 0.5 }}
            whileInView={{y: 0,opacity:1 }}
            className="px-10 py-3 mt-10 bg-[#34a578] rounded-lg"
          >
            Know more
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default LendingPage;
