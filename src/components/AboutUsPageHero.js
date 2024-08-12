import React from "react";
import image from "../assets/about-us-hero-section.png";
//min-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40
const AboutUsPageHero = () => {
  return (
    <section className="min-h-[669px] flex items-center justify-center bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-100 p-16 font-syne">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-medium text-gray-600">ABOUT US</h3>
          <h1 className="text-5xl font-bold text-black my-4">
            Ignite Innovation. Drive Growth.
          </h1>
          <p className="text-s text-gray-800 mb-8">
            A world where every team member is an "alternative starter," not
            just going through the motions, but actively sparking innovation and
            driving growth. That's the world AltStart helps you build.
          </p>
          <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
            GET A FREE AUDIT
          </button>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 w-full h-full rounded-lg">
            <img
              src={image} // Replace with actual image URL
              alt="Service Illustration"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-lg">
            <span className="text-blue-600 font-bold">P</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPageHero;
