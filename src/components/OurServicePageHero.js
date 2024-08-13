import React from "react";
import heroImage from "../assets/our-services-hero.png";
const OurServicesPageHero = () => {
  return (
    <section className="min-h-[669px] flex items-center justify-center bg-gradient-to-b from-yellow-300 via-yellow-100 to-white p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-syne font-medium text-gray-600">
            OUR SERVICES
          </h3>
          <h1 className="text-5xl font-syne font-bold text-black my-4">
            Solutions for business growth
          </h1>
          <p className="text-s font-syne text-gray-800 mb-8">
            Here's how AltStart ignites innovation and drives success for you:
          </p>
          <button
            onClick={() =>
              document
                .getElementById("our-services-info")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition font-syne"
          >
            GET A FREE AUDIT
          </button>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="bg-white  rounded-lg">
            <img
              src={heroImage}
              alt="Service Illustration"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesPageHero;
