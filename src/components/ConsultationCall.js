import React from "react";
import { ReactComponent as TickIcon } from "../assets/tick-icon.svg";
import { PopupButton } from "react-calendly";
// import { ReactComponent as StarIcon } from "../assets/star-icon.svg";

const ConsultationCall = () => {
  return (
    <section className="max-w-7xl mx-auto  my-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFEAF] p-8 rounded-[40px] shadow-lg font-syne">
      {/* <div className="flex flex-col justify-center items-center">
        <StarIcon />
      </div> */}
      <div className="flex flex-col justify-center gap-2 max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-4">
          Get your free Consultation Call
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <TickIcon />
            <span className="text-sm">30-min strategy call</span>
          </div>
          <div className="flex items-center space-x-2">
            <TickIcon />
            <span className="text-sm">In-depth audit</span>
          </div>
          <div className="flex items-center space-x-2">
            <TickIcon />
            <span className="text-sm">Growth Roadmap</span>
          </div>
        </div>
      </div>
      <div className="my-8 flex items-center justify-between bg-white rounded-[40px] shadow-md">
        {/* <input
          type="email"
          placeholder="Email"
          className="w-full lg:w-[65%] p-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="px-8 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
        >
          CONNECT
        </button> */}
        <PopupButton
          url="https://calendly.com/altstart-contact"
          className="Appmx-auto flex items-center justify-center text-center bg-white text-black px-8 py-8 rounded-3xl border-black focus:outline-none focus:ring focus:ring-slate-300 flex-grow hover:bg-slate-200"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Click here to schedule!"
        />
      </div>
    </section>
    // App mx-auto flex items-center bg-black text-white px-8 py-8 rounded-3xl border-black
  );
};

export default ConsultationCall;
