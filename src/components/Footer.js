import React from "react";
import { ReactComponent as InstagramIcon } from "../assets/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
import { ReactComponent as UpArrowIcon } from "../assets/up-arrow-icon.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-10 font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Altstart</h2>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div>
              <p>Contact Us</p>
              <p>+91 78896 77765</p>
            </div>
            <div>
              <p>Email</p>
              <p>hello@logoipsum.com</p>
            </div>
            <div>
              <p>Address</p>
              <p>address location lorem ipsum, pune</p>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <InstagramIcon className="h-6 w-6" />
              <FacebookIcon className="h-6 w-6" />
              <TwitterIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <UpArrowIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          <p>© 2024 — Copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
