import React from "react";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as Logo } from "../assets/altstart-logo-2.svg";
import { ReactComponent as Logo } from "../assets/altstart-logo.svg";
import { PopupButton } from "react-calendly";

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
    <nav className="bg-white px-16 py-4 flex justify-between items-center shadow font-syne overflow-x-auto ">
      <div>
        <Logo className="h-10 cursor-pointer" onClick={handleHomeClick} />{" "}
        {/* Display the SVG logo */}
      </div>
      <ul className="flex flex-1 justify-center text-xl space-x-8">
        <li className="text-primary cursor-pointer" onClick={handleHomeClick}>
          Home
        </li>
        <li
          className="text-black cursor-pointer"
          onClick={handleOurServicesClick}
        >
          Our Services
        </li>
        <li className="text-black cursor-pointer" onClick={handleAboutClick}>
          About Us
        </li>
        <li
          className="text-black cursor-pointer"
          onClick={handleContactUsClick}
        >
          Contact Us
        </li>
      </ul>
      <div className="flex-shrink-0">
        <PopupButton
          url="https://calendly.com/sujalnimbalkar09"
          className="App bg-black text-white px-4 py-2 rounded-3xl border-black font-syne"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Let's Talk"
        />
      </div>
    </nav>
  );
};

export default Navbar;
