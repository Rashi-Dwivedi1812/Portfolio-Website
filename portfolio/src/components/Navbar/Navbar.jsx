import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    const menuItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];
  return (
       <nav
  className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-6xl z-50 transition duration-300 px-6 md:px-10 rounded-2xl border border-[#2d2d3a]/30 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      style={{ boxShadow: isScrolled ? "0 4px 24px 0 rgba(130, 69, 236, 0.08)" : "none" }}
    >


      <div className="text-white py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer flex items-center space-x-1">
          <span className="text-pink-500">&lt;</span>
          <span className="text-white">Rashi</span>
          <span className="text-pink-500">/</span>
          <span className="text-white">Dwivedi</span>
          <span className="text-pink-500">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
           {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-pink-500 transition-colors duration-200 ${
                activeSection === item.id ? "text-pink-500 font-semibold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
             href="#contact"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-200"
          >
            <IoMdContact size={27} />
          </a>
          <a
            href="https://github.com/Rashi-DWivedi1812"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rashi-dwivedi-796032339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-pink-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-pink-500 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
       {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#18162a]/95 backdrop-blur-lg z-50 rounded-xl shadow-lg md:hidden border border-[#2d2d3a]">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                  activeSection === item.id ? "text-pink-500 font-semibold" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rashi-DWivedi1812"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                 <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rashi-dwivedi-796032339/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};