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

const Marquee = () => {
  const upperMarquee = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
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
