import React from "react";
// import heroImage from "../assets/our-services-hero.png";
import heroImage2 from "../assets/our-serv.png";
const OurServicesPageHero = () => {
  return (
    <section className="min-h-[500px] md:min-h-[669px] flex items-center justify-center bg-gradient-to-b from-yellow-300 via-yellow-100 to-white p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-xs md:text-sm font-syne font-medium text-gray-600">
            OUR SERVICES
          </h3>
          <h1 className="text-3xl md:text-5xl font-syne font-bold text-black my-4">
            Solutions for business growth
          </h1>
          <p className="text-xs md:text-base font-syne text-gray-800 mb-6 md:mb-8">
            Here's how AltStart ignites innovation and drives success for you:
          </p>
          {/* <button
            onClick={() =>
              document
                .getElementById("our-services-info")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition font-syne"
          >
            GET A FREE AUDIT
          </button> */}
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src={heroImage2}
            alt="Service Illustration"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServicesPageHero;
