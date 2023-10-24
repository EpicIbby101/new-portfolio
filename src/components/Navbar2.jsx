import React from 'react';

const Navbar2 = () => {
  return (
    <nav className="dark:bg-gray-800 p-2 shadow-md">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4 mt-16">
          <li>
            <a href="#" className="dark:text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="dark:text-white hover:text-gray-300">
              About
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
