// import React from "react";
// import { ReactComponent as RocketIcon } from "../assets/rocket-icon.svg";

// const Testimonials = () => {
//   return (
//     <section className="bg-white py-16 font-syne">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <h3 className="text-3xl font-bold mb-4">
//               What do people have to say about us?
//             </h3>
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <div className="flex items-center">
//                 <RocketIcon />
//                 <div className="ml-4">
//                   <p className="text-2xl font-bold">98%</p>
//                   <p className="text-gray-600">Average client satisfaction</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2">
//             <blockquote className="text-xl italic font-medium text-gray-700">
//               “Working with Altstart team provided us with the expert guidance
//               we needed to take our firm’s marketing, in the digital realm and
//               beyond, to another level. Early in the project, we threw a
//               curveball in that we decided to refreshing our brand and launching
//               a more robust digital presence.”
//             </blockquote>
//             <p className="text-right mt-4 font-medium">Edward Kennedy</p>
//             <p className="text-right text-gray-600">
//               Director, Client Experience
//             </p>
//             <div className="flex justify-end space-x-4 mt-4">
//               <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
//                 <span className="sr-only">Previous</span>
//                 <svg
//                   className="h-6 w-6 text-black"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 19l-7-7 7-7"
//                   ></path>
//                 </svg>
//               </button>
//               <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
//                 <span className="sr-only">Next</span>
//                 <svg
//                   className="h-6 w-6 text-black"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";
import { ReactComponent as RocketIcon } from "../assets/rocket-icon.svg";
import profileImage from "../assets/profile-image.svg"; // Replace with the actual path to the profile image

const testimonials = [
  {
    quote:
      "Codeate has been project managing the build of our AI based product - VIKRAM and we are absolutely delighted by their commitment for the product. Right from hiring the best talent to planning the schedules and taking constant updates from the developers as well as providing their unique perspectives - their approach has been systematic and result oriented.",

    name: "@ Girish Na",
    position: "Arthlex Research",
    image: profileImage,
  },
  {
    quote:
      "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad that we at upanyas decided to work with you.",
    name: "@ Aman",
    position: "Team Upanyaas",
    image: profileImage,
  },
  {
    quote:
      "Working with Codeate was very amazing and informative. Gaming Geeks collaborated with Codeate on the Web Game Dev Bootcamp that took place from February 24 to March 2, 2022.",
    name: "@ Gurtaran Singh",
    position: "Gaming Geeks",
    image: profileImage,
  },
  {
    quote:
      "My experience with Codeate have been amazing and the founders are so cool and they have helped us grow in our domain in the ecosystem they provide.",
    name: "@ Aaditya",
    position: "Befikra Community",
    image: profileImage,
  },
  {
    quote:
      "Hello everyone, I'm Vikas Rai. Recently I attended TezIndia Blockchain Bootcamp 1.0. The Bootcamp was amazing. I didn't have any previous knowledge about Web 3.0.",
    name: "@ Vikas Rai",
    position: "Student",
    image: profileImage,
  },
  {
    quote:
      "Codeate has made my journey as a first time founder so easy. I could completely concentrate on business improvement with Codeate on my side as project handlers. They always had time for any discussion/clarification. So grateful to find them. I defenitely recommend.",
    name: "@ Karthik Karamsetty",
    position: "FinoBird",
    image: profileImage,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const { quote, name, position, image } = testimonials[currentTestimonial];

  return (
    <section className="bg-white py-16 font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">
              What do people have to say about us?
            </h3>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center">
                <RocketIcon />
                <div className="ml-4">
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-gray-600">Average client satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-58 flex flex-col justify-between">
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
            <blockquote className="text-xl italic font-medium text-gray-700 h-full">
              “{quote}”
            </blockquote>
            <div className="flex items-center justify-start mt-4">
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-right font-medium">{name}</p>
                <p className="text-right text-gray-600">{position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
