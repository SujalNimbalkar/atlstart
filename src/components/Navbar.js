// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import { ReactComponent as Logo } from "../assets/altstart-logo-2.svg";
// import { ReactComponent as Logo } from "../assets/altstart-logo.svg";
// import { PopupButton } from "react-calendly";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const handleHomeClick = () => {
//     navigate("/");
//   };

//   const handleOurServicesClick = () => {
//     navigate("/our-services");
//   };

//   const handleAboutClick = () => {
//     navigate("/about-us");
//   };

//   const handleContactUsClick = () => {
//     navigate("/contact-us");
//   };
//   // flex flex-1 justify-center text-xl space-x-8
//   return (
//     <nav className="bg-white px-16 py-4 flex justify-between items-center shadow font-syne overflow-x-auto ">
//       <div>
//         <Logo className="h-10 cursor-pointer" onClick={handleHomeClick} />{" "}
//         {/* Display the SVG logo */}
//       </div>
//       <ul className="flex flex-1 justify-center text-xl space-x-8">
//         <li
//           className="text-black hover:text-primary cursor-pointer"
//           onClick={handleHomeClick}
//         >
//           Home
//         </li>
//         <li
//           className="text-black hover:text-primary cursor-pointer"
//           onClick={handleOurServicesClick}
//         >
//           Our Services
//         </li>
//         <li
//           className="text-black hover:text-primary cursor-pointer"
//           onClick={handleAboutClick}
//         >
//           About Us
//         </li>
//         <li
//           className="text-black hover:text-primary cursor-pointer"
//           onClick={handleContactUsClick}
//         >
//           Contact Us
//         </li>
//       </ul>
//       <div className="flex-shrink-0">
//         <PopupButton
//           url="https://calendly.com/sujalnimbalkar09"
//           className="App bg-black text-white px-4 py-2 rounded-3xl border-black font-syne"
//           /*
//            * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//            * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//            */
//           rootElement={document.getElementById("root")}
//           text="Let's Talk"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;import React, { useState } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as Logo } from "../assets/altstart-logo.svg";
import Logo_2 from "../assets/altstart-logo41.png";
import { PopupButton } from "react-calendly";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    setIsOpen(false);
  };

  const handleOurServicesClick = () => {
    navigate("/our-services");
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    navigate("/about-us");
    setIsOpen(false);
  };

  const handleContactUsClick = () => {
    navigate("/contact-us");
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white px-4 md:px-16 py-4 flex justify-between items-center shadow font-syne sticky top-0 z-50">
      <div>
        <img
          src={Logo_2}
          alt="AltStart"
          className="h-10 w-auto cursor-pointer "
          onClick={handleHomeClick}
        />
        {/* <Logo className="h-10 cursor-pointer" onClick={handleHomeClick} /> */}
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
          className=" text-black text-xl hover:text-primary hover:underline cursor-pointer px-4 py-2 md:py-0"
          onClick={handleHomeClick}
        >
          Home
        </li>
        <li
          className="text-black text-xl hover:text-primary hover:underline  cursor-pointer px-4 py-2 md:py-0"
          onClick={handleOurServicesClick}
        >
          Our Services
        </li>
        <li
          className="text-black text-xl hover:text-primary hover:underline  cursor-pointer px-4 py-2 md:py-0"
          onClick={handleAboutClick}
        >
          About Us
        </li>
        <li
          className="text-black text-xl hover:text-primary hover:underline  cursor-pointer px-4 py-2 md:py-0"
          onClick={handleContactUsClick}
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
