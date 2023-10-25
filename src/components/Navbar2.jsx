import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar2 = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-800 p-2 shadow-md backdrop-blur z-30">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4 mt-16">
          <li>
          <ScrollLink
              className="dark:text-white hover:text-orange-300 cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="dark:text-white hover:text-orange-300 cursor-pointer"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
          <ScrollLink
              className="dark:text-white hover:text-orange-300 cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
