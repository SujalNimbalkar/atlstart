import React from "react";
// import Navbar from "./Navbar";
import Hero from "./Hero";
import OurServices from "./OurServices";
import AboutAltStart from "./AboutAltStart";
import WhyAltStart from "./WhyAltStart";
import ConsultationCall from "./ConsultationCall";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Marquee from "./WhomWeWorkedWith";
const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <OurServices />
      <AboutAltStart />
      <WhyAltStart />
      <ConsultationCall />

      <Marquee />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
