import React from "react";
import { motion } from "framer-motion";
//js for infinte slider
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
            <img
              className="h-40 w-56 pr-20"
              src={image}
              key={index}
              alt="Company logo"
            />
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
            <img
              className="h-40 w-56 pr-20"
              src={image}
              key={index}
              alt="Company logo"
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
