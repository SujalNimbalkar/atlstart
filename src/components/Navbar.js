import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/altstart-logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleOurServicesClick = () => {
    navigate("/our-services");
  };

  const handleAboutClick = () => {
    navigate("/about-us");
  };

  const handleContactUsClick = () => {
    navigate("/contact-us");
  };

  return (
    <nav className="bg-white px-16 py-4 flex justify-between items-center shadow font-syne">
      <div>
        <Logo className="h-10" /> {/* Display the SVG logo */}
      </div>
      <ul className="flex flex-1 justify-center text-xl space-x-8">
        <li className="text-primary cursor-pointer" onClick={handleHomeClick}>
          Home
        </li>
        <li
          className="text-primary cursor-pointer"
          onClick={handleOurServicesClick}
        >
          Our Services
        </li>
        <li className="text-black cursor-pointer" onClick={handleAboutClick}>
          About
        </li>
        <li
          className="text-black cursor-pointer"
          onClick={handleContactUsClick}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex-shrink-0">
        <button className="bg-black text-white px-4 py-2 rounded-3xl border-black">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
