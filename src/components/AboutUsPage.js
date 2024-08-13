import React from "react";
import AboutAltStart from "./AboutAltStart";
import AboutUsPageHero from "./AboutUsPageHero";
import ConsultationCall from "./ConsultationCall";
import OrganizationalExcellence from "./AboutUsOrganization,";
import OurPhilosophyAndStory from "./AboutUsPhilosophy";

function AboutUsPage() {
  return (
    <div>
      <AboutUsPageHero />
      <OrganizationalExcellence />
      <OurPhilosophyAndStory />
      <AboutAltStart />
      <ConsultationCall />
    </div>
  );
}

export default AboutUsPage;
