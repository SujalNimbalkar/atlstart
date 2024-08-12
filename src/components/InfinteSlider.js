// import React from "react";
// import { motion } from "framer-motion";
// //js for infinte slider
// const MarqueeItem = ({ images, from, to }) => {
//   return (
//     <div className="flex MyGradient">
//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {images.map((image, index) => {
//           return (
//             <img
//               className="h-40 w-56 pr-20"
//               src={image}
//               key={index}
//               alt="Company logo"
//             />
//           );
//         })}
//       </motion.div>

//       <motion.div
//         initial={{ x: `${from}` }}
//         animate={{ x: `${to}` }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="flex flex-shrink-0"
//       >
//         {images.map((image, index) => {
//           return (
//             <img
//               className="h-40 w-56 pr-20"
//               src={image}
//               key={index}
//               alt="Company logo"
//             />
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default MarqueeItem;
import React from "react";
import { motion } from "framer-motion";

// Example usage of the MarqueeItem component
// const images = [
//   { src: "logo1.png", name: "Company 1" },
//   { src: "logo2.png", name: "Company 2" },
//   // Add more objects here with the logo src and name
// ];

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <div className="flex flex-col items-center " key={index}>
              <img
                className="h-40 w-56 object-contain p-2"
                src={image.src}
                alt={image.name}
              />
              <p className="justify-center text-center text-sm mt-2">
                {image.name}
              </p>
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <img
                className="h-40 w-56 object-contain p-2"
                src={image.src}
                alt={image.name}
              />
              <p className="text-center text-sm mt-2">{image.name}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
