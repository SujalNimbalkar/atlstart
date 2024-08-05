import React from "react";
import Footer from "./Footer";
import ConsultationCall from "./ConsultationCall";
function OurServicesPage() {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <p>Details about our services will go here.</p>
      </div>
      <ConsultationCall />
      <Footer />
    </div>
  );
}

export default OurServicesPage;
