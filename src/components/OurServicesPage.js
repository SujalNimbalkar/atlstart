import React from "react";
import OurServicesPageHero from "./OurServicePageHero";
import OurServicesInfo from "./OurServiceInfo";
import Community from "./CommunityPartners";
import ConsultationCall from "./ConsultationCall";
import Companies from "./CompaniesPartners";
// import Marquee from "./WhomWeWorkedWith";
function OurServicesPage() {
  return (
    <div>
      <OurServicesPageHero />
      <OurServicesInfo />
      <Community />
      {/* <Marquee /> */}
      <Companies />
      <ConsultationCall />
    </div>
  );
}

export default OurServicesPage;
