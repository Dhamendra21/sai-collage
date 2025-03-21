import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const Course = () => {
  const imageRef = useRef([]);
  const coursesRef = useRef([]); // Store DOM nodes for each course row
  const LinkRef = useRef([]); // Store links for each "Know more"
  const [hoverDiv, setHoverDiv] = useState(false);

  const courses = [
    {
      name: "BCA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6EBEgWfpH2IXAJUZ1wNZVUP_YdTgqagepA&s",
    },
    {
      name: "B-COM",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/401518941/GH/AH/HK/7402335/bachelor-of-commerce-500x500.jpg",
    },
    {
      name: "BBA",
      image: "https://www.includehelp.com/dictionary/Images/bba.jpg",
    },
    {
      name: "B.LIB",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjIiJI1Wy3Tz8j8HOmSGlaC3pZUOrBySxDxI7UQTpzd_QsizbaG3qrHsXGZoncg_LTUQM&usqp=CAU",
    },
    {
      name: "MSC CS",
      image: "https://www.kaashiv.com/img/course/hyw0xlf0.png",
    },
  ];

  const hoverImage = (i, e) => {
    if (!coursesRef.current[i]) return;

    let rotate = 0;
    let diffRot = 0;

    const elem = coursesRef.current[i];
    const imgElem = imageRef.current[i];

    // Mouse Move Animation
    elem.addEventListener("mousemove", (e) => {
      if (!imgElem) return;

      const diff = e.clientY - elem.getBoundingClientRect().top;
      diffRot = e.clientX - rotate;
      rotate = e.clientX;

      gsap.to(imgElem, {
        opacity: 1,
        y: diff - 50,
        left: e.clientX,
        rotate: gsap.utils.clamp(-30, 20, diffRot * 0.5),
        ease: "linear",
        delay: 0.07,
        duration: 0.1,
      });
    });

    // Mouse Leave Animation
    elem.addEventListener("mouseleave", () => {
      gsap.to(imgElem, {
        opacity: 0,
        duration: 0.3,
      });
    });
    
  };

  return (
    <div className="w-full px-20 max-sm:px-2 my-20 relative overflow-x-hidden">
      <motion.h1
      initial={{x:"-100%",opacity:0, }}
      animate="animate"
      transition={{ duration: 0.7, ease:"easeIn" }}
      whileInView={{x: 0,opacity:1 }}
      className="text-6xl font-bold tracking-tight sticky top-0 z-50">
        COURSES
      </motion.h1>

      <div className="my-20">
        {courses.map((c, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoverDiv(true)}
            onMouseLeave={() => setHoverDiv(false)}
            onMouseMove={(e) => hoverImage(i, e)}
            ref={(el) => (coursesRef.current[i] = el)} // Store each ref correctly
            className="elem h-[8rem] flex items-center justify-between px-10 w-full border-y relative border-gray-300 cursor-pointer hover:bg-zinc-300 hover:scale-[1.07]"
          >
            <h3 className="text-2xl">{c.name}</h3>
            <img
              ref={(el) => (imageRef.current[i] = el)} // Store each image ref
              src={c.image}
              className="h-[6rem] w-[8rem] absolute rounded-lg shadow-lg pointer-events-none opacity-0 -translate-y-1/2 -translate-x-1/2"
              alt="Hovered Course"
            />
            {hoverDiv ? (
              <a
                ref={(el) => (LinkRef.current[i] = el)}
                href="#"
                className="opacity"
              >
                Know more
              </a>
            ) : (
              ""
            )}
          </div>
        ))}

        <button className="mt-10 bg-zinc-800 text-white text-xl px-8 py-5 rounded-full hover:scale-105">
          Fees structure
        </button>
      </div>
    </div>
  );
};

export default Course;
