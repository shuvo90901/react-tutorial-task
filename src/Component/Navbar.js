import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="logo192.png" alt="Logo" className="w-8 h-8" />
        </div>
        <ul className="space-x-4">
          <li className="inline-block">
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li className="inline-block">
            <a href="#about" className="text-white">
              About
            </a>
          </li>
          <li className="inline-block">
            <a href="#services" className="text-white">
              Services
            </a>
          </li>
          <li className="inline-block">
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
