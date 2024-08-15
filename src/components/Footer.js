// import React from "react";
// import { ReactComponent as InstagramIcon } from "../assets/instagram-icon.svg";
// // import { ReactComponent as FacebookIcon } from "../assets/facebook-icon.svg";
// import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
// import { ReactComponent as UpArrowIcon } from "../assets/up-arrow-icon.svg";
// import { ReactComponent as Logo } from "../assets/altstart-logo-white.svg";
// import { ReactComponent as PhoneIcon } from "../assets/phone-icon.svg";
// import { ReactComponent as SendIcon } from "../assets/send-icon.svg";
// // import { ReactComponent as LocationIcon } from "../assets/location-icon.svg";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="bg-[#18191B] text-white py-10 font-inter">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div>
//             <Logo className="h-10" /> {/* Display the SVG logo */}
//           </div>
//           <div className="space-y-4 text-center md:text-left">
//             <div>
//               <h3 className="text-lg font-bold mb-2 flex items-center">
//                 <PhoneIcon className />
//                 &nbsp;Contact Us
//               </h3>
//               <p>+91 91825 67700</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-2 flex items-center">
//                 <SendIcon />
//                 &nbsp; Email
//               </h3>
//               <p>altstart.contact@gmail.com</p>
//             </div>
//           </div>
//           <div className="space-y-4 text-center md:text-left">
//             {/* <div>
//               <h3 className="text-lg font-bold mb-2 flex items-center">
//                 <LocationIcon />
//                 &nbsp; Address
//               </h3>
//               <p className="text-lg">addresslocation lorem ipsum, pune</p>
//             </div> */}

//             <div>
//               <h3 className="text-lg font-bold mb-2">FOLLOW US ON</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="https://www.instagram.com/altstart.ai"
//                   className="text-xl"
//                 >
//                   <InstagramIcon />
//                 </a>
//                 <a href="/" className="text-xl">
//                   <TwitterIcon />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="space-y-14 text-center text-gray-500 ">
//             <div className="flex justify-center md:justify-end mt-6 md:mt-0">
//               <button
//                 onClick={scrollToTop}
//                 className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
//               >
//                 <UpArrowIcon className="h-6 w-6 text-white" />
//               </button>
//             </div>
//             <div>
//               <p>© 2024 — Copyright</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { ReactComponent as InstagramIcon } from "../assets/instagram-icon.svg";
// import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
import { ReactComponent as UpArrowIcon } from "../assets/up-arrow-icon.svg";
// import { ReactComponent as Logo } from "../assets/altstart-logo-white.svg";
import Logo from "../assets/altstart-logo-white2.png";
import { ReactComponent as PhoneIcon } from "../assets/phone-icon.svg";
import { ReactComponent as SendIcon } from "../assets/send-icon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin-icon.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#18191B] text-white py-10 font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center md:items-start">
            {/* <Logo className="h-10 mb-4 md:mb-0" /> */}
            <img
              src={Logo}
              alt="Logo"
              className="h-10 mb-4 md:mb-0"
              onClick={() => {
                handleHomeClick();
                scrollToTop();
              }}
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold mb-2 flex justify-center md:justify-start items-center">
                <PhoneIcon className="inline-block" />
                &nbsp;Contact Us
              </h3>
              <p>+91 91825 67700</p>
            </div>
            {/* <div>
              <h3 className="text-lg font-bold mb-2 flex justify-center md:justify-start items-center">
                <SendIcon className="inline-block" />
                &nbsp; Email
              </h3>
              <p>altstart.contact@gmail.com</p>
            </div> */}
            <div>
              <h3 className="text-lg font-bold mb-2 flex justify-center md:justify-start items-center">
                <SendIcon className="inline-block" />
                &nbsp; Email
              </h3>
              <p>
                <a
                  href="mailto:altstart.contact@gmail.com"
                  className="text-white hover:underline"
                >
                  altstart.contact@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-bold mb-2">FOLLOW US ON</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/altstart.ai"
                  className="text-xl"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/altstart/"
                  className="text-xl"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-center text-gray-500">
            <div className="flex justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                <UpArrowIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <div>
              <p>© 2024 — Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
