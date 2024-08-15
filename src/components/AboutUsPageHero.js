import React from "react";
import image from "../assets/about-us-hero-section.png";
//min-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40
const AboutUsPageHero = () => {
  return (
    <section className="min-h-[500px] md:min-h-[669px] flex items-center justify-center bg-gradient-to-b from-yellow-300 via-yellow-100 to-white p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-xs md:text-sm font-syne font-medium text-gray-600">
            ABOUT US
          </h3>
          <h1 className="text-3xl md:text-5xl font-syne font-bold text-black my-4">
            Ignite Innovation. Drive Growth.
          </h1>
          <p className="text-xs md:text-base font-syne text-gray-800 mb-6 md:mb-8">
            A world where every team member is an "alternative starter," not
            just going through the motions, but actively sparking innovation and
            driving growth. That's the world AltStart helps you build.
          </p>
          {/* <button
            onClick={() =>
              document
                .getElementById("about-us-info")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
          >
            GET A FREE AUDIT
          </button> */}
        </div>
        <div className="relative flex justify-center items-center">
          <div className="bg-gray-300 w-full h-full rounded-lg">
            <img
              src={image} // Replace with actual image URL
              alt="Service Illustration"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPageHero;
