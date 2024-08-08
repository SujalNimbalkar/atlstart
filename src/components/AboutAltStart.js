import React from "react";
import CountUp from "react-countup";
// import { ReactComponent as Achieve } from "../assets/achieve.svg";
import { ReactComponent as Community } from "../assets/community-icon.svg";
import { ReactComponent as Companies } from "../assets/companies-icon.svg";
import { ReactComponent as Projects } from "../assets/projects-icon.svg";
import { ReactComponent as Opportunities } from "../assets/opportunities-icon.svg";

const AboutAltStart = () => {
  return (
    <section className="bg-[#F7F7FA] text-black py-20 font-syne">
      <div className="max-w-7xl mx-auto px-6 ">
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
        {/* <Achieve className="h-[116px] w-[1248px]" /> */}
        <div className="py-8 bg-gradient-to-b from-[#FFFEAF] to-[#F0ED00] rounded-[22px]">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-around text-center">
            {/* Item 1 */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-200 rounded-full">
                <Community className="text-yellow-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  <CountUp
                    start={0}
                    end={5000}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                </h3>
                <p className="text-lg font-medium text-black">
                  Community members
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-200 rounded-full">
                <Opportunities className="text-yellow-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  <CountUp
                    start={0}
                    end={1000}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                </h3>
                <p className="text-lg font-medium text-black">
                  Opportunities created
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-200 rounded-full">
                <Projects className="text-yellow-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  <CountUp
                    start={0}
                    end={100}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                </h3>
                <p className="text-lg font-medium text-black">Projects Build</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-200 rounded-full">
                <Companies className="text-yellow-600 text-3xl" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-black">
                  <CountUp
                    start={0}
                    end={30}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                </h3>
                <p className="text-lg font-medium text-black">
                  Companies and Partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAltStart;
