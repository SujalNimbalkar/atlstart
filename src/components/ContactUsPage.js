import React from "react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyImbGiYGdsFJk9ECYpdf0llY4elF-cHaYcdPuivuElAWgwxLDPaITGAGlZie03zZ0j/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-[#F0ED00] from-27%  to-[#f7f7f5] to-7% min-h-screen flex flex-col justify-center items-center py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6 p-8">
          <h3 className="text-sm font-medium text-black">CONTACT US</h3>
          <h1 className="text-5xl font-bold text-black">
            We are here to help you grow
          </h1>
          <p className="text-lg text-black leading-relaxed">
            Feel free to reach out to us through your preferred method of
            contact. We are eager to connect with you and explore how our team
            can contribute to your success.
          </p>
          <div className="mt-8">
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">Phone Number</h3>
                <p className="text-xl">96754 45346</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Email Address</h3>
                <p className="text-xl">info@altstart.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form className="form space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              name="Name"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Company/University Name"
              name="CompanyUniversityName"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="PhoneNumber"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="What can we help you with?"
              name="Help"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
            >
              GET IN TOUCH
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
