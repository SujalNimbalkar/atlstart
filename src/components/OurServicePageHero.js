import React from "react";
//min-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40
const OurServicesPageHero = () => {
  return (
    <section className="min-h-[669px] flex items-center justify-center bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 p-8">
      <div className="min-w-xl mx-12 grid grid-cols-1 md:grid-cols-2 gap-40">
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-medium text-gray-600">OUR SERVICES</h3>
          <h1 className="text-5xl font-bold text-black my-4">
            Solutions for business growth
          </h1>
          <p className="text-lg text-gray-800 mb-8">
            Here's how AltStart ignites innovation and drives success for you:
          </p>
          <button className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
            GET A FREE AUDIT
          </button>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 w-full h-full rounded-lg">
            <img
              src="https://via.placeholder.com/500" // Replace with actual image URL
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

export default OurServicesPageHero;
