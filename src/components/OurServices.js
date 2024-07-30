import React from "react";
import { ReactComponent as ArrowIcon } from "../assets/arrow-icon.svg"; // Ensure you have an arrow icon SVG

const OurServices = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase tracking-wider mb-2 font-syne">
            Explore Our Services
          </p>
          <h2 className="text-4xl font-bold text-black font-syne">
            Transform Talent, Achieve the Extraordinary!
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-black to-gray-900 text-white rounded-[50px] overflow-hidden shadow-lg">
          <div className="flex flex-col lg:w-1/3 justify-around">
            <button className="bg-[#C7C644] text-black p-4 font-bold text-lg flex items-center justify-between hover:bg-[#C7C644] font-syne relative mx-auto min-w-[80%] rounded-[50px]">
              <span>For Universities</span>
              <ArrowIcon className="text-black ml-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
            </button>
            <div className="text-white p-4 font-bold text-lg hover:bg-gray-800 font-syne">
              For Organizations
            </div>
            <div className="text-white p-4 font-bold text-lg hover:bg-gray-800 font-syne">
              For Individuals and Teams
            </div>
          </div>
          <div className="w-[50px] "></div>
          <div className="p-8 lg:w-2/3 bg-gray-100 text-black rounded-[50px]">
            <h3 className="text-2xl font-bold mb-4 font-syne">
              Professor Development
            </h3>
            <p className="text-lg mb-6 font-syne">
              Equip your faculty with the latest AI knowledge and best practices
              through comprehensive training programs. We can help professors
              integrate AI into their curriculum, ensuring students graduate
              with the skills needed to thrive in the AI-driven workforce.
            </p>
            <h3 className="text-2xl font-bold mb-4 font-syne">
              Student Empowerment
            </h3>
            <p className="text-lg mb-6 font-syne">
              Offer in-demand AI courses and workshops for students, preparing
              them for future careers. We provide hands-on learning experiences
              with real-world applications, making them valuable assets upon
              graduation.
            </p>
            <a
              href="/"
              className="text-black font-normal underline hover:no-underline font-syne"
              style={{
                textDecorationColor: "#C7C644",
                textDecorationThickness: "1.5px",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
