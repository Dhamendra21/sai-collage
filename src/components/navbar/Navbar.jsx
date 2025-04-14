import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  // Handle body scroll
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menu]);

  // Animation handler
  const handleOpen = () => {
    if (!menu) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
    setMenu(!menu);
  };

  return (
    <div className="z-[9999]  flex justify-between items-center px-10 max-sm:px-3 absolute w-full top-0">
      <Link to={'/'} className="logo py-2 flex gap-5 items-center">
        <img className="w-[5rem] max-sm:w-[3rem]" src="./logo.png" alt="Logo" />
        <h3 className='uppercase text-3xl max-sm:text-xl font-["gilroy"]'>sai college</h3>
      </Link >
      
      <div className="z-[99] top-0">
        <div className="w-10 z-[999]">
          <svg
            onClick={handleOpen}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cursor-pointer z-[99999]"
          >
            <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>

        <div
          ref={menuRef}
          className="w-[50vw] max-sm:w-[100vw] h-screen px-10 bg-[#d8d8d8c9] backdrop-blur-sm absolute top-0 z-[99999] right-0 transform overflow-y-auto"
          style={{ transform: 'translateX(100%)' }}
        >
          <div className="w-10">
            <svg
              onClick={handleOpen}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="cursor-pointer"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </div>

          <div className="links flex flex-col gap-5 mt-10">
            {[
              "Attainment",
              "Capacity Building",
              "Facilities",
              "Academics",
              "Admission",
              "Departments",
              "Programs",
              "Fees structure",
              "committees/cells/clubs",
              "Students",
              "Gallery",
              "Feedback",
            ].map((l, i) => (
              <a
                href="#"
                className="text-xl hover:scale-105 transition-[1s] capitalize border-t-2 py-5"
                key={i}
                onClick={() => setMenu(false)} // Close menu on click
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;