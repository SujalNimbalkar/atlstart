import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../assets/arrow-icon.svg";

const serviceContent = {
  universities: {
    title1: "Professor Development: ",
    text1:
      "Equip your faculty with the latest AI knowledge and best practices through comprehensive training programs. We can help professors integrate AI into their curriculum, ensuring students graduate with the skills needed to thrive in the AI-driven workforce",
    title2: "Student Empowerment",
    text2:
      "Offer in-demand AI courses and workshops for students, preparing them for future careers. We provide hands-on learning experiences with real-world applications, making them valuable assets upon graduation.",
  },
  organizations: {
    title1: "Customized Training: ",
    text1:
      "We tailor AI training programs to your specific needs and industry. From foundational AI concepts to advanced applications, we equip your workforce with the skills needed to revolutionize your operations.",
    title2: "Unlocking Innovation: ",
    text2:
      "Foster a culture of innovation within your organization by empowering employees to leverage AI for problem-solving and creative thinking. We help you identify AI opportunities and integrate them seamlessly into your workflows.",
  },
  individuals: {
    title1: "Idea Incubator: ",
    text1:
      "Take your ideas from the drawing board to reality. Our interactive workshops and courses provide the tools and knowledge to leverage AI at every stage of the product development process, from initial brainstorming to prototyping and testing.",
    title2: "Become an Innovation Catalyst: ",
    text2:
      "Empower yourself to be the driving force behind groundbreaking products. Our programs develop your ability to think critically, iterate on ideas, and leverage AI to create solutions that make a difference.",
  },
};

const OurServices = () => {
  const [selectedService, setSelectedService] = useState("universities");

  const { title1, text1, title2, text2 } = serviceContent[selectedService];

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-fit mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase tracking-wider mb-2 font-syne">
            Explore Our Services
          </p>
          <h2 className="text-4xl font-bold text-black font-syne">
            Transform Talent, Achieve the Extraordinary!
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-black to-gray-900 text-white rounded-[50px] overflow-hidden shadow-lg">
          <div className="flex flex-col lg:w-1/3 justify-center gap-10">
            <button
              className={`${
                selectedService === "universities"
                  ? "bg-[#C7C644] text-black"
                  : "text-white"
              } p-4 font-bold text-lg flex items-center justify-between hover:bg-[#C7C644] hover:text-black font-syne relative mx-auto min-w-[80%] rounded-[50px]`}
              onClick={() => setSelectedService("universities")}
            >
              <span>For Universities</span>
              <ArrowIcon className="text-black ml-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
            </button>
            <button
              className={`${
                selectedService === "organizations"
                  ? "bg-[#C7C644] text-black"
                  : "text-white"
              } p-4 font-bold text-lg flex items-center justify-between hover:bg-[#C7C644] hover:text-black font-syne relative mx-auto min-w-[80%] rounded-[50px]`}
              onClick={() => setSelectedService("organizations")}
            >
              <span>For Organizations</span>
              <ArrowIcon className="text-black ml-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
            </button>
            <button
              className={`${
                selectedService === "individuals"
                  ? "bg-[#C7C644] text-black"
                  : "text-white"
              } p-4 font-bold text-lg flex items-center justify-between hover:bg-[#C7C644] hover:text-black font-syne relative mx-auto min-w-[80%] rounded-[50px]`}
              onClick={() => setSelectedService("individuals")}
            >
              <span>For Individuals and Teams</span>
              <ArrowIcon className="text-black ml-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
            </button>
          </div>
          <div className="w-[50px] "></div>
          <div className="p-8 lg:w-2/3 bg-gray-100 text-black rounded-[50px]">
            <h3 className="text-2xl font-bold mb-4 font-syne">{title1}</h3>
            <p className="text-lg mb-6 font-syne">{text1}</p>
            <h3 className="text-2xl font-bold mb-4 font-syne">{title2}</h3>
            <p className="text-lg mb-6 font-syne">{text2}</p>
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
