// import React from "react";
// import MarqueeItem from "./InfinteSlider";
// import logo1 from "../assets/Images/portfolio/amity.png";
// import logo2 from "../assets/Images//portfolio/c-clap-2.png";
// // import logo3 from "../assets/Images/portfolio/c-clap.png";
// import logo4 from "../assets/Images/portfolio/geeks.png";
// import logo5 from "../assets/Images/portfolio/lm-basket.png";
// import logo6 from "../assets/Images/portfolio/logo.png";
// import logo7 from "../assets/Images/portfolio/logo_1.png";
// import logo8 from "../assets/Images/portfolio/logo_2.png";
// import logo9 from "../assets/Images/portfolio/logo_3.png";
// import logo10 from "../assets/Images/portfolio/logo_4.png";
// import logo11 from "../assets/Images/portfolio/logo_5.png";
// import logo12 from "../assets/Images/portfolio/logo_6.png";
// import logo13 from "../assets/Images/portfolio/logo_7.png";
// import logo14 from "../assets/Images/portfolio/logo_8.png";
// import logo15 from "../assets/Images/portfolio/tech.png";
// import logo16 from "../assets/Images/portfolio/upanyas.png";
// import logo17 from "../assets/Images/portfolio/ways.png";

// const Partner = () => {
//   const upperMarquee = [
//     { src: logo1, name: "Amity Coding Club" },
//     { src: logo2, name: "Career Clap" },
//     // { src: logo3, name: "Befikra" },
//     { src: logo4, name: "Gaming Geeks" },
//     { src: logo5, name: "LM Basket" },
//     { src: logo6, name: "company" },
//     { src: logo7, name: "Deloitte" },
//     { src: logo8, name: "Amazon" },
//     { src: logo9, name: "Paytm" },
//     { src: logo10, name: "Cisco" },
//     { src: logo11, name: "TCS" },
//     { src: logo12, name: "Hitachi" },
//     { src: logo13, name: "Cognizant" },
//     { src: logo14, name: "Tezos India" },
//     { src: logo15, name: "TechDirective" },
//     { src: logo16, name: "Upanyas" },
//     { src: logo17, name: "ThoughtWays" },
//   ];

//   return (
//     <section className="bg-white py-16 font-syne overflow-x-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <h2 className="text-4xl font-bold mb-8">Partners</h2>
//         <div className="container mx-auto ">
//           <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partner;
import React from "react";
import MarqueeItem from "./InfinteSlider";
import logo1 from "../assets/Images/companies-partners/1.jpeg";
import logo2 from "../assets/Images/companies-partners/2.png";
import logo3 from "../assets/Images/companies-partners/3.jpeg";
import logo4 from "../assets/Images/companies-partners/4.png";
import logo5 from "../assets/Images/companies-partners/5.png";
import logo6 from "../assets/Images/companies-partners/6.jpg";
import logo7 from "../assets/Images/companies-partners/7.jpeg";
import logo8 from "../assets/Images/companies-partners/8.jpeg";
import logo9 from "../assets/Images/companies-partners/9.jpg";
import logo10 from "../assets/Images/companies-partners/10.jpeg";
import logo11 from "../assets/Images/companies-partners/11.jpeg";
import logo12 from "../assets/Images/companies-partners/12.jpeg";
import logo13 from "../assets/Images/companies-partners/13.jpeg";
import logo14 from "../assets/Images/companies-partners/14.jpeg";
import logo15 from "../assets/Images/companies-partners/15.jpeg";
import logo16 from "../assets/Images/companies-partners/16.png";
import logo17 from "../assets/Images/companies-partners/17.png";
import logo18 from "../assets/Images/companies-partners/18.png";

const Companies = () => {
  const upperMarquee = [
    { src: logo6, name: "Arthlex Research" },
    { src: logo1, name: "BhavyaSampada" },
    { src: logo16, name: "Career Clap" },
    { src: logo2, name: "Cuvette" },
    { src: logo5, name: "DefiVerse" },
    { src: logo3, name: "FinoBird" },
    { src: logo4, name: "Give My Certificate" },
    { src: logo17, name: "LM Basket" },
    { src: logo7, name: "Luster" },
    { src: logo8, name: "Padhega Bharat" },
    { src: logo9, name: "MetaWork" },
    { src: logo13, name: "Tezos India" },
    { src: logo15, name: "Thinkgroupy" },
    { src: logo10, name: "Threeway Studio" },
    { src: logo14, name: "Trikon" },
    { src: logo18, name: "Upanyas" },
    { src: logo11, name: "Vikram" },
    { src: logo12, name: "Vvarin" },
  ];

  return (
    <section className="bg-white py-16 font-syne overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Company Partners</h2>
        <div className="container mx-auto ">
          <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
        </div>
      </div>
    </section>
  );
};

export default Companies;
