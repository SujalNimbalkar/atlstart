import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    CompanyUniversityName: "",
    PhoneNumber: "",
    Help: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // Prevent the default form submission

    const formEle = document.querySelector("form");
    const formDataObj = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyImbGiYGdsFJk9ECYpdf0llY4elF-cHaYcdPuivuElAWgwxLDPaITGAGlZie03zZ0j/exec",
      {
        method: "POST",
        body: formDataObj,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result === "success") {
          setMessage("Your data has been submitted successfully!");
          setFormData({
            Name: "",
            Email: "",
            CompanyUniversityName: "",
            PhoneNumber: "",
            Help: "",
          });
        } else {
          setMessage(
            "There was an error submitting your data. Please try again."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage(
          "There was an error submitting your data. Please try again."
        );
      });
  };

  return (
    <div className="bg-gradient-to-b from-yellow-300 via-yellow-100 to-white min-h-screen flex flex-col justify-center items-center py-16">
      <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-40">
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
                <p className="text-xl">+91 91825 67700</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Email Address</h3>
                <p className="text-xl">altstart.contact@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-6 p-8">
          <div className="bg-white rounded-lg space-y-6 p-8 shadow-lg">
            <form className="form space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Company/University Name"
                name="CompanyUniversityName"
                value={formData.CompanyUniversityName}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="What can we help you with?"
                name="Help"
                value={formData.Help}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800"
              >
                GET IN TOUCH
              </button>
            </form>
            {message && (
              <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-lg">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
