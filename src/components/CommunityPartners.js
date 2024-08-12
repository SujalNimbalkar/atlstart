import React from "react";
import MarqueeItem from "./InfinteSlider";
import logo1 from "../assets/Images/community-partners/1.jpeg";
import logo2 from "../assets/Images/community-partners/2.jpeg";
import logo3 from "../assets/Images/community-partners/3.jpeg";
import logo4 from "../assets/Images/community-partners/4.jpeg";
import logo5 from "../assets/Images/community-partners/5.jpeg";
import logo6 from "../assets/Images/community-partners/6.jpeg";
import logo7 from "../assets/Images/community-partners/7.jpeg";
import logo8 from "../assets/Images/community-partners/8.jpeg";
import logo9 from "../assets/Images/community-partners/9.jpeg";
import logo10 from "../assets/Images/community-partners/10.jpeg";
import logo11 from "../assets/Images/community-partners/11.jpeg";
import logo12 from "../assets/Images/community-partners/12.png";
import logo13 from "../assets/Images/community-partners/13.png";
import logo14 from "../assets/Images/community-partners/14.jpeg";

const Community = () => {
  const upperMarquee = [
    { src: logo1, name: "Amity Coding Club" },
    { src: logo2, name: "Algocs" },
    { src: logo3, name: "Befikra" },
    { src: logo4, name: "Blockchain Club SRM" },
    { src: logo5, name: "ChatraShala" },
    { src: logo6, name: "Codedu" },
    { src: logo7, name: "Gaming Geeks" },
    { src: logo8, name: "Mentorle" },
    { src: logo9, name: "Mighty IT Explorer" },
    { src: logo10, name: "She Builds" },
    { src: logo11, name: "SOS Tech" },
    { src: logo12, name: "TechDirective" },
    { src: logo13, name: "ThoughtWays" },
    { src: logo14, name: "Web3 Panjab" },
  ];

  return (
    <section className="bg-white py-16 font-syne overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Community Partners</h2>
        <div className="container mx-auto ">
          <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
        </div>
      </div>
    </section>
  );
};

export default Community;
