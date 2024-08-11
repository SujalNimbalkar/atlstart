import React from "react";
import imageSrc from "../assets/our-services-university-section.svg"; // Replace with the actual path to your image
import { ReactComponent as TickIcon } from "../assets/tick-icon.svg";

const OurServicesInfo = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white p-16 gap-20 font-syne">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          Unleash the Power of Human + Machine <br /> with{" "}
          <span className="text-yellow-500">AltStart</span>
        </h1>
        <p className="text-lg text-gray-800">
          Here's how AltStart ignites innovation and drives success for you:
        </p>
      </div>
      <div className="max-w-7xl mx-px grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFFED] p-16 rounded-lg shadow-lg">
        <div className="">
          <h2 className="text-3xl font-bold text-black mb-4">
            For Universities
          </h2>
          <div className="mb-4">
            <p className="text-lg text-black">
              <span className="inline-block mr-2">
                <TickIcon />
              </span>
              <span className="font-bold">Professor Development:</span> Equip
              your faculty with the latest AI knowledge and best practices
              through comprehensive training programs. We can help professors
              integrate AI into their curriculum, ensuring students graduate
              with the skills needed to thrive in the AI-driven workforce.
            </p>
          </div>
          <div>
            <p className="text-lg text-black">
              <span className="inline-block mr-2">
                <TickIcon />
              </span>
              <span className="font-bold">Student Empowerment:</span> Offer
              in-demand AI courses and workshops for students, preparing them
              for future careers. We provide hands-on learning experiences with
              real-world applications, making them valuable assets upon
              graduation.
            </p>
          </div>
          <button className="mt-8 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
            TALK TO AN EXPERT
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imageSrc}
            alt="Students working together"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFFED] p-16 rounded-lg shadow-lg">
        <div className="flex justify-center items-center">
          <img
            src={imageSrc}
            alt="Students working together"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold text-black mb-4">
            For Organizations
          </h2>
          <div className="mb-4">
            <p className="text-lg text-black">
              <span className="inline-block mr-2">
                <TickIcon />
              </span>
              <span className="font-bold">Customized Training:</span> We tailor
              AI training programs to your specific needs and industry. From
              foundational AI concepts to advanced applications, we equip your
              workforce with the skills needed to revolutionize your operations.
            </p>
          </div>
          <div>
            <p className="text-lg text-black">
              <span className="inline-block mr-2">
                <TickIcon />
              </span>
              <span className="font-bold">Unlocking Innovation:</span> Foster a
              culture of innovation within your organization by empowering
              employees to leverage AI for problem-solving and creative
              thinking. We help you identify AI opportunities and integrate them
              seamlessly into your workflows.
            </p>
          </div>
          <button className="mt-8 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
            TALK TO AN EXPERT
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFFED] p-16 rounded-lg shadow-lg">
        <div className="">
          <h2 className="text-3xl font-bold text-black mb-4">
            For Individuals & Teams
          </h2>
          <div className="mb-4">
            <p className="text-lg text-black">
              <span className="inline-block mr-2">
                <TickIcon />
              </span>
              <span className="font-bold">Idea Incubator:</span> Take your ideas
              from the drawing board to reality. Our interactive workshops and
              courses provide the tools and knowledge to leverage AI at every
              stage of the product development process, from initial
              brainstorming to prototyping and testing.
            </p>
          </div>
          <div>
            <p className="text-lg text-black">
              <span className="inline-block mr-2">
                <TickIcon />
              </span>
              <span className="font-bold">Become an Innovation Catalyst: </span>
              Empower yourself to be the driving force behind groundbreaking
              products. Our programs develop your ability to think critically,
              iterate on ideas, and leverage AI to create solutions that make a
              difference. graduation.
            </p>
          </div>
          <button className="mt-8 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
            TALK TO AN EXPERT
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imageSrc}
            alt="Students working together"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServicesInfo;
