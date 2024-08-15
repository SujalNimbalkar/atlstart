import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../assets/arrow-icon.svg";
import { useNavigate } from "react-router-dom";
const serviceContent = {
  universities: {
    // title1: "Professor Development: ",
    text1:
      "Elevate your university's academic offerings by empowering both faculty and students with our cutting-edge AI training programs. Equip professors with the latest tools to seamlessly weave AI into their curriculum, ensuring they teach with confidence and foresight. At the same time, arm your students with hands-on, real-world AI skills that make them stand out in a competitive job market. Invest in knowledge today to harvest success tomorrow—let us help you cultivate a future-ready workforce.",
    // title2: "Student Empowerment",
    // text2:
    //   "Offer in-demand AI courses and workshops for students, preparing them for future careers. We provide hands-on learning experiences with real-world applications, making them valuable assets upon graduation.",
  },
  organizations: {
    // title1: "Customized Training: ",
    text1:
      "Supercharge your organization with customized AI training tailored to your industry’s unique needs. From foundational concepts to advanced applications, we equip your workforce with the tools to revolutionize operations and drive growth. Unlock innovation by fostering a culture where employees are empowered to harness AI for problem-solving and creative thinking. We'll help you identify AI opportunities and seamlessly integrate them into your workflows, paving the way for groundbreaking success.",
    // title2: "Unlocking Innovation: ",
    // text2:
    //   "Foster a culture of innovation within your organization by empowering employees to leverage AI for problem-solving and creative thinking. We help you identify AI opportunities and integrate them seamlessly into your workflows.",
  },
  individuals: {
    // title1: "Idea Incubator: ",
    text1:
      " Unleash your potential with our Idea Incubator, where your ideas evolve from concept to reality. Through interactive workshops and courses, we equip you with the AI tools and knowledge needed at every stage of product development—from brainstorming to prototyping and testing. Become an innovation catalyst and be the driving force behind groundbreaking solutions. Our programs empower you to think critically, iterate on ideas, and leverage AI to create products that truly make a difference.",
    // title2: "Become an Innovation Catalyst: ",
    // text2:
    // "Empower yourself to be the driving force behind groundbreaking products. Our programs develop your ability to think critically, iterate on ideas, and leverage AI to create solutions that make a difference.",
  },
};

const OurServices = () => {
  const [selectedService, setSelectedService] = useState("universities");

  const { title1, text1, title2, text2 } = serviceContent[selectedService];
  const navigate = useNavigate();
  const handleOurServicesClick = () => {
    navigate("/our-services");
  };
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
          <div className="flex flex-col lg:w-1/3 justify-center gap-10 py-4">
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

          <div className="p-8 lg:w-2/3 bg-gray-100 text-black rounded-[50px]">
            <h3 className="text-2xl font-bold mb-4 font-syne">{title1}</h3>
            <p className="text-lg mb-6 font-syne">{text1}</p>
            <h3 className="text-2xl font-bold mb-4 font-syne">{title2}</h3>
            <p className="text-lg mb-6 font-syne">{text2}</p>
            <li
              // href="/"
              className="text-black font-normal underline hover:no-underline font-syne"
              style={{
                textDecorationColor: "#C7C644",
                textDecorationThickness: "1.5px",
              }}
              onClick={handleOurServicesClick}
            >
              Learn More
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
