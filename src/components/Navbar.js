import React from "react";
import { ReactComponent as Logo } from "../assets/altstart-logo.svg";

const Navbar = () => {
  const handleOurServicesClick = () => {
    // Your logic for handling 'Our Services' click
    console.log("Our Services clicked");
  };

  const handleAboutClick = () => {
    // Your logic for handling 'About' click
    console.log("About clicked");
  };

  const handleContactUsClick = () => {
    // Your logic for handling 'Contact Us' click
    console.log("Contact Us clicked");
  };

  return (
    <nav className="bg-white px-[80px] py-4 flex justify-between items-center shadow font-syne">
      <div>
        <Logo className="h-10" /> {/* Display the SVG logo */}
      </div>
      <ul className="flex flex-1 justify-center text-xl space-x-8">
        <li className="text-primary" onClick={handleOurServicesClick}>
          Our Services
        </li>
        <li className="text-black" onClick={handleAboutClick}>
          About
        </li>
        <li className="text-black" onClick={handleContactUsClick}>
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
