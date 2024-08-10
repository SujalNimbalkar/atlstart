import React from "react";
import AboutAltStart from "./AboutAltStart";
// import Footer from "./Footer";
import ConsultationCall from "./ConsultationCall";

function AboutUsPage() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>Details about our services will go here.</p>
      </div>
      <AboutAltStart />
      <ConsultationCall />
      {/* <Footer /> */}
    </div>
  );
}

export default AboutUsPage;
