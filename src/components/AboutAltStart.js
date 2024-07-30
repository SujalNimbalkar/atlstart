import React from "react";
import { ReactComponent as Achieve } from "../assets/achieve.svg";

const AboutAltStart = () => {
  return (
    <section className="bg-[#F7F7FA] text-black py-20 font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="text-center mb-12">
            <p className="text-gray-600 uppercase tracking-wider mb-2">
              About AltStart
            </p>
            <h2 className="text-4xl font-bold text-black">What is AltStart?</h2>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg mb-4">
              <span className="font-bold">AltStart</span> is your launchpad to
              an AI-powered future. We ignite a passion for understanding and
              utilizing AI within your workforce, transforming them into
              "alternative starters" who spark innovation and drive growth. Our
              customized training programs unlock the hidden genius within your
              teams, empowering them to become AI alchemists and propel your
              organization to limitless potential.
            </p>
            <a
              href="/"
              className="text-black font-normal underline hover:no-underline "
              style={{
                textDecorationColor: "#C7C644",
                textDecorationThickness: "1.5px",
              }}
            >
              More about our unique approach
            </a>
          </div>
        </div>
        <Achieve className="h-[116px] w-[1248px]" />
      </div>
    </section>
  );
};

export default AboutAltStart;
