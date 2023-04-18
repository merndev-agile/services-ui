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
      className="text-white flex xl:mx-[4rem] xl:mt-[60px] xsm:mx-6 md:mx-[4rem] xsm:mt-[60px] 2xl:mt-[60px] 2xl:mx-[315px] lg:mt-[60px] lg:mx-[8rem]" 
    >
      <motion.div variants={fadeInUp} className="flex-col self-start">
        <span className="text-[120px] xsm:text-[45px] font-Inter font-bold 2xl:text-[120px]">
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
