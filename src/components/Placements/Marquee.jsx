import { motion, transform } from "framer-motion";
import { linearGradient } from "framer-motion/client";
import React, { useEffect, useState } from "react";

function Marquee() {
  let [scrollDir, setsScrolldir] = useState(null);
  let [lastsScrollDir, setLastScrollDir] = useState(window.scrollY);

  let images = [
    "https://www.google.com/imgres?q=hdfc%20bank%20logo&imgurl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2021%2F06%2FHDFC-Bank-logo.png&imgrefurl=https%3A%2F%2F1000logos.net%2Fhdfc-bank-logo%2F&docid=Vt6hFJP0Acpk9M&tbnid=kZscqyZWRC7uSM&vet=12ahUKEwi4zeTEz5iMAxXdUGwGHXdSGrEQM3oECBkQAA..i&w=3840&h=2160&hcb=2&ved=2ahUKEwi4zeTEz5iMAxXdUGwGHXdSGrEQM3oECBkQAA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpyU_Q_yWAf5COUYPWDyQnU7AKklDP4KYow&s",
    "https://logos-download.com/wp-content/uploads/2020/06/Wipro_Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwS892ZrfKbMAl5MqUut_mIB5-XWXerupXQ&s",
    "https://d2q79iu7y748jz.cloudfront.net/s/_logo/666090f6a619f2d61ad2cbb00c5c23f5",
    "https://logos-world.net/wp-content/uploads/2022/07/HCL-Technologies-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo.jpg",
  ];

  useEffect(() => {
    let getScrollDirection = () => {
      const currentState = window.scrollY;
      if (currentState > lastsScrollDir) {
        setsScrolldir("up");
        // console.log("sidha scroll kiya");
      } else if (currentState < lastsScrollDir) {
        setsScrolldir("down");
        // console.log("ulta scroll kiya ");
      }
      setLastScrollDir(currentState);
    };
    window.addEventListener("scroll", getScrollDirection);
    return () => window.removeEventListener("scroll", getScrollDirection);
  }, [lastsScrollDir]);

  return (
    <div className="w-full py-10 overflow-x-hidden relative">
      <div className="left z-50 absolute top-[7rem] w-[15rem] h-[10rem] max-sm:w-[5rem] bg-gradient-to-r from-[#f9f9f9] via-[#f7f7f7b3] to-[#ececec27] "  ></div>
      <div className="left z-50 absolute top-[7rem] right-0 w-[15rem] max-sm:w-[5rem] h-[10rem] bg-gradient-to-r from-[#f9f9f900] via-[#f7f7f7d1] to-[#ffffff] "  ></div>
      <motion.div
        animate={{ x: scrollDir === "up" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="flex flex-nowrap gap-20 mt-10 translate-x-0 py-20 relative "
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            src={image}
            alt="Logo"
            className="h-[100px] w-auto object-cover z-10"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
