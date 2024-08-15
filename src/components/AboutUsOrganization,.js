import React from "react";
import Image from "../assets/organizational-behavior.png";

//consist para of organizational behavior and img

const OrganizationalExcellence = () => {
  return (
    <section id="about-us-info" className="bg-white py-16 font-syne">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Welcome to a New Era of{" "}
          <span className="underline decoration-[#E2DF0B] decoration-4 md:decoration-8">
            Organizational Excellence
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-700 mb-8 md:mb-12">
          Imagine a world where your organization operates on a completely
          different level. A world where every team member is an 'alternative
          starter,' not just going through the motions, but actively sparking
          innovation and driving growth. That's the world AltStart helps you
          build.
        </p>
        <div className="flex justify-center">
          <img
            src={Image}
            alt="Team collaboration"
            className="rounded-xl md:rounded-[40px] shadow-lg w-full max-w-3xl md:max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationalExcellence;
