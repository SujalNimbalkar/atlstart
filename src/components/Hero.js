import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#C7C644] to-[#8A8A46] text-white p-20 flex flex-col lg:flex-row items-center rounded-bl-3xl rounded-br-3xl font-syne">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-4">
          Transform Talent With{" "}
          <span className="underline decoration-[#E2DF0B] decoration-8">
            AltStart
          </span>
        </h1>
        <p className="text-s mb-6">
          AI is revolutionizing teamwork! It unlocks growth, refines customer
          experiences, and boosts retention. AltStart now to empower your talent
          and propel your teams to excellence with AI!
        </p>
        <div className="bg-white text-black flex items-center justify-between rounded-full shadow-lg p-2 max-w-md mx-auto lg:mx-0">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-l-full focus:outline-none flex-grow"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Next
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
          <div className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">
              3+ Years Of Excellence
            </h3>
            <p className="text-sm mb-4">Feb 2023</p>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/3cb7/4952/578e42cc97c3a4ac7dab763ad2a315c8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJkRHRgGhNarDgPGvOFB8PbSXmMuJi8tfB1w3B40EykJ9k921~7oSbLWxRskj-R65p8sKtbEDjZN2wRSW1ttW45BnpQTuA-Xc9Op10PdqQ1qnjtmBRcE~Z1fMjgcUK-mx6fcJ9PATBY-OrSgT7FnQXGLh0XGeB6q94JiulvJzXrBrlDZ9e6U6MpquOeQHZyZGiYD6~02-6emCBt~ySp8AEuOgU~BfC7mOCnKughs0LwqP7E7Rv21Yjn9qpJ2UIJRcJliX~jJzzu1LaMMpnuQgRoGMh~MBgCzBKjt0FlY8hGkb3NmXbW1VZAxYsOoHUOgVPUF3IPsSkDcOqOYKrt7BQ__"
                alt="Graph"
              />
            </div>
          </div>
          <div className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">
              Collaboration With 30+ Colleges And Companies
            </h3>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/acda/5bbc/af648659a300b3cde8735c7538085562?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qHtMRsAIucCxovK3x8tdgENePEvAR3Hb4pI3mswM-9ygx7V9R51mVPb85bszMOSCmaiEzpKdSawZCjROinmVa9gEpeQ0ySdnyo83TIHG4rjbS7dy5VTrEMQ9KH1P2qgxDHk2RtZnbC09LXrJnTJK8hwpPNK2OA77Rj0-B5LTAbX4NF309QJO8Wxz91i4XFT0FcBeiu0I5cH-WipNnLEEFWWEmVy0atRCVhFgaZSDgCGJNoPktV~l40gWpbtIGxjLigRr7HEJHCWf6IPB-kEVbwXLZiR7jZZ0O8XZG05D3ny1pmrgVVUPckfskJ~7V2-EnrfMaT1yGNsqugaLPsr7Sg__"
                alt="Bar Chart"
              />
            </div>
          </div>
          <div className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/af6c/3f0e/64d3d75c47a15d18373790a1480b19a8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPZ3uXsx7mEEi-9mgPyWC9JOuDuyXRmxDSuXi5y6JGm5hlAR01DCAU6T7K1x41bCaWoIyFx~8NHeuSFrS74dLTV-KKuM44G7trcBuQGXFSD35uZJLnqMATy2VY3sGzQXeHDcI~wTfFpKHKks0IMGyVW1wN82xZmmE5QJ5ald5nlweJkaAeX8aisy6QK89m1sGcfigMArI2CsuHwxyibJzuLSQ-L4mVEsV3jp7AJNbHLZZpuk1mjo987FAGYPpVxFTtAyq4sy46eF9azLiRi85mPFpdKkKYHmhLT58UQhR7v1~I5b5eGWz~0fgpLg8kPeqfy7oQfiqgFYWsvMqeuSqQ__"
                alt="Pie Chart"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
