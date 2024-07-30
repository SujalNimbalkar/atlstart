import React from "react";
import { ReactComponent as Logo } from "../assets/altstart-logo.svg"; // Import the SVG logo

const Navbar = () => {
  return (
    <nav className="bg-white px-[80px] py-4 flex justify-between items-center shadow font-syne">
      <div>
        <Logo className="h-10" /> {/* Display the SVG logo */}
      </div>
      <ul className="flex flex-1 justify-center space-x-8">
        <li className="text-primary">Our Services</li>
        <li className="text-black">About</li>
        <li className="text-black">Contact Us</li>
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
