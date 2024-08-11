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
import logo12 from "../assets/Images/community-partners/12.jpeg";

const Community = () => {
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
        <h2 className="text-4xl font-bold mb-8">Community Partners</h2>
        <div className="container mx-auto ">
          <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
        </div>
      </div>
    </section>
  );
};

export default Community;
