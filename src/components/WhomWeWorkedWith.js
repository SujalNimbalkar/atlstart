import React from "react";
import MarqueeItem from "./InfinteSlider";
import logo1 from "../assets/Images/companies-partners/1.jpeg";
import logo2 from "../assets/Images/companies-partners/2.png";
import logo3 from "../assets/Images/companies-partners/3.jpeg";
import logo4 from "../assets/Images/companies-partners/4.png";
import logo5 from "../assets/Images/companies-partners/5.png";
import logo6 from "../assets/Images/companies-partners/6.jpg";
import logo7 from "../assets/Images/companies-partners/7.jpeg";
import logo8 from "../assets/Images/companies-partners/8.jpeg";
import logo9 from "../assets/Images/companies-partners/9.jpg";
import logo10 from "../assets/Images/companies-partners/10.jpeg";
import logo11 from "../assets/Images/companies-partners/11.jpeg";
import logo12 from "../assets/Images/companies-partners/12.jpeg";
import logo13 from "../assets/Images/companies-partners/13.jpeg";
import logo14 from "../assets/Images/companies-partners/14.jpeg";
import logo15 from "../assets/Images/companies-partners/15.jpeg";
import logo16 from "../assets/Images/companies-partners/16.png";
import logo17 from "../assets/Images/companies-partners/17.png";
import logo18 from "../assets/Images/companies-partners/18.png";
import logo_1 from "../assets/Images/community-partners/1.jpeg";
import logo_2 from "../assets/Images/community-partners/2.jpeg";
import logo_3 from "../assets/Images/community-partners/3.jpeg";
import logo_4 from "../assets/Images/community-partners/4.jpeg";
import logo_5 from "../assets/Images/community-partners/5.jpeg";
import logo_6 from "../assets/Images/community-partners/6.jpeg";
import logo_7 from "../assets/Images/community-partners/7.jpeg";
import logo_8 from "../assets/Images/community-partners/8.jpeg";
import logo_9 from "../assets/Images/community-partners/9.jpeg";
import logo_10 from "../assets/Images/community-partners/10.jpeg";
import logo_11 from "../assets/Images/community-partners/11.jpeg";
import logo_12 from "../assets/Images/community-partners/12.png";
import logo_13 from "../assets/Images/community-partners/13.png";
import logo_14 from "../assets/Images/community-partners/14.jpeg";

const Marquee = () => {
  const upperMarquee = [
    { src: logo6, name: "Arthlex Research" },
    { src: logo1, name: "BhavyaSampada" },
    { src: logo16, name: "Career Clap" },
    { src: logo2, name: "Cuvette" },
    { src: logo5, name: "DefiVerse" },
    { src: logo3, name: "FinoBird" },
    { src: logo4, name: "Give My Certificate" },
    { src: logo17, name: "LM Basket" },
    { src: logo7, name: "Luster" },
    { src: logo8, name: "Padhega Bharat" },
    { src: logo9, name: "MetaWork" },
    { src: logo13, name: "Tezos India" },
    { src: logo15, name: "Thinkgroupy" },
    { src: logo10, name: "Threeway Studio" },
    { src: logo14, name: "Trikon" },
    { src: logo18, name: "Upanyas" },
    { src: logo11, name: "Vikram" },
    { src: logo12, name: "Vvarin" },
    { src: logo_1, name: "Amity Coding Club" },
    { src: logo_2, name: "Algocs" },
    { src: logo_3, name: "Befikra" },
    { src: logo_4, name: "Blockchain Club SRM" },
    { src: logo_5, name: "ChatraShala" },
    { src: logo_6, name: "Codedu" },
    { src: logo_7, name: "Gaming Geeks" },
    { src: logo_8, name: "Mentorle" },
    { src: logo_9, name: "Mighty IT Explorer" },
    { src: logo_10, name: "She Builds" },
    { src: logo_11, name: "SOS Tech" },
    { src: logo_12, name: "TechDirective" },
    { src: logo_13, name: "ThoughtWays" },
    { src: logo_14, name: "Web3 Panjab" },
  ];

  return (
    <section className="bg-white py-16 font-syne overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Whom we have worked with?</h2>
        <div className="container mx-auto ">
          <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
        </div>
      </div>
    </section>
  );
};

export default Marquee;
