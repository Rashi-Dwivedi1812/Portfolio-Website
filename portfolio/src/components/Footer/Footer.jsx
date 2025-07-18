import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
   const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to yellow-500 bg-clip-text text-transparent">Rashi Dwivedi</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Education", id: "education" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Experience", id: "experience" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/rashidwivedi1812/" },
            { icon: <FaTwitter />, link: "https://x.com/_rashidwivedi_" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rashi-dwivedi-796032339/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_.rashidwivedi._/" },
            { icon: <FaGithub />, link: "https://github.com/Rashi-Dwivedi1812" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rashi Dwivedi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
