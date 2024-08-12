import React from "react";
import Image from "../assets/organizational-behavior.png";

const OrganizationalExcellence = () => {
  return (
    <section className="bg-white py-16 font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Welcome to a New Era of{" "}
          <span className="underline decoration-[#E2DF0B] decoration-8">
            Organizational Excellence
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-12">
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
            className="rounded-[40px] shadow-lg w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizationalExcellence;
