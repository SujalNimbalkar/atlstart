import React from "react";
import { ReactComponent as TickIcon } from "../assets/tick-icon.svg";
import { ReactComponent as StarIcon } from "../assets/star-icon.svg";

const ConsultationCall = () => {
  return (
    <section className="bg-[#FFFEAF] py-16 font-syne">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="relative mb-8">
          <StarIcon className="absolute left-0 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-black" />
          <h2 className="text-3xl font-bold mb-4">
            Get your free Consultation Call
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-2">
              <TickIcon />
              <span className="text-lg">30-min strategy call</span>
            </div>
            <div className="flex items-center space-x-2">
              <TickIcon />
              <span className="text-lg">In-depth audit</span>
            </div>
            <div className="flex items-center space-x-2">
              <TickIcon />
              <span className="text-lg">Growth Roadmap</span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <input
            type="email"
            placeholder="Email"
            className="w-full lg:w-1/2 p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-black text-white p-4 rounded-full shadow-md ml-4 hover:bg-gray-800">
            Connect with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCall;
