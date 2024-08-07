import React from "react";
import imageSrc from "../assets/our-services-university-section.svg"; // Replace with the actual path to your image

const OurServicesInfo = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white p-8 font-syne">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-black mb-4">
          Unleash the Power of Human + Machine <br /> with{" "}
          <span className="text-yellow-500">AltStart</span>
        </h1>
        <p className="text-lg text-gray-800">
          Here's how AltStart ignites innovation and drives success for you:
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-yellow-100 p-8 rounded-lg shadow-lg">
        <div className="">
          <h2 className="text-3xl font-bold text-black mb-4">
            For Universities
          </h2>
          <div className="mb-4">
            <p className="text-lg text-black">
              <span className="inline-block text-green-600 mr-2">✔️</span>
              <span className="font-bold">Professor Development:</span> Equip
              your faculty with the latest AI knowledge and best practices
              through comprehensive training programs. We can help professors
              integrate AI into their curriculum, ensuring students graduate
              with the skills needed to thrive in the AI-driven workforce.
            </p>
          </div>
          <div>
            <p className="text-lg text-black">
              <span className="inline-block text-green-600 mr-2">✔️</span>
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
    </section>
  );
};

export default OurServicesInfo;
