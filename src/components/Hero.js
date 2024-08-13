import React from "react";
import { PopupButton } from "react-calendly";
import HeroImg1 from "../assets/header_img1_cut.png";
import HeroImg2 from "../assets/header_img2_cut.png";
import HeroImg3 from "../assets/header_img3_cut.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-l from-[#C7C644] to-[#8A8A46] text-white px-20 py-12 flex flex-col lg:flex-row items-center rounded-bl-3xl rounded-br-3xl font-syne">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-syne font-bold mb-4">
          Transform Talent With{" "}
          <span className="underline decoration-[#E2DF0B] decoration-8">
            AltStart
          </span>
        </h1>
        <p className="text-s font-syne mb-6">
          AI is revolutionizing teamwork! It unlocks growth, refines customer
          experiences, and boosts retention. AltStart now to empower your talent
          and propel your teams to excellence with AI!
        </p>
        <div className="bg-white text-black flex items-center justify-between rounded-full shadow-lg p-2 max-w-md mx-auto lg:mx-0">
          {/* <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-l-full focus:outline-none flex-grow"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Next
          </button> */}
          {/* <div className="App p-2 rounded-l-full focus:outline-none flex-grow"> */}
          <PopupButton
            url="https://calendly.com/altstart-contact"
            className="App p2 rounded-full font-syne focus:outline-none focus:ring focus:ring-slate-300 flex-grow hover:bg-slate-200"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root")}
            text="Click here to schedule!"
          />
          {/* </div> */}
        </div>
      </div>

      {/* <div className="px-20 lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <div className="grid grid-rows-2 grid-flow-col gap-4 lg:gap-8">
          <div className="row-span-2 bg-white text-black rounded-xl shadow-lg p-4 flex flex-col items-center">
            <h3 className="text-sm font-syne text-center p-4 mb-2">
              Collaboration With 30+ Colleges And Companies
            </h3>
            <div>
              <img src={HeroImg2} alt="Bar Chart" />
            </div>
          </div>
          <div className="col-auto bg-white text-black rounded-xl shadow-lg p-4 flex flex-col items-center">
            <h3 className="text-sm font-syne text-center p-4 mb-2">
              3+ Years Of Excellence
            </h3>
            <div>
              <img src={HeroImg1} alt="Graph" />
            </div>
          </div>

          <div className="row-auto bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-sm font-syne text-center p-4 mb-2">
              Project We Worked On
            </h3>
            <div>
              <img src={HeroImg3} alt="Pie Chart" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="px-20 lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end gap-4 lg:gap-8">
        <div className="my-auto bg-white text-black rounded-xl shadow-lg p-4 flex flex-col items-center">
          <h3 className="text-sm font-syne text-center p-4 mb-2">
            Collaboration With 30+ Colleges And Companies
          </h3>
          <div>
            <img src={HeroImg2} alt="Bar Chart" />
          </div>
        </div>
        <div className="grid grid-row-1 lg:grid-row-2 gap-4 lg:gap-8">
          <div className="bg-white text-black rounded-xl shadow-lg p-4 flex flex-col items-center">
            <h3 className="text-sm font-syne text-center p-4 mb-2">
              3+ Years Of Excellence
            </h3>
            <div>
              <img src={HeroImg1} alt="Graph" />
            </div>
          </div>
          <div className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-sm font-syne text-center p-4 mb-2">
              Project We Worked On
            </h3>
            <div>
              <img src={HeroImg3} alt="Pie Chart" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
