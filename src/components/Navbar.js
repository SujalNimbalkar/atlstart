import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo_2 from "../assets/altstart-logo41.png";
import { PopupButton } from "react-calendly";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to apply active styles based on the current path
  const getNavItemClass = (path) => {
    return `text-black text-xl px-4 py-2 md:py-0 cursor-pointer ${
      location.pathname === path
        ? "text-primary underline"
        : "hover:text-primary hover:underline"
    }`;
  };

  return (
    <nav className="bg-white px-4 md:px-16 py-4 flex justify-between items-center shadow font-syne sticky top-0 z-50">
      <div>
        <img
          src={Logo_2}
          alt="AltStart"
          className="h-10 w-auto cursor-pointer"
          onClick={() => handleNavigation("/")}
        />
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-primary focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full md:relative md:flex md:w-auto flex-col md:flex-row bg-white md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0`}
      >
        <li
          className={getNavItemClass("/")}
          onClick={() => handleNavigation("/")}
        >
          Home
        </li>
        <li
          className={getNavItemClass("/our-services")}
          onClick={() => handleNavigation("/our-services")}
        >
          Our Services
        </li>
        <li
          className={getNavItemClass("/about-us")}
          onClick={() => handleNavigation("/about-us")}
        >
          About Us
        </li>
        <li
          className={getNavItemClass("/contact-us")}
          onClick={() => handleNavigation("/contact-us")}
        >
          Contact Us
        </li>
        <li className="flex-shrink-0 px-4 py-2 md:py-0">
          <PopupButton
            url="https://calendly.com/altstart-contact"
            className="App bg-black text-white px-4 py-2 rounded-3xl border-black font-syne"
            rootElement={document.getElementById("root")}
            text="Let's Talk"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
