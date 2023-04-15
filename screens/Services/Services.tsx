import React from "react";
import { motion } from "framer-motion";

import text from "@/utils/text";
import { ComponentRow1, ComponentRow2, ComponentRow3 } from "./components";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const Services: React.FC = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="text-white flex justify-center xl:mx-[8rem] xsm:mx-6 mt-10 md:mx-[4rem]"
    >
      <motion.div variants={fadeInUp} className="flex-col self-start w-full">
        <span className="xl: text-8xl xsm:text-6xl font-Inter font-bold">
          {text.services}
        </span>
        <div className="flex flex-col mb-10">
          <ComponentRow1 />
          <ComponentRow2 />
          <ComponentRow3 />
        </div>
      </motion.div>
    </motion.div>
  );
};
