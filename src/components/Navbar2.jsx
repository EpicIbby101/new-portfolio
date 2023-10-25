import React from 'react';
import { Link } from 'react-router-dom';


const Navbar2 = () => {
  return (
    <nav className="fixed top-0 w-full dark:bg-gray-800 p-2 shadow-md z-30">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4 mt-16">
          <li>
            <a href="#" className="dark:text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="dark:text-white hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="dark:text-white hover:text-gray-300">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
