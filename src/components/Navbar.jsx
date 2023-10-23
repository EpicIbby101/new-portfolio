import React from "react";
import GithubLogo from '../assets/Githublogo.png'
import InstagramLogo from '../assets/instagram.svg'
import LinkedInLogo from '../assets/linkedin.png'

const Navbar = () => {
  return (
  
    <div className="fixed flex justify-between items-center h-16 sm:h-16 md:h-16 z-20 bg-white/80 dark:bg-gray-700/80 backdrop-blur w-full shadow-md transition duration-500">

      <div className=" flex items-center mr-20 space-x-5 ">
      <a
                href="https://github.com/EpicIbby101"
                target="_blank"
                rel="noreferrer">
                <img 
                src={GithubLogo}
                className="w-11 ml-5"
                alt="Github"
                ></img>
                </a>

      <a
                href="https://www.linkedin.com/in/kevin-grittner-770465243/"
                target="_blank"
                rel="noreferrer">
                <img 
                src={LinkedInLogo}
                className="w-10"
                alt="LinkedIn"
                ></img>
                </a>

                <a
                href="https://www.instagram.com/epicibby/"
                target="_blank"
                rel="noreferrer">
                <img 
                src={InstagramLogo}
                className="w-10"
                alt="Instagram"
                ></img>
                </a>

     </div>
    </div>
  );
};

export default Navbar;
