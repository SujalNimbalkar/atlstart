import React from "react";
import { ReactComponent as RocketIcon } from "../assets/rocket-icon.svg";

const Testimonials = () => {
  return (
    <section className="bg-white py-16 font-syne">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
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
          <div className="md:w-1/2">
            <blockquote className="text-xl italic font-medium text-gray-700">
              “Working with Altstart team provided us with the expert guidance
              we needed to take our firm’s marketing, in the digital realm and
              beyond, to another level. Early in the project, we threw a
              curveball in that we decided to refreshing our brand and launching
              a more robust digital presence.”
            </blockquote>
            <p className="text-right mt-4 font-medium">Edward Kennedy</p>
            <p className="text-right text-gray-600">
              Director, Client Experience
            </p>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
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
              <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
