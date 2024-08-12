import React from "react";
import { ReactComponent as FireIcon } from "../assets/fire-icon.svg"; // Replace with actual SVG imports
import { ReactComponent as ToolsIcon } from "../assets/tools-icon.svg"; // Replace with actual SVG imports
import { ReactComponent as EmpowerIcon } from "../assets/empower-icon.svg"; // Replace with actual SVG imports

const OurPhilosophyAndStory = () => {
  return (
    <section className="bg-white py-16 font-synemax-w-7xl mx-auto p-8  font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Our Philosophy Section */}
        <h2 className="text-4xl font-bold mb-4">Our Philosophy</h2>
        <p className="text-lg text-gray-700 mb-12">
          We weren't born from the traditional mold. We saw the limitations of
          the status quo, the rote training programs that left talent untapped
          and businesses stagnant. So, we took a different approach, an
          'AltStart' approach.
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <FireIcon className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Ignite A Fire Of Innovation
            </h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ToolsIcon className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Cultivate A Passion For Cutting-Edge Tools
            </h3>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <EmpowerIcon className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">
              Empower Workforce To Become AI Alchemists
            </h3>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mx-16 bg-gradient-to-r from-[#C7C644] to-[#8A8A46] py-8 rounded-[40px] shadow-lg font-syne">
        <div className="px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Our story isn't just about us, though. It's about yours. It's about
            taking your organization from 'same old, same old' to a place of
            limitless potential. We'll be your partners in this journey, guiding
            you through customized training programs that unlock the hidden
            genius within your teams.
          </p>
          {/* Add your decorative elements */}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophyAndStory;
