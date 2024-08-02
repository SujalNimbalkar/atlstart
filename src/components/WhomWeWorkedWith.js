import React from "react";
import MarqueeItem from "./InfinteSlider";
import logo1 from "../assets/logo_1.png";
import logo2 from "../assets/logo_2.png";
import logo3 from "../assets/logo_3.png";
import logo4 from "../assets/logo_4.png";
import logo5 from "../assets/logo_5.png";
import logo6 from "../assets/logo_6.png";
import logo7 from "../assets/logo_7.png";
import logo8 from "../assets/logo_8.png";

const Marquee = () => {
  const upperMarquee = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <section className="bg-white py-16 font-syne">
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
