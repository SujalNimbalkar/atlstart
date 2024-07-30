import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import AboutAltStart from "./components/AboutAltStart";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <AboutAltStart />
      {/* <Features />
      <About />
      <AIWorkforce />
      <Consultation />
      <Partners />
      <Testimonials />
      <Footer /> */}
    </div>
  );
}

export default App;
