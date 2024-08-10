import React from "react";
import OurServicesPageHero from "./OurServicePageHero";
import OurServicesInfo from "./OurServiceInfo";
// import Footer from "./Footer";
import ConsultationCall from "./ConsultationCall";
import Marquee from "./WhomWeWorkedWith";

function OurServicesPage() {
  return (
    <div>
      <OurServicesPageHero />
      <OurServicesInfo />
      <Marquee />
      <Marquee />
      <ConsultationCall />
      {/* <Footer /> */}
    </div>
  );
}

export default OurServicesPage;
