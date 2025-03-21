import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger, Power4, Linear } from "gsap/all";

import gsap from "gsap";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <div className="w-full  overflow-x-hidden flex items-center sm:px-20 py-20">
    <motion.h1 className="text-[6.5rem] max-sm:text-[12rem] font-['inter'] font-semibold  leading-none mt-20 uppercase">
  {["Launching ", "Careers, " , "Building, ", "Futures!"].map((p, i) => {
    return (
      <motion.span
        key={i}
        initial={{ y: "100%", opacity: 0 }}  // Correct initial values
        whileInView={{ y: 0, opacity: 1 }}       // Correct animate object
        transition={{ delay: i * 0.2, duration: 0.5 }} // Adding delay for staggered effect
        className="inline-block ml-5"
      >
        {p}
      </motion.span>
    );
  })}
</motion.h1>

    </div>
  );
};

export default Heading;
